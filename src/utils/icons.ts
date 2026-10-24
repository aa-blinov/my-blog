// Единый набор иконок интерфейса: контурные, сетка 24, толщина линии 1.5, цвет как у текста.
// Пути из Heroicons (MIT). Текстовые символы (▸ ↓ ↑ ×) в интерфейсе не используем; в тексте статей и в маркерах легенды подборщика они остаются.
// В инлайн-скриптах, которые не могут импортировать модуль, пути продублированы там же.
export const ICON_PATHS = {
  'chevron-right': 'm8.25 4.5 7.5 7.5-7.5 7.5',
  'arrow-down': 'M12 4.5v15m0 0 6.75-6.75M12 19.5l-6.75-6.75',
  'arrow-up': 'M12 19.5v-15m0 0-6.75 6.75M12 4.5l6.75 6.75',
  'arrows-up-down': 'M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5',
  'x-mark': 'M6 18 18 6M6 6l12 12',
} as const;

export type IconName = keyof typeof ICON_PATHS;

export function iconSvg(name: IconName, cls = 'icon'): string {
  return `<svg class="${cls}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" focusable="false"><path stroke-linecap="round" stroke-linejoin="round" d="${ICON_PATHS[name]}"/></svg>`;
}
