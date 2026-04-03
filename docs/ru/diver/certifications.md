# Дайвер: мои сертификаты

Страница **Мои сертификаты** показывает ваши карточки сертификаций и позволяет скачать их (PDF/PNG).

## Где найти

Меню: **Дайвер -> Мои сертификаты**

![Список сертификатов](../../assets/screenshots/diver/en/certifications-02.png)

## Список сертификатов

Типовые шаги:

1. Откройте список сертификатов.
2. Выберите сертификат, чтобы посмотреть детали.
3. Нажмите на карточку сертификата, чтобы увидеть данные на другой стороне (split view).
4. Скачайте карточку как **PDF** или **PNG**.
5. Если доступно, откройте **History**, чтобы посмотреть прогресс и результаты.

![Детали сертификата (split view)](../../assets/screenshots/diver/en/certifications-01.png)

## История сертификации

Страница истории показывает детали прогресса по конкретной сертификации (modules/quiz/exam/skills, в зависимости от курса).

![История сертификации](../../assets/screenshots/diver/en/certifications-history.png)

## Частые проблемы

- Сертификат отсутствует: возможно он еще не привязан к вашему профилю.
- История не открывается: элемент недоступен или ссылка устарела.

<details>
<summary>Для поддержки (технические детали)</summary>

```text
GET https://user.diveraid.com/ru/diver/certifications
GET https://user.diveraid.com/ru/diver/certifications/history/{certification}
GET https://user.diveraid.com/ru/diver/certifications/history/{certification}/quiz/{quiz}
GET https://user.diveraid.com/ru/diver/certifications/history/{certification}/exam/{exam}
GET https://user.diveraid.com/ru/diver/certifications/history/{certification}/skills
```

</details>

Далее: [Моя библиотека](awards.md)

