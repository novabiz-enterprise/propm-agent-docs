---
title: Strukturierte Ausgaben, Nachweise und Aktualität
slug: /sorties-contextuelles-preuves-et-fraicheur
description: Eine strukturierte Ausgabe, ihre Nachweise, Aktualitätszustände und Trace-IDs korrekt lesen.
---

[Startseite](./index.md) · [Wissen und Agenten](./connaissance-et-agents.md) · [Berichte, KI-Protokoll und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md)

![Vue Agents](/img/screenshots/localized/de/04-agents.jpg)

## Ziel

Diese Seite erklärt, wie eine **strukturierte Ausgabe** in ProPM Agent zu interpretieren ist, um zu entscheiden, ob das Ergebnis direkt nutzbar ist, überprüft werden muss oder in ein verwaltetes Artefakt umgewandelt werden sollte.

## Warum das wichtig ist

ProPM Agent liefert nicht nur Freitext. Beobachtete Runs können zusätzlich Folgendes enthalten:

- eine **Zusammenfassung**;
- **Findings**;
- **zu treffende Entscheidungen**;
- **Aktionen**;
- **Annahmen**;
- **fehlende Informationen**;
- **Watchpoints**;
- **Nachweise**;
- Metadaten zur **Aktualität** und **Vertrauenswürdigkeit**;
- **Artefaktvorschläge**, **Follow-ups** und **Benachrichtigungen**.

## Wo diese Informationen erscheinen

Strukturierte Ausgaben und ihre Metadaten sind auf mehreren Oberflächen sichtbar:

- **Agenten**, direkt nach einem Run;
- **KI-Protokoll**, in den Details eines Runs;
- **Berichte & Artefakte**, über die Abstammungslinie zwischen Run, Artefakt und PM Doc.

![Beispiel einer strukturierten Ausgabe im Arbeitsbereich](/img/screenshots/localized/de/03-workspace-structured-output.jpg)

## Wie man eine strukturierte Ausgabe liest

### Empfohlene Lesereihenfolge

1. Lesen Sie die **Zusammenfassung**;
2. Öffnen Sie dann **Benötigte Entscheidungen** oder **Aktionen**;
3. Überprüfen Sie den Abschnitt **Nachweise**;
4. Lesen Sie **Vertrauenswürdigkeit** und **Quellenaktualität** erneut;
5. Entscheiden Sie dann, ob die Antwort im Chat bleiben, ein Artefaktentwurf werden oder eine menschliche Überprüfung erfordern kann.

### Bedeutung der Abschnitte

| Abschnitt | Wozu dient er |
| --- | --- |
| Summary | Kürzeste Version des Ergebnisses, bereit für schnelle Überprüfung |
| Findings | Vom Run hervorgehobene Fakten, Motive oder Feststellungen |
| Decisions needed | Punkte, die eine menschliche Entscheidung erfordern |
| Actions | Empfohlene Folgeaktionen zur Ausführung oder Planung |
| Assumptions | Implizite Bedingungen, von denen die Antwort abhängt |
| Missing information | Fehlende Informationen, die die Robustheit des Ergebnisses verringern |
| Watchpoints | Risiken, Widersprüche oder zu beobachtende Themen |
| Evidence | Referenzen, die als Nachweis oder Begründung dienen |
| Artifact status / Artifact proposals | Hinweise auf mögliche Umwandlung des Ergebnisses in ein verwaltetes Artefakt |
| Follow-ups | Vorgeschlagene Fortsetzungsschritte |
| Notifications | Vom Flow vorgeschlagene Entwürfe oder Benachrichtigungen |

## Vereinfachtes Lesebeispiel

Das folgende Beispiel ist **illustrativ**. Es dient dazu zu zeigen, wie man eine strukturierte Karte vor der Wiederverwendung überprüft:

> - **Summary**: Das kritische Paket scheint zwei Wochen im Verzug zu sein.
> - **Findings**: Die letzte Planungsnotiz ist aktueller als der verwaltete Kalender-Connector.
> - **Decisions needed**: Soll der Sponsor-Meilenstein neu gebaselined oder eine Planungsrevalidierung angefordert werden?
> - **Evidence**: Planungsnotiz, Auszug aus dem wöchentlichen Bericht, Status des Quell-Connectors.
> - **Source freshness**: Wissen `fresh`, Planungs-Connector `stale`.
> - **Watchpoints**: Möglicher Widerspruch zwischen der Projektkommunikation und den letzten synchronisierten Daten.

Empfohlene Lesart in diesem Fall:

1. Die **Zusammenfassung** sagt Ihnen, was Sie zuerst überprüfen sollten;
2. Die Kombination **Nachweise** + **Quellenaktualität** verhindert, dass Sie zu schnell veröffentlichen;
3. Das Vorhandensein eines **Watchpoints** und einer zu treffenden Entscheidung drängt zu einer menschlichen Überprüfung, dann zu einem Artefakt, wenn das Thema formal wird.

## Zwei häufige Fälle zu unterscheiden

| Fall | Praktische Lesart | Empfohlene Entscheidung |
| --- | --- | --- |
| **Vertrauenswürdigkeit korrekt, aber Aktualität unzureichend** | Die Argumentation scheint kohärent, aber ein Teil der Quellen ist `stale` oder `aging` | Verbreiten Sie nicht ohne Revalidierung oder dokumentarische Aktualisierung |
| **Geringe Vertrauenswürdigkeit, aber aktuelle Quellen** | Die Quellen sind aktuell, aber der Run meldet noch Lücken, Widersprüche oder zu starke Annahmen | Behalten Sie die Ausgabe als explorative Arbeit, dann starten Sie die Überprüfung oder den Run neu, bevor Sie formalisieren |

Diese Unterscheidung vermeidet es, die **Vertrauenswürdigkeit** als einzige Note zu behandeln. Eine Antwort kann solide erscheinen, während sie sich auf zu alte Quellen stützt, oder umgekehrt.

## Wie man Nachweise liest

Jeder Nachweis oder jedes Zitat kann mehrere nützliche Elemente enthalten:

- einen **Titel** oder Quellennamen;
- einen **Quellen-URI** oder einen dokumentarischen Namen;
- einen **Auszug**;
- eine **Seite** oder einen **Abschnitt**, wenn verfügbar;
- ein **Synchronisationsdatum**;
- ein **Quellsystem**;
- ein **Aktualitäts-Badge**;
- einen **Autoritätsrang**, wenn angezeigt.

### Was vor der Wiederverwendung eines Nachweises zu prüfen ist

1. Stützt der Auszug die angezeigte Aussage gut?
2. Ist die Quelle identifizierbar und wieder öffnenbar?
3. Ist die Aktualität für das erwartete Entscheidungsniveau akzeptabel?
4. Erzählen mehrere Nachweise dasselbe, oder gibt es einen Widerspruch?

## Aktualitätszustände

| Zustand | Praktische Bedeutung | Empfohlene Reaktion |
| --- | --- | --- |
| `fresh` | Quelle aktuell genug für normale Nutzung | Kann nach normaler Überprüfung wiederverwendet werden |
| `aging` | Quelle noch nutzbar, nähert sich aber einem Revalidierungsbedarf | Vor breiter Verteilung schnell überprüfen |
| `stale` | Quelle zu alt, um ohne zusätzliche Kontrolle als zuverlässig angesehen zu werden | Vor Entscheidung aktualisieren, neu importieren oder bestätigen |
| `conflicting` | Die Quelle widerspricht einer anderen relevanten Quelle | Nicht automatisch entscheiden; Nachweise erneut lesen |
| `unavailable` | Die Quelle konnte nicht bestätigt oder abgerufen werden | Als Warnung behandeln, nicht als nutzbaren Nachweis |

## Vertrauenswürdigkeit

Die **Vertrauenswürdigkeit** ist ein globales Signal für die Robustheit des Ergebnisses. Sie muss zusammen mit Aktualität und Nachweisen interpretiert werden, niemals isoliert.

Planen Sie eine zusätzliche menschliche Überprüfung ein, wenn Sie sehen:

- geringe Vertrauenswürdigkeit;
- fehlende oder unspezifische Nachweise;
- Zustände `stale`, `conflicting` oder `unavailable`;
- wichtigen Abschnitt **Fehlende Informationen**;
- Entscheidung oder Aktion mit externer Auswirkung.

## Überprüfungsniveau je nach Auswirkung

| Auswirkungsniveau | Minimale Überprüfung | Empfohlene Eskalation |
| --- | --- | --- |
| Interner Arbeitsentwurf | `Summary`, `Findings` und mindestens einen wieder öffnenbaren Nachweis prüfen | Ausgabe im Chat belassen, wenn sie explorativ bleibt |
| Teamkoordination oder interne Projektaktion | Nachweise, Aktualität, fehlende Informationen und vorgeschlagene Aktionen prüfen | Artefakt erstellen, wenn das Ergebnis geteilt oder historisiert werden muss |
| Sponsor-Entscheidung, Veröffentlichung, externe Benachrichtigung oder verwaltete Aktion | Alle Nachweise überprüfen, `conflicting`/`stale` Zustände entscheiden, technische IDs behalten | Über **Berichte & Artefakte**, **Diff**, **Abstammungslinie** und **KI-Protokoll** gehen, bevor verbreitet wird |

## Zu bewahrende Trace-IDs

| Feld | Verwendung |
| --- | --- |
| `Trace ID` | Run oder Ereignis genau beim Support wiederfinden |
| `Structured output ID` | Die tatsächlich produzierte strukturierte Ausgabe identifizieren |
| `Context snapshot ID` | Verstehen, in welchem dokumentarischen oder Projektkontext der Run lief |

Diese Felder sind besonders nützlich, wenn Sie einen Run, ein Artefakt und ein Ereignis aus dem **KI-Protokoll** abgleichen müssen.

## Wann die Ausgabe in ein Artefakt umwandeln

Der beobachtete normale Weg ist:

1. Projektfrage;
2. Strukturierte Antwort;
3. Erstellung eines **Artefaktentwurfs**;
4. Überprüfung des **Diffs** und der **Abstammungslinie**;
5. Genehmigung oder Veröffentlichung.

Wandeln Sie eine Ausgabe in ein Artefakt um, wenn:

- sie ein formelles Lieferobjekt werden soll;
- sie eine Validierung oder Veröffentlichung durchlaufen muss;
- Sie eine explizite Abstammungslinie zu einem Run und seinen Nachweisen bewahren müssen;
- der Inhalt den Chat für externe Verbreitung, Genehmigung oder dauerhafte Nachverfolgbarkeit verlassen muss.

Einfache Regel: Solange Sie explorieren, kann der Chat ausreichen; sobald ein Ergebnis **geteilt, genehmigt, veröffentlicht oder als Spur bewahrt** werden muss, gehen Sie über **Berichte & Artefakte**.

## Checkliste vor Wiederverwendung in einem Lieferobjekt

1. Entspricht die Zusammenfassung den detaillierten Findings?
2. Sind die vorgeschlagenen Aktionen mit der Projektsituation konsistent?
3. Sind die Nachweise präzise genug, um die Entscheidung zu rechtfertigen?
4. Sind die Aktualitätszustände akzeptabel?
5. Muss ein Artefakt erstellt werden, oder reicht es, die Ausgabe im Chat zu behalten?

## Häufige Probleme

### Die Antwort scheint sauber, aber es erscheint kein Nachweis

Behandeln Sie das Ergebnis als ein Element, das vor externer Nutzung überprüft werden muss. Das Fehlen sichtbarer Nachweise verringert die Fähigkeit, den Inhalt zu rechtfertigen.

### Ein Nachweis ist `conflicting`

Veröffentlichen Sie nicht direkt. Öffnen Sie die Quelle, vergleichen Sie die widersprüchlichen Referenzen und dokumentieren Sie die Entscheidung im Artefakt oder in der Governance. Wenn das Thema eine formalisierte Entscheidung erfordert, gehen Sie zu [Governance, Entscheidungen und Aktionen](./gouvernance-decisions-et-actions.md), anstatt den Konflikt nur im Chat zu belassen.

### Ein Nachweis ist `unavailable`

Gehen Sie davon aus, dass die Begründung nicht stabilisiert ist. Überprüfen Sie die Quelle in **Wissen**, dem Import oder den Run-Details im **KI-Protokoll**.

## Weiterführend

- [Wissen und Agenten](./connaissance-et-agents.md)
- [Berichte, KI-Protokoll und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md)
- [Wartung, Support und FAQ](./maintenance-support-faq.md)
