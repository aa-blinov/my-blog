---
title: "Пример статьи с блоками кода"
date: 2026-03-06
draft: false
summary: "Демо-материал для проверки Markdown и подсветки синтаксиса в Hugo."
section: dev
---

# Пример статьи с блоками кода

Эта статья нужна как шаблон: можно копировать структуру и быстро публиковать новые материалы.

## 1. Быстрый запуск локально

```bash
hugo server -D
```

Если Hugo установлен не в PATH, можно так:

```bash
PATH="$HOME/.local/bin:$PATH" hugo server -D
```

## 2. Конфиг в YAML (пример)

```yaml
site:
  title: "Личный блог"
  language: "ru"
posts:
  section: "dev"
  drafts: false
```

## 3. JS-утилита

```js
function readingTime(text) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

console.log(`~${readingTime("Привет мир")}`);
```

## 4. Go-пример

```go
package main

import "fmt"

func main() {
    name := "Hugo"
    fmt.Printf("Hello, %s!\n", name)
}
```

## 5. Inline-код

Используй `content/blog/<razdel>/<slug>.md`, чтобы разделы в репозитории совпадали с разделами на сайте.

## 6. Чеклист перед коммитом

- Заполни `title`, `date`, `summary`.
- Проверь заголовки (`h2`, `h3`) и ссылки.
- Запусти локальный просмотр.
