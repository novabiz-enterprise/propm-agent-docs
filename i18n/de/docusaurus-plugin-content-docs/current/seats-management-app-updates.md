---
title: Tenant-Plan, lizenzierte Benutzer und App-Updates
slug: /seats-management-app-updates
description: Den in ProPM angezeigten Marketplace-Plan verstehen, Azure-Marketplace-Informationen synchronisieren, Lizenzen verwalten und eine ProPM-Bereitstellung ohne Verlust vorhandener Daten aktualisieren.
---

[Startseite](./index.md) · Tenant-Plan, lizenzierte Benutzer und App-Updates

![Platform Administration overview mit Tenant plan and licensed users](/img/screenshots/localized/de/18-platform-administration-overview.jpg)

## Ziel

Diese Seite erklärt den Benutzerablauf für **Platform Administration > Overview > Tenant plan and licensed users** und den empfohlenen Ablauf, wenn ein Kunde einen Azure-Marketplace-Plan ändern oder ein größeres Update ohne Verlust vorhandener Daten durchführen möchte.

Sie erklärt:

- welcher Marketplace-Plan aktuell für den Tenant erkannt wird;
- wie viele Lizenzen bestellt, enthalten, zusätzlich, genutzt und verbleibend sind;
- warum Azure Marketplace die offizielle Quelle für Pläne, Preise und Abrechnung bleibt;
- wie Zusatzlizenzen über Azure Marketplace mit der Abrechnungsdimension `seats` verwaltet werden;
- wie Sie eine neue ProPM-Bereitstellung aus Azure Marketplace im Modus **Attach existing ProPM data resources** erstellen;
- wie sich ein in-place App-Update von einer Planänderung oder einem größeren Update unterscheidet.

Die wichtigste Botschaft ist einfach: Um den Plan zu ändern oder ein größeres Update ohne Datenverlust durchzuführen, erstellen Sie eine **neue ProPM-Bereitstellung aus Azure Marketplace**, wählen **Attach existing ProPM data resources** und hängen die vorhandenen Datenressourcen der vorherigen Bereitstellung an. Dies ist keine manuelle Datenbankmigration.

## Wo Sie die Seite finden

1. Öffnen Sie **Platform Administration**.
2. Bleiben Sie auf **Overview**.
3. Öffnen Sie **Tenant plan and licensed users**.

In ProPM zeigt dieser Bereich den aktuell erkannten Plan an und ermöglicht das Aktualisieren der Marketplace-Informationen. Er ersetzt Azure Marketplace nicht für Planauswahl, Preisprüfung, Abrechnungsänderungen oder den Abschluss einer kommerziellen Transaktion.

## Marketplace-Pläne, Preise und Abrechnung

Azure Marketplace ist die offizielle Quelle für:

- die Liste der verfügbaren ProPM-Pläne;
- den Preis jedes Plans;
- die Planabrechnung;
- kommerzielle Planänderungen;
- Zusatzlizenzen, die mit der Dimension `seats` abgerechnet werden.

ProPM zeigt den aktuellen Plan an, damit Administratoren den Tenant-Status verstehen können. Planänderungen werden aber nicht mehr direkt in der ProPM-Administration durchgeführt. Ändern Sie den ARM-Plan der Managed Application nicht manuell.

Zur Orientierung sind die bekannten ProPM-Marketplace-Pläne:

| Plan-ID | Anzeigename | Enthaltene Sitze |
| --- | --- | ---: |
| `free` | Free | 4 |
| `propm-20` | ProPM-20 | 20 |
| `propm-50` | ProPM-50 | 50 |
| `propm-100` | ProPM-100 | 100 |
| `propm-300` | ProPM-300 | 300 |
| `propm-500` | ProPM-500 | 500 |
| `propm-1000` | ProPM-1000 | 1000 |

Prüfen Sie Plan, Preis und Abrechnungsbedingungen immer in Azure Marketplace, bevor Sie eine neue Bereitstellung starten.

Verwenden Sie für jede neue Bereitstellung oder jedes Upgrade nur die ProPM-Pläne, die aktuell in Azure Marketplace verfügbar sind.

Marketplace-Pläne steuern Lizenzkapazität. Sie schalten keine Konnektoren, KI-Anbieter oder Produktfunktionen frei oder aus.

## Plan- und Lizenzfelder lesen

| Feld | Bedeutung |
| --- | --- |
| **Current plan** | Marketplace-Plan, der aktuell für den Tenant erkannt wird. |
| **Ordered seats** | Gesamtzahl der für den Tenant bestellten Lizenzen. |
| **Included seats** | Lizenzen, die im Marketplace-Basisplan enthalten sind. |
| **Supplemental licenses** | Zusätzliche Lizenzen, die über Marketplace-Abrechnung hinzugefügt wurden. |
| **Used seats** | Lizenzen, die aktuell von verbundenen oder lizenzierten Benutzern verbraucht werden. |
| **Remaining seats** | Noch verfügbare Lizenzen. |

Wenn die angezeigten Informationen nicht zu einer kürzlich ausgeführten Azure-Marketplace-Aktion passen, nutzen Sie **Refresh Marketplace plan**, um ProPM mit den erkannten Marketplace-Informationen zu synchronisieren.

## Zusatzlizenzen

Zusatzlizenzen werden über Azure Marketplace mit der Abrechnungsdimension `seats` verwaltet.

Nutzen Sie diesen Ablauf, wenn der Tenant mehr Kapazität benötigt, als der Basisplan enthält:

1. Prüfen Sie **Ordered seats**, **Included seats**, **Supplemental licenses**, **Used seats** und **Remaining seats** in ProPM.
2. Verwalten Sie zusätzliche Kapazität in Azure Marketplace oder über die ProPM-Aktion zur Abrechnung von Lizenzen in Azure, sofern sie in Ihrer Umgebung verfügbar ist.
3. Lassen Sie Azure Marketplace die Anfrage mit der Dimension `seats` akzeptieren und abrechnen.
4. Kehren Sie zu ProPM zurück.
5. Wählen Sie **Refresh Marketplace plan**, wenn die Zähler noch nicht aktuell sind.
6. Prüfen Sie **Ordered seats**, **Supplemental licenses** und **Remaining seats** nach der Synchronisierung.

Das Hinzufügen von Zusatzlizenzen ändert den Basisplan nicht. Das Entfernen oder Reduzieren von Zusatzlizenzen storniert oder erstattet die Abrechnung in Azure Marketplace nicht automatisch.

## ProPM-Plan aktualisieren, ohne Daten zu verlieren

Um einen Azure-Marketplace-Plan zu ändern oder ein größeres Update durchzuführen, erstellen Sie eine neue ProPM-Bereitstellung und hängen diese an die vorhandenen Datenressourcen der vorherigen Bereitstellung an.

Die neue Bereitstellung erstellt eine neue Anwendungsschicht für den ausgewählten Plan, verwendet aber vorhandene Daten weiter. Benutzer, Dokumente, Konfigurationen, Agenten, Berichte und Geschäftsdaten sollten daher nach der Validierung weiterhin verfügbar sein.

### Wann Sie diesen Ablauf nutzen

Nutzen Sie diesen Ablauf, wenn:

- Sie zu einem anderen ProPM-Plan in Azure Marketplace wechseln möchten;
- Sie ein größeres Update benötigen, das eine neue Marketplace-Bereitstellung erfordert;
- Sie die ProPM-Anwendungsschicht neu erstellen möchten, ohne vorhandene Daten zu verlieren;
- der ProPM-Support Sie bittet, im Modus zum Anhängen vorhandener Datenressourcen neu bereitzustellen.

Nutzen Sie diesen Ablauf nicht für ein einfaches in-place App-Image-Update. Verwenden Sie dafür **Deployment & Updates** in ProPM, wenn diese Funktion verfügbar ist und die Release Notes keine neue Marketplace-Bereitstellung verlangen.

### Bevor Sie beginnen

Bereiten Sie Folgendes vor:

- Azure-Zugriff auf die vorherige ProPM-Bereitstellung;
- die Berechtigung, eine neue ProPM Managed Application aus Azure Marketplace zu erstellen;
- den Zielplan für ProPM, ausgewählt in Azure Marketplace;
- die vollständige **Resource ID** der vorherigen ProPM Managed Application;
- ein Cutover-Zeitfenster, in dem Administratoren die neue Bereitstellung prüfen können;
- eine Prüfliste für Benutzer, Dokumente, Konfigurationen, Agenten, Berichte und Daten.

Beachten Sie vor jeder Aktion diese Vorsichtsmaßnahmen:

- löschen Sie die vorherige Managed Resource Group nicht, bevor die neue Bereitstellung validiert wurde;
- löschen Sie keine vorhandenen Datenressourcen, da sie von der neuen Bereitstellung wiederverwendet werden;
- ändern Sie den ARM-Plan der Managed Application nicht manuell;
- füllen Sie erweiterte Override-Optionen nur aus, wenn die vorherige Installation benutzerdefinierte Ressourcennamen verwendet hat oder ProPM-Support Sie dazu auffordert.

### Schritt 1 - Neuen Plan in Azure Marketplace auswählen

Öffnen Sie Azure Marketplace und wählen Sie den gewünschten neuen ProPM-Plan.

Planauswahl, Preise und Abrechnung werden in Azure Marketplace verwaltet. ProPM kann den aktuellen Plan anzeigen und erkannte Informationen aktualisieren, ist aber nicht die offizielle Quelle für die kommerzielle Transaktion.

### Schritt 2 - Neue ProPM-Bereitstellung erstellen

Erstellen Sie in Azure Marketplace eine neue ProPM-Bereitstellung, anstatt die vorherige Bereitstellung direkt zu ändern.

Wählen Sie auf der Registerkarte **Basics** Abonnement, Ressourcengruppe, Region, Namen der neuen Managed Application und die neue Managed Resource Group.

![Neue ProPM-Bereitstellung aus Azure Marketplace erstellen](/img/deploiement/fr/propm-plan-update-01-new-deployment-basics.png)

Verwenden Sie einen anderen Namen für die neue Managed Application, damit vorherige und neue Umgebung während des Cutovers klar unterscheidbar sind.

### Schritt 3 - Attach existing ProPM data resources auswählen

Wählen Sie auf der Registerkarte **Application Settings** im Feld **Installation mode** die Option **Attach existing ProPM data resources**.

![Modus Attach existing ProPM data resources auswählen](/img/deploiement/fr/propm-plan-update-03-attach-existing-data-resources.png)

Dieser Modus weist die neue Bereitstellung an, sich mit den Datenressourcen der vorherigen Bereitstellung zu verbinden, anstatt mit einer leeren Umgebung zu starten.

Lassen Sie erweiterte Override-Felder in den meisten Fällen leer. Die neue Bereitstellung kann Standardressourcen aus der vorherigen Managed Application erkennen. Füllen Sie diese Felder nur aus, wenn die vorherige Installation benutzerdefinierte Ressourcennamen genutzt hat oder ProPM-Support Sie dazu auffordert.

### Schritt 4 - Vorherige Managed Application eintragen

Öffnen Sie im Azure Portal die vorherige ProPM Managed Application und wechseln Sie zu **Properties**.

Kopieren Sie das vollständige Feld **Id** der Managed Application. Dies ist die **Resource ID** der vorherigen Managed Application, nicht der Name der verwalteten Ressourcengruppe.

![Resource ID der vorherigen ProPM Managed Application kopieren](/img/deploiement/fr/propm-plan-update-02-copy-previous-managed-application-id.png)

Kehren Sie zum Assistenten der neuen Bereitstellung zurück und fügen Sie diesen Wert in **Previous ProPM Managed Application resource ID** ein.

Aktivieren Sie bei Bedarf **Block previous deployment during cutover**. Diese Option hilft zu verhindern, dass Änderungen in der vorherigen Umgebung vorgenommen werden, während die neue Bereitstellung genutzt und validiert wird.

![Vorherige Bereitstellung während des Cutovers blockieren](/img/deploiement/fr/propm-plan-update-04-readonly-and-overrides.png)

Nachdem Sie die weiteren vom Assistenten geforderten Parameter eingegeben haben, wählen Sie **Review + create**, prüfen die Konfiguration und starten die Bereitstellung.

### Schritt 5 - Neue Bereitstellung prüfen

Nach Abschluss der neuen Bereitstellung öffnen Sie die neue ProPM-Instanz und prüfen die wesentlichen Punkte, bevor Benutzer dauerhaft umgestellt werden.

Prüfen Sie mindestens:

- Benutzer und ihre Zugriffe;
- Dokumente und Wissensbereiche;
- Plattformkonfiguration;
- Agenten und ihre Einstellungen;
- Berichte;
- Projekte, Portfolios und Geschäftsdaten;
- erwartete Konnektoren und Integrationen;
- den KI-Anbieter und erforderliche Einstellungen;
- Plan- und Lizenzzähler nach Marketplace-Synchronisierung.

Wenn der in ProPM angezeigte Plan nach der Azure-Marketplace-Aktion noch nicht aktuell ist, nutzen Sie **Refresh Marketplace plan**. Diese Schaltfläche synchronisiert nur den erkannten Zustand; sie ändert keinen Plan und löst keinen Kauf aus.

### Schritt 6 - Cutover abschließen

Leiten Sie die Benutzer nach vollständiger Validierung zur neuen ProPM-Bereitstellung.

Behalten Sie die vorherige Bereitstellung bei Bedarf vorübergehend als Sicherheit. Löschen Sie die vorherige Managed Application erst, wenn Sie sicher sind, dass der Cutover abgeschlossen ist und das gewählte Löschverfahren keine wiederverwendeten Datenressourcen entfernt.

Löschen Sie vorhandene Datenressourcen niemals manuell, solange sie von der neuen Bereitstellung verwendet werden.

### Best Practices und Vorsichtsmaßnahmen

Tun Sie Folgendes:

- wählen Sie den neuen Plan in Azure Marketplace;
- erstellen Sie eine neue ProPM-Bereitstellung;
- wählen Sie **Attach existing ProPM data resources**;
- tragen Sie die vollständige Resource ID der vorherigen ProPM Managed Application ein;
- blockieren Sie die vorherige Bereitstellung während des Cutovers oder setzen Sie sie auf Nur-Lesen, falls erforderlich;
- validieren Sie die neue Bereitstellung, bevor Sie etwas löschen;
- nutzen Sie **Refresh Marketplace plan** nach einer Marketplace-Aktion, um ProPM erneut zu synchronisieren.

Vermeiden Sie Folgendes:

- löschen Sie die vorherige Managed Resource Group nicht vor Validierung der neuen Bereitstellung;
- löschen Sie keine vorhandenen Datenkonten, Datenbanken oder Datendienste;
- ändern Sie den ARM-Plan der Managed Application nicht manuell;
- stellen Sie diesen Ablauf nicht als manuelle Datenbankmigration dar;
- füllen Sie erweiterte Overrides nicht ohne bekannten Bedarf aus.

### FAQ

**Kann ich den Plan direkt in ProPM ändern?**

Nein. ProPM zeigt den aktuellen Plan an und kann Marketplace-Informationen aktualisieren. Planänderungen, Preise und Abrechnung werden aber in Azure Marketplace verwaltet.

**Was macht Refresh Marketplace plan?**

**Refresh Marketplace plan** synchronisiert ProPM mit Marketplace-Informationen, die nach einer Azure-seitigen Aktion erkannt wurden. Es ändert keinen Plan, kauft keine Lizenzen und entfernt keine Lizenzen.

**Ist dies eine manuelle Datenbankmigration?**

Nein. Die neue ProPM-Bereitstellung verbindet sich automatisch mit vorhandenen Datenressourcen, wenn Sie **Attach existing ProPM data resources** auswählen und die vorherige Managed Application angeben.

**Welche Resource ID muss ich eintragen?**

Tragen Sie die vollständige Resource ID der vorherigen **ProPM Managed Application** ein. Tragen Sie nicht nur den Anwendungsnamen, Ressourcengruppennamen oder die Managed Resource Group ein.

**Wann sollte ich erweiterte Override-Optionen nutzen?**

Nutzen Sie sie nur, wenn die vorherige Installation benutzerdefinierte Ressourcennamen hat oder ProPM-Support Sie dazu auffordert. Im Standardfall lassen Sie diese Felder leer.

**Kann ich die vorherige Managed Resource Group nach der neuen Bereitstellung löschen?**

Löschen Sie sie nicht, bevor die neue Bereitstellung validiert wurde. Löschen Sie keine vorhandenen Datenressourcen, wenn die neue Bereitstellung sie wiederverwendet. Wenn Zweifel bestehen, behalten Sie die vorherige Bereitstellung vorübergehend und fragen Sie ProPM-Support nach dem richtigen Löschverfahren.

**Wie werden Zusatzlizenzen verwaltet?**

Zusatzlizenzen werden über Azure Marketplace mit der Abrechnungsdimension `seats` verwaltet. ProPM kann Zähler anzeigen und synchronisieren, aber Azure Marketplace bleibt die Abrechnungsreferenz.

## Refresh Marketplace plan

Nutzen Sie **Refresh Marketplace plan**, um ProPM mit dem erkannten Marketplace-Zustand des Tenants zu synchronisieren.

Diese Aktion:

- aktualisiert Plan- und Lizenzinformationen nach einer Marketplace-Aktion;
- führt selbst kein Plan-Upgrade aus;
- kauft keine Zusatzlizenzen;
- entfernt oder storniert keine Lizenzen;
- ändert keine Azure-Bereitstellungsressourcen.

## Lizenzierte verbundene Benutzer

Die Liste **Licensed connected users** zeigt Benutzer, die aktuell Lizenzen verbrauchen.

Das Entfernen eines lizenzierten Benutzers gibt Anwendungskapazität für spätere Nutzung frei, abhängig von den Lizenzregeln des Tenants. Es ändert den Marketplace-Plan nicht und storniert keine über Azure Marketplace abgerechnete Nutzung.

## App-Updates ohne Marketplace-Neubereitstellung

Der Bereich **Deployment & Updates** aktualisiert eine bestehende Installation in place, wenn das Update mit der aktuellen Bereitstellung kompatibel ist.

Er führt nicht aus:

- das Azure-Marketplace-Angebot erneut starten;
- eine neue Ressourcengruppe erstellen;
- bereits vorhandene Azure-Ressourcen neu erstellen;
- ein Marketplace-Plan-Upgrade anwenden;
- ein größeres Update durchführen, das eine neue Marketplace-Bereitstellung erfordert.

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
- Marketplace-Plan-Upgrades;
- Cutovers zu einer neuen Bereitstellung mit vorhandenen Datenressourcen.

## Merkpunkte

- Azure Marketplace ist die offizielle Quelle für Pläne, Preise und Abrechnung.
- ProPM zeigt den aktuellen Plan und Lizenzzähler, ersetzt Azure Marketplace aber nicht für Planänderungen.
- Um den Plan zu ändern oder ein größeres Update ohne Datenverlust durchzuführen, erstellen Sie eine neue ProPM-Bereitstellung aus Azure Marketplace.
- Wählen Sie im Bereitstellungsassistenten **Attach existing ProPM data resources**.
- Tragen Sie die vollständige Resource ID der vorherigen ProPM Managed Application ein.
- Löschen Sie die vorherige Managed Resource Group oder Datenressourcen nicht vor vollständiger Validierung der neuen Bereitstellung.
- Nutzen Sie **Refresh Marketplace plan** nur zur Synchronisierung des erkannten Marketplace-Zustands.
- Nutzen Sie **Deployment & Updates** für in-place App-Image-Rollout, nicht für kommerzielle Planänderungen.

## Weiter

- [Azure Marketplace Deployment](./deploiement-azure-marketplace.md)
- [KI-Anbieter und Plattformintegrationen](./ai-providers-platform-integrations.md)
- [Wartung, Support und FAQ](./maintenance-support-faq.md)
