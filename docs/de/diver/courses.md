# Diver: Kurse

## Screenshot

![Course list](../../assets/screenshots/diver/en/courses-list.png)

![Expired courses](../../assets/screenshots/diver/en/courses-expired.png)

## Wo finde ich das

Menue: **Diver -> Meine Kurse**

## Was du hier machen kannst

- Aktive und abgelaufene Kurse ansehen.
- Kursfortschritt oeffnen.
- Module/Quiz, Exam und Skills fortsetzen (wenn fuer den Kurs verfuegbar).

## Kursliste

Typische Schritte:

1. Kursliste oeffnen.
2. Kurs auswaehlen, um den Fortschritt zu oeffnen.
3. Wenn ein Kurs fehlt, auch den Bereich abgelaufene Kurse pruefen (falls vorhanden).

## Kursfortschritt (Uebersicht)

Wenn du einen Kurs oeffnest, landest du auf der **Fortschritt**-Seite. Das ist der Hub des Kurses: was erledigt ist und was als naechstes kommt.

<!-- TODO(screenshot): docs/assets/screenshots/diver/de/courses-progress.png -->
![Kursfortschritt (Uebersicht)](../../assets/screenshots/diver/en/courses-progress.png)

Typische Schritte:

1. Im Kurs den naechsten Schritt finden (Modul, Quiz, Exam, Skills).
2. Abschliessen und dann zur Fortschrittsuebersicht zurueckkehren.

## Versuche (Quiz/Exam/Skills)

Versuche sind die Seiten, auf denen du die Aktivitaet **durchfuehrst** (Fragen beantworten, absenden, bestaetigen).

### Quiz-Versuch (Modul)

<!-- TODO(screenshot): docs/assets/screenshots/diver/de/courses-quiz-attempt.png -->
![Quiz attempt](../../assets/screenshots/diver/en/courses-quiz-attempt.png)

Typische Schritte:

1. In der Kursuebersicht den naechsten Modul/Quiz-Schritt oeffnen.
2. Fragen beantworten.
3. Absenden.
4. Ergebnisse (falls verfuegbar) oeffnen und Antworten pruefen.

### Exam-Versuch

<!-- TODO(screenshot): docs/assets/screenshots/diver/de/courses-exam-attempt.png -->
![Exam attempt](../../assets/screenshots/diver/en/courses-exam-attempt.png)

Hinweis: Das Exam ist erst verfuegbar, wenn die erforderlichen Quiz/Module abgeschlossen sind und ein Instructor es freigibt.

Typische Schritte:

1. In der Kursuebersicht **Exam** oeffnen.
2. Exam abschliessen.
3. Absenden und auf die Ergebnisseite warten.

### Skills

Skills sind praktische Schritte, die je nach Kurs-Konfiguration eine Bestaetigung erfordern koennen.

<!-- TODO(screenshot): docs/assets/screenshots/diver/de/courses-skills.png -->
![Skills signatures](../../assets/screenshots/diver/en/courses-skills.png)

Hinweis: Du kannst Skills erst bestaetigen, wenn ein Instructor sie als abgeschlossen markiert hat.

Tipp: Falls der Kurs es verlangt, fuelle vorher den zugehoerigen Dive Log/Logbook Eintrag fuer die Skills aus.

## Fortschrittsdetails (Quiz/Exam/Skills)

Fortschrittsdetails sind die Seiten, auf denen du **Ergebnisse** pruefst (z. B. Quiz-Antworten oder Exam-Ergebnisse).

<!-- TODO(screenshot): docs/assets/screenshots/diver/de/courses-results.png -->
![Fortschrittsdetails (Ergebnisse)](../../assets/screenshots/diver/en/courses-results.png)

## Haeufige Probleme

- Zurueck zum Login: Session abgelaufen.
- Zugriff verweigert: E-Mail nicht verifiziert.
- Kurs nicht gefunden: alter Link oder Kurs nicht deinem Nutzer zugeordnet.

<details>
<summary>Fuer Support (technische Details)</summary>

Kursliste:

```text
GET https://user.diveraid.com/de/diver/courses
GET https://user.diveraid.com/de/diver/courses/expired
```

Fortschritt und Versuche:

```text
GET https://user.diveraid.com/de/diver/courses/progress/{log_code}
GET https://user.diveraid.com/de/diver/courses/progress/{log_code}/module/{module}
GET https://user.diveraid.com/de/diver/courses/progress/{log_code}/exam
GET https://user.diveraid.com/de/diver/courses/progress/{log_code}/skills
GET https://user.diveraid.com/de/diver/courses/progress/{log_code}/quiz/{quiz}
GET https://user.diveraid.com/de/diver/courses/progress/{log_code}/exam/{exam}
GET https://user.diveraid.com/de/diver/courses/progress/{log_code}/skill
GET https://user.diveraid.com/de/diver/courses/progress/{log_code}/skill/sign
```

</details>

Weiter: [Free Learnings](free-learnings.md)

