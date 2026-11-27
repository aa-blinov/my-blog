---
title: "Источники второго уровня"
date: 2026-11-27T12:39:43Z
part: 21
partGroup: "Уровень 2. Продолжающий"
summary: "Исследования, руководства и документация для проверки материала второго уровня."
---

## 1. Методология, качество и governance

- [NIST AI Risk Management Framework 1.0](https://doi.org/10.6028/NIST.AI.100-1): Базовая рамка для управления риском ИИ через функции Govern, Map, Measure, Manage.
- [NIST Generative AI Profile](https://doi.org/10.6028/NIST.AI.600-1): Материалы NIST адаптируют общий подход к генеративному ИИ и описывают риски, контроль и оценку.
- [Anthropic: Prompt engineering overview](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview): Практические принципы работы с инструкциями: ясность, декомпозиция, примеры, тестирование.
- [OpenAI: Evals guide](https://platform.openai.com/docs/guides/evals): Практика построения eval-наборов и проверки желаемого поведения на репрезентативных примерах.
---

## 2. Безопасность и guardrails

- [OWASP GenAI LLM Top 10 2026](https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/): Перечень рисков LLM-приложений; читайте его вместе с описанием конкретных угроз и мер снижения риска.
- [Zapier Help: Screen AI output with AI Guardrails](https://help.zapier.com/hc/en-us/articles/43960576956301-Screen-AI-output-for-safety-and-compliance-with-AI-Guardrails-by-Zapier): Описание проверок PII, prompt injection, тональности и токсичного содержания; Zapier указывает, что обнаружение не заменяет другие меры защиты.
---

## 3. Research, источники и source-grounded workflows

- [OpenAI Help: Deep research in ChatGPT](https://help.openai.com/en/articles/10500283-deep-research-in-chatgpt): Официальное описание deep research-режима ChatGPT: план исследования, источники, connected apps, отчёт и цитирование.
- [Google Help: Use Deep Research in Gemini Apps](https://support.google.com/gemini/answer/15719111?hl=en): Официальная инструкция Google по Deep Research в Gemini: план, выбор источников, использование Google-сервисов.
- [Google Blog: Gemini Deep Research](https://blog.google/products/gemini/google-gemini-deep-research/): Официальное описание deep research-подхода Gemini для многошагового исследования внешних источников.
- [Anthropic Support: Use research on Claude](https://support.claude.com/en/articles/11088861-use-research-on-claude): Официальное описание Claude Research: исследование по вебу и внутреннему контексту, цитаты и connected sources.
- [Perplexity Blog: Introducing Perplexity Deep Research](https://www.perplexity.ai/hub/blog/introducing-perplexity-deep-research): Официальный материал Perplexity о Deep Research как режиме для многопоискового web-first исследования.
- [Google Blog: NotebookLM is now Gemini Notebook](https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/): Официальное сообщение о переименовании продукта и его интеграции в экосистему Google.
- [Google Help: Use chat in Gemini Notebook](https://support.google.com/gemininotebook/answer/16179559?hl=en): Официальное описание ответов по выбранным источникам и цитат, ведущих к фрагментам документов.
---

## 4. Рабочие форматы, базы знаний и автоматизация без кода

- [OpenAI API: Retrieval](https://developers.openai.com/api/docs/guides/retrieval): Пример настройки поиска и фрагментации в конкретном продукте; параметры не являются универсальными для всех RAG-систем.
- [Ragas: доступные метрики](https://docs.ragas.io/en/latest/concepts/metrics/available_metrics/): Описание метрик оценки retrieval и генерации, включая Faithfulness, Response Relevancy и Context Precision.
- [CommonMark Specification](https://spec.commonmark.org/): Опорное описание Markdown как переносимого текстового формата со структурой заголовков, списков, ссылок и других базовых элементов.
- [GitHub Docs: Basic writing and formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax): Практическое руководство по повседневному Markdown-синтаксису; полезно для шаблонов, сценариев и структурированных запросов к модели.
- [Obsidian Help: Create a vault](https://help.obsidian.md/vault): Официальное описание хранилища заметок в Obsidian как локальной папки, которую можно создать с нуля или открыть как существующую.
- [How Obsidian stores data](https://help.obsidian.md/data-storage): Официальное описание того, как Obsidian хранит заметки и настройки на основе локальных файлов и папок.
- [Obsidian Help: Internal links](https://help.obsidian.md/Linking%20notes%20and%20files/Internal%20links): Официальное описание внутренних ссылок как основы связности заметок внутри базы знаний.
- [Obsidian Help: Properties](https://help.obsidian.md/properties): Официальное описание свойств заметок для простого структурирования, фильтрации и навигации.
- [Obsidian Help: Templates](https://help.obsidian.md/Plugins/Templates): Официальное описание шаблонов для повторяющихся заметок и сценариев.
- [Obsidian Help: Daily notes](https://help.obsidian.md/plugins/daily-notes): Официальное описание ежедневных заметок как точки быстрого захвата и регулярного ритма работы.
- [Obsidian Help: Plugin security](https://help.obsidian.md/plugin-security): Официальное описание рисков плагинов сообщества и ограниченного режима; полезно для трезвого отношения к кастомизации.
- [Dify Docs: Create knowledge and upload documents](https://docs.dify.ai/en/guides/knowledge-base/create-knowledge-and-upload-documents/create-knowledge): Официальная документация Dify по knowledge base, загрузке документов и retrieval-сценариям.
- [n8n Docs: Advanced AI](https://docs.n8n.io/advanced-ai/intro-tutorial/): Официальная документация n8n по AI-workflows, orchestration и связанным практикам.
- [Make Help: AI Agents](https://www.make.com/en/help/ai-agents): Официальное описание AI Agents и облачного no-code orchestration в Make.
