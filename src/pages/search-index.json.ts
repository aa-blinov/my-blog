import { getCollection } from 'astro:content';
import { isAbout } from '../utils/series';
import { articleText } from '../utils/article-text';

export async function GET() {
  const articles = await getCollection('blog', (entry) => !entry.data.draft && !isAbout(entry.id));
  return Response.json(Object.fromEntries(articles.map((entry) => [
    entry.id, articleText(entry.rendered?.html ?? ''),
  ])));
}
