---
title: Proyectos y espacio de trabajo
slug: /projets-et-espace-de-travail
description: Crear un proyecto, cambiar de contexto y utilizar el espacio de trabajo como centro de control.
---

[Inicio](./index.md) · [Interfaz y navegación](./interface-et-navigation.md) · [Control de acceso y roles del proyecto](./controle-acces-et-roles.md)

![Espacio de trabajo del proyecto](/img/screenshots/localized/es/03-workspace-overview.png)

## Objetivo

Esta página explica la diferencia entre **Proyectos**, **Espacio de trabajo** y **Agentes**, y luego detalla los ajustes del proyecto realmente visibles en la aplicación.

## Tres superficies a distinguir

| Superficie | Cuándo utilizarla |
| --- | --- |
| Proyectos | Crear un proyecto, abrir un proyecto existente, cambiar de contexto |
| Espacio de trabajo | Leer el resumen del proyecto, la transparencia operativa, las señales y los ajustes de nivel de proyecto |
| Agentes | Iniciar un intercambio en directo con un agente y leer la salida estructurada de la ejecución |

En la práctica, **Proyectos** sirve para entrar en el contexto correcto, **Espacio de trabajo** para configurarlo y **Agentes** para explotarlo.

## Crear un proyecto

El formulario observado contiene los siguientes campos:

- **ID del proyecto**;
- **Nombre**;
- **Descripción**;
- **Idioma de datos por defecto**;
- **Idiomas de datos adicionales**.

Recomendaciones de entrada:

- elija un ID legible y duradero;
- no confunda el **idioma de datos del proyecto** con el **idioma de la interfaz**;
- defina correctamente el alcance antes de abrir el conocimiento o los agentes.

## Abrir y cambiar de proyecto

Un proyecto se puede abrir desde:

- la página **Proyectos**;
- el **selector de proyecto** de la barra superior;
- el contexto recientemente memorizado en el navegador.

Cuando cambia de proyecto, las siguientes superficies se recalibran: **Conocimiento**, **Agentes**, **Informes y artefactos**, **Registro de IA**, las señales y los ajustes del proyecto.

## El espacio de trabajo: centro de control del proyecto

El **Espacio de trabajo** reúne en una misma superficie:

- el **resumen del proyecto**;
- accesos directos a **Agentes**, **Informes y artefactos** y **Registro de IA**;
- una vista de **transparencia operativa**;
- las **señales** del proyecto;
- las pestañas de ajuste de nivel de proyecto.

En los entornos observados, una tarjeta **Voice** también puede redirigir a la experiencia vocal disponible en **Agentes**.

## Transparencia operativa y preparación

El espacio de trabajo no solo sirve para resumir el proyecto. También permite ver si el proyecto está listo para actuar:

- presencia o ausencia de señales;
- actividad reciente;
- accesos directos a los borradores o entregables relacionados;
- preparación de las integraciones del proyecto cuando existen.

Utilice esta zona para entender **por qué** una acción o una importación puede estar disponible, degradada o bloqueada.

## Pestañas de nivel de proyecto

| Pestaña | Para qué sirve |
| --- | --- |
| Agent configuration | Configurar los agentes para este proyecto |
| Access control | Gestionar miembros, roles y permisos de nivel de proyecto |
| Document categories | Adaptar la taxonomía documental del proyecto y propagarla a las superficies documentales del proyecto |
| Governance policies | Definir conectores, destinos, políticas de acción, perfiles de renderizado y preferencias de notificación de nivel de proyecto |
| Project integrations | Vincular al proyecto las integraciones listas y autorizadas |
| Actions & approvals | Gestionar las solicitudes de acción, validaciones y ejecución gobernada |

## Agent configuration

Los parámetros confirmados a nivel de proyecto son:

- `status`;
- `temperature`;
- `max tokens`.

### Restricciones visibles

- `temperature` se espera entre **0** y **2**;
- `max tokens` debe ser un entero mayor o igual a **1**.

### Historial de configuración

La interfaz también expone un historial por versión con al menos:

- número de versión;
- estado;
- temperatura;
- max tokens;
- fecha de creación;
- autor;
- `trace ID` asociado.

![Ajustes de los agentes a nivel de proyecto](/img/screenshots/localized/es/12-agent-configuration.png)

## Access control

La pestaña **Access control** administra los miembros y roles del proyecto. Soporta:

- los roles estándar;
- los roles personalizados;
- las salvaguardas RBAC;
- la lectura sola para los perfiles no autorizados a modificar.

Ver la página dedicada: [Control de acceso y roles del proyecto](./controle-acces-et-roles.md).

## Document categories

Esta pestaña sirve para alinear la clasificación documental con el proyecto. En la práctica, la taxonomía del proyecto influye en las categorías propuestas durante las cargas y en ciertos selectores documentales utilizados luego en las superficies del proyecto.

### Efecto concreto de una actualización

Cuando la lista de categorías se modifica con éxito:

- el selector de categoría de carga en **Conocimiento** se actualiza;
- los selectores y filtros de categoría en **PM Docs** se recalibran cuando utilizan esta taxonomía compartida;
- el cambio se limita al **proyecto actual**.

### Ejemplos prácticos

Mantenga una taxonomía corta y estable. Por ejemplo, en lugar de multiplicar las variantes cercanas, prefiera algunas categorías coherentes como:

- carta del proyecto;
- registro de riesgos;
- informe de estado;
- plan de compras;
- plan de comunicación.

El objetivo no es codificar la versión del documento en la categoría, sino mantener una clasificación reutilizable entre **Conocimiento** y **PM Docs**.

![Categorías documentales del proyecto](/img/screenshots/localized/es/13-document-categories.png)

## Governance policies

Esta pestaña fija las reglas que enmarcan las decisiones, validaciones y comportamientos de gobernanza del proyecto. Utilícela antes de publicar un entregable o de autorizar una acción externa gobernada.

### Sub-superficies visibles en Governance policies

| Sub-superficie | Lo que regula |
| --- | --- |
| Execution connectors | Tipo de conector, estado, modo de ejecución, entorno, alcances y parámetros de contexto |
| Artifact destinations | Destino objetivo de un artefacto, conector asociado, carácter activo o por defecto |
| Action policies | Rol concernido, conector objetivo, nivel de acción (`observe`, `draft`, `propose`, `execute`), efecto (`allow`, `require_approval`, `deny`) y alcances autorizados |
| Rendering profiles | Perfiles de renderizado y formato de salida utilizados durante las publicaciones gobernadas |
| Notification preferences | Canal, tipo de notificación, modo de resumen, umbral de severidad y activación de la preferencia |

### Ejemplos de ajustes útiles

- exigir una aprobación explícita antes de una publicación hacia SharePoint;
- autorizar ciertos conectores solo para un rol o un alcance de acción preciso;
- preparar preferencias de notificación de tipo `signal_digest`, `signal_alert` o `manual_notification` en canales como `in_app`, `email`, `teams` o `webhook`;
- elegir un modo de resumen `real_time`, `daily`, `weekly` o `manual` según la necesidad del proyecto.

### Escenario creíble — proyecto sensible / difusión gobernada

Para un proyecto donde toda difusión externa debe ser controlada, un ajuste coherente suele parecerse a esto:

1. **Artifact destinations**: destino SharePoint activo con perfil de renderizado conocido;
2. **Action policies**: `allow` para `observe` y `draft`, pero `require_approval` para `execute` en las publicaciones y notificaciones externas;
3. **Execution connectors**: conectores externos visibles solo para los roles realmente autorizados;
4. **Notification preferences**: `signal_digest` en `daily` para el equipo, `signal_alert` solo para los casos más sensibles;
5. **Project integrations**: vinculaciones activadas únicamente para los conectores ya validados a nivel de plataforma.

Esta combinación evita que un borrador, un resumen o una acción aparezcan como directamente difundibles cuando el proyecto aún espera una aprobación humana.

![Políticas de gobernanza del proyecto](/img/screenshots/localized/es/14-governance-policies.png)

## Project integrations

Esta pestaña separa las integraciones **técnicamente definidas** a nivel de plataforma de aquellas que son **realmente utilizables** por el proyecto.

### Causas de bloqueo explícitamente observadas

Una integración del proyecto o una opción de importación puede estar bloqueada por causa de:

- entitlement;
- policy;
- permission;
- health degradada;
- definición de plataforma ausente o desactivada;
- vinculación del proyecto desactivada o no configurada.

### Cómo interpretar un bloqueo de vinculación

| Causa visible | Lectura práctica | Reflexión recomendada |
| --- | --- | --- |
| `entitlement` | el plan o la capacidad autorizada no cubre este conector o esta familia de uso | verifique la suscripción y las capacidades en [Portafolio y administración técnica](./portefeuille-et-administration-technique.md) |
| `policy` | la gobernanza del proyecto prohíbe o limita este flujo | revise **Governance policies** antes de modificar la vinculación |
| `permission` | el conector existe pero su rol no permite activarlo o utilizarlo | controle el rol del proyecto en [Control de acceso y roles del proyecto](./controle-acces-et-roles.md) |
| `health` | la definición de plataforma existe pero su preparación o su salud está degradada | abra la administración de la plataforma para confirmar la definición técnica |
| definición ausente o desactivada | nada está realmente listo a nivel de tenant | solicite primero la implementación o la reactivación de la plataforma |
| vinculación del proyecto ausente | la plataforma está lista pero el proyecto aún no consume la integración | active explícitamente la vinculación en el lado del proyecto |

Si un bloqueo persiste, abra luego **Administración de la plataforma** para verificar la definición técnica, y luego regrese al proyecto para confirmar la vinculación y la preparación.

Punto importante: **Project integrations** condiciona luego lo que aparece realmente en **Actions & approvals**. Si un conector no está ni listo ni autorizado aquí, no se convertirá en una opción ejecutable más adelante en el flujo gobernado.

## Actions & approvals

Esta pestaña transforma una recomendación en una operación controlada. Una acción puede ser **visible** pero no **ejecutable** si:

- no tiene el permiso correcto;
- el conector compatible no está listo;
- la vinculación del proyecto limita la acción;
- la aprobación requerida aún no ha tenido lugar.

## Lectura sola o acceso denegado

- **lectura sola**: la pestaña sigue visible pero el registro está bloqueado;
- **acceso denegado**: la ruta o la acción no está disponible para su cuenta.

Esta diferencia es particularmente importante para **Access control**, **Project integrations** y los ajustes de gobernanza.

## Recorrido recomendado después de crear un proyecto

1. abra el **Espacio de trabajo**;
2. verifique primero los **miembros** y **roles** si el proyecto es colaborativo;
3. ajuste luego las **categorías documentales**;
4. relea las **Governance policies** antes de cualquier difusión externa;
5. vincule únicamente las **Project integrations** realmente listas;
6. cargue luego el **Conocimiento**;
7. pase finalmente a los **Agentes**, a los **Informes y artefactos** y a las **Actions & approvals**.

## Dos escenarios de parametrización útiles

### Escenario 1 — proyecto nuevo mínimo

Para un proyecto que comienza, mantenga un orden simple:

1. añada los miembros indispensables y verifique sus roles;
2. cree una taxonomía documental corta en **Document categories**;
3. active solo las integraciones ya validadas y realmente necesarias;
4. prepare una gobernanza mínima, por ejemplo un resumen interno y un destino de artefacto por defecto;
5. cargue luego el **Conocimiento** antes de abrir los agentes.

Este escenario evita abrir demasiado pronto conectores o reglas de difusión que no serán utilizados inmediatamente.

### Escenario 2 — proyecto sensible / difusión gobernada

Para un proyecto expuesto a notificaciones externas o a una publicación documental formal:

1. limite los roles con acceso a los conectores externos;
2. prepare un destino SharePoint o equivalente en **Artifact destinations**;
3. aplique `require_approval` en los niveles de acción que pueden producir una difusión externa;
4. privilegie `signal_digest` para el seguimiento corriente y reserve las alertas instantáneas para los casos críticos;
5. haga visibles en **Project integrations** solo las vinculaciones cuya preparación y política ya sean conformes.

Este segundo escenario alinea la lectura de las señales, la difusión, la aprobación y la ejecución real en lugar de dejar al equipo tratar cada pantalla como una superficie independiente.

## Continuar

- [Control de acceso y roles del proyecto](./controle-acces-et-roles.md)
- [Conocimiento y agentes](./connaissance-et-agents.md)
- [Gobernanza, decisiones y acciones](./gouvernance-decisions-et-actions.md)
- [Portafolio y administración técnica](./portefeuille-et-administration-technique.md)

## Continuar

- [Control de acceso y roles del proyecto](./controle-acces-et-roles.md)
- [Conocimiento y agentes](./connaissance-et-agents.md)
- [Gobernanza, decisiones y acciones](./gouvernance-decisions-et-actions.md)
- [Portafolio y administración técnica](./portefeuille-et-administration-technique.md)
