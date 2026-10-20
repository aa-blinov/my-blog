# Screenshots

There are no screenshots in this repository, and this folder holds this note
instead.

The site is text: a tree of files on the left and an article on the right. A
picture of it would show the state of a browser window at the moment it was
taken rather than a decision made here, and the decision that matters, the
one family of type, the single green accent and the flat surfaces, is written
down in [../../DESIGN.md](../../DESIGN.md).

Nothing in the repository captures an image either. There is no script that
starts the site and records it, and the only image in the tree is the favicon
in `public/favicon.svg`.

What a picture would have to show, and where each of those things lives:

- the three columns, the toolbar and the tree, in
  `src/styles/global.css` and `src/components/Sidebar.astro`
- the font size the reader chose, in `src/scripts/theme.js`
- the code block in its dark window, in `src/styles/global.css`
- the map, the picker and the checklist, in `src/components/MindMap.astro`,
  `src/components/Picker.astro` and `src/components/Tools.astro`

The site itself is at [blinov.monster](https://blinov.monster), and the
repository builds it with `npm run build`.
