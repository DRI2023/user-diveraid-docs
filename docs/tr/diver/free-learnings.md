# Dalgıç: FREe-Learning mağazası

## Nedir?

FREe-Learning içerikleri, basitleştirilmiş bir akışla erişilebilen eğitim içerikleridir (genellikle satın alma olmadan).

## Nerede bulurum?

Menü: **Dalgıç -> FREe-Learning mağazası**

## Kayıt (Enroll)

Tipik adımlar:

1. Kayıt (enroll) sayfasını açın.
2. (Gerekliyse) etkinleştirilecek içeriği seçin.
3. Kayıt olduktan sonra başlamak için listeye geri dönün.

## Liste

Tipik adımlar:

1. Listeyi açın.
2. İlerlemeyi görmek için bir içerik seçin.

![Free learnings](../../assets/screenshots/diver/en/free-learnings-list.png)

## İlerleme (Progress)
Bir içeriği açarak ilerlemesini görüntüleyebilir ve kaldığınız yerden devam edebilirsiniz.

## Yaygın sorunlar

- İçerik görünmüyor: henüz kayıt olmamış olabilirsiniz (kayıt/enroll sayfasını kullanın).
- Giriş sayfasına yönlendirilme: oturum süresi doldu.

<details>
<summary>Destek (teknik bilgiler)</summary>

```text
GET https://user.diveraid.com/tr/diver/free-learnings/enroll
GET https://user.diveraid.com/tr/diver/free-learnings
GET https://user.diveraid.com/tr/diver/free-learnings/progress/{log_code}/
GET https://user.diveraid.com/tr/diver/free-learnings/progress/{log_code}/module/{module}
GET https://user.diveraid.com/tr/diver/free-learnings/progress/{log_code}/quiz/{quiz}
```

</details>

Sonraki: [Sertifikalarım](certifications.md)
