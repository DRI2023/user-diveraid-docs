# Diver: Awards

Die Seite **Awards** zeigt deine Recognition Cards und den Bestellablauf (falls fuer dein Konto verfuegbar).

## Wo finde ich das?

Menue: **Diver -> Awards**

![Awards](../../assets/screenshots/diver/en/awards.png)

## Award-Typen

Es gibt zwei Haupttypen:

**Diver (logged dives)**

- 100 logged dives
- 500 logged dives
- 1000 logged dives
- 5000 logged dives

**Professional (certifications issued)**

- Bronze: 100 certifications issued
- Silver: 500 certifications issued
- Gold: 1000 certifications issued
- Platinum: 5000 certifications issued

## Awards-Liste

Typische Schritte:

1. Awards-Liste oeffnen.
2. Karte/Award auswaehlen.
3. Bestellablauf starten.

## Wie bekomme ich einen Award?

Wenn du eine neue Schwelle erreichst (logged dives oder certifications issued), zeigt das System typischerweise eine Meldung im Dashboard
und erlaubt dir, die zugehoerige Award-Card zu bestellen.

Typische Schritte:

1. (Optional) Suche nutzen, um einen Award zu finden.
2. Karte/Award auswaehlen.
3. Bestellablauf starten (falls fuer dein Konto verfuegbar).

Nach einer erfolgreichen Bestellung findest du die Card in **Awards**.

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
