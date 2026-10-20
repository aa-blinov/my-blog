# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

The site is a static build. Astro 7 renders every route to HTML at build time,
and GitHub Pages serves the result of `dist/`. The interface is three columns
on a desktop (toolbar, file tree, article) and a top bar with an overlay tree
under 992 pixels. The content, the interface and the feeds are in Russian; the
documents in the repository are in English.

## Users

The owner's record of the product names two audiences, and both read in
Russian.

- A broad audience of popular science readers. They arrive from a link or
  from a search engine for one article about the body, travel, language models
  or society. They read on a phone and on a laptop, usually one text per
  visit.
- Developer colleagues and team leads. They come for the position of the
  author and for facts that can be checked, and they value links to primary
  sources.

The author writes in the first person and addresses the reader as "ты", the
informal "you".

Nothing else is known. The site carries no analytics and no comments, so the
repository holds no traffic figure, no subscriber count and no reader
feedback. A product record must not invent them.

## Product Purpose

The personal blog of Alexander Blinov, head of development at EORA and senior
Python developer at NSU, in the shape of a digital garden: articles on
development, language models, popular science and personal thoughts. The job
of the site is to let a text be read without visual noise, and to let a reader
find the article they came for inside a tree of sections. Success for the
reader: they reach the end of an article and understand that a person wrote
it, not a model. Success for the site: the article is found, read to the end,
and the reader comes back for another.

## Positioning

A blog that looks and navigates like a project in an editor. The tree of files
replaces the menu, every article is a file in a folder, the search
transliterates so that a Russian query finds a Latin file name, and the
"part N of M" line puts a series in order the way a list of chapters does.

The content is a difference in itself. The author writes agents himself, takes
the industry around language models apart from the inside, and backs every
claim with a primary source linked inline in the sentence.

The third difference is the antidepressants series. It ships a radial map of
the drugs, a picker that sorts them by the constraints of the reader, a
checklist of questions for a doctor, a monitoring timeline and a table of
combinations with a verdict on each. Every statement in those blocks points
at NICE NG222, the clinical guidelines of the Russian Society of Psychiatrists,
a drug label or STAR*D. A blog about medicine is usually an opinion; here the
opinion and the guideline are kept apart.

## Operating Context

- Content: Markdown in `src/content/blog/<section>/…`, `src/content/pages/`
  and `src/content/notes/`. The frontmatter is `title` and `date`, then
  `draft`, `summary`, `section`, `part`, `map`, `picker` and `tools` where
  they apply. The sections are `ai`, `dev`, `ideas`, `knowledge`, `life`,
  `mgmt`, `projects` and `science`, the last with subfolders. Most of them
  carry an `about-<section>.md`.
- Stack: Astro 7 with the content layer and the glob loader, Pico CSS, JetBrains
  Mono, Shiki for the code, Mermaid for the diagrams, rendered in the
  browser by `src/scripts/theme.js`. A static build, deployed to GitHub Pages
  by GitHub Actions on Node 22, with an `astro check` step before the build.
- Publication: the author writes in an editor, commits and pushes, and the
  article appears after the build.
- The author writes cycles of related articles, nine of them about how his
  own agent is put together, and journalism about fresh news with the facts
  checked.

## Capabilities and Constraints

Present now, confirmed by the code:

- The file tree in the sidebar: sections, nested folders, `main.md`,
  `about-me.md` and `notes.md` pinned, the articles of a section ordered by
  date, search with transliteration, the order of the tree in local storage,
  the search in session storage.
- A light and a dark theme, five font sizes, the controls in the toolbar.
- The home page with the seven latest articles, `/blog/` grouped by section, a
  page per section and per subfolder, an article page with the meta line
  "date ~ path.md".
- Code blocks with a copy button, Mermaid diagrams with a toggle back to the
  source, a sitemap.
- The notes feed at `/notes/`: a `notes.md` pin in the tree, one file per note
  at `src/content/notes/YYYY-MM-DD-HHMM.md`, frontmatter of `date` and `draft`
  only, an anchor for every note, and up to the latest three on the home page.
- Two feeds: `/rss.xml` for the articles, `/notes.xml` for the notes, with
  `rel=alternate` links in the head of the page and a line in the footer.
- Series: a folder whose files carry `part`, with `about-<folder>.md` giving
  the name and the intro. Under the heading of a part, the line "Series «…»
  ~ part N of M"; after the text, links to the previous and the next part
  with their titles; the folder page lists the parts with their numbers; in
  the tree the parts keep their order whatever the sort is. Three series:
  `dev/agent/` with nine parts, `science/body-and-environment/` with six,
  `science/mind/antidepressants/` with eight.
- The interactive blocks of the antidepressants series: a radial map of the
  drugs with a card per substance, a picker that sorts them by the constraints
  ticked by the reader, a set of questions for the doctor with a checklist, a
  monitoring timeline and a table of combinations with a verdict on each.
  Every claim carries a source.

Deliberately not true, and worth knowing before a change:

- No analytics, no comments, no forms, no accounts. The site has no
  server-side part and talks to no third party.
- The interface, the articles and the feeds are in Russian. An English version
  is not planned.
- The licence is proprietary: all rights reserved, with no permission granted
  to copy, modify or redistribute.
- There is no automated test suite. `npm run check` and `npm run build` are
  the verification.
- The repository is published for the operation of the site. It is neither a
  template nor a starter kit.

## Brand Commitments

Pinned by the author and unchanged by any later design work:

- The file tree as the main navigation, the metaphor of an editor, the names
  of the articles as `.md` files.
- The monospaced JetBrains Mono and the austerity: only text and structure, no
  visual noise.
- The light and the dark theme, and the font size control in the toolbar.

Name: "Личный сайт Александра Блинова", Alexander Blinov's personal site. The
contacts in the footer are GitHub `aa-blinov`, Telegram and LinkedIn. The
voice of the texts: the first person, short paragraphs, no dashes, no office
speak and no stock phrasing. The author cleans the traces of language models
out of the texts on his own.

## Evidence on Hand

- 115 Markdown files in `src/content/blog/`, including the nine-part series
  about how the agent is put together (`dev/agent/`), the popular science long
  reads (`science/`), the project posts (`projects/`) and the essays about
  language models (`ai/`).
- An article about how the blog itself is put together:
  `src/content/blog/dev/blog-architecture.md`.
- The about page with the biography and the stack:
  `src/content/pages/about-me.md`.
- Two skills that write articles and notes in the author's voice:
  `.claude/skills/write-my-article/SKILL.md` and
  `.claude/skills/write-my-note/SKILL.md`.
- The design system with the tokens and the rules: `DESIGN.md`.
- Absent, and not to be invented: no reader testimonials, no traffic figures,
  no subscriber counts, no comparison with other blogs.

## Product Principles

1. The text comes first. Any decoration serves the reading and gets out of
   the way.
2. Navigation like a project. The reader orients by file structure, not by a
   marketing menu.
3. Nothing extra by default. A capability appears against a confirmed need
   (the feeds, the series, the notes), and not "for the future".
4. Verifiability. The claims in the articles have primary sources, and the
   site has no hidden dependency on an outside service.
5. A person on the other end. The site and the texts should read as written
   by the author and not generated.

## Accessibility & Inclusion

- The code confirms a skip link, a live announcement of the font size for
  screen readers, a pressed state on the theme toggle, an inert page behind
  the mobile tree, and tap targets of 44 pixels on a phone.
- The reader controls are the accessibility mechanism: a light and a dark
  theme, five font sizes, a table of contents on the long reads, and a search
  that opens from the keyboard with the `/` key.
- The design system records the contrast it measured, for instance Monster
  Green Ink at 5.1:1 on white and 4.7:1 on the code tint.
- Not decided: the author has set no separate standard for accessibility.
  There is no statement about the alt text of the images in the articles, and
  no external audit of the site.
