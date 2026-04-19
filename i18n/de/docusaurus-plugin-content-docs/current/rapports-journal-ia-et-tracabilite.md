---
title: Berichte, KI-Protokoll und Nachverfolgbarkeit
slug: /rapports-journal-ia-et-tracabilite
description: PM Docs überprüfen, Liefergegenstände veröffentlichen und die vollständige Nachverfolgbarkeit von KI-Runs verfolgen.
---

[Startseite](./index.md) · [Strukturierte Ausgaben, Nachweise und Aktualität](./sorties-contextuelles-preuves-et-fraicheur.md) · [Portfolio und technische Administration](./portefeuille-et-administration-technique.md)

![Berichte und Artefakte](/img/screenshots/localized/de/08-reports-overview.png)

## Ziel

Diese Seite erklärt den Unterschied zwischen **Artefakt**, **Artefaktversion** und **PM Doc** und erläutert dann die Rolle des **KI-Protokolls** für Audit und Support.

## Drei zu unterscheidende Begriffe

| Begriff | Rolle |
| --- | --- |
| Artefakt | Verwaltetes Objekt, das aus einem Run oder einer Überprüfungsarbeit hervorgeht |
| Artefaktversion | Genaues Stadium eines Artefakts, mit Historie, Diff und Linie |
| PM Doc | Überprüftes, bearbeitetes, heruntergeladenes, veröffentlichtes oder in das Wissen zurückinjiziertes Projektdokument |

## Beobachteter Lebenszyklus

Der häufigste Fluss ist:

1. ein Agent erzeugt eine **strukturierte Ausgabe**;
2. diese Ausgabe wird zu einem **draft artifact**;
3. der Benutzer öffnet **Berichte & Artefakte**;
4. er liest den Inhalt erneut, prüft den **Diff** und die **Linie**;
5. er genehmigt, veröffentlicht, lädt herunter oder fügt das Dokument dem **Wissen** hinzu.

## Sichtbare Status

### Artefakt

Die auf Artefakt-/Versionsebene bestätigten Status sind:

- `draft`
- `approved`
- `published`
- `superseded`

### PM Doc

PM Docs zeigen mindestens die folgenden Kompatibilitätszustände:

- `draft`
- `final`

## Wenn **Berichte & Artefakte** leer wirken

Ein Projekt kann aus mehreren normalen Gründen eine leere Oberfläche zeigen:

- es wurde noch kein **Artefakt** oder **PM-Dokument** erstellt;
- der Run blieb auf der Stufe der **strukturierten Ausgabe** ohne nachgelagerte Umwandlung;
- das falsche Projekt oder ein Filter verbirgt die erwarteten Zeilen;
- die Umgebung enthält nicht dieselben Demo-Seed-Daten wie andere Screenshots oder Tests.

Beginnen Sie in diesem Fall wieder bei **Agenten** oder **KI-Log** und kehren Sie zu **Berichte & Artefakte** zurück, wenn ein gesteuertes Objekt tatsächlich existiert.

## Verfügbare Aktionen in Berichte & Artefakte

Der Hub bietet Aktionen wie:

- **review / preview**;
- **diff**;
- **lineage**;
- **edit**;
- **download**;
- **add to knowledge**;
- **publish**;
- **delete**.

## Diff, Linie und Versionierung

### Diff

Der **Diff** vergleicht Artefaktversionen. Er ist besonders nützlich für:

- das erneute Prüfen von Abweichungen vor der Veröffentlichung;
- das Unterscheiden eines Agentenvorschlags von einer tatsächlich validierten Version;
- das Verstehen, warum sich ein finales Dokument von einem vorherigen Entwurf unterscheidet.

### Linie

Die **Linie** verbindet:

- die `source run ID`;
- die `context snapshot ID`;
- die `structured output ID`;
- das Artefakt und seine Version;
- die verknüpften Veröffentlichungen und Nachweise.

### Versionierung

Die Oberfläche ermöglicht auch die Auswahl einer Version anhand ihrer Nummer und die Identifizierung der vorherigen Version, der Vergleichsbasis oder einer ersetzten Version.

## Genehmigung und Veröffentlichung

Die beobachteten Verhaltensweisen zeigen, dass:

- **Approve** für eine Version im Status `draft` verfügbar ist;
- **Publish** verfügbar wird, wenn die Version `approved` oder bereits `published` ist;
- die Veröffentlichung verwaltete Formate und Ziele versendet;
- das Hinzufügen zum Wissen eine vom Herunterladen und Veröffentlichen getrennte Aktion bleibt.

## Verfügbare Editoren

Das Produkt enthält mehrere Bearbeitungsoberflächen:

- einen Rich-/Markdown-Editor für dokumentorientierte Ausgaben;
- einen Tabellen-/Grid-Editor für tabellenorientierte Ausgaben;
- einen Review-/Source-Modus im Lesemodus, wenn das Format nicht auf gleiche Weise bearbeitbar ist.

Bestätigte Downloads: **DOCX** und **XLSX**.

### Praktische Grenzen, die zu beachten sind

| Fall | Nützliche Lektüre |
| --- | --- |
| tatsächlich bearbeitbarer Inhalt | Verwenden Sie den Editor für die Überprüfung und kontrollierten Anpassungen vor der Genehmigung |
| Inhalt hauptsächlich im Review-Modus | Behandeln Sie den Bildschirm als Validierungsoberfläche, nicht als Hauptort für Neufassungen |
| Bedarf an einer Referenzdarstellung zur Weitergabe | Der verwaltete Download bleibt die zuverlässigste Ausgabe für die Weitergabe außerhalb der Anwendung |

![PM Doc-Editor und Dokumentenüberprüfung](/img/screenshots/localized/de/06-pm-doc-editor.png)

![KI-Protokoll](/img/screenshots/localized/de/09-ai-log-runs.png)

## KI-Protokoll: Was die Seite abdeckt

Das **KI-Protokoll** hat zwei separate Tabs:

- **Runs**;
- **Activity**.

## Runs vs. Activity

| Tab | Wozu er dient |
| --- | --- |
| Runs | Eine Agentenausführung, ihre Nachverfolgungs-Metadaten und ihre verknüpften Artefakte überprüfen |
| Activity | Eine Projekt-Zeitleiste überprüfen und die Rohdaten eines Ereignisses inspizieren |

### Wann Runs öffnen

Öffnen Sie **Runs**, um:

- zu verstehen, warum ein Ergebnis erzeugt wurde;
- den tatsächlich verwendeten Provider wiederzufinden;
- Aktualität, Vertrauen und Zitate erneut zu prüfen;
- einen Run mit einem Artefakt oder einem PM Doc zu verknüpfen.

### Wann Activity öffnen

Öffnen Sie **Activity**, um:

- eine Chronologie zu rekonstruieren;
- zu überprüfen, ob ein Entwurf, eine Genehmigung oder eine Veröffentlichung ein Ereignis hinterlassen hat;
- die Rohdaten zu inspizieren, wenn Sie Support oder Audit durchführen.

### Beispiele nützlicher Ereignisse, die in Activity zu bestätigen sind

Je nach Fluss kann **Activity** Ihnen helfen zu bestätigen, dass ein nachgelagertes Ereignis aufgezeichnet wurde, z.B.:

- Erstellung eines Entwurfs;
- Genehmigung eines Artefakts;
- Veröffentlichung;
- Vorbereitung einer Benachrichtigung;
- Entscheidung über Genehmigung, Ablehnung oder verwaltete Ausführung.

### Konkrete Beispiele für `Type` / `Kind`

Die folgenden Werte sind Beispiele, die in den gesäten und Demonstrations-Flüssen beobachtet wurden. Sie geben eine gute Leserichtung, ohne Anspruch auf Vollständigkeit aller zukünftigen Ereignisse.

| Type | Kind | Praktische Lesart |
| --- | --- | --- |
| `agent_execution` | `completed` / `failed` | ein Agenten-Run wurde erfolgreich oder mit Fehler beendet |
| `document_upload` | `started` / `completed` / `failed` | ein Dokument begann seine Verarbeitung, beendete sie oder schlug fehl |
| `report_generated` | `completed` | ein PM Doc oder Bericht wurde generiert und protokolliert |
| `marketplace_update` | `completed` | eine Systembenachrichtigung oder -aktualisierung wurde im Verlauf aufgezeichnet |

## Sichtbare Filter und Spalten

### Runs

Beobachtete Filter:

- Suche nach Agent / Status / Run ID;
- Agentenfilter;
- Statusfilter.

Sichtbare Spalten: **Created**, **Agent**, **Status**, **Cost**, **Run ID**, **Actions**.

Das Feld **Cost** zeigt mindestens die **Tokens** und die Anzahl der **Calls** an, wenn diese Informationen verfügbar sind.

### Activity

Beobachtete Filter:

- Suche nach Type / Kind / Actor;
- Type-Filter;
- Kind-Filter.

Sichtbare Spalten: **Created**, **Type**, **Kind**, **Actor**, **ID**, **Actions**.

## In einem Run sichtbare technische Details

Die Detailansicht eines Runs kann zeigen:

- `Trace ID`;
- `Context snapshot ID`;
- `Structured output ID`;
- Zitate;
- `Effective AI Provider`;
- `Deployment-selected AI Provider`;
- `Model family`;
- `Confidence`;
- `Source freshness`;
- verknüpfte Artefakte.

## Laufzeit-Transparenz der KI

Die folgende Unterscheidung ist wichtig:

- **für die Bereitstellung ausgewählter KI-Provider**: anfängliche Wahl der Umgebung;
- **effektiver KI-Provider**: tatsächlich für diesen Run verwendeter Provider.

Diese beiden Werte können abweichen. Im Zweifelsfall ist das **KI-Protokoll** für den beobachteten Run maßgeblich.

## Je nach Symptom zuerst zu öffnende Oberfläche

| Symptom | Zuerst zu öffnende Oberfläche | Warum |
| --- | --- | --- |
| Inhaltsabweichung zwischen Entwurf und finaler Version | **Diff** | um zu sehen, was sich tatsächlich geändert hat |
| Zweifel am Nachweis oder der Herkunft | **Linie** | um Run, strukturierte Ausgabe, Artefakt und Quellen zu verknüpfen |
| Zweifel an der Laufzeit, dem Provider oder der KI-Ausführung | **Runs** | um `Trace ID`, effektiven Provider, Aktualität und Vertrauen erneut zu prüfen |
| Zweifel an der Veröffentlichung, Genehmigung oder nachgelagerten Folge | **Activity** | um die Chronologie und die Rohdaten zu bestätigen |

## Empfohlener Untersuchungs-Workflow

Wenn ein Liefergegenstand, eine Veröffentlichung oder eine Benachrichtigung zweifelhaft erscheint, gehen Sie vom Sichtbarsten zum Technischsten:

1. öffnen Sie das betreffende **PM Doc** oder Artefakt;
2. prüfen Sie den **Diff**, um zu sehen, was sich tatsächlich geändert hat;
3. öffnen Sie die **Linie**, um `source run ID`, `Context snapshot ID` und `Structured output ID` zu notieren;
4. wechseln Sie zu **Runs**, um Aktualität, Vertrauen, Zitate, effektiven KI-Provider und verknüpfte Artefakte erneut zu prüfen;
5. verwenden Sie **Activity**, um den weiteren Fluss zu bestätigen: Entwurf, Genehmigung, Veröffentlichung, Benachrichtigung oder verwaltete Aktion;
6. behalten Sie schließlich die **Trace ID**, falls die Untersuchung vom Support oder Audit wiederaufgenommen werden muss.

### Fall 1 — ein finales PM Doc scheint falsch

1. öffnen Sie das finale **PM Doc** und bestätigen Sie die tatsächlich veröffentlichte Version;
2. verwenden Sie **Diff**, um zu erkennen, was hinzugefügt, entfernt oder umformuliert wurde;
3. öffnen Sie **Linie**, um die `source run ID` und `Structured output ID` wiederzufinden;
4. prüfen Sie in **Runs** die Nachweise, die Aktualität und den effektiven Provider;
5. wenn der finale Inhalt nicht den erwarteten Fluss widerspiegelt, beenden Sie in **Activity**, um die Genehmigung, Veröffentlichung und den Akteur zu überprüfen, der die Version vorangetrieben hat.

### Fall 2 — eine vorbereitete Aktion oder Benachrichtigung ist nicht erfolgt

1. gehen Sie vom sichtbaren Entwurf, der Aktionswarteschlange oder der Benachrichtigung aus;
2. notieren Sie `relatedArtifactId` oder `relatedNotificationId`, falls vorhanden;
3. verwenden Sie **Activity**, um zu bestätigen, ob eine Genehmigung, Ablehnung oder Ausführung protokolliert wurde;
4. wenn die Folge unklar bleibt, kehren Sie zu **Runs** zurück, um den Quell-Run und die Logik zu überprüfen, die die Empfehlung erzeugt hat;
5. dokumentieren Sie schließlich die **Trace ID** und die verknüpften IDs, bevor Sie eskalieren.

## Welche IDs vorrangig zu behalten sind

| Art des Vorfalls | Vorrangig zu behaltende IDs |
| --- | --- |
| zweifelhaftes Run-Ergebnis | `Trace ID`, `Context snapshot ID`, `Structured output ID` |
| verdächtiges finales Artefakt oder PM Doc | `source run ID`, `Structured output ID`, betreffende Artefaktversion |
| Aktion oder Benachrichtigung ohne klare Folge | `Trace ID`, `relatedArtifactId`, `relatedNotificationId` |
| übergreifende Support-Untersuchung | alle oben genannten IDs, plus ungefähre Uhrzeit und betreffendes Projekt |

## Best Practices für Nachverfolgbarkeit

- behalten Sie die **Trace ID**, wenn ein Ergebnis wichtig ist;
- prüfen Sie vor der Veröffentlichung die Linie zwischen Liefergegenstand und Nachweis;
- verwenden Sie bei Abweichungen zwischen zwei Versionen den **Diff** vor der Entscheidung;
- fügen Sie dem **Wissen** nur tatsächlich überprüfte Liefergegenstände hinzu;
- verwenden Sie **Activity**, um die Untersuchung zu vervollständigen, wenn **Runs** nicht ausreicht.

## Weiterführend

- [Strukturierte Ausgaben, Nachweise und Aktualität](./sorties-contextuelles-preuves-et-fraicheur.md)
- [Portfolio und technische Administration](./portefeuille-et-administration-technique.md)
- [Wartung, Support und FAQ](./maintenance-support-faq.md)
- [Glossar](./glossaire.md)
