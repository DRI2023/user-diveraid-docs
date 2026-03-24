# Diver: Courses

## Screenshot

![Course list](../../assets/screenshots/diver/en/courses-list.png)

![Expired courses](../../assets/screenshots/diver/en/courses-expired.png)

## Wo finde ich das?

Menue: **Meine Kurse**

## Was kann ich hier machen?

- Aktive und abgelaufene Kurse ansehen.
- Kursfortschritt oeffnen.
- Module/Quiz, Pruefung und Skills fortsetzen (wenn fuer den Kurs verfuegbar).

## Kursliste

Typische Schritte:

1. Kursliste oeffnen.
2. Kurs auswaehlen, um den Fortschritt zu sehen.
3. Wenn ein Kurs fehlt, auch den Bereich abgelaufene Kurse pruefen (falls vorhanden).

Im Kurs:

1. Den naechsten Schritt finden (Modul, Quiz, Pruefung, Skills).
2. Abschliessen und dann die Fortschrittsuebersicht pruefen.

## Versuche (Quiz/Exam/Skills)

Hinweis:

- Wenn du ein Modul oeffnest und eine leere Seite oder einen Fehler siehst, ist es evtl. nicht verfuegbar oder bereits abgeschlossen.

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
