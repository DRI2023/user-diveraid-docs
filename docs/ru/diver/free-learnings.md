# Дайвер: магазин FREe-Learning

## Что это

FREe-Learning это учебные материалы, доступные через упрощенный процесс (обычно без покупки).

## Где найти

Меню: **Дайвер -> Магазин FREe-Learning**

## Подключение (Enroll)

Типовые шаги:

1. Откройте страницу подключения.
2. Выберите контент для активации (если требуется).
3. После подключения вернитесь к списку, чтобы начать.

## Список

Типовые шаги:

1. Откройте список.
2. Выберите FREe-Learning, чтобы открыть прогресс.

![FREe-Learning](../../assets/screenshots/diver/en/free-learnings-list.png)

## Прогресс

Откройте элемент FREe-Learning, чтобы увидеть прогресс и продолжить с того места, где остановились.

## Частые проблемы

- Контент не виден: возможно вы еще не подключены (используйте страницу подключения).
- Переадресация на вход: сессия истекла.

<details>
<summary>Для поддержки (технические детали)</summary>

```text
GET https://user.diveraid.com/ru/diver/free-learnings/enroll
GET https://user.diveraid.com/ru/diver/free-learnings
GET https://user.diveraid.com/ru/diver/free-learnings/progress/{log_code}/
GET https://user.diveraid.com/ru/diver/free-learnings/progress/{log_code}/module/{module}
GET https://user.diveraid.com/ru/diver/free-learnings/progress/{log_code}/quiz/{quiz}
```

</details>

Далее: [Мои сертификаты](certifications.md)

