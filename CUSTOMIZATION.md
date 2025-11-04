# Кастомизация внешнего вида

## Изменение цветов

Цвета настраиваются в файле `.vuepress/styles/palette.css`

### Основные цветовые переменные

```css
:root {
  /* Основной акцентный цвет (кнопки, ссылки) */
  --c-brand: #3eaf7c;           /* Зеленый по умолчанию */
  --c-brand-light: #4abf8a;     /* Светлый оттенок */
  --c-brand-hover: #2d8659;     /* Цвет при наведении */
  
  /* Цвета текста */
  --c-text: #2c3e50;            /* Основной текст */
  --c-text-light: #476582;      /* Второстепенный текст */
}
```

### Примеры популярных цветовых схем

#### 1. Синяя схема (технологичная)

```css
:root {
  --c-brand: #1976d2;
  --c-brand-light: #42a5f5;
  --c-brand-hover: #1565c0;
}
```

#### 2. Фиолетовая схема (современная)

```css
:root {
  --c-brand: #7c3aed;
  --c-brand-light: #9f7aea;
  --c-brand-hover: #5b21b6;
}
```

#### 3. Оранжевая схема (энергичная)

```css
:root {
  --c-brand: #f97316;
  --c-brand-light: #fb923c;
  --c-brand-hover: #ea580c;
}
```

#### 4. Красная схема (акцентная)

```css
:root {
  --c-brand: #dc2626;
  --c-brand-light: #ef4444;
  --c-brand-hover: #b91c1c;
}
```

#### 5. Темно-синяя схема (корпоративная)

```css
:root {
  --c-brand: #0f172a;
  --c-brand-light: #334155;
  --c-brand-hover: #020617;
  
  --c-text: #1e293b;
  --c-text-light: #475569;
}
```

### Как применить

1. Откройте `.vuepress/styles/palette.css`
2. Измените значения переменных `--c-brand*`
3. Сохраните файл
4. Dev-сервер автоматически перезагрузится с новыми цветами

---

## Дополнительные стили

Кастомные стили добавляются в `.vuepress/styles/index.css`

### Пример: Изменение стилей изображений

```css
.theme-default-content img {
  border-radius: 12px;          /* Более круглые углы */
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);  /* Более заметная тень */
  border: 2px solid var(--c-border);  /* Рамка вокруг изображений */
}
```

### Пример: Изменение стилей заголовков

```css
.theme-default-content h1 {
  color: var(--c-brand);
  font-size: 2.5rem;
  text-align: center;
  border-bottom: none;
  margin-bottom: 2rem;
}

.theme-default-content h2 {
  color: var(--c-brand);
  border-left: 4px solid var(--c-brand);
  padding-left: 1rem;
  border-bottom: none;
}
```

### Пример: Изменение шрифтов

```css
:root {
  /* Системные шрифты */
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  
  /* Или custom шрифты (нужно добавить @import) */
  --font-family: 'Inter', sans-serif;
  --font-family-code: 'JetBrains Mono', 'Fira Code', monospace;
}

body {
  font-family: var(--font-family);
}

code {
  font-family: var(--font-family-code);
}
```

---

## Добавление custom шрифта

### 1. Google Fonts

Добавьте в `.vuepress/config.js`:

```js
export default defineUserConfig({
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', rel: 'stylesheet' }],
  ],
  // ...
})
```

Затем в `.vuepress/styles/index.css`:

```css
body {
  font-family: 'Inter', sans-serif;
}
```

### 2. Локальные шрифты

1. Поместите файлы шрифтов в `.vuepress/public/fonts/`
2. Добавьте в `.vuepress/styles/index.css`:

```css
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/CustomFont.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}

body {
  font-family: 'CustomFont', sans-serif;
}
```

---

## Изменение логотипа

В `.vuepress/config.js`:

```js
theme: defaultTheme({
  logo: '/images/logo.png',  // Путь относительно .vuepress/public/
  logoDark: '/images/logo-dark.png',  // Для темной темы
  // ...
})
```

Поместите файл логотипа в `.vuepress/public/images/logo.png`

---

## Темная тема

VuePress поддерживает темную тему из коробки. Настройка в `.vuepress/styles/palette.css`:

```css
html.dark {
  --c-brand: #4abf8a;
  --c-bg: #1a1a1a;
  --c-text: #e0e0e0;
}
```

Включить/выключить переключатель темы в `.vuepress/config.js`:

```js
theme: defaultTheme({
  colorMode: 'auto',  // 'auto' | 'light' | 'dark'
  colorModeSwitch: true,  // Показывать переключатель
  // ...
})
```

---

## Полный список CSS переменных

<details>
<summary>Показать все переменные</summary>

```css
:root {
  /* Цвета бренда */
  --c-brand: #3eaf7c;
  --c-brand-light: #4abf8a;
  
  /* Фон */
  --c-bg: #ffffff;
  --c-bg-light: #f8f8f8;
  --c-bg-lighter: #fafafa;
  --c-bg-navbar: #ffffff;
  --c-bg-sidebar: #ffffff;
  --c-bg-arrow: #cccccc;
  
  /* Текст */
  --c-text: #2c3e50;
  --c-text-light: #476582;
  --c-text-lighter: #90a4b7;
  --c-text-quote: #999999;
  
  /* Границы */
  --c-border: #e7e7e7;
  --c-border-dark: #dcdcdc;
  
  /* Код */
  --c-code-bg: #f6f6f7;
  --c-code-text: #476582;
  --c-code-inline-bg: #f6f6f7;
  --c-code-inline-text: #476582;
  
  /* Подсказки, предупреждения */
  --c-tip: #42b983;
  --c-tip-bg: #e6f6f0;
  --c-warning: #e7c000;
  --c-warning-bg: #fffae3;
  --c-danger: #cc0000;
  --c-danger-bg: #ffe6e6;
  
  /* Шрифты */
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  --font-family-code: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  
  /* Размеры шрифтов */
  --font-size-base: 16px;
  --font-size-small: 14px;
  --font-size-large: 18px;
  
  /* Высота строк */
  --line-height-base: 1.6;
  --line-height-code: 1.4;
}
```

</details>

---

## Примеры использования

### Минималистичный дизайн

```css
/* palette.css */
:root {
  --c-brand: #000000;
  --c-brand-light: #333333;
  --c-brand-hover: #1a1a1a;
  
  --c-text: #1a1a1a;
  --c-border: #e0e0e0;
}

/* index.css */
.theme-default-content img {
  border-radius: 0;
  box-shadow: none;
  border: 1px solid var(--c-border);
}

.theme-default-content h1,
.theme-default-content h2 {
  border-bottom: none;
}
```

### Яркий игровой стиль

```css
/* palette.css */
:root {
  --c-brand: #ff00ff;
  --c-brand-light: #ff66ff;
  --c-brand-hover: #cc00cc;
  
  --c-bg: #0a0a0a;
  --c-text: #00ff00;
}

/* index.css */
.theme-default-content img {
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.5);
  border: 2px solid var(--c-brand);
}
```

---

## Проверка изменений

После внесения изменений:

1. **Локально:** Dev-сервер (`npm run docs:dev`) автоматически перезагрузится
2. **Production:** Выполните `npm run docs:build` и проверьте результат
3. **GitHub Pages:** Push изменений → автоматически соберется с новыми стилями

---

## Troubleshooting

### Изменения не применяются

1. Перезапустите dev-сервер: `Ctrl+C` → `npm run docs:dev`
2. Очистите кэш: `rm -rf .vuepress/.cache .vuepress/.temp`
3. Проверьте синтаксис CSS (ошибки в консоли браузера F12)

### Цвета темной темы не работают

Убедитесь что переопределили переменные внутри `html.dark { }`:

```css
html.dark {
  --c-brand: #4abf8a;
  /* остальные переменные */
}
```

### Стили не применяются к определенным элементам

Используйте браузерные DevTools (F12) чтобы:
1. Найти нужный элемент
2. Посмотреть его CSS классы
3. Переопределить нужные стили с более высоким приоритетом

