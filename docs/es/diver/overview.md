# Diver: overview

El area **Diver** es la parte de la app dedicada al buceador (usuario final).

## Ejemplos (capturas)

### Dashboard

![Diver dashboard](../../assets/screenshots/diver/en/dashboard.png)

### Lista de cursos

![Course list](../../assets/screenshots/diver/en/courses-list.png)

## Primeros pasos

1. Inicia sesion con tu cuenta.
2. Ve a **Cuadro de mandos**.
3. Desde ahi, abre las secciones principales: Mis cursos, Mis certificaciones, Mis documentos/Documentos cargados, Mi diario de inmersiones, Tienda.

## Donde encontrarlo

Menu: **Diver**

Paginas principales:

- Overview (esta pagina)
- Dashboard
- Documents
- Courses
- Certifications
- Awards
- Dive Logs
- Store
- Forms

## Flujos tipicos

1. Seguir un curso: **Courses** -> abre un curso -> completa los siguientes pasos.
2. Revisar una certificacion: **Certifications** -> abre una certificacion -> revisa el historial.
3. Crear un dive log: **Dive Logs** -> New -> rellena -> guarda -> revisa/actualiza.
4. Comprar un curso: **Store** -> elige curso -> checkout -> confirma -> comprueba el resultado.

## Si algo no funciona

- Te envia al login: vuelve a iniciar sesion (la sesion puede haber caducado).
- Acceso bloqueado: asegurate de que tu email este verificado.

<details>
<summary>Para soporte (detalles tecnicos)</summary>

Las paginas Diver usan un prefijo de idioma en la URL:

```text
GET https://user.diveraid.com/es/diver/...
```

Ejemplo:

```text
GET https://user.diveraid.com/es/diver/dashboard
```

Tambien existen enlaces firmados (normalmente desde emails) que redirigen:

```text
GET https://user.diveraid.com/actions/diver/certifications
GET https://user.diveraid.com/actions/diver/awards
GET https://user.diveraid.com/actions/diver/progress/{log_code}
```

</details>

Siguiente: [Dashboard](dashboard.md)
