---
title: Proveedor IA
slug: /admin-fournisseur-ia
description: Guardar, validar, probar y activar el proveedor IA.
---

# Proveedor IA

![Flujo del proveedor IA](/img/annotated/es/ai-provider-annotated.svg)

Esta página explica la administración del proveedor IA a nivel plataforma.

## Acciones

| Acción | Propósito |
| --- | --- |
| Save | Guardar configuración |
| Validate | Verificar coherencia |
| Test | Ejecutar prueba funcional |
| Activate | Activar proveedor para runs |

## Configurar

1. Abra **Platform Administration**.
2. Abra **AI Provider Settings**.
3. Elija el tipo de proveedor.
4. Complete los campos de la interfaz.
5. Seleccione **Save**.
6. Ejecute **Validate**.
7. Ejecute **Test**.
8. Seleccione **Activate**.
9. Verifique un run real en [Registro IA](./journal-ia.md).

## Importante

Los secrets permanecen en herramientas seguras de administración. El proveedor efectivo del run se confirma en el Registro IA.
