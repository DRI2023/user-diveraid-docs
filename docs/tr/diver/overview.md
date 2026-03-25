# Dalgıç: Genel Bakış

**Dalgıç (Diver)** alanı, dalgıç (son kullanıcı) için uygulamanın ayrılmış bölümüdür.

## Örnekler (ekran görüntüleri)

### Gösterge Tablosu

![Diver dashboard](../../assets/screenshots/diver/en/dashboard.png)

### Kurs listesi

![Course list](../../assets/screenshots/diver/en/courses-list.png)

## Başlarken

1. Hesabınızla giriş yapın.
2. **Dalgıç -> Gösterge Tablosu**'na gidin.
3. Buradan ana bölümlere geçin: Kurslarım, Sertifikalarım, Belgelerim, Dalış Kayıt Defterim, Mağaza.

## Nerede bulurum?

Menü: **Dalgıç**

Ana sayfalar:

- Genel Bakış (bu sayfa)
- Gösterge Tablosu
- Belgelerim
- Kurslarım
- Sertifikalarım
- Kitaplığım
- Dalış Kayıt Defterim
- Mağaza
- RAID Formları

## Tipik iş akışları

1. Bir kursu takip edin: **Kurslarım** -> kursu açın -> sonraki adımları tamamlayın.
2. Sertifika kontrol edin: **Sertifikalarım** -> sertifikayı açın -> geçmişi inceleyin.
3. Dalış kaydı oluşturun: **Dalış Kayıt Defterim** -> **New** -> doldurun -> kaydedin -> görüntüleyin/güncelleyin.
4. Kurs satın alın: **Mağaza** -> kurs seçin -> checkout -> onaylayın -> sonucu kontrol edin.

## Bir şey ters giderse

- Giriş sayfasına yönlendirildiyseniz: yeniden giriş yapın (oturum süresi dolmuş olabilir).
- Erişim engelliyse: e-postanızın doğrulandığından emin olun.

<details>
<summary>Destek (teknik bilgiler)</summary>

Dalgıç sayfaları URL'de dil öneki kullanır:

```text
GET https://user.diveraid.com/tr/diver/...
```

Örnekler:

```text
GET https://user.diveraid.com/tr/diver/dashboard
```

Yönlendiren imzalı bağlantılar da vardır (genellikle e-postalardan):

```text
GET https://user.diveraid.com/actions/diver/certifications
GET https://user.diveraid.com/actions/diver/awards
GET https://user.diveraid.com/actions/diver/progress/{log_code}
```

</details>

Sonraki: [Gösterge Tablosu](dashboard.md)
