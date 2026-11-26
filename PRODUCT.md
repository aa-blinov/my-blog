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
informal "you". One article keeps one form. The exception is the
antidepressants series, a guide for patients, which says "вы" throughout.
Quotes keep the form of the person quoted.

Nothing else is known. The site carries no behavioural analytics or comments, so the
repository holds no traffic figure, no subscriber count and no reader
feedback. A product record must not invent them.

## Product Purpose

The personal blog of Alexander Blinov, CTO of EORA and senior
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

- The header links to the home page, archive, search, notes and about page in that order.
  The notes link, like the notes line in the footer and the notes feed in the
  head, appears only once a note is published: an empty feed in the menu reads
  as an abandoned site.
  Every list of articles (a section page, the home page, "more in this
  section" after an article) shows a summary: the `summary` field, or the
  opening of the first paragraph when there is none, with source chips and
  link addresses removed.
  The dedicated search page matches titles, sections, file names and article
  text, including Russian word forms: the build maps every word form of the
  articles to its dictionary form, so «сна» finds «сон». A match counts from the start
  of a word, never from its middle. Title matches come first; among the
  rest, the article where the query word occurs more often ranks higher.
  It shows excerpts with matched
  words highlighted, transliterates Russian queries and remembers the query
  in the tab. It starts downloading the article texts when the field takes
  focus: the first matches on titles, sections and summaries render from the
  page itself, and full-text matches join in a second pass when the texts
  arrive. An empty result offers a link to the archive.
- The head of every page carries Open Graph and Twitter Card tags with a
  canonical link, so a link pasted into a chat unfolds with the title and the
  description of the page. The description of an article is its `summary`, or
  the opening of its text cut at 160 characters; a section takes its intro, or
  names its three newest articles when it has none. The general line of the
  site is left for the home page and the archive.
  Every article also carries its own preview image, 1200×630: the section line
  and the title in JetBrains Mono on Night with the Original accent, drawn at
  build time; the other pages share one image of the site.
- The header disclosure offers five font sizes and
  a lineup of can swatches that moves the accent to the chosen flavour. The
  default is the Original green; the choice is remembered and applied
  before the first paint. The site is dark only: the night palette is the
  single palette, and Monster Green at 10.17:1 on Night is the green of the
  text as well as of the marks.
- The home page is a feed under a short introduction. The feed lists every
  article newest first, ten rows at a time with a «Показать ещё» button, each
  row with its topic path, summary, date and reading time. Parts of one series
  published within a week of each other collapse into one row that unfolds
  into the parts in order. Above it, a row of topics in the bracket idiom of
  the header, «[все 126] [научпоп 57] …», filters the feed in place and
  writes the topic into the address (`?topic=science`), so a filtered feed can
  be shared; on a phone the row scrolls sideways in one line. Without
  JavaScript the topics are links to the section pages and the first ten rows
  show, with a link to the full list by date. The latest notes follow once
  notes are published. A hand-picked «start here» list was tried and removed: placed under
  the feed nobody reached it, and the topic filter answers the same question. The archive at `/blog/` groups
  articles by year and month, newest first, shows the topic path below each title and
  links to the months, topic pages, subtopics and article series in a hierarchy,
  with a shortcut from the topics to the chronological list. Each
  section and subfolder has a page. Articles link to their parent sections
  above the title and show the date and reading time below it. Health
  articles carry no separate disclaimer line: the sources sit in the text as
  chips, and the author's role is on the about page. Lists show the date and reading time; file names
  and folder paths stay out of the interface. The science
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
  The article feed carries the full rendered text of each item, with relative
  links rewritten to absolute ones, and drops the intro file of a folder that
  holds no article. Such a folder has no page on the site either, so an empty
  section never reaches the sitemap.
- Series: a folder whose files carry `part`, with `about-<folder>.md` giving
  the name and the intro. Under the heading of a part, the line "Series «…»
  ~ part N of M"; after the text, links to the previous and the next part
  with their titles. The folder page lists the parts in chapter order, and
  so does the parent page when the series is its direct subfolder. A page
  further up shows the series as one card with its name and the number of
  parts instead of mixing the parts into the list of articles. The name from
  `about-<folder>.md` is the one used everywhere: the archive, the section
  line above an article title, the search results. The four series are
  `ai/ai-for-the-unprepared/` with five parts, `dev/agent/` with nine,
  `science/body-and-environment/` with six, `science/mind/antidepressants/`
  with eight.
- The interactive blocks of the antidepressants series: a radial map of the
  drugs with a card per substance, a picker that sorts them by the constraints
  ticked by the reader, a set of questions for the doctor with a checklist, a
  monitoring timeline and a table of combinations with a verdict on each.
  Every claim carries a source.

Deliberately not true, and worth knowing before a change:

- No behavioural analytics, comments, forms, or accounts. The optional view
  counter stores aggregate counts in a standalone service. Each page load
  with JavaScript counts as a view, including repeat loads. The home page
  shows the site total, today's count in the Asia/Almaty time zone and the
  first recorded day. Each article shows its count in the metadata line.
  Counts are hidden if the service is unavailable or unconfigured.
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
- A dark-only interface and reader-controlled text size.
- The flavour palette: the can colours of the series, measured where a can
  could be photographed. The default interface is single-green; a reader
  may pour another can, which moves the accent and nothing else.

Name: "Блог Александра Блинова", Alexander Blinov's blog. The
contacts in the footer are GitHub `aa-blinov`, Telegram and LinkedIn. The
voice of the texts: the first person, short paragraphs, no dashes, no office
speak and no stock phrasing. The author cleans the traces of language models
out of the texts on his own.

## Evidence on Hand

- 138 Markdown files in `src/content/blog/`, including the nine-part series
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
  screen readers, visible keyboard
  focus and 44-pixel targets in the top navigation.
- The reader controls are the accessibility mechanism: five font sizes,
  a collapsed table of contents on long reads, and a search
  that opens from the keyboard with the `/` key.
- The design system records the contrast it measured, for instance Monster
  Green at 10.17:1 on Night.
- Not decided: the author has set no separate standard for accessibility.
  There is no statement about the alt text of the images in the articles, and
  no external audit of the site.
