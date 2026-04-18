---
title: Conectores e integraciones
slug: /connecteurs-jira-et-sharepoint
description: Comprender todos los conectores visibles en ProPM Agent, sus ventajas, usos y modo de integración en la plataforma.
---

[Inicio](./index.md) · [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md) · [Gobernanza, decisiones y acciones](./gouvernance-decisions-et-actions.md) · [Portafolio y administración técnica](./portefeuille-et-administration-technique.md)

![Flujo Jira y SharePoint entre plataforma, proyecto y acciones](/img/diagrams/fr/connecteurs-jira-sharepoint-workflow.svg)

## Objetivo

Esta página explica **todos los conectores y proveedores de ingestión visibles en ProPM Agent**, sus ventajas, utilidad empresarial y la forma en que se integran en el producto.

El objetivo es responder a tres preguntas simples:

1. **¿Para qué sirve este conector?**
2. **¿Dónde se ve en ProPM Agent?**
3. **¿Cómo se pasa de un conector declarado a uno realmente utilizable?**

## Para un principiante: ¿qué es un conector en ProPM Agent?

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
2. valida la configuración y la conectividad ;
3. el conector se hace disponible en **Intégrations du projet** ;
4. las **Políticas de gobernanza** definen quién puede usarlo y a qué nivel ;
5. el equipo lo utiliza luego en **Connaissance**, **Documents PM** o **Actions & approbations** ;
6. la trazabilidad final permanece visible en la **actividad del proyecto** y el **Journal IA**.

## Dónde el usuario ve los conectores en el producto

| Superficie | Lo que se hace allí |
| --- | --- |
| **Administration de la plateforme** | crear la definición técnica, rellenar la autenticación, validar y probar |
| **Intégrations du projet** | verificar qué conectores están realmente abiertos al proyecto actual |
| **Connaissance** | importar documentos, páginas, tickets, work items u otras fuentes |
| **Politiques de gouvernance** | decidir qué roles pueden observar, proponer o ejecutar acciones |
| **Actions & approbations** | crear una acción real, hacerla aprobar y luego ejecutarla |
| **Journal IA / actividad** | mantener la trazabilidad del flujo y las ejecuciones |

## Tres niveles a no confundir

| Nivel | Qué significa | Lectura correcta |
| --- | --- | --- |
| **Plataforma** | el conector existe técnicamente | está definido, autenticado y controlado globalmente |
| **Proyecto** | el conector está abierto a un proyecto específico | el proyecto puede verlo como opción potencial |
| **Uso gobernado** | el conector puede usarse en un flujo real | el usuario tiene el rol correcto, la política adecuada y una opción de ejecución saludable |

## Conectores de ejecución visibles

Los conectores de ejecución sirven para **enviar una acción** desde ProPM Agent a una herramienta externa.

### Tabla completa de conectores de ejecución

| Conector | Utilidad principal | Ventaja principal | Integración típica en ProPM Agent |
| --- | --- | --- | --- |
| **Jira** | crear o actualizar tickets, comentarios y seguimientos de entrega | muy útil para formalizar un bloqueo o una acción de seguimiento | preparado en **Administration de la plateforme**, expuesto en **Intégrations du projet**, usado en **Actions & approbations** |
| **Azure DevOps** | crear o actualizar work items y seguir la entrega | buena opción para equipos ya organizados alrededor de Boards y sprints | misma lógica que Jira, con integración a nivel de proyecto y archivo de acciones |
| **GitHub** | crear issues o alimentar flujos de repositorio | práctico para enlazar un tema de proyecto a un backlog técnico | visible como conector de ejecución, gobernado por proyecto antes de uso |
| **GitLab** | gestionar issues, merge requests y handoffs DevSecOps | útil para organizaciones que ya operan en GitLab | conectado a la plataforma y luego usado para acciones gobernadas |
| **ServiceNow** | crear tickets de servicio, soporte o aprobación | muy útil cuando la salida del proyecto debe entrar en un flujo ITSM | conectado al proyecto como salida controlada hacia procesos de servicio |
| **Monday.com** | sincronizar planes y tableros de equipo | útil para equipos que pilotan la entrega en Monday.com | conector de ejecución gobernado disponible una vez la definición técnica esté lista |
| **Asana** | crear o actualizar tareas y responsables | práctico para el seguimiento de acciones ligeras y distribuidas | expuesto al proyecto como herramienta de seguimiento de acción externa |
| **ClickUp** | enlazar listas, tareas y estados de trabajo | útil para centralizar tareas de equipo en ClickUp | integrado como salida de acción gobernada |
| **Wrike** | pilotar tareas, validaciones y planes de trabajo | pertinente para flujos empresariales con coordinación y aprobación | usado como conector de ejecución una vez abierto al proyecto |
| **Microsoft Teams** | enviar una notificación o recordatorio en Teams | práctico para difundir rápidamente una decisión o alerta | aparece en **Actions & approbations** para mensajes gobernados |
| **Slack** | enviar una actualización o solicitud de aprobación | útil para organizaciones que colaboran principalmente en Slack | misma lógica que Teams con control por política y permisos |
| **Outlook** | enviar un correo o recordatorio gobernado | útil para comunicaciones formales a destinatarios específicos | usado en **Actions & approbations** con control de destinatarios |
| **SharePoint publish** | publicar un artefacto o documento revisado en SharePoint | muy útil para difundir un entregable validado a una biblioteca objetivo | ligado a un destino de artefacto y luego pilotado por **Actions & approbations** |
| **Notion** | actualizar espacios de notas o trabajo | útil cuando el equipo mantiene notas operativas en Notion | conectado como salida gobernada para alimentar un espacio compartido |
| **Trello** | crear o seguir tarjetas | práctico para equipos que usan un backlog simple y ligero | integrado como salida de acción hacia tableros Trello |
| **Webhook** | llamar a una herramienta específica de la empresa | muy flexible para necesidades a medida | usado como salida gobernada hacia un sistema externo o interno |

## Proveedores de ingestión visibles

Los proveedores de ingestión sirven para **hacer entrar contenido** en ProPM Agent para enriquecer la **Connaissance**.

### Tabla completa de proveedores de ingestión

| Proveedor | Utilidad principal | Ventaja principal | Integración típica en ProPM Agent |
| --- | --- | --- | --- |
| **SharePoint** | importar documentos, listas y pruebas Microsoft 365 | muy útil para recuperar documentos de referencia ya existentes | preparado a nivel de plataforma y luego usado en **Connaissance** y **Intégrations du projet** |
| **Confluence** | importar páginas wiki, notas y bases de conocimiento | práctico para recuperar documentación de trabajo | alimenta la **Connaissance** con contenidos textuales y estructurados |
| **Jira** | importar issues, comentarios e historial de entrega | acerca el contexto operativo del proyecto y el backlog | usado como fuente de contexto de proyecto en **Connaissance** |
| **Azure DevOps** | importar work items, elementos de sprint y artefactos de entrega | útil para enlazar la gestión de proyecto y la entrega con herramientas | enriquece la conocimiento con información de Boards / sprint |
| **Google Drive** | indexar archivos y carpetas compartidas | útil para organizaciones Google Workspace | permite integrar archivos de trabajo en la conocimiento |
| **OneDrive** | importar archivos personales o de equipo | práctico para recuperar documentos Microsoft 365 fuera de SharePoint | alimenta la conocimiento a partir de espacios OneDrive |
| **Box** | conectar repositorios documentales corporativos | útil en entornos que estandarizan su gestión documental en Box | sirve como fuente de importación a la conocimiento |
| **Dropbox** | importar carpetas y contenidos compartidos | práctico si la organización sigue almacenando contenidos en Dropbox | provee fuentes documentales a la conocimiento |
| **Notion** | indexar espacios, páginas y notas operativas | muy útil cuando el conocimiento del proyecto está disperso en páginas Notion | alimenta la conocimiento con páginas y notas estructuradas |
| **Amazon S3** | importar archivos o artefactos desde buckets | útil para recuperar entregables generados o archivados en S3 | fuente de ingestión para documentos y artefactos |
| **Upload manual** | cargar directamente archivos en ProPM Agent | ideal para iniciar rápidamente sin depender de un conector externo | el equipo carga él mismo los archivos útiles en la conocimiento |
| **Webhook** | recibir contenido desde un flujo empresarial a medida | muy flexible cuando la herramienta fuente no tiene conector estándar | sirve como entrada personalizada a la conocimiento |

## Conectores presentes en varios roles

Algunos nombres aparecen en varios lugares del producto. Es normal.

| Familia | ¿Puede servir para importar? | ¿Puede servir para ejecutar una acción? | Lectura correcta |
| --- | --- | --- | --- |
| **SharePoint** | sí | sí, vía **SharePoint publish** | se puede leer documentos y publicar un artefacto revisado |
| **Jira** | sí | sí | se puede importar contexto Jira y luego crear un ticket gobernado |
| **Azure DevOps** | sí | sí | se puede importar work items y luego crear o actualizar un work item |
| **Notion** | sí | sí según la configuración | se puede leer páginas y también alimentar un espacio compartido |
| **Webhook** | sí | sí | puede servir de entrada o salida según el flujo configurado |

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
6. el ticket se ejecuta y se registra en el producto.

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
5. según el riesgo, la acción se aprueba y luego se ejecuta ;
6. la trazabilidad del mensaje permanece historizada.

### Ventaja principal

La difusión no sale como un mensaje libre: permanece **gobernada, revisada y trazable**.

## Ejemplo 4 — Webhook para una herramienta específica de la empresa

### Cuándo usarlo

Usa **Webhook** cuando la empresa quiere enviar o recibir datos desde una herramienta que no tiene conector dedicado.

### Integración con ProPM Agent

- como **ingestión**, un webhook puede empujar contenido a la conocimiento ;
- como **ejecución**, un webhook puede enviar una acción a una herramienta externa ;
- en ambos casos, es preferible tratarlo como un flujo **gobernado**, no como una salida libre.

### Ventaja principal

El webhook aporta flexibilidad sin obligar al producto a conocer nativamente todas las herramientas corporativas.

## Cómo reconocer que un conector está realmente listo

Para un usuario principiante, hay que distinguir tres estados simples:

| Situación | Qué significa |
| --- | --- |
| el conector es visible en **Administration de la plateforme** | existe técnicamente |
| el conector es visible en **Intégrations du projet** | el proyecto puede potencialmente usarlo |
| el conector aparece en **Actions & approbations** como opción saludable y autorizada | la acción puede realmente ser propuesta o ejecutada según la política |

## Por qué un conector visible puede quedarse bloqueado

Un conector puede ser visible pero no utilizables si:

- su estado **health** requiere verificación ;
- el proyecto no tiene el buen **entitlement** ;
- la **policy** del proyecto bloquea el uso ;
- el usuario no tiene la buena **permission** ;
- el binding del proyecto aún no se abrió ;
- el destino de artefacto esperado no está configurado.

## Lectura simple para un usuario principiante

| Si observas… | Verifica primero… |
| --- | --- |
| el conector existe a nivel de plataforma pero no aparece en el proyecto | **Intégrations du projet** |
| aparece en el proyecto pero ninguna acción sale | **Politiques de gouvernance** y permisos del rol |
| la acción es visible pero no aparece ninguna opción saludable | salud del conector, binding del proyecto y opción de ejecución compatible |
| la importación se propone pero no devuelve nada | proveedor de ingestión, fuente realmente accesible y frescura de datos |
| la publicación SharePoint no concluye | destino de artefacto, política, aprobación y conector **SharePoint publish** |

## Flujo recomendado para un cliente

1. identificar las herramientas realmente útiles para el proyecto ;
2. preparar los conectores en **Administration de la plateforme** ;
3. abrir al proyecto solo los conectores listos ;
4. configurar las **Políticas de gobernanza** por rol ;
5. probar una primera importación o acción ;
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
