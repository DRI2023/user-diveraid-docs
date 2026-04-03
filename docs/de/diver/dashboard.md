# Diver: Dashboard

## Screenshot

![Diver dashboard](../../assets/screenshots/diver/en/dashboard.png)

![Library](../../assets/screenshots/diver/en/library.png)

![Profile menu (click on photo)](../../assets/screenshots/diver/en/profile-menu.png)

## Zweck

Das Dashboard ist die Einstiegsseite fuer den Bereich Diver und sammelt die wichtigsten Links (Kurse, Zertifizierungen, Dokumente usw.).

## Wo finde ich das?

Menue: **Dashboard**

## Was mache ich hier typischerweise?

1. Pruefe Hinweise/Highlights (laufende Kurse, Benachrichtigungen, Fristen und Quick-Actions wie **Zertifizierung herunterladen (Download Certification)** zum Herunterladen deiner Zertifikats-Attestate, **Mein Tauchcenter (My Diving Center)** zum Anzeigen/Wechseln deines Dive Centers oder **Medizinisches Formular (Medical Form)** zum Ausfuellen des medizinischen Formulars).
2. Gehe zu [Meine Kurse](courses.md), um einen Lernpfad fortzusetzen (Kursliste oeffnen, Kurs auswaehlen, naechsten Schritt fortsetzen: Modul/Quiz/Pruefung/Skills; wenn ein Kurs fehlt, auch *abgelaufene Kurse* pruefen, falls vorhanden).
3. Gehe zu **Meine Zertifizierungen**, um Karten und Historie anzusehen.
4. Gehe zu **Mein Tauchlogbuch**, um Logs zu erstellen oder zu aktualisieren.

## Top-Leiste (Icons neben Datum/Uhrzeit)

Oben rechts, neben Datum und Uhrzeit, findest du einige Schnellzugriffe:

- **Profil-Icons (Diver / PRO / Dive Center / Distributor):** Wechsel zwischen den Bereichen.
  Die Icons werden nur angezeigt, wenn dein Konto die entsprechende Qualifikation/Rolle hat.
- **Beim Klick:** du landest im Dashboard des ausgewaehlten Bereichs.
- **Sprache (EN/IT/DE/FR/ES/ZH/AR/NL/KO/TR/PT/PL/RU):** wechselt die Sprache der Oberflaeche.
- **Vollbild:** schaltet den Vollbildmodus um.
- **Theme/Kontrast:** aendert das Erscheinungsbild (z.B. hell/dunkel).
- **Profilfoto (Account):** oeffnet das Account-Menue.

### Was passiert, wenn ich auf mein Foto klicke?

Es oeffnet das Account-Menue (wie im Screenshot) mit Eintraegen wie:

- **Mein Profil (My Profile):** Profilinformationen.
- **Meine Aufgaben (My Task):** Zuweisungen und Einladungen (falls fuer dein Konto verfuegbar).
- **Meine medizinische Vorgeschichte (My Medical History):** medizinische Informationen/Formulare (falls fuer dein Konto aktiv).
- **Meine Sicherheit (My Security):** sicherheitsbezogene Einstellungen (falls verfuegbar).
- **Meine Privatsphaere (My Privacy):** Datenschutzeinstellungen.
- **Abmelden (Sign out):** Abmelden.

In **Meine Aufgaben (My Task)** kannst du normalerweise:

- Ausstehende Einladungen und aktive Kooperationen sehen (z.B. Dive Center Staff, Distributor Staff, Collaborations, Translator).
- Einladungen **Confirm** oder **Dismiss**.
- **Stop collaborating** (widerrufen), falls noetig (meist mit Eingabe einer Bestaetigungsphrase; manche Widerrufe bieten zusaetzliche Optionen wie das Loeschen eigener Classrooms).
- Die Collaborations-Liste suchen, sortieren und paginieren (falls verfuegbar).

## Haeufige Probleme

- Zurueck zum Login: Session abgelaufen oder nicht angemeldet.
- Zugriff blockiert/Fehler: E-Mail nicht verifiziert.

## Hinweise

Die App-Startseite (`/`) leitet zum Login weiter.

<details>
<summary>Fuer Support (technische Details)</summary>

```text
GET https://user.diveraid.com/de/diver/dashboard
```

</details>

Weiter: [Uploaded documents](uploaded-documents.md)
