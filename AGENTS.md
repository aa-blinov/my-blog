# AGENTS.md — agent context for `my-blog`

The static site behind blinov.monster: the personal blog of Alexander Blinov,
written in Russian, built with Astro 7 and published to GitHub Pages. Articles,
the home page and the short notes are Markdown files in three content
collections. The navigation lives in the header: the archive page groups the
files by topic and by date, and a dedicated search page filters them.

This file is what you need to work on the project without reading all of it.

## Run / build / test

```bash
npm install      # install
npm run dev      # dev server on http://localhost:4321
npm run check    # astro check: types and templates
npm run build    # the static site into dist/
npm run check:links     # internal links and #anchors of dist/, fails on any miss
npm run check:external  # external links, writes link-report.md, fails on 404/410/dead domain
npm run preview  # serve dist/
```

There is no test suite. `npm run check` type-checks the templates and
`npm run build` is the check that matters, because the content is part of the
build: a broken frontmatter or a missing article shows up there and nowhere
else. The deploy workflow runs `npm ci`, `npm run check`, `npm run build` and
`npm run check:links` on Node 22, so a broken link between articles stops the
deploy. The `links` workflow checks the external links every Monday and keeps
one issue, «Мёртвые ссылки в статьях», open while any source answers 404, 410
or has lost its domain; a 403 or a timeout is reported but does not count,
because journals and news sites answer scripts that way.

## Where things live

| Path | What it holds |
| --- | --- |
| `src/content/blog/` | 138 Markdown files in eight sections: 126 articles and the `about-<folder>.md` intro of a folder. |
| `src/content/pages/` | The home page (`main.md`) and the about page (`about-me.md`). |
| `src/content/notes/` | The short notes, one file per note, named after the UTC minute. |
| `src/content.config.ts` | The three collections, their glob loaders and their Zod schemas. |
| `src/pages/blog/[...path].astro` | One route for every article and every folder. Both come out of the same template. |
| `src/pages/blog/index.astro` | The archive: a topic tree (sections, series, science subfolders) above a year-and-month chronology. |
| `src/pages/search.astro`, `search-index.json.ts` | The search page and the full-text index it downloads on the first query. |
| `src/components/MindMap.astro`, `Picker.astro`, `Tools.astro`, `Questionnaire.astro` | The interactive blocks and their browser-side controllers. |
| `src/data/` | The data behind those blocks, one file per block, with a registry per kind. |
| `src/scripts/theme.js` | The font size, the can picker for the accent, the copy buttons, the Mermaid rendering, which imports Mermaid only when a page has a diagram. |
| `src/layouts/Layout.astro` | The shared head: preloaded fonts, the static dark theme (`data-theme="dark"` written into the markup), the inline paint script, the Open Graph and Twitter Card tags, the canonical link. |
| `src/scripts/ref-tip.js` | The shared styled tooltip: the source behind a reference chip, the can names above the settings swatches. |
| `src/utils/search-matching.ts`, `src/pages/search-lemmas.json.ts` | The word matching of the search: Russian suffix stripping, stop words and the table of word forms built with `az`. |
| `src/utils/series.ts` | What counts as a series, what counts as an intro file, which folders have an article to show. |
| `src/utils/date.ts` | Dates, sorting, the reading time, the note anchor. |
| `src/config.ts` | The site metadata, the Russian names of the folders, the mapping of the two body folders onto the body hub. |
| `src/pages/og/[...path].png.ts`, `src/utils/og-image.ts` | The link preview image of every article and the shared one, `/og/default.png`, drawn as SVG and rendered to PNG at build time. |
| `scripts/` | The internal and external link checkers. |
| `astro.config.mts` | The static output, the sitemap, the redirects. |
| `src/styles/global.css` | The visual system, over Pico CSS. `DESIGN.md` holds the rules behind it. |
| `.claude/skills/` | Two skills that write articles and notes in the author's voice. Read them before writing prose for this site. |

## Traps

- **The catch-all route serves folders as well as files.** `getStaticPaths`
  returns a route per article and a route per folder, and the component
  branches on the `kind` prop. A new article needs no page file. A new folder
  gets a page for free once it holds an article, and that page is where the
  intro text and the list of articles go. A folder with only its
  `about-<name>.md` gets no page at all, and neither does the intro file: an
  empty section would land in the sitemap and in search results.
- **A file called `about-<name>.md` carries the intro of its folder rather
  than being an article.** `isAbout()` in `src/utils/series.ts` matches on the
  name prefix. Such a file stays out of the archive, out of the article lists
  and out of the search results. It stays in the RSS feed — unless its folder
  holds no article: the feed drops the intro of an empty folder. A folder
  takes its Russian title from this file, with the `: Об этой секции` suffix
  cut off.
- **A series is a folder where at least one article carries `part`.** Nothing
  marks the folder itself. `getSeries()` returns null when no article in it
  has `part`, and the folder behaves as an ordinary section. The "part N of M"
  line counts the articles with `part` in that folder, drafts excluded.
- **The body hub is a page without a folder.** `science/body` does not exist
  in the content. `getStaticPaths` adds it by hand, and the route branches on
  `isBodyHub`: it lists the direct articles of `science/human-body/` and the
  parts of the `science/body-and-environment/` series on one page. The folder
  page of `science` replaces the two body subgroups with a link to the hub,
  and `sectionPagePath()` in `src/config.ts` maps both body folders onto
  `science/body` in breadcrumbs and search results.
- **A `map`, `picker` or `questionnaire` key that misses the registry renders
  nothing.** The route tests `maps[entry.data.map]`,
  `pickers[entry.data.picker]` and `questionnaires[entry.data.questionnaire]`,
  and a key with no entry in the registry under `src/data/` produces no block,
  no warning and a green build. A new key goes in the registry first.
- **The `tools` block is hard-coded to one key.** The route tests
  `entry.data.tools === 'antidepressants'`. A second tools set needs a change
  in the route as well as a data file.
- **The search page ships the whole list and filters it in the browser.**
  `src/pages/search.astro` renders every article as a hidden `<li>` and
  unhides the matches as the visitor types; the article texts are not in the
  page. They are fetched from `search-index.json` when the field takes
  focus, once per visit. While they travel, a first pass matches titles,
  sections and summaries from the page itself, and a second pass re-renders
  the list when the texts arrive. The page is useless without JavaScript,
  so the field, the status line and the results carry `needs-js`, and the
  `noscript` block links to the archive.
- **Search matches words, not only raw substrings.** A query matches a title,
  a section, a summary or the full text as a substring that starts a word,
  and by words: `src/utils/search-matching.ts` strips common Russian
  suffixes and drops stop words, so «сахаром» finds «сахар». Suffix stripping
  cannot see fleeting vowels, so the build also writes `search-lemmas.json`
  (`src/pages/search-lemmas.json.ts`): every word form of the articles mapped
  to its dictionary form by `az` (OpenCorpora), which is how «сна» and «сне»
  find «сон». Only forms that occur in the articles are in it, about 100 KB
  gzipped. Guesses that cut an unknown prefix (`PrefixUnknown`) are dropped,
  or the surname Уилсон would read as «сон». The page works without the
  table and falls back to suffix stripping. A substring in the middle of a
  word does not count, or «сон» would find «Олсон», and a query of three
  letters matches only a whole word, or «сна» would find «сначала». Within a
  rank, the article with more matching words comes first. A Cyrillic query
  also becomes Latin for the file names, matched against the start of each
  part of the name.
- **The search query lives in session storage.** The key is `sidebar-search`,
  a name left over from the old sidebar. The query survives a reload in the
  same tab and is gone in the next one.
- **The font size and the accent flavour are applied
  before the first paint.** An inline script in the head of `Layout.astro`
  reads local storage (`font-size-v2`, `flavor`), and
  `src/scripts/theme.js` reads the same keys a moment later. When the two
  disagree the page is drawn one way and jumps to another. The theme is not
  a setting: `data-theme="dark"` sits in the markup, and a stale `theme`
  key in an old visitor's storage is read by nothing. Nor is the column
  width: one measure of 45em for every page, so the header and the text
  share one edge, and a stale `reading-width` key is read by nothing too. The flavour is a
  setting: `html[data-flavor]` blocks in `global.css` re-point the accent,
  and Black is not among the choices, because at 1.09:1 on Night it is the
  background. The inline script also sets the `js` class: the reader
  controls in the header and the search page itself are hidden without it.
- **The section names come from two places.** `SECTION_TITLES` in
  `src/config.ts` is the fallback list; a folder with an `about-<name>.md`
  takes its title from that file. A folder missing from both shows the raw
  slug, which is how a forgotten translation surfaces. A series name reaches
  the section line and the search results only through `getSeriesTitles()`
  in `src/utils/series.ts`: a caller of `getArticleSections()` that skips it
  falls back to the list.
- **The redirects live in `astro.config.mts`.** Twelve of them: the nine old
  `dev/agent-*` addresses, the old map of the antidepressants series, the
  old place of the article that moved from `ideas` to `life` and the old
  `whisper-local-windows` address of the Lazy to Text article. A changed path
  needs a redirect there, because that is where the bookmarks of other people
  point.
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
- **A source in an article is a `[N]` chip.** A `span.ref-run` around `a.ref`
  with `data-tip` and `aria-label`, numbered through the article in the order
  of first appearance, set against the claim with no space before it. An
  article does not mix chips with inline source links, and links to other
  texts of the blog stay ordinary links. Every source is opened and compared
  with the claim before publishing: the numbers, the sample, the wording, and
  whether the source shows a link or a cause. A second pass is made by someone
  other than the author of the text, and the humanizer runs after it, because
  a reworded sentence can touch a number.
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
