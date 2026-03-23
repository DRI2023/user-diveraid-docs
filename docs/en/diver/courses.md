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

Typical steps:

1. Inside the course, find the next step to complete (module, quiz, exam, skills).
2. Complete it and return to the progress summary to check advancement.

## Attempts (quiz/exam/skills)

Tips:

- If you open a module and see an empty page or an error, the module may be unavailable for your course or already completed.

## Progress details (quiz/exam/skills)

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
