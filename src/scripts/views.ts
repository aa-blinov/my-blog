import { plural } from '../utils/date';

const endpoint = import.meta.env.PUBLIC_VIEWS_ENDPOINT ||
  (import.meta.env.DEV ? 'http://127.0.0.1:8787/views' : '');
const number = new Intl.NumberFormat('ru-RU');

interface ViewCounts {
  total: number;
  today: number;
  article: number | null;
}

async function recordView() {
  const url = new URL(endpoint);
  const article = document.body.dataset.viewArticle;
  if (article) url.searchParams.set('article', article);

  const response = await fetch(url, {
    method: 'POST',
    credentials: 'omit',
    referrerPolicy: 'no-referrer',
  });
  if (!response.ok) return;
  const counts: ViewCounts = await response.json();

  const site = document.querySelector<HTMLElement>('[data-site-views]');
  const total = site?.querySelector('[data-view-total]');
  const today = site?.querySelector('[data-view-today]');
  if (site && total && today && Number.isSafeInteger(counts.total) && Number.isSafeInteger(counts.today)) {
    total.textContent = number.format(counts.total);
    today.textContent = `+${number.format(counts.today)}`;
    site.hidden = false;
  }

  const articleViews = document.querySelector<HTMLElement>('[data-article-views]');
  const label = articleViews?.querySelector('[data-view-label]');
  if (articleViews && label && counts.article !== null && Number.isSafeInteger(counts.article)) {
    label.textContent = `${number.format(counts.article)} ${plural(counts.article, 'просмотр', 'просмотра', 'просмотров')}`;
    articleViews.hidden = false;
  }
}

if (endpoint && document.body.hasAttribute('data-count-view')) {
  const count = () => { void recordView().catch(() => {}); };
  const doc: Document & { prerendering?: boolean } = document;
  if (doc.prerendering) doc.addEventListener('prerenderingchange', count, { once: true });
  else count();
}
