# Diver: visao geral

A area **Diver** e a parte da aplicacao dedicada ao mergulhador (utilizador final).

## Exemplos (screenshots)

### Painel

![Diver dashboard](../../assets/screenshots/diver/en/dashboard.png)

### Lista de cursos

![Course list](../../assets/screenshots/diver/en/courses-list.png)

## Primeiros passos

1. Faz login com a tua conta.
2. Vai a **Diver -> Painel**.
3. A partir dai, entra nas secoes principais: **Meus Cursos**, **Meus Certificados**, **Documentos Enviados**, **Meus Documentos**, **Meu Log Book**, **Loja**.

## Onde encontrar

Menu: **Diver**

Paginas principais:

- Visao geral (esta pagina)
- Painel
- Documentos Enviados
- Meus Documentos
- Meus Cursos
- Meus Certificados
- Minha Biblioteca
- Meu Log Book
- Loja
- Formulários RAID

## Fluxos tipicos

1. Seguir um curso: **Meus Cursos** -> abre um curso -> conclui os proximos passos.
2. Ver uma certificacao: **Meus Certificados** -> abre uma certificacao -> revê o historico.
3. Criar um log: **Meu Log Book** -> New -> preenche -> grava -> revê/atualiza.
4. Comprar um curso: **Loja** -> escolhe um curso -> checkout -> confirma -> verifica o resultado.

## Se algo correr mal

- Redirecionado para login: faz login novamente (a sessao pode ter expirado).
- Acesso bloqueado: certifica-te de que o teu email esta verificado.

<details>
<summary>Para suporte (detalhes tecnicos)</summary>

As paginas Diver usam um prefixo de idioma no URL:

```text
GET https://user.diveraid.com/pt/diver/...
```

Exemplos:

```text
GET https://user.diveraid.com/pt/diver/dashboard
```

Existem tambem links assinados (tipicamente a partir de emails) que redirecionam:

```text
GET https://user.diveraid.com/actions/diver/certifications
GET https://user.diveraid.com/actions/diver/awards
GET https://user.diveraid.com/actions/diver/progress/{log_code}
```

</details>

Seguinte: [Painel](dashboard.md)
