---
title: Proyectos y espacio de trabajo
slug: /projets-et-espace-de-travail
description: Crear un proyecto, delegar los primeros roles y usar el espacio de trabajo como centro de pilotaje.
---

[Inicio](./index.md) · [Interfaz y navegación](./interface-et-navigation.md) · [Control de acceso y roles de proyecto](./controle-acces-et-roles.md)

![Espacio de trabajo del proyecto](/img/screenshots/localized/fr/03-workspace-overview.png)

## Objetivo

Esta página explica la diferencia entre **Proyectos**, **Espacio de trabajo** y **Agentes**, y detalla los ajustes de proyecto realmente visibles en la aplicación.

## Tres superficies a distinguir

| Superficie | Cuándo usar |
| --- | --- |
| Proyectos | Crear un proyecto, abrir un proyecto existente, cambiar de contexto |
| Espacio de trabajo | Leer el resumen del proyecto, la transparencia operativa, las señales y los ajustes de nivel de proyecto |
| Agentes | Iniciar un intercambio en directo con un agente y leer la salida estructurada del run |

En práctica, **Proyectos** sirve para entrar en el buen contexto, **Espacio de trabajo** para configurarlo y **Agentes** para explotarlo.

## Crear un proyecto

El formulario observado contiene los siguientes campos:

- **ID proyecto** ;
- **Nombre** ;
- **Descripción** ;
- **Idioma de datos por defecto** ;
- **Idiomas de datos adicionales**.

Recomendaciones de entrada:

- elige un ID legible y duradero ;
- no confundas **idioma de datos del proyecto** y **idioma de la interfaz** ;
- define correctamente el alcance antes de abrir el conocimiento o los agentes.

## Creador del proyecto: derechos iniciales y delegación

Al crear, el **creador del proyecto** inicia con el rol **Propietario del proyecto** y todas las permisos del proyecto observados. En práctica, es él quien puede abrir el proyecto, verificar la configuración inicial y **delegar luego los roles** al resto del equipo.

### Delegación recomendada justo después de la creación

1. abre **Control de acceso** ;
2. agrega al menos otro **Propietario del proyecto** o un **Jefe de proyecto** de confianza ;
3. crea si es necesario roles personalizados dirigidos en lugar de multiplicar los propietarios ;
4. asigna luego los roles a los colaboradores, lectores y auditores ;
5. revisa finalmente las **Políticas de gobernanza** y las **Integraciones del proyecto** para alinear derechos, conectores y validaciones.

### Lo que la plataforma sigue protegiendo

- la entrada del **creador** sigue protegida ;
- el rol del creador sigue fijo en la interfaz observada ;
- la delegación se hace por asignación de roles adicionales, no por eliminación de la protección del creador ;
- para el detalle RBAC, ver [Control de acceso y roles del proyecto](./controle-acces-et-roles.md).

## Abrir y cambiar de proyecto

Un proyecto puede abrirse desde:

- la página **Proyectos** ;
- el **selector de proyecto** de la barra superior ;
- el contexto recientemente memorizado en el navegador.

Cuando cambias de proyecto, las superficies siguientes se alinean: **Conocimiento**, **Agentes**, **Documentos PM / Reportes & artefactos**, **Journal IA**, las señales y los ajustes del proyecto.

## El espacio de trabajo: centro de pilotaje del proyecto

El **Espacio de trabajo** reúne en una misma superficie:

- el **resumen del proyecto** ;
- accesos directos a **Agentes**, **Documentos PM** y **Journal IA** ;
- una vista de **transparencia operativa** ;
- las **señales** del proyecto ;
- las pestañas de ajuste de nivel de proyecto.

Esta documentación francesa ya no presenta una tarjeta **voz** dedicada en el **Espacio de trabajo**. Cuando la entrada de voz sigue existiendo en algunos entornos, se hace en **Agentes**, no como punto de entrada separado aquí.

## Transparencia operativa y preparación

El espacio de trabajo no solo sirve para resumir el proyecto. También permite ver si el proyecto está listo para actuar:

- presencia o ausencia de señales ;
- actividad reciente ;
- accesos directos a borradores o entregables relacionados ;
- preparación de las integraciones del proyecto cuando existen ;
- exposición del proveedor IA efectivo sin abrir la configuración del tenant.

Utiliza esta zona para comprender **por qué** una acción o importación puede estar disponible, confirmada o bloqueada.

## Pestañas de nivel de proyecto

| Pestaña | Para qué sirve |
| --- | --- |
| Configuración de agentes | Configurar los agentes para este proyecto |
| Control de acceso | Gestionar miembros, roles y permisos de nivel de proyecto |
| Categorías de documentos | Adaptar la taxonomía documental del proyecto y propagarla a las superficies documentales del proyecto |
| Políticas de gobernanza | Definir conectores, destinos, políticas de acción, perfiles de render y preferencias de notificación de nivel de proyecto |
| Integraciones del proyecto | Vincular al proyecto las integraciones listas y autorizadas |
| Actions & approvals | Gestionar las solicitudes de acción, validaciones y ejecución gobernada |

## Configuración de agentes

Los parámetros confirmados a nivel de proyecto son:

- `status` ;
- `temperature` ;
- `max tokens`.

### Restricciones visibles

- `temperature` se espera entre **0** y **2** ;
- `max tokens` debe ser un entero mayor o igual a **1**.

### Historial de configuración

La interfaz también expone un historial por versión con al menos:

- número de versión ;
- estado ;
- temperatura ;
- max tokens ;
- fecha de creación ;
- autor ;
- `Trace ID` asociado.

![Ajustes de agentes a nivel de proyecto](/img/screenshots/localized/fr/12-agent-configuration.png)

## Control de acceso

La pestaña **Control de acceso** administra los miembros y roles del proyecto. Soporta:

- los roles estándar ;
- los roles personalizados ;
- los salvaguardas RBAC ;
- la lectura sola para perfiles no autorizados a modificar.

Ver la página dedicada: [Control de acceso y roles del proyecto](./controle-acces-et-roles.md).

## Categorías de documentos

Esta pestaña sirve para alinear la clasificación documental con el proyecto. En práctica, la taxonomía del proyecto influye en las categorías propuestas durante las cargas y algunos selectores documentales usados después en las superficies del proyecto.

### Efecto concreto de una actualización

Cuando la lista de categorías se modifica con éxito:

- el selector de categoría de carga en **Conocimiento** se actualiza ;
- los selectores y filtros de categoría en **Documentos PM** se alinean cuando usan esta taxonomía compartida ;
- el cambio sigue limitado al **proyecto actual**.

### Ejemplos prácticos

Mantén una taxonomía corta y estable. Por ejemplo, en lugar de multiplicar variantes cercanas, prefiera algunas categorías coherentes como:

- carta del proyecto ;
- registro de riesgos ;
- informe de estado ;
- plan de compras ;
- plan de comunicación.

El objetivo no es codificar la versión del documento en la categoría, sino mantener una clasificación reutilizable entre **Conocimiento** y **Documentos PM**.

![Categorías documentales del proyecto](/img/screenshots/localized/fr/13-document-categories.png)

## Políticas de gobernanza

Esta pestaña fija las reglas que enmarcan las decisiones, validaciones y comportamientos de gobernanza del proyecto. Úsala antes de publicar un entregable o autorizar una acción externa gobernada.

### Sub-superficies visibles en Políticas de gobernanza

| Sub-superficie | Qué regula |
| --- | --- |
| Conectores de ejecución | Tipo de conector, estado, modo de ejecución, entorno, scopes y parámetros de contexto |
| Destinos de artefactos | Destino objetivo de un artefacto, conector asociado, carácter activo o por defecto |
| Políticas de acción | Rol concernido, conector objetivo, nivel de acción (`observe`, `draft`, `propose`, `execute`), efecto (`allow`, `require_approval`, `deny`) y scopes autorizados |
| Perfiles de render | Perfiles de render y formato de salida usados en las publicaciones gobernadas |
| Preferencias de notificación | Canal, tipo de notificación, modo de digest, umbral de severidad y activación de la preferencia |

### Ejemplos de ajustes útiles

- exigir una aprobación explícita antes de una publicación a **SharePoint** ;
- autorizar la creación de ticket **Jira** solo en nivel `propose` para ciertos roles ;
- preparar preferencias `signal_digest` en `in_app` para el seguimiento interno ;
- dejar las notificaciones externas `email`, `teams` o `webhook` en un camino aprobado solo cuando el conector esté sano ;
- elegir perfiles de render separados para las publicaciones **DOCX** y **XLSX**.

### Escenario creíble — proyecto sensible / difusión gobernada

Para un proyecto donde toda difusión externa debe ser controlada, un ajuste coherente suele ser así:

1. **Destinos de artefactos**: destino SharePoint activo con perfil de render conocido ;
2. **Políticas de acción**: `allow` para `observe` y `draft`, pero `require_approval` para `execute` en publicaciones y notificaciones externas ;
3. **Conectores de ejecución**: conectores externos visibles solo para los roles realmente autorizados ;
4. **Preferencias de notificación**: `signal_digest` en `daily` para el equipo, `signal_alert` solo para los casos más sensibles ;
5. **Integraciones del proyecto**: bindings activados solo para los conectores ya validados a nivel de plataforma.

Esta combinación evita que un borrador, digest o acción aparezca como directamente difundible cuando el proyecto aún espera una aprobación humana.

![Políticas de gobernanza del proyecto](/img/screenshots/localized/fr/14-governance-policies.png)

## Integraciones del proyecto

Esta pestaña separa las integraciones técnicamente definidas a nivel de plataforma de las que son realmente utilizables por el proyecto.

### Causas de bloqueo explícitamente observadas

Una integración de proyecto o una opción de importación puede estar bloqueada por:

- entitlement ;
- política ;
- permiso ;
- estado health a verificar ;
- definición de plataforma ausente o desactivada ;
- binding de proyecto desactivado o no configurado.

### Cómo interpretar un bloqueo de binding

| Causa visible | Lectura práctica | Reflejo recomendado |
| --- | --- | --- |
| `entitlement` | el plan o la capacidad autorizada no cubre este conector o familia de uso | verifica la suscripción y capacidades en [Portafolio y administración técnica](./portefeuille-et-administration-technique.md) |
| `policy` | la gobernanza del proyecto impide o limita este flujo | revisa **Políticas de gobernanza** antes de modificar el binding |
| `permission` | el conector existe pero tu rol no permite activarlo o usarlo | controla el rol del proyecto en [Control de acceso y roles del proyecto](./controle-acces-et-roles.md) |
| `health` | la definición de la plataforma existe pero su preparación o disponibilidad requieren verificación | abre la **Administración de la plataforma** para confirmar la definición técnica |
| definición ausente o desactivada | nada realmente está listo a nivel de tenant | solicita primero la puesta en marcha o reactivación de la plataforma |
| binding de proyecto ausente | la plataforma está lista pero el proyecto aún no consume la integración | activa explícitamente el binding del lado del proyecto |

Si un bloqueo persiste, abre luego **Administración de la plataforma** para verificar la definición técnica, luego vuelve al proyecto para confirmar el binding y la preparación.

### Jira, SharePoint y cadena de conectores

![Flujo Jira y SharePoint entre plataforma, proyecto y acciones](/img/diagrams/fr/connecteurs-jira-sharepoint-workflow.svg)

Mantén esta lógica simple:

1. **Integraciones de la plataforma** define el conector o proveedor de ingestión ;
2. **Integraciones del proyecto** expone solo el binding aprobado y listo ;
3. **Políticas de gobernanza** decide qué puede observar, preparar, proponer o ejecutar cada rol ;
4. **Actions & approvals** aplica luego estas reglas en la solicitud real ;
5. **Documentos PM** y **Journal IA** conservan la trazabilidad del flujo.

Ver la página dedicada: [Conectores y integraciones](./connecteurs-jira-et-sharepoint).

## Actions & approvals

Esta pestaña transforma una recomendación en operación controlada. Una acción puede ser **visible** pero no **ejecutable** si:

- no tienes el derecho correcto ;
- el conector compatible no está listo ;
- el binding del proyecto limita la acción ;
- la aprobación requerida aún no ha ocurrido.

## Lectura sola o acceso denegado

- **lectura sola**: la pestaña sigue visible pero la grabación está bloqueada ;
- **acceso denegado**: la ruta o la acción no está disponible para tu cuenta.

Esta diferencia es particularmente importante para **Control de acceso**, **Integraciones del proyecto** y los ajustes de gobernanza.

## Camino recomendado después de crear un proyecto

1. abre el **Espacio de trabajo** ;
2. verifica primero al **creador**, los **miembros** y los **roles** si el proyecto es colaborativo ;
3. ajusta luego las **categorías de documentos** ;
4. revisa las **Políticas de gobernanza** antes de cualquier difusión externa ;
5. enlaza solo las **Integraciones del proyecto** realmente listas ;
6. carga luego la **Conocimiento** ;
7. pasa finalmente a los **Agentes**, los **Documentos PM** y las **Actions & approvals**.

## Dos escenarios de parametrización útiles

### Escenario 1 — proyecto nuevo mínimo

Para un proyecto que comienza, mantén un orden simple:

1. agrega los miembros indispensables y verifica sus roles ;
2. crea una taxonomía documental corta en **Categorías de documentos** ;
3. activa solo las integraciones ya validadas y realmente necesarias ;
4. prepara una gobernanza mínima, por ejemplo un digest interno y una destino de artefacto por defecto ;
5. carga luego la **Conocimiento** antes de abrir los agentes.

Este escenario evita abrir demasiado pronto conectores o reglas de difusión que no se usarán inmediatamente.

### Escenario 2 — proyecto sensible / difusión gobernada

Para un proyecto expuesto a notificaciones externas o a una publicación documental formal:

1. limita los roles que tienen acceso a conectores externos ;
2. prepara un destino SharePoint o equivalente en **Destinos de artefactos** ;
3. aplica `require_approval` en los niveles de acción que pueden producir difusión externa ;
4. privilegia `signal_digest` para el seguimiento corriente y reserva alertas instantáneas a casos críticos ;
5. no hagas visibles en **Integraciones del proyecto** solo los bindings cuya preparación y política ya estén conformes.

Este segundo escenario alinea la lectura de señales, difusión, aprobación y ejecución real en lugar de dejar al equipo tratar cada pantalla como una superficie independiente.

## Siguiente

- [Control de acceso y roles del proyecto](./controle-acces-et-roles.md)
- [Conocimiento y agentes](./connaissance-et-agents.md)
- [Gobernanza, decisiones y acciones](./gouvernance-decisions-et-actions.md)
- [Conectores y integraciones](./connecteurs-jira-et-sharepoint)
- [Portafolio y administración técnica](./portefeuille-et-administration-technique.md)
