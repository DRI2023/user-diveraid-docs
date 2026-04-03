# غواص: شهاداتي

تعرض صفحة **شهاداتي** بطاقات شهاداتك وتتيح لك تنزيلها (PDF/PNG).

## أين تجدها

القائمة: **غواص -> شهاداتي**

![قائمة الشهادات](../../assets/screenshots/diver/en/certifications-02.png)

## قائمة الشهادات

خطوات شائعة:

1. افتح قائمة الشهادات.
2. اختر شهادة لعرض التفاصيل.
3. انقر على بطاقة الشهادة لعرض التفاصيل على الجهة الأخرى (عرض مقسم).
4. قم بتنزيل بطاقة الشهادة بصيغة **PDF** أو **PNG**.
5. إن كان متاحا، افتح **History** لمراجعة التقدم والنتائج.

![تفاصيل الشهادة (عرض مقسم)](../../assets/screenshots/diver/en/certifications-01.png)

## تاريخ الشهادة

تعرض صفحة التاريخ تفاصيل التقدم لشهادة محددة (وحدات/اختبار/امتحان/مهارات، حسب الدورة).

![تاريخ الشهادة](../../assets/screenshots/diver/en/certifications-history.png)

## مشاكل شائعة

- شهادة مفقودة: قد لا تكون مرتبطة بملفك الشخصي بعد.
- رابط التاريخ لا يفتح: العنصر غير متاح أو الرابط قديم.

<details>
<summary>للدعم (تفاصيل تقنية)</summary>

```text
GET https://user.diveraid.com/ar/diver/certifications
GET https://user.diveraid.com/ar/diver/certifications/history/{certification}
GET https://user.diveraid.com/ar/diver/certifications/history/{certification}/quiz/{quiz}
GET https://user.diveraid.com/ar/diver/certifications/history/{certification}/exam/{exam}
GET https://user.diveraid.com/ar/diver/certifications/history/{certification}/skills
```

</details>

التالي: [مكتبتي](awards.md)

