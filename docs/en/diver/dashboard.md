# Diver: dashboard

## Screenshot

![Diver dashboard](../../assets/screenshots/diver/en/dashboard.png)

![Library](../../assets/screenshots/diver/en/library.png)

## Purpose

The dashboard is the entry page for the Diver area and typically aggregates the main links (courses, certifications, documents, etc.).

## Where to find it

Menu: **Diver -> Dashboard**

## What to do here (typical steps)

1. Check any highlighted items (ongoing courses, notifications, deadlines).
2. Go to **Courses** to continue a learning path.
3. Go to **Certifications** to review cards and history.
4. Go to **Dive logs** to create or update your logs.

## Common issues

- Redirected to login: session expired or not authenticated.
- Access blocked/error: email not verified.

## Notes

The application home (`/`) redirects to login.

<details>
<summary>For support (technical details)</summary>

```text
GET https://user.diveraid.com/en/diver/dashboard
```

</details>

Next: [Documents](documents.md)
