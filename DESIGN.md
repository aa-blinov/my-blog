---
name: blinov.monster
description: The blog as an open project in an editor: a file tree, one monospaced family and a single green accent.
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
    fontFamily: "JetBrains Mono Variable, JetBrains Mono, Cascadia Code, Consolas, monospace"
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

**Creative North Star: "an open project in an IDE"**

The site behaves like an editor window with the blog open in it. A narrow
vertical toolbar holds the home link, the theme toggle and the font size
buttons. Next to it stands a tree of folders and `.md` files with their dates.
The text is on the right, in a column of about 92 characters.

Everything is set in one monospaced family, headings included. The single
colour of the system, Monster Green, works the way a syntax highlight works:
it marks the active file, the caret in the search field, a link under the
pointer, and nothing else. The interface serves the reading and then gets out
of the way.

The density is high and the air is there anyway. The tree is small and tight,
like an editor, and the text column is limited to 92ch with a line height of
1.6 and a blank line between the paragraphs. The surfaces are flat: the page,
the tree and the toolbar lie in one plane and are separated by hairlines. The
dark theme is the same system on dark paper, with the same lines, the same
green and the same proportions.

The reader is given the controls. The theme, the font size in five steps, the
order of the tree and the search box are all kept in the browser, and an
article never ends on its last line: a series leads to the neighbouring part,
a folder to the neighbouring articles, and the author to himself.

**Key characteristics:**

- One family for everything, JetBrains Mono
- One chromatic colour, Monster Green, on states and links only
- Flat surfaces, with depth carried by hairlines and tonal fills
- Navigation shaped like a file system: folders, files and a disclosure mark
- Two themes out of one palette, paper and night, with the same green in both
- The reader controls the reading: theme, five font sizes, search and order

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

One family does the whole site: JetBrains Mono Variable, with the fallbacks
`'JetBrains Mono', 'Cascadia Code', Consolas, monospace`. It is shipped with
the site through `@fontsource-variable/jetbrains-mono`, with the latin,
latin-ext, cyrillic, cyrillic-ext, greek and vietnamese subsets, the weight
axis from 100 to 800 and `font-display: swap`. The Cyrillic subsets are not
optional, since the articles are in Russian.

No proportional family appears anywhere: not in a heading, not in a button,
not in the footer. The hierarchy is built from weight, 400 and 700, and from
size.

### Hierarchy

- **Display, 2em, 700, 1.125**: the title of an article.
- **Headline, 1.5rem, 700, 1.2**: the headings of the sections on the home
  page, on `/blog/` and on a folder page. Inside an article the scale is the
  article's own: h2 1.35em, h3 1.15em, h4 1em.
- **Title, 1.15rem, 700, 1.3**: the title of an article in a list.
- **Body, 1rem, 400, 1.6**: the text of an article.
- **Label, 0.8rem, 400**: the tree of files, 0.8 of the article's size on a
  desktop and 1rem on a phone.
- **Caption, 0.7rem, 400**: the dates in the tree and the label of the sort
  control.
- **Control, 0.8rem, 400**: the search field, the sort button, the copy
  button, the meta line of a list, the series line and the read line. On a
  phone the control is 1.15rem, so that iOS does not zoom the field.

### The reader scale

The size of the article text belongs to the reader. The root carries a
`data-font` attribute with one of five steps, and the article scales from it:
0.8rem, 0.9rem, 1rem, 1.15rem and 1.3rem. The choice is stored in the browser
under `font-size-v2`, and the inline script in the head of the layout applies
it before the first paint. The interface stays at its own size while the
article grows and shrinks.

The root font size is 90% of the browser default, and 100% from 1440px
wide, because a tree and a meta line get small on a dense laptop screen. The
zoom factor multiplies it.

### Named rules

**The One Typeface Rule.** The hierarchy is built from weight and size, never
from a change of family.

**The Reader Scale Rule.** One root value sets the size of the article, and
the interface does not follow it.

**The Layer Rule.** Pico is imported into the cascade layer `pico`, so any
rule of ours beats it without `!important`. The stylesheet uses no
`!important`: a hand that reaches for it wants a more exact selector or a
rule that sits higher in the cascade.

## Layout

Three columns on a desktop: a toolbar of 64px, the tree at
`clamp(300px, 19rem, 400px)`, and the article in a column of 55.2em, which is
about 92 characters of JetBrains Mono. The measure is in `em` rather than in
`ch`, because `ch` is measured with the fallback font while the real one is
still loading, and the column jumped.

The breakpoint is 992px. Below it the toolbar becomes a top bar of 48px and
the tree becomes an overlay, with the page behind it marked `inert` so that
Tab cannot wander into it. The table of contents is open on a desktop and
closed on a phone, and the summary is at least 44px tall so a finger can
reach it.

The spacing steps are 0.15rem, 0.25rem, 0.5rem, 1rem, 1.5rem and 2rem, and
the page padding is 2rem. The width of the tree is remembered, and the
structure column of an article can be dragged between 192px and 480px.

### Named rules

**Three Columns.** The toolbar, the tree and the text, in that order. Under
992px the toolbar moves to the top and the tree becomes an overlay.

**The Tree Is The Navigation.** There is no menu of sections. The tree is
the content, and it is built from the same collection as the pages.

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

### The toolbar

- **Shape:** a vertical bar of 64px on a desktop, 48px at the top on a phone.
- **Buttons:** 40px, no background, an outline icon in the muted ink, and
  Monster Green under the pointer.
- **At the end of a scale:** the font size button that cannot go further is
  switched off with an opacity of 0.3, and it says so to a screen reader.

### The search field

- **Style:** transparent, a 1px rule, a 3px corner, 0.75rem of text.
- **Focus:** the rule moves to Monster Green Ink.
- **The clear button:** a cross on the right, which appears with the text.
- **Below it:** a line that says how many of how many entries the query
  matched, or a hint when the query matched nothing.

### The sort control

Three states in a circle: newest first, oldest first, by name. The default
is not marked, because it is the default, and the outline and the icon turn
green only for a state that differs from it.

### The tree

- **Folders** open and close by their name at any width. The name is text
  inside the summary and not a link, because a link inside a disclosure
  button breaks the screen readers. The `▸` turns 90 degrees when the
  folder is open. On a phone the row is at least 44px tall and the name is
  set at 1rem. The page of a section is reached from the breadcrumbs, from
  the list of the sections and from the first item of a series in the tree.
- **Files** carry the Russian name of the article, the full name in the
  tooltip, and the date as `YYYY-MM-DD`.
- **The active file** is green and bold on a 10% green fill.
- **The order** is new first, and it is applied by the stylesheet through
  `--order-desc` and `--order-asc`, so the markup stays alphabetical.

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

The line above a title in a list: the date, a tilde and the path of the
file. On a phone the path is replaced by the name of the file. The tilde is
the separator; a middle dot is not used.

### The article header

The meta line, the title, and a 1px rule under them.

### The series line

Under the heading of a series: the name of the series, a tilde and "part N
of M". After the text, the neighbouring parts, with a label of 0.75rem in
the muted ink over the name of the article in the strong ink, and a column
at least 44px tall.

### The table of contents

A `details` with the summary "Содержание, N разделов" and a green `▸`
that turns 90 degrees when it opens. It appears in an article with six or
more second-level headings, from the left edge of the text with no rule and
no margins of its own, and the numbers are in the muted ink. The summary is
at least 44px tall on a phone.

### The note entry

A short note in the feed: the time as an anchor, the text, and a rule under
it. Arriving at an anchor tints the note for three seconds and lets the
tint go.

## Do's and Don'ts

- **Do** set everything in JetBrains Mono, the headings, the buttons, the
  dates and the footer included.
- **Do** use Monster Green on states and on links: the active file, the
  focus, the hover, the copy.
- **Do** use Monster Green Ink for green text in the light theme, and check
  the pair against 4.5:1.
- **Do** separate two zones with a 1px rule in Paper Rule or Night Rule, and
  mark an element with a fill in Paper Code or Night Code.
- **Do** keep the code blocks and the diagrams in the dark window, in both
  themes.
- **Do** show the articles as files: the name of the `.md` file, the date as
  `YYYY-MM-DD` and the path of the section in the meta line.
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
- **Do** put the `▸` only where something opens, a folder in the tree and the
  table of contents.
- **Don't** use shadows, glows, blurs or gradients on any surface, in any
  state.
- **Don't** introduce a second accent colour, and don't fill a large area
  with green.
- **Don't** set lime `#95d600` on white, or white on lime.
- **Don't** draw cards: an article in a list is a title and a meta line, with
  no frame and no fill.
- **Don't** replace the text marks `▸`, `→` and `~` with graphics, and
  don't put emoji in the interface.
- **Don't** add a proportional family for the sake of the headings.
- **Don't** make the reader scroll a block of code sideways.
