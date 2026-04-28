---
title: Mantenimiento, soporte y FAQ
slug: /maintenance-support-faq
description: Puntos de referencia de operación, verificaciones útiles y respuestas a preguntas frecuentes.
---

[Inicio](./index.md) · [Informes, Registro IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md) · [Glosario](./glossaire.md)

## Superficies útiles para la operación

Usa estos puntos de control para orientar rápidamente el diagnóstico:

- **notificaciones** en la barra superior;
- **indicador de salud** en la barra superior;
- **señales** en el espacio de trabajo del proyecto;
- **Registro IA** para las ejecuciones y la actividad;
- **Auditoría / actividad** en la administración de la plataforma.

## Procedimiento de verificación rápida

1. verifique que el **proyecto** correcto esté activo;
2. distinga **estado vacío**, **lectura sola**, **acceso denegado** o **mensaje mostrado**;
3. abra el **Registro IA** si el tema concierne a un agente, un resultado o un artefacto;
4. conserve el **Trace ID** y, si es visible, el `Context snapshot ID` o el `Structured output ID`;
5. verifique derechos, integraciones, entitlements y asientos si el acceso o la ejecución está bloqueado.

## Puntos rápidos por situación

| Situación encontrada | Superficie de primer nivel | Próximo paso |
| --- | --- | --- |
| Conexión o retorno Microsoft anormal | [Inicio](./demarrage.md) | verificar Entra, tenant, `redirectUri` y asientos |
| Ningún proyecto visible después de la conexión | **Proyectos** / selector de proyecto | **Control de acceso** o añadir la cuenta al proyecto |
| Respuesta de agente, artefacto o publicación dudosa | **Registro IA** → `Runs` | **Activity**, luego **Informes y artefactos** |
| Importación o búsqueda incoherente | **Conocimiento** y historial de importación | **Integraciones del proyecto**, luego **Administración de la plataforma** |
| Acción externa visible pero bloqueada | **Acciones y aprobaciones** | **Integraciones del proyecto**, luego **Administración de la plataforma** |

## Tarjetas de verificación rápida

### Acceso a confirmar

Verifique la URL, el tenant, la cuenta invitada si se usa como invitado, la `redirectUri` realmente configurada y la disponibilidad de un asiento si el plan lo consume.

### Página visible pero no modificable

Probablemente esté en modo de solo lectura. Verifique su rol antes de concluir que hay una restricción de permiso.

### Documento visible pero no buscable

Comience por verificar el estado del documento (`Indexed`, `Ingesting`, `Failed`), el historial de importación, la actualización de la página y el `Trace ID` de búsqueda si una llamada falló.

### Importación desde una fuente gris o ausente

Las verificaciones más útiles son: proveedor no validado, enlace de proyecto ausente, entitlement bloqueante, permiso insuficiente o estado de salud a confirmar.

### Acción visible pero no ejecutable

Verifique el conector compatible, el enlace de proyecto, la aprobación requerida, el rol de usuario y la política aplicable.

### Voz no disponible

La voz depende del navegador. Pruebe otro navegador, verifique los permisos de micrófono y use la entrada de texto si el reconocimiento de voz no es compatible.

## Datos a enviar al soporte

| Elemento | Por qué es útil |
| --- | --- |
| URL del despliegue | Identificar el entorno concernido |
| Proyecto concernido | Reproducir el contexto |
| Trace ID | Encontrar con precisión la ejecución o el evento |
| Context snapshot ID / Structured output ID | Acercar una ejecución, una salida y un artefacto |
| Captura de pantalla | Entender el estado visible en el momento del bloqueo |
| Hora aproximada | Cruzar el evento con los registros |

## FAQ — acceso y seguridad

### ¿Por qué puedo ver una página de administración sin poder modificarla?

Porque el producto distingue entre lectura sola y acceso denegado. Una página puede mostrarse para inspección sin permitir la modificación.

### ¿Por qué mi conexión Microsoft funciona pero el acceso aún no se logra como se esperaba?

Verifique el tenant, la autorización de la cuenta, la existencia de un proyecto accesible y la disponibilidad de un asiento si el plan lo requiere.

### ¿Por qué mi conexión funciona pero no aparece ningún proyecto?

Esta situación no indica necesariamente un problema de autenticación. Verifique primero el selector de proyecto, luego la página Proyectos. Si la lista sigue vacía, la cuenta probablemente aún no se ha añadido al proyecto correcto o no tiene derecho de creación.

### ¿Cuándo se debe invitar una cuenta externa como usuario `guest`?

Cuando la cuenta pertenece a otro tenant que el que aloja la aplicación. La cuenta debe entonces ser invitada al tenant objetivo, luego autorizada en la aplicación o mediante el grupo esperado.

### ¿Cómo distinguir rápidamente tenant, `redirect URI`, aplicación Entra o asiento?

Siga este orden:  
1. si Microsoft falla antes de volver a la aplicación, sospeche primero de tenant, clientId o redirect URI;  
2. si la conexión funciona pero la aplicación sigue bloqueada, verifique luego los asientos y el acceso a un proyecto;  
3. si solo una superficie específica permanece bloqueada, el tema suele ser el rol o permiso en lugar de la autenticación.

## FAQ — disponibilidad, runtime y conectividad

### ¿Cómo leer el panel de salud cuando algunas páginas siguen cargando?

Porque la autenticación puede seguir siendo válida mientras un componente API o un proveedor siga solicitando una verificación de disponibilidad. Primero observe el estado mostrado en el indicador de salud, luego continúe a [Interfaz y navegación](./interface-et-navigation.md) para leer el panel y [Portafolio y administración técnica](./portefeuille-et-administration-technique.md) si la duda se refiere al proveedor o la integración administrativa.

### ¿Qué hacer si la conexión funciona, un proyecto es visible, pero los runs no se inician?

Verifique en este orden: proyecto activo, indicador de salud, proveedor IA supuesto operativo, entitlement posible, luego **Registro IA** para ver si al menos se creó un run. Si el proveedor sigue sospechoso, continúe a [Portafolio y administración técnica](./portefeuille-et-administration-technique.md).

## FAQ — proyecto, espacio de trabajo y agentes

### ¿Cuándo se debe usar Espacio de trabajo en lugar de Agentes?

Use Espacio de trabajo para configurar y dirigir el proyecto; use Agentes para conversar con un agente y producir una salida estructurada.

### ¿Dónde se almacena el historial de chat?

El historial visible es local al navegador. No es un archivo central compartido.

### ¿Qué es local al navegador y qué se comparte en la plataforma?

En el estado actual:

- la **continuidad del chat** se guarda localmente, por pareja **proyecto + agente**, en el navegador actual;
- el **proyecto activo recordado** también depende del navegador y a veces de la sesión local;
- **documentos**, **importaciones**, **artefactos**, **aprobaciones**, **informes publicados** y otros objetos del proyecto pertenecen a la **plataforma compartida**.

Por lo tanto, es normal que el historial del chat desaparezca al cambiar de navegador o de equipo mientras los objetos gobernados del proyecto sigan visibles para otros usuarios autorizados.

### ¿Qué significa exactamente `All projects`?

`All projects` es un alcance de agente personalizado, no un proyecto único ni una vista de portafolio. Significa que un agente personalizado puede seguir visible en todos los proyectos a los que tenga acceso la misma cuenta. Cada run se sigue ejecutando en el proyecto activo en el momento del chat.

### ¿Por qué un agente personalizado no aparece en otro proyecto?

Verifique primero su alcance. Un agente `Project only` permanece limitado al proyecto actual. Si el entorno expone un agente `All projects`, también debe consultarse con la misma cuenta en un proyecto al que esa cuenta tenga acceso.

### ¿El historial de chat se conserva por proyecto, por agente o solo por navegador?

La continuidad es local al navegador y vinculada al par proyecto + agente. Por lo tanto, no es global a todo el tenant ni compartida automáticamente entre navegadores.

### ¿Qué navegadores o permisos se deben verificar primero para la voz?

Comience por la compatibilidad del navegador con `SpeechRecognition` / `webkitSpeechRecognition`, luego controle la autorización de acceso al micrófono. Si el botón sigue indisponible o el reconocimiento falla, vuelva a la entrada de texto sin bloquear el flujo del proyecto.

### ¿Por qué la voz no aparece en todos los entornos?

Porque esta capacidad depende del navegador y de su compatibilidad con el reconocimiento de voz. La voz es opcional: su ausencia no bloquea el flujo nominal, que sigue siendo la entrada de texto en **Agentes**.

## FAQ — conocimiento y búsqueda

### ¿Por qué **Espacio de trabajo**, **Conocimiento** o **Registro IA** parecen vacíos?

Comience verificando si existe un **proyecto activo**. En el estado actual de la aplicación, estas superficies pueden mostrar un **estado vacío normal** mientras no se seleccione ningún proyecto.

Si ya hay un proyecto activo, distinga luego entre un vacío normal y una ausencia real de datos: proyecto nuevo, ningún run, ningún documento, ningún artefacto o un filtro activo.

### ¿Por qué **Informes y artefactos** está vacío?

Las causas más frecuentes son:

- todavía no se ha creado ningún **artefacto** o **Documento PM**;
- el run se quedó en la etapa de **salida estructurada**;
- el proyecto incorrecto o un filtro oculta las filas;
- el entorno no contiene los mismos ejemplos precargados que las capturas de referencia.


### ¿Por qué un documento es visible en la lista pero aún no se encuentra en la búsqueda?

Porque puede estar todavía en estado Ingesting o esperando la finalización del pipeline de indexación.

### ¿Qué significan `source label` y `source system`?

Son indicadores de procedencia. Ayudan a saber de dónde proviene una prueba sin volver a leer toda la configuración detallada.

### ¿Por qué una importación puede parecer terminada aunque algunos documentos aún no se encuentran?

Porque la ingestión visible no siempre significa que toda la indexación esté terminada. Controle el estado documental (`Indexed`, `Ingesting`, `Failed`), luego reinicie la búsqueda cuando el documento esté realmente indexado.

### ¿Por qué un documento está `Indexed` pero una prueba sigue `unavailable` en una salida estructurada?

El documento puede estar presente en **Conocimiento**, pero la evidencia vinculada al run no pudo confirmarse, reabrirse o estabilizarse en el momento de la generación. Revise la lectura en [Salidas estructuradas, evidencias y actualidad](./sorties-contextuelles-preuves-et-fraicheur.md), luego controle el run en [Informes, Registro IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md) si es necesario.

### ¿Qué significan las insignias de frescura en la búsqueda y en las pruebas?

Indican el estado de confianza temporal de la fuente: fresh, aging, stale, conflicting o unavailable. Úselos como señal de revisión antes de publicar, no como detalle cosmético.

### ¿Cuál es la diferencia entre `Trace ID`, `Context snapshot ID` y `Structured output ID`?

- **Trace ID**: identificador de seguimiento principal para encontrar una ejecución o un evento.  
- **Context snapshot ID**: captura del contexto documental/proyecto utilizado durante la ejecución.  
- **Structured output ID**: identificador de la salida estructurada realmente producida.

## FAQ — salidas IA y Registro IA

### ¿Cuál es la diferencia entre Runs y Activity?

**Runs** muestra las ejecuciones de agente y sus metadatos; **Activity** muestra una línea de tiempo de eventos del proyecto y el payload bruto asociado.

### ¿Cómo saber qué proveedor IA se utilizó realmente?

Abra el detalle del run en **Registro IA** y lea **Effective AI Provider**. Es el valor de referencia para ese run.

### ¿Por qué `Validate` y `Test` no garantizan siempre que ese proveedor sea el que realmente se use?

Porque `Validate` y `Test` comprueban sobre todo la coherencia administrativa y la conectividad de la configuración. El proveedor realmente utilizado en un run concreto sigue siendo el que se resuelve en tiempo de ejecución y aparece en el **Registro IA**.

### Un run es visible en `Runs`, pero no aparece una secuencia clara en `Activity`. ¿Qué hacer?

Este caso suele significar que el run existió, pero no se creó un borrador, artefacto, notificación o acción posterior, o que no está abriendo el proyecto o el filtro correctos en **Activity**. Continúe la investigación a través de [Informes, Registro IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md) siguiendo el orden **diff / linaje / Runs / Activity**.

### ¿Cómo se debe leer el campo `Cost`?

Trate `Cost` como un indicador de transparencia del tiempo de ejecución: `tokens` y `calls` sirven sobre todo para la investigación, el soporte y la comprensión del uso, no como una señal de aprobación de negocio por sí sola. Si necesita una señal transversal de presión presupuestaria o de consumo, abra `cost_pressure` en **Portafolio**.

### ¿Qué conviene hacer con `Confidence` y `Source freshness`?

- **Confidence** = una señal de revisión, no una prueba por sí sola;
- **Source freshness** = el grado de actualidad de las evidencias citadas;
- si cualquiera de los dos parece débil, antiguo, `conflicting` o `unavailable`, vuelva a las evidencias, al run y al linaje antes de compartir el resultado fuera de la aplicación.

## FAQ — reportes, artefactos y gobernanza

### ¿Cuál es la diferencia entre PM Doc, artefacto y versión de artefacto?

El artefacto es el objeto gobernado, la versión de artefacto es su estado histórico, y el PM Doc es el documento del proyecto revisado, editado o publicado a partir de ese objeto.

### ¿Por qué una acción es visible pero no ejecutable?

Verifique derechos, conector, enlace de proyecto, política de gobernanza y aprobación requerida. Vea también [Gobernanza, decisiones y acciones](./gouvernance-decisions-et-actions.md).

### ¿Cuándo se debe Approve, Publish o Add to knowledge?

- **Approve** valida una versión de artefacto aún en `draft`;  
- **Publish** desencadena la difusión gobernada hacia un destino o formato objetivo;  
- **Add to knowledge** reinyecta un documento revisado en la búsqueda del proyecto.

Estas tres acciones no son intercambiables.

### ¿Cómo arbitrar una prueba `conflicting` antes de publicar?

Reabra las fuentes contradictorias, compare el fragmento, la fecha, la procedencia y la frescura, luego documente el arbitraje en el artefacto, la nota de revisión o el flujo de gobernanza. Si es necesario, relacione todo con el **Registro IA**.

### ¿Por qué un borrador de notificación permanece `held` o nunca se envía a un canal externo?

En la interfaz, `in_app` es la ruta más directa. Los canales externos pueden permanecer en postura **held / draft** mientras la difusión gobernada, la política, el conector o la aprobación no estén reunidos. Revise la cadena en Gobernanza, decisiones y acciones: señal, digest eventual, borrador, política, conector, luego aprobación.

### ¿Por qué una acción permanece `pending approval` o `approved` sin ejecución visible?

`pending approval` significa que la aprobación aún no se ha dado; `approved` significa que la aprobación existe, pero no necesariamente que la ejecución haya ocurrido. Confirme luego la etapa posterior en **Acciones y aprobaciones**, luego en **Activity**. Si es necesario, use el método descrito en [Informes, Registro IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md).

### ¿Por qué una integración está disponible en la plataforma pero bloqueada en mi proyecto?

Porque una definición técnica de la plataforma no basta. También se necesita un enlace de proyecto válido, permisos adecuados, una política compatible, un estado de salud aceptable y, según el caso, el entitlement correspondiente.

## FAQ — portafolio y administración

### ¿Por qué los ejemplos precargados no siempre coinciden exactamente con la documentación?

Los entornos reales pueden variar. Algunos proyectos no muestran siempre los mismos documentos precargados, informes precargados o ejemplos de búsqueda que aparecen en las capturas de referencia.

### ¿Por qué el portafolio no muestra ningún proyecto o outlier?

Verifique los proyectos seleccionados, las señales activas, los pesos, los umbrales y la severidad mínima aplicada a la cohorte.

### ¿Existen valores predeterminados implícitos en Portafolio?

No. La interfaz ofrece principalmente valores predeterminados, una acción para restablecerlos y cohortes guardadas. Los valores predeterminados son un punto de partida seguro, no un modelo obligatorio. Algunos entornos también pueden mostrar una cohorte precargada, pero ese contenido varía según el entorno.

### ¿Cómo liberar o reasignar un asiento?

Se hace desde Administración de la plataforma por un perfil autorizado. La retirada libera la capacidad para una reasignación posterior, sujeto a la postura y la ventana de retirada del plan.

### ¿Qué significa que `Validate` haya tenido éxito, pero `Test` no, en **Parámetros del proveedor IA**?

La configuración administrativa parece coherente, pero la conectividad real o el acceso remoto aún no pasan. Verifique el endpoint, el secreto o la autenticación real, la accesibilidad del proveedor y las restricciones de red, luego continúe con la secuencia descrita en [Portafolio y administración técnica](./portefeuille-et-administration-technique.md).

### ¿Por qué mi proveedor es visible pero nunca `Operational`?

Un proveedor puede estar configurado o incluso validado sin haber pasado toda la cadena Configuración → Validación → Prueba → Activación. Verifique también el entitlement, los `allowed providers` y la readiness general antes de considerarlo explotable.

### ¿Qué hacer si no aparece ningún despliegue de Azure OpenAI en **Parámetros del proveedor IA**?

Esto generalmente significa que no hay ningún despliegue visible en el recurso Azure OpenAI configurado, o que el descubrimiento no puede completarse con los parámetros actuales. Verifique el endpoint, la autenticación, la versión de API y la presencia real de despliegues en Azure, luego continúe con el control detallado en [Portafolio y administración técnica](./portefeuille-et-administration-technique.md).

### ¿Por qué el proveedor IA es visible pero no modificable o no utilizable?

El proveedor puede ser visible en lectura mientras su modificación esté reservada a un rol admin. Su uso también puede estar limitado por el plan, los `allowed providers`, el entitlement o la resolución en tiempo de ejecución del proveedor efectivo.

## Siguiente

- [Glosario](./glossaire.md)
- [Inicio](./index.md)
- [Portafolio y administración técnica](./portefeuille-et-administration-technique.md)
