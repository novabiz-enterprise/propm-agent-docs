---
title: Bekannte Einschränkungen
slug: /limitations-connues
description: Bekannte funktionale Grenzen von ProPM Agent in Azure-Kundenumgebungen.
---

# Bekannte Einschränkungen

## Nutzergrenzen

| Thema | Einschränkung | Empfehlung |
| --- | --- | --- |
| Chatverlauf | Kann browserlokal sein | PM-Dokumente und KI-Journal für gemeinsame Spuren nutzen |
| Aktives Projekt | Seiten hängen vom Projekt ab | Obere Leiste prüfen |
| `All projects` | Kein Zugriff auf alle Tenant-Projekte | Projektzugriff prüfen |
| Agentenantwort | Kein finales Dokument | Prüfen und bei Bedarf PM-Dokument erstellen |
| Vertrauen | Keine Freigabe | Nachweise und Frische prüfen |

## Integrationen

Ein sichtbarer Connector ist nicht automatisch nutzbar. Plattformdefinition, Projektbindung, Richtlinie, Rolle, Gesundheit und gegebenenfalls Live-Modus müssen passen.

## Azure-Administration

Der im Deployment gewählte Anbieter beweist nicht den Anbieter eines Runs. **Refresh Marketplace plan** synchronisiert nur Informationen.
