# Diver: dashboard

## Screenshot

![Diver dashboard](../../assets/screenshots/diver/en/dashboard.png)

![Library](../../assets/screenshots/diver/en/library.png)

![Profile menu (click on photo)](../../assets/screenshots/diver/en/profile-menu.png)

## Purpose

The dashboard is the entry page for the Diver area and typically aggregates the main links (courses, certifications, documents, etc.).

## Where to find it

Menu: **Diver -> Dashboard**

## What to do here (typical steps)

1. Check any highlighted items (ongoing courses, notifications, deadlines).
2. Go to **Courses** to continue a learning path.
3. Go to **Certifications** to review cards and history.
4. Go to **Dive logs** to create or update your logs.

## Top bar (icons next to date/time)

In the top-right corner, next to date and time, you will find a few shortcuts:

- **Profile icons (Diver / PRO / Dive Center / Distributor):** they let you switch between areas.
  Icons are shown only if your account has the related qualification/role (for example, if you are only a Diver you will only see the Diver icon).
- **What happens when you click:** you are taken to the dashboard of the selected area.
- **Language (IT/EN):** switches the UI language.
- **Full screen:** toggles full screen mode (useful on tablets or during presentations).
- **Theme/contrast:** changes the UI appearance (for example light/dark, depending on configuration).
- **Profile photo (account):** opens your account menu.

### What happens if I click my photo?

It opens the account menu (as shown in the screenshot), with these items:

- **My Profile:** your profile details.
- **My Activities:** a summary of your portal activity.
- **My Medical History:** medical-related information/forms (if enabled for your account).
- **My Security:** security-related settings/consents (if available).
- **My Privacy:** privacy settings.
- **Sign out:** logs you out of the portal.

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
