---
name: blinov.monster
description: A quiet personal blog with a chronological archive, Literata prose, a monospaced interface and one green accent.
colors:
  monster-green: "#95d600"
  monster-green-deep: "#7ab800"
  monster-green-bright: "#a8e00a"
  monster-green-ink: "#4d7a00"
  monster-green-ink-deep: "#3f6600"
  on-accent: "#ffffff"
  on-accent-night: "#13171f"
  paper: "#ffffff"
  paper-code: "#f3f4f7"
  paper-rule: "#e7eaf0"
  ink: "#373c44"
  ink-heading: "#2d3138"
  ink-contrast: "#181c25"
  ink-muted: "#646b79"
  night: "#13171f"
  night-code: "#1a1e28"
  night-rule: "#202632"
  night-ink: "#c2c7d0"
  night-heading: "#f0f1f3"
  night-contrast: "#dfe3eb"
  night-muted: "#7b8495"
  editor-block: "#24292e"
  editor-text: "#e1e4e8"
typography:
  display:
    fontFamily: "JetBrains Mono Variable, JetBrains Mono, Cascadia Code, Consolas, monospace"
    fontSize: "2em"
    fontWeight: 700
    lineHeight: 1.125
  headline:
    fontFamily: "JetBrains Mono Variable, JetBrains Mono, Cascadia Code, Consolas, monospace"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "JetBrains Mono Variable, JetBrains Mono, Cascadia Code, Consolas, monospace"
    fontSize: "1.15rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Literata Variable, Literata, Georgia, serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono Variable, JetBrains Mono, Cascadia Code, Consolas, monospace"
    fontSize: "0.8rem"
    fontWeight: 400
    lineHeight: 1.2
  caption:
    fontFamily: "JetBrains Mono Variable, JetBrains Mono, Cascadia Code, Consolas, monospace"
    fontSize: "0.7rem"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  none: "0px"
  hairline: "3px"
  sm: "4px"
spacing:
  xs: "0.15rem"
  sm: "0.25rem"
  md: "0.5rem"
  base: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  page: "2rem"
components:
  nav-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    size: "40px"
    rounded: "{rounded.none}"
  nav-button-hover:
    backgroundColor: "transparent"
    textColor: "{colors.monster-green}"
  search-input:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    border: "{colors.paper-rule}"
    rounded: "{rounded.hairline}"
  search-input-focus:
    border: "{colors.monster-green-ink}"
  sort-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    border: "{colors.paper-rule}"
    rounded: "{rounded.hairline}"
  file-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink-contrast}"
    typography: "{typography.label}"
  file-link-active:
    backgroundColor: "rgba(149, 214, 0, 0.1)"
    textColor: "{colors.monster-green}"
  code-block:
    backgroundColor: "{colors.editor-block}"
    textColor: "{colors.editor-text}"
    rounded: "{rounded.sm}"
  link-chip:
    backgroundColor: "{colors.paper-code}"
    textColor: "{colors.monster-green}"
    border: "{colors.paper-rule}"
    rounded: "{rounded.sm}"
  post-title-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink-contrast}"
    typography: "{typography.title}"
---

# Design system: blinov.monster

## Overview

The site is a personal reading room with a compact top navigation. JetBrains
Mono shapes the navigation and hierarchy; Literata carries the prose in the
centered reading column. The archive is a chronological list with a date at
the right of each title.

Monster Green marks the current page, focus and hovered links. A hairline
separates the header from the page. The header keeps navigation visible and
groups theme, font size and column width in one disclosure. Both themes use
the same type scale and layout.

## Colors

The tokens live in `src/styles/global.css` under the `app-` prefix, so they
cannot collide with the Pico CSS the site is built on.

### Primary

- **Monster Green** (`#95d600`): the accent of the system. It marks the
  active file, the focus of the search field, a link under the pointer and
  the button that says the text was copied.
- **Monster Green Deep** (`#7ab800`) and **Monster Green Bright** (`#a8e00a`):
  the hover of the accent, in the light and the dark theme.
- **Monster Green Ink** (`#4d7a00`) and **Monster Green Ink Deep**
  (`#3f6600`): the green that may be used as text in the light theme.

The lime cannot be text. `#95d600` on white measures 2.1:1, so everything
that is read as text in the light theme is set in Monster Green Ink, and the
lime is left for fills, for tinted backgrounds and for the dark theme.

### Neutral, the paper theme

- **Paper** (`#ffffff`): the page.
- **Paper Code** (`#f3f4f7`): the fill of a code chip and of a hovered row.
- **Paper Rule** (`#e7eaf0`): the 1px line that separates two things.
- **Ink** (`#373c44`): the body text.
- **Ink Heading** (`#2d3138`): the headings.
- **Ink Contrast** (`#181c25`): the strongest ink, for a link that has to
  stand out from its neighbours.
- **Ink Muted** (`#646b79`): the dates, the meta lines and the placeholders.

### Neutral, the night theme

- **Night** (`#13171f`): the page.
- **Night Code** (`#1a1e28`): the fill of a code chip.
- **Night Rule** (`#202632`): the 1px line.
- **Night Ink** (`#c2c7d0`): the body text.
- **Night Heading** (`#f0f1f3`): the headings.
- **Night Contrast** (`#dfe3eb`): the strongest ink.
- **Night Muted** (`#7b8495`): the dates and the meta lines.

### The editor block

Code and diagrams live in a dark window in both themes: the block is
`#24292e` and its text is `#e1e4e8`. It does not follow the theme, because it
is a window of an editor inside the document rather than a part of the
document.

### Named rules

**The Single Highlight Rule.** Monster Green is the only chromatic colour in
the system. It appears as a reaction to a state, active, hovered, focused,
copied, or as the mark on a link. A second accent is not introduced for any
task.

**The Ink Rule.** The lime is a highlight rather than a text colour. In the
light theme, everything that is read as text or as a thin mark is set in
Monster Green Ink and checked against 4.5:1. One hue in two densities.

**The Dark Editor Rule.** A block of code is dark in either theme.

**The Pico Boundary Rule.** Pico lives in its own cascade layer and paints by
tag, so there are two borders it may not cross. A `<nav>` receives the styles
of a horizontal menu, so only real navigation goes in one, with its list
reset, while the structural blocks, the table of contents and the footer of
an article are `details` and `aside`. Inside an `<a>` Pico replaces
`--pico-color` with the primary, so a link that has to carry the colour of
the text takes it from its parent with `color: inherit`.

## Typography

JetBrains Mono Variable, with the fallbacks `'JetBrains Mono', 'Cascadia
Code', Consolas, monospace`, carries headings, navigation, metadata, controls,
code and interactive blocks. It is shipped through
`@fontsource-variable/jetbrains-mono` with Latin and Cyrillic subsets.

Literata Variable carries continuous article prose, including paragraphs,
lists, quotations and tables. It is shipped through
`@fontsource-variable/literata`; the Russian Cyrillic subset is preloaded and
the matching Latin subset loads when needed. The body uses Literata's normal
and italic styles, while headings and structural labels stay monospaced.
There are two families, each with a fixed role.

Page type is set in the tokens of the "Tokens and icons" section. Inside a component a
size may be written in `em` so that it follows the text around it: a disclosure
summary, a table-of-contents line, the caption of a card. These `em` values are
deliberate. They are the only literal font sizes in the stylesheet, and each one
sits in a component that sets its own text size.

### Hierarchy

- **Display, 2em, 700, 1.125**: the title of an article.
- **Headline, 1.5rem, 700, 1.2**: the headings of the sections on the home
  page, on `/blog/` and on a folder page. Inside an article the scale is the
  article's own: h2 1.35em, h3 1.15em, h4 1em.
- **Title, 1.15rem, 700, 1.3**: the title of an article in a list.
- **Body, 1rem, 400, 1.6**: article prose in Literata.
- **Control, 0.8rem, 400**: the narrow-screen navigation, copy button,
  dates in the archive, series line and reading time. The search field uses
  the body size.

### The reader scale

The size of the article text belongs to the reader. The root carries a
`data-font` attribute with one of five steps, and the article scales from it:
0.8rem, 0.9rem, 1rem, 1.15rem and 1.3rem. The choice is stored in the browser
under `font-size-v2`, and the inline script in the head of the layout applies
it before the first paint. The root scale applies to the interface and article.

The root font size is 90% of the browser default, and 100% from 1440px
wide. The zoom factor multiplies it.

### Named rules

**The Two Typeface Rule.** Literata is for continuous prose. JetBrains Mono
is for headings, interface, code and structured data. Do not add a third
family.

**The Reader Scale Rule.** One root value scales the article and the interface.

**The Layer Rule.** Pico is imported into the cascade layer `pico`, so any
rule of ours beats it without `!important`. The stylesheet uses no
`!important`: a hand that reaches for it wants a more exact selector or a
rule that sits higher in the cascade.

## Layout

A single centered reading column has a normal maximum width of `45em`
including side padding. The visible line length follows Literata's glyph
width and the reader's selected text size.
Using `em` avoids shifts while the font loads. The other width settings are
`40em` and `74em`, and the browser remembers the selected width.

The navigation aligns to the normal column and wraps on narrow screens. It
scrolls with the page. The table of contents starts closed at every width.

## Elevation & Depth

There is none. `box-shadow`, `text-shadow`, `filter: drop-shadow`,
`backdrop-filter` and every gradient are switched off, including on hover
and in the mobile overlay. Where two things have to be told apart, a line is
drawn; where one thing has to be marked, a background is laid under it or
the colour of the text changes.

The keyboard focus is one outline: 2px of the primary with an offset of 2px,
and no shadow. The one box-shadow left in the stylesheet is on a node of
the map that a search has hit.

## Shapes

The radius scale has three steps and nothing else:

| Token | px | Role |
| --- | --- | --- |
| `none` | 0px | A line rather than a box: the rule of the table of contents, the divider under a heading. |
| `hairline` | 3px | The search field, the sort button, a row of the tree. |
| `sm` | 4px | The code block, the copy button, a link chip, the thumb of the scrollbar. |

Pico rounds its own elements at 0.25rem, which is 4.8px and off the scale,
so `--pico-border-radius` is set to 4px.

A circle is not a shape in this system. The scrollbar is 10px wide and its
thumb is 4px round, which is a rectangle with soft ends.

## Components

### Top navigation

The author name links home. The other links lead to the archive, notes,
about page and search. The current page has a green underline. The reading
settings open from the icon at the end of the row.

### Search

The page uses a full-width field with a visible label. Results show the
title, section and a short excerpt, with matched words marked in the selection
colour. Search matches query words across common Russian inflections. The `/`
key takes the reader to the field. Search announces the number of matches or
offers a link to the archive when there are none.

### The code block

- **Shape:** a 4px corner, the dark editor fill, the text in the editor
  colour, in both themes.
- **Copy button:** in the top right corner, a 4px corner, and it turns green
  with the word "copied" once the text is on the clipboard.
- **Long lines** wrap rather than scroll, so the reader never has to move
  the block sideways.

### The link chip

A link to another article inside the text: a chip on the code fill, with a
1px rule, in Monster Green. Under the pointer it fills with green and the
text turns white.

### The meta line

Section lists put the date, a tilde and the file path above the title. On a
phone they show the file name. Numbered series lists show the part number,
reading time and file name. The archive and the recent articles on the home
page put the title first, with a muted day and month aligned to its right.
In the archive, a muted topic label sits below each title without a separator.
The seven latest publications on the home page also show a short summary and
reading time; projects are labelled. Year and month headings separate groups
in the archive.

### The home reading guide

The home page places links to its topics after the introduction, followed by
four editorial starting points before the chronological list. Each row has a topic label, a title and one short
description. Hairline rules separate the rows; there are no cards or fills.
The four links cover AI, popular science, personal essays and development.

### Section labels and topic grouping

The five active top-level labels are `ИИ`, `Разработка`, `Научпоп`, `Личное`
and `Проекты`. The AI section describes model capabilities, use and impact;
the development section describes implementation, architecture and tools.
Within popular science, the `Тело` hub groups the human-body articles and the
series `Тело и среда` under `/blog/science/body/`. Its two lists stay distinct,
and the existing article and series routes stay available.

### The article header

Linked section names sit above the title. The date and reading time sit
below it, followed by a 1px rule.

### The series line

Under the heading of a series: the name of the series, a tilde and "part N
of M". After the text, the neighbouring parts, with a label of 0.75rem in
the muted ink over the name of the article in the strong ink, and a column
at least 44px tall.

### The table of contents

A `details` with the summary "Содержание, N разделов" and a green `▸`
that turns 90 degrees when it opens. It appears closed by default in an
article with six or more second-level headings, from the left edge of the
text with no rule and no margins of its own, and the numbers are in the muted
ink. The summary is at least 44px tall on a phone.

Up to three neighbouring articles appear after the text.

### The note entry

A short note in the feed: the time as an anchor, the text, and a rule under
it. Arriving at an anchor tints the note for three seconds and lets the
tint go.

## Tokens and icons

Every value that a component reuses is a token in `:root` of
`src/styles/global.css`. The scales are:

| Group | Tokens | Values |
| --- | --- | --- |
| Spacing | `--app-spacing-xs` to `--app-spacing-3xl` | 0.15rem, 0.25rem, 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem |
| Type | `--app-font-control`, `--app-font-caption`, `--app-font-xs` to `--app-font-xl` | 0.8rem, 0.7rem, then 0.8rem, 0.9rem, 1rem, 1.15rem, 1.3rem |
| Radius | `--app-radius-xs`, `--app-radius-sm` | 3px, 4px |
| Touch | `--app-touch-target` | 44px, the smallest height of any control on a touch screen |
| Icon | `--app-icon-size` | 1em, so an icon follows the text it sits beside |

Where a component needs one value that the scales do not cover, it is named
in the stylesheet and the token is added here, not left as a literal.

The interface draws its icons from one set: outline, a 24-unit grid, a
1.5 stroke and `currentColor`. The paths are in `src/utils/icons.ts`, the
`Icon` component puts them on the page, and the `.icon` class sets the size.
The set is the Heroicons outline set, which is MIT licensed.

Text characters are not used as interface icons. The disclosure chevron of
a summary, the table of contents or a filter uses the shared chevron.
The close control of a card uses the cross from the same set.

Three text characters remain on purpose: the arrows and the crosses in the
text of an article, which are words, and the markers of the legend of the
picker (`+`, `!`, `~`, `×`), which are the legend itself.

## Do's and Don'ts

- **Do** set article prose in Literata, with JetBrains Mono for headings,
  buttons, dates, navigation, code and diagrams.
- **Do** use Monster Green on states and on links: the active page, the
  focus, the hover, the copy.
- **Do** use Monster Green Ink for green text in the light theme, and check
  the pair against 4.5:1.
- **Do** separate two zones with a 1px rule in Paper Rule or Night Rule, and
  mark an element with a fill in Paper Code or Night Code.
- **Do** keep the code blocks and the diagrams in the dark window, in both
  themes.
- **Do** show the article title first in chronological lists, with dates in
  muted text and clear year and month headings; the home page adds summaries
  and reading time to its seven latest articles.
- **Do** give the reader the size of the text and the theme, and remember
  the choice.
- **Do** give a tap target at least 44px on a phone.
- **Do** keep the structural blocks out of a `<nav>`: the table of contents
  in a `details`, the footer of an article in an `aside`.
- **Do** set the colour of a text link on the parent and give the link
  `color: inherit`.
- **Do** carry the reader past the end of the text: the neighbouring part of
  the series, three neighbouring articles from the same folder, the line of
  the author.
- **Do** use a chevron where a section expands, such as the table of contents.
- **Don't** use shadows, glows, blurs or gradients on any surface, in any
  state.
- **Don't** introduce a second accent colour, and don't fill a large area
  with green.
- **Don't** set lime `#95d600` on white, or white on lime.
- **Don't** draw cards: an article in a list is a title and a meta line, with
  no frame and no fill.
- **Don't** replace the text marks `▸`, `→` and `~` with graphics, and
  don't put emoji in the interface.
- **Don't** add a third type family.
- **Don't** make the reader scroll a block of code sideways.
