# Diver: certifications

## Ou le trouver

Menu : **Mes certifications**

![Liste des certifications](../../assets/screenshots/diver/en/certifications-02.png)

## Liste

Etapes typiques :

1. Ouvrir la liste.
2. Selectionner une certification pour voir les details.
3. Cliquer sur une carte pour afficher les details de l'autre cote (split view).
4. Telecharger la certification en **PDF** ou **PNG**.
5. Si disponible : ouvrir **History/Historique** pour verifier progression et resultats.

![Details (split view)](../../assets/screenshots/diver/en/certifications-01.png)

## Historique

La page historique affiche les details de progression pour une certification.

![Certification history](../../assets/screenshots/diver/en/certifications-history.png)

## Problemes frequents

- Certification manquante : elle n'est peut-etre pas encore associee a ton profil.
- L'historique ne s'ouvre pas : element non disponible ou ancien lien.

<details>
<summary>Pour le support (details techniques)</summary>

```text
GET https://user.diveraid.com/fr/diver/certifications
GET https://user.diveraid.com/fr/diver/certifications/history/{certification}
GET https://user.diveraid.com/fr/diver/certifications/history/{certification}/quiz/{quiz}
GET https://user.diveraid.com/fr/diver/certifications/history/{certification}/exam/{exam}
GET https://user.diveraid.com/fr/diver/certifications/history/{certification}/skills
```

</details>

Suivant : [Awards](awards.md)
