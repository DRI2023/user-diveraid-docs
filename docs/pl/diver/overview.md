# Diver: overview

The **Diver** area is the section of the app for divers (end users).

## Where to find it

Menu: **Diver**

## Main pages

- Overview (this page)
- Dashboard
- Courses
- Certifications
- My Library
- Awards
- Dive Logs
- Uploaded documents
- My Documents
- Free Learnings
- Store
- Forms

## Typical flows

1. Follow a course: **Courses** -> open a course -> complete the steps.
2. Review a certification: **Certifications** -> open a card -> check history (if available).
3. Upload a document: **Uploaded documents** -> add a document -> save -> verify in the list.
4. Add a dive log: **Dive Logs** -> New -> fill -> save -> review/update.

## If something does not work

- Redirected to login: sign in again (session may have expired).
- Access blocked/error: verify your email.

<details>
<summary>For support (technical details)</summary>

Diver pages use a language prefix in the URL:

```text
GET https://user.diveraid.com/pl/diver/...
```

Signed links (typically from email) may redirect:

```text
GET https://user.diveraid.com/actions/diver/certifications
GET https://user.diveraid.com/actions/diver/awards
GET https://user.diveraid.com/actions/diver/progress/{log_code}
```

</details>

Next: [Dashboard](dashboard.md)
