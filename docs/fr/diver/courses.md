# Diver: courses

## Screenshot

![Course list](../../assets/screenshots/diver/en/courses-list.png)

![Expired courses](../../assets/screenshots/diver/en/courses-expired.png)

## Ou le trouver

Menu : **Mes cours**

## Ce que tu peux faire

- Voir les cours actifs et expires.
- Ouvrir la progression d'un cours.
- Continuer modules/quizz, examen et skills (si disponibles pour le cours).

## Liste des cours

Etapes typiques :

1. Ouvrir la liste des cours.
2. Selectionner un cours pour ouvrir sa progression.
3. Si un cours manque, verifier aussi la section expiree (si disponible).

Dans un cours :

1. Trouver la prochaine etape (module, quizz, examen, skills).
2. La completer puis revenir au resume de progression.

## Tentatives (quiz/exam/skills)

Astuce :

- Si tu ouvres un module et que tu vois une page vide ou une erreur, le module peut etre indisponible ou deja complete.

## Problemes frequents

- Redirection vers login : session expiree.
- Acces refuse : email non verifie.
- Cours introuvable : ancien lien ou cours non associe a ton utilisateur.

<details>
<summary>Pour le support (details techniques)</summary>

Liste des cours :

```text
GET https://user.diveraid.com/fr/diver/courses
GET https://user.diveraid.com/fr/diver/courses/expired
```

Progression et tentatives :

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

Suivant : [Free Learnings](free-learnings.md)
