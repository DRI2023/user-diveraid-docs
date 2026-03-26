# Dalgıç: Kurslarım

## Ekran görüntüleri

![Course list](../../assets/screenshots/diver/en/courses-list.png)

![Expired courses](../../assets/screenshots/diver/en/courses-expired.png)

## Nerede bulurum?

Menü: **Dalgıç -> Kurslarım**

## Neler yapabilirsiniz?

- Aktif ve süresi dolmuş kursları görüntüleyin.
- Kurs ilerlemesini (progress) açın.
- (Kursa göre) modüller/quiz'ler, sınav (exam) ve beceriler (skills) adımlarına devam edin.

## Kurs listesi

Tipik adımlar:

1. Kurs listesini açın.
2. İlerlemesini görmek için bir kurs seçin.
3. Bir kurs görünmüyorsa, varsa "Expired" (süresi dolmuş) bölümünü de kontrol edin.

Kurs içinde tipik adımlar:

1. Kurs içinde tamamlanacak bir sonraki adımı bulun (module, quiz, exam, skills).
2. Tamamlayın ve ilerlemeyi kontrol etmek için progress özetine geri dönün.

## Deneme hakları (quiz/exam/skills)

İpuçları:

- Bir modülü açtığınızda boş sayfa veya hata görürseniz, modül kursunuz için aktif olmayabilir veya zaten tamamlanmış olabilir.

## İlerleme detayları (quiz/exam/skills)

## Yaygın sorunlar

- Giriş sayfasına yönlendirilme: oturum süresi doldu.
- Erişim reddedildi: e-posta doğrulanmamış olabilir.
- Kurs bulunamadı: bağlantı eski olabilir veya kurs hesabınızla ilişkili değildir.

<details>
<summary>Destek (teknik bilgiler)</summary>

Kurs listesi:

```text
GET https://user.diveraid.com/tr/diver/courses
GET https://user.diveraid.com/tr/diver/courses/expired
```

İlerleme ve denemeler:

```text
GET https://user.diveraid.com/tr/diver/courses/progress/{log_code}
GET https://user.diveraid.com/tr/diver/courses/progress/{log_code}/module/{module}
GET https://user.diveraid.com/tr/diver/courses/progress/{log_code}/exam
GET https://user.diveraid.com/tr/diver/courses/progress/{log_code}/skills
GET https://user.diveraid.com/tr/diver/courses/progress/{log_code}/quiz/{quiz}
GET https://user.diveraid.com/tr/diver/courses/progress/{log_code}/exam/{exam}
GET https://user.diveraid.com/tr/diver/courses/progress/{log_code}/skill
GET https://user.diveraid.com/tr/diver/courses/progress/{log_code}/skill/sign
```

</details>

Sonraki: [FREE-Learning mağazası](free-learnings.md)
