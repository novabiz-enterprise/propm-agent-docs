---
title: Limitaciones conocidas
slug: /limitations-connues
description: Límites funcionales conocidos de ProPM Agent en contextos Azure.
---

# Limitaciones conocidas

## Límites de usuario

| Tema | Límite | Buena práctica |
| --- | --- | --- |
| Historial de chat | Puede ser local al navegador | Usar Documentos PM y Registro IA para trazabilidad compartida |
| Proyecto activo | Las páginas dependen del proyecto | Revisar la barra superior |
| `All projects` | No da acceso a todos los proyectos | Verificar acceso real |
| Respuesta de agente | No es documento final | Revisar y crear Documento PM si hace falta |
| Confianza | No es aprobación | Revisar evidencia y frescura |

## Integraciones

Un conector visible no siempre es utilizable. Deben estar listos definición plataforma, binding proyecto, política, rol, salud y live mode si aplica.

## Administración Azure

El proveedor elegido al desplegar no prueba el proveedor usado por un run. **Refresh Marketplace plan** solo sincroniza información.
