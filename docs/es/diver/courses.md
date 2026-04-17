# Diver: cursos

## Screenshot

![Course list](../../assets/screenshots/diver/en/courses-list.png)

![Expired courses](../../assets/screenshots/diver/en/courses-expired.png)

## Donde encontrarlo

Menu: **Diver -> Mis cursos**

## Que puedes hacer

- Ver cursos activos y caducados.
- Abrir el progreso de un curso.
- Continuar modulos/quizzes, examen y skills (si estan disponibles).

## Lista de cursos

Pasos tipicos:

1. Abre la lista de cursos.
2. Selecciona un curso para abrir su progreso.
3. Si falta un curso, revisa tambien la seccion de caducados (si existe).

## Progreso del curso (resumen)

Al abrir un curso, entras en la pagina de **progreso**. Es el centro del curso: muestra lo completado y lo que sigue.

<!-- TODO(screenshot): docs/assets/screenshots/diver/es/courses-progress.png -->
![Progreso del curso (resumen)](../../assets/screenshots/diver/en/courses-progress.png)

Pasos tipicos:

1. Dentro del curso, encuentra el siguiente paso (modulo, quiz, examen, skills).
2. Completalo y vuelve al resumen para comprobar el avance.

## Intentos (quiz/exam/skills)

Los intentos son las paginas donde **realizas** la actividad (responder, enviar, confirmar).

### Intento de quiz (modulo)

<!-- TODO(screenshot): docs/assets/screenshots/diver/es/courses-quiz-attempt.png -->
![Quiz attempt](../../assets/screenshots/diver/en/courses-quiz-attempt.png)

Pasos tipicos:

1. Desde el progreso del curso, abre el siguiente paso (modulo/quiz).
2. Responde a las preguntas.
3. Envia.
4. Abre los resultados (si estan disponibles) para revisar.

### Intento de examen

<!-- TODO(screenshot): docs/assets/screenshots/diver/es/courses-exam-attempt.png -->
![Exam attempt](../../assets/screenshots/diver/en/courses-exam-attempt.png)

Nota: el examen solo esta disponible despues de completar los quizzes/modulos requeridos y cuando el instructor lo habilite.

Pasos tipicos:

1. Desde el progreso del curso, abre **Exam**.
2. Completa el examen.
3. Envia y espera la pagina de resultados.

### Skills

Las skills son pasos practicos que pueden requerir confirmacion segun la configuracion del curso.

<!-- TODO(screenshot): docs/assets/screenshots/diver/es/courses-skills.png -->
![Skills signatures](../../assets/screenshots/diver/en/courses-skills.png)

Nota: solo puedes confirmar las skills despues de que el instructor las marque como completadas.

Consejo: si el curso lo requiere, recuerda completar el Dive Log/Logbook relacionado con las skills antes de confirmar.

## Detalles de progreso (quiz/exam/skills)

Los detalles de progreso son las paginas donde revisas **resultados** (por ejemplo respuestas del quiz o resultados del examen).

<!-- TODO(screenshot): docs/assets/screenshots/diver/es/courses-results.png -->
![Detalles de progreso (resultados)](../../assets/screenshots/diver/en/courses-results.png)

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

Siguiente: [FREE-Learning shop](free-learnings.md)

