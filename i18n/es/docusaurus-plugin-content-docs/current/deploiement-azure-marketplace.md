---
title: Despliegue Azure Marketplace
slug: /deploiement-azure-marketplace
description: Desployer ProPM Agent depuis Azure Marketplace, choisir le fournisseur IA pendant l’installation et finaliser la mise en service dans l’administration.
---

[Inicio](./index.md) · [Inicio rápido](./demarrage.md) · [Portafolio y administración técnica](./portefeuille-et-administration-technique.md)

## Objetivo

Esta página explica cómo desplegar **ProPM Agent** desde **Azure Marketplace**, y luego cómo terminar correctamente la puesta en marcha de tu entorno.

El punto esencial a recordar es simple:

- **Azure Marketplace instala la plataforma** ;
- el campo **LLM Provider** permite elegir la **familia de proveedor IA** usada por el entorno ;
- la **puesta en marcha final** del proveedor IA se completa después en **Administration de la plateforme > Paramètres du fournisseur IA**.

En otras palabras, el despliegue no basta, por sí solo, para hacer que el proveedor IA sea inmediatamente explotable por los usuarios finales.

## Lo que un administrador decide durante el despliegue

Durante el asistente Marketplace, el administrador decide principalmente:

- en qué **suscripción Azure** desplegar la solución ;
- en qué **grupo de recursos** y en qué **región** ;
- qué **grupos Entra** administrarán la plataforma ;
- qué **proveedor IA principal** usará el entorno ;
- qué reglas iniciales de **CORS**, de **registro**, de **supervisión** y de **red** aplicar.

## Lo que se termina después del despliegue

Después de la instalación, el administrador de la plataforma debe todavía:

1. abrir **Administration de la plateforme** ;
2. ir a **Paramètres du fournisseur IA** ;
3. completar los campos específicos del proveedor retenido ;
4. guardar la configuración ;
5. lanzar **Validate** ;
6. lanzar **Test** ;
7. lanzar **Activate** ;
8. confirmar luego el proveedor realmente usado en **Journal IA**.

## Antes de lanzar el despliegue

Prepare al menos:

- la **suscripción Azure** objetivo ;
- el **grupo de recursos** principal y la **región** ;
- los **IDs de objeto Entra** de los administradores de la plataforma ;
- los posibles **usuarios de bootstrap** ;
- la elección del **proveedor IA** a usar al inicio ;
- si eliges **Azure OpenAI**, el administrador que finalice luego el **nombre de despliegue LLM** en la administración ;
- las **orígenes CORS** adicionales si la aplicación debe llamarse desde otros dominios ;
- un plan de direccionamiento compatible para el **VNet CIDR** ;
- la preparación del primer test de conexión y los **redirect URIs Entra**.

## Paso 1 — Pestaña **De base**

La primera etapa define el alcance de Azure del despliegue.

![Pestaña de base del despliegue Azure Marketplace](/img/deploiement/deploiement-01-onglet-base.png)

### Campos visibles

| Campo | Para qué sirve |
| --- | --- |
| Suscripción | Selecciona la suscripción Azure que portará la instalación |
| Grupo de recursos | Define el grupo de recursos principal del despliegue |
| Región | Define la región Azure de la instancia Marketplace |
| Nombre de la aplicación | Da el nombre de la instancia ProPM Agent |
| Grupo de recursos gestionado | Define el grupo gestionado que recibirá los recursos internos de la solución |

## Paso 2 — Pestaña **Application Settings**

Esta pantalla agrupa los parámetros de identidad, proveedor IA, seguridad inicial, supervisión y red.

![Parámetros actuales de la aplicación del despliegue](/img/deploiement/fr/deploiement-02-application-settings-actuel.png)

### Campos visibles en la captura

| Campo | Lectura simple |
| --- | --- |
| Environment Name | Nombre corto del entorno, por ejemplo `dev`, `test` o `prod` |
| Platform Administration Entra Group Object IDs | Grupos Entra autorizados a administrar la plataforma |
| Platform Administration Bootstrap Users (optional) | Usuarios de respaldo o de bootstrap si los usas |
| Allow Azure RBAC admin recovery | Autoriza una recuperación de administración basada en Azure RBAC |
| LLM Provider | Elige la familia de proveedor IA usada por el entorno |
| CORS Allowed Origins | Lista los dominios web adicionales autorizados |
| Enable alerting (Azure Monitor) | Activa la supervisión de alertas Azure Monitor |
| Enable debug logging | Activa registros más detallados para una lectura técnica profunda |
| Mot de passe / Confirmer le mot de passe | Define la contraseña inicial solicitada por el asistente |
| VNet CIDR | Define la red privada reservada a la plataforma |

### Punto de atención importante

En la versión actual del formulario, la **región** ya no se elige en esta pestaña. Se mantiene definida en la pestaña **De base**.

## Paso 3 — Elegir el proveedor IA durante el despliegue

El campo **LLM Provider** no sirve solo a Azure OpenAI. Permite elegir uno de los proveedores IA visibles en el producto.

### Los 4 casos a conocer

| Proveedor IA | Cuándo elegirlo | Ventaja principal | Lo que decides durante el despliegue | Lo que terminas después en la administración |
| --- | --- | --- | --- | --- |
| **Azure OpenAI** | si tu entorno ya está centrado en Azure, Entra, red privada y gobernanza Microsoft | integración natural al ecosistema Azure | eliges Azure OpenAI como proveedor objetivo | rellenas el endpoint, la versión API, el modo de autenticación y sobre todo el **LLM deployment name** |
| **OpenAI** | si tu organización quiere usar directamente la plataforma OpenAI | recorrido simple y directo | eliges OpenAI como proveedor objetivo | completas la URL usada, la clave o referencia de secreto, el modelo por defecto, luego validas y activas |
| **OpenRouter** | si tu organización quiere comparar varias familias de modelos vía un punto de entrada único | un solo enlace para varios modelos y escenarios de enrutamiento | eliges OpenRouter como proveedor objetivo | completas la Base URL, la clave y el modelo por defecto, luego validas y activas |
| **OpenAI-compatible** | si tu organización usa una gateway partner, un endpoint de empresa o un runtime compatible | permite conectar una implementación compatible sin cambiar el producto | eliges OpenAI-compatible como proveedor objetivo | completas el endpoint exacto, la autenticación y el modelo o despliegue esperado |

### Regla simple a recordar

El despliegue **designa el proveedor**. La administración **hace que el proveedor sea operativo**.

## Lo que el usuario final percibe realmente

Para el usuario final, el proveedor elegido influye:

- los **modelos** realmente usados ;
- el nivel de **gobernanza técnica** impuesto por la organización ;
- la forma en que el equipo de administración gestiona las **claves**, **secretos** y **despliegues** ;
- a veces la **rapidez de puesta en marcha** o la **flexibilidad de cambio de modelo**.

Sin embargo, el usuario final no debe entender toda la mecánica de instalación. Su necesidad es que el proveedor esté:

- configurado ;
- validado ;
- probado ;
- activado ;
- trazable en **Journal IA**.

## Caso 1 — **Azure OpenAI**

La captura a continuación muestra el comportamiento cuando **LLM Provider** está configurado en **Azure OpenAI**.

![Selección Azure OpenAI con indicación de configuración posterior en la administración](/img/deploiement/fr/deploiement-03-azure-openai-marketplace-managed.png)

### Cuando este elección es pertinente

Elige **Azure OpenAI** cuando tu organización:

- trabaja ya mayormente en Azure ;
- desea un marco fuerte alrededor de **Entra**, la red y la gobernanza Microsoft ;
- quiere seleccionar despliegues precisos en su recurso Azure OpenAI.

### Lo que implica durante el despliegue

Durante Marketplace:

- eliges **Azure OpenAI** como proveedor ;
- la instalación puede preparar la conexión Azure asociada ;
- para la ruta Azure OpenAI gestionada, el despliegue ahora sondea varias regiones Azure OpenAI y selecciona automáticamente la mejor región disponible según la disponibilidad real de modelos ;
- el runtime mantiene aliases estables de despliegue Azure OpenAI llamados `chat` y `embeddings` ;
- la elección exacta del modelo de runtime ya no queda fijada globalmente en el momento del despliegue.

### Lo que todavía hay que hacer después de la instalación

Después del despliegue, abre **Administration de la plateforme > Paramètres du fournisseur IA** y completa o confirma:

- la **región** Azure OpenAI seleccionada por el despliegue ;
- el **catálogo de modelos** descubierto realmente para esa región ;
- el **modelo recomendado** propuesto por la plataforma ;
- el modelo actualmente seleccionado y sincronizado detrás del alias estable `chat` ;
- el estado de conectividad y validación.

### Especificidad importante

Si el despliegue ya instaló un secreto o clave para Azure OpenAI, la interfaz puede indicar que no se necesita una **API key visible al usuario** en este formulario. En ese caso, el administrador se centra principalmente en la selección del modelo, las pruebas de conectividad y la sincronización del despliegue.

Si un administrador selecciona intencionalmente una generación GPT inferior a **GPT-5**, la interfaz debe mostrar una advertencia clara antes de guardar. Guardar un nuevo modelo Azure OpenAI debe sincronizar luego el despliegue Azure OpenAI real detrás del alias `chat`, sin pedir al usuario que renombre manualmente los despliegues.

## Caso 2 — **OpenAI**

### Cuando este elección es pertinente

Elige **OpenAI** cuando tu organización quiere usar directamente las API OpenAI, sin pasar por Azure OpenAI ni por una gateway intermedia.

### Ventajas prácticas

- configuración generalmente más directa ;
- lectura simple para un equipo que ya estandariza sus usos en OpenAI ;
- sin gestión de **nombre de despliegue Azure**.

### Lo que decides durante el despliegue

Durante Marketplace, decides simplemente que el entorno usará **OpenAI** como proveedor principal.

### Lo que todavía hay que hacer después de la instalación

En **Paramètres du fournisseur IA**, completa después:

- la **Base URL** o el endpoint usado por el producto ;
- el **modelo por defecto** ;
- la **clave API** o la **referencia de secreto** ;
- la secuencia **Save → Validate → Test → Activate**.

### Impacto en el entorno de usuario

El usuario final no necesita ver estos ajustes. Lo que importa es que el administrador haya confirmado la conectividad y el modelo realmente usado.

## Caso 3 — **OpenRouter**

### Cuando este elección es pertinente

Elige **OpenRouter** cuando tu organización quiera acceder a varias familias de modelos vía **un punto de entrada único**, por ejemplo para comparar resultados o ajustar el enrutamiento más fácilmente.

### Ventajas prácticas

- un solo enlace a nivel de plataforma ;
- útil para comparar varios modelos ;
- práctico cuando la organización quiere mantener cierta flexibilidad de enrutamiento.

### Lo que decides durante el despliegue

Durante Marketplace, indicas que el entorno usará **OpenRouter** como proveedor principal.

### Lo que todavía hay que hacer después de la instalación

En **Paramètres du fournisseur IA**, completa después:

- la **Base URL** ;
- la **clave API** o referencia de secreto ;
- el **modelo por defecto** ;
- luego lanza **Save → Validate → Test → Activate**.

### Ejemplo simple

Tu organización quiere arrancar rápido, comparar varios modelos y luego estabilizar su elección. **OpenRouter** es entonces un buen candidato para una primera fase de cadrage.

## Caso 4 — **OpenAI-compatible**

### Cuando este elección es pertinente

Elige **OpenAI-compatible** cuando tu organización no use OpenAI directo ni Azure OpenAI, sino un **endpoint compatible**, por ejemplo:

- una gateway de empresa ;
- una solución partner ;
- un runtime compatible auto‑hueco.

### Ventajas prácticas

- permite conectar un proveedor compatible sin modificar ProPM Agent ;
- útil cuando la arquitectura de tu organización exige un punto de entrada IA específico ;
- buen opción para un tenant que quiere mantener una capa de control o enrutamiento interno.

### Lo que decides durante el despliegue

Durante Marketplace, indicas que el entorno usará un proveedor **OpenAI-compatible**.

### Lo que todavía hay que hacer después de la instalación

En **Paramètres du fournisseur IA**, completa después:

- la **Base URL exacta** o el endpoint exacto ;
- el **modo de autenticación** esperado ;
- la **clave** o la **referencia de secreto** ;
- el **modelo** o el **despliegue** esperado ;
- luego lanza **Save → Validate → Test → Activate**.

### Punto de vigilancia

Aquí el tema principal es la **compatibilidad real** del endpoint. Una configuración registrada no basta: el par **Validate + Test** es indispensable.

## Recorrido común después de la instalación para todos los proveedores IA

Cualquiera que sea el proveedor elegido en el despliegue, siempre sigue este recorrido:

1. abre **Administration de la plateforme** ;
2. ve a **Paramètres du fournisseur IA** ;
3. selecciona el proveedor a preparar ;
4. completa los campos solicitados ;
5. haz clic en **Save** para guardar ;
6. haz clic en **Validate** para comprobar la configuración ;
7. haz clic en **Test** para verificar la conectividad real ;
8. haz clic en **Activate** para hacer efectivo este proveedor para los usuarios finales ;
9. abre luego **Journal IA** para confirmar el proveedor realmente usado en una ejecución real.

### Cómo leer los botones de administración

| Botón | Qué significa |
| --- | --- |
| Save | guarda la configuración introducida |
| Validate | verifica que los campos requeridos sean coherentes |
| Test | verifica la conectividad real con el proveedor |
| Activate | hace efectivo el proveedor para los usuarios finales |

## Verificación antes de **Vérifier + crear**

Antes de lanzar la creación:

1. controla la suscripción, la región y los grupos de recursos ;
2. revisa los grupos Entra y los posibles usuarios de bootstrap ;
3. confirma el proveedor IA elegido ;
4. si **Azure OpenAI** está seleccionado, identifica claramente quién finalizará el **LLM deployment name** después de la instalación ;
5. controla los parámetros de red, supervisión y contraseña.

## Después del despliegue

### Verificaciones técnicas mínimas

1. registra la **URL web** realmente publicada ;
2. verifica la URL **API** ;
3. verifica la disponibilidad de **`/runtime-config.json`** ;
4. valida la coherencia entre la URL publicada y los **redirect URIs Entra** ;
5. abre **Administration de la plateforme > Paramètres du fournisseur IA** y confirma que el proveedor elegido esté bien preparado ;
6. verifica que el estado esperado pase por **Configuration**, **Validation**, **Test** y luego **Operational**.

### Autenticación Entra

Según tu modo de despliegue, verifica o finaliza la inscripción de la aplicación Entra:

- `clientId` ;
- `authority` o tenant ;
- `scopes` ;
- `redirectUri` y `postLogoutRedirectUri` ;
- si es necesario, la API expuesta y sus scopes.

### Primer test funcional

Después de la publicación, realiza al menos:

- una conexión con una cuenta de usuario estándar ;
- una conexión con una cuenta de administración esperada ;
- la apertura de **Projets** ;
- la apertura del **Tableau de bord** ;
- la apertura de **Administration de la plateforme > Paramètres du fournisseur IA** ;
- un **Save → Validate → Test → Activate** sobre el proveedor retenido si no se ha hecho ya ;
- un control de **Journal IA** para confirmar el proveedor efectivo y la familia de modelo usados.

### Información para el equipo de administración

Una vez la plataforma validada técnicamente, transmite al menos:

1. la **URL publicada** realmente usable ;
2. el **tenant** esperado y, si es necesario, la regla de invitación de cuentas **guest** ;
3. el primer grupo o cuenta de prueba ;
4. el proveedor IA realmente listo para uso ;
5. la página [Inicio rápido](./demarrage.md) a seguir para la primera conexión.

## Puntos de control útiles después de la instalación

| Punto a verificar | Por qué es importante |
| --- | --- |
| URL publicada y Redirect URIs Entra | evita un primer acceso bloqueado a pesar de un despliegue exitoso |
| Grupos de administración y usuarios bootstrap | garantiza la entrada inicial en la administración |
| Proveedor IA elegido | evita confundir un proveedor solo declarado con uno realmente operativo |
| Validación y Test | confirma que la configuración no solo se guardó, sino que es usable |
| Journal IA | confirma el proveedor realmente usado en una ejecución |
| Supervisión Azure | garantiza que la observabilidad solicitada esté activa |

## Siguiente

- [Inicio rápido](./demarrage.md)
- [Portafolio y administración técnica](./portefeuille-et-administration-technique.md)
- [Mantenimiento, soporte y FAQ](./maintenance-support-faq.md)
