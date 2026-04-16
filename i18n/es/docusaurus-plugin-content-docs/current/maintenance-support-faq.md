---
title: Mantenimiento, soporte y preguntas frecuentes
slug: /maintenance-support-faq
description: Buenas prácticas operativas, diagnóstico común, alertas visibles y respuestas a preguntas frecuentes.
---

[Inicio](./index.md) · [Informes, registro de IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md) · [Glosario](./glossaire.md)

## Superficies útiles para el soporte

Los siguientes puntos de observación están confirmados en la aplicación:

- **notificaciones** en la barra superior;
- **indicador de salud** en la barra superior;
- **señales** en el espacio de trabajo del proyecto;
- **Registro de IA** para las ejecuciones y la actividad;
- **Auditoría / actividad** en la administración de la plataforma.

## Procedimiento de diagnóstico rápido

1. Verifique que el **proyecto** correcto esté activo;
2. Distinga **estado vacío**, **solo lectura**, **acceso denegado** o **error**;
3. Abra el **Registro de IA** si el incidente concierne a un agente, un resultado o un artefacto;
4. Conserve el **Trace ID** y, si es visible, el `Context snapshot ID` o el `Structured output ID`;
5. Verifique derechos, integraciones, entitlements y asientos si el acceso o la ejecución están bloqueados.

## Árbol de decisión corto por síntoma

| Síntoma | Superficie de primer nivel | Escalada siguiente |
| --- | --- | --- |
| Conexión o retorno de Microsoft anormal | [Primeros pasos](./demarrage.md) | verificar Entra, tenant, `redirectUri` y asientos |
| Ningún proyecto visible después de la conexión | **Proyectos** / selector de proyecto | **Control de acceso** o adición de la cuenta al proyecto |
| Respuesta del agente, artefacto o publicación dudosa | **Registro de IA** → `Runs` | **Actividad**, luego **Informes y artefactos** |
| Importación o búsqueda incoherente | **Conocimiento** e historial de importación | **Integraciones del proyecto**, luego **Administración de la plataforma** |
| Acción externa visible pero bloqueada | **Acciones y aprobaciones** | **Integraciones del proyecto**, luego **Administración de la plataforma** |

## Fichas de resolución rápida de problemas

### Problema de conexión

Verifique la URL, el tenant, la cuenta invitada si se usa guest, la `redirectUri` realmente configurada y la disponibilidad de un asiento si el plan consume uno.

### Página visible pero no modificable

Probablemente está en **solo lectura**. Verifique su rol antes de concluir que es un incidente.

### Documento visible pero no buscable

Comience por verificar el estado del documento (`Indexed`, `Ingesting`, `Failed`), el historial de importación, la actualización de la página y el `Trace ID` de búsqueda si una llamada falló.

### Importación desde una fuente atenuada o ausente

Las causas más frecuentes son: proveedor no validado, binding del proyecto ausente, entitlement bloqueante, permiso insuficiente o salud degradada.

### Acción visible pero no ejecutable

Verifique el conector compatible, el binding del proyecto, la aprobación requerida, el rol del usuario y la política aplicable.

### Voz no disponible

La voz depende del navegador. Pruebe otro navegador, verifique los permisos del micrófono y utilice la entrada de texto si el reconocimiento de voz no es compatible.

## Datos a transmitir al soporte

| Elemento | Por qué es útil |
| --- | --- |
| URL del despliegue | Identificar el entorno afectado |
| Proyecto afectado | Reproducir el contexto |
| Trace ID | Encontrar precisamente la ejecución o el evento |
| Context snapshot ID / Structured output ID | Relacionar una ejecución, una salida y un artefacto |
| Captura de pantalla | Comprender el estado visible en el momento del incidente |
| Hora aproximada | Cruzar el evento con los registros |

## Preguntas frecuentes — acceso y seguridad

### ¿Por qué puedo ver una página de administración sin poder modificarla?

Porque el producto distingue **solo lectura** y **acceso denegado**. Una página puede estar expuesta para inspección sin autorizar la modificación.

### ¿Por qué mi conexión de Microsoft tiene éxito pero la aplicación se queda bloqueada?

Verifique el tenant, la autorización de la cuenta, la existencia de un proyecto accesible y la disponibilidad de un asiento si el plan lo impone.

### ¿Por qué mi conexión tiene éxito pero no aparece ningún proyecto?

Este síntoma no indica necesariamente un problema de autenticación. Verifique primero el **selector de proyecto**, luego la página **Proyectos**. Si la lista permanece vacía, la cuenta probablemente aún no ha sido añadida al proyecto correcto o no tiene el derecho de creación.

### ¿Cuándo hay que invitar a una cuenta externa como usuario `guest`?

Cuando la cuenta pertenece a un tenant diferente al que aloja la aplicación. La cuenta debe entonces ser invitada al tenant objetivo, luego autorizada en la aplicación o a través del grupo esperado.

### ¿Cómo distinguir rápidamente un problema de tenant, de `redirect URI`, de cliente Entra o de asiento?

Siga este orden:

1. si Microsoft falla **antes** del retorno en la aplicación, sospeche primero del tenant, `clientId` o `redirect URI`;
2. si la conexión tiene éxito pero la aplicación se queda bloqueada, verifique luego los **asientos** y el acceso a un proyecto;
3. si solo una superficie precisa permanece bloqueada, el tema suele estar del lado del **rol** o **permiso** más que del lado de la autenticación.

## Preguntas frecuentes — salud, runtime y conectividad

### ¿Por qué el panel de salud está degradado mientras que algunas páginas aún cargan?

Porque la autenticación puede seguir siendo válida mientras un componente **API**, **realtime / WebSocket** o un proveedor permanece parcialmente degradado. Consulte primero el estado mostrado en el indicador de salud, luego continúe hacia [Interfaz y navegación](./interface-et-navigation.md) para la lectura del panel y [Portafolio y administración técnica](./portefeuille-et-administration-technique.md) si la duda recae en el proveedor o la integración de administración.

### ¿Qué hacer si la conexión tiene éxito, un proyecto es visible, pero las ejecuciones no se inician?

Verifique en este orden: proyecto activo, indicador de salud, proveedor de IA supuestamente operativo, entitlement eventual, luego **Registro de IA** para ver si al menos se ha creado una ejecución. Si el proveedor sigue siendo sospechoso, continúe hacia [Portafolio y administración técnica](./portefeuille-et-administration-technique.md).

## Preguntas frecuentes — proyecto, espacio de trabajo y agentes

### ¿Cuándo hay que usar Espacio de trabajo en lugar de Agentes?

Utilice **Espacio de trabajo** para ajustar y pilotar el proyecto; utilice **Agentes** para conversar con un agente y producir una salida estructurada.

### ¿Dónde se almacena el historial de chat?

El historial visible es local al navegador. No es un archivo central compartido.

### ¿Por qué un agente personalizado no aparece en otro proyecto?

Verifique primero su **scope**. Un agente `Project only` permanece limitado al proyecto actual. Si el entorno expone un agente `All projects`, además debe ser consultado con la **misma cuenta** en un proyecto al que esta cuenta tenga acceso.

### ¿El historial de chat se conserva por proyecto, por agente o solo por navegador?

La continuidad observada es **local al navegador** y vinculada al par **proyecto + agente**. Por lo tanto, no es global a todo el tenant ni se comparte automáticamente entre navegadores.

### ¿Qué navegadores o permisos hay que verificar prioritariamente para la voz?

Comience por el soporte del navegador de `SpeechRecognition` / `webkitSpeechRecognition`, luego controle la autorización de acceso al micrófono. Si el botón permanece no disponible o si el reconocimiento falla, vuelva a la entrada de texto sin bloquear el recorrido del proyecto.

## Preguntas frecuentes — conocimiento y búsqueda

### ¿Por qué un documento es visible en la lista pero aún no se encuentra en la búsqueda?

Porque aún puede estar en estado **Ingesting** o a la espera del final del pipeline de indexación.

### ¿Qué significan `source label` y `source system`?

Son indicadores de procedencia. Ayudan a saber de dónde viene una evidencia sin leer toda la configuración del backend.

### ¿Por qué una importación puede parecer terminada mientras que algunos documentos aún no son encontrables?

Porque la ingestión visible no siempre significa que toda la indexación haya terminado. Controle el estado documental (`Indexed`, `Ingesting`, `Failed`), luego relance la búsqueda cuando el documento esté realmente indexado.

### ¿Por qué un documento está `Indexed` mientras que una evidencia permanece `unavailable` en una salida estructurada?

El documento puede estar bien presente en el **Conocimiento** mientras que la evidencia vinculada a la ejecución no pudo ser confirmada, reabierta o estabilizada en el momento de la generación. Retome la lectura en [Salidas estructuradas, evidencias y actualidad](./sorties-contextuelles-preuves-et-fraicheur.md), luego controle la ejecución en [Informes, registro de IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md) si es necesario.

### ¿Qué significan las insignias de actualidad en la búsqueda y en las evidencias?

Indican el estado de confianza temporal de la fuente: `fresh`, `aging`, `stale`, `conflicting` o `unavailable`. Úselas como una señal de relectura antes de la publicación, no como un detalle cosmético.

### ¿Qué diferencia hay entre `Trace ID`, `Context snapshot ID` y `Structured output ID`?

- **Trace ID**: identificador de seguimiento principal para encontrar una ejecución o un evento;
- **Context snapshot ID**: captura del contexto documental/proyecto utilizado durante la ejecución;
- **Structured output ID**: identificador de la salida estructurada realmente producida.

## Preguntas frecuentes — salidas de IA y Registro de IA

### ¿Qué diferencia hay entre Runs y Activity?

**Runs** muestra las ejecuciones de agente y sus metadatos; **Activity** muestra una línea de tiempo de eventos del proyecto y el payload bruto asociado.

### ¿Cómo saber qué proveedor de IA se utilizó realmente?

Abra el detalle de la ejecución en **Registro de IA** y lea **Effective AI Provider**. Es el valor de referencia para esta ejecución.

### Una ejecución es visible en `Runs`, pero ninguna secuencia clara aparece en `Activity`. ¿Qué hacer?

Este caso suele significar que la ejecución existió, pero que ningún borrador, artefacto, notificación o acción posterior se ha creado aún, o que no está abriendo el proyecto / filtro correcto en **Activity**. Retome la investigación a través de [Informes, registro de IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md) siguiendo el orden **diff / linaje / Runs / Activity**.

## Preguntas frecuentes — informes, artefactos y gobernanza

### ¿Qué diferencia hay entre PM Doc, artefacto y versión de artefacto?

El artefacto es el objeto gobernado, la versión del artefacto es su estado historizado, y el PM Doc es el documento del proyecto revisado, editado o publicado a partir de ese objeto.

### ¿Por qué una acción es visible pero no ejecutable?

Verifique derechos, conector, binding del proyecto, política de gobernanza y aprobación requerida. Ver también [Gobernanza, decisiones y acciones](./gouvernance-decisions-et-actions.md).

### ¿Cuándo hay que **Approve**, **Publish** o **Add to knowledge**?

- **Approve** valida una versión de artefacto aún en `draft`;
- **Publish** desencadena la difusión gobernada hacia un destino o formato objetivo;
- **Add to knowledge** reinyecta un documento revisado en la búsqueda del proyecto.

Estas tres acciones no son intercambiables.

### ¿Cómo arbitrar una evidencia `conflicting` antes de la publicación?

Reabra las fuentes contradictorias, compare el snippet, la fecha, la procedencia y la actualidad, luego documente el arbitraje en el artefacto, la nota de revisión o el flujo de gobernanza. Si es necesario, relacione luego todo con el **Registro de IA**.

### ¿Por qué un borrador de notificación permanece `held` o nunca se envía a un canal externo?

En la interfaz observada, `in_app` es el camino más directo. Los canales externos pueden permanecer en postura **held / draft** mientras no se reúnan la difusión gobernada, la policy, el conector o la aprobación. Retome la cadena en [Gobernanza, decisiones y acciones](./gouvernance-decisions-et-actions.md): señal, digest eventual, borrador, policy, conector, luego aprobación.

### ¿Por qué una acción permanece `pending approval` o `approved` sin ejecución visible?

- `pending approval` significa que el acuerdo aún no se ha dado;
- `approved` significa que el acuerdo existe, pero no necesariamente que la ejecución ya haya tenido lugar.

Confirme luego la etapa posterior en **Acciones y aprobaciones**, luego en **Actividad**. Si es necesario, utilice el método descrito en [Informes, registro de IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md).

### ¿Por qué una integración está disponible en la plataforma pero bloqueada en mi proyecto?

Porque una definición técnica de plataforma no es suficiente. Todavía se necesita un **binding del proyecto** válido, permisos adecuados, una policy compatible, un estado de salud aceptable y, según los casos, el entitlement correspondiente.

## Preguntas frecuentes — portafolio y administración

### ¿Por qué el portafolio no muestra ningún proyecto o ningún outlier?

Verifique los proyectos seleccionados, las señales activas, los pesos, los umbrales y la severidad mínima aplicada a la cohorte.

### ¿Cómo liberar o reasignar un asiento?

Esto se hace desde **Administración de la plataforma** por un perfil autorizado. La retirada libera la capacidad para una reasignación posterior, sujeto a la postura y a la ventana de retirada del plan.

### ¿Qué significa `Validate` exitoso pero `Test` fallido en `AI provider settings`?

La configuración administrativa parece coherente, pero la conectividad real o el acceso remoto aún no funcionan. Verifique endpoint, secret o auth real, accesibilidad del proveedor y restricciones de red, luego retome la secuencia descrita en [Portafolio y administración técnica](./portefeuille-et-administration-technique.md).

### ¿Por qué mi proveedor es visible pero nunca `Operational`?

Un proveedor puede estar configurado o incluso validado sin haber pasado toda la cadena **Configuración → Validación → Test → Activar**. Verifique también el entitlement, los allowed providers y la readiness general antes de considerarlo explotable.

### ¿Qué hacer si ningún deployment Azure OpenAI aparece en `AI provider settings`?

Esto significa generalmente que ningún despliegue es visible en el recurso Azure OpenAI configurado, o que el descubrimiento no puede completarse con los parámetros actuales. Verifique endpoint, auth, versión de API y presencia real de los despliegues en el lado de Azure, luego retome el control detallado en [Portafolio y administración técnica](./portefeuille-et-administration-technique.md).

### ¿Por qué el proveedor de IA es visible pero no modificable o no utilizable?

El proveedor puede ser visible en lectura mientras que su modificación está reservada a un rol de administrador. Su uso también puede estar limitado por el plan, los `allowed providers`, el entitlement o la resolución en runtime del proveedor efectivo.

## Continuar

- [Glosario](./glossaire.md)
- [Primeros pasos](./demarrage.md)
- [Portafolio y administración técnica](./portefeuille-et-administration-technique.md)
