---
title: Sitzverwaltung und App-Updates
slug: /seats-management-app-updates
description: Abonnement-Sitze verwalten und eine vorhandene Installation aus der Administration aktualisieren, ohne Marketplace-Ressourcen neu bereitzustellen.
---

[Startseite](./index.md) · [Portfolio](./portfolio.md) · [KI-Anbieter und Plattformintegrationen](./ai-providers-platform-integrations.md)

## Ziel

Diese Seite behandelt zwei Administrationsthemen, die von der Projektarbeit getrennt sind:

- **Sitzverwaltung** für Lizenzen, zugewiesene Benutzer und Abonnementstatus;
- **Deployment & Updates** für in-place Rollout von Anwendungsimages auf vorhandenen Azure Container Apps.

Nutzen Sie sie für die Frage: **wer kann auf die Anwendung zugreifen, und wie wird eine vorhandene Installation aktualisiert, ohne zum Marketplace zurückzukehren?**

## Abonnement und Sitze

Das Produkt verwendet ein sitzbasiertes Lizenzmodell. Alle Marketplace-Pläne stellen dieselben Anwendungsfunktionen bereit; nur die Anzahl der Lizenzen/Sitze unterscheidet sich.

### Was ein Administrator sieht

- den aktiven **Plan**;
- die Anzahl der **gekauften Sitze**;
- die Anzahl der **genutzten Sitze**;
- die Anzahl der **verfügbaren Sitze**;
- bereits lizenzierte Benutzer;
- kommerziellen Status, zum Beispiel `billing state`, `payment state` oder `subscription status`.

### Warum das wichtig ist

Ein blockierter Benutzer hat nicht unbedingt ein Verbindungsproblem. Die Blockierung kann entstehen durch:

- keinen verfügbaren Sitz;
- einen entfernten Benutzer, der durch einen Administrator neu zugewiesen werden muss;
- unzureichende Rolle, nicht zugängliches Projekt, Binding, Policy, Konfiguration oder Health-Zustand, der korrigiert werden muss.

Marketplace-Pläne blockieren keine Konnektoren, KI-Anbieter oder Produktfunktionen. Wenn eine technische Kennzeichnung `entitlement` noch in Oberfläche oder Logs erscheint, behandeln Sie sie als Legacy-/Nicht-Plan-Indikator und nicht als funktionalen Planunterschied.

## Einen Sitz freigeben oder neu zuweisen

Dies erfolgt in **Platform Administration** durch ein autorisiertes Profil.

Eine Entfernung gibt den Sitz für spätere Neuzuweisung frei, vorbehaltlich Abonnement-/Lizenzregeln und möglicher Rücknahmefrist. Der Vorgang ändert die Zugriffszuweisung; er ändert nicht, welche Produktfunktionen im Plan enthalten sind.

## App-Updates ohne Marketplace-Neubereitstellung

Der Bereich **Deployment & Updates** aktualisiert eine vorhandene Installation **in place**.

Er tut nicht Folgendes:

- das Azure-Marketplace-Angebot erneut ausführen;
- eine neue Ressourcengruppe erstellen;
- bereits vorhandene Azure-Ressourcen neu erstellen.

Praktisch liest die Administration das Image-Inventar der vorhandenen **Azure Container Apps** über Azure Resource Manager, vergleicht aktuelle Images mit genehmigten Zielimages in ACR und erstellt neue Revisionen auf den vorhandenen Container Apps.

## Verfügbare Update-Aktionen

| Aktion | Zweck |
| --- | --- |
| **Check for updates** | aktuelle Images, Zielimages, Kandidaten für Mutable-Tag-Refresh und optionale Manifestversion prüfen |
| **Apply update** | neue Images auf ausgewählte Services anwenden, indem neue Container-Apps-Revisionen erstellt werden |
| **Rollback last update** | zu vorherigen Images zurückkehren, wenn die letzte Operation die erforderlichen Referenzen erfasst hat |
| **Container App image inventory** | verwaltete Ressourcengruppe, verfolgte Services, aktuelle Images, Zielimages und Revisionsstatus prüfen |

## Wichtige Voraussetzungen

- der Benutzer benötigt Rechte für Deployment-Operationen oder Plattformadministration;
- die Runtime-Identität muss Container Apps über Azure Resource Manager lesen und patchen können;
- die Umgebung muss Subscription und Ressourcengruppe über `AZURE_SUBSCRIPTION_ID` und `AZURE_RESOURCE_GROUP_ID`, `AZURE_RESOURCE_GROUP` oder `AZURE_RESOURCE_GROUP_NAME` kennen;
- Zielimages müssen aus einem Update-Manifest, einer Zielimage-Konfiguration oder einem autorisierten Anwendungstag stammen.

## Grenzen des Umfangs

Diese Operation deckt **Rollout von Anwendungsimages** ab.

Die Administrationsschaltfläche deckt nicht ab:

- Datenbankschema-Migrationen;
- Erstellung neuer Azure-Ressourcen;
- Architekturänderungen;
- eine neue Marketplace-Bereitstellung.

Wenn das Update den Orchestrator-Service selbst umfasst, kann die Oberfläche melden, dass die Anfrage übermittelt wurde, während sich der Service selbst ersetzt.

## Technische Plattform-Anker

Die Azure-Bereitstellungsinfrastruktur beruht unter anderem auf:

- Azure Container Apps;
- Storage;
- Azure AI Search;
- Key Vault;
- Log Analytics;
- Application Insights;
- Document Intelligence.

## Merkpunkte

- Sitze steuern Zugriffszuweisung, nicht Funktionsstufen;
- alle Marketplace-Pläne stellen dieselben Produktfunktionen bereit;
- App-Updates werden in place auf vorhandene Container Apps angewendet;
- Marketplace installiert die anfängliche Umgebung, während **Deployment & Updates** sie pflegt;
- nutzen Sie Rollback nur, wenn frühere Image-Referenzen verfügbar sind.

## Weiter

- [Azure Marketplace Deployment](./deploiement-azure-marketplace.md)
- [KI-Anbieter und Plattformintegrationen](./ai-providers-platform-integrations.md)
- [Wartung, Support und FAQ](./maintenance-support-faq.md)
