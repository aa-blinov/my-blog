// ¬нутренние ссылки собранного сайта: каждый href и src на blinov.monster должен вести на файл в dist,
// а каждый #€корь должен существовать на странице. Ѕита€ ссылка между стать€ми иначе всплывала только
// у читател€. «апуск: node scripts/check-internal-links.mjs dist
import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve(process.argv[2] ?? 'dist');
const pages = [];
(function walk(d) {
  for (const n of fs.readdirSync(d)) {
    const p = path.join(d, n);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.html')) pages.push(p);
  }
})(dist);

const idCache = new Map();
const idsOf = (file) => {
  if (!idCache.has(file)) {
    const html = fs.readFileSync(file, 'utf8');
    idCache.set(file, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  }
  return idCache.get(file);
};
const resolveTarget = (urlPath) => {
  const clean = decodeURIComponent(urlPath.split('?')[0]);
  const p = path.join(dist, clean);
  for (const c of [p, path.join(p, 'index.html'), p + '.html']) {
    if (fs.existsSync(c) && fs.statSync(c).isFile()) return c;
  }
  return null;
};

const problems = [];
let checked = 0;
for (const file of pages) {
  const html = fs.readFileSync(file, 'utf8');
  const pageUrl = '/' + path.relative(dist, file).replace(/\\/g, '/').replace(/index\.html$/, '');
  if (/http-equiv="refresh"/.test(html)) continue; // redirect stubs
  for (const m of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    let url = m[1].replace(/&amp;/g, '&');
    if (/^(mailto:|tel:|data:|javascript:)/.test(url)) continue;
    if (/^https?:\/\/(www\.)?blinov\.monster/.test(url)) url = url.replace(/^https?:\/\/(www\.)?blinov\.monster/, '') || '/';
    else if (/^https?:\/\//.test(url) || url.startsWith('//')) continue;
    checked++;
    const [rawPath, hash] = url.split('#');
    const target = rawPath === '' ? file : resolveTarget(rawPath.startsWith('/') ? rawPath : path.posix.join(pageUrl, rawPath));
    if (!target) { problems.push({ page: pageUrl, url, why: 'no such file' }); continue; }
    if (hash && target.endsWith('.html') && !idsOf(target).has(decodeURIComponent(hash))) problems.push({ page: pageUrl, url, why: 'no such anchor' });
  }
}
const uniq = new Map(problems.map((p) => [p.page + ' ' + p.url, p]));
console.log(`¬нутренние ссылки: ${pages.length} страниц, ${checked} ссылок, проблем ${uniq.size}`);
for (const p of uniq.values()) console.log(`  ${p.why}: ${p.page} -> ${p.url}`);
if (uniq.size) process.exit(1);
