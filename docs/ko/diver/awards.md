# 다이버: 내 라이브러리

**내 라이브러리** 페이지에서는 내 인정 카드(awards)를 확인하고, (계정에서 가능할 경우) 주문할 수 있습니다.

## 어디에서 찾을 수 있나요

메뉴: **다이버 -> 내 라이브러리**

![내 라이브러리](../../assets/screenshots/diver/en/awards.png)

## 카드 유형 (Award types)

awards는 크게 두 가지 유형이 있습니다:

**다이버 (logged dives)**

- 100회 로그 기록
- 500회 로그 기록
- 1000회 로그 기록
- 5000회 로그 기록

**프로페셔널 (Professional, certifications issued)**

- Bronze: 인증 발급 100건
- Silver: 인증 발급 500건
- Gold: 인증 발급 1000건
- Platinum: 인증 발급 5000건

## 목록

일반적인 단계:

1. 목록을 엽니다.
2. 카드/award를 선택합니다.
3. 주문 흐름(order flow)을 시작합니다.

## 카드는 어떻게 받나요?

새로운 마일스톤(로그 기록 횟수 또는 인증 발급 건수)에 도달하면, 시스템이 보통 대시보드에 안내 메시지를 표시하고
해당 카드(award)를 주문할 수 있게 합니다.

일반적인 단계:

1. (선택) 검색창으로 특정 award를 찾습니다.
2. 카드/award를 선택합니다.
3. (계정에서 가능하다면) 주문 흐름을 시작합니다.

주문이 성공하면 카드가 발급되며, **내 라이브러리**에서 확인할 수 있습니다.

## 자주 발생하는 문제

- 결과가 `fail`로 표시됨: 다시 주문하거나(흐름에 포함되어 있다면) 결제 수단을 확인합니다.
- award를 사용할 수 없음: 내 프로필 또는 국가에서는 구매가 불가능할 수 있습니다.

<details>
<summary>기술 지원 (기술 정보)</summary>

```text
GET https://user.diveraid.com/ko/diver/awards
GET https://user.diveraid.com/ko/diver/awards/{card}/order
GET https://user.diveraid.com/ko/diver/awards/order/success
GET https://user.diveraid.com/ko/diver/awards/order/fail
```

</details>

다음: [내 다이빙 로그](dive-logs.md)
