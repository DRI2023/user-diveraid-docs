# Diver: meu log book

## Onde encontrar

Menu: **Meu Log Book**

## Lista

![Dive logs list](../../assets/screenshots/diver/en/dive-logs.png)

## Criar

Passos tipicos:

1. Clica em **New** para criar um log.
2. Preenche os campos obrigatorios e grava.
3. Se vieres de um contexto especifico (por exemplo skills), podes ver um fluxo de criacao pre-preenchido.

## Ver e atualizar

## Problemas comuns

- Log nao encontrado: pode ter sido apagado ou nao estar associado ao teu perfil.
- Erro ao atualizar: dados invalidos ou permissoes em falta.

<details>
<summary>Para suporte (detalhes tecnicos)</summary>

```text
GET https://user.diveraid.com/pt/diver/dive_log
GET https://user.diveraid.com/pt/diver/dive_log/new
GET https://user.diveraid.com/pt/diver/dive_log/new_log/{skillLog?}/{skill?}
GET https://user.diveraid.com/pt/diver/dive_log/view/{diveLog}
GET https://user.diveraid.com/pt/diver/dive_log/update/{diveLog}
```

</details>

Seguinte: [Loja](store.md)

