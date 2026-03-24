# Diver: dashboard

## Screenshot

![Diver dashboard](../../assets/screenshots/diver/en/dashboard.png)

![Library](../../assets/screenshots/diver/en/library.png)

![Profile menu (click on photo)](../../assets/screenshots/diver/en/profile-menu.png)

## Objectif

Le dashboard est la page d'entree de la zone Diver et regroupe en general les liens principaux (courses, certifications, documents, etc.).

## Ou le trouver

Menu : **Tableau de bord**

## Que faire ici (etapes typiques)

1. Verifie les elements mis en evidence (cours en cours, notifications, echeances).
2. Va dans **Courses** pour continuer un parcours.
3. Va dans **Certifications** pour consulter les cartes et l'historique.
4. Va dans **Dive Logs** pour creer ou mettre a jour tes logs.

## Barre du haut (icones pres de la date/heure)

En haut a droite, pres de la date et de l'heure, tu trouves quelques raccourcis :

- **Icones de profil (Diver / PRO / Dive Center / Distributor) :** permettent de basculer entre les zones.
  Les icones apparaissent seulement si ton compte a la qualification/le role correspondant.
- **Au clic :** tu es envoye vers le dashboard de la zone selectionnee.
- **Langue (IT/EN/DE/FR/ES/NL) :** change la langue de l'interface.
- **Plein ecran :** active/desactive le plein ecran.
- **Theme/contraste :** change l'apparence (par exemple clair/sombre).
- **Photo de profil (compte) :** ouvre le menu du compte.

### Si je clique sur ma photo

Cela ouvre le menu du compte (comme sur la capture) avec des elements tels que :

- **My Profile / Il mio profilo :** details de ton profil.
- **My Activities :** resume de ton activite sur le portail.
- **My Medical History :** informations/formulaires medicaux (si active).
- **My Security :** parametres/consentements de securite (si disponible).
- **My Privacy :** parametres de confidentialite.
- **Sign out / Disconnetti :** deconnexion.

## Problemes frequents

- Redirection vers login : session expiree ou non authentifie.
- Acces bloque/erreur : email non verifie.

## Notes

La home de l'application (`/`) redirige vers le login.

<details>
<summary>Pour le support (details techniques)</summary>

```text
GET https://user.diveraid.com/fr/diver/dashboard
```

</details>

Suivant : [Documents](documents.md)
