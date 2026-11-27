import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../config';
import { formatDate, sortByDateDesc } from '../utils/date';
import { plainText, siteUrl, terminalArticles } from '../utils/terminal';

export const GET: APIRoute = async ({ url }) => {
  const [articles, about, notes] = await Promise.all([
    terminalArticles(),
    getCollection('pages', (entry) => entry.id === 'about-me' && !entry.data.draft),
    getCollection('notes', (entry) => !entry.data.draft),
  ]);
  const index = siteUrl('txt', url);
  return plainText([
    SITE.title,
    `Текстовый режим\nОткрыть оглавление: curl -fsSL ${index} | less\nПоиск по заголовкам в less: /слово`,
    [
      about.length && `Об авторе: ${siteUrl('about-me.txt', url)}`,
      notes.length && `Заметки: ${siteUrl('notes.txt', url)}`,
      `Обычная версия: ${siteUrl('', url)}`,
    ].filter(Boolean).join('\n'),
    'Статьи от новых к старым',
    ...sortByDateDesc(articles).map((entry) =>
      `${formatDate(entry.data.date)}  ${entry.data.title}\n${siteUrl(`blog/${entry.id}.txt`, url)}`,
    ),
  ]);
};
