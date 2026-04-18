---
title: Guía de usuario ProPM Agent
slug: /
description: "Documentación de usuario en español para ProPM Agent, cubriendo la ejecución de proyectos asistida por IA, la gobernanza, los conectores, la trazabilidad y el despliegue en Azure Marketplace."
---

> **Lectura altamente recomendada**
>
> Para lograr la adopción de ProPM Agent en la empresa y aprovechar plenamente la aplicación, se recomienda leer esta guía desde el inicio del proyecto y consultarla durante el despliegue, la configuración de conectores, la gobernanza y el uso diario.

Esta documentación describe **solo** las funciones observadas en la aplicación, en el código, en la configuración de despliegue y en las pruebas automatizadas de ProPM Agent.

Está organizada para dos públicos:

- **usuarios de negocio** que trabajan en un proyecto;
- **administradores técnicos** que gestionan el acceso, las integraciones, el proveedor IA, la suscripción y la supervisión.

![Vista general de la aplicación](/img/screenshots/localized/fr/01-dashboard.png)

## Busco la página correcta rápidamente

| Situación observada | Abrir primero | Luego |
| --- | --- | --- |
| No puedo iniciar sesión | [Inicio](./demarrage.md) | [Mantenimiento, soporte y FAQ](./maintenance-support-faq.md) para distinguir inquilino, `redirect URI`, sede o estado de salud |
| No aparece ningún proyecto | [Inicio](./demarrage.md) | [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md), luego [Mantenimiento, soporte y FAQ](./maintenance-support-faq.md) si la adición al proyecto o el rol siguen dudosos |
| Una acción es visible pero bloqueada | [Gobernanza, decisiones y acciones](./gouvernance-decisions-et-actions.md) | [Conectores e integraciones](./connecteurs-jira-et-sharepoint), luego [Portafolio y administración técnica](./portefeuille-et-administration-technique.md) si el bloqueo proviene de un conector, un binding o un entitlement |
| El proveedor IA no parece operativo | [Portafolio y administración técnica](./portefeuille-et-administration-technique.md) | [Mantenimiento, soporte y FAQ](./maintenance-support-faq.md) y [Informes, Registro IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md) para confirmar el proveedor efectivo |

Si buscas directamente un procedimiento de verificación o un punto de referencia de operación, abre [Mantenimiento, soporte y FAQ](./maintenance-support-faq.md).

## Ruta de lectura recomendada

| Si buscas… | Comienza aquí |
| --- | --- |
| Desplegar una nueva instancia en Azure | [Despliegue Azure Marketplace](./deploiement-azure-marketplace.md) |
| Iniciar sesión, verificar la autenticación y crear tu primer proyecto | [Inicio](./demarrage.md) |
| Entender la interfaz, la paleta, las notificaciones y la salud | [Interfaz y navegación](./interface-et-navigation.md) |
| Gestionar el contexto del proyecto y la configuración del espacio de trabajo | [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md) |
| Administrar miembros, roles, delegaciones y salvaguardas RBAC del proyecto | [Control de acceso y roles de proyecto](./controle-acces-et-roles.md) |
| Importar documentos, buscar pruebas y trabajar con los agentes | [Conocimiento y agentes](./connaissance-et-agents.md) |
| Leer correctamente una salida estructurada, sus pruebas y su frescura | [Salidas estructuradas, pruebas y frescura](./sorties-contextuelles-preuves-et-fraicheur.md) |
| Procesar señales, gobernanza y acciones que requieren aprobación | [Gobernanza, decisiones y acciones](./gouvernance-decisions-et-actions.md) |
| Revisar un artefacto, publicar un Documento PM e investigar en el Registro IA | [Informes, Registro IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md) |
| Entender los conectores e integraciones soportados | [Conectores e integraciones](./connecteurs-jira-et-sharepoint) |
| Comparar proyectos, gestionar integraciones, IA y sedes | [Portafolio y administración técnica](./portefeuille-et-administration-technique.md) |
| Consultar los procedimientos de soporte y verificación | [Mantenimiento, soporte y FAQ](./maintenance-support-faq.md) |
| Aclarar los términos del producto | [Glosario](./glossaire.md) |

## Ruta rápida por perfil

| Perfil | Páginas a abrir con prioridad |
| --- | --- |
| Usuario de negocio / colaborador | [Inicio](./demarrage.md) → [Interfaz y navegación](./interface-et-navigation.md) → [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md) → [Conocimiento y agentes](./connaissance-et-agents.md) → [Salidas estructuradas, pruebas y frescura](./sorties-contextuelles-preuves-et-fraicheur.md) |
| Propietario de proyecto | [Inicio](./demarrage.md) → [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md) → [Control de acceso y roles de proyecto](./controle-acces-et-roles.md) → [Gobernanza, decisiones y acciones](./gouvernance-decisions-et-actions.md) → [Conectores e integraciones](./connecteurs-jira-et-sharepoint) → [Informes, Registro IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md) |
| Administrador técnico | [Despliegue Azure Marketplace](./deploiement-azure-marketplace.md) → [Inicio](./demarrage.md) → [Portafolio y administración técnica](./portefeuille-et-administration-technique.md) → [Conectores e integraciones](./connecteurs-jira-et-sharepoint) → [Mantenimiento, soporte y FAQ](./maintenance-support-faq.md) |
| Soporte / auditoría | [Inicio](./demarrage.md) → [Salidas estructuradas, pruebas y frescura](./sorties-contextuelles-preuves-et-fraicheur.md) → [Informes, Registro IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md) → [Gobernanza, decisiones y acciones](./gouvernance-decisions-et-actions.md) → [Glosario](./glossaire.md) |

## Ruta de extremo a extremo recomendada

En un uso real, el flujo más frecuente es el siguiente:

1. desplegar o recuperar la URL publicada;
2. iniciar sesión con una cuenta Microsoft Entra ID autorizada;
3. crear o seleccionar un **proyecto activo**;
4. dejar que el **creador del proyecto** delegue los primeros roles útiles;
5. cargar el **Conocimiento** del proyecto;
6. lanzar un intercambio en **Agentes**;
7. releer la **salida estructurada**, sus pruebas, su frescura y su confianza;
8. transformar el resultado en **artefacto** o en un **Documento PM**, luego revisarlo antes de descargar **DOCX / XLSX**, publicar o añadir a la conocimiento;
9. procesar las **señales proactivas**, las **Acciones & aprobaciones** y, si es necesario, los flujos de integraciones externas;
10. administrar a nivel de plataforma solo cuando el asunto trascienda el proyecto.

## Convención de etiquetas

Cuando la plataforma expone una traducción francesa, esta documentación prefiere la siguiente etiqueta:

- **Espacio de trabajo**;
- **Conocimiento**;
- **Documentos PM**;
- **Registro IA**;
- **Control de acceso**;
- **Políticas de gobernanza**;
- **Integraciones del proyecto**;
- **Integraciones de la plataforma**;
- **Parámetros del proveedor IA**;
- **Acciones & aprobaciones**.

Cuando una etiqueta en inglés sigue siendo útil para eliminar ambigüedad, se cita puntualmente en código, por ejemplo `Trace ID` o `OpenAI-compatible`.

## Qué cubre ProPM Agent

A partir de los comportamientos verificados, ProPM Agent organiza el trabajo alrededor del **contexto del proyecto**:

1. abres o creas un proyecto;
2. alimentas el **Conocimiento**;
3. consultas los **Agentes**;
4. relees las **salidas estructuradas**;
5. transformas esos resultados en **Documentos PM** y artefactos;
6. verificas la **trazabilidad** en el **Registro IA**;
7. procesas las **señales**, los **digestos**, los **borradores** y las **acciones gobernadas**;
8. usas los **conectores** y las **integraciones** solo cuando están validados y vinculados al proyecto;
9. los administradores pilotan la capa técnica en **Administración de la plataforma**.

## Arquitectura funcional observada

| Dominio | Lo que permite |
| --- | --- |
| Tablero de control | Ver el estado general, métricas, puntos de atención y próximos pasos |
| Proyectos | Crear, abrir y memorizar el contexto del proyecto |
| Espacio de trabajo | Agrupar resumen del proyecto, transparencia operativa, señales, accesos rápidos y ajustes del proyecto |
| Control de acceso | Gestionar miembros, roles estándar, roles personalizados y permisos del proyecto |
| Conocimiento | Buscar, subir, importar, releer metadatos y seguir el historial de ingestión |
| Agentes | Elegir un agente, lanzar un intercambio, usar entrada de voz en **Agentes** si el entorno lo expone todavía, y gestionar agentes personalizados según los derechos |
| Salidas estructuradas | Leer resumen, pruebas, frescura, confianza, propuestas de artefactos y pasos a seguir |
| Documentos PM / Informes y artefactos | Revisar, comparar, aprobar, publicar, descargar e reinjectar entregables en el conocimiento |
| Registro IA | Inspeccionar ejecuciones, actividad, IDs técnicos y transparencia del runtime IA |
| Conectores e integraciones | Separar definiciones de plataforma, bindings de proyecto, políticas de acción y ejecución gobernada |
| Centro de mando de portafolio | Comparar varios proyectos con señales, pesos, umbrales y cohortes guardadas |
| Administración de la plataforma | Gestionar integraciones, proveedor IA, suscripción, sedes y actividad de la plataforma |

## Lo que distingue la aplicación

Los siguientes elementos son explícitamente visibles en la interfaz, los datos sembrados o las pruebas:

- **salidas estructuradas** con secciones, pruebas, frescura, confianza y pasos a decidir;
- **linaje** entre una ejecución, una salida estructurada, un artefacto, una versión de artefacto y un Documento PM;
- **señales proactivas** para contradicciones, frescura, bloqueos, recordatorios y ciertas presiones de portafolio;
- **cadena documental gobernada** desde un resultado de agente hasta las descargas **DOCX / XLSX**, la publicación y la reinyección en el conocimiento;
- **conectores gobernados** separados entre **Integraciones de la plataforma**, **Integraciones del proyecto** y **Acciones & aprobaciones**;
- **transparencia del runtime IA** con proveedor efectivo, proveedor seleccionado en el despliegue y familia de modelo.

## Públicos y responsabilidades

| Perfil | Necesidades principales |
| --- | --- |
| Jefe de proyecto / PMO | Contexto del proyecto, agentes, entregables, señales, gobernanza y trazabilidad |
| Colaborador | Búsqueda en el conocimiento, generación de contenido, revisión de salidas y seguimiento de ejecuciones |
| Propietario del proyecto | Configuración del proyecto, delegación de roles, categorías de documentos, integraciones del proyecto y políticas de gobernanza |
| Administrador técnico / suscripción | Despliegue, autenticación, integraciones de la plataforma, proveedor IA, suscripción, sedes y supervisión |

## Capturas de pantalla y diagramas

Las capturas de la aplicación se generaron en el entorno observado. Cuando algunas capturas disponibles mostraban principalmente un estado de carga o datos de demostración incompletos, esta versión en español también incluye **diagramas explicativos** para mantener una lectura utilizable antes de la traducción y publicación final.

## Soporte y contacto

Utiliza el canal adecuado según la naturaleza de la solicitud:

| Tipo de solicitud | Enviar con prioridad |
| --- | --- |
| Soporte técnico | URL del despliegue, proyecto concerniente, situación observada, hora aproximada, `Trace ID` si es visible |
| Pregunta de acceso, inquilino o identidad | inquilino esperado, cuenta usada, URL realmente abierta, mensaje de Microsoft o captura de pantalla |
| Pregunta comercial o suscripción | contexto de la cuenta, plan concerniente, número de sedes o necesidad de capacidad |

Todas estas solicitudes pueden enviarse al siguiente punto de contacto:

- **NovaBiz**
- 131 Continental Dr, Suite 305
- Newark, DE 19713 · Estados Unidos
- [support@navabiz.pro](mailto:support@navabiz.pro)

## Siguiente

- [Inicio](./demarrage.md)
- [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md)
- [Conectores e integraciones](./connecteurs-jira-et-sharepoint)
- [Glosario](./glossaire.md)
