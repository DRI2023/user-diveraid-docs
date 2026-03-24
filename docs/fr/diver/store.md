# Diver: store

Le store Diver est generalement utilise pour acheter des cours.

## Ou le trouver

Menu : **Boutique**

## Accueil du store

Etapes typiques :

1. Ouvrir le store.
2. Choisir un cours.
3. Aller au checkout.

![Store](../../assets/screenshots/diver/en/store.png)

## Checkout et commande

Etapes typiques :

1. Depuis le checkout, confirmer la commande.
2. Attendre la page de resultat.

## Resultat de paiement

## Problemes frequents

- Resultat `fail` : reessaye ou verifie la methode de paiement.
- Checkout inaccessible : cours non disponible ou non achetable pour ton profil.

<details>
<summary>Pour le support (details techniques)</summary>

```text
GET https://user.diveraid.com/fr/diver/store
GET https://user.diveraid.com/fr/diver/store/course/{course}/checkout
GET https://user.diveraid.com/fr/diver/store/course/{course}/order
GET https://user.diveraid.com/fr/diver/store/course/success
GET https://user.diveraid.com/fr/diver/store/course/fail
```

</details>

Suivant : [Forms](forms.md)
