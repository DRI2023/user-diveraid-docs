# 내 프로필: 개요

**내 프로필** 섹션은 어떤 영역(Diver/Professional/Dive Center/Distributor)에서도 프로필 사진 메뉴에서 접근할 수 있습니다.

## 위치

오른쪽 상단: **프로필 사진** 클릭 -> **내 프로필**(및 관련 항목).

## 주요 페이지

- 개요(이 페이지)
- 내 프로필
- 내 할 일 (assignments)
- 나의 병력
- 내 보안
- 내 개인정보

## 참고

- 일부 항목은 계정에 활성화된 경우에만 표시될 수 있습니다(예: **내 할 일**).

<details>
<summary>지원용(기술 세부사항)</summary>

프로필 페이지는 언어 프리픽스와 고정 경로를 사용합니다:

```text
GET https://user.diveraid.com/ko/user/profile
GET https://user.diveraid.com/ko/user/profile/assignments
GET https://user.diveraid.com/ko/user/profile/medical
GET https://user.diveraid.com/ko/user/profile/security
GET https://user.diveraid.com/ko/user/profile/privacy
```

로그아웃:

```text
POST https://user.diveraid.com/ko/logout
```

</details>

다음: [내 프로필](my-profile.md)
