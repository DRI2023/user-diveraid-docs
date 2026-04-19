# Mon profil : apercu

La section **Mon profil** est accessible depuis n’importe quelle zone (Diver/Professional/Dive Center/Distributor) via le menu de votre photo de profil.

## Ou le trouver

En haut a droite : cliquez sur votre **photo de profil** -> **Mon profil** (et elements associes).

## Pages principales

- Apercu (cette page)
- Mon profil
- Mes taches (assignments)
- Mes antecedents medicaux
- Ma securite
- Ma confidentialite

## Notes

- Certains elements peuvent apparaitre uniquement s’ils sont actives pour votre compte (par exemple **Mes taches**).

<details>
<summary>Pour support (details techniques)</summary>

Les pages profil utilisent le prefixe de langue et un chemin fixe :

```text
GET https://user.diveraid.com/fr/user/profile
GET https://user.diveraid.com/fr/user/profile/assignments
GET https://user.diveraid.com/fr/user/profile/medical
GET https://user.diveraid.com/fr/user/profile/security
GET https://user.diveraid.com/fr/user/profile/privacy
```

Deconnexion :

```text
POST https://user.diveraid.com/fr/logout
```

</details>

Suivant : [Mon profil](my-profile.md)
