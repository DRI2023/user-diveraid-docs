# Diver: awards

La pagina **Awards** contiene tus recognition cards y el flujo de compra (si esta disponible para tu cuenta).

## Donde encontrarlo

Menu: **Diver -> Awards**

![Awards](../../assets/screenshots/diver/en/awards.png)

## Tipos de awards

Hay dos tipos principales:

**Diver (logged dives)**

- 100 logged dives
- 500 logged dives
- 1000 logged dives
- 5000 logged dives

**Professional (certifications issued)**

- Bronze: 100 certifications issued
- Silver: 500 certifications issued
- Gold: 1000 certifications issued
- Platinum: 5000 certifications issued

## Lista

Pasos tipicos:

1. Abre la lista de awards.
2. Selecciona una tarjeta/award.
3. Inicia el flujo de compra.

## Como se obtienen

Cuando alcanzas un nuevo hito (logged dives o certifications issued), el sistema normalmente te avisa en la dashboard
y te permite pedir la award card correspondiente.

Pasos tipicos:

1. (Opcional) Usa la busqueda para encontrar un award.
2. Selecciona una tarjeta/award.
3. Inicia el flujo de compra (si esta disponible para tu cuenta).

Despues de un pedido correcto, la card se emite y la veras en **Awards**.

## Problemas comunes

- Resultado `fail`: vuelve a intentarlo o revisa el metodo de pago (si aplica).
- Award no disponible: puede que no sea comprable para tu perfil o pais.

<details>
<summary>Para soporte (detalles tecnicos)</summary>

```text
GET https://user.diveraid.com/es/diver/awards
GET https://user.diveraid.com/es/diver/awards/{card}/order
GET https://user.diveraid.com/es/diver/awards/order/success
GET https://user.diveraid.com/es/diver/awards/order/fail
```

</details>

Siguiente: [Dive Logs](dive-logs.md)
