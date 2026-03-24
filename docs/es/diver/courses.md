# Diver: courses

## Screenshot

![Course list](../../assets/screenshots/diver/en/courses-list.png)

![Expired courses](../../assets/screenshots/diver/en/courses-expired.png)

## Donde encontrarlo

Menu: **Mis cursos**

## Que puedes hacer

- Ver cursos activos y caducados.
- Abrir el progreso de un curso.
- Continuar modulos/quizzes, examen y skills (cuando estan disponibles).

## Lista de cursos

Pasos tipicos:

1. Abre la lista de cursos.
2. Selecciona un curso para ver su progreso.
3. Si falta un curso, revisa tambien la seccion de caducados (si existe).

Dentro del curso:

1. Encuentra el siguiente paso (modulo, quiz, examen, skills).
2. Completalo y vuelve al resumen para comprobar el avance.

## Intentos (quiz/exam/skills)

Consejo:

- Si abres un modulo y ves una pagina vacia o un error, puede que no este disponible para tu curso o ya este completado.

## Problemas comunes

- Te envia al login: sesion caducada.
- Acceso denegado: email no verificado.
- Curso no encontrado: enlace antiguo o curso no asociado a tu usuario.

<details>
<summary>Para soporte (detalles tecnicos)</summary>

Lista de cursos:

```text
GET https://user.diveraid.com/es/diver/courses
GET https://user.diveraid.com/es/diver/courses/expired
```

Progreso e intentos:

```text
GET https://user.diveraid.com/es/diver/courses/progress/{log_code}
GET https://user.diveraid.com/es/diver/courses/progress/{log_code}/module/{module}
GET https://user.diveraid.com/es/diver/courses/progress/{log_code}/exam
GET https://user.diveraid.com/es/diver/courses/progress/{log_code}/skills
GET https://user.diveraid.com/es/diver/courses/progress/{log_code}/quiz/{quiz}
GET https://user.diveraid.com/es/diver/courses/progress/{log_code}/exam/{exam}
GET https://user.diveraid.com/es/diver/courses/progress/{log_code}/skill
GET https://user.diveraid.com/es/diver/courses/progress/{log_code}/skill/sign
```

</details>

Siguiente: [Free Learnings](free-learnings.md)
