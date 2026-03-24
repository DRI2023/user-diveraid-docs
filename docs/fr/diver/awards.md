# Diver: awards

"Awards" inclut typiquement les cartes de reconnaissance et le flux de commande.

## Ou le trouver

Menu : **Awards**

## Liste des awards

Etapes typiques :

1. Ouvrir la liste.
2. Selectionner une carte/un award.
3. Demarrer la commande.

![Awards list](../../assets/screenshots/diver/en/awards.png)

## Commande d'un award

## Problemes frequents

- Resultat `fail` : reessaye ou verifie ta methode de paiement (si applicable).
- Award non disponible : il peut ne pas etre achetable pour ton profil ou ton pays.

<details>
<summary>Pour le support (details techniques)</summary>

```text
GET https://user.diveraid.com/fr/diver/awards
GET https://user.diveraid.com/fr/diver/awards/{card}/order
GET https://user.diveraid.com/fr/diver/awards/order/success
GET https://user.diveraid.com/fr/diver/awards/order/fail
```

</details>

Suivant : [Dive Logs](dive-logs.md)
