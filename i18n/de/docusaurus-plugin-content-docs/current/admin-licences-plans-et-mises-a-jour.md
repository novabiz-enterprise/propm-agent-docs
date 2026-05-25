---
title: Lizenzen, Pläne und Updates
slug: /admin-licences-plans-et-mises-a-jour
description: Nutzerlizenzen, Marketplace-Plan, Planwechsel, vorhandene Datenressourcen und Anwendungsupdates verwalten.
---

# Lizenzen, Pläne und Updates

Azure Marketplace bleibt die Quelle für Kauf, Preis und Abrechnung. ProPM Agent zeigt die erkannten Kapazitäten und Nutzer.

Für ein in-place App-Image-Update nutzen Sie **Deployment & Updates**. Für einen Planwechsel oder ein größeres Update mit bestehenden Daten erstellen Sie eine neue Marketplace-Bereitstellung und wählen **Attach existing ProPM data resources**.

## Zähler

| Zähler | Bedeutung |
| --- | --- |
| Ordered seats | Bestellte Kapazität |
| Included seats | Im Plan enthalten |
| Supplemental seats | Zusätzlich gekauft |
| Used seats | Verwendete Nutzerlizenzen |
| Remaining seats | Verbleibende Lizenzen |

## Nutzer verwalten

1. Öffnen Sie **Platform Administration**.
2. Öffnen Sie **Tenant plan and licensed users**.
3. Prüfen Sie die Nutzerliste.
4. Nutzen Sie **Release user** nur, wenn der Nutzer keinen Zugriff mehr braucht.

## Marketplace-Plan aktualisieren

**Refresh Marketplace plan** synchronisiert bekannte Informationen. Es kauft nichts, ändert keinen Plan und keine Abrechnung.

## Planwechsel oder größeres Update mit vorhandenen Daten

Nutzen Sie diesen Ablauf, wenn eine neue Marketplace Managed Application erforderlich ist, vorhandene ProPM-Daten aber erhalten bleiben müssen.

1. Öffnen Sie Azure Marketplace.
2. Wählen Sie den Zielplan.
3. Erstellen Sie eine neue ProPM-Bereitstellung.
4. Wählen Sie **Attach existing ProPM data resources**.
5. Tragen Sie die vollständige Resource ID der vorherigen ProPM Managed Application ein.
6. Lassen Sie Overrides leer, außer Support oder Architektur erfordern sie.
7. Prüfen Sie Cutover, Administration, CORS, Monitoring, SQL-Passwort und VNet CIDR.
8. Wählen Sie **Review + create**.

## Update-Bildschirm 1 - Vorhandene Daten anhängen

![Attach existing ProPM data resources für eine Deployment-Aktualisierung](/img/deploiement/propm-update-attach-existing-data.png)

| Feld | Pflicht | Was eintragen | Empfehlung |
| --- | --- | --- | --- |
| **Environment Name** | Ja | Kurzer Umgebungsname, z. B. `prod`, `uat` oder `test`. | Stabilen, nicht geheimen Namen verwenden. |
| **Installation mode** | Ja | **Attach existing ProPM data resources**. | Erstellt neuen Anwendungstier und nutzt vorhandene Datenressourcen. |
| **Previous ProPM Managed Application resource ID** | Ja | Vollständige Azure Resource ID der vorherigen ProPM Managed Application. | **Id** aus **Properties** kopieren, nicht nur Namen eintragen. |
| **Existing Storage account resource ID (optional override)** | Nein | Resource ID des vorhandenen Storage Accounts. | Standardmäßig leer lassen. |
| **Existing Azure AI Search service resource ID (optional override)** | Nein | Resource ID des vorhandenen Azure AI Search-Dienstes. | Nur bei fehlender Auto-Erkennung ausfüllen. |
| **Existing SQL server resource ID (optional override)** | Nein | Resource ID des vorhandenen SQL Servers. | Identifiziert den Server, nicht die Datenbank. |
| **Existing SQL database name (optional override)** | Nein | Name der vorhandenen SQL-Datenbank. | Nur nutzen, wenn nicht automatisch erkannt. |
| **Existing Cosmos DB account resource ID (optional override)** | Nein | Resource ID des vorhandenen Cosmos DB Accounts. | Nur bei explizitem Bedarf ausfüllen. |
| **Existing Document Intelligence account resource ID (optional override)** | Nein | Resource ID des vorhandenen Document Intelligence Accounts. | Nur für externe oder benutzerdefinierte Ressource. |
| **Existing Service Bus namespace resource ID (optional override)** | Nein | Resource ID des vorhandenen Service Bus Namespace. | Standardmäßig leer lassen. |
| **Previous** | Nein | Zurück zum vorherigen Schritt. | Startet keine Bereitstellung. |
| **Next** | Nein | Weiter zum nächsten Schritt. | Nach Pflichtfeldern verwenden. |
| **Review + create** | Nein | Azure-Validierung vor Erstellung. | Erst nach Abschluss aller Parameter verwenden. |

## Update-Bildschirm 2 - Cutover und Plattform

![Cutover- und Plattformparameter für Deployment-Aktualisierung](/img/deploiement/propm-update-cutover-settings.png)

| Feld | Pflicht | Was eintragen | Empfehlung |
| --- | --- | --- | --- |
| **Existing Event Grid topic resource ID (optional override)** | Nein | Resource ID des vorhandenen Event Grid Topics. | Leer lassen, außer Auto-Erkennung scheitert. |
| **Block previous deployment during cutover** | Nein, empfohlen | Aktivieren, um die vorherige Umgebung während der Validierung zu blockieren. | Verhindert parallele Schreibzugriffe auf dieselben Daten. |
| **Platform Administration Entra Group Object IDs** | Ja | Object IDs der Entra-Gruppen für Plattformadministration. | Object IDs verwenden, nicht Anzeigenamen. |
| **Platform Administration Bootstrap Users (optional)** | Nein | Bootstrap- oder Recovery-Benutzer. | Minimal halten. |
| **Allow Azure RBAC admin recovery** | Nein | Wiederherstellung über Azure RBAC. | Aktiv lassen, wenn Governance es erlaubt. |
| **Reuse previous AI provider configuration** | Empfohlen | Vorherige KI-Konfiguration übernehmen. | KI-Felder werden ausgeblendet; Änderungen später in Platform Administration. |
| **CORS Allowed Origins** | Szenarioabhängig | Zusätzliche Web-Origins. | Leer lassen, wenn nicht benötigt. |
| **Enable alerting (Azure Monitor)** | Nein | Azure Monitor Alerts aktivieren. | Für Produktion empfohlen. |
| **Enable debug logging** | Nein | Detaillierte Logs aktivieren. | Nur für kontrollierte Diagnose. |
| **Password** | Ja | Vorhandenes ProPM SQL-Admin-Passwort. | Erforderlich, damit der neue Anwendungstier die wiederverwendete Datenbank erreicht. Als Secret behandeln. |
| **Confirm password** | Ja | Derselbe Wert wie **Password**. | Beide Werte müssen übereinstimmen. |
| **VNet CIDR** | Ja | Privater Netzwerkbereich, z. B. `10.0.0.0/16`. | Mit Netzwerkteam validieren und Überschneidungen vermeiden. |

## Updates

Prüfen Sie **Deployment & Updates** während eines kontrollierten Wartungsfensters und behalten Sie Supportinformationen für Rollback-Fälle. Nutzen Sie diese Funktion nicht für Planwechsel oder Cutover zu vorhandenen Datenressourcen.
