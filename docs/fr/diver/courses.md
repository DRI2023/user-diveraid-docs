# Diver: cours

## Screenshot

![Course list](../../assets/screenshots/diver/en/courses-list.png)

![Expired courses](../../assets/screenshots/diver/en/courses-expired.png)

## Ou le trouver

Menu: **Diver -> Mes cours**

## Ce que tu peux faire

- Voir les cours actifs et expires.
- Ouvrir la progression d'un cours.
- Continuer modules/quizz, examen et skills (si disponibles pour le cours).

## Liste des cours

Etapes typiques:

1. Ouvrir la liste des cours.
2. Selectionner un cours pour ouvrir sa progression.
3. Si un cours manque, verifier aussi la section expiree (si disponible).

## Progression du cours (resume)

Quand tu ouvres un cours, tu arrives sur une page de **progression**. C'est le hub du cours: ce qui est termine et ce qui vient ensuite.

<!-- TODO(screenshot): docs/assets/screenshots/diver/fr/courses-progress.png -->
![Progression du cours (resume)](../../assets/screenshots/diver/en/courses-progress.png)

Etapes typiques:

1. Dans le cours, trouver la prochaine etape (module, quizz, examen, skills).
2. La completer puis revenir au resume de progression.

## Tentatives (quiz/exam/skills)

Les tentatives sont les pages ou tu **fais** l'activite (repondre, envoyer, confirmer).

### Tentative de quiz (module)

<!-- TODO(screenshot): docs/assets/screenshots/diver/fr/courses-quiz-attempt.png -->
![Quiz attempt](../../assets/screenshots/diver/en/courses-quiz-attempt.png)

Etapes typiques:

1. Depuis la progression du cours, ouvre la prochaine etape (module/quizz).
2. Reponds aux questions.
3. Envoie.
4. Ouvre les resultats (si disponible) pour verifier tes reponses.

### Tentative d'examen

<!-- TODO(screenshot): docs/assets/screenshots/diver/fr/courses-exam-attempt.png -->
![Exam attempt](../../assets/screenshots/diver/en/courses-exam-attempt.png)

Note: l'examen devient disponible seulement apres avoir complete les quizz/modules requis et apres activation par un instructeur.

Etapes typiques:

1. Depuis la progression du cours, ouvre **Exam**.
2. Termine l'examen.
3. Envoie et attends la page de resultat.

### Skills

Les skills sont des etapes pratiques qui peuvent demander une confirmation selon la configuration du cours.

<!-- TODO(screenshot): docs/assets/screenshots/diver/fr/courses-skills.png -->
![Skills signatures](../../assets/screenshots/diver/en/courses-skills.png)

Note: tu peux confirmer les skills seulement apres qu'un instructeur les ait marquees comme terminees.

Astuce: si le cours le demande, n'oublie pas de remplir le Dive Log/Logbook lie aux skills avant de confirmer.

## Details de progression (quiz/exam/skills)

Les details de progression sont les pages ou tu consultes les **resultats** (par exemple reponses du quiz ou resultats d'examen).

<!-- TODO(screenshot): docs/assets/screenshots/diver/fr/courses-results.png -->
![Details de progression (resultats)](../../assets/screenshots/diver/en/courses-results.png)

## Problemes frequents

- Redirection vers login: session expiree.
- Acces refuse: email non verifie.
- Cours introuvable: lien ancien ou cours non associe a ton compte.

<details>
<summary>Pour le support (details techniques)</summary>

Liste des cours:

```text
GET https://user.diveraid.com/fr/diver/courses
GET https://user.diveraid.com/fr/diver/courses/expired
```

Progression et tentatives:

```text
GET https://user.diveraid.com/fr/diver/courses/progress/{log_code}
GET https://user.diveraid.com/fr/diver/courses/progress/{log_code}/module/{module}
GET https://user.diveraid.com/fr/diver/courses/progress/{log_code}/exam
GET https://user.diveraid.com/fr/diver/courses/progress/{log_code}/skills
GET https://user.diveraid.com/fr/diver/courses/progress/{log_code}/quiz/{quiz}
GET https://user.diveraid.com/fr/diver/courses/progress/{log_code}/exam/{exam}
GET https://user.diveraid.com/fr/diver/courses/progress/{log_code}/skill
GET https://user.diveraid.com/fr/diver/courses/progress/{log_code}/skill/sign
```

</details>

Suivant: [FREE-Learning shop](free-learnings.md)

