# غواص: المتجر

يستخدم متجر الغواص عادة لشراء الدورات.

## أين تجدها

القائمة: **غواص -> المتجر**

## الصفحة الرئيسية للمتجر

خطوات شائعة:

1. افتح المتجر.
2. اختر دورة.
3. ادخل إلى إتمام الشراء.

![المتجر](../../assets/screenshots/diver/en/store.png)

## إتمام الشراء والطلب

خطوات شائعة:

1. من صفحة الإتمام، أكد الطلب.
2. انتظر صفحة النتيجة.

## نتيجة الدفع

## مشاكل شائعة

- نتيجة `fail`: حاول مرة أخرى أو تحقق من وسيلة الدفع.
- لا يمكن الوصول إلى الإتمام: الدورة غير متاحة أو غير قابلة للشراء لحسابك.

<details>
<summary>للدعم (تفاصيل تقنية)</summary>

```text
GET https://user.diveraid.com/ar/diver/store
GET https://user.diveraid.com/ar/diver/store/course/{course}/checkout
GET https://user.diveraid.com/ar/diver/store/course/{course}/order
GET https://user.diveraid.com/ar/diver/store/course/success
GET https://user.diveraid.com/ar/diver/store/course/fail
```

</details>

التالي: [نماذج الغارات](forms.md)

