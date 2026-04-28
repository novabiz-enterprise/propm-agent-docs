---
title: Connectoren und Integrationen
slug: /connecteurs-jira-et-sharepoint
description: Alle in ProPM Agent sichtbaren Connectoren, ihre Vorteile, ihre Anwendungsfälle und ihre Einbindung in die Plattform verstehen.
---

[Startseite](./index.md) · [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md) · [Governance, Entscheidungen und Aktionen](./gouvernance-decisions-et-actions.md) · [Portfolio und technische Verwaltung](./portefeuille-et-administration-technique.md)

![Jira- und SharePoint-Workflow zwischen Plattform, Projekt und Aktionen](/img/diagrams/de/connecteurs-jira-sharepoint-workflow.svg)

## Ziel

Diese Seite erklärt **alle sichtbaren Connectoren und Ingestionsanbieter in ProPM Agent**, ihre Vorteile, ihre geschäftliche Nützlichkeit und wie sie in das Produkt integriert werden.

Das Ziel ist es, drei einfache Fragen zu beantworten:

1. **Wozu dient dieser Connector?**
2. **Wo sieht man ihn in ProPM Agent?**
3. **Wie geht man von einem deklarierten Connector zu einem tatsächlich nutzbaren Connector über?**

## Einen Connector in ProPM Agent verstehen

Ein Connector ist eine **kontrollierte Brücke** zwischen ProPM Agent und einem anderen Unternehmenswerkzeug.

Im Produkt kann ein Connector drei verschiedene Dinge tun:

| Typ | Zweck | Beispiel |
| --- | --- | --- |
| **Ausführungs-Connector** | eine Aktion an ein externes Tool senden | ein Jira-Ticket erstellen, eine Teams-Nachricht senden, in SharePoint veröffentlichen |
| **Ingestionsanbieter** | Inhalt in das Wissen importieren | SharePoint-Dokumente, Confluence-Seiten, Azure DevOps Work Items importieren |
| **Artefaktziel** | ein überarbeitetes Deliverable in ein Ziel veröffentlichen | ein PM-Dokument in SharePoint veröffentlichen |

### Einfache Regel zum Behalten

- **Importieren** ist nicht dasselbe wie **Veröffentlichen**.  
- **Ein Connector sehen** ist nicht dasselbe wie ihn **ausführen** zu können.  
- Ein Connector kann auf **Plattformebene** existieren, ohne noch für ein Projekt geöffnet zu sein.

## Wie ein Connector in ProPM Agent integriert wird

Unabhängig vom Connector ist der logische Ablauf immer gleich:

1. Der Administrator bereitet ihn in **Platform Administration** vor;  
2. Er validiert die Konfiguration und Konnektivität;  
3. Der Connector wird in **Project Integrations** verfügbar gemacht;  
4. Die **Governance Policies** bestimmen, wer ihn nutzen kann und auf welcher Ebene;  
5. Das Team nutzt ihn anschließend in **Knowledge**, **PM Documents** oder **Actions & approvals**;  
6. Die endgültige Spur bleibt in der **Project Activity** und im **Journal IA** sichtbar.

## Wo der Benutzer die Connectoren im Produkt sieht

| Oberfläche | Was dort gemacht wird |
| --- | --- |
| **Platform Administration** | technische Definition erstellen, Authentifizierung angeben, validieren und testen |
| **Project Integrations** | prüfen, welche Connectoren tatsächlich für das aktuelle Projekt geöffnet sind |
| **Knowledge** | Dokumente, Seiten, Tickets, Work Items oder andere Quellen importieren |
| **Governance Policies** | entscheiden, welche Rollen Aktionen beobachten, vorschlagen oder ausführen dürfen |
| **Actions & approvals** | eine reale Aktion erstellen, genehmigen und ausführen |
| **Journal IA / activity** | den Fluss und die Ausführungen nachvollziehen |

## Drei Ebenen, die nicht verwechselt werden sollten

| Ebene | Was das bedeutet | Richtiges Lesen |
| --- | --- | --- |
| **Platform** | Der Connector existiert technisch | er ist definiert, authentifiziert und global kontrolliert |
| **Project** | Der Connector ist für ein bestimmtes Projekt geöffnet | das Projekt kann ihn als potenzielle Option sehen |
| **Governed usage** | Der Connector kann in einem realen Fluss verwendet werden | der Benutzer hat die richtige Rolle, die richtige Politik und eine gesunde Ausführungsoption |

## Sichtbare Ausführungs-Connectoren

Ausführungs-Connectoren dienen dazu, **eine Aktion** von ProPM Agent an ein externes Tool zu senden.

Der Bildschirm **Projektintegrationen** zeigt diese aktivierten Ausführungs-Connectoren als bindbar, wenn sie noch nicht mit dem Projekt verknüpft sind.

### Aktueller Katalog der Ausführungs-Connectoren

| Connector in der Oberfläche | Hauptnutzen | Typische Projektaktion |
| --- | --- | --- |
| **Asta Powerproject schedule sync** | Unternehmenspläne und Baselines synchronisieren | binden, wenn Terminplanänderungen über einen gouvernierten Projektkanal laufen müssen |
| **Azure DevOps delivery project** | Work Items erstellen oder aktualisieren und Delivery nachverfolgen | binden für Teams mit Boards, Sprints oder Delivery-Backlogs |
| **Jira delivery workspace** | Issues und Delivery-Follow-up erstellen oder aktualisieren | binden, wenn Risiken, Blockaden oder Entscheidungen zu gouvernierten Jira-Tickets werden sollen |
| **Microsoft Project schedule sync** | Microsoft-Project-Terminpläne synchronisieren | binden, wenn der Masterplan in Microsoft Project gepflegt wird |
| **Microsoft Teams collaboration** | gouvernierte Kollaborationsnachrichten und Genehmigungsbenachrichtigungen senden | binden für kontrollierte Team-Benachrichtigungen |
| **Outlook executive notifications** | gouvernierte E-Mails oder Stakeholder-Updates senden | binden für formelle Kommunikation an benannte Empfänger |
| **SharePoint publication library** | geprüfte Artefakte in eine SharePoint-Bibliothek veröffentlichen | binden, wenn genehmigte PM-Lieferobjekte über SharePoint verteilt werden |
| **Smartsheet portfolio workspace** | Portfolio-Sheets und Workspace-Daten aktualisieren | binden, wenn Portfolio-Tracking in Smartsheet erfolgt |
| **Webhook event delivery** | einen bestimmten Enterprise- oder internen Endpoint aufrufen | binden für kundenspezifische nachgelagerte Automatisierung |
| **Wrike delivery workspace** | Aufgaben, Verantwortliche und Delivery-Koordination aktualisieren | binden, wenn Wrike die operative Delivery-Arbeit trägt |

## Sichtbare Ingestionsanbieter

Ingestionsanbieter dienen dazu, **Inhalt in ProPM Agent zu bringen**, um das **Wissen** zu bereichern.

Der Projektbildschirm trennt bereits gebundene Anbieter von Anbietern **Available to bind**. Zähler variieren je Tenant, aber die Oberfläche unterscheidet gesunde Bindings von Katalogeinträgen, die noch Projektbindung oder Plattformkonfiguration benötigen.

### Aktueller Katalog der Ingestionsanbieter

| Anbieter in der Oberfläche | Angezeigter Modus oder Quelle | Hauptnutzen | Readiness-Hinweis |
| --- | --- | --- | --- |
| **Smartsheet sheet import** | Smartsheet · Scheduled | Portfolio-Sheets in Wissen aktualisieren | kann als gebunden und **Healthy** erscheinen |
| **Azure Data Factory evidence pipeline** | ADF · Pipeline | Nachweise, RAID und Reporting-Refreshes importieren | kann als gebunden und **Healthy** erscheinen |
| **Asta Powerproject schedule import** | Asta Powerproject Import · Manual | Terminplan-Snapshots und Baselines importieren | bindbar, wenn **Ready** |
| **Azure Blob document ingest** | Blob Storage · Scheduled | gouvernierte Dokumentablagen und Archiv-Refreshes ingestieren | bindbar, wenn **Ready** |
| **Confluence knowledge import** | Confluence · Manual | Wiki-Seiten und Prozesswissen importieren | kann **Not configured** anzeigen, bis die Quelle vollständig ist |
| **Jira issue import** | Jira · Scheduled | Issues, Blockaden und Follow-up-Nachweise importieren | kann **Not configured** anzeigen, bis die Quelle vollständig ist |
| **Microsoft Project schedule import** | MS Project Import · Manual | Terminplan-Baselines und Aktualisierungen importieren | bindbar, wenn **Ready** |
| **SFTP document intake** | SFTP · Scheduled | Dokumentablagen von Dritten importieren | kann **Not configured** anzeigen, bis Host, Ordner und Zugangsdaten vollständig sind |
| **SharePoint knowledge import** | SharePoint · Manual | Wissensbibliotheken und Reporting-Artefakte importieren | bindbar nach Einrichtung von Site und Bibliothek |
| **Wrike task import** | Wrike · Scheduled | Aufgaben, Verantwortliche und Workflow-Nachweise importieren | bindbar nach Workspace-Einrichtung |

## Connectoren, die in mehreren Rollen vorkommen

Einige Namen erscheinen an mehreren Stellen im Produkt. Das ist normal: Importanbieter und Ausführungs-Connector bleiben getrennte Bindings.

| Familie | Importrolle | Ausführungsrolle | Richtiges Lesen |
| --- | --- | --- | --- |
| **SharePoint** | **SharePoint knowledge import** | **SharePoint publication library** | kann Dokumente lesen und ein geprüftes Artefakt veröffentlichen, aber jede Rolle hat eigenes Setup und Binding |
| **Jira** | **Jira issue import** | **Jira delivery workspace** | kann Jira-Kontext importieren und anschließend ein gouverniertes Ticket erstellen, wenn auch der Ausführungs-Connector gebunden ist |
| **Microsoft Project** | **Microsoft Project schedule import** | **Microsoft Project schedule sync** | kann Terminplan-Nachweise in Wissen bringen und gouvernierte Planänderungen synchronisieren |
| **Smartsheet** | **Smartsheet sheet import** | **Smartsheet portfolio workspace** | kann Portfolio-Nachweise aktualisieren und Smartsheet als Ausführungsziel aktualisieren |
| **Wrike** | **Wrike task import** | **Wrike delivery workspace** | kann operative Aufgaben-Nachweise importieren und Wrike-Aufgaben über gouvernierte Aktionen aktualisieren |
| **Asta Powerproject** | **Asta Powerproject schedule import** | **Asta Powerproject schedule sync** | kann Terminplan-Snapshots importieren und kontrollierte Planänderungen synchronisieren |
| **Azure DevOps** | — | **Azure DevOps delivery project** | als Ausführungs-Connector verfügbar; ein Importpfad sollte separat validiert werden, wenn er verfügbar ist |
| **ADF / Blob / Confluence / SFTP** | nur Ingestionsanbieter | — | sie bereichern **Wissen** und werden nicht automatisch zu Aktionszielen |
| **Teams / Outlook / Webhook** | — | nur Ausführungs-Connector | sie senden gouvernierte Nachrichten oder Ereignisse und importieren nicht automatisch Wissen |

## Beispiel 1 — SharePoint von Anfang bis Ende

SharePoint ist eines der besten Beispiele, um die komplette Logik zu verstehen.

### Was SharePoint tun kann

- Dokumente in **Knowledge** importieren;  
- als **Artefaktziel** dienen;  
- eine **gouvernierte Veröffentlichung** über **SharePoint publish** empfangen.

### Schritt-für-Schritt-Prozess

1. Der Administrator bereitet SharePoint in **Platform Administration** vor;  
2. Das Projekt holt das SharePoint-Binding in **Project Integrations**;  
3. Das Team importiert vorhandene Dokumente in **Knowledge**;  
4. Ein PM-Dokument wird verfasst oder überarbeitet;  
5. Eine Governance-Politik entscheidet, wer eine Veröffentlichung vorschlagen oder ausführen darf;  
6. Die Veröffentlichung passiert über **Actions & approvals**, falls eine Validierung erforderlich ist;  
7. Die endgültige Spur bleibt in der Projektaktivität und im **Journal IA** sichtbar.

### Vorteile von SharePoint in ProPM Agent

- nutzt ein bereits bekanntes Dokumentenrepository der Teams;  
- ermöglicht Import, Dokumentenprüfung und finale Veröffentlichung;  
- eignet sich gut für formale Validierungsabläufe.

## Beispiel 2 — Jira von Anfang bis Ende

### Was Jira tun kann

- Issues und Kommentare als Kontext importieren;  
- ein genehmigtes Ticket aus einer Entscheidung oder einem Signal erhalten;  
- ein Blockieren in einem externen Tracking-System materialisieren.

### Schritt-für-Schritt-Prozess

1. Jira wird in **Platform Administration** vorbereitet;  
2. Es wird im Projekt in **Project Integrations** geöffnet;  
3. Das Team prüft ein Signal oder eine Entscheidung;  
4. Es erstellt eine Aktion **Create a Jira ticket**;  
5. Die Governance entscheidet, ob die Aktion direkt oder genehmigungsabhängig ist;  
6. Das Ticket wird ausgeführt und im Produkt verfolgt.

### Vorteile von Jira in ProPM Agent

- wandelt ein Projektbeobachtung in ein formelles Ticket um;  
- behält eine klare Spur zwischen Signal, Begründung und erstelltem Ticket;  
- vermeidet ungetrackte manuelle Aktionen.

## Beispiel 3 — Teams oder Outlook für die Verbreitung

### Nutzen

- **Teams** dient zur Verbreitung einer Benachrichtigung im kollaborativen Tool;  
- **Outlook** dient zum Versand einer formelleren Kommunikation per E‑Mail.

### Integration mit ProPM Agent

1. Der Connector wird auf Plattformebene vorbereitet;  
2. Das Projekt sieht ihn als Ausführungsoption;  
3. Eine Politik definiert, welche Rollen eine Nachricht senden dürfen;  
4. Das Team bereitet die Nachricht in **Actions & approvals** vor;  
5. Je nach Risiko wird die Aktion genehmigt und ausgeführt;  
6. Die Nachricht wird historisiert.

### Hauptvorteil

Die Verbreitung erfolgt nicht als freie Nachricht, sondern bleibt **gouverniert, geprüft und nachvollziehbar**.

## Beispiel 4 — Webhook event delivery

### Wann verwenden

Verwenden Sie **Webhook**, wenn das Unternehmen Daten an ein Tool senden oder von einem Tool empfangen möchte, das keinen dedizierten Connector hat.

### Integration mit ProPM Agent

- als **Ingest** kann ein Webhook Inhalte in das Wissen pushen;  
- als **Ausführung** kann ein Webhook eine Aktion an ein Dritt- oder internes System senden;  
- in beiden Fällen ist es ratsam, ihn als **gouvernierte** Ausgabe zu behandeln, nicht als freie Ausgabe.

### Hauptvorteil

Webhook delivery bietet Flexibilität für kundenspezifische Automatisierung, ohne den Fluss zu einer unkontrollierten Ausgabe zu machen.

## Wie man erkennt, ob ein Connector wirklich bereit ist

Um den Connector-Status richtig zu lesen, unterscheiden Sie drei einfache Zustände:

| Situation | Was das bedeutet |
| --- | --- |
| Der Connector ist in **Platform Administration** sichtbar | er existiert technisch |
| Der Connector ist in **Project Integrations** sichtbar | das Projekt kann ihn potenziell nutzen |
| Der Connector erscheint in **Actions & approvals** als gesunde und autorisierte Option | die Aktion kann tatsächlich vorgeschlagen oder ausgeführt werden |

## Warum ein sichtbarer Connector blockiert bleiben kann

Ein Connector kann sichtbar, aber nicht nutzbar sein, wenn:

- sein **Health** eine Überprüfung erfordert;  
- das Projekt nicht die richtige **Entitlement** hat;  
- die **Policy** des Projekts die Nutzung blockiert;  
- der Benutzer nicht die richtige **Permission** hat;  
- das Projekt-Binding noch nicht geöffnet wurde;  
- das erwartete Artefaktziel nicht konfiguriert ist.

## Einfache Lesung

| Wenn Sie beobachten… | Überprüfen Sie zuerst… |
| --- | --- |
| Der Connector existiert auf Plattformebene, erscheint aber nicht im Projekt | **Project Integrations** |
| Er erscheint im Projekt, aber keine Aktion wird ausgelöst | **Governance Policies** und Rollenberechtigungen |
| Die Aktion ist sichtbar, aber keine gesunde Option erscheint | Health des Connectors, Projekt-Binding und kompatible Ausführungsoption |
| Der Import wird vorgeschlagen, liefert aber nichts | Ingestionsanbieter, tatsächlich zugängliche Quelle und Datenfrische |
| Die SharePoint-Veröffentlichung ist noch nicht abgeschlossen | Artefaktziel, Politik, Genehmigung und **SharePoint publish** |

## Empfohlener Workflow für Ihr Team

1. Identifizieren Sie die wirklich nützlichen Tools für das Projekt;  
2. Bereiten Sie die Connectoren in **Platform Administration** vor;  
3. Öffnen Sie nur die Connectoren, die bereit sind, im Projekt;  
4. Richten Sie die **Governance Policies** nach Rollen ein;  
5. Testen Sie einen ersten Import oder eine erste Aktion;  
6. Prüfen Sie die endgültige Spur im **Journal IA**.

## Zu behalten

- ProPM Agent unterscheidet klar zwischen **Import**, **Veröffentlichung** und **externer Aktion**;  
- ein gleicher Name, wie **SharePoint** oder **Jira**, kann in mehreren Rollen erscheinen;  
- die richtige Lesung eines Connectors beruht immer auf drei Fragen: **ist er definiert? ist er im Projekt geöffnet? ist er durch Governance autorisiert?**

## Weiter

- [Governance, Entscheidungen und Aktionen](./gouvernance-decisions-et-actions.md)  
- [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md)  
- [Portfolio und technische Verwaltung](./portefeuille-et-administration-technique.md)  
- [Berichte, Journal IA und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md)
