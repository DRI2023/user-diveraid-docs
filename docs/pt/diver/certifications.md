# Diver: meus certificados

A pagina **Meus Certificados** mostra os teus cartoes de certificacao e permite descarrega-los (PDF/PNG).

## Onde encontrar

Menu: **Meus Certificados**

![Certifications list](../../assets/screenshots/diver/en/certifications-02.png)

## Lista de certificacoes

Passos tipicos:

1. Abre a lista de certificacoes.
2. Seleciona uma certificacao para ver detalhes.
3. Clica num cartao para mostrar os detalhes do outro lado (split view).
4. Descarrega o cartao como **PDF** ou **PNG**.
5. Se disponivel, abre o **History** para rever progresso e resultados.

![Certification details (split view)](../../assets/screenshots/diver/en/certifications-01.png)

## Historico da certificacao

A pagina de historico mostra detalhes de progresso para uma certificacao (modules/quiz/exam/skills, dependendo do curso).

![Certification history](../../assets/screenshots/diver/en/certifications-history.png)

## Problemas comuns

- Certificacao em falta: pode nao estar associada ao teu perfil ainda.
- Link do historico nao abre: item indisponivel ou link antigo.

<details>
<summary>Para suporte (detalhes tecnicos)</summary>

```text
GET https://user.diveraid.com/pt/diver/certifications
GET https://user.diveraid.com/pt/diver/certifications/history/{certification}
GET https://user.diveraid.com/pt/diver/certifications/history/{certification}/quiz/{quiz}
GET https://user.diveraid.com/pt/diver/certifications/history/{certification}/exam/{exam}
GET https://user.diveraid.com/pt/diver/certifications/history/{certification}/skills
```

</details>

Seguinte: [Minha Biblioteca](awards.md)

