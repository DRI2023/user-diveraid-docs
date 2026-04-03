# Дайвер: мои курсы

## Скриншоты

![Список курсов](../../assets/screenshots/diver/en/courses-list.png)

![Просроченные курсы](../../assets/screenshots/diver/en/courses-expired.png)

## Где найти

Меню: **Дайвер -> Мои курсы**

## Что можно сделать

- Смотреть активные и просроченные курсы.
- Открывать прогресс курса.
- Продолжать module/quiz/exam/skills (если доступно для курса).

## Список курсов

Типовые шаги:

1. Откройте список курсов.
2. Выберите курс, чтобы открыть его прогресс.
3. Если курс не виден, проверьте раздел просроченных (*Expired*), если он есть.

Далее внутри курса:

1. Найдите следующий шаг (module, quiz, exam, skills).
2. Выполните его и вернитесь к сводке прогресса, чтобы проверить продвижение.

## Попытки (quiz/exam/skills)

Подсказки:

- Если вы открыли модуль и видите пустую страницу или ошибку, модуль может быть недоступен для вашего курса или уже пройден.

## Детали прогресса (quiz/exam/skills)

## Частые проблемы

- Переадресация на вход: сессия истекла.
- Доступ запрещен: email не подтвержден.
- Курс не найден: старая ссылка или курс не привязан к вашему профилю.

<details>
<summary>Для поддержки (технические детали)</summary>

Список курсов:

```text
GET https://user.diveraid.com/ru/diver/courses
GET https://user.diveraid.com/ru/diver/courses/expired
```

Прогресс и попытки:

```text
GET https://user.diveraid.com/ru/diver/courses/progress/{log_code}
GET https://user.diveraid.com/ru/diver/courses/progress/{log_code}/module/{module}
GET https://user.diveraid.com/ru/diver/courses/progress/{log_code}/exam
GET https://user.diveraid.com/ru/diver/courses/progress/{log_code}/skills
GET https://user.diveraid.com/ru/diver/courses/progress/{log_code}/quiz/{quiz}
GET https://user.diveraid.com/ru/diver/courses/progress/{log_code}/exam/{exam}
GET https://user.diveraid.com/ru/diver/courses/progress/{log_code}/skill
GET https://user.diveraid.com/ru/diver/courses/progress/{log_code}/skill/sign
```

</details>

Далее: [Магазин FREe-Learning](free-learnings.md)

