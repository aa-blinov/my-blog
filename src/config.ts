export const SITE = {
  title: 'Блог Александра Блинова',
  description: 'Блог Александра Блинова о разработке, языковых моделях, теле и психике. Научпоп с источником у каждого утверждения и личные заметки.',
  author: 'Александр Блинов',
  github: 'https://github.com/aa-blinov',
  telegram: 'https://t.me/ahsasmi',
  linkedin: 'https://www.linkedin.com/in/alexander-blinov-31262b264/',
  url: 'https://blinov.monster',
} as const;

export const BASE = import.meta.env.BASE_URL;

// Sections are now entirely determined by subdirectories in src/content/blog/
export type BlogSection = string;

/** Русские имена папок для заголовков и групп. Папка с about-<имя>.md берёт название оттуда, это запасной список. */
export const SECTION_TITLES: Record<string, string> = {
  ai: 'ИИ',
  dev: 'Разработка',
  ideas: 'Идеи',
  knowledge: 'База знаний',
  life: 'Личное',
  mgmt: 'Менеджмент',
  projects: 'Проекты',
  science: 'Научпоп',
  body: 'Тело',
  'human-body': 'Тело человека',
  'body-and-environment': 'Тело и среда',
  travel: 'Путешествия',
  mind: 'Психика',
  antidepressants: 'Антидепрессанты',
  'self-diagnosis': 'Диагнозы, которые ставят себе сами',
  agent: 'Как устроен мой агент',
};

export function sectionTitle(name: string): string {
  return SECTION_TITLES[name] ?? name;
}

const SECTION_PAGE_PATHS: Record<string, string> = {
  'science/human-body': 'science/body',
  'science/body-and-environment': 'science/body',
};

/** Папки, где тексты касаются здоровья. Читатель приходит туда из поиска на одну статью и не знает,
    кто её написал, поэтому над ней стоит строка об авторе и о том, на что текст опирается. */
export const HEALTH_FOLDERS = ['science/mind/', 'science/human-body/', 'science/body-and-environment/'];

export function isHealthArticle(id: string): boolean {
  return HEALTH_FOLDERS.some((folder) => id.startsWith(folder));
}

export function sectionPagePath(path: string): string {
  return SECTION_PAGE_PATHS[path] ?? path;
}

export function isBlogSection(s: string): boolean {
  return typeof s === 'string' && s.length > 0;
}

