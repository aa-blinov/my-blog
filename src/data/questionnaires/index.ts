import type { QuestionnaireData } from '../../utils/questionnaire';
import { depression } from './depression';

// Реестр опросников: статья подключает его полем `questionnaire: <ключ>` во frontmatter
export const questionnaires: Record<string, QuestionnaireData> = { depression };
