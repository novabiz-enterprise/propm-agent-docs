---
title: Inicio
slug: /demarrage
description: Requisitos previos, acceso, autenticación y primera configuración.
---

[Inicio](./index.md) · [Despliegue Azure Marketplace](./deploiement-azure-marketplace.md) · [Interfaz y navegación](./interface-et-navigation.md)

![Directorio de proyectos](/img/screenshots/localized/es/07-projects-directory.png)

## Objetivo

Esta página explica cómo preparar el acceso a ProPM Agent, lograr la primera conexión, elegir el proyecto correcto y verificar los puntos técnicos indispensables justo después de un despliegue.

## Quién puede usar esta página

- **usuario de negocio** que recibe una URL y debe conectarse sin asistencia pesada;
- **propietario de proyecto** que debe crear o seleccionar el primer contexto de proyecto;
- **administrador técnico** que debe validar la autenticación, el runtime y el acceso inicial.

## Si aún no tienes una URL de aplicación

Si tu instancia aún no está desplegada, comienza por [Despliegue Azure Marketplace](./deploiement-azure-marketplace.md). Este paso permite obtener la URL web, la API y los parámetros de runtime necesarios antes de cualquier conexión de usuario.

## Antes de comenzar

### Requisitos previos del usuario

Para un uso normal, se necesita:

- la **URL de despliegue** de ProPM Agent;
- una cuenta **Microsoft Entra ID** autorizada en el tenant correspondiente;
- acceso a al menos un proyecto, o el derecho de crear uno;
- un navegador moderno que soporte aplicaciones web recientes;
- si usas voz, un navegador compatible con las API de reconocimiento de voz.

### Requisitos previos del administrador técnico

Los siguientes elementos están explícitamente previstos por la configuración observada:

| Elemento | Rol |
| --- | --- |
| `clientId` | Identifica la aplicación Entra utilizada en la web |
| `authority` | Define la autoridad Microsoft Entra de conexión |
| `scopes` | Define los permisos solicitados en el momento de la autenticación |
| `redirectUri` y `postLogoutRedirectUri` | Controlan los retornos después de conexión y desconexión |
| `allowedTenantId` | Restringe, si está configurado, el tenant autorizado |
| `/runtime-config.json` | Sobrescribe dinámicamente las URLs y parámetros de autenticación en tiempo de ejecución |
| URL API | Permite que la interfaz web se conecte a los servicios de la plataforma |
| Suscripción / asientos | Condiciona el acceso en despliegues que imponen una licencia por usuario |

## Trayectoria de primera conexión

1. abre la URL publicada de tu despliegue;
2. deja que la aplicación te redirija a la página de conexión de Microsoft;
3. conéctate con la cuenta autorizada;
4. regresa a la aplicación, generalmente al **Tablero de control**;
5. verifica el idioma de la interfaz, el proyecto actual y los posibles mensajes visibles en la barra superior;
6. abre **Proyectos** para seleccionar o crear tu primer proyecto.

## Estados de acceso a conocer

Dos estados diferentes existen en la interfaz:

- **solo lectura**: puedes consultar una superficie pero no modificar sus ajustes;
- **acceso denegado**: la ruta o la acción no está disponible para tu cuenta.

Esta distinción es importante para las zonas de administración: a veces se puede abrir una página técnica en consulta sin poder guardar cambios.

## Resultado esperado después de la primera conexión

Si todo está correctamente configurado, deberías poder:

- alcanzar el **Tablero de control** en buenas condiciones;
- abrir **Proyectos**;
- seleccionar o crear un proyecto;
- acceder luego a **Espacio de trabajo**, **Conocimiento**, **Agentes**, **Informes & artefactos** y **Registro IA** según tus derechos.

## Crear un primer proyecto

El formulario observado en la aplicación propone los siguientes campos:

- **ID proyecto**;
- **Nombre**;
- **Descripción**;
- **Idioma de datos por defecto**;
- **Idiomas de datos adicionales**.

![Ventana de creación de proyecto](/img/screenshots/localized/es/07-project-create-modal.png)

### Punto importante

El **idioma de datos del proyecto** no es lo mismo que el **idioma de la interfaz**.

El idioma de datos influye especialmente:

- las categorías de documentos propuestas por defecto;
- ciertos ajustes o invitaciones del sistema en los agentes;
- los valores iniciales propios del proyecto.

## Si no aparece ningún proyecto

Varios pantallas muestran un estado vacío explícito cuando no se selecciona ningún proyecto. Es normal.

Para continuar:

1. usa el **selector de proyecto** de la barra superior;
2. abre **Proyectos** para elegir un proyecto accesible;
3. si tienes derecho de creación, crea un proyecto;
4. si la lista sigue vacía, verifica con tu administrador que tu cuenta haya sido añadida al proyecto correcto.

## Lista de verificación post-despliegue para el administrador técnico

Después de un nuevo despliegue, verifica al menos:

1. la **URL web** realmente publicada;
2. la disponibilidad del archivo **`/runtime-config.json`**;
3. la coherencia entre la URL publicada y los **redirect URIs** configurados en Entra;
4. la presencia de un **client ID** válido;
5. el valor correcto de **authority** y, si se usa, de **allowedTenantId**;
6. los **scopes** esperados por el frontend y la API;
7. la URL **API**;
8. el consumo o disponibilidad de los **asientos** si el plan lo impone;
9. una primera prueba de conexión con una cuenta de usuario estándar y una cuenta de administrador.

## Verificaciones frecuentes al iniciar sesión

### La cuenta Microsoft se autentica, pero el acceso aún no ocurre como se espera

Verifica en este orden:

1. el **tenant** usado durante la conexión;
2. que la cuenta esté bien autorizada en ese tenant;
3. la disponibilidad de un **asiento** si el plan aplica una licencia por usuario;
4. la existencia de al menos un proyecto accesible para esa cuenta.

### Caso tenant o cuenta externa / invitado

Si Microsoft indica que tu cuenta no existe en el tenant objetivo, generalmente significa que debe ser invitada como **usuario externo / invitado** en el tenant que aloja la aplicación, y luego autorizada en la aplicación empresarial o a través de un grupo.

### `redirect URI mismatch`

Si la conexión devuelve un error de redirección, compara la URL realmente publicada con los **Redirect URIs** de la inscripción de la aplicación Entra. Cada entorno publicado debe estar listado exactamente, sin errores tipográficos.

### `unauthorized_client` o cliente en el tenant incorrecto

Este síntoma indica generalmente que la inscripción de la aplicación no se encuentra en el tenant correcto, o que el despliegue usa una autoridad incompatible con una aplicación **single-tenant**.

### Acceso exitoso, pero pantalla de administrador en solo lectura

Esto suele significar que la cuenta está autenticada pero no se ha resuelto como administrador de plataforma modificable. Verifica los grupos de administración, el tenant del token y el método de resolución de admin usado por tu entorno.

### Conexión OK, tablero de control cargado, pero una verificación adicional es útil

Este caso indica a menudo que la autenticación tuvo éxito pero que una verificación adicional del runtime o de la conectividad sigue siendo útil. Abre el **indicador de salud**, registra el estado **API**, **auth**, la **latencia** y el **proyecto actual**, luego avanza a [Interfaz y navegación](./interface-et-navigation.md) para leer el panel y a [Mantenimiento, soporte y FAQ](./maintenance-support-faq.md) para los puntos de verificación.

## Referencias rápidas — acceso a confirmar

| Situación inicial | Verifica primero | Luego |
| --- | --- | --- |
| Microsoft devuelve un error antes de volver a la aplicación | `authority`, tenant usado, `clientId`, `redirectUri`, `postLogoutRedirectUri`, `allowedTenantId` | compara la configuración runtime y la inscripción Entra, luego vuelve a probar con la cuenta correcta |
| La conexión Microsoft funciona pero la aplicación se queda bloqueada | disponibilidad de un **asiento**, indicador de salud, URL API | verifica luego el acceso a un proyecto y los derechos reales de la cuenta |
| La conexión funciona, el tablero de control carga, pero se recomienda un control de disponibilidad | estados **auth**, **API**, latencia y proyecto activo | abre [Interfaz y navegación](./interface-et-navigation.md), luego [Mantenimiento, soporte y FAQ](./maintenance-support-faq.md) para distinguir auth, runtime y contexto de proyecto |
| La aplicación se abre pero no aparece ningún proyecto | selector de proyecto, lista **Proyectos**, pertenencia al proyecto, derecho de creación | pide al **Propietario del proyecto** que añada la cuenta al proyecto correcto si es necesario |
| Una página es visible pero no modificable | rol de proyecto o rol de administrador, estado **solo lectura** vs **acceso denegado** | controla luego el grupo de administración o los permisos de proyecto correspondientes |

## Situación, elementos a destacar y página siguiente

| Situación observada | Elementos a destacar | Página siguiente a abrir |
| --- | --- | --- |
| Error de Microsoft antes de volver a la aplicación | mensaje exacto, captura de pantalla, cuenta usada, URL realmente abierta | [Inicio](./demarrage.md), luego [Mantenimiento, soporte y FAQ](./maintenance-support-faq.md) si la duda persiste |
| Tablero de control cargado pero verificación de disponibilidad útil | estados **API**, **realtime**, **auth**, latencia, hora de la prueba, proyecto actual | [Interfaz y navegación](./interface-et-navigation.md), luego [Mantenimiento, soporte y FAQ](./maintenance-support-faq.md) |
| No se ve ningún proyecto | captura del selector de proyecto, correo de la cuenta, proyecto esperado | [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md) |
| Página visible pero controles deshabilitados | nombre de la página, rol esperado, captura de botones desactivados | [Control de acceso y roles de proyecto](./controle-acces-et-roles.md) o [Portafolio y administración técnica](./portefeuille-et-administration-technique.md) según la superficie |
| Conexión OK pero ejecuciones que no arrancan | `Trace ID` si está presente, proyecto activo, indicador de salud, proveedor IA esperado | [Mantenimiento, soporte y FAQ](./maintenance-support-faq.md), luego [Informes, Registro IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md) |

Para una situación que mezcle autenticación, runtime, proyecto, asiento o proveedor IA, usa luego [Mantenimiento, soporte y FAQ](./maintenance-support-faq.md) como página de verificación transversal.

## Buenas prácticas desde el principio

- elige el proyecto correcto **antes** de lanzar agentes;
- define correctamente el idioma de datos del proyecto al crear;
- verifica tu nivel de derecho antes de modificar la gobernanza o la administración técnica;
- si tu despliegue usa un modelo de asientos, controla que tu acceso haya sido asignado correctamente;
- guarda la URL de despliegue y, si es necesario, el **Trace ID** mostrado para el soporte.

## Siguiente

- [Despliegue Azure Marketplace](./deploiement-azure-marketplace.md)
- [Interfaz y navegación](./interface-et-navigation.md)
- [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md)
- [Mantenimiento, soporte y FAQ](./maintenance-support-faq.md)
