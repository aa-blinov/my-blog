import type { QuestionnaireData } from '../../utils/questionnaire';
import { depression } from './depression';
import { gad7 } from './gad7';

// Реестр опросников: статья подключает его полем `questionnaire: <ключ>` во frontmatter
export const questionnaires: Record<string, QuestionnaireData> = { depression, gad7 };
