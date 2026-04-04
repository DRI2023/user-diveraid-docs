# Diver: e-learning

## O que e

E-Learning sao conteudos de formacao acessiveis por um fluxo simplificado (normalmente sem compra).

## Onde encontrar

Menu: **E-Learning**

![FREE-Learning shop](../../assets/screenshots/diver/en/free-learnings-store.png)

## Ativar (enroll)

Passos tipicos:

1. Abre a pagina de ativacao (enroll).
2. Seleciona o conteudo para ativar (se necessario).
3. Depois de ativar, volta a lista para comecar.

## Lista

Passos tipicos:

1. Abre a lista.
2. Seleciona um item para abrir o progresso.

![Free learnings](../../assets/screenshots/diver/en/free-learnings-list.png)

## Progresso

Abre um item para ver o progresso e continuar onde ficaste.

## Problemas comuns

- Nenhum conteudo visivel: podes nao estar ativado ainda (usa a pagina de enroll).
- Redirecionado para login: sessao expirada.

<details>
<summary>Para suporte (detalhes tecnicos)</summary>

```text
GET https://user.diveraid.com/pt/diver/free-learnings/enroll
GET https://user.diveraid.com/pt/diver/free-learnings
GET https://user.diveraid.com/pt/diver/free-learnings/progress/{log_code}/
GET https://user.diveraid.com/pt/diver/free-learnings/progress/{log_code}/module/{module}
GET https://user.diveraid.com/pt/diver/free-learnings/progress/{log_code}/quiz/{quiz}
```

</details>

Seguinte: [Meus Certificados](certifications.md)

