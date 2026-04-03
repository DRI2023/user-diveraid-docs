# Дайвер: мой журнал погружений

## Где найти

Меню: **Дайвер -> Мой журнал погружений**

## Список

![Журнал погружений](../../assets/screenshots/diver/en/dive-logs.png)

## Создать

Типовые шаги:

1. Нажмите **New**, чтобы создать запись погружения.
2. Заполните обязательные поля и сохраните.
3. Если вы перешли из определенного контекста (например, skills), вы можете увидеть предзаполненный сценарий создания.

## Просмотр и обновление

## Частые проблемы

- Лог не найден: возможно он удален или не привязан к вашему профилю.
- Ошибка обновления: некорректные данные или отсутствуют права.

<details>
<summary>Для поддержки (технические детали)</summary>

```text
GET https://user.diveraid.com/ru/diver/dive_log
GET https://user.diveraid.com/ru/diver/dive_log/new
GET https://user.diveraid.com/ru/diver/dive_log/new_log/{skillLog?}/{skill?}
GET https://user.diveraid.com/ru/diver/dive_log/view/{diveLog}
GET https://user.diveraid.com/ru/diver/dive_log/update/{diveLog}
```

</details>

Далее: [Магазин](store.md)

