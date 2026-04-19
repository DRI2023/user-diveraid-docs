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

## Прогресс курса (сводка)

Когда вы открываете курс, вы попадаете на страницу **прогресса**. Это центр курса: что выполнено и что дальше.
![Прогресс курса (сводка)](../../assets/screenshots/diver/en/courses-progress.png)

Типовые шаги:

1. В курсе найдите следующий шаг (module, quiz, exam, skills).
2. Выполните его и вернитесь к сводке прогресса, чтобы проверить продвижение.

## Попытки (quiz/exam/skills)

Попытки это страницы, где вы **выполняете** задание (отвечаете, отправляете, подтверждаете).

### Попытка quiz (module)
![Quiz attempt](../../assets/screenshots/diver/en/courses-quiz-attempt.png)

Типовые шаги:

1. В прогрессе курса откройте следующий шаг (module/quiz).
2. Ответьте на вопросы.
3. Отправьте.
4. Откройте результаты (если доступны), чтобы проверить ответы.

### Попытка exam
![Exam attempt](../../assets/screenshots/diver/en/courses-exam-attempt.png)

Примечание: экзамен доступен только после завершения обязательных quiz/module и после того, как инструктор его активирует.

Типовые шаги:

1. В прогрессе курса откройте **Exam**.
2. Завершите экзамен.
3. Отправьте и дождитесь страницы результатов.

### Skills

Skills это практические шаги, которые могут требовать подтверждения в зависимости от курса.
![Skills signatures](../../assets/screenshots/diver/en/courses-skills.png)

Примечание: подтвердить skills можно только после того, как инструктор отметит их как выполненные.

Совет: если курс требует, не забудьте заполнить связанную запись Dive Log/Logbook для skills перед подтверждением.

## Детали прогресса (quiz/exam/skills)

Детали прогресса это страницы, где вы смотрите **результаты** (например ответы quiz или результаты exam).
![Детали прогресса (результаты)](../../assets/screenshots/diver/en/courses-results.png)

## Частые проблемы

- Перенаправление на логин: сессия истекла.
- Доступ запрещен: email не подтвержден.
- Курс не найден: старая ссылка или курс не привязан к аккаунту.

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

Далее: [FREE-Learning shop](free-learnings.md)

