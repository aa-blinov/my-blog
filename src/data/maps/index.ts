import type { MindMapData } from '../../utils/mindmap';
import { antidepressants } from './antidepressants';

// Реестр карт: статья подключает карту полем `map: <ключ>` во frontmatter
export const maps: Record<string, MindMapData> = { antidepressants };
