# 다이버: 대시보드

## 스크린샷

![Diver dashboard](../../assets/screenshots/diver/en/dashboard.png)

![Library](../../assets/screenshots/diver/en/library.png)

![Profile menu (click on photo)](../../assets/screenshots/diver/en/profile-menu.png)

## 목적

대시보드는 다이버(Diver) 영역의 시작 페이지이며, 코스/인증/문서 등 주요 링크를 한곳에 모아 보여줍니다.

## 어디에서 찾을 수 있나요

메뉴: **다이버 -> 대시보드**

## 여기서 할 일 (일반적인 단계)

1. 강조 표시된 항목(진행 중 코스, 알림, 마감 등)이 있는지 확인합니다.
2. 학습을 이어가려면 **내 코스**로 이동합니다.
3. 카드와 이력을 확인하려면 **내 인증**으로 이동합니다.
4. 로그를 생성/수정하려면 **내 다이빙 로그**로 이동합니다.

## 상단 바 (날짜/시간 옆 아이콘)

오른쪽 상단(날짜/시간 옆)에는 몇 가지 바로가기가 있습니다:

- **프로필 아이콘 (Diver / PRO / Dive Center / Distributor):** 영역을 전환할 수 있습니다.
  해당 아이콘은 계정에 관련 자격/역할이 있을 때만 표시됩니다(예: 다이버만 해당되면 Diver 아이콘만 보입니다).
- **클릭하면:** 선택한 영역의 대시보드로 이동합니다.
- **Language (EN/IT/DE/FR/ES/NL/ZH/KO):** UI 언어를 변경합니다.
- **Full screen:** 전체 화면 모드를 켜거나 끕니다(태블릿/프레젠테이션에 유용).
- **Theme/contrast:** 화면 테마/대비를 변경합니다(설정에 따라 라이트/다크 등).
- **프로필 사진(계정):** 계정 메뉴를 엽니다.

### 프로필 사진을 누르면 무엇이 열리나요?

스크린샷과 같은 계정 메뉴가 열리며, 다음 항목을 포함합니다:

- **My Profile:** 프로필 상세 정보.
- **My Activities:** 포털 활동 요약.
- **My Medical History:** 의료 관련 정보/양식(계정에서 활성화된 경우).
- **My Security:** 보안 관련 설정/동의(지원되는 경우).
- **My Privacy:** 개인정보 설정.
- **Sign out:** 포털에서 로그아웃.

## 자주 발생하는 문제

- 로그인 화면으로 이동됨: 세션이 만료되었거나 인증되지 않았습니다.
- 접근 차단/오류: 이메일이 인증되지 않았습니다.

## 노트

앱 홈(`/`)은 로그인 화면으로 리다이렉트됩니다.

<details>
<summary>기술 지원 (기술 정보)</summary>

```text
GET https://user.diveraid.com/ko/diver/dashboard
```

</details>

다음: [내 문서](documents.md)
