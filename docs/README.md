# Documentation

The documents in this folder, and where the content of the site lives.

| Document | What it covers |
| --- | --- |
| [architecture.md](architecture.md) | The collections, the route that serves every article and every folder, and the boundaries. |
| [screenshots/README.md](screenshots/README.md) | There are no screenshots in this repository. |
| [../README.md](../README.md) | The front door: what the site is and how to build it. |
| [../AGENTS.md](../AGENTS.md) | The commands, the layout of the tree, and the traps. |
| [../PRODUCT.md](../PRODUCT.md) | The product truth: the readers, the constraints and the principles. |
| [../DESIGN.md](../DESIGN.md) | The design system: the colours, the type scale, the layout and the components. |
| [../astro.config.mts](../astro.config.mts) | The static output, the sitemap and the ten redirects. |
| [../src/config.ts](../src/config.ts) | The metadata of the site and the headings of the sections. |
| [../.claude/skills/](../.claude/skills/) | The two skills that write an article and a note in the voice of the author. |

## Where the content lives

The articles of the site are not documents of this repository. They are the
product, and they live in `src/content/`, in three collections with a schema
each.

| Collection | What it holds |
| --- | --- |
| `src/content/blog/` | 115 Markdown files in eight sections: `ai` (25), `dev` (13), `ideas` (1), `knowledge` (1), `life` (10), `mgmt` (1), `projects` (15) and `science` (49). One file per article. |
| `src/content/pages/` | The home page (`main.md`) and the about page (`about-me.md`). |
| `src/content/notes/` | The short notes, one file per note, named after the UTC minute. |

Eleven of the files in `blog/` are named `about-<section>.md`. They carry the
intro text of their folder rather than an article, and the page of the folder
shows it.

Three folders are series, because at least one file in them carries `part`:
`dev/agent/` with nine parts, `science/body-and-environment/` with six and
`science/mind/antidepressants/` with eight.

The articles are in Russian, and the documents of the repository are in
English.

## Reading order

New here: [../README.md](../README.md), then
[architecture.md](architecture.md) for how the pages come out of the folder.

Writing an article: the skill in
[../.claude/skills/](../.claude/skills/), then the frontmatter fields in
[architecture.md](architecture.md), and the sources rule in
[../AGENTS.md](../AGENTS.md).

Changing the interface: [../DESIGN.md](../DESIGN.md) first, because it holds
the rules that the stylesheet and the components are held to.
