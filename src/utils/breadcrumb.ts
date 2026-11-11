import { BASE, sectionPagePath, sectionTitle } from '../config';

export function getArticleSections(id: string) {
  const folders = id.split('/').slice(0, -1);
  return folders.map((_, index) => {
    const path = sectionPagePath(folders.slice(0, index + 1).join('/'));
    const name = path.split('/').pop()!;

    return { title: sectionTitle(name), href: `${BASE}blog/${path}/` };
  });
}
