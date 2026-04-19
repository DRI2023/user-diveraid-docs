# 다이버: 내 코스

## 스크린샷

![Course list](../../assets/screenshots/diver/en/courses-list.png)

![Expired courses](../../assets/screenshots/diver/en/courses-expired.png)

## 어디에서 찾을 수 있나요

메뉴: **다이버 -> 내 코스**

## 할 수 있는 일

- 진행 중인 코스와 만료된 코스를 확인합니다.
- 코스 진행 상황(progress)을 엽니다.
- (코스에서 제공되는 경우) 모듈/퀴즈, 시험(exam), 스킬(skills)을 계속 진행합니다.

## 코스 목록

일반적인 단계:

1. 코스 목록을 엽니다.
2. 코스를 선택해 진행 상황을 엽니다.
3. 코스가 보이지 않으면(가능한 경우) 만료된 코스(Expired) 섹션도 확인합니다.

## 코스 진행 (요약)

코스를 열면 **진행(progress)** 페이지로 이동합니다. 이 페이지는 코스의 허브로, 완료한 내용과 다음 단계를 보여줍니다.
![코스 진행 (요약)](../../assets/screenshots/diver/en/courses-progress.png)

일반적인 단계:

1. 코스 안에서 다음으로 완료할 단계(모듈, 퀴즈, 시험, 스킬)를 찾습니다.
2. 완료한 뒤 진행 요약 화면으로 돌아가 진행 상태를 확인합니다.

## 시도(quiz/exam/skills)

시도는 활동을 **수행**하는 페이지입니다(답변, 제출, 확인).

### 퀴즈 시도(모듈)
![퀴즈 시도](../../assets/screenshots/diver/en/courses-quiz-attempt.png)

일반적인 단계:

1. 코스 진행에서 다음 모듈/퀴즈 단계를 엽니다.
2. 질문에 답합니다.
3. 제출합니다.
4. (가능한 경우) 결과 페이지를 열어 답변을 확인합니다.

### 시험 시도
![시험 시도](../../assets/screenshots/diver/en/courses-exam-attempt.png)

안내: 시험은 필요한 퀴즈/모듈을 완료한 후, 그리고 강사가 활성화한 후에만 진행할 수 있습니다.

일반적인 단계:

1. 코스 진행에서 **Exam**을 엽니다.
2. 시험을 완료합니다.
3. 제출하고 결과 페이지를 기다립니다.

### 스킬(skills)

스킬은 코스 설정에 따라 확인/확정이 필요한 실습 단계입니다.
![스킬 서명](../../assets/screenshots/diver/en/courses-skills.png)

안내: 스킬은 강사가 완료로 표시한 후에만 확인/확정할 수 있습니다.

팁: 코스에서 요구한다면, 스킬을 확정하기 전에 관련 Dive Log/Logbook 기록을 작성/완료하세요.

## 진행 상세 (quiz/exam/skills)

진행 상세는 결과를 확인하는 페이지입니다(예: 퀴즈 답변, 시험 결과).
![진행 상세 (결과)](../../assets/screenshots/diver/en/courses-results.png)

## 자주 발생하는 문제

- 로그인으로 이동됨: 세션이 만료되었습니다.
- 접근 거부: 이메일이 인증되지 않았습니다.
- 코스를 찾을 수 없음: 오래된 링크이거나 코스가 계정에 연결되지 않았습니다.

<details>
<summary>지원용 (기술 세부정보)</summary>

코스 목록:

```text
GET https://user.diveraid.com/ko/diver/courses
GET https://user.diveraid.com/ko/diver/courses/expired
```

진행 및 시도:

```text
GET https://user.diveraid.com/ko/diver/courses/progress/{log_code}
GET https://user.diveraid.com/ko/diver/courses/progress/{log_code}/module/{module}
GET https://user.diveraid.com/ko/diver/courses/progress/{log_code}/exam
GET https://user.diveraid.com/ko/diver/courses/progress/{log_code}/skills
GET https://user.diveraid.com/ko/diver/courses/progress/{log_code}/quiz/{quiz}
GET https://user.diveraid.com/ko/diver/courses/progress/{log_code}/exam/{exam}
GET https://user.diveraid.com/ko/diver/courses/progress/{log_code}/skill
GET https://user.diveraid.com/ko/diver/courses/progress/{log_code}/skill/sign
```

</details>

다음: [무료 학습 상점](free-learnings.md)

