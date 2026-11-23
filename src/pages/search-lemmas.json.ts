import { getCollection } from 'astro:content';
import { createRequire } from 'node:module';
import path from 'node:path';
import { isAbout } from '../utils/series';
import { articleText } from '../utils/article-text';
import { normalizeWord, wordsIn } from '../utils/search-matching';

/*
 * Таблица «словоформа → начальная форма» для поиска. Словарь OpenCorpora весит мегабайты, и везти его
 * в браузер незачем: слово, которого нет ни в одной статье, всё равно ничего не найдёт. Поэтому при
 * сборке разбираем только слова корпуса и отдаём те, у которых начальная форма отличается от самого
 * слова. Форма вида «сна» получает «сон», омоним «стали» получает и «стать», и «сталь».
 */

type AzParse = { score: number; parser: string; normalize(): { word: string } };
type AzModule = { Morph: ((word: string) => AzParse[]) & { init(dicts: string, done: (error?: unknown) => void): void } };

const require = createRequire(import.meta.url);
let ready: Promise<AzModule['Morph']> | undefined;

function morph(): Promise<AzModule['Morph']> {
  ready ??= new Promise((resolve, reject) => {
    const Az = require('az') as AzModule;
    const dicts = path.join(path.dirname(require.resolve('az/package.json')), 'dicts');
    Az.Morph.init(dicts, (error) => (error ? reject(error) : resolve(Az.Morph)));
  });
  return ready;
}

// Разборы с долей ниже порога это редкие толкования вроде «ИИ» как деепричастия: они только шумят в выдаче
const MIN_SCORE = 0.1;
const MAX_LEMMAS = 3;

export async function GET() {
  const Morph = await morph();
  const articles = await getCollection('blog', (entry) => !entry.data.draft && !isAbout(entry.id));

  const forms = new Set<string>();
  for (const entry of articles) {
    const text = [entry.data.title, entry.data.summary ?? '', articleText(entry.rendered?.html ?? '')].join(' ');
    for (const { value } of wordsIn(normalizeWord(text))) {
      if (value.length > 2 && /[а-я]/.test(value)) forms.add(value);
    }
  }

  const lemmas: string[] = [];
  const lemmaIndex = new Map<string, number>();
  const table: Record<string, number | number[]> = {};
  for (const form of [...forms].sort()) {
    // PrefixUnknown отрезает от незнакомого слова «приставку» и читает остаток: из фамилии Уилсон
    // выходит «сон», и статья про скуку находится по запросу «сне». Такие догадки не берём
    const found = [...new Set(Morph(form)
      .filter((parse) => parse.score >= MIN_SCORE && parse.parser !== 'PrefixUnknown')
      .map((parse) => normalizeWord(parse.normalize().word)))].slice(0, MAX_LEMMAS);
    if (!found.length || (found.length === 1 && found[0] === form)) continue;
    const ids = found.map((lemma) => {
      if (!lemmaIndex.has(lemma)) {
        lemmaIndex.set(lemma, lemmas.length);
        lemmas.push(lemma);
      }
      return lemmaIndex.get(lemma)!;
    });
    table[form] = ids.length === 1 ? ids[0] : ids;
  }

  return Response.json({ lemmas, forms: table });
}
