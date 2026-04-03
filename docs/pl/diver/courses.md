# Diver: moje kursy

## Screenshot

![Course list](../../assets/screenshots/diver/en/courses-list.png)

![Expired courses](../../assets/screenshots/diver/en/courses-expired.png)

## Gdzie znalezc

Menu: **Moje kursy**

## Co mozesz zrobic

- Przegladac aktywne i wygasle kursy.
- Otwierac postep kursu.
- Kontynuowac module/quizzes, exam i skills (jesli dostepne dla kursu).

## Lista kursow

Typowe kroki:

1. Otworz liste kursow.
2. Wybierz kurs, aby otworzyc postep.
3. Jesli kursu brakuje, sprawdz tez sekcje wygasle (jesli jest).

W srodku kursu:

1. Znajdz nastepny krok do wykonania (module, quiz, exam, skills).
2. Wykonaj go i wroc do podsumowania postepu.

## Proby (quiz/exam/skills)

Wskazowka:

- Jesli otworzysz modul i widzisz pusta strone lub blad, modul moze byc niedostepny dla twojego kursu lub juz ukonczony.

## Typowe problemy

- Przekierowanie do logowania: sesja wygasla.
- Brak dostepu: email niezweryfikowany.
- Kurs nie znaleziony: stary link lub kurs nie jest przypisany do twojego konta.

<details>
<summary>Dla wsparcia (szczegoly techniczne)</summary>

Lista kursow:

```text
GET https://user.diveraid.com/pl/diver/courses
GET https://user.diveraid.com/pl/diver/courses/expired
```

Postep i proby:

```text
GET https://user.diveraid.com/pl/diver/courses/progress/{log_code}
GET https://user.diveraid.com/pl/diver/courses/progress/{log_code}/module/{module}
GET https://user.diveraid.com/pl/diver/courses/progress/{log_code}/exam
GET https://user.diveraid.com/pl/diver/courses/progress/{log_code}/skills
GET https://user.diveraid.com/pl/diver/courses/progress/{log_code}/quiz/{quiz}
GET https://user.diveraid.com/pl/diver/courses/progress/{log_code}/exam/{exam}
GET https://user.diveraid.com/pl/diver/courses/progress/{log_code}/skill
GET https://user.diveraid.com/pl/diver/courses/progress/{log_code}/skill/sign
```

</details>

Dalej: [Sklep FREE-Learning](free-learnings.md)

