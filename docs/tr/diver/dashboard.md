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

1. Öne çıkarılan öğeleri kontrol edin (devam eden kurslar, bildirimler, son tarihler).
2. Öğrenme yolunu sürdürmek için **Kurslarım** bölümüne gidin.
3. Kartları ve geçmişi incelemek için **Sertifikalarım** bölümüne gidin.
4. Kayıt oluşturmak veya güncellemek için **Dalış Kayıt Defterim** bölümüne gidin.

## Üst çubuk (tarih/saat yanındaki simgeler)

Sağ üstte, tarih ve saatin yanında birkaç kısayol bulunur:

- **Profil simgeleri (Diver / PRO / Dive Center / Distributor):** alanlar arasında geçiş yapmanızı sağlar.
  Simgeler yalnızca hesabınızda ilgili yetki/rol varsa görünür (ör. yalnızca Dalgıç iseniz sadece Diver simgesini görürsünüz).
- **Tıklayınca:** seçilen alanın gösterge tablosuna yönlendirilirsiniz.
- **Language (EN/IT/DE/FR/ES/NL/ZH/KO/TR):** arayüz dilini değiştirir.
- **Full screen:** tam ekran modunu aç/kapat (tabletlerde veya sunumlarda faydalı).
- **Theme/contrast:** arayüz görünümünü değiştirir (yapılandırmaya göre açık/koyu vb.).
- **Profil fotoğrafı (hesap):** hesap menünüzü açar.

### Profil fotoğrafıma tıklarsam ne olur?

Ekran görüntüsünde görüldüğü gibi aşağıdaki öğeleri içeren hesap menüsü açılır:

- **My Profile:** profil bilgileriniz.
- **My Activities:** portal etkinliği özetiniz.
- **My Medical History:** tıbbi bilgiler/formlar (hesabınız için etkinse).
- **My Security:** güvenlikle ilgili ayarlar/onaylar (varsa).
- **My Privacy:** gizlilik ayarları.
- **Sign out:** portaldan çıkış yapar.

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

Sonraki: [Belgelerim](documents.md)
