# غواص: الدورات

## لقطة شاشة

![قائمة الدورات](../../assets/screenshots/diver/en/courses-list.png)

![الدورات المنتهية](../../assets/screenshots/diver/en/courses-expired.png)

## أين تجدها

القائمة: **غواص -> دوراتي**

## ما الذي يمكنك فعله

- عرض الدورات النشطة والمنتهية.
- فتح تقدم الدورة.
- متابعة الوحدات والاختبارات والامتحان والمهارات (حسب ما هو متاح للدورة).

## قائمة الدورات

خطوات شائعة:

1. افتح قائمة الدورات.
2. اختر دورة لفتح صفحة التقدم.
3. إذا كانت دورة مفقودة تحقق ايضا من قسم الدورات المنتهية (إن كان متاحا).

## تقدم الدورة (ملخص)

عند فتح دورة سيتم نقلك الى صفحة **التقدم**. هذه الصفحة هي مركز الدورة: تعرض ما تم اكماله وما هي الخطوة التالية.

<!-- TODO(screenshot): docs/assets/screenshots/diver/ar/courses-progress.png -->
![تقدم الدورة (ملخص)](../../assets/screenshots/diver/en/courses-progress.png)

خطوات شائعة:

1. داخل الدورة، ابحث عن الخطوة التالية (وحدة، اختبار، امتحان، مهارات).
2. اكملها ثم عد الى ملخص التقدم للتحقق من التقدم.

## المحاولات (اختبار/امتحان/مهارات)

المحاولات هي الصفحات التي تقوم فيها بالنشاط (اجابة الاسئلة، ارسال، تاكيد).

### محاولة الاختبار (وحدة)

<!-- TODO(screenshot): docs/assets/screenshots/diver/ar/courses-quiz-attempt.png -->
![محاولة الاختبار](../../assets/screenshots/diver/en/courses-quiz-attempt.png)

خطوات شائعة:

1. من صفحة التقدم، افتح خطوة الوحدة/الاختبار التالية.
2. اجب عن الاسئلة.
3. ارسل.
4. افتح صفحة النتائج (ان كانت متاحة) لمراجعة اجاباتك.

### محاولة الامتحان

<!-- TODO(screenshot): docs/assets/screenshots/diver/ar/courses-exam-attempt.png -->
![محاولة الامتحان](../../assets/screenshots/diver/en/courses-exam-attempt.png)

ملاحظة: يصبح الامتحان متاحا فقط بعد اكمال الاختبارات/الوحدات المطلوبة وبعد ان يقوم المدرب بتفعيله.

خطوات شائعة:

1. من صفحة التقدم، افتح **Exam**.
2. اكمل الامتحان.
3. ارسل وانتظر صفحة النتيجة.

### المهارات

المهارات هي خطوات عملية قد تتطلب تاكيدا حسب اعدادات الدورة.

<!-- TODO(screenshot): docs/assets/screenshots/diver/ar/courses-skills.png -->
![تواقيع المهارات](../../assets/screenshots/diver/en/courses-skills.png)

ملاحظة: يمكنك تاكيد المهارات فقط بعد ان يقوم المدرب بتعليمها كمكتملة.

نصيحة: اذا كانت الدورة تتطلب ذلك، لا تنس اكمال سجل الغوص (logbook) المرتبط بالمهارات قبل التاكيد.

## تفاصيل التقدم (اختبار/امتحان/مهارات)

تفاصيل التقدم هي الصفحات التي تراجع فيها النتائج (مثل اجابات الاختبار او نتائج الامتحان).

<!-- TODO(screenshot): docs/assets/screenshots/diver/ar/courses-results.png -->
![تفاصيل التقدم (النتائج)](../../assets/screenshots/diver/en/courses-results.png)

## مشاكل شائعة

- اعادة توجيه الى تسجيل الدخول: انتهت الجلسة.
- تم رفض الوصول: البريد الالكتروني غير موثق.
- لم يتم العثور على الدورة: رابط قديم او دورة غير مرتبطة بحسابك.

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

التالي: [FREE-Learning shop](free-learnings.md)

