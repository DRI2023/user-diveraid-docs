# Il mio profilo: panoramica

La sezione **Il mio profilo** e’ disponibile da qualunque area (Diver/Professional/Dive Center/Distributor) tramite il menu della foto profilo.

## Dove lo trovi

In alto a destra: clicca sulla **foto profilo** -> **Il mio profilo** (e voci correlate).

## Pagine principali

- Panoramica (questa pagina)
- Il mio profilo
- Le mie attività (assignments)
- La mia storia medica
- La mia sicurezza
- La mia privacy

## Note

- Alcune voci possono comparire solo se abilitate sul tuo account (es. **Le mie attività**).

<details>
<summary>Per supporto (dettagli tecnici)</summary>

Le pagine profilo usano un prefisso lingua e un percorso fisso:

```text
GET https://user.diveraid.com/it/user/profile
GET https://user.diveraid.com/it/user/profile/assignments
GET https://user.diveraid.com/it/user/profile/medical
GET https://user.diveraid.com/it/user/profile/security
GET https://user.diveraid.com/it/user/profile/privacy
```

Logout:

```text
POST https://user.diveraid.com/it/logout
```

</details>

Prossimo: [Il mio profilo](my-profile.md)
