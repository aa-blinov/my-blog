export const SITE = {
  title: 'Личный сайт',
  description: 'Заметки, статьи и всякие другие вещи',
  author: 'Александр Блинов',
  github: 'https://github.com/aa-blinov',
  telegram: 'https://t.me/ahsasmi',
  linkedin: 'https://www.linkedin.com/in/alexander-blinov-31262b264/',
  url: 'https://blinov.monster',
} as const;

export const BASE = import.meta.env.BASE_URL;

// Sections are now entirely determined by subdirectories in src/content/blog/
export type BlogSection = string;

export function isBlogSection(s: string): boolean {
  return typeof s === 'string' && s.length > 0;
}

export const RECENT_POSTS_LIMIT = 9;
