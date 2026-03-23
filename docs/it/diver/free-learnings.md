# Diver: free learning

## Cosa sono

I free learning sono contenuti formativi accessibili con un flusso semplificato (tipicamente senza acquisto).

## Dove lo trovi

Menu: **Diver -> Free Learnings**

## Iscrizione

Passi tipici:

1. Apri la pagina di iscrizione.
2. Seleziona il contenuto da attivare (se richiesto).
3. Dopo l'iscrizione, torna all'elenco per iniziare.

## Elenco

Passi tipici:

1. Apri l'elenco.
2. Seleziona un free learning per aprire il progress.

![Free learnings](/assets/screenshots/diver/it/free-learnings-list.png)

## Progress

Apri un free learning per vedere il progress e continuare da dove eri rimasto.

## Problemi comuni

- Non vedi contenuti: potresti non essere iscritto (usa la pagina di iscrizione).
- Redirect al login: sessione scaduta.

<details>
<summary>Per supporto (dettagli tecnici)</summary>

```text
GET /{locale}/diver/free-learnings/enroll
GET /{locale}/diver/free-learnings
GET /{locale}/diver/free-learnings/progress/{log_code}/
GET /{locale}/diver/free-learnings/progress/{log_code}/module/{module}
GET /{locale}/diver/free-learnings/progress/{log_code}/quiz/{quiz}
```

</details>

Prossimo: [Certificazioni](certifications.md)
