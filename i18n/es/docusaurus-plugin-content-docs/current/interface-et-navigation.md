---
title: Interfaz y navegación
slug: /interface-et-navigation
description: Comprender las pantallas principales, la barra lateral, la barra superior y el tablero de control.
---

[Inicio](./index.md) · [Inicio](./demarrage.md) · [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md)

![Tablero de ProPM Agent](/img/screenshots/localized/fr/01-dashboard.png)

## Objetivo

Esta página explica cómo orientarse en el shell de ProPM Agent, leer el **Tablero de control**, usar la **paleta de comandos**, interpretar las **notificaciones** y usar el panel **salud** para una verificación rápida cuando sea necesario.

## Visión general

La interfaz observada sigue una lógica simple:

1. la **barra lateral** abre los grandes dominios funcionales;
2. la **barra superior** cambia el proyecto actual y abre las herramientas rápidas;
3. la superficie central muestra el **contexto actual**;
4. varias pantallas cambian de estado según el **proyecto activo** y tus **derechos**.

## Navegación principal

| Entrada | Uso principal |
| --- | --- |
| Tablero de control | Leer el estado general y los próximos pasos sugeridos |
| Proyectos | Crear, abrir y cambiar de contexto de proyecto |
| Espacio de trabajo | Resumen del proyecto, señales, readiness y ajustes del proyecto |
| Conocimiento | Buscar, subir e importar los documentos de referencia |
| Agentes | Interactuar con los agentes disponibles y leer las salidas estructuradas |
| Informes y artefactos | Revisar, comparar, publicar o descargar los Documentos PM |
| Registro IA | Inspeccionar ejecuciones, eventos y metadatos de trazabilidad |
| Centro de mando de portafolio | Comparar varios proyectos mediante señales configurables |
| Administración de la plataforma | Gestionar integraciones, proveedor IA, suscripción y actividad de la plataforma |

## Tablero de control

El **Tablero de control** es la pantalla más útil justo después de iniciar sesión.

Consolida:

- métricas de situación;
- elementos de atención;
- próximos pasos recomendados;
- accesos rápidos a las zonas donde actuar;
- una vista previa de las señales abiertas y los elementos en revisión.

Úsalo como una **página de orientación**: si un proyecto no es activo, algunos bloques permanecen vacíos; si un proyecto está seleccionado, los indicadores se contextualizan.

### Cómo leer las grandes zonas del tablero de control

| Zona | Lo que sintetiza | Reflexión útil |
| --- | --- | --- |
| Tuiles de síntesis | contadores de proyectos, de conocimiento, de agentes activos, de señales abiertas, de borradores de notificaciones y de acciones en espera | identificar inmediatamente si el tema es una falta de contexto, un retraso de revisión o una cola gobernada |
| Cartas de puntuación | estado general de la entrega, ritmo de ejecución, cobertura de gobernanza y profundidad de conocimiento | leer estas cartas como puntos de orientación antes de abrir una pantalla de detalle |
| Bloques de readiness | fundación conocimiento, cobertura de automatización, postura de gobernanza y flujo de entrega | identificar qué pilar bloquea el uso normal del proyecto |
| Panel **Atención** | señales, acciones gobernadas y lista de vigilancia de conectores | ir a la **Espacio de trabajo** para tratar los bloqueos activos |
| Panel **Pulso** | último digest, notificaciones recientes, actividad reciente y estado de conectores | verificar lo que ha cambiado sin releer todo el historial del proyecto |
| Enlaces rápidos | accesos directos a **Espacio de trabajo**, **Conocimiento**, **Agentes**, **Informes y artefactos**, **AI Log** y **Portafolio** | abrir directamente la superficie correcta en lugar de navegar por pantalla a pantalla |

Los scores y los indicadores del tablero de control deben leerse como **puntos de priorización**, no como una conclusión aislada por sí mismos.

### ¿Qué hacer si el tablero de control parece contradictorio?

1. confirma primero el **proyecto activo** en la barra superior;
2. procesa luego las cartas como **señales de orientación**, no como la única fuente de verdad;
3. abre la **Espacio de trabajo** para verificar señales, readiness y bloqueos del proyecto;
4. abre el **Registro IA** si la duda se centra en una ejecución, una salida o un proveedor realmente usado;
5. si el tablero de control carga pero llama a una verificación complementaria, abre el **indicador de salud** antes de concluir sobre los datos mostrados.

![Barra superior y navegación global](/img/screenshots/localized/fr/01-navigation-topbar.png)

## Barra superior

| Elemento | Función |
| --- | --- |
| Selector de proyecto | Cambia el proyecto actual sin pasar por la lista completa |
| Paleta de comandos | Búsqueda rápida en las páginas y acciones comunes |
| Notificaciones | Muestra los elementos de atención reportados por el producto |
| Indicador de salud | Abre una lectura rápida del estado API, tiempo real y auth |
| Idioma | Cambia el idioma de la interfaz |
| Tema | Cambia la apariencia clara/oscura |
| Ayuda | Abre los mensajes de ayuda integrados |

## Paleta de comandos

La paleta de comandos está diseñada para la navegación rápida.

- **Windows / Linux** : `Ctrl+K`
- **macOS** : `Cmd+K`

Filtra las páginas y entradas disponibles por **nombre** y **descripción**. Úsala para volver rápidamente a **Registro IA**, **Administración de la plataforma** o cualquier ruta rara vez abierta.

## Notificaciones

El centro de notificaciones es accesible desde el icono de campana de la barra superior.

Capacidades observadas:

- contador de elementos no leídos;
- panel desplegable;
- **Marcar todo como leído**;
- **Borrar todo**;
- clic en una notificación para abrir la superficie vinculada cuando una navegación es proporcionada.

Las notificaciones pueden remontar especialmente los estados de agente, eventos de generación de informe, cargas de documentos y actualizaciones relacionadas con el Marketplace o la suscripción.

## Indicador de salud

El indicador de salud abre un panel de lectura rápida. Permite consultar:

- el estado **API**;
- el estado **realtime / WebSocket**;
- el estado **auth**;
- la **latencia** observada;
- un mensaje mostrado si la interfaz lo presenta;
- el proyecto actual cuando el contexto cuenta en la lectura del estado.

Abre‑lo si un agente parece **offline**, si las notificaciones no se refrescan más o si una verificación de disponibilidad es útil.

Si el panel indica un estado degradado mientras la interfaz sigue cargando, mantén este orden de lectura:

| Si la señal se refiere principalmente a… | Abrir después | Por qué |
| --- | --- | --- |
| la **autenticación** | [Inicio](./demarrage.md) | para distinguir inquilino, cuenta, `redirect URI`, grupo admin o sede |
| el **runtime**, la API, el WebSocket o la conectividad | [Mantenimiento, soporte y FAQ](./maintenance-support-faq.md) | para seguir el recorrido de verificación entre salud, proveedor IA, integraciones y ejecución |
| el **contexto del proyecto**, una pantalla vacía o una acción ausente | [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md) | para verificar el proyecto activo, el binding, la readiness y los derechos del proyecto |

Antes de escalar, registra el estado mostrado para **API**, **realtime**, **auth**, la **latencia**, el **proyecto actual** y la hora aproximada de la prueba. Estos elementos facilitan mucho el tratamiento por el equipo responsable.

## Contexto del proyecto y estados vacíos

Varios pantallas de ProPM Agent están vinculadas al proyecto activo. En práctica:

- **sin proyecto seleccionado**, algunas páginas muestran un estado vacío normal;
- **con proyecto seleccionado**, la misma página carga datos y acciones de ese proyecto;
- el cambio de proyecto modifica el contenido de **Conocimiento**, **Agentes**, **Informes y artefactos** y **Registro IA**.

Esta dependencia al contexto evita mezclar pruebas, conversaciones y entregables de varios proyectos.

## Idioma, tema y ayuda

El idioma de la interfaz puede cambiarse desde la barra superior. El cambio de tema mejora la comodidad de lectura, sin efecto sobre los datos del proyecto. Los catálogos de ayuda integrados cubren la navegación general, las páginas de proyecto, el Registro IA y los recordatorios de gobernanza.

## Consejos de navegación

- cambia de proyecto **antes** de abrir un agente o un informe;
- usa la **paleta de comandos** para encontrar rápidamente una superficie rara vez usada;
- vuelve al **Tablero de control** cuando pierdas el hilo del recorrido;
- si una acción parece ausente, distingue bien **lectura solo** y **acceso denegado**;
- abre el **indicador de salud** antes de concluir a una cuestión de disponibilidad de servicio.

## Siguiente

- [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md)
- [Conocimiento y agentes](./connaissance-et-agents.md)
- [Salidas estructuradas, pruebas y frescura](./sorties-contextuelles-preuves-et-fraicheur.md)
- [Informes, Registro IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md)
