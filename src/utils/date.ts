/** ГГГГ-ММ-ДД: читается однозначно по-русски и сортируется глазами, как имя файла. UTC, как frontmatter. */
export function formatDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export function sortByDateDesc<T extends { id?: string; data: { date: Date } }>(entries: T[]): T[] {
  // Newest first; ties broken by id so the order is stable across loaders and builds.
  return [...entries].sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime() || (a.id ?? '').localeCompare(b.id ?? ''),
  );
}

/** Минуты чтения по объёму markdown: код и ссылки не считаем, 180 слов в минуту для русского. */
export function readingMinutes(body: string): number {
  const text = body
    .replace(/```[\s\S]*?```/g, '')
    .replace(/\]\([^)]*\)/g, ']')
    .replace(/<[^>]+>/g, '');
  const words = (text.match(/[\p{L}\p{N}]+/gu) ?? []).length;
  return Math.max(1, Math.round(words / 180));
}

export function plural(n: number, one: string, few: string, many: string): string {
  return n % 10 === 1 && n % 100 !== 11 ? one : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? few : many;
}

export function formatTime(d: Date): string {
  return d.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'UTC' });
}

/** Anchor id for a note: 2026-09-25-1430 (UTC, matches the file name convention). */
export function noteAnchor(d: Date): string {
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}-${p(d.getUTCMonth() + 1)}-${p(d.getUTCDate())}-${p(d.getUTCHours())}${p(d.getUTCMinutes())}`;
}
