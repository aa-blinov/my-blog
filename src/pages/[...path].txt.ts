import type { APIRoute } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import { humanDate, noteAnchor, sortByDateDesc } from '../utils/date';
import { plainText, siteUrl, terminalArticles, terminalBody } from '../utils/terminal';

type Props =
  | { entry: CollectionEntry<'blog'> | CollectionEntry<'pages'>; notes?: never }
  | { entry?: never; notes: CollectionEntry<'notes'>[] };

export async function getStaticPaths() {
  const [articles, about, notes] = await Promise.all([
    terminalArticles(),
    getCollection('pages', (entry) => entry.id === 'about-me' && !entry.data.draft),
    getCollection('notes', (entry) => !entry.data.draft),
  ]);
  return [
    ...articles.map((entry) => ({ params: { path: `blog/${entry.id}` }, props: { entry } })),
    ...about.map((entry) => ({ params: { path: entry.id }, props: { entry } })),
    ...(notes.length ? [{ params: { path: 'notes' }, props: { notes } }] : []),
  ];
}

export const GET: APIRoute = ({ props, url }) => {
  const { entry, notes } = props as Props;
  const webPath = entry ? `${entry.collection === 'blog' ? 'blog/' : ''}${entry.id}/` : 'notes/';
  const webUrl = siteUrl(webPath, url);
  const body = entry
    ? terminalBody(entry.rendered?.html ?? '', webUrl)
    : sortByDateDesc(notes).map((note) => {
        const noteUrl = `${webUrl}#${noteAnchor(note.data.date)}`;
        return `${humanDate(note.data.date)}\n\n${terminalBody(note.rendered?.html ?? '', noteUrl)}`;
      }).join('\n\n');

  return plainText([
    entry ? `${entry.data.title}\n${humanDate(entry.data.date)}` : 'Заметки',
    body,
    `Оглавление: ${siteUrl('txt', url)}\nОбычная версия: ${webUrl}`,
  ]);
};
