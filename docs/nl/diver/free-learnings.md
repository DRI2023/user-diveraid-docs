# Diver: FREE-Learning winkel

## Wat is het?

Free learnings zijn trainingsinhoud die via een vereenvoudigde flow beschikbaar is (meestal zonder aankoop).

## Waar te vinden

Menu: **FREE-Learning winkel**

## Enroll

Typische stappen:

1. Open de enroll-pagina.
2. Selecteer de inhoud om te activeren (als nodig).
3. Ga daarna terug naar de lijst om te starten.

## Lijst

Typische stappen:

1. Open de lijst.
2. Selecteer een free learning om de voortgang te openen.

![Free learnings](../../assets/screenshots/diver/en/free-learnings-list.png)

## Voortgang

Open een item om de voortgang te zien en verder te gaan waar je gebleven was.

## Veelvoorkomende problemen

- Geen inhoud zichtbaar: je bent mogelijk nog niet enrolled (gebruik enroll-pagina).
- Terug naar login: sessie verlopen.

<details>
<summary>Voor support (technische details)</summary>

```text
GET https://user.diveraid.com/nl/diver/free-learnings/enroll
GET https://user.diveraid.com/nl/diver/free-learnings
GET https://user.diveraid.com/nl/diver/free-learnings/progress/{log_code}/
GET https://user.diveraid.com/nl/diver/free-learnings/progress/{log_code}/module/{module}
GET https://user.diveraid.com/nl/diver/free-learnings/progress/{log_code}/quiz/{quiz}
```

</details>

Volgende: [Certifications](certifications.md)

