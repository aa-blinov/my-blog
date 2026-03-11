# blinov.monster

Personal website and content-driven blog built with [Astro](https://astro.build/).

The project is designed as a static site with a custom content model, a file-tree blog navigator, theme and font controls, code block enhancements, and GitHub Pages deployment behind the `blinov.monster` custom domain.

Live site: [https://blinov.monster](https://blinov.monster)

## Status

Active personal project.

This repository is not an open source template or starter kit. Source code and content are published for operational use of the site only. See [License](#license).

## Highlights

- Static Astro site with content collections and typed frontmatter
- Homepage and About page sourced from markdown content entries
- Blog routing powered by a catch-all route for nested sections and article pages
- File-tree sidebar with search, active-state highlighting, and date sorting
- Theme toggle and article font-size controls stored in `localStorage`
- Mobile navigation with fixed top navbar and overlay sidebar
- Syntax highlighting with light/dark Chroma themes
- Copy-to-clipboard buttons for code blocks
- Mermaid diagram rendering with diagram/code toggle
- GitHub Pages deployment via GitHub Actions
- Custom domain configured through `public/CNAME`

## Tech Stack

- Astro 5
- TypeScript
- Astro Content Collections with Zod schemas
- Pico CSS plus custom global styling
- Mermaid loaded on demand from CDN
- GitHub Actions for CI/CD

## Project Structure

```text
.
|- public/
|  |- CNAME
|  |- robots.txt
|  |- theme.js
|  `- css/
|- src/
|  |- components/
|  |- content/
|  |  |- blog/
|  |  `- pages/
|  |- layouts/
|  |- pages/
|  |- styles/
|  `- utils/
|- .github/workflows/deploy.yml
|- astro.config.mts
`- package.json
```

## Routing Model

The current site structure is:

- `/` from `src/pages/index.astro`
- `/about-me/` from `src/pages/about-me/index.astro`
- `/blog/` from `src/pages/blog/index.astro`
- `/blog/<path>/` from `src/pages/blog/[...path].astro`

The catch-all blog route handles both:

- final article pages
- intermediate folder pages inside the blog tree

## Content Model

The project uses two Astro content collections defined in [src/content/config.ts](src/content/config.ts):

- `pages`
- `blog`

### Pages collection

Current page entries live in:

- `src/content/pages/main.md`
- `src/content/pages/about-me.md`

Required frontmatter:

```yaml
title: string
date: date
```

Optional frontmatter:

```yaml
summary: string
draft: boolean
```

### Blog collection

Blog entries live under `src/content/blog/**`.

Required frontmatter:

```yaml
title: string
date: date
```

Optional frontmatter:

```yaml
summary: string
draft: boolean
section: string
```

Notes:

- If `section` is omitted, the physical directory structure is used as the section path.
- If `section` is present, it acts as a virtual path override for blog grouping and navigation.
- Draft entries are excluded from the generated site.

### Example blog entry

```md
---
title: "My New Article"
date: 2026-03-11
draft: false
summary: "Short description shown in lists and previews."
section: "dev"
---

Write your content in Markdown here.
```

## Features by Area

### Content and navigation

- Sidebar tree is generated from blog content paths
- Section overview files such as `about-*.md` are pinned to the top of their section
- Search and sort state are restored from `localStorage`

### Reading experience

- Theme switching is handled in `public/theme.js`
- Font scale controls update `data-font` on the root element
- Code blocks receive copy buttons at runtime
- Mermaid blocks are rendered lazily and can be toggled back to source code

### Site metadata

Core site metadata is defined in [src/config.ts](src/config.ts):

- site title
- description
- author
- social links
- canonical site URL

## Local Development

### Requirements

- Node.js 20 or newer
- npm

### Install

```bash
npm install
```

### Start the dev server

```bash
npm run dev
```

Default local URL:

```text
http://localhost:4321
```

### Production build

```bash
npm run build
```

### Preview the built site

```bash
npm run preview
```

## Deployment

Deployment is configured in [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

Current behavior:

- output target is static
- GitHub Pages deploy runs on pushes to the `master` branch
- workflow installs dependencies with `npm ci`
- build output is published from `dist/`
- custom domain is set through `public/CNAME`

Astro configuration lives in [astro.config.mts](astro.config.mts) and uses:

- `output: "static"`
- the sitemap integration
- `SITE.url` from `src/config.ts`

## Operational Notes

- There is currently no automated test suite in the repository.
- The main verification step is a successful `npm run build`.
- `dist/` is a generated artifact and should be treated as build output, not source of truth.
- Site behavior is split across Astro templates, `public/theme.js`, and `src/styles/global.css`.

## Customization Guide

### Update site metadata

Edit [src/config.ts](src/config.ts).

### Add or edit pages

Edit markdown files in [src/content/pages](src/content/pages).

### Add or edit blog posts

Create or update markdown files in [src/content/blog](src/content/blog).

### Change layout or navigation behavior

Review:

- [src/layouts/Layout.astro](src/layouts/Layout.astro)
- [src/components/NavBar.astro](src/components/NavBar.astro)
- [src/components/Sidebar.astro](src/components/Sidebar.astro)
- [src/styles/global.css](src/styles/global.css)

### Change theme, font, code block, or Mermaid behavior

Edit [public/theme.js](public/theme.js).

## License

This project is licensed under a proprietary, all-rights-reserved license.

No permission is granted to copy, modify, distribute, sublicense, reuse, or create derivative works from this repository without prior written permission from the copyright holder.

See [LICENSE](LICENSE) for the full text.
