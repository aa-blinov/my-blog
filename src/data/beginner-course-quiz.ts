// Ключ первого уровня сверяется с формулировками опубликованных лекций.
export const beginnerCourseQuiz = {
  passMark: 38,
  lessons: ['what-is-llm', 'prompting', 'tools', 'workflow', 'critical-thinking'],
  key: [
    'B', 'C', 'B', 'C', 'C', 'ABDE', 'A', 'B', 'C', 'C',
    'A', 'B', 'B', 'C', 'C', 'B', 'A', 'B', 'C', 'B',
    'C', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'BCE', 'B',
    'B', 'B', 'C', 'B', 'C', 'B', 'C', 'B', 'B', 'C',
    'B', 'ACDE', 'C', 'C', 'C', 'C', 'B', 'B', 'BDE', 'B',
  ],
} as const;
