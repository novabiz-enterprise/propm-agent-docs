---
title: Portfolio und technische Administration
slug: /portefeuille-et-administration-technique
description: Verstehen Sie die Portfolio-Seite Schritt für Schritt, lesen Sie die Kohorten und Ausreißer, und verwalten Sie anschließend die Plattform, die Integrationen und die KI-Anbieter.
---

[Startseite](./index.md) · [Berichte, KI-Protokoll und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md) · [Wartung, Support und FAQ](./maintenance-support-faq.md)

![Portfolio-Befehlszentrale](/img/screenshots/localized/de/02-portfolio-command-center.jpg)

## Ziel

Diese Seite behandelt zwei unterschiedliche Bereiche des Produkts:

1. die **Portfolio**- oder **Portfolio-Befehlszentrale**-Seite, die zum Vergleichen mehrerer Projekte verwendet wird;
2. **Plattformverwaltung**, die zur Vorbereitung von Integrationen, KI-Anbietern, Abonnements und Audits dient.

Für einen Anfänger ist es hilfreich, Folgendes zu behalten:

- die **Portfolio**-Seite hilft, die Frage **„Welche Projekte verdienen meine höchste Priorität?“** zu beantworten;
- die **Plattformverwaltung** hilft, die Frage **„Ist die Plattform für die Organisation korrekt vorbereitet?“** zu beantworten.

## Für wen diese Seite vor allem gedacht ist

In der beobachteten Anwendung ist **Portfolio** in erster Linie eine bereichsübergreifende PMO-/Multi-Projekt-Steuerungsoberfläche. Sie hilft dabei, mehrere Projekte mit demselben Signalmodell zu vergleichen, bevor Sie die Detailansicht eines Projekts öffnen.

Nutzen Sie diese Seite vor allem, um:

- zu priorisieren, welches Projekt zuerst Aufmerksamkeit braucht;
- konsistente Signale über mehrere Projekte hinweg zu vergleichen;
- zu entscheiden, welches Projekt als Nächstes eine tiefere Detailanalyse verdient.

Behandeln Sie sie weder als reine Sponsor-Zusammenfassung noch als Ersatz für den detaillierten **Workspace** eines einzelnen Projekts.

---

## Teil 1 – Schritt für Schritt die Portfolio-Seite verstehen

## Wozu dient die Portfolio-Seite?

Die **Portfolio**-Seite dient dazu, mehrere Projekte mit **konfigurierbaren Signalen** statt einer festen roten/gelben/grünen Tabelle zu vergleichen.

Sie ermöglicht unter anderem:

- mehrere Projekte auszuwählen;
- die zu vergleichenden Signale zu wählen;
- ein **Gewicht** und einen **Schwellenwert** für jedes Signal festzulegen;
- die **minimale Schwere** zu filtern;
- eine wiederverwendbare **Kohorte** zu speichern;
- **Ausreißer** oder **abnormale Werte** zu erkennen;
- anschließend die Detailansicht eines Projekts zu öffnen, um zu verstehen, warum es hervortritt.

## Was der Benutzer beim Aufrufen der Seite sieht

Beim Aufrufen der Portfolio-Seite sieht der Benutzer in der Regel fünf Bereiche.

| Bereich | Was dort gemacht wird |
| --- | --- |
| **Projekt-Auswahl** | wählen, welche Projekte in den Vergleich einbezogen werden |
| **Signalprofil** | wählen, welche Signale, deren Gewichte, Schwellenwerte und die minimale Schwere verwendet werden |
| **Kohorten** | speichern oder laden einer wiederverwendbaren Vergleichskonfiguration |
| **Vergleichsergebnisse** | lesen Sie die Zusammenfassung, Ausreißer und Abweichungen zwischen Projekten |
| **Projekt-Detailansicht** | öffnen Sie Beweise, aktuelle Aktivitäten und Detailansicht pro Signal für ein Projekt |

## Begriffe, die vor dem Start verstanden werden sollten

| Begriff | Einfache Erklärung |
| --- | --- |
| **Projekt** | ein Projekt, das im Vergleich enthalten ist |
| **Signal** | ein vergleichender Indikator, z. B. Blockierungen, Aktualität oder Planungsdruck |
| **Gewicht** | die Bedeutung eines Signals im Gesamtscore |
| **Schwellenwert** | der Punkt, ab dem ein Signal als bemerkenswert gilt |
| **Minimale Schwere** | ein Filter, der schwache Signale ausblendet |
| **Kohorte** | eine Gruppe von Projekten mit einem gespeicherten Vergleichsprofil |
| **Ausreißer / abnormaler Wert** | ein Projekt, das stärker hervortritt als die anderen gemäß der aktiven Konfiguration |
| **Narrative comparison** | eine textuelle Zusammenfassung des laufenden Vergleichs |
| **Project drill-down** | Detailansicht pro Projekt mit Beweisen und Aktivitäten |

## Geführtes Beispiel – drei Projekte für eine wöchentliche Überprüfung vergleichen

Stellen Sie sich vor, ein PMO möchte drei Projekte vergleichen:

- Projekt A;
- Projekt B;
- Projekt C.

Ziel ist es, schnell das Projekt zu identifizieren, das vor dem wöchentlichen Gremium besondere Aufmerksamkeit erfordert.

### Schritt 1 – Projekte auswählen

Im Bereich **Projects** markieren Sie die Projekte, die Sie vergleichen möchten.

### Guter Reflex

Vergleichen Sie vorzugsweise Projekte, die zu einer **gleichen Steuerungsrunde** gehören. Zum Beispiel:

- drei Projekte aus demselben Portfolio;
- drei Projekte aus demselben Gremium;
- oder drei Projekte aus derselben Abteilung.

### Schritt 2 – Nützliche Signale auswählen

Im **Signalprofil** aktivieren Sie die Signale, die für Ihre Überprüfung wirklich zählen.

Beispiel für eine wöchentliche Überprüfung:

- **blocker_density**;
- **freshness_issues**;
- **failed_runs**;
- **schedule_pressure**.

### Schritt 3 – Gewichte einstellen

Das **Gewicht** gibt an, wie wichtig ein Signal ist.

- Wenn Sie ein hohes Gewicht für **blocker_density** setzen, werden Projekte mit vielen Blockierungen stärker hervorgehoben;
- Wenn Sie ein niedriges Gewicht für **activity_change** setzen, beeinflusst dieses Signal die Endplatzierung weniger.

### Schritt 4 – Schwellenwerte einstellen

Der **Schwellenwert** gibt an, ab wann ein Signal wirklich Aufmerksamkeit erfordert.

- Ein niedriger Schwellenwert macht den Vergleich empfindlicher;
- Ein hoher Schwellenwert macht den Vergleich selektiver.

### Schritt 5 – Minimale Schwere wählen

Die **minimale Schwere** filtert, was Sie in den Ergebnissen sehen möchten.

Beispiel:

- **low and above** = Sie sehen fast alles;
- **medium and above** = Sie filtern bereits schwache Signale;
- **high and above** = Sie konzentrieren sich ausschließlich auf ernstere Themen.

### Schritt 6 – Globalen Ausreißer-Schwellenwert einstellen

Der **Overall outlier threshold** bestimmt, ab welchem kombinierten Niveau ein Projekt als **abnormaler Wert** gemeldet wird.

- Niedriger Schwellenwert = mehr Projekte werden hervorgehoben;
- Höherer Schwellenwert = nur die stärksten Fälle werden angezeigt.

## Beobachtete Starteinstellungen

Die Seite startet nicht von einem leeren Blatt. Die beobachteten Standardwerte sind:

| Signal | Standardgewicht | Standardschwellenwert |
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

- die **minimale Schwere** startet ohne restriktiven Filter (`All`);
- **Reset defaults** stellt diese Startwerte wieder her;
- diese Werte sind ein sicherer Ausgangspunkt, kein vorgeschriebenes Modell;
- es gibt kein verborgenes Produkt-Preset jenseits dieser Standardwerte und Ihrer gespeicherten **Kohorten**;
- in manchen Demo-Umgebungen ist zusätzlich eine vorausgefüllte Kohorte sichtbar, deren Inhalt je nach Umgebung variiert.

### Schritt 7 – Kohorte speichern, falls nötig

Wenn Sie häufig dieselbe Vergleichsaufgabe durchführen, speichern Sie sie als **Kohorte**.

Eine Kohorte speichert:

- die ausgewählten Projekte;
- die aktivierten Signale;
- die Gewichte;
- die Schwellenwerte;
- die minimale Schwere.

![Portfolio-Kohorteneditor](/img/screenshots/localized/de/02-portfolio-cohort-editor.jpg)

### Schritt 8 – Vergleich starten oder aktualisieren

Klicken Sie auf **Refresh comparison**, um die Ansicht mit den aktiven Parametern neu zu berechnen.

### Schritt 9 – Narrative Zusammenfassung lesen

Der Bereich **Narrative comparison** liefert eine Textzusammenfassung.

Er beantwortet in der Regel die Frage:

**„Was ist jetzt am stärksten hervorzuheben in dieser Projektgruppe?“**

### Schritt 10 – Ausreißer lesen

Der Bereich **Outliers** listet Projekte auf, die das aktive Profil aus Gewichten und Schwellenwerten überschreiten.

Ein Ausreißer ist nicht unbedingt ein „Projekt in Schwierigkeiten“. Es bedeutet einfach:

- dass es stärker hervortritt als die anderen;
- dass es genauer betrachtet werden sollte;
- dass man verstehen muss **warum** es hervortritt.

### Schritt 11 – Projekt-Detailansicht öffnen

In **Project drill-down** können Sie einsehen:

- die Signale des Projekts;
- Beweise;
- aktuelle Aktivitäten;
- Links zu **Workspace**, **Knowledge**, **Reports** oder **AI Log**.

Dies ist der Schritt, der eine Portfolio‑Alarmierung in konkretes Verständnis verwandelt.

## Signale, die im Portfolio sichtbar sind

Die im Produkt beobachteten Signale umfassen unter anderem:

- `activity_change`
- `blocker_density`
- `freshness_issues`
- `contradiction_count`
- `failed_runs`
- `schedule_pressure`
- `cost_pressure`

### Einfache Definition jedes Signals

| Signal | Frage, die es beantwortet | Interpretation |
| --- | --- | --- |
| `activity_change` | Ist die aktuelle Aktivität stark von der vorherigen Periode abweichend? | hoch = ungewöhnliche Variation, zu erklären |
| `blocker_density` | Zeigt das Projekt viele Blockierungen oder Eskalationen? | hoch = häufige oder konzentrierte Blockierungen |
| `freshness_issues` | Sind Beweise und Quellen zu alt oder nicht verfügbar? | hoch = Projektansicht wird weniger zuverlässig |
| `contradiction_count` | Stimmen die Quellen überein? | hoch = Abwägung oder Klärung nötig |
| `failed_runs` | Scheitern Automatisierungen oder Läufe häufig? | hoch = technische oder operative Reibung |
| `schedule_pressure` | Zeigt der Plan Anzeichen von Druck? | hoch = Planungsdruck oder Kalenderabweichung |
| `cost_pressure` | Zeigt Budget oder Verbrauch Spannung? | hoch = Budget‑/Kostenrisiko |

## Gewichte, Schwellenwerte und Schwere mit einem einfachen Beispiel lesen

Nehmen wir ein sehr konkretes Beispiel.

### Fall 1 – Sie möchten hauptsächlich blockierte Projekte sehen

- erhöhen Sie das **Gewicht** von `blocker_density`;
- behalten Sie einen **mittleren Schwellenwert**;
- setzen Sie die **minimale Schwere** auf `medium`.

Erwartetes Ergebnis: Projekte mit wiederkehrenden Blockierungen treten stärker hervor.

### Fall 2 – Sie möchten die Qualität der Beweise überwachen

- erhöhen Sie das Gewicht von `freshness_issues` und `contradiction_count`;
- behalten Sie einen sensibleren Schwellenwert;
- lesen Sie anschließend die nicht verfügbaren oder widersprüchlichen Beweise.

Erwartetes Ergebnis: Projekte, deren Lesbarkeit schnell unzuverlässig wird, steigen schneller auf.

### Fall 3 – Sie möchten ein sehr selektives Gremium

- behalten Sie wenige Signale;
- erhöhen Sie die Schwellenwerte;
- erhöhen Sie die minimale Schwere;
- erhöhen Sie den globalen Ausreißer-Schwellenwert.

Erwartetes Ergebnis: Nur die stärksten Fälle bleiben sichtbar.

## Ausreißer korrekt lesen

Ein **Ausreißer** ist keine magische Note oder ein endgültiges Urteil.

In den beobachteten Flows tritt ein Projekt als Ausreißer hervor, wenn:

- ein oder mehrere Signale hoch sind;
- diese Signale ein signifikantes Gewicht tragen;
- die aktiven Schwellenwerte überschritten werden;
- der kombinierte Score den globalen Ausreißer-Schwellenwert überschreitet.

### Korrekte Interpretation

- **Ausreißer** = „Dieses Projekt tritt stärker hervor als die anderen gemäß den aktuellen Regeln“;
- **kein Ausreißer** = „Dieses Projekt liegt im normalen Band der aktuellen Gruppe“.

## Warum ein Signal nicht verfügbar sein kann

Ein Signal kann **nicht verfügbar** sein, wenn die erforderlichen Beweise fehlen.

Beispiel:

- Wenn das Projekt keine geeigneten Planungsquellen hat, kann `schedule_pressure` nicht verfügbar sein;
- Wenn die Budgetquellen fehlen, kann `cost_pressure` nicht verfügbar sein.

### Sehr wichtig

Ein **nicht verfügbares Signal** bedeutet **nicht** „kein Risiko“.

Es bedeutet:

**„Das Portfolio hat nicht genügend zuverlässige Beweise, um diesen Indikator zu berechnen.“**

## Was eine Kohorte enthält

Eine Kohorte ist ein **gespeichertes Vergleichsprofil**.

Sie speichert:

- den Namen der Kohorte;
- ihre Beschreibung;
- die ausgewählten Projekte;
- die aktivierten Signale;
- die Gewichte;
- die Schwellenwerte;
- die minimale Schwere.

### Warum eine Kohorte nutzen

Verwenden Sie eine Kohorte, wenn Sie regelmäßig denselben Vergleich durchführen, z. B.:

- wöchentliche Lieferüberprüfung;
- monatliche Portfolio‑Verfolgung;
- Risikogremium;
- eingeschränkte Executive‑Überprüfung.

## Wenn Portfolio leer, ruhig oder ohne Ausreißer wirkt

Mehrere Lesarten sind normal:

- es wurden noch keine zugänglichen Projekte geladen;
- aktuell ist kein Projekt oder kein Signal ausgewählt;
- der Vergleich hat keine nutzbaren Projektzusammenfassungen zurückgegeben;
- einige Signale sind ausdrücklich nicht verfügbar, weil Belege fehlen;
- kein Projekt überschreitet mit der aktiven Konfiguration den globalen Ausreißer-Schwellenwert.

In der Projekt-Detailansicht können Sie außerdem getrennt davon sehen:

- keine aktuelle Aktivität;
- keine sichtbaren Belege;
- keine verbleibenden Signale nach dem aktiven Schwere-Filter.

Ein ruhiges Ergebnis kann daher auf eine restriktive Auswahl, begrenzte Belege oder tatsächlich stabile Projekte hinweisen.

## Projekt-Detailansicht lesen

Der Bereich **Project drill-down** erklärt das Ergebnis.

Er kann anzeigen:

- den **gewichteten Score** des Projekts;
- die sichtbaren Signale;
- **Beweise** oder Dokumentausschnitte;
- die **aktuelle Aktivität**;
- Links zu **Workspace**, **Knowledge**, **Agents**, **Reports & artifacts** und **AI Log**.

### Praktische Lesung

- Wenn ein Projekt hervortritt, beginnen Sie mit der **narrativen Zusammenfassung**;
- öffnen Sie anschließend das **betreffende Signal**;
- lesen Sie die **Beweise** erneut;
- prüfen Sie schließlich die **aktuelle Aktivität**, um zu verstehen, ob die Situation noch aktiv ist.

## Wie der Vergleich in der beobachteten Anwendung berechnet wird

Die Portfolio-Ansicht ist dienstgestützt und nicht nur eine statische lokale Berechnung im Browser.

Beobachtetes Verhalten:

1. die Seite lädt die zugänglichen Projekte;
2. wenn noch nichts ausgewählt wurde, wird eine erste brauchbare Auswahl vorselektiert;
3. sobald die Konfiguration aus Projekten und Signalen gültig ist, wird der Vergleich von einem Dienst angefordert;
4. **Refresh comparison** stößt eine asynchrone Neuberechnung an und aktualisiert den sichtbaren **Snapshot**;
5. der Zeitstempel des Snapshot im Bereich **Narrative comparison** zeigt, wann diese Portfolio-Ansicht neu berechnet wurde.

Gespeicherte **Kohorten** bewahren ein wiederverwendbares Vergleichsprofil, ersetzen aber nicht die Live-Anfrage für den Vergleich selbst.

## Gute Nutzung der Portfolio-Seite

Verwenden Sie die Portfolio-Seite, um:

- zu vergleichen;
- zu priorisieren;
- Abweichungen zu erkennen;
- zu entscheiden, welches Projekt detailliert untersucht werden soll.

Verwenden Sie die Portfolio-Seite nicht als vollständigen Ersatz für den **Workspace** eines Projekts.

---

## Teil 2 – Plattformverwaltung

## Wozu dient dieser Abschnitt

**Plattformverwaltung** dient dazu, die Plattform im organisatorischen Maßstab vorzubereiten.

Hier konfigurieren Sie insbesondere:

- die **Plattformintegrationen**;
- die **KI-Anbieter**;
- das **Abonnement** und die **Sitze**;
- das **Aktivitätsaudit**.

![Plattformverwaltung](/img/screenshots/localized/de/18-platform-administration-overview.jpg)

## Sichtbare Abschnitte

| Abschnitt | Rolle |
| --- | --- |
| Überblick | Zusammenfassung des allgemeinen Vorbereitungsstatus |
| Plattformintegrationen | Technische Definitionen von Connectors und Ingestionsanbietern |
| KI-Anbieter‑Einstellungen | Konfiguration, Validierung, Test und Aktivierung des KI-Anbieters |
| Marketplace & Abonnement | Plan, Berechtigungen, Sitze und kommerzieller Status |
| Audit / Aktivität | Historie der administrativen Aktionen |

## Plattformintegrationen vs Projektintegrationen

Eine wichtige Regel im Produkt:

- die **Plattformebene** bestimmt, was technisch existiert;
- die **Projektebene** bestimmt, was tatsächlich in einem Projekt verwendet wird.

### Einfache Lesung

- **Plattform** = das Tool wird vorbereitet;
- **Projekt** = das Projekt darf es nutzen;
- **Governance** = entscheidet, wer wirklich mit dem Tool handeln kann.

Für die vollständige Detailbeschreibung pro Connector-Familie siehe [Connectors und Integrationen](./connecteurs-jira-et-sharepoint).

## Vorbereitung und Blockierungsursachen

Eine Integration kann aus folgenden Gründen blockiert sein:

- **Entitlement**;
- **Policy**;
- **Permission**;
- **Health** zu prüfen;
- fehlende Plattformdefinition;
- nicht geöffneter Projekt‑Binding.

### Empfohlener Prüfungszyklus

1. prüfen Sie die Blockierung auf Projektebene;
2. öffnen Sie **Plattformverwaltung**;
3. prüfen Sie die technische Definition des Connectors oder Anbieters;
4. kehren Sie zum Projekt zurück, um das Binding und die erlaubte Nutzung zu bestätigen.

## KI-Anbieter‑Einstellungen

Die sichtbaren Anbieterfamilien im Produkt umfassen unter anderem:

- **OpenRouter**;
- **OpenAI-compatible**;
- **OpenAI**;
- **Azure OpenAI**;

### Wann welcher Anbieter gewählt wird

| Anbieter | Wann wählen | Was üblicherweise ausgefüllt wird |
| --- | --- | --- |
| **OpenRouter** | wenn mehrere Modellfamilien über einen einzigen Anschluss verglichen werden sollen | Basis‑URL, Schlüssel, Standardmodell |
| **OpenAI-compatible** | wenn der Kunde eine Gateway‑ oder kompatible Endpoint nutzt | exakter Endpoint, Auth, Schlüssel oder Secret, erwartetes Modell |
| **OpenAI** | wenn der Kunde direkt OpenAI nutzt | URL, Schlüssel oder Secret, Standardmodell |
| **Azure OpenAI** | wenn der Kunde Azure‑zentriert ist und Azure OpenAI‑Deployments wählen möchte | Endpoint, API‑Version, Auth‑Modus, LLM‑Deployment‑Name |

### Status eines KI‑Anbieters lesen

| Status | Was das bedeutet |
| --- | --- |
| **Configuration** | Felder sind gespeichert |
| **Validation** | Konfiguration hat die erwarteten Kontrollen bestanden |
| **Test** | Echtzeit‑Verbindung wurde geprüft |
| **Operational** | Anbieter kann als betriebsbereit betrachtet werden |

### Sehr einfacher Schritt-für-Schritt zur Vorbereitung eines KI‑Anbieters

1. öffnen Sie **KI-Anbieter‑Einstellungen**;
2. wählen Sie den gewünschten Anbieter;
3. füllen Sie die geforderten Felder aus;
4. klicken Sie auf **Save**;
5. klicken Sie auf **Validate**;
6. klicken Sie auf **Test**;
7. klicken Sie auf **Activate**;
8. prüfen Sie anschließend das Ergebnis im **AI Log**.

### Besonderer Fall Azure OpenAI

Bei **Azure OpenAI** müssen Sie häufig in der Administration ausfüllen:

- den **Endpoint**;
- die **API‑Version**;
- den **Auth‑Modus**;
- den **LLM‑Deployment‑Name**;
- ggf. den **Embeddings‑Deployment‑Name**.

Für die Detailauswahl eines KI‑Anbieters während der Marketplace‑Bereitstellung siehe [Azure Marketplace‑Bereitstellung](./deploiement-azure-marketplace.md).

## Abonnement, Berechtigung und Sitze

Das Produkt verwaltet ein Lizenzmodell mit Sitzen und Kapazitäten.

### Was ein Administrator sehen kann

- den **aktiven Plan**;
- die Anzahl der **gekauften Sitze**;
- die Anzahl der **verfügbaren Sitze**;
- bereits lizenzierte Benutzer;
- den kommerziellen Status, z. B. `billing state`, `payment state` oder `subscription status`.

### Warum das wichtig ist

Ein blockierter Benutzer hat nicht unbedingt ein Verbindungsproblem. Die Blockierung kann von:

- fehlenden Sitzen;
- fehlender Berechtigung;
- einer Funktion, die im Plan nicht enthalten ist, herrühren.

## Technische Plattform‑Anhaltspunkte

Die beobachtete Azure‑Infrastruktur basiert unter anderem auf:

- Azure Container Apps;
- Storage;
- Azure AI Search;
- Key Vault;
- Log Analytics;
- Application Insights;
- Document Intelligence.

## Zu behalten

### Für die Portfolio-Seite

- beginnen Sie mit der Auswahl der richtigen Projekte;
- aktivieren Sie nur die Signale, die für Ihre Überprüfung relevant sind;
- setzen Sie Gewichte, Schwellenwerte und Schwere bewusst;
- nutzen Sie die **Ausreißer** als Ausgangspunkt für Untersuchungen, nicht als endgültiges Urteil;
- öffnen Sie anschließend die **Project drill-down**, um das Ergebnis zu verstehen.

### Für die technische Administration

- die Plattformebene bereitet Connectors und Anbieter vor;
- die Projekt‑Ebene öffnet deren reale Nutzung;
- die Governance entscheidet, wer handeln kann;
- ein KI‑Anbieter ist erst dann bereit, wenn er **registriert, validiert, getestet und aktiviert** ist;
- das **AI Log** bleibt die Referenz, um den tatsächlich verwendeten Anbieter zu bestätigen.

## Weiterführend

- [Connectors und Integrationen](./connecteurs-jira-et-sharepoint)
- [Azure Marketplace‑Bereitstellung](./deploiement-azure-marketplace.md)
- [Berichte, KI-Protokoll und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md)
- [Wartung, Support und FAQ](./maintenance-support-faq.md)
- [Glossar](./glossaire.md)
