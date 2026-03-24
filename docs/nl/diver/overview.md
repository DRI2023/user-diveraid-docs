# Diver: overzicht

Het **Diver**-gedeelte is het deel van de app voor de duiker (eindgebruiker).

## Voorbeelden (screenshots)

### Dashboard

![Diver dashboard](../../assets/screenshots/diver/en/dashboard.png)

### Cursuslijst

![Course list](../../assets/screenshots/diver/en/courses-list.png)

## Aan de slag

1. Meld je aan met je account.
2. Ga naar **Dashboard**.
3. Ga daarna naar de hoofdonderdelen: Mijn Cursussen, Mijn Certificeringen, Mijn Documenten/Geuploade documenten, Mijn Duiklogboek, Winkel.

## Waar te vinden

Menu: **Diver**

Hoofdpagina's:

- Overzicht (deze pagina)
- Dashboard
- Mijn Documenten
- Mijn Cursussen
- Mijn Certificeringen
- Awards
- Mijn Duiklogboek
- Winkel
- Raid Formulieren

## Typische workflows

1. Een cursus volgen: **Mijn Cursussen** -> open een cursus -> voltooi de volgende stappen.
2. Een certificering bekijken: **Mijn Certificeringen** -> open een certificering -> bekijk de geschiedenis.
3. Een duiklog maken: **Mijn Duiklogboek** -> New -> invullen -> opslaan -> bekijken/bijwerken.
4. Een cursus kopen: **Winkel** -> kies cursus -> checkout -> bevestigen -> resultaat controleren.

## Als er iets misgaat

- Terug naar login: opnieuw aanmelden (sessie kan verlopen zijn).
- Toegang geblokkeerd: controleer of je email is geverifieerd.

<details>
<summary>Voor support (technische details)</summary>

Diver-pagina's gebruiken een taalprefix in de URL:

```text
GET https://user.diveraid.com/nl/diver/...
```

Voorbeeld:

```text
GET https://user.diveraid.com/nl/diver/dashboard
```

Er zijn ook ondertekende links (meestal uit emails) die doorverwijzen:

```text
GET https://user.diveraid.com/actions/diver/certifications
GET https://user.diveraid.com/actions/diver/awards
GET https://user.diveraid.com/actions/diver/progress/{log_code}
```

</details>

Volgende: [Dashboard](dashboard.md)

