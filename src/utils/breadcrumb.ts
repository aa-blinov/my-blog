export function getBreadcrumb(pathname: string): string {
  const p = pathname.replace(/\/$/, '') || '/';
  if (p === '/') return 'main.md';
  if (p === '/about-me') return 'about-me.md';
  if (p === '/blog') return 'blog/';
  const blogSectionMatch = p.match(/^\/blog\/(dev|life)\/?$/);
  if (blogSectionMatch) return `blog/${blogSectionMatch[1]}/`;
  const slugMatch = p.match(/^\/blog\/(dev|life)\/([^/]+)$/);
  if (slugMatch) return `blog/${slugMatch[1]}/${slugMatch[2]}.md`;
  return p.slice(1) || 'content';
}
