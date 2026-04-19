# Mein Profil: Übersicht

Der Bereich **Mein Profil** ist in jedem Bereich (Diver/Professional/Dive Center/Distributor) über das Profilfoto-Menü verfügbar.

## Wo finde ich das?

Oben rechts: auf dein **Profilfoto** klicken -> **Mein Profil** (und verwandte Einträge).

## Hauptseiten

- Übersicht (diese Seite)
- Mein Profil
- Meine Aufgaben (assignments)
- Meine Krankengeschichte
- Meine Sicherheit
- Meine Privatsphäre

## Hinweise

- Einige Einträge werden nur angezeigt, wenn sie für dein Konto aktiviert sind (z. B. **Meine Aufgaben**).

<details>
<summary>Für Support (technische Details)</summary>

Profilseiten verwenden das Sprachpräfix und einen festen Pfad:

```text
GET https://user.diveraid.com/de/user/profile
GET https://user.diveraid.com/de/user/profile/assignments
GET https://user.diveraid.com/de/user/profile/medical
GET https://user.diveraid.com/de/user/profile/security
GET https://user.diveraid.com/de/user/profile/privacy
```

Abmelden:

```text
POST https://user.diveraid.com/de/logout
```

</details>

Weiter: [Mein Profil](my-profile.md)
