interface SummarizableArticle {
  body?: string;
  data: { summary?: string };
}

const unsuitableBlock = /^(?:#{1,6}\s|>\s?|```|~~~|\|)|^<(?:h[1-6]|blockquote|div|figure|ol|pre|table|ul)\b/i;

function plainText(markdown: string): string {
  return markdown
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\[[^\]]*\]/g, '$1')
    .replace(/<[^>]*>/g, ' ')
    .replace(/`{1,3}/g, '')
    .replace(/\[\^[^\]]+\]/g, '')
    .replace(/[*_~]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function firstParagraph(body: string): string {
  for (const block of body.split(/\n\s*\n/)) {
    const trimmed = block.trim();
    if (!trimmed || unsuitableBlock.test(trimmed)) continue;
    const text = plainText(trimmed);
    if (text.length >= 40) return text;
  }
  return '';
}

function shorten(text: string, limit: number): string {
  if (text.length <= limit) return text;
  const end = text.lastIndexOf(' ', limit - 1);
  return `${text.slice(0, end > limit * 0.65 ? end : limit).trimEnd()}…`;
}

export function articleSummary(entry: SummarizableArticle, limit = 180): string {
  const summary = entry.data.summary?.trim() || firstParagraph(entry.body ?? '');
  return shorten(plainText(summary), limit);
}
