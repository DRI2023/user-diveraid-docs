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

1. 강조 표시된 항목(진행 중 코스, 알림, 마감 및 **인증서 다운로드 (Download Certification)**로 모든 인증서 다운로드, **내 다이빙 센터 (My Diving Center)**로 다이빙 센터 확인/변경, **의료 양식 (Medical Form)**으로 의료 양식 작성 같은 빠른 작업)이 있는지 확인합니다.
2. 학습을 이어가려면 [내 코스](courses.md)로 이동합니다(코스 목록을 열고 코스를 선택해 progress를 연 다음, 다음 단계: 모듈/퀴즈/시험/스킬을 진행; 코스가 보이지 않으면 만료된 코스(Expired) 섹션도 확인).
3. 카드와 이력을 확인하려면 **내 인증**으로 이동합니다.
4. 로그를 생성/수정하려면 **내 다이빙 로그**로 이동합니다.

## 상단 바 (날짜/시간 옆 아이콘)

오른쪽 상단(날짜/시간 옆)에는 몇 가지 바로가기가 있습니다:

- **프로필 아이콘 (Diver / PRO / Dive Center / Distributor):** 영역을 전환할 수 있습니다.
  해당 아이콘은 계정에 관련 자격/역할이 있을 때만 표시됩니다(예: 다이버만 해당되면 Diver 아이콘만 보입니다).
- **클릭하면:** 선택한 영역의 대시보드로 이동합니다.
- **언어 (Language) (EN/IT/DE/FR/ES/ZH/AR/NL/KO/TR/PT/PL/RU):** UI 언어를 변경합니다.
- **전체 화면 (Full screen):** 전체 화면 모드를 켜거나 끕니다(태블릿/프레젠테이션에 유용).
- **테마/대비 (Theme/contrast):** 화면 테마/대비를 변경합니다(설정에 따라 라이트/다크 등).
- **프로필 사진(계정):** 계정 메뉴를 엽니다.

### 프로필 사진을 누르면 무엇이 열리나요?

스크린샷과 같은 계정 메뉴가 열리며, 다음 항목을 포함합니다:

- **내 프로필 (My Profile):** 프로필 상세 정보.
- **내 작업 (My Task):** 내 할당/초대(계정에서 제공되는 경우).
- **내 의료 기록 (My Medical History):** 의료 관련 정보/양식(계정에서 활성화된 경우).
- **내 보안 (My Security):** 보안 관련 설정/동의(지원되는 경우).
- **내 개인정보 (My Privacy):** 개인정보 설정.
- **로그아웃 (Sign out):** 포털에서 로그아웃.

**내 작업 (My Task)**에서는 보통 다음을 할 수 있습니다:

- 대기 중인 초대와 활성 협업을 확인합니다(예: Dive Center staff, Distributor staff, collaborations, translator).
- 초대를 **Confirm** 또는 **Dismiss** 합니다.
- 필요 시 **Stop collaborating**(철회/해지) 합니다(대개 확인 문구 입력이 필요하며, 일부 해지에서는 소유한 classroom 삭제 같은 옵션이 제공될 수 있습니다).
- collaborations 목록을 검색/정렬/페이지네이션 합니다(가능한 경우).

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

다음: [업로드한 문서](uploaded-documents.md)
