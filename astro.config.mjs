import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.org',
  base: '/',
  output: 'static',
  integrations: [],
  experimental: {
    liveContentCollections: true,
  },
});
