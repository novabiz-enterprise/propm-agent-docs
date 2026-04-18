---
title: Connectoren und Integrationen
slug: /connecteurs-jira-et-sharepoint
description: Alle in ProPM Agent sichtbaren Connectoren, ihre Vorteile, ihre Anwendungsfälle und ihre Einbindung in die Plattform verstehen.
---

[Startseite](./index.md) · [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md) · [Governance, Entscheidungen und Aktionen](./gouvernance-decisions-et-actions.md) · [Portfolio und technische Verwaltung](./portefeuille-et-administration-technique.md)

![Jira- und SharePoint-Workflow zwischen Plattform, Projekt und Aktionen](/img/diagrams/fr/connecteurs-jira-sharepoint-workflow.svg)

## Ziel

Diese Seite erklärt **alle sichtbaren Connectoren und Ingestionsanbieter in ProPM Agent**, ihre Vorteile, ihre geschäftliche Nützlichkeit und wie sie in das Produkt integriert werden.

Das Ziel ist es, drei einfache Fragen zu beantworten:

1. **Wozu dient dieser Connector?**
2. **Wo sieht man ihn in ProPM Agent?**
3. **Wie geht man von einem deklarierten Connector zu einem tatsächlich nutzbaren Connector über?**

## Für einen Anfänger: Was ist ein Connector in ProPM Agent?

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

### Vollständige Tabelle der Ausführungs-Connectoren

| Connector | Hauptnutzen | Hauptvorteil | Typische Integration in ProPM Agent |
| --- | --- | --- | --- |
| **Jira** | Tickets, Kommentare und Lieferverfolgung erstellen oder aktualisieren | sehr nützlich, um ein Blockieren oder eine Nachverfolgungsaktion zu formalieren | vorbereitet in **Platform Administration**, exponiert in **Project Integrations**, verwendet in **Actions & approvals** |
| **Azure DevOps** | Work Items erstellen oder aktualisieren und Lieferung verfolgen | gute Wahl für Teams, die bereits um Boards und Sprints organisiert sind | gleiche Logik wie Jira, mit Projektintegration und Aktionsdatei |
| **GitHub** | Issues erstellen oder Repository-Workflows ansteuern | praktisch, um ein Projektthema mit einem technischen Backlog zu verknüpfen | als Ausführungs-Connector, vor Projektgouvernanz |
| **GitLab** | Issues, Merge Requests und DevSecOps-Handoffs verwalten | nützlich für Organisationen, die bereits in GitLab operieren | an die Plattform angebunden und für Governance-Aktionen verwendet |
| **ServiceNow** | Service-, Support- oder Genehmigungstickets erstellen | sehr nützlich, wenn die Projektausgabe in einen ITSM-Workflow eintritt | als kontrollierte Ausgabe zu Serviceprozessen |
| **Monday.com** | Pläne und Team-Boards synchronisieren | nützlich für Teams, die die Lieferung in Monday.com steuern | Ausführungs-Connector, nach technischer Definition verfügbar |
| **Asana** | Aufgaben und Verantwortliche erstellen oder aktualisieren | praktisch für die Nachverfolgung leichter und verteilter Aktionen | exponiert im Projekt als externes Aktionsverfolgungstool |
| **ClickUp** | Listen, Aufgaben und Arbeitsstatus verknüpfen | nützlich, um Teamaufgaben in ClickUp zu zentralisieren | als kontrollierte Ausführungs-Ausgabe integriert |
| **Wrike** | Aufgaben, Validierungen und Arbeitspläne steuern | relevant für Unternehmensabläufe mit Koordination und Genehmigung | als Ausführungs-Connector, wenn im Projekt geöffnet |
| **Microsoft Teams** | Benachrichtigung oder Erinnerung in Teams senden | praktisch, um schnell eine Entscheidung oder Warnung zu verbreiten | erscheint in **Actions & approvals** für kontrollierte Nachrichten |
| **Slack** | Update oder Genehmigungsanfrage senden | nützlich für Organisationen, die hauptsächlich in Slack zusammenarbeiten | gleiche Logik wie Teams mit Politik- und Berechtigungssteuerung |
| **Outlook** | E‑Mail oder kontrollierte Erinnerung senden | nützlich für formelle Kommunikation an bestimmte Empfänger | verwendet in **Actions & approvals** mit Empfängersteuerung |
| **SharePoint publish** | Artefakt oder überarbeitetes Dokument in SharePoint veröffentlichen | sehr nützlich, um ein validiertes Deliverable in eine Zielbibliothek zu verbreiten | verbunden mit einem Artefaktziel und gesteuert durch **Actions & approvals** |
| **Notion** | Notizen- oder Arbeitsbereiche aktualisieren | nützlich, wenn das Team seine operativen Notizen in Notion hält | als kontrollierte Ausgabe zur Befüllung eines gemeinsamen Bereichs |
| **Trello** | Karten erstellen oder verfolgen | praktisch für Teams, die ein einfaches und leichtes Backlog nutzen | als Ausführungs-Ausgabe zu Trello-Boards integriert |
| **Webhook** | ein spezifisches Unternehmenswerkzeug ansprechen | sehr flexibel für maßgeschneiderte Bedürfnisse | als kontrollierte Ausgabe zu einem Dritt- oder internen System |

## Sichtbare Ingestionsanbieter

Ingestionsanbieter dienen dazu, **Inhalt in ProPM Agent zu bringen**, um das **Wissen** zu bereichern.

### Vollständige Tabelle der Ingestionsanbieter

| Anbieter | Hauptnutzen | Hauptvorteil | Typische Integration in ProPM Agent |
| --- | --- | --- | --- |
| **SharePoint** | Dokumente, Listen und Microsoft 365-Beweise importieren | sehr nützlich, um bereits vorhandene Referenzdokumente zu holen | auf Plattformebene vorbereitet, dann in **Knowledge** und **Project Integrations** verwendet |
| **Confluence** | Wiki-Seiten, Notizen und Wissensbasen importieren | praktisch, um Arbeitshandbücher zu holen | versorgt **Knowledge** mit strukturiertem Text |
| **Jira** | Issues, Kommentare und Lieferhistorie importieren | verbindet den operativen Kontext des Projekts und des Backlogs | als Kontextquelle für **Knowledge** |
| **Azure DevOps** | Work Items, Sprint-Elemente und Lieferartefakte importieren | nützlich, um Projektsteuerung und Lieferung zu verknüpfen | bereichert das Wissen mit Boards-/Sprint-Informationen |
| **Google Drive** | Dateien und freigegebene Ordner indexieren | nützlich für Google Workspace-Organisationen | ermöglicht die Integration von Arbeitsdateien in das Wissen |
| **OneDrive** | Persönliche oder Teamdateien importieren | praktisch, um Microsoft 365-Dokumente außerhalb von SharePoint zu holen | versorgt das Wissen aus OneDrive‑Bereichen |
| **Box** | Unternehmensdokumenten-Repositorien verbinden | nützlich in Umgebungen, die ihre Dokumentenverwaltung auf Box standardisieren | dient als Importquelle für das Wissen |
| **Dropbox** | Ordner und freigegebene Inhalte importieren | praktisch, wenn die Organisation noch Inhalte in Dropbox speichert | liefert Dokumentationsquellen für das Wissen |
| **Notion** | Räume, Seiten und operative Notizen indexieren | sehr nützlich, wenn das Projektwissen in Notion verteilt ist | versorgt das Wissen mit strukturierten Seiten und Notizen |
| **Amazon S3** | Dateien oder Artefakte aus Buckets importieren | nützlich, um generierte oder archivierte Deliverables zu holen | Quelle für Dokumente und Artefakte |
| **Upload manuel** | Dateien direkt in ProPM Agent hochladen | ideal, um schnell ohne externen Connector zu starten | das Team lädt selbst die nützlichen Dateien in das Wissen |
| **Webhook** | Inhalt von einem maßgeschneiderten Unternehmensfluss empfangen | sehr flexibel, wenn das Quellwerkzeug keinen Standard-Connector hat | dient als benutzerdefinierte Eingabe für das Wissen |

## Connectoren, die in mehreren Rollen vorkommen

Einige Namen erscheinen an mehreren Stellen im Produkt. Das ist normal.

| Familie | Kann importieren? | Kann eine Aktion ausführen? | Richtiges Lesen |
| --- | --- | --- | --- |
| **SharePoint** | ja | ja, über **SharePoint publish** | kann sowohl Dokumente lesen als auch ein überarbeitetes Artefakt veröffentlichen |
| **Jira** | ja | ja | kann Jira-Kontext importieren und ein genehmigtes Ticket erstellen |
| **Azure DevOps** | ja | ja | kann Work Items importieren und anschließend erstellen oder aktualisieren |
| **Notion** | ja | ja, je nach Konfiguration | kann Seiten lesen und auch einen gemeinsamen Bereich füttern |
| **Webhook** | ja | ja | kann als Eingabe oder Ausgabe je nach konfiguriertem Fluss dienen |

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

## Beispiel 4 — Webhook für ein spezifisches Unternehmenswerkzeug

### Wann verwenden

Verwenden Sie **Webhook**, wenn das Unternehmen Daten an ein Tool senden oder von einem Tool empfangen möchte, das keinen dedizierten Connector hat.

### Integration mit ProPM Agent

- als **Ingest** kann ein Webhook Inhalte in das Wissen pushen;  
- als **Ausführung** kann ein Webhook eine Aktion an ein Dritt- oder internes System senden;  
- in beiden Fällen ist es ratsam, ihn als **gouvernierte** Ausgabe zu behandeln, nicht als freie Ausgabe.

### Hauptvorteil

Der Webhook bietet Flexibilität, ohne dass das Produkt alle Unternehmenswerkzeuge nativ kennen muss.

## Wie man erkennt, ob ein Connector wirklich bereit ist

Für einen Anfänger muss man drei einfache Zustände unterscheiden:

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

## Einfache Lesung für einen Anfänger

| Wenn Sie beobachten… | Überprüfen Sie zuerst… |
| --- | --- |
| Der Connector existiert auf Plattformebene, erscheint aber nicht im Projekt | **Project Integrations** |
| Er erscheint im Projekt, aber keine Aktion wird ausgelöst | **Governance Policies** und Rollenberechtigungen |
| Die Aktion ist sichtbar, aber keine gesunde Option erscheint | Health des Connectors, Projekt-Binding und kompatible Ausführungsoption |
| Der Import wird vorgeschlagen, liefert aber nichts | Ingestionsanbieter, tatsächlich zugängliche Quelle und Datenfrische |
| Die SharePoint-Veröffentlichung ist noch nicht abgeschlossen | Artefaktziel, Politik, Genehmigung und **SharePoint publish** |

## Empfohlener Workflow für einen Kunden

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
