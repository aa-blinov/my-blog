// Единый набор иконок интерфейса: контурные, сетка 24, толщина линии 1.5, цвет как у текста.
// Пути из Heroicons (MIT). Текстовые символы (▸ ↓ ↑ ×) в интерфейсе не используем; в тексте статей и в маркерах легенды подборщика они остаются.
// В инлайн-скриптах, которые не могут импортировать модуль, пути продублированы там же.
export const ICON_PATHS = {
  'chevron-right': 'm8.25 4.5 7.5 7.5-7.5 7.5',
  'arrow-down': 'M12 4.5v15m0 0 6.75-6.75M12 19.5l-6.75-6.75',
  'arrow-up': 'M12 19.5v-15m0 0-6.75 6.75M12 4.5l6.75 6.75',
  'arrows-up-down': 'M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5',
  'x-mark': 'M6 18 18 6M6 6l12 12',
  'arrows-pointing-in': 'M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25',
  'arrows-pointing-out': 'M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15',
  'width-normal': 'M3.75 6.75h16.5v10.5H3.75z',
  'magnifying-glass': 'm21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z',
} as const;

export type IconName = keyof typeof ICON_PATHS;

export function iconSvg(name: IconName, cls = 'icon'): string {
  return `<svg class="${cls}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" focusable="false"><path stroke-linecap="round" stroke-linejoin="round" d="${ICON_PATHS[name]}"/></svg>`;
}
