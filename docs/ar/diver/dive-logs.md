# غواص: سجل غوصي

## أين تجدها

القائمة: **غواص -> سجل غوصي**

## القائمة

![قائمة سجلات الغوص](../../assets/screenshots/diver/en/dive-logs.png)

## إنشاء

خطوات شائعة:

1. انقر **New** لإنشاء سجل غوص.
2. املأ الحقول المطلوبة واحفظ.
3. إذا كنت قادما من سياق محدد (مثل المهارات) فقد ترى مسارا لإنشاء سجل مع بيانات مسبقة.

## عرض وتحديث

## مشاكل شائعة

- السجل غير موجود: قد يكون تم حذفه أو غير مرتبط بحسابك.
- خطأ عند التحديث: بيانات غير صحيحة أو صلاحيات غير كافية.

<details>
<summary>للدعم (تفاصيل تقنية)</summary>

```text
GET https://user.diveraid.com/ar/diver/dive_log
GET https://user.diveraid.com/ar/diver/dive_log/new
GET https://user.diveraid.com/ar/diver/dive_log/new_log/{skillLog?}/{skill?}
GET https://user.diveraid.com/ar/diver/dive_log/view/{diveLog}
GET https://user.diveraid.com/ar/diver/dive_log/update/{diveLog}
```

</details>

التالي: [المتجر](store.md)

