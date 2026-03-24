# Diver: winkel

De Diver-winkel wordt meestal gebruikt om cursussen te kopen.

## Waar te vinden

Menu: **Winkel**

## Start

Typische stappen:

1. Open de winkel.
2. Kies een cursus.
3. Ga naar checkout.

![Store](../../assets/screenshots/diver/en/store.png)

## Checkout en order

Typische stappen:

1. Bevestig de bestelling in checkout.
2. Wacht op de resultaatpagina.

## Betaalresultaat

## Veelvoorkomende problemen

- Resultaat `fail`: probeer opnieuw of controleer je betaalmethode.
- Checkout niet toegankelijk: cursus niet beschikbaar of niet koopbaar voor je profiel.

<details>
<summary>Voor support (technische details)</summary>

```text
GET https://user.diveraid.com/nl/diver/store
GET https://user.diveraid.com/nl/diver/store/course/{course}/checkout
GET https://user.diveraid.com/nl/diver/store/course/{course}/order
GET https://user.diveraid.com/nl/diver/store/course/success
GET https://user.diveraid.com/nl/diver/store/course/fail
```

</details>

Volgende: [Forms](forms.md)

