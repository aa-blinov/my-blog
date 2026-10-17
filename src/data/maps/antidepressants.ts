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
      "text": "В центре пять классов по механизму, вокруг них препараты. В карточке препарата: что это, когда его выбирают, как принимают, чем хорош и чем за него платят."
    },
    {
      "label": "Важно",
      "text": "Дозы здесь из официальных инструкций, чтобы понимать назначение. Препарат и дозу подбирает врач, менять их самому нельзя."
    }
  ],
  "link": {
    "href": "/blog/science/mind/antidepressants/",
    "text": "Вся серия «Антидепрессанты по шагам»"
  },
  "children": [
    {
      "id": "ssri",
      "label": "СИОЗС",
      "title": "Селективные ингибиторы обратного захвата серотонина",
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
              "text": "Сексуальные нарушения; среди частых по симптомам отмены",
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
              "text": "Дозу меняют не чаще раза в неделю, потому что препарат выводится примерно за сутки. При лёгком нарушении работы печени дозу уменьшают вдвое.",
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
              "text": "Слабее и хуже переносится в прямых сравнениях; сексуальные нарушения; мешает разрушению других лекарств, например агомелатина",
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
      "label": "СИОЗСН",
      "title": "Ингибиторы обратного захвата серотонина и норадреналина",
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
              "label": "Как принимают",
              "text": "Форма с замедленным высвобождением (XR): один раз в день во время еды, утром или вечером, примерно в одно и то же время."
            },
            {
              "label": "Доза по инструкции",
              "text": "Начинают с 75 мг (иногда сначала от 4 до 7 дней по 37,5 мг), максимум 225 мг в сутки."
            },
            {
              "label": "Что важно при приёме",
              "text": "Капсулу глотают целиком, не делят и не разжёвывают; можно высыпать содержимое на ложку яблочного пюре. Отменяют постепенно.",
              "sources": [
                {
                  "title": "Effexor XR (venlafaxine extended-release), инструкция по применению: раздел 2 о дозах и приёме. DailyMed, Viatris.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c848a5d8-ba94-4c84-80e3-0bf35fb8e32e"
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
                  "title": "Venlafaxine, инструкция по применению. DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=venlafaxine"
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
              "text": "Капсулу глотают целиком: не открывают и не высыпают на еду, иначе разрушается защитная оболочка. Отменяют постепенно.",
              "sources": [
                {
                  "title": "Duloxetine delayed-release capsules, инструкция по применению: раздел 2 о дозах и приёме. DailyMed, Lupin, 2026.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=829a4f51-c882-4b64-81f3-abfb03a52ebe"
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
        }
      ]
    },
    {
      "id": "other",
      "label": "Другие механизмы",
      "title": "Другие механизмы",
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
            }
          ],
          "link": {
            "href": "/blog/science/mind/antidepressants/why-this-one/#сводная-карта-препаратов",
            "text": "Препарат в сводной карте четвёртой части"
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
              "text": "Нужны анализы печени до начала, при повышении дозы и примерно через 3, 6, 12 и 24 недели; нельзя при болезнях печени и с препаратами, которые замедляют его разрушение, например флувоксамином",
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
              "label": "Как принимают",
              "text": "Один раз в день, независимо от еды. Время суток инструкция не задаёт."
            },
            {
              "label": "Доза по инструкции",
              "text": "Начинают с 10 мг, затем повышают до 20 мг по переносимости; при плохой переносимости 5 мг."
            },
            {
              "label": "Что важно при приёме",
              "text": "Можно прекратить сразу, но с доз от 15 до 20 мг лучше неделю принимать 10 мг. После отмены до ИМАО нужно 21 день.",
              "sources": [
                {
                  "title": "Trintellix (vortioxetine), инструкция по применению: раздел 2 о дозах и приёме. DailyMed, Takeda.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1a5b68e2-14d0-419d-9ec6-1ca97145e838"
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
              "label": "Как принимают",
              "text": "Несколько приёмов в день, вскоре после еды или лёгкого перекуса. При сонливости большую часть дозы переносят на вечер перед сном."
            },
            {
              "label": "Доза по инструкции",
              "text": "Начинают со 150 мг в сутки в несколько приёмов, амбулаторно максимум 400 мг (в стационаре до 600 мг)."
            },
            {
              "label": "Что важно при приёме",
              "text": "Таблетку глотают целиком или половинкой по риске, не разжёвывают. Отменяют постепенно.",
              "sources": [
                {
                  "title": "Trazodone hydrochloride tablets, инструкция по применению: раздел 2 о дозах и приёме. DailyMed, Teva, 2025.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4006d439-e2de-4590-82e9-fc9d56e3ec1b"
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
                  "title": "Trazodone, инструкция по применению. DailyMed.",
                  "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=trazodone"
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
              "text": "SR: начинают со 150 мг, обычно 300 мг (по 150 мг дважды), максимум 400 мг в сутки. XL: 150 мг, через 4 дня можно 300 мг."
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
                  "title": "Wellbutrin SR (bupropion), инструкция по применению. FDA, 2025.",
                  "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/020358s070lbl.pdf"
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
              "text": "В России официально недоступен; противопоказан при эпилепсии, при булимии и анорексии, в том числе в прошлом, а также при резкой отмене алкоголя или успокоительных",
              "sources": [
                {
                  "title": "Wellbutrin SR (bupropion), инструкция по применению. FDA, 2025.",
                  "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/020358s070lbl.pdf"
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
      "id": "tca",
      "label": "ТЦА",
      "title": "Трициклические антидепрессанты",
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
      "id": "maoi",
      "label": "ИМАО",
      "title": "Ингибиторы моноаминоксидазы",
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
        }
      ]
    }
  ]
} };
