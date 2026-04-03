# غواص: دوراتي

## لقطة شاشة

![قائمة الدورات](../../assets/screenshots/diver/en/courses-list.png)

![الدورات المنتهية](../../assets/screenshots/diver/en/courses-expired.png)

## أين تجدها

القائمة: **غواص -> دوراتي**

## ما الذي يمكنك فعله

- عرض الدورات النشطة والمنتهية.
- فتح تقدم الدورة.
- متابعة الوحدات والاختبارات والامتحان والمهارات (عند توفرها للدورة).

## قائمة الدورات

خطوات شائعة:

1. افتح قائمة الدورات.
2. اختر دورة لفتح صفحة التقدم.
3. إذا كانت دورة مفقودة تحقق أيضا من قسم الدورات المنتهية (إن كان متاحا).

خطوات شائعة داخل الدورة:

1. ابحث عن الخطوة التالية لإكمالها (وحدة، اختبار، امتحان، مهارات).
2. أكملها ثم عد إلى ملخص التقدم للتحقق من التقدم.

## المحاولات (اختبار/امتحان/مهارات)

نصائح:

- إذا فتحت وحدة وظهرت صفحة فارغة أو خطأ، فقد تكون الوحدة غير متاحة لدورتك أو أنها مكتملة بالفعل.

## تفاصيل التقدم (اختبار/امتحان/مهارات)

## مشاكل شائعة

- تمت إعادتك لتسجيل الدخول: انتهت الجلسة.
- تم رفض الوصول: البريد الإلكتروني غير موثق.
- الدورة غير موجودة: رابط قديم أو الدورة غير مرتبطة بحسابك.

<details>
<summary>للدعم (تفاصيل تقنية)</summary>

قائمة الدورات:

```text
GET https://user.diveraid.com/ar/diver/courses
GET https://user.diveraid.com/ar/diver/courses/expired
```

التقدم والمحاولات:

```text
GET https://user.diveraid.com/ar/diver/courses/progress/{log_code}
GET https://user.diveraid.com/ar/diver/courses/progress/{log_code}/module/{module}
GET https://user.diveraid.com/ar/diver/courses/progress/{log_code}/exam
GET https://user.diveraid.com/ar/diver/courses/progress/{log_code}/skills
GET https://user.diveraid.com/ar/diver/courses/progress/{log_code}/quiz/{quiz}
GET https://user.diveraid.com/ar/diver/courses/progress/{log_code}/exam/{exam}
GET https://user.diveraid.com/ar/diver/courses/progress/{log_code}/skill
GET https://user.diveraid.com/ar/diver/courses/progress/{log_code}/skill/sign
```

</details>

التالي: [متجر التعلم الإلكتروني FREe](free-learnings.md)

