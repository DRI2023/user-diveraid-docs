# غواص: متجر التعلم الإلكتروني FREe

## ما هي

المحتويات المجانية هي مواد تدريب يمكن الوصول إليها عبر مسار مبسط (عادة بدون شراء).

## أين تجدها

القائمة: **غواص -> متجر التعلم الإلكتروني FREe**

## التسجيل

خطوات شائعة:

1. افتح صفحة التسجيل.
2. اختر المحتوى لتفعيله (إن كان مطلوبا).
3. بعد التسجيل عد إلى القائمة للبدء.

## القائمة

خطوات شائعة:

1. افتح القائمة.
2. اختر محتوى مجاني لفتح صفحة التقدم.

![المحتويات المجانية](../../assets/screenshots/diver/en/free-learnings-list.png)

## التقدم

افتح عنصرا من المحتويات المجانية لرؤية التقدم والمتابعة من حيث توقفت.

## مشاكل شائعة

- لا يوجد محتوى ظاهر: قد لا تكون مسجلا بعد (استخدم صفحة التسجيل).
- تمت إعادتك لتسجيل الدخول: انتهت الجلسة.

<details>
<summary>للدعم (تفاصيل تقنية)</summary>

```text
GET https://user.diveraid.com/ar/diver/free-learnings/enroll
GET https://user.diveraid.com/ar/diver/free-learnings
GET https://user.diveraid.com/ar/diver/free-learnings/progress/{log_code}/
GET https://user.diveraid.com/ar/diver/free-learnings/progress/{log_code}/module/{module}
GET https://user.diveraid.com/ar/diver/free-learnings/progress/{log_code}/quiz/{quiz}
```

</details>

التالي: [شهاداتي](certifications.md)

