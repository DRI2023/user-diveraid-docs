# Diver: certifications

The **Certifications** page shows your certification cards and lets you download them (PDF/PNG).

## Where to find it

Menu: **Diver -> My Certifications**

![Certifications list](../../assets/screenshots/diver/en/certifications-02.png)

## Certifications list

Typical steps:

1. Open the certifications list.
2. Select a certification to view details.
3. Click a certification card to show its details on the other side (split view).
4. Download the certification card as **PDF** or **PNG**.
5. If available, open **History** to review progress and results.

![Certification details (split view)](../../assets/screenshots/diver/en/certifications-01.png)

## Certification history

The history page shows progress details for a specific certification (modules/quiz/exam/skills, depending on the course).

![Certification history](../../assets/screenshots/diver/en/certifications-history.png)

## Common issues

- Missing certification: it may not be associated with your profile yet.
- History link does not open: item not available or old link.

<details>
<summary>For support (technical details)</summary>

```text
GET https://user.diveraid.com/en/diver/certifications
GET https://user.diveraid.com/en/diver/certifications/history/{certification}
GET https://user.diveraid.com/en/diver/certifications/history/{certification}/quiz/{quiz}
GET https://user.diveraid.com/en/diver/certifications/history/{certification}/exam/{exam}
GET https://user.diveraid.com/en/diver/certifications/history/{certification}/skills
```

</details>

Next: [Awards](awards.md)
