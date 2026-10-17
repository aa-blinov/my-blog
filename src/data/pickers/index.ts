import type { PickerData } from '../../utils/picker';
import { antidepressants } from './antidepressants';

// Реестр подборщиков: статья подключает его полем `picker: <ключ>` во frontmatter
export const pickers: Record<string, PickerData> = { antidepressants };
