const entities: Record<string, string> = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
};

/** Видимый текст статьи из готового HTML: его ищет поиск, и с него же снимается таблица словоформ. */
export function articleText(html: string): string {
  return html
    .replace(/<!--[\s\S]*?-->|<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<\/?(?:p|h[1-6]|li|dt|dd|tr|td|th|blockquote|br|summary|div|pre)\b[^>]*>/gi, ' ')
    .replace(/<[^>]*>/g, '')
    .replace(/&(amp|lt|gt|quot|apos|nbsp);/g, (_, name: string) => entities[name])
    .replace(/\s+/g, ' ')
    .trim();
}
