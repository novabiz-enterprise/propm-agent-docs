---
title: Oberfläche und Navigation
slug: /interface-et-navigation
description: Verständnis der Hauptbildschirme, der Seitenleiste, der oberen Leiste und des Dashboards.
---

[Startseite](./index.md) · [Erste Schritte](./demarrage.md) · [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md)

![ProPM Agent Dashboard](/img/screenshots/localized/de/01-dashboard.png)

## Ziel

Diese Seite erklärt, wie man sich in der ProPM Agent-Oberfläche zurechtfindet, das **Dashboard** liest, die **Befehls-Palette** verwendet, **Benachrichtigungen** interpretiert und das **Systemstatus**-Panel öffnet, wenn ein Vorfall vermutet wird.

## Überblick

Die beobachtete Oberfläche folgt einer einfachen Logik:

1. Die **Seitenleiste** öffnet die großen Funktionsbereiche;
2. Die **obere Leiste** ändert das aktuelle Projekt und öffnet Schnellzugriffswerkzeuge;
3. Die zentrale Fläche zeigt den **aktuellen Kontext** an;
4. Mehrere Bildschirme ändern ihren Zustand basierend auf dem **aktiven Projekt** und Ihren **Berechtigungen**.

## Hauptnavigation

| Eintrag | Hauptverwendung |
| --- | --- |
| Dashboard | Allgemeinen Status und vorgeschlagene nächste Schritte lesen |
| Projekte | Projekte erstellen, öffnen und Projektkontext wechseln |
| Arbeitsbereich | Projektzusammenfassung, Signale, Readiness und Projekteinstellungen |
| Wissen | Referenzdokumente suchen, hochladen und importieren |
| Agenten | Mit verfügbaren Agenten interagieren und strukturierte Ausgaben lesen |
| Berichte & Artefakte | PM Docs überprüfen, vergleichen, veröffentlichen oder herunterladen |
| KI-Protokoll | Runs, Ereignisse und Nachverfolgbarkeits-Metadaten inspizieren |
| Portfolio Command Center | Mehrere Projekte über konfigurierbare Signale vergleichen |
| Plattformadministration | Integrationen, KI-Provider, Abonnement und Plattformaktivität verwalten |

## Dashboard

Das **Dashboard** ist der nützlichste Bildschirm direkt nach der Anmeldung.

Es konsolidiert:

- Situationsmetriken;
- Aufmerksamkeitselemente;
- Empfohlene nächste Schritte;
- Verknüpfungen zu Handlungsbereichen;
- Eine Übersicht über offene Signale und Elemente in Überprüfung.

Nutzen Sie es als **Orientierungsseite**: Wenn kein Projekt aktiv ist, bleiben einige Blöcke leer; wenn ein Projekt ausgewählt ist, kontextualisieren sich die Indikatoren.

### Wie man die Hauptbereiche des Dashboards liest

| Bereich | Was er zusammenfasst | Nützlicher Reflex |
| --- | --- | --- |
| Übersichts-Kacheln | Zähler für Projekte, Wissen, aktive Agenten, offene Signale, Entwürfe von Benachrichtigungen und ausstehende Aktionen | Sofort erkennen, ob es um einen Mangel an Kontext, eine Überprüfungsverzögerung oder eine verwaltete Warteschlange geht |
| Score-Karten | Allgemeiner Zustand von Delivery, Ausführungsgeschwindigkeit, Governance-Abdeckung und Wissenstiefe | Diese Karten als Orientierungspunkte lesen, bevor ein Detailbildschirm geöffnet wird |
| Readiness-Blöcke | Wissensgrundlage, Automatisierungsabdeckung, Governance-Posture und Lieferfluss | Identifizieren, welche Säule die normale Nutzung des Projekts blockiert |
| Panel **Aufmerksamkeit** | Signale, verwaltete Aktionen und Connector-Watchlist | Zum **Arbeitsbereich** gehen, um aktive Blockaden zu behandeln |
| Panel **Pulse** | Letzter Digest, aktuelle Benachrichtigungen, letzte Aktivität und Connector-Status | Überprüfen, was sich gerade geändert hat, ohne die gesamte Projektchronik neu zu lesen |
| Quicklinks | Verknüpfungen zu **Arbeitsbereich**, **Wissen**, **Agenten**, **Berichte & Artefakte**, **KI-Protokoll** und **Portfolio** | Direkt die richtige Oberfläche öffnen, anstatt Bildschirm für Bildschirm zu navigieren |

Die Scores und Indikatoren im Dashboard sollten als **Priorisierungs-Hinweise** gelesen werden, nicht als alleinige, erschöpfende Diagnose.

### Was tun, wenn das Dashboard widersprüchlich erscheint?

1. Bestätigen Sie zuerst das **aktive Projekt** in der oberen Leiste;
2. Betrachten Sie die Karten dann als **Orientierungssignale**, nicht als einzige Wahrheitsquelle;
3. Öffnen Sie den **Arbeitsbereich**, um Signale, Readiness und Projektblockaden zu überprüfen;
4. Öffnen Sie das **KI-Protokoll**, wenn der Zweifel einen Run, eine Ausgabe oder einen tatsächlich verwendeten Provider betrifft;
5. Wenn das Dashboard lädt, aber beeinträchtigt erscheint, öffnen Sie den **Systemstatus-Indikator**, bevor Sie auf eine Dateninkonsistenz schließen.

![Obere Leiste und globale Navigation](/img/screenshots/localized/de/01-navigation-topbar.png)

## Obere Leiste

| Element | Funktion |
| --- | --- |
| Projektauswahl | Ändert das aktuelle Projekt, ohne die vollständige Liste durchgehen zu müssen |
| Befehls-Palette | Schnellsuche auf Seiten und häufigen Aktionen |
| Benachrichtigungen | Zeigt vom Produkt gemeldete Aufmerksamkeitselemente an |
| Systemstatus-Indikator | Öffnet eine schnelle Diagnose zum API-, Echtzeit- und Auth-Status |
| Sprache | Ändert die Sprache der Oberfläche |
| Thema | Wechselt das Erscheinungsbild zwischen hell und dunkel |
| Hilfe | Öffnet die integrierten Hilfenachrichten |

## Befehls-Palette

Die Befehls-Palette ist für die schnelle Navigation konzipiert.

- **Windows / Linux**: `Strg+K`
- **macOS**: `Cmd+K`

Sie filtert verfügbare Seiten und Einträge nach **Name** und **Beschreibung**. Verwenden Sie sie, um schnell zum **KI-Protokoll**, zur **Plattformadministration** oder zu jeder selten geöffneten Route zurückzukehren.

## Benachrichtigungen

Das Benachrichtigungszentrum ist über das Glockensymbol in der oberen Leiste erreichbar.

Beobachtete Funktionen:

- Zähler ungelesener Elemente;
- Ausklappbares Panel;
- **Alle als gelesen markieren**;
- **Alle löschen**;
- Klick auf eine Benachrichtigung, um die verknüpfte Oberfläche zu öffnen, wenn eine Navigation bereitgestellt wird.

Benachrichtigungen können u.a. Agent-Status, Berichtserstellungsereignisse, Dokumenten-Uploads und Updates im Zusammenhang mit Marketplace oder Abonnement melden.

## Systemstatus-Indikator

Der Systemstatus-Indikator öffnet ein Panel für eine schnelle Diagnose. Er ermöglicht die Überprüfung von:

- dem **API**-Status;
- dem **Echtzeit- / WebSocket**-Status;
- dem **Auth**-Status;
- der beobachteten **Latenz**;
- einem eventuellen Fehlertext;
- dem aktuellen Projekt, wenn der Kontext für die Diagnose relevant ist.

Öffnen Sie ihn, wenn ein Agent **offline** erscheint, Benachrichtigungen nicht mehr aktualisiert werden oder die Anwendung verfügbar, aber teilweise beeinträchtigt zu sein scheint.

Wenn das Panel einen beeinträchtigten Zustand anzeigt, während die Oberfläche noch lädt, halten Sie sich an diese Lesereihenfolge:

| Wenn das Signal hauptsächlich betrifft… | Öffnen Sie danach | Warum |
| --- | --- | --- |
| die **Authentifizierung** | [Erste Schritte](./demarrage.md) | um Tenant, Konto, `redirect URI`, Admin-Gruppe oder Sitz zu unterscheiden |
| die **Laufzeitumgebung**, API, WebSocket oder Konnektivität | [Wartung, Support und FAQ](./maintenance-support-faq.md) | um den Abhilfeprozess zwischen Systemstatus, Provider, Integrationen und Ausführung zu verfolgen |
| den **Projektkontext**, einen leeren Bildschirm oder eine fehlende Aktion | [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md) | um das aktive Projekt, das Binding, die Readiness und die Projektberechtigungen zu überprüfen |

Bevor Sie eskalieren, notieren Sie den angezeigten Status für **API**, **Echtzeit**, **Auth**, die **Latenz**, das **aktuelle Projekt** und die ungefähre Uhrzeit des Tests. Diese Elemente verkürzen die Support-Diagnose erheblich.

## Projektkontext und leere Zustände

Mehrere Bildschirme von ProPM Agent sind mit dem aktiven Projekt verknüpft. In der Praxis:

- **Ohne ausgewähltes Projekt** zeigen einige Seiten einen normalen leeren Zustand an;
- **Mit ausgewähltem Projekt** lädt dieselbe Seite die Daten und Aktionen dieses Projekts;
- Der Projektwechsel ändert den Inhalt von **Wissen**, **Agenten**, **Berichte & Artefakte** und **KI-Protokoll**.

Diese Kontextabhängigkeit vermeidet es, Nachweise, Konversationen und Liefergegenstände mehrerer Projekte zu vermischen.

## Sprache, Thema und Hilfe

Die Oberflächensprache kann über die obere Leiste geändert werden. Der Themenwechsel verbessert den Lesekomfort, ohne Auswirkungen auf die Projektdaten. Die integrierten Hilfekataloge decken die allgemeine Navigation, Projektseiten, das KI-Protokoll und Governance-Erinnerungen ab.

## Navigations-Tipps

- Wechseln Sie das Projekt, **bevor** Sie einen Agenten oder Bericht öffnen;
- Verwenden Sie die **Befehls-Palette**, um schnell eine selten genutzte Oberfläche wiederzufinden;
- Kehren Sie zum **Dashboard** zurück, wenn Sie den Faden verlieren;
- Wenn eine Aktion fehlt, unterscheiden Sie klar zwischen **Nur-Lesen** und **Zugriff verweigert**;
- Öffnen Sie den **Systemstatus-Indikator**, bevor Sie auf einen Backend-Vorfall schließen.

## Nächste Schritte

- [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md)
- [Wissen und Agenten](./connaissance-et-agents.md)
- [Strukturierte Ausgaben, Nachweise und Aktualität](./sorties-contextuelles-preuves-et-fraicheur.md)
- [Berichte, KI-Protokoll und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md)
