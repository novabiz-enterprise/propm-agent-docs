---
title: Azure Marketplace-Bereitstellung
slug: /deploiement-azure-marketplace
description: Starten Sie eine ProPM Agent-Bereitstellung über den Azure Marketplace, füllen Sie die aktuellen Felder des Assistenten aus und schließen Sie Azure OpenAI nach der Installation ab.
---

[Startseite](./index.md) · [Erste Schritte](./demarrage.md) · [Portfolio und technische Administration](./portefeuille-et-administration-technique.md)

## Ziel

Diese Seite dokumentiert den im Azure Portal-Assistenten beobachteten Bereitstellungsablauf für das Marketplace-Angebot ProPM Agent, basierend auf den bereitgestellten Screenshots und den im Repository bestätigten Parametern.

## Vor dem Start der Bereitstellung

Bereiten Sie mindestens vor:

- das Ziel-**Azure-Abonnement**;
- die Strategie für **Ressourcengruppe** und **Azure-Region**;
- die **Group Object IDs** der Plattformadministratoren in Entra;
- die Bootstrap-Benutzer, falls verwendet;
- die Wahl des **LLM-Anbieters**;
- falls Sie **Azure OpenAI** wählen, den Administrator, der anschließend die LLM-Bereitstellung in der **Plattformadministration** abschließt;
- zusätzliche **CORS-Origins**, falls erforderlich;
- einen kompatiblen Adressierungsplan für das **VNet CIDR**;
- die Nachbereitstellungssequenz für die Entra-Authentifizierung und den ersten Verbindungstest.

## Schritt 1 — Registerkarte **Grundlagen**

Der erste Schritt dient dazu, den Azure-Bereich der Bereitstellung zu definieren.

![Registerkarte Grundlagen der Azure Marketplace-Bereitstellung](/img/deploiement/deploiement-01-onglet-base.png)

### Sichtbare Felder

| Feld | Verwendung |
| --- | --- |
| Abonnement | Wählt das Azure-Abonnement aus, das die Bereitstellung trägt |
| Ressourcengruppe | Definiert die Hauptressourcengruppe der Bereitstellung |
| Region | Definiert die Bereitstellungsregion der Managed Application |
| Anwendungsname | Definiert den Namen der veröffentlichten Instanz |
| Verwaltete Ressourcengruppe | Definiert die verwaltete Gruppe, die für interne Ressourcen der Lösung erstellt wird |

Der Screenshot zeigt auch das Dialogfeld **Neu erstellen** für die Ressourcengruppe.

## Schritt 2 — Registerkarte **Anwendungseinstellungen**

Die aktuell beobachtete Version der Registerkarte **Anwendungseinstellungen** zeigt kein Feld **Platform Region** mehr. Dieser Bildschirm fasst nun die Parameter für Identität, KI-Anbieter, initiale Sicherheit, Überwachung und Netzwerk zusammen.

![Aktuelle Anwendungseinstellungen der Bereitstellung](/img/deploiement/fr/deploiement-02-application-settings-actuel.png)

### In der Aufnahme sichtbare Felder

| Feld | Beobachtete Verwendung |
| --- | --- |
| Environment Name | Kurzer Umgebungsname, z.B. `dev`, `test` oder `prod` |
| Platform Administration Entra Group Object IDs | Entra-Gruppe(n), die für die Plattformadministration verwendet werden |
| Platform Administration Bootstrap Users (optional) | Optionale Bootstrap-Benutzer |
| Allow Azure RBAC admin recovery | Aktiviert eine Admin-Wiederherstellung basierend auf Azure RBAC |
| LLM Provider | Wählt den von der Plattform verwendeten KI-Anbieter; wenn Azure OpenAI ausgewählt ist, erfolgt die endgültige LLM-Auswahl anschließend in der Administration |
| CORS Allowed Origins | Definiert zusätzlich erlaubte Web-Origins |
| Enable alerting (Azure Monitor) | Aktiviert die Azure Monitor-Alert-Überwachung |
| Enable debug logging | Aktiviert detailliertere Diagnoseprotokolle |
| Passwort / Passwort bestätigen | Definiert das vom Assistenten erforderliche Initialpasswort |
| VNet CIDR | Definiert den privaten Netzwerkbereich der Plattform |

Hinweise: In der aktuellen Version des Formulars erfolgt die Regionswahl nicht mehr in dieser Registerkarte. Die Bereitstellungsregion bleibt in der Registerkarte **Grundlagen** definiert. Die Entra-Gruppen müssen vor der Bereitstellung vorbereitet werden und das **VNet CIDR** darf nicht mit Ihrem bestehenden Adressierungsplan kollidieren.

Das Feld **LLM Provider** bleibt der Auswahlpunkt für den KI-Anbieter; der Fall **Azure OpenAI** fügt anschließend einen Schritt der Administration nach der Bereitstellung hinzu.

## Schritt 3 — Fall **Azure OpenAI** während der Bereitstellung

Die folgende Aufnahme zeigt das beobachtete Verhalten, wenn **LLM Provider** auf **Azure OpenAI (marketplace-managed account)** gesetzt ist.

![Azure OpenAI-Auswahl mit Hinweis auf spätere Konfiguration in der Administration](/img/deploiement/fr/deploiement-03-azure-openai-marketplace-managed.png)

Der unter dem Feld sichtbare Hilfetext bestätigt zwei wichtige Punkte:

- die Vorbereitung des Azure OpenAI-Kontos / Endpunkts erfolgt während der Bereitstellung;
- die endgültige Wahl des **LLM / deployment** wird später in **Platform Administration > AI Provider Settings** vervollständigt.

### Was das bedeutet

| Zeitpunkt | Getroffene Entscheidung |
| --- | --- |
| Marketplace-Bereitstellung | Man wählt Azure OpenAI als Zielanbieter und bereitet die zugehörige Azure-Integration vor |
| Administration der Plattform > AI provider settings | Der Administrator wählt das Azure OpenAI-Deployment, das tatsächlich in der Azure OpenAI-Ressource des Kunden sichtbar ist |
| KI-Protokoll | Anschließend überprüft man den effektiven Anbieter und die tatsächlich verwendete Modellfamilie |

### Was die Bereitstellung nicht alleine abschließt

Die Auswahl **Azure OpenAI** im Marketplace reicht nicht aus, um den Anbieter direkt für Endbenutzer nutzbar zu machen. Nach der Installation bleibt noch:

1. **Administration der Plattform** öffnen;
2. die Parameter des Anbieters in **AI provider settings** ausfüllen oder bestätigen;
3. den tatsächlich auf Azure OpenAI-Seite sichtbaren **LLM deployment name** auswählen;
4. **Save → Validate → Test → Activate** starten, bevor der Anbieter als betriebsbereit gilt;
5. das Ergebnis schließlich in einem echten Run im **KI-Protokoll** bestätigen.

| Fall | Was bei der Bereitstellung entschieden wird | Was anschließend in der Administration abgeschlossen wird |
| --- | --- | --- |
| Azure OpenAI (`marketplace-managed account`) | Zielanbieter und Vorbereitung der Azure-Integration | Auswahl des LLM-Deployments, Validierung, Test und Aktivierung |
| Anderer in `LLM Provider` gewählter Anbieter | Wahl des Zielanbieters während der Installation | Feinkontrollen, ggf. Secrets, Validierung und Aktivierung je nach Anbieter |

### Empfohlener Ablauf nach der Installation

1. schließen Sie die Marketplace-Bereitstellung ab;
2. öffnen Sie **Administration der Plattform**;
3. gehen Sie zu **AI provider settings**;
4. wählen Sie das zu verwendende Azure OpenAI-Deployment / LLM aus den in der Azure OpenAI-Ressource des Kunden sichtbaren aus;
5. speichern Sie die Konfiguration;
6. starten Sie einen Test-Run und überprüfen Sie das Ergebnis im **KI-Protokoll**.

Für die detaillierte Abfolge von Validierung und Admin-Operation siehe auch [Portfolio und technische Administration](./portefeuille-et-administration-technique.md).

## Überprüfung vor **Überprüfen + erstellen**

Vor der Validierung:

1. kontrollieren Sie Abonnement, Region und Ressourcengruppen;
2. lesen Sie die Entra-Gruppen und Bootstrap-Benutzer erneut;
3. bestätigen Sie den gewählten LLM-Anbieter;
4. falls **Azure OpenAI** ausgewählt ist, identifizieren Sie, wer die LLM-Bereitstellung in der Administration nach der Installation abschließt;
5. kontrollieren Sie die Netzwerk-, Überwachungs- und Passwortwerte.

## Nach der Bereitstellung

### Minimale technische Überprüfungen

1. notieren Sie die tatsächlich veröffentlichte **Web-URL**;
2. überprüfen Sie die **API-URL** und, falls exponiert, die **WebSocket-URL**;
3. überprüfen Sie die Verfügbarkeit von **`/runtime-config.json`**;
4. validieren Sie die Konsistenz zwischen der veröffentlichten URL und den **Redirect URIs** in Entra;
5. falls **Azure OpenAI** gewählt wurde, öffnen Sie **Platform Administration > AI provider settings** und vergewissern Sie sich, dass das erwartete Deployment / LLM ausgewählt ist.

### Entra-Authentifizierung

Je nach Bereitstellungsmodus überprüfen oder schließen Sie die Entra-App-Registrierung ab:

- `clientId`;
- `authority` / tenant;
- `scopes`;
- `redirectUri` und `postLogoutRedirectUri`;
- falls erforderlich, die exponierte API und ihre Scopes.

### Erster Funktionstest

Nach der Veröffentlichung führen Sie mindestens durch:

- eine Verbindung mit einem Standard-Benutzerkonto;
- eine Verbindung mit einem erwarteten Administratorkonto;
- das Öffnen von **Projekte**;
- das Öffnen des **Dashboards**;
- eine schnelle Kontrolle von **Platform Administration > AI provider settings**, falls Azure OpenAI gewählt wurde;
- eine Kontrolle des **KI-Protokolls**, um den effektiven Anbieter und die verwendete Modellfamilie zu bestätigen.

## Übergabe an den ersten Testbenutzer

Sobald die Bereitstellung technisch validiert ist, formalisieren Sie eine kurze Übergabe an den Testbenutzer oder den ersten Projektinhaber:

1. übermitteln Sie die tatsächlich nutzbare **veröffentlichte URL**;
2. bestätigen Sie den erwarteten **Tenant** und, falls erforderlich, die Regel für die Einladung von **Gastkonten**;
3. bitten Sie den Tester, der Seite [Erste Schritte](./demarrage.md) für den ersten Login und die Erstellung oder Auswahl des Projekts zu folgen;
4. falls **Azure OpenAI** gewählt wurde, bestätigen Sie, dass der LLM vor dem ersten Run in **Administration der Plattform** präzisiert wurde;
5. falls der erste Test fehlschlägt, erfassen Sie sofort die Testzeit, das genaue Symptom und, falls vorhanden, die erste für den Support nützliche **Trace ID**.

Diese Übergabe reduziert Fehldiagnosen zwischen einer technisch erfolgreichen Bereitstellung und einem noch unvollständigen Benutzerzugang.

## Häufige Vorfälle nach der Installation

- **`redirect URI mismatch`**: Die veröffentlichte URL stimmt nicht mit den Entra Redirect URIs überein.
- **`unauthorized_client`**: Client-ID im falschen Tenant oder inkompatible Authority.
- **resource principal not found**: Die API oder ihre Scope-Exposition ist nicht vollständig konfiguriert.
- **keine verfügbaren Lizenzen mehr**: Die Entra-Verbindung gelingt, aber der Produktzugang bleibt blockiert.
- **unvollständige Azure OpenAI-Konfiguration**: Der Anbieter wurde bei der Bereitstellung gewählt, aber noch kein LLM-Deployment wurde in **AI provider settings** bestätigt.
- **Azure-Anbieter für Alerting nicht registriert**: Einige Azure Monitor-Ressourcen können fehlschlagen, wenn der erforderliche Anbieter nicht registriert ist.

## Qualität der integrierten Aufnahmen

Die drei in dieser Seite integrierten Aufnahmen zeigen **keine sichtbaren Fehlermeldungen** oder Fehlerbanner.

- die erste Aufnahme zeigt ein Dialogfeld zur Erstellung einer Ressourcengruppe mit einem noch leeren Feld, ohne angezeigten Fehler;
- die zweite Aufnahme zeigt die aktuelle Version der Registerkarte **Anwendungseinstellungen**, ohne sichtbares Feld **Platform Region**;
- die dritte Aufnahme zeigt **Azure OpenAI (marketplace-managed account)** ausgewählt, mit einem Hilfetext, der explizit auf die endgültige LLM-Wahl in der Administration verweist.

## Weiterführend

- [Erste Schritte](./demarrage.md)
- [Portfolio und technische Administration](./portefeuille-et-administration-technique.md)
- [Wartung, Support und FAQ](./maintenance-support-faq.md)
