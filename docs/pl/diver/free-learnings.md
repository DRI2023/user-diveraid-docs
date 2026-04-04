# Diver: sklep FREE-Learning

## Co to jest

FREE-Learning to tresci szkoleniowe dostepne w uproszczonym trybie (zwykle bez zakupu).

## Gdzie znalezc

Menu: **Sklep FREE-Learning**

![FREE-Learning shop](../../assets/screenshots/diver/en/free-learnings-store.png)

## Aktywacja (enroll)

Typowe kroki:

1. Otworz strone aktywacji (enroll).
2. Wybierz tresc do aktywacji (jesli wymagane).
3. Po aktywacji wroc do listy, aby zaczac.

## Lista

Typowe kroki:

1. Otworz liste.
2. Wybierz element, aby otworzyc postep.

![Free learnings](../../assets/screenshots/diver/en/free-learnings-list.png)

## Postep

Otworz element FREE-Learning, aby zobaczyc postep i kontynuowac od miejsca, w ktorym skonczyles.

## Typowe problemy

- Brak tresci: mozesz nie byc jeszcze zapisany (uzyj strony enroll).
- Przekierowanie do logowania: sesja wygasla.

<details>
<summary>Dla wsparcia (szczegoly techniczne)</summary>

```text
GET https://user.diveraid.com/pl/diver/free-learnings/enroll
GET https://user.diveraid.com/pl/diver/free-learnings
GET https://user.diveraid.com/pl/diver/free-learnings/progress/{log_code}/
GET https://user.diveraid.com/pl/diver/free-learnings/progress/{log_code}/module/{module}
GET https://user.diveraid.com/pl/diver/free-learnings/progress/{log_code}/quiz/{quiz}
```

</details>

Dalej: [Moje certyfikaty](certifications.md)

