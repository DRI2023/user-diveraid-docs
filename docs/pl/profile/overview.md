# Mój profil: przeglad

Sekcja **Mój profil** jest dostepna z kazdego obszaru (Diver/Professional/Dive Center/Distributor) przez menu zdjecia profilowego.

## Gdzie to znalezc

Prawy gorny rog: kliknij **zdjecie profilowe** -> **Mój profil** (i powiazane pozycje).

## Glowne strony

- Przeglad (ta strona)
- Mój profil
- Moje zadania (assignments)
- Moja historia chorób
- Moje bezpieczenstwo
- Moja prywatnosc

## Uwagi

- Niektore pozycje moga sie pojawiac tylko, gdy sa wlaczone dla Twojego konta (np. **Moje zadania**).

<details>
<summary>Dla wsparcia (szczegoly techniczne)</summary>

Strony profilu uzywaja prefiksu jezyka i stalej sciezki:

```text
GET https://user.diveraid.com/pl/user/profile
GET https://user.diveraid.com/pl/user/profile/assignments
GET https://user.diveraid.com/pl/user/profile/medical
GET https://user.diveraid.com/pl/user/profile/security
GET https://user.diveraid.com/pl/user/profile/privacy
```

Wyloguj:

```text
POST https://user.diveraid.com/pl/logout
```

</details>

Nastepne: [Mój profil](my-profile.md)
