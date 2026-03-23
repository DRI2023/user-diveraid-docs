# Diver: dive logs

## Where to find it

Menu: **Diver -> Dive Logs**

## List

![Dive logs list](/assets/screenshots/diver/en/dive-logs.png)

## Create

Typical steps:

1. Click **New** to create a dive log.
2. Fill required fields and save.
3. If you come from a specific context (e.g. skills), you may see a pre-filled creation flow.

## View and update

## Common issues

- Log not found: it may have been deleted or not associated with your profile.
- Update error: invalid data or missing permissions.

<details>
<summary>For support (technical details)</summary>

```text
GET /{locale}/diver/dive_log
GET /{locale}/diver/dive_log/new
GET /{locale}/diver/dive_log/new_log/{skillLog?}/{skill?}
GET /{locale}/diver/dive_log/view/{diveLog}
GET /{locale}/diver/dive_log/update/{diveLog}
```

</details>

Next: [Store](store.md)
