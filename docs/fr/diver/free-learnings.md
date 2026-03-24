# Diver: free learnings

## De quoi s'agit-il

Les free learnings sont des contenus de formation accessibles via un flux simplifie (generalement sans achat).

## Ou le trouver

Menu : **Boutique FREE-Learning**

## Enroll

Etapes typiques :

1. Ouvrir la page enroll.
2. Selectionner le contenu a activer (si necessaire).
3. Apres l'enroll, revenir a la liste pour demarrer.

## Liste

Etapes typiques :

1. Ouvrir la liste.
2. Selectionner un free learning pour voir la progression.

![Free learnings](../../assets/screenshots/diver/en/free-learnings-list.png)

## Progression

Ouvre un element pour voir la progression et continuer la ou tu t'es arrete.

## Problemes frequents

- Aucun contenu visible : tu n'es peut-etre pas encore enrolled (utilise la page enroll).
- Redirection vers login : session expiree.

<details>
<summary>Pour le support (details techniques)</summary>

```text
GET https://user.diveraid.com/fr/diver/free-learnings/enroll
GET https://user.diveraid.com/fr/diver/free-learnings
GET https://user.diveraid.com/fr/diver/free-learnings/progress/{log_code}/
GET https://user.diveraid.com/fr/diver/free-learnings/progress/{log_code}/module/{module}
GET https://user.diveraid.com/fr/diver/free-learnings/progress/{log_code}/quiz/{quiz}
```

</details>

Suivant : [Certifications](certifications.md)
