---
title: Wissen und Agenten
slug: /connaissance-et-agents
description: Die Wissensbasis des Projekts füllen, Interaktionen mit Agenten starten und Ergebnisse nutzen.
---

[Startseite](./index.md) · [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md) · [Strukturierte Ausgaben, Nachweise und Aktualität](./sorties-contextuelles-preuves-et-fraicheur.md)

![Projektwissen](/img/screenshots/localized/de/05-knowledge.png)

## Ziel

Diese Seite erklärt, wie Sie Dokumente hochladen oder importieren, die in **Wissen** sichtbaren Metadaten überprüfen und dann den Projektkontext in **Agenten** nutzen können.

## Wissen: Was Sie tun können

Beobachtete Fähigkeiten:

- Suche in den Projektinhalten;
- manueller Upload;
- Aktualisierung der Daten;
- Import aus vertrauenswürdigen Quellen;
- Einsehen des Importverlaufs;
- Sortieren, Filtern und Paginieren von Ergebnissen.

## Unterstützte Dateitypen

Die in der Oberfläche explizit akzeptierten Typen umfassen unter anderem:

- **PDF**;
- **DOCX**, **ODT**, **RTF**, **TXT**, **Markdown**;
- **CSV**, **XLSX**, **XLSM**, **ODS**;
- **JSON**, **XML**;
- **PPTX**, **ODP**;
- **HTML / HTM**;
- **EML**, **EPUB**;
- **PNG**, **JPG**, **JPEG**, **BMP**, **TIFF**, **HEIF**.

## Import aus vertrauenswürdigen Quellen

Der Importmechanismus hängt von den auf Plattformebene validierten **Ingestion Providers** ab, die dann für das Projekt verfügbar gemacht werden.

### Was der Importauswahl zeigt

Je nach Quelle kann die Oberfläche anzeigen:

- den Namen der Quelle;
- eine lesbare **source label**;
- das Datum des letzten Imports;
- einen Aktualitäts- oder Integritätsstatus;
- eine Erklärung für eine Blockierung, wenn die Quelle nicht nutzbar ist.

### Wenn ein Import blockiert ist

Eine Importoption kann aus folgenden Gründen nicht verfügbar sein:

- entitlement;
- permission;
- policy;
- beeinträchtigter Integritätsstatus;
- fehlende oder nicht bereite Projektbindung.

## Importverlauf

Der Importverlauf ermöglicht mindestens die Überprüfung von:

- dem angezeigten Namen des Providers;
- dem Status des Runs;
- der Aktualität nach dem Import;
- der `trace ID`;
- den entdeckten, importierten, ignorierten oder fehlgeschlagenen Volumen;
- dem Enddatum, wenn verfügbar.

## Die Dokumentenliste und Suche lesen

### Sichtbare Dokumentstatus

Die Dokumenttabelle zeigt mindestens folgende Status an:

- **Indexed**;
- **Ingesting**;
- **Failed**.

Ein sichtbares Dokument, das in der Suche noch nicht gefunden werden kann, befindet sich oft noch in der Phase **Ingesting**.

### In Suchergebnissen sichtbare Metadaten

Suchergebnisse können anzeigen:

- Titel;
- Snippet;
- Score;
- Abschnitt;
- Aktualitäts-Badge;
- **source system**-Badge;
- Link **Open source**;
- `Trace ID` der Suche.

Diese Elemente helfen, Herkunft, Qualität und Wiederverwendbarkeit eines Nachweises schnell zu beurteilen.

![Suchergebnisse im Wissen](/img/screenshots/localized/de/05-knowledge-search-results.png)

![Agenten-Ansicht](/img/screenshots/localized/de/04-agents.png)

## Agenten: Rolle der Seite

Die Seite **Agenten** nutzt den Projektkontext in einer geführten Konversation.

Bestätigte Funktionen:

- Liste der verfügbaren Agenten;
- Zusammenfassungskarte des ausgewählten Agenten mit **kind**, **scope**, **status** und abgedeckten Domänen;
- Konversationsbereich;
- strukturierte Ausgaben und Nachweiselemente;
- im Browser gespeicherte Sitzungen;
- Erstellung und Löschung benutzerdefinierter Agenten gemäß Berechtigungen;
- Sprachmodus, wenn der Browser es erlaubt.

## Wie Sie schnell einen Agenten auswählen

Wenn mehrere Karten sichtbar sind, lesen Sie sie in dieser Reihenfolge:

| Feld | Worauf Sie zuerst achten sollten | Nützlicher Reflex |
| --- | --- | --- |
| `kind` | Agententyp oder fachliche Spezialisierung | beginnen Sie mit dem Agenten, dessen Rolle direkt der erwarteten Aufgabe entspricht |
| `scope` | Sichtbarkeitsbereich des Agenten | prüfen Sie, ob der Agent auf das aktuelle Projekt beschränkt oder breiter sichtbar ist |
| `status` | praktische Verfügbarkeit des Agenten | wenn der Status kein Vertrauen inspiriert, wechseln Sie zuerst zu einem Standard-Agenten, bevor Sie eskalieren |
| abgedeckte Domänen | auf der Karte angekündigte Themen | nutzen Sie sie, um eine Planungsanfrage nicht einem auf Governance oder Dokumente ausgerichteten Agenten anzuvertrauen |

In der Praxis wählen Sie zuerst einen **Standard-Agenten**, wenn Sie einen bekannten, nominalen Ablauf suchen. Wechseln Sie zu einem **benutzerdefinierten Agenten**, wenn das Team spezifische Anweisungen, einen bestimmten Ton oder einen spezialisierteren Arbeitsumfang benötigt.

## Wie Sie mit Agenten arbeiten

1. **prüfen Sie das aktive Projekt**;
2. **wählen Sie den passenden Agenten**;
3. formulieren Sie eine nutzbare Anfrage mit Ziel, Umfang und erwartetem Format;
4. überprüfen Sie die **strukturierte Ausgabe** vor jeder Wiederverwendung.

Die Oberfläche ermöglicht auch die Suche im Agenten-Pool, um schneller den richtigen Spezialisten zu erreichen.

## Sitzungen und lokaler Speicher

Der Chat-Verlauf ist lokal im Browser. In der Praxis:

- die gespeicherte Kontinuität ist an das Paar **Projekt + Agent** im aktuellen Browser gebunden;
- eine Sitzung wird lokal auf dem verwendeten Rechner gespeichert;
- das Wechseln des Browsers oder Rechners kann einen gespeicherten Verlauf verschwinden lassen;
- der erste Prompt dient in der Regel als Sitzungstitel, was die Wiederaufnahme erleichtert;
- der Browser sollte nicht als zentrales, geteiltes Archiv behandelt werden.

## Benutzerdefinierte Agenten

Die Erstellung benutzerdefinierter Agenten hängt vom Berechtigungsniveau ab. Zu beachtende Punkte sind:

- nicht alle Benutzer können einen Agenten erstellen;
- der Erstellungsdialog erinnert an den aktiven **Projektkontext** vor dem Speichern;
- die sichtbaren Felder umfassen mindestens **Name**, **Role / instructions** und **Scope**;
- wählen Sie standardmäßig **Project only**, es sei denn, die Umgebung bietet explizit einen größeren Scope an;
- wenn die Option **All projects** verfügbar ist, wird der Agent vom aktuellen Projekt aus erstellt, kann aber in anderen Projekten für dasselbe Konto sichtbar bleiben;
- wenn ein Multi-Projekt-Agent anderswo nicht erscheint, prüfen Sie zuerst dasselbe Konto und den Zugriff auf das Zielprojekt;
- das Löschen eines benutzerdefinierten Agenten bleibt kontrolliert;
- ein benutzerdefinierter Agent unterliegt weiterhin den Regeln des Projekts und der Plattform.

### Schnelles Auswahlbeispiel

| Bedarf | Empfohlene Wahl |
| --- | --- |
| nominaler Einsatz, breites Team, vorhersehbares Verhalten | Standard-Agent |
| spezifische Anweisungen, Team-Ton, spezialisierter Workflow | benutzerdefinierter Agent |
| auf einen einzigen Projektkontext beschränkter Einsatz | **Project only** |
| derselbe Agent in mehreren Projekten desselben Kontos wiederverwendbar | **All projects**, wenn die Option tatsächlich verfügbar ist |

![Erstellung eines benutzerdefinierten Agenten](/img/screenshots/localized/de/04-custom-agent-create.png)

## Sprache und Browserkompatibilität

Die Sprachfunktion ist in der **Agenten**-Erfahrung verfügbar. Sie hängt explizit von der Browserunterstützung für Spracherkennungs-APIs ab.

Wenn Sprache nicht verfügbar ist:

- nutzen Sie die Texteingabe;
- prüfen Sie die Mikrofonberechtigungen des Browsers;
- unterscheiden Sie eine Browserbeschränkung von einem Anwendungsproblem;
- die Spracherkennung fügt Text in den Compose-Bereich ein: überprüfen Sie ihn vor **Send**;
- wenn die Mikrofontaste nicht verfügbar ist oder eine Inkompatibilitätsmeldung erscheint, wechseln Sie sofort zur Texteingabe;
- wenn das Problem besteht, prüfen Sie zuerst die Unterstützung für `SpeechRecognition` / `webkitSpeechRecognition`, dann die Mikrofonberechtigung.

### Praktische Hinweise für Sprache

| Symptom | Zuerst prüfen | Nützlicher Reflex |
| --- | --- | --- |
| Mikrofontaste fehlt oder inaktiv | Unterstützung für `SpeechRecognition` / `webkitSpeechRecognition` | wechseln Sie sofort zur Texteingabe |
| Mikrofonberechtigung verweigert | Mikrofonberechtigung des Browsers oder des Betriebssystems | erteilen Sie die Berechtigung neu und starten Sie das Abhören erneut |
| Unvollständige Transkription | Text im Compose-Bereich hinzugefügt | überprüfen, korrigieren und ergänzen Sie vor **Send** |
| Punktueller Fehler während des Abhörens | Browserzustand oder aktuelle Sitzung | stoppen Sie die Aufnahme, fahren Sie mit der Tastatur fort und versuchen Sie es später erneut |

Die Texteingabe bleibt der nominale Ausweichweg. Sie ermöglicht die Fortsetzung der Arbeit, ohne den Run an einem lokalen Browserproblem zu blockieren.

## Best Practices

- laden Sie vor einer wichtigen Analyse zuverlässige und aktuelle Quellen in das **Wissen**;
- überprüfen Sie den Importverlauf, wenn eine verwaltete Quelle fehlen scheint;
- fordern Sie explizit **Nachweise** oder **Zitate** an, wenn die Entscheidung begründet werden muss;
- wenn eine Antwort Status wie `stale`, `conflicting` oder `unavailable` enthält, öffnen Sie die Seite [Strukturierte Ausgaben, Nachweise und Aktualität](./sorties-contextuelles-preuves-et-fraicheur.md) vor der Veröffentlichung.

## Weiter

- [Strukturierte Ausgaben, Nachweise und Aktualität](./sorties-contextuelles-preuves-et-fraicheur.md)
- [Governance, Entscheidungen und Aktionen](./gouvernance-decisions-et-actions.md)
- [Berichte, KI-Protokoll und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md)
- [Wartung, Support und FAQ](./maintenance-support-faq.md)
