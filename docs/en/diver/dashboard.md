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

1. Check any highlighted items (ongoing courses, notifications, deadlines, and quick actions such as **Download Certification** to download the certificate for all your certifications, **My Diving Center** to view/change your dive center, or **Medical Form** to fill in your medical form).
2. Go to [Courses](courses.md) to continue a learning path (open your course list, select a course, resume the next step: module/quiz/exam/skills; if a course is missing, also check *Expired* if available).
3. Go to **Certifications** to review cards and history.
4. Go to **Dive logs** to create or update your logs.

## Top bar (icons next to date/time)

In the top-right corner, next to date and time, you will find a few shortcuts:

- **Profile icons (Diver / PRO / Dive Center / Distributor):** they let you switch between areas.
  Icons are shown only if your account has the related qualification/role (for example, if you are only a Diver you will only see the Diver icon).
- **What happens when you click:** you are taken to the dashboard of the selected area.
- **Language (EN/IT/DE/FR/ES/NL/ZH/KO/TR/PT/PL/RU):** switches the UI language.
- **Full screen:** toggles full screen mode (useful on tablets or during presentations).
- **Theme/contrast:** changes the UI appearance (for example light/dark, depending on configuration).
- **Profile photo (account):** opens your account menu.

### What happens if I click my photo?

It opens the account menu (as shown in the screenshot), with these items:

- **My Profile:** your profile details.
- **My Task:** your assignments and invitations (if enabled for your account).
- **My Medical History:** medical-related information/forms (if enabled for your account).
- **My Security:** security-related settings/consents (if available).
- **My Privacy:** privacy settings.
- **Sign out:** logs you out of the portal.

In **My Task**, you can typically:

- Review pending invitations and active collaborations (for example, Dive Center staff, Distributor staff, collaborations, translator tasks).
- **Confirm** or **Dismiss** invitations.
- **Stop collaborating** (revoke) when needed (usually requires typing a confirmation phrase; some revocations may also offer options such as deleting owned classrooms).
- Search, sort, and paginate the collaborations list (when available).

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

Next: [Uploaded documents](uploaded-documents.md)
