# Деплой на GitHub Pages

## Преимущества GitHub Pages

✅ Бесплатный хостинг  
✅ Автоматический HTTPS  
✅ Не нужно настраивать сервер  
✅ Встроенный CDN  
✅ Автоматический деплой при push  

---

## Настройка (один раз)

### Шаг 1: Включить GitHub Pages в репозитории

1. Перейти в репозиторий на GitHub
2. **Settings** → **Pages** (в левом меню)
3. В разделе **Source** выбрать:
   - Source: **GitHub Actions** (вместо "Deploy from a branch")
4. Сохранить

**Скриншот настроек:**
```
Build and deployment
Source: GitHub Actions ← выбрать это
```

### Шаг 2: Обновить base path (если нужно)

В файле `.vuepress/config.js` параметр `base` должен соответствовать названию репозитория:

```js
base: '/steiza/',  // Если репозиторий: github.com/username/steiza
```

**Варианты:**
- Если репозиторий: `github.com/username/steiza` → `base: '/steiza/'`
- Если репозиторий: `github.com/username/username.github.io` → `base: '/'`
- Если репозиторий: `github.com/username/docs` → `base: '/docs/'`

### Шаг 3: Запушить изменения

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### Шаг 4: Проверить деплой

1. На GitHub перейти во вкладку **Actions**
2. Найти workflow "Deploy to GitHub Pages"
3. Дождаться завершения (обычно 2-3 минуты)
4. Зеленая галочка = успешно

### Шаг 5: Открыть сайт

Сайт будет доступен по адресу:
```
https://username.github.io/steiza/
```

Или в **Settings → Pages** будет показан точный URL.

---

## Локальная разработка

При локальной разработке с `base: '/steiza/'`:

```bash
npm run docs:dev
```

Сайт откроется на `http://localhost:8080/steiza/`

---

## Автоматический деплой

После настройки, каждый push в `main` с изменениями в `Инструкции/site/`:
1. GitHub Actions автоматически соберет сайт
2. Задеплоит на GitHub Pages
3. Через 1-2 минуты изменения будут видны на сайте

---

## Добавление custom домена (опционально)

### Шаг 1: Создать файл CNAME

```bash
echo "docs.yourdomain.com" > Инструкции/site/.vuepress/public/CNAME
```

### Шаг 2: Настроить DNS

В настройках вашего домена добавить записи:

**Для поддомена (docs.yourdomain.com):**
```
Type: CNAME
Name: docs
Value: username.github.io
```

**Для основного домена (yourdomain.com):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A  
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

### Шаг 3: Настроить в GitHub

1. **Settings → Pages**
2. **Custom domain**: ввести `docs.yourdomain.com`
3. Включить **Enforce HTTPS** (после проверки DNS)

### Шаг 4: Обновить base в config.js

```js
base: '/',  // Для custom домена используем корневой путь
```

---

## Troubleshooting

### Ошибка 404 на страницах

Проверьте `base` в `.vuepress/config.js`:
```js
base: '/steiza/',  // Должно совпадать с названием репозитория
```

### Картинки не загружаются

Убедитесь что изображения:
1. Находятся в `.vuepress/public/images/`
2. Ссылки используют абсолютные пути: `![](/images/1.png)`

### Workflow не запускается

Проверьте:
1. **Settings → Actions → General** → "Allow all actions and reusable workflows"
2. Файл workflow находится в `.github/workflows/` (в корне репозитория)

### Изменения не появляются на сайте

1. Проверить что build прошел успешно в **Actions**
2. Подождать 1-2 минуты для CDN
3. Очистить кэш браузера (Ctrl+Shift+R / Cmd+Shift+R)
4. Открыть в режиме инкогнито

### Ошибка "Unable to unpack deployment token"

Проверить права workflow:
1. **Settings → Actions → General**
2. **Workflow permissions** → выбрать "Read and write permissions"
3. Сохранить

---

## Сравнение: GitHub Pages vs Собственный сервер

| Критерий | GitHub Pages | Собственный сервер |
|----------|--------------|-------------------|
| Стоимость | Бесплатно | Платный хостинг |
| Настройка | 5 минут | 30+ минут |
| HTTPS | Автоматический | Нужно настраивать |
| CDN | Встроенный | Опционально |
| Контроль | Ограниченный | Полный |
| Лимиты | 1 GB, 100 GB/месяц | Зависит от тарифа |

**Рекомендация:** Для документации идеально подходит GitHub Pages.

---

## Удаление GitHub Pages деплоя

Если хотите вернуться к деплою на собственный сервер:

1. Удалить файл `.github/workflows/deploy-gh-pages.yml`
2. В `.vuepress/config.js` убрать или изменить `base: '/'`
3. **Settings → Pages** → отключить Pages
4. Использовать workflow `deploy.yml` для деплоя на сервер

