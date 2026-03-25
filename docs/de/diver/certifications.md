# Diver: Certifications

## Wo finde ich das?

Menue: **Meine Zertifizierungen**

![Zertifizierungs-Liste](../../assets/screenshots/diver/en/certifications-02.png)

## Liste

Typische Schritte:

1. Liste oeffnen.
2. Eine Zertifizierung auswaehlen, um Details zu sehen.
3. Auf eine Zertifizierung klicken, um Details auf der anderen Seite zu sehen (Split View).
4. Zertifizierung als **PDF** oder **PNG** herunterladen.
5. Falls verfuegbar: **History/Historie** oeffnen, um Fortschritt und Ergebnisse zu pruefen.

![Zertifizierungs-Details (Split View)](../../assets/screenshots/diver/en/certifications-01.png)

## Historie

Die Historie zeigt Fortschrittsdetails zu einer bestimmten Zertifizierung.

![Certification history](../../assets/screenshots/diver/en/certifications-history.png)

## Haeufige Probleme

- Zertifizierung fehlt: noch nicht deinem Profil zugeordnet.
- Historie-Link oeffnet nicht: nicht verfuegbar oder alter Link.

<details>
<summary>Fuer Support (technische Details)</summary>

```text
GET https://user.diveraid.com/de/diver/certifications
GET https://user.diveraid.com/de/diver/certifications/history/{certification}
GET https://user.diveraid.com/de/diver/certifications/history/{certification}/quiz/{quiz}
GET https://user.diveraid.com/de/diver/certifications/history/{certification}/exam/{exam}
GET https://user.diveraid.com/de/diver/certifications/history/{certification}/skills
```

</details>

Weiter: [Awards](awards.md)
