# Diver: mój dziennik nurkowy

## Gdzie znalezc

Menu: **Mój dziennik nurkowy**

## Lista

![Dive logs list](../../assets/screenshots/diver/en/dive-logs.png)

## Tworzenie

Typowe kroki:

1. Kliknij **New**, aby utworzyc wpis w dzienniku.
2. Wypelnij wymagane pola i zapisz.
3. Jesli przechodzisz z konkretnego kontekstu (np. skills), mozesz zobaczyc wstepnie uzupelniony formularz.

## Podglad i aktualizacja

## Typowe problemy

- Log nie znaleziony: mogl zostac usuniety lub nie jest przypisany do twojego profilu.
- Blad aktualizacji: nieprawidlowe dane lub brak uprawnien.

<details>
<summary>Dla wsparcia (szczegoly techniczne)</summary>

```text
GET https://user.diveraid.com/pl/diver/dive_log
GET https://user.diveraid.com/pl/diver/dive_log/new
GET https://user.diveraid.com/pl/diver/dive_log/new_log/{skillLog?}/{skill?}
GET https://user.diveraid.com/pl/diver/dive_log/view/{diveLog}
GET https://user.diveraid.com/pl/diver/dive_log/update/{diveLog}
```

</details>

Dalej: [Sklep](store.md)
