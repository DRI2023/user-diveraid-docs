# ملفي الشخصي: نظرة عامة

قسم **ملفي الشخصي** متاح من أي منطقة (Diver/Professional/Dive Center/Distributor) عبر قائمة صورة ملفك.

## أين تجده

أعلى اليمين: انقر على **صورة الملف الشخصي** -> **ملفي الشخصي** (والعناصر ذات الصلة).

## الصفحات الرئيسية

- نظرة عامة (هذه الصفحة)
- ملفي الشخصي
- مهامي (assignments)
- سجلي الطبي
- أمني
- خصوصيتي

## ملاحظات

- قد تظهر بعض العناصر فقط إذا كانت مفعّلة لحسابك (مثل **مهامي**).

<details>
<summary>للدعم (تفاصيل تقنية)</summary>

صفحات الملف تستخدم بادئة اللغة ومسارًا ثابتًا:

```text
GET https://user.diveraid.com/ar/user/profile
GET https://user.diveraid.com/ar/user/profile/assignments
GET https://user.diveraid.com/ar/user/profile/medical
GET https://user.diveraid.com/ar/user/profile/security
GET https://user.diveraid.com/ar/user/profile/privacy
```

تسجيل الخروج:

```text
POST https://user.diveraid.com/ar/logout
```

</details>

التالي: [ملفي الشخصي](my-profile.md)
