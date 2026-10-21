# AGENTS.md — agent context for `my-blog`

The static site behind blinov.monster: the personal blog of Alexander Blinov,
written in Russian, built with Astro 7 and published to GitHub Pages. Articles,
the home page and the short notes are Markdown files in three content
collections, and the navigation is a tree of those files.

This file is what you need to work on the project without reading all of it.

## Run / build / test

```bash
npm install      # install
npm run dev      # dev server on http://localhost:4321
npm run check    # astro check: types and templates
npm run build    # the static site into dist/
npm run preview  # serve dist/
```

There is no test suite. `npm run check` type-checks the templates and
`npm run build` is the check that matters, because the content is part of the
build: a broken frontmatter or a missing article shows up there and nowhere
else. The deploy workflow runs the same two commands, on Node 22.

## Where things live

| Path | What it holds |
| --- | --- |
| `src/content/blog/` | 115 Markdown files in eight sections: the articles, one per file, and the `about-<section>.md` intro of a section. |
| `src/content/pages/` | The home page (`main.md`) and the about page (`about-me.md`). |
| `src/content/notes/` | The short notes, one file per note, named after the UTC minute. |
| `src/content.config.ts` | The three collections, their glob loaders and their Zod schemas. |
| `src/pages/blog/[...path].astro` | One route for every article and every folder. Both come out of the same template. |
| `src/components/Sidebar.astro` | The tree, the search and the sort control, with the transliteration table. |
| `src/components/MindMap.astro`, `Picker.astro`, `Tools.astro` | The interactive blocks and their browser-side controllers. |
| `src/data/` | The data behind those blocks, one file per block. |
| `src/scripts/theme.js` | The theme, the font size, the copy buttons, the Mermaid rendering. |
| `src/scripts/ref-tip.js` | The tooltip behind a reference chip. |
| `src/utils/series.ts` | What counts as a series, what counts as an intro file, which folders have an article to show. |
| `src/utils/date.ts` | Dates, sorting, the reading time, the note anchor. |
| `src/config.ts` | The site metadata and the headings of the section folders. |
| `astro.config.mts` | The static output, the sitemap, the redirects. |
| `src/styles/global.css` | The visual system, over Pico CSS. `DESIGN.md` holds the rules behind it. |
| `.claude/skills/` | Two skills that write articles and notes in the author's voice. Read them before writing prose for this site. |

## Traps

- **The catch-all route serves folders as well as files.** `getStaticPaths`
  returns a route per article and a route per folder in the tree, and the
  component branches on the `kind` prop. A new article needs no page file.
  A new folder gets a page for free, and that page is where the intro text
  and the list of articles go.
- **A file called `about-<name>.md` carries the intro of its folder rather
  than being an article.** `isAbout()` in `src/utils/series.ts` matches on the
  name prefix. Such a file stays out of the tree, out of the blog index and
  out of the article lists, and it stays in the feed. The exception is a
  series: the intro of a series is pinned to the top of its folder in the
  tree, because the folder page lists the parts of the series.
- **A series is a folder where at least one article carries `part`.** Nothing
  marks the folder itself. `getSeries()` returns null when no article in it
  has `part`, and the folder behaves as an ordinary section. The "part N of M"
  line counts the articles with `part` in that folder, drafts excluded.
- **A `map` or `picker` key that misses the registry renders nothing.** The
  route tests `maps[entry.data.map]` and `pickers[entry.data.picker]`, and a
  key with no entry in `src/data/maps/index.ts` produces no block, no warning
  and a green build. A new key goes in the registry first.
- **The `tools` block is hard-coded to one key.** The route tests
  `entry.data.tools === 'antidepressants'`. A second tools set needs a change
  in the route as well as a data file.
- **The order of the tree is CSS, not the document.** `Sidebar.astro`
  computes `--order-desc` and `--order-asc` for every item and the stylesheet
  applies them, so the markup stays alphabetical while the visible order
  changes. The intro file of a section is pinned to the top, and a part of a
  series keeps its number under any order.
- **The theme and the font size are applied before the first paint.** An
  inline script in the head of `Layout.astro` reads local storage, and
  `src/scripts/theme.js` reads the same keys a moment later. The font key is
  `font-size-v2`; when the two read different keys the page is drawn at one
  size and jumps to another. The inline script also sets the `js` class, and
  the search and the sort control are hidden without it.
- **The transliteration table is written twice.** Once in the inline script of
  `Sidebar.astro`, once in the module below it. The two must agree, or the
  search behaves differently before and after the module loads.
- **The search compares a transliterated query with the start of a word.** A
  query in Cyrillic also becomes Latin, and the match is made against the
  first part of each word of a file name. "сон" does not find "per-SON-as".
- **The search lives in session storage, the order lives in local storage.**
  A search survives a reload in the same tab and is gone in the next one. The
  order is per browser.
- **The mobile tree is an overlay and the page behind it is `inert`.**
  `NavBar.astro` marks the main column, the footer and the skip link as
  `inert` while the tree is open, and `Escape` closes it and puts the focus
  back on the toggle. Anything that stops doing this lets Tab walk behind the
  overlay.
- **The breadcrumb helper knows two sections.** `src/utils/breadcrumb.ts`
  recognises `dev` and `life`. Everywhere else it falls back to the raw path,
  so the breadcrumb of an article in `science` gives the path of the file.
- **The redirects live in `astro.config.mts`.** Ten of them: the nine old
  `dev/agent-*` addresses and the old map of the antidepressants series. A
  changed path needs a redirect there, because that is where the bookmarks of
  other people point.
- **A note carries its identity in the file name.** The file name, the `date`
  in the frontmatter and the anchor on the page have to be the same minute in
  UTC, `2026-09-25-1430` in all three. The anchor comes from `noteAnchor()`.
- **A note has no title.** The schema of the `notes` collection holds `date`
  and `draft` and nothing else. The feed turns the first words of the text
  into a title.
- **The reading time is an estimate.** `readingMinutes()` in
  `src/utils/date.ts` strips code blocks, links and HTML, counts the words
  and divides by 180, a rate for Russian.

## Style / safety rails

- **The interface is in Russian.** A new label, a new error message, a new
  meta string is written in Russian. The documents in this repository are the
  exception and stay in English.
- **No analytics, no comments, no forms, no accounts.** The site has no
  server-side part and talks to no third party. A feature that needs one
  belongs to a different product.
- **Every claim in an article carries a source.** The blocks under
  `src/data/` hold a URL for every statement they make, and the numbered chip
  in the text is the link to it. A claim without a source does not go in.
- **The tools and the picker prescribe nothing.** They carry a disclaimer and
  an urgent line, and the checklist is a list of questions for a doctor. Keep
  that text, and keep the questions as questions.
- **The articles avoid the "not X but Y" construction.** The skills in
  `.claude/skills/` ban it, along with dashes and stock phrases, because the
  author reads them as tics once they repeat.
- **Comments explain why.** The comments in this codebase are about the
  reason and silent about the mechanics. Keep them that way.
- **The licence is MIT.** The code, the text, the design and the assets are
  covered by it. A dependency added here is one the author has to keep
  current.

## Where the product truth lives

`PRODUCT.md` holds it. Read it before changing the behaviour of the site, and
write the change there when the behaviour changes.
