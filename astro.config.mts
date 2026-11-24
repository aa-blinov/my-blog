import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config';

export default defineConfig({
  site: SITE.url,
  base: '/',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    build: {
      // Mermaid (и его elk с cytoscape) — ленивые чанки: браузер тянет их только на страницах
      // с диаграммами. Порог по умолчанию ругается на них, хотя в первом экране их нет.
      chunkSizeWarningLimit: 1500,
    },
  },
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
    // Lazy to Text давно работает на трёх системах и не только с Whisper: старый адрес ведёт на новый
    '/blog/projects/whisper-local-windows/': '/blog/projects/lazy-to-text/',
    // Четыре статьи о самодиагнозах собраны в курс: старые адреса ведут в папку курса
    '/blog/science/mind/adult-adhd/': '/blog/science/mind/self-diagnosis/adult-adhd/',
    '/blog/science/mind/vsd-diagnosis-that-isnt/': '/blog/science/mind/self-diagnosis/vsd-diagnosis-that-isnt/',
    '/blog/science/mind/trauma-and-ptsd/': '/blog/science/mind/self-diagnosis/trauma-and-ptsd/',
    '/blog/science/mind/narcissist-in-the-room/': '/blog/science/mind/self-diagnosis/narcissist-in-the-room/',
  },
});
