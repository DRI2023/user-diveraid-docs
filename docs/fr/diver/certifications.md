# Diver: certifications

## Ou le trouver

Menu : **Mes certifications**

## Liste

Etapes typiques :

1. Ouvrir la liste.
2. Selectionner une certification pour voir les details.
3. Si disponible : ouvrir l'historique pour verifier progression et resultats.

![Certifications list](../../assets/screenshots/diver/en/certifications.png)

## Historique

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
