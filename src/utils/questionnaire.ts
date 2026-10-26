// Подсчёт скрининговых опросников: сумма баллов, степень по порогам, короткий скрининг и пункт о безопасности.

export interface QuestionnaireItem {
  text: string;
}

export interface QuestionnaireBand {
  from: number;
  to: number;
  title: string;
  text: string;
}

export interface QuestionnaireSource {
  title: string;
  url: string;
}

export interface QuestionnaireData {
  id: string;
  title: string;
  intro: string;
  instruction: string;
  scale: string[];
  items: QuestionnaireItem[];
  screenCount?: number; // сколько первых пунктов образуют короткий скрининг, если он есть
  screenCutoff?: number; // порог короткого скрининга
  safetyIndex?: number; // номер пункта о мыслях о самоубийстве или самоповреждении, если он есть
  bands: QuestionnaireBand[];
  safetyText?: string; // текст при положительном ответе на пункт о безопасности
  disclaimer: string;
  sources: QuestionnaireSource[];
}

export interface QuestionnaireResult {
  total: number;
  max: number;
  band: QuestionnaireBand;
  screenTotal: number | null;
  screenPositive: boolean | null;
  safetyFlag: boolean;
}

// answers: индекс пункта -> выбранный балл (от 0 до 3); пункты без ответа в массиве не учитываются
export function scoreQuestionnaire(data: QuestionnaireData, answers: (number | null)[]): QuestionnaireResult | null {
  if (answers.length !== data.items.length || answers.some((a) => a === null)) return null;
  const values = answers as number[];
  const total = values.reduce((sum, v) => sum + v, 0);
  const band = data.bands.find((b) => total >= b.from && total <= b.to) ?? data.bands[data.bands.length - 1];
  const hasScreen = data.screenCount !== undefined && data.screenCutoff !== undefined;
  const screenTotal = hasScreen ? values.slice(0, data.screenCount).reduce((sum, v) => sum + v, 0) : null;
  return {
    total,
    max: data.items.length * 3,
    band,
    screenTotal,
    screenPositive: screenTotal === null ? null : screenTotal >= (data.screenCutoff as number),
    safetyFlag: data.safetyIndex !== undefined && values[data.safetyIndex] > 0,
  };
}
