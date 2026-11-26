import { humanDate, plural } from '../utils/date';

const endpoint = import.meta.env.PUBLIC_VIEWS_ENDPOINT ||
  (import.meta.env.DEV ? 'http://127.0.0.1:8787/views' : '');
const number = new Intl.NumberFormat('ru-RU');

interface ViewCounts {
  total: number;
  today: number;
  started: string;
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
  const started = site?.querySelector<HTMLTimeElement>('time');
  if (site && total && today && started && Number.isSafeInteger(counts.total) && Number.isSafeInteger(counts.today)) {
    const date = new Date(counts.started);
    if (Number.isFinite(date.getTime())) {
      total.textContent = number.format(counts.total);
      today.textContent = `+${number.format(counts.today)}`;
      started.dateTime = counts.started;
      started.textContent = humanDate(date);
      site.hidden = false;
    }
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
