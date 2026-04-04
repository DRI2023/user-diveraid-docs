# Diver: Free Learnings

## Was ist das?

Free Learnings sind Trainingsinhalte, die ueber einen vereinfachten Ablauf zugaenglich sind (typischerweise ohne Kauf).

## Wo finde ich das?

Menue: **FREE-Learning Shop**

![FREE-Learning shop](../../assets/screenshots/diver/en/free-learnings-store.png)

## Enroll (aktivieren)

Typische Schritte:

1. Enroll-Seite oeffnen.
2. Inhalte aktivieren (falls erforderlich).
3. Danach zur Liste zurueckkehren und starten.

## Liste

Typische Schritte:

1. Liste oeffnen.
2. Ein Free Learning auswaehlen, um den Fortschritt zu sehen.

![Free learnings](../../assets/screenshots/diver/en/free-learnings-list.png)

## Fortschritt

Oeffne ein Free-Learning-Element, um den Fortschritt zu sehen und dort weiterzumachen, wo du aufgehort hast.

## Haeufige Probleme

- Kein Inhalt sichtbar: du bist ggf. noch nicht enrolled (Enroll-Seite nutzen).
- Zurueck zum Login: Session abgelaufen.

<details>
<summary>Fuer Support (technische Details)</summary>

```text
GET https://user.diveraid.com/de/diver/free-learnings/enroll
GET https://user.diveraid.com/de/diver/free-learnings
GET https://user.diveraid.com/de/diver/free-learnings/progress/{log_code}/
GET https://user.diveraid.com/de/diver/free-learnings/progress/{log_code}/module/{module}
GET https://user.diveraid.com/de/diver/free-learnings/progress/{log_code}/quiz/{quiz}
```

</details>

Weiter: [Certifications](certifications.md)
