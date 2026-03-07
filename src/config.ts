export const SITE = {
  title: 'Личный блог',
  description: 'Личный сайт: обо мне и блог по разделам',
  author: 'Александр Блинов',
  github: 'https://github.com/aa-blinov',
  telegram: 'https://t.me/ahsasmi',
} as const;

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
