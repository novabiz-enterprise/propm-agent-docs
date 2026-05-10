---
title: Checkliste für Dokumentationsreview
slug: /checklist-revue-documentaire
description: Checkliste zur Prüfung der ProPM-Agent-Dokumentation vor Kundenfreigabe oder Release.
---

# Checkliste für Dokumentationsreview

## Zu prüfen

| Bereich | Kontrolle |
| --- | --- |
| Navigation | Nutzer-, Project-Owner-, Azure-Admin-, Sicherheits- und Supportpfade sind getrennt |
| Rollen | Aktionsseiten nennen Zielgruppe und Voraussetzungen |
| Produktgenauigkeit | UI-Labels und Agentennamen stimmen |
| Sicherheit | Keine Secrets, Tokens, Roh-Payloads oder Infrastrukturvariablen in Endnutzerseiten |
| Verfahren | Schritte enthalten erwartetes Ergebnis und Blocker |
| Bilder | Screenshots passen zur aktuellen UI und haben Alt-Text |
| Links | Interne Links zeigen auf aktuelle Spezialseiten |
| Build | `npm run build` ist erfolgreich |

## Release-Prozess

1. `npm run build` ausführen.
2. Defekte Links und Bilder korrigieren.
3. Suche auf doppelte französische Quellen prüfen.
4. Startseite, Nutzerseite, Adminseite und Supportseite prüfen.
5. [Release Notes](./release-notes.md) aktualisieren.
