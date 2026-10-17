// Данные карты повторяют серию «Антидепрессанты по шагам»: карточки из сводной карты части 4, классы из части 2,
// приём по официальным инструкциям. Меняешь препарат в части 4, поменяй и здесь, чтобы карта и текст не расходились
import type { MindMapData } from '../../utils/mindmap';

export const antidepressants: MindMapData = { root: {
  "id": "root",
  "label": "Препараты при депрессии",
  "title": "Препараты при депрессии",
  "facts": [
    {
      "label": "Как читать карту",
      "text": "Вокруг центра пять классов антидепрессантов по механизму действия, дальше препараты других классов, которые встречаются рядом с депрессией: антипсихотики, нормотимики, успокоительные, безрецептурные средства и другие способы усилить лечение. Группы с пунктирной рамкой не антидепрессанты: это препараты, которые встречаются рядом с лечением, а не его замена. Каждый препарат стоит в своём классе; если он встречается в основном у нас, это отмечено в карточке. В карточке препарата: что это, когда его выбирают, как принимают, чем хорош и чем за него платят."
    },
    {
      "label": "Важно",
      "text": "Дозы здесь из официальных инструкций, чтобы понимать назначение. Препарат и дозу подбирает врач, менять их самому нельзя."
    },
    {
      "label": "Первые недели",
      "text": "В первые недели и после смены дозы могут усилиться тревога и мысли о самоубийстве, особенно у людей 24 лет и младше. Об этом сразу говорят врачу, а если мысли сильные, звонят 112.",
      "sources": [
        {
          "title": "Lexapro (escitalopram), инструкция по применению и руководство для пациента (Medication Guide), одобренные FDA. AbbVie, редакции 2023 и 2024 годов.",
          "url": "https://www.rxabbvie.com/pdf/lexapro_pi.pdf"
        }
      ]
    }
  ],
  "children": [
    {
      "id": "ssri",
      "label": "Серотониновые (СИОЗС)",
      "title": "Селективные ингибиторы обратного захвата серотонина (СИОЗС)",
      "hint": "Селективные ингибиторы обратного захвата серотонина. Обычный первый выбор, переносятся лучше старых.",
      "facts": [
        {
          "label": "Что это",
          "text": "Блокируют насос, которым клетка забирает серотонин обратно, и серотонина в синапсе остаётся больше. «Селективные» значит, что на другие системы они действуют мало, поэтому переносятся лучше старых препаратов.",
          "sources": [
            {
              "title": "Chu A., Wadhwa R. Selective Serotonin Reuptake Inhibitors. StatPearls, 2023.",
              "url": "https://www.ncbi.nlm.nih.gov/books/NBK554406/"
            }
          ]
        },
        {
          "label": "Когда выбирают",
          "text": "Обычный первый выбор. При риске отравления безопаснее трициклических.",
          "sources": [
            {
              "title": "Hawton K. et al. Toxicity of antidepressants: rates of suicide relative to prescribing and non-fatal overdose. British Journal of Psychiatry, 2010.",
              "url": "https://pubmed.ncbi.nlm.nih.gov/20435959/"
            }
          ]
        },
        {
          "label": "Опасные сочетания",
          "text": "Нельзя вместе с ингибиторами МАО, в том числе моклобемидом и пирлиндолом, и с антибиотиком линезолидом; после отмены ИМАО нужен перерыв не меньше 14 дней.",
          "sources": [
            {
              "title": "Lexapro (escitalopram), инструкция по применению и руководство для пациента (Medication Guide), одобренные FDA. AbbVie, редакции 2023 и 2024 годов.",
              "url": "https://www.rxabbvie.com/pdf/lexapro_pi.pdf"
            }
          ]
        }
      ],
      "children": [
        {
          "id": "escitalopram",
          "label": "Эсциталопрам",
          "note": "Ципралекс, Селектра, Ленуксин, Элицея",
          "facts": [
            {
              "label": "Что это",
              "text": "Класс: Серотониновые (СИОЗС). Как действует класс, в его карточке."
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия (депрессивные эпизоды любой тяжести), паническое расстройство с агорафобией (страх открытых мест и толпы) или без неё, социальное тревожное расстройство (социальная фобия), генерализованное тревожное расстройство (постоянная тревога по многим поводам), обсессивно-компульсивное расстройство (навязчивые мысли и действия). Взрослым от 18 лет.",
              "sources": [
                {
                  "title": "Справочник Видаль: Селектра (эсциталопрам), инструкция, раздел «Показания препарата».",
                  "url": "https://www.vidal.ru/drugs/selectra__23088"
                }
              ]
            },
            {
              "label": "Когда выбирают",
              "text": "Частый первый выбор при обычном первом эпизоде: среди самых эффективных и лучше переносимых.",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Один раз в день, утром или вечером, независимо от еды."
            },
            {
              "label": "Противопоказания",
              "text": "Одновременно с ИМАО (в том числе линезолидом) и в течение 14 дней после них; вместе с пимозидом.",
              "sources": [
                {
                  "title": "Справочник Видаль: Селектра (эсциталопрам), инструкция, раздел «Показания препарата».",
                  "url": "https://www.vidal.ru/drugs/selectra__23088"
                },
                {
                  "title": "Lexapro (escitalopram), инструкция по применению и руководство для пациента (Medication Guide), одобренные FDA. AbbVie, редакции 2023 и 2024 годов.",
                  "url": "https://www.rxabbvie.com/pdf/lexapro_pi.pdf"
                }
              ]
            },
            {
              "label": "Показания в других странах",
              "text": "В США (Lexapro) показаний только два: депрессия (с 12 лет) и генерализованное тревожное расстройство (с 7 лет).",
              "sources": [
                {
                  "title": "Lexapro (escitalopram), инструкция по применению и руководство для пациента (Medication Guide), одобренные FDA. AbbVie, редакции 2023 и 2024 годов.",
                  "url": "https://www.rxabbvie.com/pdf/lexapro_pi.pdf"
                }
              ],
              "more": true
            },
            {
              "label": "Доза по инструкции",
              "text": "Обычная доза 10 мг, максимум 20 мг в сутки; повышать не раньше чем через неделю.",
              "more": true
            },
            {
              "label": "Что важно при приёме",
              "text": "В исследовании 20 мг не помогали лучше, чем 10 мг. Пожилым и при болезнях печени обычно 10 мг.",
              "sources": [
                {
                  "title": "Lexapro (escitalopram), инструкция по применению и руководство для пациента (Medication Guide), одобренные FDA. AbbVie, редакции 2023 и 2024 годов.",
                  "url": "https://www.rxabbvie.com/pdf/lexapro_pi.pdf"
                }
              ],
              "more": true
            },
            {
              "label": "Чем хорош",
              "text": "Среди самых эффективных и лучше переносимых у Чиприани",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Сексуальные нарушения; среди частых по симптомам отмены; может удлинять интервал QT на ЭКГ, людям старше 65 лет не больше 10 мг в сутки",
              "sources": [
                {
                  "title": "Serretti A., Chiesa A. Treatment-emergent sexual dysfunction related to antidepressants: a meta-analysis. Journal of Clinical Psychopharmacology, 2009.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/19440080/"
                },
                {
                  "title": "Henssler J. et al. Incidence of antidepressant discontinuation symptoms: a systematic review and meta-analysis. Lancet Psychiatry, 2024.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/38851198/"
                },
                {
                  "title": "MHRA Drug Safety Update. Citalopram and escitalopram: QT interval prolongation, декабрь 2011.",
                  "url": "https://www.gov.uk/drug-safety-update/citalopram-and-escitalopram-qt-interval-prolongation"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/selectra__23088",
            "text": "Полная инструкция: vidal.ru"
          }
        },
        {
          "id": "sertraline",
          "label": "Сертралин",
          "note": "Золофт, Асентра, Стимулотон, Серената",
          "facts": [
            {
              "label": "Что это",
              "text": "Класс: Серотониновые (СИОЗС). Как действует класс, в его карточке."
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия (лечение и профилактика повторных эпизодов), обсессивно-компульсивное расстройство (навязчивые мысли и действия), паническое расстройство с агорафобией или без неё, посттравматическое стрессовое расстройство (ПТСР).",
              "sources": [
                {
                  "title": "Справочник Видаль: Серената (сертралин), инструкция, раздел «Показания препарата» (ЛП-№(006156)-(РГ-RU) от 08.07.24).",
                  "url": "https://www.vidal.ru/drugs/serenata__6638"
                }
              ]
            },
            {
              "label": "Когда выбирают",
              "text": "Частый первый выбор при обычном первом эпизоде: среди лучше переносимых.",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Время суток инструкция не задаёт; таблетки можно пить независимо от еды."
            },
            {
              "label": "Противопоказания",
              "text": "Одновременно с ИМАО и в течение 14 дней после них; вместе с пимозидом, триптофаном или фенфлурамином; нестабильная эпилепсия; возраст до 6 лет; беременность и кормление грудью.",
              "sources": [
                {
                  "title": "Справочник Видаль: Серената (сертралин), инструкция, раздел «Показания препарата» (ЛП-№(006156)-(РГ-RU) от 08.07.24).",
                  "url": "https://www.vidal.ru/drugs/serenata__6638"
                },
                {
                  "title": "Zoloft (sertraline), инструкция по применению: раздел 2.4 о нарушении функции печени. DailyMed, 2025.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fda754f6-d0f3-4dce-a17a-927d64f912f7"
                }
              ]
            },
            {
              "label": "Показания в других странах",
              "text": "В США (Zoloft) к этому добавлены социальное тревожное расстройство и предменструальное дисфорическое расстройство (тяжёлая форма предменструального синдрома).",
              "sources": [
                {
                  "title": "Zoloft (sertraline), инструкция по применению: раздел 2.4 о нарушении функции печени. DailyMed, 2025.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fda754f6-d0f3-4dce-a17a-927d64f912f7"
                }
              ],
              "more": true
            },
            {
              "label": "Доза по инструкции",
              "text": "Начинают с 50 мг, максимум 200 мг в сутки; повышают на величину от 25 до 50 мг не чаще раза в неделю.",
              "more": true
            },
            {
              "label": "Что важно при приёме",
              "text": "Дозу меняют не чаще раза в неделю: половина препарата выводится примерно за сутки, а постоянная концентрация в крови устанавливается примерно за неделю. При лёгком нарушении работы печени дозу уменьшают вдвое, при среднем и тяжёлом сертралин не рекомендован.",
              "sources": [
                {
                  "title": "Zoloft (sertraline), инструкция по применению: раздел 2.4 о нарушении функции печени. DailyMed, 2025.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fda754f6-d0f3-4dce-a17a-927d64f912f7"
                }
              ],
              "more": true
            },
            {
              "label": "Чем хорош",
              "text": "Среди лучше переносимых у Чиприани",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Сексуальные нарушения",
              "sources": [
                {
                  "title": "Serretti A., Chiesa A. Treatment-emergent sexual dysfunction related to antidepressants: a meta-analysis. Journal of Clinical Psychopharmacology, 2009.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/19440080/"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/serenata__6638",
            "text": "Полная инструкция: vidal.ru"
          }
        },
        {
          "id": "fluoxetine",
          "label": "Флуоксетин",
          "note": "Прозак, Профлузак, Флуоксетин Ланнахер",
          "facts": [
            {
              "label": "Что это",
              "text": "Класс: Серотониновые (СИОЗС). Как действует класс, в его карточке."
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия, нервная булимия (приступы переедания с вызыванием рвоты), обсессивно-компульсивное расстройство (навязчивые мысли и действия).",
              "sources": [
                {
                  "title": "Справочник Видаль: Профлузак (флуоксетин), инструкция, раздел «Показания препарата».",
                  "url": "https://www.vidal.ru/drugs/proflusak__1402"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Утром. Дозу больше 20 мг пьют один раз утром или делят на два приёма: утром и в обед. Независимо от еды."
            },
            {
              "label": "Противопоказания",
              "text": "Одновременно с ИМАО (после отмены флуоксетина до начала ИМАО нужно не меньше 5 недель); вместе с пимозидом или тиоридазином; тяжёлые нарушения работы почек и печени; беременность и кормление грудью; суицидальные мысли.",
              "sources": [
                {
                  "title": "Справочник Видаль: Профлузак (флуоксетин), инструкция, раздел «Показания препарата».",
                  "url": "https://www.vidal.ru/drugs/proflusak__1402"
                },
                {
                  "title": "Prozac (fluoxetine), инструкция по применению: противопоказания (тиоридазин) и раздел 5.14 о длительном выведении. DailyMed, Eli Lilly (Dista), 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c88f33ed-6dfb-4c5e-bc01-d8e36dd97299"
                }
              ]
            },
            {
              "label": "Показания в других странах",
              "text": "В США (Prozac) есть ещё паническое расстройство, а в сочетании с оланзапином депрессия при биполярном расстройстве I типа и депрессия, не ответившая на два антидепрессанта.",
              "sources": [
                {
                  "title": "Prozac (fluoxetine), инструкция по применению: противопоказания (тиоридазин) и раздел 5.14 о длительном выведении. DailyMed, Eli Lilly (Dista), 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c88f33ed-6dfb-4c5e-bc01-d8e36dd97299"
                }
              ],
              "more": true
            },
            {
              "label": "Доза по инструкции",
              "text": "Начинают с 20 мг, максимум 80 мг в сутки.",
              "more": true
            },
            {
              "label": "Когда оценивают эффект",
              "text": "Повысить дозу можно рассмотреть через несколько недель, если улучшения мало.",
              "more": true
            },
            {
              "label": "Что важно при приёме",
              "text": "Выводится очень долго: изменение дозы полностью сказывается в крови только через несколько недель. Между отменой флуоксетина и началом ИМАО нужно не меньше 5 недель.",
              "sources": [
                {
                  "title": "Prozac (fluoxetine), инструкция по применению: противопоказания (тиоридазин) и раздел 5.14 о длительном выведении. DailyMed, Eli Lilly (Dista), 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c88f33ed-6dfb-4c5e-bc01-d8e36dd97299"
                }
              ],
              "more": true
            },
            {
              "label": "Чем хорош",
              "text": "Бросали реже, чем плацебо",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Слабее в прямых сравнениях; сексуальные нарушения",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                },
                {
                  "title": "Serretti A., Chiesa A. Treatment-emergent sexual dysfunction related to antidepressants: a meta-analysis. Journal of Clinical Psychopharmacology, 2009.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/19440080/"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/proflusak__1402",
            "text": "Полная инструкция: vidal.ru"
          }
        },
        {
          "id": "paroxetine",
          "label": "Пароксетин",
          "note": "Паксил",
          "facts": [
            {
              "label": "Что это",
              "text": "Класс: Серотониновые (СИОЗС). Как действует класс, в его карточке."
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия (эпизоды средней и тяжёлой степени, повторяющаяся депрессия), обсессивно-компульсивное расстройство (навязчивые мысли и действия), паническое расстройство с агорафобией или без неё, социальная фобия, генерализованное тревожное расстройство, посттравматическое стрессовое расстройство.",
              "sources": [
                {
                  "title": "Справочник Видаль: Паксил (пароксетин), инструкция, раздел «Показания препарата» (ЛП-№(000746)-(РГ-RU) от 04.05.22).",
                  "url": "https://www.vidal.ru/drugs/paxil__24822"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Один раз в день утром, независимо от еды."
            },
            {
              "label": "Противопоказания",
              "text": "Одновременно с ИМАО и в течение 2 недель после них; вместе с тиоридазином или пимозидом (опасные нарушения ритма сердца); возраст до 18 лет.",
              "sources": [
                {
                  "title": "Справочник Видаль: Паксил (пароксетин), инструкция, раздел «Показания препарата» (ЛП-№(000746)-(РГ-RU) от 04.05.22).",
                  "url": "https://www.vidal.ru/drugs/paxil__24822"
                },
                {
                  "title": "Paxil (paroxetine), инструкция по применению: разделы о судорогах, кровотечениях, варфарине и тамоксифене. DailyMed, Apotex, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ef3b5cbe-f9e1-c1ac-79da-cfe14e3a7e7e"
                }
              ]
            },
            {
              "label": "Показания в других странах",
              "text": "В США (Paxil) список тот же.",
              "sources": [
                {
                  "title": "Paxil (paroxetine), инструкция по применению: разделы о судорогах, кровотечениях, варфарине и тамоксифене. DailyMed, Apotex, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ef3b5cbe-f9e1-c1ac-79da-cfe14e3a7e7e"
                }
              ],
              "more": true
            },
            {
              "label": "Доза по инструкции",
              "text": "Начинают с 20 мг, максимум 50 мг в сутки при депрессии; повышают на 10 мг не чаще раза в неделю.",
              "more": true
            },
            {
              "label": "Что важно при приёме",
              "text": "Пожилым и при тяжёлых болезнях почек или печени начинают с 10 мг, максимум 40 мг. Отменяют постепенно.",
              "sources": [
                {
                  "title": "Paxil (paroxetine), инструкция по применению: разделы о судорогах, кровотечениях, варфарине и тамоксифене. DailyMed, Apotex, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ef3b5cbe-f9e1-c1ac-79da-cfe14e3a7e7e"
                }
              ],
              "more": true
            },
            {
              "label": "Чем хорош",
              "text": "Среди эффективных в прямых сравнениях",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Сексуальные нарушения; среди самых тяжёлых по отмене",
              "sources": [
                {
                  "title": "Serretti A., Chiesa A. Treatment-emergent sexual dysfunction related to antidepressants: a meta-analysis. Journal of Clinical Psychopharmacology, 2009.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/19440080/"
                },
                {
                  "title": "Henssler J. et al. Incidence of antidepressant discontinuation symptoms: a systematic review and meta-analysis. Lancet Psychiatry, 2024.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/38851198/"
                }
              ],
              "more": true
            },
            {
              "label": "Пожилым",
              "text": "Критерии Бирс советуют избегать: из СИОЗС у него самое сильное холинолитическое действие.",
              "sources": [
                {
                  "title": "2023 American Geriatrics Society Beers Criteria Update Expert Panel. American Geriatrics Society 2023 updated AGS Beers Criteria for potentially inappropriate medication use in older adults. Journal of the American Geriatrics Society, 2023.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12478568/"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/paxil__24822",
            "text": "Полная инструкция: vidal.ru"
          }
        },
        {
          "id": "citalopram",
          "label": "Циталопрам",
          "note": "Ципрамил",
          "facts": [
            {
              "label": "Что это",
              "text": "Класс: Серотониновые (СИОЗС). Как действует класс, в его карточке."
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия (эпизоды средней и тяжёлой степени), паническое расстройство.",
              "sources": [
                {
                  "title": "Справочник Видаль: Циталопрам, таблетки, инструкция, раздел «Показания препарата» (ЛП-001955 от 25.12.12).",
                  "url": "https://www.vidal.ru/drugs/citalopram__38632"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Один раз в день, независимо от еды. Время суток инструкция не задаёт."
            },
            {
              "label": "Противопоказания",
              "text": "Одновременно с ИМАО (в том числе селегилином, моклобемидом, линезолидом) и в течение 14 дней после них; вместе с лекарствами, удлиняющими интервал QT на ЭКГ (например, пимозидом); врождённое удлинение интервала QT (нарушение ритма сердца); и другие, см. «Подробнее»."
            },
            {
              "label": "Показания в других странах",
              "text": "В США (Celexa) только депрессия у взрослых.",
              "sources": [
                {
                  "title": "Celexa (citalopram), инструкция по применению: разделы 2.3 и 5.2 об интервале QT и дозах. DailyMed, Allergan, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4259d9b1-de34-43a4-85a8-41dd214e9177"
                }
              ],
              "more": true
            },
            {
              "label": "Доза по инструкции",
              "text": "Начинают с 20 мг, максимум 40 мг в сутки; повышать не раньше чем через неделю.",
              "more": true
            },
            {
              "label": "Что важно при приёме",
              "text": "Больше 40 мг нельзя из-за риска нарушения ритма сердца (удлинение QT). Старше 60 лет и при болезнях печени максимум 20 мг.",
              "sources": [
                {
                  "title": "Celexa (citalopram), инструкция по применению: разделы 2.3 и 5.2 об интервале QT и дозах. DailyMed, Allergan, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4259d9b1-de34-43a4-85a8-41dd214e9177"
                }
              ],
              "more": true
            },
            {
              "label": "Чем хорош",
              "text": "Среди лучше переносимых",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Токсичнее остальных СИОЗС при передозировке; удлиняет интервал QT на ЭКГ, а это повышает риск опасной аритмии, поэтому доза не выше 40 мг в сутки, после 60 лет не выше 20 мг; сексуальные нарушения",
              "sources": [
                {
                  "title": "Hawton K. et al. Toxicity of antidepressants: rates of suicide relative to prescribing and non-fatal overdose. British Journal of Psychiatry, 2010.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/20435959/"
                },
                {
                  "title": "FDA Drug Safety Communication: revised recommendations for Celexa (citalopram hydrobromide) related to a potential risk of abnormal heart rhythms with high doses. FDA, 2012.",
                  "url": "https://www.fda.gov/drugs/drug-safety-and-availability/fda-drug-safety-communication-revised-recommendations-celexa-citalopram-hydrobromide-related"
                },
                {
                  "title": "Serretti A., Chiesa A. Treatment-emergent sexual dysfunction related to antidepressants: a meta-analysis. Journal of Clinical Psychopharmacology, 2009.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/19440080/"
                }
              ],
              "more": true
            },
            {
              "label": "Остальные противопоказания",
              "text": "возраст до 18 лет.",
              "sources": [
                {
                  "title": "Справочник Видаль: Циталопрам, таблетки, инструкция, раздел «Показания препарата» (ЛП-001955 от 25.12.12).",
                  "url": "https://www.vidal.ru/drugs/citalopram__38632"
                },
                {
                  "title": "Celexa (citalopram), инструкция по применению: разделы 2.3 и 5.2 об интервале QT и дозах. DailyMed, Allergan, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4259d9b1-de34-43a4-85a8-41dd214e9177"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/citalopram__38632",
            "text": "Полная инструкция: vidal.ru"
          }
        },
        {
          "id": "fluvoxamine",
          "label": "Флувоксамин",
          "note": "Феварин, Рокона и другие",
          "facts": [
            {
              "label": "Что это",
              "text": "Класс: Серотониновые (СИОЗС). Как действует класс, в его карточке."
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия у взрослых; обсессивно-компульсивное расстройство (навязчивые мысли и действия) у взрослых и детей с 8 лет.",
              "sources": [
                {
                  "title": "Справочник Видаль: Феварин (флувоксамин), инструкция, раздел «Режим дозирования» при депрессии.",
                  "url": "https://www.vidal.ru/drugs/fevarin__1698"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Вечером, один раз в день; дозу больше 150 мг делят на два или три приёма (российская инструкция). Американская: перед сном, независимо от еды."
            },
            {
              "label": "Противопоказания",
              "text": "Одновременно с ИМАО и в течение 2 недель после них; вместе с тизанидином, пимозидом, тиоридазином или рамелтеоном; возраст до 18 лет при депрессии (до 8 лет при обсессивно-компульсивном расстройстве).",
              "sources": [
                {
                  "title": "Справочник Видаль: Феварин (флувоксамин), инструкция, раздел «Режим дозирования» при депрессии.",
                  "url": "https://www.vidal.ru/drugs/fevarin__1698"
                },
                {
                  "title": "Fluvoxamine maleate tablets, инструкция по применению: противопоказания и раздел 5.8 о взаимодействиях (клозапин, теофиллин, варфарин, тизанидин). DailyMed, Apotex, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6eeb14df-6fcf-a737-5359-5744eb4accea"
                }
              ]
            },
            {
              "label": "Показания в других странах",
              "text": "В США только обсессивно-компульсивное расстройство, депрессии в показаниях нет.",
              "sources": [
                {
                  "title": "Fluvoxamine maleate tablets, инструкция по применению: противопоказания и раздел 5.8 о взаимодействиях (клозапин, теофиллин, варфарин, тизанидин). DailyMed, Apotex, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6eeb14df-6fcf-a737-5359-5744eb4accea"
                }
              ],
              "more": true
            },
            {
              "label": "Доза по инструкции",
              "text": "При депрессии начинают с 50 или 100 мг, обычно 100 мг, максимум 300 мг в сутки (российская инструкция).",
              "more": true
            },
            {
              "label": "Когда оценивают эффект",
              "text": "Через три-четыре недели от начала дозу пересматривают.",
              "more": true
            },
            {
              "label": "Что важно при приёме",
              "text": "В США флувоксамин одобрен только при ОКР, дозы при депрессии есть в российской инструкции Феварина. Если дозы делят неравно, большую американская инструкция советует пить перед сном.",
              "sources": [
                {
                  "title": "Справочник Видаль: Феварин (флувоксамин), инструкция, раздел «Режим дозирования» при депрессии.",
                  "url": "https://www.vidal.ru/drugs/fevarin__1698"
                },
                {
                  "title": "Fluvoxamine maleate tablets, инструкция по применению: противопоказания и раздел 5.8 о взаимодействиях (клозапин, теофиллин, варфарин, тизанидин). DailyMed, Apotex, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6eeb14df-6fcf-a737-5359-5744eb4accea"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Слабее и хуже переносится в прямых сравнениях; сексуальные нарушения; мешает разрушению многих лекарств: сильно повышает уровень тизанидина, теофиллина, клозапина, агомелатина и варфарина, а с тизанидином, тиоридазином и пимозидом противопоказан",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                },
                {
                  "title": "Serretti A., Chiesa A. Treatment-emergent sexual dysfunction related to antidepressants: a meta-analysis. Journal of Clinical Psychopharmacology, 2009.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/19440080/"
                },
                {
                  "title": "Fluvoxamine maleate tablets, инструкция по применению: противопоказания и раздел 5.8 о взаимодействиях (клозапин, теофиллин, варфарин, тизанидин). DailyMed, Apotex, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6eeb14df-6fcf-a737-5359-5744eb4accea"
                },
                {
                  "title": "Valdoxan (agomelatine): EPAR, сведения о препарате. Европейское агентство лекарственных средств (EMA).",
                  "url": "https://www.ema.europa.eu/en/medicines/human/EPAR/valdoxan"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/fevarin__1698",
            "text": "Полная инструкция: vidal.ru"
          }
        }
      ]
    },
    {
      "id": "snri",
      "label": "Серотонин и норадреналин (СИОЗСН)",
      "title": "Ингибиторы обратного захвата серотонина и норадреналина (СИОЗСН)",
      "hint": "Ингибиторы обратного захвата серотонина и норадреналина: делают то же, что СИОЗС, но сразу для двух веществ.",
      "facts": [
        {
          "label": "Что это",
          "text": "Делают то же, что СИОЗС, но сразу для двух веществ: серотонина и норадреналина.",
          "sources": [
            {
              "title": "Singh D., Saadabadi A. Venlafaxine. StatPearls, 2024.",
              "url": "https://www.ncbi.nlm.nih.gov/books/NBK535363/"
            },
            {
              "title": "Biswas T., Patel P. et al. Duloxetine. StatPearls, 2026.",
              "url": "https://www.ncbi.nlm.nih.gov/books/NBK549806/"
            }
          ]
        },
        {
          "label": "Опасные сочетания",
          "text": "Нельзя вместе с ингибиторами МАО, в том числе моклобемидом и пирлиндолом, и с линезолидом; после отмены ИМАО нужен перерыв не меньше 14 дней.",
          "sources": [
            {
              "title": "Effexor XR (venlafaxine extended-release), инструкция по применению: раздел 2 о дозах и приёме. DailyMed, Viatris.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c848a5d8-ba94-4c84-80e3-0bf35fb8e32e"
            }
          ]
        }
      ],
      "children": [
        {
          "id": "venlafaxine",
          "label": "Венлафаксин",
          "note": "Велаксин, Велафакс, Алвента",
          "facts": [
            {
              "label": "Что это",
              "text": "Класс: Серотонин и норадреналин (СИОЗСН). Как действует класс, в его карточке."
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия, в том числе с тревогой.",
              "sources": [
                {
                  "title": "Справочник Видаль: Велафакс (венлафаксин), таблетки, раздел «Режим дозирования».",
                  "url": "https://www.vidal.ru/drugs/velafax__8875"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Капсулы с замедленным высвобождением (XR): один раз в день во время еды, примерно в одно и то же время. Обычные таблетки (например, Велафакс): два раза в день во время еды."
            },
            {
              "label": "Противопоказания",
              "text": "Одновременно с ИМАО (в том числе линезолидом) и в течение 14 дней после них; тяжёлые нарушения работы почек или печени; возраст до 18 лет; беременность и кормление грудью.",
              "sources": [
                {
                  "title": "Справочник Видаль: Велафакс (венлафаксин), таблетки, раздел «Режим дозирования».",
                  "url": "https://www.vidal.ru/drugs/velafax__8875"
                },
                {
                  "title": "Effexor XR (venlafaxine extended-release), инструкция по применению: раздел 2 о дозах и приёме. DailyMed, Viatris.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c848a5d8-ba94-4c84-80e3-0bf35fb8e32e"
                }
              ]
            },
            {
              "label": "Показания в других странах",
              "text": "В США (Effexor XR, капсулы длительного действия) кроме депрессии есть генерализованное тревожное расстройство, социальное тревожное расстройство и паническое расстройство.",
              "sources": [
                {
                  "title": "Effexor XR (venlafaxine extended-release), инструкция по применению: раздел 2 о дозах и приёме. DailyMed, Viatris.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c848a5d8-ba94-4c84-80e3-0bf35fb8e32e"
                }
              ],
              "more": true
            },
            {
              "label": "Доза по инструкции",
              "text": "XR: начинают с 75 мг (иногда сначала от 4 до 7 дней по 37,5 мг), обычно до 225 мг в сутки. Обычные таблетки: начинают с 37,5 мг дважды в день, по российской инструкции максимум 375 мг в сутки, высокие дозы в основном в стационаре.",
              "more": true
            },
            {
              "label": "Что важно при приёме",
              "text": "Капсулу глотают целиком, не делят и не разжёвывают; можно высыпать содержимое на ложку яблочного пюре. Отменяют постепенно.",
              "sources": [
                {
                  "title": "Effexor XR (venlafaxine extended-release), инструкция по применению: раздел 2 о дозах и приёме. DailyMed, Viatris.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c848a5d8-ba94-4c84-80e3-0bf35fb8e32e"
                },
                {
                  "title": "Справочник Видаль: Велафакс (венлафаксин), таблетки, раздел «Режим дозирования».",
                  "url": "https://www.vidal.ru/drugs/velafax__8875"
                }
              ],
              "more": true
            },
            {
              "label": "Чем хорош",
              "text": "Среди эффективных в прямых сравнениях",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Сексуальные нарушения; хуже переносится; может повышать давление; токсичнее СИОЗС; частые и тяжёлые симптомы отмены",
              "sources": [
                {
                  "title": "Serretti A., Chiesa A. Treatment-emergent sexual dysfunction related to antidepressants: a meta-analysis. Journal of Clinical Psychopharmacology, 2009.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/19440080/"
                },
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                },
                {
                  "title": "Effexor XR (venlafaxine extended-release), инструкция по применению: раздел 2 о дозах и приёме. DailyMed, Viatris.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c848a5d8-ba94-4c84-80e3-0bf35fb8e32e"
                },
                {
                  "title": "Hawton K. et al. Toxicity of antidepressants: rates of suicide relative to prescribing and non-fatal overdose. British Journal of Psychiatry, 2010.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/20435959/"
                },
                {
                  "title": "Henssler J. et al. Incidence of antidepressant discontinuation symptoms: a systematic review and meta-analysis. Lancet Psychiatry, 2024.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/38851198/"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/velafax__8875",
            "text": "Полная инструкция: vidal.ru"
          }
        },
        {
          "id": "duloxetine",
          "label": "Дулоксетин",
          "note": "Симбалта, Дулоксента, Депратал",
          "facts": [
            {
              "label": "Что это",
              "text": "Класс: Серотонин и норадреналин (СИОЗСН). Как действует класс, в его карточке."
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия, генерализованное тревожное расстройство (постоянная тревога по многим поводам), боль при диабетической нейропатии (повреждении нервов при диабете), хроническая боль в мышцах и суставах.",
              "sources": [
                {
                  "title": "Справочник Видаль: Депратал (дулоксетин), разделы «Режим дозирования» и «Противопоказания».",
                  "url": "https://www.vidal.ru/drugs/depratal"
                }
              ]
            },
            {
              "label": "Когда выбирают",
              "text": "Когда вместе с депрессией есть диабетическая нейропатия, болезненное поражение нервов при диабете.",
              "sources": [
                {
                  "title": "Lunn M.P., Hughes R.A., Wiffen P.J. Duloxetine for treating painful neuropathy, chronic pain or fibromyalgia. Cochrane Database of Systematic Reviews, 2014.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/24385423/"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Обычно один раз в день, можно и в два приёма; независимо от еды. Время суток инструкция не задаёт."
            },
            {
              "label": "Противопоказания",
              "text": "Одновременно с ИМАО и в течение 14 дней после них; вместе с флувоксамином или ципрофлоксацином; болезни печени с печёночной недостаточностью; и другие, см. «Подробнее»."
            },
            {
              "label": "Показания в других странах",
              "text": "В США к этому добавлена фибромиалгия (хроническая распространённая боль), а тревожное расстройство разрешено и детям с 7 лет.",
              "sources": [
                {
                  "title": "Duloxetine delayed-release capsules, инструкция по применению: раздел 2 о дозах и приёме. DailyMed, Lupin, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=829a4f51-c882-4b64-81f3-abfb03a52ebe"
                }
              ],
              "more": true
            },
            {
              "label": "Доза по инструкции",
              "text": "Начинают с дозы от 40 до 60 мг в сутки; максимум 120 мг, но выше 60 мг пользы не показано.",
              "more": true
            },
            {
              "label": "Что важно при приёме",
              "text": "Капсулу или таблетку глотают целиком: не открывают, не делят и не высыпают на еду, иначе разрушается защитная оболочка. Отменяют постепенно. Нельзя при болезнях печени с печёночной недостаточностью, тяжёлой почечной недостаточности, неконтролируемом давлении, закрытоугольной глаукоме, вместе с ИМАО и с флувоксамином или ципрофлоксацином.",
              "sources": [
                {
                  "title": "Duloxetine delayed-release capsules, инструкция по применению: раздел 2 о дозах и приёме. DailyMed, Lupin, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=829a4f51-c882-4b64-81f3-abfb03a52ebe"
                },
                {
                  "title": "Справочник Видаль: Депратал (дулоксетин), разделы «Режим дозирования» и «Противопоказания».",
                  "url": "https://www.vidal.ru/drugs/depratal"
                }
              ],
              "more": true
            },
            {
              "label": "Чем хорош",
              "text": "Диабетическая нейропатия",
              "sources": [
                {
                  "title": "Lunn M.P., Hughes R.A., Wiffen P.J. Duloxetine for treating painful neuropathy, chronic pain or fibromyalgia. Cochrane Database of Systematic Reviews, 2014.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/24385423/"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Хуже переносится в прямых сравнениях; сексуальные нарушения",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                },
                {
                  "title": "Serretti A., Chiesa A. Treatment-emergent sexual dysfunction related to antidepressants: a meta-analysis. Journal of Clinical Psychopharmacology, 2009.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/19440080/"
                }
              ],
              "more": true
            },
            {
              "label": "Остальные противопоказания",
              "text": "тяжёлая почечная недостаточность; неконтролируемое высокое давление; некомпенсированная закрытоугольная глаукома.",
              "sources": [
                {
                  "title": "Справочник Видаль: Депратал (дулоксетин), разделы «Режим дозирования» и «Противопоказания».",
                  "url": "https://www.vidal.ru/drugs/depratal"
                },
                {
                  "title": "Duloxetine delayed-release capsules, инструкция по применению: раздел 2 о дозах и приёме. DailyMed, Lupin, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=829a4f51-c882-4b64-81f3-abfb03a52ebe"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/depratal",
            "text": "Полная инструкция: vidal.ru"
          }
        },
        {
          "id": "desvenlafaxine",
          "label": "Дезвенлафаксин",
          "note": "Пристик; в России не зарегистрирован",
          "facts": [
            {
              "label": "Что это",
              "text": "Класс: Серотонин и норадреналин (СИОЗСН). Как действует класс, в его карточке."
            },
            {
              "label": "Показания по инструкции",
              "text": "В России не зарегистрирован. В США (Pristiq): большое депрессивное расстройство у взрослых.",
              "sources": [
                {
                  "title": "Pristiq (desvenlafaxine) таблетки с замедленным высвобождением, инструкция по применению: разделы 2.1 и 2.5 о дозах, приёме и отмене. DailyMed, Wyeth (Pfizer), 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0f43610c-f290-46ea-d186-4f998ed99fce"
                },
                {
                  "title": "Справочник Видаль: поиск «дезвенлафаксин», октябрь 2026: зарегистрированных препаратов не найдено.",
                  "url": "https://www.vidal.ru/search?t=all&q=%D0%B4%D0%B5%D0%B7%D0%B2%D0%B5%D0%BD%D0%BB%D0%B0%D1%84%D0%B0%D0%BA%D1%81%D0%B8%D0%BD"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Один раз в день, примерно в одно и то же время, независимо от еды. Таблетку глотают целиком, запивая, не делят, не разжёвывают и не растворяют."
            },
            {
              "label": "Противопоказания",
              "text": "Одновременно с ИМАО, в течение 14 дней после их отмены и 7 дней до их начала; начинать при лечении линезолидом или метиленовым синим внутривенно.",
              "sources": [
                {
                  "title": "Pristiq (desvenlafaxine) таблетки с замедленным высвобождением, инструкция по применению: разделы 2.1 и 2.5 о дозах, приёме и отмене. DailyMed, Wyeth (Pfizer), 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0f43610c-f290-46ea-d186-4f998ed99fce"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "50 мг в сутки: это и начальная, и лечебная доза. В исследованиях давали от 50 до 400 мг, но выше 50 мг пользы не прибавлялось, а побочных эффектов становилось больше. Отдельной предельной дозы для взрослых без болезней почек и печени инструкция не называет.",
              "more": true
            },
            {
              "label": "Что важно при приёме",
              "text": "Отменяют постепенно. В стуле можно заметить пустую оболочку таблетки: лекарство из неё к этому моменту уже всосалось.",
              "sources": [
                {
                  "title": "Pristiq (desvenlafaxine) таблетки с замедленным высвобождением, инструкция по применению: разделы 2.1 и 2.5 о дозах, приёме и отмене. DailyMed, Wyeth (Pfizer), 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0f43610c-f290-46ea-d186-4f998ed99fce"
                }
              ],
              "more": true
            },
            {
              "label": "В России",
              "text": "Зарегистрированных препаратов в справочнике Видаль нет.",
              "sources": [
                {
                  "title": "Справочник Видаль: поиск «дезвенлафаксин», октябрь 2026: зарегистрированных препаратов не найдено.",
                  "url": "https://www.vidal.ru/search?t=all&q=%D0%B4%D0%B5%D0%B7%D0%B2%D0%B5%D0%BD%D0%BB%D0%B0%D1%84%D0%B0%D0%BA%D1%81%D0%B8%D0%BD"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Среди тех, кто чаще всего даёт симптомы отмены, и вместе с венлафаксином среди самых тяжёлых по отмене.",
              "sources": [
                {
                  "title": "Henssler J. et al. Incidence of antidepressant discontinuation symptoms: a systematic review and meta-analysis. Lancet Psychiatry, 2024.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/38851198/"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0f43610c-f290-46ea-d186-4f998ed99fce",
            "text": "Полная инструкция: dailymed.nlm.nih.gov"
          }
        },
        {
          "id": "milnacipran",
          "label": "Милнаципран",
          "note": "Иксел; в России сейчас не зарегистрирован (регистрация отменена)",
          "facts": [
            {
              "label": "Что это",
              "text": "Антидепрессант из группы СИОЗСН (ингибиторов обратного захвата серотонина и норадреналина), как венлафаксин и дулоксетин.",
              "sources": [
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Депрессивный эпизод, рекуррентное депрессивное расстройство», редакция 2021 года (ID 301_2 в рубрикаторе Минздрава, в архиве с 26.08.2024), PDF разработчика.",
                  "url": "https://psychiatr.ru/download/6271?view=1"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "По последней российской инструкции Иксела: большой депрессивный эпизод у взрослых.",
              "sources": [
                {
                  "title": "Справочник Видаль: Иксел (милнаципран), капсулы 25 и 50 мг, инструкция; РУ П N011787/01, отмена государственной регистрации.",
                  "url": "https://www.vidal.ru/drugs/ixel__1316"
                }
              ]
            },
            {
              "label": "Когда выбирают",
              "text": "РОП при тяжёлой депрессии без психоза советует начинать с СИОЗСН (среди них милнаципран) или миртазапина, а трициклические оставлять на потом: их хуже переносят. CANMAT 2023 относит милнаципран к первой линии с уровнем доказательности 1, хотя в Канаде его нет.",
              "sources": [
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Депрессивный эпизод, рекуррентное депрессивное расстройство», редакция 2021 года (ID 301_2 в рубрикаторе Минздрава, в архиве с 26.08.2024), PDF разработчика.",
                  "url": "https://psychiatr.ru/download/6271?view=1"
                },
                {
                  "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Внутрь во время еды, утром и вечером. Действие обычно начинается через срок от 1 до 3 недель, лечение продолжают около 6 месяцев, отменяют постепенно.",
              "sources": [
                {
                  "title": "Справочник Видаль: Иксел (милнаципран), капсулы 25 и 50 мг, инструкция; РУ П N011787/01, отмена государственной регистрации.",
                  "url": "https://www.vidal.ru/drugs/ixel__1316"
                }
              ]
            },
            {
              "label": "Противопоказания",
              "text": "Неконтролируемое высокое давление; тяжёлая или нестабильная ишемическая болезнь сердца; одновременно с необратимыми ингибиторами МАО; беременность и кормление грудью; возраст до 18 лет.",
              "sources": [
                {
                  "title": "Справочник Видаль: Иксел (милнаципран), капсулы 25 и 50 мг, инструкция; РУ П N011787/01, отмена государственной регистрации.",
                  "url": "https://www.vidal.ru/drugs/ixel__1316"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "100 мг в сутки: по 50 мг утром и вечером; безопасность доз выше 100 мг не установлена, при слабой работе почек дозу снижают. В рекомендациях РОП тоже 100 мг, в CANMAT от 50 до 200 мг.",
              "sources": [
                {
                  "title": "Справочник Видаль: Иксел (милнаципран), капсулы 25 и 50 мг, инструкция; РУ П N011787/01, отмена государственной регистрации.",
                  "url": "https://www.vidal.ru/drugs/ixel__1316"
                },
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Депрессивный эпизод, рекуррентное депрессивное расстройство», редакция 2021 года (ID 301_2 в рубрикаторе Минздрава, в архиве с 26.08.2024), PDF разработчика.",
                  "url": "https://psychiatr.ru/download/6271?view=1"
                },
                {
                  "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Может повышать давление и учащать пульс, затруднять мочеиспускание (особенно при аденоме простаты); при резкой отмене возможен синдром отмены, CANMAT оценивает его риск как средний. По РОП побочные эффекты у милнаципрана, в отличие от венлафаксина и дулоксетина, бывают не чаще, чем у СИОЗС.",
              "sources": [
                {
                  "title": "Справочник Видаль: Иксел (милнаципран), капсулы 25 и 50 мг, инструкция; РУ П N011787/01, отмена государственной регистрации.",
                  "url": "https://www.vidal.ru/drugs/ixel__1316"
                },
                {
                  "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                },
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Депрессивный эпизод, рекуррентное депрессивное расстройство», редакция 2021 года (ID 301_2 в рубрикаторе Минздрава, в архиве с 26.08.2024), PDF разработчика.",
                  "url": "https://psychiatr.ru/download/6271?view=1"
                }
              ],
              "more": true
            },
            {
              "label": "В России",
              "text": "Не зарегистрирован: регистрация Иксела (РУ П N011787/01) отменена, других препаратов милнаципрана в справочнике нет. В рекомендациях РОП 2021 года он при этом остался.",
              "sources": [
                {
                  "title": "Справочник Видаль: Иксел (милнаципран), капсулы 25 и 50 мг, инструкция; РУ П N011787/01, отмена государственной регистрации.",
                  "url": "https://www.vidal.ru/drugs/ixel__1316"
                },
                {
                  "title": "Справочник Видаль: препараты с действующим веществом милнаципран (в списке только Иксел), октябрь 2026.",
                  "url": "https://www.vidal.ru/drugs/molecule-in/1235"
                },
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Депрессивный эпизод, рекуррентное депрессивное расстройство», редакция 2021 года (ID 301_2 в рубрикаторе Минздрава, в архиве с 26.08.2024), PDF разработчика.",
                  "url": "https://psychiatr.ru/download/6271?view=1"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/ixel__1316",
            "text": "Полная инструкция: vidal.ru"
          }
        }
      ]
    },
    {
      "id": "other",
      "label": "Атипичные (свой механизм)",
      "title": "Атипичные антидепрессанты: у каждого свой механизм",
      "hint": "Не похожи ни на СИОЗС, ни на старые классы: каждый действует по-своему, через рецепторы или другие медиаторы.",
      "facts": [
        {
          "label": "Что это",
          "text": "Каждый устроен по-своему: действуют на рецепторы, на насосы других медиаторов или на насос серотонина вместе с рецепторами. Бупропион работает с норадреналином и дофамином, миртазапин блокирует тормозящие рецепторы и гистаминовые.",
          "sources": [
            {
              "title": "Huecker M.R., Smiley A. et al. Bupropion. StatPearls, 2024.",
              "url": "https://www.ncbi.nlm.nih.gov/books/NBK470212/"
            },
            {
              "title": "Jilani T.N., Gibbons J.R. et al. Mirtazapine. StatPearls, 2024.",
              "url": "https://www.ncbi.nlm.nih.gov/books/NBK519059/"
            }
          ]
        }
      ],
      "children": [
        {
          "id": "mirtazapine",
          "label": "Миртазапин",
          "note": "Каликста, Мирзатен Ку-таб, Миртазапин Канон",
          "facts": [
            {
              "label": "Что это",
              "text": "Блокирует рецепторы, которые тормозят выброс норадреналина и серотонина, и заодно сильно блокирует гистаминовые рецепторы, отсюда сонливость и аппетит.",
              "sources": [
                {
                  "title": "Jilani T.N., Gibbons J.R. et al. Mirtazapine. StatPearls, 2024.",
                  "url": "https://www.ncbi.nlm.nih.gov/books/NBK519059/"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия, в том числе с потерей удовольствия от жизни, заторможенностью, бессонницей, ранним пробуждением, снижением веса, мыслями о самоубийстве.",
              "sources": [
                {
                  "title": "Справочник Видаль: Миртазонал (миртазапин), инструкция, раздел «Показания препарата».",
                  "url": "https://www.vidal.ru/drugs/mirtazonal__21725"
                }
              ]
            },
            {
              "label": "Когда выбирают",
              "text": "Когда мешают бессонница и плохой аппетит: сонливость и аппетит у него прямое следствие механизма. Ещё когда важна сексуальная функция.",
              "sources": [
                {
                  "title": "Jilani T.N., Gibbons J.R. et al. Mirtazapine. StatPearls, 2024.",
                  "url": "https://www.ncbi.nlm.nih.gov/books/NBK519059/"
                },
                {
                  "title": "Serretti A., Chiesa A. Treatment-emergent sexual dysfunction related to antidepressants: a meta-analysis. Journal of Clinical Psychopharmacology, 2009.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/19440080/"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Один раз в день, лучше вечером перед сном. Еда почти не влияет на всасывание."
            },
            {
              "label": "Противопоказания",
              "text": "Возраст до 18 лет; беременность и кормление грудью.",
              "sources": [
                {
                  "title": "Справочник Видаль: Миртазонал (миртазапин), инструкция, раздел «Показания препарата».",
                  "url": "https://www.vidal.ru/drugs/mirtazonal__21725"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "Начинают с 15 мг, максимум 45 мг в сутки.",
              "more": true
            },
            {
              "label": "Когда оценивают эффект",
              "text": "Дозу меняют не чаще чем раз в одну-две недели, чтобы успеть оценить ответ.",
              "more": true
            },
            {
              "label": "Что важно при приёме",
              "text": "Перед сном удобно из-за сонливости. Отменяют постепенно.",
              "sources": [
                {
                  "title": "Remeron и RemeronSolTab (mirtazapine), инструкция по применению: раздел 2 о дозах и приёме. DailyMed, Organon.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=98ad1917-a094-44f5-a28f-a64a8cfcd887"
                }
              ],
              "more": true
            },
            {
              "label": "Чем хорош",
              "text": "Среди эффективных; по сексуальной функции значимо не отличался от плацебо",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                },
                {
                  "title": "Serretti A., Chiesa A. Treatment-emergent sexual dysfunction related to antidepressants: a meta-analysis. Journal of Clinical Psychopharmacology, 2009.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/19440080/"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Сонливость; аппетит и прибавка веса, сильнее других антидепрессантов у Гафура; токсичнее СИОЗС при передозировке",
              "sources": [
                {
                  "title": "Gafoor R., Booth H.P., Gulliford M.C. Antidepressant utilisation and incidence of weight gain during 10 years’ follow-up: population based cohort study. BMJ, 2018.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5964332/"
                },
                {
                  "title": "Hawton K. et al. Toxicity of antidepressants: rates of suicide relative to prescribing and non-fatal overdose. British Journal of Psychiatry, 2010.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/20435959/"
                }
              ],
              "more": true
            },
            {
              "label": "Редко",
              "text": "Бывает агранулоцитоз, падение белых клеток крови: при температуре, боли в горле или язвочках во рту сразу к врачу.",
              "sources": [
                {
                  "title": "Remeron и RemeronSolTab (mirtazapine), инструкция по применению: раздел 2 о дозах и приёме. DailyMed, Organon.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=98ad1917-a094-44f5-a28f-a64a8cfcd887"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/mirtazonal__21725",
            "text": "Полная инструкция: vidal.ru"
          }
        },
        {
          "id": "mianserin",
          "label": "Миансерин",
          "note": "Леривон",
          "facts": [
            {
              "label": "Что это",
              "text": "По механизму родственник миртазапина и тоже вызывает сонливость."
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия.",
              "sources": [
                {
                  "title": "Справочник Видаль: Леривон (миансерин), инструкция.",
                  "url": "https://www.vidal.ru/drugs/lerivon__5330"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Лучше один раз на ночь, потому что он помогает спать; можно разделить на несколько приёмов. Таблетку глотают целиком, при необходимости запивая водой. Про еду инструкция не говорит."
            },
            {
              "label": "Противопоказания",
              "text": "Мания; тяжёлые болезни печени; возраст до 18 лет.",
              "sources": [
                {
                  "title": "Справочник Видаль: Леривон (миансерин), инструкция.",
                  "url": "https://www.vidal.ru/drugs/lerivon__5330"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "Начинают с 30 мг в сутки и повышают каждые несколько дней. Обычная действующая доза от 60 до 90 мг в сутки. Максимальную дозу инструкция не называет.",
              "more": true
            },
            {
              "label": "Когда оценивают эффект",
              "text": "Ответ ожидают через 2 или 4 недели; если после повышения дозы ещё через 2 или 4 недели ответа нет, препарат отменяют.",
              "more": true
            },
            {
              "label": "Что важно при приёме",
              "text": "Может угнетать кроветворение, чаще через 4 или 6 недель лечения. При температуре, боли в горле, язвочках во рту или других признаках инфекции препарат прекращают и сдают развёрнутый анализ крови. Алкоголь во время лечения нежелателен.",
              "sources": [
                {
                  "title": "Справочник Видаль: Леривон (миансерин), инструкция.",
                  "url": "https://www.vidal.ru/drugs/lerivon__5330"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Редкое, но опасное падение белых клеток крови, агранулоцитоз, чаще на четвёртой-шестой неделе и у пожилых. При температуре, боли в горле или язвочках во рту препарат прекращают и делают анализ крови, сразу скажите врачу.",
              "sources": [
                {
                  "title": "Справочник Видаль: Леривон (миансерин), инструкция.",
                  "url": "https://www.vidal.ru/drugs/lerivon__5330"
                }
              ],
              "more": true
            },
            {
              "label": "Где встречается",
              "text": "В основном в России и соседних странах. В большом сравнении 21 антидепрессанта его нет, доказательств меньше.",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/lerivon__5330",
            "text": "Полная инструкция: vidal.ru"
          }
        },
        {
          "id": "agomelatine",
          "label": "Агомелатин",
          "note": "Вальдоксан, Агомелатин Канон и другие",
          "facts": [
            {
              "label": "Что это",
              "text": "Стимулирует рецепторы мелатонина и блокирует один из серотониновых рецепторов.",
              "sources": [
                {
                  "title": "de Bodinat C. et al. Agomelatine, the first melatonergic antidepressant: discovery, characterization and development. Nature Reviews Drug Discovery, 2010.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/20577266/"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "Большое депрессивное расстройство у взрослых.",
              "sources": [
                {
                  "title": "Справочник Видаль: Вальдоксан (агомелатин), раздел «Показания» (ЛП-№(000528)-(РГ-RU) от 25.01.22).",
                  "url": "https://www.vidal.ru/drugs/valdoxan__29817"
                }
              ]
            },
            {
              "label": "Когда выбирают",
              "text": "Когда важна сексуальная функция, при условии, что печень в порядке и анализы делают по графику.",
              "sources": [
                {
                  "title": "Serretti A., Chiesa A. Treatment-emergent sexual dysfunction related to antidepressants: a meta-analysis. Journal of Clinical Psychopharmacology, 2009.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/19440080/"
                },
                {
                  "title": "Valdoxan (agomelatine): EPAR, сведения о препарате. Европейское агентство лекарственных средств (EMA).",
                  "url": "https://www.ema.europa.eu/en/medicines/human/EPAR/valdoxan"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Один раз в день перед сном, независимо от еды."
            },
            {
              "label": "Противопоказания",
              "text": "Печёночная недостаточность, цирроз и активные болезни печени; вместе с флувоксамином, ципрофлоксацином и другими сильными ингибиторами фермента CYP1A2; возраст до 18 лет.",
              "sources": [
                {
                  "title": "Справочник Видаль: Вальдоксан (агомелатин), раздел «Показания» (ЛП-№(000528)-(РГ-RU) от 25.01.22).",
                  "url": "https://www.vidal.ru/drugs/valdoxan__29817"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "Начинают с 25 мг; если через 2 недели нет улучшения, можно 50 мг (две таблетки сразу перед сном).",
              "more": true
            },
            {
              "label": "Когда оценивают эффект",
              "text": "Через 2 недели решают, повышать ли дозу.",
              "more": true
            },
            {
              "label": "Что важно при приёме",
              "text": "Нужны анализы печени до начала и примерно через 3, 6, 12 и 24 недели, а также после повышения дозы. При болезнях печени и с 75 лет не применяют. Постепенная отмена не нужна.",
              "sources": [
                {
                  "title": "Valdoxan (agomelatine), общая характеристика лекарственного препарата (SmPC), раздел 4.2 о дозах и анализах печени. Европейское агентство лекарственных средств (EMA).",
                  "url": "https://www.ema.europa.eu/en/documents/product-information/valdoxan-epar-product-information_en.pdf"
                }
              ],
              "more": true
            },
            {
              "label": "Чем хорош",
              "text": "Один из двух препаратов, которые у Чиприани бросали реже, чем плацебо; по сексуальной функции значимо не отличался от плацебо",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                },
                {
                  "title": "Serretti A., Chiesa A. Treatment-emergent sexual dysfunction related to antidepressants: a meta-analysis. Journal of Clinical Psychopharmacology, 2009.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/19440080/"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Нужны анализы печени до начала, при повышении дозы и примерно через 3, 6, 12 и 24 недели; нельзя при болезнях печени и с сильными ингибиторами фермента CYP1A2, например флувоксамином и ципрофлоксацином",
              "sources": [
                {
                  "title": "Valdoxan (agomelatine): EPAR, сведения о препарате. Европейское агентство лекарственных средств (EMA).",
                  "url": "https://www.ema.europa.eu/en/medicines/human/EPAR/valdoxan"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/valdoxan__29817",
            "text": "Полная инструкция: vidal.ru"
          }
        },
        {
          "id": "vortioxetine",
          "label": "Вортиоксетин",
          "note": "Бринтелликс",
          "facts": [
            {
              "label": "Что это",
              "text": "Сочетает блокаду обратного захвата серотонина с действием на несколько его рецепторов.",
              "sources": [
                {
                  "title": "Sanchez C., Asin K.E. et al. Vortioxetine, a novel antidepressant with multimodal activity: review of preclinical and clinical data. Pharmacology & Therapeutics, 2015.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/25016186/"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "Большие депрессивные эпизоды у взрослых.",
              "sources": [
                {
                  "title": "Справочник Видаль: Бринтелликс (вортиоксетин), разделы «Режим дозирования» и «Противопоказания».",
                  "url": "https://www.vidal.ru/drugs/brintellix"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Один раз в день, независимо от еды. Время суток инструкция не задаёт."
            },
            {
              "label": "Противопоказания",
              "text": "Одновременно с ИМАО (в том числе моклобемидом и линезолидом); возраст до 18 лет.",
              "sources": [
                {
                  "title": "Справочник Видаль: Бринтелликс (вортиоксетин), разделы «Режим дозирования» и «Противопоказания».",
                  "url": "https://www.vidal.ru/drugs/brintellix"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "Начинают с 10 мг, затем повышают до 20 мг по переносимости; при плохой переносимости 5 мг. По российской инструкции от 5 до 20 мг один раз в день; с 65 лет обычно начинают с 5 мг.",
              "more": true
            },
            {
              "label": "Что важно при приёме",
              "text": "Можно прекратить сразу, но с доз от 15 до 20 мг лучше неделю принимать 10 мг. После отмены до ИМАО нужно 21 день.",
              "sources": [
                {
                  "title": "Trintellix (vortioxetine), инструкция по применению: раздел 2 о дозах и приёме. DailyMed, Takeda.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1a5b68e2-14d0-419d-9ec6-1ca97145e838"
                },
                {
                  "title": "Справочник Видаль: Бринтелликс (вортиоксетин), разделы «Режим дозирования» и «Противопоказания».",
                  "url": "https://www.vidal.ru/drugs/brintellix"
                }
              ],
              "more": true
            },
            {
              "label": "Чем хорош",
              "text": "Среди эффективных и лучше переносимых",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/brintellix",
            "text": "Полная инструкция: vidal.ru"
          }
        },
        {
          "id": "trazodone",
          "label": "Тразодон",
          "note": "Триттико",
          "facts": [
            {
              "label": "Что это",
              "text": "Мешает обратному захвату серотонина, блокирует один из типов серотониновых рецепторов, а также гистаминовые и адренергические; в малых дозах работает в основном как снотворное, в больших как антидепрессант.",
              "sources": [
                {
                  "title": "Shin J.J., Saadabadi A. Trazodone. StatPearls, 2024.",
                  "url": "https://www.ncbi.nlm.nih.gov/books/NBK470560/"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия разных видов, в том числе с выраженной тревогой; булимия, клептомания, тревожность, фобии; зависимость от бензодиазепинов, острый алкогольный абстинентный синдром (состояние отмены); снижение либидо, импотенция; профилактика приступов мигрени.",
              "sources": [
                {
                  "title": "Справочник Видаль: тразодон (Триттико), разделы «Режим дозирования» и «Противопоказания».",
                  "url": "https://www.vidal.ru/drugs/trittico__45130"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Несколько приёмов в день, вскоре после еды или лёгкого перекуса. При сонливости большую часть дозы переносят на вечер перед сном."
            },
            {
              "label": "Противопоказания",
              "text": "Желудочковая аритмия и тахикардия; ранний период после инфаркта миокарда; приапизм (длительная болезненная эрекция) в прошлом; беременность и кормление грудью; одновременно с ИМАО и в течение 14 дней после них.",
              "sources": [
                {
                  "title": "Справочник Видаль: тразодон (Триттико), разделы «Режим дозирования» и «Противопоказания».",
                  "url": "https://www.vidal.ru/drugs/trittico__45130"
                },
                {
                  "title": "Trazodone hydrochloride tablets, инструкция по применению: раздел 2 о дозах и приёме. DailyMed, Teva, 2025.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4006d439-e2de-4590-82e9-fc9d56e3ec1b"
                }
              ]
            },
            {
              "label": "Показания в других странах",
              "text": "В США только большое депрессивное расстройство у взрослых.",
              "sources": [
                {
                  "title": "Trazodone hydrochloride tablets, инструкция по применению: раздел 2 о дозах и приёме. DailyMed, Teva, 2025.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4006d439-e2de-4590-82e9-fc9d56e3ec1b"
                }
              ],
              "more": true
            },
            {
              "label": "Доза по инструкции",
              "text": "Начинают со 150 мг в сутки в несколько приёмов, амбулаторно максимум 400 мг (в стационаре до 600 мг).",
              "more": true
            },
            {
              "label": "Что важно при приёме",
              "text": "Таблетку глотают целиком или половинкой по риске, не разжёвывают. Отменяют постепенно. В России продаётся Триттико, таблетки с пролонгированным высвобождением: начинают со 150 мг, основную часть дозы принимают перед сном, по российской инструкции максимум 600 мг; противопоказан при желудочковой аритмии, раннем восстановлении после инфаркта и приапизме в прошлом.",
              "sources": [
                {
                  "title": "Trazodone hydrochloride tablets, инструкция по применению: раздел 2 о дозах и приёме. DailyMed, Teva, 2025.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4006d439-e2de-4590-82e9-fc9d56e3ec1b"
                },
                {
                  "title": "Справочник Видаль: тразодон (Триттико), разделы «Режим дозирования» и «Противопоказания».",
                  "url": "https://www.vidal.ru/drugs/trittico__45130"
                }
              ],
              "more": true
            },
            {
              "label": "Чем хорош",
              "text": "В малых дозах как снотворное",
              "sources": [
                {
                  "title": "Shin J.J., Saadabadi A. Trazodone. StatPearls, 2024.",
                  "url": "https://www.ncbi.nlm.nih.gov/books/NBK470560/"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Слабее и хуже переносится в прямых сравнениях; редко приапизм, болезненная затянувшаяся эрекция, это повод для срочной помощи",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                },
                {
                  "title": "Trazodone hydrochloride tablets, инструкция по применению: раздел 2 о дозах и приёме. DailyMed, Teva, 2025.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4006d439-e2de-4590-82e9-fc9d56e3ec1b"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/trittico__45130",
            "text": "Полная инструкция: vidal.ru"
          }
        },
        {
          "id": "bupropion",
          "label": "Бупропион",
          "note": "Веллбутрин, в России нет действующей регистрации",
          "facts": [
            {
              "label": "Что это",
              "text": "Действует на норадреналин и дофамин, а серотонин почти не трогает.",
              "sources": [
                {
                  "title": "Huecker M.R., Smiley A. et al. Bupropion. StatPearls, 2024.",
                  "url": "https://www.ncbi.nlm.nih.gov/books/NBK470212/"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "В России не зарегистрирован (регистрация Веллбутрина отменена). В США (Wellbutrin XL): большое депрессивное расстройство и профилактика сезонного аффективного расстройства (зимней депрессии).",
              "sources": [
                {
                  "title": "Wellbutrin XL (bupropion extended-release), инструкция по применению, раздел 1 «Indications and Usage». DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a435da9d-f6e8-4ddc-897d-8cd2bf777b21"
                }
              ]
            },
            {
              "label": "Когда выбирают",
              "text": "Когда важна сексуальная функция или человек хочет бросить курить. В России нет действующей регистрации.",
              "sources": [
                {
                  "title": "Serretti A., Chiesa A. Treatment-emergent sexual dysfunction related to antidepressants: a meta-analysis. Journal of Clinical Psychopharmacology, 2009.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/19440080/"
                },
                {
                  "title": "Howes S. et al. Antidepressants for smoking cessation. Cochrane Database of Systematic Reviews, 2020.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/32319681/"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Форма SR: первая доза 150 мг утром, потом два раза в день с промежутком не меньше 8 часов. Форма XL: один раз утром. Обе независимо от еды."
            },
            {
              "label": "Противопоказания",
              "text": "Эпилепсия и другие судорожные расстройства; булимия или анорексия сейчас или в прошлом; резкая отмена алкоголя, бензодиазепинов, барбитуратов или противоэпилептических лекарств; и другие, см. «Подробнее»."
            },
            {
              "label": "Доза по инструкции",
              "text": "SR: начинают со 150 мг, обычно 300 мг (по 150 мг дважды), максимум 400 мг в сутки. XL: 150 мг, через 4 дня можно 300 мг, максимум 450 мг в сутки.",
              "more": true
            },
            {
              "label": "Когда оценивают эффект",
              "text": "Максимум (400 мг SR) рассматривают, если после нескольких недель на 300 мг нет улучшения.",
              "more": true
            },
            {
              "label": "Что важно при приёме",
              "text": "При бессоннице не принимать слишком близко ко сну. Дозу повышают постепенно из-за риска судорог; за один приём не больше 200 мг (SR). Таблетки не делят и не разжёвывают.",
              "sources": [
                {
                  "title": "Wellbutrin SR (bupropion hydrochloride), инструкция по применению. GlaxoSmithKline, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cbc8c074-f080-4489-a5ae-207b5fadeba3"
                },
                {
                  "title": "Wellbutrin XL (bupropion extended-release), инструкция по применению: раздел 2 о дозах и приёме. DailyMed, Bausch Health.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a435da9d-f6e8-4ddc-897d-8cd2bf777b21"
                }
              ],
              "more": true
            },
            {
              "label": "Чем хорош",
              "text": "Отказ от курения; по сексуальной функции значимо не отличался от плацебо",
              "sources": [
                {
                  "title": "Howes S. et al. Antidepressants for smoking cessation. Cochrane Database of Systematic Reviews, 2020.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/32319681/"
                },
                {
                  "title": "Serretti A., Chiesa A. Treatment-emergent sexual dysfunction related to antidepressants: a meta-analysis. Journal of Clinical Psychopharmacology, 2009.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/19440080/"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "В России официально недоступен; противопоказан при эпилепсии, при булимии и анорексии, в том числе в прошлом, при резкой отмене алкоголя, бензодиазепинов, барбитуратов и противоэпилептических препаратов; нельзя вместе с ИМАО и в течение 14 дней после них",
              "sources": [
                {
                  "title": "Wellbutrin SR (bupropion hydrochloride), инструкция по применению. GlaxoSmithKline, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cbc8c074-f080-4489-a5ae-207b5fadeba3"
                }
              ],
              "more": true
            },
            {
              "label": "Остальные противопоказания",
              "text": "одновременно с ИМАО и в течение 14 дней после них; нельзя начинать во время лечения линезолидом.",
              "sources": [
                {
                  "title": "Wellbutrin XL (bupropion extended-release), инструкция по применению, раздел 1 «Indications and Usage». DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a435da9d-f6e8-4ddc-897d-8cd2bf777b21"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a435da9d-f6e8-4ddc-897d-8cd2bf777b21",
            "text": "Полная инструкция: dailymed.nlm.nih.gov"
          }
        },
        {
          "id": "reboxetine",
          "label": "Ребоксетин",
          "note": "Эдронакс; в России регистрация отменена",
          "facts": [
            {
              "label": "Что это",
              "text": "Избирательно блокирует обратный захват норадреналина, на серотонин почти не действует.",
              "sources": [
                {
                  "title": "Справочник Видаль: Эдронакс (ребоксетин), механизм действия и сведения о регистрации (отмена государственной регистрации).",
                  "url": "https://www.vidal.ru/drugs/edronax__5809"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "В России регистрация отменена. В Великобритании (Edronax): острая фаза депрессии и поддержание улучшения у тех, кто ответил на лечение.",
              "sources": [
                {
                  "title": "Edronax (reboxetine) 4 мг, общая характеристика лекарственного препарата (SmPC), разделы 4.2 и 4.4. electronic medicines compendium (Великобритания), Pfizer, редакция апреля 2025 года.",
                  "url": "https://www.medicines.org.uk/emc/product/1578/smpc"
                },
                {
                  "title": "Справочник Видаль: Эдронакс (ребоксетин), механизм действия и сведения о регистрации (отмена государственной регистрации).",
                  "url": "https://www.vidal.ru/drugs/edronax__5809"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Два раза в день, внутрь. Как принимать относительно еды, инструкция не указывает; сказано лишь, что еда замедляет всасывание, но не уменьшает его."
            },
            {
              "label": "Противопоказания",
              "text": "Кроме аллергии на компоненты, инструкция противопоказаний не называет; детям и подросткам до 18 лет препарат не применяют.",
              "sources": [
                {
                  "title": "Edronax (reboxetine) 4 мг, общая характеристика лекарственного препарата (SmPC), разделы 4.2 и 4.4. electronic medicines compendium (Великобритания), Pfizer, редакция апреля 2025 года.",
                  "url": "https://www.medicines.org.uk/emc/product/1578/smpc"
                },
                {
                  "title": "Справочник Видаль: Эдронакс (ребоксетин), механизм действия и сведения о регистрации (отмена государственной регистрации).",
                  "url": "https://www.vidal.ru/drugs/edronax__5809"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "4 мг два раза в день, то есть 8 мг в сутки, сразу с начала лечения. Если ответ неполный, через 3 или 4 недели можно поднять до 10 мг. Максимум 12 мг в сутки.",
              "more": true
            },
            {
              "label": "Когда оценивают эффект",
              "text": "Решение о повышении дозы принимают через 3 или 4 недели, если ответ неполный.",
              "more": true
            },
            {
              "label": "Что важно при приёме",
              "text": "Пожилым не рекомендован: у них нет данных плацебо-контролируемых исследований. Осторожно при задержке мочи, увеличенной простате, глаукоме и болезнях сердца.",
              "sources": [
                {
                  "title": "Edronax (reboxetine) 4 мг, общая характеристика лекарственного препарата (SmPC), разделы 4.2 и 4.4. electronic medicines compendium (Великобритания), Pfizer, редакция апреля 2025 года.",
                  "url": "https://www.medicines.org.uk/emc/product/1578/smpc"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Самый слабый по силе в сравнении 21 антидепрессанта и хуже переносится в прямых сравнениях.",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.medicines.org.uk/emc/product/1578/smpc",
            "text": "Полная инструкция: medicines.org.uk"
          }
        },
        {
          "id": "tianeptine",
          "label": "Тианептин",
          "note": "Коаксил; в Видале на октябрь 2026 года препаратов не найдено",
          "facts": [
            {
              "label": "Что это",
              "text": "Долго считался необычным антидепрессантом, потом выяснилось, что он действует на мю-опиоидные рецепторы, те же, что у опиоидных обезболивающих. FDA предупреждает: при больших дозах отравления, зависимость и опиоидоподобная отмена.",
              "sources": [
                {
                  "title": "FDA. FDA warns consumers not to purchase or use any tianeptine product due to serious risks, обновление 2025.",
                  "url": "https://www.fda.gov/drugs/drug-alerts-and-statements/fda-warns-consumers-not-purchase-or-use-any-tianeptine-product-due-serious-risks"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "В России препаратов нет. Во Франции (Stablon): большие депрессивные эпизоды.",
              "sources": [
                {
                  "title": "Stablon (tianeptine) 12,5 мг, общая характеристика лекарственного препарата (RCP), разделы 4.2, 4.4 и 4.8, условия отпуска. Base de données publique des médicaments (Франция), Servier, редакция ANSM от 09.07.2019.",
                  "url": "https://base-donnees-publique.medicaments.gouv.fr/medicament/65411280/extrait"
                },
                {
                  "title": "Справочник Видаль: поиск по действующему веществу «тианептин», октябрь 2026.",
                  "url": "https://www.vidal.ru/search?t=all&q=тианептин"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "По французской инструкции Stablon: три раза в день, утром, днём и вечером, в начале основных приёмов пищи."
            },
            {
              "label": "Противопоказания",
              "text": "Возраст до 15 лет (от 15 до 18 лет не рекомендуется); других противопоказаний, кроме аллергии на компоненты, инструкция не называет.",
              "sources": [
                {
                  "title": "Stablon (tianeptine) 12,5 мг, общая характеристика лекарственного препарата (RCP), разделы 4.2, 4.4 и 4.8, условия отпуска. Base de données publique des médicaments (Франция), Servier, редакция ANSM от 09.07.2019.",
                  "url": "https://base-donnees-publique.medicaments.gouv.fr/medicament/65411280/extrait"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "12,5 мг три раза в день, то есть 37,5 мг в сутки. Превышать рекомендованную дозу запрещено; при тяжёлом циррозе, тяжёлой почечной недостаточности и у ослабленных пожилых с весом меньше 55 кг не больше 2 таблеток в сутки.",
              "more": true
            },
            {
              "label": "Что важно при приёме",
              "text": "В России препаратов тианептина в справочнике Видаль сейчас нет, поэтому данные взяты из французской инструкции. В ней прямо сказано о злоупотреблении и зависимости, особенно у людей до 50 лет с зависимостью от лекарств или алкоголя в прошлом. Во Франции его выписывают только на защищённом бланке и не больше чем на 28 дней. Отменяют постепенно, за срок от 7 до 14 дней.",
              "sources": [
                {
                  "title": "Stablon (tianeptine) 12,5 мг, общая характеристика лекарственного препарата (RCP), разделы 4.2, 4.4 и 4.8, условия отпуска. Base de données publique des médicaments (Франция), Servier, редакция ANSM от 09.07.2019.",
                  "url": "https://base-donnees-publique.medicaments.gouv.fr/medicament/65411280/extrait"
                },
                {
                  "title": "Справочник Видаль: поиск по действующему веществу «тианептин», октябрь 2026.",
                  "url": "https://www.vidal.ru/search?t=all&q=тианептин"
                }
              ],
              "more": true
            },
            {
              "label": "Насколько помогает",
              "text": "Метаанализ 2002 года: пять испытаний, почти 1350 человек, разницы с СИОЗС не нашли; испытания короткие и старые.",
              "sources": [
                {
                  "title": "Kasper S., Olié J.P. A meta-analysis of randomized controlled trials of tianeptine versus SSRI in the short-term treatment of depression. European Psychiatry, 2002.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/15177089/"
                }
              ],
              "more": true
            },
            {
              "label": "В России",
              "text": "Психотропное вещество: рецепт на 15 дней, особый бланк. В клинических рекомендациях его нет. Прекращать после долгого приёма лучше вместе с врачом.",
              "sources": [
                {
                  "title": "Постановление Правительства РФ от 30.06.1998 № 681 о перечне наркотических средств, психотропных веществ и их прекурсоров, список III.",
                  "url": "https://base.garant.ru/12112176/"
                },
                {
                  "title": "Приказ Минздрава России от 24.11.2021 № 1094н о порядке назначения лекарственных препаратов и оформления рецептов, действует до 01.03.2028.",
                  "url": "https://base.garant.ru/403137145/"
                },
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Депрессивный эпизод, рекуррентное депрессивное расстройство», редакция 2021 года (ID 301_2 в рубрикаторе Минздрава, в архиве с 26.08.2024), PDF разработчика.",
                  "url": "https://psychiatr.ru/download/6271?view=1"
                }
              ],
              "more": true
            },
            {
              "label": "Где встречается",
              "text": "В основном в России и соседних странах. В большом сравнении 21 антидепрессанта его нет, доказательств меньше.",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://base-donnees-publique.medicaments.gouv.fr/medicament/65411280/extrait",
            "text": "Полная инструкция: base-donnees-publique.medicaments.gouv.fr"
          }
        }
      ]
    },
    {
      "id": "tca",
      "label": "Трициклические (ТЦА)",
      "title": "Трициклические и родственные антидепрессанты (ТЦА)",
      "hint": "Старые трициклические: сильные, но много побочных эффектов и опасны при передозировке.",
      "facts": [
        {
          "label": "Что это",
          "text": "Один из двух первых классов. Блокируют насосы серотонина и норадреналина, но вдобавок много посторонних рецепторов: отсюда сухость во рту, запоры, сонливость, падение давления и опасность при передозировке.",
          "sources": [
            {
              "title": "Moraczewski J., Awosika A.O. et al. Tricyclic Antidepressants. StatPearls, 2023.",
              "url": "https://www.ncbi.nlm.nih.gov/books/NBK557791/"
            }
          ]
        },
        {
          "label": "Когда выбирают",
          "text": "Обычно не первым выбором: хуже переносятся и самые токсичные при передозировке.",
          "sources": [
            {
              "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
              "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
            },
            {
              "title": "Hawton K. et al. Toxicity of antidepressants: rates of suicide relative to prescribing and non-fatal overdose. British Journal of Psychiatry, 2010.",
              "url": "https://pubmed.ncbi.nlm.nih.gov/20435959/"
            }
          ]
        }
      ],
      "children": [
        {
          "id": "amitriptyline",
          "label": "Амитриптилин",
          "note": "Продаётся под названием Амитриптилин",
          "facts": [
            {
              "label": "Что это",
              "text": "Класс: Трициклические (ТЦА). Как действует класс, в его карточке."
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия (особенно с тревогой, возбуждением и нарушениями сна), смешанные эмоциональные расстройства, нарушения поведения и внимания, нервная булимия, головная боль напряжения, мигрень, нейропатическая боль (боль от повреждения нервов) и другие хронические боли, ночной энурез (недержание мочи во сне), язвенная болезнь желудка и двенадцатиперстной кишки; в списке есть и шизофренические психозы.",
              "sources": [
                {
                  "title": "Справочник Видаль: Амитриптилин, таблетки 25 мг, раздел «Показания» (ЛП-№(002245)-(РГ-RU) от 26.04.23).",
                  "url": "https://www.vidal.ru/drugs/amitriptyline__3916"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Несколько приёмов в день или вся доза перед сном; повышают в основном вечернюю дозу. Про еду инструкция не говорит."
            },
            {
              "label": "Противопоказания",
              "text": "Одновременно с ИМАО и в течение 14 дней после них; острый и ранний восстановительный период после инфаркта миокарда; тяжёлые нарушения проводимости сердца (блокады); и другие, см. «Подробнее»."
            },
            {
              "label": "Показания в других странах",
              "text": "В США только симптомы депрессии.",
              "sources": [
                {
                  "title": "Amitriptyline hydrochloride, инструкция по применению: противопоказания и предупреждения о сердце и судорогах. DailyMed, Sun Pharmaceutical, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4e520c63-1cf6-40f6-a51c-3f9b0e181342"
                }
              ],
              "more": true
            },
            {
              "label": "Доза по инструкции",
              "text": "Амбулаторно начинают с 75 мг в сутки (или от 50 до 100 мг на ночь), максимум 150 мг; в стационаре до 200, редко 300 мг.",
              "more": true
            },
            {
              "label": "Когда оценивают эффект",
              "text": "Полный эффект может развиться только примерно через 30 дней; успокаивающее действие появляется раньше.",
              "more": true
            },
            {
              "label": "Что важно при приёме",
              "text": "Поддерживающую дозу (обычно от 50 до 100 мг) удобно пить один раз перед сном.",
              "sources": [
                {
                  "title": "Amitriptyline hydrochloride, инструкция по применению: противопоказания и предупреждения о сердце и судорогах. DailyMed, Sun Pharmaceutical, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4e520c63-1cf6-40f6-a51c-3f9b0e181342"
                }
              ],
              "more": true
            },
            {
              "label": "Чем хорош",
              "text": "Наибольшая оценка эффекта против плацебо у Чиприани",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Хуже переносится; трициклические самые токсичные при передозировке",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                },
                {
                  "title": "Hawton K. et al. Toxicity of antidepressants: rates of suicide relative to prescribing and non-fatal overdose. British Journal of Psychiatry, 2010.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/20435959/"
                }
              ],
              "more": true
            },
            {
              "label": "Пожилым",
              "text": "Критерии Бирс советуют избегать: сильное холинолитическое действие, сонливость, падение давления при вставании.",
              "sources": [
                {
                  "title": "2023 American Geriatrics Society Beers Criteria Update Expert Panel. American Geriatrics Society 2023 updated AGS Beers Criteria for potentially inappropriate medication use in older adults. Journal of the American Geriatrics Society, 2023.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12478568/"
                }
              ],
              "more": true
            },
            {
              "label": "Остальные противопоказания",
              "text": "закрытоугольная глаукома; кормление грудью; возраст до 6 лет.",
              "sources": [
                {
                  "title": "Справочник Видаль: Амитриптилин, таблетки 25 мг, раздел «Показания» (ЛП-№(002245)-(РГ-RU) от 26.04.23).",
                  "url": "https://www.vidal.ru/drugs/amitriptyline__3916"
                },
                {
                  "title": "Amitriptyline hydrochloride, инструкция по применению: противопоказания и предупреждения о сердце и судорогах. DailyMed, Sun Pharmaceutical, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4e520c63-1cf6-40f6-a51c-3f9b0e181342"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/amitriptyline__3916",
            "text": "Полная инструкция: vidal.ru"
          }
        },
        {
          "id": "clomipramine",
          "label": "Кломипрамин",
          "note": "Анафранил, Клофранил",
          "facts": [
            {
              "label": "Что это",
              "text": "Класс: Трициклические (ТЦА). Как действует класс, в его карточке."
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия разного происхождения, обсессивно-компульсивные синдромы (навязчивые мысли и действия), фобии, панические приступы, хронический болевой синдром (в том числе мигрень, невропатии), нарколепсия с катаплексией (приступы сна и внезапной мышечной слабости), профилактика мигрени.",
              "sources": [
                {
                  "title": "Справочник Видаль: Анафранил (кломипрамин), таблетки 25 мг, раздел «Режим дозирования».",
                  "url": "https://www.vidal.ru/drugs/anafranil__2055"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "В начале по 25 или 50 мг два-три раза в день (российская инструкция). Американская: пока дозу подбирают, делят на приёмы во время еды; потом всю дозу можно пить один раз перед сном."
            },
            {
              "label": "Противопоказания",
              "text": "Одновременно с ИМАО и в течение 14 дней после них; недавний инфаркт миокарда, блокады и аритмии сердца; закрытоугольная глаукома; и другие, см. «Подробнее»."
            },
            {
              "label": "Показания в других странах",
              "text": "В США (Anafranil) только обсессивно-компульсивное расстройство.",
              "sources": [
                {
                  "title": "Anafranil (clomipramine), инструкция по применению: раздел о судорогах. DailyMed, SpecGx, 2024.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4074b555-7635-41a9-809d-fae3b3610059"
                }
              ],
              "more": true
            },
            {
              "label": "Доза по инструкции",
              "text": "Амбулаторно максимум 250 мг в сутки (российская и американская инструкции). Начальную дозу американская называет 25 мг в сутки.",
              "more": true
            },
            {
              "label": "Когда оценивают эффект",
              "text": "После подбора дозы между её изменениями ждут две-три недели (американская инструкция).",
              "more": true
            },
            {
              "label": "Что важно при приёме",
              "text": "В США кломипрамин одобрен только при ОКР. Приём с едой уменьшает тошноту, приём перед сном уменьшает дневную сонливость.",
              "sources": [
                {
                  "title": "Справочник Видаль: Анафранил (кломипрамин), таблетки 25 мг, раздел «Режим дозирования».",
                  "url": "https://www.vidal.ru/drugs/anafranil__2055"
                },
                {
                  "title": "Anafranil (clomipramine), инструкция по применению: раздел о судорогах. DailyMed, SpecGx, 2024.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4074b555-7635-41a9-809d-fae3b3610059"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Единственный, кого бросали чаще, чем плацебо",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ],
              "more": true
            },
            {
              "label": "Пожилым",
              "text": "Критерии Бирс советуют избегать: сильное холинолитическое действие.",
              "sources": [
                {
                  "title": "2023 American Geriatrics Society Beers Criteria Update Expert Panel. American Geriatrics Society 2023 updated AGS Beers Criteria for potentially inappropriate medication use in older adults. Journal of the American Geriatrics Society, 2023.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12478568/"
                }
              ],
              "more": true
            },
            {
              "label": "Остальные противопоказания",
              "text": "задержка мочи; тяжёлая печёночная недостаточность; первый триместр беременности и кормление грудью.",
              "sources": [
                {
                  "title": "Справочник Видаль: Анафранил (кломипрамин), таблетки 25 мг, раздел «Режим дозирования».",
                  "url": "https://www.vidal.ru/drugs/anafranil__2055"
                },
                {
                  "title": "Anafranil (clomipramine), инструкция по применению: раздел о судорогах. DailyMed, SpecGx, 2024.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4074b555-7635-41a9-809d-fae3b3610059"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/anafranil__2055",
            "text": "Полная инструкция: vidal.ru"
          }
        },
        {
          "id": "imipramine",
          "label": "Имипрамин",
          "note": "Мелипрамин",
          "facts": [
            {
              "label": "Что это",
              "text": "Класс: Трициклические (ТЦА). Как действует класс, в его карточке."
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия с заторможенностью, ночное недержание мочи у детей, хронические боли в составе комплексного лечения.",
              "sources": [
                {
                  "title": "Справочник Видаль: Мелипрамин (имипрамин), раздел «Показания» (ЛП-№(000221)-(РГ-RU) от 12.05.21).",
                  "url": "https://www.vidal.ru/drugs/melipramin"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Суточную дозу делят на несколько приёмов. Время суток и связь с едой инструкция при депрессии не задаёт."
            },
            {
              "label": "Противопоказания",
              "text": "Одновременно с ИМАО; острый период инфаркта миокарда и сердечная недостаточность; болезни печени, почек и кроветворения; и другие, см. «Подробнее»."
            },
            {
              "label": "Показания в других странах",
              "text": "В США: депрессия и ночное недержание мочи у детей с 6 лет.",
              "sources": [
                {
                  "title": "Imipramine hydrochloride tablets, инструкция по применению: показания, противопоказания и раздел о дозах при депрессии. DailyMed, Strides Pharma, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=51d3b181-0d15-4782-a966-feb137972b18"
                }
              ],
              "more": true
            },
            {
              "label": "Доза по инструкции",
              "text": "Амбулаторно начинают с 75 мг в сутки и доводят до 150 мг; больше 200 мг в сутки не рекомендуют. В больнице начинают со 100 мг и при необходимости доходят до 250 или 300 мг. Пожилым и подросткам начинают с 30 или 40 мг, обычно хватает не больше 100 мг.",
              "more": true
            },
            {
              "label": "Когда оценивают эффект",
              "text": "До полного эффекта может пройти от одной до трёх недель.",
              "more": true
            },
            {
              "label": "Что важно при приёме",
              "text": "Противопоказан в период восстановления после свежего инфаркта и вместе с ингибиторами МАО: после их отмены нужен перерыв не меньше 14 дней.",
              "sources": [
                {
                  "title": "Imipramine hydrochloride tablets, инструкция по применению: показания, противопоказания и раздел о дозах при депрессии. DailyMed, Strides Pharma, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=51d3b181-0d15-4782-a966-feb137972b18"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Сексуальные нарушения чаще, чем на плацебо; среди самых тяжёлых по симптомам отмены; трициклические самые токсичные при передозировке.",
              "sources": [
                {
                  "title": "Serretti A., Chiesa A. Treatment-emergent sexual dysfunction related to antidepressants: a meta-analysis. Journal of Clinical Psychopharmacology, 2009.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/19440080/"
                },
                {
                  "title": "Henssler J. et al. Incidence of antidepressant discontinuation symptoms: a systematic review and meta-analysis. Lancet Psychiatry, 2024.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/38851198/"
                },
                {
                  "title": "Hawton K. et al. Toxicity of antidepressants: rates of suicide relative to prescribing and non-fatal overdose. British Journal of Psychiatry, 2010.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/20435959/"
                }
              ],
              "more": true
            },
            {
              "label": "Пожилым",
              "text": "Американские критерии Бирс советуют его избегать: сильное холинолитическое действие, а при обмороках в прошлом тем более.",
              "sources": [
                {
                  "title": "2023 American Geriatrics Society Beers Criteria Update Expert Panel. American Geriatrics Society 2023 updated AGS Beers Criteria for potentially inappropriate medication use in older adults. Journal of the American Geriatrics Society, 2023.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12478568/"
                }
              ],
              "more": true
            },
            {
              "label": "Остальные противопоказания",
              "text": "закрытоугольная глаукома; задержка мочи (слабость мочевого пузыря, аденома простаты); первый триместр беременности и кормление грудью.",
              "sources": [
                {
                  "title": "Справочник Видаль: Мелипрамин (имипрамин), раздел «Показания» (ЛП-№(000221)-(РГ-RU) от 12.05.21).",
                  "url": "https://www.vidal.ru/drugs/melipramin"
                },
                {
                  "title": "Imipramine hydrochloride tablets, инструкция по применению: показания, противопоказания и раздел о дозах при депрессии. DailyMed, Strides Pharma, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=51d3b181-0d15-4782-a966-feb137972b18"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/melipramin",
            "text": "Полная инструкция: vidal.ru"
          }
        },
        {
          "id": "doxepin",
          "label": "Доксепин",
          "note": "Продаётся под названием доксепин",
          "facts": [
            {
              "label": "Что это",
              "text": "Класс: Трициклические (ТЦА). Как действует класс, в его карточке."
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия, тревожность и нарушения сна при неврозах, алкоголизме, заболеваниях мозга; психотическая депрессия; вне психиатрии: язвенная болезнь двенадцатиперстной кишки, демпинг-синдром, предменструальный синдром, хронические боли у онкологических больных, кожный зуд, хроническая крапивница.",
              "sources": [
                {
                  "title": "Справочник Видаль: Доксепин, капсулы, раздел «Показания» (ЛП-№(014922)-(РГ-RU) от 20.05.26).",
                  "url": "https://www.vidal.ru/drugs/doxepin"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Один раз в день или в несколько приёмов. Время суток и связь с едой инструкция к капсулам не задаёт."
            },
            {
              "label": "Противопоказания",
              "text": "Одновременно с ИМАО и в течение 14 дней после них; глаукома и склонность к задержке мочи; острый инфаркт миокарда и блокады сердца; и другие, см. «Подробнее»."
            },
            {
              "label": "Показания в других странах",
              "text": "В США капсулы доксепина показаны только при большом депрессивном расстройстве у взрослых.",
              "sources": [
                {
                  "title": "Doxepin hydrochloride capsules, инструкция по применению: раздел 2.2 о дозах, противопоказания, раздел 5.4 о сонливости. DailyMed, Amneal, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=20bfb8af-7933-4e5c-a2b5-010659d9125b"
                }
              ],
              "more": true
            },
            {
              "label": "Доза по инструкции",
              "text": "Начинают с 25 мг три раза в день или с 75 мг один раз. Обычная лечебная доза от 75 до 150 мг в сутки, максимум 100 мг три раза в день, то есть 300 мг.",
              "more": true
            },
            {
              "label": "Что важно при приёме",
              "text": "Сильно клонит в сон: за руль нельзя, алкоголь усиливает действие, его избегают. Противопоказан при глаукоме и при задержке мочи сейчас или в прошлом.",
              "sources": [
                {
                  "title": "Doxepin hydrochloride capsules, инструкция по применению: раздел 2.2 о дозах, противопоказания, раздел 5.4 о сонливости. DailyMed, Amneal, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=20bfb8af-7933-4e5c-a2b5-010659d9125b"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "При передозировке токсичнее амитриптилина.",
              "sources": [
                {
                  "title": "Hawton K. et al. Toxicity of antidepressants: rates of suicide relative to prescribing and non-fatal overdose. British Journal of Psychiatry, 2010.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/20435959/"
                }
              ],
              "more": true
            },
            {
              "label": "Пожилым",
              "text": "Критерии Бирс советуют избегать доз больше 6 мг в сутки из-за холинолитического действия и при обмороках в прошлом.",
              "sources": [
                {
                  "title": "2023 American Geriatrics Society Beers Criteria Update Expert Panel. American Geriatrics Society 2023 updated AGS Beers Criteria for potentially inappropriate medication use in older adults. Journal of the American Geriatrics Society, 2023.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12478568/"
                }
              ],
              "more": true
            },
            {
              "label": "Остальные противопоказания",
              "text": "тяжёлые болезни печени, почек и крови; беременность и кормление грудью; возраст до 12 лет.",
              "sources": [
                {
                  "title": "Справочник Видаль: Доксепин, капсулы, раздел «Показания» (ЛП-№(014922)-(РГ-RU) от 20.05.26).",
                  "url": "https://www.vidal.ru/drugs/doxepin"
                },
                {
                  "title": "Doxepin hydrochloride capsules, инструкция по применению: раздел 2.2 о дозах, противопоказания, раздел 5.4 о сонливости. DailyMed, Amneal, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=20bfb8af-7933-4e5c-a2b5-010659d9125b"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/doxepin",
            "text": "Полная инструкция: vidal.ru"
          }
        },
        {
          "id": "nortriptyline",
          "label": "Нортриптилин",
          "note": "Памелор; в России не зарегистрирован",
          "facts": [
            {
              "label": "Что это",
              "text": "Класс: Трициклические (ТЦА). Как действует класс, в его карточке."
            },
            {
              "label": "Показания по инструкции",
              "text": "В России не зарегистрирован. В США (Pamelor): симптомы депрессии.",
              "sources": [
                {
                  "title": "Pamelor (nortriptyline), инструкция по применению: раздел о дозах и контроле уровня в крови. DailyMed, SpecGx (Mallinckrodt), 2025.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e17dc299-f52d-414d-ab6e-e809bd6f8acb"
                },
                {
                  "title": "Справочник Видаль: поиск «нортриптилин», октябрь 2026: зарегистрированных препаратов не найдено.",
                  "url": "https://www.vidal.ru/search?t=all&q=%D0%BD%D0%BE%D1%80%D1%82%D1%80%D0%B8%D0%BF%D1%82%D0%B8%D0%BB%D0%B8%D0%BD"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Три или четыре раза в день, либо всю суточную дозу один раз. Время суток и связь с едой инструкция не задаёт."
            },
            {
              "label": "Противопоказания",
              "text": "Одновременно с ИМАО и в течение 14 дней после них, начинать при лечении линезолидом; ранний период восстановления после инфаркта миокарда.",
              "sources": [
                {
                  "title": "Pamelor (nortriptyline), инструкция по применению: раздел о дозах и контроле уровня в крови. DailyMed, SpecGx (Mallinckrodt), 2025.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e17dc299-f52d-414d-ab6e-e809bd6f8acb"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "Обычно 25 мг три или четыре раза в день, начинают с малой дозы и повышают по необходимости. Больше 150 мг в сутки не рекомендуют. Пожилым и подросткам от 30 до 50 мг в сутки.",
              "more": true
            },
            {
              "label": "Что важно при приёме",
              "text": "При дозе выше 100 мг в сутки проверяют уровень нортриптилина в крови: он должен быть от 50 до 150 нг/мл. При серьёзных побочных эффектах или аллергии препарат сразу отменяют.",
              "sources": [
                {
                  "title": "Pamelor (nortriptyline), инструкция по применению: раздел о дозах и контроле уровня в крови. DailyMed, SpecGx (Mallinckrodt), 2025.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e17dc299-f52d-414d-ab6e-e809bd6f8acb"
                }
              ],
              "more": true
            },
            {
              "label": "В России",
              "text": "Зарегистрированных препаратов в справочнике Видаль нет.",
              "sources": [
                {
                  "title": "Справочник Видаль: поиск «нортриптилин», октябрь 2026: зарегистрированных препаратов не найдено.",
                  "url": "https://www.vidal.ru/search?t=all&q=%D0%BD%D0%BE%D1%80%D1%82%D1%80%D0%B8%D0%BF%D1%82%D0%B8%D0%BB%D0%B8%D0%BD"
                }
              ],
              "more": true
            },
            {
              "label": "Пожилым",
              "text": "Критерии Бирс советуют избегать: сильное холинолитическое действие, отсюда спутанность, запоры, падение давления.",
              "sources": [
                {
                  "title": "2023 American Geriatrics Society Beers Criteria Update Expert Panel. American Geriatrics Society 2023 updated AGS Beers Criteria for potentially inappropriate medication use in older adults. Journal of the American Geriatrics Society, 2023.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12478568/"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e17dc299-f52d-414d-ab6e-e809bd6f8acb",
            "text": "Полная инструкция: dailymed.nlm.nih.gov"
          }
        },
        {
          "id": "pipofezine",
          "label": "Пипофезин",
          "note": "Азафен",
          "facts": [
            {
              "label": "Что это",
              "text": "Трициклический по строению антидепрессант, но без холиноблокирующего действия. Противопоказан при тяжёлой печёночной или почечной недостаточности, при беременности и кормлении грудью.",
              "sources": [
                {
                  "title": "Справочник Видаль: Азафен (пипофезин), таблетки 25 мг, разделы «Режим дозирования» и «Особые указания» (ЛП-№(005772)-(РГ-RU) от 14.06.24).",
                  "url": "https://www.vidal.ru/drugs/azaphen__14737"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия лёгкой и средней тяжести, в том числе при хронических болезнях внутренних органов.",
              "sources": [
                {
                  "title": "Справочник Видаль: Азафен (пипофезин), таблетки 25 мг, разделы «Режим дозирования» и «Особые указания» (ЛП-№(005772)-(РГ-RU) от 14.06.24).",
                  "url": "https://www.vidal.ru/drugs/azaphen__14737"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "В начале 2 приёма, утром и в обед; на полной дозе 3 или 4 приёма, последний перед сном. Связь с едой инструкция не описывает."
            },
            {
              "label": "Противопоказания",
              "text": "Одновременно с ИМАО; тяжёлая печёночная или почечная недостаточность; беременность и кормление грудью.",
              "sources": [
                {
                  "title": "Справочник Видаль: Азафен (пипофезин), таблетки 25 мг, разделы «Режим дозирования» и «Особые указания» (ЛП-№(005772)-(РГ-RU) от 14.06.24).",
                  "url": "https://www.vidal.ru/drugs/azaphen__14737"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "Начинают с 25 или 50 мг в сутки. При хорошей переносимости повышают до 150 или 200 мг в сутки, иногда до 400 мг. Максимум от 400 до 500 мг в сутки. Поддерживающая доза от 25 до 75 мг в сутки.",
              "more": true
            },
            {
              "label": "Что важно при приёме",
              "text": "Алкоголь во время лечения запрещён. После ингибиторов МАО нужен перерыв 2 недели. Периодически проверяют работу печени и почек.",
              "sources": [
                {
                  "title": "Справочник Видаль: Азафен (пипофезин), таблетки 25 мг, разделы «Режим дозирования» и «Особые указания» (ЛП-№(005772)-(РГ-RU) от 14.06.24).",
                  "url": "https://www.vidal.ru/drugs/azaphen__14737"
                }
              ],
              "more": true
            },
            {
              "label": "В России",
              "text": "В клинических рекомендациях второй выбор при тяжёлой депрессии.",
              "sources": [
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Депрессивный эпизод, рекуррентное депрессивное расстройство», редакция 2021 года (ID 301_2 в рубрикаторе Минздрава, в архиве с 26.08.2024), PDF разработчика.",
                  "url": "https://psychiatr.ru/download/6271?view=1"
                }
              ],
              "more": true
            },
            {
              "label": "Насколько помогает",
              "text": "Крупных рандомизированных испытаний в международных журналах нет.",
              "more": true
            },
            {
              "label": "Где встречается",
              "text": "В основном в России и соседних странах. В большом сравнении 21 антидепрессанта его нет, доказательств меньше.",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/azaphen__14737",
            "text": "Полная инструкция: vidal.ru"
          }
        }
      ]
    },
    {
      "id": "maoi",
      "label": "Блокаторы МАО (ИМАО)",
      "title": "Ингибиторы моноаминоксидазы (ИМАО)",
      "hint": "Блокируют фермент МАО, который разрушает медиаторы. Много опасных сочетаний, с СИОЗС нельзя.",
      "facts": [
        {
          "label": "Что это",
          "text": "Блокируют фермент, который разрушает серотонин, норадреналин и дофамин. Опасны в сочетании с другими серотониновыми препаратами.",
          "sources": [
            {
              "title": "Patel P., Saadabadi A. Monoamine Oxidase Inhibitors (MAOIs). StatPearls, 2025.",
              "url": "https://www.ncbi.nlm.nih.gov/books/NBK539848/"
            }
          ]
        }
      ],
      "children": [
        {
          "id": "moclobemide",
          "label": "Моклобемид",
          "note": "Аурорикс, в России нет действующей регистрации",
          "facts": [
            {
              "label": "Что это",
              "text": "Класс: Блокаторы МАО (ИМАО). Как действует класс, в его карточке."
            },
            {
              "label": "Показания по инструкции",
              "text": "В России регистрация отменена. В Великобритании (Manerix): большая депрессия, социальная фобия.",
              "sources": [
                {
                  "title": "Manerix (moclobemide) 300 мг, общая характеристика лекарственного препарата (SmPC), разделы 4.2 и 4.4. electronic medicines compendium (Великобритания), редакция февраля 2026 года.",
                  "url": "https://www.medicines.org.uk/emc/product/6661/smpc"
                },
                {
                  "title": "Справочник Видаль: Аурорикс (моклобемид), сведения о регистрации (РУ П N015213/01 отменено).",
                  "url": "https://www.vidal.ru/drugs/aurorix__5357"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "В конце еды, обычно в два или три приёма. Время суток инструкция не задаёт."
            },
            {
              "label": "Противопоказания",
              "text": "Вместе с антидепрессантами, усиливающими серотонин (СИОЗС, трициклики), а также с селегилином, бупропионом, триптанами, трамадолом, петидином, декстрометорфаном и линезолидом; острая спутанность сознания; феохромоцитома (опухоль надпочечника); и другие, см. «Подробнее»."
            },
            {
              "label": "Доза по инструкции",
              "text": "Начинают с 300 мг в сутки, максимум 600 мг.",
              "more": true
            },
            {
              "label": "Когда оценивают эффект",
              "text": "Эффект оценивают не раньше чем через четыре-шесть недель; дозу не повышают в первую неделю.",
              "more": true
            },
            {
              "label": "Что важно при приёме",
              "text": "Строгая диета, как при старых ИМАО, обычно не нужна, но больших количеств продуктов с тирамином (выдержанный сыр, дрожжевой экстракт, ферментированная соя) избегают. В России регистрация Аурорикса отменена.",
              "sources": [
                {
                  "title": "Manerix (moclobemide) 300 мг, общая характеристика лекарственного препарата (SmPC), разделы 4.2 и 4.4. electronic medicines compendium (Великобритания), редакция февраля 2026 года.",
                  "url": "https://www.medicines.org.uk/emc/product/6661/smpc"
                },
                {
                  "title": "Справочник Видаль: Аурорикс (моклобемид), сведения о регистрации (РУ П N015213/01 отменено).",
                  "url": "https://www.vidal.ru/drugs/aurorix__5357"
                }
              ],
              "more": true
            },
            {
              "label": "Чем хорош",
              "text": "По сексуальной функции значимо не отличался от плацебо",
              "sources": [
                {
                  "title": "Serretti A., Chiesa A. Treatment-emergent sexual dysfunction related to antidepressants: a meta-analysis. Journal of Clinical Psychopharmacology, 2009.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/19440080/"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "В России официально недоступен; опасные сочетания с другими серотониновыми препаратами",
              "sources": [
                {
                  "title": "Patel P., Saadabadi A. Monoamine Oxidase Inhibitors (MAOIs). StatPearls, 2025.",
                  "url": "https://www.ncbi.nlm.nih.gov/books/NBK539848/"
                }
              ],
              "more": true
            },
            {
              "label": "Остальные противопоказания",
              "text": "детский возраст.",
              "sources": [
                {
                  "title": "Manerix (moclobemide) 300 мг, общая характеристика лекарственного препарата (SmPC), разделы 4.2 и 4.4. electronic medicines compendium (Великобритания), редакция февраля 2026 года.",
                  "url": "https://www.medicines.org.uk/emc/product/6661/smpc"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.medicines.org.uk/emc/product/6661/smpc",
            "text": "Полная инструкция: medicines.org.uk"
          }
        },
        {
          "id": "pirlindole",
          "label": "Пирлиндол",
          "note": "Пиразидол",
          "facts": [
            {
              "label": "Что это",
              "text": "Обратимый ингибитор МАО типа А, близкий родственник моклобемида.",
              "sources": [
                {
                  "title": "Справочник Видаль: Пиразидол (пирлиндол), фармакологическое действие: обратимый ингибитор МАО типа А.",
                  "url": "https://www.vidal.ru/drugs/pyrazidol__40373"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия разного происхождения, особенно с заторможенностью, упадком сил, тревогой; депрессия в пожилом возрасте; алкогольный абстинентный синдром; болезнь Альцгеймера (в составе комплексного лечения).",
              "sources": [
                {
                  "title": "Справочник Видаль: Пиразидол (пирлиндол), таблетки 25 и 50 мг, разделы «Режим дозирования» и «Противопоказания» (ЛП-№(001788)-(РГ-RU) от 08.02.23).",
                  "url": "https://www.vidal.ru/drugs/pyrazidol__40373"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Два или три раза в день; в начале лечения суточную дозу делят на 2 приёма. Время суток и связь с едой инструкция не задаёт."
            },
            {
              "label": "Противопоказания",
              "text": "Одновременно с ИМАО и в течение 14 дней после них; острый гепатит; болезни крови.",
              "sources": [
                {
                  "title": "Справочник Видаль: Пиразидол (пирлиндол), таблетки 25 и 50 мг, разделы «Режим дозирования» и «Противопоказания» (ЛП-№(001788)-(РГ-RU) от 08.02.23).",
                  "url": "https://www.vidal.ru/drugs/pyrazidol__40373"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "Начинают с 50 или 75 мг в сутки, затем постепенно повышают шагами по 25 или 50 мг до 150 или 300 мг в сутки. Максимум 400 мг в сутки.",
              "more": true
            },
            {
              "label": "Что важно при приёме",
              "text": "Противопоказан при остром гепатите и заболеваниях крови. Нельзя вместе с ингибиторами МАО и в течение 14 дней после их отмены. Инструкция допускает приём при глаукоме и аденоме простаты.",
              "sources": [
                {
                  "title": "Справочник Видаль: Пиразидол (пирлиндол), таблетки 25 и 50 мг, разделы «Режим дозирования» и «Противопоказания» (ЛП-№(001788)-(РГ-RU) от 08.02.23).",
                  "url": "https://www.vidal.ru/drugs/pyrazidol__40373"
                }
              ],
              "more": true
            },
            {
              "label": "Опасные сочетания",
              "text": "Как и другие ингибиторы МАО, опасен вместе с СИОЗС, СИОЗСН, кломипрамином и другими серотониновыми препаратами из-за серотонинового синдрома. Инструкция Пиразидола об этом прямо не пишет, это свойство класса.",
              "sources": [
                {
                  "title": "Patel P., Saadabadi A. Monoamine Oxidase Inhibitors (MAOIs). StatPearls, 2025.",
                  "url": "https://www.ncbi.nlm.nih.gov/books/NBK539848/"
                }
              ],
              "more": true
            },
            {
              "label": "В России",
              "text": "В клинических рекомендациях второй выбор при тяжёлой депрессии.",
              "sources": [
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Депрессивный эпизод, рекуррентное депрессивное расстройство», редакция 2021 года (ID 301_2 в рубрикаторе Минздрава, в архиве с 26.08.2024), PDF разработчика.",
                  "url": "https://psychiatr.ru/download/6271?view=1"
                }
              ],
              "more": true
            },
            {
              "label": "Насколько помогает",
              "text": "Метаанализ 2011 года: девять испытаний против других антидепрессантов, разницы в эффекте нет; авторы оговаривают, что качество испытаний среднее, а часть данных взята из архивов производителя.",
              "sources": [
                {
                  "title": "Macedo A., Leiria E., Filipe A. Pirlindole in the treatment of depression: a meta-analysis. Clinical Drug Investigation, 2011.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/21053988/"
                }
              ],
              "more": true
            },
            {
              "label": "Где встречается",
              "text": "В основном в России и соседних странах. В большом сравнении 21 антидепрессанта его нет, доказательств меньше.",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/pyrazidol__40373",
            "text": "Полная инструкция: vidal.ru"
          }
        },
        {
          "id": "phenelzine",
          "label": "Фенелзин",
          "note": "Нардил; в России не зарегистрирован",
          "facts": [
            {
              "label": "Что это",
              "text": "Старый необратимый ИМАО. Старым ИМАО нужна диета: без фермента вещество тирамин из выдержанного сыра, копчёностей и некоторых других продуктов может резко поднять давление.",
              "sources": [
                {
                  "title": "Patel P., Saadabadi A. Monoamine Oxidase Inhibitors (MAOIs). StatPearls, 2025.",
                  "url": "https://www.ncbi.nlm.nih.gov/books/NBK539848/"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "В России не зарегистрирован. В США (Nardil): «атипичная», «неэндогенная» или «невротическая» депрессия, часто со смешанной тревогой и фобиями; обычно не первым выбором, а когда не помогли более распространённые препараты.",
              "sources": [
                {
                  "title": "Nardil (phenelzine), инструкция по применению: противопоказания (продукты с тирамином, опасные сочетания) и раздел о дозах. DailyMed, Parke-Davis (Pfizer), 2025.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=513a41d0-37d4-4355-8a6d-a2c643bce6fa"
                },
                {
                  "title": "Справочник Видаль: поиск «фенелзин», октябрь 2026: зарегистрированных препаратов не найдено.",
                  "url": "https://www.vidal.ru/search?t=all&q=%D1%84%D0%B5%D0%BD%D0%B5%D0%BB%D0%B7%D0%B8%D0%BD"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Обычно три раза в день по таблетке. Связь приёма с едой инструкция не описывает, но строго ограничивает сами продукты."
            },
            {
              "label": "Противопоказания",
              "text": "Вместе с другими антидепрессантами, ИМАО и буспироном (перерыв не меньше 14 дней, после флуоксетина 5 недель); вместе со стимуляторами, сосудосуживающими, меперидином, декстрометорфаном и алкоголем; продукты с тирамином (выдержанные сыры, вяленые колбасы, пиво, вино); и другие, см. «Подробнее»."
            },
            {
              "label": "Доза по инструкции",
              "text": "Начинают с 15 мг три раза в день. Довольно быстро повышают хотя бы до 60 мг в сутки, при необходимости до 90 мг. Поддерживающая доза может снижаться до 15 мг в день или через день.",
              "more": true
            },
            {
              "label": "Когда оценивают эффект",
              "text": "Многим нужно не меньше 4 недель на дозе 60 мг, прежде чем появится ответ.",
              "more": true
            },
            {
              "label": "Что важно при приёме",
              "text": "Диета без тирамина: нельзя выдержанные сыры, вино, пиво, сушёные колбасы, печень, дрожжевой экстракт, бобы фава, квашеное и копчёное. Опасны сочетания с другими антидепрессантами, усиливающими серотонин, с декстрометорфаном от кашля, петидином, стимуляторами и алкоголем.",
              "sources": [
                {
                  "title": "Nardil (phenelzine), инструкция по применению: противопоказания (продукты с тирамином, опасные сочетания) и раздел о дозах. DailyMed, Parke-Davis (Pfizer), 2025.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=513a41d0-37d4-4355-8a6d-a2c643bce6fa"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Сексуальные нарушения чаще, чем на плацебо. Нельзя с любыми другими антидепрессантами, включая трициклические и бупропион: после отмены фенелзина до них нужен перерыв не меньше 14 дней, после флуоксетина до фенелзина не меньше 5 недель, а диету соблюдают ещё 2 недели после отмены.",
              "sources": [
                {
                  "title": "Serretti A., Chiesa A. Treatment-emergent sexual dysfunction related to antidepressants: a meta-analysis. Journal of Clinical Psychopharmacology, 2009.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/19440080/"
                },
                {
                  "title": "Nardil (phenelzine), инструкция по применению: противопоказания (продукты с тирамином, опасные сочетания) и раздел о дозах. DailyMed, Parke-Davis (Pfizer), 2025.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=513a41d0-37d4-4355-8a6d-a2c643bce6fa"
                }
              ],
              "more": true
            },
            {
              "label": "В России",
              "text": "Зарегистрированных препаратов в справочнике Видаль нет.",
              "sources": [
                {
                  "title": "Справочник Видаль: поиск «фенелзин», октябрь 2026: зарегистрированных препаратов не найдено.",
                  "url": "https://www.vidal.ru/search?t=all&q=%D1%84%D0%B5%D0%BD%D0%B5%D0%BB%D0%B7%D0%B8%D0%BD"
                }
              ],
              "more": true
            },
            {
              "label": "Остальные противопоказания",
              "text": "сердечная недостаточность, болезни печени, тяжёлые болезни почек, феохромоцитома (опухоль надпочечника).",
              "sources": [
                {
                  "title": "Nardil (phenelzine), инструкция по применению: противопоказания (продукты с тирамином, опасные сочетания) и раздел о дозах. DailyMed, Parke-Davis (Pfizer), 2025.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=513a41d0-37d4-4355-8a6d-a2c643bce6fa"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=513a41d0-37d4-4355-8a6d-a2c643bce6fa",
            "text": "Полная инструкция: dailymed.nlm.nih.gov"
          }
        }
      ]
    },
    {
      "id": "antipsychotic",
      "label": "Антипсихотики (нейролептики)",
      "title": "Антипсихотики (нейролептики)",
      "hint": "Против психоза; некоторые в небольших дозах добавляют к антидепрессанту.",
      "facts": [
        {
          "label": "Что это",
          "text": "Препараты против психоза: блокируют дофаминовые рецепторы. Некоторые из них в небольших дозах добавляют к антидепрессанту, когда одного мало.",
          "sources": [
            {
              "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
            }
          ]
        }
      ],
      "aside": true,
      "children": [
        {
          "id": "sulpiride",
          "label": "Сульпирид",
          "note": "Эглонил",
          "facts": [
            {
              "label": "Что это",
              "text": "Не антидепрессант, а нейролептик: блокирует дофаминовые рецепторы.",
              "sources": [
                {
                  "title": "Справочник Видаль: Эглонил (сульпирид), инструкции к таблеткам 200 мг и капсулам 50 мг.",
                  "url": "https://www.vidal.ru/drugs/eglonyl__985"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "Таблетки 200 мг (Эглонил): острые и хронические психотические расстройства, в том числе шизофрения и хронические бредовые состояния, взрослым от 18 лет. Капсулы 50 мг: кратковременное лечение тревоги у взрослых, если обычные методы не помогли; тяжёлые нарушения поведения (возбуждение, самоповреждение, стереотипии) у детей от 6 до 18 лет, особенно при аутизме. Депрессии в показаниях Эглонила нет.",
              "sources": [
                {
                  "title": "Справочник Видаль: Эглонил (сульпирид), инструкции к таблеткам 200 мг и капсулам 50 мг.",
                  "url": "https://www.vidal.ru/drugs/eglonyl__985"
                },
                {
                  "title": "Справочник Видаль: Эглонил (сульпирид), капсулы 50 мг, показания и режим дозирования.",
                  "url": "https://www.vidal.ru/drugs/eglonyl__984"
                }
              ]
            },
            {
              "label": "Когда назначают",
              "text": "Российские рекомендации допускают добавить его к антидепрессанту, если один антидепрессант не помог и есть тревога, страхи, ипохондрические или психотические симптомы; метаанализов при депрессии нет.",
              "sources": [
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Депрессивный эпизод, рекуррентное депрессивное расстройство», редакция 2021 года (ID 301_2 в рубрикаторе Минздрава, в архиве с 26.08.2024), PDF разработчика.",
                  "url": "https://psychiatr.ru/download/6271?view=1"
                }
              ]
            },
            {
              "label": "Противопоказания",
              "text": "Опухоли, зависящие от пролактина (пролактинома гипофиза, рак молочной железы), и повышенный пролактин; феохромоцитома (опухоль надпочечника); вместе с леводопой и агонистами дофамина (каберголин, ропинирол); и другие, см. «Подробнее»."
            },
            {
              "label": "Чем платят",
              "text": "Повышает пролактин: нарушения цикла вплоть до его прекращения, выделения и увеличение груди, в том числе у мужчин, проблемы с эрекцией и оргазмом. Как циталопрам и эсциталопрам, может удлинять интервал QT, поэтому их не рекомендуют сочетать, а если без этого никак, контролируют ЭКГ.",
              "sources": [
                {
                  "title": "Справочник Видаль: Эглонил (сульпирид), инструкции к таблеткам 200 мг и капсулам 50 мг.",
                  "url": "https://www.vidal.ru/drugs/eglonyl__985"
                }
              ],
              "more": true
            },
            {
              "label": "Остальные противопоказания",
              "text": "острое отравление алкоголем или снотворными; кормление грудью; возраст до 18 лет для таблеток 200 мг, до 6 лет для капсул.",
              "sources": [
                {
                  "title": "Справочник Видаль: Эглонил (сульпирид), инструкции к таблеткам 200 мг и капсулам 50 мг.",
                  "url": "https://www.vidal.ru/drugs/eglonyl__985"
                },
                {
                  "title": "Справочник Видаль: Эглонил (сульпирид), капсулы 50 мг, показания и режим дозирования.",
                  "url": "https://www.vidal.ru/drugs/eglonyl__984"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/eglonyl__985",
            "text": "Полная инструкция: vidal.ru"
          },
          "aside": true
        },
        {
          "id": "aripiprazole",
          "label": "Арипипразол",
          "note": "Зилаксера, Арипризол; Абилифай снят с регистрации",
          "facts": [
            {
              "label": "Что это",
              "text": "Антипсихотик второго поколения (нейролептик нового типа). Частично стимулирует дофаминовые D2 и серотониновые 5-HT1A рецепторы и блокирует 5-HT2A.",
              "sources": [
                {
                  "title": "Abilify (aripiprazole), инструкция по применению, одобренная FDA. Otsuka, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c040bd1d-45b7-49f2-93ea-aed7220b30ac"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "В России сейчас шизофрения и биполярное расстройство; добавка при депрессии была только в инструкции Абилифая, но его регистрацию отменили. В США (FDA) одобрен как добавка к антидепрессанту при депрессии.",
              "sources": [
                {
                  "title": "Справочник Видаль: Абилифай (арипипразол), разделы «Показания», «Режим дозирования», «Противопоказания» (РУ ЛС-001812, на Видале отмечена отмена регистрации).",
                  "url": "https://www.vidal.ru/drugs/abilify__14249"
                },
                {
                  "title": "Справочник Видаль: препараты арипипразола в России (Зилаксера, Арипризол, Арипипразол и др.).",
                  "url": "https://www.vidal.ru/drugs/molecule-in/1714"
                },
                {
                  "title": "Abilify (aripiprazole), инструкция по применению, одобренная FDA. Otsuka, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c040bd1d-45b7-49f2-93ea-aed7220b30ac"
                }
              ]
            },
            {
              "label": "Когда выбирают",
              "text": "Добавка к антидепрессанту, когда он помог лишь частично. CANMAT 2023: первая линия среди средств усиления, уровень доказательности 1. NICE называет его среди антипсихотиков второго поколения для комбинации, обычно после консультации специалиста.",
              "sources": [
                {
                  "title": "Lam R.W. et al. CANMAT 2023 update on clinical guidelines for management of major depressive disorder in adults, таблица 7.2 «Summary Recommendations for Adjunctive Medications» и раздел Q.7.g. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                },
                {
                  "title": "NICE. Depression in adults: treatment and management (NG222), рекомендации 1.9.8 и 1.9.9 (комбинированное лечение), от 1.4.33 до 1.4.37 (антипсихотики как усиление), 2022.",
                  "url": "https://www.nice.org.uk/guidance/ng222/chapter/Recommendations"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Таблетка раз в день, независимо от еды, вместе с продолжающимся антидепрессантом. Дозу повышают не чаще раза в неделю.",
              "sources": [
                {
                  "title": "Справочник Видаль: Абилифай (арипипразол), разделы «Показания», «Режим дозирования», «Противопоказания» (РУ ЛС-001812, на Видале отмечена отмена регистрации).",
                  "url": "https://www.vidal.ru/drugs/abilify__14249"
                },
                {
                  "title": "Abilify (aripiprazole), инструкция по применению, одобренная FDA. Otsuka, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c040bd1d-45b7-49f2-93ea-aed7220b30ac"
                }
              ]
            },
            {
              "label": "Противопоказания",
              "text": "Аллергия на арипипразол; возраст до 18 лет. Осторожно: болезни сердца и сосудов, судороги, ожирение и диабет в семье.",
              "sources": [
                {
                  "title": "Справочник Видаль: Абилифай (арипипразол), разделы «Показания», «Режим дозирования», «Противопоказания» (РУ ЛС-001812, на Видале отмечена отмена регистрации).",
                  "url": "https://www.vidal.ru/drugs/abilify__14249"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "Как добавка при депрессии: начинают с 5 мг в сутки, при необходимости повышают на 5 мг раз в неделю, не больше 15 мг (инструкция снятого с регистрации Абилифая). FDA: старт от 2 до 5 мг, диапазон от 2 до 15 мг. CANMAT: от 2 до 10 мг.",
              "sources": [
                {
                  "title": "Справочник Видаль: Абилифай (арипипразол), разделы «Показания», «Режим дозирования», «Противопоказания» (РУ ЛС-001812, на Видале отмечена отмена регистрации).",
                  "url": "https://www.vidal.ru/drugs/abilify__14249"
                },
                {
                  "title": "Abilify (aripiprazole), инструкция по применению, одобренная FDA. Otsuka, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c040bd1d-45b7-49f2-93ea-aed7220b30ac"
                },
                {
                  "title": "Lam R.W. et al. CANMAT 2023 update on clinical guidelines for management of major depressive disorder in adults, таблица 7.2 «Summary Recommendations for Adjunctive Medications» и раздел Q.7.g. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Акатизия (мучительное внутреннее беспокойство, трудно усидеть на месте), бессонница, запоры, усталость; прибавка веса. При долгом приёме риск поздней дискинезии (непроизвольных движений, иногда необратимых). У пожилых с деменцией антипсихотики повышают риск смерти и инсульта, поэтому таким людям их не назначают.",
              "sources": [
                {
                  "title": "Abilify (aripiprazole), инструкция по применению, одобренная FDA. Otsuka, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c040bd1d-45b7-49f2-93ea-aed7220b30ac"
                },
                {
                  "title": "Lam R.W. et al. CANMAT 2023 update on clinical guidelines for management of major depressive disorder in adults, таблица 7.2 «Summary Recommendations for Adjunctive Medications» и раздел Q.7.g. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                },
                {
                  "title": "Справочник Видаль: Абилифай (арипипразол), разделы «Показания», «Режим дозирования», «Противопоказания» (РУ ЛС-001812, на Видале отмечена отмена регистрации).",
                  "url": "https://www.vidal.ru/drugs/abilify__14249"
                }
              ],
              "more": true
            },
            {
              "label": "В России",
              "text": "Зарегистрирован: Зилаксера, Арипризол, Арипипразол.",
              "sources": [
                {
                  "title": "Справочник Видаль: препараты арипипразола в России (Зилаксера, Арипризол, Арипипразол и др.).",
                  "url": "https://www.vidal.ru/drugs/molecule-in/1714"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/abilify__14249",
            "text": "Полная инструкция: vidal.ru"
          },
          "aside": true
        },
        {
          "id": "brexpiprazole",
          "label": "Брекспипразол",
          "note": "Рексалти",
          "facts": [
            {
              "label": "Что это",
              "text": "Антипсихотик второго поколения, близкий родственник арипипразола: частично стимулирует 5-HT1A и D2 рецепторы, блокирует 5-HT2A.",
              "sources": [
                {
                  "title": "Rexulti (brexpiprazole), инструкция по применению, одобренная FDA. Otsuka, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2d301358-6291-4ec1-bd87-37b4ad9bd850"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "В России только шизофрения. В США (FDA): добавка к антидепрессанту при депрессии у взрослых, шизофрения, возбуждение при деменции.",
              "sources": [
                {
                  "title": "Справочник Видаль: Рексалти (брекспипразол), инструкция (РУ ЛП-006867, действующее).",
                  "url": "https://www.vidal.ru/drugs/reksalty"
                },
                {
                  "title": "Rexulti (brexpiprazole), инструкция по применению, одобренная FDA. Otsuka, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2d301358-6291-4ec1-bd87-37b4ad9bd850"
                }
              ]
            },
            {
              "label": "Когда выбирают",
              "text": "Добавка к антидепрессанту при частичном ответе. CANMAT 2023: первая линия, уровень 1, вместе с арипипразолом. В NICE NG222 отдельно не назван.",
              "sources": [
                {
                  "title": "Lam R.W. et al. CANMAT 2023 update on clinical guidelines for management of major depressive disorder in adults, таблица 7.2 «Summary Recommendations for Adjunctive Medications» и раздел Q.7.g. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                },
                {
                  "title": "NICE. Depression in adults: treatment and management (NG222), рекомендации 1.9.8 и 1.9.9 (комбинированное лечение), от 1.4.33 до 1.4.37 (антипсихотики как усиление), 2022.",
                  "url": "https://www.nice.org.uk/guidance/ng222/chapter/Recommendations"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Таблетка раз в день; дозу повышают раз в неделю.",
              "sources": [
                {
                  "title": "Rexulti (brexpiprazole), инструкция по применению, одобренная FDA. Otsuka, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2d301358-6291-4ec1-bd87-37b4ad9bd850"
                }
              ]
            },
            {
              "label": "Противопоказания",
              "text": "Аллергия на брекспипразол; возраст до 18 лет; медленный обмен по CYP2D6 вместе с препаратами, тормозящими CYP3A4; сочетание сильных ингибиторов CYP2D6 и CYP3A4 (ферментов печени, которые его разрушают).",
              "sources": [
                {
                  "title": "Справочник Видаль: Рексалти (брекспипразол), инструкция (РУ ЛП-006867, действующее).",
                  "url": "https://www.vidal.ru/drugs/reksalty"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "Российская инструкция (шизофрения): от 2 до 4 мг в сутки. FDA для добавки при депрессии: старт 0,5 или 1 мг, цель 2 мг, максимум 3 мг. CANMAT: от 0,5 до 2 мг.",
              "sources": [
                {
                  "title": "Справочник Видаль: Рексалти (брекспипразол), инструкция (РУ ЛП-006867, действующее).",
                  "url": "https://www.vidal.ru/drugs/reksalty"
                },
                {
                  "title": "Rexulti (brexpiprazole), инструкция по применению, одобренная FDA. Otsuka, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2d301358-6291-4ec1-bd87-37b4ad9bd850"
                },
                {
                  "title": "Lam R.W. et al. CANMAT 2023 update on clinical guidelines for management of major depressive disorder in adults, таблица 7.2 «Summary Recommendations for Adjunctive Medications» и раздел Q.7.g. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Прибавка веса, сонливость, акатизия (в исследованиях при депрессии 9% против 2% на плацебо). Риск поздней дискинезии, как у всех антипсихотиков. У пожилых с деменцией антипсихотики повышают риск смерти и инсульта, поэтому таким людям их не назначают.",
              "sources": [
                {
                  "title": "Rexulti (brexpiprazole), инструкция по применению, одобренная FDA. Otsuka, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2d301358-6291-4ec1-bd87-37b4ad9bd850"
                },
                {
                  "title": "Справочник Видаль: Рексалти (брекспипразол), инструкция (РУ ЛП-006867, действующее).",
                  "url": "https://www.vidal.ru/drugs/reksalty"
                }
              ],
              "more": true
            },
            {
              "label": "В России",
              "text": "Зарегистрирован как Рексалти, но только для шизофрении.",
              "sources": [
                {
                  "title": "Справочник Видаль: Рексалти (брекспипразол), инструкция (РУ ЛП-006867, действующее).",
                  "url": "https://www.vidal.ru/drugs/reksalty"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/reksalty",
            "text": "Полная инструкция: vidal.ru"
          },
          "aside": true
        },
        {
          "id": "cariprazine",
          "label": "Карипразин",
          "note": "Реагила",
          "facts": [
            {
              "label": "Что это",
              "text": "Антипсихотик второго поколения: частично стимулирует дофаминовые D3 и D2 и серотониновые 5-HT1A рецепторы, блокирует 5-HT2A.",
              "sources": [
                {
                  "title": "Vraylar (cariprazine), инструкция по применению, одобренная FDA. Allergan, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4b5f7c65-aa2d-452a-b3db-bc85c06ff12f"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "В России: шизофрения, мания и биполярная депрессия, а также большое депрессивное расстройство в качестве дополнения к антидепрессантам. То же в США (FDA).",
              "sources": [
                {
                  "title": "Справочник Видаль: Реагила (карипразин), инструкция (РУ ЛП-№(001510)-(РГ-RU), действующее).",
                  "url": "https://www.vidal.ru/drugs/reagila"
                },
                {
                  "title": "Vraylar (cariprazine), инструкция по применению, одобренная FDA. Allergan, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4b5f7c65-aa2d-452a-b3db-bc85c06ff12f"
                }
              ]
            },
            {
              "label": "Когда выбирают",
              "text": "Добавка к антидепрессанту при частичном ответе. CANMAT 2023: вторая линия, уровень 2, потому что исследований меньше, чем у других. В NICE NG222 отдельно не назван.",
              "sources": [
                {
                  "title": "Lam R.W. et al. CANMAT 2023 update on clinical guidelines for management of major depressive disorder in adults, таблица 7.2 «Summary Recommendations for Adjunctive Medications» и раздел Q.7.g. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                },
                {
                  "title": "NICE. Depression in adults: treatment and management (NG222), рекомендации 1.9.8 и 1.9.9 (комбинированное лечение), от 1.4.33 до 1.4.37 (антипсихотики как усиление), 2022.",
                  "url": "https://www.nice.org.uk/guidance/ng222/chapter/Recommendations"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Капсула раз в день. Дозу поднимают не раньше 15-го дня: при более быстром повышении чаще побочные эффекты.",
              "sources": [
                {
                  "title": "Справочник Видаль: Реагила (карипразин), инструкция (РУ ЛП-№(001510)-(РГ-RU), действующее).",
                  "url": "https://www.vidal.ru/drugs/reagila"
                }
              ]
            },
            {
              "label": "Противопоказания",
              "text": "Аллергия на карипразин; одновременный приём сильных ингибиторов CYP3A4 или сильных и умеренных индукторов CYP3A4; пожилые с деменцией. Женщинам нужна надёжная контрацепция во время приёма и не меньше 10 недель после.",
              "sources": [
                {
                  "title": "Справочник Видаль: Реагила (карипразин), инструкция (РУ ЛП-№(001510)-(РГ-RU), действующее).",
                  "url": "https://www.vidal.ru/drugs/reagila"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "Как добавка при депрессии: 1,5 мг в сутки, с 15-го дня можно 3 мг; максимум 3 мг.",
              "sources": [
                {
                  "title": "Справочник Видаль: Реагила (карипразин), инструкция (РУ ЛП-№(001510)-(РГ-RU), действующее).",
                  "url": "https://www.vidal.ru/drugs/reagila"
                },
                {
                  "title": "Vraylar (cariprazine), инструкция по применению, одобренная FDA. Allergan, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4b5f7c65-aa2d-452a-b3db-bc85c06ff12f"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Очень часто акатизия и паркинсонизм (скованность, дрожь); часто прибавка веса и аппетита, бессонница, тревога; нечасто поздняя дискинезия.",
              "sources": [
                {
                  "title": "Справочник Видаль: Реагила (карипразин), инструкция (РУ ЛП-№(001510)-(РГ-RU), действующее).",
                  "url": "https://www.vidal.ru/drugs/reagila"
                }
              ],
              "more": true
            },
            {
              "label": "В России",
              "text": "Зарегистрирован как Реагила, показание при депрессии как добавка есть.",
              "sources": [
                {
                  "title": "Справочник Видаль: Реагила (карипразин), инструкция (РУ ЛП-№(001510)-(РГ-RU), действующее).",
                  "url": "https://www.vidal.ru/drugs/reagila"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/reagila",
            "text": "Полная инструкция: vidal.ru"
          },
          "aside": true
        },
        {
          "id": "quetiapine",
          "label": "Кветиапин",
          "note": "Сероквель Пролонг, Кетилепт, Квентиакс",
          "facts": [
            {
              "label": "Что это",
              "text": "Антипсихотик второго поколения: блокирует дофаминовые D2 и серотониновые 5-HT2A рецепторы; заметно успокаивает и усыпляет.",
              "sources": [
                {
                  "title": "Seroquel XR (quetiapine extended-release), инструкция по применению, одобренная FDA. AstraZeneca, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=473a3ac4-67f4-4782-baa9-7f9bdd8761f4"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "В России, в инструкциях на Видале: шизофрения, мания; у части препаратов (например, Кветиапин-СЗ) депрессия при биполярном расстройстве. Добавки к антидепрессанту при обычной депрессии в них нет. В США (FDA) форма длительного действия одобрена как добавка к антидепрессанту при депрессии.",
              "sources": [
                {
                  "title": "Справочник Видаль: Кветиапин-СЗ, инструкция (РУ ЛП-№(003214)-(РГ-RU)).",
                  "url": "https://www.vidal.ru/drugs/quetiapine__41328"
                },
                {
                  "title": "Справочник Видаль: препараты кветиапина в России (Сероквель, Сероквель Пролонг, Кетилепт, Квентиакс и др.).",
                  "url": "https://www.vidal.ru/drugs/molecule-in/908"
                },
                {
                  "title": "Seroquel XR (quetiapine extended-release), инструкция по применению, одобренная FDA. AstraZeneca, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=473a3ac4-67f4-4782-baa9-7f9bdd8761f4"
                }
              ]
            },
            {
              "label": "Когда выбирают",
              "text": "Добавка к антидепрессанту. CANMAT 2023: вторая линия (форма длительного действия), уровень 1: работает, но сильно усыпляет и влияет на обмен веществ. NICE называет его среди антипсихотиков для комбинации. CANMAT ставит кветиапин во вторую линию и как самостоятельный антидепрессант, от 150 до 300 мг.",
              "sources": [
                {
                  "title": "Lam R.W. et al. CANMAT 2023 update on clinical guidelines for management of major depressive disorder in adults, таблица 7.2 «Summary Recommendations for Adjunctive Medications» и раздел Q.7.g. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                },
                {
                  "title": "NICE. Depression in adults: treatment and management (NG222), рекомендации 1.9.8 и 1.9.9 (комбинированное лечение), от 1.4.33 до 1.4.37 (антипсихотики как усиление), 2022.",
                  "url": "https://www.nice.org.uk/guidance/ng222/chapter/Recommendations"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Таблетка длительного действия раз в день, лучше вечером, натощак или с лёгкой едой; глотать целиком.",
              "sources": [
                {
                  "title": "Seroquel XR (quetiapine extended-release), инструкция по применению, одобренная FDA. AstraZeneca, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=473a3ac4-67f4-4782-baa9-7f9bdd8761f4"
                }
              ]
            },
            {
              "label": "Противопоказания",
              "text": "Аллергия на кветиапин; одновременно с азоловыми противогрибковыми, эритромицином, кларитромицином, ингибиторами протеазы ВИЧ; возраст до 18 лет; беременность и кормление грудью.",
              "sources": [
                {
                  "title": "Справочник Видаль: Кветиапин-СЗ, инструкция (РУ ЛП-№(003214)-(РГ-RU)).",
                  "url": "https://www.vidal.ru/drugs/quetiapine__41328"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "FDA для добавки при депрессии: 50 мг в 1-й и 2-й день, 150 мг с 3-го дня, дальше от 150 до 300 мг. CANMAT: от 150 до 300 мг.",
              "sources": [
                {
                  "title": "Seroquel XR (quetiapine extended-release), инструкция по применению, одобренная FDA. AstraZeneca, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=473a3ac4-67f4-4782-baa9-7f9bdd8761f4"
                },
                {
                  "title": "Lam R.W. et al. CANMAT 2023 update on clinical guidelines for management of major depressive disorder in adults, таблица 7.2 «Summary Recommendations for Adjunctive Medications» и раздел Q.7.g. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Сонливость (в исследованиях добавки при депрессии 40% против 9% на плацебо), сухость во рту, усталость; рост сахара, жиров крови и веса. При долгом приёме риск поздней дискинезии (непроизвольных движений). У пожилых с деменцией антипсихотики повышают риск смерти и инсульта, поэтому таким людям их не назначают.",
              "sources": [
                {
                  "title": "Seroquel XR (quetiapine extended-release), инструкция по применению, одобренная FDA. AstraZeneca, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=473a3ac4-67f4-4782-baa9-7f9bdd8761f4"
                },
                {
                  "title": "Lam R.W. et al. CANMAT 2023 update on clinical guidelines for management of major depressive disorder in adults, таблица 7.2 «Summary Recommendations for Adjunctive Medications» и раздел Q.7.g. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                }
              ],
              "more": true
            },
            {
              "label": "В России",
              "text": "Зарегистрирован, много препаратов, включая форму длительного действия Сероквель Пролонг.",
              "sources": [
                {
                  "title": "Справочник Видаль: препараты кветиапина в России (Сероквель, Сероквель Пролонг, Кетилепт, Квентиакс и др.).",
                  "url": "https://www.vidal.ru/drugs/molecule-in/908"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/quetiapine__41328",
            "text": "Полная инструкция: vidal.ru"
          },
          "aside": true
        },
        {
          "id": "olanzapine",
          "label": "Оланзапин",
          "note": "Зипрекса, Оланзапин Канон, Парнасан",
          "facts": [
            {
              "label": "Что это",
              "text": "Антипсихотик второго поколения: блокирует дофаминовые и серотониновые 5-HT2 рецепторы, а также гистаминовые (отсюда сонливость и аппетит).",
              "sources": [
                {
                  "title": "Zyprexa (olanzapine), инструкция по применению, одобренная FDA. Eli Lilly, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b418946a-1ab4-4d89-a012-d94fc361a3c4"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "В России: шизофрения, мания, профилактика рецидивов при биполярном расстройстве; в инструкции оланзапина (ЛП-002640) есть терапевтически резистентная депрессия (не помогли два антидепрессанта), но только в паре с флуоксетином. Одному оланзапину это показание не дано. В США (FDA) так же.",
              "sources": [
                {
                  "title": "Справочник Видаль: Оланзапин, таблетки, инструкция (РУ ЛП-002640), показание «терапевтически резистентная депрессия» в комбинации с флуоксетином.",
                  "url": "https://www.vidal.ru/drugs/olanzapine__43301"
                },
                {
                  "title": "Zyprexa (olanzapine), инструкция по применению, одобренная FDA. Eli Lilly, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b418946a-1ab4-4d89-a012-d94fc361a3c4"
                }
              ]
            },
            {
              "label": "Когда выбирают",
              "text": "Добавка к антидепрессанту. CANMAT 2023: вторая линия, уровень 1: работает, но сильно прибавляет вес и портит обмен веществ. NICE называет его среди антипсихотиков для комбинации.",
              "sources": [
                {
                  "title": "Lam R.W. et al. CANMAT 2023 update on clinical guidelines for management of major depressive disorder in adults, таблица 7.2 «Summary Recommendations for Adjunctive Medications» и раздел Q.7.g. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                },
                {
                  "title": "NICE. Depression in adults: treatment and management (NG222), рекомендации 1.9.8 и 1.9.9 (комбинированное лечение), от 1.4.33 до 1.4.37 (антипсихотики как усиление), 2022.",
                  "url": "https://www.nice.org.uk/guidance/ng222/chapter/Recommendations"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Раз в день вечером, вместе с флуоксетином, независимо от еды.",
              "sources": [
                {
                  "title": "Справочник Видаль: Оланзапин, таблетки, инструкция (РУ ЛП-002640), показание «терапевтически резистентная депрессия» в комбинации с флуоксетином.",
                  "url": "https://www.vidal.ru/drugs/olanzapine__43301"
                },
                {
                  "title": "Zyprexa (olanzapine), инструкция по применению, одобренная FDA. Eli Lilly, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b418946a-1ab4-4d89-a012-d94fc361a3c4"
                }
              ]
            },
            {
              "label": "Противопоказания",
              "text": "Аллергия на оланзапин; возраст до 18 лет; непереносимость лактозы (для таблеток с лактозой).",
              "sources": [
                {
                  "title": "Справочник Видаль: Оланзапин, таблетки, инструкция (РУ ЛП-002640), показание «терапевтически резистентная депрессия» в комбинации с флуоксетином.",
                  "url": "https://www.vidal.ru/drugs/olanzapine__43301"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "При резистентной депрессии: обычно начинают с 5 мг оланзапина и 20 мг флуоксетина (флуоксетин дальше обычно от 25 до 30 мг); эффект показан при оланзапине от 6 до 12 мг. FDA: оланзапин от 5 до 20 мг. CANMAT: от 2,5 до 10 мг.",
              "sources": [
                {
                  "title": "Справочник Видаль: Оланзапин, таблетки, инструкция (РУ ЛП-002640), показание «терапевтически резистентная депрессия» в комбинации с флуоксетином.",
                  "url": "https://www.vidal.ru/drugs/olanzapine__43301"
                },
                {
                  "title": "Zyprexa (olanzapine), инструкция по применению, одобренная FDA. Eli Lilly, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b418946a-1ab4-4d89-a012-d94fc361a3c4"
                },
                {
                  "title": "Lam R.W. et al. CANMAT 2023 update on clinical guidelines for management of major depressive disorder in adults, таблица 7.2 «Summary Recommendations for Adjunctive Medications» и раздел Q.7.g. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Сильная прибавка веса: при долгом приёме у 64% вес вырос на 7% и больше; рост сахара и жиров крови; сонливость. При долгом приёме риск поздней дискинезии (непроизвольных движений). У пожилых с деменцией антипсихотики повышают риск смерти и инсульта, поэтому таким людям их не назначают.",
              "sources": [
                {
                  "title": "Zyprexa (olanzapine), инструкция по применению, одобренная FDA. Eli Lilly, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b418946a-1ab4-4d89-a012-d94fc361a3c4"
                },
                {
                  "title": "Lam R.W. et al. CANMAT 2023 update on clinical guidelines for management of major depressive disorder in adults, таблица 7.2 «Summary Recommendations for Adjunctive Medications» и раздел Q.7.g. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                },
                {
                  "title": "Справочник Видаль: Оланзапин, таблетки, инструкция (РУ ЛП-002640), показание «терапевтически резистентная депрессия» в комбинации с флуоксетином.",
                  "url": "https://www.vidal.ru/drugs/olanzapine__43301"
                }
              ],
              "more": true
            },
            {
              "label": "В России",
              "text": "Зарегистрирован, много препаратов: Зипрекса, Оланзапин Канон, Парнасан и др.",
              "sources": [
                {
                  "title": "Справочник Видаль: препараты оланзапина в России (Зипрекса, Оланзапин Канон, Парнасан, Нормитон и др.).",
                  "url": "https://www.vidal.ru/drugs/molecule-in/766"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/olanzapine__43301",
            "text": "Полная инструкция: vidal.ru"
          },
          "aside": true
        },
        {
          "id": "risperidone",
          "label": "Рисперидон",
          "note": "Рисдонал, Торендо, Риссет; Рисполепт в таблетках и Рилептид сняты с регистрации",
          "facts": [
            {
              "label": "Что это",
              "text": "Антипсихотик второго поколения: блокирует дофаминовые D2 и серотониновые 5-HT2 рецепторы.",
              "sources": [
                {
                  "title": "Risperdal (risperidone), инструкция по применению, одобренная FDA. Janssen, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7e117c7e-02fc-4343-92a1-230061dfc5e0"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "В России: шизофрения, мания, короткий курс при агрессии у людей с деменцией и у детей с умственной отсталостью. В США: шизофрения, мания, раздражительность при аутизме. Депрессии нет ни там, ни там.",
              "sources": [
                {
                  "title": "Справочник Видаль: Рисполепт (рисперидон), инструкция (РУ П N014824/01, на Видале отмечена отмена регистрации).",
                  "url": "https://www.vidal.ru/drugs/rispolept__5831"
                },
                {
                  "title": "Risperdal (risperidone), инструкция по применению, одобренная FDA. Janssen, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7e117c7e-02fc-4343-92a1-230061dfc5e0"
                }
              ]
            },
            {
              "label": "Когда выбирают",
              "text": "Добавка к антидепрессанту вне инструкции. CANMAT 2023: вторая линия, уровень 1: работает, но повышает пролактин, бьёт по сексуальной функции и даёт двигательные побочные эффекты. NICE называет его среди антипсихотиков для комбинации.",
              "sources": [
                {
                  "title": "Lam R.W. et al. CANMAT 2023 update on clinical guidelines for management of major depressive disorder in adults, таблица 7.2 «Summary Recommendations for Adjunctive Medications» и раздел Q.7.g. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                },
                {
                  "title": "NICE. Depression in adults: treatment and management (NG222), рекомендации 1.9.8 и 1.9.9 (комбинированное лечение), от 1.4.33 до 1.4.37 (антипсихотики как усиление), 2022.",
                  "url": "https://www.nice.org.uk/guidance/ng222/chapter/Recommendations"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Таблетки один или два раза в день.",
              "sources": [
                {
                  "title": "Справочник Видаль: Рисполепт (рисперидон), инструкция (РУ П N014824/01, на Видале отмечена отмена регистрации).",
                  "url": "https://www.vidal.ru/drugs/rispolept__5831"
                }
              ]
            },
            {
              "label": "Противопоказания",
              "text": "Аллергия на рисперидон; фенилкетонурия (для форм с аспартамом). Осторожно: болезни сердца, Паркинсон, судороги, беременность.",
              "sources": [
                {
                  "title": "Справочник Видаль: Рисполепт (рисперидон), инструкция (РУ П N014824/01, на Видале отмечена отмена регистрации).",
                  "url": "https://www.vidal.ru/drugs/rispolept__5831"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "Дозы для депрессии в инструкции нет. CANMAT для усиления: от 1 до 3 мг в сутки.",
              "sources": [
                {
                  "title": "Lam R.W. et al. CANMAT 2023 update on clinical guidelines for management of major depressive disorder in adults, таблица 7.2 «Summary Recommendations for Adjunctive Medications» и раздел Q.7.g. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Повышение пролактина (гормона, от которого сбивается цикл, падает либидо, может выделяться молоко из груди) сильнее, чем у других антипсихотиков; скованность и дрожь; поздняя дискинезия. У пожилых с деменцией антипсихотики повышают риск смерти и инсульта, поэтому таким людям их не назначают.",
              "sources": [
                {
                  "title": "Risperdal (risperidone), инструкция по применению, одобренная FDA. Janssen, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7e117c7e-02fc-4343-92a1-230061dfc5e0"
                },
                {
                  "title": "Lam R.W. et al. CANMAT 2023 update on clinical guidelines for management of major depressive disorder in adults, таблица 7.2 «Summary Recommendations for Adjunctive Medications» и раздел Q.7.g. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                }
              ],
              "more": true
            },
            {
              "label": "В России",
              "text": "Зарегистрирован, много препаратов: Рисдонал, Торендо, Риссет, Рисперидон и др.",
              "sources": [
                {
                  "title": "Справочник Видаль: препараты рисперидона в России (Рисполепт, Рилептид, Рисдонал, Рисперидон и др.).",
                  "url": "https://www.vidal.ru/drugs/molecule-in/930"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/rispolept__5831",
            "text": "Полная инструкция: vidal.ru"
          },
          "aside": true
        }
      ]
    },
    {
      "id": "moodstab",
      "label": "Нормотимики (стабилизаторы настроения)",
      "title": "Нормотимики (стабилизаторы настроения)",
      "hint": "Стабилизаторы настроения: основа лечения биполярного расстройства.",
      "facts": [
        {
          "label": "Что это",
          "text": "Основа лечения биполярного расстройства. Литий ещё и добавляют к антидепрессанту, который помог мало.",
          "sources": [
            {
              "title": "NICE. Depression in adults: treatment and management (NG222), рекомендации 1.4.24 (пожилые), от 1.4.25 до 1.4.32 (литий), 1.9 (дальнейшие шаги) и 1.15.2 (эскетамин), 2022.",
              "url": "https://www.nice.org.uk/guidance/ng222/chapter/Recommendations"
            }
          ]
        }
      ],
      "aside": true,
      "children": [
        {
          "id": "lithium",
          "label": "Литий",
          "note": "Добавка к антидепрессанту",
          "facts": [
            {
              "label": "Показания по инструкции",
              "text": "Маниакальные и гипоманиакальные состояния (периоды болезненно приподнятого настроения), профилактика и лечение аффективных психозов (тяжёлых расстройств настроения, в том числе биполярного), аффективные нарушения при алкоголизме; также мигрень, синдром Меньера, сексуальные расстройства, лекарственная зависимость.",
              "sources": [
                {
                  "title": "Справочник Видаль: Седалит (лития карбонат), раздел «Показания» (ЛП-№(004190)-(РГ-RU) от 27.12.23).",
                  "url": "https://www.vidal.ru/drugs/sedalit__15786"
                }
              ]
            },
            {
              "label": "Когда назначают",
              "text": "Добавляют к антидепрессанту, который помог мало.",
              "sources": [
                {
                  "title": "NICE. Depression in adults: treatment and management (NG222), рекомендации 1.4.24 (пожилые), от 1.4.25 до 1.4.32 (литий), 1.9 (дальнейшие шаги) и 1.15.2 (эскетамин), 2022.",
                  "url": "https://www.nice.org.uk/guidance/ng222/chapter/Recommendations"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Узкий коридор между рабочей и опасной дозой, поэтому регулярно сдают кровь на уровень лития через 12 часов после приёма; уровень не выше 1,0 ммоль/л, пожилым от 0,4 до 0,6 ммоль/л. Признаки отравления: понос, рвота, крупная дрожь, шаткость, спутанность, это повод срочно обратиться за помощью.",
              "sources": [
                {
                  "title": "NICE. Depression in adults: treatment and management (NG222), рекомендации 1.4.24 (пожилые), от 1.4.25 до 1.4.32 (литий), 1.9 (дальнейшие шаги) и 1.15.2 (эскетамин), 2022.",
                  "url": "https://www.nice.org.uk/guidance/ng222/chapter/Recommendations"
                }
              ]
            },
            {
              "label": "Противопоказания",
              "text": "Беременность и кормление грудью; лейкоз; тяжёлые операции. Болезни почек, сердца и щитовидной железы инструкция относит к «с осторожностью»: при них лечение особенно тщательно контролируют.",
              "sources": [
                {
                  "title": "Справочник Видаль: Седалит (лития карбонат), раздел «Показания» (ЛП-№(004190)-(РГ-RU) от 27.12.23).",
                  "url": "https://www.vidal.ru/drugs/sedalit__15786"
                }
              ]
            },
            {
              "label": "Показания в других странах",
              "text": "В США только биполярное расстройство I типа: мания и смешанные эпизоды и поддерживающее лечение, с 7 лет.",
              "sources": [
                {
                  "title": "Lithium carbonate tablets and capsules, инструкция по применению, раздел 1 «Indications and Usage». DailyMed, Hikma.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b839ff4b-f62d-41ab-a823-550a756d58ec"
                }
              ],
              "more": true
            },
            {
              "label": "Насколько помогает",
              "text": "С литием шансы ответить на лечение в 3,11 раза выше, чем с плацебо; CANMAT ставит его во вторую линию.",
              "sources": [
                {
                  "title": "Crossley N.A., Bauer M. Acceleration and augmentation of antidepressants with lithium for depressive disorders: two meta-analyses of randomized, placebo-controlled trials. Journal of Clinical Psychiatry, 2007.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/17592920/"
                },
                {
                  "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                }
              ],
              "more": true
            },
            {
              "label": "Риск самоубийства",
              "text": "В долгих испытаниях при расстройствах настроения самоубийств на литии было меньше, но в испытании 2022 года у ветеранов после попытки разницы с плацебо не нашли.",
              "sources": [
                {
                  "title": "Cipriani A., Hawton K., Stockton S., Geddes J.R. Lithium in the prevention of suicide in mood disorders: updated systematic review and meta-analysis. BMJ, 2013.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/23814104/"
                },
                {
                  "title": "Katz I.R. et al. Lithium treatment in the prevention of repeat suicide-related outcomes in veterans with major depression or bipolar disorder: a randomized clinical trial. JAMA Psychiatry, 2022.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/34787653/"
                }
              ],
              "more": true
            },
            {
              "label": "Что важно при приёме",
              "text": "Уровень лития поднимают обезвоживание, рвота и понос, обезболивающие вроде ибупрофена и диклофенака, мочегонные и препараты от давления из групп иАПФ и сартанов, поэтому любое новое лекарство согласуют с врачом. Бросать самому нельзя.",
              "sources": [
                {
                  "title": "NICE. Depression in adults: treatment and management (NG222), рекомендации 1.4.24 (пожилые), от 1.4.25 до 1.4.32 (литий), 1.9 (дальнейшие шаги) и 1.15.2 (эскетамин), 2022.",
                  "url": "https://www.nice.org.uk/guidance/ng222/chapter/Recommendations"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/sedalit__15786",
            "text": "Полная инструкция: vidal.ru"
          },
          "aside": true
        },
        {
          "id": "lamotrigine",
          "label": "Ламотриджин",
          "note": "Ламиктал, Ламотриджин Канон, Сейзар",
          "facts": [
            {
              "label": "Что это",
              "text": "Противоэпилептический препарат и стабилизатор настроения. Тормозит натриевые каналы нейронов и снижает выброс глутамата.",
              "sources": [
                {
                  "title": "Lamictal (lamotrigine), инструкция по применению, одобренная FDA, в том числе предупреждение в рамке о серьёзной сыпи. GlaxoSmithKline, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d7e3572d-56fe-4727-2bb4-013ccca22678"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "В России: эпилепсия; у взрослых с биполярным расстройством предупреждение эпизодов (депрессии, мании, гипомании). Лечения униполярной депрессии и усиления антидепрессанта в показаниях нет. FDA: лечить острые эпизоды настроения им не рекомендуют, эффект не доказан.",
              "sources": [
                {
                  "title": "Справочник Видаль: Ламиктал (ламотриджин), инструкция (РУ ЛП-№(000831)-(РГ-RU), бессрочно).",
                  "url": "https://www.vidal.ru/drugs/lamictal__2650"
                },
                {
                  "title": "Lamictal (lamotrigine), инструкция по применению, одобренная FDA, в том числе предупреждение в рамке о серьёзной сыпи. GlaxoSmithKline, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d7e3572d-56fe-4727-2bb4-013ccca22678"
                }
              ]
            },
            {
              "label": "Когда выбирают",
              "text": "Доказательства в основном при биполярной депрессии: там CANMAT и ISBD 2018 ставят его в первую линию при биполярном расстройстве I типа и во вторую при II типе. Как добавка к антидепрессанту при обычной депрессии CANMAT 2023 даёт только третью линию, уровень 3: исследования низкого качества. NICE тоже упоминает его, вне инструкции. Российские рекомендации допускают его как добавку к антидепрессанту: начинают с 25 мг в сутки и постепенно доводят до 200 мг.",
              "sources": [
                {
                  "title": "Yatham L.N. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) and International Society for Bipolar Disorders (ISBD) 2018 guidelines for the management of patients with bipolar disorder. Bipolar Disorders, 2018.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5947163/"
                },
                {
                  "title": "Lam R.W. et al. CANMAT 2023 update on clinical guidelines for management of major depressive disorder in adults, таблица 7.2 «Summary Recommendations for Adjunctive Medications» и раздел Q.7.g. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                },
                {
                  "title": "NICE. Depression in adults: treatment and management (NG222), рекомендации 1.9.8 и 1.9.9 (комбинированное лечение), от 1.4.33 до 1.4.37 (антипсихотики как усиление), 2022.",
                  "url": "https://www.nice.org.uk/guidance/ng222/chapter/Recommendations"
                },
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Депрессивный эпизод, рекуррентное депрессивное расстройство», редакция 2021 года (ID 301_2 в рубрикаторе Минздрава, в архиве с 26.08.2024), PDF разработчика.",
                  "url": "https://psychiatr.ru/download/6271?view=1"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Дозу поднимают очень медленно, шесть недель, иначе выше риск опасной сыпи. С вальпроатом дозы вдвое ниже. При любой сыпи сразу к врачу. Противозачаточные таблетки с эстрогеном снижают его уровень в крови.",
              "sources": [
                {
                  "title": "Справочник Видаль: Ламиктал (ламотриджин), инструкция (РУ ЛП-№(000831)-(РГ-RU), бессрочно).",
                  "url": "https://www.vidal.ru/drugs/lamictal__2650"
                },
                {
                  "title": "Lamictal (lamotrigine), инструкция по применению, одобренная FDA, в том числе предупреждение в рамке о серьёзной сыпи. GlaxoSmithKline, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d7e3572d-56fe-4727-2bb4-013ccca22678"
                }
              ]
            },
            {
              "label": "Противопоказания",
              "text": "Аллергия на ламотриджин, в том числе сыпь на него в прошлом.",
              "sources": [
                {
                  "title": "Справочник Видаль: Ламиктал (ламотриджин), инструкция (РУ ЛП-№(000831)-(РГ-RU), бессрочно).",
                  "url": "https://www.vidal.ru/drugs/lamictal__2650"
                },
                {
                  "title": "Lamictal (lamotrigine), инструкция по применению, одобренная FDA, в том числе предупреждение в рамке о серьёзной сыпи. GlaxoSmithKline, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d7e3572d-56fe-4727-2bb4-013ccca22678"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "При биполярном расстройстве без взаимодействующих лекарств: 25 мг две недели, затем 50 мг две недели, на 5-й неделе 100 мг, цель 200 мг в сутки. CANMAT для усиления: от 100 до 300 мг.",
              "sources": [
                {
                  "title": "Справочник Видаль: Ламиктал (ламотриджин), инструкция (РУ ЛП-№(000831)-(РГ-RU), бессрочно).",
                  "url": "https://www.vidal.ru/drugs/lamictal__2650"
                },
                {
                  "title": "Lam R.W. et al. CANMAT 2023 update on clinical guidelines for management of major depressive disorder in adults, таблица 7.2 «Summary Recommendations for Adjunctive Medications» и раздел Q.7.g. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Обычная сыпь: от 8 до 12% принимающих (на плацебо от 5 до 6%), обычно в первые 8 недель; редко синдром Стивенса-Джонсона и токсический эпидермальный некролиз (тяжёлое, иногда смертельное поражение кожи): у взрослых примерно от 0,08 до 0,3%. Риск выше при быстром повышении дозы и вместе с вальпроатом.",
              "sources": [
                {
                  "title": "Справочник Видаль: Ламиктал (ламотриджин), инструкция (РУ ЛП-№(000831)-(РГ-RU), бессрочно).",
                  "url": "https://www.vidal.ru/drugs/lamictal__2650"
                },
                {
                  "title": "Lamictal (lamotrigine), инструкция по применению, одобренная FDA, в том числе предупреждение в рамке о серьёзной сыпи. GlaxoSmithKline, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d7e3572d-56fe-4727-2bb4-013ccca22678"
                },
                {
                  "title": "Lam R.W. et al. CANMAT 2023 update on clinical guidelines for management of major depressive disorder in adults, таблица 7.2 «Summary Recommendations for Adjunctive Medications» и раздел Q.7.g. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                }
              ],
              "more": true
            },
            {
              "label": "В России",
              "text": "Зарегистрирован: Ламиктал, Ламотриджин Канон, Сейзар и др.",
              "sources": [
                {
                  "title": "Справочник Видаль: Ламиктал (ламотриджин), инструкция (РУ ЛП-№(000831)-(РГ-RU), бессрочно).",
                  "url": "https://www.vidal.ru/drugs/lamictal__2650"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/lamictal__2650",
            "text": "Полная инструкция: vidal.ru"
          },
          "aside": true
        },
        {
          "id": "valproate",
          "label": "Вальпроевая кислота",
          "note": "Депакин (Хроно, Хроносфера, Энтерик 300), Конвулекс, Энкорат Хроно",
          "facts": [
            {
              "label": "Что это",
              "text": "Противоэпилептический препарат, который при биполярном расстройстве служит нормотимиком (стабилизатором настроения).",
              "sources": [
                {
                  "title": "Справочник Видаль: Депакин Хроно (вальпроат натрия и вальпроевая кислота), таблетки пролонгированного действия, разделы «Показания», «Режим дозирования», «Противопоказания», «Применение при беременности», «Особые указания» (ЛП-№(004312)-(РГ-RU) от 16.01.24).",
                  "url": "https://www.vidal.ru/drugs/depakine_chrono__227"
                },
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Биполярное аффективное расстройство», ID 675, утверждены в 2021 году (копия текста на legalacts.ru).",
                  "url": "https://legalacts.ru/doc/klinicheskie-rekomendatsii-bipoljarnoe-affektivnoe-rasstroistvo-utv-minzdravom-rossii/"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "Депакин Хроно: эпилепсия у взрослых и детей старше 6 лет; лечение и профилактика биполярного расстройства у взрослых.",
              "sources": [
                {
                  "title": "Справочник Видаль: Депакин Хроно (вальпроат натрия и вальпроевая кислота), таблетки пролонгированного действия, разделы «Показания», «Режим дозирования», «Противопоказания», «Применение при беременности», «Особые указания» (ЛП-№(004312)-(РГ-RU) от 16.01.24).",
                  "url": "https://www.vidal.ru/drugs/depakine_chrono__227"
                }
              ]
            },
            {
              "label": "Когда выбирают",
              "text": "Биполярное расстройство (РОП): при мании одно из средств первого выбора наряду с литием и атипичными антипсихотиками (уровень A); при раздражительной мании и при преобладании маниакальных фаз ему отдают предпочтение, в том числе перед литием. Депрессия (РОП): при депрессии со смешанными чертами (с признаками подъёма), если не помог атипичный антипсихотик, переходят на нормотимик или добавляют его (уровень B). В CANMAT 2023 по депрессии не упоминается.",
              "sources": [
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Биполярное аффективное расстройство», ID 675, утверждены в 2021 году (копия текста на legalacts.ru).",
                  "url": "https://legalacts.ru/doc/klinicheskie-rekomendatsii-bipoljarnoe-affektivnoe-rasstroistvo-utv-minzdravom-rossii/"
                },
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Депрессивный эпизод, рекуррентное депрессивное расстройство», редакция 2021 года (ID 301_2 в рубрикаторе Минздрава, в архиве с 26.08.2024), PDF разработчика.",
                  "url": "https://psychiatr.ru/download/6271?view=1"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Депакин Хроно 1 или 2 раза в день; дозу повышают как можно быстрее до минимальной действующей. При дозе выше 45 мг на кг веса нужно тщательное наблюдение врача.",
              "sources": [
                {
                  "title": "Справочник Видаль: Депакин Хроно (вальпроат натрия и вальпроевая кислота), таблетки пролонгированного действия, разделы «Показания», «Режим дозирования», «Противопоказания», «Применение при беременности», «Особые указания» (ЛП-№(004312)-(РГ-RU) от 16.01.24).",
                  "url": "https://www.vidal.ru/drugs/depakine_chrono__227"
                }
              ]
            },
            {
              "label": "Противопоказания",
              "text": "Гепатит и тяжёлые болезни печени (в том числе смертельные у кровных родственников); тяжёлые болезни поджелудочной железы; порфирия; наследственные болезни митохондрий (POLG) и цикла мочевины; вместе с мефлохином и зверобоем; беременность при биполярном расстройстве; женщины, способные забеременеть, если не выполнены условия программы предотвращения беременности; дети до 6 лет (для этой формы).",
              "sources": [
                {
                  "title": "Справочник Видаль: Депакин Хроно (вальпроат натрия и вальпроевая кислота), таблетки пролонгированного действия, разделы «Показания», «Режим дозирования», «Противопоказания», «Применение при беременности», «Особые указания» (ЛП-№(004312)-(РГ-RU) от 16.01.24).",
                  "url": "https://www.vidal.ru/drugs/depakine_chrono__227"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "При мании начинают с 750 мг в сутки (или 20 мг на кг веса), обычно от 1000 до 2000 мг в сутки.",
              "sources": [
                {
                  "title": "Справочник Видаль: Депакин Хроно (вальпроат натрия и вальпроевая кислота), таблетки пролонгированного действия, разделы «Показания», «Режим дозирования», «Противопоказания», «Применение при беременности», «Особые указания» (ЛП-№(004312)-(РГ-RU) от 16.01.24).",
                  "url": "https://www.vidal.ru/drugs/depakine_chrono__227"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Главный риск для будущего ребёнка: пороки развития (нервной трубки, сердца, лица, конечностей), а у детей, которые были под действием вальпроата в утробе, задержка раннего развития встречается в случаях от 30 до 40%, IQ в среднем на величину от 7 до 10 пунктов ниже. Поэтому женщинам, способным забеременеть, его дают только по программе предотвращения беременности. Также может поражать печень и поджелудочную железу, часто прибавляют вес. Почти вдвое замедляет выведение ламотриджина, вместе с ним выше риск тяжёлых кожных реакций.",
              "sources": [
                {
                  "title": "Справочник Видаль: Депакин Хроно (вальпроат натрия и вальпроевая кислота), таблетки пролонгированного действия, разделы «Показания», «Режим дозирования», «Противопоказания», «Применение при беременности», «Особые указания» (ЛП-№(004312)-(РГ-RU) от 16.01.24).",
                  "url": "https://www.vidal.ru/drugs/depakine_chrono__227"
                },
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Биполярное аффективное расстройство», ID 675, утверждены в 2021 году (копия текста на legalacts.ru).",
                  "url": "https://legalacts.ru/doc/klinicheskie-rekomendatsii-bipoljarnoe-affektivnoe-rasstroistvo-utv-minzdravom-rossii/"
                }
              ],
              "more": true
            },
            {
              "label": "В России",
              "text": "По рецепту. В списки психотропных веществ и в перечень предметно-количественного учёта не входит.",
              "sources": [
                {
                  "title": "Справочник Видаль: Депакин Хроно (вальпроат натрия и вальпроевая кислота), таблетки пролонгированного действия, разделы «Показания», «Режим дозирования», «Противопоказания», «Применение при беременности», «Особые указания» (ЛП-№(004312)-(РГ-RU) от 16.01.24).",
                  "url": "https://www.vidal.ru/drugs/depakine_chrono__227"
                },
                {
                  "title": "Постановление Правительства РФ от 30.06.1998 № 681 о перечне наркотических средств, психотропных веществ и их прекурсоров, список III.",
                  "url": "https://base.garant.ru/12112176/"
                },
                {
                  "title": "Приказ Минздрава России от 01.09.2023 № 459н о перечне лекарственных средств, подлежащих предметно-количественному учёту, действует с 01.09.2024.",
                  "url": "http://publication.pravo.gov.ru/document/0001202310030013"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/depakine_chrono__227",
            "text": "Полная инструкция: vidal.ru"
          },
          "aside": true
        },
        {
          "id": "carbamazepine",
          "label": "Карбамазепин",
          "note": "Финлепсин, Финлепсин ретард, Тегретол ЦР, Карбамазепин",
          "facts": [
            {
              "label": "Что это",
              "text": "Противоэпилептический препарат, который в психиатрии используют как нормотимик (стабилизатор настроения).",
              "sources": [
                {
                  "title": "Справочник Видаль: Финлепсин (карбамазепин), таблетки 200 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(006154)-(РГ-RU) от 08.07.24).",
                  "url": "https://www.vidal.ru/drugs/finlepsin__894"
                },
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Биполярное аффективное расстройство», ID 675, утверждены в 2021 году (копия текста на legalacts.ru).",
                  "url": "https://legalacts.ru/doc/klinicheskie-rekomendatsii-bipoljarnoe-affektivnoe-rasstroistvo-utv-minzdravom-rossii/"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "Эпилепсия; невралгия тройничного и языкоглоточного нервов; боль при диабетической полинейропатии; алкогольная абстиненция; аффективные и шизоаффективные расстройства и психозы.",
              "sources": [
                {
                  "title": "Справочник Видаль: Финлепсин (карбамазепин), таблетки 200 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(006154)-(РГ-RU) от 08.07.24).",
                  "url": "https://www.vidal.ru/drugs/finlepsin__894"
                }
              ]
            },
            {
              "label": "Когда выбирают",
              "text": "Депрессия (РОП): добавка к антидепрессанту, если он не помог, от 400 до 800 мг (уровень B); для профилактики рецидивов, когда антидепрессанты и литий не переносятся, от 200 до 600 мг (уровень C, данных мало). Биполярное расстройство (РОП): при раздражительной мании (уровень A); при биполярной депрессии доказательства слабее, его оставляют тем, кто уже принимает его для профилактики. В CANMAT 2023 по депрессии не упоминается.",
              "sources": [
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Депрессивный эпизод, рекуррентное депрессивное расстройство», редакция 2021 года (ID 301_2 в рубрикаторе Минздрава, в архиве с 26.08.2024), PDF разработчика.",
                  "url": "https://psychiatr.ru/download/6271?view=1"
                },
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Биполярное аффективное расстройство», ID 675, утверждены в 2021 году (копия текста на legalacts.ru).",
                  "url": "https://legalacts.ru/doc/klinicheskie-rekomendatsii-bipoljarnoe-affektivnoe-rasstroistvo-utv-minzdravom-rossii/"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Внутрь во время или после еды, запивая. Дозу набирают постепенно; пропущенную дозу принимают сразу, но двойную не пьют.",
              "sources": [
                {
                  "title": "Справочник Видаль: Финлепсин (карбамазепин), таблетки 200 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(006154)-(РГ-RU) от 08.07.24).",
                  "url": "https://www.vidal.ru/drugs/finlepsin__894"
                }
              ]
            },
            {
              "label": "Противопоказания",
              "text": "Угнетение кроветворения (анемия, лейкопения); острая перемежающаяся порфирия; атриовентрикулярная блокада (нарушение проводимости сердца); одновременно с литием и ингибиторами МАО; непереносимость трициклических антидепрессантов.",
              "sources": [
                {
                  "title": "Справочник Видаль: Финлепсин (карбамазепин), таблетки 200 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(006154)-(РГ-RU) от 08.07.24).",
                  "url": "https://www.vidal.ru/drugs/finlepsin__894"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "Для лечения и профилактики психозов от 200 до 400 мг в сутки, при необходимости до 800 мг (по 400 мг 2 раза). При эпилепсии у взрослых поддерживающая доза от 800 до 1200 мг.",
              "sources": [
                {
                  "title": "Справочник Видаль: Финлепсин (карбамазепин), таблетки 200 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(006154)-(РГ-RU) от 08.07.24).",
                  "url": "https://www.vidal.ru/drugs/finlepsin__894"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Тяжёлые кожные реакции (синдромы Стивенса-Джонсона и Лайелла): по американской инструкции в некоторых странах Азии риск примерно в 10 раз выше, поэтому людей с азиатскими корнями до лечения проверяют на ген HLA-B*1502; при положительном результате карбамазепин обычно не назначают. При беременности повышает риск пороков развития, в том числе расщепления позвоночника. Может угнетать кроветворение. Ускоряет распад многих лекарств: ослабляет противозачаточные таблетки, а РОП не советует сочетать его с оланзапином и рисперидоном.",
              "sources": [
                {
                  "title": "Справочник Видаль: Финлепсин (карбамазепин), таблетки 200 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(006154)-(РГ-RU) от 08.07.24).",
                  "url": "https://www.vidal.ru/drugs/finlepsin__894"
                },
                {
                  "title": "Tegretol, Tegretol-XR (carbamazepine), инструкция по применению, одобренная FDA: предупреждение в рамке о тяжёлых кожных реакциях и аллеле HLA-B*1502. Novartis, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8d409411-aa9f-4f3a-a52c-fbcb0c3ec053"
                },
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Депрессивный эпизод, рекуррентное депрессивное расстройство», редакция 2021 года (ID 301_2 в рубрикаторе Минздрава, в архиве с 26.08.2024), PDF разработчика.",
                  "url": "https://psychiatr.ru/download/6271?view=1"
                }
              ],
              "more": true
            },
            {
              "label": "В России",
              "text": "По рецепту, входит в перечень жизненно необходимых и важнейших лекарств (ЖНВЛП). В списки психотропных веществ и предметно-количественного учёта не входит.",
              "sources": [
                {
                  "title": "Справочник Видаль: Финлепсин (карбамазепин), таблетки 200 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(006154)-(РГ-RU) от 08.07.24).",
                  "url": "https://www.vidal.ru/drugs/finlepsin__894"
                },
                {
                  "title": "Постановление Правительства РФ от 30.06.1998 № 681 о перечне наркотических средств, психотропных веществ и их прекурсоров, список III.",
                  "url": "https://base.garant.ru/12112176/"
                },
                {
                  "title": "Приказ Минздрава России от 01.09.2023 № 459н о перечне лекарственных средств, подлежащих предметно-количественному учёту, действует с 01.09.2024.",
                  "url": "http://publication.pravo.gov.ru/document/0001202310030013"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/finlepsin__894",
            "text": "Полная инструкция: vidal.ru"
          },
          "aside": true
        }
      ]
    },
    {
      "id": "anxio",
      "label": "Успокоительные (анксиолитики)",
      "title": "Успокоительные и противотревожные (анксиолитики)",
      "hint": "Быстро снимают тревогу и помогают уснуть, но депрессию не лечат.",
      "facts": [
        {
          "label": "Что это",
          "text": "Быстро снимают тревогу и помогают уснуть, но саму депрессию не лечат. Бензодиазепины вместе с антидепрессантом помогают лучше только в первые недели, NICE не советует назначать их надолго.",
          "sources": [
            {
              "title": "Ogawa Y. et al. Antidepressants plus benzodiazepines for adults with major depression. Cochrane Database of Systematic Reviews, 2019.",
              "url": "https://pubmed.ncbi.nlm.nih.gov/31158298/"
            },
            {
              "title": "NICE. Generalised anxiety disorder and panic disorder in adults: management (CG113), рекомендации 1.2.23, 1.2.24, 1.2.26, 1.2.28, 1.3.20, 1.3.25, 1.3.27, 1.3.28.",
              "url": "https://www.nice.org.uk/guidance/cg113"
            }
          ]
        }
      ],
      "aside": true,
      "children": [
        {
          "id": "hydroxyzine",
          "label": "Гидроксизин",
          "note": "Атаракс",
          "facts": [
            {
              "label": "Что это",
              "text": "Антигистаминный препарат от тревоги и для сна. Зависимости, как у феназепама, не вызывает."
            },
            {
              "label": "Показания по инструкции",
              "text": "Тревога у взрослых (симптоматическое лечение), успокоение перед операцией (премедикация), зуд аллергического происхождения.",
              "sources": [
                {
                  "title": "Справочник Видаль: Гидроксизин, инструкция (ЛП-№(007303) от 18.10.24).",
                  "url": "https://www.vidal.ru/drugs/hydroxyzine"
                }
              ]
            },
            {
              "label": "Противопоказания",
              "text": "Удлинение интервала QT на ЭКГ (нарушение ритма сердца) и приём лекарств, которые его удлиняют; закрытоугольная глаукома; доброкачественная гиперплазия предстательной железы; и другие, см. «Подробнее»."
            },
            {
              "label": "Чем платят",
              "text": "Риск нарушений ритма: взрослым не больше 100 мг в сутки, пожилым по возможности не назначать, нельзя с препаратами, удлиняющими QT. Российская инструкция прямо запрещает его вместе с циталопрамом и эсциталопрамом.",
              "sources": [
                {
                  "title": "EMA. New restrictions to minimise risks of effects on heart rhythm with hydroxyzine-containing medicines, 2015.",
                  "url": "https://www.ema.europa.eu/en/news/new-restrictions-minimise-risks-effects-heart-rhythm-hydroxyzine-containing-medicines"
                },
                {
                  "title": "Справочник Видаль: Гидроксизин, инструкция (ЛП-№(007303) от 18.10.24).",
                  "url": "https://www.vidal.ru/drugs/hydroxyzine"
                }
              ],
              "more": true
            },
            {
              "label": "Остальные противопоказания",
              "text": "порфирия; беременность, роды и кормление грудью; возраст до 3 лет.",
              "sources": [
                {
                  "title": "Справочник Видаль: Гидроксизин, инструкция (ЛП-№(007303) от 18.10.24).",
                  "url": "https://www.vidal.ru/drugs/hydroxyzine"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/hydroxyzine",
            "text": "Полная инструкция: vidal.ru"
          },
          "aside": true
        },
        {
          "id": "phenazepam",
          "label": "Феназепам",
          "note": "Бензодиазепин",
          "facts": [
            {
              "label": "Что это",
              "text": "Быстрое успокоительное. Его иногда добавляют, чтобы пережить недели, пока антидепрессант не начал действовать."
            },
            {
              "label": "Показания по инструкции",
              "text": "Невротические и неврозоподобные состояния (раздражительность, тревожность, напряжение, эмоциональная неустойчивость), навязчивости, бессонница, абстинентный синдром при алкоголизме и токсикомании, эпилепсия и эпилептические припадки; в неврологии мышечная скованность, тики, гиперкинезы (непроизвольные движения); премедикация перед наркозом.",
              "sources": [
                {
                  "title": "Справочник Видаль: Феназепам, инструкция.",
                  "url": "https://www.vidal.ru/drugs/phenazepam__21148"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "По инструкции курс обычно около двух недель, в отдельных случаях до двух месяцев, отменяют постепенно; главный риск в зависимости и тяжёлой отмене.",
              "sources": [
                {
                  "title": "Справочник Видаль: Феназепам, инструкция.",
                  "url": "https://www.vidal.ru/drugs/phenazepam__21148"
                }
              ]
            },
            {
              "label": "Противопоказания",
              "text": "Миастения (болезненная мышечная слабость); закрытоугольная глаукома; тяжёлая хроническая обструктивная болезнь лёгких и острая дыхательная недостаточность; и другие, см. «Подробнее»."
            },
            {
              "label": "Насколько помогает",
              "text": "Вместе с антидепрессантом лучше одного антидепрессанта только в первые недели, испытания старые. NICE при генерализованной тревоге допускает бензодиазепины только коротко, при панических атаках не советует.",
              "sources": [
                {
                  "title": "Ogawa Y. et al. Antidepressants plus benzodiazepines for adults with major depression. Cochrane Database of Systematic Reviews, 2019.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/31158298/"
                },
                {
                  "title": "NICE. Generalised anxiety disorder and panic disorder in adults: management (CG113), рекомендации 1.2.23, 1.2.24, 1.2.26, 1.2.28, 1.3.20, 1.3.25, 1.3.27, 1.3.28.",
                  "url": "https://www.nice.org.uk/guidance/cg113"
                }
              ],
              "more": true
            },
            {
              "label": "Опасные сочетания",
              "text": "Вместе с алкоголем и опиоидами опасно угнетает дыхание.",
              "sources": [
                {
                  "title": "FDA. FDA requiring Boxed Warning updated to improve safe use of benzodiazepine drug class, 2020.",
                  "url": "https://www.fda.gov/drugs/drug-safety-and-availability/fda-requiring-boxed-warning-updated-improve-safe-use-benzodiazepine-drug-class"
                }
              ],
              "more": true
            },
            {
              "label": "В России",
              "text": "Под предметно-количественным учётом.",
              "sources": [
                {
                  "title": "Приказ Минздрава России от 01.09.2023 № 459н о перечне лекарственных средств, подлежащих предметно-количественному учёту, действует с 01.09.2024.",
                  "url": "http://publication.pravo.gov.ru/document/0001202310030013"
                }
              ],
              "more": true
            },
            {
              "label": "Остальные противопоказания",
              "text": "острое отравление алкоголем, опиоидными обезболивающими или снотворными; тяжёлая депрессия; первый триместр беременности, кормление грудью и возраст до 18 лет.",
              "sources": [
                {
                  "title": "Справочник Видаль: Феназепам, инструкция.",
                  "url": "https://www.vidal.ru/drugs/phenazepam__21148"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/phenazepam__21148",
            "text": "Полная инструкция: vidal.ru"
          },
          "aside": true
        },
        {
          "id": "alprazolam",
          "label": "Алпразолам",
          "note": "Алпразолам, Золомакс; Ксанакс и Хелекс сняты с регистрации",
          "facts": [
            {
              "label": "Что это",
              "text": "Транквилизатор (анксиолитик) из группы бензодиазепинов. Действует недолго, поэтому его пьют не реже 3 раз в день.",
              "sources": [
                {
                  "title": "Справочник Видаль: Алпразолам, таблетки 0,25 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(007350)-(РГ-RU) от 23.10.24).",
                  "url": "https://www.vidal.ru/drugs/alprazolam__13181"
                },
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Генерализованное тревожное расстройство», ID 457, утверждены в 2021 году, раздел 3.2 «Психофармакотерапия» (копия текста на legalacts.ru; на cr.minzdrav.gov.ru версии 457_2 и 457_3).",
                  "url": "https://legalacts.ru/doc/klinicheskie-rekomendatsii-generalizovannoe-trevozhnoe-rasstroistvo-utv-minzdravom-rossii/"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "Тревожные состояния и неврозы с тревогой, напряжением, плохим сном; смешанные тревожно-депрессивные состояния; невротическая депрессия, в том числе на фоне болезней тела; паническое расстройство с фобиями и без них.",
              "sources": [
                {
                  "title": "Справочник Видаль: Алпразолам, таблетки 0,25 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(007350)-(РГ-RU) от 23.10.24).",
                  "url": "https://www.vidal.ru/drugs/alprazolam__13181"
                }
              ]
            },
            {
              "label": "Когда выбирают",
              "text": "Российские рекомендации по генерализованной тревоге допускают бензодиазепины коротким курсом в начале лечения, пока не подействует антидепрессант, обычно не дольше 4 недель (уровень B). NICE при генерализованной тревоге допускает их только как короткую меру в кризис, при панических атаках не советует. При депрессии вместе с антидепрессантом они помогают лишь первые 4 недели, дальше разницы нет (Cochrane).",
              "sources": [
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Генерализованное тревожное расстройство», ID 457, утверждены в 2021 году, раздел 3.2 «Психофармакотерапия» (копия текста на legalacts.ru; на cr.minzdrav.gov.ru версии 457_2 и 457_3).",
                  "url": "https://legalacts.ru/doc/klinicheskie-rekomendatsii-generalizovannoe-trevozhnoe-rasstroistvo-utv-minzdravom-rossii/"
                },
                {
                  "title": "NICE. Generalised anxiety disorder and panic disorder in adults: management (CG113), рекомендации 1.2.23, 1.2.24, 1.2.26, 1.2.28, 1.3.20, 1.3.25, 1.3.27, 1.3.28.",
                  "url": "https://www.nice.org.uk/guidance/cg113"
                },
                {
                  "title": "Ogawa Y. et al. Antidepressants plus benzodiazepines for adults with major depression. Cochrane Database of Systematic Reviews, 2019.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/31158298/"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Начинают с малой дозы и повышают постепенно, сначала вечернюю. Отменяют медленно: суточную дозу снижают не больше чем на 0,5 мг раз в 3 дня, иногда ещё медленнее.",
              "sources": [
                {
                  "title": "Справочник Видаль: Алпразолам, таблетки 0,25 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(007350)-(РГ-RU) от 23.10.24).",
                  "url": "https://www.vidal.ru/drugs/alprazolam__13181"
                }
              ]
            },
            {
              "label": "Противопоказания",
              "text": "Миастения (болезненная мышечная слабость); закрытоугольная глаукома; хронические болезни лёгких с дыхательной недостаточностью; тяжёлая депрессия; беременность и кормление грудью; возраст до 18 лет; острое отравление алкоголем, снотворными или опиоидами.",
              "sources": [
                {
                  "title": "Справочник Видаль: Алпразолам, таблетки 0,25 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(007350)-(РГ-RU) от 23.10.24).",
                  "url": "https://www.vidal.ru/drugs/alprazolam__13181"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "Начало от 0,25 до 0,5 мг 3 раза в день, при необходимости до 4,5 мг в сутки; пожилым начинают с 0,25 мг 2 или 3 раза в день. В российских рекомендациях по генерализованной тревоге от 0,5 до 2 мг в сутки.",
              "sources": [
                {
                  "title": "Справочник Видаль: Алпразолам, таблетки 0,25 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(007350)-(РГ-RU) от 23.10.24).",
                  "url": "https://www.vidal.ru/drugs/alprazolam__13181"
                },
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Генерализованное тревожное расстройство», ID 457, утверждены в 2021 году, раздел 3.2 «Психофармакотерапия» (копия текста на legalacts.ru; на cr.minzdrav.gov.ru версии 457_2 и 457_3).",
                  "url": "https://legalacts.ru/doc/klinicheskie-rekomendatsii-generalizovannoe-trevozhnoe-rasstroistvo-utv-minzdravom-rossii/"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Привыкание и зависимость. При резкой отмене синдром отмены, от бессонницы до рвоты, дрожи и судорог; чаще у тех, кто принимал его дольше, чем от 8 до 12 недель. Вместе с алкоголем и опиоидами опасно угнетает дыхание.",
              "sources": [
                {
                  "title": "Справочник Видаль: Алпразолам, таблетки 0,25 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(007350)-(РГ-RU) от 23.10.24).",
                  "url": "https://www.vidal.ru/drugs/alprazolam__13181"
                },
                {
                  "title": "FDA. FDA requiring Boxed Warning updated to improve safe use of benzodiazepine drug class, 2020.",
                  "url": "https://www.fda.gov/drugs/drug-safety-and-availability/fda-requiring-boxed-warning-updated-improve-safe-use-benzodiazepine-drug-class"
                }
              ],
              "more": true
            },
            {
              "label": "В России",
              "text": "По рецепту. Психотропное вещество списка III, на предметно-количественном учёте.",
              "sources": [
                {
                  "title": "Постановление Правительства РФ от 30.06.1998 № 681 о перечне наркотических средств, психотропных веществ и их прекурсоров, список III.",
                  "url": "https://base.garant.ru/12112176/"
                },
                {
                  "title": "Приказ Минздрава России от 01.09.2023 № 459н о перечне лекарственных средств, подлежащих предметно-количественному учёту, действует с 01.09.2024.",
                  "url": "http://publication.pravo.gov.ru/document/0001202310030013"
                },
                {
                  "title": "Справочник Видаль: Алпразолам, таблетки 0,25 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(007350)-(РГ-RU) от 23.10.24).",
                  "url": "https://www.vidal.ru/drugs/alprazolam__13181"
                },
                {
                  "title": "Справочник Видаль: препараты с действующим веществом алпразолам (Ксанакс, Хелекс, Неурол: регистрация отменена; Золомакс, Алпразолам: действующие), октябрь 2026.",
                  "url": "https://www.vidal.ru/drugs/molecule-in/37"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/alprazolam__13181",
            "text": "Полная инструкция: vidal.ru"
          },
          "aside": true
        },
        {
          "id": "diazepam",
          "label": "Диазепам",
          "note": "Сибазон, Релиум; Седуксен, Реланиум и Апаурин сняты с регистрации",
          "facts": [
            {
              "label": "Что это",
              "text": "Транквилизатор из группы бензодиазепинов с долгим действием: кроме тревоги, снимает мышечные спазмы. Из организма выводится медленно и может накапливаться.",
              "sources": [
                {
                  "title": "Справочник Видаль: Сибазон (диазепам), таблетки 5 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(008774)-(РГ-RU) от 10.02.25).",
                  "url": "https://www.vidal.ru/drugs/sibazon__9138"
                },
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Биполярное аффективное расстройство», ID 675, утверждены в 2021 году (копия текста на legalacts.ru).",
                  "url": "https://legalacts.ru/doc/klinicheskie-rekomendatsii-bipoljarnoe-affektivnoe-rasstroistvo-utv-minzdravom-rossii/"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "Острые тревожно-фобические и тревожно-депрессивные состояния; психомоторное возбуждение; алкогольные психозы с абстиненцией; мышечные спазмы, в том числе при травмах позвоночника и радикулите; подготовка к операциям; зудящие дерматозы.",
              "sources": [
                {
                  "title": "Справочник Видаль: Сибазон (диазепам), таблетки 5 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(008774)-(РГ-RU) от 10.02.25).",
                  "url": "https://www.vidal.ru/drugs/sibazon__9138"
                }
              ]
            },
            {
              "label": "Когда выбирают",
              "text": "В российских рекомендациях по генерализованной тревоге среди названных препаратов его нет; для бензодиазепинов там общее правило: коротко, не дольше 4 недель. В рекомендациях по биполярному расстройству диазепам в уколах добавляют при сильном возбуждении в мании, если не помогли нормотимик с антипсихотиком (уровень C), но предпочитают короткодействующие бензодиазепины. NICE при генерализованной тревоге допускает бензодиазепины только как короткую меру в кризис.",
              "sources": [
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Генерализованное тревожное расстройство», ID 457, утверждены в 2021 году, раздел 3.2 «Психофармакотерапия» (копия текста на legalacts.ru; на cr.minzdrav.gov.ru версии 457_2 и 457_3).",
                  "url": "https://legalacts.ru/doc/klinicheskie-rekomendatsii-generalizovannoe-trevozhnoe-rasstroistvo-utv-minzdravom-rossii/"
                },
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Биполярное аффективное расстройство», ID 675, утверждены в 2021 году (копия текста на legalacts.ru).",
                  "url": "https://legalacts.ru/doc/klinicheskie-rekomendatsii-bipoljarnoe-affektivnoe-rasstroistvo-utv-minzdravom-rossii/"
                },
                {
                  "title": "NICE. Generalised anxiety disorder and panic disorder in adults: management (CG113), рекомендации 1.2.23, 1.2.24, 1.2.26, 1.2.28, 1.3.20, 1.3.25, 1.3.27, 1.3.28.",
                  "url": "https://www.nice.org.uk/guidance/cg113"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Внутрь 2 или 3 раза в день. Без особых причин долго не принимают; бросать резко нельзя.",
              "sources": [
                {
                  "title": "Справочник Видаль: Сибазон (диазепам), таблетки 5 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(008774)-(РГ-RU) от 10.02.25).",
                  "url": "https://www.vidal.ru/drugs/sibazon__9138"
                }
              ]
            },
            {
              "label": "Противопоказания",
              "text": "Миастения; закрытоугольная глаукома; тяжёлая хроническая обструктивная болезнь лёгких и дыхательная недостаточность; тяжёлая печёночная недостаточность; аденома простаты; кома, шок, острое отравление алкоголем или снотворными; возраст до 6 лет.",
              "sources": [
                {
                  "title": "Справочник Видаль: Сибазон (диазепам), таблетки 5 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(008774)-(РГ-RU) от 10.02.25).",
                  "url": "https://www.vidal.ru/drugs/sibazon__9138"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "Взрослым от 5 до 15 мг в сутки; в стационаре до 30 мг, при обострении до 60 мг.",
              "sources": [
                {
                  "title": "Справочник Видаль: Сибазон (диазепам), таблетки 5 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(008774)-(РГ-RU) от 10.02.25).",
                  "url": "https://www.vidal.ru/drugs/sibazon__9138"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Зависимость: риск растёт при дозах выше 60 мг в сутки, долгом лечении и злоупотреблении алкоголем в прошлом. При резкой отмене судороги и дрожь. Может угнетать дыхание, особенно вместе с алкоголем и опиоидами; при тревоге с депрессией одним диазепамом не лечат.",
              "sources": [
                {
                  "title": "Справочник Видаль: Сибазон (диазепам), таблетки 5 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(008774)-(РГ-RU) от 10.02.25).",
                  "url": "https://www.vidal.ru/drugs/sibazon__9138"
                },
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Биполярное аффективное расстройство», ID 675, утверждены в 2021 году (копия текста на legalacts.ru).",
                  "url": "https://legalacts.ru/doc/klinicheskie-rekomendatsii-bipoljarnoe-affektivnoe-rasstroistvo-utv-minzdravom-rossii/"
                },
                {
                  "title": "FDA. FDA requiring Boxed Warning updated to improve safe use of benzodiazepine drug class, 2020.",
                  "url": "https://www.fda.gov/drugs/drug-safety-and-availability/fda-requiring-boxed-warning-updated-improve-safe-use-benzodiazepine-drug-class"
                }
              ],
              "more": true
            },
            {
              "label": "В России",
              "text": "По рецепту. Психотропное вещество списка III, на предметно-количественном учёте.",
              "sources": [
                {
                  "title": "Постановление Правительства РФ от 30.06.1998 № 681 о перечне наркотических средств, психотропных веществ и их прекурсоров, список III.",
                  "url": "https://base.garant.ru/12112176/"
                },
                {
                  "title": "Приказ Минздрава России от 01.09.2023 № 459н о перечне лекарственных средств, подлежащих предметно-количественному учёту, действует с 01.09.2024.",
                  "url": "http://publication.pravo.gov.ru/document/0001202310030013"
                },
                {
                  "title": "Справочник Видаль: Сибазон (диазепам), таблетки 5 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(008774)-(РГ-RU) от 10.02.25).",
                  "url": "https://www.vidal.ru/drugs/sibazon__9138"
                },
                {
                  "title": "Справочник Видаль: препараты с действующим веществом диазепам (Седуксен, Апаурин, Реланиум: регистрация отменена; Сибазон, Релиум: действующие), октябрь 2026.",
                  "url": "https://www.vidal.ru/drugs/molecule-in/309"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/sibazon__9138",
            "text": "Полная инструкция: vidal.ru"
          },
          "aside": true
        },
        {
          "id": "tofisopam",
          "label": "Тофизопам",
          "note": "Грандаксин, Грандапам, Грандолика, Тофизопам",
          "facts": [
            {
              "label": "Что это",
              "text": "Дневной транквилизатор, родственник бензодиазепинов: по инструкции обычно не снижает активность и бодрость.",
              "sources": [
                {
                  "title": "Справочник Видаль: Грандаксин (тофизопам), таблетки 50 мг, разделы «Показания», «Режим дозирования», «Противопоказания» (ЛП-№(000172)-(РГ-RU) от 24.03.21).",
                  "url": "https://www.vidal.ru/drugs/grandaxin"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "У взрослых: невротические и психосоматические расстройства с напряжением, тревогой, вегетативными нарушениями, апатией, усталостью и подавленным настроением; алкогольный абстинентный синдром.",
              "sources": [
                {
                  "title": "Справочник Видаль: Грандаксин (тофизопам), таблетки 50 мг, разделы «Показания», «Режим дозирования», «Противопоказания» (ЛП-№(000172)-(РГ-RU) от 24.03.21).",
                  "url": "https://www.vidal.ru/drugs/grandaxin"
                }
              ]
            },
            {
              "label": "Когда выбирают",
              "text": "В российских рекомендациях по депрессии и по генерализованной тревоге, в NICE и CANMAT не упоминается. Доказательств мало: в небольшом пилотном испытании 2024 года (66 человек, 2 недели) он снимал тревогу лучше плацебо и не хуже диазепама. Одним тофизопамом депрессию не лечат; авторы получали гонорар от производителя Грандаксина.",
              "sources": [
                {
                  "title": "Kokoszka A. A Comparison of the Anxiolytic Properties of Tofisopam and Diazepam: A Double-Blind, Randomized, Crossover, Placebo-Controlled Pilot Study. Pharmaceuticals, 2024.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/38276013/"
                },
                {
                  "title": "Справочник Видаль: Грандаксин (тофизопам), таблетки 50 мг, разделы «Показания», «Режим дозирования», «Противопоказания» (ЛП-№(000172)-(РГ-RU) от 24.03.21).",
                  "url": "https://www.vidal.ru/drugs/grandaxin"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Можно сразу начинать с нужной дозы, без постепенного повышения; при нерегулярном приёме пьют 1 или 2 таблетки.",
              "sources": [
                {
                  "title": "Справочник Видаль: Грандаксин (тофизопам), таблетки 50 мг, разделы «Показания», «Режим дозирования», «Противопоказания» (ЛП-№(000172)-(РГ-RU) от 24.03.21).",
                  "url": "https://www.vidal.ru/drugs/grandaxin"
                }
              ]
            },
            {
              "label": "Противопоказания",
              "text": "Сильное возбуждение, агрессивность или тяжёлая депрессия; декомпенсированная дыхательная недостаточность; апноэ сна; кома; одновременно с такролимусом, сиролимусом или циклоспорином; беременность; возраст до 18 лет.",
              "sources": [
                {
                  "title": "Справочник Видаль: Грандаксин (тофизопам), таблетки 50 мг, разделы «Показания», «Режим дозирования», «Противопоказания» (ЛП-№(000172)-(РГ-RU) от 24.03.21).",
                  "url": "https://www.vidal.ru/drugs/grandaxin"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "По 1 или 2 таблетки (50 или 100 мг) от 1 до 3 раз в день, от 50 до 300 мг в сутки; больше 300 мг не принимают.",
              "sources": [
                {
                  "title": "Справочник Видаль: Грандаксин (тофизопам), таблетки 50 мг, разделы «Показания», «Режим дозирования», «Противопоказания» (ЛП-№(000172)-(РГ-RU) от 24.03.21).",
                  "url": "https://www.vidal.ru/drugs/grandaxin"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Усиливает действие алкоголя, снотворных и других успокоительных. При хроническом психозе, фобиях и навязчивостях может растормозить и повысить риск суицидальной попытки; при выраженной депрессии противопоказан. При долгом приёме больших доз возможна зависимость, поэтому курс советуют держать в пределах от 4 до 12 недель вместе с постепенной отменой.",
              "sources": [
                {
                  "title": "Справочник Видаль: Грандаксин (тофизопам), таблетки 50 мг, разделы «Показания», «Режим дозирования», «Противопоказания» (ЛП-№(000172)-(РГ-RU) от 24.03.21).",
                  "url": "https://www.vidal.ru/drugs/grandaxin"
                },
                {
                  "title": "Справочник Видаль: тофизопам, описание действующего вещества, раздел «Особые указания».",
                  "url": "https://www.vidal.ru/drugs/molecule/1060"
                }
              ],
              "more": true
            },
            {
              "label": "В России",
              "text": "По рецепту. В список психотропных веществ (ПП 681) и в перечень предметно-количественного учёта (приказ 459н) не входит.",
              "sources": [
                {
                  "title": "Справочник Видаль: Грандаксин (тофизопам), таблетки 50 мг, разделы «Показания», «Режим дозирования», «Противопоказания» (ЛП-№(000172)-(РГ-RU) от 24.03.21).",
                  "url": "https://www.vidal.ru/drugs/grandaxin"
                },
                {
                  "title": "Постановление Правительства РФ от 30.06.1998 № 681 о перечне наркотических средств, психотропных веществ и их прекурсоров, список III.",
                  "url": "https://base.garant.ru/12112176/"
                },
                {
                  "title": "Приказ Минздрава России от 01.09.2023 № 459н о перечне лекарственных средств, подлежащих предметно-количественному учёту, действует с 01.09.2024.",
                  "url": "http://publication.pravo.gov.ru/document/0001202310030013"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/grandaxin",
            "text": "Полная инструкция: vidal.ru"
          },
          "aside": true
        },
        {
          "id": "etifoxine",
          "label": "Этифоксин",
          "note": "Стрезам, Анкзилера",
          "facts": [
            {
              "label": "Что это",
              "text": "Противотревожное средство (анксиолитик), не бензодиазепин. По российским рекомендациям слабее основных препаратов, но не вызывает зависимости.",
              "sources": [
                {
                  "title": "Справочник Видаль: Стрезам (этифоксин), капсулы 50 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(009784)-(РГ-RU) от 15.04.25).",
                  "url": "https://www.vidal.ru/drugs/stresam__18291"
                },
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Генерализованное тревожное расстройство», ID 457, утверждены в 2021 году, раздел 3.2 «Психофармакотерапия» (копия текста на legalacts.ru; на cr.minzdrav.gov.ru версии 457_2 и 457_3).",
                  "url": "https://legalacts.ru/doc/klinicheskie-rekomendatsii-generalizovannoe-trevozhnoe-rasstroistvo-utv-minzdravom-rossii/"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "Тревога и связанные с ней психосоматические расстройства.",
              "sources": [
                {
                  "title": "Справочник Видаль: Стрезам (этифоксин), капсулы 50 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(009784)-(РГ-RU) от 15.04.25).",
                  "url": "https://www.vidal.ru/drugs/stresam__18291"
                }
              ]
            },
            {
              "label": "Когда выбирают",
              "text": "Российские рекомендации по генерализованной тревоге: когда не помогли другие лекарства (уровень C); преимущество перед бензодиазепинами в отсутствии зависимости и возможности долгого приёма. В NICE и CANMAT не упоминается.",
              "sources": [
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Генерализованное тревожное расстройство», ID 457, утверждены в 2021 году, раздел 3.2 «Психофармакотерапия» (копия текста на legalacts.ru; на cr.minzdrav.gov.ru версии 457_2 и 457_3).",
                  "url": "https://legalacts.ru/doc/klinicheskie-rekomendatsii-generalizovannoe-trevozhnoe-rasstroistvo-utv-minzdravom-rossii/"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Внутрь, запивая водой; курс обычно от нескольких дней до 6 недель. Пропущенную дозу не удваивают.",
              "sources": [
                {
                  "title": "Справочник Видаль: Стрезам (этифоксин), капсулы 50 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(009784)-(РГ-RU) от 15.04.25).",
                  "url": "https://www.vidal.ru/drugs/stresam__18291"
                }
              ]
            },
            {
              "label": "Противопоказания",
              "text": "Шок; тяжёлая печёночная или почечная недостаточность; миастения; гепатит или тяжёлая кожная реакция на этифоксин в прошлом; непереносимость лактозы; возраст до 18 лет.",
              "sources": [
                {
                  "title": "Справочник Видаль: Стрезам (этифоксин), капсулы 50 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(009784)-(РГ-RU) от 15.04.25).",
                  "url": "https://www.vidal.ru/drugs/stresam__18291"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "По 50 мг 3 раза в день или по 100 мг 2 раза в день, от 150 до 200 мг в сутки.",
              "sources": [
                {
                  "title": "Справочник Видаль: Стрезам (этифоксин), капсулы 50 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(009784)-(РГ-RU) от 15.04.25).",
                  "url": "https://www.vidal.ru/drugs/stresam__18291"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Очень редко тяжёлые кожные реакции (DRESS-синдром, синдром Стивенса-Джонсона) и гепатит; после них препарат больше никогда не принимают. Возможна сонливость, поэтому за руль во время лечения лучше не садиться.",
              "sources": [
                {
                  "title": "Справочник Видаль: Стрезам (этифоксин), капсулы 50 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(009784)-(РГ-RU) от 15.04.25).",
                  "url": "https://www.vidal.ru/drugs/stresam__18291"
                }
              ],
              "more": true
            },
            {
              "label": "В России",
              "text": "По рецепту. В списки психотропных веществ и в перечень предметно-количественного учёта не входит.",
              "sources": [
                {
                  "title": "Справочник Видаль: Стрезам (этифоксин), капсулы 50 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(009784)-(РГ-RU) от 15.04.25).",
                  "url": "https://www.vidal.ru/drugs/stresam__18291"
                },
                {
                  "title": "Постановление Правительства РФ от 30.06.1998 № 681 о перечне наркотических средств, психотропных веществ и их прекурсоров, список III.",
                  "url": "https://base.garant.ru/12112176/"
                },
                {
                  "title": "Приказ Минздрава России от 01.09.2023 № 459н о перечне лекарственных средств, подлежащих предметно-количественному учёту, действует с 01.09.2024.",
                  "url": "http://publication.pravo.gov.ru/document/0001202310030013"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/stresam__18291",
            "text": "Полная инструкция: vidal.ru"
          },
          "aside": true
        },
        {
          "id": "pregabalin",
          "label": "Прегабалин",
          "note": "Лирика и дженерики",
          "facts": [
            {
              "label": "Что это",
              "text": "Противосудорожный препарат, который также лечит генерализованную тревогу и нейропатическую боль. Не бензодиазепин, действует уже в первую неделю.",
              "sources": [
                {
                  "title": "Справочник Видаль: Лирика (прегабалин), капсулы, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(004450)-(РГ-RU) от 30.01.24).",
                  "url": "https://www.vidal.ru/drugs/lyrica__9474"
                },
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Генерализованное тревожное расстройство», ID 457, утверждены в 2021 году, раздел 3.2 «Психофармакотерапия» (копия текста на legalacts.ru; на cr.minzdrav.gov.ru версии 457_2 и 457_3).",
                  "url": "https://legalacts.ru/doc/klinicheskie-rekomendatsii-generalizovannoe-trevozhnoe-rasstroistvo-utv-minzdravom-rossii/"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "У взрослых: нейропатическая боль; добавка при парциальных эпилептических приступах; генерализованное тревожное расстройство; фибромиалгия.",
              "sources": [
                {
                  "title": "Справочник Видаль: Лирика (прегабалин), капсулы, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(004450)-(РГ-RU) от 30.01.24).",
                  "url": "https://www.vidal.ru/drugs/lyrica__9474"
                }
              ]
            },
            {
              "label": "Когда выбирают",
              "text": "Российские рекомендации по генерализованной тревоге ставят его в первую линию наряду с СИОЗС, венлафаксином и дулоксетином (уровень A), особенно когда тревога проявляется телесными симптомами (уровень C); при неудаче его добавляют к антидепрессанту. NICE предлагает его, если человек не переносит СИОЗС и СИОЗСН. Людям с зависимостями в прошлом назначают осторожно.",
              "sources": [
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Генерализованное тревожное расстройство», ID 457, утверждены в 2021 году, раздел 3.2 «Психофармакотерапия» (копия текста на legalacts.ru; на cr.minzdrav.gov.ru версии 457_2 и 457_3).",
                  "url": "https://legalacts.ru/doc/klinicheskie-rekomendatsii-generalizovannoe-trevozhnoe-rasstroistvo-utv-minzdravom-rossii/"
                },
                {
                  "title": "NICE. Generalised anxiety disorder and panic disorder in adults: management (CG113), рекомендации 1.2.25 (прегабалин), 1.2.26 и 1.3.20 (бензодиазепины).",
                  "url": "https://www.nice.org.uk/guidance/cg113/chapter/Recommendations"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "В 2 или 3 приёма в день. Дозу повышают не чаще раза в неделю, нужность лечения регулярно пересматривают; отменяют постепенно, не быстрее чем за неделю.",
              "sources": [
                {
                  "title": "Справочник Видаль: Лирика (прегабалин), капсулы, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(004450)-(РГ-RU) от 30.01.24).",
                  "url": "https://www.vidal.ru/drugs/lyrica__9474"
                }
              ]
            },
            {
              "label": "Противопоказания",
              "text": "Аллергия на прегабалин; возраст до 17 лет включительно. Осторожно при почечной и сердечной недостаточности, вместе с опиоидами и при зависимостях в прошлом.",
              "sources": [
                {
                  "title": "Справочник Видаль: Лирика (прегабалин), капсулы, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(004450)-(РГ-RU) от 30.01.24).",
                  "url": "https://www.vidal.ru/drugs/lyrica__9474"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "При генерализованной тревоге начинают со 150 мг в сутки, через неделю можно 300 мг, затем 450 мг и максимум 600 мг. Российские рекомендации: от 150 до 600 мг. При слабой работе почек дозу снижают.",
              "sources": [
                {
                  "title": "Справочник Видаль: Лирика (прегабалин), капсулы, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(004450)-(РГ-RU) от 30.01.24).",
                  "url": "https://www.vidal.ru/drugs/lyrica__9474"
                },
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Генерализованное тревожное расстройство», ID 457, утверждены в 2021 году, раздел 3.2 «Психофармакотерапия» (копия текста на legalacts.ru; на cr.minzdrav.gov.ru версии 457_2 и 457_3).",
                  "url": "https://legalacts.ru/doc/klinicheskie-rekomendatsii-generalizovannoe-trevozhnoe-rasstroistvo-utv-minzdravom-rossii/"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Описаны злоупотребление и зависимость; при отмене бывает синдром отмены, тем тяжелее, чем выше доза. Головокружение и сонливость повышают риск падений у пожилых; бывает прибавка веса. В Великобритании с 2019 года это контролируемое вещество. Вместе с опиоидами, алкоголем и другими успокоительными может угнетать дыхание; описаны кома и смерть.",
              "sources": [
                {
                  "title": "Справочник Видаль: Лирика (прегабалин), капсулы, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(004450)-(РГ-RU) от 30.01.24).",
                  "url": "https://www.vidal.ru/drugs/lyrica__9474"
                },
                {
                  "title": "NICE. Generalised anxiety disorder and panic disorder in adults: management (CG113), рекомендации 1.2.25 (прегабалин), 1.2.26 и 1.3.20 (бензодиазепины).",
                  "url": "https://www.nice.org.uk/guidance/cg113/chapter/Recommendations"
                }
              ],
              "more": true
            },
            {
              "label": "В России",
              "text": "По рецепту. Сильнодействующее вещество (ПП 964), на предметно-количественном учёте.",
              "sources": [
                {
                  "title": "Постановление Правительства РФ от 29.12.2007 № 964 о списках сильнодействующих и ядовитых веществ для целей статьи 234 УК РФ, список сильнодействующих веществ.",
                  "url": "https://rulaws.ru/goverment/Postanovlenie-Pravitelstva-RF-ot-29.12.2007-N-964/"
                },
                {
                  "title": "Приказ Минздрава России от 01.09.2023 № 459н о перечне лекарственных средств, подлежащих предметно-количественному учёту, действует с 01.09.2024.",
                  "url": "http://publication.pravo.gov.ru/document/0001202310030013"
                },
                {
                  "title": "Справочник Видаль: Лирика (прегабалин), капсулы, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(004450)-(РГ-RU) от 30.01.24).",
                  "url": "https://www.vidal.ru/drugs/lyrica__9474"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/lyrica__9474",
            "text": "Полная инструкция: vidal.ru"
          },
          "aside": true
        },
        {
          "id": "buspirone",
          "label": "Буспирон",
          "note": "Спитомин, Веспирейт",
          "facts": [
            {
              "label": "Что это",
              "text": "Противотревожное средство (анксиолитик), не бензодиазепин: частично стимулирует серотониновые рецепторы 5-HT1A. Действует не сразу, а через 1 или 2 недели.",
              "sources": [
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Депрессивный эпизод, рекуррентное депрессивное расстройство», редакция 2021 года (ID 301_2 в рубрикаторе Минздрава, в архиве с 26.08.2024), PDF разработчика.",
                  "url": "https://psychiatr.ru/download/6271?view=1"
                },
                {
                  "title": "Справочник Видаль: Спитомин (буспирон), таблетки 5 и 10 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(004548)-(РГ-RU) от 08.02.24).",
                  "url": "https://www.vidal.ru/drugs/spitomin__17681"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "Короткое лечение тревоги, в основном генерализованного тревожного расстройства; дополнение к лечению депрессии (не как единственное средство).",
              "sources": [
                {
                  "title": "Справочник Видаль: Спитомин (буспирон), таблетки 5 и 10 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(004548)-(РГ-RU) от 08.02.24).",
                  "url": "https://www.vidal.ru/drugs/spitomin__17681"
                }
              ]
            },
            {
              "label": "Когда выбирают",
              "text": "Генерализованная тревога (РОП): препарат второй линии, когда не помогли основные (уровень A). Депрессия (РОП): добавка к СИОЗС при устойчивой депрессии, когда не помогли три этапа лечения (уровень B). В испытании STAR*D добавка буспирона к циталопраму дала ремиссию у 30%, как и бупропион, но её чаще бросали из-за побочных эффектов. В CANMAT 2023 среди добавок к антидепрессантам его нет.",
              "sources": [
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Генерализованное тревожное расстройство», ID 457, утверждены в 2021 году, раздел 3.2 «Психофармакотерапия» (копия текста на legalacts.ru; на cr.minzdrav.gov.ru версии 457_2 и 457_3).",
                  "url": "https://legalacts.ru/doc/klinicheskie-rekomendatsii-generalizovannoe-trevozhnoe-rasstroistvo-utv-minzdravom-rossii/"
                },
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Депрессивный эпизод, рекуррентное депрессивное расстройство», редакция 2021 года (ID 301_2 в рубрикаторе Минздрава, в архиве с 26.08.2024), PDF разработчика.",
                  "url": "https://psychiatr.ru/download/6271?view=1"
                },
                {
                  "title": "Trivedi M.H. et al. Medication augmentation after the failure of SSRIs for depression (STAR*D). New England Journal of Medicine, 2006.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/16554526/"
                },
                {
                  "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Каждый день в одно и то же время, в 2 или 3 приёма. Для разового приёма при стрессе не годится: эффект через срок от 7 до 14 дней, полный через 4 недели. Грейпфрутовый сок повышает уровень препарата в крови.",
              "sources": [
                {
                  "title": "Справочник Видаль: Спитомин (буспирон), таблетки 5 и 10 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(004548)-(РГ-RU) от 08.02.24).",
                  "url": "https://www.vidal.ru/drugs/spitomin__17681"
                }
              ]
            },
            {
              "label": "Противопоказания",
              "text": "Тяжёлая почечная или печёночная недостаточность; эпилепсия; острое отравление алкоголем, снотворными, обезболивающими или антипсихотиками; беременность и кормление грудью; возраст до 18 лет.",
              "sources": [
                {
                  "title": "Справочник Видаль: Спитомин (буспирон), таблетки 5 и 10 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(004548)-(РГ-RU) от 08.02.24).",
                  "url": "https://www.vidal.ru/drugs/spitomin__17681"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "Начинают с 15 мг в сутки и прибавляют по 5 мг каждые 2 или 3 дня; обычно от 20 до 30 мг в сутки, максимум 60 мг в сутки и 30 мг за раз.",
              "sources": [
                {
                  "title": "Справочник Видаль: Спитомин (буспирон), таблетки 5 и 10 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(004548)-(РГ-RU) от 08.02.24).",
                  "url": "https://www.vidal.ru/drugs/spitomin__17681"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Зависимости, по инструкции, не вызывает. Вместе с ингибиторами МАО повышает давление; с другими серотониновыми препаратами возможен серотониновый синдром. Как единственное лекарство от депрессии не подходит: может замаскировать её симптомы.",
              "sources": [
                {
                  "title": "Справочник Видаль: Спитомин (буспирон), таблетки 5 и 10 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(004548)-(РГ-RU) от 08.02.24).",
                  "url": "https://www.vidal.ru/drugs/spitomin__17681"
                }
              ],
              "more": true
            },
            {
              "label": "В России",
              "text": "По рецепту. В списки психотропных веществ и в перечень предметно-количественного учёта не входит.",
              "sources": [
                {
                  "title": "Справочник Видаль: Спитомин (буспирон), таблетки 5 и 10 мг, разделы «Показания», «Режим дозирования», «Противопоказания», «Особые указания» (ЛП-№(004548)-(РГ-RU) от 08.02.24).",
                  "url": "https://www.vidal.ru/drugs/spitomin__17681"
                },
                {
                  "title": "Постановление Правительства РФ от 30.06.1998 № 681 о перечне наркотических средств, психотропных веществ и их прекурсоров, список III.",
                  "url": "https://base.garant.ru/12112176/"
                },
                {
                  "title": "Приказ Минздрава России от 01.09.2023 № 459н о перечне лекарственных средств, подлежащих предметно-количественному учёту, действует с 01.09.2024.",
                  "url": "http://publication.pravo.gov.ru/document/0001202310030013"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/spitomin__17681",
            "text": "Полная инструкция: vidal.ru"
          },
          "aside": true
        },
        {
          "id": "phenibut",
          "label": "Фенибут",
          "note": "Фенибут (несколько производителей), Анвифен, Ноофен",
          "facts": [
            {
              "label": "Что это",
              "text": "Ноотроп с противотревожным действием, производное ГАМК; действует на ГАМК-B рецепторы. В Восточной Европе его назначают больше полувека, а в США он продаётся как нерегулируемая добавка.",
              "sources": [
                {
                  "title": "Справочник Видаль: Фенибут (аминофенилмасляная кислота), таблетки 250 мг, инструкция (ЛП-№(007102)-(РГ-RU) от 03.10.24).",
                  "url": "https://www.vidal.ru/drugs/phenibut"
                },
                {
                  "title": "Kupats E. et al. Safety and Tolerability of the Anxiolytic and Nootropic Drug Phenibut: A Systematic Review of Clinical Trials and Case Reports. Pharmacopsychiatry, 2020.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/32340063/"
                },
                {
                  "title": "Feldman R. et al. A systematic review of phenibut withdrawal focusing on complications, therapeutic approaches, and single substance versus polysubstance withdrawal. Clinical Toxicology, 2023.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/38112312/"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "Астенические и тревожно-невротические состояния, тревожность, страх, невроз навязчивых состояний; заикание, тики и недержание мочи у детей; бессонница у пожилых; головокружения и болезнь Меньера, укачивание; успокоение перед операцией; в составе лечения алкогольной абстиненции.",
              "sources": [
                {
                  "title": "Справочник Видаль: Фенибут (аминофенилмасляная кислота), таблетки 250 мг, инструкция (ЛП-№(007102)-(РГ-RU) от 03.10.24).",
                  "url": "https://www.vidal.ru/drugs/phenibut"
                }
              ]
            },
            {
              "label": "Когда выбирают",
              "text": "В российских рекомендациях по депрессии и по генерализованной тревоге не упоминается, в NICE и CANMAT тоже. Испытания небольшие: в систематическом обзоре 2020 года 11 испытаний на 583 человека.",
              "sources": [
                {
                  "title": "Kupats E. et al. Safety and Tolerability of the Anxiolytic and Nootropic Drug Phenibut: A Systematic Review of Clinical Trials and Case Reports. Pharmacopsychiatry, 2020.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/32340063/"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "При тревожных и астенических состояниях внутрь после еды 3 раза в день, курс от 4 до 6 недель.",
              "sources": [
                {
                  "title": "Справочник Видаль: Ноофен (аминофенилмасляная кислота), капсулы 250 мг, разделы «Режим дозирования» и «Противопоказания» (ЛП-№(003375)-(РГ-RU) от 10.10.23).",
                  "url": "https://www.vidal.ru/drugs/noophen__38764"
                }
              ]
            },
            {
              "label": "Противопоказания",
              "text": "По инструкции таблеток Фенибута только аллергия на него. У Ноофена ещё острая почечная недостаточность, беременность и кормление грудью, дети до 8 лет.",
              "sources": [
                {
                  "title": "Справочник Видаль: Фенибут (аминофенилмасляная кислота), таблетки 250 мг, инструкция (ЛП-№(007102)-(РГ-RU) от 03.10.24).",
                  "url": "https://www.vidal.ru/drugs/phenibut"
                },
                {
                  "title": "Справочник Видаль: Ноофен (аминофенилмасляная кислота), капсулы 250 мг, разделы «Режим дозирования» и «Противопоказания» (ЛП-№(003375)-(РГ-RU) от 10.10.23).",
                  "url": "https://www.vidal.ru/drugs/noophen__38764"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "Взрослым по 250 или 500 мг 3 раза в день; за раз не больше 750 мг (старше 60 лет 500 мг), в сутки при необходимости до 2,5 г.",
              "sources": [
                {
                  "title": "Справочник Видаль: Ноофен (аминофенилмасляная кислота), капсулы 250 мг, разделы «Режим дозирования» и «Противопоказания» (ЛП-№(003375)-(РГ-RU) от 10.10.23).",
                  "url": "https://www.vidal.ru/drugs/noophen__38764"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Сонливость, раздражительность, тошнота в первые дни; при долгом приёме проверяют печень и кровь. При больших дозах, обычно купленных в интернете, описаны зависимость и тяжёлая отмена с галлюцинациями, бредом и судорогами; отмена бывала уже после недели приёма по дозе от 2 до 3 г в день.",
              "sources": [
                {
                  "title": "Справочник Видаль: Фенибут (аминофенилмасляная кислота), таблетки 250 мг, инструкция (ЛП-№(007102)-(РГ-RU) от 03.10.24).",
                  "url": "https://www.vidal.ru/drugs/phenibut"
                },
                {
                  "title": "Kupats E. et al. Safety and Tolerability of the Anxiolytic and Nootropic Drug Phenibut: A Systematic Review of Clinical Trials and Case Reports. Pharmacopsychiatry, 2020.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/32340063/"
                },
                {
                  "title": "Feldman R. et al. A systematic review of phenibut withdrawal focusing on complications, therapeutic approaches, and single substance versus polysubstance withdrawal. Clinical Toxicology, 2023.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/38112312/"
                }
              ],
              "more": true
            },
            {
              "label": "В России",
              "text": "По рецепту. В списки психотропных веществ и в перечень предметно-количественного учёта не входит.",
              "sources": [
                {
                  "title": "Справочник Видаль: Фенибут (аминофенилмасляная кислота), таблетки 250 мг, инструкция (ЛП-№(007102)-(РГ-RU) от 03.10.24).",
                  "url": "https://www.vidal.ru/drugs/phenibut"
                },
                {
                  "title": "Постановление Правительства РФ от 30.06.1998 № 681 о перечне наркотических средств, психотропных веществ и их прекурсоров, список III.",
                  "url": "https://base.garant.ru/12112176/"
                },
                {
                  "title": "Приказ Минздрава России от 01.09.2023 № 459н о перечне лекарственных средств, подлежащих предметно-количественному учёту, действует с 01.09.2024.",
                  "url": "http://publication.pravo.gov.ru/document/0001202310030013"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/phenibut",
            "text": "Полная инструкция: vidal.ru"
          },
          "aside": true
        }
      ]
    },
    {
      "id": "otc",
      "label": "Без рецепта и травы",
      "title": "Без рецепта и травы",
      "hint": "Не лечат депрессию. Их часто покупают вместо лечения; доказательств почти нет.",
      "facts": [
        {
          "label": "Что это",
          "text": "Их покупают сами, «чтобы успокоиться». Надёжных доказательств при депрессии почти ни у кого нет, а зверобой ещё и опасен взаимодействиями.",
          "sources": [
            {
              "title": "EMA, Committee on Herbal Medicinal Products. European Union herbal monograph on Hypericum perforatum L., herba, Revision 1, 2022.",
              "url": "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-hypericum-perforatum-l-herba-revision-1_en.pdf"
            }
          ]
        }
      ],
      "aside": true,
      "children": [
        {
          "id": "st-johns-wort",
          "label": "Зверобой",
          "note": "Нейроплант и другие",
          "facts": [
            {
              "label": "Что это",
              "text": "Экстракт травы, который продают как растительный антидепрессант.",
              "sources": [
                {
                  "title": "Справочник Видаль: препараты зверобоя (Негрустин, Деприм, Нейроплант), сведения о регистрации.",
                  "url": "https://www.vidal.ru/search?t=all&q=зверобой"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "Нейроплант (таблетки сухого экстракта зверобоя): внутрь при симптоматической и реактивной депрессии, беспокойстве, нарушениях сна; дополнительное средство при эндогенной депрессии (особенно в климаксе).",
              "sources": [
                {
                  "title": "Справочник Видаль: Нейроплант (сухой экстракт травы зверобоя), таблетки 300 мг, раздел «Показания» (ЛП-001603).",
                  "url": "https://www.vidal.ru/drugs/neuroplant__31582"
                }
              ]
            },
            {
              "label": "Противопоказания",
              "text": "Одновременно с ИМАО; беременность и кормление грудью; возраст до 12 лет.",
              "sources": [
                {
                  "title": "Справочник Видаль: Нейроплант (сухой экстракт травы зверобоя), таблетки 300 мг, раздел «Показания» (ЛП-001603).",
                  "url": "https://www.vidal.ru/drugs/neuroplant__31582"
                }
              ]
            },
            {
              "label": "Чем платят",
              "text": "Ускоряет печёночные ферменты и ослабляет многие лекарства: гормональные контрацептивы, разжижающие кровь, препараты после пересадки органов, лекарства от ВИЧ. Вместе с антидепрессантами риск серотонинового синдрома.",
              "sources": [
                {
                  "title": "EMA, Committee on Herbal Medicinal Products. European Union herbal monograph on Hypericum perforatum L., herba, Revision 1, 2022.",
                  "url": "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-hypericum-perforatum-l-herba-revision-1_en.pdf"
                },
                {
                  "title": "Lexapro (escitalopram), инструкция по применению и руководство для пациента (Medication Guide), одобренные FDA. AbbVie, редакции 2023 и 2024 годов.",
                  "url": "https://www.rxabbvie.com/pdf/lexapro_pi.pdf"
                }
              ],
              "more": true
            },
            {
              "label": "Что говорят рекомендации",
              "text": "NICE признаёт, что при нетяжёлой депрессии он может помогать, но не советует назначать: препараты разной силы, взаимодействия серьёзные. Российские рекомендации допускают его при лёгкой депрессии для тех, кто не хочет антидепрессанты.",
              "sources": [
                {
                  "title": "NICE. Depression in adults: treatment and management (NG222), рекомендации 1.2.7 и 1.4.1 о прошлом опыте лечения, 1.4.38 о зверобое.",
                  "url": "https://www.nice.org.uk/guidance/ng222"
                },
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Депрессивный эпизод, рекуррентное депрессивное расстройство», редакция 2021 года (ID 301_2 в рубрикаторе Минздрава, в архиве с 26.08.2024), PDF разработчика.",
                  "url": "https://psychiatr.ru/download/6271?view=1"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/neuroplant__31582",
            "text": "Полная инструкция: vidal.ru"
          },
          "aside": true
        },
        {
          "id": "otc-calming",
          "label": "Афобазол и др.",
          "note": "Продаются без рецепта",
          "facts": [
            {
              "label": "Показания по инструкции",
              "text": "Афобазол: тревога у взрослых, нарушения сна из-за тревоги, синдром отмены алкоголя и курения. Тенотен: тревожные состояния и стресс у взрослых, в составе комплексного лечения. Глицин: стресс и напряжение, сниженная умственная работоспособность, нарушения сна, ишемический инсульт. Депрессии в показаниях ни у одного нет.",
              "sources": [
                {
                  "title": "Справочник Видаль: Афобазол (фабомотизол), инструкция, раздел «Показания препарата».",
                  "url": "https://www.vidal.ru/drugs/afobazol__8918"
                },
                {
                  "title": "Справочник Видаль: Тенотен, таблетки для рассасывания, инструкция, раздел «Показания препарата».",
                  "url": "https://www.vidal.ru/drugs/tenoten__23173"
                },
                {
                  "title": "Справочник Видаль: Глицин, таблетки подъязычные, раздел «Показания» (ЛП-№(006100)-(РГ-RU) от 02.07.24).",
                  "url": "https://www.vidal.ru/drugs/glycine__4429"
                }
              ]
            },
            {
              "label": "Противопоказания",
              "text": "Афобазол: беременность, кормление грудью, возраст до 18 лет. Тенотен: возраст до 18 лет. Глицин: кроме аллергии на компоненты, противопоказаний нет.",
              "sources": [
                {
                  "title": "Справочник Видаль: Афобазол (фабомотизол), инструкция, раздел «Показания препарата».",
                  "url": "https://www.vidal.ru/drugs/afobazol__8918"
                },
                {
                  "title": "Справочник Видаль: Тенотен, таблетки для рассасывания, инструкция, раздел «Показания препарата».",
                  "url": "https://www.vidal.ru/drugs/tenoten__23173"
                },
                {
                  "title": "Справочник Видаль: Глицин, таблетки подъязычные, раздел «Показания» (ЛП-№(006100)-(РГ-RU) от 02.07.24).",
                  "url": "https://www.vidal.ru/drugs/glycine__4429"
                }
              ]
            },
            {
              "label": "Что известно",
              "text": "У Афобазола российские испытания, например против диазепама, а испытаний против плацебо в международных журналах нет, в Евросоюзе и США он не зарегистрирован. Единственное испытание Тенотена против плацебо отозвано редакцией. Рандомизированных испытаний глицина при депрессии нет.",
              "sources": [
                {
                  "title": "Сюняков Т.С. и др. Оценка терапевтической эффективности и безопасности селективного анксиолитика афобазола при генерализованном тревожном расстройстве и расстройствах адаптации: результаты многоцентрового рандомизированного сравнительного с диазепамом исследования. Терапевтический архив, 2016.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/27636931/"
                },
                {
                  "title": "Retraction Note: The randomized clinical trial results of the anxiety treatment in patients with somatoform dysfunction and neurasthenia (Тенотен). Scientific Reports, 2022.",
                  "url": "https://www.nature.com/articles/s41598-022-19938-3"
                }
              ],
              "more": true
            },
            {
              "label": "Чем опасны",
              "text": "В основном тем, что на них уходит время: несколько месяцев «чего-то лёгкого», а депрессия не лечится.",
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/afobazol__8918",
            "text": "Полная инструкция: vidal.ru"
          },
          "title": "Афобазол, Тенотен, глицин",
          "aside": true
        },
        {
          "id": "novo-passit",
          "label": "Ново-Пассит",
          "note": "Ново-Пассит, таблетки и раствор; без рецепта",
          "facts": [
            {
              "label": "Что это",
              "text": "Растительное успокоительное: экстракты валерианы, мелиссы, зверобоя, боярышника, пассифлоры, хмеля и бузины плюс гвайфенезин.",
              "sources": [
                {
                  "title": "Справочник Видаль: Ново-Пассит, таблетки и раствор для приёма внутрь, инструкция (ЛП-№(000120)-(РГ-RU) от 20.01.21).",
                  "url": "https://www.vidal.ru/drugs/novo-passit__597"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "Неврастения и невротические реакции с раздражительностью, тревогой, страхом, усталостью; постоянное психическое напряжение; лёгкая бессонница; головная боль от напряжения, мигрень; функциональные болезни кишечника; климактерический синдром; зудящие дерматозы на фоне стресса.",
              "sources": [
                {
                  "title": "Справочник Видаль: Ново-Пассит, таблетки и раствор для приёма внутрь, инструкция (ЛП-№(000120)-(РГ-RU) от 20.01.21).",
                  "url": "https://www.vidal.ru/drugs/novo-passit__597"
                }
              ]
            },
            {
              "label": "Когда выбирают",
              "text": "В российских рекомендациях по депрессии и по генерализованной тревоге не упоминается. Обзоры Cochrane по валериане и пассифлоре при тревожных расстройствах нашли слишком мало испытаний, чтобы сделать вывод; испытаний самой смеси в этих обзорах нет.",
              "sources": [
                {
                  "title": "Miyasaka L.S., Atallah A.N., Soares B.G. Valerian for anxiety disorders. Cochrane Database of Systematic Reviews, 2006.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/17054208/"
                },
                {
                  "title": "Miyasaka L.S., Atallah A.N., Soares B.G. Passiflora for anxiety disorder. Cochrane Database of Systematic Reviews, 2007.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/17253512/"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "3 раза в день до еды, с перерывом от 4 до 6 часов. Если за 7 дней не лучше, нужно к врачу.",
              "sources": [
                {
                  "title": "Справочник Видаль: Ново-Пассит, таблетки и раствор для приёма внутрь, инструкция (ЛП-№(000120)-(РГ-RU) от 20.01.21).",
                  "url": "https://www.vidal.ru/drugs/novo-passit__597"
                }
              ]
            },
            {
              "label": "Противопоказания",
              "text": "Миастения; возраст до 12 лет; аллергия на компоненты.",
              "sources": [
                {
                  "title": "Справочник Видаль: Ново-Пассит, таблетки и раствор для приёма внутрь, инструкция (ЛП-№(000120)-(РГ-RU) от 20.01.21).",
                  "url": "https://www.vidal.ru/drugs/novo-passit__597"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "Взрослым и детям старше 12 лет по 1 таблетке или 5 мл раствора 3 раза в день; по назначению врача до 2 таблеток или 10 мл 3 раза в день.",
              "sources": [
                {
                  "title": "Справочник Видаль: Ново-Пассит, таблетки и раствор для приёма внутрь, инструкция (ЛП-№(000120)-(РГ-RU) от 20.01.21).",
                  "url": "https://www.vidal.ru/drugs/novo-passit__597"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Может вызвать сильную усталость и подавленность, усиливает действие алкоголя. Зверобой в составе ослабляет противозачаточные таблетки, лекарства после пересадки органов, от ВИЧ, сердечные и против тромбов. Во время приёма избегают солнца и солярия; в растворе около 12% спирта. Из-за зверобоя вместе с антидепрессантами его без врача не принимают: возможен серотониновый синдром.",
              "sources": [
                {
                  "title": "Справочник Видаль: Ново-Пассит, таблетки и раствор для приёма внутрь, инструкция (ЛП-№(000120)-(РГ-RU) от 20.01.21).",
                  "url": "https://www.vidal.ru/drugs/novo-passit__597"
                },
                {
                  "title": "EMA, Committee on Herbal Medicinal Products. European Union herbal monograph on Hypericum perforatum L., herba, Revision 1, 2022.",
                  "url": "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-hypericum-perforatum-l-herba-revision-1_en.pdf"
                },
                {
                  "title": "Lexapro (escitalopram), инструкция по применению и руководство для пациента (Medication Guide), одобренные FDA. AbbVie, редакции 2023 и 2024 годов.",
                  "url": "https://www.rxabbvie.com/pdf/lexapro_pi.pdf"
                }
              ],
              "more": true
            },
            {
              "label": "В России",
              "text": "Продаётся без рецепта.",
              "sources": [
                {
                  "title": "Справочник Видаль: Ново-Пассит, таблетки и раствор для приёма внутрь, инструкция (ЛП-№(000120)-(РГ-RU) от 20.01.21).",
                  "url": "https://www.vidal.ru/drugs/novo-passit__597"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://www.vidal.ru/drugs/novo-passit__597",
            "text": "Полная инструкция: vidal.ru"
          },
          "aside": true
        }
      ]
    },
    {
      "id": "boost",
      "label": "Другие способы усиления",
      "title": "Другие способы усилить лечение",
      "hint": "Другие ходы, когда не помогли два препарата подряд.",
      "facts": [
        {
          "label": "Что это",
          "text": "Ходы, к которым переходят, если не помогли два препарата подряд. Решает и ведёт врач.",
          "sources": [
            {
              "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
            }
          ]
        }
      ],
      "aside": true,
      "children": [
        {
          "id": "esketamine",
          "label": "Эскетамин",
          "note": "Spravato, назальный спрей; в России не зарегистрирован",
          "facts": [
            {
              "label": "Что это",
              "text": "Одна из двух зеркальных форм кетамина, назальный спрей. Действует через глутамат: блокирует NMDA-рецепторы.",
              "sources": [
                {
                  "title": "Spravato (esketamine) nasal spray, инструкция по применению, одобренная FDA. Janssen Pharmaceuticals, DailyMed, редакция 2026 года.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d81a6a79-a74a-44b7-822c-0dfa3036eaed"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "В России не зарегистрирован. В США (Spravato, назальный спрей): терапевтически резистентная депрессия у взрослых (не помогли как минимум два антидепрессанта; отдельно или вместе с таблетированным антидепрессантом) и депрессивные симптомы у взрослых с острыми суицидальными мыслями или поведением (вместе с антидепрессантом).",
              "sources": [
                {
                  "title": "Spravato (esketamine) nasal spray, инструкция по применению, одобренная FDA. Janssen Pharmaceuticals, DailyMed, редакция 2026 года.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d81a6a79-a74a-44b7-822c-0dfa3036eaed"
                },
                {
                  "title": "Справочник Видаль: поиск «эскетамин», октябрь 2026: зарегистрированных препаратов не найдено.",
                  "url": "https://www.vidal.ru/search?t=all&q=%D1%8D%D1%81%D0%BA%D0%B5%D1%82%D0%B0%D0%BC%D0%B8%D0%BD"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Только в сертифицированной клинике под присмотром, потом не меньше 2 часов наблюдения. Первые четыре недели дважды в неделю, затем раз в неделю, с девятой недели раз в одну или две недели. За руль только на следующий день после сна.",
              "sources": [
                {
                  "title": "Spravato (esketamine) nasal spray, инструкция по применению, одобренная FDA. Janssen Pharmaceuticals, DailyMed, редакция 2026 года.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d81a6a79-a74a-44b7-822c-0dfa3036eaed"
                }
              ]
            },
            {
              "label": "Противопоказания",
              "text": "Аневризмы сосудов (аорты, мозга, периферических артерий) и артериовенозные мальформации (врождённые сплетения сосудов); перенесённое кровоизлияние в мозг.",
              "sources": [
                {
                  "title": "Spravato (esketamine) nasal spray, инструкция по применению, одобренная FDA. Janssen Pharmaceuticals, DailyMed, редакция 2026 года.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d81a6a79-a74a-44b7-822c-0dfa3036eaed"
                }
              ]
            },
            {
              "label": "Одобрение",
              "text": "FDA одобрило его 5 марта 2019 года для резистентной депрессии.",
              "sources": [
                {
                  "title": "Drugs@FDA: Spravato, NDA 211243, первичное одобрение 05.03.2019. FDA.",
                  "url": "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=211243"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Диссоциация, сонливость, головокружение, тошнота, подъём давления; есть потенциал злоупотребления. Противопоказан при аневризмах сосудов и кровоизлиянии в мозг в прошлом.",
              "sources": [
                {
                  "title": "Spravato (esketamine) nasal spray, инструкция по применению, одобренная FDA. Janssen Pharmaceuticals, DailyMed, редакция 2026 года.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d81a6a79-a74a-44b7-822c-0dfa3036eaed"
                }
              ],
              "more": true
            },
            {
              "label": "Что говорят рекомендации",
              "text": "CANMAT ставит его во вторую линию, NICE в британской системе его не рекомендует.",
              "sources": [
                {
                  "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                },
                {
                  "title": "NICE. Depression in adults: treatment and management (NG222), рекомендации 1.4.24 (пожилые), от 1.4.25 до 1.4.32 (литий), 1.9 (дальнейшие шаги) и 1.15.2 (эскетамин), 2022.",
                  "url": "https://www.nice.org.uk/guidance/ng222/chapter/Recommendations"
                }
              ],
              "more": true
            },
            {
              "label": "В России",
              "text": "Зарегистрированных препаратов в справочнике Видаль нет.",
              "sources": [
                {
                  "title": "Справочник Видаль: поиск «эскетамин», октябрь 2026: зарегистрированных препаратов не найдено.",
                  "url": "https://www.vidal.ru/search?t=all&q=%D1%8D%D1%81%D0%BA%D0%B5%D1%82%D0%B0%D0%BC%D0%B8%D0%BD"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d81a6a79-a74a-44b7-822c-0dfa3036eaed",
            "text": "Полная инструкция: dailymed.nlm.nih.gov"
          },
          "aside": true
        },
        {
          "id": "liothyronine",
          "label": "Лиотиронин (Т3)",
          "note": "в России отдельно не продаётся; за рубежом Cytomel",
          "facts": [
            {
              "label": "Что это",
              "text": "Гормон щитовидной железы трийодтиронин (Т3) в таблетках. Влияет на работу генов в клетках всего тела.",
              "sources": [
                {
                  "title": "Cytomel (liothyronine sodium), инструкция по применению, одобренная FDA. Pfizer, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=51452b31-ff68-4e0c-b982-c15502ebf1d3"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "В США (FDA): нехватка гормонов щитовидной железы (гипотиреоз), подавление ТТГ при раке щитовидной железы, диагностический тест. Депрессии в показаниях нет.",
              "sources": [
                {
                  "title": "Cytomel (liothyronine sodium), инструкция по применению, одобренная FDA. Pfizer, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=51452b31-ff68-4e0c-b982-c15502ebf1d3"
                }
              ]
            },
            {
              "label": "Когда выбирают",
              "text": "Добавка к антидепрессанту. CANMAT 2023: вторая линия, уровень 2; исследования старые (до 2003 года), маленькие и только с трициклическими антидепрессантами, и нужен контроль гормонов. NICE тоже упоминает Т3 как вариант усиления, вне инструкции.",
              "sources": [
                {
                  "title": "Lam R.W. et al. CANMAT 2023 update on clinical guidelines for management of major depressive disorder in adults, таблица 7.2 «Summary Recommendations for Adjunctive Medications» и раздел Q.7.g. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                },
                {
                  "title": "NICE. Depression in adults: treatment and management (NG222), рекомендации 1.9.8 и 1.9.9 (комбинированное лечение), от 1.4.33 до 1.4.37 (антипсихотики как усиление), 2022.",
                  "url": "https://www.nice.org.uk/guidance/ng222/chapter/Recommendations"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Таблетка раз в день; при этом следят за гормонами щитовидной железы.",
              "sources": [
                {
                  "title": "Cytomel (liothyronine sodium), инструкция по применению, одобренная FDA. Pfizer, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=51452b31-ff68-4e0c-b982-c15502ebf1d3"
                },
                {
                  "title": "Lam R.W. et al. CANMAT 2023 update on clinical guidelines for management of major depressive disorder in adults, таблица 7.2 «Summary Recommendations for Adjunctive Medications» и раздел Q.7.g. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                }
              ]
            },
            {
              "label": "Противопоказания",
              "text": "Нелеченая недостаточность надпочечников. Осторожно: пожилые и люди с болезнями сердца; не для похудения.",
              "sources": [
                {
                  "title": "Cytomel (liothyronine sodium), инструкция по применению, одобренная FDA. Pfizer, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=51452b31-ff68-4e0c-b982-c15502ebf1d3"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "При гипотиреозе FDA: начинают с 25 мкг, поддерживающая от 25 до 75 мкг. CANMAT для усиления: от 25 до 50 мкг.",
              "sources": [
                {
                  "title": "Cytomel (liothyronine sodium), инструкция по применению, одобренная FDA. Pfizer, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=51452b31-ff68-4e0c-b982-c15502ebf1d3"
                },
                {
                  "title": "Lam R.W. et al. CANMAT 2023 update on clinical guidelines for management of major depressive disorder in adults, таблица 7.2 «Summary Recommendations for Adjunctive Medications» и раздел Q.7.g. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Побочные эффекты как при избытке гормонов щитовидной железы: сердцебиение и аритмии (например, мерцательная аритмия), особенно у пожилых и сердечников.",
              "sources": [
                {
                  "title": "Cytomel (liothyronine sodium), инструкция по применению, одобренная FDA. Pfizer, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=51452b31-ff68-4e0c-b982-c15502ebf1d3"
                }
              ],
              "more": true
            },
            {
              "label": "В России",
              "text": "Сейчас не зарегистрирован: Трийодтиронин 50 Берлин-Хеми и комбинации с левотироксином (Новотирал, Тиреокомб, Тиреотом) сняты с регистрации или их регистрация истекла.",
              "sources": [
                {
                  "title": "Справочник Видаль: Трийодтиронин 50 Берлин-Хеми (лиотиронин), сведения о регистрации: регистрация отменена.",
                  "url": "https://www.vidal.ru/drugs/triiodothyronine_50_berlin-chemie__858"
                },
                {
                  "title": "Справочник Видаль: препараты лиотиронина (Новотирал, Тиреокомб, Тиреотом; все комбинированные с левотироксином, регистрации отменены или истекли).",
                  "url": "https://www.vidal.ru/drugs/molecule-in/609"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=51452b31-ff68-4e0c-b982-c15502ebf1d3",
            "text": "Полная инструкция: dailymed.nlm.nih.gov"
          },
          "aside": true
        },
        {
          "id": "modafinil",
          "label": "Модафинил",
          "note": "в России не зарегистрирован; за рубежом Provigil",
          "facts": [
            {
              "label": "Что это",
              "text": "Средство, прогоняющее сонливость; как именно работает, неизвестно, действие похоже на стимуляторы, но не совпадает с ними.",
              "sources": [
                {
                  "title": "Provigil (modafinil), инструкция по применению, одобренная FDA. Cephalon, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e16c26ad-7bc2-d155-3a5d-da83ad6492c8"
                }
              ]
            },
            {
              "label": "Показания по инструкции",
              "text": "В США (FDA): дневная сонливость при нарколепсии, обструктивном апноэ сна и сменной работе. Депрессии в показаниях нет.",
              "sources": [
                {
                  "title": "Provigil (modafinil), инструкция по применению, одобренная FDA. Cephalon, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e16c26ad-7bc2-d155-3a5d-da83ad6492c8"
                }
              ]
            },
            {
              "label": "Когда выбирают",
              "text": "Добавка к антидепрессанту, особенно при усталости и сонливости. CANMAT 2023: вторая линия, уровень 2, эффект небольшой. В NICE NG222 не упоминается.",
              "sources": [
                {
                  "title": "Lam R.W. et al. CANMAT 2023 update on clinical guidelines for management of major depressive disorder in adults, таблица 7.2 «Summary Recommendations for Adjunctive Medications» и раздел Q.7.g. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                },
                {
                  "title": "NICE. Depression in adults: treatment and management (NG222), рекомендации 1.9.8 и 1.9.9 (комбинированное лечение), от 1.4.33 до 1.4.37 (антипсихотики как усиление), 2022.",
                  "url": "https://www.nice.org.uk/guidance/ng222/chapter/Recommendations"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Таблетка раз в день утром.",
              "sources": [
                {
                  "title": "Provigil (modafinil), инструкция по применению, одобренная FDA. Cephalon, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e16c26ad-7bc2-d155-3a5d-da83ad6492c8"
                }
              ]
            },
            {
              "label": "Противопоказания",
              "text": "Аллергия на модафинил или армодафинил. Осторожно: психозы, депрессия или мания в прошлом.",
              "sources": [
                {
                  "title": "Provigil (modafinil), инструкция по применению, одобренная FDA. Cephalon, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e16c26ad-7bc2-d155-3a5d-da83ad6492c8"
                }
              ]
            },
            {
              "label": "Доза по инструкции",
              "text": "FDA: 200 мг утром (при нарколепсии и апноэ). CANMAT для усиления: от 100 до 400 мг.",
              "sources": [
                {
                  "title": "Provigil (modafinil), инструкция по применению, одобренная FDA. Cephalon, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e16c26ad-7bc2-d155-3a5d-da83ad6492c8"
                },
                {
                  "title": "Lam R.W. et al. CANMAT 2023 update on clinical guidelines for management of major depressive disorder in adults, таблица 7.2 «Summary Recommendations for Adjunctive Medications» и раздел Q.7.g. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                }
              ],
              "more": true
            },
            {
              "label": "Чем платят",
              "text": "Тревога, нервозность, бессонница; редко тяжёлая сыпь, включая синдром Стивенса-Джонсона (опасное поражение кожи и слизистых). В США контролируемое вещество (список IV).",
              "sources": [
                {
                  "title": "Provigil (modafinil), инструкция по применению, одобренная FDA. Cephalon, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e16c26ad-7bc2-d155-3a5d-da83ad6492c8"
                }
              ],
              "more": true
            },
            {
              "label": "В России",
              "text": "Не зарегистрирован. Внесён в список II психотропных веществ (ПП 681), его оборот ограничен: покупка и ввоз без разрешения наказуемы.",
              "sources": [
                {
                  "title": "Справочник Видаль: поиск по запросу «модафинил», октябрь 2026 (действующее вещество не найдено).",
                  "url": "https://www.vidal.ru/search?t=all&q=%D0%BC%D0%BE%D0%B4%D0%B0%D1%84%D0%B8%D0%BD%D0%B8%D0%BB"
                },
                {
                  "title": "Постановление Правительства РФ от 30.06.1998 № 681 о перечне наркотических средств, психотропных веществ и их прекурсоров, список III.",
                  "url": "https://base.garant.ru/12112176/"
                }
              ],
              "more": true
            }
          ],
          "docs": {
            "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e16c26ad-7bc2-d155-3a5d-da83ad6492c8",
            "text": "Полная инструкция: dailymed.nlm.nih.gov"
          },
          "aside": true
        }
      ]
    }
  ]
} };
