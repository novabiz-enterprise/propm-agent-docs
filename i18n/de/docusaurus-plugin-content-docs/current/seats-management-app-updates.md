---
title: Tenant-Plan, lizenzierte Benutzer und App-Updates
slug: /seats-management-app-updates
description: Marketplace-Tenant-Plan, bestellte Sitze, Zusatzlizenzen, lizenzierte Benutzer und App-Updates in Platform Administration verwalten.
---

[Startseite](./index.md) · [Portfolio](./portfolio.md) · [KI-Anbieter und Plattformintegrationen](./ai-providers-platform-integrations.md)

![Platform Administration overview mit Tenant plan and licensed users](/img/screenshots/localized/de/18-platform-administration-overview.jpg)

## Ziel

Diese Seite erklärt den Benutzerablauf für **Platform Administration > Overview > Tenant plan and licensed users**.

Sie beantwortet:

- welcher Marketplace-Plan aktuell für den Tenant erkannt wird;
- wie viele Lizenzen bestellt, enthalten, zusätzlich, genutzt und verbleibend sind;
- wie Zusatzlizenzen direkt aus ProPM gekauft oder entfernt werden;
- wie ein Plan-Upgrade durch eine Azure-Marketplace-Neubereitstellung vorbereitet wird;
- wie sich App-Image-Updates von Marketplace-Plan-Upgrades unterscheiden.

## Wo Sie die Seite finden

1. Öffnen Sie **Platform Administration**.
2. Bleiben Sie auf **Overview**.
3. Öffnen Sie **Tenant plan and licensed users**.

Dieser Administrationsbereich ersetzt ältere benutzerseitige Marketplace-Abonnement-Auswahldialoge. Benutzer sollten keine alten oder internen Plan-IDs auswählen, wenn sie ein neues Upgrade vorbereiten.

## Offizielle Marketplace-Pläne

Die Liste **Target plan** in der ProPM-Administration darf nur diese offiziellen Marketplace-Pläne anzeigen:

| Plan-ID | Anzeigename | Enthaltene Sitze |
| --- | --- | ---: |
| `free` | Free | 4 |
| `propm-20` | ProPM-20 | 20 |
| `propm-50` | ProPM-50 | 50 |
| `propm-100` | ProPM-100 | 100 |
| `propm-300` | ProPM-300 | 300 |
| `propm-500` | ProPM-500 | 500 |
| `propm-1000` | ProPM-1000 | 1000 |

Alte oder interne Kennungen wie `propm0`, `pro`, `enterprise`, `pm-*` oder dynamisch erzeugte Pläne sind keine Benutzerauswahl für ein neues Upgrade in der Administration.

`propm0` kann bei älteren bestehenden Bereitstellungen weiterhin erscheinen. Behandeln Sie ihn als historische Kompatibilität, nicht als Plan für ein neues Upgrade.

## Plan- und Lizenzfelder lesen

| Feld | Bedeutung |
| --- | --- |
| **Current plan** | Marketplace-Plan, der aktuell für den Tenant erkannt wird. |
| **Ordered seats** | Gesamtzahl der für den Tenant bestellten Lizenzen. |
| **Included seats** | Lizenzen, die im Marketplace-Basisplan enthalten sind. |
| **Supplemental licenses** | Zusätzliche Lizenzen, die über Marketplace-Abrechnung hinzugefügt wurden. |
| **Used seats** | Lizenzen, die aktuell von verbundenen oder lizenzierten Benutzern verbraucht werden. |
| **Remaining seats** | Noch verfügbare Lizenzen. |

Marketplace-Pläne steuern Lizenzkapazität. Sie schalten keine Konnektoren, KI-Anbieter oder Produktfunktionen frei oder aus.

## Zusatzlizenzen hinzufügen

Nutzen Sie **Add licenses and bill in Azure**, wenn der Tenant mehr Kapazität benötigt, als der Basisplan enthält.

1. Geben Sie in **Tenant plan and licensed users** die Anzahl der hinzuzufügenden Zusatzlizenzen ein.
2. Wählen Sie **Add licenses and bill in Azure**.
3. ProPM sendet den Verbrauch an Azure Marketplace Metering.
4. Azure Marketplace rechnet die Nutzung über die Custom-Meter-Dimension `seats` ab.
5. ProPM fügt die Zusatzlizenzen erst zur Tenant-Kapazität hinzu, nachdem Azure Marketplace die Anfrage akzeptiert hat.
6. Prüfen Sie danach **Ordered seats**, **Supplemental licenses** und **Remaining seats**.

Pro Stunde kann nur eine Bestellung von Zusatzlizenzen an Azure Marketplace übermittelt werden.

Zusatzlizenzen bleiben in ProPM aktiv, bis sie manuell entfernt werden.

## Zusatzlizenzen entfernen

Nutzen Sie **Remove licenses**, um Zusatzlizenz-Kapazität aus ProPM zu entfernen.

Das Entfernen verringert die in ProPM verfügbare Kapazität, storniert oder erstattet aber nicht automatisch Verbrauch, der bereits an Azure Marketplace gesendet wurde.

## Plan per Azure-Marketplace-Neubereitstellung upgraden

Ein Marketplace-Plan-Upgrade wird nicht direkt auf die bestehende Managed-Application-Instanz angewendet.

Für Azure Managed Application wird das Upgrade in ProPM vorbereitet und über eine geführte Azure-Marketplace-Neubereitstellung abgeschlossen.

1. Öffnen Sie **Platform Administration > Overview > Tenant plan and licensed users**.
2. Wählen Sie in **Target plan** einen höheren offiziellen Marketplace-Plan.
3. Wählen Sie **Prepare upgrade by redeploying in Azure Marketplace**.
4. ProPM bereitet das Upgrade vor und speichert eine ausstehende Upgrade-Anfrage.
5. Wählen Sie **Open Azure Marketplace redeployment**, sobald der Link angezeigt wird.
6. Erstellen Sie in Azure Marketplace eine neue ProPM Managed Application mit einem anderen Namen.
7. Wählen Sie in Azure den neuen Marketplace-Plan.
8. Azure Marketplace finalisiert die kommerzielle Transaktion und erstellt die neue Bereitstellung.
9. Verwenden Sie nach der Marketplace-Aktion **Refresh Marketplace plan** in ProPM, um die erkannten Plan- und Lizenzinformationen zu synchronisieren.

Das Plan-Upgrade ändert die bestehende Managed-Application-Instanz nicht direkt. Azure Marketplace erfordert eine neue Bereitstellung, um den neuen Plan anzuwenden.

## Einschränkungen für Downgrades

ProPM blockiert die technische Anwendung von Downgrades in der Anwendung:

- ein niedrigerer Plan als der aktuelle Plan wird abgelehnt;
- eine Reduzierung der bestellten Lizenzen wird abgelehnt;
- Marketplace-Änderungen, die Kapazität verringern, werden nicht automatisch angewendet.

ProPM verhindert die technische Anwendung eines Downgrades in der Anwendung, aber Marketplace-Abrechnung wird von Azure und Microsoft verwaltet. Jede kommerzielle Änderung muss in Azure Marketplace durchgeführt und validiert werden.

## Refresh Marketplace plan

Nutzen Sie **Refresh Marketplace plan**, um ProPM mit dem aktuell erkannten Marketplace-Zustand des Tenants zu synchronisieren.

Diese Aktion:

- aktualisiert Plan- und Lizenzinformationen nach einer Marketplace-Aktion;
- führt selbst kein Plan-Upgrade aus;
- kauft keine Zusatzlizenzen;
- entfernt oder storniert keine Lizenzen.

## Zusatzlizenzen während eines Plan-Upgrades

Bereits gekaufte Zusatzlizenzen bleiben mit der Marketplace-Quellressource verbunden.

Bei einer Neubereitstellung für ein Plan-Upgrade gilt:

- bestehende Zusatzlizenzen bleiben an die alte Marketplace-Bereitstellung oder Quellressource gebunden;
- der neue Plan enthält seine eigene Basiskapazität;
- der Kunde sollte auf der neuen Bereitstellung nur dann Zusatzlizenzen kaufen, wenn die im neuen Plan enthaltene Kapazität nicht ausreicht.

## Lizenzierte verbundene Benutzer

Die Liste **Licensed connected users** zeigt Benutzer, die aktuell Lizenzen verbrauchen.

Das Entfernen eines lizenzierten Benutzers gibt Anwendungskapazität für spätere Nutzung frei, abhängig von den Lizenzregeln des Tenants. Es ändert den Marketplace-Plan nicht und storniert keine über Azure Marketplace abgerechnete Nutzung.

## App-Updates ohne Marketplace-Neubereitstellung

Der Bereich **Deployment & Updates** aktualisiert eine bestehende Installation in place.

Er führt nicht aus:

- das Azure-Marketplace-Angebot erneut starten;
- eine neue Ressourcengruppe erstellen;
- bereits vorhandene Azure-Ressourcen neu erstellen;
- ein Marketplace-Plan-Upgrade anwenden.

Praktisch liest die Administration das Image-Inventar der vorhandenen **Azure Container Apps** über Azure Resource Manager, vergleicht aktuelle Images mit genehmigten Zielimages in ACR und erstellt neue Revisionen auf den vorhandenen Container Apps.

## Verfügbare Update-Aktionen

| Aktion | Zweck |
| --- | --- |
| **Check for updates** | Aktuelle Images, Zielimages, Kandidaten für Mutable-Tag-Refresh und optionale Manifestversion prüfen. |
| **Apply update** | Neue Images auf ausgewählte Services anwenden, indem neue Container-Apps-Revisionen erstellt werden. |
| **Rollback last update** | Zu vorherigen Images zurückkehren, wenn die letzte Operation die erforderlichen Referenzen erfasst hat. |
| **Container App image inventory** | Verwaltete Ressourcengruppe, verfolgte Services, aktuelle Images, Zielimages und Revisionsstatus prüfen. |

## Grenzen des Umfangs

Der Rollout von Anwendungsimages ist von Marketplace-Planadministration getrennt.

Die Update-Schaltflächen decken nicht ab:

- Datenbankschema-Migrationen;
- Erstellung neuer Azure-Ressourcen;
- Architekturänderungen;
- Marketplace-Plan-Upgrades.

## Merkpunkte

- Nutzen Sie **Tenant plan and licensed users** für Marketplace-Plan- und Lizenzkapazitätsverwaltung.
- Nutzen Sie nur offizielle Marketplace-Pläne als Zielpläne.
- Nutzen Sie **Add licenses and bill in Azure** für über Azure Marketplace abgerechnete Zusatzlizenzen.
- Nutzen Sie **Prepare upgrade by redeploying in Azure Marketplace** für Plan-Upgrades.
- Nutzen Sie **Refresh Marketplace plan** nur zur Synchronisierung des erkannten Marketplace-Zustands.
- Nutzen Sie **Deployment & Updates** für in-place App-Image-Rollout, nicht für kommerzielle Planänderungen.

## Weiter

- [Azure Marketplace Deployment](./deploiement-azure-marketplace.md)
- [KI-Anbieter und Plattformintegrationen](./ai-providers-platform-integrations.md)
- [Wartung, Support und FAQ](./maintenance-support-faq.md)
