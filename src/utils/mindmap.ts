// Интерактивная mind-карта: данные лежат в src/data/maps/<имя>.ts, статья подключает карту полем `map: <имя>` во frontmatter.
// Раскладка считается при сборке: корень в центре, каждый следующий уровень на своём круге, листья делят круг поровну

export interface MapSource {
  title: string; // описание источника: попадёт во всплывашку чипа [n]
  url: string;
}

export interface MapFact {
  label: string; // «Что это», «Как принимают»
  text: string;
  sources?: MapSource[];
}

export interface MapNode {
  id: string; // латиница, уходит в якорь #map-<id>
  label: string; // подпись на карте, коротко
  title?: string; // заголовок карточки, если отличается от подписи
  note?: string; // строка под заголовком карточки, например торговые названия
  facts?: MapFact[];
  link?: { href: string; text: string };
  children?: MapNode[];
}

export interface MindMapData {
  root: MapNode;
}

export interface PlacedNode {
  node: MapNode;
  depth: number;
  x: number;
  y: number;
  parent?: string;
}

const RADIUS = [0, 250, 520]; // радиус круга на глубине; дальше шаг 270
const radiusAt = (depth: number) => RADIUS[depth] ?? RADIUS[RADIUS.length - 1] + (depth - RADIUS.length + 1) * 270;

const leaves = (n: MapNode): number => (n.children?.length ? n.children.reduce((s, c) => s + leaves(c), 0) : 1);

/** Радиальное дерево: у узла сектор пропорционально числу его листьев, сам узел на середине сектора. */
export function layout(root: MapNode): { nodes: PlacedNode[]; width: number; height: number } {
  const placed: PlacedNode[] = [];
  const total = leaves(root);
  const walk = (n: MapNode, depth: number, from: number, to: number, parent?: string) => {
    const angle = (from + to) / 2 - Math.PI / 2; // первый сектор сверху, дальше по часовой
    const r = radiusAt(depth);
    placed.push({ node: n, depth, x: r * Math.cos(angle), y: r * Math.sin(angle), parent });
    let start = from;
    for (const c of n.children ?? []) {
      const span = ((to - from) * leaves(c)) / leaves(n);
      walk(c, depth + 1, start, start + span, n.id);
      start += span;
    }
  };
  walk(root, 0, 0, 2 * Math.PI * (total > 1 ? 1 : 0));
  // Сдвиг в положительные координаты с полем под подписи узлов
  const PAD = 140;
  const minX = Math.min(...placed.map((p) => p.x)) - PAD;
  const minY = Math.min(...placed.map((p) => p.y)) - PAD / 2;
  for (const p of placed) {
    p.x -= minX;
    p.y -= minY;
  }
  return {
    nodes: placed,
    width: Math.max(...placed.map((p) => p.x)) + PAD,
    height: Math.max(...placed.map((p) => p.y)) + PAD / 2,
  };
}

/** Все узлы дерева по порядку: для списка под картой и нумерации источников. */
export function flatten(root: MapNode): { node: MapNode; depth: number }[] {
  const out: { node: MapNode; depth: number }[] = [];
  const walk = (n: MapNode, depth: number) => {
    out.push({ node: n, depth });
    n.children?.forEach((c) => walk(c, depth + 1));
  };
  walk(root, 0);
  return out;
}
