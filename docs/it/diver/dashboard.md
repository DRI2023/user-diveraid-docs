# Diver: dashboard

## Screenshot

![Dashboard Diver](../../assets/screenshots/diver/en/dashboard.png)

![Libreria](../../assets/screenshots/diver/en/library.png)

![Menu profilo (clic sulla foto)](../../assets/screenshots/diver/en/profile-menu.png)

## Scopo

La dashboard e' la pagina di ingresso dell'area Diver e aggrega i collegamenti principali (corsi, certificazioni, documenti, ecc.).

## Dove lo trovi

Menu: **Dashboard**

## Cosa fare qui (passi tipici)

1. Controlla se ci sono elementi in evidenza (corsi in corso, notifiche, scadenze e azioni rapide come **Scarica certificazione (Download Certification)** per scaricare l'attestato di tutte le tue certificazioni, **Il mio dive center (My Diving Center)** per cambiare dive center o **Modulo medico (Medical Form)** per compilare il modulo medico).
2. Entra in [I miei corsi](courses.md) per continuare un percorso (apri la lista corsi, seleziona un corso, riprendi il prossimo step: modulo/quiz/esame/skills; se un corso non compare, controlla anche *Corsi scaduti* se presente).
3. Entra in **Le mie certificazioni** per consultare card e storico.
4. Entra in **Il mio Dive Log** per creare o aggiornare i tuoi log.

## Barra superiore (icone accanto a data/ora)

In alto a destra, accanto a data e ora, trovi alcune scorciatoie:

- **Icone profilo (Diver / PRO / Dive Center / Distributor):** servono per passare da un'area all'altra.
  Compaiono solo se il tuo utente ha la qualifica/ruolo corrispondente (es. se sei solo Diver vedrai solo l'icona Diver).
- **Cosa succede se clicchi:** vieni portato alla dashboard dell'area selezionata.
- **Lingua (EN/IT/DE/FR/ES/ZH/AR/NL/KO/TR/PT/PL/RU):** cambia la lingua dell'interfaccia.
- **Schermo intero:** passa a modalita' full screen (utile su tablet o in presentazione).
- **Tema/contrasto:** cambia aspetto dell'interfaccia (es. chiaro/scuro, a seconda della configurazione).
- **Foto profilo (account):** apre il menu del tuo account.

### Se clicco sulla mia foto

Si apre il menu account (come nello screenshot), con queste voci:

- **Il mio profilo (My Profile):** dati del tuo profilo.
- **Le mie assegnazioni (My Task):** assegnazioni e inviti (se previsti per il tuo account).
- **La mia storia medica (My Medical History):** sezione relativa ai dati/moduli medici (se abilitata per il tuo account).
- **La mia sicurezza (My Security):** impostazioni/consensi relativi alla sicurezza (se previsti).
- **La mia privacy (My Privacy):** impostazioni privacy.
- **Disconnetti (Sign out):** esce dal portale (logout).

In **Le mie assegnazioni (My Task)**, in genere puoi:

- Vedere inviti in attesa e collaborazioni attive (es. staff Dive Center, staff Distributor, collaborazioni, traduttore).
- **Confirm** o **Dismiss** gli inviti.
- **Stop collaborating** (revoca) quando serve (di solito richiede di digitare una frase di conferma; alcune revoche possono anche offrire opzioni come eliminare classroom di cui sei owner).
- Cercare, ordinare e paginare la lista collaborazioni (quando disponibile).

## Problemi comuni

- Rimandi al login: sessione scaduta o non autenticato.
- Pagina bloccata/errore accesso: email non verificata.

## Note

La home applicativa (`/`) reindirizza al login.

<details>
<summary>Per supporto (dettagli tecnici)</summary>

```text
GET https://user.diveraid.com/it/diver/dashboard
```

</details>

Prossimo: [Documenti caricati](uploaded-documents.md)
