// Ключ третьего уровня сверяется с формулировками опубликованных лекций.
export const expertCourseQuiz = {
  passMark: 45,
  lessons: [
    'native-user',
    'context-architecture',
    'decision-studio',
    'routing',
    'agent-supervision',
    'ai-native-company',
  ],
  key: [
    'B', 'A', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'C',
    'D', 'B', 'A', 'C', 'D', 'B', 'A', 'C', 'B', 'D',
    'A', 'C', 'B', 'D', 'C', 'A', 'D', 'B', 'C', 'A',
    'B', 'D', 'A', 'B', 'C', 'A', 'D', 'C', 'B', 'D',
    'C', 'B', 'A', 'D', 'C', 'A', 'D', 'B', 'C', 'B',
    'D', 'A', 'C', 'B', 'A', 'D', 'C', 'B', 'D', 'A',
  ],
} as const;
