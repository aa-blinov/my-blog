// Данные карты повторяют серию «Антидепрессанты по шагам»: карточки из сводной карты части 4, классы из части 2,
// приём по официальным инструкциям. Меняешь препарат в части 4, поменяй и здесь, чтобы карта и текст не расходились
import type { MindMapData } from '../../utils/mindmap';

export const antidepressants: MindMapData = { root: {
  "id": "root",
  "label": "Антидепрессанты",
  "title": "Антидепрессанты",
  "facts": [
    {
      "label": "Как читать карту",
      "text": "Вокруг центра пять классов антидепрессантов по механизму действия, а ещё то, что назначают рядом с ними, и способы усилить лечение. Препараты, которые встречаются в основном у нас, стоят в своих классах, это отмечено в карточке. В карточке препарата: что это, когда его выбирают, как принимают, чем хорош и чем за него платят."
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
  "link": {
    "href": "/blog/science/mind/antidepressants/",
    "text": "Вся серия «Антидепрессанты по шагам»"
  },
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
      "link": {
        "href": "/blog/science/mind/antidepressants/how-they-work/#классы-и-их-названия",
        "text": "Классы подробнее во второй части"
      },
      "children": [
        {
          "id": "escitalopram",
          "label": "Эсциталопрам",
          "note": "Ципралекс, Селектра, Ленуксин, Элицея",
          "facts": [
            {
              "label": "Что это",
              "text": "СИОЗС: селективные ингибиторы обратного захвата серотонина."
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия (депрессивные эпизоды любой тяжести), паническое расстройство с агорафобией (страх открытых мест и толпы) или без неё, социальное тревожное расстройство (социальная фобия), генерализованное тревожное расстройство (постоянная тревога по многим поводам), обсессивно-компульсивное расстройство (навязчивые мысли и действия). Взрослым от 18 лет. В США (Lexapro) показаний только два: депрессия (с 12 лет) и генерализованное тревожное расстройство (с 7 лет).",
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
              "label": "Доза по инструкции",
              "text": "Обычная доза 10 мг, максимум 20 мг в сутки; повышать не раньше чем через неделю."
            },
            {
              "label": "Что важно при приёме",
              "text": "В исследовании 20 мг не помогали лучше, чем 10 мг. Пожилым и при болезнях печени обычно 10 мг.",
              "sources": [
                {
                  "title": "Lexapro (escitalopram), инструкция по применению и руководство для пациента (Medication Guide), одобренные FDA. AbbVie, редакции 2023 и 2024 годов.",
                  "url": "https://www.rxabbvie.com/pdf/lexapro_pi.pdf"
                }
              ]
            },
            {
              "label": "Чем хорош",
              "text": "Среди самых эффективных и лучше переносимых у Чиприани",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ]
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
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/why-this-one/#сводная-карта-препаратов",
            "text": "Препарат в сводной карте четвёртой части"
          }
        },
        {
          "id": "sertraline",
          "label": "Сертралин",
          "note": "Золофт, Асентра, Стимулотон, Серената",
          "facts": [
            {
              "label": "Что это",
              "text": "СИОЗС: селективные ингибиторы обратного захвата серотонина."
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия (лечение и профилактика повторных эпизодов), обсессивно-компульсивное расстройство (навязчивые мысли и действия), паническое расстройство с агорафобией или без неё, посттравматическое стрессовое расстройство (ПТСР). В США (Zoloft) к этому добавлены социальное тревожное расстройство и предменструальное дисфорическое расстройство (тяжёлая форма предменструального синдрома).",
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
              "label": "Доза по инструкции",
              "text": "Начинают с 50 мг, максимум 200 мг в сутки; повышают на величину от 25 до 50 мг не чаще раза в неделю."
            },
            {
              "label": "Что важно при приёме",
              "text": "Дозу меняют не чаще раза в неделю: половина препарата выводится примерно за сутки, а постоянная концентрация в крови устанавливается примерно за неделю. При лёгком нарушении работы печени дозу уменьшают вдвое, при среднем и тяжёлом сертралин не рекомендован.",
              "sources": [
                {
                  "title": "Zoloft (sertraline), инструкция по применению: раздел 2.4 о нарушении функции печени. DailyMed, 2025.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fda754f6-d0f3-4dce-a17a-927d64f912f7"
                }
              ]
            },
            {
              "label": "Чем хорош",
              "text": "Среди лучше переносимых у Чиприани",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ]
            },
            {
              "label": "Чем платят",
              "text": "Сексуальные нарушения",
              "sources": [
                {
                  "title": "Serretti A., Chiesa A. Treatment-emergent sexual dysfunction related to antidepressants: a meta-analysis. Journal of Clinical Psychopharmacology, 2009.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/19440080/"
                }
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/why-this-one/#сводная-карта-препаратов",
            "text": "Препарат в сводной карте четвёртой части"
          }
        },
        {
          "id": "fluoxetine",
          "label": "Флуоксетин",
          "note": "Прозак, Профлузак, Флуоксетин Ланнахер",
          "facts": [
            {
              "label": "Что это",
              "text": "СИОЗС: селективные ингибиторы обратного захвата серотонина."
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия, нервная булимия (приступы переедания с вызыванием рвоты), обсессивно-компульсивное расстройство (навязчивые мысли и действия). В США (Prozac) есть ещё паническое расстройство, а в сочетании с оланзапином депрессия при биполярном расстройстве I типа и депрессия, не ответившая на два антидепрессанта.",
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
              "label": "Как принимают",
              "text": "Утром. Дозу больше 20 мг пьют один раз утром или делят на два приёма: утром и в обед. Независимо от еды."
            },
            {
              "label": "Доза по инструкции",
              "text": "Начинают с 20 мг, максимум 80 мг в сутки."
            },
            {
              "label": "Когда оценивают эффект",
              "text": "Повысить дозу можно рассмотреть через несколько недель, если улучшения мало."
            },
            {
              "label": "Что важно при приёме",
              "text": "Выводится очень долго: изменение дозы полностью сказывается в крови только через несколько недель. Между отменой флуоксетина и началом ИМАО нужно не меньше 5 недель.",
              "sources": [
                {
                  "title": "Prozac (fluoxetine), инструкция по применению: противопоказания (тиоридазин) и раздел 5.14 о длительном выведении. DailyMed, Eli Lilly (Dista), 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c88f33ed-6dfb-4c5e-bc01-d8e36dd97299"
                }
              ]
            },
            {
              "label": "Чем хорош",
              "text": "Бросали реже, чем плацебо",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ]
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
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/why-this-one/#сводная-карта-препаратов",
            "text": "Препарат в сводной карте четвёртой части"
          }
        },
        {
          "id": "paroxetine",
          "label": "Пароксетин",
          "note": "Паксил",
          "facts": [
            {
              "label": "Что это",
              "text": "СИОЗС: селективные ингибиторы обратного захвата серотонина."
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия (эпизоды средней и тяжёлой степени, повторяющаяся депрессия), обсессивно-компульсивное расстройство (навязчивые мысли и действия), паническое расстройство с агорафобией или без неё, социальная фобия, генерализованное тревожное расстройство, посттравматическое стрессовое расстройство. В США (Paxil) список тот же.",
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
              "label": "Как принимают",
              "text": "Один раз в день утром, независимо от еды."
            },
            {
              "label": "Доза по инструкции",
              "text": "Начинают с 20 мг, максимум 50 мг в сутки при депрессии; повышают на 10 мг не чаще раза в неделю."
            },
            {
              "label": "Что важно при приёме",
              "text": "Пожилым и при тяжёлых болезнях почек или печени начинают с 10 мг, максимум 40 мг. Отменяют постепенно.",
              "sources": [
                {
                  "title": "Paxil (paroxetine), инструкция по применению: разделы о судорогах, кровотечениях, варфарине и тамоксифене. DailyMed, Apotex, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ef3b5cbe-f9e1-c1ac-79da-cfe14e3a7e7e"
                }
              ]
            },
            {
              "label": "Чем хорош",
              "text": "Среди эффективных в прямых сравнениях",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ]
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
              ]
            },
            {
              "label": "Пожилым",
              "text": "Критерии Бирс советуют избегать: из СИОЗС у него самое сильное холинолитическое действие.",
              "sources": [
                {
                  "title": "2023 American Geriatrics Society Beers Criteria Update Expert Panel. American Geriatrics Society 2023 updated AGS Beers Criteria for potentially inappropriate medication use in older adults. Journal of the American Geriatrics Society, 2023.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12478568/"
                }
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/why-this-one/#сводная-карта-препаратов",
            "text": "Препарат в сводной карте четвёртой части"
          }
        },
        {
          "id": "citalopram",
          "label": "Циталопрам",
          "note": "Ципрамил",
          "facts": [
            {
              "label": "Что это",
              "text": "СИОЗС: селективные ингибиторы обратного захвата серотонина."
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия (эпизоды средней и тяжёлой степени), паническое расстройство. В США (Celexa) только депрессия у взрослых.",
              "sources": [
                {
                  "title": "Справочник Видаль: Циталопрам, таблетки, инструкция, раздел «Показания препарата» (ЛП-001955 от 25.12.12).",
                  "url": "https://www.vidal.ru/drugs/citalopram__38632"
                },
                {
                  "title": "Celexa (citalopram), инструкция по применению: разделы 2.3 и 5.2 об интервале QT и дозах. DailyMed, Allergan, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4259d9b1-de34-43a4-85a8-41dd214e9177"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Один раз в день, независимо от еды. Время суток инструкция не задаёт."
            },
            {
              "label": "Доза по инструкции",
              "text": "Начинают с 20 мг, максимум 40 мг в сутки; повышать не раньше чем через неделю."
            },
            {
              "label": "Что важно при приёме",
              "text": "Больше 40 мг нельзя из-за риска нарушения ритма сердца (удлинение QT). Старше 60 лет и при болезнях печени максимум 20 мг.",
              "sources": [
                {
                  "title": "Celexa (citalopram), инструкция по применению: разделы 2.3 и 5.2 об интервале QT и дозах. DailyMed, Allergan, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4259d9b1-de34-43a4-85a8-41dd214e9177"
                }
              ]
            },
            {
              "label": "Чем хорош",
              "text": "Среди лучше переносимых",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ]
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
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/why-this-one/#сводная-карта-препаратов",
            "text": "Препарат в сводной карте четвёртой части"
          }
        },
        {
          "id": "fluvoxamine",
          "label": "Флувоксамин",
          "note": "Феварин, Рокона и другие",
          "facts": [
            {
              "label": "Что это",
              "text": "СИОЗС: селективные ингибиторы обратного захвата серотонина."
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия у взрослых; обсессивно-компульсивное расстройство (навязчивые мысли и действия) у взрослых и детей с 8 лет. В США только обсессивно-компульсивное расстройство, депрессии в показаниях нет.",
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
              "label": "Как принимают",
              "text": "Вечером, один раз в день; дозу больше 150 мг делят на два или три приёма (российская инструкция). Американская: перед сном, независимо от еды."
            },
            {
              "label": "Доза по инструкции",
              "text": "При депрессии начинают с 50 или 100 мг, обычно 100 мг, максимум 300 мг в сутки (российская инструкция)."
            },
            {
              "label": "Когда оценивают эффект",
              "text": "Через три-четыре недели от начала дозу пересматривают."
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
              ]
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
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/why-this-one/#сводная-карта-препаратов",
            "text": "Препарат в сводной карте четвёртой части"
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
      "link": {
        "href": "/blog/science/mind/antidepressants/how-they-work/#классы-и-их-названия",
        "text": "Классы подробнее во второй части"
      },
      "children": [
        {
          "id": "venlafaxine",
          "label": "Венлафаксин",
          "note": "Велаксин, Велафакс, Алвента",
          "facts": [
            {
              "label": "Что это",
              "text": "СИОЗСН: ингибиторы обратного захвата серотонина и норадреналина."
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия, в том числе с тревогой. В США (Effexor XR, капсулы длительного действия) кроме депрессии есть генерализованное тревожное расстройство, социальное тревожное расстройство и паническое расстройство.",
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
              "label": "Как принимают",
              "text": "Капсулы с замедленным высвобождением (XR): один раз в день во время еды, примерно в одно и то же время. Обычные таблетки (например, Велафакс): два раза в день во время еды."
            },
            {
              "label": "Доза по инструкции",
              "text": "XR: начинают с 75 мг (иногда сначала от 4 до 7 дней по 37,5 мг), обычно до 225 мг в сутки. Обычные таблетки: начинают с 37,5 мг дважды в день, по российской инструкции максимум 375 мг в сутки, высокие дозы в основном в стационаре."
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
              ]
            },
            {
              "label": "Чем хорош",
              "text": "Среди эффективных в прямых сравнениях",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ]
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
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/why-this-one/#сводная-карта-препаратов",
            "text": "Препарат в сводной карте четвёртой части"
          }
        },
        {
          "id": "duloxetine",
          "label": "Дулоксетин",
          "note": "Симбалта, Дулоксента, Депратал",
          "facts": [
            {
              "label": "Что это",
              "text": "СИОЗСН: ингибиторы обратного захвата серотонина и норадреналина."
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия, генерализованное тревожное расстройство (постоянная тревога по многим поводам), боль при диабетической нейропатии (повреждении нервов при диабете), хроническая боль в мышцах и суставах. В США к этому добавлена фибромиалгия (хроническая распространённая боль), а тревожное расстройство разрешено и детям с 7 лет.",
              "sources": [
                {
                  "title": "Справочник Видаль: Депратал (дулоксетин), разделы «Режим дозирования» и «Противопоказания».",
                  "url": "https://www.vidal.ru/drugs/depratal"
                },
                {
                  "title": "Duloxetine delayed-release capsules, инструкция по применению: раздел 2 о дозах и приёме. DailyMed, Lupin, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=829a4f51-c882-4b64-81f3-abfb03a52ebe"
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
              "label": "Доза по инструкции",
              "text": "Начинают с дозы от 40 до 60 мг в сутки; максимум 120 мг, но выше 60 мг пользы не показано."
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
              ]
            },
            {
              "label": "Чем хорош",
              "text": "Диабетическая нейропатия",
              "sources": [
                {
                  "title": "Lunn M.P., Hughes R.A., Wiffen P.J. Duloxetine for treating painful neuropathy, chronic pain or fibromyalgia. Cochrane Database of Systematic Reviews, 2014.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/24385423/"
                }
              ]
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
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/why-this-one/#сводная-карта-препаратов",
            "text": "Препарат в сводной карте четвёртой части"
          }
        },
        {
          "id": "desvenlafaxine",
          "label": "Дезвенлафаксин",
          "note": "Пристик; в России не зарегистрирован",
          "facts": [
            {
              "label": "Что это",
              "text": "СИОЗСН: ингибиторы обратного захвата серотонина и норадреналина."
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
              "label": "Доза по инструкции",
              "text": "50 мг в сутки: это и начальная, и лечебная доза. В исследованиях давали от 50 до 400 мг, но выше 50 мг пользы не прибавлялось, а побочных эффектов становилось больше. Отдельной предельной дозы для взрослых без болезней почек и печени инструкция не называет."
            },
            {
              "label": "Что важно при приёме",
              "text": "Отменяют постепенно. В стуле можно заметить пустую оболочку таблетки: лекарство из неё к этому моменту уже всосалось.",
              "sources": [
                {
                  "title": "Pristiq (desvenlafaxine) таблетки с замедленным высвобождением, инструкция по применению: разделы 2.1 и 2.5 о дозах, приёме и отмене. DailyMed, Wyeth (Pfizer), 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0f43610c-f290-46ea-d186-4f998ed99fce"
                }
              ]
            },
            {
              "label": "В России",
              "text": "Зарегистрированных препаратов в справочнике Видаль нет.",
              "sources": [
                {
                  "title": "Справочник Видаль: поиск «дезвенлафаксин», октябрь 2026: зарегистрированных препаратов не найдено.",
                  "url": "https://www.vidal.ru/search?t=all&q=%D0%B4%D0%B5%D0%B7%D0%B2%D0%B5%D0%BD%D0%BB%D0%B0%D1%84%D0%B0%D0%BA%D1%81%D0%B8%D0%BD"
                }
              ]
            },
            {
              "label": "Чем платят",
              "text": "Среди тех, кто чаще всего даёт симптомы отмены, и вместе с венлафаксином среди самых тяжёлых по отмене.",
              "sources": [
                {
                  "title": "Henssler J. et al. Incidence of antidepressant discontinuation symptoms: a systematic review and meta-analysis. Lancet Psychiatry, 2024.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/38851198/"
                }
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/how-they-work/#классы-и-их-названия",
            "text": "Классы подробнее во второй части"
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
      "link": {
        "href": "/blog/science/mind/antidepressants/how-they-work/#классы-и-их-названия",
        "text": "Классы подробнее во второй части"
      },
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
              "label": "Доза по инструкции",
              "text": "Начинают с 15 мг, максимум 45 мг в сутки."
            },
            {
              "label": "Когда оценивают эффект",
              "text": "Дозу меняют не чаще чем раз в одну-две недели, чтобы успеть оценить ответ."
            },
            {
              "label": "Что важно при приёме",
              "text": "Перед сном удобно из-за сонливости. Отменяют постепенно.",
              "sources": [
                {
                  "title": "Remeron и RemeronSolTab (mirtazapine), инструкция по применению: раздел 2 о дозах и приёме. DailyMed, Organon.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=98ad1917-a094-44f5-a28f-a64a8cfcd887"
                }
              ]
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
              ]
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
              ]
            },
            {
              "label": "Редко",
              "text": "Бывает агранулоцитоз, падение белых клеток крови: при температуре, боли в горле или язвочках во рту сразу к врачу.",
              "sources": [
                {
                  "title": "Remeron и RemeronSolTab (mirtazapine), инструкция по применению: раздел 2 о дозах и приёме. DailyMed, Organon.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=98ad1917-a094-44f5-a28f-a64a8cfcd887"
                }
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/why-this-one/#сводная-карта-препаратов",
            "text": "Препарат в сводной карте четвёртой части"
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
              "label": "Доза по инструкции",
              "text": "Начинают с 30 мг в сутки и повышают каждые несколько дней. Обычная действующая доза от 60 до 90 мг в сутки. Максимальную дозу инструкция не называет."
            },
            {
              "label": "Когда оценивают эффект",
              "text": "Ответ ожидают через 2 или 4 недели; если после повышения дозы ещё через 2 или 4 недели ответа нет, препарат отменяют."
            },
            {
              "label": "Что важно при приёме",
              "text": "Может угнетать кроветворение, чаще через 4 или 6 недель лечения. При температуре, боли в горле, язвочках во рту или других признаках инфекции препарат прекращают и сдают развёрнутый анализ крови. Алкоголь во время лечения нежелателен.",
              "sources": [
                {
                  "title": "Справочник Видаль: Леривон (миансерин), инструкция.",
                  "url": "https://www.vidal.ru/drugs/lerivon__5330"
                }
              ]
            },
            {
              "label": "Чем платят",
              "text": "Редкое, но опасное падение белых клеток крови, агранулоцитоз, чаще на четвёртой-шестой неделе и у пожилых. При температуре, боли в горле или язвочках во рту препарат прекращают и делают анализ крови, сразу скажите врачу.",
              "sources": [
                {
                  "title": "Справочник Видаль: Леривон (миансерин), инструкция.",
                  "url": "https://www.vidal.ru/drugs/lerivon__5330"
                }
              ]
            },
            {
              "label": "Где встречается",
              "text": "В основном в России и соседних странах. В большом сравнении 21 антидепрессанта его нет, доказательств меньше.",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/cis-practice/#препараты-которые-встречаются-у-нас-чаще-чем-в-западных-руководствах",
            "text": "Подробнее в восьмой части"
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
              "label": "Доза по инструкции",
              "text": "Начинают с 25 мг; если через 2 недели нет улучшения, можно 50 мг (две таблетки сразу перед сном)."
            },
            {
              "label": "Когда оценивают эффект",
              "text": "Через 2 недели решают, повышать ли дозу."
            },
            {
              "label": "Что важно при приёме",
              "text": "Нужны анализы печени до начала и примерно через 3, 6, 12 и 24 недели, а также после повышения дозы. При болезнях печени и с 75 лет не применяют. Постепенная отмена не нужна.",
              "sources": [
                {
                  "title": "Valdoxan (agomelatine), общая характеристика лекарственного препарата (SmPC), раздел 4.2 о дозах и анализах печени. Европейское агентство лекарственных средств (EMA).",
                  "url": "https://www.ema.europa.eu/en/documents/product-information/valdoxan-epar-product-information_en.pdf"
                }
              ]
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
              ]
            },
            {
              "label": "Чем платят",
              "text": "Нужны анализы печени до начала, при повышении дозы и примерно через 3, 6, 12 и 24 недели; нельзя при болезнях печени и с сильными ингибиторами фермента CYP1A2, например флувоксамином и ципрофлоксацином",
              "sources": [
                {
                  "title": "Valdoxan (agomelatine): EPAR, сведения о препарате. Европейское агентство лекарственных средств (EMA).",
                  "url": "https://www.ema.europa.eu/en/medicines/human/EPAR/valdoxan"
                }
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/why-this-one/#сводная-карта-препаратов",
            "text": "Препарат в сводной карте четвёртой части"
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
              "label": "Доза по инструкции",
              "text": "Начинают с 10 мг, затем повышают до 20 мг по переносимости; при плохой переносимости 5 мг. По российской инструкции от 5 до 20 мг один раз в день; с 65 лет обычно начинают с 5 мг."
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
              ]
            },
            {
              "label": "Чем хорош",
              "text": "Среди эффективных и лучше переносимых",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/why-this-one/#сводная-карта-препаратов",
            "text": "Препарат в сводной карте четвёртой части"
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
              "text": "Депрессия разных видов, в том числе с выраженной тревогой; булимия, клептомания, тревожность, фобии; зависимость от бензодиазепинов, острый алкогольный абстинентный синдром (состояние отмены); снижение либидо, импотенция; профилактика приступов мигрени. В США только большое депрессивное расстройство у взрослых.",
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
              "label": "Как принимают",
              "text": "Несколько приёмов в день, вскоре после еды или лёгкого перекуса. При сонливости большую часть дозы переносят на вечер перед сном."
            },
            {
              "label": "Доза по инструкции",
              "text": "Начинают со 150 мг в сутки в несколько приёмов, амбулаторно максимум 400 мг (в стационаре до 600 мг)."
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
              ]
            },
            {
              "label": "Чем хорош",
              "text": "В малых дозах как снотворное",
              "sources": [
                {
                  "title": "Shin J.J., Saadabadi A. Trazodone. StatPearls, 2024.",
                  "url": "https://www.ncbi.nlm.nih.gov/books/NBK470560/"
                }
              ]
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
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/why-this-one/#сводная-карта-препаратов",
            "text": "Препарат в сводной карте четвёртой части"
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
              "label": "Доза по инструкции",
              "text": "SR: начинают со 150 мг, обычно 300 мг (по 150 мг дважды), максимум 400 мг в сутки. XL: 150 мг, через 4 дня можно 300 мг, максимум 450 мг в сутки."
            },
            {
              "label": "Когда оценивают эффект",
              "text": "Максимум (400 мг SR) рассматривают, если после нескольких недель на 300 мг нет улучшения."
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
              ]
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
              ]
            },
            {
              "label": "Чем платят",
              "text": "В России официально недоступен; противопоказан при эпилепсии, при булимии и анорексии, в том числе в прошлом, при резкой отмене алкоголя, бензодиазепинов, барбитуратов и противоэпилептических препаратов; нельзя вместе с ИМАО и в течение 14 дней после них",
              "sources": [
                {
                  "title": "Wellbutrin SR (bupropion hydrochloride), инструкция по применению. GlaxoSmithKline, DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cbc8c074-f080-4489-a5ae-207b5fadeba3"
                }
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/why-this-one/#сводная-карта-препаратов",
            "text": "Препарат в сводной карте четвёртой части"
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
              "label": "Доза по инструкции",
              "text": "4 мг два раза в день, то есть 8 мг в сутки, сразу с начала лечения. Если ответ неполный, через 3 или 4 недели можно поднять до 10 мг. Максимум 12 мг в сутки."
            },
            {
              "label": "Когда оценивают эффект",
              "text": "Решение о повышении дозы принимают через 3 или 4 недели, если ответ неполный."
            },
            {
              "label": "Что важно при приёме",
              "text": "Пожилым не рекомендован: у них нет данных плацебо-контролируемых исследований. Осторожно при задержке мочи, увеличенной простате, глаукоме и болезнях сердца.",
              "sources": [
                {
                  "title": "Edronax (reboxetine) 4 мг, общая характеристика лекарственного препарата (SmPC), разделы 4.2 и 4.4. electronic medicines compendium (Великобритания), Pfizer, редакция апреля 2025 года.",
                  "url": "https://www.medicines.org.uk/emc/product/1578/smpc"
                }
              ]
            },
            {
              "label": "Чем платят",
              "text": "Самый слабый по силе в сравнении 21 антидепрессанта и хуже переносится в прямых сравнениях.",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/how-they-work/#классы-и-их-названия",
            "text": "Классы подробнее во второй части"
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
              "label": "Доза по инструкции",
              "text": "12,5 мг три раза в день, то есть 37,5 мг в сутки. Превышать рекомендованную дозу запрещено; при тяжёлом циррозе, тяжёлой почечной недостаточности и у ослабленных пожилых с весом меньше 55 кг не больше 2 таблеток в сутки."
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
              ]
            },
            {
              "label": "Насколько помогает",
              "text": "Метаанализ 2002 года: пять испытаний, почти 1350 человек, разницы с СИОЗС не нашли; испытания короткие и старые.",
              "sources": [
                {
                  "title": "Kasper S., Olié J.P. A meta-analysis of randomized controlled trials of tianeptine versus SSRI in the short-term treatment of depression. European Psychiatry, 2002.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/15177089/"
                }
              ]
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
              ]
            },
            {
              "label": "Где встречается",
              "text": "В основном в России и соседних странах. В большом сравнении 21 антидепрессанта его нет, доказательств меньше.",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/cis-practice/#препараты-которые-встречаются-у-нас-чаще-чем-в-западных-руководствах",
            "text": "Подробнее в восьмой части"
          }
        }
      ]
    },
    {
      "id": "tca",
      "label": "Трициклические (ТЦА)",
      "title": "Трициклические антидепрессанты (ТЦА)",
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
      "link": {
        "href": "/blog/science/mind/antidepressants/how-they-work/#классы-и-их-названия",
        "text": "Классы подробнее во второй части"
      },
      "children": [
        {
          "id": "amitriptyline",
          "label": "Амитриптилин",
          "note": "Продаётся под названием Амитриптилин",
          "facts": [
            {
              "label": "Что это",
              "text": "ТЦА: трициклические антидепрессанты."
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия (особенно с тревогой, возбуждением и нарушениями сна), смешанные эмоциональные расстройства, нарушения поведения и внимания, нервная булимия, головная боль напряжения, мигрень, нейропатическая боль (боль от повреждения нервов) и другие хронические боли, ночной энурез (недержание мочи во сне), язвенная болезнь желудка и двенадцатиперстной кишки; в списке есть и шизофренические психозы. В США только симптомы депрессии.",
              "sources": [
                {
                  "title": "Справочник Видаль: Амитриптилин, таблетки 25 мг, раздел «Показания» (ЛП-№(002245)-(РГ-RU) от 26.04.23).",
                  "url": "https://www.vidal.ru/drugs/amitriptyline__3916"
                },
                {
                  "title": "Amitriptyline hydrochloride, инструкция по применению: противопоказания и предупреждения о сердце и судорогах. DailyMed, Sun Pharmaceutical, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4e520c63-1cf6-40f6-a51c-3f9b0e181342"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Несколько приёмов в день или вся доза перед сном; повышают в основном вечернюю дозу. Про еду инструкция не говорит."
            },
            {
              "label": "Доза по инструкции",
              "text": "Амбулаторно начинают с 75 мг в сутки (или от 50 до 100 мг на ночь), максимум 150 мг; в стационаре до 200, редко 300 мг."
            },
            {
              "label": "Когда оценивают эффект",
              "text": "Полный эффект может развиться только примерно через 30 дней; успокаивающее действие появляется раньше."
            },
            {
              "label": "Что важно при приёме",
              "text": "Поддерживающую дозу (обычно от 50 до 100 мг) удобно пить один раз перед сном.",
              "sources": [
                {
                  "title": "Amitriptyline hydrochloride, инструкция по применению: противопоказания и предупреждения о сердце и судорогах. DailyMed, Sun Pharmaceutical, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4e520c63-1cf6-40f6-a51c-3f9b0e181342"
                }
              ]
            },
            {
              "label": "Чем хорош",
              "text": "Наибольшая оценка эффекта против плацебо у Чиприани",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ]
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
              ]
            },
            {
              "label": "Пожилым",
              "text": "Критерии Бирс советуют избегать: сильное холинолитическое действие, сонливость, падение давления при вставании.",
              "sources": [
                {
                  "title": "2023 American Geriatrics Society Beers Criteria Update Expert Panel. American Geriatrics Society 2023 updated AGS Beers Criteria for potentially inappropriate medication use in older adults. Journal of the American Geriatrics Society, 2023.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12478568/"
                }
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/why-this-one/#сводная-карта-препаратов",
            "text": "Препарат в сводной карте четвёртой части"
          }
        },
        {
          "id": "clomipramine",
          "label": "Кломипрамин",
          "note": "Анафранил, Клофранил",
          "facts": [
            {
              "label": "Что это",
              "text": "ТЦА: трициклические антидепрессанты."
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия разного происхождения, обсессивно-компульсивные синдромы (навязчивые мысли и действия), фобии, панические приступы, хронический болевой синдром (в том числе мигрень, невропатии), нарколепсия с катаплексией (приступы сна и внезапной мышечной слабости), профилактика мигрени. В США (Anafranil) только обсессивно-компульсивное расстройство.",
              "sources": [
                {
                  "title": "Справочник Видаль: Анафранил (кломипрамин), таблетки 25 мг, раздел «Режим дозирования».",
                  "url": "https://www.vidal.ru/drugs/anafranil__2055"
                },
                {
                  "title": "Anafranil (clomipramine), инструкция по применению: раздел о судорогах. DailyMed, SpecGx, 2024.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4074b555-7635-41a9-809d-fae3b3610059"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "В начале по 25 или 50 мг два-три раза в день (российская инструкция). Американская: пока дозу подбирают, делят на приёмы во время еды; потом всю дозу можно пить один раз перед сном."
            },
            {
              "label": "Доза по инструкции",
              "text": "Амбулаторно максимум 250 мг в сутки (российская и американская инструкции). Начальную дозу американская называет 25 мг в сутки."
            },
            {
              "label": "Когда оценивают эффект",
              "text": "После подбора дозы между её изменениями ждут две-три недели (американская инструкция)."
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
              ]
            },
            {
              "label": "Чем платят",
              "text": "Единственный, кого бросали чаще, чем плацебо",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ]
            },
            {
              "label": "Пожилым",
              "text": "Критерии Бирс советуют избегать: сильное холинолитическое действие.",
              "sources": [
                {
                  "title": "2023 American Geriatrics Society Beers Criteria Update Expert Panel. American Geriatrics Society 2023 updated AGS Beers Criteria for potentially inappropriate medication use in older adults. Journal of the American Geriatrics Society, 2023.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12478568/"
                }
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/why-this-one/#сводная-карта-препаратов",
            "text": "Препарат в сводной карте четвёртой части"
          }
        },
        {
          "id": "imipramine",
          "label": "Имипрамин",
          "note": "Мелипрамин",
          "facts": [
            {
              "label": "Что это",
              "text": "ТЦА: трициклические антидепрессанты."
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия с заторможенностью, ночное недержание мочи у детей, хронические боли в составе комплексного лечения. В США: депрессия и ночное недержание мочи у детей с 6 лет.",
              "sources": [
                {
                  "title": "Справочник Видаль: Мелипрамин (имипрамин), раздел «Показания» (ЛП-№(000221)-(РГ-RU) от 12.05.21).",
                  "url": "https://www.vidal.ru/drugs/melipramin"
                },
                {
                  "title": "Imipramine hydrochloride tablets, инструкция по применению: показания, противопоказания и раздел о дозах при депрессии. DailyMed, Strides Pharma, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=51d3b181-0d15-4782-a966-feb137972b18"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Суточную дозу делят на несколько приёмов. Время суток и связь с едой инструкция при депрессии не задаёт."
            },
            {
              "label": "Доза по инструкции",
              "text": "Амбулаторно начинают с 75 мг в сутки и доводят до 150 мг; больше 200 мг в сутки не рекомендуют. В больнице начинают со 100 мг и при необходимости доходят до 250 или 300 мг. Пожилым и подросткам начинают с 30 или 40 мг, обычно хватает не больше 100 мг."
            },
            {
              "label": "Когда оценивают эффект",
              "text": "До полного эффекта может пройти от одной до трёх недель."
            },
            {
              "label": "Что важно при приёме",
              "text": "Противопоказан в период восстановления после свежего инфаркта и вместе с ингибиторами МАО: после их отмены нужен перерыв не меньше 14 дней.",
              "sources": [
                {
                  "title": "Imipramine hydrochloride tablets, инструкция по применению: показания, противопоказания и раздел о дозах при депрессии. DailyMed, Strides Pharma, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=51d3b181-0d15-4782-a966-feb137972b18"
                }
              ]
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
              ]
            },
            {
              "label": "Пожилым",
              "text": "Американские критерии Бирс советуют его избегать: сильное холинолитическое действие, а при обмороках в прошлом тем более.",
              "sources": [
                {
                  "title": "2023 American Geriatrics Society Beers Criteria Update Expert Panel. American Geriatrics Society 2023 updated AGS Beers Criteria for potentially inappropriate medication use in older adults. Journal of the American Geriatrics Society, 2023.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12478568/"
                }
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/how-they-work/#классы-и-их-названия",
            "text": "Классы подробнее во второй части"
          }
        },
        {
          "id": "doxepin",
          "label": "Доксепин",
          "note": "Продаётся под названием доксепин",
          "facts": [
            {
              "label": "Что это",
              "text": "ТЦА: трициклические антидепрессанты."
            },
            {
              "label": "Показания по инструкции",
              "text": "Депрессия, тревожность и нарушения сна при неврозах, алкоголизме, заболеваниях мозга; психотическая депрессия; вне психиатрии: язвенная болезнь двенадцатиперстной кишки, демпинг-синдром, предменструальный синдром, хронические боли у онкологических больных, кожный зуд, хроническая крапивница. В США капсулы доксепина показаны только при большом депрессивном расстройстве у взрослых.",
              "sources": [
                {
                  "title": "Справочник Видаль: Доксепин, капсулы, раздел «Показания» (ЛП-№(014922)-(РГ-RU) от 20.05.26).",
                  "url": "https://www.vidal.ru/drugs/doxepin"
                },
                {
                  "title": "Doxepin hydrochloride capsules, инструкция по применению: раздел 2.2 о дозах, противопоказания, раздел 5.4 о сонливости. DailyMed, Amneal, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=20bfb8af-7933-4e5c-a2b5-010659d9125b"
                }
              ]
            },
            {
              "label": "Как принимают",
              "text": "Один раз в день или в несколько приёмов. Время суток и связь с едой инструкция к капсулам не задаёт."
            },
            {
              "label": "Доза по инструкции",
              "text": "Начинают с 25 мг три раза в день или с 75 мг один раз. Обычная лечебная доза от 75 до 150 мг в сутки, максимум 100 мг три раза в день, то есть 300 мг."
            },
            {
              "label": "Что важно при приёме",
              "text": "Сильно клонит в сон: за руль нельзя, алкоголь усиливает действие, его избегают. Противопоказан при глаукоме и при задержке мочи сейчас или в прошлом.",
              "sources": [
                {
                  "title": "Doxepin hydrochloride capsules, инструкция по применению: раздел 2.2 о дозах, противопоказания, раздел 5.4 о сонливости. DailyMed, Amneal, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=20bfb8af-7933-4e5c-a2b5-010659d9125b"
                }
              ]
            },
            {
              "label": "Чем платят",
              "text": "При передозировке токсичнее амитриптилина.",
              "sources": [
                {
                  "title": "Hawton K. et al. Toxicity of antidepressants: rates of suicide relative to prescribing and non-fatal overdose. British Journal of Psychiatry, 2010.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/20435959/"
                }
              ]
            },
            {
              "label": "Пожилым",
              "text": "Критерии Бирс советуют избегать доз больше 6 мг в сутки из-за холинолитического действия и при обмороках в прошлом.",
              "sources": [
                {
                  "title": "2023 American Geriatrics Society Beers Criteria Update Expert Panel. American Geriatrics Society 2023 updated AGS Beers Criteria for potentially inappropriate medication use in older adults. Journal of the American Geriatrics Society, 2023.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12478568/"
                }
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/how-they-work/#классы-и-их-названия",
            "text": "Классы подробнее во второй части"
          }
        },
        {
          "id": "nortriptyline",
          "label": "Нортриптилин",
          "note": "Памелор; в России не зарегистрирован",
          "facts": [
            {
              "label": "Что это",
              "text": "ТЦА: трициклические антидепрессанты."
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
              "label": "Доза по инструкции",
              "text": "Обычно 25 мг три или четыре раза в день, начинают с малой дозы и повышают по необходимости. Больше 150 мг в сутки не рекомендуют. Пожилым и подросткам от 30 до 50 мг в сутки."
            },
            {
              "label": "Что важно при приёме",
              "text": "При дозе выше 100 мг в сутки проверяют уровень нортриптилина в крови: он должен быть от 50 до 150 нг/мл. При серьёзных побочных эффектах или аллергии препарат сразу отменяют.",
              "sources": [
                {
                  "title": "Pamelor (nortriptyline), инструкция по применению: раздел о дозах и контроле уровня в крови. DailyMed, SpecGx (Mallinckrodt), 2025.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e17dc299-f52d-414d-ab6e-e809bd6f8acb"
                }
              ]
            },
            {
              "label": "В России",
              "text": "Зарегистрированных препаратов в справочнике Видаль нет.",
              "sources": [
                {
                  "title": "Справочник Видаль: поиск «нортриптилин», октябрь 2026: зарегистрированных препаратов не найдено.",
                  "url": "https://www.vidal.ru/search?t=all&q=%D0%BD%D0%BE%D1%80%D1%82%D1%80%D0%B8%D0%BF%D1%82%D0%B8%D0%BB%D0%B8%D0%BD"
                }
              ]
            },
            {
              "label": "Пожилым",
              "text": "Критерии Бирс советуют избегать: сильное холинолитическое действие, отсюда спутанность, запоры, падение давления.",
              "sources": [
                {
                  "title": "2023 American Geriatrics Society Beers Criteria Update Expert Panel. American Geriatrics Society 2023 updated AGS Beers Criteria for potentially inappropriate medication use in older adults. Journal of the American Geriatrics Society, 2023.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12478568/"
                }
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/how-they-work/#классы-и-их-названия",
            "text": "Классы подробнее во второй части"
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
              "label": "Доза по инструкции",
              "text": "Начинают с 25 или 50 мг в сутки. При хорошей переносимости повышают до 150 или 200 мг в сутки, иногда до 400 мг. Максимум от 400 до 500 мг в сутки. Поддерживающая доза от 25 до 75 мг в сутки."
            },
            {
              "label": "Что важно при приёме",
              "text": "Алкоголь во время лечения запрещён. После ингибиторов МАО нужен перерыв 2 недели. Периодически проверяют работу печени и почек.",
              "sources": [
                {
                  "title": "Справочник Видаль: Азафен (пипофезин), таблетки 25 мг, разделы «Режим дозирования» и «Особые указания» (ЛП-№(005772)-(РГ-RU) от 14.06.24).",
                  "url": "https://www.vidal.ru/drugs/azaphen__14737"
                }
              ]
            },
            {
              "label": "В России",
              "text": "В клинических рекомендациях второй выбор при тяжёлой депрессии.",
              "sources": [
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Депрессивный эпизод, рекуррентное депрессивное расстройство», редакция 2021 года (ID 301_2 в рубрикаторе Минздрава, в архиве с 26.08.2024), PDF разработчика.",
                  "url": "https://psychiatr.ru/download/6271?view=1"
                }
              ]
            },
            {
              "label": "Насколько помогает",
              "text": "Крупных рандомизированных испытаний в международных журналах нет."
            },
            {
              "label": "Где встречается",
              "text": "В основном в России и соседних странах. В большом сравнении 21 антидепрессанта его нет, доказательств меньше.",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/cis-practice/#препараты-которые-встречаются-у-нас-чаще-чем-в-западных-руководствах",
            "text": "Подробнее в восьмой части"
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
      "link": {
        "href": "/blog/science/mind/antidepressants/how-they-work/#классы-и-их-названия",
        "text": "Классы подробнее во второй части"
      },
      "children": [
        {
          "id": "moclobemide",
          "label": "Моклобемид",
          "note": "Аурорикс, в России нет действующей регистрации",
          "facts": [
            {
              "label": "Что это",
              "text": "ИМАО: ингибиторы моноаминоксидазы."
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
              "label": "Доза по инструкции",
              "text": "Начинают с 300 мг в сутки, максимум 600 мг."
            },
            {
              "label": "Когда оценивают эффект",
              "text": "Эффект оценивают не раньше чем через четыре-шесть недель; дозу не повышают в первую неделю."
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
              ]
            },
            {
              "label": "Чем хорош",
              "text": "По сексуальной функции значимо не отличался от плацебо",
              "sources": [
                {
                  "title": "Serretti A., Chiesa A. Treatment-emergent sexual dysfunction related to antidepressants: a meta-analysis. Journal of Clinical Psychopharmacology, 2009.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/19440080/"
                }
              ]
            },
            {
              "label": "Чем платят",
              "text": "В России официально недоступен; опасные сочетания с другими серотониновыми препаратами",
              "sources": [
                {
                  "title": "Patel P., Saadabadi A. Monoamine Oxidase Inhibitors (MAOIs). StatPearls, 2025.",
                  "url": "https://www.ncbi.nlm.nih.gov/books/NBK539848/"
                }
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/why-this-one/#сводная-карта-препаратов",
            "text": "Препарат в сводной карте четвёртой части"
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
              "label": "Доза по инструкции",
              "text": "Начинают с 50 или 75 мг в сутки, затем постепенно повышают шагами по 25 или 50 мг до 150 или 300 мг в сутки. Максимум 400 мг в сутки."
            },
            {
              "label": "Что важно при приёме",
              "text": "Противопоказан при остром гепатите и заболеваниях крови. Нельзя вместе с ингибиторами МАО и в течение 14 дней после их отмены. Инструкция допускает приём при глаукоме и аденоме простаты.",
              "sources": [
                {
                  "title": "Справочник Видаль: Пиразидол (пирлиндол), таблетки 25 и 50 мг, разделы «Режим дозирования» и «Противопоказания» (ЛП-№(001788)-(РГ-RU) от 08.02.23).",
                  "url": "https://www.vidal.ru/drugs/pyrazidol__40373"
                }
              ]
            },
            {
              "label": "Опасные сочетания",
              "text": "Как и другие ингибиторы МАО, опасен вместе с СИОЗС, СИОЗСН, кломипрамином и другими серотониновыми препаратами из-за серотонинового синдрома. Инструкция Пиразидола об этом прямо не пишет, это свойство класса.",
              "sources": [
                {
                  "title": "Patel P., Saadabadi A. Monoamine Oxidase Inhibitors (MAOIs). StatPearls, 2025.",
                  "url": "https://www.ncbi.nlm.nih.gov/books/NBK539848/"
                }
              ]
            },
            {
              "label": "В России",
              "text": "В клинических рекомендациях второй выбор при тяжёлой депрессии.",
              "sources": [
                {
                  "title": "Российское общество психиатров. Клинические рекомендации «Депрессивный эпизод, рекуррентное депрессивное расстройство», редакция 2021 года (ID 301_2 в рубрикаторе Минздрава, в архиве с 26.08.2024), PDF разработчика.",
                  "url": "https://psychiatr.ru/download/6271?view=1"
                }
              ]
            },
            {
              "label": "Насколько помогает",
              "text": "Метаанализ 2011 года: девять испытаний против других антидепрессантов, разницы в эффекте нет; авторы оговаривают, что качество испытаний среднее, а часть данных взята из архивов производителя.",
              "sources": [
                {
                  "title": "Macedo A., Leiria E., Filipe A. Pirlindole in the treatment of depression: a meta-analysis. Clinical Drug Investigation, 2011.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/21053988/"
                }
              ]
            },
            {
              "label": "Где встречается",
              "text": "В основном в России и соседних странах. В большом сравнении 21 антидепрессанта его нет, доказательств меньше.",
              "sources": [
                {
                  "title": "Cipriani A. et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet, 2018.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/29477251/"
                }
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/cis-practice/#препараты-которые-встречаются-у-нас-чаще-чем-в-западных-руководствах",
            "text": "Подробнее в восьмой части"
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
              "label": "Доза по инструкции",
              "text": "Начинают с 15 мг три раза в день. Довольно быстро повышают хотя бы до 60 мг в сутки, при необходимости до 90 мг. Поддерживающая доза может снижаться до 15 мг в день или через день."
            },
            {
              "label": "Когда оценивают эффект",
              "text": "Многим нужно не меньше 4 недель на дозе 60 мг, прежде чем появится ответ."
            },
            {
              "label": "Что важно при приёме",
              "text": "Диета без тирамина: нельзя выдержанные сыры, вино, пиво, сушёные колбасы, печень, дрожжевой экстракт, бобы фава, квашеное и копчёное. Опасны сочетания с другими антидепрессантами, усиливающими серотонин, с декстрометорфаном от кашля, петидином, стимуляторами и алкоголем.",
              "sources": [
                {
                  "title": "Nardil (phenelzine), инструкция по применению: противопоказания (продукты с тирамином, опасные сочетания) и раздел о дозах. DailyMed, Parke-Davis (Pfizer), 2025.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=513a41d0-37d4-4355-8a6d-a2c643bce6fa"
                }
              ]
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
              ]
            },
            {
              "label": "В России",
              "text": "Зарегистрированных препаратов в справочнике Видаль нет.",
              "sources": [
                {
                  "title": "Справочник Видаль: поиск «фенелзин», октябрь 2026: зарегистрированных препаратов не найдено.",
                  "url": "https://www.vidal.ru/search?t=all&q=%D1%84%D0%B5%D0%BD%D0%B5%D0%BB%D0%B7%D0%B8%D0%BD"
                }
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/how-they-work/#классы-и-их-названия",
            "text": "Классы подробнее во второй части"
          }
        }
      ]
    },
    {
      "id": "nearby",
      "label": "Не антидепрессанты, но рядом",
      "title": "Не антидепрессанты, но их часто назначают рядом",
      "hint": "Не антидепрессанты, но их часто назначают вместе с ними или покупают вместо них.",
      "facts": [
        {
          "label": "Что это",
          "text": "Их назначают вместе с антидепрессантами или покупают вместо них. Важно знать, с чем они опасно сочетаются."
        }
      ],
      "link": {
        "href": "/blog/science/mind/antidepressants/cis-practice/#препараты-которые-встречаются-у-нас-чаще-чем-в-западных-руководствах",
        "text": "Подробнее в восьмой части"
      },
      "children": [
        {
          "id": "sulpiride",
          "label": "Сульпирид",
          "note": "Эглонил",
          "facts": [
            {
              "label": "Что это",
              "text": "Не антидепрессант, а нейролептик: блокирует дофаминовые рецепторы. По российской инструкции капсулы 50 мг кратковременно при тревоге, если обычные средства не помогли, таблетки 200 мг только при психозах.",
              "sources": [
                {
                  "title": "Справочник Видаль: Эглонил (сульпирид), капсулы 50 мг, показания и режим дозирования.",
                  "url": "https://www.vidal.ru/drugs/eglonyl__984"
                },
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
              "label": "Чем платят",
              "text": "Повышает пролактин: нарушения цикла вплоть до его прекращения, выделения и увеличение груди, в том числе у мужчин, проблемы с эрекцией и оргазмом. Как циталопрам и эсциталопрам, может удлинять интервал QT, поэтому их не рекомендуют сочетать, а если без этого никак, контролируют ЭКГ.",
              "sources": [
                {
                  "title": "Справочник Видаль: Эглонил (сульпирид), инструкции к таблеткам 200 мг и капсулам 50 мг.",
                  "url": "https://www.vidal.ru/drugs/eglonyl__985"
                }
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/cis-practice/#препараты-которые-встречаются-у-нас-чаще-чем-в-западных-руководствах",
            "text": "Подробнее в восьмой части"
          }
        },
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
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/cis-practice/#препараты-которые-встречаются-у-нас-чаще-чем-в-западных-руководствах",
            "text": "Подробнее в восьмой части"
          }
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
              ]
            },
            {
              "label": "Опасные сочетания",
              "text": "Вместе с алкоголем и опиоидами опасно угнетает дыхание.",
              "sources": [
                {
                  "title": "FDA. FDA requiring Boxed Warning updated to improve safe use of benzodiazepine drug class, 2020.",
                  "url": "https://www.fda.gov/drugs/drug-safety-and-availability/fda-requiring-boxed-warning-updated-improve-safe-use-benzodiazepine-drug-class"
                }
              ]
            },
            {
              "label": "В России",
              "text": "Под предметно-количественным учётом.",
              "sources": [
                {
                  "title": "Приказ Минздрава России от 01.09.2023 № 459н о перечне лекарственных средств, подлежащих предметно-количественному учёту, действует с 01.09.2024.",
                  "url": "http://publication.pravo.gov.ru/document/0001202310030013"
                }
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/cis-practice/#препараты-которые-встречаются-у-нас-чаще-чем-в-западных-руководствах",
            "text": "Подробнее в восьмой части"
          }
        },
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
              ]
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
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/cis-practice/#препараты-которые-встречаются-у-нас-чаще-чем-в-западных-руководствах",
            "text": "Подробнее в восьмой части"
          }
        },
        {
          "id": "otc-calming",
          "label": "Афобазол и др.",
          "note": "Продаются без рецепта",
          "facts": [
            {
              "label": "Показания по инструкции",
              "text": "Афобазол: тревожные состояния у взрослых (генерализованное тревожное расстройство, неврастения, расстройства адаптации, тревога при соматических болезнях), нарушения сна из-за тревоги, предменструальный синдром, алкогольный абстинентный синдром, облегчение отмены при отказе от курения. Тенотен: у взрослых тревожные состояния при неврологических и психосоматических заболеваниях в составе комплексного лечения; уменьшение стрессовых расстройств, повышение концентрации внимания и работоспособности. Глицин: сниженная умственная работоспособность, стресс и психоэмоциональное напряжение (экзамены, конфликты), отклоняющееся поведение у детей и подростков, неврозы и другие состояния с возбудимостью, эмоциональной неустойчивостью и нарушением сна, ишемический инсульт.",
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
              ]
            },
            {
              "label": "Чем опасны",
              "text": "В основном тем, что на них уходит время: несколько месяцев «чего-то лёгкого», а депрессия не лечится."
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/cis-practice/#препараты-которые-встречаются-у-нас-чаще-чем-в-западных-руководствах",
            "text": "Подробнее в восьмой части"
          },
          "title": "Афобазол, Тенотен, глицин"
        }
      ]
    },
    {
      "id": "boost",
      "label": "Если одного мало",
      "title": "Если одного антидепрессанта мало: усиление лечения",
      "hint": "Что добавляют, когда одного антидепрессанта мало.",
      "facts": [
        {
          "label": "Что это",
          "text": "Ходы, к которым переходят, если не помогли два препарата подряд. Решает и ведёт врач."
        }
      ],
      "link": {
        "href": "/blog/science/mind/antidepressants/if-it-helps-little/#что-ещё-есть-в-запасе",
        "text": "Подробнее в пятой части"
      },
      "children": [
        {
          "id": "lithium",
          "label": "Литий",
          "note": "Добавка к антидепрессанту",
          "facts": [
            {
              "label": "Показания по инструкции",
              "text": "Маниакальные и гипоманиакальные состояния (периоды болезненно приподнятого настроения), профилактика и лечение аффективных психозов (тяжёлых расстройств настроения, в том числе биполярного), аффективные нарушения при алкоголизме; также мигрень, синдром Меньера, сексуальные расстройства, лекарственная зависимость. В США только биполярное расстройство I типа: мания и смешанные эпизоды и поддерживающее лечение, с 7 лет.",
              "sources": [
                {
                  "title": "Справочник Видаль: Седалит (лития карбонат), раздел «Показания» (ЛП-№(004190)-(РГ-RU) от 27.12.23).",
                  "url": "https://www.vidal.ru/drugs/sedalit__15786"
                },
                {
                  "title": "Lithium carbonate tablets and capsules, инструкция по применению, раздел 1 «Indications and Usage». DailyMed, Hikma.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b839ff4b-f62d-41ab-a823-550a756d58ec"
                }
              ]
            },
            {
              "label": "Когда назначают",
              "text": "Добавляют к антидепрессанту, который помог мало. С литием шансы ответить на лечение в 3,11 раза выше, чем с плацебо; CANMAT ставит его во вторую линию.",
              "sources": [
                {
                  "title": "NICE. Depression in adults: treatment and management (NG222), рекомендации 1.4.24 (пожилые), от 1.4.25 до 1.4.32 (литий), 1.9 (дальнейшие шаги) и 1.15.2 (эскетамин), 2022.",
                  "url": "https://www.nice.org.uk/guidance/ng222/chapter/Recommendations"
                },
                {
                  "title": "Crossley N.A., Bauer M. Acceleration and augmentation of antidepressants with lithium for depressive disorders: two meta-analyses of randomized, placebo-controlled trials. Journal of Clinical Psychiatry, 2007.",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/17592920/"
                },
                {
                  "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
                  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
                }
              ]
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
              ]
            },
            {
              "label": "Как принимают",
              "text": "Узкий коридор между рабочей и опасной дозой, поэтому регулярно сдают кровь на уровень лития через 12 часов после приёма; уровень не выше 1,0 ммоль/л. Пожилым целевой уровень от 0,4 до 0,6 ммоль/л. Уровень лития поднимают обезвоживание, рвота и понос, обезболивающие вроде ибупрофена и диклофенака, мочегонные и препараты от давления из групп иАПФ и сартанов, поэтому любое новое лекарство согласуют с врачом. Признаки отравления: понос, рвота, крупная дрожь, шаткость, спутанность, это повод срочно обратиться за помощью. Бросать самому нельзя.",
              "sources": [
                {
                  "title": "NICE. Depression in adults: treatment and management (NG222), рекомендации 1.4.24 (пожилые), от 1.4.25 до 1.4.32 (литий), 1.9 (дальнейшие шаги) и 1.15.2 (эскетамин), 2022.",
                  "url": "https://www.nice.org.uk/guidance/ng222/chapter/Recommendations"
                }
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/if-it-helps-little/#что-ещё-есть-в-запасе",
            "text": "Подробнее в пятой части"
          }
        },
        {
          "id": "esketamine",
          "label": "Эскетамин",
          "note": "Spravato, назальный спрей; в России не зарегистрирован",
          "facts": [
            {
              "label": "Что это",
              "text": "Одна из двух зеркальных форм кетамина. Действует через глутамат: блокирует NMDA-рецепторы. FDA одобрило его 5 марта 2019 года для резистентной депрессии.",
              "sources": [
                {
                  "title": "Spravato (esketamine) nasal spray, инструкция по применению, одобренная FDA. Janssen Pharmaceuticals, DailyMed, редакция 2026 года.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d81a6a79-a74a-44b7-822c-0dfa3036eaed"
                },
                {
                  "title": "Drugs@FDA: Spravato, NDA 211243, первичное одобрение 05.03.2019. FDA.",
                  "url": "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=211243"
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
              "label": "Чем платят",
              "text": "Диссоциация, сонливость, головокружение, тошнота, подъём давления; есть потенциал злоупотребления. Противопоказан при аневризмах сосудов и кровоизлиянии в мозг в прошлом.",
              "sources": [
                {
                  "title": "Spravato (esketamine) nasal spray, инструкция по применению, одобренная FDA. Janssen Pharmaceuticals, DailyMed, редакция 2026 года.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d81a6a79-a74a-44b7-822c-0dfa3036eaed"
                }
              ]
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
              ]
            },
            {
              "label": "В России",
              "text": "Зарегистрированных препаратов в справочнике Видаль нет.",
              "sources": [
                {
                  "title": "Справочник Видаль: поиск «эскетамин», октябрь 2026: зарегистрированных препаратов не найдено.",
                  "url": "https://www.vidal.ru/search?t=all&q=%D1%8D%D1%81%D0%BA%D0%B5%D1%82%D0%B0%D0%BC%D0%B8%D0%BD"
                }
              ]
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/if-it-helps-little/#что-ещё-есть-в-запасе",
            "text": "Подробнее в пятой части"
          }
        }
      ]
    }
  ]
} };
