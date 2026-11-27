import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogEntry = CollectionEntry<'blog'>;

export interface Series {
  folder: string; // 'dev/agent'
  title: string; // из about-<папка>.md, иначе имя папки
  kind: 'series' | 'course';
  about?: BlogEntry;
  parts: BlogEntry[]; // по номеру части
}

interface SeriesOptions {
  includeDrafts?: boolean;
}

/** Папка считается серией, когда хотя бы у одного её файла есть part. Ссылка на оглавление это страница папки. */
export async function getSeries(folder: string, { includeDrafts = false }: SeriesOptions = {}): Promise<Series | null> {
  const all = await getCollection('blog', (entry) => includeDrafts || !entry.data.draft);
  const inFolder = all.filter((e) => e.id.startsWith(folder + '/') && !e.id.slice(folder.length + 1).includes('/'));
  const parts = inFolder.filter((e) => e.data.part !== undefined).sort((a, b) => a.data.part! - b.data.part!);
  if (parts.length === 0) return null;
  const name = folder.split('/').pop()!;
  const about = inFolder.find((e) => e.id === `${folder}/about-${name}`);
  const title = about?.data.title.replace(/:\s*Об этой секции$/, '') ?? name;
  return { folder, title, kind: about?.data.seriesKind ?? 'series', about, parts };
}

/** Все серии блога. Имя серии берётся из её about-файла, и любое место, где она названа, читает его отсюда. */
export async function getAllSeries({ includeDrafts = false }: SeriesOptions = {}): Promise<Series[]> {
  const all = await getCollection('blog', (entry) => includeDrafts || !entry.data.draft);
  const folders = [...new Set(all.filter((e) => e.data.part !== undefined).map((e) => seriesOf(e)!).filter(Boolean))];
  return (await Promise.all(folders.map((f) => getSeries(f, { includeDrafts })))).filter((s): s is Series => s !== null);
}

export async function getSeriesTitles(options?: SeriesOptions): Promise<Record<string, string>> {
  return Object.fromEntries((await getAllSeries(options)).map((s) => [s.folder, s.title]));
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
