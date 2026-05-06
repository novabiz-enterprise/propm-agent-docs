---
title: Plan del tenant, usuarios licenciados y actualizaciones de la app
slug: /seats-management-app-updates
description: Gestionar el plan Marketplace del tenant, los asientos pedidos, las licencias suplementarias, los usuarios licenciados y las actualizaciones de la app desde Platform Administration.
---

[Inicio](./index.md) · [Portafolio](./portfolio.md) · [Proveedores de IA e integraciones de plataforma](./ai-providers-platform-integrations.md)

![Resumen de Platform Administration con Tenant plan and licensed users](/img/screenshots/localized/es/18-platform-administration-overview.jpg)

## Objetivo

Esta página explica el flujo de usuario para **Platform Administration > Overview > Tenant plan and licensed users**.

Úsela para entender:

- qué plan Marketplace se detecta actualmente para el tenant;
- cuántas licencias están pedidas, incluidas, suplementarias, usadas y restantes;
- cómo comprar o eliminar licencias suplementarias desde ProPM;
- cómo preparar una actualización de plan mediante un redespliegue de Azure Marketplace;
- en qué se diferencian las actualizaciones de imágenes de aplicación de las actualizaciones de plan Marketplace.

## Dónde encontrar la página

1. Abra **Platform Administration**.
2. Permanezca en **Overview**.
3. Abra **Tenant plan and licensed users**.

Esta área de administración sustituye las pantallas antiguas de selección de suscripción Marketplace orientadas al usuario. Los usuarios no deben seleccionar identificadores de planes antiguos o internos al preparar una nueva actualización.

## Planes Marketplace oficiales

La lista **Target plan** en la administración de ProPM debe mostrar solo estos planes Marketplace oficiales:

| ID de plan | Nombre mostrado | Asientos incluidos |
| --- | --- | ---: |
| `free` | Free | 4 |
| `propm-20` | ProPM-20 | 20 |
| `propm-50` | ProPM-50 | 50 |
| `propm-100` | ProPM-100 | 100 |
| `propm-300` | ProPM-300 | 300 |
| `propm-500` | ProPM-500 | 500 |
| `propm-1000` | ProPM-1000 | 1000 |

Los identificadores antiguos o internos como `propm0`, `pro`, `enterprise`, `pm-*` o los planes generados dinámicamente no son opciones de usuario para una nueva actualización en administración.

`propm0` todavía puede aparecer en despliegues existentes antiguos. Trátelo como compatibilidad histórica, no como un plan para seleccionar en una nueva actualización.

## Leer los campos de plan y licencias

| Campo | Significado |
| --- | --- |
| **Current plan** | Plan Marketplace detectado actualmente para el tenant. |
| **Ordered seats** | Número total de licencias pedidas para el tenant. |
| **Included seats** | Licencias incluidas en el plan Marketplace base. |
| **Supplemental licenses** | Licencias suplementarias agregadas mediante facturación Marketplace. |
| **Used seats** | Licencias consumidas actualmente por usuarios conectados o licenciados. |
| **Remaining seats** | Licencias todavía disponibles. |

Los planes Marketplace controlan la capacidad de licencias. No habilitan ni bloquean conectores, proveedores de IA ni funcionalidades del producto.

## Agregar licencias suplementarias

Use **Add licenses and bill in Azure** cuando el tenant necesite más capacidad que la incluida en el plan base.

1. En **Tenant plan and licensed users**, introduzca la cantidad de licencias suplementarias que desea agregar.
2. Seleccione **Add licenses and bill in Azure**.
3. ProPM envía el consumo a Azure Marketplace Metering.
4. Azure Marketplace factura el uso mediante la dimensión de custom meter `seats`.
5. ProPM agrega las licencias suplementarias a la capacidad del tenant solo después de que Azure Marketplace acepte la solicitud.
6. Revise **Ordered seats**, **Supplemental licenses** y **Remaining seats** tras la aceptación.

Solo se puede enviar una orden de licencias suplementarias a Azure Marketplace por hora.

Las licencias suplementarias permanecen activas en ProPM hasta que se eliminan manualmente.

## Eliminar licencias suplementarias

Use **Remove licenses** para quitar capacidad de licencias suplementarias de ProPM.

La eliminación reduce la capacidad disponible en ProPM, pero no cancela ni reembolsa automáticamente el consumo que ya se envió a Azure Marketplace.

## Actualizar el plan mediante redespliegue desde Azure Marketplace

Una actualización de plan Marketplace no se aplica directamente a la instancia Managed Application existente.

Para Azure Managed Application, la actualización se prepara en ProPM y se completa mediante un redespliegue guiado de Azure Marketplace.

1. Abra **Platform Administration > Overview > Tenant plan and licensed users**.
2. En **Target plan**, elija un plan Marketplace oficial superior.
3. Seleccione **Prepare upgrade by redeploying in Azure Marketplace**.
4. ProPM prepara la actualización y guarda una solicitud de actualización pendiente.
5. Seleccione **Open Azure Marketplace redeployment** cuando aparezca el enlace.
6. En Azure Marketplace, cree una nueva ProPM Managed Application con un nombre diferente.
7. Seleccione el nuevo plan Marketplace en Azure.
8. Deje que Azure Marketplace finalice la transacción comercial y cree el nuevo despliegue.
9. Después de la acción Marketplace, use **Refresh Marketplace plan** en ProPM para sincronizar la información detectada de plan y licencias.

La actualización del plan no modifica directamente la instancia Managed Application existente. Azure Marketplace requiere un nuevo redespliegue para aplicar el nuevo plan.

## Restricciones de downgrade

ProPM bloquea la aplicación técnica de downgrades dentro de la aplicación:

- se rechaza un plan inferior al plan actual;
- se rechaza una reducción del número de licencias pedidas;
- los cambios Marketplace que disminuyen la capacidad no se aplican automáticamente.

ProPM impide la aplicación técnica de un downgrade en la aplicación, pero la facturación Marketplace la gestionan Azure y Microsoft. Cualquier modificación comercial debe realizarse y validarse en Azure Marketplace.

## Refresh Marketplace plan

Use **Refresh Marketplace plan** para sincronizar ProPM con el estado Marketplace detectado para el tenant.

Esta acción:

- actualiza la información de plan y licencias después de una acción Marketplace;
- no ejecuta por sí sola una actualización de plan;
- no compra licencias suplementarias;
- no elimina ni cancela licencias.

## Licencias suplementarias durante una actualización de plan

Las licencias suplementarias ya compradas permanecen vinculadas al recurso Marketplace de origen.

Durante un redespliegue para una actualización de plan:

- las licencias suplementarias existentes siguen asociadas al despliegue antiguo o al recurso Marketplace de origen;
- el nuevo plan incluye su propia capacidad base;
- el cliente solo debe comprar licencias suplementarias en el nuevo despliegue si la capacidad incluida en el nuevo plan no es suficiente.

## Usuarios conectados licenciados

La lista **Licensed connected users** muestra los usuarios que consumen licencias actualmente.

Eliminar un usuario licenciado libera capacidad de aplicación para uso posterior, según las reglas de licencias del tenant. No cambia el plan Marketplace ni cancela uso facturado por Azure Marketplace.

## Actualizaciones de aplicación sin redespliegue Marketplace

La sección **Deployment & Updates** actualiza una instalación existente in place.

No hace lo siguiente:

- volver a ejecutar la oferta Azure Marketplace;
- crear un nuevo grupo de recursos;
- recrear recursos Azure que ya existen;
- aplicar una actualización de plan Marketplace.

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
- actualizaciones de plan Marketplace.

## Puntos clave

- Use **Tenant plan and licensed users** para administrar el plan Marketplace y la capacidad de licencias.
- Use solo planes Marketplace oficiales como planes objetivo.
- Use **Add licenses and bill in Azure** para licencias suplementarias facturadas por Azure Marketplace.
- Use **Prepare upgrade by redeploying in Azure Marketplace** para actualizaciones de plan.
- Use **Refresh Marketplace plan** solo para sincronizar el estado Marketplace detectado.
- Use **Deployment & Updates** para rollout in-place de imágenes de aplicación, no para cambios comerciales de plan.

## Siguiente

- [Despliegue Azure Marketplace](./deploiement-azure-marketplace.md)
- [Proveedores de IA e integraciones de plataforma](./ai-providers-platform-integrations.md)
- [Mantenimiento, soporte y FAQ](./maintenance-support-faq.md)
