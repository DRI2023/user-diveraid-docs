# Dalgıç: Gösterge Tablosu

## Ekran görüntüleri

![Diver dashboard](../../assets/screenshots/diver/en/dashboard.png)

![Library](../../assets/screenshots/diver/en/library.png)

![Profil menüsü (fotoğrafa tıklayın)](../../assets/screenshots/diver/en/profile-menu.png)

## Amaç

Gösterge tablosu, Dalgıç alanının giriş sayfasıdır ve genellikle ana bağlantıları (kurslar, sertifikalar, belgeler vb.) bir araya getirir.

## Nerede bulurum?

Menü: **Dalgıç -> Gösterge Tablosu**

## Burada ne yapabilirim? (tipik adımlar)

1. Öne çıkarılan öğeleri kontrol edin (devam eden kurslar, bildirimler, son tarihler ve **Sertifikayı indir (Download Certification)** ile sertifikalarınızın belgesini indirme, **Dalış merkezim (My Diving Center)** ile dalış merkezinizi goruntuleme/degistirme, **Tıbbi form (Medical Form)** ile tıbbi formu doldurma gibi hızlı işlemler).
2. Öğrenme yolunu sürdürmek için [Kurslarım](courses.md) bölümüne gidin (kurs listesini açın, bir kurs seçin ve bir sonraki adıma devam edin: module/quiz/exam/skills; bir kurs görünmüyorsa varsa *"Expired" (süresi dolmuş)* bölümünü de kontrol edin).
3. Kartları ve geçmişi incelemek için **Sertifikalarım** bölümüne gidin.
4. Kayıt oluşturmak veya güncellemek için **Dalış Kayıt Defterim** bölümüne gidin.

## Üst çubuk (tarih/saat yanındaki simgeler)

Sağ üstte, tarih ve saatin yanında birkaç kısayol bulunur:

- **Profil simgeleri (Diver / PRO / Dive Center / Distributor):** alanlar arasında geçiş yapmanızı sağlar.
  Simgeler yalnızca hesabınızda ilgili yetki/rol varsa görünür (ör. yalnızca Dalgıç iseniz sadece Diver simgesini görürsünüz).
- **Tıklayınca:** seçilen alanın gösterge tablosuna yönlendirilirsiniz.
- **Dil (Language) (EN/IT/DE/FR/ES/ZH/AR/NL/KO/TR/PT/PL/RU):** arayüz dilini değiştirir.
- **Tam ekran (Full screen):** tam ekran modunu aç/kapat (tabletlerde veya sunumlarda faydalı).
- **Tema/kontrast (Theme/contrast):** arayüz görünümünü değiştirir (yapılandırmaya göre açık/koyu vb.).
- **Profil fotoğrafı (hesap):** hesap menünüzü açar.

### Profil fotoğrafıma tıklarsam ne olur?

Ekran görüntüsünde görüldüğü gibi aşağıdaki öğeleri içeren hesap menüsü açılır:

- **Profilim (My Profile):** profil bilgileriniz.
- **Görevlerim (My Task):** atamalariniz ve davetleriniz (mevcutsa).
- **Tıbbi geçmişim (My Medical History):** tıbbi bilgiler/formlar (hesabınız için etkinse).
- **Güvenliğim (My Security):** güvenlikle ilgili ayarlar/onaylar (varsa).
- **Gizliliğim (My Privacy):** gizlilik ayarları.
- **Çıkış yap (Sign out):** portaldan çıkış yapar.

**Görevlerim (My Task)** icinde genelde sunlari yapabilirsiniz:

- Bekleyen davetleri ve aktif is birliklerini goruntuleme (ornegin Dive Center staff, Distributor staff, collaborations, translator).
- Davetleri **Confirm** veya **Dismiss** etme.
- Gerektiginde **Stop collaborating** (iptal/geri alma) (genellikle bir onay ifadesi yazmayi gerektirir; bazi iptallerde owned classroom silme gibi secenekler de olabilir).
- Collaborations listesini arama, siralama ve sayfalama (varsa).

## Yaygın sorunlar

- Giriş sayfasına yönlendirilme: oturum süresi dolmuş olabilir veya doğrulama yoktur.
- Erişim engeli/hata: e-posta doğrulanmamış olabilir.

## Notes

Uygulamanın ana sayfası (`/`) giriş sayfasına yönlendirir.

<details>
<summary>Destek (teknik bilgiler)</summary>

```text
GET https://user.diveraid.com/tr/diver/dashboard
```

</details>

Sonraki: [Yüklenen belgeler](uploaded-documents.md)
