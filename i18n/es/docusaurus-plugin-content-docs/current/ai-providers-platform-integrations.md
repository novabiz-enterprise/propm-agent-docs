---
title: Proveedores de IA e integraciones de plataforma
slug: /ai-providers-platform-integrations
description: Preparar integraciones de plataforma, configurar proveedores de IA, validar readiness y entender la diferencia entre configuración de plataforma y uso de proyecto.
---

[Inicio](./index.md) · Proveedores de IA e integraciones de plataforma

![Administración de plataforma](/img/screenshots/localized/es/18-platform-administration-overview.jpg)

## Objetivo

Esta página cubre la preparación técnica de ProPM Agent a nivel de plataforma:

- **integraciones de plataforma** para conectores y proveedores de ingestión;
- **configuración de proveedores de IA** para los modelos usados en ejecución;
- readiness, validación, pruebas, salud y reglas de binding con proyectos.

Úsela para responder: **la plataforma está correctamente preparada para la organización antes de que los proyectos la utilicen?**

## Secciones visibles de administración

| Sección | Rol |
| --- | --- |
| Overview | resumen del estado general de preparación |
| Platform integrations | definiciones técnicas de conectores y proveedores de ingestión |
| AI provider settings | configuración, validación, prueba y activación del proveedor de IA |
| Tenant plan and licensed users | plan Marketplace, asientos pedidos, licencias suplementarias y usuarios licenciados |
| Audit / activity | historial de acciones administrativas |

Para plan Marketplace, licencias y rollout de imágenes de aplicación, use [Plan del tenant, usuarios licenciados y actualizaciones de la app](./seats-management-app-updates.md).

## Integraciones de plataforma vs integraciones de proyecto

Una regla central del producto es:

- el **nivel de plataforma** decide qué existe técnicamente;
- el **nivel de proyecto** decide qué se usa realmente en un proyecto concreto;
- la **gobernanza** decide quién puede actuar con la herramienta.

| Responsabilidad | Conservado en Administración de plataforma | Expuesto en integraciones de proyecto |
| --- | --- | --- |
| Configuración técnica | URLs de tenant, estrategia de autenticación, claves API, referencias secretas, scopes y definiciones de origen o destino | readiness de solo lectura, salud y motivos de bloqueo |
| Binding operativo | activar o desactivar el conector/proveedor empresarial y validar la salud técnica | **Bind to project**, **Validate binding** y **Disable** para disponibilidad en el proyecto |
| Guía de usuario | auditoría admin, historial de validación y configuración de tenant | enlaces contextuales como **Open Platform Administration** y **Open Knowledge imports** |

Para el detalle por familia de conectores, consulte [Conectores e integraciones](./connecteurs-jira-et-sharepoint).

## Reglas de validación y seguridad

Las validaciones de plataforma aplican requisitos específicos por proveedor:

- campos obligatorios;
- estrategia de autenticación compatible;
- URLs HTTPS cuando se requieren;
- puerto SFTP válido;
- origen o destino explícito;
- prueba de conectividad solo cuando el administrador o la configuración de plataforma la habilitan.

Los secretos, claves y referencias sensibles deben permanecer en la configuración de plataforma prevista para ello. No los coloque en una nota, carga de acción o descripción visible para usuarios de proyecto.

## Preparación y causas de bloqueo

Una integración puede bloquearse por:

- **policy**;
- **permission**;
- **health** pendiente de comprobación;
- definición de plataforma ausente;
- configuración o validación específica del proveedor incompleta;
- binding de proyecto no abierto.

Circuito recomendado de verificación:

1. vuelva a leer el bloqueo visto desde el proyecto;
2. abra **Platform Administration**;
3. verifique la definición técnica del conector o proveedor;
4. vuelva al proyecto para confirmar binding y uso autorizado.

## Familias de proveedores de IA

Las familias de proveedores visibles en el producto incluyen, entre otras:

- **OpenRouter**;
- **OpenAI-compatible**;
- **OpenAI**;
- **Azure OpenAI**.

| Proveedor | Cuándo elegirlo | Qué suele completarse |
| --- | --- | --- |
| **OpenRouter** | cuando se necesita comparar varias familias de modelos mediante una sola conexión | Base URL, clave, modelo por defecto |
| **OpenAI-compatible** | cuando la organización usa un gateway o endpoint compatible | endpoint exacto, auth, clave o secreto, modelo esperado |
| **OpenAI** | cuando la organización usa OpenAI directamente | URL, clave o secreto, modelo por defecto |
| **Azure OpenAI** | cuando la organización está centrada en Azure y quiere elegir despliegues Azure OpenAI | endpoint, versión de API, modo de auth, nombre del despliegue LLM |

## Readiness del proveedor de IA

| Estado | Qué significa |
| --- | --- |
| **Configuration** | los campos están guardados |
| **Validation** | la configuración superó las comprobaciones esperadas |
| **Test** | la conectividad real fue verificada |
| **Activate** | el proveedor está activado en la configuración admin |
| **Operational** | el proveedor puede considerarse utilizable |

Flujo simple de preparación:

1. abra **AI provider settings**;
2. seleccione el proveedor deseado;
3. complete los campos solicitados;
4. haga clic en **Save**;
5. haga clic en **Validate**;
6. haga clic en **Test**;
7. haga clic en **Activate**;
8. compruebe el resultado en **AI Log**.

## Particularidades de Azure OpenAI

Con **Azure OpenAI**, a menudo hay que completar:

- el **Endpoint**;
- la **API version**;
- el **authentication mode**;
- el **LLM deployment name**;
- opcionalmente el **Embeddings deployment name**.

Para detalles sobre la elección de un proveedor de IA durante el despliegue Marketplace, consulte [Despliegue Azure Marketplace](./deploiement-azure-marketplace.md).

## Proveedor efectivo vs proveedor seleccionado en despliegue

Distinga dos nociones:

- **Deployment-selected AI Provider**: proveedor elegido en la configuración inicial del entorno;
- **Effective AI Provider**: proveedor realmente usado en ejecución para un run concreto.

El valor efectivo es la referencia más fiable al investigar un run concreto. Aparece en **AI Log** y puede diferir del valor seleccionado durante el despliegue.

## Puntos clave

- el nivel de plataforma prepara conectores y proveedores;
- el nivel de proyecto abre su uso real;
- la gobernanza decide quién puede actuar;
- un proveedor de IA está listo solo cuando está registrado, validado, probado y activado;
- **AI Log** sigue siendo la referencia para confirmar el proveedor realmente usado.

## Siguiente

- [Portafolio](./portfolio.md)
- [Plan del tenant, usuarios licenciados y actualizaciones de la app](./seats-management-app-updates.md)
- [Conectores e integraciones](./connecteurs-jira-et-sharepoint)
- [Informes, Registro IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md)
