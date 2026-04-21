---
title: Projekte und Arbeitsbereich
slug: /projets-et-espace-de-travail
description: Erstellen Sie ein Projekt, delegieren Sie die ersten Rollen und nutzen Sie den Arbeitsbereich als Steuerzentrale.
---

[Startseite](./index.md) · [Oberfläche und Navigation](./interface-et-navigation.md) · [Zugriffskontrolle und Projektrollen](./controle-acces-et-roles.md)

![Projektarbeitsbereich](/img/screenshots/localized/de/03-workspace-overview.png)

## Ziel

Diese Seite erklärt den Unterschied zwischen **Projekte**, **Arbeitsbereich** und **Agenten**, und beschreibt die tatsächlich in der Anwendung sichtbaren Projekteinstellungen.

## Drei zu unterscheidende Oberflächen

| Oberfläche | Wann man sie nutzt |
| --- | --- |
| Projekte | Erstellen eines Projekts, Öffnen eines bestehenden Projekts, Wechseln des Kontexts |
| Arbeitsbereich | Lesen der Projektzusammenfassung, operativen Transparenz, Signale und Projekteinstellungen |
| Agenten | Starten eines Live-Austauschs mit einem Agenten und Lesen der strukturierten Ausgabe des Runs |

In der Praxis dient **Projekte** dazu, in den richtigen Kontext zu gelangen, **Arbeitsbereich** zur Konfiguration und **Agenten** zur Ausnutzung.

## Die genaue Rolle des aktiven Projekts

Das **aktive Projekt** ist der Kontext, der aktuell auf projektbezogene Arbeitsseiten angewendet wird.

Konkret bestimmt es:

- welche Dokumente in **Knowledge** sichtbar sind;
- welche Runs in **Agents** gestartet werden;
- welche PM-Dokumente, Artefakte und Diffs in **Reports & artifacts** sichtbar sind;
- welche Runs und Ereignisse in **AI Log** erscheinen;
- welche Signale, Integrationen und Richtlinien im **Workspace** erscheinen.

Verwechseln Sie es deshalb nicht mit:

- **Portfolio**, einer Mehrprojekt-Vergleichsfläche;
- **All projects**, einem optionalen Sichtbarkeitsbereich benutzerdefinierter Agenten über mehrere Projekte desselben Kontos hinweg.

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

Wenn Sie das Projekt wechseln, werden die folgenden Oberflächen synchronisiert: **Wissen**, **Agenten**, **PM-Dokumente / Berichte & Artefakte**, **KI-Log**, Signale und Projekteinstellungen.

Der Projektwechsel ändert damit tatsächlich den **aktiven Kontext**, der für Dokumentensuche, Agentengespräche, Berichte und die zugehörige Nachvollziehbarkeit verwendet wird.

Das zuletzt gemerkte Projekt kann lokal im Browser gespeichert werden, um die Wiederaufnahme zu erleichtern; diese lokale Erinnerung ist jedoch keine plattformweit geteilte Einstellung.

## Der Arbeitsbereich: Steuerzentrale des Projekts

Der **Arbeitsbereich** bündelt in einer Oberfläche:

- die **Projektzusammenfassung**;
- Verknüpfungen zu **Agenten**, **PM-Dokumenten** und **KI-Log**;
- eine Sicht auf **operative Transparenz**;
- die **Signale** des Projekts;
- Registerkarten für Projekteinstellungen.

Diese Dokumentation zeigt keine eigene **Sprach**-Karte mehr im **Arbeitsbereich**. Wenn Spracheingabe in einigen Umgebungen noch vorhanden ist, erfolgt sie in **Agenten** und nicht als separater Einstiegspunkt hier.

## Operative Transparenz und Vorbereitung

Der Arbeitsbereich dient nicht nur der Zusammenfassung des Projekts. Er ermöglicht auch zu sehen, ob das Projekt bereit ist zu handeln:

- Vorhandensein oder Fehlen von Signalen;
- Aktuelle Aktivität;
- Verknüpfungen zu Entwürfen oder zugehörigen Lieferungen;
- Vorbereitung der Projektintegrationen, falls vorhanden;
- Anzeige des tatsächlich verwendeten KI-Anbieters ohne Öffnen der Tenant-Konfiguration.

Nutzen Sie diesen Bereich, um zu verstehen **warum** eine Aktion oder ein Import verfügbar, bestätigt oder blockiert sein könnte.

![Projekt-Signale und Benachrichtigungsentwürfe](/img/screenshots/localized/de/15-workspace-signals.png)

## Wie Signale, Digests und Entwürfe eintreffen

In der beobachteten Anwendung liest das Signale-Panel des Projekts drei geteilte Plattformflüsse für das **aktive Projekt** erneut:

- aktuelle **Signale**;
- aktuelle **Digests**;
- **Benachrichtigungsentwürfe**, die mit diesen Signalen verbunden sind.

Nützliche Lesart:

- das Öffnen des Arbeitsbereichs lädt den bereits bekannten gemeinsamen Zustand dieses Projekts;
- **Refresh** fordert das System ausdrücklich auf, das Projekt erneut auszuwerten und die neuesten proaktiven Signale zu ziehen;
- **Generate digest draft** erstellt eine neue gruppierte Zusammenfassung und kann `in_app`-Benachrichtigungsentwürfe vorbereiten;
- diese Elemente sind daher nicht nur lokale Browser-Notizen.

## Registerkarten auf Projektebene

| Registerkarte | Zweck |
| --- | --- |
| Agentenkonfiguration | Agenten für dieses Projekt konfigurieren |
| Zugriffskontrolle | Mitglieder, Rollen und Projekteinstellungen verwalten |
| Dokumentenkategorien | Dokumenten-Taxonomie des Projekts anpassen und auf projektbezogene Oberflächen übertragen |
| Governance-Richtlinien | Connectoren, Ziele, Aktionsrichtlinien, Renderprofile und Benachrichtigungspräferenzen auf Projektebene festlegen |
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

![Agenteneinstellungen auf Projektebene](/img/screenshots/localized/de/12-agent-configuration.png)

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

![Dokumentenkategorien des Projekts](/img/screenshots/localized/de/13-document-categories.png)

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

![Governance-Richtlinien des Projekts](/img/screenshots/localized/de/14-governance-policies.png)

## Projektintegrationen

Diese Registerkarte trennt technisch definierte **Plattformintegrationen** von denen, die tatsächlich vom Projekt nutzbar sind.

### Wie Sie diese Registerkarte lesen

**Projektintegrationen** ist nicht der Ort, an dem die vollständige technische Konfiguration des gesamten Tenants vorgenommen wird. Die Registerkarte dient vor allem dazu, die operative Einsatzbereitschaft des Projekts zu lesen: was dieses Projekt sehen kann, was bereit ist und was mit expliziter Ursache blockiert bleibt.

Sie können dort typischerweise mehrere Informationsfamilien ablesen:

- **Ausführungs-Connectoren**: gesteuerte Ausführungsoptionen zu externen Systemen;
- **Ingestionsanbieter**: Importquellen, die anschließend von **Wissen** genutzt werden;
- **Transparenz der KI-Laufzeit**: effektiver KI-Anbieter und der beim Deployment ausgewählte Anbieter;
- **Entitlement-Status**: sichtbare Plan-, Lizenzplatz- oder Premium-Funktionslage des Projekts.

### Explizit beobachtete Blockierungsgründe

Eine Projektintegration oder eine Importoption kann aus folgenden Gründen blockiert sein:

- Entitlement;
- Policy;
- Permission;
- zu prüfender Gesundheitszustand;
- fehlende oder deaktivierte Plattformdefinition;
- fehlende oder nicht konfigurierte Projektbindung.

### Wie man eine Bindungsblockade interpretiert

| Sichtbare Ursache | Praktische Lesung | Empfohlene Reflexion |
| --- | --- | --- |
| `entitlement` | Die abonnierten oder autorisierten Kapazitäten decken diesen Connector oder diese Nutzungsfamilie nicht ab | Prüfen Sie das Abonnement und die Kapazitäten in [Portfolio und technische Administration](./portefeuille-et-administration-technique.md) |
| `policy` | Die Projektgovernance verbietet oder limitiert diesen Fluss | Lesen Sie **Governance-Richtlinien** vor der Änderung der Bindung |
| `permission` | Der Connector existiert, aber Ihre Rolle erlaubt es nicht, ihn zu aktivieren oder zu nutzen | Prüfen Sie die Projektrolle in [Zugriffskontrolle und Rollen Projekt](./controle-acces-et-roles.md) |
| `health` | Die Plattformdefinition existiert, aber ihre Vorbereitung oder Verfügbarkeit erfordert Prüfung | Öffnen Sie die **Plattformadministration** zur Bestätigung der technischen Definition |
| fehlende oder deaktivierte Definition | Nichts ist auf Tenant-Ebene wirklich bereit | Bitten Sie zunächst um Einrichtung oder Reaktivierung der Plattform |
| fehlende oder nicht konfigurierte Projektbindung | Die Plattform ist bereit, aber das Projekt nutzt die Integration noch nicht | Aktivieren Sie die Bindung explizit auf Projektebene |

### Praktische Bedeutung von `binding` und `entitlement`

- **binding** bedeutet, dass der Connector oder Anbieter auf Plattformebene existiert, aber erst noch mit dem Projekt verknüpft und für dieses Projekt freigegeben werden muss, bevor das Projekt ihn nutzen kann;
- **entitlement** bedeutet, dass selbst bei vorhandenem Binding der Plan die Option weiterhin sichtbar lassen kann, während die operative Nutzung blockiert bleibt;
- ein sichtbarer, aber blockierter Connector ist daher nicht automatisch defekt: Die Oberfläche kann ihn gerade deshalb sichtbar lassen, um die Blockierungsursache zu erklären.

Wenn eine Blockade anhält, öffnen Sie anschließend **Plattformadministration**, um die technische Definition zu prüfen, und kehren Sie zum Projekt zurück, um die Bindung und Vorbereitung zu bestätigen.

### Jira, SharePoint und Connector-Kette

![Jira- und SharePoint-Ablauf zwischen Plattform, Projekt und Aktionen](/img/diagrams/de/connecteurs-jira-sharepoint-workflow.svg)

Halten Sie diese Logik einfach:

1. **Plattformintegrationen** definieren den Connector oder den Ingestionsanbieter;
2. **Projektintegrationen** zeigen nur die genehmigten und bereitgestellten Bindungen;
3. **Governance-Richtlinien** entscheiden, welche Rolle beobachten, vorbereiten, vorschlagen oder ausführen kann;
4. **Aktionen & Genehmigungen** wenden diese Regeln bei der tatsächlichen Anfrage an;
5. **PM-Dokumente** und **KI-Log** behalten die Spur des Flusses.

Siehe die zugehörige Seite: [Connectoren und Integrationen](./connecteurs-jira-et-sharepoint).

## Aktionen & Genehmigungen

Diese Registerkarte wandelt eine Empfehlung in eine kontrollierte Operation um. Eine Aktion kann **sichtbar** aber nicht **ausführbar** sein, wenn:

- Sie haben nicht die richtige Berechtigung;
- Der kompatible Connector ist nicht bereit;
- Die Projektbindung begrenzt die Aktion;
- Die erforderliche Genehmigung wurde noch nicht erteilt.

### Die zentralen Zustände, die Sie unterscheiden sollten

In der beobachteten Oberfläche unterscheiden Warteschlange und Übersichtskarten vor allem vier kanonische Lesarten:

| Sichtbarer Zustand | Praktische Lesart |
| --- | --- |
| **Execution prerequisites** | kompatible Connectoren können existieren, aber die Ausführung bleibt durch Health, Entitlement, Permission, Policy oder fehlende Readiness blockiert |
| **Pending approval** | die Anfrage wurde vorgeschlagen und wartet noch auf eine Governance-Entscheidung |
| **Ready to execute** | die Anfrage ist bereits **approved**, die eigentliche Ausführung bleibt aber ein eigener Schritt |
| **Executed history** | die Aktion wurde tatsächlich ausgeführt und bleibt als Verlauf bzw. Audit-Nachweis sichtbar |

Eine Anfrage kann also **approved** sein, ohne bereits **executed** zu sein.

### Wie Sie eine Registerkarte lesen, die leer oder unvollständig wirkt

Die bloße Sichtbarkeit der Registerkarte bedeutet nicht, dass bereits eine Aktion ausführbar ist. Wenn nichts Konkretes sichtbar wird, ist die nützlichste Lesart oft:

1. kein **kompatibler und gesunder Ausführungs-Connector** ist für diesen Aktionstyp bereit;
2. die **Projektbindung** macht die Option im Projekt noch nicht sichtbar;
3. eine **Policy** erlaubt die Ansicht, aber nicht Vorschlag oder Ausführung;
4. Ihre **Permission** erlaubt das Anzeigen der Warteschlange, nicht aber das Handeln;
5. eine Genehmigung ist erforderlich und es wurde noch keine Entscheidung getroffen.

Wenn alles korrekt vorbereitet ist, sollte mindestens Folgendes sichtbar oder erfüllbar sein:

- ein kompatibler Aktionstyp;
- mindestens eine gesunde Ausführungsoption;
- eine gültige Projektbindung;
- eine kohärente Policy;
- ein Benutzer, der je nach Fall vorschlagen, genehmigen oder ausführen darf.

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
