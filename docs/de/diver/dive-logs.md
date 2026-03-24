# Diver: Dive Logs

## Wo finde ich das?

Menue: **Mein Tauchlogbuch**

## Liste

![Dive logs list](../../assets/screenshots/diver/en/dive-logs.png)

## Erstellen

Typische Schritte:

1. **New** klicken, um einen Dive Log zu erstellen.
2. Pflichtfelder ausfuellen und speichern.
3. Wenn du aus einem Kontext kommst (z.B. Skills), kann die Erstellung bereits vorbelegt sein.

## Anzeigen und aktualisieren

## Haeufige Probleme

- Log nicht gefunden: evtl. geloescht oder nicht deinem Profil zugeordnet.
- Update-Fehler: ungueltige Daten oder fehlende Berechtigung.

<details>
<summary>Fuer Support (technische Details)</summary>

```text
GET https://user.diveraid.com/de/diver/dive_log
GET https://user.diveraid.com/de/diver/dive_log/new
GET https://user.diveraid.com/de/diver/dive_log/new_log/{skillLog?}/{skill?}
GET https://user.diveraid.com/de/diver/dive_log/view/{diveLog}
GET https://user.diveraid.com/de/diver/dive_log/update/{diveLog}
```

</details>

Weiter: [Store](store.md)
