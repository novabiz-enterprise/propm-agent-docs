---
title: Soporte, auditoría y diagnóstico
slug: /support-audit-et-diagnostic
description: Recopilar información útil sin exponer secrets ni datos sensibles.
---

# Soporte, auditoría y diagnóstico

Esta página explica qué información ayuda durante un incidente.

## Contacto NovaBiz

Para contactar con el soporte de NovaBiz:

- Email: [support@navabiz.pro](mailto:support@navabiz.pro)
- Dirección: NovaBiz, 131 Continental Dr, Suite 305, Newark, DE 19713, United States

## Qué proporcionar

| Información | Ejemplo |
| --- | --- |
| URL de página | Página donde ocurrió el error |
| Proyecto activo | Nombre del proyecto |
| Usuario | Cuenta o grupo, nunca contraseña |
| Hora | Fecha, hora y zona horaria |
| Acción | Upload, run, publish, approve |
| Mensaje | Texto exacto o captura enmascarada |
| IDs | Run ID, Trace ID, Action ID si aparecen |

## Nunca proporcionar

- Contraseñas, secrets, tokens o claves.
- Payloads completos con datos sensibles.
- Datos cliente sin enmascarar.

## Diagnóstico rápido

| Síntoma | Primera verificación |
| --- | --- |
| Error de login | Cuenta, tenant, URL |
| Sin proyecto | Membresía y rol |
| Documento no indexado | Estado en Knowledge |
| Agente no responde | Run en Registro IA |
| Acción pendiente | Aprobación, política, conector |
| Licencia bloqueada | Seats restantes |
