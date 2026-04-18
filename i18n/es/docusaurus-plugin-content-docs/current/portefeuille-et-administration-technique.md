---
title: Portafolio y administración técnica
slug: /portefeuille-et-administration-technique
description: Comprender la página Portfolio paso a paso, leer las cohortes y outliers, y luego administrar la plataforma, las integraciones y los proveedores IA.
---

[Inicio](./index.md) · [Informes, Diario IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md) · [Mantenimiento, soporte y FAQ](./maintenance-support-faq.md)

![Centro de comando de portafolio](/img/screenshots/localized/fr/02-portfolio-command-center.png)

## Objetivo

Esta página cubre dos superficies diferentes del producto:

1. la página **Portfolio** o **Centro de comando de portafolio**, utilizada para comparar varios proyectos;
2. **Administración de la plataforma**, utilizada para preparar las integraciones, los proveedores IA, la suscripción y la auditoría.

Para un usuario principiante, es útil recordar esto:

- la página **Portfolio** ayuda a responder la pregunta **« ¿qué proyectos merecen mi atención en prioridad? »**;
- la **Administración de la plataforma** ayuda a responder la pregunta **« ¿la plataforma está correctamente preparada para la organización? »**.

## Parte 1 — Entender la página Portfolio paso a paso

## ¿Para qué sirve la página Portfolio?

La página **Portfolio** sirve para comparar varios proyectos con **señales configurables** en lugar de un simple cuadro rojo / naranja / verde fijo.

Permite, entre otras cosas:

- seleccionar varios proyectos;
- elegir las señales a comparar;
- definir un **peso** y un **umbral** para cada señal;
- filtrar la **severidad mínima**;
- registrar una **cohorte** reutilizable;
- identificar los **outliers** o **valores atípicos**;
- abrir luego el detalle de un proyecto para comprender por qué destaca.

## Lo que el usuario ve al llegar a la página

Al llegar a la página Portfolio, el usuario suele ver cinco zonas.

| Zona | Lo que se hace allí |
| --- | --- |
| **Selección de proyectos** | elegir qué proyectos entran en la comparación |
| **Perfil de señales** | elegir las señales, sus pesos, sus umbrales y la severidad mínima |
| **Cohortes** | registrar o recargar una configuración de comparación reutilizable |
| **Resultados de comparación** | leer el resumen, los outliers y las diferencias entre proyectos |
| **Desglose de proyecto** | abrir las pruebas, la actividad reciente y el detalle por señal para un proyecto |

## Las palabras a comprender antes de comenzar

| Palabra | Explicación simple |
| --- | --- |
| **Proyecto** | un proyecto incluido en la comparación |
| **Señal** | un indicador comparativo, por ejemplo bloqueos, frescura o presión de planificación |
| **Peso** | la importancia dada a una señal en la puntuación global |
| **Umbral** | el nivel a partir del cual una señal comienza a destacarse como notable |
| **Severidad mínima** | un filtro que oculta las señales demasiado débiles |
| **Cohorte** | un grupo de proyectos registrado con su perfil de comparación |
| **Outlier / valor atípico** | un proyecto que destaca más que los demás según la configuración activa |
| **Comparación narrativa** | un resumen textual de la comparación en curso |
| **Desglose de proyecto** | el detalle proyecto por proyecto con pruebas y actividad |

## Ejemplo guiado — comparar tres proyectos para una revisión semanal

Imaginemos que un PMO quiere comparar tres proyectos:

- Proyecto A;
- Proyecto B;
- Proyecto C.

El objetivo es identificar rápidamente cuál requiere atención prioritaria antes del comité semanal.

### Paso 1 — Elegir los proyectos

En la zona **Projects**, marca los proyectos que quieres comparar.

### Buen reflejo

Prefiere comparar proyectos que pertenezcan a una **misma conversación de pilotaje**. Por ejemplo:

- tres proyectos de un mismo portafolio;
- tres proyectos de un mismo comité;
- o tres proyectos de una misma dirección.

### Paso 2 — Elegir las señales útiles

En el **Perfil de señales**, activa las señales que realmente importan para tu revisión.

Ejemplo para una revisión semanal:

- **blocker_density**;
- **freshness_issues**;
- **failed_runs**;
- **schedule_pressure**.

### Paso 3 — Ajustar los pesos

El **peso** indica la importancia dada a una señal.

- si asignas un peso alto a **blocker_density**, los proyectos con muchos bloqueos destacarán más;
- si asignas un peso bajo a **activity_change**, esa señal influirá menos en la clasificación final.

### Paso 4 — Ajustar los umbrales

El **umbral** indica a partir de cuándo una señal debe realmente llamar la atención.

- un umbral bajo hace la comparación más sensible;
- un umbral alto hace la comparación más selectiva.

### Paso 5 — Elegir la severidad mínima

La **severidad mínima** filtra lo que quieres ver en los resultados.

Ejemplo:

- **low and above** = ves casi todo;
- **medium and above** = ya filtras las señales débiles;
- **high and above** = te concentras solo en los temas más graves.

### Paso 6 — Ajustar el umbral global de outlier

El **Umbral global de outlier** determina a partir de qué nivel combinado un proyecto debe ser señalado como **valor atípico**.

- umbral más bajo = más proyectos destacan;
- umbral más alto = solo los casos más marcados destacan.

### Paso 7 — Registrar una cohorte si es necesario

Si haces a menudo la misma comparación, regístrala como **cohorte**.

Una cohorte recuerda:

- los proyectos elegidos;
- las señales activadas;
- los pesos;
- los umbrales;
- la severidad mínima.

![Editor de cohorte de portafolio](/img/screenshots/localized/fr/02-portfolio-cohort-editor.png)

### Paso 8 — Iniciar o refrescar la comparación

Haz clic en **Refresh comparison** para recalcular la vista con los parámetros activos.

### Paso 9 — Leer el resumen narrativo

La zona **Narrative comparison** da un texto de síntesis.

Generalmente responde a la pregunta:

**« ¿Qué destaca más ahora, en este grupo de proyectos? »**

### Paso 10 — Leer los outliers

La zona **Outliers** lista los proyectos que superan el perfil activo de pesos y umbrales.

Un outlier no es necesariamente un « proyecto en dificultades ». Simplemente significa:

- que destaca más que los demás;
- que merece una lectura más atenta;
- que hay que entender **por qué** destaca.

### Paso 11 — Abrir el detalle del proyecto

En **Desglose de proyecto**, puedes consultar:

- las señales del proyecto;
- las pruebas;
- la actividad reciente;
- los enlaces a **Workspace**, **Knowledge**, **Reports** o **AI Log**.

Esta es la etapa que transforma una alerta de portafolio en comprensión concreta.

## Entender las señales visibles en Portfolio

Las señales observadas en el producto incluyen:

- `activity_change`
- `blocker_density`
- `freshness_issues`
- `contradiction_count`
- `failed_runs`
- `schedule_pressure`
- `cost_pressure`

### Definición simple de cada señal

| Señal | Pregunta a la que responde | Cómo interpretarla |
| --- | --- | --- |
| `activity_change` | ¿la actividad reciente es muy diferente del período anterior? | alto = variación inusual que explicar |
| `blocker_density` | ¿el proyecto muestra muchos bloqueos o escaladas? | alto = bloqueos frecuentes o concentrados |
| `freshness_issues` | ¿las pruebas y fuentes son demasiado antiguas o no disponibles? | alto = la vista del proyecto se vuelve menos fiable |
| `contradiction_count` | ¿las fuentes se contradicen? | alto = arbitraje o aclaración necesaria |
| `failed_runs` | ¿las automatizaciones o ejecuciones fallan a menudo? | alto = fricción técnica u operativa |
| `schedule_pressure` | ¿el plan muestra signos de tensión? | alto = presión de planificación o desviación de calendario |
| `cost_pressure` | ¿el presupuesto o el consumo muestran tensión? | alto = riesgo de presupuesto / costos |

## Cómo leer pesos, umbrales y severidad con un ejemplo simple

Tomemos un ejemplo muy concreto.

### Caso 1 — Quieres ver principalmente los proyectos bloqueados

- aumenta el **peso** de `blocker_density`;
- mantén un **umbral** medio;
- pon la **severidad mínima** en `medium`.

Resultado esperado: los proyectos con bloqueos recurrentes destacan más.

### Caso 2 — Quieres controlar principalmente la calidad de las pruebas

- aumenta el peso de `freshness_issues` y `contradiction_count`;
- mantén un umbral más sensible;
- luego lee las pruebas no disponibles o contradictorias.

Resultado esperado: los proyectos cuya lectura se vuelve poco fiable suben más rápido.

### Caso 3 — Quieres un comité muy selectivo

- mantén pocos señales;
- aumenta los umbrales;
- aumenta la severidad mínima;
- aumenta el umbral global de outlier.

Resultado esperado: solo los casos más marcados permanecerán visibles.

## Cómo leer un outlier correctamente

Un **outlier** no es una nota mágica ni un juicio definitivo.

En los flujos observados, un proyecto destaca como outlier cuando:

- una o varias señales son altas;
- esas señales tienen un peso significativo;
- los umbrales activos se superan;
- la puntuación combinada supera el umbral global de outlier.

### Lectura correcta

- **outlier** = « este proyecto destaca más que los demás según las reglas actuales »;
- **no outlier** = « este proyecto permanece en la banda normal del grupo actual ».

## Por qué una señal puede estar indisponible

Una señal puede estar **indisponible** cuando falta la prueba necesaria.

Ejemplo:

- si el proyecto no tiene las fuentes de planificación correctas, `schedule_pressure` puede quedar indisponible;
- si las fuentes de presupuesto no están presentes, `cost_pressure` puede quedar indisponible.

### Punto muy importante

Una señal **indisponible** no significa **cero riesgo**.

Esto significa:

**« el portafolio no tiene suficiente prueba fiable para calcular este indicador »**

## Qué contiene una cohorte

Una cohorte es un **perfil de comparación registrado**.

Recuerda en memoria:

- el nombre de la cohorte;
- su descripción;
- los proyectos elegidos;
- las señales activadas;
- los pesos;
- los umbrales;
- la severidad mínima.

### Por qué usar una cohorte

Usa una cohorte cuando quieras repetir regularmente la misma comparación, por ejemplo:

- revisión semanal de entrega;
- seguimiento mensual de portafolio;
- comité de riesgos;
- revisión ejecutiva restringida.

## Cómo leer la zona Desglose de proyecto

La zona **Desglose de proyecto** permite explicar el resultado.

Puede mostrar:

- el **score ponderado** del proyecto;
- la lista de señales visibles;
- **pruebas** o extractos documentales;
- la **actividad reciente**;
- enlaces a **Workspace**, **Knowledge**, **Agents**, **Reports & artifacts** y **AI Log**.

### Lectura práctica

- si un proyecto destaca, comienza por el **resumen narrativo**;
- abre luego la **señal concerniente**;
- relee las **pruebas**;
- controla finalmente la **actividad reciente** para entender si la situación sigue activa.

## Buen uso de la página Portfolio

Usa la página Portfolio para:

- comparar;
- priorizar;
- identificar las diferencias;
- decidir qué proyecto debe estudiarse en detalle.

No uses la página Portfolio como reemplazo completo del **Workspace** del proyecto.

## Parte 2 — Administración de la plataforma

## ¿Para qué sirve esta parte?

**Administración de la plataforma** sirve para preparar la plataforma a escala de la organización.

Aquí es donde se configuran principalmente:

- las **integraciones de la plataforma**;
- los **proveedores IA**;
- la **suscripción** y los **asientos**;
- la **auditoría de actividad**.

![Administración de la plataforma](/img/screenshots/localized/fr/18-platform-administration-overview.png)

## Secciones visibles

| Sección | Rol |
| --- | --- |
| Visión general | resumen del estado general de preparación |
| Integraciones de la plataforma | definiciones técnicas de los conectores y proveedores de ingestión |
| Parámetros del proveedor IA | configuración, validación, prueba y activación del proveedor IA |
| Marketplace & suscripción | plan, derechos, asientos y estado comercial |
| Auditoría / actividad | historial de acciones administrativas |

## Integraciones de la plataforma vs Integraciones del proyecto

Una regla importante sale del producto:

- el **nivel plataforma** decide lo que existe técnicamente;
- el **nivel proyecto** decide lo que realmente se usa en un proyecto dado.

### Lectura simple

- **plataforma** = se prepara la herramienta;
- **proyecto** = se autoriza al proyecto a usarla;
- **gobernanza** = se decide quién puede realmente actuar con esta herramienta.

Para el detalle completo por familia de conectores, ver [Conectores e integraciones](./connecteurs-jira-et-sharepoint).

## Preparación y causas de bloqueo

Una integración puede estar bloqueada por:

- **entitlement**;
- **policy**;
- **permission**;
- **health** a verificar;
- definición plataforma faltante;
- binding proyecto no abierto.

### Circuito de verificación recomendado

1. releer el bloqueo del lado del proyecto;
2. abrir **Administración de la plataforma**;
3. verificar la definición técnica del conector o proveedor;
4. volver al proyecto para confirmar el binding y el uso autorizado.

## Parámetros del proveedor IA

Las familias de proveedores visibles en el producto incluyen:

- **OpenRouter**;
- **OpenAI-compatible**;
- **OpenAI**;
- **Azure OpenAI**;
- **Anthropic**.

### Cuando elegir cada proveedor

| Proveedor | Cuándo elegirlo | Qué se debe completar generalmente |
| --- | --- | --- |
| **OpenRouter** | cuando se necesita comparar varias familias de modelos a través de un solo conector | Base URL, clave, modelo por defecto |
| **OpenAI-compatible** | cuando el cliente usa una puerta de enlace o un endpoint compatible | endpoint exacto, auth, clave o secreto, modelo esperado |
| **OpenAI** | cuando el cliente usa directamente OpenAI | URL, clave o secreto, modelo por defecto |
| **Azure OpenAI** | cuando el cliente está centrado en Azure y quiere elegir sus despliegues Azure OpenAI | endpoint, versión API, modo de autenticación, nombre de despliegue LLM |
| **Anthropic** | cuando el cliente prefiere los modelos Claude | conexión, secreto, modelo por defecto |

### Cómo leer los estados de un proveedor IA

| Estado | Qué significa |
| --- | --- |
| **Configuration** | los campos están registrados |
| **Validation** | la configuración ha pasado los controles esperados |
| **Test** | la conectividad real ha sido verificada |
| **Operational** | el proveedor puede considerarse operativo |

### Pas a paso muy simple para preparar un proveedor IA

1. abre **Parámetros del proveedor IA**;
2. selecciona el proveedor deseado;
3. completa los campos solicitados;
4. haz clic en **Save**;
5. haz clic en **Validate**;
6. haz clic en **Test**;
7. haz clic en **Activate**;
8. verifica el resultado en **Journal IA**.

### Caso particular Azure OpenAI

Con **Azure OpenAI**, a menudo se debe completar en la administración:

- el **Endpoint**;
- la **versión API**;
- el **modo de autenticación**;
- el **nombre de despliegue LLM**;
- opcionalmente el **nombre de despliegue Embeddings**.

Para el detalle de la elección de proveedor IA durante el despliegue Marketplace, ver [Despliegue Azure Marketplace](./deploiement-azure-marketplace.md).

## Suscripción, entitlement y asientos

El producto gestiona un modelo de licencia con asientos y capacidades.

### Qué puede ver un administrador

- el **plan** activo;
- el número de **asientos comprados**;
- el número de **asientos disponibles**;
- los usuarios ya licenciados;
- el estado comercial, por ejemplo `billing state`, `payment state` o `subscription status`.

### Por qué es importante

Un usuario bloqueado no necesariamente tiene un problema de conexión. El bloqueo puede venir:

- de una falta de asientos;
- de un entitlement faltante;
- de una funcionalidad no incluida en el plan.

## Referencias técnicas de la plataforma

La infraestructura Azure observada se basa en:

- Azure Container Apps;
- Storage;
- Azure AI Search;
- Key Vault;
- Log Analytics;
- Application Insights;
- Document Intelligence.

## A retener

### Para la página Portfolio

- comienza por elegir los buenos proyectos;
- activa solo las señales útiles para tu revisión;
- ajusta pesos, umbrales y severidad con intención;
- usa los **outliers** como punto de partida de investigación, no como veredicto final;
- abre luego el **Desglose de proyecto** para entender el resultado.

### Para la administración técnica

- el nivel plataforma prepara los conectores y proveedores;
- el nivel proyecto abre su uso real;
- la gobernanza decide quién puede actuar;
- un proveedor IA solo está listo cuando está **registrado, validado, probado y activado**;
- el **Journal IA** sigue siendo la referencia para confirmar el proveedor realmente usado.

## Continuación

- [Conectores e integraciones](./connecteurs-jira-et-sharepoint)
- [Despliegue Azure Marketplace](./deploiement-azure-marketplace.md)
- [Informes, Diario IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md)
- [Mantenimiento, soporte y FAQ](./maintenance-support-faq.md)
- [Glosario](./glossaire.md)
