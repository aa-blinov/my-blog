// Подборщик: что обычно обсуждают с врачом первым при данных особенностях пациента.
// Данные в src/data/pickers/<имя>.ts, статья подключает поле `picker: <имя>` во frontmatter. Дозы сюда не входят
import type { MapSource } from './mindmap';

// note: оговорка на заметку, показывается, но препарат не понижает (например, натрий у пожилых)
export type EffectKind = 'prefer' | 'consider' | 'note' | 'caution' | 'avoid';

export interface PickerEffect {
  drugs: string[];
  kind: EffectKind;
  reason: string;
  sources?: MapSource[];
}

export interface PickerDrug {
  id: string; // совпадает с узлом карты: ссылка ведёт на #map-<id>
  label: string;
  tier: 1 | 2 | 3; // линия по рекомендациям: 1 первая
  tierSources?: MapSource[];
  registeredRu: boolean;
}

export interface PickerOption {
  id: string;
  label: string;
  group: string;
  hint?: string;
}

export interface PickerAlert {
  when: string;
  level: 'urgent' | 'specialist' | 'info';
  text: string;
  sources?: MapSource[];
}

export interface PickerData {
  disclaimer: string;
  mapHref?: string; // где лежит карта с карточками препаратов
  drugs: PickerDrug[];
  groups: { id: string; label: string }[];
  options: PickerOption[];
  rules: { when: string; effects: PickerEffect[] }[];
  history: { helped: Omit<PickerEffect, 'drugs'>; failed: Omit<PickerEffect, 'drugs'> };
  alerts: PickerAlert[];
}
