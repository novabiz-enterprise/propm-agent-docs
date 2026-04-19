---
title: Wissen und Agenten
slug: /connaissance-et-agents
description: Die Projekt-Wissensdatenbank füttern, die Proaktivität der Agenten verstehen und die Ergebnisse bis zu den PM-Dokumenten nutzen.
---

[Startseite](./index.md) · [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md) · [Strukturierte Ausgaben, Nachweise und Aktualität](./sorties-contextuelles-preuves-et-fraicheur.md)

![Connaissance projet](/img/screenshots/localized/de/05-knowledge.png)

## Ziel

Diese Seite erklärt, wie man Dokumente hochlädt oder importiert, die in **Wissen** sichtbaren Metadaten erneut liest und den Projektkontext in **Agenten** nutzt.

## Wissen: Was Sie tun können

Beobachtete Fähigkeiten:

- Suche in den Projektinhalten;
- Manuelles Hochladen;
- Aktualisierung der Daten;
- Import aus genehmigten Quellen;
- Durchsicht des Importverlaufes;
- Sortieren, Filtern und Paginieren der Ergebnisse.

## Unterstützte Dateitypen

Die explizit akzeptierten Dateitypen in der Oberfläche umfassen unter anderem:

- **PDF**;
- **DOCX**, **ODT**, **RTF**, **TXT**, **Markdown**;
- **CSV**, **XLSX**, **XLSM**, **ODS**;
- **JSON**, **XML**;
- **PPTX**, **ODP**;
- **HTML / HTM**;
- **EML**, **EPUB**;
- **PNG**, **JPG**, **JPEG**, **BMP**, **TIFF**, **HEIF**.

## Import aus genehmigten Quellen

Der Importmechanismus hängt von den auf Plattformebene validierten **Ingestionsanbietern** ab, die anschließend dem Projekt zur Verfügung gestellt werden.

### Was der Importauswahl-Dialog zeigt

Je nach Quelle kann die Oberfläche Folgendes anzeigen:

- den Namen der Quelle;
- ein lesbares **Source Label**;
- das Datum des letzten Imports;
- einen Frische- oder Gesundheitsstatus;
- eine Blockierungsbeschreibung, wenn die Quelle nicht nutzbar ist.

### Wann ein Import blockiert ist

Eine Importoption kann aus folgenden Gründen nicht verfügbar sein:

- Rechte;
- Berechtigung;
- Richtlinie;
- zu prüfender Gesundheitszustand;
- fehlende oder nicht bereitgestellte Projektbindung.

## Importverlauf

Der Importverlauf ermöglicht es, mindestens Folgendes zu überprüfen:

- den angezeigten Namen des Anbieters;
- den Status des Runs;
- die Frische nach dem Import;
- die `Trace ID`;
- die entdeckten, importierten, ignorierten oder als fehlgeschlagen gemeldeten Volumen;
- das Abschlussdatum, falls verfügbar.

## Dokumentenliste und Suche

### Sichtbare Dokumentenstatus

Die Dokumententabelle zeigt mindestens die folgenden Status:

- **Indexed**;
- **Ingesting**;
- **Failed**.

Ein sichtbares Dokument, das noch nicht in der Suche gefunden werden kann, befindet sich oft noch in der Phase **Ingesting**.

### Sichtbare Metadaten in Suchergebnissen

Suchergebnisse können Folgendes anzeigen:

- Titel;
- Auszug;
- Score;
- Abschnitt;
- Frische-Badge;
- Badge **source system**;
- Link **Open source**;
- `Trace ID` der Suche.

Diese Elemente helfen, Herkunft, Qualität und Wiederverwendbarkeit eines Beweises schnell zu beurteilen.

![Résultats de recherche dans la connaissance](/img/screenshots/localized/de/05-knowledge-search-results.png)

![Vue Agents](/img/screenshots/localized/de/04-agents.png)

## Agenten: Rolle der Seite

Die Seite **Agenten** nutzt den Projektkontext in einer geführten Konversation.

Bestätigte Funktionen:

- Liste der verfügbaren Agenten;
- Zusammenfassende Karte des ausgewählten Agenten mit **kind**, **scope**, **status** und abgedeckten Bereichen;
- Konversationsbereich;
- Strukturierte Ausgaben und Beweismittel;
- Gespeicherte Sitzungen im Browser;
- Erstellen und Löschen von benutzerdefinierten Agenten je nach Berechtigungen;
- Sprachsteuerung in **Agenten**, falls die Umgebung sie noch unterstützt.

## Proaktivität von ProPM Agent

Proaktivität in ProPM Agent bedeutet nicht, dass ein Agent außerhalb des Projekts allein handelt. Das beobachtete Verhalten ist stärker geregelt: die Plattform erkennt zu überwachende Situationen, meldet sie als **Signale**, kann einen **Digest** vorbereiten, einen **Entwurf** oder eine **gesteuerte Aktion** vorschlagen und lässt den Benutzer oder Genehmiger die weitere Vorgehensweise entscheiden.

![Proactivité, digests et actions gouvernées](/img/diagrams/de/proactivite-et-gouvernance.svg)

### Beobachtete Auslöser

Proaktivität kann durch folgende Faktoren ausgelöst werden:

- unzureichende **Frische**;
- **Widersprüchlichkeit** zwischen Beweisen;
- ein **Block** im Betrieb;
- **Planungsdruck** oder **Kosten** im Portfolio;
- **nicht abgeschlossene Ausführungen**;
- ein Folgebedarf, der Verteilung, Validierung oder erneute Ausführung erfordert.

### Wo Proaktivität sichtbar wird

- **Arbeitsbereich**: Signal- und zu überprüfende Elemente;
- **Governance, Entscheidungen und Aktionen**: Digests, Benachrichtigungsentwürfe, Aktionsanfragen;
- **Portfolio-Befehlszentrum**: Vergleich von Projekten anhand von Indikatoren;
- **KI-Journal**: Nachverfolgbarkeit der Entscheidungsfolge.

### Was Proaktivität nicht allein tut

- Sie umgeht keine Rollen;
- Sie umgeht keine Richtlinien;
- Sie veröffentlicht nicht automatisch außerhalb der Anwendung ohne einen geregelten Pfad;
- Sie bleibt durch Beweise, Frische und sichtbare Status erklärbar.

## Schnell einen Agenten auswählen

Wenn mehrere Karten sichtbar sind, lesen Sie sie in dieser Reihenfolge:

| Feld | Was Sie zuerst prüfen sollten | Nützliche Reflexion |
| --- | --- | --- |
| `kind` | Typ des Agenten oder Fachspezialisierung | Beginnen Sie mit dem Agenten, dessen Rolle direkt der erwarteten Aufgabe entspricht |
| `scope` | Sichtbarkeitsbereich des Agenten | Prüfen Sie, ob der Agent auf das aktuelle Projekt beschränkt ist oder breiter sichtbar ist |
| `status` | Praktische Verfügbarkeit des Agenten | Wenn der Status kein Vertrauen erweckt, wählen Sie einen Standard-Agenten, bevor Sie eskalieren |
| abgedeckte Bereiche | Auf der Karte angekündigte Themen | Nutzen Sie sie, um zu vermeiden, dass Sie eine Planungsanfrage an einen Governance- oder Dokumentenorientierten Agenten delegieren |

In der Praxis wählen Sie zunächst einen **Standard-Agenten**, wenn Sie einen bekannten, nominalen Ablauf suchen. Wechseln Sie zu einem **benutzerdefinierten Agenten**, wenn das Team Anweisungen, einen Ton oder einen spezialisierteren Arbeitsbereich benötigt.

## Mit Agenten arbeiten

1. **Überprüfen Sie das aktive Projekt**;
2. **Wählen Sie den passenden Agenten**;
3. Formulieren Sie eine nutzbare Anfrage mit Ziel, Umfang und erwartetem Format;
4. Lesen Sie die **strukturierte Ausgabe** erneut, bevor Sie sie wiederverwenden.

Die Oberfläche ermöglicht auch die Suche im Agenten-Roster, um schneller den richtigen Spezialisten zu finden.

### Empfohlener Anfängerpfad

Für eine erste Nutzung ohne Mehrdeutigkeit:

1. stellen Sie in **Agenten** eine einfache Frage;
2. lesen Sie zuerst die Zusammenfassung der **strukturierten Ausgabe**;
3. prüfen Sie danach Belege, Frische und Vertrauen, falls die Antwort wiederverwendet werden soll;
4. öffnen Sie **Berichte & Artefakte** nur dann, wenn Sie dieses Ergebnis in ein gesteuertes, prüfbares oder veröffentlichbares Dokument umwandeln möchten.

## Von Agenten zu PM-Dokumenten, DOCX und XLSX

Agenten springen nicht direkt zu einer finalen, veröffentlichten Datei. Der beobachtete Ablauf ist schrittweise:

1. Ein Agent erzeugt eine **strukturierte Ausgabe**;
2. Diese Ausgabe kann ein **Artefakt** oder ein **PM-Dokument** füttern;
3. Narrative Inhalte gehen eher zu einer **DOCX**-Darstellung;
4. Tabellarische oder matrixartige Inhalte gehen eher zu einer **XLSX**-Darstellung;
5. Durchsicht, Genehmigung, Download und Veröffentlichung erfolgen anschließend in [Berichte, KI-Journal und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md).

## Sitzungen und lokale Erinnerung

Der Chatverlauf ist lokal im Browser. In der Praxis gilt:

- Die gespeicherte Kontinuität ist an das Paar **Projekt + Agent** im aktuellen Browser gebunden;
- Eine Sitzung wird lokal auf dem verwendeten Gerät gespeichert;
- Wechseln Sie Browser oder Maschine, kann ein gespeicherter Thread verschwinden;
- Der erste Prompt dient in der Regel als Sitzungsname, was die Wiederaufnahme erleichtert;
- Der Browser sollte nicht als zentraler, geteilter Archiv betrachtet werden.

## Benutzerdefinierte Agenten

Die Erstellung von benutzerdefinierten Agenten hängt vom Berechtigungsniveau ab. Zu beachten ist:

- Nicht alle Benutzer können einen Agenten erstellen;
- Der Erstellungsdialog erinnert an den aktiven **Projektkontext** vor dem Speichern;
- Sichtbare Felder umfassen mindestens **Name**, **Rolle / Anweisungen** und **Scope**;
- Wählen Sie standardmäßig **Nur Projekt**, es sei denn, die Umgebung zeigt explizit einen breiteren Scope;
- Wenn die Option **Alle Projekte** verfügbar ist, wird der Agent aus dem aktuellen Projekt erstellt, kann aber in anderen Projekten desselben Kontos sichtbar bleiben;
- Wenn ein Multi-Projekt-Agent nicht anderswo erscheint, prüfen Sie zunächst dasselbe Konto und den Zugriff auf das Zielprojekt;
- Das Löschen eines benutzerdefinierten Agenten bleibt kontrolliert;
- Ein benutzerdefinierter Agent bleibt durch die Regeln des Projekts und der Plattform geregelt.

### Schnelles Auswahlbeispiel

| Bedarf | Empfohlene Wahl |
| --- | --- |
| Nominale Nutzung, großes Team, vorhersehbares Verhalten | Standard-Agent |
| Spezifische Anweisungen, Team-Ton, spezialisierter Workflow | Benutzerdefinierter Agent |
| Nutzung auf ein einzelnes Projekt beschränkt | **Nur Projekt** |
| Derselbe Agent in mehreren Projekten desselben Kontos wiederverwendbar | **Alle Projekte**, falls die Option tatsächlich exponiert ist |

![Création d’un agent personnalisé](/img/screenshots/localized/de/04-custom-agent-create.png)

## Sprachsteuerung in Agenten

Diese Dokumentation beschreibt keinen separaten **Sprach**-Eingangspunkt im **Arbeitsbereich**. Wenn eine Sprachsteuerung noch verfügbar ist, ist sie auf die **Agenten** beschränkt und hängt explizit von der Browserunterstützung der Spracherkennungs-APIs ab.

Wenn die Sprachsteuerung nicht verfügbar ist:

- Verwenden Sie die Texteingabe;
- Prüfen Sie die Mikrofonberechtigungen des Browsers;
- Unterscheiden Sie eine Browserbeschränkung von einer lokalen Umgebungsbeschränkung;
- Lesen Sie den hinzugefügten Text im Composer immer vor dem **Send** durch;
- Wenn der Mikrofonknopf nicht verfügbar ist oder eine Inkompatibilitätsmeldung erscheint, wechseln Sie sofort zur Texteingabe.

### Praktische Hinweise zur Sprachsteuerung

| Symptom | Zuerst prüfen | Nützliche Reflexion |
| --- | --- | --- |
| Mikrofonknopf fehlt oder inaktiv | Unterstützung von `SpeechRecognition` / `webkitSpeechRecognition` | Wechseln Sie sofort zur Texteingabe |
| Mikrofonberechtigung verweigert | Mikrofonberechtigung des Browsers oder OS | Erneuern Sie die Berechtigung und starten Sie die Aufnahme erneut |
| Unvollständige Transkription | Text im Composer | Lesen Sie, korrigieren und ergänzen Sie vor dem **Send** |
| Einzelne Fehler während der Aufnahme | Browserzustand oder aktuelle Sitzung | Stoppen Sie die Aufnahme, wechseln Sie zur Tastatur und versuchen Sie es später erneut |

Die Texteingabe bleibt der nominale Backup-Pfad. Sie ermöglicht die Fortsetzung der Arbeit ohne Unterbrechung des Runs wegen einer lokalen Browserbeschränkung.

## Gute Praktiken

- Laden Sie zuverlässige und aktuelle Quellen in die **Wissen**-Bibliothek, bevor Sie eine wichtige Analyse durchführen;
- Lesen Sie den Importverlauf, wenn eine verwaltete Quelle fehlt;
- Fordern Sie explizit **Beweise** oder **Zitate** an, wenn die Entscheidung damit begründet werden muss;
- Wenn eine Antwort die Zustände `stale`, `conflicting` oder `unavailable` enthält, öffnen Sie die Seite [Strukturierte Ausgaben, Beweise und Frische](./sorties-contextuelles-preuves-et-fraicheur.md) vor der Veröffentlichung.

## Weiter

- [Strukturierte Ausgaben, Beweise und Frische](./sorties-contextuelles-preuves-et-fraicheur.md)
- [Governance, Entscheidungen und Aktionen](./gouvernance-decisions-et-actions.md)
- [Berichte, KI-Journal und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md)
- [Wartung, Support und FAQ](./maintenance-support-faq.md)
