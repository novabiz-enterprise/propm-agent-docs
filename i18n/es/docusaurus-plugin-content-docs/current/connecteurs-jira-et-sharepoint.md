---
title: Conectores e integraciones
slug: /connecteurs-jira-et-sharepoint
description: Comprender todos los conectores visibles en ProPM Agent, sus ventajas, usos y modo de integración en la plataforma.
---

[Inicio](./index.md) · Conectores e integraciones

![Flujo Jira y SharePoint entre plataforma, proyecto y acciones](/img/diagrams/es/connecteurs-jira-sharepoint-workflow.svg)

## Objetivo

Esta página explica el **catálogo operativo de conectores y proveedores de ingestión soportados en ProPM Agent**, sus ventajas, utilidad empresarial y la forma en que se integran en el producto. Algunas listas de administración también pueden mostrar familias extensibles o personalizadas que requieren configuración y validación adicionales antes de un uso real.

El objetivo es responder a tres preguntas simples:

1. **¿Para qué sirve este conector?**
2. **¿Dónde se ve en ProPM Agent?**
3. **¿Cómo se pasa de un conector declarado a uno realmente utilizable?**

## Entender un conector en ProPM Agent

Un conector es un **puente controlado** entre ProPM Agent y otra herramienta de la empresa.

En el producto, un conector puede servir a tres cosas diferentes:

| Tipo | Para qué sirve | Ejemplo |
| --- | --- | --- |
| **Conector de ejecución** | enviar una acción a una herramienta externa | crear un ticket Jira, enviar un mensaje Teams, publicar en SharePoint |
| **Proveedor de ingestión** | importar contenido a la base de conocimiento | importar documentos SharePoint, páginas Confluence, work items Azure DevOps |
| **Destino de artefacto** | publicar un entregable revisado a un destino objetivo | publicar un documento PM en SharePoint |

### Regla simple a recordar

- **Importar** no es lo mismo que **publicar**.
- **Ver** un conector no es lo mismo que **poder ejecutarlo**.
- Un conector puede existir **a nivel de plataforma**, sin estar todavía **abierto a un proyecto**.

## Cómo un conector se integra en ProPM Agent

Cualquiera que sea el conector, el recorrido lógico es siempre el mismo:

1. el administrador lo prepara en **Administration de la plataforma** ;
2. valida la configuración y, cuando está activada, la conectividad real ;
3. el conector se hace disponible en **Intégrations du projet** ;
4. las **Políticas de gobernanza** definen quién puede usarlo y a qué nivel ;
5. el equipo lo utiliza luego en **Connaissance**, **Documents PM** o **Actions & approbations** ;
6. la trazabilidad final permanece visible en la **actividad del proyecto** y el **Journal IA**.

## Dónde el usuario ve los conectores en el producto

| Superficie | Lo que se hace allí |
| --- | --- |
| **Administración de la plataforma** | crear la definición técnica, completar la autenticación, validar, probar según el proveedor y activar probes cuando sea necesario |
| **Integraciones del proyecto** | verificar qué conectores están realmente abiertos al proyecto actual |
| **Conocimiento** | importar documentos, páginas, tickets, work items u otras fuentes según el proveedor disponible |
| **Políticas de gobernanza** | decidir qué roles pueden observar, proponer o ejecutar acciones |
| **Acciones y aprobaciones** | preparar una solicitud de acción, hacerla aprobar y ejecutarla cuando el modo del conector lo permita |
| **Journal IA / actividad** | mantener la trazabilidad del flujo y las ejecuciones |

## Tres niveles a no confundir

| Nivel | Qué significa | Lectura correcta |
| --- | --- | --- |
| **Plataforma** | el conector existe técnicamente | está definido, autenticado y controlado globalmente |
| **Proyecto** | el conector está abierto a un proyecto específico | el proyecto puede verlo como opción potencial |
| **Uso gobernado** | el conector puede usarse en un flujo real | el usuario tiene el rol correcto, la política adecuada y una opción de ejecución saludable |

## Conectores de ejecución visibles

Los conectores de ejecución sirven para **enviar una acción** desde ProPM Agent a una herramienta externa.

La pantalla **Integraciones del proyecto** muestra estos conectores de ejecución habilitados como disponibles para vincular cuando aún no están asociados al proyecto.

### Catálogo actual de conectores de ejecución

| Conector en la interfaz | Utilidad principal | Acción típica del proyecto |
| --- | --- | --- |
| **Asta Powerproject schedule sync** | sincronizar cronogramas y baselines empresariales | vincular cuando las actualizaciones de planificación deben pasar por un canal de proyecto gobernado |
| **Azure DevOps delivery project** | crear o actualizar work items y seguir la entrega | vincular para equipos que usan Boards, sprints o backlogs de entrega |
| **Jira delivery workspace** | crear o actualizar issues y seguimiento de entrega | vincular cuando riesgos, bloqueos o decisiones deben convertirse en tickets Jira gobernados |
| **Microsoft Project schedule sync** | sincronizar cronogramas de Microsoft Project | vincular cuando el plan maestro se gestiona en Microsoft Project |
| **Microsoft Teams collaboration** | enviar mensajes colaborativos y notificaciones de aprobación gobernadas | vincular para notificaciones de equipo controladas |
| **Outlook executive notifications** | enviar correos o recordatorios gobernados a stakeholders | vincular para comunicaciones formales a destinatarios identificados |
| **SharePoint publication library** | publicar artefactos revisados en una biblioteca SharePoint | vincular cuando entregables PM aprobados deben distribuirse por SharePoint |
| **Smartsheet portfolio workspace** | actualizar hojas y datos de portafolio | vincular cuando el seguimiento de portafolio se gestiona en Smartsheet |
| **Webhook event delivery** | llamar a un endpoint empresarial o interno específico | vincular para automatización posterior personalizada |
| **Wrike delivery workspace** | actualizar tareas, responsables y coordinación de entrega | vincular cuando Wrike soporta el trabajo operativo |

## Proveedores de ingestión visibles

Los proveedores de ingestión sirven para **hacer entrar contenido** en ProPM Agent para enriquecer el **Conocimiento**.

La pantalla del proyecto separa los proveedores ya vinculados de los proveedores **Available to bind**. Los contadores varían según el tenant, pero la pantalla distingue bindings saludables de entradas del catálogo que aún necesitan binding de proyecto o configuración de plataforma.

### Catálogo actual de proveedores de ingestión

| Proveedor en la interfaz | Modo o fuente mostrada | Utilidad principal | Nota de preparación |
| --- | --- | --- | --- |
| **Smartsheet sheet import** | Smartsheet · Scheduled | refrescar hojas de portafolio en Conocimiento | puede aparecer vinculado y **Healthy** |
| **Azure Data Factory evidence pipeline** | ADF · Pipeline | importar evidencias, RAID y refrescos de reporting | puede aparecer vinculado y **Healthy** |
| **Asta Powerproject schedule import** | Asta Powerproject Import · Manual | importar snapshots y baselines de cronograma | disponible para vincular cuando esté **Ready** |
| **Azure Blob document ingest** | Blob Storage · Scheduled | ingerir entregas documentales gobernadas y refrescos de archivo | disponible para vincular cuando esté **Ready** |
| **Confluence knowledge import** | Confluence · Manual | importar páginas wiki y conocimiento procedimental | puede mostrar **Not configured** hasta completar la fuente |
| **Jira issue import** | Jira · Scheduled | importar issues, bloqueos y evidencias de seguimiento | puede mostrar **Not configured** hasta completar la fuente |
| **Microsoft Project schedule import** | MS Project Import · Manual | importar baselines y actualizaciones de cronograma | disponible para vincular cuando esté **Ready** |
| **SFTP document intake** | SFTP · Scheduled | importar entregas de documentos de terceros | puede mostrar **Not configured** hasta completar host, carpeta y credenciales |
| **SharePoint knowledge import** | SharePoint · Manual | importar bibliotecas de conocimiento y artefactos de reporting | disponible para vincular tras configurar sitio y biblioteca |
| **Wrike task import** | Wrike · Scheduled | importar tareas, responsables y evidencias de workflow | disponible para vincular tras configurar el espacio |

## Conectores presentes en varios roles

Algunos nombres aparecen en varios lugares del producto. Es normal: el proveedor de importación y el conector de ejecución siguen siendo bindings separados.

| Familia | Rol de importación | Rol de ejecución | Lectura correcta |
| --- | --- | --- | --- |
| **SharePoint** | **SharePoint knowledge import** | **SharePoint publication library** | puede leer documentos y publicar un artefacto revisado, pero cada rol tiene su propio setup y binding |
| **Jira** | **Jira issue import** | **Jira delivery workspace** | puede importar contexto Jira y luego crear un ticket gobernado si el conector de ejecución también está vinculado |
| **Microsoft Project** | **Microsoft Project schedule import** | **Microsoft Project schedule sync** | puede llevar evidencias de planificación a Conocimiento y sincronizar cambios de cronograma gobernados |
| **Smartsheet** | **Smartsheet sheet import** | **Smartsheet portfolio workspace** | puede refrescar evidencias de portafolio y actualizar Smartsheet como destino de ejecución |
| **Wrike** | **Wrike task import** | **Wrike delivery workspace** | puede importar evidencias de tareas operativas y actualizar Wrike mediante acciones gobernadas |
| **Asta Powerproject** | **Asta Powerproject schedule import** | **Asta Powerproject schedule sync** | puede importar snapshots de cronograma y sincronizar cambios controlados |
| **Azure DevOps** | — | **Azure DevOps delivery project** | disponible como conector de ejecución; cualquier ruta de importación debe validarse por separado si está disponible |
| **ADF / Blob / Confluence / SFTP** | solo proveedor de ingestión | — | enriquecen el **Conocimiento** y no se convierten automáticamente en destinos de acción |
| **Teams / Outlook / Webhook** | — | solo conector de ejecución | envían mensajes o eventos gobernados y no importan automáticamente Conocimiento |

## Catálogo soportado vs opciones extensibles

El catálogo anterior corresponde al catálogo operativo actualmente inicializado, controlado y expuesto en **Integraciones del proyecto**. **Administración de la plataforma** también puede mostrar familias adicionales o personalizadas como GitHub, GitLab, ServiceNow, Slack, Notion, Google Drive, OneDrive, Box o Dropbox.

Trata esas entradas adicionales como extensiones hasta que un administrador haya confirmado la definición técnica, los campos obligatorios, la estrategia de autenticación, la validación, el binding de proyecto y la política de gobernanza aplicable.

## Configuración mínima por conector de ejecución

Los campos siguientes son los mínimos que deben completarse antes de un uso `test` o `live`. Los nombres pueden variar ligeramente según el formulario, pero la idea es la misma: un destino, una identidad de autenticación y un objetivo de proyecto explícito.

| Conector | Campos mínimos antes de uso test/live | Autenticación típica | Probe de conectividad si está activada |
| --- | --- | --- | --- |
| **Jira delivery workspace** | `base_url` o `site_url`, `project_key` | API key, basic, PAT, bearer token u OAuth | lee el proyecto Jira objetivo |
| **Azure DevOps delivery project** | `organization_url` u `organization`, `project`, `work_item_type` | PAT, bearer token u OAuth | verifica el tipo de work item en el proyecto |
| **Microsoft Teams collaboration** | `team_id`, `channel_id` | Microsoft Graph con bearer token, OAuth, client credentials o managed identity | lee el canal Teams objetivo |
| **Outlook executive notifications** | `mailbox`, `user_id` o `user_principal_name` | Microsoft Graph con bearer token, OAuth, client credentials o managed identity | verifica el buzón o usuario Graph |
| **SharePoint publication library** | `site_id` o `site_url`, `drive_id` o `library` | Microsoft Graph con bearer token, OAuth, client credentials o managed identity | verifica el sitio y la biblioteca |
| **Webhook event delivery** | `webhook_url` o `endpoint_url` en HTTPS | sin auth, API key, bearer token, basic u OAuth | envía `HEAD`, luego `GET` si es necesario |
| **Microsoft Project schedule sync** | `project_id`, `portfolio` o `workspace` | Microsoft Graph con bearer token, OAuth, client credentials o managed identity | usa el endpoint o path de probe configurado |
| **Smartsheet portfolio workspace** | `sheet_id` o `workspace_id` | API key, bearer token, OAuth o PAT | lee la hoja o workspace Smartsheet |
| **Wrike delivery workspace** | `folder_id`, `space_id` o `task_id` | bearer token u OAuth | lee la tarea o carpeta Wrike |
| **Asta Powerproject schedule sync** | `base_url` o `endpoint_url`, luego `project_id`, `portfolio` o `schedule_id` | API key, bearer token, OAuth o basic | usa el endpoint o path de probe configurado |

## Configuración mínima por proveedor de ingestión

Un proveedor de ingestión debe identificar la fuente, el modo de importación y la identidad usada para leer esa fuente. Las importaciones programadas también requieren una cadencia u orquestación compatible.

| Proveedor | Campos mínimos antes de uso real | Autenticación típica | Probe de conectividad si está activada |
| --- | --- | --- | --- |
| **SharePoint knowledge import** | `site_id` o `site_url`, `drive_id` o `library` | Microsoft Graph con bearer token, OAuth, client credentials o managed identity | verifica la biblioteca y los hijos raíz |
| **Azure Data Factory evidence pipeline** | `subscription_id`, `resource_group_name`, `factory` o `factory_name`, `pipeline` o `pipeline_name` | managed identity, client credentials o bearer token | lee la definición del pipeline |
| **Azure Blob document ingest** | `account_url`, `storage_account` o `account_name`, luego `container` | managed identity, SAS, bearer token o client credentials | lista algunos blobs del contenedor |
| **Confluence knowledge import** | `base_url`, `space`, `space_key` o `space_id` | basic, bearer token u OAuth | verifica el espacio Confluence |
| **Jira issue import** | `base_url` o `site_url`, luego `project`, `project_key` o `jql` | API key, basic, PAT, bearer token u OAuth | ejecuta una búsqueda Jira limitada |
| **SFTP document intake** | `host` o `base_url`, `username` o `user`, `folder` o `path`, puerto válido si se proporciona | basic, password o clave privada SSH | verifica el acceso TCP al servidor SFTP |
| **Microsoft Project schedule import** | `project_id`, `portfolio` o `workspace` | Microsoft Graph con bearer token, OAuth, client credentials o managed identity | usa el endpoint o path de probe configurado |
| **Smartsheet sheet import** | `sheet_id` o `workspace_id` | API key, bearer token, OAuth o PAT | lee la hoja o workspace Smartsheet |
| **Wrike task import** | `folder_id` o `space_id` | bearer token u OAuth | lee tareas de la carpeta o espacio |
| **Asta Powerproject schedule import** | `base_url` o `endpoint_url`, luego `project_id`, `portfolio` o `schedule_id` | API key, bearer token, OAuth o basic | usa el endpoint o path de probe configurado |

## Validación, probes y límites de runtime

| Paso | Qué confirma | Qué no garantiza |
| --- | --- | --- |
| **Save** | la definición se guarda a nivel de plataforma | la fuente externa no necesariamente fue contactada |
| **Validate** | campos obligatorios, modo, autenticación y URLs HTTPS son coherentes | solo hay llamada real de red si los probes están activados |
| **Connectivity probe** | ProPM Agent puede llegar a un endpoint no destructivo del proveedor | no crea tickets, no envía mensajes y no dispara una importación completa |
| **Bind to project** | el proyecto puede consumir la definición de plataforma | policy, rol de usuario, health, validación y readiness del binding todavía pueden bloquear el uso |
| **Validate binding** | el binding del proyecto sigue alineado con la definición de plataforma | no reemplaza una acción o importación de negocio real |

Los probes de conectividad son intencionalmente opt-in. Un administrador puede activarlos con `connectivity_probe_enabled`, `run_connectivity_probe`, `live_connectivity_check`, metadatos equivalentes o una variable de entorno de plataforma. Sin esa activación, la validación sigue siendo un control de coherencia y readiness.

Si un conector permanece en modo `mock` o `test`, ProPM Agent puede gestionar la solicitud, la gobernanza, la aprobación y la trazabilidad sin enviar necesariamente la llamada final al sistema externo. La ejecución real del proveedor requiere un modo de conector compatible, configuración completa, una policy que lo permita y un entorno que habilite ese camino.

## Acciones gobernadas y conector requerido

| Acción de usuario | Tipo de acción interno | Conector requerido | Campos mínimos de negocio |
| --- | --- | --- | --- |
| Publicar un artefacto en SharePoint | `publish_artifact_to_sharepoint` | `sharepoint_publish` | `artifact_id`, `destination_id` |
| Enviar un mensaje Teams | `send_teams_message` | `teams` | `body` |
| Enviar un mensaje Outlook | `send_outlook_message` | `outlook` | `body`, `recipients` |
| Crear un ticket Jira | `create_jira_ticket` | `jira` | `title` |
| Crear un work item Azure DevOps | `create_azure_devops_ticket` | `azure_devops` | `title` |

Algunas etiquetas heredadas se normalizan automáticamente. Por ejemplo, `send_message` se convierte en `send_teams_message`, `send_email` en `send_outlook_message`, `create_work_item` en `create_azure_devops_ticket`, y `publish_sharepoint_artifact` en `publish_artifact_to_sharepoint`.

## Estados, bloqueos y orden de diagnóstico

| Estado o bloqueo visible | Lectura práctica | Primera acción recomendada |
| --- | --- | --- |
| **Ready** o **available** | la definición puede vincularse o usarse si el resto de la cadena está abierto | verificar binding de proyecto y policy |
| **Healthy** | la última validación conocida es positiva | confirmar que el proyecto está vinculado |
| **Not configured** | faltan campos, fuente, destino o credenciales | completar la definición en Administración de la plataforma |
| **Not validated** o **not_tested** | la definición existe pero aún no pasó la validación o prueba esperada | ejecutar Validate o el probe apropiado |
| **Blocked by health** | la salud de plataforma está degradada o inválida | verificar endpoint, auth, scopes y red |
| **Blocked by entitlement** | wording heredado para una integración bloqueada; en los planes Marketplace no es una diferencia de funcionalidad | verificar configuración, health, binding, policy, rol y disponibilidad de licencia si el bloqueo es de acceso |
| **Blocked by policy** | la gobernanza del proyecto prohíbe esta acción o tipo de uso | ajustar la política o el rol |
| **Binding disabled** | el binding de proyecto existe pero está desactivado | reactivarlo o recrearlo si está permitido |
| **Missing platform definition** | el proyecto referencia una definición ausente o eliminada | recrear o corregir la definición de plataforma |

El orden más útil para diagnosticar es: definición de plataforma, configuración obligatoria, validación o probe, binding de proyecto, policy, permiso del usuario, payload de acción o importación y luego disponibilidad de licencia si el usuario no puede acceder a la app.

## Importación, salida externa y auditoría

| Tema | Lo que ProPM Agent traza | Qué verificar en la herramienta externa |
| --- | --- | --- |
| Importación Knowledge | run de ingestión, proveedor, binding, source label, frescura, contadores y Trace ID | volumen disponible, derechos fuente, filtros, archivos omitidos y deduplicación |
| Publicación SharePoint | solicitud de acción, aprobación, conector, destino y Trace ID | URL final, biblioteca, permisos de escritura y versión publicada |
| Jira o Azure DevOps | acción, justificación, payload de negocio y Trace ID | clave del ticket o work item creado, proyecto objetivo y tipo de item |
| Teams u Outlook | solicitud, destinatarios o canal lógico, aprobación y Trace ID | entrega real, canal, mailbox y posibles rechazos Graph |
| Webhook | endpoint lógico, estado de intento, respuesta o error y Trace ID | código HTTP, respuesta truncada, validación de firma y reintento posterior |

Nunca pongas un secreto en el payload de negocio de una acción ni en una nota de usuario. Los secretos, claves y referencias sensibles deben permanecer en la configuración de plataforma prevista para ese uso.

## Seguridad y autenticación

| Familia | Autenticaciones generalmente aceptadas | Punto de atención |
| --- | --- | --- |
| Microsoft Graph, Teams, Outlook, SharePoint y Microsoft Project | bearer token, OAuth, client credentials o managed identity | limitar scopes a los sitios, buzones, canales o proyectos necesarios |
| Jira y Confluence | API key, basic, PAT, bearer token u OAuth según el producto | usar cuentas técnicas de privilegio mínimo |
| Azure DevOps | PAT, bearer token u OAuth | limitar derechos al proyecto y a los work item types esperados |
| Azure Data Factory y Blob Storage | managed identity, client credentials, SAS o bearer token según el servicio | preferir identidades administradas y limitar contenedores o pipelines accesibles |
| SFTP | basic, password o clave privada SSH | verificar rotación de clave, puerto y carpeta raíz autorizada |
| Webhook | sin auth, API key, bearer token, basic u OAuth | exigir HTTPS, firma o secreto del lado endpoint cuando el riesgo lo justifique |

## Ejemplo 1 — SharePoint de extremo a extremo

SharePoint es uno de los mejores ejemplos para comprender la lógica completa.

### Lo que SharePoint puede hacer

- importar documentos a la **Connaissance** ;
- servir de **destino de artefacto** ;
- recibir una **publicación gobernada** vía **SharePoint publish**.

### Recorrido paso a paso

1. el administrador prepara SharePoint en **Administration de la plateforme** ;
2. el proyecto recupera el binding SharePoint en **Intégrations du projet** ;
3. el equipo importa documentos existentes en la **Connaissance** ;
4. un documento PM se redacta o revisa ;
5. una política de gobernanza decide quién puede proponer o ejecutar una publicación ;
6. la publicación pasa por **Actions & approbations** si se requiere validación ;
7. la trazabilidad final permanece visible en la actividad del proyecto y el **Journal IA**.

### Ventajas de SharePoint en ProPM Agent

- reutiliza un repositorio documental ya conocido por los equipos ;
- permite enlazar importación, revisión documental y publicación final ;
- se adapta bien a flujos de validación formales.

## Ejemplo 2 — Jira de extremo a extremo

### Lo que Jira puede hacer

- importar issues y comentarios como contexto ;
- recibir un ticket gobernado desde una decisión o señal ;
- materializar un bloqueo en un sistema de seguimiento externo.

### Recorrido paso a paso

1. Jira se prepara en **Administration de la plateforme** ;
2. se abre al proyecto en **Intégrations du projet** ;
3. el equipo consulta una señal o decisión ;
4. crea una acción **Crear un ticket Jira** ;
5. la gobernanza decide si la acción es directa o sujeta a aprobación ;
6. el ticket se crea cuando la ejecución live del proveedor está activada; en todos los casos, la solicitud y la decisión quedan trazadas en el producto.

### Ventajas de Jira en ProPM Agent

- transforma una constatación de proyecto en ticket formal ;
- mantiene una trazabilidad clara entre señal, justificación y ticket creado ;
- evita acciones manuales no trazadas.

## Ejemplo 3 — Teams o Outlook para la difusión

### Utilidad

- **Teams** sirve para difundir una notificación en la herramienta colaborativa ;
- **Outlook** sirve para enviar una comunicación más formal por correo electrónico.

### Integración con ProPM Agent

1. el conector se prepara a nivel de plataforma ;
2. el proyecto lo ve como opción de ejecución ;
3. una política define qué roles pueden enviar un mensaje ;
4. el equipo prepara el mensaje en **Actions & approbations** ;
5. según el riesgo, la acción se aprueba y luego se ejecuta cuando el modo del conector lo permite ;
6. la trazabilidad del mensaje permanece historizada aunque el envío externo esté bloqueado o diferido.

### Ventaja principal

La difusión no sale como un mensaje libre: permanece **gobernada, revisada y trazable**.

## Ejemplo 4 — Webhook event delivery

### Cuándo usarlo

Usa **Webhook event delivery** cuando ProPM Agent debe llamar a un endpoint interno o de terceros específico después de una decisión gobernada.

### Integración con ProPM Agent

- en el catálogo actual, Webhook es un **conector de ejecución**;
- vincúlalo al proyecto solo después de validar el endpoint de plataforma y el `health`;
- si más adelante se añade ingestión webhook entrante, trátala como un proveedor de ingestión separado, con su propia validación y binding de proyecto.

### Ventaja principal

Webhook delivery aporta flexibilidad para automatizaciones personalizadas sin convertir el flujo en una salida no controlada.

## Cómo reconocer que un conector está realmente listo

Para leer correctamente el estado de un conector, distingue tres estados simples:

| Situación | Qué significa |
| --- | --- |
| el conector es visible en **Administration de la plateforme** | existe técnicamente |
| el conector es visible en **Intégrations du projet** | el proyecto puede potencialmente usarlo |
| el conector aparece en **Actions & approbations** como opción saludable y autorizada | la acción puede realmente ser propuesta o ejecutada según la política |

## Por qué un conector visible puede quedarse bloqueado

Un conector puede ser visible pero no utilizables si:

- su estado **health** requiere verificación ;
- el binding del proyecto no está abierto, sano o configurado ;
- la **policy** del proyecto bloquea el uso ;
- el usuario no tiene la buena **permission** ;
- el binding del proyecto aún no se abrió ;
- el destino de artefacto esperado no está configurado.

## Lectura simple

| Si observas… | Verifica primero… |
| --- | --- |
| el conector existe a nivel de plataforma pero no aparece en el proyecto | **Intégrations du projet** |
| aparece en el proyecto pero ninguna acción sale | **Politiques de gouvernance** y permisos del rol |
| la acción es visible pero no aparece ninguna opción saludable | salud del conector, binding del proyecto y opción de ejecución compatible |
| la importación se propone pero no devuelve nada | proveedor de ingestión, fuente realmente accesible y frescura de datos |
| la publicación SharePoint no concluye | destino de artefacto, política, aprobación y conector **SharePoint publish** |

## Flujo recomendado para tu equipo

1. identificar las herramientas realmente útiles para el proyecto ;
2. preparar los conectores en **Administration de la plateforme** ;
3. abrir al proyecto solo los conectores listos ;
4. configurar las **Políticas de gobernanza** por rol ;
5. probar una primera importación o acción distinguiendo readiness, probe y ejecución real del proveedor ;
6. verificar la trazabilidad final en el **Journal IA**.

## A recordar

- ProPM Agent distingue claramente **importar**, **publicar** y **acción externa** ;
- un mismo nombre, como **SharePoint** o **Jira**, puede aparecer en varios roles ;
- la correcta lectura de un conector siempre se basa en tres preguntas: ¿está definido? ¿está abierto al proyecto? ¿está autorizado por la gobernanza?

## Siguiente

- [Gobernanza, decisiones y acciones](./gouvernance-decisions-et-actions.md)
- [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md)
- [Portafolio y administración técnica](./portefeuille-et-administration-technique.md)
- [Informes, Journal IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md)
