---
title: Audiencias, roles y alcances
slug: /publics-roles-et-perimetres
description: Elegir el recorrido de documentación correcto según el rol en ProPM Agent.
---

# Audiencias, roles y alcances

Esta página ayuda a elegir la documentación adecuada según la responsabilidad del usuario.

## Para quién

| Perfil | Uso |
| --- | --- |
| Usuario de negocio | Trabajar a diario sin detalles internos de Azure |
| Project Owner | Gestionar miembros, roles, gobernanza e integraciones de proyecto |
| Administrador Azure o tenant | Desplegar, configurar IA, licencias, integraciones y actualizaciones |
| Soporte o auditoría | Encontrar runs, Trace IDs e información de diagnóstico |

## Niveles de documentación

| Nivel | Contiene | No contiene |
| --- | --- | --- |
| Usuario final | Pasos, roles, resultados esperados | Secrets, payloads crudos, infraestructura |
| Project Owner | Roles, políticas, integraciones de proyecto | Autenticación técnica y secrets |
| Admin Azure | Marketplace, Entra, IA, licencias, updates | Flujos diarios de negocio |
| Soporte | Run ID, Trace ID, proveedor efectivo | Contraseñas, tokens o datos sensibles |

## Recorridos recomendados

| Rol | Empezar por | Después |
| --- | --- | --- |
| Nuevo usuario | [Inicio](./demarrage.md) | [Navegación](./interface-et-navigation.md), [Dashboard](./tableau-de-bord.md) |
| Contribuidor | [Conocimiento](./connaissance-documents-et-imports.md) | [Agentes](./agents.md), [Documentos PM](./documents-pm-et-artefacts.md) |
| Project Owner | [Control de acceso](./controle-acces-et-roles.md) | [Gobernanza](./gouvernance-decisions-et-actions.md) |
| Admin tenant | [Azure y Entra](./admin-deploiement-marketplace-et-entra.md) | [Proveedor IA](./admin-fournisseur-ia.md), [Licencias](./admin-licences-plans-et-mises-a-jour.md) |
| Soporte | [Diagnóstico](./support-audit-et-diagnostic.md) | [Registro IA](./journal-ia.md), [FAQ](./maintenance-support-faq.md) |

## Regla de seguridad

Nunca comparta secrets, contraseñas, tokens ni payloads sensibles completos en una solicitud de soporte.
