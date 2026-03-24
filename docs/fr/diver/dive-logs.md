# Diver: dive logs

## Ou le trouver

Menu : **Mon carnet de plongee**

## Liste

![Dive logs list](../../assets/screenshots/diver/en/dive-logs.png)

## Creer

Etapes typiques :

1. Clique **New** pour creer un dive log.
2. Renseigne les champs requis et sauvegarde.
3. Si tu viens d'un contexte specifique (ex. skills), le flux peut etre pre-rempli.

## Voir et mettre a jour

## Problemes frequents

- Log introuvable : il peut avoir ete supprime ou non associe a ton profil.
- Erreur de mise a jour : donnees invalides ou permissions manquantes.

<details>
<summary>Pour le support (details techniques)</summary>

```text
GET https://user.diveraid.com/fr/diver/dive_log
GET https://user.diveraid.com/fr/diver/dive_log/new
GET https://user.diveraid.com/fr/diver/dive_log/new_log/{skillLog?}/{skill?}
GET https://user.diveraid.com/fr/diver/dive_log/view/{diveLog}
GET https://user.diveraid.com/fr/diver/dive_log/update/{diveLog}
```

</details>

Suivant : [Store](store.md)
