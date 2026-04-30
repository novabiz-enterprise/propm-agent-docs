---
title: Gestión de asientos y actualizaciones de la app
slug: /seats-management-app-updates
description: Gestionar asientos de suscripción y actualizar una instalación existente desde administración sin volver a desplegar recursos Marketplace.
---

[Inicio](./index.md) · [Portafolio](./portfolio.md) · [Proveedores de IA e integraciones de plataforma](./ai-providers-platform-integrations.md)

## Objetivo

Esta página cubre dos temas de administración separados del trabajo de proyecto:

- **gestión de asientos** para licencias, usuarios asignados y estado de suscripción;
- **Deployment & Updates** para el rollout in-place de imágenes de aplicación en Azure Container Apps existentes.

Úsela para responder: **quién puede acceder a la aplicación y cómo se actualiza una instalación existente sin volver a Marketplace?**

## Suscripción y asientos

El producto gestiona un modelo de licencias por asientos. Todos los planes Marketplace ofrecen las mismas funcionalidades de aplicación; solo cambia el número de licencias/asientos.

### Qué puede ver un administrador

- el **plan** activo;
- el número de **asientos comprados**;
- el número de **asientos usados**;
- el número de **asientos disponibles**;
- usuarios ya licenciados;
- estado comercial, por ejemplo `billing state`, `payment state` o `subscription status`.

### Por qué importa

Un usuario bloqueado no necesariamente tiene un problema de conexión. El bloqueo puede venir de:

- ningún asiento disponible;
- un usuario retirado que debe ser reasignado por un administrador;
- rol insuficiente, proyecto inaccesible, binding, policy, configuración o estado health que corregir.

Los planes Marketplace no bloquean conectores, proveedores de IA ni funcionalidades del producto. Si todavía aparece una etiqueta técnica `entitlement` en la interfaz o los logs, trátela como un indicador heredado/no relacionado con una diferencia funcional de plan.

## Liberar o reasignar un asiento

Esto se hace desde **Platform Administration** por un perfil autorizado.

Una eliminación libera el asiento para una reasignación posterior, sujeta a reglas de suscripción/licencia y a una posible ventana de retirada. La operación cambia la asignación de acceso; no cambia las funcionalidades incluidas en el plan.

## Actualizaciones de aplicación sin redespliegue Marketplace

La sección **Deployment & Updates** actualiza una instalación existente **in place**.

No hace lo siguiente:

- volver a ejecutar la oferta Azure Marketplace;
- crear un nuevo grupo de recursos;
- recrear recursos Azure que ya existen.

En la práctica, administración lee el inventario de imágenes de las **Azure Container Apps** existentes mediante Azure Resource Manager, compara las imágenes actuales con las imágenes objetivo aprobadas en ACR y envía nuevas revisiones a las Container Apps existentes.

## Acciones de actualización disponibles

| Acción | Propósito |
| --- | --- |
| **Check for updates** | comprobar imágenes actuales, imágenes objetivo, candidatos de actualización de tags mutables y versión opcional del manifiesto |
| **Apply update** | aplicar nuevas imágenes a servicios seleccionados creando nuevas revisiones de Container Apps |
| **Rollback last update** | volver a imágenes anteriores cuando la última operación capturó las referencias necesarias |
| **Container App image inventory** | revisar grupo de recursos gestionado, servicios seguidos, imágenes actuales, imágenes objetivo y estado de revisiones |

## Prerrequisitos importantes

- el usuario debe tener derechos de operación de despliegue o administración de plataforma;
- la identidad runtime debe poder leer y parchear Container Apps mediante Azure Resource Manager;
- el entorno debe conocer la suscripción y el grupo de recursos mediante `AZURE_SUBSCRIPTION_ID` y `AZURE_RESOURCE_GROUP_ID`, `AZURE_RESOURCE_GROUP` o `AZURE_RESOURCE_GROUP_NAME`;
- las imágenes objetivo deben venir de un manifiesto de actualización, configuración de imágenes objetivo o tag de aplicación autorizado.

## Límites de alcance

Esta operación cubre el **rollout de imágenes de aplicación**.

El botón de administración no cubre:

- migraciones de esquema de base de datos;
- creación de nuevos recursos Azure;
- cambios de arquitectura;
- un nuevo despliegue Marketplace.

Si la actualización incluye el servicio orquestador, la interfaz puede indicar que la solicitud fue enviada mientras el servicio se reemplaza a sí mismo.

## Referencias técnicas de plataforma

La infraestructura Azure del despliegue se apoya, entre otros, en:

- Azure Container Apps;
- Storage;
- Azure AI Search;
- Key Vault;
- Log Analytics;
- Application Insights;
- Document Intelligence.

## Puntos clave

- los asientos controlan la asignación de acceso, no niveles funcionales;
- todos los planes Marketplace exponen las mismas funcionalidades del producto;
- las actualizaciones de aplicación se aplican in-place a Container Apps existentes;
- Marketplace instala el entorno inicial, mientras **Deployment & Updates** lo mantiene;
- use rollback solo cuando existan referencias de imágenes anteriores.

## Siguiente

- [Despliegue Azure Marketplace](./deploiement-azure-marketplace.md)
- [Proveedores de IA e integraciones de plataforma](./ai-providers-platform-integrations.md)
- [Mantenimiento, soporte y FAQ](./maintenance-support-faq.md)
