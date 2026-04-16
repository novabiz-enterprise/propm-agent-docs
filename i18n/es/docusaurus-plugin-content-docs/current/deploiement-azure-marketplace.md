---
title: Despliegue en Azure Marketplace
slug: /deploiement-azure-marketplace
description: Lanzar un despliegue de ProPM Agent desde Azure Marketplace, completar los campos actuales del asistente y finalizar Azure OpenAI después de la instalación.
---

[Inicio](./index.md) · [Primeros pasos](./demarrage.md) · [Portafolio y administración técnica](./portefeuille-et-administration-technique.md)

## Objetivo

Esta página documenta el flujo de despliegue observado en el asistente de Azure Portal para la oferta de Marketplace ProPM Agent, a partir de las capturas proporcionadas y los parámetros confirmados en el repositorio.

## Antes de lanzar el despliegue

Prepare al menos:

- la **suscripción de Azure** objetivo;
- la estrategia de **grupo de recursos** y **región de Azure**;
- los **Group Object IDs** de Entra de los administradores de la plataforma;
- los usuarios de bootstrap si los utiliza;
- la elección del **LLM Provider**;
- si elige **Azure OpenAI**, el administrador que finalizará luego el despliegue LLM en **Administración de la plataforma**;
- los orígenes **CORS** adicionales si son necesarios;
- un plan de direccionamiento compatible para el **VNet CIDR**;
- la secuencia post-despliegue para la autenticación Entra y la primera prueba de conexión.

## Paso 1 — Pestaña **Básico**

La primera etapa sirve para definir el ámbito Azure del despliegue.

![Pestaña básico del despliegue Azure Marketplace](/img/deploiement/deploiement-01-onglet-base.png)

### Campos visibles

| Campo | Uso |
| --- | --- |
| Suscripción | Selecciona la suscripción de Azure que alojará el despliegue |
| Grupo de recursos | Define el grupo de recursos principal del despliegue |
| Región | Define la región de despliegue de la aplicación administrada |
| Nombre de la aplicación | Define el nombre de la instancia publicada |
| Grupo de recursos administrado | Define el grupo administrado creado para los recursos internos de la solución |

La captura también muestra el cuadro de diálogo **Crear nuevo** para el grupo de recursos.

## Paso 2 — Pestaña **Configuración de la aplicación**

La versión actual observada de la pestaña **Configuración de la aplicación** ya no presenta el campo **Platform Region**. Esta pantalla agrupa ahora los parámetros de identidad, proveedor de IA, seguridad inicial, supervisión y red.

![Parámetros de aplicación actuales del despliegue](/img/deploiement/fr/deploiement-02-application-settings-actuel.png)

### Campos visibles en la captura

| Campo | Uso observado |
| --- | --- |
| Environment Name | Nombre corto del entorno, por ejemplo `dev`, `test` o `prod` |
| Platform Administration Entra Group Object IDs | Grupo(s) Entra utilizados para la administración de la plataforma |
| Platform Administration Bootstrap Users (optional) | Usuarios de bootstrap opcionales |
| Allow Azure RBAC admin recovery | Activa una recuperación de administrador basada en Azure RBAC |
| LLM Provider | Elige el proveedor de IA utilizado por la plataforma; si se selecciona Azure OpenAI, la selección final del LLM se realiza luego en la administración |
| CORS Allowed Origins | Define los orígenes web adicionales permitidos |
| Enable alerting (Azure Monitor) | Activa la supervisión de alertas de Azure Monitor |
| Enable debug logging | Activa registros de diagnóstico más detallados |
| Contraseña / Confirmar la contraseña | Define la contraseña inicial requerida por el asistente |
| VNet CIDR | Define el rango de red privada de la plataforma |

Puntos de atención: en la versión actual del formulario, la elección de región ya no se realiza en esta pestaña. La región de despliegue sigue definida en la pestaña **Básico**. Los grupos Entra deben prepararse antes del despliegue y el **VNet CIDR** no debe entrar en conflicto con su plan de direccionamiento existente.

El campo **LLM Provider** sigue siendo el punto de elección del proveedor de IA; el caso **Azure OpenAI** añade luego una etapa de administración post-despliegue.

## Paso 3 — Caso **Azure OpenAI** durante el despliegue

La siguiente captura muestra el comportamiento observado cuando **LLM Provider** se establece en **Azure OpenAI (marketplace-managed account)**.

![Selección Azure OpenAI con indicación de configuración posterior en la administración](/img/deploiement/fr/deploiement-03-azure-openai-marketplace-managed.png)

El texto de ayuda visible bajo el campo confirma dos puntos importantes:

- la preparación de la cuenta / endpoint de Azure OpenAI se realiza durante el despliegue;
- la elección final del **LLM / deployment** se completa más tarde en **Platform Administration > AI Provider Settings**.

### Lo que esto implica

| Momento | Decisión tomada |
| --- | --- |
| Despliegue Marketplace | Se selecciona Azure OpenAI como proveedor objetivo y se prepara la integración Azure asociada |
| Administración de la plataforma > AI provider settings | El administrador elige el despliegue Azure OpenAI realmente visible en el recurso Azure OpenAI del cliente |
| Registro de IA | Se verifica luego el proveedor efectivo y la familia de modelo realmente utilizados |

### Lo que el despliegue no termina por sí solo

La elección **Azure OpenAI** en Marketplace no es suficiente para que el proveedor sea directamente utilizable por los usuarios finales. Después de la instalación, aún queda por:

1. abrir **Administración de la plataforma**;
2. completar o confirmar los parámetros del proveedor en **AI provider settings**;
3. elegir el **LLM deployment name** realmente visible en el lado de Azure OpenAI;
4. lanzar **Save → Validate → Test → Activate** antes de considerar el proveedor como operativo;
5. confirmar finalmente el resultado en un run real en **Registro de IA**.

| Caso | Lo que se decide en el despliegue | Lo que se termina luego en la administración |
| --- | --- | --- |
| Azure OpenAI (`marketplace-managed account`) | proveedor objetivo y preparación de la integración Azure | selección del despliegue LLM, validación, prueba y activación |
| Otro proveedor elegido en `LLM Provider` | elección del proveedor objetivo durante la instalación | controles finales, secretos eventuales, validación y activación según el proveedor |

### Flujo recomendado después de la instalación

1. termine el despliegue Marketplace;
2. abra **Administración de la plataforma**;
3. vaya a **AI provider settings**;
4. seleccione el despliegue / LLM de Azure OpenAI a utilizar entre los visibles en el recurso Azure OpenAI del cliente;
5. guarde la configuración;
6. lance un run de prueba y verifique el resultado en **Registro de IA**.

Para la secuencia detallada de validación y explotación de administración, ver también [Portafolio y administración técnica](./portefeuille-et-administration-technique.md).

## Verificación antes de **Revisar + crear**

Antes de validar:

1. controle la suscripción, la región y los grupos de recursos;
2. revise los grupos Entra y los usuarios de bootstrap;
3. confirme el proveedor LLM elegido;
4. si se selecciona **Azure OpenAI**, identifique quién finalizará el despliegue LLM en la administración después de la instalación;
5. controle los valores de red, supervisión y contraseña.

## Después del despliegue

### Verificaciones técnicas mínimas

1. anote la **URL web** realmente publicada;
2. verifique la URL **API** y, si está expuesta, la URL **WebSocket**;
3. verifique la disponibilidad de **`/runtime-config.json`**;
4. valide la coherencia entre la URL publicada y los **redirect URIs** de Entra;
5. si se eligió **Azure OpenAI**, abra **Platform Administration > AI provider settings** y verifique que el despliegue / LLM esperado esté seleccionado.

### Autenticación Entra

Según su modo de despliegue, verifique o finalice el registro de aplicación Entra:

- `clientId`;
- `authority` / tenant;
- `scopes`;
- `redirectUri` y `postLogoutRedirectUri`;
- si es necesario, la API expuesta y sus scopes.

### Primera prueba funcional

Después de la publicación, realice al menos:

- una conexión con una cuenta de usuario estándar;
- una conexión con una cuenta de administración esperada;
- la apertura de **Proyectos**;
- la apertura del **Panel**;
- un control rápido de **Platform Administration > AI provider settings** si se eligió Azure OpenAI;
- un control de **Registro de IA** para confirmar el proveedor efectivo y la familia de modelo utilizados.

## Transición hacia el primer usuario de prueba

Una vez validado el despliegue técnicamente, formalice una breve transición hacia el usuario de aceptación o el primer propietario de proyecto:

1. transmita la **URL publicada** realmente utilizable;
2. confirme el **tenant** esperado y, si es necesario, la regla de invitación de cuentas **guest**;
3. pida al probador que siga la página [Primeros pasos](./demarrage.md) para la primera conexión y la creación o selección del proyecto;
4. si se eligió **Azure OpenAI**, confirme que el LLM se ha precisado en **Administración de la plataforma** antes del primer run;
5. si la primera prueba falla, recupere inmediatamente la hora de la prueba, el síntoma exacto y, cuando exista, el primer **Trace ID** útil para el soporte.

Esta transición reduce los falsos diagnósticos entre un despliegue técnicamente exitoso y un acceso de usuario aún incompleto.

## Incidentes frecuentes después de la instalación

- **`redirect URI mismatch`**: la URL publicada no coincide con los Redirect URIs de Entra;
- **`unauthorized_client`**: client ID en el tenant incorrecto o autoridad incompatible;
- **resource principal not found**: la API o su exposición de scope no está completamente configurada;
- **no hay más asientos disponibles**: la conexión Entra tiene éxito pero el acceso al producto sigue bloqueado;
- **configuración de Azure OpenAI incompleta**: el proveedor se eligió en el despliegue pero aún no se ha confirmado ningún despliegue LLM en **AI provider settings**;
- **provider Azure no registrado para alerting**: algunos recursos de Azure Monitor pueden fallar si el proveedor requerido no está inscrito.

## Calidad de las capturas integradas

Las tres capturas integradas en esta página no muestran **ningún mensaje de error visible** ni banner de fallo.

- la primera captura muestra un cuadro de diálogo de creación de grupo de recursos con un campo aún vacío, sin error mostrado;
- la segunda captura muestra la versión actual de la pestaña **Configuración de la aplicación**, sin campo **Platform Region** visible;
- la tercera captura muestra **Azure OpenAI (marketplace-managed account)** seleccionado, con un texto de ayuda que remite explícitamente a la elección final del LLM en la administración.

## Continuar

- [Primeros pasos](./demarrage.md)
- [Portafolio y administración técnica](./portefeuille-et-administration-technique.md)
- [Mantenimiento, soporte y preguntas frecuentes](./maintenance-support-faq.md)
