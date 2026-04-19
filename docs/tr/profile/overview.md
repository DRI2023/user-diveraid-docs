# Benim profilim: genel bakis

**Benim profilim** bolumu, profil fotografiniz menusunden her alanda (Diver/Professional/Dive Center/Distributor) erisilebilir.

## Nerede

Sag ust: **profil fotografiniza** tiklayin -> **Benim profilim** (ve ilgili ogeler).

## Ana sayfalar

- Genel bakis (bu sayfa)
- Benim profilim
- Görevlerim (assignments)
- Tıbbi Geçmişim
- Benim güvenliğim
- Benim özelim

## Notlar

- Bazi ogeler yalnizca hesabiniza etkinlestirilmisse gorunur (ornegin **Görevlerim**).

<details>
<summary>Destek icin (teknik detaylar)</summary>

Profil sayfalari dil on eki ve sabit bir yol kullanir:

```text
GET https://user.diveraid.com/tr/user/profile
GET https://user.diveraid.com/tr/user/profile/assignments
GET https://user.diveraid.com/tr/user/profile/medical
GET https://user.diveraid.com/tr/user/profile/security
GET https://user.diveraid.com/tr/user/profile/privacy
```

Cikis yap:

```text
POST https://user.diveraid.com/tr/logout
```

</details>

Sonraki: [Benim profilim](my-profile.md)
