# Architecture

How `my-blog` is put together.

## The shape

The site is a static Astro build. The content is a folder of Markdown files,
the pages come out of that folder, and nothing runs on a server. There is one
command in the repository and one route file that serves the whole blog.

```
src/content/**.md
  -> three collections with a schema each
  -> one catch-all route: a page per article and a page per folder
  -> components, the sidebar, the two feeds
  -> dist/
  -> GitHub Pages
```

| Module | What it is responsible for |
| --- | --- |
| `src/content/blog/` | The articles: 115 Markdown files in eight sections, one file per article, plus the `about-<section>.md` intro of a section. |
| `src/content/pages/` | The home page (`main.md`) and the about page (`about-me.md`). |
| `src/content/notes/` | The short notes, one file per note, named after the UTC minute. |
| `src/content.config.ts` | The three collections, their glob loaders and their Zod schemas. |
| `src/pages/blog/[...path].astro` | The route for every article and every folder. Both come out of the same file. |
| `src/pages/blog/index.astro` | The list of every article. |
| `src/pages/index.astro` | The home page: the recent articles and the map of the sections. |
| `src/pages/notes/index.astro` | The feed of the short notes. |
| `src/pages/rss.xml.ts`, `src/pages/notes.xml.ts` | The two feeds. |
| `src/pages/404.astro` | The page for an address that no longer exists, with a search field in it. |
| `src/layouts/Layout.astro` | The shell of every page, the head, the inline script that applies the theme and the font size. |
| `src/components/` | The parts of a page: the tree, the article, the series navigation, the table of contents, the interactive blocks. |
| `src/data/` | The content of the interactive blocks: `maps/`, `pickers/` and `tools/`. |
| `src/utils/` | The rules: what counts as a series, what counts as an intro file, the dates, the breadcrumbs, the layout of a map. |
| `src/scripts/theme.js` | The theme, the font size, the copy buttons and the Mermaid rendering. |
| `src/scripts/ref-tip.js` | The tooltip behind a reference chip. |
| `src/styles/global.css` | The visual system, over Pico CSS. `DESIGN.md` holds the rules behind it. |
| `src/config.ts` | The metadata of the site, the headings of the sections and the size of the recent list. |
| `astro.config.mts` | The static output, the sitemap and the redirects. |
| `.claude/skills/` | Two skills that write an article and a note in the voice of the author. |

## The data flow

### From a file to a page

```
a Markdown file in src/content/blog/
  |
  |  the glob loader reads the folder, the Zod schema checks the frontmatter
  v
an entry of the blog collection: id, data, body
  |
  |  getStaticPaths returns one route per entry
  |  and one route per folder that holds an entry
  v
src/pages/blog/[...path].astro
  |  the kind prop says which of the two it is
  v
a folder page or an article page
  |
  |  the article page renders the Markdown, collects the headings,
  |  reads the series, the map, the picker and the tools
  v
Layout.astro -> dist/
```

A schema failure stops the build. A missing `title` or a date that does not
parse is caught before anything is published, and the file that caused it is
named in the error.

### The tree of the sidebar

```
the blog collection
  |
  |  liveFolders() drops the about-*.md files and keeps the folders
  |  that hold something else
  v
a tree of folders and files, with the date of each file
  |
  |  the stylesheet applies --order-desc or --order-asc
  v
the order the reader sees
```

The tree is built from the same collection as the pages, on every page, so it
cannot drift from the content. A file that is added to the folder appears in
the tree on the next build.

### The search

```
the query
  |
  |  the query is transliterated, and so is every word of every file name
  |  the match is made against the start of a word
  v
the matching rows of the tree
```

The transliteration table is written twice: once in the inline script of
`Sidebar.astro`, which runs before the module, and once in the module below
it. The two have to agree, or the search behaves one way before the module
arrives and another way after it.

### The interactive blocks

```
the frontmatter of an article: map, picker or tools
  |
  |  the route looks the key up in the registry
  v
src/data/maps/index.ts, src/data/pickers/index.ts
  |
  |  the layout of a map is computed at build time
  v
MindMap.astro, Picker.astro, Tools.astro
  |
  |  the controller runs in the browser
  v
the block on the page
```

A key with no entry in the registry produces no block, no warning and a
green build.

## Decisions worth knowing about

### One catch-all route serves the files and the folders

`getStaticPaths` returns a route per article and a route per folder in the
tree, and the component branches on the `kind` prop. A new article needs no
page file and no entry in a router, and a new folder gets a page for free.
The cost is that the two cases share one file, and the branch has to be
read before the props are used.

### An `about-<name>.md` file carries the intro of its folder

`isAbout()` in `src/utils/series.ts` matches on the name prefix. Such a file
stays out of the tree, out of the blog index and out of the lists of
articles, and its text becomes the intro of the folder page. It stays in the
feed, because the feed is a list of what was written.

### A series is a folder where at least one file carries `part`

Nothing marks the folder itself. `getSeries()` returns null when no file in
it has a `part`, and the folder behaves as an ordinary section. Three folders
are series today: `dev/agent/` with nine parts, `science/body-and-environment/`
with six and `science/mind/antidepressants/` with eight.

### The order of the tree is the stylesheet, not the document

`Sidebar.astro` computes `--order-desc` and `--order-asc` for every item and
the stylesheet applies them, so the markup stays alphabetical while the
visible order changes. The intro of a section is pinned to the top, and a
part of a series keeps its number under any order.

### The theme and the font size are applied before the first paint

An inline script in the head of `Layout.astro` reads the local storage, and
`src/scripts/theme.js` reads the same keys a moment later. The font key is
`font-size-v2`, and when the two read different keys the page is drawn at
one size and jumps to another. The inline script also sets the `js` class,
and the search and the sort control are hidden without it.

### The search lives in session storage, the order in local storage

A search survives a reload in the same tab and is gone in the next one. The
order of the tree is per browser.

### The mobile tree is an overlay, and the page behind it is `inert`

`NavBar.astro` marks the main column, the footer and the skip link as
`inert` while the tree is open, and `Escape` closes it and puts the focus
back on the toggle. Anything that stops doing this lets Tab walk behind the
overlay.

### A note carries its identity in the file name

The name of the file, the `date` in the frontmatter and the anchor on the
page have to be the same minute in UTC. The anchor comes from
`noteAnchor()`.

### The redirects live in `astro.config.mts`

Ten of them: the nine old `dev/agent-*` addresses and the old map of the
antidepressants series. An address that changed needs a redirect there,
because that is where the bookmarks of other people point.

## Boundaries

- **`src/content.config.ts` owns the contract with the content.** The three
  schemas decide what a file may carry, and a file that breaks one of them
  stops the build.
- **`src/utils/series.ts` owns the rules about the tree.** What counts as a
  series, what counts as an intro file and which folders have an article to
  show are decided in one place, and the pages and the sidebar ask it.
- **`src/components/` owns the rendering.** A component takes an entry or a
  prop and draws it. None of them reads the collection on its own.
- **`src/data/` owns the content of the interactive blocks.** A block is a
  data file and a registry entry, and the route looks the key up before it
  draws anything.
- **`src/scripts/` owns the browser.** The theme, the font size, the copy
  buttons, the Mermaid rendering and the reference tooltip live there. The
  inline scripts own the two things that have to run before the modules, the
  theme and the transliteration table.
- **`src/config.ts` owns the metadata.** The name of the site, the address,
  the headings of the sections and the size of the recent list.
- **There is no server.** No API, no account, no comment, no analytics and
  no form. The build produces files, and the browser reads them.
