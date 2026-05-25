---
title: Despliegue Azure Marketplace
slug: /deploiement-azure-marketplace
description: Desplegar ProPM Agent desde Azure Marketplace, completar los campos del formulario ProPM-50 y finalizar la administración después de la instalación.
---

[Inicio](./index.md) · Despliegue Azure Marketplace

## Objetivo

Esta página detalla el despliegue de **ProPM Agent** desde **Azure Marketplace**. Explica las dos pantallas principales del formulario Azure, el propósito de cada campo visible y las comprobaciones antes de seleccionar **Review + create**.

Las capturas siguientes muestran el formulario **Create ProPM-50**. El nombre mostrado puede cambiar según el plan Marketplace seleccionado, por ejemplo ProPM-50, ProPM-100 u otro plan disponible.

## Para quién

| Perfil | Uso de esta página |
| --- | --- |
| Administrador Azure | Crear la Managed Application desde Azure Marketplace |
| Administrador del tenant | Preparar grupos Entra y primer acceso administrador |
| Administrador de plataforma | Entender qué ajustes deben completarse después de la instalación |
| Soporte | Verificar el flujo sin pedir secretos ni variables internas |
| Usuario de negocio | No, usar [Primeros pasos](./demarrage.md) |

## Antes de empezar

Prepare esta información antes de abrir el formulario Marketplace.

| Información | Por qué es necesaria |
| --- | --- |
| Suscripción Azure objetivo | Soporta la transacción Marketplace y los recursos desplegados |
| Grupo de recursos objetivo | Organiza el objeto Managed Application del lado cliente |
| Región Azure objetivo | Define la ubicación principal del despliegue |
| Nombre de aplicación | Identifica la instancia ProPM Agent en Azure |
| Managed Resource Group | Recibe los recursos internos gestionados por la aplicación |
| Entra Group Object IDs | Otorgan acceso a la administración de plataforma |
| Usuarios bootstrap opcionales | Ayudan con el primer acceso o recuperación controlada |
| Proveedor IA inicial | Indica la familia IA que debe prepararse para esta instancia |
| Orígenes CORS opcionales | Permiten dominios web adicionales si es necesario |
| Plan VNet CIDR | Evita conflictos con la red de la organización |
| Contraseña inicial | Debe generarse y almacenarse como secreto |

Nunca copie una contraseña, secreto, clave API, token o valor confidencial en la documentación ni en una solicitud de soporte no segura.

## Flujo de despliegue

1. Abra la oferta ProPM Agent en Azure Marketplace.
2. Seleccione el plan Marketplace requerido.
3. Complete la pestaña **Basics**.
4. Seleccione **Next**.
5. Complete la pestaña **Application Settings**.
6. Seleccione **Review + create**.
7. Corrija los errores de validación si aparecen.
8. Inicie la creación.
9. Espere a que termine el aprovisionamiento Azure.
10. Abra la URL publicada y complete la administración en ProPM Agent.

## Pantalla 1 - Basics

La pestaña **Basics** define el alcance Azure del despliegue: suscripción, grupo de recursos, región y nombres Azure de la Managed Application.

![Pestaña Basics del despliegue ProPM-50 Azure Marketplace](/img/deploiement/propm-50-basics.png)

### Campos de Basics

| Campo | Obligatorio | Qué introducir | Impacto y recomendaciones |
| --- | --- | --- | --- |
| **Subscription** | Sí | La suscripción Azure que recibirá la aplicación gestionada y la facturación Marketplace. | Use una suscripción donde tenga permisos para desplegar una Managed Application y crear o seleccionar grupos de recursos. Verifique también las reglas internas de costes y gobernanza. |
| **Resource group** | Sí | El grupo de recursos del lado cliente que contiene el objeto Managed Application. | Seleccione un grupo existente o use **Create new**. Este no es el grupo de recursos gestionado interno que contiene los recursos técnicos de ProPM Agent. |
| **Create new** | No | Acción Azure para crear un nuevo grupo de recursos si no existe uno adecuado. | Use un nombre claro relacionado con el entorno y la región. Evite nombres temporales para instancias de producción. |
| **Region** | Sí | La región Azure principal del despliegue. | Elija una región aprobada por la organización, cercana a los usuarios y compatible con residencia de datos. Manténgala coherente con red y recursos IA previstos. |
| **Application Name** | Sí | El nombre visible de la instancia Managed Application ProPM Agent. | Use un nombre estable y legible, por ejemplo `propm-prod-eus`. Ayuda a reconocer la instancia en Azure. No incluya secretos ni datos sensibles de cliente. |
| **Managed Resource Group** | Sí | El grupo de recursos gestionado que recibe los recursos internos desplegados por la aplicación. | Azure suele proponer un nombre generado. Manténgalo único y reconocible. Este grupo lo gestiona la aplicación; el acceso directo puede estar limitado por el modelo Managed Application. |
| **Previous** | No | Vuelve al paso anterior del formulario. | Este botón no inicia ningún despliegue. |
| **Next** | No | Avanza a la pestaña siguiente cuando los campos requeridos están suficientemente completos. | Úselo para continuar a **Application Settings**. Si Azure bloquea el avance, revise los campos obligatorios marcados con `*`. |
| **Review + create** | No | Ejecuta la validación final Azure antes de la creación. | Úselo solo después de completar los ajustes de aplicación. Azure mostrará errores o advertencias que deben corregirse antes de la creación real. |

## Pantalla 2 - Application Settings

La pestaña **Application Settings** configura el entorno ProPM Agent: identidad de administración, modo de instalación, proveedor IA inicial, CORS, supervisión, logs, contraseña inicial y red.

![Pestaña Application Settings del despliegue ProPM-50 Azure Marketplace](/img/deploiement/propm-50-application-settings.png)

### Campos de Application Settings

| Campo | Obligatorio | Qué introducir | Impacto y recomendaciones |
| --- | --- | --- | --- |
| **Environment Name** | Sí | Un nombre corto del entorno, por ejemplo `dev`, `test`, `uat` o `prod`. | Ayuda a identificar el entorno en recursos, configuración e intercambios de soporte. Use un valor corto, estable, no secreto y coherente con su convención interna. |
| **Installation mode** | Según el escenario | El modo de instalación. Para una primera instalación, mantenga **New installation - create new resources**. | Crea una nueva instancia con nuevos recursos. Use un modo de adjuntar recursos existentes solo para cambio de plan, actualización mayor o recuperación preparada explícitamente. |
| **Platform Administration Entra Group Object IDs** | Sí | Object IDs de los grupos Entra autorizados a administrar la plataforma. | Introduzca los **Object IDs** de los grupos, no solo los nombres visibles. Estos grupos determinan quién accederá a **Platform Administration** después del despliegue. Prefiera grupos dedicados a grupos demasiado amplios. |
| **Platform Administration Bootstrap Users (optional)** | No | Usuarios bootstrap o de recuperación si el procedimiento lo requiere. | Use este campo para asegurar el primer acceso cuando los grupos Entra aún no están plenamente operativos. Mantenga una lista mínima y controlada. |
| **Allow Azure RBAC admin recovery** | No | Casilla que permite recuperación de administrador vía Azure RBAC. | Manténgala activada si el modelo operativo permite que un administrador Azure autorizado recupere el acceso de plataforma. Desactívela solo si la gobernanza exige separación estricta y documentada. |
| **LLM Provider** | Recomendado | La familia inicial de proveedor IA: Azure OpenAI, OpenAI, OpenRouter u OpenAI-compatible según las opciones disponibles. | Es una intención inicial de despliegue. No prueba que el proveedor ya esté operativo. Después de la instalación, complete el proveedor en **Platform Administration > AI Provider Settings** con **Save**, **Validate**, **Test** y **Activate**. |
| **CORS Allowed Origins** | Según el escenario | Orígenes web adicionales permitidos, por ejemplo `https://portal.contoso.com`. | Déjelo vacío si no se requiere origen adicional. Evite comodines amplios. Los valores deben ser orígenes completos con `https://`, dominio y puerto si aplica. |
| **Enable alerting (Azure Monitor)** | No | Activa o desactiva alertas Azure Monitor creadas para el entorno. | Recomendado en producción para detectar incidentes. Después verifique destinatarios, reglas de acción y costes en Azure Monitor. |
| **Enable debug logging** | No | Activa logs más detallados. | Manténgalo desactivado en producción salvo diagnóstico de soporte. El debug puede aumentar el volumen de logs y exponer más detalles técnicos a administradores autorizados. |
| **Password** | Sí | La contraseña inicial solicitada por el formulario de despliegue. | Genere una contraseña fuerte y almacénela en un vault o gestor de secretos aprobado. No la envíe por correo, chat ni ticket no seguro. |
| **Confirm password** | Sí | El mismo valor que **Password**. | Azure valida que ambos campos coinciden. Si falla, vuelva a introducir ambos valores desde la fuente segura. |
| **VNet CIDR** | Sí | El rango de red privada reservado para el despliegue, por ejemplo `10.0.0.0/16`. | Elija un rango que no se solape con redes existentes, peerings, VPN o rangos futuros previstos. Valídelo con el equipo de red antes de crear, porque es difícil cambiarlo después. |
| **Previous** | No | Vuelve a la pestaña **Basics**. | Útil para corregir suscripción, grupo, región o nombres antes de la validación final. |
| **Next** | No | Avanza al siguiente paso del formulario. | Úselo si desea seguir el orden de pestañas antes de validar. |
| **Review + create** | No | Ejecuta la validación final de todos los parámetros. | Azure no crea recursos hasta que confirme la creación tras la validación. Corrija todos los errores antes de iniciar. |

## Elegir LLM Provider

El campo **LLM Provider** selecciona la familia IA que el entorno debe usar inicialmente. No finaliza la configuración IA.

| Opción | Cuándo elegirla | Aún requerido después de la instalación |
| --- | --- | --- |
| **Azure OpenAI** | La organización quiere permanecer en el ecosistema Azure, Entra y gobernanza Microsoft. | Confirmar endpoint, región o modelo disponible, ajustes Azure OpenAI, pruebas y activación. |
| **OpenAI** | La organización usa directamente las APIs OpenAI. | Introducir URL, modelo, clave o referencia de secreto, luego ejecutar **Save**, **Validate**, **Test**, **Activate**. |
| **OpenRouter** | La organización quiere acceder a varios modelos mediante un único punto de entrada. | Introducir Base URL, clave o referencia de secreto, modelo por defecto, luego validar y activar. |
| **OpenAI-compatible** | La organización usa una gateway o endpoint compatible OpenAI. | Introducir endpoint exacto, modo de autenticación, modelo o despliegue esperado, y probar compatibilidad real. |

Regla simple: el despliegue **selecciona** el proveedor IA; la administración de ProPM Agent lo hace **operativo**.

## Validación antes de Review + create

Compruebe estos puntos antes de iniciar la creación.

| Comprobación | Resultado esperado |
| --- | --- |
| Suscripción y grupo de recursos | Coinciden con el entorno objetivo y las reglas de gobernanza |
| Región | Respeta residencia de datos, disponibilidad y estrategia de red |
| Application Name | Nombre claro, estable y no confidencial |
| Managed Resource Group | Nombre único y reconocible |
| Entra Group Object IDs | IDs de los grupos previstos para administrar la plataforma |
| Bootstrap Users | Lista vacía o estrictamente limitada a cuentas previstas |
| RBAC recovery | Elección alineada con el procedimiento de recuperación administrador |
| LLM Provider | Proveedor inicial coherente con la estrategia IA |
| CORS | Solo se autorizan los orígenes necesarios |
| Alerting | Activado para entornos que requieren supervisión |
| Debug logging | Desactivado salvo diagnóstico controlado |
| Password | Guardada en un vault y nunca compartida en claro |
| VNet CIDR | Validado por el equipo de red y sin solapamiento conocido |

## Después del despliegue

1. Espere a que termine el aprovisionamiento Azure.
2. Abra la URL publicada de ProPM Agent.
3. Inicie sesión con una cuenta autorizada por los grupos Entra o el procedimiento bootstrap.
4. Verifique el acceso a **Platform Administration**.
5. Abra los ajustes del proveedor IA.
6. Ejecute **Save**, **Validate**, **Test** y **Activate** para el proveedor seleccionado.
7. Verifique licencias y plan Marketplace.
8. Realice una primera prueba funcional con un usuario estándar.
9. Revise [Registro IA](./journal-ia.md) después de un run para confirmar el proveedor realmente usado.

## Bloqueos frecuentes

| Síntoma | Causa probable | Acción recomendada |
| --- | --- | --- |
| Azure no pasa al siguiente paso | Campo obligatorio vacío o inválido | Revise todos los campos marcados con `*` y los mensajes bajo los campos |
| El administrador no ve Platform Administration | Object ID Entra erróneo o pertenencia al grupo no propagada | Verifique el Object ID del grupo y la pertenencia de la cuenta |
| Conflicto de red durante la validación | VNet CIDR ya usado o solapado | Elija otro rango con el equipo de red |
| Proveedor IA no utilizable tras la creación | El despliegue solo seleccionó la familia IA | Complete el proveedor en administración con **Save**, **Validate**, **Test**, **Activate** |
| Demasiados logs o costes inesperados | Debug logging o alerting activados sin gobierno | Ajuste Azure Monitor y desactive debug fuera del diagnóstico |

## Siguiente

- Para finalizar acceso Entra, abra [Administración Azure y Entra](./admin-deploiement-marketplace-et-entra.md).
- Para configurar el proveedor IA, abra [Proveedor IA](./admin-fournisseur-ia.md).
- Para verificar licencias, planes y actualizaciones, abra [Licencias, planes y actualizaciones](./admin-licences-plans-et-mises-a-jour.md).
- Para invitar usuarios, envíe [Primeros pasos](./demarrage.md).
