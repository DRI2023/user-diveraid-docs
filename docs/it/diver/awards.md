# Diver: I miei awards

La pagina **I miei awards** contiene le recognition card (award) e il relativo flusso di ordine (quando disponibile).

## Dove lo trovi

Menu: **Diver -> I miei awards**

![I miei awards](../../assets/screenshots/diver/it/awards.png)

## Tipi di award

Esistono due tipi principali di award:

**Diver (numero di immersioni registrate)**

- 100 logged dives
- 500 logged dives
- 1000 logged dives
- 5000 logged dives

**Professional (certificazioni emesse)**

- Bronze: 100 certifications issued
- Silver: 500 certifications issued
- Gold: 1000 certifications issued
- Platinum: 5000 certifications issued

## Elenco awards

Passi tipici:

1. Apri l'elenco awards.
2. Seleziona una card/premio.
3. Avvia l'ordine.

## Come li ottengo

Quando raggiungi una nuova soglia (immersioni registrate o certificazioni emesse), di solito il sistema ti avvisa nella dashboard
e ti permette di ordinare la relativa award card.

Passi tipici:

1. (Opzionale) Usa la barra di ricerca per trovare una card.
2. Seleziona una card/award dall'elenco.
3. Avvia il flusso di ordine (se disponibile per il tuo account).

Dopo l'ordine (esito positivo), la card viene emessa e la ritroverai in **I miei awards**.

## Problemi comuni

- Esito `fail`: riprova l'ordine o verifica metodo di pagamento (se previsto dal flusso).
- Premio non disponibile: potrebbe non essere acquistabile dal tuo profilo o nel tuo paese.

<details>
<summary>Per supporto (dettagli tecnici)</summary>

```text
GET https://user.diveraid.com/it/diver/awards
GET https://user.diveraid.com/it/diver/awards/{card}/order
GET https://user.diveraid.com/it/diver/awards/order/success
GET https://user.diveraid.com/it/diver/awards/order/fail
```

</details>

Prossimo: [Dive log](dive-logs.md)
