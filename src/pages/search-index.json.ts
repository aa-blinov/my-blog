import { getCollection } from 'astro:content';
import { isAbout } from '../utils/series';

const entities: Record<string, string> = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
};

function articleText(html: string): string {
  return html
    .replace(/<!--[\s\S]*?-->|<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<\/?(?:p|h[1-6]|li|dt|dd|tr|td|th|blockquote|br|summary|div|pre)\b[^>]*>/gi, ' ')
    .replace(/<[^>]*>/g, '')
    .replace(/&(amp|lt|gt|quot|apos|nbsp);/g, (_, name: string) => entities[name])
    .replace(/\s+/g, ' ')
    .trim();
}

export async function GET() {
  const articles = await getCollection('blog', (entry) => !entry.data.draft && !isAbout(entry.id));
  return Response.json(Object.fromEntries(articles.map((entry) => [
    entry.id, articleText(entry.rendered?.html ?? ''),
  ])));
}
