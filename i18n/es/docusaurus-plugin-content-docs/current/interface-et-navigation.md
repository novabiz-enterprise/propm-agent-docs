---
title: Interfaz y navegación
slug: /interface-et-navigation
description: Comprender las pantallas principales, la barra lateral, la barra superior y el panel.
---

[Inicio](./index.md) · [Primeros pasos](./demarrage.md) · [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md)

![Panel de ProPM Agent](/img/screenshots/localized/es/01-dashboard.png)

## Objetivo

Esta página explica cómo orientarse en el shell de ProPM Agent, leer el **Panel**, usar la **paleta de comandos**, interpretar las **notificaciones** y abrir el panel de **salud** cuando se sospecha un incidente.

## Vista general

La interfaz observada sigue una lógica simple:

1. la **barra lateral** abre las grandes áreas funcionales;
2. la **barra superior** cambia el proyecto actual y abre las herramientas rápidas;
3. la superficie central muestra el **contexto actual**;
4. varias pantallas cambian de estado según el **proyecto activo** y sus **permisos**.

## Navegación principal

| Entrada | Uso principal |
| --- | --- |
| Panel | Leer el estado general y los próximos pasos sugeridos |
| Proyectos | Crear, abrir y cambiar el contexto del proyecto |
| Espacio de trabajo | Resumen del proyecto, señales, preparación y ajustes del proyecto |
| Conocimiento | Buscar, cargar e importar los documentos de referencia |
| Agentes | Interactuar con los agentes disponibles y leer las salidas estructuradas |
| Informes y artefactos | Revisar, comparar, publicar o descargar los PM Docs |
| Registro de IA | Inspeccionar las ejecuciones, eventos y metadatos de trazabilidad |
| Centro de control del portafolio | Comparar varios proyectos mediante señales configurables |
| Administración de la plataforma | Gestionar integraciones, proveedor de IA, suscripción y actividad de la plataforma |

## Panel

El **Panel** es la pantalla más útil justo después de iniciar sesión.

Consolida:

- métricas de situación;
- elementos de atención;
- próximos pasos recomendados;
- accesos directos a las zonas donde actuar;
- una vista general de las señales abiertas y los elementos en revisión.

Úselo como una **página de orientación**: si un proyecto no está activo, algunos bloques permanecen vacíos; si se selecciona un proyecto, los indicadores se contextualizan.

### Cómo leer las grandes zonas del panel

| Zona | Lo que sintetiza | Reflexión útil |
| --- | --- | --- |
| Mosaicos de síntesis | contadores de proyectos, de conocimiento, de agentes activos, de señales abiertas, de borradores de notificaciones y de acciones pendientes | detectar inmediatamente si el tema es una falta de contexto, un retraso en la revisión o una cola gobernada |
| Tarjetas de puntuación | estado general de la entrega, del ritmo de ejecución, de la cobertura de gobernanza y de la profundidad del conocimiento | leer estas tarjetas como puntos de referencia de orientación antes de abrir una pantalla de detalle |
| Bloques de preparación | fundamento de conocimiento, cobertura de automatización, postura de gobernanza y flujo de entrega | identificar qué pilar bloquea el uso normal del proyecto |
| Panel **Atención** | señales, acciones gobernadas y lista de seguimiento de conectores | ir al **Espacio de trabajo** para tratar los bloqueos activos |
| Panel **Pulso** | último resumen, notificaciones recientes, actividad reciente y estado de conectores | verificar lo que acaba de cambiar sin releer todo el historial del proyecto |
| Enlaces rápidos | accesos directos a **Espacio de trabajo**, **Conocimiento**, **Agentes**, **Informes y artefactos**, **Registro de IA** y **Portafolio** | abrir directamente la superficie correcta en lugar de navegar pantalla por pantalla |

Las puntuaciones e indicadores del panel deben leerse como **puntos de referencia de priorización**, no como un diagnóstico exhaustivo por sí solos.

### ¿Qué hacer si el panel parece contradictorio?

1. confirme primero el **proyecto activo** en la barra superior;
2. trate luego las tarjetas como **señales de orientación**, no como la única fuente de verdad;
3. abra el **Espacio de trabajo** para verificar señales, preparación y bloqueos del proyecto;
4. abra el **Registro de IA** si la duda recae sobre una ejecución, una salida o un proveedor realmente utilizado;
5. si el panel se carga pero parece degradado, abra el **indicador de salud** antes de concluir una incoherencia de datos.

![Barra superior y navegación global](/img/screenshots/localized/es/01-navigation-topbar.png)

## Barra superior

| Elemento | Función |
| --- | --- |
| Selector de proyecto | Cambia el proyecto actual sin volver a pasar por la lista completa |
| Paleta de comandos | Búsqueda rápida en las páginas y acciones comunes |
| Notificaciones | Muestra los elementos de atención reportados por el producto |
| Indicador de salud | Abre un diagnóstico rápido sobre el estado de la API, tiempo real y autenticación |
| Idioma | Cambia el idioma de la interfaz |
| Tema | Alterna la apariencia clara/oscura |
| Ayuda | Abre los mensajes de ayuda integrados |

## Paleta de comandos

La paleta de comandos está diseñada para la navegación rápida.

- **Windows / Linux**: `Ctrl+K`
- **macOS**: `Cmd+K`

Filtra las páginas y entradas disponibles por **nombre** y **descripción**. Úsela para volver rápidamente al **Registro de IA**, **Administración de la plataforma** o cualquier ruta raramente abierta.

## Notificaciones

El centro de notificaciones es accesible desde el icono de campana de la barra superior.

Capacidades observadas:

- contador de elementos no leídos;
- panel desplegable;
- **Marcar todo como leído**;
- **Borrar todo**;
- clic en una notificación para abrir la superficie vinculada cuando se proporciona una navegación.

Las notificaciones pueden reportar, entre otros, estados de agente, eventos de generación de informes, cargas de documentos y actualizaciones relacionadas con el Marketplace o la suscripción.

## Indicador de salud

El indicador de salud abre un panel de diagnóstico rápido. Permite consultar:

- el estado de la **API**;
- el estado **tiempo real / WebSocket**;
- el estado de **autenticación**;
- la **latencia** observada;
- un posible texto de error;
- el proyecto actual cuando el contexto importa en el diagnóstico.

Ábralo si un agente parece **offline**, si las notificaciones ya no se actualizan o si la aplicación parece disponible pero parcialmente degradada.

Si el panel indica un estado degradado mientras la interfaz aún se carga, mantenga este orden de lectura:

| Si la señal concierne sobre todo… | Abra luego | Por qué |
| --- | --- | --- |
| la **autenticación** | [Primeros pasos](./demarrage.md) | para distinguir inquilino, cuenta, `redirect URI`, grupo de administración o sede |
| el **runtime**, la API, el WebSocket o la conectividad | [Mantenimiento, soporte y preguntas frecuentes](./maintenance-support-faq.md) | para seguir el circuito de remediación entre salud, proveedor, integraciones y ejecución |
| el **contexto del proyecto**, una pantalla vacía o una acción ausente | [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md) | para verificar el proyecto activo, el enlace, la preparación y los permisos del proyecto |

Antes de escalar, anote el estado mostrado para la **API**, **tiempo real**, **autenticación**, la **latencia**, el **proyecto actual** y la hora aproximada de la prueba. Estos elementos acortan considerablemente el diagnóstico de soporte.

## Contexto del proyecto y estados vacíos

Varias pantallas de ProPM Agent están vinculadas al proyecto actual. En la práctica:

- **sin proyecto seleccionado**, algunas páginas muestran un estado vacío normal;
- **con proyecto seleccionado**, la misma página carga los datos y acciones de ese proyecto;
- el cambio de proyecto modifica el contenido de **Conocimiento**, **Agentes**, **Informes y artefactos** y **Registro de IA**.

Esta dependencia del contexto evita mezclar evidencias, conversaciones y entregables de varios proyectos.

## Idioma, tema y ayuda

El idioma de la interfaz puede cambiarse desde la barra superior. El cambio de tema mejora la comodidad de lectura, sin efecto sobre los datos del proyecto. Los catálogos de ayuda integrados cubren la navegación general, las páginas de proyecto, el Registro de IA y los recordatorios de gobernanza.

## Consejos de navegación

- cambie de proyecto **antes** de abrir un agente o un informe;
- use la **paleta de comandos** para encontrar rápidamente una superficie raramente utilizada;
- vuelva al **Panel** cuando pierda el hilo del recorrido;
- si una acción parece ausente, distinga bien **solo lectura** y **acceso denegado**;
- abra el **indicador de salud** antes de concluir un incidente en el backend.

## Continuación

- [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md)
- [Conocimiento y agentes](./connaissance-et-agents.md)
- [Salidas estructuradas, evidencias y actualidad](./sorties-contextuelles-preuves-et-fraicheur.md)
- [Informes, registro de IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md)
