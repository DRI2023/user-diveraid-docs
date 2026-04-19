# My Profile: overview

The **My Profile** section is available from any area (Diver/Professional/Dive Center/Distributor) via your profile photo menu.

## Where to find it

Top-right: click your **profile photo** -> **My Profile** (and related items).

## Main pages

- Overview (this page)
- My Profile
- My Tasks (assignments)
- My Medical History
- My Security
- My Privacy

Notes:

- Some items may appear only if enabled for your account (for example **My Tasks**).

<details>
<summary>For support (technical details)</summary>

Profile pages use the language prefix and a fixed path:

```text
GET https://user.diveraid.com/en/user/profile
GET https://user.diveraid.com/en/user/profile/assignments
GET https://user.diveraid.com/en/user/profile/medical
GET https://user.diveraid.com/en/user/profile/security
GET https://user.diveraid.com/en/user/profile/privacy
```

Sign out:

```text
POST https://user.diveraid.com/en/logout
```

</details>

Next: [My Profile](my-profile.md)
