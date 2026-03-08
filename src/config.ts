export const SITE = {
  title: 'Личный блог',
  description: 'Личный сайт: обо мне и блог по разделам',
  author: 'Александр Блинов',
  github: 'https://github.com/aa-blinov',
  telegram: 'https://t.me/ahsasmi',
  linkedin: 'https://www.linkedin.com/in/alexander-blinov-31262b264/',
  url: 'https://blinov.monster',
} as const;

export const BASE = import.meta.env.BASE_URL;

export const BLOG_SECTIONS = ['dev', 'life'] as const;
export type BlogSection = (typeof BLOG_SECTIONS)[number];

export function isBlogSection(s: string): s is BlogSection {
  return BLOG_SECTIONS.includes(s as BlogSection);
}

export const RECENT_POSTS_LIMIT = 9;

export const SECTION_TITLES: Record<string, string> = {
  dev: 'Dev',
  life: 'Life',
  main: 'Главная',
  about: 'Обо мне',
};

export const SECTION_DESCRIPTIONS: Record<string, string> = {
  dev: 'Технические заметки и инженерные практики.',
  life: '',
};
