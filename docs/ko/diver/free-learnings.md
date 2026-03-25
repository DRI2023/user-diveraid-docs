# 다이버: 무료 학습 상점

## 무엇인가요

무료 학습(Free learnings)은 간단한 흐름으로 접근할 수 있는 학습 콘텐츠입니다(보통 구매 없이 이용).

## 어디에서 찾을 수 있나요

메뉴: **다이버 -> 무료 학습 상점**

## 등록 (Enroll)

일반적인 단계:

1. 등록(enroll) 페이지를 엽니다.
2. (필요한 경우) 활성화할 콘텐츠를 선택합니다.
3. 등록 후 목록으로 돌아가 학습을 시작합니다.

## 목록

일반적인 단계:

1. 목록을 엽니다.
2. 무료 학습 항목을 선택해 진행 상태를 확인합니다.

![무료 학습 목록](../../assets/screenshots/diver/en/free-learnings-list.png)

## 진행 (Progress)
무료 학습 항목을 열어 진행 상태를 확인하고, 중단했던 지점부터 이어서 진행합니다.

## 자주 발생하는 문제

- 콘텐츠가 보이지 않음: 아직 등록(enroll)되지 않았을 수 있습니다(등록 페이지를 사용).
- 로그인 화면으로 이동됨: 세션이 만료되었습니다.

<details>
<summary>기술 지원 (기술 정보)</summary>

```text
GET https://user.diveraid.com/ko/diver/free-learnings/enroll
GET https://user.diveraid.com/ko/diver/free-learnings
GET https://user.diveraid.com/ko/diver/free-learnings/progress/{log_code}/
GET https://user.diveraid.com/ko/diver/free-learnings/progress/{log_code}/module/{module}
GET https://user.diveraid.com/ko/diver/free-learnings/progress/{log_code}/quiz/{quiz}
```

</details>

다음: [내 인증](certifications.md)
