---
title: Portfolio und technische Administration
slug: /portefeuille-et-administration-technique
description: Mehrere Projekte vergleichen, die Plattform administrieren, Integrationen, den KI-Provider, die Azure OpenAI-Modellauswahl und die Lizenzen verwalten.
---

[Startseite](./index.md) · [Berichte, KI-Protokoll und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md) · [Wartung, Support und FAQ](./maintenance-support-faq.md)

![Portfolio Command Center](/img/screenshots/localized/de/02-portfolio-command-center.png)

## Ziel

Diese Seite behandelt zwei unterschiedliche Oberflächen: das **Portfolio Command Center** für den Multi-Projekt-Vergleich und die **Plattformadministration** für die tenant-weite technische Konfiguration.

## Portfolio Command Center

Die Portfolio-Seite ermöglicht den Vergleich mehrerer Projekte basierend auf gemeinsamen Signalen.

### Bestätigte Funktionen

- Auswahl mehrerer Projekte;
- konfigurierbare Signal-Katalog;
- Verwaltung von **Gewichtungen** und **Schwellenwerten**;
- Filter für **Mindest-Schweregrad**;
- gespeicherte Cohorten;
- Vergleichsrefresh.

### Beobachtete Signale

Der sichtbare Katalog umfasst insbesondere:

- `activity_change`
- `blocker_density`
- `freshness_issues`
- `contradiction_count`
- `failed_runs`
- `schedule_pressure`
- `cost_pressure`

### Was eine Cohorte speichert

Eine gespeicherte Cohorte speichert mindestens:

- die ausgewählten Projekte;
- die aktivierten Signale;
- die Gewichtungen;
- die Schwellenwerte;
- den Mindest-Schweregrad.

![Portfolio Cohort Editor](/img/screenshots/localized/de/02-portfolio-cohort-editor.png)

### Gute Portfolio-Praxis

Nutzen Sie diese Seite zum Vergleichen, Priorisieren und Identifizieren von Projekten, die eine tiefergehende Untersuchung rechtfertigen. Sie ersetzt nicht die detaillierte Arbeit innerhalb jedes Projekts.

### Wie man eine Cohorte ohne erkennbare Outliers interpretiert

Wenn eine Cohorte **keine Outliers** oder deutliche Abweichungen zeigt, schließen Sie nicht direkt auf einen Bug. Prüfen Sie zunächst:

1. die tatsächlich ausgewählten Projekte;
2. die aktivierten Signale;
3. die angewendeten **Gewichtungen** und **Schwellenwerte**;
4. den festgelegten **Mindest-Schweregrad**.

Eine leere Cohorte kann einfach bedeuten, dass Ihre Filter zu streng sind oder dass kein Projekt aktuell die gewählten Schwellenwerte überschreitet.

![Plattformadministration](/img/screenshots/localized/de/18-platform-administration-overview.png)

## Plattformadministration

Die bestätigten Abschnitte sind:

| Abschnitt | Rolle |
| --- | --- |
| Overview | Übersicht über Regeln, Bereitschaft und Aufmerksamkeitspunkte |
| Platform integrations | Technische Definitionen von Connectors und Ingestion-Providers |
| AI provider settings | Auswahl des KI-Providers und zugehörige Parameter |
| Marketplace / subscription | Verwaltung des Abonnements, der Entitlements und der Lizenzen |
| Audit / activity | Aktivitätshistorie und Administration-Tracking |

## Plattformintegrationen vs. Projektintegrationen

Eine wichtige Regel ergibt sich aus dem Produkt:

- die **Plattformebene** besitzt die globalen technischen Definitionen;
- die **Projektebene** konsumiert nur genehmigte und sichere Bindings.

### Zwei Plattform-Familien

- **Execution Connectors** für externe Aktionen;
- **Ingestion Providers** zur Befüllung des Wissens.

### Beispiele für beobachtete Connectors

- Jira, Azure DevOps, GitHub, GitLab, ServiceNow;
- Teams, Slack, Outlook;
- SharePoint publish, Notion, webhook.

### Beispiele für beobachtete Ingestion Providers

- SharePoint, OneDrive, Confluence;
- Jira, Azure DevOps;
- Google Drive, Box, Dropbox, Amazon S3;
- Notion;
- manueller Upload und webhook.

## Bereitschaft und Blockierungsursachen

Eine Projektintegration oder Importoption kann blockiert sein aufgrund von:

- Entitlement;
- Policy;
- Permission;
- degradiertem Health;
- fehlender oder deaktivierter Plattformdefinition;
- deaktiviertem oder nicht konfiguriertem Projektbinding.

Empfohlener Remediation-Weg:

1. Blockierung in der Projektseite lesen;
2. **Plattformadministration** öffnen, um die technische Definition zu prüfen;
3. Bereitschaft oder Health des Connectors/Providers validieren;
4. zurück zum Projekt gehen, um Binding und genehmigten Einsatz zu bestätigen.

### Häufiger Fall – Integration auf Plattform definiert, aber im Projekt nicht verfügbar

Dieser Fall bedeutet nicht zwangsläufig, dass die Plattform falsch konfiguriert ist. Es kann einfach bedeuten, dass:

- die technische Definition existiert, aber noch nicht an das Projekt **gebunden** ist;
- das Projekt nicht die richtige **Policy** oder **Rolle** hat;
- das **Entitlement** die Plattform deckt, aber nicht den tatsächlich erwarteten Einsatz;
- der **Health** des Connectors degradiert ist.

Für dieses Szenario halten Sie den folgenden Pendelweg: **Projekte und Arbeitsbereich** zum Lesen der sichtbaren Blockierung, dann **Plattformadministration** zur Bestätigung der globalen Definition, dann zurück zum Projekt zum Aktivieren oder Korrigieren des Bindings. Siehe auch [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md).

## KI-Provider-Einstellungen

Die sichtbaren Provider-Familien je Konfigurationskontext umfassen insbesondere:

- **OpenRouter**;
- **OpenAI / Azure OpenAI**;
- **Anthropic**.

### Wie man Admin-Status interpretiert

Die Marker **Configuration**, **Validation**, **Test** und **Operational** dienen nicht nur für Azure OpenAI. Sie bilden das gemeinsame Leseframework für alle Providers, die in der Admin-UI verfügbar sind.

| Status | Was es bedeutet | Was es noch nicht garantiert |
| --- | --- | --- |
| Configuration | Felder wurden registriert | nicht die technische Validität oder die tatsächliche Verbindung |
| Validation | Konfiguration hat die administrativen Kontrollen passiert | nicht zwangsläufig den vollständigen Verbindungstest |
| Test | Verbindungstest erfolgreich ausgeführt | noch nicht die Aktivierung für Endnutzer |
| Operational | Provider kann als betriebsbereit betrachtet werden | nicht, dass alle Projekte ihn bereits effektiv nutzen |

### Schnelle Entscheidungsmatrix – `Validate`, `Test`, `Operational`

| Symptom | Prüfen Sie zunächst | Dann |
| --- | --- | --- |
| `Validate` fehlgeschlagen | Endpunkt, Auth-Modus, möglicher Secret, Pflichtfelder, Deployment-Namen | korrigieren Sie die Konfiguration vor jedem Test |
| `Validate` erfolgreich, aber `Test` fehlgeschlagen | tatsächliche Verbindung, Secret/API-Key, Zugänglichkeit des Providers, entfernte Ressource | starten Sie den Test nach Korrektur neu, dann kontrollieren Sie die zugehörige Aktivität |
| Provider bleibt sichtbar, aber nicht aktivierbar / nicht `Operational` | Validation, Test, allowed providers, Entitlement, allgemeine Bereitschaft | schalten Sie Nutzer nicht um, bevor der vollständige betriebsbereite Status erreicht ist |

### Zwei zu unterscheidende Begriffe

| Begriff | Bedeutung |
| --- | --- |
| KI-Provider bei Bereitstellung ausgewählt | Initiale Umgebungsauswahl während der Installation |
| Effektiver KI-Provider | Provider, der tatsächlich für neue Runs verwendet wird |

Diese beiden Werte können unterschiedlich sein, insbesondere wenn eine Marketplace-Bereitstellung **Azure OpenAI** vorbereitet und der Administrator später das LLM-Deployment in **AI provider settings** auswählt. Für einen bestimmten Run bleibt der Referenzwert das Detail sichtbar im **KI-Protokoll**.

### Gemeinsames Framework für alle Providers

Egal welcher Provider in der Oberfläche sichtbar ist, halten Sie das gleiche Leseframework:

1. tragen Sie die kritischen Felder des Providers ein;
2. speichern Sie die Konfiguration;
3. starten Sie die Validation;
4. starten Sie den Verbindungstest;
5. aktivieren Sie den Provider nur dann, wenn die Plattform tatsächlich darauf umschalten soll;
6. bestätigen Sie dann den effektiven Provider im **KI-Protokoll** auf einem realen Run.

### OpenRouter

Für **OpenRouter** überwachen Sie insbesondere den Endpunkt, den Key oder Secret, die gewählte Modellfamilie und den vollständigen Durchlauf von **Configuration → Validation → Test → Operational** vor Aktivierung.

### OpenAI-compatible / OpenAI

Für **OpenAI-compatible** Providers prüfen Sie insbesondere die Konsistenz zwischen Endpunkt, Auth, Version oder Modell/Deployment-Erwartung und dem realen Verbindungstest. Eine gespeicherte Konfiguration garantiert nicht den effektiven Einsatz durch Runs.

### Anthropic

Für **Anthropic** bleibt der Reflex der gleiche: Konfiguration gespeichert, Validation, Test, Aktivierung, dann Bestätigung im **KI-Protokoll**. Wenn der Provider sichtbar bleibt, aber nicht operational ist, prüfen Sie zunächst Auth, Entitlement und allowed providers, bevor Sie escalieren.

### Fall **Azure OpenAI** nach einer Marketplace-Bereitstellung

Wenn die Marketplace-Bereitstellung mit **Azure OpenAI** gestartet wurde, bereitet die Installation die Azure-Integration vor, aber fixiert nicht automatisch das exakte LLM-Deployment beim Marketplace-Formular.

Nach Installation muss ein Administrator **Plattformadministration** > **AI provider settings** öffnen, um das Azure OpenAI-Deployment auszuwählen, das tatsächlich in der Azure OpenAI-Ressource des Clients sichtbar ist.

![Azure OpenAI-Einstellungen in der Plattformadministration](/img/screenshots/localized/fr/18-platform-administration-azure-openai-settings.png)

#### Was die Modellauswahl bedeutet

In dieser Seite erwartet das Feld **LLM deployment name** den **exakten Namen eines Azure OpenAI-Deployments**, das in der Ressource des Clients existiert. Es ist nicht nur ein generischer Name einer Modellfamilie. Im sichtbaren Beispiel ist `gpt-4.1-mini` das primäre LLM-Deployment und `text-embedding-3-small` das optionale Embeddings-Deployment.

Diese Trennung ist intentional: sie ermöglicht dem Client, das Deployment oder Modell nach der Marketplace-Installation zu ändern, ohne die App neu bereitzustellen.

#### Sichtbare Azure OpenAI-Felder

| Feld | Rolle |
| --- | --- |
| Endpoint | Ziel-Azure OpenAI-Endpunkt, verwendet für Deployment-Discovery und Verbindungstests |
| API version | Azure OpenAI-API-Version, verwendet von der Administration |
| Authentication mode | Authentifizierungsmodus, unterstützt von der Plattform: `managed_identity` oder `api_key` |
| LLM deployment name | Exakter Name des LLM-Deployments, verwendet für generative Runs |
| Embeddings deployment name (optional) | Exakter Name des Embeddings-Deployments, wenn Ihre Konfiguration einen verwendet |

#### Status und operativer Ablauf

Die Oberfläche zeigt vier Status-Marker:

- **Configuration**: Konfiguration wurde gespeichert oder nicht;
- **Validation**: administrative Prüfung wurde ausgeführt oder nicht;
- **Test**: Verbindungstest wurde ausgeführt oder nicht;
- **Operational**: Synthese des Betriebsstatus dieses Providers.

Der erwartete Weg in der Oberfläche ist **Save → Validate → Test → Activate**. Gemäß der beobachteten Oberfläche registrieren **Validate** und **Test** zunächst die pending Änderungen, bevor sie ihre Kontrolle ausführen.

#### Was das Backend prüft

Gemäß existierendem Code prüft die Backend-Verifikation des Providers **Azure OpenAI** mindestens:

- die Existenz des **Endpoints** und sein Format als **absolute URL**;
- die Existenz der **API version**;
- die Validität des **Authentifizierungsmodus** (`managed_identity` oder `api_key`);
- die Existenz eines **API-Key** oder einer **Secret-Referenz**, wenn der Modus `api_key` gewählt ist;
- die Existenz des **LLM deployment name**;
- die Abwesenheit von Spaces in den LLM- und Embeddings-Deployment-Namen.

Das Backend versucht auch, die sichtbaren Deployments zu discover, indem es den Azure OpenAI-Endpunkt **`/openai/deployments`** mit der konfigurierten API-Version anruft. Wenn die Discovery erfolgreich ist, prüft die Validation, dass das gewählte **LLM deployment name** – und, wenn angegeben, das Embeddings-Deployment – tatsächlich in der konfigurierten Azure OpenAI-Ressource sichtbar ist.

Praktische Folgen:

- wenn kein Deployment noch sichtbar ist, muss der Administrator das Deployment in Azure erstellen oder aktivieren, dann **Plattformadministration** aktualisieren;
- wenn der eingetragene Name nicht in der Zielressource existiert, schlägt die Validation fehl und kann die sichtbaren Deployments auf Azure-Seite listen;
- wenn die Konfiguration unvollständig bleibt, kann der **Verbindungstest** nicht erfolgreich sein;
- die Aktivierung des Providers bleibt blockiert, solange Konfiguration, Validation und Test nicht konform sind.

#### Empfohlene Kontrolle

1. öffnen Sie **Plattformadministration**;
2. gehen Sie zu **AI provider settings**;
3. tragen Sie den **Endpoint**, die **API version** und den **Authentifizierungsmodus** ein, passend zu ihrer Azure OpenAI-Ressource;
4. wählen Sie den exakten **LLM deployment name**, sichtbar in der Azure OpenAI-Ressource des Clients;
5. fügen Sie, wenn benötigt, den **Embeddings deployment name** hinzu;
6. speichern Sie die Konfiguration;
7. starten Sie **Validate**, um Konfiguration und Sichtbarkeit der Deployments zu prüfen;
8. starten Sie **Test**, um Verbindung zu bestätigen;
9. aktivieren Sie dann den Provider, wenn der Tenant tatsächlich auf diese Konfiguration umschalten soll;
10. kontrollieren Sie dann **KI-Protokoll** auf einem realen Run.

Solange dieser Schritt nicht finalisiert ist, beschreibt die Auswahl **Azure OpenAI** bei Bereitstellung zwar den beabsichtigten Provider, aber noch nicht das exakte LLM-Deployment, das im Betrieb verwendet wird.

Siehe auch [Azure Marketplace-Bereitstellung](./deploiement-azure-marketplace.md).

## Abonnement, Entitlement und Lizenzen

Das Produkt verwaltet ein Lizenzmodell mit Konsum von Lizenzen je Plan.

### Beobachtete Verhaltensweisen

- eine Lizenz kann bei Login konsumiert werden;
- Zugang kann blockiert sein, wenn keine Lizenz verfügbar ist;
- die Admin-UI zeigt den Plan, gekaufte Lizenzen und lizenzierte Nutzer;
- ein Administrator kann einen lizenzierten Nutzer entfernen, dann Kapazität für späteres Reassignment freigeben;
- ein 24-Stunden-Removal-Window wird gefolgt, um abusive Rotation zu vermeiden;
- der kommerzielle Status kann auch `billing state`, `payment state`, `subscription status` und `entitlement flags` zeigen.

### Warum dies wichtig ist

Ein Zugangs-Problem ist nicht immer ein Authentifizierungsproblem. Es kann auch von einem Lizenzmangel oder einem Entitlement kommen, das eine Premium-Integration oder einen KI-Provider blockiert.

## Technische Plattform-Marker

Die beobachtete Azure-Infrastruktur basiert auf folgenden Bausteinen:

- Azure Container Apps;
- Storage;
- Azure AI Search;
- Key Vault;
- Log Analytics;
- Application Insights;
- Document Intelligence.

## Zu beachten für technische Zielgruppen

- die **Plattformebene** kontrolliert, was global existiert;
- die **Projektebene** wählt, was lokal tatsächlich verwendet wird;
- Integrationen müssen validiert werden, bevor sie Teams exponiert werden;
- Abonnement und Entitlements beeinflussen Zugang, Connectors und KI-Provider;
- für **Azure OpenAI** muss die Marketplace-Auswahl in **AI provider settings** mit dem exakten Namen eines LLM-Deployments vervollständigt werden, sichtbar in der Azure OpenAI-Ressource;
- vor Aktivierung muss die Sequenz **Save → Validate → Test** Konfiguration, Sichtbarkeit der Deployments und Verbindung bestätigen;
- das **KI-Protokoll** bleibt die Referenz für den tatsächlich verwendeten Provider auf einem Run.

## Weiter

- [Berichte, KI-Protokoll und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md)
- [Wartung, Support und FAQ](./maintenance-support-faq.md)
- [Erste Schritte](./demarrage.md)
- [Glossar](./glossaire.md)
