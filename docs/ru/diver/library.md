# Diver: biblioteka

## Snimok ekrana

<!-- TODO(screenshot): docs/assets/screenshots/diver/ru/library.png -->
<!-- Fallback: use EN screenshot until localized screenshots are available. -->
![Moia biblioteka](../../assets/screenshots/diver/en/library.png)

## Naznachenie

Razdel **Biblioteka** soderzhit vashi uchebnye materialy (naprimer, knigi po kursam) v zavisimosti ot dostupnosti dlia vashego profilia.

## Gde naiti

Menu: **Diver -> Moia biblioteka**

## Tipichnye shagi

1. Otkroite **Moiu biblioteku**.
2. Vyberite element (kurs/kniga).
3. Otkroite ego ili skachaite (v zavisimosti ot dostupnykh deistvii).

## Chastye problemy

- Net kontenta: vozmozhno, poka net elementov, priviazannykh k vashemu profiliu.
- Perebros na login: sessiia isteklа.

<details>
<summary>Dlia podderzhki (tekhnicheskie detali)</summary>

```text
GET https://user.diveraid.com/ru/diver/library
```

</details>

Dal'she: [Moi kursy](courses.md)
