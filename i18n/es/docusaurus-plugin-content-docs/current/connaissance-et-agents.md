---
title: Conocimiento y agentes
slug: /connaissance-et-agents
description: Alimentar la base de conocimiento del proyecto, iniciar intercambios con los agentes y explotar los resultados.
---

[Inicio](./index.md) · [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md) · [Salidas estructuradas, evidencias y actualidad](./sorties-contextuelles-preuves-et-fraicheur.md)

![Conocimiento del proyecto](/img/screenshots/localized/es/05-knowledge.png)

## Objetivo

Esta página explica cómo cargar o importar documentos, revisar los metadatos visibles en **Conocimiento** y luego utilizar el contexto del proyecto en **Agentes**.

## Conocimiento: lo que puede hacer

Capacidades observadas:

- búsqueda en los contenidos del proyecto;
- carga manual;
- actualización de datos;
- importación desde fuentes aprobadas;
- consulta del historial de importaciones;
- ordenación, filtrado y paginación de resultados.

## Tipos de archivos admitidos

Los tipos explícitamente aceptados en la interfaz incluyen, entre otros:

- **PDF**;
- **DOCX**, **ODT**, **RTF**, **TXT**, **Markdown**;
- **CSV**, **XLSX**, **XLSM**, **ODS**;
- **JSON**, **XML**;
- **PPTX**, **ODP**;
- **HTML / HTM**;
- **EML**, **EPUB**;
- **PNG**, **JPG**, **JPEG**, **BMP**, **TIFF**, **HEIF**.

## Importación desde fuentes aprobadas

El mecanismo de importación depende de los **Ingestion Providers** validados a nivel de plataforma y luego puestos a disposición del proyecto.

### Lo que muestra el selector de importación

Según la fuente, la interfaz puede mostrar:

- el nombre de la fuente;
- una **etiqueta de fuente** legible;
- la fecha de la última importación;
- un estado de actualidad o de salud;
- una explicación del bloqueo cuando la fuente no es utilizable.

### Cuando una importación está bloqueada

Una opción de importación puede no estar disponible debido a:

- entitlement;
- permiso;
- política;
- estado de salud degradado;
- binding del proyecto ausente o no listo.

## Historial de importación

El historial de importación permite verificar como mínimo:

- el nombre mostrado del proveedor;
- el estado de la ejecución;
- la actualidad después de la importación;
- el `trace ID`;
- los volúmenes descubiertos, importados, ignorados o fallidos;
- la fecha de finalización cuando está disponible.

## Leer la lista documental y la búsqueda

### Estados documentales visibles

La tabla documental expone al menos los siguientes estados:

- **Indexed**;
- **Ingesting**;
- **Failed**.

Un documento visible pero aún no recuperable en la búsqueda suele estar aún en fase **Ingesting**.

### Metadatos visibles en los resultados de búsqueda

Los resultados de búsqueda pueden mostrar:

- título;
- snippet;
- puntuación;
- sección;
- distintivo de actualidad;
- distintivo **source system**;
- enlace **Open source**;
- `Trace ID` de la búsqueda.

Estos elementos ayudan a juzgar rápidamente la procedencia, la calidad y la reutilización de una evidencia.

![Resultados de búsqueda en el conocimiento](/img/screenshots/localized/es/05-knowledge-search-results.png)

![Vista Agentes](/img/screenshots/localized/es/04-agents.png)

## Agentes: función de la página

La página **Agentes** explota el contexto del proyecto en conversación guiada.

Funciones confirmadas:

- lista de agentes disponibles;
- tarjeta resumen del agente seleccionado con **kind**, **scope**, **status** y dominios cubiertos;
- zona de conversación;
- salidas estructuradas y elementos de evidencia;
- sesiones guardadas en el navegador;
- creación y eliminación de agentes personalizados según los permisos;
- modo voz si el navegador lo permite.

## Cómo elegir un agente rápidamente

Cuando varias tarjetas son visibles, léalas en este orden:

| Campo | Qué mirar prioritariamente | Reflexión útil |
| --- | --- | --- |
| `kind` | tipo de agente o especialización de negocio | comience por el agente cuyo rol corresponda directamente a la tarea esperada |
| `scope` | alcance de visibilidad del agente | verifique si el agente está limitado al proyecto actual o es visible más ampliamente |
| `status` | disponibilidad práctica del agente | si el estado no inspira confianza, pase a un agente estándar antes de escalar |
| dominios cubiertos | temas anunciados en la tarjeta | utilícelos para evitar confiar una solicitud de planificación a un agente orientado a gobernanza o documentos |

En la práctica, elija primero un **agente estándar** si busca un recorrido nominal bien conocido. Pase a un **agente personalizado** cuando el equipo necesite instrucciones, un tono o un perímetro de trabajo más especializado.

## Cómo trabajar con los agentes

1. **verifique el proyecto activo**;
2. **elija el agente adecuado**;
3. formule una solicitud explotable con objetivo, alcance y formato esperado;
4. revise la **salida estructurada** antes de cualquier reutilización.

La interfaz también permite buscar en el roster de agentes para alcanzar más rápido al especialista correcto.

## Sesiones y memoria local

El historial del chat es local al navegador. En la práctica:

- la continuidad guardada está vinculada al par **proyecto + agente** en el navegador actual;
- una sesión se memoriza localmente en el equipo utilizado;
- cambiar de navegador o de máquina puede hacer desaparecer un hilo guardado;
- el primer prompt suele servir como título de sesión, lo que facilita la reanudación;
- no se debe tratar el navegador como un archivo central compartido.

## Agentes personalizados

La creación de agentes personalizados depende del nivel de permiso. Los puntos a recordar son:

- no todos los usuarios pueden crear un agente;
- el diálogo de creación recuerda el **contexto del proyecto** activo antes del guardado;
- los campos visibles cubren como mínimo **Name**, **Role / instructions** y **Scope**;
- elija **Project only** por defecto, a menos que el entorno exponga explícitamente un alcance más amplio;
- si la opción **All projects** está disponible, el agente se crea desde el proyecto actual pero puede permanecer visible en otros proyectos para la misma cuenta;
- si un agente multi-proyectos no aparece en otro lugar, verifique primero la misma cuenta y el acceso al proyecto objetivo;
- la eliminación de un agente personalizado sigue estando controlada;
- un agente personalizado sigue gobernado por las reglas del proyecto y de la plataforma.

### Ejemplo rápido de elección

| Necesidad | Elección recomendada |
| --- | --- |
| uso nominal, equipo amplio, comportamiento predecible | agente estándar |
| consignas específicas, tono de equipo, flujo de trabajo especializado | agente personalizado |
| uso limitado a un solo contexto de proyecto | **Project only** |
| mismo agente reutilizable en varios proyectos de la misma cuenta | **All projects** si la opción está realmente expuesta |

![Creación de un agente personalizado](/img/screenshots/localized/es/04-custom-agent-create.png)

## Voz y compatibilidad del navegador

La voz está expuesta en la experiencia **Agentes**. Depende explícitamente del soporte del navegador a las API de reconocimiento de voz.

Si la voz no está disponible:

- utilice la entrada de texto;
- verifique los permisos del micrófono del navegador;
- distinga una limitación del navegador de un problema de la aplicación;
- el reconocimiento de voz añade el texto en el compositor: revíselo antes de **Send**;
- si el botón del micrófono no está disponible o aparece un mensaje de incompatibilidad, pase inmediatamente a la entrada de texto;
- si el problema persiste, verifique primero el soporte de `SpeechRecognition` / `webkitSpeechRecognition`, luego el permiso del micrófono.

### Referencias prácticas para la voz

| Síntoma | Verificar primero | Reflexión útil |
| --- | --- | --- |
| Botón de micrófono ausente o inactivo | soporte de `SpeechRecognition` / `webkitSpeechRecognition` | cambie inmediatamente a la entrada de texto |
| Autorización de micrófono denegada | permiso del micrófono del navegador o del SO | reautorice el micrófono y luego reinicie la escucha |
| Transcripción incompleta | texto añadido en el compositor | revise, corrija y complete antes de **Send** |
| Error puntual durante la escucha | estado del navegador o sesión actual | detenga la captura, continúe con el teclado y luego reintente más tarde |

La entrada de texto sigue siendo el camino nominal de respaldo. Permite continuar el trabajo sin bloquear la ejecución por un problema local del navegador.

## Buenas prácticas

- cargue fuentes fiables y recientes en el **Conocimiento** antes de un análisis importante;
- revise el historial de importación cuando una fuente gestionada parezca ausente;
- solicite explícitamente **evidencias** o **citas** si la decisión debe justificarse;
- si una respuesta contiene estados `stale`, `conflicting` o `unavailable`, abra la página [Salidas estructuradas, evidencias y actualidad](./sorties-contextuelles-preuves-et-fraicheur.md) antes de la publicación.

## Continuar

- [Salidas estructuradas, evidencias y actualidad](./sorties-contextuelles-preuves-et-fraicheur.md)
- [Gobernanza, decisiones y acciones](./gouvernance-decisions-et-actions.md)
- [Informes, registro de IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md)
- [Mantenimiento, soporte y preguntas frecuentes](./maintenance-support-faq.md)
