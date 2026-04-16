---
title: Control de acceso y roles del proyecto
slug: /controle-acces-et-roles
description: Administrar miembros, roles estándar, roles personalizados y salvaguardas RBAC a nivel de proyecto.
---

[Inicio](./index.md) · [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md) · [Mantenimiento, soporte y preguntas frecuentes](./maintenance-support-faq.md)

## Objetivo

El **Control de acceso** es el área de administración RBAC a nivel de proyecto. Permite decidir:

- quién puede entrar en el proyecto;
- qué rol recibe cada miembro;
- qué roles personalizados existen en este proyecto;
- qué permisos otorgan estos roles.

## Por qué es importante

Los derechos condicionan gran parte de la experiencia: creación de artefactos, ejecución de agentes, gestión de miembros, modificaciones de parámetros y aprobaciones. Una lectura correcta de los roles evita confundir un incidente con una simple falta de autorización.

## Quién puede usar esta página

- **consultar miembros y roles**: cualquier miembro que pueda acceder al espacio de trabajo;
- **gestionar los miembros**: usuario con `members:manage`;
- **gestionar los roles personalizados**: usuario con `roles:manage`.

![Vista Control de acceso del proyecto](/img/screenshots/localized/es/11-access-control.png)

## Roles estándar observados

Cada proyecto comienza con roles integrados protegidos:

| Rol | Uso típico |
| --- | --- |
| Project Owner | Administración completa del proyecto |
| Project Manager | Pilotaje operativo diario |
| Contributor | Contribución de contenido, uso de agentes y entregables según permisos |
| Viewer | Consulta en solo lectura |
| Auditor | Consulta orientada a auditoría y trazabilidad |

Estos roles integrados están protegidos en el servidor y no pueden eliminarse desde la interfaz.

## Matriz rápida de roles estándar

Los roles personalizados pueden extender o reducir este esquema. La tabla siguiente describe el **comportamiento habitual** de los roles estándar observados.

| Acción común | Project Owner | Project Manager | Contributor | Viewer | Auditor |
| --- | --- | --- | --- | --- | --- |
| Acceder al proyecto, al Espacio de trabajo y a las pantallas de lectura | Sí | Sí | Sí | Sí | Sí |
| Buscar en el conocimiento, revisar los PM Docs y el Registro de IA | Sí | Sí | Sí | Sí | Sí |
| Lanzar un run en **Agentes** | Sí | Sí | Sí | No por defecto | No por defecto |
| Modificar contenidos de trabajo y borradores de entregables | Sí | Sí | Sí | No | No |
| Gestionar miembros, roles y principales ajustes del proyecto | Sí | No | No | No | No |
| Revisión orientada a auditoría y trazabilidad | Sí | Sí | Sí | Lectura general | Sí |

## Roles personalizados

El producto soporta la creación, edición y eliminación de **roles personalizados** a nivel de proyecto.

### Permisos explícitamente observados

Los permisos expuestos incluyen, entre otros:

- `project:read`
- `project:update`
- `agent:run`
- `agent:configure`
- `documents:read`
- `documents:upload`
- `documents:delete`
- `report:generate`
- `history:read`
- `members:read`
- `members:manage`
- `roles:manage`
- `settings:manage`

### Permiso → impacto concreto

| Permiso | Superficie impactada | Síntoma si falta |
| --- | --- | --- |
| `agent:configure` | pestaña **Agent configuration** en el **Espacio de trabajo** | la página permanece consultable o los controles de registro están desactivados |
| `report:generate` | creación de borradores, artefactos y PM Docs | el usuario puede revisar, pero no generar el entregable esperado |
| `history:read` | **Registro de IA** y lectura detallada de los runs | la trazabilidad permanece inaccesible o muy limitada |
| `settings:manage` | ajustes del proyecto, gobernanza y ciertas integraciones | los parámetros son visibles pero no modificables |
| `members:manage` | zona **Members** en **Access control** | imposible añadir, retirar o cambiar un miembro |
| `roles:manage` | roles personalizados y sus permisos | imposible crear, ajustar o eliminar un rol personalizado |

Esta tabla sirve sobre todo para el diagnóstico: una acción ausente o atenuada no siempre es un error, sino a menudo la consecuencia directa de un permiso no concedido.

![Editor de rol personalizado](/img/screenshots/localized/es/11-custom-role-editor.png)

## Lo que ves en la página

La página se divide en dos zonas de trabajo:

1. **Roles & permissions**
   - revisión de los roles integrados;
   - creación de roles personalizados;
   - inspección o modificación de los permisos de un rol personalizado;
2. **Members**
   - adición de un miembro por correo electrónico;
   - atribución de un rol integrado o personalizado;
   - cambio de rol;
   - eliminación de un miembro cuando está permitido.

La página también puede mostrar tu identidad actual y, cuando está expuesta, la entrada protegida del **creador** del proyecto.

## Recorrido recomendado

### Revisar los roles antes de añadir un miembro

1. abre **Espacio de trabajo**;
2. selecciona la pestaña **Access control**;
3. revisa los roles existentes;
4. verifica si un rol estándar es suficiente o si se necesita un rol personalizado.

### Crear un rol personalizado

1. abre **Roles & permissions**;
2. introduce un **nombre**;
3. añade opcionalmente una **descripción**;
4. crea el rol;
5. activa o desactiva los permisos deseados;
6. verifica las insignias o permisos mostrados antes del uso real.

### Añadir o actualizar un miembro

1. abre **Members**;
2. introduce el **correo electrónico**;
3. elige el rol deseado;
4. guarda;
5. verifica que la línea del miembro refleje el rol esperado.

Si el usuario pertenece a otro tenant, ten en cuenta que una **cuenta externa / invitada** debe ser invitada primero en el lado de la identidad antes de que el RBAC del proyecto pueda asignarle un rol útil. En la práctica, si el correo parece correcto pero el usuario permanece no encontrado o sin efecto real, verifica primero la postura **Entra / guest** y luego vuelve a la atribución del rol del proyecto.

### Cambiar el rol de un miembro existente

1. localiza la línea del miembro en **Members**;
2. utiliza el selector de rol de esa línea;
3. elige el nuevo rol;
4. confirma que la línea muestra el rol actualizado.

### Retirar un miembro

1. localiza la línea del miembro a retirar;
2. utiliza la acción de eliminación si está disponible;
3. confirma que el miembro desaparece de la lista;
4. si la acción sigue bloqueada, verifica primero que no se trate ni de tu propia cuenta ni de la entrada protegida del creador.

## Salvaguardas RBAC confirmadas

La interfaz y el backend aplican varias protecciones importantes:

- no puedes **eliminar tu propio acceso** desde esta pantalla;
- no puedes **modificar tu propio rol** desde esta pantalla;
- la entrada del **creador del proyecto** permanece protegida;
- un **rol del sistema** no puede eliminarse;
- un **rol personalizado aún asignado** no puede eliminarse;
- los usuarios sin derecho de gestión ven una página **consultable** con controles desactivados.

## Solo lectura vs acceso denegado

Estos dos estados no significan lo mismo:

- **solo lectura**: la página permanece visible, pero los controles de adición, edición o eliminación están desactivados;
- **acceso denegado**: la ruta o la acción no está disponible para tu cuenta.

En la práctica, esto permite a ciertos perfiles revisar la configuración RBAC sin poder modificarla.

### Cómo leer una denegación

| Lo que observas | Lectura más probable | Reflexión recomendada |
| --- | --- | --- |
| un control visible pero atenuado | superficie expuesta en **solo lectura** | verifica primero si tu rol incluye el permiso esperado |
| una acción ausente cuando existe para otros perfiles | permiso o rol no concedido | compara tu rol estándar o personalizado con la acción esperada |
| una acción visible pero imposible a pesar de la UI | salvaguarda RBAC del lado del servidor o restricción de protección | verifica si se trata de un rol del sistema, de tu propia cuenta o de una entrada protegida |

Este mini-diagnóstico evita confundir una denegación ligada al rol estándar, una denegación ligada a un rol personalizado y una salvaguarda voluntaria del backend.

## Resultado esperado

Si la configuración es correcta:

- la lista de miembros está actualizada;
- los roles personalizados aparecen en los selectores;
- los permisos cambian en función del rol asignado;
- las acciones peligrosas permanecen bloqueadas por las salvaguardas.

## Problemas comunes

### Imposible eliminar un rol personalizado

Verifica primero si este rol sigue asignado a un miembro. Mientras esté en uso, la eliminación permanece bloqueada.

### Imposible modificar mi propio rol

Este comportamiento es voluntario para evitar una pérdida de acceso accidental. Pide a otro administrador del proyecto que realice la modificación.

### La pestaña es visible pero todo está atenuado

Probablemente estás en **solo lectura** en esta superficie. Verifica si tu rol incluye `members:manage` o `roles:manage`.

## Consejos

- utiliza **Project Owner** únicamente para los verdaderos administradores del proyecto;
- mantén los roles personalizados enfocados y limitados a una necesidad precisa;
- revisa los permisos antes de delegar la gestión de miembros;
- documenta los roles personalizados en las prácticas del equipo para evitar duplicados.

## Continuar

- [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md)
- [Gobernanza, decisiones y acciones](./gouvernance-decisions-et-actions.md)
- [Mantenimiento, soporte y preguntas frecuentes](./maintenance-support-faq.md)
