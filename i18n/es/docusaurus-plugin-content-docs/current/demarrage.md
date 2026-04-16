---
title: Primeros pasos
slug: /demarrage
description: Requisitos previos, acceso, autenticación y configuración inicial.
---

[Inicio](./index.md) · [Despliegue en Azure Marketplace](./deploiement-azure-marketplace.md) · [Interfaz y navegación](./interface-et-navigation.md)

![Directorio de proyectos](/img/screenshots/localized/es/07-projects-directory.png)

## Objetivo

Esta página explica cómo preparar el acceso a ProPM Agent, realizar con éxito el primer inicio de sesión, elegir el proyecto correcto y verificar los puntos técnicos indispensables justo después de un despliegue.

## Quién puede usar esta página

- **usuario de negocio** que recibe una URL y debe conectarse sin asistencia pesada;
- **propietario del proyecto** que debe crear o seleccionar el primer contexto de proyecto;
- **administrador técnico** que debe validar la autenticación, el runtime y el acceso inicial.

## Si aún no tiene una URL de la aplicación

Si su instancia aún no está desplegada, comience por [Despliegue en Azure Marketplace](./deploiement-azure-marketplace.md). Esta etapa permite obtener la URL web, la API y los parámetros de runtime necesarios antes de cualquier conexión de usuario.

## Antes de comenzar

### Requisitos previos del lado del usuario

Para un uso normal, es necesario disponer de:

- la **URL del despliegue** de ProPM Agent;
- una cuenta **Microsoft Entra ID** autorizada en el tenant correspondiente;
- acceso a al menos un proyecto, o el derecho de crear uno;
- un navegador moderno que admita aplicaciones web recientes;
- si utiliza la voz, un navegador compatible con las API de reconocimiento de voz.

### Requisitos previos del lado del administrador técnico

Los siguientes elementos están explícitamente previstos por la configuración observada:

| Elemento | Rol |
| --- | --- |
| `clientId` | Identifica la aplicación Entra utilizada en el lado web |
| `authority` | Define la autoridad de inicio de sesión de Microsoft Entra |
| `scopes` | Define los permisos solicitados en el momento de la autenticación |
| `redirectUri` y `postLogoutRedirectUri` | Controlan los retornos después del inicio de sesión y cierre de sesión |
| `allowedTenantId` | Restringe, si está configurado, el tenant autorizado |
| `/runtime-config.json` | Sobrecarga dinámica de las URLs y parámetros de autenticación en runtime |
| URL API y URL WebSocket | Permiten al frontend conectarse a los servicios backend y en tiempo real |
| Suscripción / asientos | Condiciona el acceso en los despliegues que imponen una licencia por usuario |

## Recorrido del primer inicio de sesión

1. abra la URL publicada de su despliegue;
2. deje que la aplicación lo redirija a la página de inicio de sesión de Microsoft;
3. inicie sesión con la cuenta autorizada;
4. regrese a la aplicación, generalmente al **Panel**;
5. verifique el idioma de la interfaz, el proyecto actual y cualquier mensaje visible en la barra superior;
6. abra **Proyectos** para seleccionar o crear su primer proyecto.

## Estados de acceso a conocer

Existen dos estados diferentes en la interfaz:

- **solo lectura**: puede consultar una superficie pero no modificar sus ajustes;
- **acceso denegado**: la ruta o la acción no está disponible para su cuenta.

Esta distinción es importante para las zonas de administración: a veces se puede abrir una página técnica en consulta sin poder guardar cambios.

## Resultado esperado después del primer inicio de sesión

Si todo está configurado correctamente, debe poder:

- alcanzar el **Panel** sin error bloqueante;
- abrir **Proyectos**;
- seleccionar o crear un proyecto;
- acceder luego a **Espacio de trabajo**, **Conocimiento**, **Agentes**, **Informes y artefactos** y **Registro de IA** según sus derechos.

## Crear un primer proyecto

El formulario observado en la aplicación propone los siguientes campos:

- **ID del proyecto**;
- **Nombre**;
- **Descripción**;
- **Idioma de datos por defecto**;
- **Idiomas de datos adicionales**.

![Ventana de creación de proyecto](/img/screenshots/localized/es/07-project-create-modal.png)

### Punto importante

El **idioma de datos del proyecto** no es lo mismo que el **idioma de la interfaz**.

El idioma de datos influye especialmente en:

- las categorías de documentos propuestas por defecto;
- algunos ajustes o prompts del sistema del lado de los agentes;
- los valores iniciales propios del proyecto.

## Si no aparece ningún proyecto

Varias pantallas muestran un estado vacío explícito cuando no se ha seleccionado ningún proyecto. Es normal.

Para continuar:

1. utilice el **selector de proyecto** de la barra superior;
2. abra **Proyectos** para elegir un proyecto accesible;
3. si tiene el derecho de creación, cree un proyecto;
4. si la lista permanece vacía, verifique con su administrador que su cuenta ha sido agregada al proyecto correcto.

## Lista de verificación post-despliegue para el administrador técnico

Después de un nuevo despliegue, verifique al menos:

1. la **URL web** realmente publicada;
2. la disponibilidad del archivo **`/runtime-config.json`**;
3. la coherencia entre la URL publicada y los **redirect URIs** configurados en Entra;
4. la presencia de un **client ID** válido;
5. el valor correcto de **authority** y, si se usa, de **allowedTenantId**;
6. los **scopes** esperados por el frontend y la API;
7. la URL **API** y, si está expuesta, la URL **WebSocket**;
8. el consumo o disponibilidad de los **asientos** si el plan lo impone;
9. una primera prueba de conexión con una cuenta de usuario estándar y una cuenta de administrador.

## Incidentes frecuentes del primer inicio de sesión

### La cuenta de Microsoft se autentica, pero la aplicación permanece bloqueada

Verifique en este orden:

1. el **tenant** utilizado durante el inicio de sesión;
2. que la cuenta esté bien autorizada en este tenant;
3. la disponibilidad de un **asiento** si el plan aplica una licencia por usuario;
4. la existencia de al menos un proyecto accesible para esta cuenta.

### Error de tenant o cuenta externa / invitada

Si Microsoft indica que su cuenta no existe en el tenant objetivo, generalmente significa que debe ser invitado como **usuario externo / invitado** en el tenant que aloja la aplicación, luego autorizado en la aplicación empresarial o a través de un grupo.

### `redirect URI mismatch`

Si el inicio de sesión devuelve un error de redirección, compare la URL realmente publicada con los **Redirect URIs** del registro de aplicación Entra. Cada entorno publicado debe estar listado exactamente, sin error tipográfico.

### `unauthorized_client` o cliente en el tenant incorrecto

Este síntoma generalmente indica que el registro de aplicación no se encuentra en el tenant correcto, o que el despliegue utiliza una autoridad incompatible con una aplicación **single-tenant**.

### Acceso exitoso, pero pantalla de administración en solo lectura

Esto a menudo significa que la cuenta está autenticada pero no ha sido resuelta como administrador de plataforma modificable. Verifique los grupos de administración, el tenant del token y el método de resolución de administrador utilizado por su entorno.

### Inicio de sesión OK, panel cargado, pero panel de salud degradado

Este caso a menudo indica que la autenticación tuvo éxito pero que el runtime, el tiempo real o la conectividad permanecen parcialmente degradados. Abra el **indicador de salud**, consulte el estado **API**, **realtime / WebSocket**, **auth**, la **latencia** y el **proyecto actual**, luego continúe hacia [Interfaz y navegación](./interface-et-navigation.md) para leer el panel y hacia [Mantenimiento, soporte y preguntas frecuentes](./maintenance-support-faq.md) para el circuito de remediación.

## Árbol de decisión rápida — acceso bloqueado

| Síntoma inicial | Verifique primero | Luego |
| --- | --- | --- |
| Microsoft devuelve un error antes del retorno a la aplicación | `authority`, tenant utilizado, `clientId`, `redirectUri`, `postLogoutRedirectUri`, `allowedTenantId` | compare la configuración de runtime y el registro Entra, luego realice una prueba con la cuenta correcta |
| El inicio de sesión de Microsoft tiene éxito pero la aplicación permanece bloqueada | disponibilidad de un **asiento**, indicador de salud, URLs API / WebSocket | verifique luego el acceso a un proyecto y los derechos reales de la cuenta |
| El inicio de sesión tiene éxito, el panel se carga, pero el panel de salud está degradado | estados **auth**, **API**, **realtime / WebSocket**, latencia y proyecto activo | abra [Interfaz y navegación](./interface-et-navigation.md), luego [Mantenimiento, soporte y preguntas frecuentes](./maintenance-support-faq.md) para distinguir auth, runtime y contexto de proyecto |
| La aplicación se abre pero no aparece ningún proyecto | selector de proyecto, lista **Proyectos**, pertenencia al proyecto, derecho de creación | solicite al **Propietario del Proyecto** que agregue la cuenta al proyecto correcto si es necesario |
| Una página es visible pero no modificable | rol del proyecto o rol de administrador, estado **solo lectura** vs **acceso denegado** | controle luego el grupo de administración o los permisos del proyecto concernidos |

## Síntoma, evidencia a recopilar y página siguiente

| Síntoma | Evidencia a recopilar | Página siguiente a abrir |
| --- | --- | --- |
| Error de Microsoft antes del retorno a la aplicación | mensaje exacto, captura de pantalla, cuenta utilizada, URL realmente abierta | [Primeros pasos](./demarrage.md), luego [Mantenimiento, soporte y preguntas frecuentes](./maintenance-support-faq.md) si la duda persiste |
| Panel cargado pero salud degradada | estados **API**, **realtime**, **auth**, latencia, hora de la prueba, proyecto actual | [Interfaz y navegación](./interface-et-navigation.md), luego [Mantenimiento, soporte y preguntas frecuentes](./maintenance-support-faq.md) |
| Ningún proyecto visible | captura del selector de proyecto, correo electrónico de la cuenta, proyecto esperado | [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md) |
| Página visible pero controles atenuados | nombre de la página, rol esperado, captura de los botones deshabilitados | [Control de acceso y roles del proyecto](./controle-acces-et-roles.md) o [Portafolio y administración técnica](./portefeuille-et-administration-technique.md) según la superficie |
| Inicio de sesión OK pero runs que no inician | `Trace ID` si está presente, proyecto activo, indicador de salud, proveedor de IA esperado | [Mantenimiento, soporte y preguntas frecuentes](./maintenance-support-faq.md), luego [Informes, registro de IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md) |

Para un incidente que mezcla autenticación, runtime, proyecto, asiento o proveedor de IA, utilice luego [Mantenimiento, soporte y preguntas frecuentes](./maintenance-support-faq.md) como página de diagnóstico transversal.

## Buenas prácticas desde el principio

- elija el proyecto correcto **antes** de lanzar agentes;
- defina correctamente el idioma de datos del proyecto al crearlo;
- verifique su nivel de derecho antes de modificar la gobernanza o la administración técnica;
- si su despliegue utiliza un modelo de asientos, controle que su acceso haya sido asignado correctamente;
- guarde la URL del despliegue y, si es necesario, el **trace ID** del error para el soporte.

## Continuar

- [Despliegue en Azure Marketplace](./deploiement-azure-marketplace.md)
- [Interfaz y navegación](./interface-et-navigation.md)
- [Proyectos y espacio de trabajo](./projets-et-espace-de-travail.md)
- [Mantenimiento, soporte y preguntas frecuentes](./maintenance-support-faq.md)
