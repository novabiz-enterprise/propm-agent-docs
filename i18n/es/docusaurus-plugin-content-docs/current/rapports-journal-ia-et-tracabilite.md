---
title: Informes, registro de IA y trazabilidad
slug: /rapports-journal-ia-et-tracabilite
description: Revisar los PM Docs, publicar entregables y seguir la trazabilidad completa de las ejecuciones de IA.
---

[Inicio](./index.md) · [Salidas estructuradas, evidencias y actualidad](./sorties-contextuelles-preuves-et-fraicheur.md) · [Portafolio y administración técnica](./portefeuille-et-administration-technique.md)

![Informes y artefactos](/img/screenshots/localized/es/08-reports-overview.jpg)

## Objetivo

Esta página explica la diferencia entre **artefacto**, **versión de artefacto** y **PM Doc**, y luego detalla el rol del **Registro de IA** para auditoría y soporte.

## Tres conceptos a distinguir

| Termino | Rol |
| --- | --- |
| Artefacto | Objeto gobernado resultante de una ejecución o trabajo de revisión |
| Versión de artefacto | Estado preciso de un artefacto, con historial, diff y linaje |
| PM Doc | Documento de proyecto revisado, editado, descargado, publicado o reinyectado en el conocimiento |

## Ciclo de vida

El flujo más común es:

1. un agente produce una **salida estructurada**;
2. esta salida se convierte en un **artefacto en borrador**;
3. el usuario abre **Informes y artefactos**;
4. revisa el contenido, consulta el **diff** y el **linaje**;
5. aprueba, publica, descarga o añade el documento al **Conocimiento**.

## Estados visibles

### Artefacto

Los estados confirmados en el nivel artefacto/versión son:

- `draft`
- `approved`
- `published`
- `superseded`

### PM Doc

Los PM Docs exponen al menos los siguientes estados de compatibilidad:

- `draft`
- `final`

## Si Informes y artefactos parece vacío

Un proyecto puede mostrar una superficie vacía por varias razones normales:

- todavía no se ha creado ningún **artefacto** ni **PM Doc**;
- el run se quedó en la etapa de **salida estructurada** sin transformación posterior;
- el proyecto equivocado o un filtro ocultan las filas esperadas;
- el entorno no contiene los mismos ejemplos precargados que las capturas de referencia.

En ese caso, vuelva primero a **Agentes** o al **Registro de IA**, y regrese a **Informes y artefactos** cuando ya exista un objeto gobernado.

## Acciones disponibles en Informes y artefactos

El hub expone acciones como:

- **review / preview**;
- **diff**;
- **lineage**;
- **edit**;
- **download**;
- **add to knowledge**;
- **publish**;
- **delete**.

## Diff, linaje y versionamiento

### Diff

El **diff** compara versiones de artefacto. Es especialmente útil para:

- revisar las diferencias antes de la publicación;
- distinguir una propuesta de un agente de una versión realmente validada;
- entender por qué un documento final difiere de un borrador anterior.

### Linaje

El **linaje** conecta entre sí:

- el `source run ID`;
- el `context snapshot ID`;
- el `structured output ID`;
- el artefacto y su versión;
- las publicaciones y evidencias vinculadas.

### Versionamiento

La interfaz también permite seleccionar una versión por número e identificar la versión anterior, la base de comparación o una versión sustituida.

## Aprobación y publicación

Recuerda estas reglas:

- **Approve** está disponible en una versión en estado `draft`;
- **Publish** se vuelve disponible cuando la versión está `approved` o ya `published`;
- la publicación envía formatos y destinos gobernados;
- la adición al conocimiento sigue siendo una acción distinta de la descarga y la publicación.

## Editores disponibles

El producto incluye varias superficies de edición:

- un editor enriquecido / markdown para salidas orientadas a documento;
- un editor tipo grilla para salidas orientadas a hoja de cálculo;
- un modo de revisión / fuente en lectura si el formato no es editable de la misma manera.

Descargas confirmadas: **DOCX** y **XLSX**.

### Limitaciones prácticas a tener en cuenta

| Caso | Lectura útil |
| --- | --- |
| contenido realmente editable | utilice el editor para la revisión y ajustes controlados antes de la aprobación |
| contenido principalmente en modo revisión | trate la pantalla como una superficie de validación, no como el lugar principal de reescritura |
| necesidad de un render de referencia para transmitir | la descarga gobernada sigue siendo la salida más confiable para compartir fuera de la aplicación |

![Editor PM Doc y revisión documental](/img/screenshots/localized/es/06-pm-doc-editor.jpg)

![Registro de IA](/img/screenshots/localized/es/09-ai-log-runs.jpg)

## Registro de IA: lo que cubre la página

El **Registro de IA** tiene dos pestañas distintas:

- **Runs**;
- **Activity**.

## Runs vs Activity

| Pestaña | Para qué sirve |
| --- | --- |
| Runs | Revisar una ejecución de agente, sus metadatos de trazabilidad y sus artefactos vinculados |
| Activity | Revisar una timeline de eventos del proyecto e inspeccionar el payload bruto de un evento |

### Cuando abrir Runs

Abra **Runs** para:

- entender por qué se produjo un resultado;
- encontrar el proveedor realmente utilizado;
- revisar la actualidad, la confianza y las citaciones;
- vincular una ejecución a un artefacto o a un PM Doc.

### Cuando abrir Activity

Abra **Activity** para:

- reconstruir una cronología;
- verificar que un borrador, una aprobación o una publicación haya dejado un evento;
- inspeccionar el payload bruto cuando realiza soporte o auditoría.

### Ejemplos de eventos útiles para confirmar en Activity

Según el flujo, **Activity** puede ayudarle a confirmar que un evento posterior se registró correctamente, por ejemplo:

- creación de un borrador;
- aprobación de un artefacto;
- publicación;
- preparación de una notificación;
- decisión de aprobación, rechazo o ejecución gobernada.

### Ejemplos concretos de `Type` / `Kind`

Los valores siguientes sirven como referencia para eventos comunes.

| Type | Kind | Lectura práctica |
| --- | --- | --- |
| `agent_execution` | `completed` / `failed` | una ejecución de agente terminó correctamente o falló |
| `document_upload` | `started` / `completed` / `failed` | un documento comenzó su ingestión, la completó o falló |
| `report_generated` | `completed` | un PM Doc o informe fue generado y registrado |
| `marketplace_update` | `completed` | una notificación o actualización del sistema fue registrada en el historial |

## Filtros y columnas visibles

### Runs

Filtros disponibles:

- búsqueda sobre agente / estado / run ID;
- filtro agente;
- filtro estado.

Columnas visibles: **Created**, **Agent**, **Status**, **Cost**, **Run ID**, **Actions**.

El campo **Cost** expone al menos los **tokens** y el número de **calls** cuando esta información está disponible.

### Cómo leer `Trace ID`, `Cost`, `Confidence` y `Source freshness`

Mantenga esta interpretación simple:

- **Run ID** es la referencia más práctica para volver a encontrar una fila visible en **Runs**;
- **Trace ID** sirve sobre todo para el diagnóstico entre servicios, el soporte y la correlación de auditoría;
- **Cost** (`tokens` / `calls`) muestra el uso en tiempo de ejecución para fines de transparencia e investigación, no una señal de aprobación de negocio por sí sola;
- **Confidence** es una señal de revisión, no una prueba por sí misma;
- **Source freshness** indica hasta qué punto las evidencias citadas siguen estando vigentes.

Si necesita una señal a nivel de portafolio sobre presión presupuestaria o de consumo, el indicador pertinente es **`cost_pressure`** en **Portafolio**, no la tarjeta bruta **Cost** de un run.

### Activity

Filtros disponibles:

- búsqueda sobre type / kind / actor;
- filtro type;
- filtro kind.

Columnas visibles: **Created**, **Type**, **Kind**, **Actor**, **ID**, **Actions**.

## Detalles técnicos visibles en una ejecución

El detalle de una ejecución puede exponer:

- `Trace ID`;
- `Context snapshot ID`;
- `Structured output ID`;
- citaciones;
- `Effective AI Provider`;
- `Deployment-selected AI Provider`;
- `Model family`;
- `Confidence`;
- `Source freshness`;
- artefactos vinculados.

## Transparencia runtime IA

La siguiente distinción es importante:

- **proveedor IA seleccionado en el despliegue**: elección inicial del entorno;
- **proveedor IA efectivo**: proveedor realmente utilizado para esta ejecución.

Estos dos valores pueden diferir. En caso de duda, el **Registro de IA** es válido para la ejecución actual.

### Lectura simple de `Effective AI Provider`

`Effective AI Provider` responde a la pregunta: **«¿qué proveedor atendió realmente este run concreto?»**

Para una investigación, este valor es más fiable que una suposición basada solo en la configuración administrativa, porque el valor de runtime puede diferir del proveedor seleccionado en el despliegue.

## Superficie a abrir primero según el síntoma

| Síntoma | Superficie a abrir primero | Por qué |
| --- | --- | --- |
| divergencia de contenido entre borrador y versión final | **Diff** | para ver qué realmente cambió |
| duda sobre la evidencia o la procedencia | **Linaje** | para vincular ejecución, salida estructurada, artefacto y fuentes |
| duda sobre el runtime, el proveedor o la ejecución IA | **Runs** | para revisar `Trace ID`, proveedor efectivo, actualidad y confianza |
| duda sobre la publicación, la aprobación o la continuación posterior | **Activity** | para confirmar la cronología y el payload bruto |

## Flujo de trabajo de investigación recomendado

Cuando un entregable, una publicación o una notificación parece dudosa, comience desde lo más visible hacia lo más técnico:

1. abra el **PM Doc** o el artefacto concernido;
2. consulte el **diff** para ver qué realmente cambió;
3. abra el **linaje** para identificar `source run ID`, `Context snapshot ID` y `Structured output ID`;
4. cambie a **Runs** para revisar actualidad, confianza, citaciones, proveedor IA efectivo y artefactos vinculados;
5. utilice **Activity** para confirmar la continuación del flujo: borrador, aprobación, publicación, notificación o acción gobernada;
6. conserve finalmente el **Trace ID** si la investigación debe ser retomada por el soporte o la auditoría.

### Caso 1 — un PM Doc final parece incorrecto

1. abra el **PM Doc** final y confirme la versión realmente publicada;
2. utilice **Diff** para identificar qué fue añadido, eliminado o reformulado;
3. abra **Linaje** para encontrar el `source run ID` y el `Structured output ID`;
4. en **Runs**, controle las evidencias, la actualidad y el proveedor efectivo;
5. si el contenido final no refleja el flujo esperado, termine en **Activity** para verificar la aprobación, la publicación y el actor que impulsó la versión.

### Caso 2 — una acción o notificación preparada no se completó

1. comience desde el borrador, la lista de acciones o la notificación visible;
2. identifique `relatedArtifactId` o `relatedNotificationId` cuando existan;
3. utilice **Activity** para confirmar si una aprobación, rechazo o ejecución fue registrada;
4. si la continuación sigue siendo confusa, vuelva a **Runs** para verificar la ejecución fuente y la lógica que produjo la recomendación;
5. documente finalmente el **Trace ID** y los identificadores vinculados antes de escalar.

## Qué IDs conservar prioritariamente

| Tipo de incidente | IDs a conservar prioritariamente |
| --- | --- |
| resultado de ejecución dudoso | `Trace ID`, `Context snapshot ID`, `Structured output ID` |
| artefacto o PM Doc final sospechoso | `source run ID`, `Structured output ID`, versión de artefacto concernida |
| acción o notificación sin continuación clara | `Trace ID`, `relatedArtifactId`, `relatedNotificationId` |
| investigación de soporte transversal | todos los IDs anteriores, más la hora aproximada y el proyecto concernido |

## Buenas prácticas de trazabilidad

- conserve el **Trace ID** cuando un resultado tiene importancia;
- antes de publicar, verifique el linaje entre el entregable y la evidencia;
- en caso de diferencia entre dos versiones, utilice el **diff** antes de arbitrar;
- añada al **Conocimiento** solo los entregables realmente revisados;
- utilice **Activity** para completar la investigación cuando **Runs** no es suficiente.

## Continuación

- [Salidas estructuradas, evidencias y actualidad](./sorties-contextuelles-preuves-et-fraicheur.md)
- [Portafolio y administración técnica](./portefeuille-et-administration-technique.md)
- [Mantenimiento, soporte y preguntas frecuentes](./maintenance-support-faq.md)
- [Glosario](./glossaire.md)
