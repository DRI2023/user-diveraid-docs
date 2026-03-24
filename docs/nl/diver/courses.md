# Diver: cursussen

## Screenshot

![Course list](../../assets/screenshots/diver/en/courses-list.png)

![Expired courses](../../assets/screenshots/diver/en/courses-expired.png)

## Waar te vinden

Menu: **Mijn Cursussen**

## Wat kun je doen

- Bekijk actieve en verlopen cursussen.
- Open de voortgang van een cursus.
- Ga verder met modules/quizzes, examen en skills (als beschikbaar).

## Cursuslijst

Typische stappen:

1. Open de cursuslijst.
2. Selecteer een cursus om de voortgang te openen.
3. Als een cursus ontbreekt, controleer ook de verlopen sectie (als aanwezig).

In de cursus:

1. Zoek de volgende stap (module, quiz, examen, skills).
2. Voltooi en ga terug naar het voortgangsoverzicht.

## Veelvoorkomende problemen

- Terug naar login: sessie verlopen.
- Toegang geweigerd: email niet geverifieerd.
- Cursus niet gevonden: oude link of cursus niet gekoppeld aan je gebruiker.

<details>
<summary>Voor support (technische details)</summary>

Cursuslijst:

```text
GET https://user.diveraid.com/nl/diver/courses
GET https://user.diveraid.com/nl/diver/courses/expired
```

Voortgang en pogingen:

```text
GET https://user.diveraid.com/nl/diver/courses/progress/{log_code}
GET https://user.diveraid.com/nl/diver/courses/progress/{log_code}/module/{module}
GET https://user.diveraid.com/nl/diver/courses/progress/{log_code}/exam
GET https://user.diveraid.com/nl/diver/courses/progress/{log_code}/skills
GET https://user.diveraid.com/nl/diver/courses/progress/{log_code}/quiz/{quiz}
GET https://user.diveraid.com/nl/diver/courses/progress/{log_code}/exam/{exam}
GET https://user.diveraid.com/nl/diver/courses/progress/{log_code}/skill
GET https://user.diveraid.com/nl/diver/courses/progress/{log_code}/skill/sign
```

</details>

Volgende: [Free Learnings](free-learnings.md)

