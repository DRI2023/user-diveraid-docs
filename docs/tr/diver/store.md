# Dalgıç: Mağaza

Mağaza genellikle kurs satın almak için kullanılır.

## Nerede bulurum?

Menü: **Dalgıç -> Mağaza**

## Mağaza ana sayfası

Tipik adımlar:

1. Mağazayı açın.
2. Bir kurs seçin.
3. checkout ekranına gidin.

![Store](../../assets/screenshots/diver/en/store.png)

## Kurs checkout ve sipariş

Tipik adımlar:

1. checkout ekranından siparişi onaylayın.
2. Sonuç sayfasını bekleyin.

## Ödeme sonucu

## Yaygın sorunlar

- Sonuç `fail` ise: tekrar deneyin veya ödeme yönteminizi kontrol edin.
- checkout erişilemiyor: kurs mevcut değildir veya profiliniz için satın alınabilir değildir.

<details>
<summary>Destek (teknik bilgiler)</summary>

```text
GET https://user.diveraid.com/tr/diver/store
GET https://user.diveraid.com/tr/diver/store/course/{course}/checkout
GET https://user.diveraid.com/tr/diver/store/course/{course}/order
GET https://user.diveraid.com/tr/diver/store/course/success
GET https://user.diveraid.com/tr/diver/store/course/fail
```

</details>

Sonraki: [RAID Formları](forms.md)
