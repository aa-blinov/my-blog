import { BASE, sectionPagePath, sectionTitle } from '../config';

/** seriesTitles из getSeriesTitles(): без них серия названа по запасному списку или голым slug папки. */
export function getArticleSections(id: string, seriesTitles: Record<string, string> = {}) {
  const folders = id.split('/').slice(0, -1);
  return folders.map((_, index) => {
    const folder = folders.slice(0, index + 1).join('/');
    const path = sectionPagePath(folder);
    const name = path.split('/').pop()!;
    // Серия, перенесённая на общую страницу (тело), ведёт туда и называется по ней
    const title = path === folder ? (seriesTitles[folder] ?? sectionTitle(name)) : sectionTitle(name);

    return { title, href: `${BASE}blog/${path}/` };
  });
}
