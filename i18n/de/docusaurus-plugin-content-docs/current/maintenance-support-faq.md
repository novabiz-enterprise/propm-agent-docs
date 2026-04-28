---
title: Wartung, Support und FAQ
slug: /maintenance-support-faq
description: Betriebsreferenzen, nützliche Prüfungen und Antworten auf häufig gestellte Fragen.
---

[Startseite](./index.md) · [Berichte, KI-Protokoll und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md) · [Glossar](./glossaire.md)

## Nützliche Oberflächen für den Betrieb

Die folgenden Beobachtungspunkte sind in der Anwendung bestätigt:

- **Benachrichtigungen** in der oberen Leiste;
- **Gesundheitsindikator** in der oberen Leiste;
- **Signale** im Projektarbeitsbereich;
- **KI-Protokoll** für Runs und Aktivitäten;
- **Audit / Activity** in der Plattformverwaltung.

## Schnelle Prüfungsprozedur

1. prüfen Sie, ob das richtige **Projekt** aktiv ist;
2. unterscheiden Sie **leere Ansicht**, **schreibgeschützt**, **Zugriff verweigert** oder **angezeigte Meldung**;
3. öffnen Sie das **KI-Protokoll**, wenn das Thema einen Agenten, ein Ergebnis oder ein Artefakt betrifft;
4. behalten Sie die **Trace ID** bei und, falls sichtbar, die `Context snapshot ID` oder die `Structured output ID`;
5. prüfen Sie Rechte, Integrationen, Entitlements und Sitzplätze, falls der Zugriff oder die Ausführung blockiert ist.

## Schnelle Referenzen nach Situation

| Angetroffene Situation | Oberfläche erster Ebene | Nächster Schritt |
| --- | --- | --- |
| Anmelde- oder Microsoft-Rückkehr abnormal | [Start](./demarrage.md) | prüfen Entra, Mandant, `redirectUri` und Sitzplätze |
| Kein Projekt sichtbar nach Anmeldung | **Projekte** / Projekt-Auswahl | **Zugriffskontrolle** oder Hinzufügen des Kontos zum Projekt |
| Agentenantwort, Artefakt oder zweifelhafte Veröffentlichung | **KI-Protokoll** → `Runs` | **Activity**, dann **Berichte & Artefakte** |
| Import oder inkonsistente Suche | **Wissen** und Importhistorie | **Projektintegration**, dann **Plattformverwaltung** |
| Externe Aktion sichtbar, aber blockiert | **Aktionen & Genehmigungen** | **Projektintegration**, dann **Plattformverwaltung** |

## Schnelle Prüflisten

### Zugriff zu bestätigen

Prüfen Sie die URL, den Mandanten, das Gastkonto bei Guest-Nutzung, die tatsächlich konfigurierte `redirectUri` und die Verfügbarkeit eines Sitzplatzes, falls der Plan einen verbraucht.

### Seite sichtbar, aber nicht bearbeitbar

Sie befinden sich wahrscheinlich im **schreibgeschützten** Modus. Prüfen Sie Ihre Rolle, bevor Sie auf eine Berechtigungsbeschränkung schließen.

### Dokument sichtbar, aber nicht suchbar

Beginnen Sie damit, den Dokumentstatus (`Indexed`, `Ingesting`, `Failed`) zu prüfen, die Importhistorie, das Seiten-Refresh und die Such-`Trace ID`, falls ein Aufruf fehlgeschlagen ist.

### Import aus einer ausgegrauten oder fehlenden Quelle

Die nützlichsten Prüfungen sind: nicht validierter Anbieter, fehlendes Projekt-Binding, blockierendes Entitlement, unzureichende Berechtigung oder ein noch zu bestätigender Gesundheitsstatus.

### Aktion sichtbar, aber nicht ausführbar

Prüfen Sie den kompatiblen Connector, das Projekt-Binding, die erforderliche Genehmigung, die Benutzerrolle und die geltende Richtlinie.

### Spracheingabe nicht verfügbar

Die Spracheingabe hängt vom Browser ab. Versuchen Sie einen anderen Browser, prüfen Sie die Mikrofonberechtigungen und nutzen Sie die Texteingabe, falls die Spracherkennung nicht unterstützt wird.

## Daten, die an den Support weitergegeben werden

| Element | Warum es nützlich ist |
| --- | --- |
| URL der Bereitstellung | Identifiziert die betroffene Umgebung |
| Betroffenes Projekt | Reproduziert den Kontext |
| Trace ID | Findet den Run oder das Ereignis exakt |
| Context snapshot ID / Structured output ID | Verknüpft einen Run, eine Ausgabe und ein Artefakt |
| Screenshot | Versteht den sichtbaren Zustand zum Zeitpunkt der Blockierung |
| Ungefährer Zeitpunkt | Verknüpft das Ereignis mit den Logs |

## FAQ — Zugriff und Sicherheit

### Warum kann ich eine Administrationsseite sehen, aber nicht bearbeiten?

Weil das Produkt **schreibgeschützt** und **Zugriff verweigert** unterscheidet. Eine Seite kann zur Inspektion angezeigt werden, ohne die Bearbeitung zu erlauben.

### Warum gelingt meine Microsoft-Anmeldung, aber der Zugriff ist noch nicht wie erwartet?

Prüfen Sie den Mandanten, die Kontoberechtigung, die Existenz eines zugänglichen Projekts und die Verfügbarkeit eines Sitzplatzes, falls der Plan einen erfordert.

### Warum gelingt meine Anmeldung, aber kein Projekt erscheint?

Diese Situation bedeutet nicht unbedingt ein Authentifizierungsproblem. Prüfen Sie zuerst den **Projekt-Auswahl** und dann die Seite **Projekte**. Wenn die Liste leer bleibt, wurde das Konto wahrscheinlich noch nicht dem richtigen Projekt hinzugefügt oder verfügt nicht über das Erstellungsrecht.

### Wann muss ich ein externes Konto als `guest` einladen?

Wenn das Konto zu einem anderen Mandanten gehört als der, der die Anwendung hostet. Das Konto muss dann im Zielmandanten eingeladen und anschließend auf die Anwendung oder über die erwartete Gruppe autorisiert werden.

### Wie unterscheiden sich schnell Mandant, `redirect URI`, Entra-Client oder Sitzplatz?

Folgen Sie dieser Reihenfolge:

1. Wenn Microsoft **vor** dem Rückkehr in die Anwendung fehlschlägt, vermuten Sie zuerst Mandant, `clientId` oder `redirect URI`;
2. Wenn die Anmeldung gelingt, die Anwendung jedoch blockiert bleibt, prüfen Sie anschließend die **Sitzplätze** und den Projektzugriff;
3. Wenn nur eine bestimmte Oberfläche gesperrt bleibt, liegt das Thema oft bei **Rolle** oder **Berechtigung** statt bei Authentifizierung.

## FAQ — Verfügbarkeit, Laufzeit und Konnektivität

### Wie lese ich das Gesundheitspanel, wenn einige Seiten noch laden?

Weil die Authentifizierung weiterhin gültig sein kann, während eine **API** oder ein Anbieter noch eine Verfügbarkeitsprüfung verlangt. Notieren Sie zuerst den im Gesundheitsindikator gezeigten Status und gehen Sie dann zu [Interface und Navigation](./interface-et-navigation.md) für die Einordnung des Panels und zu [Portfolio und technische Administration](./portefeuille-et-administration-technique.md), wenn der Verdacht auf den Anbieter oder die Admin-Integration fällt.

### Was tun, wenn die Anmeldung gelingt, ein Projekt sichtbar ist, aber die Runs nicht starten?

Prüfen Sie in dieser Reihenfolge: aktives Projekt, Gesundheitsindikator, vermeintlich betriebsbereiter KI-Anbieter, mögliches Entitlement, dann **KI-Protokoll**, um zu sehen, ob ein Run zumindest erstellt wurde. Wenn der Anbieter weiterhin verdächtig ist, gehen Sie zu [Portfolio und technische Administration](./portefeuille-et-administration-technique.md).

## FAQ — Projekt, Arbeitsbereich und Agenten

### Wann sollte ich den Arbeitsbereich statt Agenten verwenden?

Verwenden Sie **Arbeitsbereich**, um das Projekt einzustellen und zu steuern; verwenden Sie **Agenten**, um mit einem Agenten zu chatten und eine strukturierte Ausgabe zu erzeugen.

### Wo wird der Chatverlauf gespeichert?

Der sichtbare Verlauf ist lokal im Browser. Es ist keine zentrale, geteilte Archivierung.

### Was ist lokal im Browser und was wird in der Plattform geteilt?

Im aktuellen Zustand gilt:

- die **Chat‑Kontinuität** wird lokal gespeichert, pro Paar **Projekt + Agent**, im aktuellen Browser;
- das **gemerkte aktive Projekt** hängt ebenfalls vom Browser und manchmal von der lokalen Sitzung ab;
- weitere browserlokale Bequemlichkeiten sind die **Sprache der Oberfläche**, das **Theme**, die Liste der **zuletzt verwendeten Projekte**, der Lese-/Löschstatus des **Benachrichtigungszentrums** und einige gespeicherte **Tabellen- oder Ansichtspräferenzen**;
- **Dokumente**, **Importe**, **Artefakte**, **Genehmigungen**, **veröffentlichte Berichte**, **Projektbenachrichtigungen**, **Signale**, **Digests**, **Entwürfe** und **gesteuerte Aktionen** gehören zur **gemeinsam genutzten Plattform**.

Es ist daher normal, dass ein Chatverlauf beim Wechsel des Browsers oder Geräts verschwindet, während gesteuerte Projektobjekte für andere berechtigte Nutzer sichtbar bleiben.

### Was bedeutet `All projects` genau?

`All projects` ist ein **Geltungsbereich für benutzerdefinierte Agenten**, kein einzelnes Projekt und keine Portfolio-Ansicht. Das bedeutet, dass ein benutzerdefinierter Agent in allen Projekten sichtbar bleiben kann, auf die **dasselbe Konto** Zugriff hat. Jeder Run wird dennoch im **aktiven Projekt** ausgeführt, das zum Zeitpunkt des Chats gewählt ist.

### Warum erscheint ein benutzerdefinierter Agent nicht in einem anderen Projekt?

Prüfen Sie zuerst seinen **Geltungsbereich**. Ein Agent mit `Project only` bleibt auf das aktuelle Projekt beschränkt. Wenn die Umgebung einen Agenten mit `All projects` bereitstellt, muss er zusätzlich mit **demselben Konto** in einem Projekt geöffnet werden, auf das dieses Konto Zugriff hat.

### Wird der Chatverlauf pro Projekt, pro Agent oder nur im Browser beibehalten?

Die Kontinuität ist **lokal im Browser** und an das Paar **Projekt + Agent** gebunden. Sie ist weder global für den gesamten Mandanten noch automatisch zwischen Browsern geteilt.

### Welche Browser oder Berechtigungen sollten für die Spracheingabe zuerst geprüft werden?

Beginnen Sie mit der Browserunterstützung für `SpeechRecognition` / `webkitSpeechRecognition`, dann prüfen Sie die Mikrofonzugriffsberechtigung. Wenn der Button nicht verfügbar bleibt oder die Erkennung fehlschlägt, kehren Sie zur Texteingabe zurück, ohne den Projektpfad zu blockieren.

### Warum ist die Spracheingabe nicht in jeder Umgebung sichtbar?

Weil diese Funktion vom Browser und seiner Unterstützung für Spracherkennung abhängt. Die Spracheingabe ist optional: Wenn sie nicht eingeblendet wird oder nicht funktioniert, bleibt die Texteingabe in **Agents** der normale Arbeitsweg.

## FAQ — Wissen und Suche

### Warum wirken **Arbeitsbereich**, **Wissen** oder **KI-Protokoll** leer?

Prüfen Sie zuerst, ob ein **aktives Projekt** vorhanden ist. In der aktuellen Anwendung können diese Oberflächen einen **normalen leeren Zustand** anzeigen, solange kein Projekt ausgewählt ist.

Wenn bereits ein Projekt aktiv ist, unterscheiden Sie danach zwischen einem normalen leeren Zustand und einem tatsächlichen Fehlen von Daten: neues Projekt, kein Run, kein Dokument, kein Artefakt oder aktiver Filter.

### Warum ist **Berichte & Artefakte** leer?

Die häufigsten Ursachen sind:

- es wurde noch kein **Artefakt** oder **PM-Dokument** erstellt;
- der Run blieb auf der Stufe der **strukturierten Ausgabe**;
- das falsche Projekt oder ein Filter verbirgt die Zeilen;
- die Umgebung enthält nicht dieselben Beispieldaten wie andere Screenshots oder Tests.


### Warum ist ein Dokument in der Liste sichtbar, aber noch nicht auffindbar?

Weil es noch im Zustand **Ingesting** sein kann oder auf das Ende der Indexierungs-Pipeline wartet.

### Was bedeuten `source label` und `source system`?

Dies sind Herkunftsindikatoren. Sie helfen, zu erkennen, woher ein Dokument oder Import stammt, ohne die gesamte detaillierte Konfiguration erneut zu lesen.

### Warum kann ein Import als abgeschlossen erscheinen, während einige Dokumente noch nicht auffindbar sind?

Weil die sichtbare Ingestion nicht immer bedeutet, dass die gesamte Indexierung abgeschlossen ist. Prüfen Sie den Dokumentstatus (`Indexed`, `Ingesting`, `Failed`) und starten Sie die Suche erneut, wenn das Dokument tatsächlich indexiert ist.

### Warum ist ein Dokument `Indexed`, aber ein Beweis bleibt `unavailable` in einer strukturierten Ausgabe?

Das Dokument kann in **Wissen** vorhanden sein, während der zugehörige Beweis zum Run nicht bestätigt, neu geöffnet oder stabilisiert werden konnte, als die Ausgabe generiert wurde. Lesen Sie weiter in [Ausgaben, Beweise und Frische](./sorties-contextuelles-preuves-et-fraicheur.md), dann prüfen Sie den Run in [Berichte, KI-Protokoll und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md), falls nötig.

### Was bedeuten die Frische-Badges in der Suche und in Beweisen?

Sie zeigen den zeitlichen Vertrauensstatus der Quelle an: `fresh`, `aging`, `stale`, `conflicting` oder `unavailable`. Nutzen Sie sie als Signal für eine erneute Durchsicht vor der Veröffentlichung, nicht als kosmetisches Detail.

### Was ist der Unterschied zwischen `Trace ID`, `Context snapshot ID` und `Structured output ID`?

- **Trace ID**: Hauptverfolgungs-ID, um einen Run oder ein Ereignis exakt zu finden;
- **Context snapshot ID**: Aufnahme des dokumentalen/Projektkontexts, der während des Runs verwendet wurde;
- **Structured output ID**: ID der tatsächlich erzeugten strukturierten Ausgabe.

Im Alltag ist die **Run ID** der praktischste Anker auf dem Bildschirm. Die **Trace ID** wird besonders wichtig, wenn Support, Audit oder eine serviceübergreifende Diagnose eingebunden sind.

## FAQ — KI-Ausgaben und KI-Protokoll

### Was ist der Unterschied zwischen Runs und Activity?

**Runs** zeigt die Ausführungen von Agenten und deren Metadaten; **Activity** zeigt eine Zeitleiste von Projektereignissen und das zugehörige Rohpayload.

### Wie erkenne ich, welcher KI-Anbieter tatsächlich verwendet wurde?

Öffnen Sie die Run-Details im **KI-Protokoll** und lesen Sie **Effective AI Provider**. Das ist der Referenzwert für diesen Run.

### Warum garantieren `Validate` und `Test` nicht immer, dass genau dieser Anbieter tatsächlich verwendet wird?

Weil `Validate` und `Test` vor allem die administrative Konsistenz und die Konnektivität der Konfiguration prüfen. Welcher Anbieter für einen konkreten Run tatsächlich verwendet wurde, entscheidet sich erst zur Laufzeit und ist im **KI-Protokoll** sichtbar.

### Ein Run ist in `Runs` sichtbar, aber keine klare Folge erscheint in `Activity`. Was tun?

Dieser Fall bedeutet oft, dass der Run tatsächlich existiert, aber noch kein Entwurf, Artefakt, Benachrichtigung oder nachgelagerte Aktion erstellt wurde, oder Sie öffnen nicht das richtige Projekt bzw. den richtigen Filter in **Activity**. Führen Sie die Untersuchung über [Berichte, KI-Protokoll und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md) durch und folgen Sie der Reihenfolge **Diff / Linie / Runs / Activity**.

### Wie lese ich das Feld `Cost`?

Verstehen Sie `Cost` als Transparenzsignal zur Laufzeit: `tokens` und `calls` helfen vor allem bei Untersuchung, Support und Nutzungsverständnis, sind aber für sich allein kein fachliches Freigabesignal. Wenn Sie einen projektübergreifenden Hinweis auf Budget- oder Nutzungsdruck brauchen, öffnen Sie stattdessen `cost_pressure` im **Portfolio**.

### Was soll ich mit `Confidence` und `Source freshness` konkret anfangen?

- **Confidence** ist ein Prüfhinweis, kein eigenständiger Beweis;
- **Source freshness** zeigt den Grad der Aktualität der zitierten Nachweise;
- wenn einer der beiden Werte schwach, alt, `conflicting` oder `unavailable` wirkt, gehen Sie vor einer externen Weitergabe zu Nachweisen, Run und Linie zurück.

## FAQ — Berichte, Artefakte und Governance

### Was ist der Unterschied zwischen PM Doc, Artefakt und Artefaktversion?

Das Artefakt ist das verwaltete Objekt, die Artefaktversion ist sein historisiertes Stadium, und der PM Doc ist das Projektdokument, das aus diesem Objekt überarbeitet, bearbeitet oder veröffentlicht wurde.

### Warum ist eine Aktion sichtbar, aber nicht ausführbar?

Prüfen Sie Rechte, Connector, Projekt-Binding, Governance-Richtlinie und erforderliche Genehmigung. Siehe auch [Governance, Entscheidungen und Aktionen](./gouvernance-decisions-et-actions.md).

### Wann muss ich **Approve**, **Publish** oder **Add to knowledge**?

- **Approve** validiert eine Artefaktversion, die noch im `draft` ist;
- **Publish** löst die verwaltete Verbreitung zu einem Ziel oder Format aus;
- **Add to knowledge** injiziert ein erneut gelesenes Dokument in die Projekt-Suche.

Diese drei Aktionen sind nicht austauschbar.

### Wie wähle ich einen `conflicting` Beweis vor der Veröffentlichung aus?

Öffnen Sie die widersprüchlichen Quellen, vergleichen Sie den Ausschnitt, das Datum, die Herkunft und die Frische, dann dokumentieren Sie die Entscheidung im Artefakt, in der Review-Notiz oder im Governance-Workflow. Falls nötig, verknüpfen Sie anschließend alles mit dem **KI-Protokoll**.

### Warum bleibt ein Benachrichtigungsentwurf `held` oder geht nie zu einem externen Kanal?

In der Oberfläche ist `in_app` der direkteste Pfad. Externe Kanäle können in der **held / draft** Haltung bleiben, bis die verwaltete Verbreitung, die Richtlinie, der Connector oder die Genehmigung erfüllt sind. Folgen Sie der Kette in [Governance, Entscheidungen und Aktionen](./gouvernance-decisions-et-actions.md): Signal, möglicher Digest, Entwurf, Richtlinie, Connector, dann Genehmigung.

### Warum bleibt eine Aktion `pending approval` oder `approved` ohne sichtbare Ausführung?

- `pending approval` bedeutet, dass die Zustimmung noch nicht erteilt wurde;
- `approved` bedeutet, dass die Zustimmung existiert, aber nicht unbedingt, dass die Ausführung bereits stattgefunden hat.

Bestätigen Sie anschließend die nachgelagerte Phase in **Aktionen & Genehmigungen**, dann in **Activity**. Falls nötig, nutzen Sie die Methode in [Berichte, KI-Protokoll und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md).

### Warum ist eine Integration in der Plattform verfügbar, aber in meinem Projekt gesperrt?

Ein technisches Plattformdefinition reicht nicht aus. Es muss noch ein gültiges **Projekt-Binding**, passende Berechtigungen, eine kompatible Richtlinie, ein akzeptabler Gesundheitsstatus und ggf. das entsprechende Entitlement vorhanden sein.

## FAQ — Portfolio und Verwaltung

### Warum stimmen Beispieldaten nicht immer exakt mit der Dokumentation überein?

Live-Umgebungen können sich unterscheiden. Manche Projekte zeigen nicht immer dieselben seedierten Dokumente, seedierten Berichte oder Suchbeispiele wie in der Dokumentation oder in anderen Tests.

### Warum zeigt das Portfolio keine Projekte oder Ausreißer an?

Mehrere Lesarten sind normal:

- es wurde noch kein zugängliches Projekt geladen;
- aktuell ist kein Projekt oder kein Signal ausgewählt;
- der Vergleich hat keine verwertbaren Projektzusammenfassungen geliefert;
- einzelne Signale sind mangels Nachweisen nicht verfügbar;
- kein Projekt überschreitet mit der aktiven Konfiguration den globalen Ausreißer-Schwellenwert.

Ein ruhiges Portfolio kann daher aus einer restriktiven Auswahl, fehlenden Nachweisen oder einer tatsächlich stabilen Lage resultieren.

### Gibt es implizite Standardwerte im Portfolio?

Nein. Die Oberfläche bietet vor allem **Standardwerte**, die Aktion **Reset defaults** und gespeicherte **Kohorten**. Die Standardwerte sind ein sicherer Startpunkt, aber kein verpflichtendes Modell. Einige Umgebungen zeigen zusätzlich eine vorkonfigurierte Kohorte; auch das variiert je nach Umgebung.

### Wie löse ich einen Sitzplatz oder weise ihn neu zu?

Dies geschieht über **Plattformverwaltung** durch ein autorisiertes Profil. Die Rücknahme gibt die Kapazität für eine spätere Neuverteilung frei, vorbehaltlich der Postenposture und des Entnahmefensters des Plans.

### Was bedeutet es, wenn `Validate` erfolgreich ist, `Test` aber in den KI-Anbieter-Einstellungen fehlschlägt?

Die administrative Konfiguration wirkt konsistent, aber die reale Konnektivität oder der entfernte Zugriff funktionieren noch nicht. Prüfen Sie Endpoint, Secret oder die tatsächliche Authentifizierung, die Erreichbarkeit des Anbieters und mögliche Netzwerkbeschränkungen. Folgen Sie danach der Sequenz in [Portfolio und technische Administration](./portefeuille-et-administration-technique.md).

### Warum ist mein Anbieter sichtbar, aber nie `Operational`?

Ein Anbieter kann konfiguriert oder sogar validiert sein, ohne die gesamte Kette **Configuration → Validation → Test → Activate** durchlaufen zu haben. Prüfen Sie auch das Entitlement, die `allowed providers` und die allgemeine Bereitschaft, bevor Sie ihn als nutzbar betrachten.

### Was tun, wenn in den KI-Anbieter-Einstellungen kein Azure OpenAI Deployment erscheint?

Das bedeutet in der Regel, dass in der konfigurierten Azure-OpenAI-Ressource kein Deployment sichtbar ist oder die Erkennung mit den aktuellen Parametern nicht gelingt. Prüfen Sie Endpoint, Auth, API-Version und die tatsächliche Existenz der Deployments in Azure. Führen Sie anschließend die Detailprüfung in [Portfolio und technische Administration](./portefeuille-et-administration-technique.md) durch.

### Warum ist der KI-Anbieter sichtbar, aber nicht editierbar oder nutzbar?

Der Anbieter kann lesbar sein, während seine Änderung einem Admin-Rolle vorbehalten ist. Seine Nutzung kann auch durch den Plan, die `allowed providers`, das Entitlement oder die Laufzeitauflösung des tatsächlichen Anbieters eingeschränkt sein.

## Weiter

- [Glossar](./glossaire.md)
- [Start](./index.md)
- [Portfolio und technische Administration](./portefeuille-et-administration-technique.md)
