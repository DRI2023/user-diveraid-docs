# Diver: sklep

Sklep Diver jest zwykle uzywany do zakupu kursow.

## Gdzie znalezc

Menu: **Sklep**

## Strona glowna sklepu

Typowe kroki:

1. Otworz sklep.
2. Wybierz kurs.
3. Przejdz do checkout.

![Store](../../assets/screenshots/diver/en/store.png)

## Checkout i zamowienie

Typowe kroki:

1. W checkout potwierdz zamowienie.
2. Poczekaj na strone z wynikiem.

## Wynik platnosci

## Typowe problemy

- Wynik `fail`: sprobuj ponownie lub sprawdz metode platnosci.
- Brak dostepu do checkout: kurs niedostepny lub nie do kupienia dla twojego profilu.

<details>
<summary>Dla wsparcia (szczegoly techniczne)</summary>

```text
GET https://user.diveraid.com/pl/diver/store
GET https://user.diveraid.com/pl/diver/store/course/{course}/checkout
GET https://user.diveraid.com/pl/diver/store/course/{course}/order
GET https://user.diveraid.com/pl/diver/store/course/success
GET https://user.diveraid.com/pl/diver/store/course/fail
```

</details>

Dalej: [Formularze RAID](forms.md)

