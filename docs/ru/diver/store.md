# Дайвер: магазин

Магазин дайвера обычно используется для покупки курсов.

## Где найти

Меню: **Дайвер -> Магазин**

## Главная магазина

Типовые шаги:

1. Откройте магазин.
2. Выберите курс.
3. Перейдите к оформлению (checkout).

![Магазин](../../assets/screenshots/diver/en/store.png)

## Оформление и заказ

Типовые шаги:

1. На странице checkout подтвердите заказ.
2. Дождитесь страницы результата.

## Результат оплаты

## Частые проблемы

- Результат `fail`: попробуйте снова или проверьте способ оплаты.
- Checkout недоступен: курс недоступен или не покупается для вашего профиля.

<details>
<summary>Для поддержки (технические детали)</summary>

```text
GET https://user.diveraid.com/ru/diver/store
GET https://user.diveraid.com/ru/diver/store/course/{course}/checkout
GET https://user.diveraid.com/ru/diver/store/course/{course}/order
GET https://user.diveraid.com/ru/diver/store/course/success
GET https://user.diveraid.com/ru/diver/store/course/fail
```

</details>

Далее: [Формы рейдов](forms.md)

