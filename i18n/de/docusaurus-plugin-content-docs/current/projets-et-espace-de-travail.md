---
title: Projekte und Arbeitsbereich
slug: /projets-et-espace-de-travail
description: Erstellen Sie ein Projekt, delegieren Sie die ersten Rollen und nutzen Sie den Arbeitsbereich als Steuerzentrale.
---

[Startseite](./index.md) · [Oberfläche und Navigation](./interface-et-navigation.md) · [Zugriffskontrolle und Projektrollen](./controle-acces-et-roles.md)

![Espace de travail projet](/img/screenshots/localized/de/03-workspace-overview.png)

## Ziel

Diese Seite erklärt den Unterschied zwischen **Projekte**, **Arbeitsbereich** und **Agenten**, und beschreibt die tatsächlich in der Anwendung sichtbaren Projekteinstellungen.

## Drei zu unterscheidende Oberflächen

| Oberfläche | Wann man sie nutzt |
| --- | --- |
| Projekte | Erstellen eines Projekts, Öffnen eines bestehenden Projekts, Wechseln des Kontexts |
| Arbeitsbereich | Lesen der Projektzusammenfassung, operativen Transparenz, Signale und Projekteinstellungen |
| Agenten | Starten eines Live-Austauschs mit einem Agenten und Lesen der strukturierten Ausgabe des Runs |

In der Praxis dient **Projekte** dazu, in den richtigen Kontext zu gelangen, **Arbeitsbereich** zur Konfiguration und **Agenten** zur Ausnutzung.

## Projekt erstellen

Das beobachtete Formular enthält die folgenden Felder:

- **ID Projekt**;
- **Name**;
- **Beschreibung**;
- **Standard-Datensprache**;
- **Zusätzliche Datensprachen**.

Eingabeempfehlungen:

- wählen Sie eine lesbare und dauerhafte ID;
- verwechseln Sie nicht **Projekt-Datensprache** und **Interface-Sprache**;
- definieren Sie den Umfang korrekt, bevor Sie Wissen oder Agenten öffnen.

## Projektersteller: Anfangsrechte und Delegation

Beim Erstellen übernimmt der **Projektersteller** die Rolle **Projektbesitzer** und alle beobachteten Projektberechtigungen. In der Praxis ist er also derjenige, der das Projekt öffnen, die anfängliche Konfiguration prüfen und anschließend die Rollen an das restliche Team delegieren kann.

### Empfohlene Delegation unmittelbar nach der Erstellung

1. Öffnen Sie **Zugriffskontrolle**;
2. Fügen Sie mindestens einen weiteren **Projektbesitzer** oder einen vertrauenswürdigen **Projektleiter** hinzu;
3. Erstellen Sie bei Bedarf gezielte benutzerdefinierte Rollen statt mehrere Besitzer zu haben;
4. Weisen Sie anschließend Rollen an Mitwirkende, Leser und Auditoren zu;
5. Lesen Sie abschließend die **Governance-Richtlinien** und die **Projektintegrationen**, um Rechte, Connectoren und Validierungen abzustimmen.

### Was die Plattform weiterhin schützt

- Der **Ersteller** bleibt geschützt;
- Die Rolle des Erstellers bleibt in der beobachteten Oberfläche fest;
- Die Delegation erfolgt durch Zuweisung zusätzlicher Rollen, nicht durch Abschaffung des Erstellerschutzes;
- Für detailliertes RBAC siehe [Zugriffskontrolle und Rollen Projekt](./controle-acces-et-roles.md).

## Projekt öffnen und wechseln

Ein Projekt kann von folgenden Orten aus geöffnet werden:

- der Seite **Projekte**;
- dem **Projektselektor** in der oberen Leiste;
- dem zuletzt im Browser gespeicherten Kontext.

Wenn Sie das Projekt wechseln, werden die folgenden Oberflächen synchronisiert: **Wissen**, **Agenten**, **PM-Dokumente / Berichte & Artefakte**, **KI-Journal**, Signale und Projekteinstellungen.

### Aktiven Kontext, transversale Ansichten und Zurücksetzen klären

Behalten Sie diese Regeln einfach im Blick:

- **Arbeitsbereich**, **Wissen**, **Agenten**, **Berichte & Artefakte** und **KI-Journal** sind projektbezogene Oberflächen;
- **Portfolio** ist die wichtigste projektübergreifende Vergleichsansicht;
- `All projects` bei einem benutzerdefinierten Agenten betrifft die Sichtbarkeit und Wiederverwendung seiner Definition, nicht einen projektlosen Ausführungsmodus;
- ein Projektwechsel in der oberen Leiste ändert den persistierten aktiven Kontext, den die projektbezogenen Oberflächen verwenden;
- der saubere Produktweg zum Zurücksetzen eines gemerkten Projekts ist, zu **Projekte** zurückzukehren und das gewünschte Projekt ausdrücklich erneut zu öffnen, statt sich auf implizites Browserverhalten zu verlassen.

## Der Arbeitsbereich: Steuerzentrale des Projekts

Der **Arbeitsbereich** bündelt in einer Oberfläche:

- die **Projektzusammenfassung**;
- Verknüpfungen zu **Agenten**, **PM-Dokumenten** und **KI-Journal**;
- eine Sicht auf **operative Transparenz**;
- die **Signale** des Projekts;
- Registerkarten für Projekteinstellungen.

Diese französische Dokumentation enthält keinen dedizierten **Sprach**-Karten im **Arbeitsbereich**. Wenn eine Sprachsteuerung noch in einigen Umgebungen vorhanden ist, erfolgt sie in **Agenten**, nicht als separater Einstiegspunkt hier.

## Operative Transparenz und Vorbereitung

Der Arbeitsbereich dient nicht nur der Zusammenfassung des Projekts. Er ermöglicht auch zu sehen, ob das Projekt bereit ist zu handeln:

- Vorhandensein oder Fehlen von Signalen;
- Aktuelle Aktivität;
- Verknüpfungen zu Entwürfen oder zugehörigen Lieferungen;
- Vorbereitung der Projektintegrationen, falls vorhanden;
- Exposition des effektiven KI-Anbieters ohne Öffnen der Tenant-Konfiguration.

Nutzen Sie diesen Bereich, um zu verstehen **warum** eine Aktion oder ein Import verfügbar, bestätigt oder blockiert sein könnte.

## Registerkarten auf Projektebene

| Registerkarte | Zweck |
| --- | --- |
| Agentenkonfiguration | Agenten für dieses Projekt konfigurieren |
| Zugriffskontrolle | Mitglieder, Rollen und Projekteinstellungen verwalten |
| Dokumentenkategorien | Dokumenten-Taxonomie des Projekts anpassen und auf projektbezogene Oberflächen übertragen |
| Governance-Richtlinien | Connectors, Ziele, Aktionsrichtlinien, Renderprofile und Benachrichtigungspräferenzen auf Projektebene festlegen |
| Projektintegrationen | Projektbezogene, bereitgestellte und autorisierte Integrationen verbinden |
| Aktionen & Genehmigungen | Aktionsanfragen, Validierungen und gesteuerte Ausführung verwalten |

## Agentenkonfiguration

Die auf Projektebene bestätigten Parameter sind:

- `status`;
- `temperature`;
- `max tokens`.

### Sichtbare Einschränkungen

- `temperature` wird zwischen **0** und **2** erwartet;
- `max tokens` muss eine ganze Zahl ≥ **1** sein.

### Konfigurationsverlauf

Die Oberfläche zeigt auch einen Versionsverlauf mit mindestens:

- Versionsnummer;
- Status;
- Temperatur;
- Max Tokens;
- Erstellungsdatum;
- Autor;
- zugehörige `Trace ID`.

![Réglages des agents au niveau projet](/img/screenshots/localized/de/12-agent-configuration.png)

## Zugriffskontrolle

Die Registerkarte **Zugriffskontrolle** verwaltet Mitglieder und Projektrollen. Sie unterstützt:

- Standardrollen;
- Benutzerdefinierte Rollen;
- RBAC-Schutzmechanismen;
- Nur-Lese-Zugriff für nicht autorisierte Profile.

Siehe die zugehörige Seite: [Zugriffskontrolle und Rollen Projekt](./controle-acces-et-roles.md).

## Dokumentenkategorien

Diese Registerkarte dient dazu, die Dokumentenklassifizierung mit dem Projekt abzugleichen. In der Praxis beeinflusst die Projekt-Taxonomie die vorgeschlagenen Kategorien bei Uploads und einige Dokumentenauswahl-Filter, die später in Projektoberflächen verwendet werden.

### Konkreter Effekt einer Aktualisierung

Wenn die Kategorienliste erfolgreich geändert wird:

- Der Kategorieauswahl-Filter beim Upload in **Wissen** wird aktualisiert;
- Die Kategoriefilter in **PM-Dokumenten** passen sich an, wenn sie diese geteilte Taxonomie nutzen;
- Die Änderung bleibt auf das **aktuelle Projekt** beschränkt.

### Praktische Beispiele

Halten Sie eine kurze und stabile Taxonomie. Zum Beispiel, anstatt Varianten zu multiplizieren, bevorzugen Sie ein paar konsistente Kategorien wie:

- Projektcharte;
- Risikoregister;
- Statusbericht;
- Einkaufsplan;
- Kommunikationsplan.

Das Ziel ist nicht, die Dokumentenversion in der Kategorie zu kodieren, sondern eine wiederverwendbare Klassifizierung zwischen **Wissen** und **PM-Dokumenten** zu behalten.

![Catégories documentaires du projet](/img/screenshots/localized/de/13-document-categories.png)

## Governance-Richtlinien

Diese Registerkarte legt die Regeln fest, die Entscheidungen, Validierungen und Governance-Verhalten des Projekts umrahmen. Nutzen Sie sie vor der Veröffentlichung eines Lieferobjekts oder der Genehmigung einer externen Aktion.

### Unteroberflächen in Governance-Richtlinien

| Unteroberfläche | Was sie regelt |
| --- | --- |
| Ausführungs-Connectoren | Typ des Connectors, Status, Ausführungsmodus, Umgebung, Scopes und Kontextparameter |
| Artefaktziele | Ziel des Artefakts, zugehöriger Connector, Aktivität oder Standard |
| Aktionsrichtlinien | Betroffene Rolle, Ziel-Connector, Aktionsniveau (`observe`, `draft`, `propose`, `execute`), Wirkung (`allow`, `require_approval`, `deny`) und erlaubte Scopes |
| Renderprofile | Renderprofile und Ausgabeformate, die bei gesteuerten Veröffentlichungen verwendet werden |
| Benachrichtigungspräferenzen | Kanal, Benachrichtigungstyp, Digest-Modus, Schweregrenzwert und Aktivierung der Präferenz |

### Nützliche Einstellungsexemplare

- Erfordern Sie eine explizite Genehmigung vor einer Veröffentlichung zu **SharePoint**;
- Erlauben Sie die Erstellung von **Jira**-Tickets nur auf `propose`-Ebene für bestimmte Rollen;
- Bereiten Sie `signal_digest` in `in_app` für interne Nachverfolgung vor;
- Lassen Sie externe Benachrichtigungen `email`, `teams` oder `webhook` in einem genehmigten Pfad nur, wenn der Connector gesund ist;
- Wählen Sie getrennte Renderprofile für **DOCX** und **XLSX** Veröffentlichungen.

### Glaubwürdiges Szenario – sensibles Projekt / gesteuerte Veröffentlichung

Für ein Projekt, bei dem jede externe Veröffentlichung kontrolliert werden muss, sieht eine konsistente Einstellung oft so aus:

1. **Artefaktziele**: SharePoint-Ziel aktiv mit bekanntem Renderprofil;
2. **Aktionsrichtlinien**: `allow` für `observe` und `draft`, aber `require_approval` für `execute` bei Veröffentlichungen und externen Benachrichtigungen;
3. **Ausführungs-Connectoren**: Externe Connectoren nur für tatsächlich autorisierte Rollen sichtbar;
4. **Benachrichtigungspräferenzen**: `signal_digest` in `daily` für das Team, `signal_alert` nur für die sensibelsten Fälle;
5. **Projektintegrationen**: Bindings aktiviert nur für bereits validierte Connectoren auf Plattformebene.

Diese Kombination verhindert, dass ein Entwurf, ein Digest oder eine Aktion als direkt veröffentlichbar erscheint, während das Projekt noch eine menschliche Genehmigung benötigt.

![Politiques de gouvernance du projet](/img/screenshots/localized/de/14-governance-policies.png)

## Projektintegrationen

Diese Registerkarte trennt technisch definierte **Plattformintegrationen** von denen, die tatsächlich vom Projekt nutzbar sind.

### Explizit beobachtete Blockierungsgründe

Eine Projektintegration oder eine Importoption kann aus folgenden Gründen blockiert sein:

- Entitlement;
- Policy;
- Permission;
- zu prüfender Gesundheitszustand;
- fehlende oder deaktivierte Plattformdefinition;
- deaktivierte Projektbindung.

### Wie man eine Bindungsblockade interpretiert

| Sichtbare Ursache | Praktische Lesung | Empfohlene Reflexion |
| --- | --- | --- |
| `entitlement` | Das abonnierten oder autorisierten Kapazitäten decken diesen Connector oder diese Nutzungsfamilie nicht ab | Prüfen Sie das Abonnement und die Kapazitäten in [Portfolio und technische Administration](./portefeuille-et-administration-technique.md) |
| `policy` | Die Projektgovernance verbietet oder limitiert diesen Fluss | Lesen Sie **Governance-Richtlinien** vor der Änderung der Bindung |
| `permission` | Der Connector existiert, aber Ihre Rolle erlaubt es nicht, ihn zu aktivieren oder zu nutzen | Prüfen Sie die Projektrolle in [Zugriffskontrolle und Rollen Projekt](./controle-acces-et-roles.md) |
| `health` | Die Plattformdefinition existiert, aber ihre Vorbereitung oder Verfügbarkeit erfordert Prüfung | Öffnen Sie die **Plattformadministration** zur Bestätigung der technischen Definition |
| fehlende oder deaktivierte Definition | Nichts ist auf Tenant-Ebene wirklich bereit | Bitten Sie zunächst um Einrichtung oder Reaktivierung der Plattform |
| fehlende Projektbindung | Die Plattform ist bereit, aber das Projekt nutzt die Integration noch nicht | Aktivieren Sie explizit die Bindung auf Projektebene |

Wenn eine Blockade anhält, öffnen Sie anschließend **Plattformadministration**, um die technische Definition zu prüfen, und kehren Sie zum Projekt zurück, um die Bindung und Vorbereitung zu bestätigen.

### Jira, SharePoint und Connector-Kette

![Flux Jira et SharePoint entre plateforme, projet et actions](/img/diagrams/de/connecteurs-jira-sharepoint-workflow.svg)

Halten Sie diese Logik einfach:

1. **Plattformintegrationen** definieren den Connector oder den Ingestionsanbieter;
2. **Projektintegrationen** zeigen nur die genehmigten und bereitgestellten Bindungen;
3. **Governance-Richtlinien** entscheiden, welche Rolle beobachten, vorbereiten, vorschlagen oder ausführen kann;
4. **Aktionen & Genehmigungen** wenden diese Regeln bei der tatsächlichen Anfrage an;
5. **PM-Dokumente** und **KI-Journal** behalten die Spur des Flusses.

Siehe die zugehörige Seite: [Connectoren und Integrationen](./connecteurs-jira-et-sharepoint).

## Aktionen & Genehmigungen

Diese Registerkarte wandelt eine Empfehlung in eine kontrollierte Operation um. Eine Aktion kann **sichtbar** aber nicht **ausführbar** sein, wenn:

- Sie haben nicht die richtige Berechtigung;
- Der kompatible Connector ist nicht bereit;
- Die Projektbindung begrenzt die Aktion;
- Die erforderliche Genehmigung wurde noch nicht erteilt.

## Nur-Lese oder Zugriff verweigert

- **Nur-Lese**: Die Registerkarte bleibt sichtbar, aber das Speichern ist blockiert;
- **Zugriff verweigert**: Die Route oder Aktion ist für Ihr Konto nicht verfügbar.

Dieser Unterschied ist besonders wichtig für **Zugriffskontrolle**, **Projektintegrationen** und die Governance-Einstellungen.

## Empfohlener Ablauf nach Projekterstellung

1. Öffnen Sie den **Arbeitsbereich**;
2. Prüfen Sie zunächst den **Ersteller**, die **Mitglieder** und die **Rollen**, wenn das Projekt kollaborativ ist;
3. Passen Sie anschließend die **Dokumentenkategorien** an;
4. Lesen Sie die **Governance-Richtlinien** vor jeder externen Veröffentlichung;
5. Verbinden Sie ausschließlich die tatsächlich bereitgestellten **Projektintegrationen**;
6. Laden Sie anschließend die **Wissen**;
7. Gehen Sie schließlich zu **Agenten**, **PM-Dokumenten** und **Aktionen & Genehmigungen**.

## Zwei nützliche Konfigurationsszenarien

### Szenario 1 – neues Projekt minimal

Für ein Projekt, das startet, behalten Sie eine einfache Reihenfolge:

1. Fügen Sie die notwendigen Mitglieder hinzu und prüfen Sie deren Rollen;
2. Erstellen Sie eine kurze Dokumenten-Taxonomie in **Dokumentenkategorien**;
3. Aktivieren Sie nur die bereits validierten und wirklich notwendigen Integrationen;
4. Bereiten Sie eine minimale Governance vor, z. B. einen internen Digest und ein Standard-Artefaktziel;
5. Laden Sie anschließend die **Wissen** vor dem Öffnen der Agenten.

Dieses Szenario verhindert, dass zu früh Connectoren oder Verteilungsregeln verwendet werden, die sofort nicht genutzt werden.

### Szenario 2 – sensibles Projekt / gesteuerte Veröffentlichung

Für ein Projekt, das externe Benachrichtigungen oder eine formelle Dokumentenveröffentlichung ausgesetzt ist:

1. Beschränken Sie Rollen, die Zugriff auf externe Connectoren haben;
2. Bereiten Sie ein SharePoint- oder Äquivalentziel in **Artefaktziele** vor;
3. Wenden Sie `require_approval` auf die Aktionsstufen an, die externe Veröffentlichung erzeugen können;
4. Bevorzugen Sie `signal_digest` für die aktuelle Nachverfolgung und reservieren Sie sofortige Alarme für kritische Fälle;
5. Machen Sie in **Projektintegrationen** nur die Bindungen sichtbar, deren Vorbereitung und Politik bereits konform sind.

Dieses zweite Szenario richtet die Signalüberwachung, Veröffentlichung, Genehmigung und reale Ausführung aufeinander ab, anstatt das Team jede Oberfläche als unabhängige Fläche zu behandeln.

## Weiter

- [Zugriffskontrolle und Rollen Projekt](./controle-acces-et-roles.md)
- [Wissen und Agenten](./connaissance-et-agents.md)
- [Governance, Entscheidungen und Aktionen](./gouvernance-decisions-et-actions.md)
- [Connectoren und Integrationen](./connecteurs-jira-et-sharepoint)
- [Portfolio und technische Administration](./portefeuille-et-administration-technique.md)
