# Diver: store

The Diver store is typically used to purchase courses.

## Where to find it

Menu: **Diver -> Store**

## Store home

Typical steps:

1. Open the store.
2. Choose a course.
3. Enter checkout.

![Store](/assets/screenshots/diver/en/store.png)

## Course checkout and order

Typical steps:

1. From checkout, confirm the order.
2. Wait for the result page.

## Payment result

## Common issues

- `fail` result: try again or check your payment method.
- Checkout not accessible: course not available or not purchasable for your profile.

<details>
<summary>For support (technical details)</summary>

```text
GET /{locale}/diver/store
GET /{locale}/diver/store/course/{course}/checkout
GET /{locale}/diver/store/course/{course}/order
GET /{locale}/diver/store/course/success
GET /{locale}/diver/store/course/fail
```

</details>

Next: [Forms](forms.md)
