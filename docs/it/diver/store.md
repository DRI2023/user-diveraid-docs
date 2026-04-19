# Diver: store

Lo store Diver e' usato tipicamente per acquistare corsi.

## Dove lo trovi

Menu: **Negozio**

## Home store

Passi tipici:

1. Apri lo store.
2. Scegli un corso.
3. Entra nel checkout.

![Store](../../assets/screenshots/diver/en/store.png)

## Checkout e ordine corso

Passi tipici:

1. Dal checkout, conferma l'ordine.
2. Attendi la pagina di esito.

## Esito pagamento

## Problemi comuni

- Esito `fail`: riprova o verifica metodo di pagamento.
- Checkout non accessibile: corso non disponibile o non acquistabile dal tuo profilo.

<details>
<summary>Per supporto (dettagli tecnici)</summary>

```text
GET https://user.diveraid.com/it/diver/store
GET https://user.diveraid.com/it/diver/store/course/{course}/checkout
GET https://user.diveraid.com/it/diver/store/course/{course}/order
GET https://user.diveraid.com/it/diver/store/course/success
GET https://user.diveraid.com/it/diver/store/course/fail
```

</details>

Prossimo: [Moduli](forms.md)
