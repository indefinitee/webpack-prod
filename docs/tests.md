## 🧪 Тестирование

В проекте реализована комплексная система тестирования, включающая 4 уровня проверки качества кода.

### 📊 Виды тестов

#### 1. Unit-тесты (Jest)
```bash
npm run test:unit
```
- **Описание**: Модульное тестирование отдельных функций и компонентов
- **Фреймворк**: Jest
- **Покрытие**: Бизнес-логика, утилиты, хуки

#### 2. Компонентные тесты (React Testing Library)
```bash
npm run test:unit
```
- **Описание**: Тестирование React-компонентов с точки зрения пользователя
- **Фреймворк**: React Testing Library (RTL)
- **Покрытие**: Компоненты, пользовательские взаимодействия

#### 3. Скриншотное тестирование (Loki)
```bash
npm run test:ui
```
- **Описание**: Визуальное регрессионное тестирование интерфейсов
- **Фреймворк**: Loki
- **Дополнительные команды**:
    - `npm run test:ui:ok` - Подтверждение новых скриншотов
    - `npm run test:ui:ci` - Запуск в CI/CD окружении
    - `npm run test:ui:report` - Генерация полного отчета
    - `npm run test:ui:json` - Генерация JSON-отчета
    - `npm run test:ui:html` - Генерация HTML-отчета

#### 4. E2E-тестирование (Cypress)
```bash
npm run test:e2e
```
- **Описание**: Сквозное тестирование пользовательских сценариев
- **Фреймворк**: Cypress
- **Покрытие**: Критические пользовательские пути, интеграция с API

### 🎯 Стратегия тестирования

- **Unit и компонентные тесты** запускаются перед каждым коммитом
- **Скриншотные тесты** проверяют визуальные регрессии
- **E2E-тесты** валидируют основные пользовательские сценарии