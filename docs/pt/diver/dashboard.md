# Diver: painel

## Screenshot

![Diver dashboard](../../assets/screenshots/diver/en/dashboard.png)

![Library](../../assets/screenshots/diver/en/library.png)

![Profile menu (click on photo)](../../assets/screenshots/diver/en/profile-menu.png)

## Objetivo

O painel e a pagina de entrada da area Diver e normalmente agrega os principais atalhos (cursos, certificados, documentos, etc.).

## Onde encontrar

Menu: **Painel**

## O que fazer aqui (passos tipicos)

1. Verifica os itens em destaque (cursos em curso, notificacoes, prazos e acoes rapidas como **Baixar certificacao (Download Certification)** para baixar o atestado de todas as tuas certificacoes, **Meu Centro de Mergulho (My Diving Center)** para ver/alterar o dive center ou **Formulario medico (Medical Form)** para preencher o formulario medico).
2. Vai a [Meus Cursos](courses.md) para continuar um percurso (abre a lista de cursos, seleciona um curso, retoma o proximo passo: modulo/quiz/exam/skills; se um curso nao aparecer, verifica tambem *Expired* se existir).
3. Vai a **Meus Certificados** para rever cartoes e historico.
4. Vai a **Meu Log Book** para criar ou atualizar os teus logs.

## Barra superior (icones junto a data/hora)

No canto superior direito, junto a data e hora, encontras alguns atalhos:

- **Icones de perfil (Diver / PRO / Dive Center / Distributor):** permitem alternar entre areas.
  Os icones so aparecem se a tua conta tiver a qualificacao/role correspondente (por exemplo, se fores apenas Diver veras apenas o icone Diver).
- **Ao clicar:** es enviado para o painel da area selecionada.
- **Idioma (Language) (EN/IT/DE/FR/ES/NL/ZH/KO/TR/PT/PL):** altera o idioma da interface.
- **Ecran completo (Full screen):** ativa/desativa o modo ecran completo (util em tablet ou apresentacoes).
- **Tema/contraste (Theme/contrast):** altera o aspeto da interface (por exemplo claro/escuro, conforme configuracao).
- **Foto de perfil (conta):** abre o menu da conta.

### O que acontece se eu clicar na minha foto?

Abre o menu da conta (como no screenshot), com estes itens:

- **Meu perfil (My Profile):** detalhes do teu perfil.
- **Minhas tarefas (My Task):** atribuicoes e convites (se disponivel para a tua conta).
- **Meu historico medico (My Medical History):** informacao/formularios medicos (se ativado para a tua conta).
- **Minha seguranca (My Security):** definicoes/consentimentos de seguranca (se disponivel).
- **Minha privacidade (My Privacy):** definicoes de privacidade.
- **Sair (Sign out):** termina a sessao no portal.

Em **Minhas tarefas (My Task)**, normalmente podes:

- Ver convites pendentes e colaboracoes ativas (por exemplo Dive Center staff, Distributor staff, collaborations, translator).
- **Confirm** ou **Dismiss** convites.
- **Stop collaborating** (revogar) quando necessario (normalmente requer escrever uma frase de confirmacao; algumas revogacoes podem oferecer opcoes como apagar classrooms das quais es owner).
- Procurar, ordenar e paginar a lista de colaboracoes (quando disponivel).

## Problemas comuns

- Redirecionado para login: sessao expirada ou nao autenticado.
- Acesso bloqueado/erro: email nao verificado.

## Notas

A home da aplicacao (`/`) redireciona para login.

<details>
<summary>Para suporte (detalhes tecnicos)</summary>

```text
GET https://user.diveraid.com/pt/diver/dashboard
```

</details>

Seguinte: [Documentos Enviados](uploaded-documents.md)
