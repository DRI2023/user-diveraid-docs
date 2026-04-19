# Diver: courses

## Screenshot

![Course list](../../assets/screenshots/diver/en/courses-list.png)

![Expired courses](../../assets/screenshots/diver/en/courses-expired.png)

## Where to find it

Menu: **Diver -> Courses**

## What you can do

- View active and expired courses.
- Open course progress.
- Continue modules/quizzes, exam and skills (when available for the course).

## Course list

Typical steps:

1. Open the course list.
2. Select a course to open its progress.
3. If a course is missing, also check the expired section (if available).

## Course progress (summary)

When you open a course, you are taken to a **progress** page. This page is the hub for the course: it shows what you have completed and what is next.
![Course progress (summary)](../../assets/screenshots/diver/en/courses-progress.png)

Typical steps:

1. Inside the course, find the next step to complete (module, quiz, exam, skills).
2. Complete it and return to the progress summary to check advancement.

## Attempts (quiz/exam/skills)

Attempts are the pages where you **do** the activity (answer questions, submit, confirm).

### Quiz attempt (module)
![Quiz attempt](../../assets/screenshots/diver/en/courses-quiz-attempt.png)

Typical steps:

1. From course progress, open the next module/quiz step.
2. Answer the questions.
3. Submit.
4. Open results (if available) to review your answers.

### Exam attempt
![Exam attempt](../../assets/screenshots/diver/en/courses-exam-attempt.png)

Note: the exam becomes available only after you complete the required quizzes/modules, and after an instructor enables it.

Typical steps:

1. From course progress, open **Exam**.
2. Complete the exam.
3. Submit and wait for the result page.

### Skills

Skills are practical steps that can require confirmation/signature depending on how the course is configured.
![Skills signatures](../../assets/screenshots/diver/en/courses-skills.png)

Note: you can confirm/sign skills only after an instructor marks them as completed.

Tip: if the course requires it, remember to create/complete the related dive logbook entry for the skills before confirming.

## Progress details (quiz/exam/skills)

Progress details are the pages where you **review results** (for example the quiz answers or exam results).
![Progress details (results)](../../assets/screenshots/diver/en/courses-results.png)

## Common issues

- Redirected to login: session expired.
- Access denied: email not verified.
- Course not found: old link or course not associated with your user.

<details>
<summary>For support (technical details)</summary>

Course list:

```text
GET https://user.diveraid.com/en/diver/courses
GET https://user.diveraid.com/en/diver/courses/expired
```

Progress and attempts:

```text
GET https://user.diveraid.com/en/diver/courses/progress/{log_code}
GET https://user.diveraid.com/en/diver/courses/progress/{log_code}/module/{module}
GET https://user.diveraid.com/en/diver/courses/progress/{log_code}/exam
GET https://user.diveraid.com/en/diver/courses/progress/{log_code}/skills
GET https://user.diveraid.com/en/diver/courses/progress/{log_code}/quiz/{quiz}
GET https://user.diveraid.com/en/diver/courses/progress/{log_code}/exam/{exam}
GET https://user.diveraid.com/en/diver/courses/progress/{log_code}/skill
GET https://user.diveraid.com/en/diver/courses/progress/{log_code}/skill/sign
```

</details>

Next: [Free Learnings](free-learnings.md)
