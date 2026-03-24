# Diver: dive logs

## Donde encontrarlo

Menu: **Mi diario de inmersiones**

## Lista

![Dive logs list](../../assets/screenshots/diver/en/dive-logs.png)

## Crear

Pasos tipicos:

1. Haz clic en **New** para crear un dive log.
2. Rellena los campos requeridos y guarda.
3. Si vienes de un contexto especifico (por ejemplo skills), puede que veas un flujo pre-rellenado.

## Ver y actualizar

## Problemas comunes

- Log no encontrado: puede que se haya borrado o no este asociado a tu perfil.
- Error al actualizar: datos invalidos o permisos insuficientes.

<details>
<summary>Para soporte (detalles tecnicos)</summary>

```text
GET https://user.diveraid.com/es/diver/dive_log
GET https://user.diveraid.com/es/diver/dive_log/new
GET https://user.diveraid.com/es/diver/dive_log/new_log/{skillLog?}/{skill?}
GET https://user.diveraid.com/es/diver/dive_log/view/{diveLog}
GET https://user.diveraid.com/es/diver/dive_log/update/{diveLog}
```

</details>

Siguiente: [Store](store.md)
