# Diver: moje certyfikaty

Strona **Moje certyfikaty** pokazuje twoje karty certyfikacji i pozwala je pobrac (PDF/PNG).

## Gdzie znalezc

Menu: **Moje certyfikaty**

![Certifications list](../../assets/screenshots/diver/en/certifications-02.png)

## Lista certyfikacji

Typowe kroki:

1. Otworz liste certyfikacji.
2. Wybierz certyfikacje, aby zobaczyc szczegoly.
3. Kliknij karte certyfikacji, aby pokazac szczegoly po drugiej stronie (split view).
4. Pobierz karte certyfikacji jako **PDF** lub **PNG**.
5. Jesli dostepne, otworz **History**, aby przejrzec postep i wyniki.

![Certification details (split view)](../../assets/screenshots/diver/en/certifications-01.png)

## Historia certyfikacji

Strona historii pokazuje szczegoly postepu dla konkretnej certyfikacji (modules/quiz/exam/skills, w zaleznosci od kursu).

![Certification history](../../assets/screenshots/diver/en/certifications-history.png)

## Typowe problemy

- Brak certyfikacji: moze nie byc jeszcze przypisana do twojego profilu.
- Link do historii sie nie otwiera: pozycja niedostepna lub stary link.

<details>
<summary>Dla wsparcia (szczegoly techniczne)</summary>

```text
GET https://user.diveraid.com/pl/diver/certifications
GET https://user.diveraid.com/pl/diver/certifications/history/{certification}
GET https://user.diveraid.com/pl/diver/certifications/history/{certification}/quiz/{quiz}
GET https://user.diveraid.com/pl/diver/certifications/history/{certification}/exam/{exam}
GET https://user.diveraid.com/pl/diver/certifications/history/{certification}/skills
```

</details>

Dalej: [Moja biblioteka](awards.md)

