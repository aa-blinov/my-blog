import { advancedCourseQuiz } from './advanced-course-quiz';
import { beginnerCourseQuiz } from './beginner-course-quiz';
import { expertCourseQuiz } from './expert-course-quiz';

export const courseQuizzes = {
  'llm-business-beginner': beginnerCourseQuiz,
  'llm-business-advanced': advancedCourseQuiz,
  'llm-business-expert': expertCourseQuiz,
} as const;
