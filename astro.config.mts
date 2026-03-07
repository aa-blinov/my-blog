import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config';

export default defineConfig({
  site: SITE.url,
  base: '/',
  output: 'static',
  integrations: [sitemap()],
});
