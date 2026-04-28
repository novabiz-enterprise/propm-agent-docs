---
title: Control de acceso y roles de proyecto
slug: /controle-acces-et-roles
description: Administrar los miembros, delegar los roles de proyecto y comprender los salvaguardas RBAC aplicados al creador y a los demás miembros.
---

[Inicio](./index.md) · [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md) · [Mantenimiento, soporte y FAQ](./maintenance-support-faq.md)

![Delegación del creador y roles de proyecto](/img/diagrams/es/delegation-createur-rbac.svg)

## Objetivo

El **Control de acceso** es la zona de administración RBAC a nivel de proyecto. Permite decidir:

- quién puede entrar en el proyecto;
- qué rol recibe cada miembro;
- qué roles personalizados existen en este proyecto;
- qué permisos otorgan esos roles.

## Por qué es importante

Los derechos condicionan gran parte de la experiencia: ejecución de agentes, gestión de miembros, generación de entregables, configuración de integraciones, gobernanza de publicaciones y lectura de auditoría. Una lectura correcta de los roles evita confundir un bloqueo funcional con una simple falta de autorización.

## Quién puede usar esta página

- **consultar miembros y roles**: cualquier miembro que pueda acceder al espacio de trabajo;
- **gestionar miembros**: usuario con `members:manage`;
- **gestionar roles personalizados**: usuario con `roles:manage`.

## Creador del proyecto: rol inicial y delegación

Al crear el proyecto, el creador comienza con el rol **Propietario del proyecto** y todas las permisos de proyecto disponibles. Así que sirve como punto de partida administrativo: abre el proyecto, controla la configuración inicial y luego delega los roles útiles a otros miembros.

### Delegación recomendada

1. conserva al creador como salvaguarda administrativa inicial;
2. asigna un segundo **Propietario del proyecto** si el proyecto no debe depender de una sola persona;
3. usa **Jefe de proyecto** para la gestión diaria;
4. reserva los roles personalizados a las diferencias reales de necesidad;
5. verifica luego **Políticas de gobernanza** y **Integraciones del proyecto** para que los derechos correspondan a los usos externos.

### Lo que confirma esta página

- el creador no puede ser retirado desde esta pantalla;
- el rol del creador permanece fijo;
- un usuario no puede auto-rebaixar ni auto-eliminarse desde esta superficie;
- la delegación de roles está confirmada;
- la transferencia libre del **estatus de creador** no se ofrece directamente en las pantallas de administración.

## Roles estándar

Cada proyecto comienza con roles integrados protegidos:

| Rol | Tipo de uso |
| --- | --- |
| Propietario del proyecto | Administración completa del proyecto |
| Jefe de proyecto | Gestión operativa diaria |
| Contribuyente | Contribución de contenido, uso de agentes y entregables según permisos |
| Lector | Consulta en solo lectura |
| Auditor | Consulta orientada a auditoría y trazabilidad |

Estos roles integrados están protegidos del lado del servidor y no pueden ser eliminados desde la interfaz.

## Matriz rápida de roles estándar

Los roles personalizados pueden ampliar o reducir este esquema. La tabla a continuación describe el **comportamiento habitual** de los roles estándar.

| Acción común | Propietario del proyecto | Jefe de proyecto | Contribuyente | Lector | Auditor |
| --- | --- | --- | --- | --- | --- |
| Acceder al proyecto, al Espacio de trabajo y a las pantallas de lectura | Sí | Sí | Sí | Sí | Sí |
| Buscar en el conocimiento, releer los Documentos PM y el Diario IA | Sí | Sí | Sí | Sí | Sí |
| Lanzar una ejecución en **Agentes** | Sí | Sí | Sí | No por defecto | No por defecto |
| Modificar contenidos de trabajo y borradores de entregables | Sí | Sí | Sí | No | No |
| Gestionar miembros, roles y ajustes principales del proyecto | Sí | No | No | No | No |
| Revisión orientada a auditoría y trazabilidad | Sí | Sí | Sí | Lectura general | Sí |

## Roles personalizados

El producto soporta la creación, edición y eliminación de **roles personalizados** a nivel de proyecto.

### Permisos disponibles

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

| Permiso | Superficie afectada | Síntoma si falta |
| --- | --- | --- |
| `agent:configure` | pestaña **Configuración de agentes** en el **Espacio de trabajo** | la página sigue consultable o los controles de guardado están desactivados |
| `report:generate` | creación de borradores, artefactos y Documentos PM | el usuario puede releer, pero no generar el entregable esperado |
| `history:read` | **Diario IA** y lectura detallada de ejecuciones | la trazabilidad permanece inaccesible o muy limitada |
| `settings:manage` | ajustes del proyecto, gobernanza y ciertas integraciones | los parámetros son visibles pero no modificables |
| `members:manage` | zona **Miembros** en **Control de acceso** | imposible añadir, eliminar o cambiar un miembro |
| `roles:manage` | roles personalizados y sus permisos | imposible crear, ajustar o eliminar un rol personalizado |

![Editor de rol personalizado](/img/screenshots/localized/es/11-custom-role-editor.jpg)

## Lo que ves en la página

La página se divide en dos zonas de trabajo:

1. **Roles y permisos**
   - revisión de los roles integrados;
   - creación de roles personalizados;
   - inspección o modificación de los permisos de un rol personalizado;
2. **Miembros**
   - añadir un miembro por correo electrónico;
   - asignar un rol integrado o personalizado;
   - cambiar de rol;
   - eliminar un miembro cuando sea autorizado.

La página también puede mostrar tu identidad actual y, cuando se expone, la entrada protegida del **creador** del proyecto.

## Camino recomendado

### Revisar los roles antes de añadir un miembro

1. abre **Espacio de trabajo**;
2. selecciona la pestaña **Control de acceso**;
3. revisa los roles existentes;
4. verifica si un rol estándar basta o si se necesita un rol personalizado.

### Crear un rol personalizado

1. abre **Roles y permisos**;
2. ingresa un **nombre**;
3. agrega opcionalmente una **descripción**;
4. crea el rol;
5. activa o desactiva los permisos deseados;
6. verifica las insignias o permisos mostrados antes de uso real.

### Añadir o actualizar un miembro

1. abre **Miembros**;
2. ingresa el **correo electrónico**;
3. elige el rol deseado;
4. guarda;
5. verifica que la fila del miembro refleje correctamente el rol esperado.

Si el usuario pertenece a otro tenant, ten en cuenta que una **cuenta externa / invitado** debe primero ser invitada en el lado de identidad antes de que el RBAC del proyecto pueda asignarle un rol útil.

### Cambiar el rol de un miembro existente

1. localiza la fila del miembro en **Miembros**;
2. usa el selector de rol de esa fila;
3. elige el nuevo rol;
4. confirma que la fila muestre correctamente el rol actualizado.

### Retirar un miembro

1. localiza la fila del miembro a retirar;
2. usa la acción de eliminación si está disponible;
3. confirma que el miembro desaparezca de la lista;
4. si la acción sigue bloqueada, verifica primero que no sea tu propia cuenta ni la entrada protegida del creador.

## Salvaguardas RBAC confirmadas

La interfaz y los servicios de la plataforma aplican varias protecciones importantes:

- no puedes **eliminar tu propio acceso** desde esta pantalla;
- no puedes **modificar tu propio rol** desde esta pantalla;
- la entrada del **creador del proyecto** permanece protegida;
- un **rol del sistema** no puede ser eliminado;
- un **rol personalizado aún asignado** no puede ser eliminado;
- los usuarios sin derecho de gestión ven una página **consultable** con controles desactivados.

## Lectura sola vs acceso denegado

Estos dos estados no significan lo mismo:

- **lectura sola**: la página sigue visible, pero los controles de añadir, editar o eliminar están desactivados;
- **acceso denegado**: la ruta o la acción no está disponible para tu cuenta.

En práctica, esto permite a ciertos perfiles releer la configuración RBAC sin poderla modificar.

### Cómo leer un rechazo

| Lo que observas | Lectura más probable | Reflejo recomendado |
| --- | --- | --- |
| un control visible pero gris | superficie expuesta en **lectura sola** | verifica primero si tu rol incluye la permiso esperado |
| una acción ausente aunque exista para otros perfiles | permiso o rol no concedido | compara tu rol estándar o personalizado con la acción esperada |
| una acción visible pero imposible a pesar de la UI | salvaguarda RBAC del lado del servidor o restricción de protección | verifica si se trata de un rol del sistema, de tu propia cuenta o de una entrada protegida |

## Lo que el creador delega en práctica

| Necesidad | Rol a asignar primero | Por qué |
| --- | --- | --- |
| continuidad administrativa | **Propietario del proyecto** | evitar que una sola cuenta concentre toda la administración |
| gestión diaria | **Jefe de proyecto** | gestionar el trabajo corriente sin abrir toda la administración |
| producción de contenido y uso de agentes | **Contribuyente** | ejecutar los agentes y preparar los entregables |
| consulta amplia | **Lector** | acceso en solo lectura sin riesgo de modificación |
| auditoría y trazabilidad | **Auditor** | releer el historial y las pruebas sin actuar sobre el proyecto |

## Problemas comunes

### Imposible eliminar un rol personalizado

Verifica primero si ese rol todavía está asignado a un miembro. Mientras esté en uso, la eliminación permanece bloqueada.

### Imposible modificar mi propio rol

Este comportamiento es intencional para evitar una pérdida de acceso accidental. Pide a otro administrador del proyecto que realice la modificación.

### La pestaña es visible pero todo está gris

Probablemente estás en **lectura sola** en esta superficie. Verifica si tu rol incluye `members:manage` o `roles:manage`.

## Consejos

- usa **Propietario del proyecto** solo para los verdaderos administradores del proyecto;
- mantén los roles personalizados enfocados y limitados a una necesidad específica;
- revisa las permisos antes de delegar la gestión de miembros;
- documenta los roles personalizados en las prácticas del equipo para evitar duplicados.

## Siguiente

- [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md)
- [Gobernanza, decisiones y acciones](./gouvernance-decisions-et-actions.md)
- [Conectores y integraciones](./connecteurs-jira-et-sharepoint)
- [Mantenimiento, soporte y FAQ](./maintenance-support-faq.md)
