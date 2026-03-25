# Dalgıç: Kitaplığım

**Kitaplığım** sayfası, rozet/kartlarınızı listeler ve (hesabınız için uygunsa) sipariş etmenize olanak tanır.

## Nerede bulurum?

Menü: **Dalgıç -> Kitaplığım**

![Kitaplığım](../../assets/screenshots/diver/en/awards.png)

## Kart türleri

İki ana kart türü vardır:

**Dalgıç (kaydedilen dalışlar)**

- 100 kayıtlı dalış
- 500 kayıtlı dalış
- 1000 kayıtlı dalış
- 5000 kayıtlı dalış

**Professional (verilen sertifikalar)**

- Bronze: 100 certifications issued
- Silver: 500 certifications issued
- Gold: 1000 certifications issued
- Platinum: 5000 certifications issued

## Liste

Tipik adımlar:

1. Listeyi açın.
2. Bir kart seçin.
3. Sipariş akışını başlatın.

## Kartı nasıl alırsınız?

Yeni bir kilometre taşına ulaştığınızda (kayıtlı dalış sayısı veya verilen sertifika sayısı), sistem genellikle gösterge tablonuzda bir mesaj gösterir
ve ilgili kartı sipariş etmenize izin verir.

Tipik adımlar:

1. (İsteğe bağlı) Arama çubuğuyla belirli bir kartı bulun.
2. Bir kart seçin.
3. (Hesabınız için uygunsa) sipariş akışını başlatın.

Sipariş başarıyla tamamlandığında kart oluşturulur ve **Kitaplığım** içinde görürsünüz.

## Yaygın sorunlar

- Sonuç `fail` ise: tekrar deneyin veya (akışın parçasıysa) ödeme yönteminizi kontrol edin.
- Kart mevcut değil: profiliniz veya ülkeniz için satın alınamaz olabilir.

<details>
<summary>Destek (teknik bilgiler)</summary>

```text
GET https://user.diveraid.com/tr/diver/awards
GET https://user.diveraid.com/tr/diver/awards/{card}/order
GET https://user.diveraid.com/tr/diver/awards/order/success
GET https://user.diveraid.com/tr/diver/awards/order/fail
```

</details>

Sonraki: [Dalış Kayıt Defterim](dive-logs.md)
