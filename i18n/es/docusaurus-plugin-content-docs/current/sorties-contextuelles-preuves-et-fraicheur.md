---
title: Salidas estructuradas, evidencias y actualidad
slug: /sorties-contextuelles-preuves-et-fraicheur
description: Cómo leer correctamente una salida estructurada, sus evidencias, sus estados de actualidad y sus IDs de trazabilidad.
---

[Inicio](./index.md) · [Conocimiento y agentes](./connaissance-et-agents.md) · [Informes, registro de IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md)

![Vista Agentes](/img/screenshots/localized/es/04-agents.jpg)

## Objetivo

Esta página explica cómo interpretar una **salida estructurada** en ProPM Agent para decidir si el resultado es directamente utilizable, si debe ser revisado o si debe transformarse en un artefacto gobernado.

## Por qué es importante

ProPM Agent no solo devuelve un texto libre. Los runs pueden exponer además:

- un **resumen**;
- **hallazgos**;
- **decisiones a tomar**;
- **acciones**;
- **suposiciones**;
- **información faltante**;
- **puntos de vigilancia**;
- **evidencias**;
- metadatos de **actualidad** y **confianza**;
- **propuestas de artefactos**, **seguimientos** y **notificaciones**.

## Dónde aparecen estas informaciones

Las salidas estructuradas y sus metadatos son visibles en varias superficies:

- **Agentes**, justo después de un run;
- **Registro de IA**, en el detalle de un run;
- **Informes y artefactos**, a través del linaje entre run, artefacto y PM Doc.

![Ejemplo de salida estructurada en el espacio de proyecto](/img/screenshots/localized/es/03-workspace-structured-output.jpg)

## Cómo leer una salida estructurada

### Orden de lectura recomendado

1. lea el **Resumen**;
2. abra luego **Decisiones necesarias** o **Acciones**;
3. verifique la sección **Evidencia**;
4. relea la **Confianza** y la **Actualidad de la fuente**;
5. decida luego si la respuesta puede permanecer en el chat, convertirse en un borrador de artefacto o necesitar una revisión humana.

### Significado de las secciones

| Sección | Para qué sirve |
| --- | --- |
| Resumen | Versión más corta del resultado, lista para ser revisada rápidamente |
| Hallazgos | Hechos, motivos o constataciones destacados por el run |
| Decisiones necesarias | Puntos que requieren un arbitraje humano |
| Acciones | Continuaciones recomendadas para ejecutar o planificar |
| Suposiciones | Condiciones implícitas de las que depende la respuesta |
| Información faltante | Información ausente que reduce la solidez del resultado |
| Puntos de vigilancia | Riesgos, contradicciones o temas a vigilar |
| Evidencia | Referencias que sirven como prueba o justificación |
| Estado del artefacto / Propuestas de artefacto | Indicaciones sobre la posible transformación del resultado en un artefacto gobernado |
| Seguimientos | Pasos de continuación propuestos |
| Notificaciones | Borradores o notificaciones sugeridas por el flujo |

## Ejemplo simplificado de lectura

El ejemplo a continuación es **ilustrativo**. Sirve para mostrar cómo releer una tarjeta estructurada antes de su reutilización:

> - **Resumen**: el lote crítico parece retrasado dos semanas.
> - **Hallazgos**: la última nota de planificación es más reciente que el conector de calendario gobernado.
> - **Decisiones necesarias**: ¿hay que rebaselar el hito del sponsor o solicitar una revalidación de planificación?
> - **Evidencia**: nota de planificación, extracto de informe semanal, estado del conector fuente.
> - **Actualidad de la fuente**: conocimiento `fresh`, conector de planificación `stale`.
> - **Puntos de vigilancia**: posible contradicción entre la comunicación del proyecto y el último dato sincronizado.

Lectura recomendada en este caso:

1. el **Resumen** le dice qué releer con prioridad;
2. la combinación **Evidencia** + **Actualidad de la fuente** le impide publicar demasiado rápido;
3. la presencia de un **Punto de vigilancia** y de una decisión a tomar empuja hacia una revisión humana, luego hacia un artefacto si el tema se vuelve formal.

## Dos casos frecuentes a distinguir

| Caso | Lectura práctica | Decisión recomendada |
| --- | --- | --- |
| **Confianza correcta pero actualidad insuficiente** | el razonamiento parece coherente, pero una parte de las fuentes es `stale` o `aging` | no difunda sin revalidación o sin refresco documental |
| **Confianza débil pero fuentes recientes** | las fuentes son recientes, pero el run aún señala faltas, contradicciones o suposiciones demasiado fuertes | mantenga la salida como trabajo exploratorio, luego relance la revisión o el run antes de formalizar |

Esta distinción evita tratar la **confianza** como una nota única. Una respuesta puede parecer sólida mientras se apoya en fuentes demasiado antiguas, o lo contrario.

## Cómo leer las evidencias

Cada evidencia o cita puede exponer varios elementos útiles:

- un **título** o nombre de fuente;
- un **URI fuente** o un nombre documental;
- un **fragmento**;
- una **página** o una **sección** cuando está disponible;
- una fecha de **sincronización**;
- un **sistema fuente**;
- una insignia de **actualidad**;
- un rango de **autoridad** cuando se expone.

### Qué hay que verificar antes de reutilizar una evidencia

1. ¿el fragmento respalda bien el mensaje mostrado?
2. ¿la fuente es identificable y reabrible?
3. ¿la actualidad es aceptable para el nivel de decisión esperado?
4. ¿varias evidencias cuentan lo mismo, o hay contradicción?

## Estados de actualidad

| Estado | Significado práctico | Reacción recomendada |
| --- | --- | --- |
| `fresh` | Fuente bastante reciente para un uso normal | Puede reutilizarse después de una revisión normal |
| `aging` | Fuente aún utilizable pero que se acerca a una necesidad de revalidación | Verificar rápidamente antes de una difusión amplia |
| `stale` | Fuente demasiado antigua para considerarse fiable sin un control complementario | Refrescar, reimportar o confirmar antes de la decisión |
| `conflicting` | La fuente contradice otra fuente pertinente | No arbitrar automáticamente; releer las evidencias |
| `unavailable` | La fuente no pudo ser confirmada o recuperada | Tratar como una alerta, no como una evidencia utilizable |

## Confianza

La **Confianza** es una señal global de solidez del resultado. Debe interpretarse junto con la actualidad y las evidencias, nunca de forma aislada.

Prevea una revisión humana adicional si ve:

- confianza débil;
- evidencias ausentes o poco específicas;
- estados `stale`, `conflicting` o `unavailable`;
- sección **Información faltante** importante;
- decisión o acción con impacto externo.

## Nivel de revisión según el impacto

| Nivel de impacto | Revisión mínima | Escalada recomendada |
| --- | --- | --- |
| Borrador interno de trabajo | verificar `Resumen`, `Hallazgos` y al menos una evidencia reabrible | mantener la salida en el chat si sigue siendo exploratoria |
| Coordinación de equipo o acción de proyecto interna | verificar evidencias, actualidad, información faltante y acciones propuestas | crear un artefacto si el resultado debe ser compartido o historizado |
| Decisión de sponsor, publicación, notificación externa o acción gobernada | releer todas las evidencias, arbitrar los estados `conflicting` / `stale`, conservar los IDs técnicos | pasar por **Informes y artefactos**, el **diff**, el **linaje** y el **Registro de IA** antes de la difusión |

## IDs de trazabilidad a conservar

| Campo | Uso |
| --- | --- |
| `Trace ID` | Encontrar precisamente el run o el evento del lado del soporte |
| `Structured output ID` | Identificar la salida estructurada realmente producida |
| `Context snapshot ID` | Comprender en qué contexto documental o de proyecto se ejecutó el run |

Estos campos son particularmente útiles cuando debe relacionar un run, un artefacto y un evento del **Registro de IA**.

## Cuándo transformar la salida en artefacto

El camino normal es:

1. pregunta de proyecto;
2. respuesta estructurada;
3. creación de un **borrador de artefacto**;
4. revisión del **diff** y del **linaje**;
5. aprobación o publicación.

Transforme una salida en artefacto cuando:

- debe convertirse en un entregable formal;
- debe pasar por una validación o publicación;
- debe conservar un linaje explícito hacia un run y sus evidencias;
- el contenido debe salir del chat para una difusión externa, una aprobación o una trazabilidad duradera.

Regla simple: mientras explore, el chat puede bastar; en cuanto un resultado debe ser **compartido, aprobado, publicado o conservado como traza**, pase por **Informes y artefactos**.

## Lista de verificación antes de reutilizar en un entregable

1. ¿el resumen corresponde bien a los hallazgos detallados?
2. ¿las acciones propuestas son coherentes con la situación del proyecto?
3. ¿las evidencias son lo suficientemente precisas para justificar la decisión?
4. ¿los estados de actualidad son aceptables?
5. ¿hay que crear un artefacto o basta con mantener la salida en el chat?

## Problemas comunes

### La respuesta parece correcta pero no aparece ninguna evidencia

Trate el resultado como un elemento a revisar antes de un uso externo. La ausencia de evidencia visible reduce la capacidad de justificar el contenido.

### Una evidencia es `conflicting`

No publique directamente. Abra la fuente, compare las referencias en desacuerdo y documente el arbitraje en el artefacto o en la gobernanza. Si el tema requiere una decisión formalizada, continúe hacia [Gobernanza, decisiones y acciones](./gouvernance-decisions-et-actions.md) en lugar de dejar el conflicto solo en el chat.

### Una evidencia es `unavailable`

Considere que la justificación no está estabilizada. Verifique la fuente en **Conocimiento**, la importación o el detalle del run en **Registro de IA**.

## Continuar

- [Conocimiento y agentes](./connaissance-et-agents.md)
- [Informes, registro de IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md)
- [Mantenimiento, soporte y preguntas frecuentes](./maintenance-support-faq.md)
