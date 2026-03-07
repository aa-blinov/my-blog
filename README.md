# Личный сайт на Astro

Минимальный стартовый проект для сайта «Обо мне + блог». Собирается статически, подходит для GitHub Pages.

## Что есть
- Главная страница и страница «Обо мне»
- Блог из Markdown в разделах (dev, life)
- Светлая/тёмная тема и размер шрифта (A−/A+)
- Гамбургер-меню на узком экране
- Сайдбар с деревом контента (поиск, сортировка)
- Подсветка кода (chroma)

## Структура контента
- Посты блога: `src/content/blog/*.md` с frontmatter `title`, `date`, `summary`, `section` (dev | life)
- Страницы: `src/pages/` (index, about-me, blog, blog/[section], blog/[section]/[slug])

## Запуск
1. Установи Node.js 18+.
2. В корне проекта:
   - `npm install`
   - `npm run dev`
3. Открой `http://localhost:4321`

## Публикация
- Локальная сборка: `npm run build`
- Готовый сайт в папке `dist/`
- Деплой на GitHub Pages: push в ветку `main` запускает workflow `.github/workflows/deploy.yml` (сборка и публикация в GitHub Pages). В настройках репозитория укажи Source: GitHub Actions.

## Настройка base URL для GitHub Pages
В `astro.config.mjs` задай `site` и `base`:
- Репозиторий `username.github.io`: `site: 'https://username.github.io/'`, `base: '/'`
- Репозиторий `my-blog`: `site: 'https://username.github.io/my-blog/'`, `base: '/my-blog/'`
