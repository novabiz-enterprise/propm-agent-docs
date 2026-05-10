---
title: Checklist de revisión documental
slug: /checklist-revue-documentaire
description: Lista de control para revisar la documentación antes de publicación o release.
---

# Checklist de revisión documental

## Controles

| Área | Control |
| --- | --- |
| Navegación | Rutas de usuario, Project Owner, admin Azure, seguridad y soporte separadas |
| Roles | Páginas de acción indican audiencia y prerrequisitos |
| Producto | Etiquetas UI y nombres de agentes correctos |
| Seguridad | Sin secrets, tokens, payloads crudos ni variables de infraestructura en páginas de usuario |
| Procedimientos | Pasos con resultado esperado y bloqueos comunes |
| Imágenes | Capturas actuales con alt text útil |
| Enlaces | Enlaces internos apuntan a páginas actuales |
| Build | `npm run build` correcto |

## Proceso de release

1. Ejecutar `npm run build`.
2. Corregir enlaces o imágenes rotas.
3. Verificar que la búsqueda no indexa fuentes francesas duplicadas.
4. Revisar inicio, una página usuario, una admin y una soporte.
5. Actualizar [Release notes](./release-notes.md).
