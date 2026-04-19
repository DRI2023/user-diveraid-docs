# Diver: certificazioni

La pagina **Le mie certificazioni** contiene le card di certificazione e ti permette di scaricarle (PDF/PNG).

## Dove lo trovi

Menu: **Diver -> Le mie certificazioni**

![Elenco certificazioni](../../assets/screenshots/diver/en/certifications-02.png)

## Elenco certificazioni

Passi tipici:

1. Apri la lista certificazioni.
2. Seleziona una certificazione per vederne i dettagli.
3. Clicca su una card per mostrare i dettagli sull'altro lato (split view).
4. Scarica la certificazione in **PDF** o **PNG**.
5. Se disponibile, apri **History** per vedere progress e risultati.

![Dettagli certificazione (split view)](../../assets/screenshots/diver/en/certifications-01.png)

## Storico certificazione

La pagina di storico mostra i dettagli di progress per una certificazione specifica (quiz/esame/skills, in base al corso).

![Certification history](../../assets/screenshots/diver/en/certifications-history.png)

## Problemi comuni

- Certificazione mancante: potrebbe non essere ancora stata associata al tuo profilo.
- Link storico non apre: elemento non disponibile o link vecchio.

<details>
<summary>Per supporto (dettagli tecnici)</summary>

```text
GET https://user.diveraid.com/it/diver/certifications
GET https://user.diveraid.com/it/diver/certifications/history/{certification}
GET https://user.diveraid.com/it/diver/certifications/history/{certification}/quiz/{quiz}
GET https://user.diveraid.com/it/diver/certifications/history/{certification}/exam/{exam}
GET https://user.diveraid.com/it/diver/certifications/history/{certification}/skills
```

</details>

Prossimo: [Premi](awards.md)
