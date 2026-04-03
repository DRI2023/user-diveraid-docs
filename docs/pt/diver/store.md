# Diver: loja

A loja Diver e normalmente usada para comprar cursos.

## Onde encontrar

Menu: **Loja**

## Pagina inicial

Passos tipicos:

1. Abre a loja.
2. Escolhe um curso.
3. Entra no checkout.

![Store](../../assets/screenshots/diver/en/store.png)

## Checkout e encomenda

Passos tipicos:

1. No checkout, confirma a encomenda.
2. Aguarda a pagina de resultado.

## Resultado do pagamento

## Problemas comuns

- Resultado `fail`: tenta novamente ou verifica o metodo de pagamento.
- Checkout inacessivel: curso nao disponivel ou nao compravel para o teu perfil.

<details>
<summary>Para suporte (detalhes tecnicos)</summary>

```text
GET https://user.diveraid.com/pt/diver/store
GET https://user.diveraid.com/pt/diver/store/course/{course}/checkout
GET https://user.diveraid.com/pt/diver/store/course/{course}/order
GET https://user.diveraid.com/pt/diver/store/course/success
GET https://user.diveraid.com/pt/diver/store/course/fail
```

</details>

Seguinte: [Formulários RAID](forms.md)
