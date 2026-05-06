---
title: Portafolio
slug: /portfolio
description: Comparar proyectos, configurar señales de portafolio, leer cohortes y outliers, y decidir qué proyecto requiere atención primero.
---

[Inicio](./index.md) · [Proveedores de IA e integraciones de plataforma](./ai-providers-platform-integrations.md) · [Plan del tenant, usuarios licenciados y actualizaciones de la app](./seats-management-app-updates.md)

![Centro de mando del portafolio](/img/screenshots/localized/es/02-portfolio-command-center.jpg)

## Objetivo

La página **Portafolio** es una superficie transversal de revisión PMO. Compara varios proyectos con el mismo modelo de señales antes de abrir la vista detallada de un proyecto.

Úsela para responder: **qué proyectos merecen atención prioritaria ahora?**

Úsela sobre todo para:

- priorizar qué proyecto necesita atención primero;
- comparar señales coherentes entre varios proyectos;
- decidir qué proyecto merece un drill-down más detallado.

No la trate como una página solo para patrocinadores ni como sustituto del **Espacio de trabajo** detallado de un proyecto.

## Para qué sirve Portafolio

La página compara varios proyectos con **señales configurables**, no con una tabla fija rojo / naranja / verde.

Permite:

- seleccionar varios proyectos;
- elegir las señales que se comparan;
- definir un **peso** y un **umbral** para cada señal;
- filtrar por **severidad mínima**;
- guardar una **cohorte** reutilizable;
- detectar **outliers** o valores anómalos;
- abrir el detalle de un proyecto para entender por qué destaca.

## Qué ve el usuario

| Zona | Qué se hace allí |
| --- | --- |
| **Selección de proyectos** | elegir qué proyectos entran en la comparación |
| **Perfil de señales** | elegir señales, pesos, umbrales y severidad mínima |
| **Cohortes** | guardar o recargar una configuración de comparación reutilizable |
| **Resultados de comparación** | leer el resumen, los outliers y las diferencias entre proyectos |
| **Drill-down del proyecto** | abrir pruebas, actividad reciente y detalle de señales de un proyecto |

## Términos clave

| Término | Explicación simple |
| --- | --- |
| **Proyecto** | un proyecto incluido en la comparación |
| **Señal** | un indicador comparativo, por ejemplo bloqueos, frescura o presión de calendario |
| **Peso** | la importancia asignada a una señal en la puntuación global |
| **Umbral** | el nivel a partir del cual una señal empieza a destacar |
| **Severidad mínima** | un filtro que oculta señales débiles |
| **Cohorte** | un grupo de proyectos guardado con su perfil de comparación |
| **Outlier** | un proyecto que destaca más que los demás según la configuración activa |
| **Comparación narrativa** | un resumen textual de la comparación en curso |
| **Drill-down del proyecto** | detalle proyecto por proyecto con pruebas y actividad |

## Ejemplo guiado

Un PMO quiere comparar tres proyectos antes de una revisión semanal.

1. En **Projects**, seleccione los proyectos que pertenecen a la misma conversación de gestión.
2. En **Signal profile**, active las señales útiles, por ejemplo `blocker_density`, `freshness_issues`, `failed_runs` y `schedule_pressure`.
3. Ajuste los pesos para expresar qué importa más en esta revisión.
4. Ajuste los umbrales para decidir desde cuándo una señal merece atención.
5. Elija la severidad mínima para ocultar ruido débil si es necesario.
6. Defina el **Overall outlier threshold** para controlar la selectividad de la comparación.
7. Guarde la configuración como **cohorte** si va a reutilizarla.
8. Haga clic en **Refresh comparison** para recalcular la vista.
9. Lea la **Narrative comparison** y después revise los **Outliers**.
10. Abra **Project drill-down** para revisar pruebas, actividad reciente y enlaces a Workspace, Knowledge, Reports o AI Log.

![Editor de cohortes del portafolio](/img/screenshots/localized/es/02-portfolio-cohort-editor.jpg)

## Perfil de señales por defecto

La página no empieza desde una hoja en blanco. Los valores por defecto son un punto de partida seguro, no un modelo obligatorio.

| Señal | Peso por defecto | Umbral por defecto |
| --- | --- | --- |
| `activity_change` | `1.0` | `45` |
| `blocker_density` | `1.2` | `35` |
| `freshness_issues` | `1.0` | `35` |
| `contradiction_count` | `1.1` | `35` |
| `failed_runs` | `1.3` | `40` |
| `schedule_pressure` | `1.2` | `40` |
| `cost_pressure` | `1.2` | `40` |
| `overall_outlier_score` | - | `55` |

Complementos útiles:

- la **severidad mínima** empieza sin un filtro restrictivo;
- **Reset defaults** restaura estos valores iniciales;
- las **cohortes** guardadas conservan perfiles reutilizables;
- algunos entornos también pueden mostrar una cohorte preconfigurada, con contenido variable.

## Señales de Portafolio

| Señal | Pregunta que responde | Cómo interpretarla |
| --- | --- | --- |
| `activity_change` | La actividad reciente es muy distinta del periodo anterior? | alto = variación inusual que explicar |
| `blocker_density` | El proyecto muestra muchos bloqueos o escaladas? | alto = bloqueos frecuentes o concentrados |
| `freshness_issues` | Las pruebas y fuentes son demasiado antiguas o no disponibles? | alto = la vista del proyecto pierde fiabilidad |
| `contradiction_count` | Las fuentes se contradicen? | alto = arbitraje o aclaración necesaria |
| `failed_runs` | Las automatizaciones o runs fallan a menudo? | alto = fricción técnica u operativa |
| `schedule_pressure` | El calendario muestra señales de tensión? | alto = presión de calendario o desviación |
| `cost_pressure` | El presupuesto o consumo muestra tensión? | alto = riesgo de presupuesto o coste |

## Cómo leer un outlier

Un **outlier** no es una nota mágica ni un juicio definitivo.

Un proyecto es outlier cuando:

- una o varias señales son altas;
- esas señales tienen un peso significativo;
- se superan los umbrales activos;
- la puntuación combinada supera el umbral global de outlier.

Lectura correcta:

- **outlier** significa que el proyecto destaca más que otros según las reglas actuales;
- **no outlier** significa que el proyecto permanece dentro de la banda normal del grupo actual.

## Por qué una señal puede no estar disponible

Una señal puede estar **no disponible** cuando falta la prueba necesaria.

Por ejemplo:

- si el proyecto no tiene fuentes de planificación, `schedule_pressure` puede seguir no disponible;
- si faltan fuentes de presupuesto, `cost_pressure` puede seguir no disponible.

Una señal no disponible no significa riesgo cero. Significa que el portafolio no tiene suficiente prueba fiable para calcular este indicador.

## Cuando Portafolio parece vacío o tranquilo

Varias lecturas pueden ser normales:

- no se cargó ningún proyecto accesible;
- no se seleccionó ningún proyecto o ninguna señal;
- la comparación no devolvió resúmenes utilizables;
- algunas señales no están disponibles por falta de evidencias;
- ningún proyecto supera el umbral global de outlier activo.

Un resultado tranquilo puede venir de una selección restrictiva, evidencia limitada o proyectos realmente estables.

## Cómo se calcula la comparación

Comportamiento esperado:

1. la página carga los proyectos accesibles;
2. preselecciona un primer conjunto utilizable si todavía no se eligió ningún proyecto;
3. cuando la configuración de proyectos y señales es válida, se solicita la comparación a un servicio;
4. **Refresh comparison** lanza un recálculo asíncrono y actualiza el **snapshot** visible;
5. la marca de tiempo del snapshot indica cuándo se recalculó esa vista de portafolio.

Las **cohortes** guardadas conservan un perfil reutilizable, pero no sustituyen la solicitud de comparación en vivo.

## Puntos clave

- empiece por elegir los proyectos correctos;
- active solo las señales útiles para la revisión;
- ajuste pesos, umbrales y severidad con intención;
- use los **outliers** como punto de partida de investigación, no como veredicto final;
- abra **Project drill-down** para entender el resultado.

## Siguiente

- [Proveedores de IA e integraciones de plataforma](./ai-providers-platform-integrations.md)
- [Plan del tenant, usuarios licenciados y actualizaciones de la app](./seats-management-app-updates.md)
- [Informes, Registro IA y trazabilidad](./rapports-journal-ia-et-tracabilite.md)
- [Mantenimiento, soporte y FAQ](./maintenance-support-faq.md)
