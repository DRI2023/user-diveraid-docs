# Diver: certificeringen

## Waar te vinden

Menu: **Mijn Certificeringen**

## Lijst

Typische stappen:

1. Open de lijst met certificeringen.
2. Selecteer een certificering om details te bekijken.
3. Als beschikbaar: open geschiedenis om voortgang en resultaten te bekijken.

![Certifications list](../../assets/screenshots/diver/en/certifications.png)

## Geschiedenis

## Veelvoorkomende problemen

- Certificering ontbreekt: mogelijk nog niet gekoppeld aan je profiel.
- Geschiedenis opent niet: item niet beschikbaar of oude link.

<details>
<summary>Voor support (technische details)</summary>

```text
GET https://user.diveraid.com/nl/diver/certifications
GET https://user.diveraid.com/nl/diver/certifications/history/{certification}
GET https://user.diveraid.com/nl/diver/certifications/history/{certification}/quiz/{quiz}
GET https://user.diveraid.com/nl/diver/certifications/history/{certification}/exam/{exam}
GET https://user.diveraid.com/nl/diver/certifications/history/{certification}/skills
```

</details>

Volgende: [Awards](awards.md)

