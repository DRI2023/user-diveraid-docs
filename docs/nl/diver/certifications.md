# Diver: certificeringen

## Waar te vinden

Menu: **Mijn Certificeringen**

![Certificeringen-lijst](../../assets/screenshots/diver/en/certifications-02.png)

## Lijst

Typische stappen:

1. Open de lijst met certificeringen.
2. Selecteer een certificering om details te bekijken.
3. Klik op een kaart om details aan de andere kant te zien (split view).
4. Download de certificering als **PDF** of **PNG**.
5. Als beschikbaar: open **History/Geschiedenis** om voortgang en resultaten te bekijken.

![Details (split view)](../../assets/screenshots/diver/en/certifications-01.png)

## Geschiedenis

De geschiedenis toont voortgangsdetails voor een certificering.

![Certification history](../../assets/screenshots/diver/en/certifications-history.png)

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
