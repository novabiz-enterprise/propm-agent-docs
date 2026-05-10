---
title: Acciones y aprobaciones
slug: /actions-et-approbations
description: Proponer, aprobar, rechazar y ejecutar acciones gobernadas.
---

# Acciones y aprobaciones

Una acción gobernada puede surgir de una señal, documento o flujo de conector y puede requerir aprobación.

## Proponer una acción

1. Abra la señal, Documento PM o página que propone la acción.
2. Seleccione la acción, por ejemplo publicar en SharePoint o crear ticket Jira.
3. Revise contenido, destino y justificación.
4. Envíe la acción.
5. Verifique el estado.

## Aprobar o rechazar

1. Abra **Actions & approvals**.
2. Filtre acciones pendientes.
3. Abra los detalles.
4. Revise evidencias, destino, impacto y solicitante.
5. Seleccione **Approve** o **Reject**.

## Approved no es executed

**Approved** significa autorizado. **Executed** significa ejecutado realmente. Las acciones externas requieren conector, binding de proyecto, política, rol, salud y, si aplica, modo live.

## Bloqueos

| Bloqueo | Significado |
| --- | --- |
| Rol insuficiente | No puede proponer o aprobar |
| require approval | Aprobación obligatoria |
| deny | Política prohíbe la acción |
| Not bound | Proyecto no conectado |
| Not healthy | Conector o proveedor no listo |
