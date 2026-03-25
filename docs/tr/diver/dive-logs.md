# Dalgıç: Dalış Kayıt Defterim

## Nerede bulurum?

Menü: **Dalgıç -> Dalış Kayıt Defterim**

## Liste

![Dive logs list](../../assets/screenshots/diver/en/dive-logs.png)

## Oluşturma

Tipik adımlar:

1. Dalış kaydı oluşturmak için **New**'e tıklayın.
2. Zorunlu alanları doldurun ve kaydedin.
3. Belirli bir bağlamdan (örn. skills) geliyorsanız, önceden doldurulmuş bir oluşturma akışı görebilirsiniz.

## Görüntüleme ve güncelleme

## Yaygın sorunlar

- Kayıt bulunamadı: silinmiş olabilir veya profilinizle ilişkilendirilmemiş olabilir.
- Güncelleme hatası: geçersiz veri veya eksik izinler.

<details>
<summary>Destek (teknik bilgiler)</summary>

```text
GET https://user.diveraid.com/tr/diver/dive_log
GET https://user.diveraid.com/tr/diver/dive_log/new
GET https://user.diveraid.com/tr/diver/dive_log/new_log/{skillLog?}/{skill?}
GET https://user.diveraid.com/tr/diver/dive_log/view/{diveLog}
GET https://user.diveraid.com/tr/diver/dive_log/update/{diveLog}
```

</details>

Sonraki: [Mağaza](store.md)
