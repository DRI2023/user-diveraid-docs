# Diver: awards

"Awards" bevat meestal recognition cards en de bestelstroom.

## Waar te vinden

Menu: **Awards**

## Awards-lijst

Typische stappen:

1. Open de awards-lijst.
2. Selecteer een kaart/award.
3. Start de bestelstroom.

![Awards list](../../assets/screenshots/diver/en/awards.png)

## Bestellen

## Veelvoorkomende problemen

- Resultaat `fail`: probeer opnieuw of controleer je betaalmethode (als onderdeel van de flow).
- Award niet beschikbaar: mogelijk niet te koop voor je profiel of land.

<details>
<summary>Voor support (technische details)</summary>

```text
GET https://user.diveraid.com/nl/diver/awards
GET https://user.diveraid.com/nl/diver/awards/{card}/order
GET https://user.diveraid.com/nl/diver/awards/order/success
GET https://user.diveraid.com/nl/diver/awards/order/fail
```

</details>

Volgende: [Dive Logs](dive-logs.md)

