---
title: Portafolio y administración técnica
slug: /portefeuille-et-administration-technique
description: Comparar múltiples proyectos, administrar la plataforma, gestionar integraciones, el proveedor de IA, la elección del modelo Azure OpenAI y las licencias.
---

[Inicio](./index.md) · [Informes, registro de IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md) · [Mantenimiento, soporte y preguntas frecuentes](./maintenance-support-faq.md)

![Centro de control del portafolio](/img/screenshots/localized/es/02-portfolio-command-center.png)

## Objetivo

Esta página cubre dos áreas distintas: el **Centro de control del portafolio** para la comparación multi-proyecto y la **Administración de la plataforma** para la configuración técnica a nivel de inquilino.

## Centro de control del portafolio

La página del portafolio permite comparar varios proyectos a partir de señales comunes.

### Capacidades confirmadas

- selección de múltiples proyectos;
- catálogo de señales configurables;
- gestión de **pesos** y **umbrales**;
- filtro de **severidad mínima**;
- cohortes guardadas;
- actualización de la comparación.

### Señales observadas

El catálogo visible incluye, entre otras:

- `activity_change`
- `blocker_density`
- `freshness_issues`
- `contradiction_count`
- `failed_runs`
- `schedule_pressure`
- `cost_pressure`

### Qué guarda una cohorte

Una cohorte guardada memoriza como mínimo:

- los proyectos elegidos;
- las señales activadas;
- los pesos;
- los umbrales;
- la severidad mínima.

![Editor de cohorte del portafolio](/img/screenshots/localized/es/02-portfolio-cohort-editor.png)

### Buen uso del portafolio

Utilice esta página para comparar, priorizar y detectar los proyectos que merecen una investigación más profunda. No reemplaza el trabajo detallado dentro de cada proyecto.

### Cómo leer una cohorte sin outlier aparente

Si una cohorte no muestra **ningún outlier** ni desviación marcada, no concluya inmediatamente que es un error. Verifique primero:

1. los proyectos realmente seleccionados;
2. las señales activadas;
3. los **pesos** y **umbrales** aplicados;
4. la **severidad mínima** establecida.

Una cohorte vacía puede simplemente indicar que sus filtros son demasiado estrictos o que ningún proyecto supera actualmente los umbrales elegidos.

![Administración de la plataforma](/img/screenshots/localized/es/18-platform-administration-overview.png)

## Administración de la plataforma

Las secciones confirmadas son las siguientes:

| Sección | Rol |
| --- | --- |
| Overview | Vista general de las reglas, preparación y puntos de atención |
| Platform integrations | Definiciones técnicas de los conectores y proveedores de ingesta |
| AI provider settings | Elección del proveedor de IA y parámetros asociados |
| Marketplace / subscription | Gestión de la suscripción, entitlements y licencias |
| Audit / activity | Historial de actividad y seguimiento de administración |

## Integraciones de plataforma vs integraciones de proyecto

Una regla importante se desprende del producto:

- el **nivel de plataforma** posee las definiciones técnicas globales;
- el **nivel de proyecto** solo consume bindings aprobados y seguros.

### Dos familias de plataforma

- **conectores de ejecución** para acciones externas;
- **proveedores de ingesta** para alimentar el conocimiento.

### Ejemplos de conectores observados

- Jira, Azure DevOps, GitHub, GitLab, ServiceNow;
- Teams, Slack, Outlook;
- SharePoint publish, Notion, webhook.

### Ejemplos de proveedores de ingesta observados

- SharePoint, OneDrive, Confluence;
- Jira, Azure DevOps;
- Google Drive, Box, Dropbox, Amazon S3;
- Notion;
- carga manual y webhook.

## Readiness y causas de bloqueo

Una integración de proyecto o una opción de importación puede estar bloqueada por:

- entitlement;
- policy;
- permiso;
- health degradada;
- definición de plataforma faltante o desactivada;
- binding del proyecto desactivado o no configurado.

Circuito de remediación recomendado:

1. releer el bloqueo en la página del proyecto;
2. abrir **Administración de la plataforma** para verificar la definición técnica;
3. validar la readiness o la salud del conector/proveedor;
4. volver al proyecto para confirmar el binding y el uso autorizado.

### Caso frecuente — integración definida en plataforma pero no disponible en el proyecto

Este caso no significa necesariamente que la plataforma esté mal configurada. Puede simplemente indicar que:

- la definición técnica existe pero aún no está **bindeada** al proyecto;
- el proyecto no tiene la **policy** o el **rol** correcto;
- el **entitlement** cubre la plataforma pero no el uso realmente esperado;
- la **health** del conector está degradada.

Para este escenario, mantenga el siguiente ir y venir: **Proyectos y espacio de trabajo** para leer el bloqueo visible, luego **Administración de la plataforma** para confirmar la definición global, luego vuelta al proyecto para activar o corregir el binding. Ver también [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md).

## Ajustes del proveedor de IA

Las familias de proveedores visibles según el contexto de configuración incluyen, entre otras:

- **OpenRouter**;
- **OpenAI / Azure OpenAI**;
- **Anthropic**.

### Cómo leer los estados de administración

Las referencias **Configuration**, **Validation**, **Test** y **Operational** no sirven solo para Azure OpenAI. Forman el marco de lectura común de los proveedores expuestos en la UI de administración.

| Estado | Lo que significa | Lo que aún no garantiza |
| --- | --- | --- |
| Configuration | los campos han sido registrados | ni la validez técnica, ni la conectividad real |
| Validation | la configuración ha pasado los controles administrativos esperados | no necesariamente la prueba de conectividad completa |
| Test | se ha lanzado una prueba de conectividad con éxito | aún no la activación para los usuarios finales |
| Operational | el proveedor puede considerarse explotable | no que todos los proyectos lo usen ya efectivamente |

### Árbol de decisión rápido — `Validate`, `Test`, `Operational`

| Síntoma | Verifique primero | Luego |
| --- | --- | --- |
| `Validate` falla | endpoint, modo de auth, secreto eventual, campos obligatorios, nombres de despliegue | corrija la configuración antes de cualquier prueba |
| `Validate` tiene éxito pero `Test` falla | conectividad real, secreto/clave API, accesibilidad del proveedor, recurso remoto | relance la prueba después de la corrección, luego controle la actividad asociada |
| el proveedor sigue visible pero no activable / no `Operational` | validación, prueba, allowed providers, entitlement, readiness general | no cambie a los usuarios antes del paso completo al estado explotable |

### Dos nociones a distinguir

| Noción | Significado |
| --- | --- |
| Proveedor de IA seleccionado en el despliegue | Elección inicial del entorno durante la instalación |
| Proveedor de IA efectivo | Proveedor realmente utilizado para los nuevos runs |

Estos dos valores pueden diferir, especialmente cuando un despliegue Marketplace prepara **Azure OpenAI** y luego el administrador elige el despliegue LLM en **AI provider settings**. Para un run dado, el valor de referencia sigue siendo el detalle visible en **Registro de IA**.

### Marco común para todos los proveedores

Cualquiera que sea el proveedor visible en la interfaz, mantenga el mismo marco de lectura:

1. complete los campos críticos del proveedor;
2. guarde la configuración;
3. lance la validación;
4. lance la prueba de conectividad;
5. active luego solo el proveedor si la plataforma debe realmente cambiar a él;
6. confirme finalmente el proveedor efectivo en **Registro de IA** en un run real.

### OpenRouter

Para **OpenRouter**, supervise sobre todo el endpoint, la clave o el secreto, la familia de modelo elegida y el paso completo por **Configuration → Validation → Test → Operational** antes de la activación.

### OpenAI-compatible / OpenAI

Para los proveedores **OpenAI-compatible**, verifique sobre todo la coherencia entre endpoint, auth, versión o modelo/deployment esperado y prueba de conectividad real. Una configuración guardada no basta para garantizar el uso efectivo por los runs.

### Anthropic

Para **Anthropic**, el reflejo sigue siendo el mismo: configuración guardada, validación, prueba, activación, luego confirmación en **Registro de IA**. Si el proveedor sigue visible pero no operacional, verifique primero auth, entitlement y allowed providers antes de escalar.

### Caso **Azure OpenAI** después de un despliegue Marketplace

Cuando el despliegue Marketplace se lanzó con **Azure OpenAI**, la instalación prepara la integración Azure pero no fija automáticamente el despliegue LLM exacto en el momento del formulario Marketplace.

Después de la instalación, un administrador debe abrir **Administración de la plataforma** > **AI provider settings** para seleccionar el despliegue Azure OpenAI realmente visible en el recurso Azure OpenAI del cliente.

![Ajustes de Azure OpenAI en la administración de la plataforma](/img/screenshots/localized/fr/18-platform-administration-azure-openai-settings.png)

#### Lo que significa la elección del modelo

En esta página, el campo **LLM deployment name** espera el **nombre exacto de un despliegue Azure OpenAI** existente en el recurso del cliente. No es solo un nombre genérico de familia de modelo. En el ejemplo visible, `gpt-4.1-mini` es el despliegue LLM principal y `text-embedding-3-small` el despliegue de embeddings opcional.

Este desacoplamiento es voluntario: permite al cliente cambiar de despliegue o modelo después de la instalación Marketplace, sin redesplegar la aplicación.

#### Campos de Azure OpenAI visibles

| Campo | Rol |
| --- | --- |
| Endpoint | Endpoint Azure OpenAI objetivo, usado para el descubrimiento de despliegues y las pruebas de conectividad |
| API version | Versión de la API Azure OpenAI usada por la administración |
| Authentication mode | Modo de autenticación soportado por la plataforma: `managed_identity` o `api_key` |
| LLM deployment name | Nombre exacto del despliegue LLM usado para los runs generativos |
| Embeddings deployment name (optional) | Nombre exacto del despliegue embeddings, si su configuración usa uno |

#### Estados y orden operativo

La pantalla muestra cuatro referencias de estado:

- **Configuration**: la configuración ha sido guardada o no;
- **Validation**: la verificación administrativa ha sido ejecutada o no;
- **Test**: la prueba de conectividad ha sido ejecutada o no;
- **Operational**: síntesis del estado de explotación de este proveedor.

El recorrido esperado en la interfaz es **Save → Validate → Test → Activate**. Según la interfaz observada, **Validate** y **Test** guardan primero las modificaciones pendientes antes de ejecutar su control.

#### Lo que verifica el backend

Según el código existente, la verificación backend del proveedor **Azure OpenAI** controla como mínimo:

- la presencia del **endpoint** y su formato en **URL absoluta**;
- la presencia de la **API version**;
- la validez del **modo de autenticación** (`managed_identity` o `api_key`);
- la presencia de una **clave API** o una **referencia de secreto** si se elige el modo `api_key`;
- la presencia del **LLM deployment name**;
- la ausencia de espacios en los nombres de despliegue LLM y embeddings.

El backend también intenta descubrir los despliegues visibles llamando al endpoint Azure OpenAI **`/openai/deployments`** con la versión de API configurada. Si el descubrimiento tiene éxito, la validación verifica que el **LLM deployment name** elegido — y, si se completa, el despliegue de embeddings — esté bien visible en el recurso Azure OpenAI configurado.

Consecuencias prácticas:

- si ningún despliegue es aún visible, el administrador debe crear o activar el despliegue en Azure, luego actualizar **Administración de la plataforma**;
- si el nombre ingresado no existe en el recurso objetivo, la validación falla y puede listar los despliegues visibles del lado de Azure;
- si la configuración sigue incompleta, la **prueba de conectividad** no puede completarse;
- la activación del proveedor sigue bloqueada mientras la configuración, la validación y la prueba no sean conformes.

#### Control recomendado

1. abra **Administración de la plataforma**;
2. vaya a **AI provider settings**;
3. complete el **endpoint**, la **API version** y el **modo de autenticación** adaptados a su recurso Azure OpenAI;
4. elija el **LLM deployment name** exacto visible en el recurso Azure OpenAI del cliente;
5. agregue si es necesario el **Embeddings deployment name**;
6. guarde la configuración;
7. lance **Validate** para verificar la configuración y la visibilidad de los despliegues;
8. lance **Test** para confirmar la conectividad;
9. active luego el proveedor si el inquilino debe realmente cambiar a esta configuración;
10. controle finalmente **Registro de IA** en un run real.

Mientras esta etapa no esté finalizada, la elección **Azure OpenAI** en el despliegue describe bien el proveedor objetivo, pero aún no el despliegue LLM exacto usado en explotación.

Ver también [Despliegue en Azure Marketplace](./deploiement-azure-marketplace.md).

## Suscripción, entitlement y licencias

El producto gestiona un modelo de licencia con consumo de licencias según el plan.

### Comportamientos observados

- una licencia puede consumirse durante la conexión;
- el acceso puede bloquearse si no hay más licencias disponibles;
- la interfaz de administración expone el plan, las licencias compradas y los usuarios licenciados;
- un administrador puede retirar un usuario licenciado, luego liberar la capacidad para una reasignación posterior;
- se sigue una ventana de retiro de 24 h para evitar rotaciones abusivas;
- el estado comercial también puede exponer `billing state`, `payment state`, `subscription status` y `entitlement flags`.

### Por qué es importante

Un incidente de acceso no siempre es un problema de autenticación. También puede venir de una falta de licencias o de un entitlement que bloquea una integración premium o un proveedor de IA.

## Referencias técnicas de plataforma

La infraestructura Azure observada se basa en los siguientes componentes:

- Azure Container Apps;
- Storage;
- Azure AI Search;
- Key Vault;
- Log Analytics;
- Application Insights;
- Document Intelligence.

## Para recordar para los públicos técnicos

- el nivel **plataforma** controla lo que existe globalmente;
- el nivel **proyecto** elige lo que realmente se usa localmente;
- las integraciones deben validarse antes de exponerse a los equipos;
- la suscripción y los entitlements influyen en el acceso, los conectores y el proveedor de IA;
- para **Azure OpenAI**, la elección Marketplace debe completarse en **AI provider settings** con el nombre exacto de un despliegue LLM visible en el recurso Azure OpenAI;
- antes de la activación, la secuencia **Save → Validate → Test** debe confirmar la configuración, la visibilidad de los despliegues y la conectividad;
- el **Registro de IA** sigue siendo la referencia para el proveedor realmente usado en un run.

## Continuación

- [Informes, registro de IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md)
- [Mantenimiento, soporte y preguntas frecuentes](./maintenance-support-faq.md)
- [Primeros pasos](./demarrage.md)
- [Glosario](./glossaire.md)
