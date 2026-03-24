# Diver: awards

"Awards" incluye normalmente recognition cards y su flujo de compra.

## Donde encontrarlo

Menu: **Awards**

## Lista

Pasos tipicos:

1. Abre la lista de awards.
2. Selecciona una tarjeta/award.
3. Inicia el flujo de compra.

![Awards list](../../assets/screenshots/diver/en/awards.png)

## Pedido

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
