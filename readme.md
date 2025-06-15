# 📚 Документация проекта

## 🚀 Быстрый старт

### Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск с Webpack
npm run start:dev

# Запуск с Vite
npm run start:dev:vite
```

---

## 📋 Доступные скрипты

### 🔧 Разработка
- `npm run start` - Запуск frontend-приложения на webpack dev server
- `npm run start:vite` - Запуск frontend-приложения на Vite
- `npm run start:dev` - Запуск frontend (webpack) + backend
- `npm run start:dev:vite` - Запуск frontend (Vite) + backend
- `npm run start:dev:server` - Запуск только backend-сервера

### 📦 Сборка
- `npm run build:prod` - Production-сборка (с минификацией)
- `npm run build:dev` - Development-сборка (без минификации)

### ✅ Линтинг
- `npm run lint:ts` - Проверка TypeScript-файлов
- `npm run lint:ts:fix` - Автоисправление TypeScript-файлов
- `npm run lint:scss` - Проверка SCSS-файлов
- `npm run lint:scss:fix` - Автоисправление SCSS-файлов

### 🧪 Тестирование
- `npm run test:unit` - Запуск unit-тестов (Jest)
- `npm run test:ui` - Запуск скриншотных тестов (Loki)
- `npm run test:ui:ok` - Подтверждение новых скриншотов
- `npm run test:ui:ci` - Запуск скриншотных тестов для CI
- `npm run test:ui:report` - Генерация полного отчета по скриншотным тестам
- `npm run test:ui:json` - Генерация JSON-отчета
- `npm run test:ui:html` - Генерация HTML-отчета

### 📖 Storybook
- `npm run storybook` - Запуск Storybook
- `npm run storybook:build` - Сборка Storybook

### 🛠 Утилиты
- `npm run prepare` - Настройка pre-commit хуков
- `npm run generate:slice` - Генерация FSD-слайса

---

## 🏗 Архитектура проекта

Проект разработан в соответствии с методологией **Feature-Sliced Design** (v2.1)

📖 [Документация FSD](https://feature-sliced.design/docs/get-started/tutorial)

---

## 🌍 Интернационализация

Для работы с переводами используется библиотека **i18next**.

- **Расположение переводов**: `public/locales`
- **Рекомендация**: Установите плагин i18next для вашей IDE

📖 [Документация i18next](https://react.i18next.com/)

---

## 🧪 Тестирование

В проекте реализовано 4 уровня тестирования:

1. **Unit-тесты** (Jest) - `npm run test:unit`
2. **Компонентные тесты** (React Testing Library) - `npm run test:unit`
3. **Скриншотное тестирование** (Loki) - `npm run test:ui`
4. **E2E-тестирование** (Cypress) - `npm run test:e2e`

📖 [Подробнее о тестировании](/docs/tests.md)

---

## 🔍 Линтинг и форматирование

### Используемые инструменты:
- **ESLint** - для проверки TypeScript-кода
- **Stylelint** - для проверки стилей

### Кастомный ESLint плагин
Проект включает собственный плагин `eslint-plugin-danny-fsd-plugin` с тремя правилами:

1. **fsd-path-checker** - запрещает абсолютные импорты внутри одного модуля
2. **fsd-layer-imports** - контролирует корректность использования слоёв FSD
3. **fsd-public-api** - разрешает импорты только из public API (с auto-fix)

### Команды для запуска:
```bash
# TypeScript
npm run lint:ts       # Проверка
npm run lint:ts:fix   # Исправление

# SCSS
npm run lint:scss     # Проверка
npm run lint:scss:fix # Исправление
```

---

## 📚 Storybook

Для каждого компонента создаются story-файлы.

**Соглашение**: Story-файлы размещаются рядом с компонентом с расширением `.stories.tsx`

### Пример story:

```typescript jsx
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, ButtonSize, ThemeButton } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Button',
    },
};
```

📖 [Подробнее о Storybook](/docs/storybook.md)

---

## ⚙️ Конфигурация проекта

Проект поддерживает два сборщика:

1. **Webpack** - конфигурация в `./config/build`
2. **Vite** - конфигурация в `vite.config.ts`

### Структура конфигурации:
- `/config/babel` - настройки Babel
- `/config/build` - конфигурация Webpack
- `/config/jest` - настройки тестового окружения
- `/config/storybook` - конфигурация Storybook

### Вспомогательные скрипты:
В папке `scripts` находятся утилиты для:
- Рефакторинга кода
- Генерации компонентов
- Создания отчетов

---

## 🔄 CI/CD и Git-хуки

### GitHub Actions
Конфигурация CI находится в `/.github/workflows`

**CI pipeline включает:**
- Запуск всех видов тестов
- Сборку проекта
- Сборку Storybook
- Проверку линтерами

### Pre-commit хуки
Настройки хуков в `/.husky` обеспечивают проверку кода перед коммитом.

---

## 💾 Управление состоянием

### Основные принципы:
- Использование **Redux Toolkit** для управления состоянием
- Нормализация данных с помощью **EntityAdapter**
- Серверные запросы через **RTK Query**
- Динамическая загрузка редьюсеров с **DynamicModuleLoader**

📖 [RTK Api](/src/shared/api/rtkApi.ts)  
📖 [DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

---

## 📁 Структура FSD

### 🎯 Сущности (entities)
- [Article](/src/entities/Article) - Статьи
- [Comment](/src/entities/Comment) - Комментарии
- [Counter](/src/entities/Counter) - Счетчик
- [Country](/src/entities/Country) - Страны
- [Currency](/src/entities/Currency) - Валюты
- [Notification](/src/entities/Notifications) - Уведомления
- [Profile](/src/entities/Profile) - Профиль пользователя
- [Rating](/src/entities/Rating) - Рейтинг
- [User](/src/entities/User) - Пользователь

### 🔨 Фичи (features)
- [addCommentForm](/src/features/addCommentForm) - Форма добавления комментария
- [articleEditForm](/src/features/articleEditForm) - Форма редактирования статьи
- [articleRating](/src/features/articleRating) - Рейтинг статьи
- [articleRecommendationsList](/src/features/articleRecommendationsList) - Рекомендации статей
- [AuthByUsername](/src/features/AuthByUsername) - Авторизация по логину
- [avatarDropdown](/src/features/avatarDropdown) - Выпадающее меню аватара
- [editableProfileCard](/src/features/editableProfileCard) - Редактируемая карточка профиля
- [LangSwitcher](/src/features/LangSwitcher) - Переключатель языка
- [notificationButton](/src/features/notificationsButton) - Кнопка уведомлений
- [profileRating](/src/features/profileRating) - Рейтинг профиля
- [ThemeSwitcher](/src/features/ThemeSwitcher) - Переключатель темы
- [ScrollRestore](/src/features/ScrollRestore) - Восстановление прокрутки