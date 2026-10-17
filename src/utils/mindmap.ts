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
  aside?: boolean; // второй план: не основная тема карты, рисуется пунктиром и приглушённо
  facts?: MapFact[];
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

// Круг групп компактный: на подпись группы около 210px дуги, чтобы свёрнутая карта читалась и на телефоне.
// Круг листьев растёт с их числом; при многих листьях они идут в три ряда, длинные подписи не наезжают друг на друга
const ARC_PER_GROUP = 280;
const ARC_PER_LEAF = 130;
const RINGS = [-80, 0, 80];

const leaves = (n: MapNode): number => (n.children?.length ? n.children.reduce((s, c) => s + leaves(c), 0) : 1);

/** Радиальное дерево: у узла сектор пропорционально числу его листьев, сам узел на середине сектора. */
export function layout(root: MapNode): { nodes: PlacedNode[]; width: number; height: number } {
  const placed: PlacedNode[] = [];
  const total = leaves(root);
  const depthOf = (n: MapNode): number => (n.children?.length ? 1 + Math.max(...n.children.map(depthOf)) : 0);
  const maxDepth = Math.max(1, depthOf(root));
  const inner = Math.max(260, ((root.children?.length ?? 1) * ARC_PER_GROUP) / (2 * Math.PI));
  const outer = Math.max(inner + 260, (total * (total > 30 ? ARC_PER_LEAF : 170)) / (2 * Math.PI));
  const radiusAt = (depth: number) => (depth === 0 ? 0 : depth === 1 ? inner : inner + ((outer - inner) * (depth - 1)) / Math.max(1, maxDepth - 1));
  let leafIndex = 0;
  let groupIndex = 0;
  const walk = (n: MapNode, depth: number, from: number, to: number, parent?: string) => {
    const angle = (from + to) / 2 - Math.PI / 2; // первый сектор сверху, дальше по часовой
    const isLeaf = !n.children?.length && depth > 0;
    const ring = total > 30 ? RINGS[leafIndex % 3] : total > 20 ? (leafIndex % 2 ? 35 : -35) : 0;
    if (isLeaf) leafIndex++;
    // Группы тоже через одну ближе и дальше: у маленьких групп узкий сектор, и длинные подписи соседей сталкивались
    const groupRing = depth === 1 && (root.children?.length ?? 0) > 6 ? (groupIndex++ % 2 ? 70 : -40) : 0;
    const r = radiusAt(depth) + (isLeaf ? ring : groupRing);
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
