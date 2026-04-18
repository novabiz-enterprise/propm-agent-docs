---
title: Conocimiento y agentes
slug: /connaissance-et-agents
description: Alimentar la base de conocimiento del proyecto, comprender la proactividad de los agentes y aprovechar los resultados hasta los Documentos PM.
---

[Inicio](./index.md) · [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md) · [Salidas estructuradas, evidencias y actualidad](./sorties-contextuelles-preuves-et-fraicheur.md)

![Connaissance projet](/img/screenshots/localized/es/05-knowledge.png)

## Objetivo

Esta página explica cómo subir o importar documentos, revisar las metadatos visibles en **Conocimiento**, y luego usar el contexto del proyecto en **Agentes**.

## Conocimiento: lo que puedes hacer

Capacidades observadas:

- búsqueda en los contenidos del proyecto ;
- carga manual ;
- actualización de datos ;
- importación desde fuentes aprobadas ;
- consulta del historial de importaciones ;
- clasificación, filtrado y paginación de resultados.

## Tipos de archivos soportados

Los tipos explícitamente aceptados en la interfaz cubren entre otros:

- **PDF** ;
- **DOCX**, **ODT**, **RTF**, **TXT**, **Markdown** ;
- **CSV**, **XLSX**, **XLSM**, **ODS** ;
- **JSON**, **XML** ;
- **PPTX**, **ODP** ;
- **HTML / HTM** ;
- **EML**, **EPUB** ;
- **PNG**, **JPG**, **JPEG**, **BMP**, **TIFF**, **HEIF**.

## Importación desde fuentes aprobadas

El mecanismo de importación depende de los **proveedores de ingestión** validados a nivel de plataforma, y luego disponibles para el proyecto.

### Lo que muestra el selector de importación

Según la fuente, la interfaz puede mostrar:

- el nombre de la fuente ;
- una **source label** legible ;
- la fecha del último import ;
- un estado de frescura o salud ;
- una explicación de bloqueo cuando la fuente no es usable.

### Cuando una importación está bloqueada

Una opción de importación puede estar indisponible por causa de:

- entitlement ;
- permiso ;
- política ;
- estado de disponibilidad a verificar ;
- enlace de proyecto ausente o no listo.

## Historial de importación

El historial de importación permite verificar al menos:

- el nombre mostrado del proveedor ;
- el estado del run ;
- la frescura después de la importación ;
- el `Trace ID` ;
- los volúmenes descubiertos, importados, ignorados o señalados como no completados ;
- la fecha de fin cuando esté disponible.

## Leer la lista documental y la búsqueda

### Estados documentales visibles

La tabla documental expone al menos los siguientes estados:

- **Indexed** ;
- **Ingesting** ;
- **Failed**.

Un documento visible pero aún no recuperable en búsqueda suele estar en fase **Ingesting**.

### Metadatos visibles en los resultados de búsqueda

Los resultados de búsqueda pueden mostrar:

- título ;
- fragmento ;
- puntuación ;
- sección ;
- insignia de frescura ;
- insignia **source system** ;
- enlace **Open source** ;
- `Trace ID` de la búsqueda.

Estos elementos ayudan a juzgar rápidamente la procedencia, la calidad y la reutilizabilidad de una prueba.

![Resultados de búsqueda en el conocimiento](/img/screenshots/localized/es/05-knowledge-search-results.png)

![Vista Agentes](/img/screenshots/localized/es/04-agents.png)

## Agentes: rol de la página

La página **Agentes** explota el contexto del proyecto en conversación guiada.

Funciones confirmadas:

- lista de agentes disponibles ;
- tarjeta resumen del agente seleccionado con **kind**, **scope**, **status** y dominios cubiertos ;
- zona de conversación ;
- salidas estructuradas y elementos de prueba ;
- sesiones guardadas en el navegador ;
- creación y eliminación de agentes personalizados según los derechos ;
- entrada de voz en **Agentes** si el entorno todavía la admite.

## Proactividad de ProPM Agent

La proactividad en ProPM Agent no significa que un agente actúe solo fuera del proyecto. El comportamiento observado es más estructurado: la plataforma detecta situaciones a vigilar, las remonta en **signales**, puede preparar un **digest**, proponer un **brouillon** o una **acción gobernada**, y luego deja al usuario o aprobador decidir el siguiente paso.

![Proactividad, digest y acciones gobernadas](/img/diagrams/es/proactivite-et-gouvernance.svg)

### Disparadores observados

La proactividad puede alimentarse por:

- una **frescura** insuficiente ;
- una **contradicción** entre pruebas ;
- un **bloqueo** operativo ;
- una **presión de planificación** o **costes** visible en el portafolio ;
- ejecuciones no completadas ;
- una secuencia que requiere difusión, validación o reinicio.

### Dónde la proactividad se vuelve visible

- **Espacio de trabajo** : archivo de señales y elementos a revisar ;
- **Gobernanza, decisiones y acciones** : digest, borradores de notificación, solicitudes de acción ;
- **Centro de comando de portafolio** : comparación de proyectos por indicadores ;
- **Journal IA** : trazabilidad de la cadena de decisión.

### Lo que la proactividad no hace sola

- no elude los roles ;
- no elude las políticas ;
- no publica automáticamente fuera de la aplicación sin un camino gobernado ;
- sigue explicable por pruebas, frescura y estados visibles.

## Cómo elegir un agente rápidamente

Cuando varias tarjetas son visibles, léelas en este orden:

| Campo | Qué mirar en prioridad | Reflejo útil |
| --- | --- | --- |
| `kind` | tipo de agente o especialización profesional | comienza con el agente cuyo rol corresponde directamente a la tarea esperada |
| `scope` | alcance de visibilidad del agente | verifica si el agente está limitado al proyecto actual o es visible más ampliamente |
| `status` | disponibilidad práctica del agente | si el estado no inspira confianza, pasa a un agente estándar antes de escalar |
| dominios cubiertos | temas anunciados en la tarjeta | úsalos para evitar delegar una solicitud de planificación a un agente orientado a la gobernanza o documentos |

En práctica, elige primero un **agente estándar** si buscas un recorrido nominal bien conocido. Cambia a un **agente personalizado** cuando el equipo necesite instrucciones, un tono o un alcance de trabajo más especializado.

## Cómo trabajar con los agentes

1. **verifica el proyecto activo** ;
2. **elige el agente adecuado** ;
3. formula una solicitud explotable con objetivo, alcance y formato esperado ;
4. revisa la **salida estructurada** antes de cualquier reutilización.

La interfaz también permite buscar en el roster de agentes para encontrar más rápido al especialista adecuado.

## Agentes hacia los Documentos PM, DOCX y XLSX

Los agentes no saltan directamente a un archivo final difundido. El flujo observado es más progresivo:

1. un agente produce una **salida estructurada** ;
2. esta salida puede alimentar un **artefacto** o un **Documento PM** ;
3. los contenidos narrativos van más bien a un render **DOCX** ;
4. los contenidos tabulares o matriciales van más bien a un render **XLSX** ;
5. la revisión, aprobación, descarga y publicación se hacen luego en [Reportes, Journal IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md).

## Sesiones y memoria local

El historial de chat es local al navegador. En práctica:

- la continuidad guardada está vinculada al par **proyecto + agente** en el navegador actual ;
- una sesión se memoriza localmente en el equipo usado ;
- cambiar de navegador o máquina puede hacer desaparecer un hilo guardado ;
- el primer prompt suele servir como título de la sesión, lo que facilita la reanudación ;
- no se debe tratar el navegador como un archivo central compartido.

## Agentes personalizados

La creación de agentes personalizados depende del nivel de derecho. Los puntos a retener son:

- no todos los usuarios pueden crear un agente ;
- el diálogo de creación recuerda el **contexto del proyecto** activo antes de guardar ;
- los campos visibles cubren al menos **Name**, **Role / instructions** y **Scope** ;
- elige **Project only** por defecto, salvo que el entorno exponga explícitamente un alcance más amplio ;
- si la opción **All projects** está disponible, el agente se crea desde el proyecto actual pero puede seguir visible en otros proyectos del mismo cuenta ;
- si un agente multi-proyectos no aparece en otro lugar, verifica primero la misma cuenta y el acceso al proyecto objetivo ;
- la eliminación de un agente personalizado sigue controlada ;
- un agente personalizado sigue gobernado por las reglas del proyecto y de la plataforma.

### Ejemplo rápido de elección

| Necesidad | Elección recomendada |
| --- | --- |
| uso nominal, equipo amplio, comportamiento predecible | agente estándar |
| instrucciones específicas, tono de equipo, flujo de trabajo especializado | agente personalizado |
| uso limitado a un solo contexto de proyecto | **Project only** |
| mismo agente reutilizable en varios proyectos del mismo cuenta | **All projects** si la opción está realmente expuesta |

![Creación de un agente personalizado](/img/screenshots/localized/es/04-custom-agent-create.png)

## Entrada de voz en Agentes

Esta documentación ya no describe un punto de entrada de **voz** separado en el **Espacio de trabajo**. Cuando la entrada de voz sigue disponible, está limitada a la experiencia **Agentes** y depende explícitamente del soporte del navegador de las API de reconocimiento de voz.

Si la entrada de voz no está disponible:

- usa la entrada de texto ;
- verifica los permisos de micrófono del navegador ;
- distingue una limitación del navegador de una restricción local del entorno ;
- revisa siempre el texto añadido en el compositor antes de **Send** ;
- si el botón de micrófono no está disponible o aparece un mensaje de incompatibilidad, pasa inmediatamente a la entrada de texto.

### Puntos prácticos para la entrada de voz

| Síntoma | Verificar primero | Reflejo útil |
| --- | --- | --- |
| Botón de micrófono ausente o inactivo | soporte `SpeechRecognition` / `webkitSpeechRecognition` | cambia inmediatamente a la entrada de texto |
| Autorización de micrófono denegada | permiso de micrófono del navegador o del OS | reautoriza el micrófono y reinicia la escucha |
| Transcripción incompleta | texto añadido en el compositor | revisa, corrige y completa antes de **Send** |
| Error puntual durante la escucha | estado del navegador o sesión actual | detén la captura, reanuda con el teclado, luego intenta de nuevo más tarde |

La entrada de texto sigue siendo el camino nominal de respaldo. Permite continuar el trabajo sin interrumpir la ejecución por una restricción del navegador local.

## Buenas prácticas

- carga fuentes fiables y recientes en la **Conocimiento** antes de un análisis importante ;
- revisa el historial de importación cuando una fuente gestionada parezca ausente ;
- solicita explícitamente **pruebas** o **citaciones** si la decisión debe justificarse ;
- si una respuesta contiene estados `stale`, `conflicting` o `unavailable`, abre la página [Salidas estructuradas, pruebas y frescura](./sorties-contextuelles-preuves-et-fraicheur.md) antes de publicar.

## Siguiente

- [Salidas estructuradas, pruebas y frescura](./sorties-contextuelles-preuves-et-fraicheur.md)
- [Gobernanza, decisiones y acciones](./gouvernance-decisions-et-actions.md)
- [Reportes, Journal IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md)
- [Mantenimiento, soporte y FAQ](./maintenance-support-faq.md)
