# Diver: overview

La zone **Diver** est la partie de l'application dediee au plongeur (utilisateur final).

## Exemples (captures)

### Dashboard

![Diver dashboard](../../assets/screenshots/diver/en/dashboard.png)

### Liste des cours

![Course list](../../assets/screenshots/diver/en/courses-list.png)

## Bien demarrer

1. Connecte-toi avec ton compte.
2. Va sur **Tableau de bord**.
3. Depuis la, ouvre les sections principales : Mes cours, Mes certifications, Documents telecharges/Mes documents, Mon carnet de plongee, Boutique.

## Ou le trouver

Menu : **Diver**

Pages principales :

- Overview (cette page)
- Dashboard
- Documents
- Courses
- Certifications
- Awards
- Dive Logs
- Store
- Forms

## Flux typiques

1. Suivre un cours : **Courses** -> ouvrir un cours -> completer les etapes suivantes.
2. Consulter une certification : **Certifications** -> ouvrir une certification -> consulter l'historique.
3. Creer un dive log : **Dive Logs** -> New -> remplir -> sauvegarder -> revoir/mettre a jour.
4. Acheter un cours : **Store** -> choisir un cours -> checkout -> confirmer -> verifier le resultat.

## Si quelque chose ne va pas

- Redirection vers login : reconnecte-toi (la session peut avoir expire).
- Acces bloque : verifie que ton email est verifie.

<details>
<summary>Pour le support (details techniques)</summary>

Les pages Diver utilisent un prefixe de langue dans l'URL :

```text
GET https://user.diveraid.com/fr/diver/...
```

Exemple :

```text
GET https://user.diveraid.com/fr/diver/dashboard
```

Il existe aussi des liens signes (souvent depuis des emails) qui redirigent :

```text
GET https://user.diveraid.com/actions/diver/certifications
GET https://user.diveraid.com/actions/diver/awards
GET https://user.diveraid.com/actions/diver/progress/{log_code}
```

</details>

Suivant : [Dashboard](dashboard.md)
