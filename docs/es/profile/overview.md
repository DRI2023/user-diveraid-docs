# Mi perfil: resumen

La seccion **Mi perfil** esta disponible desde cualquier area (Diver/Professional/Dive Center/Distributor) mediante el menu de tu foto de perfil.

## Donde encontrarlo

Arriba a la derecha: haz clic en tu **foto de perfil** -> **Mi perfil** (y elementos relacionados).

## Paginas principales

- Resumen (esta pagina)
- Mi perfil
- Mis tareas (assignments)
- Mi historial medico
- Mi seguridad
- Mi vida privada

## Notas

- Algunos elementos pueden aparecer solo si estan habilitados para tu cuenta (por ejemplo **Mis tareas**).

<details>
<summary>Para soporte (detalles tecnicos)</summary>

Las paginas de perfil usan el prefijo de idioma y una ruta fija:

```text
GET https://user.diveraid.com/es/user/profile
GET https://user.diveraid.com/es/user/profile/assignments
GET https://user.diveraid.com/es/user/profile/medical
GET https://user.diveraid.com/es/user/profile/security
GET https://user.diveraid.com/es/user/profile/privacy
```

Cerrar sesion:

```text
POST https://user.diveraid.com/es/logout
```

</details>

Siguiente: [Mi perfil](my-profile.md)
