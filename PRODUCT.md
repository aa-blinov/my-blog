# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

The site is a static build. Astro 7 renders every route to HTML at build time,
and GitHub Pages serves the result of `dist/`. A top navigation leads to a
centered reading column. The content, interface and feeds are in Russian.
The repository documents are in English.

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
find articles through the archive, section pages and search. Success for the
reader: they reach the end of an article and understand that a person wrote
it, not a model. Success for the site: the article is found, read to the end,
and the reader comes back for another.

## Positioning

A personal blog with a compact chronological archive, Literata article text,
monospaced navigation and a quiet reading column. Search transliterates
Russian queries to find Latin file names. The "part N of M" line puts a
series in chapter order.

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
  Mono for interface and code, Literata for article prose, Shiki for the code,
  Mermaid for the diagrams, rendered in the browser by `src/scripts/theme.js`.
  A static build, deployed to GitHub Pages by GitHub Actions on Node 22, with
  an `astro check` step before the build.
- Publication: the author writes in an editor, commits and pushes, and the
  article appears after the build.
- The author writes cycles of related articles, nine of them about how his
  own agent is put together, and journalism about fresh news with the facts
  checked.

## Capabilities and Constraints

Present now, confirmed by the code:

- The header links to the home page, archive, notes, about page and search.
  The dedicated search page matches titles, sections, file names and article
  text, including common Russian inflections. It shows excerpts with matched
  words highlighted, transliterates Russian queries and remembers the query
  in the tab. An empty result offers a link to the archive.
- The header disclosure offers a light and dark theme, five font sizes and
  three reading widths.
- The home page offers topic links near the introduction, followed by four
  curated articles across AI, popular science, personal essays and development,
  each with a short description. It then shows the seven latest publications
  with summaries and reading times, marks projects and links to
  the full archive beside the list heading. The archive at `/blog/` groups
  articles by year and month, newest first, shows a topic below each title and
  links to the months, topic pages, subtopics and article series in a hierarchy. Each
  section and subfolder has a page. Articles link to their parent sections
  above the title and show the date and reading time below it. The science
  section groups body articles and the "Body and environment" series under
  `/blog/science/body/`; existing article and series addresses stay available.
- The table of contents in long articles starts closed. Up to three related
  articles appear after the text. Author details and site links stay
  in the shared footer rather than repeating after every article.
- Code blocks with a copy button, Mermaid diagrams with a toggle back to the
  source, a sitemap.
- The notes feed at `/notes/`: one file per note
  at `src/content/notes/YYYY-MM-DD-HHMM.md`, frontmatter of `date` and `draft`
  only, an anchor for every note, and up to the latest three on the home page.
- Two feeds: `/rss.xml` for the articles, `/notes.xml` for the notes, with
  `rel=alternate` links in the head of the page and a line in the footer.
- Series: a folder whose files carry `part`, with `about-<folder>.md` giving
  the name and the intro. Under the heading of a part, the line "Series «…»
  ~ part N of M"; after the text, links to the previous and the next part
  with their titles. The folder page lists the parts in chapter order. The
  three series are
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
- The licence is MIT, like every repository in the collection.
- There is no automated test suite. `npm run check` and `npm run build` are
  the verification.
- The repository is published for the operation of the site. It is neither a
  template nor a starter kit.

## Brand Commitments

Pinned by the author

- JetBrains Mono for navigation and structure, Literata for prose, and the
  austerity: only text and structure, no visual noise.
- The light and dark themes and reader-controlled text size.

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
2. Navigation starts in the header. The archive supports browsing by date,
   and section links let the reader follow a topic.
3. Nothing extra by default. A capability appears against a confirmed need
   (the feeds, the series, the notes), and not "for the future".
4. Verifiability. The claims in the articles have primary sources, and the
   site has no hidden dependency on an outside service.
5. A person on the other end. The site and the texts should read as written
   by the author and not generated.

## Accessibility & Inclusion

- The code confirms a skip link, a live announcement of the font size for
  screen readers, a pressed state on the theme toggle, visible keyboard
  focus and 44-pixel targets in the top navigation.
- The reader controls are the accessibility mechanism: a light and a dark
  theme, five font sizes, a collapsed table of contents on long reads, and a search
  that opens from the keyboard with the `/` key.
- The design system records the contrast it measured, for instance Monster
  Green Ink at 5.1:1 on white and 4.7:1 on the code tint.
- Not decided: the author has set no separate standard for accessibility.
  There is no statement about the alt text of the images in the articles, and
  no external audit of the site.
