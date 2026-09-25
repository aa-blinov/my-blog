import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../config';
import { sortByDateDesc } from '../utils/date';

export async function GET(context: APIContext) {
  const posts = sortByDateDesc((await getCollection('blog')).filter((p) => !p.data.draft));
  return rss({
    title: SITE.title,
    description: 'Статьи',
    site: context.site ?? SITE.url,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.summary,
      link: `/blog/${p.id}/`,
    })),
    customData: '<language>ru</language>',
  });
}
