import { BASE, sectionTitle } from '../config';

export function getArticleSections(id: string) {
  const folders = id.split('/').slice(0, -1);
  return folders.map((folder, index) => ({
    title: sectionTitle(folder),
    href: `${BASE}blog/${folders.slice(0, index + 1).join('/')}/`,
  }));
}
