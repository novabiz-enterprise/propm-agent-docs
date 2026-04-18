---
title: Benutzerhandbuch ProPM Agent
pagination_label: Startseite
slug: /
description: "Benutzerhandbuch für ProPM Agent, das die KI-gestützte Projektumsetzung, Governance, Connectoren, Nachvollziehbarkeit und Azure Marketplace-Deployment abdeckt."
---

> **Lesen wird dringend empfohlen**
>
> Um die Einführung von ProPM Agent im Unternehmen erfolgreich zu gestalten und die Anwendung voll auszuschöpfen, wird dringend empfohlen, diesen Leitfaden bereits zu Beginn des Projekts zu lesen und während der Bereitstellung, der Einrichtung von Connectoren, der Governance und des täglichen Betriebs darauf zurückzugreifen.

Diese Dokumentation beschreibt **nur** die in der Anwendung, im Code, in der Bereitstellungskonfiguration und in den automatisierten Tests von ProPM Agent beobachteten Funktionen.

Sie ist für zwei Zielgruppen strukturiert:

- **Geschäftsanwender**, die in einem Projekt arbeiten;
- **Technische Administratoren**, die Zugriff, Integrationen, den KI-Anbieter, das Abonnement und die Überwachung verwalten.

![Übersicht der Anwendung](/img/screenshots/localized/de/01-dashboard.png)

## Ich suche die richtige Seite schnell

| Beobachtete Situation | Öffnen Sie zuerst | Dann |
| --- | --- | --- |
| Ich kann mich nicht anmelden | [Start](./demarrage.md) | [Wartung, Support und FAQ](./maintenance-support-faq.md), um Tenant, `redirect URI`, Hauptsitz oder Gesundheitszustand zu unterscheiden |
| Kein Projekt erscheint | [Start](./demarrage.md) | [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md), dann [Wartung, Support und FAQ](./maintenance-support-faq.md), falls die Projektzuordnung oder Rolle unklar bleibt |
| Eine Aktion ist sichtbar, aber blockiert | [Governance, Entscheidungen und Aktionen](./gouvernance-decisions-et-actions.md) | [Connectoren und Integrationen](./connecteurs-jira-et-sharepoint), dann [Portfolio und technische Administration](./portefeuille-et-administration-technique.md), falls die Blockierung von einem Connector, Binding oder Entitlement stammt |
| Der KI-Anbieter scheint nicht funktionsfähig zu sein | [Portfolio und technische Administration](./portefeuille-et-administration-technique.md) | [Wartung, Support und FAQ](./maintenance-support-faq.md) und [Berichte, KI-Log und Nachvollziehbarkeit](./rapports-journal-ia-et-tracabilite.md), um den tatsächlich verwendeten Anbieter zu bestätigen |

Wenn Sie direkt nach einer Prüfprozedur oder einem Betriebshaken suchen, öffnen Sie [Wartung, Support und FAQ](./maintenance-support-faq.md).

## Empfohlener Leseweg

| Wenn Sie suchen… | Beginnen Sie hier |
| --- | --- |
| Eine neue Instanz in Azure bereitstellen | [Azure Marketplace Deployment](./deploiement-azure-marketplace.md) |
| Sie sich anmelden, die Authentifizierung prüfen und Ihr erstes Projekt erstellen | [Start](./demarrage.md) |
| Die Oberfläche, die Palette, Benachrichtigungen und den Gesundheitszustand verstehen | [Oberfläche und Navigation](./interface-et-navigation.md) |
| Das Projektkontext und die Einstellungen des Arbeitsbereichs verwalten | [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md) |
| Mitglieder, Rollen, Delegationen und RBAC-Grenzen des Projekts verwalten | [Zugriffskontrolle und Projektrollen](./controle-acces-et-roles.md) |
| Dokumente importieren, Beweise suchen und mit Agenten arbeiten | [Wissen und Agenten](./connaissance-et-agents.md) |
| Eine strukturierte Ausgabe korrekt lesen, ihre Beweise und Frische prüfen | [Strukturierte Ausgaben, Beweise und Frische](./sorties-contextuelles-preuves-et-fraicheur.md) |
| Signale, Governance und Aktionen mit Genehmigung verarbeiten | [Governance, Entscheidungen und Aktionen](./gouvernance-decisions-et-actions.md) |
| Ein Artefakt überprüfen, ein PM-Dokument veröffentlichen und im KI-Log nachforschen | [Berichte, KI-Log und Nachvollziehbarkeit](./rapports-journal-ia-et-tracabilite.md) |
| Unterstützte Connectoren und Integrationen verstehen | [Connectoren und Integrationen](./connecteurs-jira-et-sharepoint) |
| Projekte vergleichen, Integrationen, KI und Hauptsitze verwalten | [Portfolio und technische Administration](./portefeuille-et-administration-technique.md) |
| Support- und Prüfverfahren konsultieren | [Wartung, Support und FAQ](./maintenance-support-faq.md) |
| Produktthemen klären | [Glossar](./glossaire.md) |

## Schneller Weg nach Profil

| Profil | Prioritäre Seiten |
| --- | --- |
| Geschäftsanwender / Mitwirkender | [Start](./demarrage.md) → [Oberfläche und Navigation](./interface-et-navigation.md) → [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md) → [Wissen und Agenten](./connaissance-et-agents.md) → [Strukturierte Ausgaben, Beweise und Frische](./sorties-contextuelles-preuves-et-fraicheur.md) |
| Projektinhaber | [Start](./demarrage.md) → [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md) → [Zugriffskontrolle und Projektrollen](./controle-acces-et-roles.md) → [Governance, Entscheidungen und Aktionen](./gouvernance-decisions-et-actions.md) → [Connectoren und Integrationen](./connecteurs-jira-et-sharepoint) → [Berichte, KI-Log und Nachvollziehbarkeit](./rapports-journal-ia-et-tracabilite.md) |
| Technischer Administrator | [Azure Marketplace Deployment](./deploiement-azure-marketplace.md) → [Start](./demarrage.md) → [Portfolio und technische Administration](./portefeuille-et-administration-technique.md) → [Connectoren und Integrationen](./connecteurs-jira-et-sharepoint) → [Wartung, Support und FAQ](./maintenance-support-faq.md) |
| Support / Audit | [Start](./demarrage.md) → [Strukturierte Ausgaben, Beweise und Frische](./sorties-contextuelles-preuves-et-fraicheur.md) → [Berichte, KI-Log und Nachvollziehbarkeit](./rapports-journal-ia-et-tracabilite.md) → [Governance, Entscheidungen und Aktionen](./gouvernance-decisions-et-actions.md) → [Glossar](./glossaire.md) |

## Empfohlener End-to-End-Weg

In einer realen Nutzung ist der häufigste Ablauf:

1. Die veröffentlichte URL bereitstellen oder abrufen;
2. Mit einem autorisierten Microsoft Entra ID-Konto anmelden;
3. Ein **aktives Projekt** erstellen oder auswählen;
4. Den **Projekt-Ersteller** die ersten nützlichen Rollen delegieren lassen;
5. Das **Wissen** des Projekts laden;
6. Einen Austausch in **Agenten** starten;
7. Die **strukturierte Ausgabe**, ihre Beweise, Frische und Vertrauenswürdigkeit erneut prüfen;
8. Das Ergebnis in ein **Artefakt** oder ein **PM-Dokument** umwandeln, dann vor dem Download als **DOCX / XLSX**, Veröffentlichung oder Hinzufügen zum Wissen überprüfen;
9. **Proaktive Signale**, **Aktionen & Genehmigungen** und bei Bedarf externe Integrationsflüsse verarbeiten;
10. Auf Plattformebene verwalten, wenn das Thema das Projekt übersteigt.

## Beschriftungskonvention

Wenn die Plattform eine französische Übersetzung bereitstellt, bevorzugt diese Dokumentation diese Beschriftung:

- **Arbeitsbereich**;
- **Wissen**;
- **PM-Dokumente**;
- **KI-Log**;
- **Zugriffskontrolle**;
- **Governance-Richtlinien**;
- **Projektintegrationen**;
- **Plattformintegrationen**;
- **Einstellungen des KI-Anbieters**;
- **Aktionen & Genehmigungen**.

Wenn ein englischer Begriff zur Auflösung einer Mehrdeutigkeit nützlich ist, wird er gelegentlich in Code gesetzt, z. B. `Trace ID` oder `OpenAI-compatible`.

## Was ProPM Agent abdeckt

Basierend auf den überprüften Verhaltensweisen organisiert ProPM Agent die Arbeit um den **Projektkontext**:

1. Sie öffnen oder erstellen ein Projekt;
2. Sie füttern das **Wissen**;
3. Sie fragen die **Agenten** ab;
4. Sie lesen die **strukturierte Ausgabe** erneut;
5. Sie wandeln diese Ergebnisse in **PM-Dokumente** und Artefakte um;
6. Sie prüfen die **Nachvollziehbarkeit** im **KI-Log**;
7. Sie verarbeiten **Signale**, **Digest**, **Entwürfe** und **governierte Aktionen**;
8. Sie nutzen **Connectoren** und **Integrationen** nur, wenn sie validiert und an das Projekt gebunden sind;
9. Administratoren steuern die technische Schicht in **Plattformadministration**.

## Beobachtete Funktionsarchitektur

| Bereich | Was es ermöglicht |
| --- | --- |
| Dashboard | Den allgemeinen Zustand, Metriken, Aufmerksamkeitspunkte und nächste Schritte anzeigen |
| Projekte | Projekte erstellen, öffnen und den Projektkontext speichern |
| Arbeitsbereich | Projektzusammenfassung, operative Transparenz, Signale, Shortcuts und Projekt-Einstellungen bündeln |
| Zugriffskontrolle | Mitglieder, Standardrollen, benutzerdefinierte Rollen und Projektberechtigungen verwalten |
| Wissen | Nachschlagen, hochladen, importieren, Metadaten lesen und Ingestionsverlauf verfolgen |
| Agenten | Einen Agenten auswählen, einen Austausch starten, Sprachaufnahme in **Agenten** nutzen, falls die Umgebung dies noch unterstützt, und benutzerdefinierte Agenten je nach Berechtigung verwalten |
| Strukturierte Ausgaben | Zusammenfassung, Beweise, Frische, Vertrauen, Artefaktvorschläge und weitere Schritte lesen |
| PM-Dokumente / Berichte & Artefakte | Überprüfen, vergleichen, genehmigen, veröffentlichen, herunterladen und Liefergegenstände wieder in das Wissen einfügen |
| KI-Log | Läufe, Aktivitäten, technische IDs und Transparenz der KI-Laufzeit untersuchen |
| Connectoren und Integrationen | Plattformdefinitionen, Projektbindungen, Aktionsrichtlinien und governance-gesteuerte Ausführung trennen |
| Portfolio-Befehlszentrale | Mehrere Projekte mit Signalen, Gewichtungen, Schwellenwerten und gespeicherten Kohorten vergleichen |
| Plattformadministration | Integrationen, KI-Anbieter, Abonnement, Hauptsitze und Plattformaktivität verwalten |

## Was die Anwendung unterscheidet

Folgende Elemente sind explizit in der Oberfläche, den Seed-Daten oder den Tests sichtbar:

- **strukturierte Ausgaben** mit Abschnitten, Beweisen, Frische, Vertrauen und zu treffenden Entscheidungen;
- **Linie** zwischen einem Lauf, einer strukturierten Ausgabe, einem Artefakt, einer Artefaktversion und einem PM-Dokument;
- **proaktive Signale** für Widersprüche, Frische, Blockierungen, Nachverfolgungen und bestimmte Portfolioprässe;
- **governierte Dokumentenketten** von einem Agenten-Ergebnis zu den Downloads **DOCX / XLSX**, zur Veröffentlichung und zur erneuten Einfügung in das Wissen;
- **governierte Connectoren** getrennt zwischen **Plattformintegrationen**, **Projektintegrationen** und **Aktionen & Genehmigungen**;
- **Transparenz der KI-Laufzeit** mit tatsächlich verwendeter Anbieter, beim Deployment ausgewähltem Anbieter und Modellfamilie.

## Zielgruppen und Verantwortlichkeiten

| Profil | Hauptbedürfnisse |
| --- | --- |
| Projektleiter / PMO | Projektkontext, Agenten, Liefergegenstände, Signale, Governance und Nachvollziehbarkeit |
| Mitwirkender | Wissen durchsuchen, Inhalte generieren, Ausgaben prüfen und Läufe verfolgen |
| Projektinhaber | Projektparameter, Rollendelegation, Dokumentkategorien, Projektintegrationen und Governance-Richtlinien |
| Technischer Administrator / Abonnement | Bereitstellung, Authentifizierung, Plattformintegrationen, KI-Anbieter, Abonnement, Hauptsitze und Überwachung |

## Screenshots und Diagramme

Die Screenshots der Anwendung wurden in der beobachteten Umgebung erstellt. Wenn einige verfügbare Screenshots vorwiegend einen Ladezustand oder unvollständige Demo-Daten zeigten, bevorzugt diese französische Version auch **erklärende Diagramme**, um eine nutzbare Lesbarkeit vor der endgültigen Übersetzung und Veröffentlichung zu gewährleisten.

## Support und Kontakt

Verwenden Sie den richtigen Kanal je nach Art der Anfrage:

| Anfragetyp | Priorität |
| --- | --- |
| Technischer Support | URL der Bereitstellung, betroffenen Projekt, beobachtete Situation, ungefähre Uhrzeit, `Trace ID` falls sichtbar |
| Zugangs-, Tenant- oder Identitätsfrage | Erwarteter Tenant, verwendetes Konto, tatsächlich geöffnete URL, Microsoft-Nachricht oder Screenshot |
| Kommerzielle oder Abonnementfrage | Kontokontext, betroffener Plan, Anzahl der Hauptsitze oder Kapazitätsbedarf |

Alle diese Anfragen können an den folgenden Kontakt gesendet werden:

- **NovaBiz**
- 131 Continental Dr, Suite 305
- Newark, DE 19713 · USA
- [support@navabiz.pro](mailto:support@navabiz.pro)

## Weiter

- [Start](./demarrage.md)
- [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md)
- [Connectoren und Integrationen](./connecteurs-jira-et-sharepoint)
- [Glossar](./glossaire.md)
