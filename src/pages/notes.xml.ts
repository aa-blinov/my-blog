import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../config';
import { formatDate, formatTime, noteAnchor, sortByDateDesc } from '../utils/date';

function plain(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_`#>]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export async function GET(context: APIContext) {
  const notes = sortByDateDesc((await getCollection('notes')).filter((n) => !n.data.draft));
  return rss({
    title: `${SITE.title} · заметки`,
    description: 'Короткие мысли между статьями',
    site: context.site ?? SITE.url,
    items: notes.map((n) => {
      const text = plain(n.body ?? '');
      const head = text.length > 80 ? text.slice(0, 77).replace(/\s+\S*$/, '') + '…' : text;
      return {
        title: `${formatDate(n.data.date)} ${formatTime(n.data.date)} · ${head}`,
        pubDate: n.data.date,
        description: text,
        link: `/notes/#${noteAnchor(n.data.date)}`,
      };
    }),
    trailingSlash: false,
    customData: '<language>ru</language>',
  });
}
