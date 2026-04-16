---
title: Gobernanza, decisiones y acciones
slug: /gouvernance-decisions-et-actions
description: Aprovechar las señales, aplicar las reglas de gobernanza y gestionar las acciones que requieren aprobación.
---

[Inicio](./index.md) · [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md) · [Informes, registro de IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md)

![Bandeja de entrada de señales](/img/screenshots/localized/es/15-workspace-signals.png)

## Objetivo

Esta página explica cómo procesar las **señales**, utilizar las reglas de gobernanza del proyecto y comprender por qué una acción puede ser visible pero no ejecutable.

## Vista general

En ProPM Agent, la gobernanza se manifiesta en varias superficies:

- las **señales** que llaman la atención;
- las **políticas de gobernanza** a nivel de proyecto;
- los **controles de acceso**;
- las **acciones y aprobaciones** antes del impacto externo;
- la **trazabilidad** visible en los artefactos y el Registro de IA.

## Señales: qué representan

Las señales observadas sirven para elevar temas que merecen un tratamiento explícito, por ejemplo:

- una **actualidad** insuficiente;
- una **contradicción** entre evidencias;
- un **bloqueo** operativo;
- un **seguimiento** que requiere decisión o difusión.

## Cómo procesar las señales

La bandeja de entrada de señales permite:

- releer las señales abiertas;
- actualizar su estado;
- preparar un **resumen**;
- generar un borrador de notificación;
- pausar una señal;
- descartar un elemento cuando ya no es pertinente.

### Paso a paso de triaje recomendado

Para evitar procesar una señal únicamente "por intuición", mantenga este orden simple:

1. lea primero el **resumen**;
2. confirme luego la **explicación** y los indicios de **actualidad**;
3. verifique si la señal es **recurrente** o si se basa en múltiples evidencias;
4. elija finalmente entre **Create draft**, **Snooze 24h** o **Dismiss** según el nivel de acción realmente útil.

Este triaje evita transformar demasiado rápido un simple recordatorio en una acción gobernada, manteniendo al mismo tiempo un registro claro de los temas realmente prioritarios.

## Estados, modos e información visible en una señal

### Estados útiles

| Estado | Significado práctico | Acción típica |
| --- | --- | --- |
| `open` | La señal permanece activa en la cola actual | procesar, crear un borrador, pausar o descartar |
| `snoozed` | El tema se pausa temporalmente | volver después de `snoozedUntil` o después del próximo punto de control |
| `dismissed` | La señal se retira de la vista activa mientras ninguna nueva condición la reabra | conservar el rastro, sin dejar que el elemento abarrota la cola |
| `resolved` | El tema se considera procesado | guardar el historial para auditoría, sin nueva acción inmediata |

### Modos visibles

| Modo | Lectura útil |
| --- | --- |
| `inform` | información para releer sin acción inmediata obligatoria |
| `suggest` | tema acompañado de próximos pasos propuestos |
| `draft` | tema ya orientado hacia un borrador o una formulación preparatoria |
| `request_approval` | tema que requiere una etapa de aprobación explícita |

### Qué muestra una tarjeta de señal

Una tarjeta de señal puede mostrar:

- la **severidad**, el **estado** y el **modo**;
- un **título**, un **resumen** y una **explicación** del desencadenamiento;
- un número de **evidencias** y de **redesencadenamientos**;
- insignias de **actualidad de la fuente**;
- `last detected` y, si es necesario, `snoozed until`;
- acciones como **Create draft**, **Snooze 24h** y **Dismiss** cuando el rol lo autoriza.

### Si usted ve… / haga…

| Si usted ve… | Haga… |
| --- | --- |
| una señal `open` en modo `inform` | relea las evidencias y decida si solo hay que supervisar o preparar un resumen |
| una señal `open` en modo `suggest` | transfórmela en un próximo paso claro o en un borrador si el seguimiento debe ser trazado |
| una señal `draft` | verifique si ya está alimentando un resumen, un borrador o una solicitud de acción |
| una señal `request_approval` | cambie a la revisión gobernada y confirme las condiciones de aprobación |
| una señal `snoozed` | no la reabra automáticamente; controle primero `snoozedUntil` y la evolución real del contexto |
| una señal `dismissed` | guarde el rastro, pero no abarrota la cola activa mientras no aparezca nueva evidencia |
| una señal `resolved` | utilícela como historial, no como nueva orden de acción |

## Cuándo actuar sobre una señal

| Situación | Acción recomendada |
| --- | --- |
| Información que envejece | Verificar la fuente, reactivar la importación o actualizar el conocimiento |
| Contradicción entre evidencias | Releer las citas, arbitrar y documentar la decisión |
| Bloqueo del proyecto | Transformar la constatación en acción gobernada o en seguimiento formalizado |
| Tema a difundir | Preparar un resumen o una notificación adaptada |

## Resumen y borradores de notificación

### Generar un resumen (`Generate digest draft`)

La generación de un resumen produce una vista sintética reutilizable desde el **Espacio de trabajo**. La tarjeta **`Latest digest`** puede mostrar:

- un **titular**;
- una **narrativa**;
- la fecha **generated at**;
- el número total de señales resumidas;
- el número de borradores de notificación generados;
- el detalle de las señales incluidas en el resumen.

### Releer un borrador de notificación

Los **Notification drafts** exponen como mínimo:

- el **estado**;
- el **canal**;
- el **tipo** de notificación;
- la explicación o justificación;
- una posible necesidad de **aprobación**;
- el número de **destinatarios**;
- una fecha `sendAfter` si existe;
- el enlace hacia la **señal** o el **resumen** de origen;
- un posible estado `snoozed`.

En el panel del proyecto actualmente observado, el envío directo está principalmente previsto para `in_app`. Los canales externos como `email`, `teams` o `webhook` pueden permanecer en postura **held / draft** mientras la ruta de difusión gobernada no esté disponible. Los usuarios sin derecho de envío pueden igualmente releer estos borradores en modo de solo lectura.

![Borradores de notificación para releer](/img/screenshots/localized/es/16-notification-drafts.png)

### Flujo de revisión recomendado para un borrador de notificación

1. confirme que el **título** y el **mensaje** son comprensibles sin contexto oculto;
2. verifique la **señal** o el **resumen** vinculado;
3. relea los metadatos de **aprobación**, de **destinatarios** y de `sendAfter`;
4. envíe solo si el **canal** y su **rol** autorizan realmente esta difusión;
5. utilice **snooze** o **dismiss** cuando el borrador no deba permanecer activo en la cola.

## Cuatro objetos que no deben confundirse

| Objeto | Rol en el flujo | Cuándo utilizarlo |
| --- | --- | --- |
| `digest` | síntesis de varias señales | cuando el equipo necesita una vista agrupada antes de la difusión o arbitraje |
| `notification draft` | borrador de mensaje destinado a un canal | cuando el tema debe ser releído antes del envío, especialmente fuera de `in_app` |
| `action request` | solicitud de operación gobernada que a veces requiere aprobación y ejecución | cuando un seguimiento externo o un cambio concreto debe ser lanzado |
| `artifact` | entregable u objeto gobernado historizado | cuando el contenido debe ser conservado, comparado, aprobado, publicado o reinyectado |

Esta distinción reduce las confusiones frecuentes entre un tema **a resumir**, un mensaje **a releer**, una operación **a ejecutar** y un documento **a gobernar**.

## Gobernanza a nivel de proyecto

Las pestañas del espacio de trabajo forman la base de la gobernanza del proyecto:

- **Access control** determina quién puede actuar;
- **Document categories** estructura las evidencias;
- **Governance policies** enmarca las validaciones y publicación;
- **Project integrations** determina qué acciones externas son realmente factibles.

### Cómo leer los efectos de la política

| Par o campo | Lectura práctica | Efecto real para el usuario |
| --- | --- | --- |
| `allow` + `observe` | el tema puede ser visto y seguido | lectura y supervisión sin lanzar ejecución |
| `allow` + `draft` | la preparación está autorizada | el usuario puede crear un borrador o preparar el flujo |
| `allow` + `propose` | la propuesta formal está permitida | una solicitud puede ser enviada en la cola gobernada |
| `allow` + `execute` | la ejecución directa está autorizada | la acción puede partir sin etapa adicional si el resto está listo |
| `require_approval` + `execute` | la ejecución sigue siendo posible pero no inmediata | la cola de aprobación se vuelve obligatoria antes de la ejecución |
| `deny` | el flujo está prohibido para el rol o el alcance | la acción puede desaparecer o permanecer no ejecutable a pesar de su visibilidad de principio |

Estos pares ayudan a comprender por qué un usuario puede **ver**, **preparar**, **proponer** o **ejecutar** una acción, sin suponer que todas las superficies autorizan automáticamente la misma profundidad de acción.

![Políticas de gobernanza del proyecto](/img/screenshots/localized/es/14-governance-policies.png)

## Acciones y aprobaciones

La pantalla **Actions & approvals** transforma una recomendación en una operación controlada.

### Ciclo de vida observado

1. propuesta de una acción;
2. vinculación al proyecto, a una señal o a un artefacto;
3. aprobación o rechazo;
4. ejecución cuando se reúnen las condiciones;
5. trazabilidad del evento en el producto.

![Acciones y aprobaciones](/img/screenshots/localized/es/17-actions-approvals.png)

### Paso a paso operativo para una acción gobernada

Utilice este orden cuando un seguimiento externo se vuelve necesario:

1. abra **Actions & approvals** desde el **Espacio de trabajo**;
2. elija primero el **tipo de acción** para que la interfaz resuelva los **Execution connectors** compatibles;
3. seleccione una opción de ejecución **sana** y **autorizada** si existen varias opciones;
4. agregue una justificación breve para facilitar la aprobación;
5. envíe la solicitud y verifique que aparezca en la cola con **Trace ID** y detalles del payload;
6. siga luego el paso de la cola hacia **approved**, **rejected** o **executed**.

### Si no aparece ninguna opción de ejecución

Mantenga este orden estricto de remediación:

1. verifique los **Execution connectors** en **Governance policies**;
2. verifique luego **Project integrations** para confirmar el enlace realmente listo;
3. abra **Administración de la plataforma** si la definición técnica parece faltar o degradada;
4. controle finalmente el **entitlement**, la **policy** y su **permission** antes de concluir una falla.

Este circuito evita tratar como incidente técnico un bloqueo que proviene en realidad de un rol, una política o una definición aún no expuesta al proyecto.

## Ejemplos de acciones gobernadas confirmadas

Los tipos de acción visibles en el producto incluyen notablemente:

- publicación hacia **SharePoint**;
- mensaje **Teams**;
- mensaje **Outlook**;
- ticket **Jira**;
- ticket **Azure DevOps**;
- **webhook** gobernado.

### Campos que varían según el tipo de acción

| Tipo de acción | Campos típicos a proporcionar |
| --- | --- |
| Publicación hacia SharePoint | título, opción de ejecución, `artifact ID`, destino, perfil de renderizado o formato |
| Mensaje Teams / Outlook | título, opción de ejecución, cuerpo del mensaje, destinatarios o borrador vinculado |
| Ticket Jira / Azure DevOps | título, opción de ejecución y descripción del ticket |
| Calendar follow-up | título, opción de ejecución, participantes y fecha / hora de inicio |

### Estados y detalles de la cola de aprobación

La cola de acciones gobernadas permite seguir un paso típico de **draft** a **pending approval**, luego hacia **approved**, **executed** o **rejected**.

| Estado | Lectura práctica |
| --- | --- |
| `draft` | solicitud aún preparatoria, aún no enviada al flujo completo |
| `pending approval` | aprobación esperada antes del seguimiento real |
| `approved` | acuerdo obtenido, pero la ejecución efectiva aún debe ser confirmada |
| `executed` | acción enviada y registrada como ejecutada |
| `rejected` | la solicitud fue rechazada y no debe considerarse como lanzada |

Cada tarjeta de cola también puede exponer:

- el tipo de acción y el conector seleccionado;
- el **status** y el **action level**;
- `requested at`, `requested by`, `approved by`, `approved at`, `executed at`;
- el **Trace ID**;
- un `relatedArtifactId` o `relatedNotificationId`;
- el **payload audit detail**, las notas de aprobación y el resultado de ejecución.

![Cola de acciones gobernadas y detalles de auditoría](/img/screenshots/localized/es/17-action-queue.png)

## Por qué una acción puede ser visible pero no ejecutable

Una acción puede aparecer en la interfaz pero permanecer bloqueada si:

- usted no tiene el derecho requerido;
- el conector compatible no está listo;
- el enlace del proyecto limita la acción;
- el plan o el entitlement bloquea la capacidad;
- aún se espera una aprobación.

## Vínculo con las integraciones

Una regla importante surge de la aplicación:

- el **nivel proyecto** decide cómo trabaja el proyecto;
- el **nivel plataforma** decide qué herramientas, proveedores e integraciones existen realmente.

En la práctica, si una acción o notificación está bloqueada, verifique primero el **enlace del proyecto**, luego la definición técnica en **Administración de la plataforma**.

## Ejemplo de escenario completo

1. una señal `open` eleva una discrepancia de actualidad o un seguimiento atrasado;
2. el equipo relee la explicación, las evidencias y los próximos pasos sugeridos;
3. crea un **draft** o genera un **digest** para preparar la síntesis;
4. un borrador de notificación es revisado, enviado en `in_app` o dejado en espera si el canal externo permanece gobernado;
5. si un seguimiento externo es necesario, se propone una acción en **Actions & approvals**;
6. la cola de aprobación, el **Trace ID**, los artefactos vinculados y el **Registro de IA** sirven luego como rastro común.

## Buenas prácticas de gobernanza

- trate las señales como una cola de priorización, no como una simple lista;
- no ejecute una acción externa sin verificar el artefacto o la evidencia fuente;
- utilice las categorías documentales para reducir la ambigüedad de las fuentes;
- mantenga la política de gobernanza coherente con los roles realmente asignados;
- documente los arbitrajes importantes en los entregables o en el flujo de validación asociado.

## Continuación

- [Informes, registro de IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md)
- [Portafolio y administración técnica](./portefeuille-et-administration-technique.md)
- [Mantenimiento, soporte y preguntas frecuentes](./maintenance-support-faq.md)
