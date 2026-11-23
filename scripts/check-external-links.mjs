// Внешние ссылки собранного сайта и данных интерактивных блоков. Пишет отчёт в Markdown и выходит
// с кодом 1, только если нашлась мёртвая ссылка. Мёртвой считается 404, 410 или домен, которого
// больше нет. 403, 429 и таймауты чаще всего защита от роботов: журналы, doi.org и новостные сайты
// так отвечают скриптам, а в браузере открываются. Они идут в отчёт отдельным списком.
// Запуск: node scripts/check-external-links.mjs dist src/data [report.md]
import fs from 'node:fs';
import path from 'node:path';

const [dist = 'dist', dataDir = 'src/data', reportPath = 'link-report.md'] = process.argv.slice(2);
const refs = new Map();

function walk(dir, ext, fn) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p, ext, fn);
    else if (p.endsWith(ext)) fn(p);
  }
}
const add = (raw, page) => {
  const url = raw.replace(/&amp;/g, '&');
  if (!/^https?:\/\//.test(url) || /blinov\.monster/.test(url)) return;
  if (!refs.has(url)) refs.set(url, new Set());
  refs.get(url).add(page);
};
walk(dist, '.html', (p) => {
  const page = '/' + path.relative(dist, p).replace(/\\/g, '/').replace(/index\.html$/, '');
  if (!page.startsWith('/blog/') && page !== '/' && !page.startsWith('/about-me')) return;
  const html = fs.readFileSync(p, 'utf8');
  if (/http-equiv="refresh"/.test(html)) return;
  for (const m of html.matchAll(/<a\s[^>]*href="(https?:\/\/[^"]+)"/g)) add(m[1], page);
});
walk(dataDir, '.ts', (p) => {
  const page = path.relative('.', p).replace(/\\/g, '/');
  for (const m of fs.readFileSync(p, 'utf8').matchAll(/https?:\/\/[^\s"'`)<>\]]+/g)) add(m[0].replace(/[.,;]+$/, ''), page);
});

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36';
// Журналы и doi.org не пускают скрипты, зато справочник DOI отвечает всем: зарегистрированный DOI
// ведёт на действующую страницу издателя, незарегистрированный это опечатка или снятая статья
async function checkDoi(url) {
  const m = url.match(/(?:doi\.org\/|\/doi\/(?:abs\/|full\/|fullHtml\/|pdf\/)?)(10\.\d{4,9}\/[^\s?#]+)/);
  if (!m) return null;
  try {
    const doi = decodeURIComponent(m[1]);
    const res = await fetch(`https://doi.org/api/handles/${encodeURIComponent(doi).replace(/%2F/g, '/')}`, { headers: { 'user-agent': UA } });
    const body = await res.json();
    if (body.responseCode === 1) return { status: 200, via: 'doi' };
    if (body.responseCode === 100) return { status: 404, via: 'doi' };
  } catch {}
  return null;
}

async function check(url) {
  const doi = await checkDoi(url);
  if (doi) return doi;
  for (const method of ['HEAD', 'GET']) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 25000);
    try {
      const res = await fetch(url, { method, redirect: 'follow', signal: ctrl.signal, headers: { 'user-agent': UA, accept: 'text/html,application/pdf,*/*' } });
      clearTimeout(timer);
      res.body?.cancel?.();
      if (method === 'HEAD' && res.status >= 400) continue;
      return { status: res.status };
    } catch (e) {
      clearTimeout(timer);
      if (method === 'GET') return { status: 0, error: String(e.cause?.code || e.name || e) };
    }
  }
}
const isDead = (r) => r.status === 404 || r.status === 410 || ['ENOTFOUND', 'EAI_AGAIN_PERMANENT'].includes(r.error);

// Не больше двух запросов к одному сайту и пауза между ними: иначе сайт включает ограничение
// по частоте, и честные ссылки выглядят мёртвыми
const byHost = new Map();
for (const url of refs.keys()) {
  const host = new URL(url).host;
  if (!byHost.has(host)) byHost.set(host, []);
  byHost.get(host).push(url);
}
const lanes = [];
for (const list of byHost.values()) {
  const half = Math.ceil(list.length / 2);
  lanes.push(list.slice(0, half), list.slice(half));
}
const results = new Map();
let next = 0;
await Promise.all(Array.from({ length: 12 }, async () => {
  while (next < lanes.length) {
    for (const url of lanes[next++]) {
      results.set(url, await check(url));
      await new Promise((r) => setTimeout(r, 500));
    }
  }
}));

const dead = [...results].filter(([, r]) => isDead(r));
const unknown = [...results].filter(([, r]) => !isDead(r) && (r.status === 0 || r.status >= 400));
const line = ([url, r]) => `- ${url} (${r.status || r.error}): ${[...refs.get(url)].join(', ')}`;
const report = [
  `# Проверка внешних ссылок`,
  ``,
  `Проверено ${results.size}. Мёртвых ${dead.length}, не удалось проверить ${unknown.length}.`,
  ``,
  `## Мёртвые: 404, 410 или домена больше нет`,
  ``,
  ...(dead.length ? dead.map(line) : ['Нет.']),
  ``,
  `## Не удалось проверить: защита от роботов, ограничение частоты, таймаут`,
  ``,
  `Их стоит открыть в браузере, если список заметно вырос с прошлой недели.`,
  ``,
  ...(unknown.length ? unknown.map(line) : ['Нет.']),
  ``,
].join('\n');
fs.writeFileSync(reportPath, report);
console.log(`Внешние ссылки: ${results.size}, мёртвых ${dead.length}, не удалось проверить ${unknown.length}. Отчёт: ${reportPath}`);
if (dead.length) process.exit(1);
