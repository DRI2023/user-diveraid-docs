# Diver: dashboard

## Screenshot

![Diver dashboard](../../assets/screenshots/diver/en/dashboard.png)

![Library](../../assets/screenshots/diver/en/library.png)

![Profile menu (click on photo)](../../assets/screenshots/diver/en/profile-menu.png)

## Doel

Het dashboard is de startpagina van het Diver-gedeelte en bevat meestal de belangrijkste links (cursussen, certificeringen, documenten, enz.).

## Waar te vinden

Menu: **Dashboard**

## Wat kun je hier doen (typische stappen)

1. Controleer gemarkeerde items (lopende cursussen, meldingen, deadlines en snelle acties zoals **Certificaat downloaden (Download Certification)** om het certificaat van al je certificeringen te downloaden, **Mijn duikcentrum (My Diving Center)** om je duikcentrum te bekijken/wijzigen of **Medisch formulier (Medical Form)** om het medische formulier in te vullen).
2. Ga naar [Mijn Cursussen](courses.md) om een leerpad te vervolgen (open de cursuslijst, selecteer een cursus en ga verder met de volgende stap: module/quiz/examen/skills; als een cursus ontbreekt, controleer ook de *verlopen* sectie als die er is).
3. Ga naar **Mijn Certificeringen** om kaarten en geschiedenis te bekijken.
4. Ga naar **Mijn Duiklogboek** om logs te maken of bij te werken.

## Bovenbalk (iconen naast datum/tijd)

Rechtsboven, naast datum en tijd, vind je een paar snelkoppelingen:

- **Profieliconen (Diver / PRO / Dive Center / Distributor):** wissel tussen de onderdelen.
  Iconen worden alleen getoond als je account de bijbehorende kwalificatie/rol heeft.
- **Bij klikken:** je gaat naar het dashboard van het gekozen onderdeel.
- **Taal (EN/IT/DE/FR/ES/NL/ZH/PT/PL):** wisselt de taal van de interface.
- **Volledig scherm:** schakelt full screen in/uit.
- **Thema/contrast:** verandert de weergave (bijv. licht/donker).
- **Profielfoto (account):** opent je accountmenu.

### Wat gebeurt er als ik op mijn foto klik?

Het opent het accountmenu (zoals in de screenshot) met items zoals:

- **Mijn profiel (My Profile):** je profieldetails.
- **Mijn taken (My Task):** je assignments en uitnodigingen (indien beschikbaar).
- **Mijn medische geschiedenis (My Medical History):** medische informatie/formulieren (als ingeschakeld).
- **Mijn beveiliging (My Security):** beveiligingsinstellingen/consents (als beschikbaar).
- **Mijn privacy (My Privacy):** privacy-instellingen.
- **Uitloggen (Sign out):** uitloggen.

In **Mijn taken (My Task)** kun je meestal:

- Openstaande uitnodigingen en actieve samenwerkingen bekijken (bijv. Dive Center staff, Distributor staff, collaborations, translator).
- Uitnodigingen **Confirm** of **Dismiss**.
- **Stop collaborating** (intrekken) indien nodig (meestal met een bevestigingszin; sommige intrekkingen bieden opties zoals het verwijderen van eigen classrooms).
- De collaborations-lijst zoeken, sorteren en pagineren (indien beschikbaar).

## Veelvoorkomende problemen

- Terug naar login: sessie verlopen of niet aangemeld.
- Toegang geblokkeerd/fout: email niet geverifieerd.

## Notities

De app-home (`/`) verwijst door naar login.

<details>
<summary>Voor support (technische details)</summary>

```text
GET https://user.diveraid.com/nl/diver/dashboard
```

</details>

Volgende: [Geuploade documenten](uploaded-documents.md)
