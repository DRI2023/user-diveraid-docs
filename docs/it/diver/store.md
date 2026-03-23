# Diver: store

Lo store Diver e' usato tipicamente per acquistare corsi.

## Dove lo trovi

Menu: **Diver -> Store**

## Home store

Passi tipici:

1. Apri lo store.
2. Scegli un corso.
3. Entra nel checkout.

![Store](/assets/screenshots/diver/it/store.png)

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
GET /{locale}/diver/store
GET /{locale}/diver/store/course/{course}/checkout
GET /{locale}/diver/store/course/{course}/order
GET /{locale}/diver/store/course/success
GET /{locale}/diver/store/course/fail
```

</details>

Prossimo: [Moduli](forms.md)
