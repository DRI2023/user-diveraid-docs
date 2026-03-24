# Diver: Awards

"Awards" umfasst typischerweise Recognition Cards und den Bestellablauf.

## Wo finde ich das?

Menue: **Awards**

## Awards-Liste

Typische Schritte:

1. Awards-Liste oeffnen.
2. Karte/Award auswaehlen.
3. Bestellablauf starten.

![Awards list](../../assets/screenshots/diver/en/awards.png)

## Award bestellen

## Haeufige Probleme

- Ergebnis `fail`: Bestellung erneut versuchen oder Zahlungsmethode pruefen (falls Teil des Ablaufs).
- Award nicht verfuegbar: evtl. nicht kaufbar fuer dein Profil oder Land.

<details>
<summary>Fuer Support (technische Details)</summary>

```text
GET https://user.diveraid.com/de/diver/awards
GET https://user.diveraid.com/de/diver/awards/{card}/order
GET https://user.diveraid.com/de/diver/awards/order/success
GET https://user.diveraid.com/de/diver/awards/order/fail
```

</details>

Weiter: [Dive Logs](dive-logs.md)
