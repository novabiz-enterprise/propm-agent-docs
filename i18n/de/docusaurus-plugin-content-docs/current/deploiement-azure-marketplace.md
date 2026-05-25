---
title: Azure Marketplace-Bereitstellung
slug: /deploiement-azure-marketplace
description: ProPM Agent aus Azure Marketplace bereitstellen, die Felder des ProPM-50-Formulars ausfüllen und die Administration nach der Installation abschließen.
---

[Startseite](./index.md) · Azure Marketplace-Bereitstellung

## Ziel

Diese Seite beschreibt die Bereitstellung von **ProPM Agent** aus **Azure Marketplace**. Sie erklärt die beiden wichtigsten Azure-Formularseiten, den Zweck jedes sichtbaren Felds und die Prüfungen vor **Review + create**.

Die Screenshots zeigen das Formular **Create ProPM-50**. Der angezeigte Name kann je nach ausgewähltem Marketplace-Plan abweichen, zum Beispiel ProPM-50, ProPM-100 oder ein anderer verfügbarer Plan.

## Zielgruppe

| Profil | Nutzung dieser Seite |
| --- | --- |
| Azure-Administrator | Managed Application aus Azure Marketplace erstellen |
| Tenant-Administrator | Entra-Gruppen und ersten Administratorzugriff vorbereiten |
| Plattformadministrator | Verstehen, welche Einstellungen nach der Installation abzuschließen sind |
| Support | Ablauf prüfen, ohne Secrets oder interne Variablen anzufordern |
| Fachlicher Benutzer | Nein, dafür [Erste Schritte](./demarrage.md) verwenden |

## Vor dem Start

Bereiten Sie diese Informationen vor, bevor Sie das Marketplace-Formular öffnen.

| Information | Warum sie benötigt wird |
| --- | --- |
| Ziel-Azure-Abonnement | Trägt die Marketplace-Transaktion und die bereitgestellten Ressourcen |
| Ziel-Ressourcengruppe | Organisiert das kundenseitige Managed-Application-Objekt |
| Ziel-Azure-Region | Definiert den primären Bereitstellungsort |
| Anwendungsname | Identifiziert die ProPM-Agent-Instanz in Azure |
| Managed Resource Group | Nimmt die internen, von der Anwendung verwalteten Ressourcen auf |
| Entra Group Object IDs | Gewähren Zugriff auf die Plattformadministration |
| Optionale Bootstrap-Benutzer | Helfen beim ersten Zugriff oder bei kontrollierter Wiederherstellung |
| Initialer KI-Anbieter | Gibt die KI-Anbieterfamilie an, die für diese Instanz vorbereitet wird |
| Optionale CORS Origins | Erlauben zusätzliche Web-Domains, falls erforderlich |
| VNet-CIDR-Plan | Verhindert Konflikte mit dem Organisationsnetzwerk |
| Initiales Passwort | Muss generiert und als Secret gespeichert werden |

Kopieren Sie niemals Passwort, Secret, API-Schlüssel, Token oder vertrauliche Werte in die Dokumentation oder in eine ungesicherte Support-Anfrage.

## Bereitstellungsablauf

1. Öffnen Sie das ProPM-Agent-Angebot in Azure Marketplace.
2. Wählen Sie den gewünschten Marketplace-Plan.
3. Füllen Sie den Tab **Basics** aus.
4. Wählen Sie **Next**.
5. Füllen Sie den Tab **Application Settings** aus.
6. Wählen Sie **Review + create**.
7. Beheben Sie mögliche Validierungsfehler.
8. Starten Sie die Erstellung.
9. Warten Sie, bis die Azure-Bereitstellung abgeschlossen ist.
10. Öffnen Sie die veröffentlichte URL und schließen Sie die Administration in ProPM Agent ab.

## Bildschirm 1 - Basics

Der Tab **Basics** definiert den Azure-Bereich der Bereitstellung: Abonnement, Ressourcengruppe, Region und Azure-Namen der Managed Application.

![Basics-Tab der ProPM-50-Azure-Marketplace-Bereitstellung](/img/deploiement/propm-50-basics.png)

### Felder im Tab Basics

| Feld | Pflichtfeld | Eingabe | Auswirkungen und Empfehlungen |
| --- | --- | --- | --- |
| **Subscription** | Ja | Das Azure-Abonnement, das die Managed Application und Marketplace-Abrechnung trägt. | Verwenden Sie ein Abonnement, in dem Sie eine Managed Application bereitstellen und Ressourcengruppen erstellen oder auswählen dürfen. Prüfen Sie auch interne Kosten- und Governance-Regeln. |
| **Resource group** | Ja | Die kundenseitige Ressourcengruppe, die das Managed-Application-Objekt enthält. | Wählen Sie eine vorhandene Gruppe oder **Create new**. Dies ist nicht die interne Managed Resource Group mit den technischen ProPM-Agent-Ressourcen. |
| **Create new** | Nein | Azure-Aktion zum Erstellen einer neuen Ressourcengruppe, wenn keine passende Gruppe existiert. | Verwenden Sie einen klaren Namen mit Bezug auf Umgebung und Region. Vermeiden Sie temporäre Namen für produktive Instanzen. |
| **Region** | Ja | Die primäre Azure-Region der Bereitstellung. | Wählen Sie eine von Ihrer Organisation zugelassene Region, nahe an den Benutzern und passend zu Datenresidenz-Anforderungen. Halten Sie sie konsistent mit geplanten Netzwerk- und KI-Ressourcen. |
| **Application Name** | Ja | Der sichtbare Name der ProPM-Agent-Managed-Application-Instanz. | Verwenden Sie einen stabilen, lesbaren Namen wie `propm-prod-eus`. Der Name hilft beim Erkennen der Instanz in Azure. Keine Secrets oder sensiblen Kundendaten verwenden. |
| **Managed Resource Group** | Ja | Die verwaltete Ressourcengruppe, die interne von der Anwendung bereitgestellte Ressourcen erhält. | Azure schlägt oft einen generierten Namen vor. Halten Sie ihn eindeutig und erkennbar. Diese Gruppe wird von der Anwendung verwaltet; direkter Zugriff kann durch das Managed-Application-Modell eingeschränkt sein. |
| **Previous** | Nein | Kehrt zum vorherigen Formularschritt zurück. | Dieser Button startet keine Bereitstellung. |
| **Next** | Nein | Wechselt zum nächsten Tab, wenn Pflichtfelder ausreichend gefüllt sind. | Verwenden Sie ihn für **Application Settings**. Wenn Azure blockiert, prüfen Sie Pflichtfelder mit `*`. |
| **Review + create** | Nein | Startet die finale Azure-Validierung vor der Erstellung. | Erst nach Abschluss der Anwendungseinstellungen verwenden. Azure zeigt danach Fehler oder Warnungen, die vor der echten Erstellung behoben werden müssen. |

## Bildschirm 2 - Application Settings

Der Tab **Application Settings** konfiguriert die ProPM-Agent-Umgebung selbst: Administrationsidentität, Installationsmodus, initialen KI-Anbieter, CORS, Monitoring, Logging, initiales Passwort und Netzwerk.

![Application-Settings-Tab der ProPM-50-Azure-Marketplace-Bereitstellung](/img/deploiement/propm-50-application-settings.png)

### Felder im Tab Application Settings

| Feld | Pflichtfeld | Eingabe | Auswirkungen und Empfehlungen |
| --- | --- | --- | --- |
| **Environment Name** | Ja | Kurzer Umgebungsname, zum Beispiel `dev`, `test`, `uat` oder `prod`. | Hilft beim Erkennen der Umgebung in Ressourcen, Konfiguration und Support-Austausch. Verwenden Sie einen kurzen, stabilen, nicht geheimen Wert nach interner Konvention. |
| **Installation mode** | Szenarioabhängig | Der Installationsmodus. Für eine Erstinstallation **New installation - create new resources** beibehalten. | Erstellt eine neue Instanz mit neuen Ressourcen. Einen Attach-Modus für vorhandene Ressourcen nur für vorbereitete Planwechsel, größere Updates oder Recovery-Szenarien verwenden. |
| **Platform Administration Entra Group Object IDs** | Ja | Object IDs der Entra-Gruppen, die die Plattform administrieren dürfen. | Tragen Sie die **Object IDs** der Gruppen ein, nicht nur Anzeigenamen. Diese Gruppen bestimmen den Zugriff auf **Platform Administration** nach der Bereitstellung. Dedizierte Gruppen sind besser als zu breite Gruppen. |
| **Platform Administration Bootstrap Users (optional)** | Nein | Bootstrap- oder Recovery-Benutzer, falls Ihre Betriebsprozedur dies verlangt. | Nützlich für den ersten Zugriff, wenn Entra-Gruppen noch nicht vollständig greifen. Liste minimal und kontrolliert halten. |
| **Allow Azure RBAC admin recovery** | Nein | Checkbox für Administrator-Wiederherstellung über Azure RBAC. | Aktiviert lassen, wenn Ihr Betriebsmodell einem autorisierten Azure-Administrator die Wiederherstellung des Plattformzugriffs erlaubt. Nur deaktivieren, wenn Governance eine strikte dokumentierte Trennung verlangt. |
| **LLM Provider** | Empfohlen | Initiale KI-Anbieterfamilie: Azure OpenAI, OpenAI, OpenRouter oder OpenAI-compatible, je nach verfügbaren Optionen. | Dies ist eine initiale Bereitstellungsabsicht. Es beweist nicht, dass der Anbieter betriebsbereit ist. Nach der Installation den Anbieter in **Platform Administration > AI Provider Settings** mit **Save**, **Validate**, **Test** und **Activate** abschließen. |
| **CORS Allowed Origins** | Szenarioabhängig | Zusätzliche erlaubte Web-Origins, zum Beispiel `https://portal.contoso.com`. | Leer lassen, wenn keine zusätzliche Origin benötigt wird. Zu breite Wildcards vermeiden. Werte sollten vollständige Origins mit `https://`, Domain und bei Bedarf Port sein. |
| **Enable alerting (Azure Monitor)** | Nein | Aktiviert oder deaktiviert Azure-Monitor-Alarme für die Umgebung. | Für Produktion empfohlen, damit Vorfälle erkannt werden. Anschließend Empfänger, Action Rules und Kostenregeln in Azure Monitor prüfen. |
| **Enable debug logging** | Nein | Aktiviert detailliertere Logs. | In Produktion deaktiviert lassen, außer bei Support-Diagnose. Debug Logging kann Log-Volumen erhöhen und mehr technische Details für berechtigte Administratoren sichtbar machen. |
| **Password** | Ja | Das initiale Passwort, das vom Bereitstellungsformular verlangt wird. | Starkes Passwort generieren und in einem genehmigten Vault oder Secret Manager speichern. Nicht per E-Mail, Chat oder ungesichertem Ticket senden. |
| **Confirm password** | Ja | Derselbe Wert wie **Password**. | Azure prüft, dass beide Felder übereinstimmen. Bei Fehler beide Werte erneut aus der sicheren Quelle eingeben. |
| **VNet CIDR** | Ja | Der private Netzwerkbereich für die Bereitstellung, zum Beispiel `10.0.0.0/16`. | Bereich wählen, der nicht mit bestehenden Netzwerken, Peerings, VPNs oder geplanten Bereichen kollidiert. Vor Erstellung vom Netzwerkteam validieren lassen, da Änderungen nach der Bereitstellung schwierig sind. |
| **Previous** | Nein | Kehrt zum Tab **Basics** zurück. | Nützlich, um Abonnement, Gruppe, Region oder Namen vor finaler Validierung zu korrigieren. |
| **Next** | Nein | Wechselt zum nächsten Formularschritt. | Verwenden, wenn Sie der Tab-Reihenfolge folgen möchten. |
| **Review + create** | Nein | Führt die finale Validierung aller Parameter aus. | Azure erstellt Ressourcen erst, wenn Sie nach der Validierung die Erstellung bestätigen. Alle Fehler vorher beheben. |

## LLM Provider auswählen

Das Feld **LLM Provider** wählt die KI-Familie, die die Umgebung zunächst verwenden soll. Es beendet die KI-Konfiguration nicht.

| Auswahl | Wann wählen | Nach der Installation noch erforderlich |
| --- | --- | --- |
| **Azure OpenAI** | Die Organisation möchte im Azure-, Entra- und Microsoft-Governance-Ökosystem bleiben. | Endpoint, Region oder verfügbares Modell, Azure-OpenAI-Einstellungen, Tests und Aktivierung bestätigen. |
| **OpenAI** | Die Organisation nutzt OpenAI APIs direkt. | URL, Modell, Schlüssel oder Secret-Referenz eingeben, dann **Save**, **Validate**, **Test**, **Activate** ausführen. |
| **OpenRouter** | Die Organisation möchte mehrere Modelle über einen Einstiegspunkt nutzen. | Base URL, Schlüssel oder Secret-Referenz, Standardmodell eingeben, dann validieren und aktivieren. |
| **OpenAI-compatible** | Die Organisation nutzt ein OpenAI-kompatibles Gateway oder Endpoint. | Exakten Endpoint, Authentifizierungsmodus, erwartetes Modell oder Deployment eingeben und echte Kompatibilität testen. |

Einfache Regel: Die Bereitstellung **wählt** den KI-Anbieter aus; die ProPM-Agent-Administration macht ihn **betriebsbereit**.

## Validierung vor Review + create

Prüfen Sie diese Punkte vor der Erstellung.

| Prüfung | Erwartetes Ergebnis |
| --- | --- |
| Abonnement und Ressourcengruppe | Passen zur Zielumgebung und zu Governance-Regeln |
| Region | Erfüllt Datenresidenz, Verfügbarkeit und Netzwerkstrategie |
| Application Name | Name ist klar, stabil und nicht vertraulich |
| Managed Resource Group | Name ist eindeutig und erkennbar |
| Entra Group Object IDs | IDs gehören zu den Gruppen für Plattformadministration |
| Bootstrap Users | Liste ist leer oder streng auf vorgesehene Konten begrenzt |
| RBAC recovery | Auswahl passt zur Wiederherstellungsprozedur |
| LLM Provider | Initialer Anbieter passt zur KI-Strategie |
| CORS | Nur erforderliche Origins sind erlaubt |
| Alerting | Für zu überwachende Umgebungen aktiviert |
| Debug logging | Außerhalb kontrollierter Diagnose deaktiviert |
| Password | Im Vault gespeichert und nie im Klartext geteilt |
| VNet CIDR | Vom Netzwerkteam validiert und ohne bekannte Überschneidung |

## Nach der Bereitstellung

1. Warten Sie, bis Azure-Provisioning abgeschlossen ist.
2. Öffnen Sie die veröffentlichte ProPM-Agent-URL.
3. Melden Sie sich mit einem Konto an, das durch Entra-Gruppen oder Bootstrap-Prozedur autorisiert ist.
4. Prüfen Sie Zugriff auf **Platform Administration**.
5. Öffnen Sie die KI-Anbieter-Einstellungen.
6. Führen Sie **Save**, **Validate**, **Test** und **Activate** für den gewählten Anbieter aus.
7. Prüfen Sie Lizenzen und Marketplace-Plan.
8. Führen Sie einen ersten Funktionstest mit einem Standardbenutzer aus.
9. Prüfen Sie nach einem Run das [Journal IA](./journal-ia.md), um den tatsächlich verwendeten Anbieter zu bestätigen.

## Häufige Blocker

| Symptom | Wahrscheinliche Ursache | Empfohlene Aktion |
| --- | --- | --- |
| Azure wechselt nicht zum nächsten Schritt | Pflichtfeld leer oder ungültig | Alle mit `*` markierten Felder und Meldungen unter den Feldern prüfen |
| Administrator sieht Platform Administration nicht | Falsche Entra Object ID oder Gruppenmitgliedschaft noch nicht propagiert | Object ID der Gruppe und Kontomitgliedschaft prüfen |
| Netzwerkkonflikt bei Validierung | VNet CIDR bereits verwendet oder überlappend | Mit dem Netzwerkteam anderen Bereich wählen |
| KI-Anbieter nach Erstellung nicht nutzbar | Bereitstellung hat nur die Anbieterfamilie ausgewählt | Anbieter in Administration mit **Save**, **Validate**, **Test**, **Activate** abschließen |
| Zu viele Logs oder unerwartete Kosten | Debug Logging oder Alerting ohne Governance aktiviert | Azure-Monitor-Einstellungen anpassen und Debug außerhalb Diagnose deaktivieren |

## Weiter

- Für Entra-Zugriff öffnen Sie [Azure- und Entra-Administration](./admin-deploiement-marketplace-et-entra.md).
- Für den KI-Anbieter öffnen Sie [KI-Anbieter](./admin-fournisseur-ia.md).
- Für Lizenzen, Pläne und Updates öffnen Sie [Lizenzen, Pläne und Updates](./admin-licences-plans-et-mises-a-jour.md).
- Für Benutzer senden Sie [Erste Schritte](./demarrage.md).
