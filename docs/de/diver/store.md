# Diver: Store

Der Diver Store wird typischerweise genutzt, um Kurse zu kaufen.

## Wo finde ich das?

Menue: **Laden**

## Store Start

Typische Schritte:

1. Store oeffnen.
2. Kurs auswaehlen.
3. Zum Checkout gehen.

![Store](../../assets/screenshots/diver/en/store.png)

## Checkout und Bestellung

Typische Schritte:

1. Im Checkout die Bestellung bestaetigen.
2. Auf die Ergebnis-Seite warten.

## Zahlungsergebnis

## Haeufige Probleme

- Ergebnis `fail`: erneut versuchen oder Zahlungsmethode pruefen.
- Checkout nicht erreichbar: Kurs nicht verfuegbar oder nicht kaufbar fuer dein Profil.

<details>
<summary>Fuer Support (technische Details)</summary>

```text
GET https://user.diveraid.com/de/diver/store
GET https://user.diveraid.com/de/diver/store/course/{course}/checkout
GET https://user.diveraid.com/de/diver/store/course/{course}/order
GET https://user.diveraid.com/de/diver/store/course/success
GET https://user.diveraid.com/de/diver/store/course/fail
```

</details>

Weiter: [Forms](forms.md)
