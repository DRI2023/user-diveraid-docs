# Diver: awards

The **Awards** page lists your recognition cards and lets you order them (when available for your account).

## Where to find it

Menu: **Diver -> My Awards**

![My Awards](../../assets/screenshots/diver/en/awards.png)

## Award types

There are two main types of awards:

**Diver (logged dives)**

- 100 logged dives
- 500 logged dives
- 1000 logged dives
- 5000 logged dives

**Professional (certifications issued)**

- Bronze: 100 certifications issued
- Silver: 500 certifications issued
- Gold: 1000 certifications issued
- Platinum: 5000 certifications issued

## Awards list

Typical steps:

1. Open the awards list.
2. Select a card/award.
3. Start the order flow.

## How you get an award

When you reach a new milestone (logged dives or certifications issued), the system typically shows a message on your dashboard
and lets you order the related award card.

Typical steps:

1. (Optional) Use the search bar to find a specific award.
2. Select a card/award.
3. Start the order flow (if available for your account).

After a successful order, the card is issued and you will find it in **My Awards**.

## Common issues

- `fail` result: try ordering again or check your payment method (if part of the flow).
- Award not available: it may not be purchasable for your profile or country.

<details>
<summary>For support (technical details)</summary>

```text
GET https://user.diveraid.com/en/diver/awards
GET https://user.diveraid.com/en/diver/awards/{card}/order
GET https://user.diveraid.com/en/diver/awards/order/success
GET https://user.diveraid.com/en/diver/awards/order/fail
```

</details>

Next: [Dive Logs](dive-logs.md)
