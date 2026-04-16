---
title: Governance, Entscheidungen und Aktionen
slug: /gouvernance-decisions-et-actions
description: Signale nutzen, Governance-Regeln anwenden und Aktionen steuern, die eine Genehmigung erfordern.
---

[Startseite](./index.md) · [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md) · [Berichte, KI-Protokoll und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md)

![Posteingang für Signale](/img/screenshots/localized/de/15-workspace-signals.png)

## Ziel

Diese Seite erklärt, wie **Signale** verarbeitet, die Governance-Regeln des Projekts genutzt werden und warum eine Aktion sichtbar, aber nicht ausführbar sein kann.

## Überblick

In ProPM Agent manifestiert sich Governance auf mehreren Ebenen:

- **Signale**, die Aufmerksamkeit erfordern;
- **Governance-Richtlinien** auf Projektebene;
- **Zugriffskontrollen**;
- **Aktionen & Genehmigungen** vor externen Auswirkungen;
- die **Nachverfolgbarkeit**, sichtbar in Artefakten und dem KI-Protokoll.

## Signale: Was sie bedeuten

Beobachtete Signale dienen dazu, Themen hervorzuheben, die eine explizite Behandlung verdienen, zum Beispiel:

- unzureichende **Aktualität**;
- ein **Widerspruch** zwischen Nachweisen;
- eine **Blockade** im Betrieb;
- ein **Folgebedarf**, der eine Entscheidung oder Verbreitung erfordert.

## Wie Signale verarbeitet werden

Der Posteingang für Signale ermöglicht:

- offene Signale erneut zu lesen;
- ihren Status zu aktualisieren;
- einen **Digest** vorzubereiten;
- einen Entwurf für eine Benachrichtigung zu generieren;
- ein Signal zu pausieren;
- ein Element zu verwerfen, wenn es nicht mehr relevant ist.

### Empfohlene Schritt-für-Schritt-Prüfung

Um zu vermeiden, ein Signal nur "aus dem Bauch heraus" zu behandeln, halten Sie sich an diese einfache Reihenfolge:

1. Lesen Sie zuerst die **Zusammenfassung**;
2. Bestätigen Sie dann die **Erklärung** und die Hinweise zur **Aktualität**;
3. Prüfen Sie, ob das Signal **wiederkehrend** ist oder sich auf mehrere Nachweise stützt;
4. Wählen Sie schließlich zwischen **Create draft**, **Snooze 24h** oder **Dismiss**, je nach dem tatsächlich nützlichen Maß an Aktion.

Diese Prüfung vermeidet es, eine einfache Erinnerung zu schnell in eine gesteuerte Aktion umzuwandeln, während gleichzeitig eine klare Spur der wirklich priorisierten Themen erhalten bleibt.

## Zustände, Modi und sichtbare Informationen zu einem Signal

### Nützliche Status

| Status | Praktische Bedeutung | Typische Aktion |
| --- | --- | --- |
| `open` | Das Signal bleibt in der aktuellen Warteschlange aktiv | verarbeiten, Entwurf erstellen, pausieren oder verwerfen |
| `snoozed` | Das Thema ist vorübergehend pausiert | nach `snoozedUntil` oder nach der nächsten Kontrollprüfung zurückkehren |
| `dismissed` | Das Signal wird aus der aktiven Ansicht entfernt, solange keine neue Bedingung es wieder öffnet | die Spur behalten, ohne dass das Element die Warteschlange belastet |
| `resolved` | Das Thema gilt als behandelt | den Verlauf für Audits behalten, ohne sofortige neue Aktion |

### Sichtbare Modi

| Modus | Nützliche Interpretation |
| --- | --- |
| `inform` | Information, die erneut gelesen werden muss, ohne zwingende sofortige Aktion |
| `suggest` | Thema mit vorgeschlagenen nächsten Schritten |
| `draft` | Thema, das bereits auf einen Entwurf oder eine vorbereitende Formulierung ausgerichtet ist |
| `request_approval` | Thema, das einen expliziten Genehmigungsschritt erfordert |

### Was eine Signalkarte anzeigt

Eine Signalkarte kann anzeigen:

- die **Schwere**, den **Status** und den **Modus**;
- einen **Titel**, eine **Zusammenfassung** und eine **Erklärung** des Auslösers;
- eine Anzahl von **Nachweisen** und **Wiederauslösungen**;
- Badges für **Quellen-Aktualität**;
- `last detected` und, falls erforderlich, `snoozed until`;
- Aktionen wie **Create draft**, **Snooze 24h** und **Dismiss**, wenn die Rolle es erlaubt.

### Wenn Sie sehen… / tun Sie…

| Wenn Sie sehen… | Tun Sie… |
| --- | --- |
| ein Signal `open` im Modus `inform` | lesen Sie die Nachweise erneut und entscheiden Sie, ob nur überwacht oder ein Digest vorbereitet werden muss |
| ein Signal `open` im Modus `suggest` | wandeln Sie es in einen klaren nächsten Schritt oder Entwurf um, wenn die Folge nachverfolgt werden muss |
| ein Signal `draft` | prüfen Sie, ob es bereits einen Digest, einen Entwurf oder eine Aktionsanfrage speist |
| ein Signal `request_approval` | wechseln Sie zur gesteuerten Überprüfung und bestätigen Sie die Genehmigungsbedingungen |
| ein Signal `snoozed` | öffnen Sie es nicht automatisch wieder; prüfen Sie zuerst `snoozedUntil` und die tatsächliche Entwicklung des Kontexts |
| ein Signal `dismissed` | behalten Sie die Spur, aber belasten Sie die aktive Warteschlange nicht, solange kein neuer Nachweis erscheint |
| ein Signal `resolved` | nutzen Sie es als Verlauf, nicht als neue Aktionsanweisung |

## Wann auf ein Signal reagieren

| Situation | Empfohlene Aktion |
| --- | --- |
| Alternde Information | Quelle überprüfen, Import neu starten oder Wissen aktualisieren |
| Widerspruch zwischen Nachweisen | Zitate erneut lesen, entscheiden und die Entscheidung dokumentieren |
| Projektblockade | Feststellung in eine gesteuerte Aktion oder formales Follow-up umwandeln |
| Zu verbreitendes Thema | Einen Digest oder eine angepasste Benachrichtigung vorbereiten |

## Digest und Benachrichtigungsentwürfe

### Einen Digest generieren (`Generate digest draft`)

Die Generierung eines Digests erzeugt eine synthetische, wiederverwendbare Ansicht aus dem **Arbeitsbereich**. Die Karte **`Latest digest`** kann anzeigen:

- eine **Überschrift**;
- eine **Narration**;
- das Datum **generated at**;
- die Gesamtzahl der zusammengefassten Signale;
- die Anzahl der generierten Benachrichtigungsentwürfe;
- die Details der im Digest enthaltenen Signale.

### Einen Benachrichtigungsentwurf erneut lesen

Die **Notification drafts** zeigen mindestens:

- den **Status**;
- den **Kanal**;
- den **Typ** der Benachrichtigung;
- die Erklärung oder Begründung;
- einen eventuellen **Genehmigungsbedarf**;
- die Anzahl der **Empfänger**;
- ein Datum `sendAfter`, falls vorhanden;
- den Link zum ursprünglichen **Signal** oder **Digest**;
- einen eventuellen Zustand `snoozed`.

Im aktuell beobachteten Projektbereich ist der direkte Versand hauptsächlich für `in_app` vorgesehen. Externe Kanäle wie `email`, `teams` oder `webhook` können in der Haltung **held / draft** bleiben, solange der gesteuerte Verbreitungspfad nicht verfügbar ist. Benutzer ohne Versandrechte können diese Entwürfe dennoch schreibgeschützt lesen.

![Zu prüfende Benachrichtigungsentwürfe](/img/screenshots/localized/de/16-notification-drafts.png)

### Empfohlener Prüfablauf für einen Benachrichtigungsentwurf

1. Bestätigen Sie, dass **Titel** und **Nachricht** ohne versteckten Kontext verständlich sind;
2. Überprüfen Sie das verknüpfte **Signal** oder den **Digest**;
3. Lesen Sie die Metadaten zur **Genehmigung**, zu den **Empfängern** und zu `sendAfter` erneut;
4. Senden Sie nur, wenn der **Kanal** und Ihre **Rolle** diese Verbreitung tatsächlich erlauben;
5. Verwenden Sie **snooze** oder **dismiss**, wenn der Entwurf nicht aktiv in der Warteschlange bleiben soll.

## Vier Objekte, die nicht verwechselt werden sollten

| Objekt | Rolle im Ablauf | Wann es zu verwenden ist |
| --- | --- | --- |
| `digest` | Zusammenfassung mehrerer Signale | wenn das Team eine gebündelte Ansicht vor Verbreitung oder Entscheidung benötigt |
| `notification draft` | Entwurf einer Nachricht für einen Kanal | wenn das Thema vor dem Versand erneut geprüft werden muss, besonders außerhalb von `in_app` |
| `action request` | Anfrage für eine gesteuerte Operation, die manchmal Genehmigung und Ausführung erfordert | wenn eine externe Folge oder eine konkrete Änderung gestartet werden muss |
| `artifact` | Auslieferbares oder historisiertes gesteuertes Objekt | wenn der Inhalt erhalten, verglichen, genehmigt, veröffentlicht oder wieder eingespritzt werden muss |

Diese Unterscheidung reduziert häufige Verwechslungen zwischen einem **zusammenzufassenden** Thema, einer **zu prüfenden** Nachricht, einer **auszuführenden** Operation und einem **zu steuernden** Dokument.

## Governance auf Projektebene

Die Tabs des Arbeitsbereichs bilden die Grundlage der Projekt-Governance:

- **Access control** bestimmt, wer handeln kann;
- **Document categories** strukturiert die Nachweise;
- **Governance policies** regelt Validierungen und Veröffentlichung;
- **Project integrations** bestimmt, welche externen Aktionen tatsächlich durchführbar sind.

### Wie die Auswirkungen von Richtlinien zu lesen sind

| Paar oder Feld | Praktische Interpretation | Reale Auswirkung für den Benutzer |
| --- | --- | --- |
| `allow` + `observe` | das Thema kann gesehen und verfolgt werden | Lesen und Überwachen ohne Ausführung starten |
| `allow` + `draft` | die Vorbereitung ist erlaubt | der Benutzer kann einen Entwurf erstellen oder den Ablauf vorbereiten |
| `allow` + `propose` | der formelle Vorschlag ist erlaubt | eine Anfrage kann in der gesteuerten Warteschlange eingereicht werden |
| `allow` + `execute` | die direkte Ausführung ist erlaubt | die Aktion kann ohne weiteren Schritt starten, wenn der Rest bereit ist |
| `require_approval` + `execute` | die Ausführung bleibt möglich, aber nicht sofort | die Genehmigungswarteschlange wird vor der Ausführung obligatorisch |
| `deny` | der Ablauf ist für die Rolle oder den Scope verboten | die Aktion kann verschwinden oder trotz ihrer grundsätzlichen Sichtbarkeit nicht ausführbar bleiben |

Diese Paare helfen zu verstehen, warum ein Benutzer eine Aktion **sehen**, **vorbereiten**, **vorschlagen** oder **ausführen** kann, ohne anzunehmen, dass alle Oberflächen automatisch die gleiche Handlungstiefe erlauben.

![Governance-Richtlinien des Projekts](/img/screenshots/localized/de/14-governance-policies.png)

## Aktionen & Genehmigungen

Der Bildschirm **Actions & approvals** verwandelt eine Empfehlung in eine kontrollierte Operation.

### Beobachteter Lebenszyklus

1. Vorschlag einer Aktion;
2. Verknüpfung mit dem Projekt, einem Signal oder einem Artefakt;
3. Genehmigung oder Ablehnung;
4. Ausführung, wenn die Bedingungen erfüllt sind;
5. Nachverfolgbarkeit des Ereignisses im Produkt.

![Aktionen und Genehmigungen](/img/screenshots/localized/de/17-actions-approvals.png)

### Operativer Schritt-für-Schritt für eine gesteuerte Aktion

Verwenden Sie diese Reihenfolge, wenn eine externe Folge notwendig wird:

1. Öffnen Sie **Actions & approvals** aus dem **Arbeitsbereich**;
2. Wählen Sie zuerst den **Aktionstyp**, damit die Oberfläche die kompatiblen **Execution connectors** auflöst;
3. Wählen Sie eine **funktionierende** und **erlaubte** Ausführungsoption, falls mehrere existieren;
4. Fügen Sie eine kurze Begründung hinzu, um die Genehmigung zu erleichtern;
5. Reichen Sie die Anfrage ein und prüfen Sie, dass sie in der Warteschlange mit **Trace ID** und Payload-Details erscheint;
6. Verfolgen Sie dann den Übergang der Warteschlange zu **approved**, **rejected** oder **executed**.

### Wenn keine Ausführungsoption erscheint

Halten Sie sich an diese strikte Reihenfolge zur Behebung:

1. Überprüfen Sie die **Execution connectors** in **Governance policies**;
2. Überprüfen Sie dann **Project integrations**, um die tatsächlich bereite Bindung zu bestätigen;
3. Öffnen Sie **Plattformadministration**, wenn die technische Definition fehlend oder fehlerhaft erscheint;
4. Prüfen Sie schließlich **entitlement**, **policy** und Ihre **Berechtigung**, bevor Sie auf einen technischen Fehler schließen.

Dieser Ablauf vermeidet es, eine Blockade, die tatsächlich von einer Rolle, einer Richtlinie oder einer noch nicht für das Projekt freigegebenen Definition kommt, als technischen Vorfall zu behandeln.

## Beispiele für bestätigte gesteuerte Aktionen

Die im Produkt sichtbaren Aktionstypen umfassen unter anderem:

- Veröffentlichung zu **SharePoint**;
- **Teams**-Nachricht;
- **Outlook**-Nachricht;
- **Jira**-Ticket;
- **Azure DevOps**-Ticket;
- gesteuerter **Webhook**.

### Felder, die je nach Aktionstyp variieren

| Aktionstyp | Typische anzugebende Felder |
| --- | --- |
| Veröffentlichung zu SharePoint | Titel, Ausführungsoption, `artifact ID`, Ziel, Renderprofil oder Format |
| Teams / Outlook Nachricht | Titel, Ausführungsoption, Nachrichtentext, Empfänger oder verknüpfter Entwurf |
| Jira / Azure DevOps Ticket | Titel, Ausführungsoption und Ticketbeschreibung |
| Calendar follow-up | Titel, Ausführungsoption, Teilnehmer und Startdatum / -uhrzeit |

### Zustände und Details der Genehmigungswarteschlange

Die Warteschlange für gesteuerte Aktionen ermöglicht es, einen typischen Übergang von **draft** zu **pending approval**, dann zu **approved**, **executed** oder **rejected** zu verfolgen.

| Status | Praktische Interpretation |
| --- | --- |
| `draft` | Anfrage noch vorbereitend, noch nicht in den vollständigen Ablauf gesendet |
| `pending approval` | Genehmigung wird vor tatsächlicher Folge erwartet |
| `approved` | Zustimmung erhalten, aber die effektive Ausführung muss noch bestätigt werden |
| `executed` | Aktion gestartet und als ausgeführt protokolliert |
| `rejected` | Die Anfrage wurde abgelehnt und sollte nicht als gestartet betrachtet werden |

Jede Warteschlangenkarte kann auch anzeigen:

- den Aktionstyp und den ausgewählten Connector;
- den **Status** und das **action level**;
- `requested at`, `requested by`, `approved by`, `approved at`, `executed at`;
- die **Trace ID**;
- eine `relatedArtifactId` oder `relatedNotificationId`;
- die **payload audit detail**, Genehmigungsnotizen und das Ausführungsergebnis.

![Warteschlange für gesteuerte Aktionen und Audit-Details](/img/screenshots/localized/de/17-action-queue.png)

## Warum eine Aktion sichtbar, aber nicht ausführbar sein kann

Eine Aktion kann in der Oberfläche erscheinen, aber blockiert bleiben, wenn:

- Sie nicht die erforderliche Berechtigung haben;
- der kompatible Connector nicht bereit ist;
- die Projektbindung die Aktion einschränkt;
- der Plan oder das Entitlement die Fähigkeit blockiert;
- eine Genehmigung noch aussteht.

## Verbindung zu Integrationen

Eine wichtige Regel ergibt sich aus der Anwendung:

- die **Projektebene** entscheidet, wie das Projekt arbeitet;
- die **Plattformebene** entscheidet, welche Tools, Anbieter und Integrationen tatsächlich existieren.

In der Praxis: Wenn eine Aktion oder Benachrichtigung blockiert ist, prüfen Sie zuerst die **Projektbindung**, dann die technische Definition in der **Plattformadministration**.

## Beispiel eines vollständigen Szenarios

1. Ein Signal `open` meldet eine Abweichung in der Aktualität oder ein verspätetes Follow-up;
2. Das Team liest die Erklärung, die Nachweise und die vorgeschlagenen nächsten Schritte erneut;
3. Es erstellt einen **Entwurf** oder generiert einen **Digest**, um die Zusammenfassung vorzubereiten;
4. Ein Benachrichtigungsentwurf wird geprüft, in `in_app` gesendet oder in Wartestellung belassen, wenn der externe Kanal noch gesteuert ist;
5. Wenn eine externe Folge notwendig ist, wird eine Aktion in **Actions & approvals** vorgeschlagen;
6. Die Genehmigungswarteschlange, die **Trace ID**, die verknüpften Artefakte und das **KI-Protokoll** dienen anschließend als gemeinsame Spur.

## Best Practices für Governance

- Behandeln Sie Signale als Priorisierungswarteschlange, nicht als einfache Liste;
- Führen Sie keine externe Aktion aus, ohne das Artefakt oder die Quellennachweise zu prüfen;
- Nutzen Sie Dokumentenkategorien, um die Mehrdeutigkeit von Quellen zu reduzieren;
- Halten Sie die Governance-Richtlinie mit den tatsächlich zugewiesenen Rollen konsistent;
- Dokumentieren Sie wichtige Entscheidungen in den Auslieferungen oder im zugehörigen Validierungsablauf.

## Weiterführend

- [Berichte, KI-Protokoll und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md)
- [Portfolio und technische Administration](./portefeuille-et-administration-technique.md)
- [Wartung, Support und FAQ](./maintenance-support-faq.md)
