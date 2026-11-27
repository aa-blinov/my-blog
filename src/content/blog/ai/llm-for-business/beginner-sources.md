---
title: "Источники первого уровня"
date: 2026-11-27T12:39:43Z
part: 10
partGroup: "Уровень 1. Начинающий"
---

Здесь собраны исследования, официальные документы и справочные материалы для проверки фактов и дальнейшего чтения. Сведения о функциях и тарифах сервисов сверяйте с их актуальной документацией.

## 1. Токены, контекст и поведение моделей

- [Brown et al.: Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165): Первичное исследование об авторегрессионных языковых моделях и генерации продолжения текста.
- [Ouyang et al.: Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155): Исследование донастройки языковой модели с использованием человеческих предпочтений.
- [Meng et al.: Locating and Editing Factual Associations in GPT](https://arxiv.org/abs/2202.05262): Исследование методов редактирования фактических ассоциаций и их ограничений.
- [OpenAI: Key concepts: tokens and embeddings](https://developers.openai.com/api/docs/concepts): Что такое токены и эмбеддинги; ограничения контекстного окна.
- [OpenAI: Models](https://developers.openai.com/api/docs/models): Каталог моделей с опубликованными параметрами, в том числе датами среза знаний; наличие даты не означает полноты знаний до неё.
- [OpenAI: Tokenizer](https://platform.openai.com/tokenizer): Инструмент для подсчёта токенов конкретного текста. Приведённое на странице приближение относится к английскому тексту, а не к русскому.
- [OpenAI API: Temperature](https://developers.openai.com/api/reference/resources/chat/subresources/completions/methods/create): Описание параметра sampling temperature в конкретном API; поддержка и эффект могут различаться у моделей.
- [OpenAI: Reasoning best practices](https://developers.openai.com/api/docs/guides/reasoning-best-practices): Рекомендации для reasoning-моделей; пошаговые инструкции не всегда улучшают результат.
- [Liu et al.: Lost in the Middle](https://aclanthology.org/2024.tacl-1.9/): Исследование позиционного эффекта в длинном контексте на выбранных моделях и задачах. Результаты не следует переносить на любую модель без проверки.
## 2. Запросы, безопасность и рабочие инструменты

- [GovTech Singapore: CO-STAR и Prompt Engineering Playbook](https://www.tech.gov.sg/technews/mastering-the-art-of-prompt-engineering-with-empower/): Описание шести блоков CO-STAR.
- [MDDI Singapore: GovTech Innovation Day 2024](https://www.mddi.gov.sg/newsroom/speech-by-sms-janil-puthucheary-at-govtech-innovation-day-2024/): Ретроспективное описание запуска Prompt Royale в 2023 году.
- [OpenAI API: Retrieval](https://developers.openai.com/api/docs/guides/retrieval): Один из примеров поиска по базе и настройки фрагментов; значения относятся к конкретному продукту.
- [OWASP GenAI LLM Top 10 2026](https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/): Перечень рисков приложений с языковыми моделями.
- [OWASP: Prompt Injection](https://genai.owasp.org/glossary/prompt-injection/): Определение prompt injection, варианты атаки и ограничения мер защиты.
- [AnythingLLM documentation](https://docs.anythingllm.com/), [Dify documentation](https://docs.dify.ai/), [Flowise documentation](https://docs.flowiseai.com/), [RAGFlow documentation](https://ragflow.io/docs): Официальные руководства по функциям и вариантам установки платформ.
- [n8n documentation](https://docs.n8n.io/), [Make Help](https://help.make.com/), [Zapier Help](https://help.zapier.com/): Официальные руководства по настройке автоматизаций; тарифы и функции зависят от продукта и плана.
## 3. Данные, регулирование и проверяемые значения

- [OpenAI: Business data](https://openai.com/business-data/): Условия обработки данных в бизнес-продуктах OpenAI; не переносите их на другие продукты или провайдеров.
- [Еврокомиссия: Navigating the AI Act](https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act): Официальные разъяснения об области действия AI Act и ролях организаций.
- [Банк России: архив ключевой ставки](https://www.cbr.ru/hd_base/KeyRate/?UniDbQuery.From=01.01.2019&UniDbQuery.Posted=True&UniDbQuery.T=): Первичный источник исторических значений ключевой ставки Банка России.
- [NIST: Generative AI Profile](https://doi.org/10.6028/NIST.AI.600-1): Руководство по оценке рисков и управлению генеративным ИИ.
- [Ollama](https://docs.ollama.com/), [LM Studio](https://lmstudio.ai/docs), [Open WebUI](https://docs.openwebui.com/): Официальная документация по локальным моделям и интерфейсам; проверьте настройки сетевых функций для своей установки.
- [ICO: AI and data protection: automation bias](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/how-do-we-ensure-individual-rights-in-our-ai-systems/): Определение automation bias в контексте использования AI-систем для поддержки решений.
