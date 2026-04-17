# Diver: meus cursos

## Screenshot

![Course list](../../assets/screenshots/diver/en/courses-list.png)

![Expired courses](../../assets/screenshots/diver/en/courses-expired.png)

## Onde encontrar

Menu: **Diver -> Meus Cursos**

## O que podes fazer

- Ver cursos ativos e expirados.
- Abrir o progresso de um curso.
- Continuar modulos/quizzes, exam e skills (quando disponivel para o curso).

## Lista de cursos

Passos tipicos:

1. Abre a lista de cursos.
2. Seleciona um curso para abrir o progresso.
3. Se um curso nao aparecer, verifica tambem a secao de expirados (se existir).

## Progresso do curso (resumo)

Ao abrir um curso, es levado para a pagina de **progresso**. Esta pagina e o hub do curso: o que ja foi concluido e o que vem a seguir.

<!-- TODO(screenshot): docs/assets/screenshots/diver/pt/courses-progress.png -->
![Progresso do curso (resumo)](../../assets/screenshots/diver/en/courses-progress.png)

Passos tipicos:

1. No curso, encontra o proximo passo (modulo, quiz, exam, skills).
2. Conclui e volta ao resumo do progresso para verificar o avancar.

## Tentativas (quiz/exam/skills)

As tentativas sao as paginas onde **fazes** a atividade (responder, submeter, confirmar).

### Tentativa de quiz (modulo)

<!-- TODO(screenshot): docs/assets/screenshots/diver/pt/courses-quiz-attempt.png -->
![Quiz attempt](../../assets/screenshots/diver/en/courses-quiz-attempt.png)

Passos tipicos:

1. No progresso do curso, abre o proximo passo (modulo/quiz).
2. Responde as perguntas.
3. Submete.
4. Abre os resultados (se disponivel) para rever as respostas.

### Tentativa de exame

<!-- TODO(screenshot): docs/assets/screenshots/diver/pt/courses-exam-attempt.png -->
![Exam attempt](../../assets/screenshots/diver/en/courses-exam-attempt.png)

Nota: o exame so fica disponivel depois de concluir os quizzes/modulos obrigatorios e depois de um instrutor o habilitar.

Passos tipicos:

1. No progresso do curso, abre **Exam**.
2. Conclui o exame.
3. Submete e aguarda a pagina de resultados.

### Skills

As skills sao passos praticos que podem exigir confirmacao conforme a configuracao do curso.

<!-- TODO(screenshot): docs/assets/screenshots/diver/pt/courses-skills.png -->
![Skills signatures](../../assets/screenshots/diver/en/courses-skills.png)

Nota: so podes confirmar skills depois de um instrutor as marcar como concluidas.

Dica: se o curso exigir, nao te esquecas de preencher o Dive Log/Logbook relacionado com as skills antes de confirmar.

## Detalhes do progresso (quiz/exam/skills)

Os detalhes do progresso sao as paginas onde revês **resultados** (por exemplo respostas do quiz ou resultados do exame).

<!-- TODO(screenshot): docs/assets/screenshots/diver/pt/courses-results.png -->
![Detalhes do progresso (resultados)](../../assets/screenshots/diver/en/courses-results.png)

## Problemas comuns

- Redirecionado para login: sessao expirada.
- Acesso negado: email nao verificado.
- Curso nao encontrado: link antigo ou curso nao associado ao utilizador.

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

Proximo: [FREE-Learning shop](free-learnings.md)

