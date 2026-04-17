# Dalgic: kurslarim

## Ekran goruntuleri

![Course list](../../assets/screenshots/diver/en/courses-list.png)

![Expired courses](../../assets/screenshots/diver/en/courses-expired.png)

## Nerede bulurum

Menu: **Dalgic -> Kurslarim**

## Neler yapabilirsin

- Aktif ve suresi dolmus kurslari goruntule.
- Kurs ilerlemesini ac.
- Module/quiz, exam ve skills adimlarina devam et (kursa gore).

## Kurs listesi

Tipik adimlar:

1. Kurs listesini ac.
2. Ilerlemeyi gormek icin bir kurs sec.
3. Bir kurs gorunmuyorsa, varsa expired bolumunu de kontrol et.

## Kurs ilerlemesi (ozet)

Bir kursu actiginda **ilerleme (progress)** sayfasina gidersin. Bu sayfa kursun merkezidir: tamamlananlari ve siradaki adimi gosterir.

<!-- TODO(screenshot): docs/assets/screenshots/diver/tr/courses-progress.png -->
![Kurs ilerlemesi (ozet)](../../assets/screenshots/diver/en/courses-progress.png)

Tipik adimlar:

1. Kursta bir sonraki adimi bul (module, quiz, exam, skills).
2. Tamamla ve ilerleme ozetine geri don.

## Denemeler (quiz/exam/skills)

Denemeler, aktiviteyi **yaptigin** sayfalardir (yanitlama, gonderme, onaylama).

### Quiz denemesi (module)

<!-- TODO(screenshot): docs/assets/screenshots/diver/tr/courses-quiz-attempt.png -->
![Quiz attempt](../../assets/screenshots/diver/en/courses-quiz-attempt.png)

Tipik adimlar:

1. Kurs ilerlemesinden bir sonraki module/quiz adimini ac.
2. Sorulari yanitla.
3. Gonder.
4. (Varsa) sonuclari acip yanitlari kontrol et.

### Exam denemesi

<!-- TODO(screenshot): docs/assets/screenshots/diver/tr/courses-exam-attempt.png -->
![Exam attempt](../../assets/screenshots/diver/en/courses-exam-attempt.png)

Not: exam, gerekli quiz/module tamamlandiktan sonra ve egitmen etkinlestirdikten sonra kullanilabilir.

Tipik adimlar:

1. Kurs ilerlemesinden **Exam**'i ac.
2. Sinavi tamamla.
3. Gonder ve sonuc sayfasini bekle.

### Skills

Skills, kurs ayarlarina gore onay gerektirebilen pratik adimlardir.

<!-- TODO(screenshot): docs/assets/screenshots/diver/tr/courses-skills.png -->
![Skills signatures](../../assets/screenshots/diver/en/courses-skills.png)

Not: skills onayi, egitmen tamamlandi olarak isaretledikten sonra yapilabilir.

Ipucu: kurs gerektiriyorsa, onaydan once skills ile ilgili Dive Log/Logbook kaydini doldurmayi unutma.

## Ilerleme detaylari (quiz/exam/skills)

Ilerleme detaylari, **sonuclari** inceledigin sayfalardir (ornegin quiz cevaplari veya exam sonuclari).

<!-- TODO(screenshot): docs/assets/screenshots/diver/tr/courses-results.png -->
![Ilerleme detaylari (sonuclar)](../../assets/screenshots/diver/en/courses-results.png)

## Yaygin sorunlar

- Login'e yonlendirme: oturum suresi dolmus.
- Erisim reddedildi: email dogrulanmamis.
- Kurs bulunamadi: eski link veya kurs hesaba bagli degil.

<details>
<summary>Destek icin (teknik ayrintilar)</summary>

Kurs listesi:

```text
GET https://user.diveraid.com/tr/diver/courses
GET https://user.diveraid.com/tr/diver/courses/expired
```

Ilerleme ve denemeler:

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

Sonraki: [FREE-Learning shop](free-learnings.md)

