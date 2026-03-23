# Diver: certificazioni

## Dove lo trovi

Menu: **Diver -> Certifications**

## Elenco certificazioni

Passi tipici:

1. Apri la lista certificazioni.
2. Seleziona una certificazione per vederne i dettagli.
3. Se disponibile, apri lo storico per vedere progress e risultati.

![Elenco certificazioni](/assets/screenshots/diver/it/certifications.png)

## Storico certificazione

## Problemi comuni

- Certificazione mancante: potrebbe non essere ancora stata associata al tuo profilo.
- Link storico non apre: elemento non disponibile o link vecchio.

<details>
<summary>Per supporto (dettagli tecnici)</summary>

```text
GET /{locale}/diver/certifications
GET /{locale}/diver/certifications/history/{certification}
GET /{locale}/diver/certifications/history/{certification}/quiz/{quiz}
GET /{locale}/diver/certifications/history/{certification}/exam/{exam}
GET /{locale}/diver/certifications/history/{certification}/skills
```

</details>

Prossimo: [Premi](awards.md)
