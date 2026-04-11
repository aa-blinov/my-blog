---
title: "Project Setup Tool: ритуал создания проекта — один раз и навсегда"
date: 2026-04-11
draft: false
---

Каждый новый Python-проект начинается одинаково. Создаёшь папку, инициализируешь git, делаешь virtualenv, скачиваешь `.gitignore`, создаёшь `requirements.txt`, настраиваешь VS Code, пишешь `ruff.toml`. Если это FastAPI — ещё структуру папок, `Dockerfile`, `docker-compose.yml`. Если Telegram-бот — другая структура, другие зависимости. Если ML — Jupyter, pandas, mlflow.

Каждый раз одно и то же. Каждый раз немного по-разному, потому что не помнишь, как делал в прошлый раз.

Так появился [Project Setup Tool](https://github.com/aa-blinov/project-setup-tool).

Указываешь имя проекта и профиль — инструмент делает остальное. Девять шагов за несколько секунд: директория, virtualenv через `uv`, `.gitignore` с Python-шаблона с GitHub, `git init`, `ruff.toml`, файлы под конкретный профиль, настройки VS Code, установка зависимостей, открытие редактора.

```bash
uv run pst-cli my-api fastapi
uv run pst-cli ml-exp ml
uv run pst-cli my-bot telegram
```

Или интерактивно — запускаешь без аргументов, выбираешь из списка.

Профилей двадцать: `basic`, `fastapi`, `fastapi-db`, `flask`, `streamlit`, `django`, `cli`, `telegram`, `discord`, `grpc`, `celery`, `scraper`, `data`, `ml`, `pypi`, `langchain`, `llama`, `mcp`, `lambda`, `pytest-plugin`. Каждый разворачивает правильную структуру с нужными зависимостями, Dockerfile и README.

Есть и GUI-версия на PyQt5 — для тех, кто предпочитает кликать, а не печатать.

```bash
uv run pst
```

Редактор открывается автоматически — VS Code, Cursor, Windsurf, что найдёт первым.

Самый используемый сценарий у меня — AI-профили. Когда нужно быстро попробовать идею с LangChain или поднять MCP-сервер, тратить десять минут на бойлерплейт неохота. Одна команда — и всё готово, можно писать код.

Весь ритуал превратился в одну строчку. Пустяк — но когда начинаешь новый проект раз в неделю, это ощущается.
