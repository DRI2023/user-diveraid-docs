# Diver: corsi

## Screenshot
![Lista corsi](../../assets/screenshots/diver/en/courses-list.png)
![Corsi scaduti](../../assets/screenshots/diver/en/courses-expired.png)

## Dove lo trovi

Menu: **I miei corsi**

## Cosa puoi fare

- Vedere i corsi attivi e quelli scaduti.
- Aprire il progress di un corso.
- Continuare moduli/quiz, esame e skills (se previsti dal corso).

## Elenco corsi

Passi tipici:

1. Apri la lista corsi.
2. Seleziona un corso per entrare nel suo progress.
3. Se un corso non compare, controlla la sezione dei corsi scaduti (se presente).

## Progress del corso (riepilogo)

Quando apri un corso, vieni portato alla pagina di **progress**. Questa pagina e' l'hub del corso: mostra cosa hai completato e qual e' il prossimo step.
![Progress del corso (riepilogo)](../../assets/screenshots/diver/en/courses-progress.png)

Passi tipici:

1. Dentro al corso, individua il prossimo step da completare (modulo, quiz, esame, skills).
2. Completa lo step e torna al riepilogo progress per vedere l'avanzamento.

## Tentativi (quiz/esame/skills)

I tentativi sono le pagine in cui **svolgi** l'attivita' (rispondi, invii, confermi).

### Tentativo quiz (modulo)
![Tentativo quiz](../../assets/screenshots/diver/en/courses-quiz-attempt.png)

Passi tipici:

1. Dal progress del corso, apri il prossimo step (modulo/quiz).
2. Rispondi alle domande.
3. Invia.
4. Apri la pagina risultati (se disponibile) per rivedere le risposte.

### Tentativo esame
![Tentativo esame](../../assets/screenshots/diver/en/courses-exam-attempt.png)

Nota: l'esame diventa disponibile solo dopo aver completato i quiz/moduli richiesti e dopo che l'istruttore lo abilita.

Passi tipici:

1. Dal progress del corso, apri **Exam**.
2. Completa l'esame.
3. Invia e attendi la pagina risultato.

### Skills

Le skills sono step pratici che possono richiedere conferma in base alla configurazione del corso.
![Skills signatures](../../assets/screenshots/diver/en/courses-skills.png)

Nota: puoi confermare le skills solo dopo che l'istruttore le ha segnate come completate.

Suggerimento: se il corso lo richiede, non dimenticare di compilare il Dive Log/Logbook relativo alle skills prima di confermare.

## Dettaglio progress (quiz/esame/skills)

Il dettaglio progress e' la pagina in cui **rivedi i risultati** (ad esempio risposte del quiz o risultati dell'esame).
![Dettaglio progress (risultati)](../../assets/screenshots/diver/en/courses-results.png)

## Problemi comuni

- Redirect al login: sessione scaduta.
- Accesso negato: email non verificata.
- Corso non trovato: link vecchio oppure corso non associato al tuo utente.

<details>
<summary>Per supporto (dettagli tecnici)</summary>

Lista corsi:

```text
GET https://user.diveraid.com/it/diver/courses
GET https://user.diveraid.com/it/diver/courses/expired
```

Progress e tentativi:

```text
GET https://user.diveraid.com/it/diver/courses/progress/{log_code}
GET https://user.diveraid.com/it/diver/courses/progress/{log_code}/module/{module}
GET https://user.diveraid.com/it/diver/courses/progress/{log_code}/exam
GET https://user.diveraid.com/it/diver/courses/progress/{log_code}/skills
GET https://user.diveraid.com/it/diver/courses/progress/{log_code}/quiz/{quiz}
GET https://user.diveraid.com/it/diver/courses/progress/{log_code}/exam/{exam}
GET https://user.diveraid.com/it/diver/courses/progress/{log_code}/skill
GET https://user.diveraid.com/it/diver/courses/progress/{log_code}/skill/sign
```

</details>

Prossimo: [Free learning](free-learnings.md)
