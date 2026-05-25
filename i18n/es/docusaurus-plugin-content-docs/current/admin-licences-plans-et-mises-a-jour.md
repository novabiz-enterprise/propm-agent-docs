---
title: Licencias, planes y actualizaciones
slug: /admin-licences-plans-et-mises-a-jour
description: Gestionar licencias de usuario, plan Marketplace, cambio de plan, datos existentes y actualizaciones.
---

# Licencias, planes y actualizaciones

Azure Marketplace es la fuente para compra, precio y facturación. ProPM Agent muestra capacidades y usuarios detectados.

Para una actualización in-place de imágenes use **Deployment & Updates**. Para cambio de plan o actualización mayor con datos existentes, cree un nuevo despliegue Marketplace y seleccione **Attach existing ProPM data resources**.

## Contadores

| Contador | Significado |
| --- | --- |
| Ordered seats | Capacidad comprada |
| Included seats | Incluidas en el plan |
| Supplemental seats | Compradas adicionalmente |
| Used seats | Licencias usadas |
| Remaining seats | Licencias restantes |

## Gestionar usuarios

1. Abra **Platform Administration**.
2. Abra **Tenant plan and licensed users**.
3. Revise la lista de usuarios.
4. Use **Release user** solo si el usuario ya no necesita acceso.

## Refresh Marketplace plan

Sincroniza información conocida. No compra licencias, no cambia plan y no modifica facturación.

## Cambio de plan o actualización mayor con datos existentes

Use este flujo cuando se necesita una nueva Managed Application de Marketplace pero deben conservarse los datos ProPM existentes.

1. Abra Azure Marketplace.
2. Seleccione el plan objetivo.
3. Cree un nuevo despliegue ProPM.
4. Seleccione **Attach existing ProPM data resources**.
5. Introduzca el Resource ID completo de la ProPM Managed Application anterior.
6. Deje los overrides vacíos salvo que soporte o la arquitectura los requieran.
7. Revise cutover, administración, CORS, supervisión, contraseña SQL y VNet CIDR.
8. Seleccione **Review + create**.

## Pantalla de actualización 1 - Adjuntar datos existentes

![Attach existing ProPM data resources para una actualización de despliegue](/img/deploiement/propm-update-attach-existing-data.png)

| Campo | Obligatorio | Qué introducir | Recomendación |
| --- | --- | --- | --- |
| **Environment Name** | Sí | Nombre corto del entorno, por ejemplo `prod`, `uat` o `test`. | Use un valor estable y no secreto. |
| **Installation mode** | Sí | **Attach existing ProPM data resources**. | Crea nueva capa de aplicación y reutiliza recursos de datos existentes. |
| **Previous ProPM Managed Application resource ID** | Sí | Resource ID Azure completo de la Managed Application ProPM anterior. | Copie **Id** desde **Properties**, no solo nombres. |
| **Existing Storage account resource ID (optional override)** | No | Resource ID del Storage Account existente. | Déjelo vacío por defecto. |
| **Existing Azure AI Search service resource ID (optional override)** | No | Resource ID del servicio Azure AI Search existente. | Rellene solo si falla autodescubrimiento. |
| **Existing SQL server resource ID (optional override)** | No | Resource ID del SQL Server existente. | Identifica el servidor, no la base. |
| **Existing SQL database name (optional override)** | No | Nombre de la base SQL existente. | Use solo si no se descubre automáticamente. |
| **Existing Cosmos DB account resource ID (optional override)** | No | Resource ID de la cuenta Cosmos DB existente. | Solo con necesidad explícita. |
| **Existing Document Intelligence account resource ID (optional override)** | No | Resource ID de la cuenta Document Intelligence existente. | Solo para recurso externo o personalizado. |
| **Existing Service Bus namespace resource ID (optional override)** | No | Resource ID del namespace Service Bus existente. | Déjelo vacío por defecto. |
| **Previous** | No | Volver al paso anterior. | No inicia despliegue. |
| **Next** | No | Avanzar al siguiente paso. | Úselo tras completar los campos requeridos. |
| **Review + create** | No | Validación Azure antes de crear. | Úselo al final. |

## Pantalla de actualización 2 - Cutover y plataforma

![Parámetros de transición y plataforma para actualización de despliegue](/img/deploiement/propm-update-cutover-settings.png)

| Campo | Obligatorio | Qué introducir | Recomendación |
| --- | --- | --- | --- |
| **Existing Event Grid topic resource ID (optional override)** | No | Resource ID del topic Event Grid existente. | Déjelo vacío salvo fallo de autodescubrimiento. |
| **Block previous deployment during cutover** | No, recomendado | Activar para bloquear el entorno anterior durante validación. | Evita escrituras paralelas en los mismos datos. |
| **Platform Administration Entra Group Object IDs** | Sí | Object IDs de grupos Entra para administración. | Use Object IDs, no nombres visibles. |
| **Platform Administration Bootstrap Users (optional)** | No | Usuarios bootstrap o recuperación. | Mantener mínimo. |
| **Allow Azure RBAC admin recovery** | No | Recuperación vía Azure RBAC. | Mantener si la gobernanza lo permite. |
| **Reuse previous AI provider configuration** | Recomendado | Reutilizar configuración IA anterior. | Los campos IA se ocultan; cambios después en Platform Administration. |
| **CORS Allowed Origins** | Según escenario | Orígenes web adicionales. | Vacío si no se requieren. |
| **Enable alerting (Azure Monitor)** | No | Activar alertas Azure Monitor. | Recomendado en producción. |
| **Enable debug logging** | No | Activar logs detallados. | Solo diagnóstico controlado. |
| **Password** | Sí | Contraseña SQL admin ProPM existente. | Necesaria para conectar la nueva capa con la base reutilizada. Tratar como secreto. |
| **Confirm password** | Sí | Mismo valor que **Password**. | Debe coincidir. |
| **VNet CIDR** | Sí | Rango privado, por ejemplo `10.0.0.0/16`. | Validar con red y evitar solapes. |

## Updates

Revise **Deployment & Updates** en una ventana controlada y conserve información de soporte para rollback si es necesario. No lo use para cambios de plan ni cutover a datos existentes.
