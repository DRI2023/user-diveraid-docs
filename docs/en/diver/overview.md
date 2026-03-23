# Diver: overview

The **Diver** area is the part of the app dedicated to the diver (end user).

## Examples (screenshots)

### Dashboard

![Diver dashboard](/assets/screenshots/diver/en/dashboard.png)

### Course list

![Course list](/assets/screenshots/diver/en/courses-list.png)

## Getting started

1. Sign in with your account.
2. Go to **Diver -> Dashboard**.
3. From there, go to the main sections: Courses, Certifications, Documents, Dive logs, Store.

## Where to find it

Menu: **Diver**

Main pages:

- Overview (this page)
- Dashboard
- Documents
- Courses
- Certifications
- Awards
- Dive Logs
- Store
- Forms

## Typical workflows

1. Follow a course: **Courses** -> open a course -> complete the next steps.
2. Check a certification: **Certifications** -> open a certification -> review history.
3. Create a dive log: **Dive Logs** -> New -> fill in -> save -> review/update.
4. Buy a course: **Store** -> choose course -> checkout -> confirm -> check result.

## If something goes wrong

- Redirected to login: sign in again (session may have expired).
- Access blocked: make sure your email is verified.

<details>
<summary>For support (technical details)</summary>

Diver pages use a language prefix in the URL:

```text
/{locale}/diver/...
```

Examples:

```text
/it/diver/dashboard
/en/diver/dashboard
```

There are also signed links (typically from emails) that redirect:

```text
/actions/diver/certifications
/actions/diver/awards
/actions/diver/progress/{log_code}
```

</details>

Next: [Dashboard](dashboard.md)
