---
title: Portfolio
slug: /portfolio
description: Projekte vergleichen, Portfolio-Signale konfigurieren, Kohorten und Ausreißer lesen und entscheiden, welches Projekt zuerst Aufmerksamkeit braucht.
---

[Startseite](./index.md) · Portfolio

![Portfolio-Review-Workflow](/img/annotated/de/portfolio-annotated.svg)

![Portfolio-Kommandozentrale](/img/screenshots/localized/de/02-portfolio-command-center.jpg)

## Ziel

Die Seite **Portfolio** ist eine projektübergreifende PMO-Prüffläche. Sie vergleicht mehrere Projekte mit demselben Signalmodell, bevor eine detaillierte Projektansicht geöffnet wird.

Nutzen Sie sie für die Frage: **welche Projekte brauchen jetzt vorrangige Aufmerksamkeit?**

Verwenden Sie sie vor allem, um:

- zu priorisieren, welches Projekt zuerst Aufmerksamkeit braucht;
- konsistente Signale über mehrere Projekte hinweg zu vergleichen;
- zu entscheiden, welches Projekt danach einen genaueren Drill-down verdient.

Behandeln Sie die Seite nicht als reine Sponsor-Zusammenfassung und nicht als Ersatz für den detaillierten **Arbeitsbereich** eines Projekts.

## Wofür Portfolio gedacht ist

Die Seite vergleicht mehrere Projekte mit **konfigurierbaren Signalen**, nicht mit einer festen Rot-/Orange-/Grün-Tabelle.

Sie ermöglicht:

- mehrere Projekte auszuwählen;
- die zu vergleichenden Signale auszuwählen;
- für jedes Signal **Gewicht** und **Schwelle** zu setzen;
- die **Mindestschwere** zu filtern;
- eine wiederverwendbare **Kohorte** zu speichern;
- **Ausreißer** oder auffällige Werte zu erkennen;
- ein Projektdetail zu öffnen, um zu verstehen, warum es heraussticht.

## Was der Benutzer sieht

| Bereich | Was dort getan wird |
| --- | --- |
| **Projektauswahl** | auswählen, welche Projekte in den Vergleich eingehen |
| **Signalprofil** | Signale, Gewichte, Schwellen und Mindestschwere wählen |
| **Kohorten** | eine wiederverwendbare Vergleichskonfiguration speichern oder laden |
| **Vergleichsergebnisse** | Zusammenfassung, Ausreißer und Unterschiede zwischen Projekten lesen |
| **Projekt-Drill-down** | Nachweise, aktuelle Aktivität und Signaldetails für ein Projekt öffnen |

## Schlüsselbegriffe

| Begriff | Einfache Erklärung |
| --- | --- |
| **Projekt** | ein Projekt, das in den Vergleich einbezogen wird |
| **Signal** | ein vergleichender Indikator, zum Beispiel Blockaden, Aktualität oder Terminspannung |
| **Gewicht** | die Bedeutung eines Signals im Gesamtscore |
| **Schwelle** | das Niveau, ab dem ein Signal auffällig wird |
| **Mindestschwere** | ein Filter, der schwache Signale ausblendet |
| **Kohorte** | eine Projektgruppe mit gespeichertem Vergleichsprofil |
| **Ausreißer** | ein Projekt, das nach der aktiven Konfiguration stärker heraussticht als andere |
| **Narrativer Vergleich** | eine textliche Zusammenfassung des laufenden Vergleichs |
| **Projekt-Drill-down** | projektweises Detail mit Nachweisen und Aktivität |

## Geführtes Beispiel

Ein PMO möchte drei Projekte vor einer wöchentlichen Review vergleichen.

1. Wählen Sie in **Projects** die Projekte aus, die zur gleichen Steuerungsdiskussion gehören.
2. Aktivieren Sie in **Signal profile** die relevanten Signale, zum Beispiel `blocker_density`, `freshness_issues`, `failed_runs` und `schedule_pressure`.
3. Setzen Sie Gewichte, um auszudrücken, was in dieser Review am wichtigsten ist.
4. Setzen Sie Schwellen, um zu entscheiden, ab wann ein Signal Aufmerksamkeit verdient.
5. Wählen Sie die Mindestschwere, um bei Bedarf schwaches Rauschen auszublenden.
6. Setzen Sie den **Overall outlier threshold**, um die Selektivität des Vergleichs zu steuern.
7. Speichern Sie die Konfiguration als **Kohorte**, wenn sie wiederverwendet werden soll.
8. Klicken Sie auf **Refresh comparison**, um die Ansicht neu zu berechnen.
9. Lesen Sie die **Narrative comparison** und prüfen Sie dann die **Outliers**.
10. Öffnen Sie **Project drill-down**, um Nachweise, aktuelle Aktivität und Links zu Workspace, Knowledge, Reports oder AI Log zu prüfen.

![Portfolio-Kohorteneditor](/img/screenshots/localized/de/02-portfolio-cohort-editor.jpg)

## Standard-Signalprofil

Die Seite startet nicht mit einem leeren Blatt. Die Standardwerte sind ein sicherer Startpunkt, kein verpflichtendes Modell.

| Signal | Standardgewicht | Standardschwelle |
| --- | --- | --- |
| `activity_change` | `1.0` | `45` |
| `blocker_density` | `1.2` | `35` |
| `freshness_issues` | `1.0` | `35` |
| `contradiction_count` | `1.1` | `35` |
| `failed_runs` | `1.3` | `40` |
| `schedule_pressure` | `1.2` | `40` |
| `cost_pressure` | `1.2` | `40` |
| `overall_outlier_score` | - | `55` |

Nützliche Ergänzungen:

- die **Mindestschwere** startet ohne restriktiven Filter;
- **Reset defaults** stellt diese Startwerte wieder her;
- gespeicherte **Kohorten** bewahren wiederverwendbare Profile;
- manche Umgebungen können zusätzlich eine vorkonfigurierte Kohorte anzeigen, deren Inhalt von den verfügbaren Einstellungen abhängt.

## Portfolio-Signale

| Signal | Welche Frage beantwortet es? | Wie wird es interpretiert? |
| --- | --- | --- |
| `activity_change` | Ist die aktuelle Aktivität stark anders als im vorherigen Zeitraum? | hoch = ungewöhnliche Veränderung, die erklärt werden muss |
| `blocker_density` | Zeigt das Projekt viele Blockaden oder Eskalationen? | hoch = häufige oder konzentrierte Blockaden |
| `freshness_issues` | Sind Nachweise und Quellen zu alt oder nicht verfügbar? | hoch = die Projektansicht wird weniger zuverlässig |
| `contradiction_count` | Widersprechen sich Quellen? | hoch = Klärung oder Entscheidung erforderlich |
| `failed_runs` | Scheitern Automatisierungen oder Runs häufig? | hoch = technische oder operative Reibung |
| `schedule_pressure` | Zeigt der Terminplan Spannungen? | hoch = Termindruck oder Kalenderdrift |
| `cost_pressure` | Zeigen Budget oder Verbrauch Spannungen? | hoch = Budget- oder Kostenrisiko |

## Einen Ausreißer lesen

Ein **Ausreißer** ist kein magischer Score und kein endgültiges Urteil.

Ein Projekt ist ein Ausreißer, wenn:

- ein oder mehrere Signale hoch sind;
- diese Signale ein relevantes Gewicht haben;
- die aktiven Schwellen überschritten werden;
- der kombinierte Score über der globalen Ausreißer-Schwelle liegt.

Korrekte Lesart:

- **Ausreißer** bedeutet, dass das Projekt nach den aktuellen Regeln stärker auffällt als andere;
- **kein Ausreißer** bedeutet, dass das Projekt im Normalbereich der aktuellen Gruppe bleibt.

## Warum ein Signal nicht verfügbar sein kann

Ein Signal kann **nicht verfügbar** sein, wenn der erforderliche Nachweis fehlt.

Beispiele:

- fehlen Planungsquellen, kann `schedule_pressure` nicht verfügbar bleiben;
- fehlen Budgetquellen, kann `cost_pressure` nicht verfügbar bleiben.

Ein nicht verfügbares Signal bedeutet nicht Null Risiko. Es bedeutet, dass das Portfolio nicht genügend zuverlässige Nachweise hat, um diesen Indikator zu berechnen.

## Wenn Portfolio leer oder ruhig wirkt

Mehrere Lesarten können normal sein:

- kein zugängliches Projekt wurde geladen;
- kein Projekt oder kein Signal ist ausgewählt;
- der Vergleich lieferte keine verwendbaren Projektzusammenfassungen;
- manche Signale sind mangels Nachweisen nicht verfügbar;
- kein Projekt überschreitet die aktive globale Ausreißer-Schwelle.

Ein ruhiges Ergebnis kann daher an enger Auswahl, begrenzten Nachweisen oder wirklich stabilen Projekten liegen.

## Wie der Vergleich berechnet wird

Erwartetes Verhalten:

1. die Seite lädt zugängliche Projekte;
2. sie wählt eine erste verwendbare Menge vor, wenn noch kein Projekt gewählt wurde;
3. sobald die Projekt- und Signalkonfiguration gültig ist, wird der Vergleich bei einem Service angefordert;
4. **Refresh comparison** löst eine asynchrone Neuberechnung aus und aktualisiert den sichtbaren **Snapshot**;
5. der Snapshot-Zeitstempel zeigt, wann diese Portfolioansicht neu berechnet wurde.

Gespeicherte **Kohorten** bewahren ein wiederverwendbares Vergleichsprofil, ersetzen aber nicht die Live-Vergleichsanfrage selbst.

## Merkpunkte

- beginnen Sie mit der Auswahl der richtigen Projekte;
- aktivieren Sie nur die für die Review nützlichen Signale;
- setzen Sie Gewichte, Schwellen und Schweregrade bewusst;
- nutzen Sie **Ausreißer** als Startpunkt der Untersuchung, nicht als endgültiges Urteil;
- öffnen Sie **Project drill-down**, um das Ergebnis zu verstehen.

## Weiter

- [KI-Anbieter und Plattformintegrationen](./ai-providers-platform-integrations.md)
- [Tenant-Plan, lizenzierte Benutzer und App-Updates](./seats-management-app-updates.md)
- [Berichte, KI-Log und Nachvollziehbarkeit](./rapports-journal-ia-et-tracabilite.md)
- [Wartung, Support und FAQ](./maintenance-support-faq.md)
