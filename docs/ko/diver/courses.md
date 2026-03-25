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

코스 내부에서의 일반적인 단계:

1. 코스 안에서 다음으로 완료할 단계(모듈, 퀴즈, 시험, 스킬)를 찾습니다.
2. 완료한 뒤 진행 요약 화면으로 돌아가 진행 상태를 확인합니다.

## 시도 횟수 (quiz/exam/skills)

팁:

- 모듈을 열었는데 빈 화면이나 오류가 보이면, 해당 모듈이 내 코스에서는 제공되지 않거나 이미 완료된 상태일 수 있습니다.

## 진행 상세 (quiz/exam/skills)

## 자주 발생하는 문제

- 로그인 화면으로 이동됨: 세션이 만료되었습니다.
- 접근 거부: 이메일이 인증되지 않았습니다.
- 코스를 찾을 수 없음: 오래된 링크이거나 내 계정에 연결되지 않은 코스일 수 있습니다.

<details>
<summary>기술 지원 (기술 정보)</summary>

코스 목록:

```text
GET https://user.diveraid.com/ko/diver/courses
GET https://user.diveraid.com/ko/diver/courses/expired
```

진행 및 시도(Attempts):

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
