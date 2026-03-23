# Diver: dive log

## Dove lo trovi

Menu: **Diver -> Dive Logs**

## Elenco

![Elenco dive log](/assets/screenshots/diver/it/dive-logs.png)

## Creazione

Passi tipici:

1. Premi **New** (o **Nuovo**) per creare un dive log.
2. Compila i campi richiesti e salva.
3. Se arrivi da un contesto specifico (es. skills), potresti vedere un flusso di creazione pre-compilato.

## Dettaglio e aggiornamento

## Problemi comuni

- Non trovi un log: potrebbe essere stato eliminato o non associato al tuo profilo.
- Errore su update: dati non validi o permessi mancanti.

<details>
<summary>Per supporto (dettagli tecnici)</summary>

```text
GET /{locale}/diver/dive_log
GET /{locale}/diver/dive_log/new
GET /{locale}/diver/dive_log/new_log/{skillLog?}/{skill?}
GET /{locale}/diver/dive_log/view/{diveLog}
GET /{locale}/diver/dive_log/update/{diveLog}
```

</details>

Prossimo: [Store](store.md)
