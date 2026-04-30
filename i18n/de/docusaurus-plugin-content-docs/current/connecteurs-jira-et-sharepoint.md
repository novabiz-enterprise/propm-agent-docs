---
title: Connectoren und Integrationen
slug: /connecteurs-jira-et-sharepoint
description: Alle in ProPM Agent sichtbaren Connectoren, ihre Vorteile, ihre Anwendungsfälle und ihre Einbindung in die Plattform verstehen.
---

[Startseite](./index.md) · [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md) · [Governance, Entscheidungen und Aktionen](./gouvernance-decisions-et-actions.md) · [Portfolio und technische Verwaltung](./portefeuille-et-administration-technique.md)

![Jira- und SharePoint-Workflow zwischen Plattform, Projekt und Aktionen](/img/diagrams/de/connecteurs-jira-sharepoint-workflow.svg)

## Ziel

Diese Seite erklärt den **operativen Katalog der in ProPM Agent unterstützten Connectoren und Ingestionsanbieter**, ihre Vorteile, ihre geschäftliche Nützlichkeit und wie sie in das Produkt integriert werden. Einige Verwaltungslisten können zusätzlich erweiterbare oder kundenspezifische Familien anzeigen, die vor realer Nutzung weitere Konfiguration und Validierung benötigen.

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
2. Er validiert die Konfiguration und, wenn aktiviert, die reale Konnektivität;
3. Der Connector wird in **Project Integrations** verfügbar gemacht;
4. Die **Governance Policies** bestimmen, wer ihn nutzen kann und auf welcher Ebene;
5. Das Team nutzt ihn anschließend in **Knowledge**, **PM Documents** oder **Actions & approvals**;
6. Die endgültige Spur bleibt in der **Project Activity** und im **Journal IA** sichtbar.

## Wo der Benutzer die Connectoren im Produkt sieht

| Oberfläche | Was dort gemacht wird |
| --- | --- |
| **Platform Administration** | technische Definition erstellen, Authentifizierung angeben, validieren, je Anbieter testen und bei Bedarf Probes aktivieren |
| **Project Integrations** | prüfen, welche Connectoren tatsächlich für das aktuelle Projekt geöffnet sind |
| **Knowledge** | Dokumente, Seiten, Tickets, Work Items oder andere Quellen je verfügbarem Anbieter importieren |
| **Governance Policies** | entscheiden, welche Rollen Aktionen beobachten, vorschlagen oder ausführen dürfen |
| **Actions & approvals** | eine Aktionsanfrage vorbereiten, genehmigen lassen und ausführen, wenn der Connector-Modus dies erlaubt |
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

## Unterstützter Katalog vs. erweiterbare Optionen

Der obige Katalog ist der operative Katalog, der aktuell initialisiert, geprüft und in **Project Integrations** angezeigt wird. **Platform Administration** kann zusätzlich weitere oder kundenspezifische Familien wie GitHub, GitLab, ServiceNow, Slack, Notion, Google Drive, OneDrive, Box oder Dropbox anzeigen.

Behandeln Sie diese zusätzlichen Einträge als Erweiterungen, bis ein Administrator technische Definition, Pflichtfelder, Authentifizierungsstrategie, Validierung, Projekt-Binding und passende Governance-Policy bestätigt hat.

## Mindestkonfiguration je Ausführungs-Connector

Die folgenden Felder sind vor einer Nutzung in `test` oder `live` mindestens auszufüllen. Die Feldnamen können je Formular leicht variieren, aber das Prinzip bleibt gleich: ein Ziel, eine Authentifizierungsidentität und ein explizites Projektziel.

| Connector | Mindestfelder vor test/live-Nutzung | Typische Authentifizierung | Connectivity-Probe, wenn aktiviert |
| --- | --- | --- | --- |
| **Jira delivery workspace** | `base_url` oder `site_url`, `project_key` | API key, basic, PAT, bearer token oder OAuth | liest das Zielprojekt in Jira |
| **Azure DevOps delivery project** | `organization_url` oder `organization`, `project`, `work_item_type` | PAT, bearer token oder OAuth | prüft den Work-Item-Typ im Projekt |
| **Microsoft Teams collaboration** | `team_id`, `channel_id` | Microsoft Graph mit bearer token, OAuth, client credentials oder managed identity | liest den Zielkanal in Teams |
| **Outlook executive notifications** | `mailbox`, `user_id` oder `user_principal_name` | Microsoft Graph mit bearer token, OAuth, client credentials oder managed identity | prüft Mailbox oder Graph-Benutzer |
| **SharePoint publication library** | `site_id` oder `site_url`, `drive_id` oder `library` | Microsoft Graph mit bearer token, OAuth, client credentials oder managed identity | prüft Site und Bibliothek |
| **Webhook event delivery** | `webhook_url` oder `endpoint_url` über HTTPS | keine Auth, API key, bearer token, basic oder OAuth | sendet `HEAD`, danach bei Bedarf `GET` |
| **Microsoft Project schedule sync** | `project_id`, `portfolio` oder `workspace` | Microsoft Graph mit bearer token, OAuth, client credentials oder managed identity | nutzt den konfigurierten Probe-Endpoint oder Pfad |
| **Smartsheet portfolio workspace** | `sheet_id` oder `workspace_id` | API key, bearer token, OAuth oder PAT | liest Sheet oder Workspace in Smartsheet |
| **Wrike delivery workspace** | `folder_id`, `space_id` oder `task_id` | bearer token oder OAuth | liest Aufgabe oder Ordner in Wrike |
| **Asta Powerproject schedule sync** | `base_url` oder `endpoint_url`, danach `project_id`, `portfolio` oder `schedule_id` | API key, bearer token, OAuth oder basic | nutzt den konfigurierten Probe-Endpoint oder Pfad |

## Mindestkonfiguration je Ingestionsanbieter

Ein Ingestionsanbieter muss Quelle, Importmodus und die Identität zum Lesen dieser Quelle benennen. Geplante Importe benötigen außerdem eine kompatible Kadenz oder Orchestrierung.

| Anbieter | Mindestfelder vor realer Nutzung | Typische Authentifizierung | Connectivity-Probe, wenn aktiviert |
| --- | --- | --- | --- |
| **SharePoint knowledge import** | `site_id` oder `site_url`, `drive_id` oder `library` | Microsoft Graph mit bearer token, OAuth, client credentials oder managed identity | prüft Bibliothek und Root-Kinder |
| **Azure Data Factory evidence pipeline** | `subscription_id`, `resource_group_name`, `factory` oder `factory_name`, `pipeline` oder `pipeline_name` | managed identity, client credentials oder bearer token | liest die Pipeline-Definition |
| **Azure Blob document ingest** | `account_url`, `storage_account` oder `account_name`, danach `container` | managed identity, SAS, bearer token oder client credentials | listet einige Blobs aus dem Container |
| **Confluence knowledge import** | `base_url`, `space`, `space_key` oder `space_id` | basic, bearer token oder OAuth | prüft den Confluence-Space |
| **Jira issue import** | `base_url` oder `site_url`, danach `project`, `project_key` oder `jql` | API key, basic, PAT, bearer token oder OAuth | führt eine begrenzte Jira-Suche aus |
| **SFTP document intake** | `host` oder `base_url`, `username` oder `user`, `folder` oder `path`, gültiger Port falls angegeben | basic, password oder privater SSH-Schlüssel | prüft TCP-Erreichbarkeit des SFTP-Servers |
| **Microsoft Project schedule import** | `project_id`, `portfolio` oder `workspace` | Microsoft Graph mit bearer token, OAuth, client credentials oder managed identity | nutzt den konfigurierten Probe-Endpoint oder Pfad |
| **Smartsheet sheet import** | `sheet_id` oder `workspace_id` | API key, bearer token, OAuth oder PAT | liest Sheet oder Workspace in Smartsheet |
| **Wrike task import** | `folder_id` oder `space_id` | bearer token oder OAuth | liest Aufgaben aus Ordner oder Space |
| **Asta Powerproject schedule import** | `base_url` oder `endpoint_url`, danach `project_id`, `portfolio` oder `schedule_id` | API key, bearer token, OAuth oder basic | nutzt den konfigurierten Probe-Endpoint oder Pfad |

## Validierung, Probes und Runtime-Grenzen

| Schritt | Was bestätigt wird | Was nicht garantiert wird |
| --- | --- | --- |
| **Save** | die Definition ist auf Plattformebene gespeichert | die externe Quelle wurde nicht unbedingt kontaktiert |
| **Validate** | Pflichtfelder, Modus, Authentifizierung und HTTPS-URLs sind kohärent | ein echter Netzwerkaufruf erfolgt nur, wenn Probes aktiviert sind |
| **Connectivity probe** | ProPM Agent erreicht einen nicht destruktiven Provider-Endpoint | Ticket-Erstellung, Nachrichtenversand oder Vollimport werden nicht ausgelöst |
| **Bind to project** | das Projekt kann die Plattformdefinition konsumieren | Policy, Benutzerrolle, Health, Validierung und Binding-Readiness können die Nutzung weiter blockieren |
| **Validate binding** | das Projekt-Binding bleibt mit der Plattformdefinition ausgerichtet | es ersetzt keine reale Business-Aktion und keinen realen Import |

Connectivity-Probes sind absichtlich opt-in. Ein Administrator kann sie mit `connectivity_probe_enabled`, `run_connectivity_probe`, `live_connectivity_check`, äquivalenten Metadaten oder einer Plattform-Umgebungsvariable aktivieren. Ohne diese Aktivierung bleibt die Validierung eine Konsistenz- und Readiness-Prüfung.

Wenn ein Connector im Modus `mock` oder `test` bleibt, kann ProPM Agent Anfrage, Governance, Genehmigung und Spur verwalten, ohne den finalen Aufruf zwingend an das externe System zu senden. Reale Vendor-Ausführung erfordert einen kompatiblen Connector-Modus, vollständige Konfiguration, eine erlaubende Policy und eine Umgebung, die diesen Pfad aktiviert.

## Gouvernierte Aktionen und erforderlicher Connector

| Benutzeraktion | Interner Aktionstyp | Erforderlicher Connector | Mindestfelder im Payload |
| --- | --- | --- | --- |
| Artefakt nach SharePoint veröffentlichen | `publish_artifact_to_sharepoint` | `sharepoint_publish` | `artifact_id`, `destination_id` |
| Teams-Nachricht senden | `send_teams_message` | `teams` | `body` |
| Outlook-Nachricht senden | `send_outlook_message` | `outlook` | `body`, `recipients` |
| Jira-Ticket erstellen | `create_jira_ticket` | `jira` | `title` |
| Azure-DevOps-Work-Item erstellen | `create_azure_devops_ticket` | `azure_devops` | `title` |

Einige ältere Bezeichnungen werden automatisch normalisiert. Zum Beispiel wird `send_message` zu `send_teams_message`, `send_email` zu `send_outlook_message`, `create_work_item` zu `create_azure_devops_ticket` und `publish_sharepoint_artifact` zu `publish_artifact_to_sharepoint`.

## Status, Blocker und Diagnose-Reihenfolge

| Sichtbarer Status oder Blocker | Praktische Bedeutung | Erste empfohlene Aktion |
| --- | --- | --- |
| **Ready** oder **available** | die Definition kann gebunden oder genutzt werden, wenn der Rest der Kette offen ist | Projekt-Binding und Policy prüfen |
| **Healthy** | die letzte bekannte Validierung ist positiv | bestätigen, dass das Projekt gebunden ist |
| **Not configured** | Felder, Quelle, Ziel oder Zugangsdaten fehlen | Definition in Platform Administration vervollständigen |
| **Not validated** oder **not_tested** | die Definition existiert, hat aber die erwartete Validierung oder Prüfung noch nicht bestanden | Validate oder passenden Probe ausführen |
| **Blocked by health** | Plattform-Health ist degradiert oder ungültig | Endpoint, Auth, Scopes und Netzwerk prüfen |
| **Blocked by entitlement** | Legacy-Bezeichnung für eine blockierte Integration; in Marketplace-Plänen ist dies kein Funktionsunterschied | Konfiguration, Health, Binding, Policy, Rolle und Lizenzverfügbarkeit bei Zugriffsproblemen prüfen |
| **Blocked by policy** | Projekt-Governance verbietet diese Aktion oder Nutzungsart | Policy oder Rolle anpassen |
| **Binding disabled** | das Projekt-Binding existiert, ist aber deaktiviert | Binding erneut aktivieren oder neu erstellen, falls erlaubt |
| **Missing platform definition** | das Projekt referenziert eine fehlende oder gelöschte Definition | Plattformdefinition neu erstellen oder korrigieren |

Die nützlichste Diagnose-Reihenfolge lautet: Plattformdefinition, Pflichtkonfiguration, Validierung oder Probe, Projekt-Binding, Policy, Benutzerberechtigung, Aktions- oder Import-Payload und danach Lizenzverfügbarkeit, falls der Benutzer nicht auf die App zugreifen kann.

## Import, externe Ausgabe und Audit

| Thema | Was ProPM Agent nachverfolgt | Was im externen Tool zu prüfen ist |
| --- | --- | --- |
| Knowledge-Import | Ingestion-Run, Anbieter, Binding, Source Label, Frische, Zähler und Trace ID | verfügbares Volumen, Quellrechte, Filter, übersprungene Dateien und Deduplizierung |
| SharePoint-Veröffentlichung | Aktionsanfrage, Genehmigung, Connector, Ziel und Trace ID | finale URL, Bibliothek, Schreibrechte und veröffentlichte Version |
| Jira oder Azure DevOps | Aktion, Begründung, Business-Payload und Trace ID | Schlüssel des erstellten Tickets oder Work Items, Zielprojekt und Item-Typ |
| Teams oder Outlook | Anfrage, logische Empfänger oder Kanal, Genehmigung und Trace ID | tatsächliche Zustellung, Kanal, Mailbox und mögliche Graph-Ablehnungen |
| Webhook | logischer Endpoint, Versuchstatus, Antwort oder Fehler und Trace ID | HTTP-Code, gekürzte Antwort, Signaturvalidierung und nachgelagerte Wiederholung |

Legen Sie niemals ein Secret in den Business-Payload einer Aktion oder in eine Benutzernotiz. Secrets, Schlüssel und sensible Referenzen müssen in der dafür vorgesehenen Plattformkonfiguration bleiben.

## Sicherheit und Authentifizierung

| Familie | Üblicherweise akzeptierte Authentifizierung | Aufmerksamkeitspunkt |
| --- | --- | --- |
| Microsoft Graph, Teams, Outlook, SharePoint und Microsoft Project | bearer token, OAuth, client credentials oder managed identity | Scopes auf notwendige Sites, Mailboxen, Kanäle oder Projekte begrenzen |
| Jira und Confluence | API key, basic, PAT, bearer token oder OAuth je Produkt | technische Konten mit geringstmöglichen Rechten verwenden |
| Azure DevOps | PAT, bearer token oder OAuth | Rechte auf Projekt und erwartete Work-Item-Typen begrenzen |
| Azure Data Factory und Blob Storage | managed identity, client credentials, SAS oder bearer token je Service | verwaltete Identitäten bevorzugen und zugängliche Container oder Pipelines begrenzen |
| SFTP | basic, password oder privater SSH-Schlüssel | Schlüsselrotation, Port und erlaubten Root-Ordner prüfen |
| Webhook | keine Auth, API key, bearer token, basic oder OAuth | HTTPS, Signatur oder Endpoint-Secret verlangen, wenn das Risiko es rechtfertigt |

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
6. Das Ticket wird erstellt, wenn die Live-Ausführung des Vendors aktiviert ist; in jedem Fall bleiben Anfrage und Entscheidung im Produkt nachvollziehbar.

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
5. Je nach Risiko wird die Aktion genehmigt und ausgeführt, wenn der Connector-Modus dies erlaubt;
6. Die Nachricht bleibt historisiert, auch wenn die externe Zustellung blockiert oder verzögert ist.

### Hauptvorteil

Die Verbreitung erfolgt nicht als freie Nachricht, sondern bleibt **gouverniert, geprüft und nachvollziehbar**.

## Beispiel 4 — Webhook event delivery

### Wann verwenden

Verwenden Sie **Webhook event delivery**, wenn ProPM Agent nach einer gouvernierten Entscheidung einen bestimmten internen oder Drittanbieter-Endpoint aufrufen soll.

### Integration mit ProPM Agent

- Im aktuellen Katalog ist Webhook ein **Ausführungs-Connector**;
- binden Sie ihn erst an ein Projekt, nachdem Plattform-Endpoint und Health validiert wurden;
- falls später eine eingehende Webhook-Ingestion ergänzt wird, behandeln Sie sie als separaten Ingestionsanbieter mit eigener Validierung und eigenem Projekt-Binding.

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
- das Projekt-Binding nicht geöffnet, gesund oder konfiguriert ist;
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
5. Testen Sie einen ersten Import oder eine erste Aktion und unterscheiden Sie Readiness, Probe und reale Vendor-Ausführung;
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
