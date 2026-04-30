---
title: KI-Anbieter und Plattformintegrationen
slug: /ai-providers-platform-integrations
description: Plattformintegrationen vorbereiten, KI-Anbieter konfigurieren, Readiness validieren und Plattform-Setup von Projektnutzung unterscheiden.
---

[Startseite](./index.md) · [Portfolio](./portfolio.md) · [Sitzverwaltung und App-Updates](./seats-management-app-updates.md)

![Plattformadministration](/img/screenshots/localized/de/18-platform-administration-overview.jpg)

## Ziel

Diese Seite behandelt die technische Vorbereitung von ProPM Agent auf Plattformebene:

- **Plattformintegrationen** für Konnektoren und Ingestion-Anbieter;
- **KI-Anbieter-Einstellungen** für Laufzeit-Modellanbieter;
- Readiness, Validierung, Tests, Health und Regeln für Projektbindungen.

Nutzen Sie sie für die Frage: **ist die Plattform für die Organisation richtig vorbereitet, bevor Projekte sie verwenden?**

## Sichtbare Administrationsbereiche

| Bereich | Rolle |
| --- | --- |
| Overview | Zusammenfassung des allgemeinen Vorbereitungsstands |
| Platform integrations | technische Definitionen von Konnektoren und Ingestion-Anbietern |
| AI provider settings | Konfiguration, Validierung, Test und Aktivierung des KI-Anbieters |
| Audit / activity | Verlauf administrativer Aktionen |

Für Sitze und Rollout von Anwendungsimages verwenden Sie [Sitzverwaltung und App-Updates](./seats-management-app-updates.md).

## Plattformintegrationen vs Projektintegrationen

Eine zentrale Produktregel lautet:

- die **Plattformebene** entscheidet, was technisch existiert;
- die **Projektebene** entscheidet, was in einem konkreten Projekt tatsächlich verwendet wird;
- die **Governance** entscheidet, wer mit dem Tool handeln darf.

| Verantwortung | In Plattformadministration gepflegt | In Projektintegrationen sichtbar |
| --- | --- | --- |
| Technisches Setup | Tenant-URLs, Authentifizierungsstrategie, API-Schlüssel, Secret-Referenzen, Scopes und Quell- oder Zieldefinitionen | Readiness, Health und Blockierungsgründe schreibgeschützt |
| Operative Bindung | Enterprise-Konnektor/-Anbieter aktivieren oder deaktivieren und technische Health validieren | **Bind to project**, **Validate binding** und **Disable** für Projektverfügbarkeit |
| Benutzerführung | Admin-Audit, Validierungshistorie und tenantbezogene Konfiguration | Kontextlinks wie **Open Platform Administration** und **Open Knowledge imports** |

Für Details je Konnektorfamilie siehe [Konnektoren und Integrationen](./connecteurs-jira-et-sharepoint).

## Validierungs- und Sicherheitsregeln

Plattformvalidierungen wenden anbieterspezifische Anforderungen an:

- Pflichtfelder;
- kompatible Authentifizierungsstrategie;
- HTTPS-URLs, wenn erforderlich;
- gültiger SFTP-Port;
- explizite Quelle oder explizites Ziel;
- Konnektivitätsprobe nur, wenn sie durch Administrator oder Plattformkonfiguration aktiviert ist.

Secrets, Schlüssel und sensible Referenzen müssen in der dafür vorgesehenen Plattformkonfiguration bleiben. Legen Sie sie nicht in Notizen, Aktionspayloads oder Beschreibungen ab, die für Projektbenutzer sichtbar sind.

## Vorbereitung und Blockierungsursachen

Eine Integration kann blockiert sein durch:

- **policy**;
- **permission**;
- zu prüfende **health**;
- fehlende Plattformdefinition;
- unvollständige anbieterspezifische Konfiguration oder Validierung;
- nicht geöffnete Projektbindung.

Empfohlener Prüfpfad:

1. lesen Sie die projektseitige Blockierung erneut;
2. öffnen Sie **Platform Administration**;
3. prüfen Sie die technische Definition des Konnektors oder Anbieters;
4. kehren Sie zum Projekt zurück, um Bindung und autorisierte Nutzung zu bestätigen.

## KI-Anbieterfamilien

Zu den im Produkt sichtbaren Anbieterfamilien gehören unter anderem:

- **OpenRouter**;
- **OpenAI-compatible**;
- **OpenAI**;
- **Azure OpenAI**.

| Anbieter | Wann wählen? | Was normalerweise ausgefüllt wird |
| --- | --- | --- |
| **OpenRouter** | wenn mehrere Modellfamilien über eine Verbindung verglichen werden sollen | Base URL, Schlüssel, Standardmodell |
| **OpenAI-compatible** | wenn die Organisation ein Gateway oder kompatibles Endpoint nutzt | exaktes Endpoint, Auth, Schlüssel oder Secret, erwartetes Modell |
| **OpenAI** | wenn die Organisation OpenAI direkt nutzt | URL, Schlüssel oder Secret, Standardmodell |
| **Azure OpenAI** | wenn die Organisation Azure-zentriert ist und Azure-OpenAI-Deployments wählen möchte | Endpoint, API-Version, Auth-Modus, Name des LLM-Deployments |

## Readiness des KI-Anbieters

| Status | Bedeutung |
| --- | --- |
| **Configuration** | Felder sind gespeichert |
| **Validation** | die Konfiguration hat die erwarteten Prüfungen bestanden |
| **Test** | echte Konnektivität wurde geprüft |
| **Activate** | der Anbieter ist in der Admin-Konfiguration aktiviert |
| **Operational** | der Anbieter kann als nutzbar gelten |

Einfacher Vorbereitungsfluss:

1. öffnen Sie **AI provider settings**;
2. wählen Sie den gewünschten Anbieter;
3. füllen Sie die angeforderten Felder aus;
4. klicken Sie auf **Save**;
5. klicken Sie auf **Validate**;
6. klicken Sie auf **Test**;
7. klicken Sie auf **Activate**;
8. prüfen Sie das Ergebnis im **AI Log**.

## Besonderheiten von Azure OpenAI

Bei **Azure OpenAI** müssen häufig ergänzt werden:

- der **Endpoint**;
- die **API version**;
- der **authentication mode**;
- der **LLM deployment name**;
- optional der **Embeddings deployment name**.

Details zur Auswahl eines KI-Anbieters während der Marketplace-Bereitstellung finden Sie unter [Azure Marketplace Deployment](./deploiement-azure-marketplace.md).

## Effektiver Anbieter vs im Deployment gewählter Anbieter

Unterscheiden Sie zwei Begriffe:

- **Deployment-selected AI Provider**: Anbieter, der in der anfänglichen Umgebungskonfiguration gewählt wurde;
- **Effective AI Provider**: Anbieter, der zur Laufzeit für einen konkreten Run tatsächlich verwendet wird.

Der effektive Wert ist die zuverlässigste Referenz bei der Untersuchung eines konkreten Runs. Er erscheint im **AI Log** und kann vom im Deployment gewählten Wert abweichen.

## Merkpunkte

- die Plattformebene bereitet Konnektoren und Anbieter vor;
- die Projektebene öffnet deren reale Nutzung;
- Governance entscheidet, wer handeln darf;
- ein KI-Anbieter ist erst bereit, wenn er registriert, validiert, getestet und aktiviert ist;
- **AI Log** bleibt die Referenz zur Bestätigung des tatsächlich verwendeten Anbieters.

## Weiter

- [Portfolio](./portfolio.md)
- [Sitzverwaltung und App-Updates](./seats-management-app-updates.md)
- [Konnektoren und Integrationen](./connecteurs-jira-et-sharepoint)
- [Berichte, KI-Log und Nachvollziehbarkeit](./rapports-journal-ia-et-tracabilite.md)
