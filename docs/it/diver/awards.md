# Diver: premi

I "premi" includono tipicamente card/riconoscimenti e relativo flusso ordine.

## Dove lo trovi

Menu: **Diver -> Awards**

## Elenco premi

Passi tipici:

1. Apri l'elenco premi.
2. Seleziona una card/premio.
3. Avvia l'ordine.

![Elenco premi](../../assets/screenshots/diver/it/awards.png)

## Ordine premio

## Problemi comuni

- Esito `fail`: riprova l'ordine o verifica metodo di pagamento (se previsto dal flusso).
- Premio non disponibile: potrebbe non essere acquistabile dal tuo profilo o nel tuo paese.

<details>
<summary>Per supporto (dettagli tecnici)</summary>

```text
GET /{locale}/diver/awards
GET /{locale}/diver/awards/{card}/order
GET /{locale}/diver/awards/order/success
GET /{locale}/diver/awards/order/fail
```

</details>

Prossimo: [Dive log](dive-logs.md)
