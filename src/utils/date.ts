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

export function formatTime(d: Date): string {
  return d.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'UTC' });
}

/** Anchor id for a note: 2026-09-25-1430 (UTC, matches the file name convention). */
export function noteAnchor(d: Date): string {
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}-${p(d.getUTCMonth() + 1)}-${p(d.getUTCDate())}-${p(d.getUTCHours())}${p(d.getUTCMinutes())}`;
}
