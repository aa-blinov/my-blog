import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogEntry = CollectionEntry<'blog'>;

export interface Series {
  folder: string; // 'dev/agent'
  title: string; // из about-<папка>.md, иначе имя папки
  about?: BlogEntry;
  parts: BlogEntry[]; // по part, без черновиков
}

/** Папка считается серией, когда хотя бы у одного её файла есть part. Ссылка на оглавление это страница папки. */
export async function getSeries(folder: string): Promise<Series | null> {
  const all = (await getCollection('blog')).filter((e) => !e.data.draft);
  const inFolder = all.filter((e) => e.id.startsWith(folder + '/') && !e.id.slice(folder.length + 1).includes('/'));
  const parts = inFolder.filter((e) => e.data.part !== undefined).sort((a, b) => a.data.part! - b.data.part!);
  if (parts.length === 0) return null;
  const name = folder.split('/').pop()!;
  const about = inFolder.find((e) => e.id === `${folder}/about-${name}`);
  return { folder, title: about?.data.title ?? name, about, parts };
}

export function seriesOf(entry: BlogEntry): string | null {
  if (entry.data.part === undefined) return null;
  const i = entry.id.lastIndexOf('/');
  return i > 0 ? entry.id.slice(0, i) : null;
}

/** about-<папка>.md это вводный текст раздела, а не статья. */
export function isAbout(id: string): boolean {
  return id.split('/').pop()!.startsWith('about-');
}

/** Папки, в которых есть хотя бы одна статья кроме about-*. Пустой раздел не показываем, пока в нём нечего читать. */
export function liveFolders(entries: { id: string }[]): Set<string> {
  const live = new Set<string>();
  for (const e of entries) {
    if (isAbout(e.id)) continue;
    const parts = e.id.split('/');
    for (let i = 1; i < parts.length; i++) live.add(parts.slice(0, i).join('/'));
  }
  return live;
}

export function inLiveFolder(id: string, live: Set<string>): boolean {
  const i = id.lastIndexOf('/');
  return i < 0 || live.has(id.slice(0, i));
}
