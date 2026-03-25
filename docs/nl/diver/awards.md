# Diver: awards

De pagina **Awards** bevat je recognition cards en de bestelstroom (als beschikbaar voor je account).

## Waar te vinden

Menu: **Diver -> Awards**

![Awards](../../assets/screenshots/diver/en/awards.png)

## Award-types

Er zijn twee hoofdtypes:

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

## Awards-lijst

Typische stappen:

1. Open de awards-lijst.
2. Selecteer een kaart/award.
3. Start de bestelstroom.

## Hoe krijg je een award?

Wanneer je een nieuwe mijlpaal bereikt (logged dives of certifications issued), toont het systeem meestal een melding op de dashboard
en kun je de bijbehorende award card bestellen.

Typische stappen:

1. (Optioneel) Gebruik zoeken om een award te vinden.
2. Selecteer een kaart/award.
3. Start de bestelstroom (als beschikbaar voor je account).

Na een succesvolle bestelling wordt de card uitgegeven en vind je die terug in **Awards**.

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
