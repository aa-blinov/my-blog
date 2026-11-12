import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config';

export default defineConfig({
  site: SITE.url,
  base: '/',
  output: 'static',
  integrations: [sitemap()],
  // Серия про агента переехала в dev/agent/; старые адреса живут в чужих закладках
  redirects: {
    ...Object.fromEntries(
      ['loop', 'tools', 'context', 'personas', 'plan-mode', 'subagents', 'memory', 'daemon', 'evals'].map((n) => [
        `/blog/dev/agent-${n}/`,
        `/blog/dev/agent/${n}/`,
      ]),
    ),
    // Старый адрес карты антидепрессантов: теперь это интерактивная карта внутри серии
    '/blog/science/mind/antidepressants-map/': '/blog/science/mind/antidepressants/map/',
    // Старую ссылку на статью сохраняем после переноса в личные тексты
    '/blog/ideas/why-a-personal-project-stays-an-idea/': '/blog/life/why-a-personal-project-stays-an-idea/',
  },
});
