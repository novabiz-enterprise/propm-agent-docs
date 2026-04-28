---
title: Governance, Entscheidungen und Aktionen
slug: /gouvernance-decisions-et-actions
description: "Verstehen Sie die Signale, konfigurieren Sie Governance-Richtlinien und nutzen Sie Aktionen & Genehmigungen Schritt für Schritt mit anfängerfreundlichen Beispielen."
---

[Startseite](./index.md) · [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md) · [Berichte, KI-Protokoll und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md)

![Proaktivität, Digests und gesteuerte Aktionen](/img/diagrams/de/proactivite-et-gouvernance.svg)

## Ziel

Diese Seite erklärt auf einfache Weise, wie ProPM Agent vorgeht:

1. ein **Signal** wird erkannt;
2. eine **Entscheidung** wird getroffen;
3. dann eine **gouvernierte Aktion**;
4. ggf. einer **Genehmigung** unterzogen;
5. bevor sie **ausgeführt** und **verfolgt** wird.

Diese Seite hilft Ihnen, klar zu verstehen:

- was eine **Governance-Richtlinie** ist;
- was **`allow`**, **`require_approval`** und **`deny`** bedeuten;
- was **`observe`**, **`draft`**, **`propose`** und **`execute`** bedeuten;
- wie man **Aktionen & Genehmigungen** Schritt für Schritt nutzt;
- warum eine Aktion sichtbar, aber blockiert sein kann.

## Sehr einfacher Überblick des Flusses

Im ProPM Agent ist der übliche Weg:

1. ein **Signal** zieht die Aufmerksamkeit auf sich;
2. das Team liest es erneut;
3. die **Governance** entscheidet, was jede Rolle tun darf;
4. wenn ein externer Output nötig ist, wird eine **Aktion** erstellt;
5. wenn das Projekt es verlangt, geht die Aktion in die **Genehmigung**;
6. die Aktion wird dann **ausgeführt** oder **abgelehnt**;
7. die Spur bleibt im **Aktivitätsbereich** und im **Journal IA** sichtbar.

## Teil 1 — Signale verstehen

Ein **Signal** ist eine strukturierte Warnung, die sagt: **„Dieses Thema verdient Aufmerksamkeit“**.

### Signalbeispiele

Ein Signal kann auftreten:

- bei **Mangel an Frische** der Quellen;
- bei einer **Widersprüchlichkeit** mehrerer Beweise;
- bei einem **Projektblocker**;
- bei einer Folge, die eine **Benachrichtigung**, eine **Entscheidung** oder eine **externe Aktion** verdient.

### Was der Benutzer typischerweise auf einer Signalkarte sieht

Eine Signalkarte kann anzeigen:

- einen **Titel**;
- eine **Zusammenfassung**;
- eine **Erklärung**;
- eine **Schwere**;
- einen **Status**;
- einen **Modus**;
- eine Anzahl von **Beweisen** oder erneuten Auslösungen;
- Aktionen wie **Create draft**, **Snooze 24h** oder **Dismiss** je nach Rolle.

### Empfohlener Schritt-für-Schritt-Ansatz zur Signalbearbeitung

Wenn Sie ein Signal öffnen, halten Sie sich an diese Reihenfolge:

1. lesen Sie die **Zusammenfassung**;
2. lesen Sie anschließend die **Erklärung**;
3. prüfen Sie die **Beweise** und die **Frische**;
4. entscheiden Sie, ob das Thema nur **Beobachtung**, einen **Entwurf** oder eine echte **Aktion** erfordert;
5. wenn ein externer Output nötig wird, gehen Sie zu **Aktionen & Genehmigungen**.

### Nützliche Signalstatus

| Status | Was es bedeutet |
| --- | --- |
| `open` | Das Thema bleibt aktiv und erfordert weitere Aufmerksamkeit |
| `snoozed` | Das Thema wird vorübergehend pausiert |
| `dismissed` | Das Thema wird aus der aktiven Warteschlange entfernt |
| `resolved` | Das Thema gilt als bearbeitet |

### Nützliche Signalmodi

| Modus | Einfache Interpretation |
| --- | --- |
| `inform` | Das Signal informiert, ohne sofortige Aktion zu verlangen |
| `suggest` | Das Signal schlägt einen nächsten Schritt vor |
| `draft` | Das Signal ist bereits auf einen Entwurf oder eine Vorbereitung ausgerichtet |
| `request_approval` | Das Signal ruft eine geregelte Überprüfung oder Genehmigung an |

## Teil 2 — Governance-Richtlinien

## Was ist eine Governance-Richtlinie?

Eine **Governance-Richtlinie** ist eine Regel, die die Frage beantwortet:

**„Wer darf was tun, auf welchem Connector, und mit welchem Kontrollniveau?“**

Anders ausgedrückt verhindert Governance, dass eine externe Aktion ohne klaren Rahmen ausgeht.

### Was eine Richtlinie entscheidet

Eine Richtlinie beantwortet im Allgemeinen vier Fragen:

1. **Wer?** – welche Rolle ist betroffen;
2. **Was?** – welcher Connector, welche Art von Aktion oder welches Ziel ist betroffen;
3. **Wie weit?** – einfache Beobachtung, Entwurf, Vorschlag oder Ausführung;
4. **Mit welchem Effekt?** – erlaubt, erlaubt mit Genehmigung oder verweigert.

### Sehr einfaches Beispiel

Eine Richtlinie könnte bedeuten:

- der **Contributor** kann einen Teams-Entwurf vorbereiten;
- der **Projektleiter** kann eine SharePoint-Veröffentlichung vorschlagen;
- der **Projektbesitzer** muss vor der Ausführung genehmigen;
- niemand sonst darf diese Veröffentlichung direkt ausführen.

## Die Ebenen verstehen: `observe`, `draft`, `propose`, `execute`

Die **Ebene** beschreibt, wie weit eine Rolle im Fluss gehen kann.

| Ebene | Was der Benutzer tun kann | Was er noch nicht tun kann | Einfaches Beispiel |
| --- | --- | --- | --- |
| `observe` | Informationen sehen, Thema verfolgen, Warteschlange prüfen | Aktion oder Entwurf erstellen | Ein Leser verfolgt Signale, ohne einen Output vorzubereiten |
| `draft` | Einen Entwurf, Text oder eine Aktionsabsicht vorbereiten | Die Aktion offiziell in die Warteschlange einreichen | Ein Contributor bereitet eine Teams-Nachricht vor, reicht sie aber nicht vor |
| `propose` | Eine echte Aktionsanfrage in die geregelte Warteschlange einreichen | Direkt ausführen | Ein Projektleiter schlägt ein Jira-Ticket vor |
| `execute` | Die reale Ausführung starten, wenn andere Bedingungen erfüllt sind | Die Richtlinie oder Genehmigungen umgehen | Ein Projektbesitzer veröffentlicht ein Artefakt zu SharePoint |

### Sehr einfache Interpretation

- **`observe`** = ich schaue zu;
- **`draft`** = ich bereite vor;
- **`propose`** = ich fordere offiziell an;
- **`execute`** = ich starte tatsächlich.

## Die Effekte verstehen: `allow`, `require_approval`, `deny`

Der **Effekt** beschreibt, was die Plattform tut, wenn eine Rolle diese Ebene erreicht.

| Effekt | Was es bedeutet | Praktische Konsequenz |
| --- | --- | --- |
| `allow` | Die Aktion ist auf dieser Ebene erlaubt | Der Fluss kann ohne zusätzliche Genehmigungsschritte fortschreiten, wenn der Rest bereit ist |
| `require_approval` | Die Aktion ist möglich, muss aber genehmigt werden | Der Genehmigungs-Queue wird obligatorisch vor der Ausführung |
| `deny` | Die Aktion ist für diese Rolle oder diesen Bereich verboten | Der Benutzer kann in diesem Fluss nicht weitergehen |

### Sehr einfache Interpretation

- **`allow`** = ja;
- **`require_approval`** = ja, aber nach menschlicher Validierung;
- **`deny`** = nein.

## Wie man eine Richtlinienzeile liest

Nehmen wir diese Lesung:

- **Rolle**: Projektleiter
- **Connector**: SharePoint publish
- **Ebene**: `execute`
- **Effekt**: `require_approval`

Das bedeutet:

- Der Projektleiter kann bis zur Ausführungsanfrage gehen;
- Die Veröffentlichung geht jedoch nicht sofort los;
- Eine Genehmigung ist vor der realen Ausführung nötig.

## Konkrete Richtlinienbeispiele

| Geschäftsszenario | Rolle | Empfohlene Ebene | Empfohlener Effekt | Warum |
| --- | --- | --- | --- | --- |
| Veröffentlichung eines Protokolls zu SharePoint | Projektleiter | `execute` | `require_approval` | Der Output ist extern und muss noch einmal gelesen werden |
| Erstellung eines Jira-Tickets aus einem Blocker | Projektleiter | `propose` | `allow` oder `require_approval` | Das Projekt kann ein Ticket anfordern, ohne es automatisch zu öffnen |
| Interne Teams-Nachricht mit geringem Risiko | Contributor | `execute` oder `propose` | `allow` | Schnelle Kommunikation mit geringem Einfluss |
| Outlook-E-Mail an Sponsoren | Contributor | `propose` | `require_approval` | Sensiblere und formellere Kommunikation |
| Webhook zu einem Drittanbieter-Tool | Projektbesitzer | `execute` | `require_approval` | Technischer Output, der sehr kontrolliert bleiben soll |
| Connector nicht bereit oder nicht autorisiert | alle außer Admin | `observe` oder kein Gebrauch | `deny` | Wir vermeiden einen versehentlichen Start |

## Schritt-für-Schritt zur Konfiguration einer Governance-Richtlinie

Folgen Sie dieser einfachen Reihenfolge.

### Schritt 1 — Öffnen der richtigen Oberfläche

Öffnen Sie im **Workspace** des Projekts **Governance-Richtlinien**.

### Schritt 2 — Wählen Sie den zu kontrollierenden Fluss

Fragen Sie sich zuerst:

- Handelt es sich um eine **Veröffentlichung**;
- um ein **Ticket**;
- um eine **Nachricht**;
- um einen **Webhook**;
- um eine andere externe Aktion?

### Schritt 3 — Wählen Sie die betroffene Rolle

Definieren Sie dann, welche Rolle handeln darf:

- **Contributor**;
- **Projektleiter**;
- **Projektbesitzer**;
- oder eine andere Rolle in Ihrer Konfiguration.

### Schritt 4 — Wählen Sie die Aktionsstufe

Entscheiden Sie, ob diese Rolle nur:

- beobachten;
- einen Entwurf vorbereiten;
- vorschlagen;
- oder ausführen soll.

### Schritt 5 — Wählen Sie den Effekt

Entscheiden Sie, ob diese Ebene:

- direkt erlaubt (`allow`);
- mit Genehmigung erlaubt (`require_approval`);
- oder verweigert (`deny`) sein soll.

### Schritt 6 — Prüfen Sie den betroffenen Connector oder das Ziel

Eine gute Richtlinie reicht nicht aus, wenn der Connector:

- technisch nicht bereit ist;
- dem Projekt nicht offensteht;
- oder das richtige Ziel für Artefakte nicht hat.

### Schritt 7 — Testen mit einer Nicht-Administrator-Rolle

Die beste Kontrolle ist praktisch:

1. melden Sie sich mit einer realistischen Geschäftsrolle an;
2. öffnen Sie **Actions & approvals**;
3. prüfen Sie, was sichtbar, erlaubt oder blockiert ist;
4. passen Sie die Richtlinie an, wenn das Verhalten nicht das erwartete ist.

![Governance-Richtlinien des Projekts](/img/screenshots/localized/de/14-governance-policies.jpg)

## Einfache Regeln für eine gute Governance-Konfiguration

- Verwenden Sie **`allow`** auf **`execute`** nur für Flüsse mit geringem Risiko;
- Verwenden Sie **`require_approval`** sobald ein Inhalt das Projekt verlässt oder ein externes System verändert;
- Verwenden Sie **`deny`**, wenn der Connector nicht bereit, nicht autorisiert oder zu sensibel ist;
- Halten Sie die Regeln konsistent mit den tatsächlich zugewiesenen Rollen;
- Testen Sie immer einen realen Fall, bevor Sie die Richtlinie als fertig betrachten.

## Häufige Fehler zu vermeiden

| Fehler | Richtige Interpretation |
| --- | --- |
| „Ich sehe den Connector, also kann ich ihn benutzen“ | falsch: Sichtbarkeit garantiert weder Berechtigung noch technische Gesundheit |
| „`propose` bedeutet, dass die Aktion ausgeht“ | falsch: `propose` bedeutet, dass der Antrag in die geregelte Warteschlange eintritt |
| „`execute` bedeutet ohne Kontrolle“ | falsch: `execute` kann noch mit `require_approval` kombiniert werden |
| „`deny` bedeutet Ausfall“ | falsch: `deny` ist oft eine normale Governance-Entscheidung |

## Teil 3 — Aktionen & Genehmigungen

Die Oberfläche **Actions & approvals** dient dazu, eine Absicht in eine echte **gouvernierte Aktion** umzuwandeln.

![Bereich Aktionen & Genehmigungen](/img/screenshots/localized/de/17-actions-approvals.jpg)

### Vier kanonische Lesarten, die Sie im Kopf behalten sollten

In der Oberfläche lässt sich diese Fläche am einfachsten über vier unterschiedliche Zustände lesen:

| Kanonische Lesart | Was sie bedeutet |
| --- | --- |
| **Execution prerequisites** | kompatible Ausführungsoptionen können existieren, aber die operative Nutzung bleibt blockiert oder nicht verfügbar |
| **Pending approval** | eine gouvernierte Anfrage wurde vorgeschlagen und wartet noch auf Genehmigung |
| **Ready to execute** | eine Anfrage ist bereits **approved**, die kontrollierte Ausführung bleibt aber ein separater Schritt |
| **Executed history** | die Aktion wurde tatsächlich ausgeführt und bleibt als Audit-Verlauf sichtbar |

Eine **approved**-Anfrage ist also noch keine **executed**-Anfrage.

### Wenn alles korrekt vorbereitet ist, was sollte ich sehen?

In einem nominalen Fall findet der autorisierte Benutzer in der Regel:

- mindestens einen relevanten **Aktionstyp**;
- mindestens eine **kompatible und gesunde Ausführungsoption**;
- eine tatsächlich aktive **Projektbindung**;
- eine **Richtlinie**, die das Vorschlagen erlaubt oder sauber in die Genehmigung leitet;
- eine Warteschlange, in der Anfragen je nach Fall in **pending approval**, **approved**, **executed** oder **rejected** übergehen.

Wenn eines dieser Glieder fehlt, kann der Bildschirm leer, unvollständig oder rein informativ wirken, ohne dass dies automatisch eine Störung bedeutet.

## Was der Benutzer auf diesem Bildschirm sieht

Ein Benutzer findet dort typischerweise:

- ein Formular zum **Vorschlagen einer gouvernierten Aktion**;
- die Auswahl des **Aktionstyps**;
- die Auswahl des **Ausführungs-Connectors** oder der **Ausführungsoption**;
- eine Zusammenfassung der **Readiness**, die anzeigt, was verfügbar oder blockiert ist;
- Felder wie **Titel**, **Begründung**, **Ziel**, **Nachricht** oder **Ticketbeschreibung**;
- eine **Genehmigungs- und Ausführungswarteschlange** mit bereits eingereichten Anfragen.

## Schritt-für-Schritt – eine gouvernierte Aktion erstellen

### Schritt 1 – Öffnen des Bildschirms

Im **Workspace** öffnen Sie **Actions & approvals**.

### Schritt 2 – Wählen Sie den Aktionstyp

Wählen Sie zunächst die geschäftliche Absicht. Die sichtbaren Aktionstypen umfassen unter anderem:

- **Publish artifact to SharePoint**;
- **Send Teams message**;
- **Send Outlook message**;
- **Create Jira ticket**;
- **Create Azure DevOps ticket**;
- **Webhook** je nach Tenant-Konfiguration.

### Schritt 3 – Prüfen Sie die kompatible Ausführungsoption

Die Oberfläche sucht dann nach **kompatiblen Ausführungsoptionen**.

Wählen Sie eine Option:

- **gesund**;
- **autorisiert**;
- tatsächlich für Ihr Projekt geöffnet.

Wenn keine gesunde Option erscheint, betrifft die Prüfung meist:

- den Connector selbst;
- seinen Gesundheitszustand;
- die Projektbindung;
- die Richtlinie;
- oder Ihre Berechtigung.

### Schritt 4 – Lesen Sie die Readiness

Der Bereich **Execution readiness** dient dazu, zu prüfen, ob Sie nicht nur eine theoretische Aktion vorbereiten.

In der Praxis:

- **available / healthy** = Option nutzbar;
- **blocked by health** = Connector auf Plattformseite prüfen;
- **blocked by entitlement** = Fähigkeit ist im Plan nicht enthalten oder nicht freigeschaltet;
- **blocked by policy** = restriktive Projekt-Governance;
- **blocked by permission** = Ihre Rolle reicht nicht aus;
- keine sichtbare Option = kompatibler Connector fehlt, die Projektbindung fehlt oder die Option ist für Ihre Rolle nicht geöffnet.

### Nüchterne Lesart eines Bildschirms, der leer wirkt

Wenn `Actions & approvals` nichts Ausführbares zeigt, unterscheiden Sie zunächst drei Fälle, bevor Sie von einer Störung ausgehen:

1. die Verfügbarkeit der Ausführungsoptionen konnte nicht geladen werden;
2. kompatible Optionen existieren, bleiben aber blockiert oder nicht gesund;
3. für den aktuellen gouvernierten Aktionstyp ist noch keine kompatible Option konfiguriert.

In allen drei Fällen ist dies etwas anderes als eine Warteschlange, die einfach leer ist, weil noch niemand eine Aktion vorgeschlagen hat.

| Was Sie sehen | Wahrscheinlich dominierende Ursache | Nützlicher Reflex |
| --- | --- | --- |
| kein auswählbarer Connector | kein kompatibler und gesunder Connector ist bereit | zuerst **Projektintegrationen**, dann **Plattformverwaltung** prüfen |
| sichtbare Aktion, aber blockierter Button | Berechtigung, Richtlinie oder Genehmigung erforderlich | zuerst die Rolle, dann die Governance prüfen |
| sichtbare Warteschlange, aber nichts geht raus | die Anfrage wartet noch auf Genehmigung oder nachgelagerte Ausführung | den tatsächlichen Warteschlangenstatus erneut lesen |
| Connector vorhanden, aber nicht nutzbar | Bindung, Gesundheit oder Berechtigung reichen nicht aus | die gesamte Kette Plattform -> Projekt -> Richtlinie prüfen |

Beachten Sie außerdem: Hier erscheinen nur Ausführungsoptionen, die unternehmensseitig freigegeben sind. Die technische Vorbereitung des Connectors erfolgt in **Plattformverwaltung**, die Projektexponierung lesen Sie über **Projektintegrationen**.

### Schritt 5 – Füllen Sie Titel und Begründung aus

Geben Sie anschließend ein:

- einen **klaren Titel**;
- eine **kurze, aber nützliche Begründung**;
- die spezifischen Felder für den gewählten Aktionstyp.

Die Begründung muss zwei Fragen beantworten:

1. **Warum ist diese Aktion notwendig?**
2. **Auf welchen Beweisen oder Entscheidungen basiert sie?**

### Schritt 6 – Füllen Sie die geschäftlichen Felder aus

Die Felder ändern sich je nach Aktionstyp.

| Aktionstyp | Häufig erwartete Felder |
| --- | --- |
| SharePoint-Veröffentlichung | Titel, Begründung, `artifact ID`, Ziel, Renderprofil, Format |
| Teams-Nachricht | Titel, Begründung, Nachrichtentext |
| Outlook-Nachricht | Titel, Begründung, Empfänger, Betreff, Nachrichtentext |
| Jira-Ticket | Titel, Begründung, Ticketbeschreibung, ggf. Projekt-/Board-Schlüssel |
| Azure DevOps Ticket | Titel, Begründung, Beschreibung, Tickettyp je nach Connector |
| Webhook | Titel, Begründung und Daten für das Zielsystem |

### Schritt 7 – Vorschlagen der Aktion

Sobald die Felder ausgefüllt sind, reichen Sie die Anfrage ein.

An diesem Punkt ist die Aktion noch nicht unbedingt ausgeführt. Sie kann zuerst in die **Genehmigungs-Queue** einsteigen.

### Schritt 8 – Überprüfung durch den Genehmiger

Wenn die Richtlinie `require_approval` verlangt, muss ein Genehmiger prüfen:

- den Titel;
- die Begründung;
- den verwendeten Connector;
- das Nutzlast- oder geschäftliche Detail;
- das eventuell verknüpfte Artefakt oder den Entwurf.

### Schritt 9 – Genehmigung, Ablehnung oder Ausführung

Je nach Richtlinie und Rolle des Genehmigers kann die Anfrage:

- **genehmigt**;
- **abgelehnt**;
- dann **ausgeführt** werden, wenn alles bereit ist.

### Schritt 10 – Prüfen der endgültigen Spur

Nach Ausführung prüfen Sie:

- die Aktionswarteschlange;
- die Projektaktivität;
- die **Trace ID**, falls angezeigt;
- das **Journal IA**, falls der Fluss dort reflektiert wird;
- das Vorhandensein des Artefakts, Tickets oder der Nachricht im Zieltool.

## Wie man die Aktionsstatus liest

| Status | Was es bedeutet |
| --- | --- |
| `draft` | Die Anfrage ist noch vorbereitend |
| `pending approval` | Genehmigung wird vor echter Fortsetzung erwartet |
| `approved` | Die Anfrage wurde akzeptiert |
| `executed` | Die Aktion wurde tatsächlich gestartet |
| `rejected` | Die Anfrage wurde abgelehnt |
| `failed` | Die Aktion wurde gestartet, aber nicht korrekt abgeschlossen |
| `cancelled` | Die Anfrage wurde abgebrochen |

## Schritt-für-Schritt-Beispiel – Veröffentlichung eines Artefakts zu SharePoint

### Situation

Das Team hat ein **wöchentliches Briefing** gelesen und möchte es in SharePoint veröffentlichen.

### Ablauf

1. öffnen Sie **Actions & approvals**;
2. wählen Sie **Publish artifact to SharePoint**;
3. wählen Sie eine gesunde **SharePoint publish**-Option;
4. geben Sie den **Titel** der Aktion ein;
5. fügen Sie eine **Begründung** hinzu, z. B.: „Version geprüft und für wöchentliche Verbreitung freigegeben“;
6. geben Sie die **artifact ID** ein;
7. wählen Sie das **SharePoint-Ziel**;
8. wählen Sie das **Renderprofil** oder das **Format**, falls verlangt;
9. schlagen Sie die Aktion vor;
10. falls die Richtlinie es verlangt, warten Sie auf Genehmigung;
11. führen Sie aus;
12. prüfen Sie, dass das Artefakt tatsächlich in SharePoint veröffentlicht und in ProPM Agent verfolgt wird.

## Schritt-für-Schritt-Beispiel – ein Jira-Ticket erstellen

### Situation

Ein Signal meldet einen wiederkehrenden Blocker mit Planungsimpact.

### Ablauf

1. öffnen Sie **Actions & approvals**;
2. wählen Sie **Create Jira ticket**;
3. wählen Sie einen verfügbaren Jira-Connector;
4. geben Sie einen klaren Titel ein, z. B.: „Lieferantenblocker bei kritischem Los“;
5. ergänzen Sie die **Ticketbeschreibung**;
6. fügen Sie die **Begründung** und nützliche Beweise hinzu;
7. schlagen Sie die Anfrage vor;
8. lassen Sie den Genehmiger prüfen, falls die Richtlinie `require_approval` verlangt;
9. führen Sie aus;
10. prüfen Sie anschließend die externe Referenz oder das erstellte Ticket.

## Schritt-für-Schritt-Beispiel – Teams- oder Outlook-Nachricht senden

### Situation

Das Projekt muss eine interne Gruppe oder einen Sponsor über eine abgeschlossene Überprüfung informieren.

### Teams-Ablauf

1. wählen Sie **Send Teams message**;
2. wählen Sie den autorisierten Teams-Connector;
3. verfassen Sie eine kurze und verständliche Nachricht;
4. fügen Sie die Begründung hinzu, falls der Fluss geregelt ist;
5. schlagen Sie vor, lassen Sie ggf. genehmigen, dann ausführen.

### Outlook-Ablauf

1. wählen Sie **Send Outlook message**;
2. wählen Sie den Outlook-Connector;
3. geben Sie die **Empfänger** ein;
4. ergänzen Sie **Betreff** und **Nachrichtentext**;
5. schlagen Sie vor, lassen Sie ggf. genehmigen, dann ausführen.

### Praktischer Unterschied

- **Teams** eignet sich gut für kollaborative interne Kommunikation;
- **Outlook** eignet sich besser für formellere und gezieltere Kommunikation.

## Schritt-für-Schritt-Beispiel – Webhook zu einem Drittanbieter

### Situation

Das Unternehmen möchte einen internen Fluss zu einem eigenen Tool auslösen.

### Ablauf

1. wählen Sie den Aktionstyp oder den mit dem **Webhook** verbundenen Fluss;
2. wählen Sie die kompatible Webhook-Ausführungsoption;
3. geben Sie Titel und Begründung ein;
4. ergänzen Sie die Daten für das Zielsystem;
5. schlagen Sie die Anfrage vor;
6. lassen Sie genehmigen, falls die Richtlinie es verlangt;
7. führen Sie aus;
8. prüfen Sie das Ergebnis im Zielsystem und im ProPM Agent Audit.

## Warum eine Aktion sichtbar, aber nicht ausführbar sein kann

Eine Aktion kann in der Oberfläche sichtbar sein, aber blockiert bleiben, wenn:

- der kompatible Connector nicht gesund ist;
- das Projekt nicht das richtige Binding hat;
- die Projekt-Richtlinie dieses Aktionsniveau verbietet;
- Ihre Rolle nicht erlaubt, vorzuschlagen oder auszuführen;
- eine Genehmigung noch aussteht;
- die Berechtigung oder die Plankapazität den Fluss blockiert.

## Was tun, wenn keine Ausführungsoption angezeigt wird

Folgen Sie dieser Reihenfolge:

1. prüfen Sie zuerst **Governance-Richtlinien**;
2. prüfen Sie dann **Projektintegrationen**;
3. öffnen Sie anschließend **Plattformverwaltung**;
4. prüfen Sie schließlich **entitlement**, **permission** und den Gesundheitszustand des Connectors.

## Vollständiges Szenario – vom Signal zur ausgeführten Aktion

### Einfaches Beispiel

1. ein `open`-Signal meldet einen Blocker;
2. das Team liest Zusammenfassung, Erklärung und Beweise;
3. es entscheidet, dass ein Jira-Ticket nötig ist;
4. die Richtlinie erlaubt dem **Projektleiter** zu `propose`, verlangt aber `require_approval`;
5. der Projektleiter erstellt die Anfrage in **Actions & approvals**;
6. der **Projektbesitzer** genehmigt;
7. die Aktion wird zu **executed**;
8. das externe Ticket und die interne Spur bleiben ausgerichtet.

Dieses Szenario fasst die Produktlogik gut zusammen: **sehen, entscheiden, kontrollieren, ausführen, verfolgen**.

## Best Practices

- verwechseln Sie niemals **Entwurf** und **tatsächliche Ausführung**;
- nutzen Sie Richtlinien, um sensible Ausgaben zu begrenzen;
- fordern Sie eine Genehmigung an, sobald ein Inhalt das Projekt verlässt oder ein externes System verändert;
- prüfen Sie immer die Beweise, bevor Sie eine Aktion vorschlagen;
- nutzen Sie das **Journal IA** und die Aktionswarteschlange als gemeinsame Auditquelle.

## Weiter

- [Connectoren und Integrationen](./connecteurs-jira-et-sharepoint)
- [Berichte, KI-Protokoll und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md)
- [Portfolio und technische Administration](./portefeuille-et-administration-technique.md)
- [Wartung, Support und FAQ](./maintenance-support-faq.md)
