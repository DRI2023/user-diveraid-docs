# Diver: store

El store Diver se usa normalmente para comprar cursos.

## Donde encontrarlo

Menu: **Tienda**

## Inicio

Pasos tipicos:

1. Abre el store.
2. Elige un curso.
3. Entra al checkout.

![Store](../../assets/screenshots/diver/en/store.png)

## Checkout y pedido

Pasos tipicos:

1. En checkout, confirma el pedido.
2. Espera la pagina de resultado.

## Resultado de pago

## Problemas comunes

- Resultado `fail`: reintenta o revisa tu metodo de pago.
- Checkout no accesible: curso no disponible o no comprable para tu perfil.

<details>
<summary>Para soporte (detalles tecnicos)</summary>

```text
GET https://user.diveraid.com/es/diver/store
GET https://user.diveraid.com/es/diver/store/course/{course}/checkout
GET https://user.diveraid.com/es/diver/store/course/{course}/order
GET https://user.diveraid.com/es/diver/store/course/success
GET https://user.diveraid.com/es/diver/store/course/fail
```

</details>

Siguiente: [Forms](forms.md)
