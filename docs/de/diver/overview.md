# Diver: Uebersicht

Der Bereich **Diver** ist der Teil der App fuer Taucher (Endanwender).

## Beispiele (Screenshots)

### Dashboard

![Diver dashboard](../../assets/screenshots/diver/en/dashboard.png)

### Kursliste

![Course list](../../assets/screenshots/diver/en/courses-list.png)

## Erste Schritte

1. Mit deinem Konto anmelden.
2. Zu **Dashboard** gehen.
3. Von dort aus zu den Hauptbereichen: Meine Kurse, Meine Zertifizierungen, Uploaded documents/Meine Dokumente, Mein Tauchlogbuch, Laden.

## Wo finde ich das?

Menue: **Diver**

Hauptseiten:

- Overview (diese Seite)
- Dashboard
- Documents
- Courses
- Certifications
- Awards
- Dive Logs
- Store
- Forms

## Typische Workflows

1. Einen Kurs absolvieren: **Courses** -> Kurs oeffnen -> naechste Schritte abschliessen.
2. Eine Zertifizierung pruefen: **Certifications** -> Zertifizierung oeffnen -> Historie ansehen.
3. Ein Tauchlog erstellen: **Dive Logs** -> New -> ausfuellen -> speichern -> ansehen/aktualisieren.
4. Einen Kurs kaufen: **Store** -> Kurs waehlen -> Checkout -> bestaetigen -> Ergebnis pruefen.

## Wenn etwas nicht funktioniert

- Zurueck zum Login: bitte erneut anmelden (Session kann abgelaufen sein).
- Zugriff blockiert: pruefe, ob deine E-Mail verifiziert ist.

<details>
<summary>Fuer Support (technische Details)</summary>

Diver-Seiten verwenden ein Sprachpraefix in der URL:

```text
GET https://user.diveraid.com/de/diver/...
```

Beispiel:

```text
GET https://user.diveraid.com/de/diver/dashboard
```

Es gibt auch signierte Links (typisch aus E-Mails), die weiterleiten:

```text
GET https://user.diveraid.com/actions/diver/certifications
GET https://user.diveraid.com/actions/diver/awards
GET https://user.diveraid.com/actions/diver/progress/{log_code}
```

</details>

Weiter: [Dashboard](dashboard.md)
