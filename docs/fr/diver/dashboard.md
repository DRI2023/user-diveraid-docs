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

1. Verifie les elements mis en evidence (cours en cours, notifications, echeances et actions rapides comme **Telecharger la certification (Download Certification)** pour telecharger l'attestation de tes certifications, **Mon centre de plongee (My Diving Center)** pour afficher/changer ton centre de plongee ou **Formulaire medical (Medical Form)** pour remplir le formulaire medical).
2. Va dans [Mes cours](courses.md) pour continuer un parcours (ouvre la liste des cours, selectionne un cours, puis reprends la prochaine etape : module/quizz/examen/skills ; si un cours manque, verifie aussi la section *expiree* si disponible).
3. Va dans **Mes certifications** pour consulter les cartes et l'historique.
4. Va dans **Mon carnet de plongee** pour creer ou mettre a jour tes logs.

## Barre du haut (icones pres de la date/heure)

En haut a droite, pres de la date et de l'heure, tu trouves quelques raccourcis :

- **Icones de profil (Diver / PRO / Dive Center / Distributor) :** permettent de basculer entre les zones.
  Les icones apparaissent seulement si ton compte a la qualification/le role correspondant.
- **Au clic :** tu es envoye vers le dashboard de la zone selectionnee.
- **Langue (EN/IT/DE/FR/ES/NL/ZH/PT/PL) :** change la langue de l'interface.
- **Plein ecran :** active/desactive le plein ecran.
- **Theme/contraste :** change l'apparence (par exemple clair/sombre).
- **Photo de profil (compte) :** ouvre le menu du compte.

### Si je clique sur ma photo

Cela ouvre le menu du compte (comme sur la capture) avec des elements tels que :

- **Mon profil (My Profile) :** details de ton profil.
- **Mes taches (My Task) :** tes affectations et invitations (si disponible pour ton compte).
- **Mon historique medical (My Medical History) :** informations/formulaires medicaux (si active).
- **Ma securite (My Security) :** parametres/consentements de securite (si disponible).
- **Ma confidentialite (My Privacy) :** parametres de confidentialite.
- **Deconnexion (Sign out) :** deconnexion.

Dans **Mes taches (My Task)**, tu peux en general :

- Voir les invitations en attente et les collaborations actives (par ex. staff Dive Center, staff Distributor, collaborations, traduction).
- **Confirm** ou **Dismiss** les invitations.
- **Stop collaborating** (revoquer) si besoin (souvent avec une phrase de confirmation; certaines revocations peuvent proposer des options comme supprimer des classrooms dont tu es owner).
- Rechercher, trier et paginer la liste des collaborations (si disponible).

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

Suivant : [Documents telecharges](uploaded-documents.md)
