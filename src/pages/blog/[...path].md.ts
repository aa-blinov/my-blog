import type { APIRoute, GetStaticPaths } from 'astro';
import { SITE } from '../../config';
import { getAllSeries, type Series } from '../../utils/series';

export const getStaticPaths = (async () => {
  const courses = (await getAllSeries()).filter((series) => series.kind === 'course');
  return courses.map((series) => ({ params: { path: series.folder }, props: { series } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => {
  const { series } = props as { series: Series };
  const coursePath = `/blog/${series.folder}/`;
  const partAnchor = (id: string) => `part-${id.split('/').at(-1)}`;
  const anchors = new Map(series.parts.map(({ id }) => [`/blog/${id}/`, partAnchor(id)]));

  const formatBody = (body: string, headingOffset: number): string => {
    let fence: string | undefined;
    return body.split('\n').map((line) => {
      const delimiter = /^ {0,3}(`{3,}|~{3,})(.*)$/.exec(line);
      if (delimiter) {
        const [, marker, rest] = delimiter;
        if (!fence) fence = marker;
        else if (marker.startsWith(fence) && !rest.trim()) fence = undefined;
        return line;
      }
      if (fence) return line;

      return line
        .replace(/^(#{1,6})(?=\s)/, (heading) => '#'.repeat(Math.min(6, heading.length + headingOffset)))
        .replace(/\]\((\/(?!\/)[^\s)]+)\)/g, (_, url: string) => {
          const anchor = anchors.get(url);
          return `](${anchor ? `#${anchor}` : new URL(url, SITE.url).href})`;
        });
    }).join('\n').trim();
  };

  const contents: string[] = [];
  const chapters: string[] = [];
  let previousGroup: string | undefined;
  for (const part of series.parts) {
    const group = part.data.partGroup;
    if (group && group !== previousGroup) {
      contents.push(`- ${group}`);
      chapters.push(`## ${group}`);
    }
    previousGroup = group;

    const anchor = partAnchor(part.id);
    const title = `${part.data.part}. ${part.data.title}`;
    contents.push(`${group ? '  ' : ''}- [${title}](#${anchor})`);
    chapters.push(`<a id="${anchor}"></a>\n\n${group ? '###' : '##'} ${title}`, formatBody(part.body ?? '', group ? 2 : 1));
  }

  const markdown = [
    `# ${series.title}`,
    `[Версия на сайте](${new URL(coursePath, SITE.url).href})`,
    formatBody(series.about?.body ?? '', 0),
    `## Оглавление\n\n${contents.join('\n')}`,
    ...chapters,
  ].filter(Boolean).join('\n\n') + '\n';

  return new Response(markdown, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
