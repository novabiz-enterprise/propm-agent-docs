---
title: "Schnittstelle und Navigation"
slug: /interface-et-navigation
description: "Verstehen Sie die Hauptbildschirme, die Seitenleiste, die obere Leiste und das Dashboard."
---

[Startseite](./index.md) · [Start](./demarrage.md) · [Projekte und Workspace](./projets-et-espace-de-travail.md)

![Dashboard ProPM Agent](/img/screenshots/localized/de/01-dashboard.png)

## Ziel

Diese Seite erklärt, wie man sich im ProPM Agent Shell zurechtfindet, das **Dashboard** liest, die **Command Palette** nutzt, die **Benachrichtigungen** interpretiert und das **Health Panel** für eine schnelle Überprüfung verwendet, wenn nötig.

## Überblick

Die beobachtete Oberfläche folgt einer einfachen Logik:

1. die **Sidebar** öffnet die großen Funktionsbereiche;
2. die **Top bar** ändert das aktuelle Projekt und öffnet die Schnellwerkzeuge;
3. die zentrale Fläche zeigt den **aktuellen Kontext**;
4. mehrere Bildschirme ändern ihren Zustand je nach **aktivem Projekt** und Ihren **Rechten**.

## Hauptnavigation

| Eintrag | Hauptverwendung |
| --- | --- |
| Dashboard | Lesen Sie den allgemeinen Status und die empfohlenen nächsten Schritte |
| Projects | Erstellen, öffnen und wechseln Sie den Projektkontext |
| Workspace | Projektzusammenfassung, Signale, Readiness und Projekteinrichtungen |
| Knowledge | Suchen, hochladen und importieren Sie Referenzdokumente |
| Agents | Interagieren Sie mit verfügbaren Agenten und lesen Sie strukturierte Ausgaben |
| Reports & artifacts | Überprüfen, vergleichen, veröffentlichen oder herunterladen Sie PM-Dokumente |
| AI Log | Untersuchen Sie Runs, Ereignisse und Metadaten der Nachverfolgbarkeit |
| Portfolio | Vergleichen Sie mehrere Projekte über konfigurierbare Signale |
| Platform Administration | Verwalten Sie Integrationen, KI-Anbieter, Abonnement und Plattformaktivität |

## Dashboard

Das **Dashboard** ist der nützlichste Bildschirm direkt nach dem Einloggen.

Es konsolidiert:

- Situation-Metriken;
- Aufmerksamkeitspunkte;
- empfohlene nächste Schritte;
- Shortcuts zu den Bereichen, in denen gehandelt werden muss;
- einen Überblick über offene Signale und geprüfte Elemente.

Nutzen Sie es als **Orientierungsseite**: wenn kein Projekt aktiv ist, bleiben einige Blöcke leer; wenn ein Projekt ausgewählt ist, passen sich die Indikatoren an.

### Wie man die großen Bereiche des Dashboards liest

| Bereich | Was sie zusammenfasst | Nützlicher Reflex |
| --- | --- | --- |
| Summary tiles | Zähler für Projekte, Wissen, aktive Agenten, offene Signale, Entwürfe von Benachrichtigungen und ausstehende Aktionen | Erkennen Sie sofort, ob das Thema ein Kontextmangel, eine Verzögerung bei der Überprüfung oder eine verwaltete Warteschlange ist |
| Score cards | Allgemeiner Zustand der Lieferung, des Ausführungstakt, der Governance-Abdeckung und der Wissenstiefe | Lesen Sie diese Karten als Orientierungshilfen, bevor Sie einen Detailbildschirm öffnen |
| Readiness blocks | Wissensbasis, Automatisierungsabdeckung, Governance-Posture und Lieferfluss | Identifizieren Sie, welcher Pfeiler die normale Nutzung des Projekts blockiert |
| Attention panel | Signale, verwaltete Aktionen und Watchlist-Connectoren | Gehen Sie zum **Workspace**, um aktive Blockaden zu behandeln |
| Pulse panel | Letzter Digest, aktuelle Benachrichtigungen, jüngste Aktivitäten und Connector-Status | Überprüfen Sie, was sich geändert hat, ohne die gesamte Projektgeschichte erneut zu lesen |
| Quick links | Verknüpfungen zu **Workspace**, **Knowledge**, **Agents**, **Reports & artifacts**, **AI Log** und **Portfolio** | Öffnen Sie direkt die richtige Oberfläche anstatt Bildschirme zu navigieren |

Die Scores und Indikatoren des Dashboards sollten als **Priorisierungsreferenz** gelesen werden, nicht als alleinige Schlussfolgerung.

### Was tun, wenn das Dashboard widersprüchlich erscheint?

1. Bestätigen Sie zuerst das **aktive Projekt** in der oberen Leiste.
2. Behandeln Sie die Karten anschließend als **Orientierungs-Signale**, nicht als einzige Wahrheit.
3. Öffnen Sie den **Workspace**, um Signale, Readiness und Projektblockaden zu prüfen.
4. Öffnen Sie das **AI Log**, wenn der Zweifel auf einen Run, eine Ausgabe oder einen tatsächlich genutzten Anbieter gerichtet ist.
5. Wenn das Dashboard lädt, aber eine zusätzliche Überprüfung anfordert, öffnen Sie den **Health indicator** bevor Sie zu den angezeigten Daten schließen.

![Top bar and global navigation](/img/screenshots/localized/de/01-navigation-topbar.png)

## Top bar

| Element | Funktion |
| --- | --- |
| Project selector | Ändert das aktuelle Projekt ohne die vollständige Liste zu durchlaufen |
| Command palette | Schnelle Suche nach Seiten und häufigen Aktionen |
| Notifications | Zeigt die vom Produkt gemeldeten Aufmerksamkeitspunkte an |
| Health indicator | Öffnet eine schnelle Ansicht des API-, Echtzeit- und Auth-Status |
| Language | Ändert die Sprache der Oberfläche |
| Theme | Schaltet zwischen hell/dunkel aus |
| Help | Öffnet die integrierten Hilfemeldungen |

## Command palette

Die Command Palette ist für die schnelle Navigation konzipiert.

- **Windows / Linux**: `Ctrl+K`
- **macOS**: `Cmd+K`

Sie filtert die verfügbaren Seiten und Einträge nach **Name** und **Beschreibung**. Verwenden Sie sie, um schnell zum **AI Log**, zur **Platform Administration** oder zu jeder selten geöffneten Route zurückzukehren.

## Benachrichtigungen

Der Benachrichtigungsbereich ist über das Glocken-Symbol in der oberen Leiste zugänglich.

Beobachtete Funktionen:

- Zähler für ungelesene Elemente;
- Dropdown-Paneel;
- **Mark all as read**;
- **Clear all**;
- Klick auf eine Benachrichtigung, um die zugehörige Oberfläche zu öffnen, wenn eine Navigation bereitgestellt wird.

Benachrichtigungen können insbesondere Status von Agenten, Ereignisse der Berichtserstellung, Dokumenten-Uploads und Updates zu Marketplace oder Abonnement enthalten.

## Health indicator

Der Health indicator öffnet ein Quick‑Read‑Panel. Es ermöglicht die Anzeige von:

- API‑Status;
- realtime / WebSocket‑Status;
- Auth‑Status;
- beobachtete Latenz;
- eine Meldung, falls die Oberfläche eine hat;
- dem aktuellen Projekt, wenn der Kontext bei der Statusauswertung wichtig ist.

Öffnen Sie ihn, wenn ein Agent offline erscheint, wenn Benachrichtigungen nicht mehr aktualisiert werden oder wenn eine Verfügbarkeitsprüfung sinnvoll ist.

Wenn das Panel einen degradierenden Zustand anzeigt, während die Oberfläche noch lädt, folgen Sie dieser Lesereihenfolge:

| Wenn das Signal hauptsächlich betrifft… | Öffnen Sie anschließend | Warum |
| --- | --- | --- |
| **authentication** | [Start](./demarrage.md) | um Tenant, Konto, `redirect URI`, Admin‑Gruppe oder Hauptsitz zu unterscheiden |
| **runtime**, API, WebSocket oder Konnektivität | [Maintenance, support and FAQ](./maintenance-support-faq.md) | um den Prüfpfad zwischen Health, KI‑Anbieter, Integrationen und Ausführung zu verfolgen |
| **project context**, ein leerer Bildschirm oder fehlende Aktion | [Projects and workspace](./projets-et-espace-de-travail.md) | um das aktive Projekt, Binding, Readiness und Projektrechte zu prüfen |

Bevor Sie eskalieren, notieren Sie den angezeigten Status für **API**, **realtime**, **auth**, **latency**, **current project** und die ungefähre Testzeit. Diese Angaben erleichtern die Bearbeitung durch das zuständige Team erheblich.

## Projektkontext und leere Zustände

Mehrere Bildschirme von ProPM Agent hängen vom aktiven Projekt ab. In der Praxis:

- **ohne Projekt ausgewählt**, zeigen einige Seiten einen normalen leeren Zustand;
- **mit Projekt ausgewählt**, lädt dieselbe Seite Daten und Aktionen dieses Projekts;
- das Projektwechseln ändert den Inhalt von **Knowledge**, **Agents**, **Reports & artifacts** und **AI Log**.

Diese Kontextabhängigkeit verhindert das Vermischen von Beweisen, Gesprächen und Lieferungen mehrerer Projekte.

## Sprache, Thema und Hilfe

Die Sprache der Oberfläche kann über die obere Leiste geändert werden. Das Thema verbessert den Lesekomfort, hat jedoch keine Auswirkungen auf Projektdaten. Die integrierten Hilfekataloge decken die allgemeine Navigation, Projektseiten, das AI Log und Governance‑Erinnerungen ab.

## Navigations‑Tipps

- Wechseln Sie das Projekt **vor** dem Öffnen eines Agenten oder eines Berichts;
- Nutzen Sie die **Command Palette**, um schnell eine selten genutzte Oberfläche zu finden;
- Kehren Sie zum **Dashboard** zurück, wenn Sie den Überblick verlieren;
- Wenn eine Aktion fehlt, unterscheiden Sie klar zwischen **Read‑Only** und **Zugriff verweigert**;
- Öffnen Sie den **Health indicator**, bevor Sie zu einer Service‑Verfügbarkeitsfrage kommen.

## Weiter

- [Projekte und Workspace](./projets-et-espace-de-travail.md)
- [Knowledge und Agents](./connaissance-et-agents.md)
- [Structured outputs, evidence and freshness](./sorties-contextuelles-preuves-et-fraicheur.md)
- [Reports, AI Log and traceability](./rapports-journal-ia-et-tracabilite.md)
