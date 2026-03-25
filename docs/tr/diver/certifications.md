# Dalgıç: Sertifikalarım

**Sertifikalarım** sayfası sertifika kartlarınızı gösterir ve indirmenize (PDF/PNG) olanak tanır.

## Nerede bulurum?

Menü: **Dalgıç -> Sertifikalarım**

![Certifications list](../../assets/screenshots/diver/en/certifications-02.png)

## Sertifika listesi

Tipik adımlar:

1. Sertifika listesini açın.
2. Detayları görmek için bir sertifika seçin.
3. Sertifika kartına tıklayın; detaylar diğer tarafta görünür (bölünmüş görünüm).
4. Sertifika kartını **PDF** veya **PNG** olarak indirin.
5. Varsa **History**'i açarak ilerlemeyi ve sonuçları inceleyin.

![Certification details (split view)](../../assets/screenshots/diver/en/certifications-01.png)

## Sertifika geçmişi (History)

Geçmiş (History) sayfası, belirli bir sertifika için ilerleme detaylarını gösterir (kurs yapısına bağlı olarak module/quiz/exam/skills).

![Certification history](../../assets/screenshots/diver/en/certifications-history.png)

## Yaygın sorunlar

- Sertifika görünmüyor: henüz profilinizle ilişkilendirilmemiş olabilir.
- History bağlantısı açılmıyor: öğe mevcut değildir veya bağlantı eskidir.

<details>
<summary>Destek (teknik bilgiler)</summary>

```text
GET https://user.diveraid.com/tr/diver/certifications
GET https://user.diveraid.com/tr/diver/certifications/history/{certification}
GET https://user.diveraid.com/tr/diver/certifications/history/{certification}/quiz/{quiz}
GET https://user.diveraid.com/tr/diver/certifications/history/{certification}/exam/{exam}
GET https://user.diveraid.com/tr/diver/certifications/history/{certification}/skills
```

</details>

Sonraki: [Kitaplığım](awards.md)
