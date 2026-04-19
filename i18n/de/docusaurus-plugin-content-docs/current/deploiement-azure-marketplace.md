---
title: Azure Marketplace-Bereitstellung
slug: /deploiement-azure-marketplace
description: ProPM Agent über Azure Marketplace bereitstellen, den KI-Anbieter während der Installation auswählen und die Inbetriebnahme anschließend in der Administration abschließen.
---

[Startseite](./index.md) · [Start](./demarrage.md) · [Portfolio und technische Verwaltung](./portefeuille-et-administration-technique.md)

## Ziel

Diese Seite erklärt, wie man **ProPM Agent** aus dem **Azure Marketplace** bereitstellt und anschließend die Inbetriebnahme auf Kundenseite sauber abschließt.

Der wesentliche Punkt ist einfach:

- **Azure Marketplace installiert die Plattform**;  
- das Feld **LLM Provider** ermöglicht die Auswahl der **KI-Anbieterfamilie**, die von der Umgebung verwendet wird;  
- die endgültige Inbetriebnahme des KI-Anbieters erfolgt anschließend in **Platform Administration > KI-Anbieter-Einstellungen**.

Anders ausgedrückt: Die Bereitstellung allein reicht nicht aus, um den KI-Anbieter sofort für Endbenutzer nutzbar zu machen.

## Was ein Administrator während der Bereitstellung entscheidet

Während des Marketplace-Assistenten entscheidet der Administrator insbesondere:

- in welchem **Azure-Abonnement** die Lösung bereitgestellt wird;  
- in welcher **Ressourcengruppe** und in welcher **Region**;  
- welche **Entra-Gruppen** die Plattform verwalten;  
- welcher **Haupt-KI-Anbieter** die Umgebung nutzt;  
- welche anfänglichen Regeln für **CORS**, **Protokollierung**, **Überwachung** und **Netzwerk** gelten.

## Was nach der Bereitstellung abgeschlossen wird

Nach der Installation muss der Plattformadministrator noch:

1. **Platform Administration** öffnen;  
2. zu **KI-Anbieter-Einstellungen** gehen;  
3. die spezifischen Felder des gewählten Anbieters ausfüllen;  
4. die Konfiguration speichern;  
5. **Validate** ausführen;  
6. **Test** ausführen;  
7. **Activate** ausführen;  
8. anschließend den tatsächlich verwendeten Anbieter im **Journal IA** bestätigen.

## Vor dem Start der Bereitstellung

Bereiten Sie mindestens vor:

- das **Azure-Abonnement** Ziel;  
- die **Haupt-Ressourcengruppe** und die **Region**;  
- die **Group Object IDs Entra** der Plattformadministratoren;  
- eventuelle **Bootstrap-Benutzer**;  
- die Auswahl des **KI-Anbieters** für den Start;  
- wenn Sie **Azure OpenAI** wählen, der Administrator, der anschließend den **LLM Deployment Name** in der Verwaltung abschließt;  
- zusätzliche **CORS-Quellen**, falls die Anwendung von anderen Domains aufgerufen werden soll;  
- einen kompatiblen Adressierungsplan für das **VNet CIDR**;  
- die Vorbereitung des ersten Verbindungstests und der **Entra Redirect URIs**.

## Schritt 1 — Tab Basis

Der erste Schritt definiert den Azure-Bereich der Bereitstellung.

![Basis-Tab der Azure Marketplace Bereitstellung](/img/deploiement/deploiement-01-onglet-base.png)

### Sichtbare Felder

| Feld | Zweck |
| --- | --- |
| Abonnement | Wählt das Azure-Abonnement, das die Installation trägt |
| Ressourcengruppe | Definiert die Haupt-Ressourcengruppe der Bereitstellung |
| Region | Definiert die Azure-Region der Marketplace-Instanz |
| Name der Anwendung | Gibt den Namen der ProPM Agent-Instanz an |
| Managed Resource Group | Definiert die verwaltete Gruppe, die interne Lösungressourcen erhält |

## Schritt 2 — Tab Anwendungs-Einstellungen

Dieser Bildschirm fasst die Identitäts-, KI-Anbieter-, Sicherheits-, Überwachungs- und Netzwerkparameter zusammen.

![Aktuelle Anwendungs-Einstellungen der Bereitstellung](/img/deploiement/fr/deploiement-02-application-settings-actuel.png)

### Sichtbare Felder in der Aufnahme

| Feld | Einfaches Lesen |
| --- | --- |
| Environment Name | Kurzname der Umgebung, z. B. `dev`, `test` oder `prod` |
| Platform Administration Entra Group Object IDs | Entra-Gruppen, die die Plattform verwalten |
| Platform Administration Bootstrap Users (optional) | Backup- oder Bootstrap-Benutzer, falls verwendet |
| Allow Azure RBAC admin recovery | Erlaubt eine RBAC-basierte Administrator-Wiederherstellung |
| LLM Provider | Wählt die KI-Anbieterfamilie, die von der Umgebung verwendet wird |
| CORS Allowed Origins | Listet zusätzliche Web‑Domain‑Quellen auf |
| Enable alerting (Azure Monitor) | Aktiviert Azure Monitor‑Alarmierung |
| Enable debug logging | Aktiviert detaillierte Protokolle für technische Analyse |
| Mot de passe / Confirmer le mot de passe | Legt das anfängliche Passwort fest, das der Assistent verlangt |
| VNet CIDR | Definiert die private Netzwerk‑CIDR‑Bereich, der der Plattform zugewiesen ist |

### Wichtiger Hinweis

In der aktuellen Version des Formulars wird die **Region** nicht mehr in diesem Tab ausgewählt. Sie bleibt im Tab **Basis** definiert.

## Schritt 3 — Wählen Sie den KI-Anbieter während der Bereitstellung

Das Feld **LLM Provider** dient nicht nur für Azure OpenAI. Es ermöglicht die Auswahl eines der KI-Anbieter, die im Produkt sichtbar sind.

### Die 4 Fälle, die Sie kennen sollten

| KI-Anbieter | Wann wählen | Hauptvorteil | Was Sie während der Bereitstellung entscheiden | Was Sie anschließend in der Verwaltung abschließen |
| --- | --- | --- | --- | --- |
| **Azure OpenAI** | wenn die Kundengruppe bereits stark in Azure, Entra, Netzwerk und Microsoft‑Governance ist | natürliche Integration in das Azure‑Ökosystem | wählen Sie Azure OpenAI als Zielanbieter | geben Sie den Endpunkt, die API‑Version, das Authentifizierungs‑Modell und insbesondere den **LLM deployment name** ein |
| **OpenAI** | wenn der Kunde die OpenAI-Plattform direkt nutzen möchte | einfacher, direkter Ablauf | wählen Sie OpenAI als Zielanbieter | ergänzen Sie die verwendete URL, den Schlüssel oder die Secret‑Referenz, das Standardmodell und validieren und aktivieren |
| **OpenRouter** | wenn der Kunde mehrere Modellfamilien über einen einzigen Einstiegspunkt vergleichen möchte | ein einziger Anschluss für mehrere Modelle und Routings | wählen Sie OpenRouter als Zielanbieter | ergänzen Sie die Basis‑URL, den API‑Schlüssel oder die Secret‑Referenz, das Standardmodell, dann **Save → Validate → Test → Activate** |
| **OpenAI-compatible** | wenn der Kunde einen kompatiblen Endpoint nutzt, z. B. eine Unternehmens‑Gateway oder ein selbst‑gehostetes Runtime | ermöglicht die Anbindung eines kompatiblen Anbieters ohne Produktänderung | wählen Sie OpenAI-compatible als Zielanbieter | ergänzen Sie die genaue URL, die Authentifizierung und das erwartete Modell oder Deployment |

### Einfache Regel zum Behalten

Die Bereitstellung **weist den Anbieter** zu. Die Verwaltung **macht den Anbieter betriebsbereit**.

## Was der Endbenutzer tatsächlich wahrnimmt

Für den Endbenutzer beeinflusst der gewählte Anbieter:

- die tatsächlich genutzten **Modelle**;  
- das Niveau der **technischen Governance**, das die Organisation vorschreibt;  
- die Art, wie das Verwaltungsteam **Schlüssel**, **Secrets** und **Deployments** handhabt;  
- manchmal die **Schnelligkeit der Inbetriebnahme** oder die **Flexibilität beim Modellwechsel**.

Der Endbenutzer muss jedoch nicht die gesamte Installationsmechanik verstehen. Sein Bedarf besteht hauptsächlich darin, dass der Anbieter:

- konfiguriert;  
- validiert;  
- getestet;  
- aktiviert;  
- im **Journal IA** nachverfolgt wird.

## Fall 1 — Azure OpenAI

Die untenstehende Aufnahme zeigt das beobachtete Verhalten, wenn **LLM Provider** auf **Azure OpenAI** eingestellt ist.

![Auswahl Azure OpenAI mit Hinweis auf spätere Konfiguration in der Verwaltung](/img/deploiement/fr/deploiement-03-azure-openai-marketplace-managed.png)

### Wann diese Wahl sinnvoll ist

Wählen Sie **Azure OpenAI**, wenn der Kunde:

- bereits überwiegend in Azure arbeitet;  
- einen starken Rahmen um **Entra**, Netzwerk und Microsoft‑Governance möchte;  
- präzise Deployments in seiner Azure OpenAI‑Ressource auswählen möchte.

### Was dies während der Bereitstellung bedeutet

Während Marketplace:

- wählen Sie **Azure OpenAI** als Anbieter;  
- die Installation kann die zugehörige Azure‑Verbindung vorbereiten;  
- für den verwalteten Azure‑OpenAI‑Pfad prüft die Bereitstellung jetzt mehrere Azure‑OpenAI‑Regionen und wählt automatisch die beste verfügbare Region anhand der realen Modellverfügbarkeit;  
- die Runtime behält stabile Azure‑OpenAI‑Deployment‑Aliase `chat` und `embeddings`;  
- die exakte Runtime‑Modellwahl wird nicht mehr global zum Bereitstellungszeitpunkt fest eingefroren.

### Was noch nach der Installation zu erledigen ist

Nach der Bereitstellung öffnen Sie **Platform Administration > KI-Anbieter-Einstellungen** und bestätigen oder prüfen:

- die vom Deployment ausgewählte Azure‑OpenAI‑**Region**;  
- den für diese Region real entdeckten **Modellkatalog**;  
- das von der Plattform vorgeschlagene **empfohlene Modell**;  
- das aktuell ausgewählte Modell, das hinter dem stabilen Alias `chat` synchronisiert ist;  
- den Verbindungs- und Validierungsstatus.

### Wichtige Besonderheit

Wenn die Bereitstellung bereits ein Secret oder einen Schlüssel für Azure OpenAI installiert hat, kann die Oberfläche anzeigen, dass kein für den Benutzer sichtbarer **API‑Key** erforderlich ist. In diesem Fall konzentriert sich der Administrator vor allem auf Modellauswahl, Verbindungstests und Deployment‑Synchronisierung.

Wenn ein Administrator absichtlich eine GPT‑Generation unter **GPT-5** auswählt, sollte die UI vor dem Speichern eine klare Warnung anzeigen. Das Speichern eines neuen Azure‑OpenAI‑Modells sollte anschließend das reale Azure‑OpenAI‑Deployment hinter dem Alias `chat` synchronisieren, statt den Benutzer zum manuellen Umbenennen von Deployments zu zwingen.

## Fall 2 — OpenAI

### Wann diese Wahl sinnvoll ist

Wählen Sie **OpenAI**, wenn der Kunde die OpenAI‑APIs direkt nutzen möchte, ohne Azure OpenAI oder eine Zwischen‑Gateway zu verwenden.

### Praktische Vorteile

- in der Regel direktere Konfiguration;  
- einfache Lesbarkeit für ein Team, das bereits OpenAI standardisiert;  
- keine Verwaltung eines **Azure‑Deployment‑Namens**.

### Was Sie während der Bereitstellung entscheiden

Während Marketplace entscheiden Sie einfach, dass die Umgebung **OpenAI** als Hauptanbieter nutzt.

### Was noch nach der Installation zu erledigen ist

In **KI-Anbieter-Einstellungen** ergänzen Sie anschließend:

- die **Base URL** oder den Endpunkt, der vom Produkt verwendet wird;  
- das **Standardmodell**;  
- den **API‑Key** oder die **Secret‑Referenz**;  
- die Sequenz **Save → Validate → Test → Activate**.

### Auswirkung auf den Client

Der Endbenutzer muss diese Einstellungen nicht sehen. Was für ihn zählt, ist, dass der Administrator die Konnektivität und das tatsächlich genutzte Modell bestätigt hat.

## Fall 3 — OpenRouter

### Wann diese Wahl sinnvoll ist

Wählen Sie **OpenRouter**, wenn der Kunde mehrere Modellfamilien über einen einzigen Einstiegspunkt vergleichen möchte, z. B. um Ergebnisse zu vergleichen oder das Routing leichter anzupassen.

### Praktische Vorteile

- ein einziger Anschluss auf Plattformseite;  
- nützlich zum Vergleich mehrerer Modelle;  
- praktisch, wenn die Organisation Flexibilität beim Routing behalten möchte.

### Was Sie während der Bereitstellung entscheiden

Während Marketplace geben Sie an, dass die Umgebung **OpenRouter** als Hauptanbieter nutzt.

### Was noch nach der Installation zu erledigen ist

In **KI-Anbieter-Einstellungen** ergänzen Sie anschließend:

- die **Base URL**;  
- den **API‑Key** oder die Secret‑Referenz;  
- das **Standardmodell**;  
- dann **Save → Validate → Test → Activate**.

### Einfaches Beispiel

Ein Kunde möchte schnell starten, mehrere Modelle vergleichen und später seine Wahl stabilisieren. **OpenRouter** ist dann ein guter Kandidat für eine erste Phase der Planung.

## Fall 4 — OpenAI-compatible

### Wann diese Wahl sinnvoll ist

Wählen Sie **OpenAI-compatible**, wenn der Kunde weder OpenAI direkt noch Azure OpenAI nutzt, sondern einen **kompatiblen Endpoint**, z. B.:

- ein Unternehmens‑Gateway;  
- eine Partner‑Lösung;  
- ein selbst‑gehostetes Runtime.

### Praktische Vorteile

- ermöglicht die Anbindung eines kompatiblen Anbieters ohne ProPM Agent zu verändern;  
- nützlich, wenn die Client‑Architektur einen spezifischen IA‑Eingang erfordert;  
- gute Wahl für einen Tenant, der eine interne Kontroll‑ oder Routing‑Schicht behalten möchte.

### Was Sie während der Bereitstellung entscheiden

Während Marketplace geben Sie an, dass die Umgebung einen **OpenAI‑compatible** Anbieter nutzt.

### Was noch nach der Installation zu erledigen ist

In **KI-Anbieter-Einstellungen** ergänzen Sie anschließend:

- die genaue **Base URL** oder den Endpunkt;  
- das erwartete **Authentifizierungs‑Modell**;  
- die **Schlüssel** oder die Secret‑Referenz;  
- das **Modell** oder das erwartete Deployment;  
- dann **Save → Validate → Test → Activate**.

### Vorsicht

Hier ist das Hauptthema die reale **Kompatibilität** des Endpoints. Eine registrierte Konfiguration reicht nicht: das Paar **Validate + Test** ist unverzichtbar.

## Gemeinsamer Ablauf nach der Installation für alle KI-Anbieter

Unabhängig vom gewählten Anbieter während der Bereitstellung, nutzen Sie immer diesen Ablauf:

1. Öffnen Sie **Platform Administration**;  
2. Gehen Sie zu **KI-Anbieter-Einstellungen**;  
3. Wählen Sie den Anbieter, den Sie vorbereiten möchten;  
4. Füllen Sie die geforderten Felder aus;  
5. Klicken Sie auf **Save** zum Speichern;  
6. Klicken Sie auf **Validate** zur Konfigurationsprüfung;  
7. Klicken Sie auf **Test** zur tatsächlichen Verbindung;  
8. Klicken Sie auf **Activate** um den Anbieter für Endbenutzer wirksam zu machen;  
9. Öffnen Sie anschließend **Journal IA** um den tatsächlich genutzten Anbieter bei einem realen Lauf zu bestätigen.

### Wie man die Verwaltungsbuttons liest

| Button | Was es bedeutet |
| --- | --- |
| Save | speichert die eingegebene Konfiguration |
| Validate | prüft, ob die erwarteten Felder konsistent sind |
| Test | prüft die reale Konnektivität zum Anbieter |
| Activate | macht den Anbieter für Endbenutzer wirksam |

## Überprüfung vor Überprüfen + Erstellen

Bevor Sie die Erstellung starten:

1. Prüfen Sie das Abonnement, die Region und die Ressourcengruppen;  
2. Lesen Sie die Entra‑Gruppen und eventuelle Bootstrap‑Benutzer erneut;  
3. Bestätigen Sie den gewählten KI-Anbieter;  
4. Wenn **Azure OpenAI** ausgewählt ist, identifizieren Sie klar, wer den **LLM deployment name** nach der Installation abschließen wird;  
5. Prüfen Sie die Netzwerk‑, Überwachungs‑ und Passwort‑Parameter.

## Nach der Bereitstellung

### Minimale technische Überprüfungen

1. Ermitteln Sie die tatsächlich veröffentlichte **Web‑URL**;  
2. Prüfen Sie die **API‑URL**;  
3. Prüfen Sie die Verfügbarkeit von **`/runtime-config.json`**;  
4. Validieren Sie die Konsistenz zwischen der veröffentlichten URL und den **Entra Redirect URIs**;  
5. Öffnen Sie **Platform Administration > KI-Anbieter-Einstellungen** und bestätigen Sie, dass der gewählte Anbieter korrekt vorbereitet ist;  
6. Prüfen Sie anschließend, ob der erwartete Zustand durch **Configuration**, **Validation**, **Test** und **Operational** läuft.

### Entra‑Authentifizierung

Je nach Ihrem Bereitstellungsmodus prüfen oder finalisieren Sie die Entra‑Anwendungs‑Registrierung:

- `clientId`;  
- `authority` oder Tenant;  
- `scopes`;  
- `redirectUri` und `postLogoutRedirectUri`;  
- falls nötig, die exponierte API und ihre Scopes.

### Erstes funktionales Test

Nach der Veröffentlichung führen Sie mindestens Folgendes durch:

- eine Verbindung mit einem Standard‑Benutzerkonto;  
- eine Verbindung mit einem erwarteten Administrator‑Konto;  
- das Öffnen von **Projekte**;  
- das Öffnen des **Dashboard**;  
- das Öffnen von **Platform Administration > KI-Anbieter-Einstellungen**;  
- ein **Save → Validate → Test → Activate** des gewählten Anbieters, falls noch nicht erledigt;  
- eine Kontrolle des **Journal IA** um den tatsächlich genutzten Anbieter und die Modellfamilie zu bestätigen.

## Informationen, die an das Kundenteam weitergegeben werden

Nach technischer Validierung der Plattform übermitteln Sie mindestens:

1. die tatsächlich veröffentlichte **URL**;  
2. den erwarteten **Tenant** und ggf. die Regel für **Guest‑Einladungen**;  
3. das erste Testkonto oder die Testgruppe;  
4. den tatsächlich bereitstehenden KI-Anbieter;  
5. die Seite [Start](./demarrage.md) zur ersten Verbindung.

## Nützliche Kontrollpunkte nach der Installation

| Punkt zu prüfen | Warum es wichtig ist |
| --- | --- |
| Veröffentlichtes URL und Entra Redirect URIs | verhindert einen ersten Zugriff, der blockiert ist trotz erfolgreicher Bereitstellung |
| Gruppen der Verwaltung und Bootstrap‑Benutzer | garantiert den ersten Einstieg in die Verwaltung |
| Gewählter KI-Anbieter | verhindert Verwechslung eines nur deklarierten Anbieters mit einem tatsächlich operativen |
| Validierung und Test | bestätigt, dass die Konfiguration nicht nur gespeichert, sondern nutzbar ist |
| Journal IA | bestätigt den tatsächlich genutzten Anbieter bei einem Lauf |
| Azure‑Überwachung | garantiert, dass die gewünschte Beobachtbarkeit aktiv ist |

## Weiter

- [Start](./demarrage.md)  
- [Portfolio und technische Verwaltung](./portefeuille-et-administration-technique.md)  
- [Wartung, Support und FAQ](./maintenance-support-faq.md)
