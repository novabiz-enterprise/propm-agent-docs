---
title: Wartung, Support und FAQ
slug: /maintenance-support-faq
description: Betriebliche Best Practices, gängige Diagnose, sichtbare Warnungen und Antworten auf häufig gestellte Fragen.
---

[Startseite](./index.md) · [Berichte, KI-Protokoll und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md) · [Glossar](./glossaire.md)

## Nützliche Oberflächen für den Support

Die folgenden Beobachtungspunkte sind in der Anwendung bestätigt:

- **Benachrichtigungen** in der oberen Leiste;
- **Gesundheitsindikator** in der oberen Leiste;
- **Signale** im Projekt-Arbeitsbereich;
- **KI-Protokoll** für Runs und Aktivität;
- **Audit / Activity** in der Plattformadministration.

## Schnelldiagnose-Prozedur

1. Überprüfen Sie, dass das richtige **Projekt** aktiv ist;
2. Unterscheiden Sie **leeren Zustand**, **schreibgeschützt**, **Zugriff verweigert** oder **Fehler**;
3. Öffnen Sie das **KI-Protokoll**, wenn der Vorfall einen Agenten, ein Ergebnis oder ein Artefakt betrifft;
4. Bewahren Sie die **Trace ID** und, falls sichtbar, die `Context snapshot ID` oder die `Structured output ID` auf;
5. Überprüfen Sie Rechte, Integrationen, Berechtigungen und Lizenzen, wenn der Zugriff oder die Ausführung blockiert ist.

## Kurze Entscheidungsmatrix nach Symptom

| Symptom | Oberfläche der ersten Ebene | Nächste Eskalationsstufe |
| --- | --- | --- |
| Abnormale Microsoft-Verbindung oder -Rückkehr | [Erste Schritte](./demarrage.md) | Entra, Tenant, `redirectUri` und Lizenzen prüfen |
| Nach Verbindung kein Projekt sichtbar | **Projekte** / Projektauswahl | **Zugriffskontrolle** oder Hinzufügen des Kontos zum Projekt |
| Zweifelhafte Agentenantwort, Artefakt oder Veröffentlichung | **KI-Protokoll** → `Runs` | **Activity**, dann **Berichte & Artefakte** |
| Inkonsistenter Import oder inkonsistente Suche | **Wissen** und Importverlauf | **Project integrations**, dann **Plattformadministration** |
| Externe Aktion sichtbar, aber blockiert | **Actions & approvals** | **Project integrations**, dann **Plattformadministration** |

## Schnellbehebungskarten

### Verbindungsproblem

Überprüfen Sie die URL, den Tenant, das Gastkonto bei Gastnutzung, die tatsächlich konfigurierte `redirectUri` und die Verfügbarkeit einer Lizenz, falls der Plan eine verbraucht.

### Seite sichtbar, aber nicht bearbeitbar

Sie befinden sich wahrscheinlich im **schreibgeschützten** Modus. Überprüfen Sie Ihre Rolle, bevor Sie auf einen Vorfall schließen.

### Dokument sichtbar, aber nicht durchsuchbar

Überprüfen Sie zunächst den Status des Dokuments (`Indexed`, `Ingesting`, `Failed`), den Importverlauf, das Aktualisieren der Seite und die `Trace ID` der Suche, falls ein Aufruf fehlgeschlagen ist.

### Import aus einer ausgegrauten oder fehlenden Quelle

Die häufigsten Ursachen sind: Provider nicht validiert, fehlende Projektbindung, blockierende Berechtigung, unzureichende Berechtigung oder beeinträchtigte Gesundheit.

### Aktion sichtbar, aber nicht ausführbar

Überprüfen Sie den kompatiblen Connector, die Projektbindung, die erforderliche Genehmigung, die Benutzerrolle und die anwendbare Richtlinie.

### Spracheingabe nicht verfügbar

Die Spracheingabe hängt vom Browser ab. Probieren Sie einen anderen Browser, überprüfen Sie die Mikrofonberechtigungen und verwenden Sie die Texteingabe, wenn die Spracherkennung nicht unterstützt wird.

## Daten, die an den Support zu übermitteln sind

| Element | Warum es nützlich ist |
| --- | --- |
| URL der Bereitstellung | Betroffene Umgebung identifizieren |
| Betroffenes Projekt | Kontext nachvollziehen |
| Trace ID | Run oder Ereignis genau wiederfinden |
| Context snapshot ID / Structured output ID | Run, Ausgabe und Artefakt zuordnen |
| Screenshot | Sichtbaren Zustand zum Zeitpunkt des Vorfalls verstehen |
| Ungefähre Uhrzeit | Ereignis mit Protokollen abgleichen |

## FAQ — Zugriff und Sicherheit

### Warum kann ich eine Administrationsseite sehen, aber nicht bearbeiten?

Weil das Produkt zwischen **schreibgeschützt** und **Zugriff verweigert** unterscheidet. Eine Seite kann zur Inspektion angezeigt werden, ohne die Bearbeitung zu erlauben.

### Warum ist meine Microsoft-Verbindung erfolgreich, aber die Anwendung bleibt blockiert?

Überprüfen Sie den Tenant, die Kontoberechtigung, die Existenz eines zugänglichen Projekts und die Verfügbarkeit einer Lizenz, falls der Plan eine vorschreibt.

### Warum ist meine Verbindung erfolgreich, aber es erscheint kein Projekt?

Dieses Symptom deutet nicht unbedingt auf ein Authentifizierungsproblem hin. Überprüfen Sie zuerst die **Projektauswahl**, dann die Seite **Projekte**. Wenn die Liste leer bleibt, wurde das Konto wahrscheinlich noch nicht zum richtigen Projekt hinzugefügt oder verfügt nicht über das Recht zur Erstellung.

### Wann muss ein externes Konto als `Gast`-Benutzer eingeladen werden?

Wenn das Konto zu einem anderen Tenant gehört als dem, der die Anwendung hostet. Das Konto muss dann in den Ziel-Tenant eingeladen und anschließend für die Anwendung oder über die erwartete Gruppe autorisiert werden.

### Wie unterscheide ich schnell ein Problem mit dem Tenant, der `redirect URI`, dem Entra-Client oder der Lizenz?

Folgen Sie dieser Reihenfolge:

1. Wenn Microsoft **vor** der Rückkehr in die Anwendung scheitert, verdächtigen Sie zuerst Tenant, `clientId` oder `redirect URI`;
2. Wenn die Verbindung erfolgreich ist, die Anwendung aber blockiert bleibt, überprüfen Sie anschließend die **Lizenzen** und den Zugang zu einem Projekt;
3. Wenn nur eine bestimmte Oberfläche gesperrt bleibt, liegt das Thema oft auf der Seite der **Rolle** oder **Berechtigung** und nicht auf der Seite der Authentifizierung.

## FAQ — Gesundheit, Runtime und Konnektivität

### Warum ist das Gesundheits-Panel beeinträchtigt, während einige Seiten noch laden?

Weil die Authentifizierung gültig bleiben kann, während eine **API**, **realtime / WebSocket**-Komponente oder ein Provider teilweise beeinträchtigt bleibt. Notieren Sie zuerst den im Gesundheitsindikator angezeigten Status, dann gehen Sie zu [Oberfläche und Navigation](./interface-et-navigation.md) für das Lesen des Panels und [Portfolio und technische Administration](./portefeuille-et-administration-technique.md), falls der Zweifel beim Provider oder der Admin-Integration liegt.

### Was tun, wenn die Verbindung erfolgreich ist, ein Projekt sichtbar ist, aber die Runs nicht starten?

Überprüfen Sie in dieser Reihenfolge: aktives Projekt, Gesundheitsindikator, vermutlich operativer KI-Provider, eventuelle Berechtigung, dann **KI-Protokoll**, um zu sehen, ob ein Run zumindest erstellt wurde. Wenn der Provider weiterhin verdächtig bleibt, gehen Sie zu [Portfolio und technische Administration](./portefeuille-et-administration-technique.md).

## FAQ — Projekt, Arbeitsbereich und Agenten

### Wann sollte Arbeitsbereich anstelle von Agenten verwendet werden?

Verwenden Sie **Arbeitsbereich** zum Einstellen und Steuern des Projekts; verwenden Sie **Agenten** zum Konversieren mit einem Agenten und zum Erzeugen einer strukturierten Ausgabe.

### Wo wird der Chat-Verlauf gespeichert?

Der sichtbare Verlauf ist lokal im Browser. Er ist kein zentrales, geteiltes Archiv.

### Warum erscheint ein benutzerdefinierter Agent nicht in einem anderen Projekt?

Überprüfen Sie zuerst seinen **Scope**. Ein Agent mit `Project only` bleibt auf das aktuelle Projekt beschränkt. Wenn die Umgebung einen Agenten `All projects` bereitstellt, muss er außerdem mit dem **gleichen Konto** in einem Projekt abgefragt werden, auf das dieses Konto Zugriff hat.

### Wird der Chat-Verlauf pro Projekt, pro Agent oder nur pro Browser gespeichert?

Die beobachtete Kontinuität ist **lokal im Browser** und an das Paar **Projekt + Agent** gebunden. Sie ist daher weder global für den gesamten Tenant noch automatisch zwischen Browsern geteilt.

### Welche Browser oder Berechtigungen sollten für die Spracheingabe priorisiert überprüft werden?

Beginnen Sie mit der Browser-Unterstützung von `SpeechRecognition` / `webkitSpeechRecognition`, dann kontrollieren Sie die Mikrofon-Zugriffsberechtigung. Wenn die Schaltfläche weiterhin nicht verfügbar ist oder die Erkennung fehlschlägt, kehren Sie zur Texteingabe zurück, ohne den Projektablauf zu blockieren.

## FAQ — Wissen und Suche

### Warum ist ein Dokument in der Liste sichtbar, aber noch nicht in der Suche auffindbar?

Weil es möglicherweise noch im Status **Ingesting** ist oder auf das Ende des Indexierungs-Pipelines wartet.

### Was bedeuten `source label` und `source system`?

Dies sind Herkunftsindikatoren. Sie helfen, die Quelle eines Nachweises zu erkennen, ohne die gesamte Backend-Konfiguration lesen zu müssen.

### Warum kann ein Import abgeschlossen erscheinen, während einige Dokumente noch nicht auffindbar sind?

Weil die sichtbare Erfassung nicht immer bedeutet, dass die gesamte Indexierung abgeschlossen ist. Kontrollieren Sie den Dokumentstatus (`Indexed`, `Ingesting`, `Failed`), dann starten Sie die Suche neu, wenn das Dokument tatsächlich indexiert ist.

### Warum ist ein Dokument `Indexed`, während ein Nachweis in einer strukturierten Ausgabe `unavailable` bleibt?

Das Dokument kann in der **Wissensbasis** vorhanden sein, während der mit dem Run verknüpfte Nachweis zum Zeitpunkt der Generierung nicht bestätigt, wiedereröffnet oder stabilisiert werden konnte. Lesen Sie weiter in [Strukturierte Ausgaben, Nachweise und Aktualität](./sorties-contextuelles-preuves-et-fraicheur.md), dann kontrollieren Sie den Run in [Berichte, KI-Protokoll und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md) falls nötig.

### Was bedeuten die Aktualitäts-Badges in der Suche und in den Nachweisen?

Sie zeigen den zeitlichen Vertrauensstatus der Quelle an: `fresh`, `aging`, `stale`, `conflicting` oder `unavailable`. Verwenden Sie sie als Signal zur Überprüfung vor der Veröffentlichung, nicht als kosmetisches Detail.

### Welcher Unterschied besteht zwischen `Trace ID`, `Context snapshot ID` und `Structured output ID`?

- **Trace ID**: Hauptverfolgungs-ID, um einen Run oder ein Ereignis wiederzufinden;
- **Context snapshot ID**: Momentaufnahme des dokumentarischen/Projekt-Kontexts, der während des Runs verwendet wurde;
- **Structured output ID**: ID der tatsächlich erzeugten strukturierten Ausgabe.

## FAQ — KI-Ausgaben und KI-Protokoll

### Welcher Unterschied besteht zwischen Runs und Activity?

**Runs** zeigt Agentenausführungen und ihre Metadaten; **Activity** zeigt eine Timeline von Projektereignissen und das zugehörige Roh-Payload.

### Wie erfahre ich, welcher KI-Anbieter tatsächlich verwendet wurde?

Öffnen Sie die Run-Details im **KI-Protokoll** und lesen Sie **Effective AI Provider**. Dies ist der Referenzwert für diesen Run.

### Ein Run ist in `Runs` sichtbar, aber keine klare Folge erscheint in `Activity`. Was tun?

Dieser Fall bedeutet oft, dass der Run existiert hat, aber noch kein Entwurf, Artefakt, Benachrichtigung oder nachgelagerte Aktion erstellt wurde, oder dass Sie nicht das richtige Projekt / den richtigen Filter in **Activity** öffnen. Setzen Sie die Untersuchung über [Berichte, KI-Protokoll und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md) fort, indem Sie der Reihenfolge **diff / Linie / Runs / Activity** folgen.

## FAQ — Berichte, Artefakte und Governance

### Welcher Unterschied besteht zwischen PM Doc, Artefakt und Artefaktversion?

Das Artefakt ist das verwaltete Objekt, die Artefaktversion ist sein historisierter Zustand, und das PM Doc ist das aus diesem Objekt überprüfte, bearbeitete oder veröffentlichte Projektdokument.

### Warum ist eine Aktion sichtbar, aber nicht ausführbar?

Überprüfen Sie Rechte, Connector, Projektbindung, Governance-Richtlinie und erforderliche Genehmigung. Siehe auch [Governance, Entscheidungen und Aktionen](./gouvernance-decisions-et-actions.md).

### Wann sollte **Genehmigen**, **Veröffentlichen** oder **Zum Wissen hinzufügen** verwendet werden?

- **Genehmigen** validiert eine Artefaktversion, die noch im Status `draft` ist;
- **Veröffentlichen** löst die verwaltete Verbreitung zu einem Ziel oder einem Zielformat aus;
- **Zum Wissen hinzufügen** injiziert ein überprüftes Dokument zurück in die Projektsuche.

Diese drei Aktionen sind nicht austauschbar.

### Wie schlichte ich einen `conflicting`-Nachweis vor der Veröffentlichung?

Öffnen Sie die widersprüchlichen Quellen erneut, vergleichen Sie den Ausschnitt, das Datum, die Herkunft und die Aktualität, und dokumentieren Sie die Schlichtung im Artefakt, der Überprüfungsnotiz oder dem Governance-Fluss. Falls nötig, gleichen Sie anschließend alles mit dem **KI-Protokoll** ab.

### Warum bleibt ein Benachrichtigungsentwurf `held` oder geht nie an einen externen Kanal?

In der beobachteten Oberfläche ist `in_app` der direkteste Weg. Externe Kanäle können in der Haltung **held / draft** bleiben, solange die verwaltete Verbreitung, die Richtlinie, der Connector oder die Genehmigung nicht erfüllt sind. Setzen Sie die Kette in [Governance, Entscheidungen und Aktionen](./gouvernance-decisions-et-actions.md) fort: Signal, eventueller Digest, Entwurf, Richtlinie, Connector, dann Genehmigung.

### Warum bleibt eine Aktion `pending approval` oder `approved` ohne sichtbare Ausführung?

- `pending approval` bedeutet, dass die Zustimmung noch nicht erteilt wurde;
- `approved` bedeutet, dass die Zustimmung existiert, aber nicht unbedingt, dass die Ausführung bereits stattgefunden hat.

Bestätigen Sie anschließend den nachgelagerten Schritt in **Actions & approvals**, dann in **Activity**. Falls nötig, verwenden Sie die in [Berichte, KI-Protokoll und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md) beschriebene Methode.

### Warum ist eine Integration auf Plattformebene verfügbar, aber in meinem Projekt gesperrt?

Weil eine technische Plattformdefinition nicht ausreicht. Es wird noch eine gültige **Projektbindung**, angemessene Berechtigungen, eine kompatible Richtlinie, ein akzeptabler Gesundheitszustand und je nach Fall die entsprechende Berechtigung benötigt.

## FAQ — Portfolio und Administration

### Warum zeigt das Portfolio keine Projekte oder keine Ausreißer an?

Überprüfen Sie die ausgewählten Projekte, die aktiven Signale, die Gewichtungen, die Schwellenwerte und die auf die Kohorte angewendete minimale Schwere.

### Wie gibt man eine Lizenz frei oder weist sie neu zu?

Dies erfolgt über **Plattformadministration** durch ein autorisiertes Profil. Die Entfernung gibt die Kapazität für eine spätere Neuverteilung frei, vorbehaltlich der Haltung und des Entfernungsfensters des Plans.

### Was bedeutet `Validate` erfolgreich, aber `Test` fehlgeschlagen in `AI provider settings`?

Die administrative Konfiguration erscheint konsistent, aber die tatsächliche Konnektivität oder der Fernzugriff funktionieren noch nicht. Überprüfen Sie Endpunkt, Secret oder tatsächliche Authentifizierung, Zugänglichkeit des Providers und Netzwerkeinschränkungen, dann setzen Sie die in [Portfolio und technische Administration](./portefeuille-et-administration-technique.md) beschriebene Sequenz fort.

### Warum ist mein Provider sichtbar, aber nie `Operational`?

Ein Provider kann konfiguriert oder sogar validiert sein, ohne die gesamte Kette **Konfiguration → Validierung → Test → Aktivieren** durchlaufen zu haben. Überprüfen Sie auch die Berechtigung, die erlaubten Provider und die allgemeine Betriebsbereitschaft, bevor Sie ihn als nutzbar betrachten.

### Was tun, wenn kein Azure OpenAI-Deployment in `AI provider settings` erscheint?

Dies bedeutet in der Regel, dass kein Deployment in der konfigurierten Azure OpenAI-Ressource sichtbar ist oder dass die Erkennung mit den aktuellen Parametern nicht abgeschlossen werden kann. Überprüfen Sie Endpunkt, Authentifizierung, API-Version und tatsächliche Präsenz der Deployments auf Azure-Seite, dann setzen Sie die detaillierte Kontrolle in [Portfolio und technische Administration](./portefeuille-et-administration-technique.md) fort.

### Warum ist der KI-Anbieter sichtbar, aber nicht bearbeitbar oder nicht nutzbar?

Der Anbieter kann im Lesemodus sichtbar sein, während seine Änderung einer Admin-Rolle vorbehalten bleibt. Seine Nutzung kann auch durch den Plan, die `allowed providers`, die Berechtigung oder die Runtime-Auflösung des effektiven Anbieters eingeschränkt sein.

## Weiter

- [Glossar](./glossaire.md)
- [Erste Schritte](./demarrage.md)
- [Portfolio und technische Administration](./portefeuille-et-administration-technique.md)
