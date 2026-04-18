---
title: Gobernanza, decisiones y acciones
slug: /gouvernance-decisions-et-actions
description: Comprender las señales, configurar las políticas de gobernanza y usar Acciones y aprobaciones paso a paso con ejemplos amigables para principiantes.
---

[Inicio](./index.md) · [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md) · [Informes, registro de IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md)

![Proactividad, resúmenes y acciones gobernadas](/img/diagrams/es/proactivite-et-gouvernance.svg)

## Objetivo

Esta página explica, de manera simple, cómo ProPM Agent pasa:

1. de una **señal** detectada ;
2. a una **decisión** ;
3. luego a una **acción gobernada** ;
4. eventualmente sometida a **aprobación** ;
5. antes de ser **ejecutada** y **trazada**.

El objetivo es que un usuario principiante comprenda claramente:

- qué es una **política de gobernanza** ;
- qué significan **`allow`**, **`require_approval`** y **`deny`** ;
- qué significan **`observe`**, **`draft`**, **`propose`** y **`execute`** ;
- cómo usar **Acciones y aprobaciones** paso a paso ;
- por qué una acción puede ser visible pero bloqueada.

## Vista muy simple del flujo

En ProPM Agent, el camino normal es el siguiente:

1. una **señal** llama la atención ;
2. el equipo la lee ;
3. la **gobernanza** decide qué puede hacer cada rol ;
4. si se necesita una salida externa, se crea una **acción** ;
5. si el proyecto lo exige, la acción pasa a **aprobación** ;
6. la acción luego es **ejecutada** o **rechazada** ;
7. la traza permanece visible en la **actividad** y el **Journal IA**.

## Parte 1 — Comprender las señales

Una **señal** es una alerta estructurada que dice: **« este asunto merece ser visto »**.

### Ejemplos de señales

Una señal puede surgir:

- una **frescura** de las fuentes insuficiente ;
- una **contradicción** entre varias pruebas ;
- un **bloqueo** de proyecto ;
- una secuencia a dar que merece una **notificación**, una **decisión** o una **acción externa**.

### Lo que el usuario suele ver en una tarjeta de señal

Una tarjeta de señal puede mostrar:

- un **título** ;
- un **resumen** ;
- una **explicación** ;
- una **severidad** ;
- un **estado** ;
- un **modo** ;
- un número de **pruebas** o de reactivaciones ;
- acciones como **Create draft**, **Snooze 24h** o **Dismiss** según el rol.

### Pasos recomendados para tratar una señal

Cuando abres una señal, sigue este orden:

1. lee el **resumen** ;
2. vuelve a leer la **explicación** ;
3. verifica las **pruebas** y la **frescura** ;
4. decide si el asunto requiere solo vigilancia, un borrador o una acción real ;
5. si una salida externa se vuelve necesaria, pasa a **Acciones y aprobaciones**.

### Estados útiles de una señal

| Estado | Qué significa |
| --- | --- |
| `open` | el asunto sigue activo y necesita atención |
| `snoozed` | el asunto está en pausa temporalmente |
| `dismissed` | el asunto se retira de la cola activa |
| `resolved` | el asunto se considera tratado |

### Modos útiles de una señal

| Modo | Lectura simple |
| --- | --- |
| `inform` | la señal informa, sin exigir acción inmediata |
| `suggest` | la señal sugiere un próximo paso |
| `draft` | la señal ya está orientada a un borrador o preparación |
| `request_approval` | la señal llama a una revisión gobernada o aprobación |

## Parte 2 — Políticas de gobernanza

## ¿Qué es una política de gobernanza?

Una **política de gobernanza** es una regla que responde a la pregunta:

**« ¿Quién tiene derecho a hacer qué, sobre qué conector, y con qué nivel de control? »**

En otras palabras, la gobernanza evita que una acción externa salga sin un marco claro.

### Lo que una política decide

Una política responde en general a cuatro preguntas:

1. **¿Quién?** — qué rol está involucrado ;
2. **¿Sobre qué?** — qué conector, qué tipo de acción o destino está involucrado ;
3. **¿Hasta dónde?** — simple observación, borrador, propuesta o ejecución ;
4. **¿Con qué efecto?** — autorizado, autorizado con aprobación, o rechazado.

### Ejemplo muy simple

Una política puede significar:

- el **Contribuyente** puede preparar un borrador en Teams ;
- el **Jefe de proyecto** puede proponer una publicación en SharePoint ;
- el **Propietario del proyecto** debe aprobar antes de la ejecución ;
- nadie más puede ejecutar directamente esa publicación.

## Entender los niveles: `observe`, `draft`, `propose`, `execute`

El **nivel** describe hasta dónde puede ir un rol en el flujo.

| Nivel | Qué puede hacer el usuario | Qué no puede hacer todavía | Ejemplo simple |
| --- | --- | --- | --- |
| `observe` | ver la información, seguir el asunto, consultar la cola | crear una acción o un borrador | un lector sigue las señales sin preparar salida |
| `draft` | preparar un borrador, un texto, una intención de acción | enviar oficialmente la acción a la cola | un contribuyente prepara un mensaje Teams pero no lo propone |
| `propose` | enviar una verdadera solicitud de acción en la cola gobernada | ejecutar directamente la acción | un jefe de proyecto propone un ticket Jira |
| `execute` | lanzar la ejecución real si las demás condiciones se cumplen | eludir la política o aprobaciones impuestas | un propietario de proyecto publica un artefacto en SharePoint |

### Lectura muy simple

- **`observe`** = observo ;
- **`draft`** = preparo ;
- **`propose`** = solicito oficialmente ;
- **`execute`** = lanzo realmente.

## Entender los efectos: `allow`, `require_approval`, `deny`

El **efecto** describe lo que la plataforma hace cuando un rol alcanza ese nivel.

| Efecto | Qué significa | Consecuencia práctica |
| --- | --- | --- |
| `allow` | la acción está autorizada a ese nivel | el flujo puede avanzar sin paso de aprobación adicional, si el resto está listo |
| `require_approval` | la acción es posible, pero debe aprobarse | la cola de aprobación se vuelve obligatoria antes de la ejecución |
| `deny` | la acción está prohibida para ese rol o alcance | el usuario no puede avanzar más en ese flujo |

### Lectura muy simple

- **`allow`** = sí ;
- **`require_approval`** = sí, pero después de validación humana ;
- **`deny`** = no.

## Cómo leer una línea de política

Tomemos esta lectura:

- **Rol** : Jefe de proyecto
- **Conector** : SharePoint publish
- **Nivel** : `execute`
- **Efecto** : `require_approval`

Esto significa:

- el Jefe de proyecto puede llegar hasta la solicitud de ejecución ;
- pero la publicación no sale inmediatamente ;
- se necesita aprobación antes de la ejecución real.

## Ejemplos concretos de políticas

| Caso de negocio | Rol | Nivel recomendado | Efecto recomendado | Por qué |
| --- | --- | --- | --- | --- |
| publicación de un informe a SharePoint | Jefe de proyecto | `execute` | `require_approval` | la salida es externa y debe revisarse |
| creación de un ticket Jira desde un bloqueo | Jefe de proyecto | `propose` | `allow` o `require_approval` | el proyecto puede solicitar un ticket sin necesariamente abrirlo automáticamente |
| mensaje Teams interno de bajo riesgo | Contribuyente | `execute` o `propose` | `allow` | comunicación rápida a bajo impacto |
| correo Outlook a patrocinadores | Contribuyente | `propose` | `require_approval` | comunicación más sensible y formal |
| webhook a una herramienta externa | Propietario del proyecto | `execute` | `require_approval` | salida técnica a mantener muy controlada |
| conector no listo o no autorizado | todos salvo admin | `observe` o ningún uso | `deny` | evitamos cualquier salida accidental |

## Pasos para configurar una política de gobernanza

Sigue este orden simple.

### Paso 1 — Abrir la superficie correcta

Desde el **Espacio de trabajo** del proyecto, abre **Políticas de gobernanza**.

### Paso 2 — Elegir el flujo a controlar

Pregúntate primero:

- ¿se trata de una **publicación** ;
- de un **ticket** ;
- de un **mensaje** ;
- de un **webhook** ;
- de otra acción externa ?

### Paso 3 — Elegir el rol involucrado

Define luego qué rol puede actuar:

- **Contribuyente** ;
- **Jefe de proyecto** ;
- **Propietario del proyecto** ;
- o cualquier otro rol presente en tu configuración.

### Paso 4 — Elegir el nivel de acción

Decide si ese rol debe solo:

- observar ;
- preparar un borrador ;
- proponer ;
- o ejecutar.

### Paso 5 — Elegir el efecto

Decide si ese nivel debe:

- autorizado directamente (`allow`) ;
- autorizado con aprobación (`require_approval`) ;
- o rechazado (`deny`).

### Paso 6 — Verificar el conector o destino involucrado

Una buena política no basta si el conector:

- no está listo técnicamente ;
- no está abierto al proyecto ;
- o no tiene el destino correcto de artefacto.

### Paso 7 — Probar con un rol no administrador

El mejor control es práctico:

1. conéctate con un rol de negocio realista ;
2. abre **Acciones y aprobaciones** ;
3. verifica lo que es visible, autorizado o bloqueado ;
4. ajusta la política si el comportamiento no es el esperado.

![Políticas de gobernanza del proyecto](/img/screenshots/localized/es/14-governance-policies.png)

## Reglas simples para configurar bien la gobernanza

- usa **`allow`** en **`execute`** solo para flujos de bajo riesgo ;
- usa **`require_approval`** tan pronto como un contenido salga del proyecto o modifique un sistema externo ;
- usa **`deny`** cuando el conector no esté listo, no autorizado o sea demasiado sensible ;
- mantén las reglas coherentes con los roles realmente asignados ;
- prueba siempre un caso real antes de considerar la política lista.

## Errores frecuentes a evitar

| Error | Lectura correcta |
| --- | --- |
| « Veo el conector, así que puedo usarlo » | falso : la visibilidad no garantiza autorización ni salud técnica |
| « `propose` significa que la acción sale » | falso : `propose` significa que la solicitud entra en la cola gobernada |
| « `execute` significa sin control » | falso : `execute` puede combinarse aún con `require_approval` |
| « `deny` significa fallo » | falso : `deny` suele ser una decisión de gobernanza normal |

## Parte 3 — Acciones y aprobaciones

La pantalla **Acciones y aprobaciones** sirve para transformar una intención en **acción gobernada real**.

## Lo que el usuario ve en esta pantalla

Un usuario suele encontrar:

- un formulario **Proponer una acción gobernada** ;
- la elección del **tipo de acción** ;
- la elección del **conector de ejecución** o de la **opción de ejecución** ;
- un resumen de **readiness** indicando lo que está disponible o bloqueado ;
- campos como **título**, **justificación**, **destino**, **mensaje**, **descripción del ticket** ;
- una **cola de aprobación y ejecución** con las solicitudes ya enviadas.

## Pasos — crear una acción gobernada

### Paso 1 — Abrir la pantalla

En el **Espacio de trabajo**, abre **Acciones y aprobaciones**.

### Paso 2 — Elegir el tipo de acción

Selecciona primero la intención de negocio. Los tipos de acción visibles incluyen:

- **Publish artifact to SharePoint** ;
- **Send Teams message** ;
- **Send Outlook message** ;
- **Create Jira ticket** ;
- **Create Azure DevOps ticket** ;
- **Webhook** según la configuración del tenant.

### Paso 3 — Verificar la opción de ejecución compatible

La interfaz busca luego las **opciones de ejecución compatibles**.

Elige una opción:

- **saludable** ;
- **autorizada** ;
- realmente abierta a tu proyecto.

Si no aparece ninguna opción saludable, la verificación suele referirse a:

- el conector mismo ;
- su estado de salud ;
- el binding del proyecto ;
- la política ;
- o tu permiso.

### Paso 4 — Leer la readiness

La zona **Execution readiness** sirve para verificar que no estás preparando solo una acción teórica.

En práctica:

- **available / healthy** = opción explotable ;
- **blocked by health** = conector a verificar en la plataforma ;
- **blocked by entitlement** = capacidad no incluida en el plan o no abierta ;
- **blocked by policy** = gobernanza del proyecto restrictiva ;
- **blocked by permission** = tu rol no es suficiente.

### Paso 5 — Rellenar el título y la justificación

Completa luego:

- un **título claro** ;
- una **justificación corta pero útil** ;
- los campos específicos al tipo de acción elegido.

La justificación debe responder a dos preguntas:

1. **¿Por qué es necesaria esta acción?**
2. **¿En qué pruebas o decisiones se basa?**

### Paso 6 — Completar los campos de negocio

Los campos cambian según el tipo de acción.

| Tipo de acción | Campos frecuentemente requeridos |
| --- | --- |
| Publicación SharePoint | título, justificación, `artifact ID`, destino, perfil de renderizado, formato |
| Mensaje Teams | título, justificación, cuerpo del mensaje |
| Mensaje Outlook | título, justificación, destinatarios, asunto, cuerpo del mensaje |
| Ticket Jira | título, justificación, descripción del ticket, posiblemente clave de proyecto / tablero |
| Ticket Azure DevOps | título, justificación, descripción, tipo de ticket según el conector |
| Webhook | título, justificación y datos útiles al sistema objetivo |

### Paso 7 — Proponer la acción

Una vez completados los campos, envía la solicitud.

En este punto, la acción no necesariamente ya salió. Puede entrar primero en la **cola de aprobación**.

### Paso 8 — Revisión por el aprobador

Si la política exige `require_approval`, un aprobador debe revisar:

- el título ;
- la justificación ;
- el conector usado ;
- la carga útil o detalle de negocio ;
- el posible artefacto o borrador vinculado.

### Paso 9 — Aprobación, rechazo o ejecución

Según la política y el rol del aprobador, la solicitud puede ser:

- **aprobada** ;
- **rechazada** ;
- luego **ejecutada** si todo está listo.

### Paso 10 — Verificar la traza final

Después de la ejecución, verifica:

- la cola de acciones ;
- la actividad del proyecto ;
- el **Trace ID** si se muestra ;
- el **Journal IA** si el flujo se refleja allí ;
- la presencia del artefacto, ticket o mensaje en la herramienta objetivo.

## Cómo leer los estados de acción

| Estado | Qué significa |
| --- | --- |
| `draft` | la solicitud aún es preparatoria |
| `pending approval` | la aprobación se espera antes de la continuación real |
| `approved` | la solicitud fue aceptada |
| `executed` | la acción se lanzó realmente |
| `rejected` | la solicitud fue rechazada |
| `failed` | la acción se lanzó pero no tuvo éxito |
| `cancelled` | la solicitud fue cancelada |

## Ejemplo paso a paso — publicación de un artefacto a SharePoint

### Situación

El equipo revisó un **brief semanal** y quiere publicarlo en SharePoint.

### Camino

1. abrir **Acciones y aprobaciones** ;
2. elegir **Publish artifact to SharePoint** ;
3. seleccionar una opción **SharePoint publish** saludable ;
4. rellenar el **título** de la acción ;
5. añadir una **justificación**, por ejemplo: « versión revisada y aprobada para difusión semanal » ;
6. rellenar el **artifact ID** ;
7. elegir el **destino SharePoint** ;
8. elegir el **perfil de renderizado** o el **formato** si se solicita ;
9. proponer la acción ;
10. si la política lo exige, esperar la aprobación ;
11. ejecutar ;
12. comprobar que el artefacto esté publicado en SharePoint y trazado en ProPM Agent.

## Ejemplo paso a paso — crear un ticket Jira

### Situación

Una señal indica un bloqueo recurrente con impacto en la planificación.

### Camino

1. abrir **Acciones y aprobaciones** ;
2. elegir **Create Jira ticket** ;
3. seleccionar un conector Jira disponible ;
4. introducir un título claro, por ejemplo: « Bloqueo del proveedor en lote crítico » ;
5. completar la **descripción** del ticket ;
6. añadir la **justificación** y las pruebas útiles ;
7. proponer la solicitud ;
8. dejar que el aprobador revise si la política exige `require_approval` ;
9. ejecutar ;
10. verificar luego la referencia externa o el ticket creado.

## Ejemplo paso a paso — enviar un mensaje Teams o Outlook

### Situación

El proyecto debe informar a un grupo interno o a un patrocinador de una revisión terminada.

### Camino Teams

1. elegir **Send Teams message** ;
2. seleccionar el conector Teams autorizado ;
3. redactar un mensaje corto y comprensible ;
4. añadir la justificación si el flujo está gobernado ;
5. proponer, aprobar si es necesario, luego ejecutar.

### Camino Outlook

1. elegir **Send Outlook message** ;
2. seleccionar el conector Outlook ;
3. rellenar los **destinatarios** ;
4. completar el **asunto** y el **cuerpo** del mensaje ;
5. proponer, aprobar si es necesario, luego ejecutar.

### Diferencia práctica

- **Teams** es adecuado para una comunicación colaborativa interna ;
- **Outlook** es más apropiado para una comunicación formal y dirigida.

## Ejemplo paso a paso — webhook a una herramienta externa

### Situación

La empresa quiere disparar un flujo interno a una herramienta propia.

### Camino

1. elegir el tipo de acción o flujo relacionado con el **Webhook** ;
2. seleccionar la opción de ejecución webhook compatible ;
3. rellenar el título y la justificación ;
4. completar los datos útiles al sistema objetivo ;
5. proponer la solicitud ;
6. aprobar si la política lo exige ;
7. ejecutar ;
8. controlar el resultado en el sistema objetivo y en el audit de ProPM Agent.

## Por qué una acción puede ser visible pero no ejecutable

Una acción puede ser visible en la interfaz pero permanecer bloqueada si:

- el conector compatible no está saludable ;
- el proyecto no dispone del binding correcto ;
- la política del proyecto prohíbe ese nivel de acción ;
- tu rol no permite proponer o ejecutar ;
- una aprobación aún está pendiente ;
- la capacidad o el plan bloquea el flujo.

## Qué hacer si no aparece ninguna opción de ejecución

Sigue este orden:

1. verifica primero **Políticas de gobernanza** ;
2. verifica luego **Integraciones del proyecto** ;
3. abre después **Administración de la plataforma** ;
4. controla finalmente la **entitlement**, la **permission** y el estado de salud del conector.

## Escenario completo — de la señal a la acción ejecutada

### Caso simple

1. una señal `open` indica un bloqueo ;
2. el equipo lee el resumen, la explicación y las pruebas ;
3. decide que se necesita un ticket Jira ;
4. la política permite al **Jefe de proyecto** `propose` pero exige `require_approval` ;
5. el Jefe de proyecto crea la solicitud en **Acciones y aprobaciones** ;
6. el **Propietario del proyecto** aprueba ;
7. la acción pasa a **executed** ;
8. el ticket externo y la traza interna permanecen alineados.

Este escenario resume bien la lógica del producto: **ver, decidir, controlar, ejecutar, trazar**.

## Buenas prácticas

- nunca confundas **borrador** y **ejecución real** ;
- usa las políticas para limitar salidas sensibles ;
- solicita aprobación tan pronto como un contenido salga del proyecto o modifique un sistema externo ;
- verifica siempre las pruebas antes de proponer una acción ;
- usa el **Journal IA** y la cola de acciones como referencia común de auditoría.

## Siguiente

- [Conectores y integraciones](./connecteurs-jira-et-sharepoint)
- [Informes, registro de IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md)
- [Portafolio y administración técnica](./portefeuille-et-administration-technique.md)
- [Mantenimiento, soporte y FAQ](./maintenance-support-faq.md)
