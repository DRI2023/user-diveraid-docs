# 다이버: 개요

**다이버(Diver)** 영역은 최종 사용자(다이버)를 위한 앱 기능 구역입니다.

## 예시 (스크린샷)

### 대시보드

![다이버 대시보드](../../assets/screenshots/diver/en/dashboard.png)

### 코스 목록

![코스 목록](../../assets/screenshots/diver/en/courses-list.png)

## 시작하기

1. 계정으로 로그인합니다.
2. **다이버 -> 대시보드**로 이동합니다.
3. 여기서 주요 섹션으로 이동합니다: 내 코스, 내 인증, 내 문서, 내 다이빙 로그, 스토어.

## 어디에서 찾을 수 있나요

메뉴: **다이버**

주요 페이지:

- 개요 (이 페이지)
- 대시보드
- 내 문서
- 내 코스
- 내 인증
- 내 라이브러리
- 내 다이빙 로그
- 스토어
- 레이드 양식

## 일반적인 사용 흐름

1. 코스 진행: **내 코스** -> 코스 열기 -> 다음 단계 완료.
2. 인증 확인: **내 인증** -> 인증 열기 -> 이력/진행 확인.
3. 다이빙 로그 만들기: **내 다이빙 로그** -> **New**(새로 만들기) -> 입력 -> 저장 -> 확인/수정.
4. 코스 구매: **스토어** -> 코스 선택 -> checkout -> 확인 -> 결과 확인.

## 문제가 발생하면

- 로그인 화면으로 이동됨: 세션이 만료되었을 수 있으니 다시 로그인합니다.
- 접근이 차단됨: 이메일 인증이 완료되었는지 확인합니다.

<details>
<summary>기술 지원 (기술 정보)</summary>

다이버 페이지는 URL에 언어 프리픽스를 사용합니다:

```text
GET https://user.diveraid.com/ko/diver/...
```

예시:

```text
GET https://user.diveraid.com/ko/diver/dashboard
```

이메일 등에서 제공되는 서명 링크(리다이렉트)도 있습니다:

```text
GET https://user.diveraid.com/actions/diver/certifications
GET https://user.diveraid.com/actions/diver/awards
GET https://user.diveraid.com/actions/diver/progress/{log_code}
```

</details>

다음: [대시보드](dashboard.md)
