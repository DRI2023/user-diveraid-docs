# Diver: awards

"Awards" typically includes recognition cards and their order flow.

## Where to find it

Menu: **Diver -> Awards**

## Awards list

Typical steps:

1. Open the awards list.
2. Select a card/award.
3. Start the order flow.

![Awards list](/assets/screenshots/diver/en/awards.png)

## Award order

## Common issues

- `fail` result: try ordering again or check your payment method (if part of the flow).
- Award not available: it may not be purchasable for your profile or country.

<details>
<summary>For support (technical details)</summary>

```text
GET /{locale}/diver/awards
GET /{locale}/diver/awards/{card}/order
GET /{locale}/diver/awards/order/success
GET /{locale}/diver/awards/order/fail
```

</details>

Next: [Dive Logs](dive-logs.md)
