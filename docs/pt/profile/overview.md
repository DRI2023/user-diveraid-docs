# Meu Perfil: visao geral

A secao **Meu Perfil** esta disponivel em qualquer area (Diver/Professional/Dive Center/Distributor) atraves do menu da foto de perfil.

## Onde encontrar

No canto superior direito: clique na **foto de perfil** -> **Meu Perfil** (e itens relacionados).

## Paginas principais

- Visao geral (esta pagina)
- Meu Perfil
- Minhas Tarefas (assignments)
- Meu Historico Medico
- Minha Seguranca
- Minha Privacidade

## Notas

- Alguns itens podem aparecer apenas se estiverem ativados na sua conta (por ex. **Minhas Tarefas**).

<details>
<summary>Para suporte (detalhes tecnicos)</summary>

As paginas de perfil usam o prefixo de idioma e um caminho fixo:

```text
GET https://user.diveraid.com/pt/user/profile
GET https://user.diveraid.com/pt/user/profile/assignments
GET https://user.diveraid.com/pt/user/profile/medical
GET https://user.diveraid.com/pt/user/profile/security
GET https://user.diveraid.com/pt/user/profile/privacy
```

Terminar sessao:

```text
POST https://user.diveraid.com/pt/logout
```

</details>

Seguinte: [Meu Perfil](my-profile.md)
