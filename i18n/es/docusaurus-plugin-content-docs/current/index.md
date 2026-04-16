---
title: Guía de usuario de ProPM Agent
slug: /
description: Documentación de usuario y administrador para ProPM Agent.
---

Esta documentación describe **únicamente** las funciones observadas en la aplicación, en el código, en la configuración de despliegue y en las pruebas automatizadas de ProPM Agent.

Está organizada para dos públicos:

- **usuarios de negocio** que trabajan en un proyecto;
- **administradores técnicos** que gestionan el acceso, las integraciones, el proveedor de IA, la suscripción y la supervisión.

![Vista general de la aplicación](/img/screenshots/localized/es/01-dashboard.png)

## Busco resolver un problema

| Síntoma | Abra primero | Luego |
| --- | --- | --- |
| No puedo iniciar sesión | [Primeros pasos](./demarrage.md) | [Mantenimiento, soporte y preguntas frecuentes](./maintenance-support-faq.md) para distinguir tenant, `redirect URI`, sede o estado de salud |
| No aparece ningún proyecto | [Primeros pasos](./demarrage.md) | [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md), luego [Mantenimiento, soporte y preguntas frecuentes](./maintenance-support-faq.md) si la adición al proyecto o el rol siguen siendo dudosos |
| Una acción es visible pero está bloqueada | [Gobernanza, decisiones y acciones](./gouvernance-decisions-et-actions.md) | [Mantenimiento, soporte y preguntas frecuentes](./maintenance-support-faq.md), luego [Portafolio y administración técnica](./portefeuille-et-administration-technique.md) si el bloqueo proviene de un conector, un binding o un entitlement |
| El proveedor de IA no parece operativo | [Portafolio y administración técnica](./portefeuille-et-administration-technique.md) | [Mantenimiento, soporte y preguntas frecuentes](./maintenance-support-faq.md) e [Informes, registro de IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md) para confirmar el proveedor efectivo |

Si ya está en un incidente, abra directamente [Mantenimiento, soporte y preguntas frecuentes](./maintenance-support-faq.md) en lugar de seguir el recorrido de lectura normal.

## Recorrido de lectura recomendado

| Si busca… | Comience aquí |
| --- | --- |
| Desplegar una nueva instancia en Azure | [Despliegue en Azure Marketplace](./deploiement-azure-marketplace.md) |
| Conectarse, verificar la autenticación y crear su primer proyecto | [Primeros pasos](./demarrage.md) |
| Comprender la interfaz, la paleta, las notificaciones y la salud | [Interfaz y navegación](./interface-et-navigation.md) |
| Gestionar el contexto del proyecto y los ajustes del espacio de trabajo | [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md) |
| Administrar miembros, roles y salvaguardas RBAC del proyecto | [Control de acceso y roles del proyecto](./controle-acces-et-roles.md) |
| Importar documentos, buscar evidencias y trabajar con los agentes | [Conocimiento y agentes](./connaissance-et-agents.md) |
| Leer correctamente una salida estructurada, sus evidencias y su actualidad | [Salidas estructuradas, evidencias y actualidad](./sorties-contextuelles-preuves-et-fraicheur.md) |
| Procesar las señales, la gobernanza y las acciones que requieren aprobación | [Gobernanza, decisiones y acciones](./gouvernance-decisions-et-actions.md) |
| Revisar un artefacto, publicar un PM Doc e investigar en el Registro de IA | [Informes, registro de IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md) |
| Comparar proyectos, gestionar integraciones, IA y sedes | [Portafolio y administración técnica](./portefeuille-et-administration-technique.md) |
| Diagnosticar incidentes comunes y consultar los procedimientos de soporte | [Mantenimiento, soporte y preguntas frecuentes](./maintenance-support-faq.md) |
| Aclarar términos del producto | [Glosario](./glossaire.md) |

## Recorrido rápido por perfil

| Perfil | Páginas para abrir prioritariamente |
| --- | --- |
| Usuario de negocio / colaborador | [Primeros pasos](./demarrage.md) → [Interfaz y navegación](./interface-et-navigation.md) → [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md) → [Conocimiento y agentes](./connaissance-et-agents.md) → [Salidas estructuradas, evidencias y actualidad](./sorties-contextuelles-preuves-et-fraicheur.md) |
| Propietario del proyecto | [Primeros pasos](./demarrage.md) → [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md) → [Control de acceso y roles del proyecto](./controle-acces-et-roles.md) → [Gobernanza, decisiones y acciones](./gouvernance-decisions-et-actions.md) → [Informes, registro de IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md) |
| Administrador técnico | [Despliegue en Azure Marketplace](./deploiement-azure-marketplace.md) → [Primeros pasos](./demarrage.md) → [Portafolio y administración técnica](./portefeuille-et-administration-technique.md) → [Mantenimiento, soporte y preguntas frecuentes](./maintenance-support-faq.md) |
| Soporte / auditoría | [Primeros pasos](./demarrage.md) → [Salidas estructuradas, evidencias y actualidad](./sorties-contextuelles-preuves-et-fraicheur.md) → [Informes, registro de IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md) → [Mantenimiento, soporte y preguntas frecuentes](./maintenance-support-faq.md) → [Glosario](./glossaire.md) |

## Recorrido de extremo a extremo recomendado

En un uso real, el flujo más frecuente es el siguiente:

1. desplegar o recuperar la URL publicada;
2. iniciar sesión con una cuenta Microsoft Entra ID autorizada;
3. crear o seleccionar un **proyecto activo**;
4. cargar el **Conocimiento** del proyecto;
5. iniciar un intercambio en **Agentes**;
6. revisar la **salida estructurada**, sus evidencias, su actualidad y su confianza;
7. transformar el resultado en **artefacto** o **PM Doc**;
8. verificar el linaje y los detalles técnicos en el **Registro de IA**;
9. procesar las **señales**, las **acciones gobernadas** y, si es necesario, la comparación de **portafolio**;
10. administrar a nivel de plataforma solo cuando el tema trascienda el proyecto.

## Convención de etiquetas

La interfaz puede mostrar etiquetas en inglés. En esta documentación, las equivalencias más útiles son:

- **Espacio de trabajo** = `Workspace`
- **Conocimiento** = `Knowledge`
- **Informes y artefactos** = `Reports` / `PM Docs` según el contexto
- **Registro de IA** = `AI Log`
- **Administración de la plataforma** = `Platform Administration`
- **Control de acceso** = `Access control`

## Lo que cubre ProPM Agent

A partir de los comportamientos verificados, ProPM Agent organiza el trabajo alrededor del **contexto del proyecto**:

1. abre o crea un proyecto;
2. alimenta el **Conocimiento**;
3. consulta a los **Agentes**;
4. revisa las **salidas estructuradas**;
5. transforma estos resultados en **Informes y artefactos**;
6. verifica la **trazabilidad** en el **Registro de IA**;
7. procesa las **señales** y las **acciones gobernadas**;
8. los administradores gestionan la capa técnica en **Administración de la plataforma**.

## Arquitectura funcional observada

| Dominio | Lo que permite |
| --- | --- |
| Panel | Ver el estado general, las métricas, los puntos de atención y los próximos pasos |
| Proyectos | Crear, abrir y memorizar el contexto del proyecto |
| Espacio de trabajo | Agrupar resumen del proyecto, transparencia operativa, señales, accesos directos y ajustes del proyecto |
| Control de acceso | Gestionar miembros, roles estándar, roles personalizados y permisos del proyecto |
| Conocimiento | Buscar, cargar, importar, revisar metadatos y seguir el historial de ingesta |
| Agentes | Elegir un agente, iniciar un intercambio, usar la voz si el navegador lo permite y gestionar agentes personalizados según los permisos |
| Salidas estructuradas | Leer resumen, evidencias, actualidad, confianza, propuestas de artefactos y siguientes pasos |
| Informes y artefactos | Revisar, comparar, aprobar, publicar, descargar y reinyectar PM Docs en el conocimiento |
| Registro de IA | Inspeccionar los runs, la actividad, los IDs técnicos y la transparencia del runtime de IA |
| Centro de mando de portafolio | Comparar múltiples proyectos con señales, pesos, umbrales y cohortes guardadas |
| Administración de la plataforma | Gestionar integraciones, proveedor de IA, suscripción, sedes y actividad de la plataforma |

## Lo que distingue a la aplicación

Los siguientes elementos son explícitamente visibles en la interfaz o las pruebas:

- **salidas estructuradas** con secciones, evidencias, actualidad, confianza y siguientes pasos a decidir;
- **linaje** entre un run, una salida estructurada, un artefacto, una versión de artefacto y un PM Doc;
- **señales proactivas** para contradicciones, actualidad, bloqueos y recordatorios;
- **acciones gobernadas** con propuesta, aprobación, ejecución y trazabilidad;
- **separación clara** entre definiciones técnicas de nivel de plataforma y bindings de uso a nivel de proyecto;
- **transparencia del runtime de IA** con proveedor efectivo, proveedor seleccionado en el despliegue y familia de modelo.

## Públicos y responsabilidades

| Perfil | Necesidades principales |
| --- | --- |
| Jefe de proyecto / PMO | Contexto del proyecto, agentes, entregables, señales, gobernanza y trazabilidad |
| Colaborador | Búsqueda en el conocimiento, generación de contenido, revisión de salidas y seguimiento de runs |
| Propietario del proyecto | Configuración del proyecto, roles, categorías de documentos, integraciones del proyecto y políticas de gobernanza |
| Administrador técnico / suscripción | Despliegue, autenticación, integraciones de plataforma, proveedor de IA, suscripción, sedes y supervisión |

## Capturas de pantalla

Las capturas de la aplicación se generaron en el entorno observado. La página de despliegue utiliza además las capturas de Azure Portal proporcionadas para ilustrar la instalación.

## Soporte y contacto

Utilice el canal adecuado según la naturaleza de la solicitud:

| Tipo de solicitud | A transmitir prioritariamente |
| --- | --- |
| Soporte técnico | URL del despliegue, proyecto afectado, síntoma exacto, hora aproximada, `Trace ID` si es visible |
| Problema de acceso, de tenant o de identidad | tenant esperado, cuenta utilizada, URL realmente abierta, mensaje de Microsoft o captura de pantalla |
| Pregunta comercial o de suscripción | contexto de la cuenta, plan afectado, número de sedes o necesidad de capacidad |

Todas estas solicitudes pueden enviarse al siguiente punto de contacto:

- **NovaBiz**
- 131 Continental Dr, Suite 305
- Newark, DE 19713 · Estados Unidos
- [support@navabiz.pro](mailto:support@navabiz.pro)

## Continuar

- [Primeros pasos](./demarrage.md)
- [Salidas estructuradas, evidencias y actualidad](./sorties-contextuelles-preuves-et-fraicheur.md)
- [Control de acceso y roles del proyecto](./controle-acces-et-roles.md)
- [Glosario](./glossaire.md)
