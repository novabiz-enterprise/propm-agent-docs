---
title: Plan del tenant, usuarios licenciados y actualizaciones de la app
slug: /seats-management-app-updates
description: Comprender el plan Marketplace mostrado en ProPM, sincronizar información de Azure Marketplace, gestionar licencias y actualizar un despliegue ProPM sin perder datos existentes.
---

[Inicio](./index.md) · Plan del tenant, usuarios licenciados y actualizaciones de la app

![Resumen de Platform Administration con Tenant plan and licensed users](/img/screenshots/localized/es/18-platform-administration-overview.jpg)

## Objetivo

Esta página explica el flujo de usuario para **Platform Administration > Overview > Tenant plan and licensed users** y el flujo recomendado cuando un cliente quiere cambiar de plan Azure Marketplace o realizar una actualización mayor sin perder sus datos existentes.

Úsela para entender:

- qué plan Marketplace se detecta actualmente para el tenant;
- cuántas licencias están pedidas, incluidas, suplementarias, usadas y restantes;
- por qué Azure Marketplace sigue siendo la fuente oficial para planes, precios y facturación;
- cómo se gestionan las licencias suplementarias mediante Azure Marketplace con la dimensión de facturación `seats`;
- cómo crear un nuevo despliegue ProPM desde Azure Marketplace en modo **Attach existing ProPM data resources**;
- en qué se diferencia una actualización in-place de la aplicación de un cambio de plan o una actualización mayor.

El mensaje principal es simple: para cambiar de plan o realizar una actualización mayor sin perder datos, cree un **nuevo despliegue ProPM desde Azure Marketplace**, seleccione **Attach existing ProPM data resources** y adjunte los recursos de datos existentes del despliegue anterior. Esto no es una migración manual de base de datos.

## Dónde encontrar la página

1. Abra **Platform Administration**.
2. Permanezca en **Overview**.
3. Abra **Tenant plan and licensed users**.

En ProPM, esta área muestra el plan detectado actualmente y permite actualizar la información Marketplace. No sustituye a Azure Marketplace para seleccionar un plan, consultar precios, cambiar la facturación o finalizar una transacción comercial.

## Planes Marketplace, precios y facturación

Azure Marketplace es la fuente oficial para:

- la lista de planes ProPM disponibles;
- el precio de cada plan;
- la facturación del plan;
- los cambios comerciales de plan;
- las licencias suplementarias facturadas con la dimensión `seats`.

ProPM muestra el plan actual para ayudar al administrador a entender el estado del tenant, pero los cambios de plan ya no se realizan directamente desde la administración de ProPM. No modifique manualmente el plan ARM de la Managed Application.

Como referencia, los planes ProPM Marketplace conocidos son:

| ID de plan | Nombre mostrado | Asientos incluidos |
| --- | --- | ---: |
| `free` | Free | 4 |
| `propm-20` | ProPM-20 | 20 |
| `propm-50` | ProPM-50 | 50 |
| `propm-100` | ProPM-100 | 100 |
| `propm-300` | ProPM-300 | 300 |
| `propm-500` | ProPM-500 | 500 |
| `propm-1000` | ProPM-1000 | 1000 |

Confirme siempre el plan, el precio y las condiciones de facturación en Azure Marketplace antes de iniciar un nuevo despliegue.

Para cualquier nuevo despliegue o actualización, use solo los planes ProPM disponibles actualmente en Azure Marketplace.

Los planes Marketplace controlan la capacidad de licencias. No habilitan ni bloquean conectores, proveedores de IA ni funcionalidades del producto.

## Leer los campos de plan y licencias

| Campo | Significado |
| --- | --- |
| **Current plan** | Plan Marketplace detectado actualmente para el tenant. |
| **Ordered seats** | Número total de licencias pedidas para el tenant. |
| **Included seats** | Licencias incluidas en el plan Marketplace base. |
| **Supplemental licenses** | Licencias suplementarias agregadas mediante facturación Marketplace. |
| **Used seats** | Licencias consumidas actualmente por usuarios conectados o licenciados. |
| **Remaining seats** | Licencias todavía disponibles. |

Si la información mostrada no coincide con una acción reciente de Azure Marketplace, use **Refresh Marketplace plan** para sincronizar ProPM con la información Marketplace detectada.

## Licencias suplementarias

Las licencias suplementarias se gestionan mediante Azure Marketplace con la dimensión de facturación `seats`.

Use este flujo cuando el tenant necesite más capacidad que las licencias incluidas en el plan base:

1. Revise **Ordered seats**, **Included seats**, **Supplemental licenses**, **Used seats** y **Remaining seats** en ProPM.
2. Gestione la capacidad adicional desde Azure Marketplace o mediante la acción de ProPM prevista para facturar licencias en Azure, si está disponible en su entorno.
3. Deje que Azure Marketplace acepte y facture la solicitud con la dimensión `seats`.
4. Vuelva a ProPM.
5. Seleccione **Refresh Marketplace plan** si los contadores todavía no están actualizados.
6. Revise **Ordered seats**, **Supplemental licenses** y **Remaining seats** después de la sincronización.

Agregar licencias suplementarias no cambia el plan base. Eliminar o reducir licencias suplementarias no cancela ni reembolsa automáticamente la facturación en Azure Marketplace.

## Actualizar su plan ProPM sin perder sus datos

Para cambiar de plan Azure Marketplace o realizar una actualización mayor, el flujo recomendado consiste en crear un nuevo despliegue ProPM y adjuntarlo a los recursos de datos existentes del despliegue anterior.

El nuevo despliegue crea una nueva capa de aplicación para el plan seleccionado, pero reutiliza los datos existentes. Por tanto, los usuarios, documentos, configuraciones, agentes, informes y datos de negocio deben seguir disponibles tras la validación.

### Cuándo usar este flujo

Use este flujo cuando:

- quiera cambiar a otro plan ProPM en Azure Marketplace;
- necesite una actualización mayor que requiere un nuevo despliegue Marketplace;
- quiera recrear la capa de aplicación ProPM conservando los datos existentes;
- el soporte ProPM le pida redesplegar en modo de adjuntar recursos de datos existentes.

No use este flujo para una simple actualización in-place de imágenes de aplicación. Para ese caso, use **Deployment & Updates** en ProPM cuando esté disponible y cuando las notas de versión no requieran un nuevo despliegue Marketplace.

### Antes de empezar

Prepare lo siguiente:

- acceso Azure al despliegue ProPM anterior;
- permisos para crear una nueva ProPM Managed Application desde Azure Marketplace;
- el plan ProPM objetivo seleccionado en Azure Marketplace;
- el **Resource ID** completo de la ProPM Managed Application anterior;
- una ventana de transición durante la cual los administradores puedan verificar el nuevo despliegue;
- una lista de comprobación para usuarios, documentos, configuraciones, agentes, informes y datos.

Siga estas precauciones antes de cualquier acción:

- no elimine el Managed Resource Group anterior antes de validar el nuevo despliegue;
- no elimine los recursos de datos existentes, porque el nuevo despliegue los reutiliza;
- no modifique manualmente el plan ARM de la Managed Application;
- no rellene las opciones avanzadas de override salvo que la instalación anterior haya usado nombres de recursos personalizados o que el soporte ProPM se lo pida.

### Paso 1 - Elegir el nuevo plan en Azure Marketplace

Abra Azure Marketplace y seleccione el nuevo plan ProPM que desea.

La selección del plan, los precios y la facturación se gestionan en Azure Marketplace. ProPM puede mostrar el plan actual y actualizar la información detectada, pero ProPM no es la fuente oficial para la transacción comercial.

### Paso 2 - Crear un nuevo despliegue ProPM

En Azure Marketplace, cree un nuevo despliegue ProPM en lugar de modificar directamente el despliegue anterior.

En la pestaña **Basics**, elija la suscripción, el grupo de recursos, la región, el nombre de la nueva Managed Application y el nuevo Managed Resource Group.

![Crear un nuevo despliegue ProPM desde Azure Marketplace](/img/deploiement/fr/propm-plan-update-01-new-deployment-basics-annotated.svg)

Use un nombre diferente para la nueva Managed Application para distinguir claramente el entorno anterior del nuevo durante la transición.

### Paso 3 - Seleccionar Attach existing ProPM data resources

En la pestaña **Application Settings**, seleccione **Attach existing ProPM data resources** en **Installation mode**.

![Seleccionar el modo Attach existing ProPM data resources](/img/deploiement/fr/propm-plan-update-03-attach-existing-data-resources-annotated.svg)

Este modo indica al nuevo despliegue que debe conectarse a los recursos de datos del despliegue anterior en lugar de comenzar con un entorno vacío.

Deje vacíos los campos avanzados de override en la mayoría de los casos. El nuevo despliegue puede descubrir los recursos estándar a partir de la Managed Application anterior. Rellene estos campos solo si la instalación anterior usaba nombres de recursos personalizados o si el soporte ProPM se lo pide.

### Paso 4 - Indicar la Managed Application anterior

En Azure Portal, abra la ProPM Managed Application anterior y vaya a **Properties**.

Copie el campo **Id** completo de la Managed Application. Este es el **Resource ID** de la Managed Application anterior, no el nombre del grupo de recursos gestionado.

![Copiar el Resource ID de la ProPM Managed Application anterior](/img/deploiement/fr/propm-plan-update-02-copy-previous-managed-application-id-annotated.svg)

Vuelva al asistente del nuevo despliegue y pegue este valor en **Previous ProPM Managed Application resource ID**.

Si es necesario, active **Block previous deployment during cutover**. Esta opción ayuda a evitar cambios en el entorno anterior mientras se usa y valida el nuevo despliegue.

![Bloquear el despliegue anterior durante la transición](/img/deploiement/fr/propm-plan-update-04-readonly-and-overrides-annotated.svg)

Después de introducir los demás parámetros solicitados por el asistente, seleccione **Review + create**, revise la configuración e inicie el despliegue.

### Paso 5 - Verificar el nuevo despliegue

Una vez terminado el nuevo despliegue, abra la nueva instancia ProPM y verifique los elementos esenciales antes de mover definitivamente a los usuarios.

Compruebe como mínimo:

- usuarios y accesos;
- documentos y espacios de conocimiento;
- configuración de plataforma;
- agentes y sus parámetros;
- informes;
- proyectos, portafolios y datos de negocio;
- conectores e integraciones esperados;
- proveedor de IA y parámetros necesarios;
- plan y contadores de licencias después de la sincronización Marketplace.

Si el plan mostrado en ProPM todavía no está actualizado después de la acción de Azure Marketplace, use **Refresh Marketplace plan**. Este botón solo sincroniza el estado detectado; no cambia el plan ni desencadena una compra.

### Paso 6 - Finalizar la transición

Después de la validación completa, dirija a los usuarios al nuevo despliegue ProPM.

Conserve temporalmente el despliegue anterior como medida de seguridad si su organización lo desea. Elimine la Managed Application anterior solo cuando tenga certeza de que la transición ha terminado y de que el procedimiento de eliminación elegido no elimina los recursos de datos reutilizados.

Nunca elimine manualmente los recursos de datos existentes mientras los use el nuevo despliegue.

### Buenas prácticas y precauciones

Haga lo siguiente:

- elija el nuevo plan en Azure Marketplace;
- cree un nuevo despliegue ProPM;
- seleccione **Attach existing ProPM data resources**;
- introduzca el Resource ID completo de la ProPM Managed Application anterior;
- bloquee o ponga en solo lectura el despliegue anterior durante la transición si es necesario;
- verifique el nuevo despliegue antes de eliminar cualquier cosa;
- use **Refresh Marketplace plan** después de una acción Marketplace para resincronizar ProPM.

Evite lo siguiente:

- no elimine el Managed Resource Group anterior antes de validar el nuevo despliegue;
- no elimine cuentas, bases de datos o servicios de datos existentes;
- no modifique manualmente el plan ARM de la Managed Application;
- no presente este flujo como una migración manual de base de datos;
- no rellene overrides avanzados sin una necesidad identificada.

### FAQ

**¿Puedo cambiar de plan directamente en ProPM?**

No. ProPM muestra el plan actual y puede actualizar la información Marketplace, pero los cambios de plan, precios y facturación se gestionan en Azure Marketplace.

**¿Para qué sirve Refresh Marketplace plan?**

**Refresh Marketplace plan** sincroniza ProPM con la información Marketplace detectada después de una acción en Azure. No cambia el plan, no compra licencias y no elimina licencias.

**¿Es una migración manual de base de datos?**

No. El nuevo despliegue ProPM se conecta automáticamente a los recursos de datos existentes cuando selecciona **Attach existing ProPM data resources** e indica la Managed Application anterior.

**¿Qué Resource ID debo introducir?**

Introduzca el Resource ID completo de la **ProPM Managed Application** anterior. No introduzca solo el nombre de la aplicación, el nombre del grupo de recursos o el Managed Resource Group.

**¿Cuándo debo usar las opciones avanzadas de override?**

Úselas solo si la instalación anterior tiene nombres de recursos personalizados o si el soporte ProPM se lo pide. En el caso estándar, deje estos campos vacíos.

**¿Puedo eliminar el Managed Resource Group anterior después del nuevo despliegue?**

No lo elimine antes de validar el nuevo despliegue. No elimine los recursos de datos existentes si el nuevo despliegue los reutiliza. En caso de duda, conserve temporalmente el despliegue anterior y solicite al soporte ProPM el procedimiento de eliminación correcto.

**¿Cómo se gestionan las licencias suplementarias?**

Las licencias suplementarias se gestionan mediante Azure Marketplace con la dimensión de facturación `seats`. ProPM puede mostrar y sincronizar contadores, pero Azure Marketplace sigue siendo la referencia de facturación.

## Refresh Marketplace plan

Use **Refresh Marketplace plan** para sincronizar ProPM con el estado Marketplace detectado para el tenant.

Esta acción:

- actualiza la información de plan y licencias después de una acción Marketplace;
- no ejecuta por sí sola una actualización de plan;
- no compra licencias suplementarias;
- no elimina ni cancela licencias;
- no modifica los recursos Azure del despliegue.

## Usuarios conectados licenciados

La lista **Licensed connected users** muestra los usuarios que consumen licencias actualmente.

Eliminar un usuario licenciado libera capacidad de aplicación para uso posterior, según las reglas de licencias del tenant. No cambia el plan Marketplace ni cancela uso facturado por Azure Marketplace.

## Actualizaciones de aplicación sin redespliegue Marketplace

La sección **Deployment & Updates** actualiza una instalación existente in place cuando la actualización es compatible con el despliegue actual.

No hace lo siguiente:

- volver a ejecutar la oferta Azure Marketplace;
- crear un nuevo grupo de recursos;
- recrear recursos Azure que ya existen;
- aplicar una actualización de plan Marketplace;
- realizar una actualización mayor que requiere un nuevo despliegue Marketplace.

En la práctica, administración lee el inventario de imágenes de las **Azure Container Apps** existentes mediante Azure Resource Manager, compara las imágenes actuales con las imágenes objetivo aprobadas en ACR y envía nuevas revisiones a las Container Apps existentes.

## Acciones de actualización disponibles

| Acción | Propósito |
| --- | --- |
| **Check for updates** | Comprobar imágenes actuales, imágenes objetivo, candidatos de actualización de tags mutables y versión opcional del manifiesto. |
| **Apply update** | Aplicar nuevas imágenes a servicios seleccionados creando nuevas revisiones de Container Apps. |
| **Rollback last update** | Volver a imágenes anteriores cuando la última operación capturó las referencias necesarias. |
| **Container App image inventory** | Revisar grupo de recursos gestionado, servicios seguidos, imágenes actuales, imágenes objetivo y estado de revisiones. |

## Límites de alcance

El rollout de imágenes de aplicación está separado de la administración del plan Marketplace.

Los botones de actualización no cubren:

- migraciones de esquema de base de datos;
- creación de nuevos recursos Azure;
- cambios de arquitectura;
- actualizaciones de plan Marketplace;
- transiciones a un nuevo despliegue con recursos de datos existentes.

## Puntos clave

- Azure Marketplace es la fuente oficial para planes, precios y facturación.
- ProPM muestra el plan actual y los contadores de licencias, pero no sustituye a Azure Marketplace para cambiar de plan.
- Para cambiar de plan o realizar una actualización mayor sin perder datos, cree un nuevo despliegue ProPM desde Azure Marketplace.
- En el asistente de despliegue, seleccione **Attach existing ProPM data resources**.
- Introduzca el Resource ID completo de la ProPM Managed Application anterior.
- No elimine el Managed Resource Group anterior ni los recursos de datos antes de validar por completo el nuevo despliegue.
- Use **Refresh Marketplace plan** solo para sincronizar el estado Marketplace detectado.
- Use **Deployment & Updates** para el rollout in-place de imágenes de aplicación, no para cambios comerciales de plan.

## Siguiente

- [Despliegue Azure Marketplace](./deploiement-azure-marketplace.md)
- [Proveedores de IA e integraciones de plataforma](./ai-providers-platform-integrations.md)
- [Mantenimiento, soporte y FAQ](./maintenance-support-faq.md)
