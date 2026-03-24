# Diver: duiklogboek

## Waar te vinden

Menu: **Mijn Duiklogboek**

## Lijst

![Dive logs list](../../assets/screenshots/diver/en/dive-logs.png)

## Aanmaken

Typische stappen:

1. Klik **New** om een duiklog te maken.
2. Vul de verplichte velden in en sla op.
3. Als je uit een specifieke context komt (bijv. skills), kan de flow vooraf ingevuld zijn.

## Bekijken en bijwerken

## Veelvoorkomende problemen

- Log niet gevonden: mogelijk verwijderd of niet gekoppeld aan je profiel.
- Update-fout: ongeldige data of onvoldoende rechten.

<details>
<summary>Voor support (technische details)</summary>

```text
GET https://user.diveraid.com/nl/diver/dive_log
GET https://user.diveraid.com/nl/diver/dive_log/new
GET https://user.diveraid.com/nl/diver/dive_log/new_log/{skillLog?}/{skill?}
GET https://user.diveraid.com/nl/diver/dive_log/view/{diveLog}
GET https://user.diveraid.com/nl/diver/dive_log/update/{diveLog}
```

</details>

Volgende: [Store](store.md)

