# Diver: dashboard

## Screenshot

![Diver dashboard](../../assets/screenshots/diver/en/dashboard.png)

![Library](../../assets/screenshots/diver/en/library.png)

![Profile menu (click on photo)](../../assets/screenshots/diver/en/profile-menu.png)

## Objetivo

El dashboard es la pagina de entrada del area Diver y normalmente agrupa los enlaces principales (cursos, certificaciones, documentos, etc.).

## Donde encontrarlo

Menu: **Cuadro de mandos**

## Que hacer aqui (pasos tipicos)

1. Comprueba elementos destacados (cursos en curso, notificaciones, vencimientos y acciones rapidas como **Descargar certificacion (Download Certification)** para descargar el certificado de tus certificaciones, **Mi centro de buceo (My Diving Center)** para ver/cambiar tu centro de buceo o **Formulario medico (Medical Form)** para completar el formulario medico).
2. Ve a [Mis cursos](courses.md) para continuar un recorrido (abre la lista de cursos, selecciona un curso y retoma el siguiente paso: modulo/quiz/examen/skills; si falta un curso, revisa tambien *caducados* si existe).
3. Ve a **Mis certificaciones** para revisar tarjetas e historial.
4. Ve a **Mi diario de inmersiones** para crear o actualizar tus logs.

## Barra superior (iconos junto a fecha/hora)

En la esquina superior derecha, junto a la fecha y la hora, tienes algunos accesos rapidos:

- **Iconos de perfil (Diver / PRO / Dive Center / Distributor):** permiten cambiar entre areas.
  Los iconos aparecen solo si tu cuenta tiene la cualificacion/rol correspondiente.
- **Al hacer clic:** se abre el dashboard del area seleccionada.
- **Idioma (EN/IT/DE/FR/ES/ZH/AR/NL/KO/TR/PT/PL/RU):** cambia el idioma de la interfaz.
- **Pantalla completa:** activa/desactiva el modo pantalla completa.
- **Tema/contraste:** cambia el aspecto (por ejemplo claro/oscuro).
- **Foto de perfil (cuenta):** abre el menu de la cuenta.

### Si hago clic en mi foto

Abre el menu de cuenta (como en la captura) con opciones como:

- **Mi perfil (My Profile):** detalles de tu perfil.
- **Mis tareas (My Task):** asignaciones e invitaciones (si esta disponible para tu cuenta).
- **Mi historial medico (My Medical History):** informacion/formularios medicos (si esta habilitado).
- **Mi seguridad (My Security):** ajustes/consentimientos de seguridad (si esta disponible).
- **Mi privacidad (My Privacy):** ajustes de privacidad.
- **Cerrar sesion (Sign out):** cerrar sesion.

En **Mis tareas (My Task)**, normalmente puedes:

- Ver invitaciones pendientes y colaboraciones activas (por ejemplo, staff de Dive Center, staff de Distributor, colaboraciones, tareas de traductor).
- **Confirm** o **Dismiss** invitaciones.
- **Stop collaborating** (revocar) cuando sea necesario (normalmente requiere escribir una frase de confirmacion; algunas revocaciones pueden ofrecer opciones como borrar classroom propias).
- Buscar, ordenar y paginar la lista de colaboraciones (cuando este disponible).

## Problemas comunes

- Te envia al login: sesion caducada o no autenticado.
- Acceso bloqueado/error: email no verificado.

## Notas

La pagina inicial de la aplicacion (`/`) redirige al login.

<details>
<summary>Para soporte (detalles tecnicos)</summary>

```text
GET https://user.diveraid.com/es/diver/dashboard
```

</details>

Siguiente: [Documentos cargados](uploaded-documents.md)
