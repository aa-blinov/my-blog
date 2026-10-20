# blinov.monster

The personal site and blog of Alexander Blinov: long articles on software
engineering, language models, science and life, with a feed of short notes
between them. It is a static Astro build published on GitHub Pages, and it is
navigated like a project in an editor, with every article a Markdown file in a
folder.

[![License](https://img.shields.io/badge/license-All%20Rights%20Reserved-lightgrey.svg)](LICENSE)
[![Deploy](https://github.com/aa-blinov/my-blog/actions/workflows/deploy.yml/badge.svg)](https://github.com/aa-blinov/my-blog/actions/workflows/deploy.yml)

The site lives at [https://blinov.monster](https://blinov.monster). The
articles are in Russian, and the documents in this repository are in English.

---

## Quick start

```bash
npm install
npm run dev
```

The dev server comes up on http://localhost:4321. Node 22 and npm are what the
deploy workflow uses, and nothing in `package.json` pins a range.

To build the site the way CI does:

```bash
npm run check
npm run build
```

`npm run build` writes static HTML into `dist/`, and `npm run preview` serves
that directory.

## What it does

- **A file tree instead of a menu.** The sidebar is the content tree: sections
  are folders, articles are `.md` files, and `main.md`, `about-me.md` and
  `notes.md` are pinned at the top.
- **Search that transliterates.** A query in Cyrillic is matched against the
  Latin file names as well, and the transliteration is compared with the start
  of each word.
- **Three orders for the tree.** Newest first by default, oldest first, or by
  name. The order is remembered in the browser. The search box is not: it
  belongs to the tab.
- **Series with their own table of contents.** A folder whose articles carry
  `part` in the frontmatter becomes a series, with a numbered index, a "part N
  of M" line under the heading and links to the neighbouring parts. Three are
  live: `dev/agent/` with nine parts, `science/body-and-environment/` with six
  and `science/mind/antidepressants/` with eight.
- **Interactive blocks inside the articles.** The antidepressants series
  carries a radial map of the drugs, a picker that sorts them by the
  constraints a reader ticks off, and a checklist of questions to take to a
  doctor. Every claim in them points at a guideline or a drug label.
- **Reading aids.** An article with six or more second-level headings gets a
  table of contents, every code block gets a copy button, and a Mermaid block
  renders as a diagram with a toggle back to the source.
- **Two feeds.** `/rss.xml` carries the articles, `/notes.xml` the short
  notes.
- **Reader controls.** A light and a dark theme, and five font sizes. Both are
  kept in the browser.

## How it works

```
src/content/**.md -> collections -> pages -> dist/ -> GitHub Pages
```

Three content collections are defined in
[src/content.config.ts](src/content.config.ts) with the glob loader, and each
one has a Zod schema: `blog` for the articles, `pages` for the home page and
the about page, `notes` for the short feed. A schema failure stops the build,
so a missing `title` or an unparseable `date` is caught before anything is
published.

The routing is one catch-all. The file
[src/pages/blog/[...path].astro](src/pages/blog/[...path].astro) produces a
route per article and a route per folder in the tree, so a new article needs
neither a new page file nor an entry in a router. The same file renders both
cases, and the branch is the `kind` prop that `getStaticPaths` sets.

The sidebar is built on every page from the same collection, so the tree
cannot drift from the content. A file called `about-<name>.md` is the intro
text of its folder rather than an article: it stays out of the tree, out of the
blog index and out of the article lists, and its text becomes the intro of the
folder page.

Three folders are series, because at least one article in them carries
`part`. The folder page lists the parts of the series, each part links to the
next, and the parts keep their order in the tree whatever the sort order is.

The interface is three columns. A fixed vertical toolbar holds the home link,
the theme toggle and the font size buttons, the tree stands next to it, and the
article is the third. Under 992 pixels the toolbar becomes a top bar and the
tree becomes an overlay, with the page behind it marked `inert` so that Tab
does not wander into it.

Two scripts run in the browser.
[src/scripts/theme.js](src/scripts/theme.js) holds the theme, the font size,
the copy buttons and the Mermaid rendering, while
[src/scripts/ref-tip.js](src/scripts/ref-tip.js) shows the source behind a
reference chip on hover, on focus and on a second tap. The theme and the font
size are applied by an inline script in the head of the layout, before the
first paint.

The interactive blocks are data, not pages.
[src/data/maps](src/data/maps) holds the mind maps,
[src/data/pickers](src/data/pickers) the pickers and
[src/data/tools](src/data/tools) the checklists. The layout of a map is
computed at build time in [src/utils/mindmap.ts](src/utils/mindmap.ts), and the
controller runs in the browser.

## Configuration

Site metadata lives in [src/config.ts](src/config.ts):

| Key | What it does |
| --- | --- |
| `SITE.title` | The name of the site, used in the browser title bar and in the feeds. |
| `SITE.description` | The default meta description. |
| `SITE.author` | The name in the footer and under every article. |
| `SITE.github`, `SITE.telegram`, `SITE.linkedin` | The contact links in the footer. |
| `SITE.url` | The canonical address, used by the sitemap and the feeds. |
| `SECTION_TITLES` | The heading of a section folder. A folder missing from it shows its own name. |
| `RECENT_POSTS_LIMIT` | How many articles the home page lists. The default is 7. |

[Astro configuration](astro.config.mts) sets the output to `static`, the base
path to `/`, adds the sitemap integration, and holds the redirects for the
addresses that changed. Ten are there now: the nine old `dev/agent-*` paths
and the old map of the antidepressants series.

The frontmatter of an article:

| Field | Collections | What it does |
| --- | --- | --- |
| `title` | `blog`, `pages` | Required. The headline of the article. |
| `date` | all three | Required. The publication date, in UTC. |
| `draft` | all three | Optional, `false` by default. A draft is left out of the build. |
| `summary` | `blog`, `pages` | Optional. One line under the headline. |
| `section` | `blog` | Optional. Replaces the folder path in the tree. |
| `part` | `blog` | Optional. The position of the article in a series. |
| `map` | `blog` | Optional. The key of a map in `src/data/maps`. |
| `picker` | `blog` | Optional. The key of a picker in `src/data/pickers`. |
| `tools` | `blog` | Optional. The key of a tools block in `src/data/tools`. |

The browser keeps a few choices of the reader. `theme`, `font-size-v2` and
`sidebar-sort-v2` live in local storage, and the text of the search box lives
in session storage, so the order is per browser and the search is per tab.

## Development

```bash
npm install      # install
npm run dev      # dev server on http://localhost:4321
npm run check    # astro check: types and templates
npm run build    # the static site into dist/
npm run preview  # serve dist/
```

There is no test suite. `npm run check` and `npm run build` are the
verification, and the deploy workflow runs the same two.

| Path | What it holds |
| --- | --- |
| `src/content/blog/` | 115 Markdown files: the articles, one per file, and the `about-<section>.md` intro of a section. |
| `src/content/pages/` | The home page (`main.md`) and the about page (`about-me.md`). |
| `src/content/notes/` | The short notes, one file per note, named after the UTC minute. |
| `src/content.config.ts` | The three collections and their schemas. |
| `src/pages/blog/[...path].astro` | The route for every article and every folder. |
| `src/components/Sidebar.astro` | The tree, the search and the sort control. |
| `src/components/MindMap.astro`, `Picker.astro`, `Tools.astro` | The interactive blocks. |
| `src/data/` | The data behind those blocks. |
| `src/scripts/` | The theme, the font size, the copy buttons, the Mermaid rendering. |
| `src/utils/` | Dates, series, breadcrumbs, the layout of a map. |
| `src/styles/global.css` | The visual system, over Pico CSS. |
| `src/config.ts` | The site metadata and the section headings. |
| `DESIGN.md` | The design system, with the tokens and the rules. |

Read the design system before changing the interface.
[DESIGN.md](DESIGN.md) holds the colours, the type scale and the rules the
interface is held to, and the comments in the code say which rule each part of
it serves.

## License

All rights reserved. Copyright (c) 2026 Alexander Blinov. The code, the text,
the design and the assets in this repository may not be copied, modified or
redistributed without the written permission of the author. See
[LICENSE](LICENSE).
