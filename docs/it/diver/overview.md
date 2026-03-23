# Diver: panoramica

L'area **Diver** e' la sezione dell'app dedicata al subacqueo (utente finale).

## Esempi (screenshot)

### Dashboard

![Dashboard Diver](../../assets/screenshots/diver/it/dashboard.png)

### Lista corsi

![Lista corsi](../../assets/screenshots/diver/it/courses-list.png)

## Come iniziare

1. Accedi all'app con il tuo account.
2. Vai su **Diver -> Dashboard**.
3. Da li' entra nelle sezioni principali: Corsi, Certificazioni, Documenti, Dive log, Store.

## Dove lo trovi

Menu: **Diver**

Pagine principali:

- Overview (questa pagina)
- Dashboard
- Documents
- Courses
- Certifications
- Awards
- Dive Logs
- Store
- Forms

## Flussi tipici

1. Seguire un corso: **Courses** -> apri un corso -> completa i passi indicati.
2. Consultare una certificazione: **Certifications** -> apri una certificazione -> consulta lo storico.
3. Creare un dive log: **Dive Logs** -> Nuovo -> compila -> salva -> rivedi/aggiorna.
4. Acquistare un corso: **Store** -> scegli corso -> checkout -> conferma -> verifica esito.

## Se qualcosa non va

- Se vieni rimandato al login, rifai accesso (la sessione potrebbe essere scaduta).
- Se vedi un blocco accesso, verifica che l'email sia verificata.

<details>
<summary>Per supporto (dettagli tecnici)</summary>

Le pagine Diver usano un prefisso lingua nell'URL:

```text
https://user.diveraid.com/{locale}/diver/...
```

Esempi:

```text
https://user.diveraid.com/it/diver/dashboard
https://user.diveraid.com/en/diver/dashboard
```

Esistono anche link firmati (tipicamente da email) che reindirizzano:

```text
https://user.diveraid.com/actions/diver/certifications
https://user.diveraid.com/actions/diver/awards
https://user.diveraid.com/actions/diver/progress/{log_code}
```

</details>

Prossimo: [Dashboard](dashboard.md)
