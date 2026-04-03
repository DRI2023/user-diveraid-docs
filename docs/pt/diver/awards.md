# Diver: minha biblioteca

A pagina **Minha Biblioteca** lista os teus cartoes de reconhecimento e permite encomenda-los (quando disponivel na tua conta).

## Onde encontrar

Menu: **Minha Biblioteca**

![My Awards](../../assets/screenshots/diver/en/awards.png)

## Tipos de awards

Existem dois tipos principais:

**Diver (mergulhos registados)**

- 100 mergulhos registados
- 500 mergulhos registados
- 1000 mergulhos registados
- 5000 mergulhos registados

**Professional (certificacoes emitidas)**

- Bronze: 100 certificacoes emitidas
- Silver: 500 certificacoes emitidas
- Gold: 1000 certificacoes emitidas
- Platinum: 5000 certificacoes emitidas

## Lista de awards

Passos tipicos:

1. Abre a lista.
2. Seleciona um cartao/award.
3. Inicia o fluxo de encomenda.

## Como recebes um award

Quando atinges um novo marco (mergulhos registados ou certificacoes emitidas), o sistema normalmente mostra uma mensagem no painel
e permite encomendar o cartao correspondente.

Passos tipicos:

1. (Opcional) Usa a pesquisa para encontrar um award especifico.
2. Seleciona um cartao/award.
3. Inicia o fluxo de encomenda (se disponivel).

Depois de uma encomenda bem-sucedida, o cartao e emitido e aparece em **Minha Biblioteca**.

## Problemas comuns

- Resultado `fail`: tenta novamente ou verifica o metodo de pagamento (se fizer parte do fluxo).
- Award nao disponivel: pode nao estar disponivel para o teu perfil ou pais.

<details>
<summary>Para suporte (detalhes tecnicos)</summary>

```text
GET https://user.diveraid.com/pt/diver/awards
GET https://user.diveraid.com/pt/diver/awards/{card}/order
GET https://user.diveraid.com/pt/diver/awards/order/success
GET https://user.diveraid.com/pt/diver/awards/order/fail
```

</details>

Seguinte: [Meu Log Book](dive-logs.md)

