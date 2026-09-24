export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }).replace(/\//g, '-');
}

export function sortByDateDesc<T extends { id?: string; data: { date: Date } }>(entries: T[]): T[] {
  // Newest first; ties broken by id so the order is stable across loaders and builds.
  return [...entries].sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime() || (a.id ?? '').localeCompare(b.id ?? ''),
  );
}
