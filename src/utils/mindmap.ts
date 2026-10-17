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
  more?: boolean; // второстепенное: под раскрывашкой «Подробнее», чтобы карточка не была стеной текста
}

export interface MapNode {
  id: string; // латиница, уходит в якорь #map-<id>
  label: string; // подпись на карте, коротко
  title?: string; // заголовок карточки, если отличается от подписи
  note?: string; // строка под заголовком карточки, например торговые названия
  hint?: string; // подсказка при наведении; если нет, у листа показывается note
  facts?: MapFact[];
  link?: { href: string; text: string };
  docs?: { href: string; text: string }; // полная официальная инструкция
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

// Радиус внешнего круга растёт с числом листьев: на подпись около 170px дуги. Внутренние круги делят его поровну
const ARC_PER_LEAF = 170;
const STAGGER = 70; // соседние листья через один ближе и дальше: длинные подписи не наезжают друг на друга

const leaves = (n: MapNode): number => (n.children?.length ? n.children.reduce((s, c) => s + leaves(c), 0) : 1);

/** Радиальное дерево: у узла сектор пропорционально числу его листьев, сам узел на середине сектора. */
export function layout(root: MapNode): { nodes: PlacedNode[]; width: number; height: number } {
  const placed: PlacedNode[] = [];
  const total = leaves(root);
  const depthOf = (n: MapNode): number => (n.children?.length ? 1 + Math.max(...n.children.map(depthOf)) : 0);
  const maxDepth = Math.max(1, depthOf(root));
  const outer = Math.max(520, (total * ARC_PER_LEAF) / (2 * Math.PI));
  const radiusAt = (depth: number) => (outer * depth) / maxDepth;
  let leafIndex = 0;
  const walk = (n: MapNode, depth: number, from: number, to: number, parent?: string) => {
    const angle = (from + to) / 2 - Math.PI / 2; // первый сектор сверху, дальше по часовой
    const isLeaf = !n.children?.length && depth > 0;
    const r = radiusAt(depth) + (isLeaf && total > 20 ? (leafIndex++ % 2 ? STAGGER : -STAGGER) / 2 : 0);
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
