# Mijn Profiel: overzicht

De sectie **Mijn Profiel** is vanuit elke area (Diver/Professional/Dive Center/Distributor) beschikbaar via het menu van je profielfoto.

## Waar te vinden

Rechtsboven: klik op je **profielfoto** -> **Mijn Profiel** (en gerelateerde items).

## Hoofdpagina’s

- Overzicht (deze pagina)
- Mijn Profiel
- Mijn taken (assignments)
- Mijn Medische Geschiedenis
- Mijn veiligheid
- Mijn privacy

## Notities

- Sommige items worden alleen getoond als ze voor je account zijn ingeschakeld (bijv. **Mijn taken**).

<details>
<summary>Voor support (technische details)</summary>

Profielpagina’s gebruiken het taalprefix en een vast pad:

```text
GET https://user.diveraid.com/nl/user/profile
GET https://user.diveraid.com/nl/user/profile/assignments
GET https://user.diveraid.com/nl/user/profile/medical
GET https://user.diveraid.com/nl/user/profile/security
GET https://user.diveraid.com/nl/user/profile/privacy
```

Uitloggen:

```text
POST https://user.diveraid.com/nl/logout
```

</details>

Volgende: [Mijn Profiel](my-profile.md)
