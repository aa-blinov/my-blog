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
  return queryStem.length >= 4 && textStem.includes(queryStem);
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
