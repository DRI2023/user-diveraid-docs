# Diver: moja biblioteka

Strona **Moja biblioteka** pokazuje twoje karty wyroznien i pozwala je zamowic (jesli dostepne dla twojego konta).

## Gdzie znalezc

Menu: **Moja biblioteka**

![My Awards](../../assets/screenshots/diver/en/awards.png)

## Rodzaje awards

Sa dwa glowne typy:

**Diver (zalogowane nurkowania)**

- 100 zalogowanych nurkowan
- 500 zalogowanych nurkowan
- 1000 zalogowanych nurkowan
- 5000 zalogowanych nurkowan

**Professional (wydane certyfikacje)**

- Bronze: 100 wydanych certyfikacji
- Silver: 500 wydanych certyfikacji
- Gold: 1000 wydanych certyfikacji
- Platinum: 5000 wydanych certyfikacji

## Lista awards

Typowe kroki:

1. Otworz liste awards.
2. Wybierz karte/award.
3. Rozpocznij proces zamowienia.

## Jak otrzymujesz award

Gdy osiagniesz nowy kamien milowy (zalogowane nurkowania lub wydane certyfikacje), system zwykle pokazuje komunikat na pulpicie
i pozwala zamowic odpowiednia karte award.

Typowe kroki:

1. (Opcjonalnie) Uzyj wyszukiwania, aby znalezc konkretny award.
2. Wybierz karte/award.
3. Rozpocznij proces zamowienia (jesli dostepne dla twojego konta).

Po udanym zamowieniu karta jest wydana i znajdziesz ja w **Moja biblioteka**.

## Typowe problemy

- Wynik `fail`: sprobuj ponownie lub sprawdz metode platnosci (jesli dotyczy).
- Award niedostepny: moze nie byc dostepny dla twojego profilu lub kraju.

<details>
<summary>Dla wsparcia (szczegoly techniczne)</summary>

```text
GET https://user.diveraid.com/pl/diver/awards
GET https://user.diveraid.com/pl/diver/awards/{card}/order
GET https://user.diveraid.com/pl/diver/awards/order/success
GET https://user.diveraid.com/pl/diver/awards/order/fail
```

</details>

Dalej: [Mój dziennik nurkowy](dive-logs.md)
