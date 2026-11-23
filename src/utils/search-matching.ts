export interface SearchWord {
  value: string;
  start: number;
  end: number;
}

export interface MatchRange {
  start: number;
  end: number;
}

const suffixes = [
  'ующими', 'ющими', 'ющего', 'ющем', 'ующую', 'ющую',
  'иями', 'ями', 'ами', 'ого', 'его', 'ому', 'ему', 'ыми', 'ими',
  'иях', 'иям', 'ией', 'ием', 'ию', 'ии', 'ия', 'остью', 'ости', 'ость',
  'ешься', 'ишься', 'ется', 'утся', 'ются', 'ятся', 'ится', 'атся', 'яться', 'аться', 'иться',
  'авший', 'явший', 'ивший', 'ывший', 'овать', 'евать', 'ировать',
  'ение', 'ения', 'ению', 'ением',
  'ую', 'юю', 'ая', 'яя', 'ое', 'ее', 'ые', 'ие', 'ый', 'ий', 'ой',
  'ам', 'ям', 'ах', 'ях', 'ов', 'ев', 'ей', 'ом', 'ем', 'ым', 'им',
  'ать', 'ять', 'ить', 'еть', 'ут', 'ют', 'ат', 'ят', 'ет', 'ит', 'ем', 'им',
  'а', 'я', 'ы', 'и', 'е', 'у', 'ю', 'о', 'ь', 'ся',
].sort((a, b) => b.length - a.length);

const stopWords = new Set([
  'как', 'что', 'это', 'для', 'или', 'при', 'про', 'над', 'под', 'без',
  'где', 'кто', 'все', 'всё', 'они', 'она', 'его', 'ему', 'ее', 'ещё', 'еще',
  'чем', 'так', 'уже', 'тоже', 'есть',
]);

/** Нижний регистр и «е» вместо «ё»: так пишут запросы, и так же сделаны ключи таблицы словоформ. */
export function normalizeWord(text: string): string {
  return text.replaceAll('İ', 'I').toLowerCase().replaceAll('ё', 'е');
}

export interface LemmaTable {
  lemmas: string[];
  forms: Record<string, number | number[]>;
}

// Таблицу собирает сборка (search-lemmas.json); пока она не приехала, работает только обрезка окончаний
let lemmaTable: LemmaTable | null = null;

export function useLemmas(table: LemmaTable | null): void {
  lemmaTable = table;
}

function lemmasOf(word: string): string[] {
  const ids = lemmaTable?.forms[word];
  if (ids === undefined) return [word];
  return (Array.isArray(ids) ? ids : [ids]).map((id) => lemmaTable!.lemmas[id]);
}

export function wordsIn(text: string): SearchWord[] {
  return [...text.matchAll(/[a-z0-9а-я]+/gi)].map((match) => ({
    value: match[0].toLowerCase(),
    start: match.index ?? 0,
    end: (match.index ?? 0) + match[0].length,
  }));
}

export function queryWords(text: string): string[] {
  return [...new Set(wordsIn(text).map(({ value }) => value).filter((word) => word.length > 2 && !stopWords.has(word)))];
}

function stem(word: string): string {
  for (const suffix of suffixes) {
    if (word.endsWith(suffix) && word.length - suffix.length >= 3) {
      return word.slice(0, -suffix.length);
    }
  }
  return word;
}

function sameWord(queryWord: string, textWord: string): boolean {
  const queryStem = stem(queryWord);
  const textStem = stem(textWord);
  if (queryStem === textStem) return true;
  // Основа ищется только с начала слова: в середине она находила «стал» в «ностальгии»
  if (queryStem.length >= 4 && textStem.startsWith(queryStem)) return true;
  // Обрезка окончаний не видит беглых гласных и чередований: «сон» и «сна» сходятся только по словарю
  if (!lemmaTable) return false;
  const textLemmas = lemmasOf(textWord);
  return lemmasOf(queryWord).some((lemma) => textLemmas.includes(lemma));
}

const wordChar = /[a-z0-9а-я]/i;

/** Совпадение фразы засчитывается только с начала слова: иначе «сон» находился в «Олсон» и «персонаже»
    и вытеснял наверх статьи, где о сне нет ни слова. Окончание слова не проверяем, «сон» находит «сонный». */
export function indexAtWordStart(text: string, query: string): number {
  if (!query) return -1;
  // Запрос в три буквы как начало слова слишком широк: «сна» находило «сначала». Такой запрос совпадает
  // только со словом целиком, а его формы ловит словарь
  const whole = query.length <= 3 && !/\s/.test(query);
  for (let at = text.indexOf(query); at >= 0; at = text.indexOf(query, at + 1)) {
    const end = at + query.length;
    if ((at === 0 || !wordChar.test(text[at - 1])) && (!whole || end === text.length || !wordChar.test(text[end]))) return at;
  }
  return -1;
}

/** Сколько слов текста совпало с запросом: статья, где тема проходит через весь текст, стоит выше той, где слово мелькнуло раз. */
export function countWordMatches(words: SearchWord[], terms: string[]): number {
  if (!terms.length) return 0;
  return words.reduce((count, { value }) => count + (terms.some((term) => sameWord(term, value)) ? 1 : 0), 0);
}

export function findWordMatches(words: SearchWord[], terms: string[]): MatchRange[] | null {
  if (!terms.length) return null;
  const matches: MatchRange[] = [];
  for (const term of terms) {
    const word = words.find(({ value }) => sameWord(term, value));
    if (!word) return null;
    if (!matches.some(({ start, end }) => start === word.start && end === word.end)) {
      matches.push({ start: word.start, end: word.end });
    }
  }
  return matches.sort((a, b) => a.start - b.start);
}
