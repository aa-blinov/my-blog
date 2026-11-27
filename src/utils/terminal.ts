import { getCollection } from 'astro:content';
import { convert } from 'html-to-text';
import { BASE, SITE } from '../config';
import { isAbout } from './series';

export function terminalArticles() {
  return getCollection('blog', (entry) => !entry.data.draft && !isAbout(entry.id));
}

export function siteUrl(path: string, requestUrl: URL) {
  return new URL(`${BASE}${path}`, import.meta.env.DEV ? requestUrl.origin : SITE.url).href;
}

export function plainText(parts: string[]) {
  return new Response(`${parts.filter(Boolean).join('\n\n')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}

export function terminalBody(html: string, webUrl: string) {
  const absolute = (path: string) => URL.canParse(path, webUrl) ? new URL(path, webUrl).href : path;
  return convert(html, {
    wordwrap: 78,
    selectors: [
      { selector: 'a', options: { pathRewrite: absolute } },
      { selector: 'img', options: { pathRewrite: absolute } },
      ...['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((selector) => ({ selector, options: { uppercase: false } })),
      { selector: 'table', format: 'dataTable', options: { maxColumnWidth: 28 } },
    ],
  });
}
