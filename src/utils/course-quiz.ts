export interface QuizQuestion {
  number: number;
  text: string;
  multiple: boolean;
  options: { value: string; text: string }[];
  correct: string;
  explanation?: string;
}

export interface QuizBlock {
  title: string;
  lesson: string;
  questions: QuizQuestion[];
}

export interface CourseQuiz {
  passMark: number;
  blocks: QuizBlock[];
}

export function parseCourseQuiz(
  markdown: string,
  settings: { key: readonly string[]; lessons: readonly string[]; passMark: number; explanations?: Record<number, string> },
): CourseQuiz {
  const blocks = markdown.split(/^## (?=Блок \d+\.)/m).slice(1).map((section, blockIndex) => {
    const title = section.split('\n', 1)[0].trim();
    const segments = section.split(/^\*\*(\d+)\.\*\* /m);
    const questions: QuizQuestion[] = [];
    for (let i = 1; i < segments.length; i += 2) {
      const number = Number(segments[i]);
      const content = segments[i + 1];
      const firstLine = content.split('\n', 1)[0].trim();
      const multiple = firstLine.endsWith('*(выберите все верные ответы)*');
      const text = firstLine.replace(/\s*\*\(выберите все верные ответы\)\*$/, '');
      const options = Array.from(content.matchAll(/^- ([A-F])\) (.+)$/gm), ([, value, rawText]) => ({
        value,
        text: rawText.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'),
      }));
      const correct = settings.key[number - 1];
      const values = new Set(options.map((option) => option.value));
      if (!text || values.size < 2 || values.size !== options.length || !correct
        || new Set(correct).size !== correct.length || [...correct].some((value) => !values.has(value))
        || multiple !== (correct.length > 1)) {
        throw new Error(`Некорректный вопрос или ключ итогового теста: ${number}.`);
      }
      questions.push({ number, text, multiple, options, correct, explanation: settings.explanations?.[number] });
    }
    return { title, lesson: settings.lessons[blockIndex], questions };
  });
  const questions = blocks.flatMap((block) => block.questions);
  if (blocks.length !== settings.lessons.length || blocks.some((block) => !block.questions.length)
    || questions.length !== settings.key.length || questions.some((question, index) => question.number !== index + 1)
    || settings.passMark < 1 || settings.passMark > questions.length) {
    throw new Error('Число вопросов, порядок блоков или порог итогового теста не совпадают с ключом.');
  }
  return { passMark: settings.passMark, blocks };
}

export function isQuizAnswerCorrect(question: QuizQuestion, selected: readonly string[]): boolean {
  const answers = new Set(selected);
  return answers.size === question.correct.length && [...question.correct].every((value) => answers.has(value));
}
