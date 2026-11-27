import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../config';
import { sortByDateDesc } from '../utils/date';
import { isAbout, liveFolders, seriesOf } from '../utils/series';

export async function GET(context: APIContext) {
  const published = (await getCollection('blog')).filter((p) => !p.data.draft);
  // Интро раздела без статей — анонс того, чего нет; читатель фида не должен такое получать.
  // Живые разделы и интро серий остаются: они объясняют, что внутри.
  const live = liveFolders(published);
  const folderOf = (id: string) => id.slice(0, id.lastIndexOf('/'));
  const courses = new Set(published.filter((p) => isAbout(p.id) && p.data.seriesKind === 'course').map((p) => folderOf(p.id)));
  const posts = sortByDateDesc(published.filter((p) => {
    if (isAbout(p.id)) return live.has(folderOf(p.id));
    const folder = seriesOf(p);
    return !folder || !courses.has(folder);
  }));
  return rss({
    title: SITE.title,
    description: 'Статьи',
    site: context.site ?? SITE.url,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.summary,
      link: `/blog/${isAbout(p.id) && p.data.seriesKind === 'course' ? folderOf(p.id) : p.id}/`,
      // Полный текст читают в RSS-читалке: относительные ссылки там не открываются
      content: p.rendered?.html?.replace(/(src|href)="\//g, `$1="${SITE.url}/`),
    })),
    customData: '<language>ru</language>',
  });
}
