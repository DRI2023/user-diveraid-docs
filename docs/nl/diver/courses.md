# Diver: cursussen

## Screenshot

![Course list](../../assets/screenshots/diver/en/courses-list.png)

![Expired courses](../../assets/screenshots/diver/en/courses-expired.png)

## Waar te vinden

Menu: **Diver -> Mijn Cursussen**

## Wat kun je doen

- Bekijk actieve en verlopen cursussen.
- Open de voortgang van een cursus.
- Ga verder met modules/quizzes, exam en skills (indien beschikbaar voor de cursus).

## Cursuslijst

Typische stappen:

1. Open de cursuslijst.
2. Selecteer een cursus om de voortgang te openen.
3. Als een cursus ontbreekt, controleer ook de verlopen sectie (als aanwezig).

## Cursusvoortgang (overzicht)

Wanneer je een cursus opent, kom je op de **voortgang**-pagina. Dit is de hub van de cursus: wat je hebt afgerond en wat de volgende stap is.

<!-- TODO(screenshot): docs/assets/screenshots/diver/nl/courses-progress.png -->
![Cursusvoortgang (overzicht)](../../assets/screenshots/diver/en/courses-progress.png)

Typische stappen:

1. Zoek in de cursus de volgende stap (module, quiz, examen, skills).
2. Voltooi en ga terug naar het voortgangsoverzicht.

## Pogingen (quiz/exam/skills)

Pogingen zijn de paginas waar je de activiteit **uitvoert** (vragen beantwoorden, verzenden, bevestigen).

### Quiz poging (module)

<!-- TODO(screenshot): docs/assets/screenshots/diver/nl/courses-quiz-attempt.png -->
![Quiz attempt](../../assets/screenshots/diver/en/courses-quiz-attempt.png)

Typische stappen:

1. Open vanuit de cursusvoortgang de volgende module/quiz stap.
2. Beantwoord de vragen.
3. Verstuur.
4. Open resultaten (indien beschikbaar) om je antwoorden te bekijken.

### Examen poging

<!-- TODO(screenshot): docs/assets/screenshots/diver/nl/courses-exam-attempt.png -->
![Exam attempt](../../assets/screenshots/diver/en/courses-exam-attempt.png)

Let op: het examen is pas beschikbaar nadat je de vereiste quizzes/modules hebt voltooid en nadat een instructeur het heeft geactiveerd.

Typische stappen:

1. Open vanuit de cursusvoortgang **Exam**.
2. Rond het examen af.
3. Verstuur en wacht op de resultatenpagina.

### Skills

Skills zijn praktische stappen die afhankelijk van de cursusconfiguratie bevestiging kunnen vereisen.

<!-- TODO(screenshot): docs/assets/screenshots/diver/nl/courses-skills.png -->
![Skills signatures](../../assets/screenshots/diver/en/courses-skills.png)

Let op: je kunt skills pas bevestigen nadat een instructeur ze als voltooid heeft gemarkeerd.

Tip: als de cursus dit vereist, vul eerst de bijbehorende Dive Log/Logbook-invoer voor de skills in voordat je bevestigt.

## Voortgangsdetails (quiz/exam/skills)

Voortgangsdetails zijn paginas waar je **resultaten** bekijkt (bijvoorbeeld quiz-antwoorden of exam-resultaten).

<!-- TODO(screenshot): docs/assets/screenshots/diver/nl/courses-results.png -->
![Voortgangsdetails (resultaten)](../../assets/screenshots/diver/en/courses-results.png)

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

Volgende: [FREE-Learning shop](free-learnings.md)

