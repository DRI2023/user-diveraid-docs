# Diver: certifications

## Donde encontrarlo

Menu: **Mis certificaciones**

![Lista de certificaciones](../../assets/screenshots/diver/en/certifications-02.png)

## Lista

Pasos tipicos:

1. Abre la lista de certificaciones.
2. Selecciona una certificacion para ver detalles.
3. Haz clic en una tarjeta para ver los detalles al otro lado (split view).
4. Descarga la certificacion en **PDF** o **PNG**.
5. Si esta disponible, abre **History/Historial** para revisar progreso y resultados.

![Detalles (split view)](../../assets/screenshots/diver/en/certifications-01.png)

## Historial

La pagina de historial muestra detalles de progreso para una certificacion.

![Certification history](../../assets/screenshots/diver/en/certifications-history.png)

## Problemas comunes

- Falta certificacion: puede que no este asociada a tu perfil todavia.
- El historial no se abre: no disponible o enlace antiguo.

<details>
<summary>Para soporte (detalles tecnicos)</summary>

```text
GET https://user.diveraid.com/es/diver/certifications
GET https://user.diveraid.com/es/diver/certifications/history/{certification}
GET https://user.diveraid.com/es/diver/certifications/history/{certification}/quiz/{quiz}
GET https://user.diveraid.com/es/diver/certifications/history/{certification}/exam/{exam}
GET https://user.diveraid.com/es/diver/certifications/history/{certification}/skills
```

</details>

Siguiente: [Awards](awards.md)
