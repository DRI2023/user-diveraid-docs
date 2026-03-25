# 다이버: 스토어

다이버 스토어는 보통 코스를 구매할 때 사용합니다.

## 어디에서 찾을 수 있나요

메뉴: **다이버 -> 스토어**

## 스토어 홈

일반적인 단계:

1. 스토어를 엽니다.
2. 코스를 선택합니다.
3. checkout으로 이동합니다.

![Store](../../assets/screenshots/diver/en/store.png)

## 코스 checkout 및 주문

일반적인 단계:

1. checkout 화면에서 주문을 확인합니다.
2. 결과 페이지가 표시될 때까지 기다립니다.

## 결제 결과

## 자주 발생하는 문제

- 결과가 `fail`로 표시됨: 다시 시도하거나 결제 수단을 확인합니다.
- checkout에 접근할 수 없음: 코스가 제공되지 않거나 내 프로필에서는 구매할 수 없는 코스일 수 있습니다.

<details>
<summary>기술 지원 (기술 정보)</summary>

```text
GET https://user.diveraid.com/ko/diver/store
GET https://user.diveraid.com/ko/diver/store/course/{course}/checkout
GET https://user.diveraid.com/ko/diver/store/course/{course}/order
GET https://user.diveraid.com/ko/diver/store/course/success
GET https://user.diveraid.com/ko/diver/store/course/fail
```

</details>

다음: [레이드 양식](forms.md)
