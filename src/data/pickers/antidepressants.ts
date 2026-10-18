// Правила подборщика: линии по CANMAT 2023 и российским рекомендациям, особенности пациента по рекомендациям и инструкциям.
// Каждое правило с источником. Это не назначение: инструмент показывает, что обсудить с врачом
import type { PickerData } from '../../utils/picker';

export const antidepressants: PickerData = {
  "disclaimer": "Инструмент показывает, что по рекомендациям обычно обсуждают с врачом первым, что требует осторожности и что не подходит, с причиной и источником. Препарат и дозу подбирает врач: он учитывает диагноз, тяжесть депрессии, другие болезни и лекарства. Не начинайте, не меняйте и не бросайте лечение самостоятельно. Инструмент учитывает не все лекарства и болезни: назовите врачу всё, что принимаете, включая безрецептурные средства и зверобой.",
  "mapHref": "/blog/science/mind/antidepressants/map/",
  "drugs": [
    {
      "id": "escitalopram",
      "label": "Эсциталопрам",
      "tier": 1,
      "tierSources": [
        {
          "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
        }
      ],
      "registeredRu": true
    },
    {
      "id": "sertraline",
      "label": "Сертралин",
      "tier": 1,
      "tierSources": [
        {
          "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
        }
      ],
      "registeredRu": true
    },
    {
      "id": "fluoxetine",
      "label": "Флуоксетин",
      "tier": 1,
      "tierSources": [
        {
          "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
        }
      ],
      "registeredRu": true
    },
    {
      "id": "paroxetine",
      "label": "Пароксетин",
      "tier": 1,
      "tierSources": [
        {
          "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
        }
      ],
      "registeredRu": true
    },
    {
      "id": "citalopram",
      "label": "Циталопрам",
      "tier": 1,
      "tierSources": [
        {
          "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
        }
      ],
      "registeredRu": true
    },
    {
      "id": "fluvoxamine",
      "label": "Флувоксамин",
      "tier": 1,
      "tierSources": [
        {
          "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
        }
      ],
      "registeredRu": true
    },
    {
      "id": "venlafaxine",
      "label": "Венлафаксин",
      "tier": 1,
      "tierSources": [
        {
          "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
        }
      ],
      "registeredRu": true
    },
    {
      "id": "duloxetine",
      "label": "Дулоксетин",
      "tier": 1,
      "tierSources": [
        {
          "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
        }
      ],
      "registeredRu": true
    },
    {
      "id": "desvenlafaxine",
      "label": "Дезвенлафаксин",
      "tier": 1,
      "tierSources": [
        {
          "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
        }
      ],
      "registeredRu": false
    },
    {
      "id": "milnacipran",
      "label": "Милнаципран",
      "tier": 1,
      "tierSources": [
        {
          "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
        }
      ],
      "registeredRu": false
    },
    {
      "id": "mirtazapine",
      "label": "Миртазапин",
      "tier": 1,
      "tierSources": [
        {
          "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
        }
      ],
      "registeredRu": true
    },
    {
      "id": "agomelatine",
      "label": "Агомелатин",
      "tier": 1,
      "tierSources": [
        {
          "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
        }
      ],
      "registeredRu": true
    },
    {
      "id": "vortioxetine",
      "label": "Вортиоксетин",
      "tier": 1,
      "tierSources": [
        {
          "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
        }
      ],
      "registeredRu": true
    },
    {
      "id": "trazodone",
      "label": "Тразодон",
      "tier": 2,
      "tierSources": [
        {
          "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
        }
      ],
      "registeredRu": true
    },
    {
      "id": "bupropion",
      "label": "Бупропион",
      "tier": 1,
      "tierSources": [
        {
          "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
        }
      ],
      "registeredRu": false
    },
    {
      "id": "amitriptyline",
      "label": "Амитриптилин",
      "tier": 2,
      "tierSources": [
        {
          "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
        }
      ],
      "registeredRu": true
    },
    {
      "id": "clomipramine",
      "label": "Кломипрамин",
      "tier": 2,
      "tierSources": [
        {
          "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
        }
      ],
      "registeredRu": true
    },
    {
      "id": "moclobemide",
      "label": "Моклобемид",
      "tier": 2,
      "tierSources": [
        {
          "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
        }
      ],
      "registeredRu": false
    },
    {
      "id": "mianserin",
      "label": "Миансерин",
      "tier": 1,
      "tierSources": [
        {
          "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
        }
      ],
      "registeredRu": true
    },
    {
      "id": "pipofezine",
      "label": "Пипофезин",
      "tier": 2,
      "tierSources": [
        {
          "title": "Российское общество психиатров. Клинические рекомендации «Депрессивный эпизод, рекуррентное депрессивное расстройство», редакция 2021 года (ID 301_2 в рубрикаторе Минздрава, в архиве с 26.08.2024), PDF разработчика.",
          "url": "https://psychiatr.ru/download/6271?view=1"
        }
      ],
      "registeredRu": true
    },
    {
      "id": "pirlindole",
      "label": "Пирлиндол",
      "tier": 2,
      "tierSources": [
        {
          "title": "Российское общество психиатров. Клинические рекомендации «Депрессивный эпизод, рекуррентное депрессивное расстройство», редакция 2021 года (ID 301_2 в рубрикаторе Минздрава, в архиве с 26.08.2024), PDF разработчика.",
          "url": "https://psychiatr.ru/download/6271?view=1"
        }
      ],
      "registeredRu": true
    }
  ],
  "groups": [
    {
      "id": "age",
      "label": "Возраст"
    },
    {
      "id": "pregnancy",
      "label": "Беременность и кормление"
    },
    {
      "id": "symptoms",
      "label": "Что ещё беспокоит"
    },
    {
      "id": "priorities",
      "label": "Что для вас важно"
    },
    {
      "id": "health",
      "label": "Другие болезни"
    },
    {
      "id": "safety",
      "label": "Безопасность"
    },
    {
      "id": "meds",
      "label": "Другие лекарства"
    }
  ],
  "options": [
    {
      "id": "age_12_17",
      "label": "От 12 до 17 лет",
      "group": "age",
      "hint": "Подростковый возраст: свои правила и свои ограничения инструкций"
    },
    {
      "id": "age_18_24",
      "label": "От 18 до 24 лет",
      "group": "age",
      "hint": "В первые недели лечения у молодых чаще бывают суицидальные мысли"
    },
    {
      "id": "age_65",
      "label": "65 лет и старше",
      "group": "age",
      "hint": "Выше риск низкого натрия, падений, кровотечений и влияния на ритм сердца"
    },
    {
      "id": "pregnancy",
      "label": "Беременность или её планирование",
      "group": "pregnancy",
      "hint": "Если уже принимаете препарат, не бросайте его резко"
    },
    {
      "id": "breastfeeding",
      "label": "Кормление грудью",
      "group": "pregnancy",
      "hint": "Часть препаратов проникает в молоко"
    },
    {
      "id": "anxiety",
      "label": "Сильная тревога или панические атаки",
      "group": "symptoms",
      "hint": "Тревога, которая мешает жить, или приступы паники"
    },
    {
      "id": "ocd",
      "label": "Навязчивые мысли и действия (ОКР)",
      "group": "symptoms",
      "hint": "Навязчивые мысли и повторяющиеся действия, которые трудно остановить"
    },
    {
      "id": "insomnia",
      "label": "Бессонница",
      "group": "symptoms",
      "hint": "Трудно заснуть или часто просыпаетесь"
    },
    {
      "id": "low_appetite",
      "label": "Плохой аппетит и потеря веса",
      "group": "symptoms",
      "hint": "Из-за депрессии ешьте мало и худеете"
    },
    {
      "id": "pain",
      "label": "Хроническая боль или диабетическая нейропатия",
      "group": "symptoms",
      "hint": "Долгая боль, в том числе боль в ногах при диабете"
    },
    {
      "id": "weight",
      "label": "Важно не набрать вес",
      "group": "priorities",
      "hint": "Прибавка веса особенно нежелательна"
    },
    {
      "id": "smoking",
      "label": "Хочу бросить курить",
      "group": "priorities",
      "hint": "Нужна помощь с отказом от курения"
    },
    {
      "id": "sexual",
      "label": "Важна сексуальная функция",
      "group": "priorities",
      "hint": "Снижение влечения или трудности с оргазмом были бы проблемой"
    },
    {
      "id": "withdrawal",
      "label": "Хочу препарат с наименьшими симптомами отмены",
      "group": "priorities",
      "hint": "Чтобы потом было проще закончить лечение"
    },
    {
      "id": "no_therapy",
      "label": "Психотерапия недоступна",
      "group": "priorities",
      "hint": "Нет возможности ходить к психотерапевту"
    },
    {
      "id": "heart",
      "label": "Болезни сердца или нарушения ритма",
      "group": "health",
      "hint": "Инфаркт, аритмия, сердечная недостаточность. Интервал QT видно на ЭКГ"
    },
    {
      "id": "epilepsy",
      "label": "Эпилепсия или судороги",
      "group": "health",
      "hint": "Сейчас или в прошлом"
    },
    {
      "id": "liver",
      "label": "Болезни печени",
      "group": "health",
      "hint": "Гепатит, цирроз, жировая болезнь печени, много алкоголя"
    },
    {
      "id": "kidney",
      "label": "Болезни почек",
      "group": "health",
      "hint": "Сниженная функция почек, хроническая болезнь почек, диализ"
    },
    {
      "id": "eating",
      "label": "Булимия или анорексия",
      "group": "health",
      "hint": "Сейчас или в прошлом"
    },
    {
      "id": "overdose",
      "label": "Риск передозировки",
      "group": "safety",
      "hint": "Суицидальные мысли или дома много таблеток"
    },
    {
      "id": "bipolar_self",
      "label": "У себя: мания или гипомания в прошлом, биполярное расстройство",
      "group": "safety",
      "hint": "Периоды необычно приподнятого настроения и энергии"
    },
    {
      "id": "bipolar_family",
      "label": "Биполярное расстройство у близких родственников",
      "group": "safety",
      "hint": "У родителей, братьев, сестёр или детей"
    },
    {
      "id": "tamoxifen",
      "label": "Принимаю тамоксифен",
      "group": "meds",
      "hint": "Препарат для лечения и профилактики рака груди"
    },
    {
      "id": "anticoag",
      "label": "Принимаю варфарин, другие антикоагулянты, ибупрофен или аспирин",
      "group": "meds",
      "hint": "Средства, разжижающие кровь, и обезболивающие. НПВП, например ибупрофен и диклофенак"
    },
    {
      "id": "maoi",
      "label": "Принимаю моклобемид, селегилин, линезолид или другие ИМАО",
      "group": "meds",
      "hint": "ИМАО: старая группа антидепрессантов, пирлиндол и другие; селегилин от Паркинсона; линезолид, антибиотик; метиленовый синий"
    },
    {
      "id": "cyp2d6",
      "label": "Принимаю метопролол и часть других препаратов сердца и психики",
      "group": "meds",
      "hint": "Метопролол и другие препараты от давления и аритмии, часть антипсихотиков. CYP2D6: фермент печени, который их перерабатывает"
    },
    {
      "id": "triptans",
      "label": "Принимаю триптаны или трамадол",
      "group": "meds",
      "hint": "Препараты от мигрени (суматриптан и другие) или обезболивающее трамадол"
    }
  ],
  "rules": [
    {
      "when": "age_12_17",
      "effects": [
        {
          "kind": "prefer",
          "reason": "NICE: если подростку нужен антидепрессант, то флуоксетин, вместе с психотерапией и после осмотра детским психиатром",
          "sources": [
            {
              "title": "NICE. Depression in children and young people: identification and management (NG134), рекомендации 1.5.3, от 1.6.1 до 1.6.22, 2019.",
              "url": "https://www.nice.org.uk/guidance/ng134/chapter/Recommendations"
            }
          ],
          "drugs": [
            "fluoxetine"
          ]
        },
        {
          "kind": "consider",
          "reason": "NICE: второй вариант, если флуоксетин не помог или не подошёл; решает опытный детский психиатр",
          "sources": [
            {
              "title": "NICE. Depression in children and young people: identification and management (NG134), рекомендации 1.5.3, от 1.6.1 до 1.6.22, 2019.",
              "url": "https://www.nice.org.uk/guidance/ng134/chapter/Recommendations"
            }
          ],
          "drugs": [
            "sertraline"
          ]
        },
        {
          "kind": "caution",
          "reason": "NICE называет его вторым вариантом после флуоксетина, но российская инструкция до 18 лет его не разрешает",
          "sources": [
            {
              "title": "Справочник Видаль: Циталопрам, таблетки, инструкция (ЛП-001955 от 25.12.12).",
              "url": "https://www.vidal.ru/drugs/citalopram__38632"
            },
            {
              "title": "NICE. Depression in children and young people: identification and management (NG134), рекомендации 1.5.3, от 1.6.1 до 1.6.22, 2019.",
              "url": "https://www.nice.org.uk/guidance/ng134/chapter/Recommendations"
            }
          ],
          "drugs": [
            "citalopram"
          ]
        },
        {
          "kind": "caution",
          "reason": "В США разрешён при депрессии с 12 лет, а в России инструкция разрешает его только с 18",
          "sources": [
            {
              "title": "Справочник Видаль: Селектра (эсциталопрам), инструкция.",
              "url": "https://www.vidal.ru/drugs/selectra__23088"
            },
            {
              "title": "Lexapro (escitalopram), инструкция по применению и руководство для пациента (Medication Guide), одобренные FDA. AbbVie, редакции 2023 и 2024 годов.",
              "url": "https://www.rxabbvie.com/pdf/lexapro_pi.pdf"
            }
          ],
          "drugs": [
            "escitalopram"
          ]
        },
        {
          "kind": "avoid",
          "reason": "NICE прямо не рекомендует их при депрессии у детей и подростков",
          "sources": [
            {
              "title": "NICE. Depression in children and young people: identification and management (NG134), рекомендации 1.5.3, от 1.6.1 до 1.6.22, 2019.",
              "url": "https://www.nice.org.uk/guidance/ng134/chapter/Recommendations"
            }
          ],
          "drugs": [
            "paroxetine",
            "venlafaxine"
          ]
        },
        {
          "kind": "avoid",
          "reason": "NICE не рекомендует трициклические антидепрессанты при депрессии у детей и подростков",
          "sources": [
            {
              "title": "NICE. Depression in children and young people: identification and management (NG134), рекомендации 1.5.3, от 1.6.1 до 1.6.22, 2019.",
              "url": "https://www.nice.org.uk/guidance/ng134/chapter/Recommendations"
            }
          ],
          "drugs": [
            "amitriptyline",
            "clomipramine"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Российская инструкция: при депрессии противопоказан до 18 лет",
          "sources": [
            {
              "title": "Справочник Видаль: Феварин (флувоксамин), инструкция, раздел «Режим дозирования» при депрессии.",
              "url": "https://www.vidal.ru/drugs/fevarin__1698"
            }
          ],
          "drugs": [
            "fluvoxamine"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Российская инструкция: противопоказан до 18 лет",
          "sources": [
            {
              "title": "Справочник Видаль: Миртазонал (миртазапин), инструкция.",
              "url": "https://www.vidal.ru/drugs/mirtazonal__21725"
            }
          ],
          "drugs": [
            "mirtazapine"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Российская инструкция: противопоказан до 18 лет",
          "sources": [
            {
              "title": "Справочник Видаль: Вальдоксан (агомелатин), инструкция (ЛП-№(000528)-(РГ-RU) от 25.01.22).",
              "url": "https://www.vidal.ru/drugs/valdoxan__29817"
            }
          ],
          "drugs": [
            "agomelatine"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Российская инструкция: противопоказан до 18 лет",
          "sources": [
            {
              "title": "Справочник Видаль: Бринтелликс (вортиоксетин), разделы «Режим дозирования» и «Противопоказания».",
              "url": "https://www.vidal.ru/drugs/brintellix"
            }
          ],
          "drugs": [
            "vortioxetine"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Российская инструкция: не применяют до 18 лет",
          "sources": [
            {
              "title": "Справочник Видаль: Леривон (миансерин), инструкция.",
              "url": "https://www.vidal.ru/drugs/lerivon__5330"
            }
          ],
          "drugs": [
            "mianserin"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Инструкция: противопоказан до 18 лет; к тому же в России сейчас не зарегистрирован",
          "sources": [
            {
              "title": "Справочник Видаль: Иксел (милнаципран), капсулы 25 и 50 мг, инструкция; РУ П N011787/01, отмена государственной регистрации.",
              "url": "https://www.vidal.ru/drugs/ixel__1316"
            }
          ],
          "drugs": [
            "milnacipran"
          ]
        },
        {
          "kind": "caution",
          "reason": "Российская инструкция: до 18 лет с осторожностью",
          "sources": [
            {
              "title": "Справочник Видаль: тразодон (Триттико), разделы «Режим дозирования» и «Противопоказания».",
              "url": "https://www.vidal.ru/drugs/trittico__45130"
            }
          ],
          "drugs": [
            "trazodone"
          ]
        },
        {
          "kind": "caution",
          "reason": "Российская инструкция: у детей с осторожностью, данных о безопасности мало",
          "sources": [
            {
              "title": "Справочник Видаль: Азафен (пипофезин), таблетки 25 мг, разделы «Режим дозирования» и «Особые указания» (ЛП-№(005772)-(РГ-RU) от 14.06.24).",
              "url": "https://www.vidal.ru/drugs/azaphen__14737"
            }
          ],
          "drugs": [
            "pipofezine"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Европейская инструкция: при депрессии до 18 лет не применяют из-за вопросов к безопасности и пользе",
          "sources": [
            {
              "title": "Cymbalta (duloxetine): общая характеристика лекарственного препарата, разделы 4.2 и 4.3. Европейское агентство лекарственных средств.",
              "url": "https://www.ema.europa.eu/en/documents/product-information/cymbalta-epar-product-information_en.pdf"
            }
          ],
          "drugs": [
            "duloxetine"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Не одобрен до 18 лет: в двух исследованиях у детей и подростков не помог",
          "sources": [
            {
              "title": "Pristiq (desvenlafaxine) таблетки с замедленным высвобождением, инструкция по применению: разделы 2.1 и 2.5 о дозах, приёме и отмене. DailyMed, Wyeth (Pfizer), 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0f43610c-f290-46ea-d186-4f998ed99fce"
            }
          ],
          "drugs": [
            "desvenlafaxine"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Не одобрен до 18 лет: безопасность и польза у детей и подростков не установлены",
          "sources": [
            {
              "title": "Wellbutrin SR (bupropion hydrochloride), инструкция по применению. GlaxoSmithKline, DailyMed.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cbc8c074-f080-4489-a5ae-207b5fadeba3"
            }
          ],
          "drugs": [
            "bupropion"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Российская инструкция: детский возраст в противопоказаниях",
          "sources": [
            {
              "title": "Справочник Видаль: Аурорикс (моклобемид), сведения о регистрации (РУ П N015213/01 отменено).",
              "url": "https://www.vidal.ru/drugs/aurorix__5357"
            }
          ],
          "drugs": [
            "moclobemide"
          ]
        },
        {
          "kind": "caution",
          "reason": "Российская инструкция не запрещает его до 18 лет, но и не даёт отдельных доз для подростков; данных мало",
          "sources": [
            {
              "title": "Справочник Видаль: Пиразидол (пирлиндол), таблетки 25 и 50 мг, разделы «Режим дозирования» и «Противопоказания» (ЛП-№(001788)-(РГ-RU) от 08.02.23).",
              "url": "https://www.vidal.ru/drugs/pyrazidol__40373"
            }
          ],
          "drugs": [
            "pirlindole"
          ]
        }
      ]
    },
    {
      "when": "age_18_24",
      "effects": [
        {
          "kind": "prefer",
          "reason": "CANMAT: до 25 лет баланс пользы, побочных эффектов и отмены может быть в пользу флуоксетина или агомелатина",
          "sources": [
            {
              "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
            }
          ],
          "drugs": [
            "fluoxetine",
            "agomelatine"
          ]
        }
      ]
    },
    {
      "when": "age_65",
      "effects": [
        {
          "kind": "avoid",
          "reason": "Критерии Бирс советуют пожилым их избегать: сильное холинолитическое действие, сонливость, падение давления при вставании",
          "sources": [
            {
              "title": "2023 American Geriatrics Society Beers Criteria Update Expert Panel. American Geriatrics Society 2023 updated AGS Beers Criteria for potentially inappropriate medication use in older adults. Journal of the American Geriatrics Society, 2023.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12478568/"
            }
          ],
          "drugs": [
            "paroxetine",
            "amitriptyline",
            "clomipramine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Влияет на ритм сердца; после 60 лет доза не выше 20 мг в сутки",
          "sources": [
            {
              "title": "Celexa (citalopram), инструкция по применению: разделы 2.3 и 5.2 об интервале QT и дозах. DailyMed, Allergan, 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4259d9b1-de34-43a4-85a8-41dd214e9177"
            }
          ],
          "drugs": [
            "citalopram"
          ]
        },
        {
          "kind": "note",
          "reason": "Пожилым обычно назначают меньшую дозу",
          "sources": [
            {
              "title": "Lexapro (escitalopram), инструкция по применению и руководство для пациента (Medication Guide), одобренные FDA. AbbVie, редакции 2023 и 2024 годов.",
              "url": "https://www.rxabbvie.com/pdf/lexapro_pi.pdf"
            }
          ],
          "drugs": [
            "escitalopram"
          ]
        },
        {
          "kind": "note",
          "reason": "Могут снижать натрий в крови; Бирс советуют проверять его в начале лечения и при смене дозы. Это повод для анализа, а не для отказа от препарата",
          "sources": [
            {
              "title": "2023 American Geriatrics Society Beers Criteria Update Expert Panel. American Geriatrics Society 2023 updated AGS Beers Criteria for potentially inappropriate medication use in older adults. Journal of the American Geriatrics Society, 2023.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12478568/"
            }
          ],
          "drugs": [
            "escitalopram",
            "sertraline",
            "fluoxetine",
            "citalopram",
            "fluvoxamine",
            "venlafaxine",
            "duloxetine",
            "desvenlafaxine",
            "milnacipran",
            "mirtazapine"
          ]
        },
        {
          "kind": "consider",
          "reason": "CANMAT: после 65 лет СИОЗСН, например дулоксетин, могут помогать лучше, а СИОЗС хуже",
          "sources": [
            {
              "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
            }
          ],
          "drugs": [
            "duloxetine"
          ]
        },
        {
          "kind": "consider",
          "reason": "CANMAT: единственные антидепрессанты, не связанные с низким натрием",
          "sources": [
            {
              "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
            }
          ],
          "drugs": [
            "mianserin",
            "agomelatine"
          ]
        },
        {
          "kind": "note",
          "reason": "Тоже могут снижать натрий в крови; у пожилых это проверяют анализом",
          "sources": [
            {
              "title": "Trintellix (vortioxetine), инструкция по применению. DailyMed, Takeda.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1a5b68e2-14d0-419d-9ec6-1ca97145e838"
            },
            {
              "title": "Trazodone hydrochloride tablets, инструкция по применению. DailyMed, Teva, 2025.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4006d439-e2de-4590-82e9-fc9d56e3ec1b"
            }
          ],
          "drugs": [
            "vortioxetine",
            "trazodone"
          ]
        },
        {
          "kind": "caution",
          "reason": "Европейская инструкция: от 75 лет не применяют, польза в этом возрасте не доказана",
          "sources": [
            {
              "title": "Valdoxan (agomelatine), общая характеристика лекарственного препарата (SmPC). Европейское агентство лекарственных средств (EMA).",
              "url": "https://www.ema.europa.eu/en/documents/product-information/valdoxan-epar-product-information_en.pdf"
            }
          ],
          "drugs": [
            "agomelatine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Инструкция: агранулоцитоз чаще всего развивается через 4 до 6 недель лечения и чаще у пожилых; при лихорадке или боли в горле нужен анализ крови",
          "sources": [
            {
              "title": "Справочник Видаль: Леривон (миансерин), инструкция.",
              "url": "https://www.vidal.ru/drugs/lerivon__5330"
            }
          ],
          "drugs": [
            "mianserin"
          ]
        }
      ]
    },
    {
      "when": "pregnancy",
      "effects": [
        {
          "kind": "caution",
          "reason": "В первом триместре связан с пороками сердца у ребёнка; начинать его при беременности или её планировании советуют, только обдумав другие варианты",
          "sources": [
            {
              "title": "Paxil (paroxetine), инструкция по применению: разделы о судорогах, кровотечениях, варфарине и тамоксифене. DailyMed, Apotex, 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ef3b5cbe-f9e1-c1ac-79da-cfe14e3a7e7e"
            },
            {
              "title": "Bérard A. et al. The risk of major cardiac malformations associated with paroxetine use during the first trimester of pregnancy: a systematic review and meta-analysis. British Journal of Clinical Pharmacology, 2016.",
              "url": "https://pubmed.ncbi.nlm.nih.gov/26613360/"
            }
          ],
          "drugs": [
            "paroxetine"
          ]
        },
        {
          "kind": "caution",
          "reason": "В российской инструкции (Серената) беременность в противопоказаниях; решение только с врачом",
          "sources": [
            {
              "title": "Справочник Видаль: Серената (сертралин), инструкция (ЛП-№(006156)-(РГ-RU) от 08.07.24).",
              "url": "https://www.vidal.ru/drugs/serenata__6638"
            }
          ],
          "drugs": [
            "sertraline"
          ]
        },
        {
          "kind": "caution",
          "reason": "В российской инструкции беременность и кормление в противопоказаниях; решение только с врачом",
          "sources": [
            {
              "title": "Справочник Видаль: Профлузак (флуоксетин), инструкция.",
              "url": "https://www.vidal.ru/drugs/proflusak__1402"
            }
          ],
          "drugs": [
            "fluoxetine"
          ]
        },
        {
          "kind": "caution",
          "reason": "В российской инструкции беременность в противопоказаниях",
          "sources": [
            {
              "title": "Справочник Видаль: Велафакс (венлафаксин), таблетки, раздел «Режим дозирования».",
              "url": "https://www.vidal.ru/drugs/velafax__8875"
            }
          ],
          "drugs": [
            "venlafaxine"
          ]
        },
        {
          "kind": "caution",
          "reason": "В российской инструкции беременность в противопоказаниях",
          "sources": [
            {
              "title": "Справочник Видаль: Миртазонал (миртазапин), инструкция.",
              "url": "https://www.vidal.ru/drugs/mirtazonal__21725"
            }
          ],
          "drugs": [
            "mirtazapine"
          ]
        },
        {
          "kind": "caution",
          "reason": "В российской инструкции беременность и кормление в противопоказаниях",
          "sources": [
            {
              "title": "Справочник Видаль: тразодон (Триттико), разделы «Режим дозирования» и «Противопоказания».",
              "url": "https://www.vidal.ru/drugs/trittico__45130"
            }
          ],
          "drugs": [
            "trazodone"
          ]
        },
        {
          "kind": "caution",
          "reason": "В российской инструкции противопоказан в первом триместре",
          "sources": [
            {
              "title": "Справочник Видаль: Анафранил (кломипрамин), таблетки 25 мг, раздел «Режим дозирования».",
              "url": "https://www.vidal.ru/drugs/anafranil__2055"
            }
          ],
          "drugs": [
            "clomipramine"
          ]
        },
        {
          "kind": "caution",
          "reason": "В российской инструкции беременность и кормление в противопоказаниях",
          "sources": [
            {
              "title": "Справочник Видаль: Азафен (пипофезин), таблетки 25 мг, разделы «Режим дозирования» и «Особые указания» (ЛП-№(005772)-(РГ-RU) от 14.06.24).",
              "url": "https://www.vidal.ru/drugs/azaphen__14737"
            }
          ],
          "drugs": [
            "pipofezine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Данных о беременности мало; европейская инструкция советует при беременности его избегать",
          "sources": [
            {
              "title": "Valdoxan (agomelatine), общая характеристика лекарственного препарата (SmPC). Европейское агентство лекарственных средств (EMA).",
              "url": "https://www.ema.europa.eu/en/documents/product-information/valdoxan-epar-product-information_en.pdf"
            },
            {
              "title": "Vigod S.N. et al. Canadian Network for Mood and Anxiety Treatments 2024 Clinical Practice Guideline for the Management of Perinatal Mood, Anxiety, and Related Disorders. Canadian Journal of Psychiatry, 2025.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11985483/"
            }
          ],
          "drugs": [
            "agomelatine"
          ]
        },
        {
          "kind": "caution",
          "reason": "CANMAT: данных о безопасности при беременности недостаточно",
          "sources": [
            {
              "title": "Vigod S.N. et al. Canadian Network for Mood and Anxiety Treatments 2024 Clinical Practice Guideline for the Management of Perinatal Mood, Anxiety, and Related Disorders. Canadian Journal of Psychiatry, 2025.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11985483/"
            }
          ],
          "drugs": [
            "vortioxetine",
            "mianserin",
            "milnacipran",
            "moclobemide"
          ]
        },
        {
          "kind": "caution",
          "reason": "CANMAT: при беременности вторая линия, данных о безопасности меньше, чем у сертралина, циталопрама и эсциталопрама",
          "sources": [
            {
              "title": "Vigod S.N. et al. Canadian Network for Mood and Anxiety Treatments 2024 Clinical Practice Guideline for the Management of Perinatal Mood, Anxiety, and Related Disorders. Canadian Journal of Psychiatry, 2025.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11985483/"
            }
          ],
          "drugs": [
            "duloxetine",
            "bupropion",
            "desvenlafaxine",
            "fluvoxamine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Российская инструкция: исследований при беременности не проводили",
          "sources": [
            {
              "title": "Справочник Видаль: Пиразидол (пирлиндол), таблетки 25 и 50 мг, разделы «Режим дозирования» и «Противопоказания» (ЛП-№(001788)-(РГ-RU) от 08.02.23).",
              "url": "https://www.vidal.ru/drugs/pyrazidol__40373"
            }
          ],
          "drugs": [
            "pirlindole"
          ]
        },
        {
          "kind": "note",
          "reason": "CANMAT: при беременности первая линия, у них самые обнадёживающие данные о безопасности",
          "sources": [
            {
              "title": "Vigod S.N. et al. Canadian Network for Mood and Anxiety Treatments 2024 Clinical Practice Guideline for the Management of Perinatal Mood, Anxiety, and Related Disorders. Canadian Journal of Psychiatry, 2025.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11985483/"
            }
          ],
          "drugs": [
            "sertraline",
            "citalopram",
            "escitalopram"
          ]
        },
        {
          "kind": "note",
          "reason": "CANMAT: при беременности вторая линия; изучен хорошо, но риск для новорождённого, возможно, чуть выше",
          "sources": [
            {
              "title": "Vigod S.N. et al. Canadian Network for Mood and Anxiety Treatments 2024 Clinical Practice Guideline for the Management of Perinatal Mood, Anxiety, and Related Disorders. Canadian Journal of Psychiatry, 2025.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11985483/"
            }
          ],
          "drugs": [
            "fluoxetine"
          ]
        },
        {
          "kind": "caution",
          "reason": "В российской инструкции: при беременности не следует применять, особенно в I и III триместрах",
          "sources": [
            {
              "title": "Справочник Видаль: Амитриптилин, таблетки 25 мг, инструкция (ЛП-№(002245)-(РГ-RU) от 26.04.23).",
              "url": "https://www.vidal.ru/drugs/amitriptyline__3916"
            }
          ],
          "drugs": [
            "amitriptyline"
          ]
        }
      ]
    },
    {
      "when": "breastfeeding",
      "effects": [
        {
          "kind": "caution",
          "reason": "В российской инструкции (Серената) кормление грудью в противопоказаниях; решение с врачом",
          "sources": [
            {
              "title": "Справочник Видаль: Серената (сертралин), инструкция (ЛП-№(006156)-(РГ-RU) от 08.07.24).",
              "url": "https://www.vidal.ru/drugs/serenata__6638"
            }
          ],
          "drugs": [
            "sertraline"
          ]
        },
        {
          "kind": "caution",
          "reason": "В российской инструкции кормление грудью в противопоказаниях",
          "sources": [
            {
              "title": "Справочник Видаль: Профлузак (флуоксетин), инструкция.",
              "url": "https://www.vidal.ru/drugs/proflusak__1402"
            }
          ],
          "drugs": [
            "fluoxetine"
          ]
        },
        {
          "kind": "caution",
          "reason": "В российской инструкции кормление грудью в противопоказаниях",
          "sources": [
            {
              "title": "Справочник Видаль: Велафакс (венлафаксин), таблетки, раздел «Режим дозирования».",
              "url": "https://www.vidal.ru/drugs/velafax__8875"
            }
          ],
          "drugs": [
            "venlafaxine"
          ]
        },
        {
          "kind": "caution",
          "reason": "В российской инструкции кормление грудью в противопоказаниях",
          "sources": [
            {
              "title": "Справочник Видаль: Миртазонал (миртазапин), инструкция.",
              "url": "https://www.vidal.ru/drugs/mirtazonal__21725"
            }
          ],
          "drugs": [
            "mirtazapine"
          ]
        },
        {
          "kind": "caution",
          "reason": "В российской инструкции кормление грудью в противопоказаниях",
          "sources": [
            {
              "title": "Справочник Видаль: тразодон (Триттико), разделы «Режим дозирования» и «Противопоказания».",
              "url": "https://www.vidal.ru/drugs/trittico__45130"
            }
          ],
          "drugs": [
            "trazodone"
          ]
        },
        {
          "kind": "caution",
          "reason": "В российской инструкции кормление грудью в противопоказаниях",
          "sources": [
            {
              "title": "Справочник Видаль: Амитриптилин, таблетки 25 мг, инструкция (ЛП-№(002245)-(РГ-RU) от 26.04.23).",
              "url": "https://www.vidal.ru/drugs/amitriptyline__3916"
            }
          ],
          "drugs": [
            "amitriptyline"
          ]
        },
        {
          "kind": "caution",
          "reason": "Проникает в молоко; инструкция предлагает решить вопрос о прекращении кормления",
          "sources": [
            {
              "title": "Справочник Видаль: Анафранил (кломипрамин), таблетки 25 мг, раздел «Режим дозирования».",
              "url": "https://www.vidal.ru/drugs/anafranil__2055"
            }
          ],
          "drugs": [
            "clomipramine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Инструкция: если препарат нужен, кормление грудью прекращают",
          "sources": [
            {
              "title": "Справочник Видаль: Вальдоксан (агомелатин), инструкция (ЛП-№(000528)-(РГ-RU) от 25.01.22).",
              "url": "https://www.vidal.ru/drugs/valdoxan__29817"
            }
          ],
          "drugs": [
            "agomelatine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Инструкция: из-за отсутствия опыта решают вопрос о прекращении кормления",
          "sources": [
            {
              "title": "Справочник Видаль: Депратал (дулоксетин), разделы «Режим дозирования» и «Противопоказания».",
              "url": "https://www.vidal.ru/drugs/depratal"
            }
          ],
          "drugs": [
            "duloxetine"
          ]
        },
        {
          "kind": "caution",
          "reason": "В российской инструкции кормление грудью в противопоказаниях",
          "sources": [
            {
              "title": "Справочник Видаль: Азафен (пипофезин), таблетки 25 мг, разделы «Режим дозирования» и «Особые указания» (ЛП-№(005772)-(РГ-RU) от 14.06.24).",
              "url": "https://www.vidal.ru/drugs/azaphen__14737"
            }
          ],
          "drugs": [
            "pipofezine"
          ]
        },
        {
          "kind": "caution",
          "reason": "В молоке его мало, но данных пока недостаточно: ребёнка наблюдают внимательнее",
          "sources": [
            {
              "title": "Vortioxetine. Drugs and Lactation Database (LactMed), NICHD.",
              "url": "https://www.ncbi.nlm.nih.gov/books/NBK500835/"
            }
          ],
          "drugs": [
            "vortioxetine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Данных мало: ребёнка наблюдают внимательнее",
          "sources": [
            {
              "title": "Mianserin. Drugs and Lactation Database (LactMed), NICHD.",
              "url": "https://www.ncbi.nlm.nih.gov/books/NBK501764/"
            }
          ],
          "drugs": [
            "mianserin"
          ]
        },
        {
          "kind": "caution",
          "reason": "Описаны возможные судороги у грудных детей; особенно у новорождённых может быть лучше другой препарат",
          "sources": [
            {
              "title": "Bupropion. Drugs and Lactation Database (LactMed), NICHD.",
              "url": "https://www.ncbi.nlm.nih.gov/books/NBK501184/"
            }
          ],
          "drugs": [
            "bupropion"
          ]
        },
        {
          "kind": "caution",
          "reason": "CANMAT: при кормлении данных о безопасности меньше, чем у препаратов первой линии",
          "sources": [
            {
              "title": "Vigod S.N. et al. Canadian Network for Mood and Anxiety Treatments 2024 Clinical Practice Guideline for the Management of Perinatal Mood, Anxiety, and Related Disorders. Canadian Journal of Psychiatry, 2025.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11985483/"
            },
            {
              "title": "Desvenlafaxine. Drugs and Lactation Database (LactMed), NICHD.",
              "url": "https://www.ncbi.nlm.nih.gov/books/NBK501592/"
            }
          ],
          "drugs": [
            "desvenlafaxine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Данных мало; у одного ребёнка были понос, рвота и возбуждение, за этим следят",
          "sources": [
            {
              "title": "Fluvoxamine. Drugs and Lactation Database (LactMed), NICHD.",
              "url": "https://www.ncbi.nlm.nih.gov/books/NBK501187/"
            }
          ],
          "drugs": [
            "fluvoxamine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Надёжных долгосрочных данных нет; российская инструкция кормление запрещает",
          "sources": [
            {
              "title": "Moclobemide. Drugs and Lactation Database (LactMed), NICHD.",
              "url": "https://www.ncbi.nlm.nih.gov/books/NBK501765/"
            },
            {
              "title": "Справочник Видаль: Аурорикс (моклобемид), сведения о регистрации (РУ П N015213/01 отменено).",
              "url": "https://www.vidal.ru/drugs/aurorix__5357"
            }
          ],
          "drugs": [
            "moclobemide"
          ]
        },
        {
          "kind": "caution",
          "reason": "Российская инструкция: исследований при кормлении грудью не проводили",
          "sources": [
            {
              "title": "Справочник Видаль: Пиразидол (пирлиндол), таблетки 25 и 50 мг, разделы «Режим дозирования» и «Противопоказания» (ЛП-№(001788)-(РГ-RU) от 08.02.23).",
              "url": "https://www.vidal.ru/drugs/pyrazidol__40373"
            }
          ],
          "drugs": [
            "pirlindole"
          ]
        },
        {
          "kind": "note",
          "reason": "LactMed: большинство экспертов считают его предпочтительным при кормлении грудью",
          "sources": [
            {
              "title": "Sertraline. Drugs and Lactation Database (LactMed), NICHD.",
              "url": "https://www.ncbi.nlm.nih.gov/books/NBK501191/"
            }
          ],
          "drugs": [
            "sertraline"
          ]
        }
      ]
    },
    {
      "when": "anxiety",
      "effects": [
        {
          "kind": "prefer",
          "reason": "NICE при генерализованной тревоге советует начинать с СИОЗС, и первым можно предложить сертралин",
          "sources": [
            {
              "title": "NICE. Generalised anxiety disorder and panic disorder in adults: management (CG113), рекомендации 1.2.23, 1.2.24, 1.2.26, 1.2.28, 1.3.20, 1.3.25, 1.3.27, 1.3.28.",
              "url": "https://www.nice.org.uk/guidance/cg113"
            }
          ],
          "drugs": [
            "sertraline"
          ]
        },
        {
          "kind": "consider",
          "reason": "CANMAT: при депрессии с тревогой подходят все антидепрессанты первой линии, ни один не работает заметно лучше",
          "sources": [
            {
              "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
            }
          ],
          "drugs": [
            "escitalopram",
            "fluoxetine",
            "paroxetine",
            "citalopram",
            "fluvoxamine",
            "venlafaxine",
            "duloxetine",
            "desvenlafaxine",
            "milnacipran",
            "mirtazapine",
            "agomelatine",
            "vortioxetine",
            "bupropion",
            "mianserin"
          ]
        }
      ]
    },
    {
      "when": "ocd",
      "effects": [
        {
          "kind": "prefer",
          "reason": "NICE: при ОКР у взрослых начинают с одного из этих СИОЗС; эффект часто наступает позже, до 12 недель",
          "sources": [
            {
              "title": "NICE. Obsessive-compulsive disorder and body dysmorphic disorder: treatment (CG31), рекомендации 1.5.3.1, 1.5.3.8, 1.5.3.13, 1.5.3.15, 1.5.3.20.",
              "url": "https://www.nice.org.uk/guidance/cg31"
            }
          ],
          "drugs": [
            "fluoxetine",
            "fluvoxamine",
            "paroxetine",
            "sertraline",
            "citalopram"
          ]
        },
        {
          "kind": "consider",
          "reason": "NICE: если хотя бы один СИОЗС не помог или плохо переносился",
          "sources": [
            {
              "title": "NICE. Obsessive-compulsive disorder and body dysmorphic disorder: treatment (CG31), рекомендации 1.5.3.1, 1.5.3.8, 1.5.3.13, 1.5.3.15, 1.5.3.20.",
              "url": "https://www.nice.org.uk/guidance/cg31"
            }
          ],
          "drugs": [
            "clomipramine"
          ]
        },
        {
          "kind": "note",
          "reason": "NICE: при ОКР без других расстройств эти препараты обычно не используют; при сочетании с депрессией решает врач",
          "sources": [
            {
              "title": "NICE. Obsessive-compulsive disorder and body dysmorphic disorder: treatment (CG31), рекомендации 1.5.3.1, 1.5.3.8, 1.5.3.13, 1.5.3.15, 1.5.3.20.",
              "url": "https://www.nice.org.uk/guidance/cg31"
            }
          ],
          "drugs": [
            "venlafaxine",
            "duloxetine",
            "desvenlafaxine",
            "milnacipran",
            "amitriptyline",
            "moclobemide",
            "pirlindole"
          ]
        }
      ]
    },
    {
      "when": "insomnia",
      "effects": [
        {
          "kind": "prefer",
          "reason": "CANMAT: при нарушениях сна агомелатин в первой линии",
          "sources": [
            {
              "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
            }
          ],
          "drugs": [
            "agomelatine"
          ]
        },
        {
          "kind": "consider",
          "reason": "CANMAT: при нарушениях сна во второй линии; оба вызывают сонливость",
          "sources": [
            {
              "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
            }
          ],
          "drugs": [
            "mirtazapine",
            "trazodone"
          ]
        },
        {
          "kind": "caution",
          "reason": "Бессонница среди частых побочных эффектов",
          "sources": [
            {
              "title": "Wellbutrin SR (bupropion hydrochloride), инструкция по применению. GlaxoSmithKline, DailyMed.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cbc8c074-f080-4489-a5ae-207b5fadeba3"
            }
          ],
          "drugs": [
            "bupropion"
          ]
        }
      ]
    },
    {
      "when": "low_appetite",
      "effects": [
        {
          "kind": "prefer",
          "reason": "Повышает аппетит и вес; когда депрессия отняла аппетит, это может быть плюсом",
          "sources": [
            {
              "title": "Remeron и RemeronSolTab (mirtazapine), инструкция по применению. DailyMed, Organon.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=98ad1917-a094-44f5-a28f-a64a8cfcd887"
            },
            {
              "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
            }
          ],
          "drugs": [
            "mirtazapine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Инструкция предупреждает о заметной потере веса",
          "sources": [
            {
              "title": "Prozac (fluoxetine), инструкция по применению: противопоказания (тиоридазин) и раздел 5.14 о длительном выведении. DailyMed, Eli Lilly (Dista), 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c88f33ed-6dfb-4c5e-bc01-d8e36dd97299"
            }
          ],
          "drugs": [
            "fluoxetine"
          ]
        }
      ]
    },
    {
      "when": "pain",
      "effects": [
        {
          "kind": "prefer",
          "reason": "При диабетической нейропатии помогает уменьшить боль; CANMAT ставит его в первую линию при боли",
          "sources": [
            {
              "title": "Lunn M.P., Hughes R.A., Wiffen P.J. Duloxetine for treating painful neuropathy, chronic pain or fibromyalgia. Cochrane Database of Systematic Reviews, 2014.",
              "url": "https://pubmed.ncbi.nlm.nih.gov/24385423/"
            },
            {
              "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
            }
          ],
          "drugs": [
            "duloxetine"
          ]
        },
        {
          "kind": "consider",
          "reason": "CANMAT: СИОЗСН при сопутствующей боли помогают лучше, чем СИОЗС",
          "sources": [
            {
              "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
            }
          ],
          "drugs": [
            "venlafaxine",
            "desvenlafaxine",
            "milnacipran"
          ]
        },
        {
          "kind": "consider",
          "reason": "CANMAT: амитриптилин может подходить при сопутствующей боли, но это вторая линия",
          "sources": [
            {
              "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
            }
          ],
          "drugs": [
            "amitriptyline"
          ]
        }
      ]
    },
    {
      "when": "weight",
      "effects": [
        {
          "kind": "caution",
          "reason": "Заметно повышает аппетит и вес; у Гафура прибавка веса на нём была самой частой",
          "sources": [
            {
              "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
            },
            {
              "title": "Gafoor R., Booth H.P., Gulliford M.C. Antidepressant utilisation and incidence of weight gain during 10 years’ follow-up: population based cohort study. BMJ, 2018.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5964332/"
            }
          ],
          "drugs": [
            "mirtazapine"
          ]
        },
        {
          "kind": "caution",
          "reason": "CANMAT по прибавке веса относит его к менее благоприятным",
          "sources": [
            {
              "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
            }
          ],
          "drugs": [
            "paroxetine"
          ]
        },
        {
          "kind": "consider",
          "reason": "Связаны с меньшей прибавкой веса, чем миртазапин",
          "sources": [
            {
              "title": "Gafoor R., Booth H.P., Gulliford M.C. Antidepressant utilisation and incidence of weight gain during 10 years’ follow-up: population based cohort study. BMJ, 2018.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5964332/"
            }
          ],
          "drugs": [
            "bupropion",
            "fluoxetine"
          ]
        },
        {
          "kind": "consider",
          "reason": "CANMAT по прибавке веса относит их к более благоприятным",
          "sources": [
            {
              "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
            }
          ],
          "drugs": [
            "escitalopram",
            "fluvoxamine",
            "desvenlafaxine",
            "vortioxetine",
            "agomelatine"
          ]
        }
      ]
    },
    {
      "when": "smoking",
      "effects": [
        {
          "kind": "prefer",
          "reason": "Помогает бросить курить, курить бросают надолго примерно в 1,6 раза чаще; в России сейчас не зарегистрирован",
          "sources": [
            {
              "title": "Howes S. et al. Antidepressants for smoking cessation. Cochrane Database of Systematic Reviews, 2020.",
              "url": "https://pubmed.ncbi.nlm.nih.gov/32319681/"
            }
          ],
          "drugs": [
            "bupropion"
          ]
        }
      ]
    },
    {
      "when": "sexual",
      "effects": [
        {
          "kind": "prefer",
          "reason": "CANMAT: сексуальные побочные эффекты у них бывают реже",
          "sources": [
            {
              "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
            }
          ],
          "drugs": [
            "bupropion",
            "mirtazapine",
            "agomelatine",
            "vortioxetine",
            "desvenlafaxine"
          ]
        },
        {
          "kind": "consider",
          "reason": "По сексуальной функции не отличался от плацебо; в России сейчас не зарегистрирован",
          "sources": [
            {
              "title": "Serretti A., Chiesa A. Treatment-emergent sexual dysfunction related to antidepressants: a meta-analysis. Journal of Clinical Psychopharmacology, 2009.",
              "url": "https://pubmed.ncbi.nlm.nih.gov/19440080/"
            }
          ],
          "drugs": [
            "moclobemide"
          ]
        },
        {
          "kind": "caution",
          "reason": "Сексуальные нарушения на них бывают значимо чаще, чем на плацебо",
          "sources": [
            {
              "title": "Serretti A., Chiesa A. Treatment-emergent sexual dysfunction related to antidepressants: a meta-analysis. Journal of Clinical Psychopharmacology, 2009.",
              "url": "https://pubmed.ncbi.nlm.nih.gov/19440080/"
            }
          ],
          "drugs": [
            "sertraline",
            "venlafaxine",
            "citalopram",
            "paroxetine",
            "fluoxetine",
            "duloxetine",
            "escitalopram",
            "fluvoxamine"
          ]
        }
      ]
    },
    {
      "when": "withdrawal",
      "effects": [
        {
          "kind": "prefer",
          "reason": "CANMAT: низкий или минимальный риск симптомов отмены",
          "sources": [
            {
              "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
            }
          ],
          "drugs": [
            "agomelatine",
            "bupropion",
            "fluoxetine",
            "mirtazapine",
            "vortioxetine"
          ]
        },
        {
          "kind": "caution",
          "reason": "CANMAT и NICE: симптомы отмены у них чаще и тяжелее",
          "sources": [
            {
              "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
            },
            {
              "title": "NICE. Depression in adults: treatment and management (NG222), рекомендации 1.2.7 и 1.4.1 о прошлом опыте лечения, 1.4.38 о зверобое.",
              "url": "https://www.nice.org.uk/guidance/ng222"
            }
          ],
          "drugs": [
            "paroxetine",
            "venlafaxine"
          ]
        },
        {
          "kind": "caution",
          "reason": "В метаанализе Хенсслера связан с более частыми симптомами отмены",
          "sources": [
            {
              "title": "Henssler J. et al. Incidence of antidepressant discontinuation symptoms: a systematic review and meta-analysis. Lancet Psychiatry, 2024.",
              "url": "https://pubmed.ncbi.nlm.nih.gov/38851198/"
            }
          ],
          "drugs": [
            "desvenlafaxine"
          ]
        },
        {
          "kind": "caution",
          "reason": "В метаанализе Хенсслера симптомы отмены при нём встречались чаще",
          "sources": [
            {
              "title": "Henssler J. et al. Incidence of antidepressant discontinuation symptoms: a systematic review and meta-analysis. Lancet Psychiatry, 2024.",
              "url": "https://pubmed.ncbi.nlm.nih.gov/38851198/"
            }
          ],
          "drugs": [
            "escitalopram"
          ]
        }
      ]
    },
    {
      "when": "no_therapy",
      "effects": []
    },
    {
      "when": "heart",
      "effects": [
        {
          "kind": "prefer",
          "reason": "Лучше всего изучен у людей после инфаркта и с нестабильной стенокардией: работу сердца не ухудшал",
          "sources": [
            {
              "title": "Glassman A.H. et al. Sertraline treatment of major depression in patients with acute MI or unstable angina (SADHART). JAMA, 2002.",
              "url": "https://pubmed.ncbi.nlm.nih.gov/12169073/"
            }
          ],
          "drugs": [
            "sertraline"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Удлиняет интервал QT; инструкция советует избегать его при удлинённом QT, недавнем инфаркте и декомпенсированной сердечной недостаточности",
          "sources": [
            {
              "title": "Celexa (citalopram), инструкция по применению: разделы 2.3 и 5.2 об интервале QT и дозах. DailyMed, Allergan, 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4259d9b1-de34-43a4-85a8-41dd214e9177"
            }
          ],
          "drugs": [
            "citalopram"
          ]
        },
        {
          "kind": "caution",
          "reason": "В высоких дозах может удлинять QT; при болезнях сердца нужна ЭКГ",
          "sources": [
            {
              "title": "Российское общество психиатров. Клинические рекомендации «Депрессивный эпизод, рекуррентное депрессивное расстройство», редакция 2021 года (ID 301_2 в рубрикаторе Минздрава, в архиве с 26.08.2024), PDF разработчика.",
              "url": "https://psychiatr.ru/download/6271?view=1"
            }
          ],
          "drugs": [
            "escitalopram"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Не рекомендуют в период восстановления после инфаркта; трициклические не назначают при выраженных болезнях сердца",
          "sources": [
            {
              "title": "Amitriptyline hydrochloride, инструкция по применению: противопоказания и предупреждения о сердце и судорогах. DailyMed, Sun Pharmaceutical, 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4e520c63-1cf6-40f6-a51c-3f9b0e181342"
            },
            {
              "title": "Российское общество психиатров. Клинические рекомендации «Депрессивный эпизод, рекуррентное депрессивное расстройство», редакция 2021 года (ID 301_2 в рубрикаторе Минздрава, в архиве с 26.08.2024), PDF разработчика.",
              "url": "https://psychiatr.ru/download/6271?view=1"
            }
          ],
          "drugs": [
            "amitriptyline"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Противопоказан после недавнего инфаркта, при аритмиях и блокадах",
          "sources": [
            {
              "title": "Anafranil (clomipramine), инструкция по применению: раздел о судорогах. DailyMed, SpecGx, 2024.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4074b555-7635-41a9-809d-fae3b3610059"
            },
            {
              "title": "Справочник Видаль: Анафранил (кломипрамин), таблетки 25 мг, раздел «Режим дозирования».",
              "url": "https://www.vidal.ru/drugs/anafranil__2055"
            }
          ],
          "drugs": [
            "clomipramine"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Российская инструкция: противопоказан при желудочковой аритмии и в раннем периоде после инфаркта",
          "sources": [
            {
              "title": "Справочник Видаль: тразодон (Триттико), разделы «Режим дозирования» и «Противопоказания».",
              "url": "https://www.vidal.ru/drugs/trittico__45130"
            }
          ],
          "drugs": [
            "trazodone"
          ]
        },
        {
          "kind": "note",
          "reason": "СИОЗСН могут повышать давление, его измеряют до и во время лечения",
          "sources": [
            {
              "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
            },
            {
              "title": "Effexor XR (venlafaxine extended-release), инструкция по применению. DailyMed, Viatris.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c848a5d8-ba94-4c84-80e3-0bf35fb8e32e"
            }
          ],
          "drugs": [
            "venlafaxine",
            "duloxetine",
            "desvenlafaxine",
            "milnacipran"
          ]
        },
        {
          "kind": "caution",
          "reason": "Российская инструкция: при болезнях сердца с осторожностью",
          "sources": [
            {
              "title": "Справочник Видаль: Миртазонал (миртазапин), инструкция.",
              "url": "https://www.vidal.ru/drugs/mirtazonal__21725"
            }
          ],
          "drugs": [
            "mirtazapine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Российская инструкция: при болезнях сердца с осторожностью",
          "sources": [
            {
              "title": "Справочник Видаль: Азафен (пипофезин), таблетки 25 мг, разделы «Режим дозирования» и «Особые указания» (ЛП-№(005772)-(РГ-RU) от 14.06.24).",
              "url": "https://www.vidal.ru/drugs/azaphen__14737"
            }
          ],
          "drugs": [
            "pipofezine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Российская инструкция: при сердечной недостаточности с осторожностью",
          "sources": [
            {
              "title": "Справочник Видаль: Леривон (миансерин), инструкция.",
              "url": "https://www.vidal.ru/drugs/lerivon__5330"
            }
          ],
          "drugs": [
            "mianserin"
          ]
        },
        {
          "kind": "caution",
          "reason": "Описаны удлинение QT и аритмии; при риске аритмий назначают с осторожностью",
          "sources": [
            {
              "title": "Prozac (fluoxetine), инструкция по применению: противопоказания (тиоридазин) и раздел 5.14 о длительном выведении. DailyMed, Eli Lilly (Dista), 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c88f33ed-6dfb-4c5e-bc01-d8e36dd97299"
            }
          ],
          "drugs": [
            "fluoxetine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Российская инструкция: с осторожностью при недавнем инфаркте, нестабильной стенокардии, гипертензии и тахикардии; может удлинять QT",
          "sources": [
            {
              "title": "Справочник Видаль: Велафакс (венлафаксин), таблетки, раздел «Режим дозирования».",
              "url": "https://www.vidal.ru/drugs/velafax__8875"
            }
          ],
          "drugs": [
            "venlafaxine"
          ]
        }
      ]
    },
    {
      "when": "epilepsy",
      "effects": [
        {
          "kind": "avoid",
          "reason": "Противопоказан при эпилепсии и судорогах",
          "sources": [
            {
              "title": "Wellbutrin SR (bupropion hydrochloride), инструкция по применению. GlaxoSmithKline, DailyMed.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cbc8c074-f080-4489-a5ae-207b5fadeba3"
            }
          ],
          "drugs": [
            "bupropion"
          ]
        },
        {
          "kind": "caution",
          "reason": "Судороги названы главным риском препарата",
          "sources": [
            {
              "title": "Anafranil (clomipramine), инструкция по применению: раздел о судорогах. DailyMed, SpecGx, 2024.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4074b555-7635-41a9-809d-fae3b3610059"
            }
          ],
          "drugs": [
            "clomipramine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Если судороги были, назначают с осторожностью",
          "sources": [
            {
              "title": "Amitriptyline hydrochloride, инструкция по применению: противопоказания и предупреждения о сердце и судорогах. DailyMed, Sun Pharmaceutical, 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4e520c63-1cf6-40f6-a51c-3f9b0e181342"
            }
          ],
          "drugs": [
            "amitriptyline"
          ]
        },
        {
          "kind": "caution",
          "reason": "Инструкция: при судорожных расстройствах с осторожностью",
          "sources": [
            {
              "title": "Paxil (paroxetine), инструкция по применению: разделы о судорогах, кровотечениях, варфарине и тамоксифене. DailyMed, Apotex, 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ef3b5cbe-f9e1-c1ac-79da-cfe14e3a7e7e"
            }
          ],
          "drugs": [
            "paroxetine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Инструкция: если судороги были, с осторожностью",
          "sources": [
            {
              "title": "Prozac (fluoxetine), инструкция по применению: противопоказания (тиоридазин) и раздел 5.14 о длительном выведении. DailyMed, Eli Lilly (Dista), 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c88f33ed-6dfb-4c5e-bc01-d8e36dd97299"
            }
          ],
          "drugs": [
            "fluoxetine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Российская инструкция: при нестабильной эпилепсии противопоказан, при эпилепсии с осторожностью",
          "sources": [
            {
              "title": "Справочник Видаль: Серената (сертралин), инструкция (ЛП-№(006156)-(РГ-RU) от 08.07.24).",
              "url": "https://www.vidal.ru/drugs/serenata__6638"
            }
          ],
          "drugs": [
            "sertraline"
          ]
        },
        {
          "kind": "caution",
          "reason": "Российская инструкция: при эпилепсии с осторожностью",
          "sources": [
            {
              "title": "Справочник Видаль: Миртазонал (миртазапин), инструкция.",
              "url": "https://www.vidal.ru/drugs/mirtazonal__21725"
            }
          ],
          "drugs": [
            "mirtazapine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Российская инструкция: снижает действие противосудорожных препаратов",
          "sources": [
            {
              "title": "Справочник Видаль: Азафен (пипофезин), таблетки 25 мг, разделы «Режим дозирования» и «Особые указания» (ЛП-№(005772)-(РГ-RU) от 14.06.24).",
              "url": "https://www.vidal.ru/drugs/azaphen__14737"
            }
          ],
          "drugs": [
            "pipofezine"
          ]
        }
      ]
    },
    {
      "when": "liver",
      "effects": [
        {
          "kind": "avoid",
          "reason": "Противопоказан при болезнях печени; остальным нужны анализы печени",
          "sources": [
            {
              "title": "Valdoxan (agomelatine), общая характеристика лекарственного препарата (SmPC). Европейское агентство лекарственных средств (EMA).",
              "url": "https://www.ema.europa.eu/en/documents/product-information/valdoxan-epar-product-information_en.pdf"
            }
          ],
          "drugs": [
            "agomelatine"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Инструкция: избегать при хронических болезнях печени, циррозе и злоупотреблении алкоголем",
          "sources": [
            {
              "title": "Duloxetine delayed-release capsules, инструкция по применению. DailyMed, Lupin, 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=829a4f51-c882-4b64-81f3-abfb03a52ebe"
            }
          ],
          "drugs": [
            "duloxetine"
          ]
        },
        {
          "kind": "caution",
          "reason": "CANMAT: риск лекарственного повреждения печени выше",
          "sources": [
            {
              "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
            }
          ],
          "drugs": [
            "bupropion"
          ]
        },
        {
          "kind": "consider",
          "reason": "CANMAT: риск для печени ниже; доза при болезнях печени меньше",
          "sources": [
            {
              "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
            }
          ],
          "drugs": [
            "citalopram",
            "escitalopram"
          ]
        },
        {
          "kind": "caution",
          "reason": "При умеренном и тяжёлом нарушении работы печени не рекомендован",
          "sources": [
            {
              "title": "Zoloft (sertraline), инструкция по применению: раздел 2.4 о нарушении функции печени. DailyMed, 2025.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fda754f6-d0f3-4dce-a17a-927d64f912f7"
            }
          ],
          "drugs": [
            "sertraline"
          ]
        },
        {
          "kind": "caution",
          "reason": "Российская инструкция: при тяжёлых нарушениях функции печени противопоказан",
          "sources": [
            {
              "title": "Справочник Видаль: Профлузак (флуоксетин), инструкция.",
              "url": "https://www.vidal.ru/drugs/proflusak__1402"
            }
          ],
          "drugs": [
            "fluoxetine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Российская инструкция: при выраженных нарушениях функции печени противопоказан",
          "sources": [
            {
              "title": "Справочник Видаль: Велафакс (венлафаксин), таблетки, раздел «Режим дозирования».",
              "url": "https://www.vidal.ru/drugs/velafax__8875"
            }
          ],
          "drugs": [
            "venlafaxine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Российская инструкция: при выраженном нарушении функции печени противопоказан",
          "sources": [
            {
              "title": "Справочник Видаль: Леривон (миансерин), инструкция.",
              "url": "https://www.vidal.ru/drugs/lerivon__5330"
            }
          ],
          "drugs": [
            "mianserin"
          ]
        },
        {
          "kind": "caution",
          "reason": "Российская инструкция: при тяжёлой печёночной недостаточности противопоказан",
          "sources": [
            {
              "title": "Справочник Видаль: Анафранил (кломипрамин), таблетки 25 мг, раздел «Режим дозирования».",
              "url": "https://www.vidal.ru/drugs/anafranil__2055"
            }
          ],
          "drugs": [
            "clomipramine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Российская инструкция: при остром гепатите противопоказан",
          "sources": [
            {
              "title": "Справочник Видаль: Пиразидол (пирлиндол), таблетки 25 и 50 мг, разделы «Режим дозирования» и «Противопоказания» (ЛП-№(001788)-(РГ-RU) от 08.02.23).",
              "url": "https://www.vidal.ru/drugs/pyrazidol__40373"
            }
          ],
          "drugs": [
            "pirlindole"
          ]
        },
        {
          "kind": "caution",
          "reason": "Российская инструкция: при тяжёлой печёночной недостаточности противопоказан",
          "sources": [
            {
              "title": "Справочник Видаль: Азафен (пипофезин), таблетки 25 мг, разделы «Режим дозирования» и «Особые указания» (ЛП-№(005772)-(РГ-RU) от 14.06.24).",
              "url": "https://www.vidal.ru/drugs/azaphen__14737"
            }
          ],
          "drugs": [
            "pipofezine"
          ]
        }
      ]
    },
    {
      "when": "kidney",
      "effects": [
        {
          "kind": "avoid",
          "reason": "При тяжёлой болезни почек (клиренс креатинина ниже 30 мл/мин) противопоказан",
          "sources": [
            {
              "title": "Cymbalta (duloxetine): общая характеристика лекарственного препарата, разделы 4.2 и 4.3. Европейское агентство лекарственных средств.",
              "url": "https://www.ema.europa.eu/en/documents/product-information/cymbalta-epar-product-information_en.pdf"
            },
            {
              "title": "Справочник Видаль: Депратал (дулоксетин), разделы «Режим дозирования» и «Противопоказания».",
              "url": "https://www.vidal.ru/drugs/depratal"
            }
          ],
          "drugs": [
            "duloxetine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Дозу снижают на четверть или вдвое, при тяжёлой болезни почек и на диализе вдвое и больше",
          "sources": [
            {
              "title": "Effexor XR (venlafaxine extended-release), инструкция по применению. DailyMed, Viatris.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c848a5d8-ba94-4c84-80e3-0bf35fb8e32e"
            }
          ],
          "drugs": [
            "venlafaxine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Нужна меньшая максимальная доза",
          "sources": [
            {
              "title": "Pristiq (desvenlafaxine) таблетки с замедленным высвобождением, инструкция по применению: разделы 2.1 и 2.5 о дозах, приёме и отмене. DailyMed, Wyeth (Pfizer), 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0f43610c-f290-46ea-d186-4f998ed99fce"
            }
          ],
          "drugs": [
            "desvenlafaxine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Дозу снижают в зависимости от работы почек",
          "sources": [
            {
              "title": "Справочник Видаль: Иксел (милнаципран), капсулы 25 и 50 мг, инструкция; РУ П N011787/01, отмена государственной регистрации.",
              "url": "https://www.vidal.ru/drugs/ixel__1316"
            },
            {
              "title": "Savella (milnacipran), инструкция по применению. Allergan, DailyMed.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=16a4a314-f97e-4e91-95e9-576a3773d284"
            }
          ],
          "drugs": [
            "milnacipran"
          ]
        },
        {
          "kind": "caution",
          "reason": "При умеренной и тяжёлой болезни почек может понадобиться меньшая доза",
          "sources": [
            {
              "title": "Remeron и RemeronSolTab (mirtazapine), инструкция по применению. DailyMed, Organon.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=98ad1917-a094-44f5-a28f-a64a8cfcd887"
            }
          ],
          "drugs": [
            "mirtazapine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Стоит снизить дозу или принимать реже",
          "sources": [
            {
              "title": "Wellbutrin SR (bupropion hydrochloride), инструкция по применению. GlaxoSmithKline, DailyMed.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cbc8c074-f080-4489-a5ae-207b5fadeba3"
            }
          ],
          "drugs": [
            "bupropion"
          ]
        },
        {
          "kind": "caution",
          "reason": "При тяжёлой болезни почек начинают с меньшей дозы, максимальная доза тоже ниже",
          "sources": [
            {
              "title": "Paxil (paroxetine), инструкция по применению: разделы о судорогах, кровотечениях, варфарине и тамоксифене. DailyMed, Apotex, 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ef3b5cbe-f9e1-c1ac-79da-cfe14e3a7e7e"
            }
          ],
          "drugs": [
            "paroxetine"
          ]
        },
        {
          "kind": "caution",
          "reason": "При болезнях почек не изучен, назначают с осторожностью",
          "sources": [
            {
              "title": "Trazodone hydrochloride tablets, инструкция по применению. DailyMed, Teva, 2025.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4006d439-e2de-4590-82e9-fc9d56e3ec1b"
            }
          ],
          "drugs": [
            "trazodone"
          ]
        },
        {
          "kind": "caution",
          "reason": "При умеренной и тяжёлой болезни почек данных мало, назначают с осторожностью",
          "sources": [
            {
              "title": "Valdoxan (agomelatine), общая характеристика лекарственного препарата (SmPC). Европейское агентство лекарственных средств (EMA).",
              "url": "https://www.ema.europa.eu/en/documents/product-information/valdoxan-epar-product-information_en.pdf"
            }
          ],
          "drugs": [
            "agomelatine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Российская инструкция: при почечной недостаточности с осторожностью",
          "sources": [
            {
              "title": "Справочник Видаль: Леривон (миансерин), инструкция.",
              "url": "https://www.vidal.ru/drugs/lerivon__5330"
            }
          ],
          "drugs": [
            "mianserin"
          ]
        },
        {
          "kind": "caution",
          "reason": "Российская инструкция: при тяжёлой почечной недостаточности противопоказан",
          "sources": [
            {
              "title": "Справочник Видаль: Азафен (пипофезин), таблетки 25 мг, разделы «Режим дозирования» и «Особые указания» (ЛП-№(005772)-(РГ-RU) от 14.06.24).",
              "url": "https://www.vidal.ru/drugs/azaphen__14737"
            }
          ],
          "drugs": [
            "pipofezine"
          ]
        }
      ]
    },
    {
      "when": "eating",
      "effects": [
        {
          "kind": "avoid",
          "reason": "Противопоказан при булимии и анорексии, в том числе в прошлом: выше риск судорог",
          "sources": [
            {
              "title": "Wellbutrin SR (bupropion hydrochloride), инструкция по применению. GlaxoSmithKline, DailyMed.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cbc8c074-f080-4489-a5ae-207b5fadeba3"
            }
          ],
          "drugs": [
            "bupropion"
          ]
        },
        {
          "kind": "consider",
          "reason": "При булимии у флуоксетина есть официальное показание",
          "sources": [
            {
              "title": "Prozac (fluoxetine), инструкция по применению: противопоказания (тиоридазин) и раздел 5.14 о длительном выведении. DailyMed, Eli Lilly (Dista), 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c88f33ed-6dfb-4c5e-bc01-d8e36dd97299"
            },
            {
              "title": "Справочник Видаль: Профлузак (флуоксетин), инструкция.",
              "url": "https://www.vidal.ru/drugs/proflusak__1402"
            }
          ],
          "drugs": [
            "fluoxetine"
          ]
        }
      ]
    },
    {
      "when": "overdose",
      "effects": [
        {
          "kind": "prefer",
          "reason": "CANMAT: при риске передозировки предпочтительны СИОЗС, они наименее токсичны",
          "sources": [
            {
              "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
            },
            {
              "title": "Hawton K. et al. Toxicity of antidepressants: rates of suicide relative to prescribing and non-fatal overdose. British Journal of Psychiatry, 2010.",
              "url": "https://pubmed.ncbi.nlm.nih.gov/20435959/"
            }
          ],
          "drugs": [
            "escitalopram",
            "sertraline",
            "paroxetine",
            "fluvoxamine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Среди СИОЗС опаснее остальных при передозировке",
          "sources": [
            {
              "title": "Hawton K. et al. Toxicity of antidepressants: rates of suicide relative to prescribing and non-fatal overdose. British Journal of Psychiatry, 2010.",
              "url": "https://pubmed.ncbi.nlm.nih.gov/20435959/"
            }
          ],
          "drugs": [
            "citalopram"
          ]
        },
        {
          "kind": "caution",
          "reason": "CANMAT относит его к СИОЗС, но в российской инструкции суицидальная настроенность указана в противопоказаниях",
          "sources": [
            {
              "title": "Справочник Видаль: Профлузак (флуоксетин), инструкция.",
              "url": "https://www.vidal.ru/drugs/proflusak__1402"
            },
            {
              "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
            }
          ],
          "drugs": [
            "fluoxetine"
          ]
        },
        {
          "kind": "caution",
          "reason": "При отравлении опаснее СИОЗС",
          "sources": [
            {
              "title": "Hawton K. et al. Toxicity of antidepressants: rates of suicide relative to prescribing and non-fatal overdose. British Journal of Psychiatry, 2010.",
              "url": "https://pubmed.ncbi.nlm.nih.gov/20435959/"
            }
          ],
          "drugs": [
            "venlafaxine",
            "mirtazapine"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Трициклические самые опасные при передозировке; NICE не советует начинать с них при риске самоубийства",
          "sources": [
            {
              "title": "NICE. Depression in adults: treatment and management (NG222), рекомендации 1.2.7 и 1.4.1 о прошлом опыте лечения, 1.4.38 о зверобое.",
              "url": "https://www.nice.org.uk/guidance/ng222"
            },
            {
              "title": "Hawton K. et al. Toxicity of antidepressants: rates of suicide relative to prescribing and non-fatal overdose. British Journal of Psychiatry, 2010.",
              "url": "https://pubmed.ncbi.nlm.nih.gov/20435959/"
            }
          ],
          "drugs": [
            "amitriptyline",
            "clomipramine"
          ]
        },
        {
          "kind": "caution",
          "reason": "При передозировке примерно у трети бывают судороги; описаны смерти",
          "sources": [
            {
              "title": "Wellbutrin SR (bupropion hydrochloride), инструкция по применению. GlaxoSmithKline, DailyMed.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cbc8c074-f080-4489-a5ae-207b5fadeba3"
            }
          ],
          "drugs": [
            "bupropion"
          ]
        }
      ]
    },
    {
      "when": "bipolar_self",
      "effects": [
        {
          "kind": "caution",
          "reason": "При биполярном расстройстве антидепрессант назначают только вместе со стабилизатором настроения",
          "sources": [
            {
              "title": "Yatham L.N. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) and International Society for Bipolar Disorders (ISBD) 2018 guidelines for the management of patients with bipolar disorder. Bipolar Disorders, 2018.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5947163/"
            }
          ],
          "drugs": [
            "escitalopram",
            "sertraline",
            "fluoxetine",
            "paroxetine",
            "citalopram",
            "fluvoxamine",
            "mirtazapine",
            "agomelatine",
            "vortioxetine",
            "trazodone",
            "bupropion",
            "pipofezine"
          ]
        },
        {
          "kind": "avoid",
          "reason": "При биполярном расстройстве трициклические не рекомендуют: выше риск перехода в манию",
          "sources": [
            {
              "title": "Yatham L.N. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) and International Society for Bipolar Disorders (ISBD) 2018 guidelines for the management of patients with bipolar disorder. Bipolar Disorders, 2018.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5947163/"
            }
          ],
          "drugs": [
            "amitriptyline",
            "clomipramine"
          ]
        },
        {
          "kind": "caution",
          "reason": "СИОЗСН и ИМАО чаще других переводят в манию; если их назначают, то только со стабилизатором настроения",
          "sources": [
            {
              "title": "Yatham L.N. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) and International Society for Bipolar Disorders (ISBD) 2018 guidelines for the management of patients with bipolar disorder. Bipolar Disorders, 2018.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5947163/"
            }
          ],
          "drugs": [
            "venlafaxine",
            "duloxetine",
            "desvenlafaxine",
            "milnacipran",
            "moclobemide",
            "pirlindole"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Российская инструкция: мания в противопоказаниях",
          "sources": [
            {
              "title": "Справочник Видаль: Леривон (миансерин), инструкция.",
              "url": "https://www.vidal.ru/drugs/lerivon__5330"
            }
          ],
          "drugs": [
            "mianserin"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Российская инструкция: мания в противопоказаниях",
          "sources": [
            {
              "title": "Справочник Видаль: Анафранил (кломипрамин), таблетки 25 мг, раздел «Режим дозирования».",
              "url": "https://www.vidal.ru/drugs/anafranil__2055"
            }
          ],
          "drugs": [
            "clomipramine"
          ]
        }
      ]
    },
    {
      "when": "tamoxifen",
      "effects": [
        {
          "kind": "avoid",
          "reason": "Мешает тамоксифену стать активным; на совместном приёме выше смертность от рака груди. Инструкция советует выбрать другой антидепрессант",
          "sources": [
            {
              "title": "Paxil (paroxetine), инструкция по применению: разделы о судорогах, кровотечениях, варфарине и тамоксифене. DailyMed, Apotex, 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ef3b5cbe-f9e1-c1ac-79da-cfe14e3a7e7e"
            },
            {
              "title": "Kelly C.M. et al. Selective serotonin reuptake inhibitors and breast cancer mortality in women receiving tamoxifen: a population based cohort study. BMJ, 2010.",
              "url": "https://pubmed.ncbi.nlm.nih.gov/20142325/"
            }
          ],
          "drugs": [
            "paroxetine"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Сильно тормозит фермент CYP2D6, через который тамоксифен становится активным; с тамоксифеном его советуют не назначать",
          "sources": [
            {
              "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
            },
            {
              "title": "Andrade C. Breast cancer and antidepressant use. Journal of Clinical Psychiatry, 2012;73(9):e1156-e1157.",
              "url": "https://www.psychiatrist.com/jcp/breast-cancer-antidepressant/"
            }
          ],
          "drugs": [
            "fluoxetine"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Сильно тормозит CYP2D6 (уровень другого препарата этого фермента вырос в 5 раз), тамоксифен может работать слабее; с тамоксифеном его советуют не назначать",
          "sources": [
            {
              "title": "Wellbutrin SR (bupropion hydrochloride), инструкция по применению. GlaxoSmithKline, DailyMed.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cbc8c074-f080-4489-a5ae-207b5fadeba3"
            },
            {
              "title": "Andrade C. Breast cancer and antidepressant use. Journal of Clinical Psychiatry, 2012;73(9):e1156-e1157.",
              "url": "https://www.psychiatrist.com/jcp/breast-cancer-antidepressant/"
            }
          ],
          "drugs": [
            "bupropion"
          ]
        },
        {
          "kind": "caution",
          "reason": "Умеренно тормозит CYP2D6",
          "sources": [
            {
              "title": "Duloxetine delayed-release capsules, инструкция по применению. DailyMed, Lupin, 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=829a4f51-c882-4b64-81f3-abfb03a52ebe"
            }
          ],
          "drugs": [
            "duloxetine"
          ]
        },
        {
          "kind": "consider",
          "reason": "Почти не тормозят CYP2D6, поэтому с тамоксифеном безопаснее",
          "sources": [
            {
              "title": "Andrade C. Breast cancer and antidepressant use. Journal of Clinical Psychiatry, 2012;73(9):e1156-e1157.",
              "url": "https://www.psychiatrist.com/jcp/breast-cancer-antidepressant/"
            },
            {
              "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
            }
          ],
          "drugs": [
            "escitalopram",
            "citalopram",
            "venlafaxine",
            "desvenlafaxine",
            "mirtazapine"
          ]
        }
      ]
    },
    {
      "when": "cyp2d6",
      "effects": [
        {
          "kind": "caution",
          "reason": "Удваивают концентрацию метопролола в крови; если сочетания не избежать, за человеком внимательно следят",
          "sources": [
            {
              "title": "Lopressor (metoprolol tartrate), инструкция по применению: раздел 7.3 об ингибиторах CYP2D6. DailyMed, Validus, 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b5f4fed2-369c-4808-a682-8a5b8cfdbb4f"
            },
            {
              "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
            }
          ],
          "drugs": [
            "fluoxetine",
            "paroxetine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Тормозит CYP2D6; дозу таких препаратов иногда приходится снижать",
          "sources": [
            {
              "title": "Wellbutrin SR (bupropion hydrochloride), инструкция по применению. GlaxoSmithKline, DailyMed.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cbc8c074-f080-4489-a5ae-207b5fadeba3"
            }
          ],
          "drugs": [
            "bupropion"
          ]
        },
        {
          "kind": "caution",
          "reason": "Умеренно тормозит CYP2D6",
          "sources": [
            {
              "title": "Duloxetine delayed-release capsules, инструкция по применению. DailyMed, Lupin, 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=829a4f51-c882-4b64-81f3-abfb03a52ebe"
            }
          ],
          "drugs": [
            "duloxetine"
          ]
        },
        {
          "kind": "note",
          "reason": "Повышает уровень метопролола в крови; на давление и пульс в исследовании это не повлияло",
          "sources": [
            {
              "title": "Lexapro (escitalopram), инструкция по применению и руководство для пациента (Medication Guide), одобренные FDA. AbbVie, редакции 2023 и 2024 годов.",
              "url": "https://www.rxabbvie.com/pdf/lexapro_pi.pdf"
            }
          ],
          "drugs": [
            "escitalopram"
          ]
        },
        {
          "kind": "note",
          "reason": "Повышает уровень метопролола в крови примерно вдвое; на давление и пульс в исследовании это не повлияло",
          "sources": [
            {
              "title": "Celexa (citalopram), инструкция по применению: разделы 2.3 и 5.2 об интервале QT и дозах. DailyMed, Allergan, 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4259d9b1-de34-43a4-85a8-41dd214e9177"
            }
          ],
          "drugs": [
            "citalopram"
          ]
        }
      ]
    },
    {
      "when": "anticoag",
      "effects": [
        {
          "kind": "caution",
          "reason": "Повышают риск кровотечений, а аспирин, НПВП и антикоагулянты его добавляют; пожилым Бирс советуют по возможности не сочетать СИОЗС с варфарином",
          "sources": [
            {
              "title": "Lexapro (escitalopram), инструкция по применению и руководство для пациента (Medication Guide), одобренные FDA. AbbVie, редакции 2023 и 2024 годов.",
              "url": "https://www.rxabbvie.com/pdf/lexapro_pi.pdf"
            },
            {
              "title": "Anglin R. et al. Risk of upper gastrointestinal bleeding with selective serotonin reuptake inhibitors with or without concurrent nonsteroidal anti-inflammatory use: a systematic review and meta-analysis. American Journal of Gastroenterology, 2014.",
              "url": "https://pubmed.ncbi.nlm.nih.gov/24777151/"
            },
            {
              "title": "2023 American Geriatrics Society Beers Criteria Update Expert Panel. American Geriatrics Society 2023 updated AGS Beers Criteria for potentially inappropriate medication use in older adults. Journal of the American Geriatrics Society, 2023.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12478568/"
            }
          ],
          "drugs": [
            "escitalopram",
            "sertraline",
            "fluoxetine",
            "paroxetine",
            "citalopram"
          ]
        },
        {
          "kind": "caution",
          "reason": "Повышает риск кровотечений, а аспирин, НПВП и антикоагулянты его добавляют; к тому же повышает уровень варфарина, нужен контроль свёртываемости",
          "sources": [
            {
              "title": "Fluvoxamine maleate tablets, инструкция по применению: противопоказания и раздел 5.8 о взаимодействиях (клозапин, теофиллин, варфарин, тизанидин). DailyMed, Apotex, 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6eeb14df-6fcf-a737-5359-5744eb4accea"
            },
            {
              "title": "Anglin R. et al. Risk of upper gastrointestinal bleeding with selective serotonin reuptake inhibitors with or without concurrent nonsteroidal anti-inflammatory use: a systematic review and meta-analysis. American Journal of Gastroenterology, 2014.",
              "url": "https://pubmed.ncbi.nlm.nih.gov/24777151/"
            }
          ],
          "drugs": [
            "fluvoxamine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Тоже повышает риск кровотечений вместе с такими препаратами",
          "sources": [
            {
              "title": "Effexor XR (venlafaxine extended-release), инструкция по применению. DailyMed, Viatris.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c848a5d8-ba94-4c84-80e3-0bf35fb8e32e"
            }
          ],
          "drugs": [
            "venlafaxine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Тоже повышает риск кровотечений вместе с такими препаратами",
          "sources": [
            {
              "title": "Duloxetine delayed-release capsules, инструкция по применению. DailyMed, Lupin, 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=829a4f51-c882-4b64-81f3-abfb03a52ebe"
            }
          ],
          "drugs": [
            "duloxetine"
          ]
        },
        {
          "kind": "caution",
          "reason": "CANMAT: у СИОЗСН тот же риск при сочетании с НПВП",
          "sources": [
            {
              "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
            }
          ],
          "drugs": [
            "desvenlafaxine",
            "milnacipran"
          ]
        },
        {
          "kind": "caution",
          "reason": "Тоже повышает риск кровотечений вместе с такими препаратами",
          "sources": [
            {
              "title": "Trintellix (vortioxetine), инструкция по применению. DailyMed, Takeda.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1a5b68e2-14d0-419d-9ec6-1ca97145e838"
            }
          ],
          "drugs": [
            "vortioxetine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Может менять действие варфарина, нужен контроль",
          "sources": [
            {
              "title": "Справочник Видаль: Леривон (миансерин), инструкция.",
              "url": "https://www.vidal.ru/drugs/lerivon__5330"
            }
          ],
          "drugs": [
            "mianserin"
          ]
        },
        {
          "kind": "caution",
          "reason": "Усиливает действие антикоагулянтов",
          "sources": [
            {
              "title": "Справочник Видаль: Азафен (пипофезин), таблетки 25 мг, разделы «Режим дозирования» и «Особые указания» (ЛП-№(005772)-(РГ-RU) от 14.06.24).",
              "url": "https://www.vidal.ru/drugs/azaphen__14737"
            }
          ],
          "drugs": [
            "pipofezine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Может повышать уровень варфарина в крови, вытесняя его из связи с белками",
          "sources": [
            {
              "title": "Anafranil (clomipramine), инструкция по применению: раздел о судорогах. DailyMed, SpecGx, 2024.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4074b555-7635-41a9-809d-fae3b3610059"
            }
          ],
          "drugs": [
            "clomipramine"
          ]
        }
      ]
    },
    {
      "when": "maoi",
      "effects": [
        {
          "kind": "avoid",
          "reason": "Вместе с ИМАО и линезолидом противопоказан: риск серотонинового синдрома или резкого подъёма давления. Между препаратами нужен перерыв",
          "sources": [
            {
              "title": "Lexapro (escitalopram), инструкция по применению и руководство для пациента (Medication Guide), одобренные FDA. AbbVie, редакции 2023 и 2024 годов.",
              "url": "https://www.rxabbvie.com/pdf/lexapro_pi.pdf"
            }
          ],
          "drugs": [
            "escitalopram"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Вместе с ИМАО и линезолидом противопоказан: риск серотонинового синдрома или резкого подъёма давления. Между препаратами нужен перерыв",
          "sources": [
            {
              "title": "Celexa (citalopram), инструкция по применению: разделы 2.3 и 5.2 об интервале QT и дозах. DailyMed, Allergan, 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4259d9b1-de34-43a4-85a8-41dd214e9177"
            }
          ],
          "drugs": [
            "citalopram"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Вместе с ИМАО и линезолидом противопоказан: риск серотонинового синдрома или резкого подъёма давления. Между препаратами нужен перерыв",
          "sources": [
            {
              "title": "Zoloft (sertraline), инструкция по применению: раздел 2.4 о нарушении функции печени. DailyMed, 2025.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fda754f6-d0f3-4dce-a17a-927d64f912f7"
            }
          ],
          "drugs": [
            "sertraline"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Вместе с ИМАО и линезолидом противопоказан: риск серотонинового синдрома или резкого подъёма давления. Между препаратами нужен перерыв",
          "sources": [
            {
              "title": "Paxil (paroxetine), инструкция по применению: разделы о судорогах, кровотечениях, варфарине и тамоксифене. DailyMed, Apotex, 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ef3b5cbe-f9e1-c1ac-79da-cfe14e3a7e7e"
            }
          ],
          "drugs": [
            "paroxetine"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Вместе с ИМАО и линезолидом противопоказан: риск серотонинового синдрома или резкого подъёма давления. Между препаратами нужен перерыв",
          "sources": [
            {
              "title": "Prozac (fluoxetine), инструкция по применению: противопоказания (тиоридазин) и раздел 5.14 о длительном выведении. DailyMed, Eli Lilly (Dista), 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c88f33ed-6dfb-4c5e-bc01-d8e36dd97299"
            }
          ],
          "drugs": [
            "fluoxetine"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Вместе с ИМАО и линезолидом противопоказан: риск серотонинового синдрома или резкого подъёма давления. Между препаратами нужен перерыв",
          "sources": [
            {
              "title": "Fluvoxamine maleate tablets, инструкция по применению: противопоказания и раздел 5.8 о взаимодействиях (клозапин, теофиллин, варфарин, тизанидин). DailyMed, Apotex, 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6eeb14df-6fcf-a737-5359-5744eb4accea"
            }
          ],
          "drugs": [
            "fluvoxamine"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Вместе с ИМАО и линезолидом противопоказан: риск серотонинового синдрома или резкого подъёма давления. Между препаратами нужен перерыв",
          "sources": [
            {
              "title": "Effexor XR (venlafaxine extended-release), инструкция по применению. DailyMed, Viatris.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c848a5d8-ba94-4c84-80e3-0bf35fb8e32e"
            }
          ],
          "drugs": [
            "venlafaxine"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Вместе с ИМАО и линезолидом противопоказан: риск серотонинового синдрома или резкого подъёма давления. Между препаратами нужен перерыв",
          "sources": [
            {
              "title": "Duloxetine delayed-release capsules, инструкция по применению. DailyMed, Lupin, 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=829a4f51-c882-4b64-81f3-abfb03a52ebe"
            }
          ],
          "drugs": [
            "duloxetine"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Вместе с ИМАО и линезолидом противопоказан: риск серотонинового синдрома или резкого подъёма давления. Между препаратами нужен перерыв",
          "sources": [
            {
              "title": "Pristiq (desvenlafaxine) таблетки с замедленным высвобождением, инструкция по применению: разделы 2.1 и 2.5 о дозах, приёме и отмене. DailyMed, Wyeth (Pfizer), 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0f43610c-f290-46ea-d186-4f998ed99fce"
            }
          ],
          "drugs": [
            "desvenlafaxine"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Вместе с ИМАО и линезолидом противопоказан: риск серотонинового синдрома или резкого подъёма давления. Между препаратами нужен перерыв",
          "sources": [
            {
              "title": "Справочник Видаль: Иксел (милнаципран), капсулы 25 и 50 мг, инструкция; РУ П N011787/01, отмена государственной регистрации.",
              "url": "https://www.vidal.ru/drugs/ixel__1316"
            }
          ],
          "drugs": [
            "milnacipran"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Вместе с ИМАО и линезолидом противопоказан: риск серотонинового синдрома или резкого подъёма давления. Между препаратами нужен перерыв",
          "sources": [
            {
              "title": "Remeron и RemeronSolTab (mirtazapine), инструкция по применению. DailyMed, Organon.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=98ad1917-a094-44f5-a28f-a64a8cfcd887"
            }
          ],
          "drugs": [
            "mirtazapine"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Вместе с ИМАО и линезолидом противопоказан: риск серотонинового синдрома или резкого подъёма давления. Между препаратами нужен перерыв",
          "sources": [
            {
              "title": "Trintellix (vortioxetine), инструкция по применению. DailyMed, Takeda.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1a5b68e2-14d0-419d-9ec6-1ca97145e838"
            }
          ],
          "drugs": [
            "vortioxetine"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Вместе с ИМАО и линезолидом противопоказан: риск серотонинового синдрома или резкого подъёма давления. Между препаратами нужен перерыв",
          "sources": [
            {
              "title": "Trazodone hydrochloride tablets, инструкция по применению. DailyMed, Teva, 2025.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4006d439-e2de-4590-82e9-fc9d56e3ec1b"
            }
          ],
          "drugs": [
            "trazodone"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Вместе с ИМАО и линезолидом противопоказан: риск серотонинового синдрома или резкого подъёма давления. Между препаратами нужен перерыв",
          "sources": [
            {
              "title": "Wellbutrin SR (bupropion hydrochloride), инструкция по применению. GlaxoSmithKline, DailyMed.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cbc8c074-f080-4489-a5ae-207b5fadeba3"
            }
          ],
          "drugs": [
            "bupropion"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Вместе с ИМАО и линезолидом противопоказан: риск серотонинового синдрома или резкого подъёма давления. Между препаратами нужен перерыв",
          "sources": [
            {
              "title": "Amitriptyline hydrochloride, инструкция по применению: противопоказания и предупреждения о сердце и судорогах. DailyMed, Sun Pharmaceutical, 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4e520c63-1cf6-40f6-a51c-3f9b0e181342"
            }
          ],
          "drugs": [
            "amitriptyline"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Вместе с ИМАО и линезолидом противопоказан: риск серотонинового синдрома или резкого подъёма давления. Между препаратами нужен перерыв",
          "sources": [
            {
              "title": "Anafranil (clomipramine), инструкция по применению: раздел о судорогах. DailyMed, SpecGx, 2024.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4074b555-7635-41a9-809d-fae3b3610059"
            }
          ],
          "drugs": [
            "clomipramine"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Сам ИМАО: с другими ИМАО, селегилином и линезолидом не сочетают",
          "sources": [
            {
              "title": "Manerix (moclobemide) 300 мг, общая характеристика лекарственного препарата (SmPC). electronic medicines compendium (Великобритания), редакция февраля 2026 года.",
              "url": "https://www.medicines.org.uk/emc/product/6661/smpc"
            }
          ],
          "drugs": [
            "moclobemide"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Вместе с ИМАО и линезолидом противопоказан: риск серотонинового синдрома или резкого подъёма давления. Между препаратами нужен перерыв",
          "sources": [
            {
              "title": "Справочник Видаль: Леривон (миансерин), инструкция.",
              "url": "https://www.vidal.ru/drugs/lerivon__5330"
            }
          ],
          "drugs": [
            "mianserin"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Вместе с ИМАО и линезолидом противопоказан: риск серотонинового синдрома или резкого подъёма давления. Между препаратами нужен перерыв",
          "sources": [
            {
              "title": "Справочник Видаль: Азафен (пипофезин), таблетки 25 мг, разделы «Режим дозирования» и «Особые указания» (ЛП-№(005772)-(РГ-RU) от 14.06.24).",
              "url": "https://www.vidal.ru/drugs/azaphen__14737"
            }
          ],
          "drugs": [
            "pipofezine"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Вместе с ИМАО и линезолидом противопоказан: риск серотонинового синдрома или резкого подъёма давления. Между препаратами нужен перерыв",
          "sources": [
            {
              "title": "Справочник Видаль: Пиразидол (пирлиндол), таблетки 25 и 50 мг, разделы «Режим дозирования» и «Противопоказания» (ЛП-№(001788)-(РГ-RU) от 08.02.23).",
              "url": "https://www.vidal.ru/drugs/pyrazidol__40373"
            }
          ],
          "drugs": [
            "pirlindole"
          ]
        }
      ]
    },
    {
      "when": "triptans",
      "effects": [
        {
          "kind": "avoid",
          "reason": "Инструкция запрещает сочетать с триптанами и трамадолом",
          "sources": [
            {
              "title": "Manerix (moclobemide) 300 мг, общая характеристика лекарственного препарата (SmPC). electronic medicines compendium (Великобритания), редакция февраля 2026 года.",
              "url": "https://www.medicines.org.uk/emc/product/6661/smpc"
            }
          ],
          "drugs": [
            "moclobemide"
          ]
        },
        {
          "kind": "caution",
          "reason": "Вместе с триптанами и трамадолом выше риск серотонинового синдрома",
          "sources": [
            {
              "title": "Lexapro (escitalopram), инструкция по применению и руководство для пациента (Medication Guide), одобренные FDA. AbbVie, редакции 2023 и 2024 годов.",
              "url": "https://www.rxabbvie.com/pdf/lexapro_pi.pdf"
            }
          ],
          "drugs": [
            "escitalopram",
            "sertraline",
            "citalopram",
            "fluvoxamine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Вместе с триптанами и трамадолом выше риск серотонинового синдрома",
          "sources": [
            {
              "title": "Effexor XR (venlafaxine extended-release), инструкция по применению. DailyMed, Viatris.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c848a5d8-ba94-4c84-80e3-0bf35fb8e32e"
            }
          ],
          "drugs": [
            "venlafaxine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Вместе с триптанами и трамадолом выше риск серотонинового синдрома",
          "sources": [
            {
              "title": "Duloxetine delayed-release capsules, инструкция по применению. DailyMed, Lupin, 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=829a4f51-c882-4b64-81f3-abfb03a52ebe"
            }
          ],
          "drugs": [
            "duloxetine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Вместе с триптанами и трамадолом выше риск серотонинового синдрома",
          "sources": [
            {
              "title": "Pristiq (desvenlafaxine) таблетки с замедленным высвобождением, инструкция по применению: разделы 2.1 и 2.5 о дозах, приёме и отмене. DailyMed, Wyeth (Pfizer), 2026.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0f43610c-f290-46ea-d186-4f998ed99fce"
            }
          ],
          "drugs": [
            "desvenlafaxine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Вместе с триптанами выше риск серотонинового синдрома",
          "sources": [
            {
              "title": "Remeron и RemeronSolTab (mirtazapine), инструкция по применению. DailyMed, Organon.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=98ad1917-a094-44f5-a28f-a64a8cfcd887"
            }
          ],
          "drugs": [
            "mirtazapine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Вместе с триптанами и трамадолом выше риск серотонинового синдрома",
          "sources": [
            {
              "title": "Trintellix (vortioxetine), инструкция по применению. DailyMed, Takeda.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1a5b68e2-14d0-419d-9ec6-1ca97145e838"
            }
          ],
          "drugs": [
            "vortioxetine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Вместе с триптанами выше риск серотонинового синдрома",
          "sources": [
            {
              "title": "Trazodone hydrochloride tablets, инструкция по применению. DailyMed, Teva, 2025.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4006d439-e2de-4590-82e9-fc9d56e3ec1b"
            }
          ],
          "drugs": [
            "trazodone"
          ]
        },
        {
          "kind": "caution",
          "reason": "Вместе с триптанами и трамадолом выше риск серотонинового синдрома",
          "sources": [
            {
              "title": "Anafranil (clomipramine), инструкция по применению: раздел о судорогах. DailyMed, SpecGx, 2024.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4074b555-7635-41a9-809d-fae3b3610059"
            }
          ],
          "drugs": [
            "clomipramine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Вместе с триптанами и трамадолом выше риск серотонинового синдрома; к тому же они тормозят CYP2D6 и ослабляют обезболивающее действие трамадола",
          "sources": [
            {
              "title": "Lexapro (escitalopram), инструкция по применению и руководство для пациента (Medication Guide), одобренные FDA. AbbVie, редакции 2023 и 2024 годов.",
              "url": "https://www.rxabbvie.com/pdf/lexapro_pi.pdf"
            },
            {
              "title": "Tramadol hydrochloride tablets, инструкция по применению: риск судорог, серотониновый синдром, ингибиторы CYP2D6. Amneal, DailyMed.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8ec4e4e5-a56e-4198-8428-6b770b9bf27d"
            }
          ],
          "drugs": [
            "fluoxetine",
            "paroxetine"
          ]
        },
        {
          "kind": "avoid",
          "reason": "Тормозит МАО типа А, как моклобемид; инструкция суматриптана запрещает сочетать триптаны с такими препаратами",
          "sources": [
            {
              "title": "Imitrex (sumatriptan) tablets, инструкция по применению: противопоказания. GlaxoSmithKline, DailyMed.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=584abe73-8290-4484-ff8e-5890831c095e"
            },
            {
              "title": "Справочник Видаль: Пиразидол (пирлиндол), таблетки 25 и 50 мг, разделы «Режим дозирования» и «Противопоказания» (ЛП-№(001788)-(РГ-RU) от 08.02.23).",
              "url": "https://www.vidal.ru/drugs/pyrazidol__40373"
            }
          ],
          "drugs": [
            "pirlindole"
          ]
        },
        {
          "kind": "caution",
          "reason": "Вместе с триптанами и трамадолом выше риск серотонинового синдрома",
          "sources": [
            {
              "title": "Savella (milnacipran), инструкция по применению. Allergan, DailyMed.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=16a4a314-f97e-4e91-95e9-576a3773d284"
            }
          ],
          "drugs": [
            "milnacipran"
          ]
        },
        {
          "kind": "caution",
          "reason": "Трициклические антидепрессанты вместе с трамадолом повышают риск судорог и серотонинового синдрома; с триптанами тоже выше риск серотонинового синдрома",
          "sources": [
            {
              "title": "Tramadol hydrochloride tablets, инструкция по применению: риск судорог, серотониновый синдром, ингибиторы CYP2D6. Amneal, DailyMed.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8ec4e4e5-a56e-4198-8428-6b770b9bf27d"
            },
            {
              "title": "Справочник Видаль: Азафен (пипофезин), таблетки 25 мг, разделы «Режим дозирования» и «Особые указания» (ЛП-№(005772)-(РГ-RU) от 14.06.24).",
              "url": "https://www.vidal.ru/drugs/azaphen__14737"
            }
          ],
          "drugs": [
            "amitriptyline",
            "pipofezine"
          ]
        },
        {
          "kind": "caution",
          "reason": "Вместе с трамадолом выше риск судорог; к тому же тормозит CYP2D6 и ослабляет обезболивающее действие трамадола",
          "sources": [
            {
              "title": "Tramadol hydrochloride tablets, инструкция по применению: риск судорог, серотониновый синдром, ингибиторы CYP2D6. Amneal, DailyMed.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8ec4e4e5-a56e-4198-8428-6b770b9bf27d"
            },
            {
              "title": "Wellbutrin SR (bupropion hydrochloride), инструкция по применению. GlaxoSmithKline, DailyMed.",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cbc8c074-f080-4489-a5ae-207b5fadeba3"
            }
          ],
          "drugs": [
            "bupropion"
          ]
        }
      ]
    }
  ],
  "history": {
    "helped": {
      "kind": "prefer",
      "reason": "Если препарат уже помог раньше, это один из факторов выбора: врач обсудит, не начать ли с него",
      "sources": [
        {
          "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
        },
        {
          "title": "NICE. Depression in adults: treatment and management (NG222), рекомендации 1.2.7 и 1.4.1 о прошлом опыте лечения, 1.4.38 о зверобое.",
          "url": "https://www.nice.org.uk/guidance/ng222"
        }
      ]
    },
    "failed": {
      "kind": "caution",
      "reason": "Раньше не помог или не подошёл: врач уточнит дозу, срок и побочные эффекты. Сменить можно и на препарат того же класса, по CANMAT исход от этого не хуже",
      "sources": [
        {
          "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
        },
        {
          "title": "NICE. Depression in adults: treatment and management (NG222), рекомендации 1.2.7 и 1.4.1 о прошлом опыте лечения, 1.4.38 о зверобое.",
          "url": "https://www.nice.org.uk/guidance/ng222"
        }
      ]
    }
  },
  "alerts": [
    {
      "when": "overdose",
      "level": "urgent",
      "text": "Если есть мысли о самоубийстве, срочно к врачу или по номеру 112. Сначала оценка безопасности и план безопасности с врачом, выбор препарата потом. Подросткам и детям: детский телефон доверия 8-800-2000-122.",
      "sources": [
        {
          "title": "NICE. Depression in adults: treatment and management (NG222), рекомендации 1.2.7 и 1.4.1 о прошлом опыте лечения, 1.4.38 о зверобое.",
          "url": "https://www.nice.org.uk/guidance/ng222"
        },
        {
          "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
        },
        {
          "title": "Федеральный закон от 30.12.2020 № 488-ФЗ «Об обеспечении вызова экстренных оперативных служб по единому номеру 112».",
          "url": "https://base.garant.ru/400156398/"
        },
        {
          "title": "Детский телефон доверия 8-800-2000-122, Фонд поддержки детей, находящихся в трудной жизненной ситуации.",
          "url": "https://telefon-doveria.ru/about/"
        }
      ]
    },
    {
      "when": "bipolar_self",
      "level": "specialist",
      "text": "Если были эпизоды мании или гипомании, это может быть биполярное расстройство. Антидепрессант без стабилизатора настроения может спровоцировать манию, поэтому схему подбирает психиатр.",
      "sources": [
        {
          "title": "Lexapro (escitalopram), инструкция по применению и руководство для пациента (Medication Guide), одобренные FDA. AbbVie, редакции 2023 и 2024 годов.",
          "url": "https://www.rxabbvie.com/pdf/lexapro_pi.pdf"
        },
        {
          "title": "Yatham L.N. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) and International Society for Bipolar Disorders (ISBD) 2018 guidelines for the management of patients with bipolar disorder. Bipolar Disorders, 2018.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5947163/"
        },
        {
          "title": "Prozac (fluoxetine), инструкция по применению: противопоказания (тиоридазин) и раздел 5.14 о длительном выведении. DailyMed, Eli Lilly (Dista), 2026.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c88f33ed-6dfb-4c5e-bc01-d8e36dd97299"
        }
      ]
    },
    {
      "when": "age_12_17",
      "level": "specialist",
      "text": "Лечение подбирает детский психиатр. Сначала психотерапия; если нужен препарат, первым NICE называет флуоксетин, и только вместе с психотерапией. Первые четыре недели с подростком и родителями связываются каждую неделю.",
      "sources": [
        {
          "title": "NICE. Depression in children and young people: identification and management (NG134), рекомендации 1.5.3, от 1.6.1 до 1.6.22, 2019.",
          "url": "https://www.nice.org.uk/guidance/ng134/chapter/Recommendations"
        }
      ]
    },
    {
      "when": "pregnancy",
      "level": "specialist",
      "text": "Если вы уже принимаете антидепрессант и узнали о беременности, не бросайте его резко: у нелеченой депрессии тоже есть риски. Решение принимают вместе с врачом.",
      "sources": [
        {
          "title": "Lexapro (escitalopram), инструкция по применению и руководство для пациента (Medication Guide), одобренные FDA. AbbVie, редакции 2023 и 2024 годов.",
          "url": "https://www.rxabbvie.com/pdf/lexapro_pi.pdf"
        }
      ]
    },
    {
      "when": "breastfeeding",
      "level": "specialist",
      "text": "Во многих российских инструкциях кормление грудью указано в противопоказаниях, хотя за рубежом часть этих препаратов при кормлении применяют. Решение принимают вместе с врачом.",
      "sources": [
        {
          "title": "Справочник Видаль: Серената (сертралин), инструкция (ЛП-№(006156)-(РГ-RU) от 08.07.24).",
          "url": "https://www.vidal.ru/drugs/serenata__6638"
        },
        {
          "title": "NICE. Depression in adults: treatment and management (NG222), рекомендации 1.2.7 и 1.4.1 о прошлом опыте лечения, 1.4.38 о зверобое.",
          "url": "https://www.nice.org.uk/guidance/ng222"
        }
      ]
    },
    {
      "when": "age_18_24",
      "level": "info",
      "text": "До 25 лет в первые недели лечения и после смены дозы чаще бывают суицидальные мысли. NICE советует первый контроль через неделю; о новых мыслях сразу говорят врачу.",
      "sources": [
        {
          "title": "NICE. Depression in adults: treatment and management (NG222), рекомендации 1.2.7 и 1.4.1 о прошлом опыте лечения, 1.4.38 о зверобое.",
          "url": "https://www.nice.org.uk/guidance/ng222"
        },
        {
          "title": "Lexapro (escitalopram), инструкция по применению и руководство для пациента (Medication Guide), одобренные FDA. AbbVie, редакции 2023 и 2024 годов.",
          "url": "https://www.rxabbvie.com/pdf/lexapro_pi.pdf"
        }
      ]
    },
    {
      "when": "anxiety",
      "level": "info",
      "text": "В первые дни СИОЗС и СИОЗСН могут ненадолго усилить тревогу и мешать сну; полный противотревожный эффект складывается за неделю и дольше.",
      "sources": [
        {
          "title": "NICE. Generalised anxiety disorder and panic disorder in adults: management (CG113), рекомендации 1.2.23, 1.2.24, 1.2.26, 1.2.28, 1.3.20, 1.3.25, 1.3.27, 1.3.28.",
          "url": "https://www.nice.org.uk/guidance/cg113"
        }
      ]
    },
    {
      "when": "epilepsy",
      "level": "info",
      "text": "СИОЗС и СИОЗСН в обычных дозах для людей с эпилепсией в целом безопасны; судороги они вызывают при передозировке. Врачу важно знать, какие противоэпилептические препараты вы принимаете.",
      "sources": [
        {
          "title": "Kanner A.M. Most antidepressant drugs are safe for patients with epilepsy at therapeutic doses: a review of the evidence. Epilepsy & Behavior, 2016.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/27236241/"
        },
        {
          "title": "Alper K. et al. Seizure incidence in psychopharmacological clinical trials: an analysis of Food and Drug Administration (FDA) summary basis of approval reports. Biological Psychiatry, 2007.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/17223086/"
        }
      ]
    },
    {
      "when": "maoi",
      "level": "specialist",
      "text": "Переход с ИМАО на другой антидепрессант и обратно идёт через перерыв в несколько дней или недель и при участии психиатра.",
      "sources": [
        {
          "title": "NICE. Depression in adults: treatment and management (NG222), рекомендации 1.2.7 и 1.4.1 о прошлом опыте лечения, 1.4.38 о зверобое.",
          "url": "https://www.nice.org.uk/guidance/ng222"
        }
      ]
    },
    {
      "when": "no_therapy",
      "level": "info",
      "text": "При умеренной депрессии антидепрессант такой же вариант первого выбора, как психотерапия. При лёгкой бывают и другие варианты: интернет-программы КПТ с поддержкой и регулярная физическая нагрузка.",
      "sources": [
        {
          "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
        }
      ]
    },
    {
      "when": "bipolar_family",
      "level": "info",
      "text": "Если у близких родственников биполярное расстройство, скажите об этом врачу. Риск, что депрессия окажется биполярной, выше, поэтому в начале лечения внимательнее следят, не появились ли признаки мании.",
      "sources": [
        {
          "title": "Yatham L.N. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) and International Society for Bipolar Disorders (ISBD) 2018 guidelines for the management of patients with bipolar disorder. Bipolar Disorders, 2018.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5947163/"
        },
        {
          "title": "Lexapro (escitalopram), инструкция по применению и руководство для пациента (Medication Guide), одобренные FDA. AbbVie, редакции 2023 и 2024 годов.",
          "url": "https://www.rxabbvie.com/pdf/lexapro_pi.pdf"
        }
      ]
    },
    {
      "when": "pregnancy",
      "level": "info",
      "text": "Если вы только планируете беременность, обсудите лечение с врачом заранее: лучше, чтобы депрессия была под контролем ещё до зачатия, а препарат подобран с учётом беременности.",
      "sources": [
        {
          "title": "Vigod S.N. et al. Canadian Network for Mood and Anxiety Treatments 2024 Clinical Practice Guideline for the Management of Perinatal Mood, Anxiety, and Related Disorders. Canadian Journal of Psychiatry, 2025.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11985483/"
        }
      ]
    },
    {
      "when": "tamoxifen",
      "level": "specialist",
      "text": "Не меняйте и не отменяйте антидепрессант сами. Часть антидепрессантов ослабляет тамоксифен, поэтому замену обсуждают с онкологом и психиатром.",
      "sources": [
        {
          "title": "Andrade C. Breast cancer and antidepressant use. Journal of Clinical Psychiatry, 2012;73(9):e1156-e1157.",
          "url": "https://www.psychiatrist.com/jcp/breast-cancer-antidepressant/"
        },
        {
          "title": "Paxil (paroxetine), инструкция по применению: разделы о судорогах, кровотечениях, варфарине и тамоксифене. DailyMed, Apotex, 2026.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ef3b5cbe-f9e1-c1ac-79da-cfe14e3a7e7e"
        }
      ]
    }
  ],
  "urgentLine": "Если есть мысли о самоубийстве, срочно к врачу или по номеру 112.",
  "review": {
    "lead": "Правила составлены по открытым источникам и проверены моделью, без врача. Ниже пункты, которые нужно решить врачу, и то, что не удалось проверить.",
    "items": [
      {
        "title": "Подростки: флуоксетин и сертралин в первых строках",
        "text": "По рекомендациям NICE при депрессии у подростков первым идёт флуоксетин, вторым сертралин. Но в российской инструкции Прозака до 18 лет стоит противопоказание, а Золофт детям назначают только при ОКР. Эсциталопрам и циталопрам при этом уже в «с осторожностью», поэтому подбор несогласован. Предлагается пометка «вне инструкции, решает детский психиатр» для флуоксетина и сертралина.",
        "question": "Так ли должен выглядеть подбор для подростков в России? Или пункт лучше убрать совсем?",
        "sources": [
          {
            "title": "NICE. Depression in children and young people: identification and management (NG134), рекомендации 1.5.3, от 1.6.1 до 1.6.22, 2019.",
            "url": "https://www.nice.org.uk/guidance/ng134/chapter/Recommendations"
          },
          {
            "title": "Прозак (флуоксетин), инструкция на medi.ru.",
            "url": "https://medi.ru/instrukciya/prozak_10337/"
          },
          {
            "title": "Золофт (сертралин), инструкция на medi.ru.",
            "url": "https://medi.ru/instrukciya/zoloft_8003/"
          }
        ]
      },
      {
        "title": "Беременность: сертралин в «с осторожностью»",
        "text": "Сейчас его понижает инструкция одного из дженериков (Серената, 2024), где беременность и кормление стоят в противопоказаниях. По CANMAT (перинатальные расстройства, 2024) сертралин относится к первой линии вместе с циталопрамом и эсциталопрамом. В инструкции Золофта беременность в противопоказаниях не значится. Предлагается перевести сертралин в «примечание» с пояснением про дженерик.",
        "question": "Согласны перевести? И как написать, чтобы читатель понял: решать нужно с врачом?",
        "sources": [
          {
            "title": "Справочник Видаль: Серената (сертралин), инструкция (ЛП-№(006156)-(РГ-RU) от 08.07.24).",
            "url": "https://www.vidal.ru/drugs/serenata__6638"
          },
          {
            "title": "Vigod S.N. et al. Canadian Network for Mood and Anxiety Treatments 2024 Clinical Practice Guideline for the Management of Perinatal Mood, Anxiety, and Related Disorders. Canadian Journal of Psychiatry, 2025.",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11985483/"
          },
          {
            "title": "Золофт (сертралин), инструкция на medi.ru.",
            "url": "https://medi.ru/instrukciya/zoloft_8003/"
          }
        ]
      },
      {
        "title": "Флуоксетин при передозировке",
        "text": "Понижен по инструкции Профлузака от 2011 года, где суицидальная настроенность стоит в противопоказаниях. В американской инструкции Прозака такого пункта нет. Обзор Hawton (2010) относит флуоксетин к наименее токсичным, CANMAT относит его к СИОЗС без отдельного предпочтения. Предлагается снять понижение по передозировке, а в блоке беременности опираться на CANMAT, а не на старую инструкцию.",
        "question": "Учитывать ли российскую инструкцию 2011 года про суицидальность или она уже не актуальна?",
        "sources": [
          {
            "title": "Справочник Видаль: Профлузак (флуоксетин), инструкция.",
            "url": "https://www.vidal.ru/drugs/proflusak__1402"
          },
          {
            "title": "Hawton K. et al. Toxicity of antidepressants: rates of suicide relative to prescribing and non-fatal overdose. British Journal of Psychiatry, 2010.",
            "url": "https://pubmed.ncbi.nlm.nih.gov/20435959/"
          },
          {
            "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
          }
        ]
      },
      {
        "title": "Порядок «первыми»",
        "text": "Когда отметок нет, в «первыми» всегда попадают пять СИОЗС: при равном счёте порядок задаётся порядком в данных, а не тем, что лучше. Миртазапин, агомелатин, вортиоксетин, венлафаксин и дулоксетин уходят в «другие варианты», хотя по CANMAT это тоже первая линия. В таблицах CANMAT у пароксетина несколько менее благоприятных отметок: взаимодействия, отмена, вес, сексуальные эффекты. Предлагается показывать всю первую линию без порядка или прямо написать, что порядок условный.",
        "question": "Как вы смотрите на то, что первыми показываются именно СИОЗС? Нужно ли убрать пароксетин с первого места?",
        "sources": [
          {
            "title": "Lam R.W. et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Canadian Journal of Psychiatry, 2024.",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
          }
        ]
      },
      {
        "title": "Пробел: QT и CYP1A2",
        "text": "Не учтены лекарства, удлиняющие QT (антипсихотики, макролиды, амиодарон). Для циталопрама американская инструкция такое сочетание не рекомендует. Не учтены сильные ингибиторы CYP1A2 (ципрофлоксацин, флувоксамин): инструкция агомелатина противопоказывает их вместе. Агомелатин и флувоксамин часто попадают в «первыми», поэтому пробел реальный. Предлагается добавить отметки в анкету или подсказку в «других лекарствах».",
        "question": "Какие из этих сочетаний обязательно учесть, чтобы не перегрузить анкету?",
        "sources": [
          {
            "title": "Celexa (citalopram), инструкция по применению: разделы 2.3 и 5.2 об интервале QT и дозах. DailyMed, Allergan, 2026.",
            "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4259d9b1-de34-43a4-85a8-41dd214e9177"
          },
          {
            "title": "Справочник Видаль: Вальдоксан (агомелатин), инструкция (ЛП-№(000528)-(РГ-RU) от 25.01.22).",
            "url": "https://www.vidal.ru/drugs/valdoxan__29817"
          }
        ]
      },
      {
        "title": "Бупропион: заказ из-за рубежа",
        "text": "В пунктах про курение и сексуальные эффекты бупропион стоит первым вариантом с пометкой, что в России он не зарегистрирован. Пункта о том, что заказ из-за рубежа опасен, в том числе юридически, нет. Найденные новости описывают дела о контрабанде, но в другом материале Российское общество психиатров пишет, что бупропион не относится к наркотикам. Однозначного источника нет. Предлагается написать в причине, что без регистрации его нужно обсуждать с врачом, а не заказывать самостоятельно.",
        "question": "Писать ли про заказ из-за рубежа на этой странице?",
        "sources": [
          {
            "title": "Howes S. et al. Antidepressants for smoking cessation. Cochrane Database of Systematic Reviews, 2020.",
            "url": "https://pubmed.ncbi.nlm.nih.gov/32319681/"
          }
        ]
      },
      {
        "title": "Что не удалось проверить",
        "text": "Цитаты LactMed: NCBI отдал капчу, поэтому не подтверждены данные о кормлении для сертралина, бупропиона, вортиоксетина, миансерина, флувоксамина, моклобемида и дезвенлафаксина. Пароксетин при кормлении: непонятно, относится ли цитата CANMAT к кормлению, правило не менялось. Пипофезин при передозировке: не подтверждено, в правила не добавлялся. Американские инструкции проверены не все. Российские клинические рекомендации: проверена редакция 2021 года.",
        "question": "",
        "sources": []
      }
    ]
  }
};
