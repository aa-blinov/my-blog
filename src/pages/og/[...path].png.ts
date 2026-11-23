import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { isAbout, getSeriesTitles } from '../../utils/series';
import { getArticleSections } from '../../utils/breadcrumb';
import { renderOgImage } from '../../utils/og-image';
import { SITE } from '../../config';

// Картинка на каждую статью и одна общая для остальных страниц сайта: /og/default.png
export async function getStaticPaths() {
  const articles = await getCollection('blog', (entry) => !entry.data.draft && !isAbout(entry.id));
  const seriesTitles = await getSeriesTitles();
  return [
    ...articles.map((entry) => ({
      params: { path: entry.id },
      props: {
        title: entry.data.title,
        section: getArticleSections(entry.id, seriesTitles).map(({ title }) => title).join(' / '),
      },
    })),
    { params: { path: 'default' }, props: { title: SITE.title, section: 'разработка, языковые модели, тело и психика' } },
  ];
}

export const GET: APIRoute = ({ props }) =>
  new Response(new Uint8Array(renderOgImage(props as { title: string; section?: string })), {
    headers: { 'Content-Type': 'image/png' },
  });
