# Diver: meus cursos

## Screenshot

![Course list](../../assets/screenshots/diver/en/courses-list.png)

![Expired courses](../../assets/screenshots/diver/en/courses-expired.png)

## Onde encontrar

Menu: **Meus Cursos**

## O que podes fazer

- Ver cursos ativos e expirados.
- Abrir o progresso de um curso.
- Continuar modulos/quizzes, exam e skills (quando disponivel para o curso).

## Lista de cursos

Passos tipicos:

1. Abre a lista de cursos.
2. Seleciona um curso para abrir o progresso.
3. Se um curso nao aparecer, verifica tambem a secao de expirados (se existir).

Dentro do curso:

1. Encontra o proximo passo a concluir (modulo, quiz, exam, skills).
2. Conclui e volta ao resumo do progresso para verificar o avancar.

## Tentativas (quiz/exam/skills)

Dica:

- Se abrires um modulo e vires uma pagina vazia ou um erro, o modulo pode nao estar disponivel para o teu curso ou ja estar concluido.

## Problemas comuns

- Redirecionado para login: sessao expirada.
- Acesso negado: email nao verificado.
- Curso nao encontrado: link antigo ou curso nao associado ao teu utilizador.

<details>
<summary>Para suporte (detalhes tecnicos)</summary>

Lista de cursos:

```text
GET https://user.diveraid.com/pt/diver/courses
GET https://user.diveraid.com/pt/diver/courses/expired
```

Progresso e tentativas:

```text
GET https://user.diveraid.com/pt/diver/courses/progress/{log_code}
GET https://user.diveraid.com/pt/diver/courses/progress/{log_code}/module/{module}
GET https://user.diveraid.com/pt/diver/courses/progress/{log_code}/exam
GET https://user.diveraid.com/pt/diver/courses/progress/{log_code}/skills
GET https://user.diveraid.com/pt/diver/courses/progress/{log_code}/quiz/{quiz}
GET https://user.diveraid.com/pt/diver/courses/progress/{log_code}/exam/{exam}
GET https://user.diveraid.com/pt/diver/courses/progress/{log_code}/skill
GET https://user.diveraid.com/pt/diver/courses/progress/{log_code}/skill/sign
```

</details>

Seguinte: [E-Learning](free-learnings.md)

