import { DurableObject } from 'cloudflare:workers';

const calendar = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Asia/Almaty', dateStyle: 'short' });
const articlePath = /^\/blog\/(?:[a-z0-9-]+\/){2,}$/;

export class ViewCounts extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    this.sql = ctx.storage.sql;
    this.sql.exec(`CREATE TABLE IF NOT EXISTS counts (
      key TEXT PRIMARY KEY, views INTEGER NOT NULL, first_day TEXT NOT NULL
    )`);
  }

  record(article) {
    const day = calendar.format(new Date());
    const increment = (key) => this.sql.exec(`
      INSERT INTO counts (key, views, first_day) VALUES (?, 1, ?)
      ON CONFLICT (key) DO UPDATE SET views = views + 1
      RETURNING views, first_day
    `, key, day).one();

    // Все числа в ответе относятся к одному просмотру, даже если запросы пришли одновременно.
    return this.ctx.storage.transactionSync(() => {
      const site = increment('site');
      const today = increment(`day:${day}`).views;
      const articleViews = article ? increment(article).views : null;
      return { total: site.views, today, started: site.first_day, article: articleViews };
    });
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin');
    if (url.pathname !== '/views') return new Response(null, { status: 404 });
    if (!origin || origin !== env.SITE_ORIGIN) return new Response(null, { status: 403 });

    const headers = {
      'Access-Control-Allow-Origin': origin,
      'Cache-Control': 'no-store',
      Vary: 'Origin',
    };
    if (request.method !== 'POST') {
      return new Response(null, { status: 405, headers: { ...headers, Allow: 'POST' } });
    }

    const article = url.searchParams.get('article');
    if (article !== null && (article.length > 240 || !articlePath.test(article))) {
      return new Response(null, { status: 400, headers });
    }

    const counts = await env.VIEWS.getByName('blog').record(article);
    return Response.json(counts, { headers });
  },
};
