# Diver: przeglad

Obszar **Diver** to czesc aplikacji przeznaczona dla nurka (uzytkownika koncowego).

## Przyklady (zrzuty ekranu)

### Pulpit

![Diver dashboard](../../assets/screenshots/diver/en/dashboard.png)

### Lista kursow

![Course list](../../assets/screenshots/diver/en/courses-list.png)

## Pierwsze kroki

1. Zaloguj sie na swoje konto.
2. Przejdz do **Diver -> Pulpit**.
3. Następnie przejdz do glownych sekcji: **Moje kursy**, **Moje certyfikaty**, **Przesłane dokumenty**, **Moje dokumenty**, **Mój dziennik nurkowy**, **Sklep**.

## Gdzie znalezc

Menu: **Diver**

Glowne strony:

- Przegląd (ta strona)
- Pulpit
- Przesłane dokumenty
- Moje dokumenty
- Moje kursy
- Moje certyfikaty
- Moja biblioteka
- Mój dziennik nurkowy
- Sklep
- Formularze RAID

## Typowe scenariusze

1. Kontynuuj kurs: **Moje kursy** -> otworz kurs -> wykonaj nastepne kroki.
2. Sprawdz certyfikat: **Moje certyfikaty** -> otworz certyfikat -> przejrzyj historie.
3. Utworz wpis w dzienniku: **Mój dziennik nurkowy** -> New -> wypelnij -> zapisz -> sprawdz/aktualizuj.
4. Kup kurs: **Sklep** -> wybierz kurs -> checkout -> potwierdz -> sprawdz wynik.

## Gdy cos nie dziala

- Przekierowanie do logowania: zaloguj sie ponownie (sesja mogla wygasnac).
- Dostep zablokowany: upewnij sie, ze email jest zweryfikowany.

<details>
<summary>Dla wsparcia (szczegoly techniczne)</summary>

Strony Diver uzywaja prefiksu jezyka w URL:

```text
GET https://user.diveraid.com/pl/diver/...
```

Przyklady:

```text
GET https://user.diveraid.com/pl/diver/dashboard
```

Istnieja tez podpisane linki (zwykle z emaili), ktore przekierowuja:

```text
GET https://user.diveraid.com/actions/diver/certifications
GET https://user.diveraid.com/actions/diver/awards
GET https://user.diveraid.com/actions/diver/progress/{log_code}
```

</details>

Dalej: [Pulpit](dashboard.md)
