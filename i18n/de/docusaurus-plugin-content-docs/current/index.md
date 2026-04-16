---
title: ProPM Agent Benutzerhandbuch
slug: /
description: "Mehrsprachige Dokumentation f\u00fcr ProPM Agent mit KI-gest\u00fctzter Projektausf\u00fchrung, Governance-Workflows, nachweisgest\u00fctzten Ergebnissen und Bereitstellung \u00fcber Azure Marketplace."
---

Diese Dokumentation beschreibt **ausschließlich** die Funktionen, die in der Anwendung, im Code, in der Bereitstellungskonfiguration und in den automatisierten Tests von ProPM Agent beobachtet wurden.

Sie ist für zwei Zielgruppen organisiert:

- **Fachanwender**, die in einem Projekt arbeiten;
- **Technische Administratoren**, die Zugriff, Integrationen, den KI-Anbieter, das Abonnement und die Überwachung verwalten.

![Anwendungsübersicht](/img/screenshots/localized/de/01-dashboard.png)

## Ich möchte ein Problem lösen

| Symptom | Öffnen Sie zuerst | Dann |
| --- | --- | --- |
| Ich kann mich nicht anmelden | [Erste Schritte](./demarrage.md) | [Wartung, Support und FAQ](./maintenance-support-faq.md), um Mandant, `redirect URI`, Lizenz oder Systemstatus zu unterscheiden |
| Es wird kein Projekt angezeigt | [Erste Schritte](./demarrage.md) | [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md), dann [Wartung, Support und FAQ](./maintenance-support-faq.md), wenn die Hinzufügung zum Projekt oder die Rolle weiterhin unklar sind |
| Eine Aktion ist sichtbar, aber blockiert | [Governance, Entscheidungen und Aktionen](./gouvernance-decisions-et-actions.md) | [Wartung, Support und FAQ](./maintenance-support-faq.md), dann [Portfolio und technische Administration](./portefeuille-et-administration-technique.md), wenn die Blockierung von einem Connector, einem Binding oder einem Berechtigungsnachweis kommt |
| Der KI-Anbieter scheint nicht betriebsbereit zu sein | [Portfolio und technische Administration](./portefeuille-et-administration-technique.md) | [Wartung, Support und FAQ](./maintenance-support-faq.md) und [Berichte, KI-Protokoll und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md), um den tatsächlichen Provider zu bestätigen |

Wenn Sie bereits einen Vorfall haben, öffnen Sie direkt [Wartung, Support und FAQ](./maintenance-support-faq.md) anstatt dem normalen Lesepfad zu folgen.

## Empfohlener Lesepfad

| Wenn Sie suchen nach… | Beginnen Sie hier |
| --- | --- |
| Eine neue Instanz in Azure bereitstellen | [Azure Marketplace-Bereitstellung](./deploiement-azure-marketplace.md) |
| Sich anmelden, die Authentifizierung prüfen und Ihr erstes Projekt erstellen | [Erste Schritte](./demarrage.md) |
| Die Oberfläche, die Palette, Benachrichtigungen und den Systemstatus verstehen | [Oberfläche und Navigation](./interface-et-navigation.md) |
| Den Projektkontext und die Einstellungen des Arbeitsbereichs verwalten | [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md) |
| Mitglieder, Rollen und RBAC-Sicherheitsvorkehrungen des Projekts administrieren | [Zugriffskontrolle und Projektrollen](./controle-acces-et-roles.md) |
| Dokumente importieren, Nachweise suchen und mit Agenten arbeiten | [Wissen und Agenten](./connaissance-et-agents.md) |
| Eine strukturierte Ausgabe, ihre Nachweise und ihre Aktualität korrekt lesen | [Strukturierte Ausgaben, Nachweise und Aktualität](./sorties-contextuelles-preuves-et-fraicheur.md) |
| Signale, Governance und genehmigungspflichtige Aktionen bearbeiten | [Governance, Entscheidungen und Aktionen](./gouvernance-decisions-et-actions.md) |
| Ein Artefakt überprüfen, ein PM Doc veröffentlichen und im KI-Protokoll nachforschen | [Berichte, KI-Protokoll und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md) |
| Projekte vergleichen, Integrationen, KI und Lizenzen verwalten | [Portfolio und technische Administration](./portefeuille-et-administration-technique.md) |
| Häufige Vorfälle diagnostizieren und Support-Prozeduren konsultieren | [Wartung, Support und FAQ](./maintenance-support-faq.md) |
| Produktbegriffe klären | [Glossar](./glossaire.md) |

## Schnellpfad nach Profil

| Profil | Seiten, die vorrangig zu öffnen sind |
| --- | --- |
| Fachanwender / Mitwirkender | [Erste Schritte](./demarrage.md) → [Oberfläche und Navigation](./interface-et-navigation.md) → [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md) → [Wissen und Agenten](./connaissance-et-agents.md) → [Strukturierte Ausgaben, Nachweise und Aktualität](./sorties-contextuelles-preuves-et-fraicheur.md) |
| Projektbesitzer | [Erste Schritte](./demarrage.md) → [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md) → [Zugriffskontrolle und Projektrollen](./controle-acces-et-roles.md) → [Governance, Entscheidungen und Aktionen](./gouvernance-decisions-et-actions.md) → [Berichte, KI-Protokoll und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md) |
| Technischer Administrator | [Azure Marketplace-Bereitstellung](./deploiement-azure-marketplace.md) → [Erste Schritte](./demarrage.md) → [Portfolio und technische Administration](./portefeuille-et-administration-technique.md) → [Wartung, Support und FAQ](./maintenance-support-faq.md) |
| Support / Audit | [Erste Schritte](./demarrage.md) → [Strukturierte Ausgaben, Nachweise und Aktualität](./sorties-contextuelles-preuves-et-fraicheur.md) → [Berichte, KI-Protokoll und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md) → [Wartung, Support und FAQ](./maintenance-support-faq.md) → [Glossar](./glossaire.md) |

## Empfohlener End-to-End-Pfad

Im realen Einsatz ist der häufigste Ablauf folgender:

1. Bereitstellen oder die veröffentlichte URL abrufen;
2. Sich mit einem autorisierten Microsoft Entra ID-Konto anmelden;
3. Ein **aktives Projekt** erstellen oder auswählen;
4. Das **Wissen** des Projekts laden;
5. Einen Austausch in **Agenten** starten;
6. Die **strukturierte Ausgabe**, ihre Nachweise, Aktualität und Vertrauenswürdigkeit überprüfen;
7. Das Ergebnis in ein **Artefakt** oder **PM Doc** umwandeln;
8. Die Herkunft und technischen Details im **KI-Protokoll** prüfen;
9. **Signale**, **gesteuerte Aktionen** und bei Bedarf den **Portfolio**-Vergleich bearbeiten;
10. Auf Plattformebene nur dann administrieren, wenn das Thema das Projekt übersteigt.

## Konvention für Bezeichnungen

Die Oberfläche kann englische Bezeichnungen anzeigen. In dieser Dokumentation sind die nützlichsten Entsprechungen:

- **Arbeitsbereich** = `Workspace`
- **Wissen** = `Knowledge`
- **Berichte & Artefakte** = `Reports` / `PM Docs` je nach Kontext
- **KI-Protokoll** = `AI Log`
- **Plattformadministration** = `Platform Administration`
- **Zugriffskontrolle** = `Access control`

## Was ProPM Agent abdeckt

Basierend auf den überprüften Verhaltensweisen organisiert ProPM Agent die Arbeit um den **Projektkontext**:

1. Sie öffnen oder erstellen ein Projekt;
2. Sie füllen das **Wissen**;
3. Sie befragen die **Agenten**;
4. Sie überprüfen die **strukturierten Ausgaben**;
5. Sie wandeln diese Ergebnisse in **Berichte & Artefakte** um;
6. Sie überprüfen die **Nachverfolgbarkeit** im **KI-Protokoll**;
7. Sie bearbeiten **Signale** und **gesteuerte Aktionen**;
8. Administratoren steuern die technische Ebene in der **Plattformadministration**.

## Beobachtete funktionale Architektur

| Domäne | Was es ermöglicht |
| --- | --- |
| Dashboard | Allgemeinen Status, Metriken, Aufmerksamkeitspunkte und nächste Schritte sehen |
| Projekte | Projektkontext erstellen, öffnen und merken |
| Arbeitsbereich | Projektzusammenfassung, operative Transparenz, Signale, Shortcuts und Projekteinstellungen gruppieren |
| Zugriffskontrolle | Mitglieder, Standardrollen, benutzerdefinierte Rollen und Projektberechtigungen verwalten |
| Wissen | Suchen, hochladen, importieren, Metadaten überprüfen und den Verlauf der Erfassung verfolgen |
| Agenten | Einen Agenten auswählen, einen Austausch starten, Sprache verwenden, falls der Browser es erlaubt, und benutzerdefinierte Agenten gemäß den Rechten verwalten |
| Strukturierte Ausgaben | Zusammenfassung, Nachweise, Aktualität, Vertrauenswürdigkeit, Artefaktvorschläge und nächste Schritte lesen |
| Berichte & Artefakte | PM Docs überprüfen, vergleichen, genehmigen, veröffentlichen, herunterladen und zurück in das Wissen einspielen |
| KI-Protokoll | Runs, Aktivität, technische IDs und die Transparenz der KI-Laufzeit inspizieren |
| Portfolio-Kommandozentrale | Mehrere Projekte mit Signalen, Gewichtungen, Schwellenwerten und gespeicherten Kohorten vergleichen |
| Plattformadministration | Integrationen, KI-Anbieter, Abonnement, Lizenzen und Plattformaktivität verwalten |

## Was die Anwendung auszeichnet

Die folgenden Elemente sind explizit in der Oberfläche oder den Tests sichtbar:

- **Strukturierte Ausgaben** mit Abschnitten, Nachweisen, Aktualität, Vertrauenswürdigkeit und zu entscheidenden nächsten Schritten;
- **Herkunft** zwischen einem Run, einer strukturierten Ausgabe, einem Artefakt, einer Artefaktversion und einem PM Doc;
- **Proaktive Signale** für Widersprüche, Aktualität, Blockaden und Erinnerungen;
- **Gesteuerte Aktionen** mit Vorschlag, Genehmigung, Ausführung und Nachverfolgbarkeit;
- **Klar getrennt** zwischen technischen Definitionen auf Plattformebene und Nutzungs-Bindings auf Projektebene;
- **Transparenz der KI-Laufzeit** mit tatsächlichem Anbieter, bei der Bereitstellung ausgewähltem Anbieter und Modellfamilie.

## Zielgruppen und Verantwortlichkeiten

| Profil | Hauptbedürfnisse |
| --- | --- |
| Projektleiter / PMO | Projektkontext, Agenten, Liefergegenstände, Signale, Governance und Nachverfolgbarkeit |
| Mitwirkender | Suche im Wissen, Inhaltsgenerierung, Überprüfung von Ausgaben und Verfolgung von Runs |
| Projektbesitzer | Projekteinstellungen, Rollen, Dokumentenkategorien, Projektintegrationen und Governance-Richtlinien |
| Technischer Administrator / Abonnement | Bereitstellung, Authentifizierung, Plattformintegrationen, KI-Anbieter, Abonnement, Lizenzen und Überwachung |

## Screenshots

Die Screenshots der Anwendung wurden in der beobachteten Umgebung generiert. Die Bereitstellungsseite verwendet zusätzlich die bereitgestellten Azure Portal-Screenshots, um die Installation zu veranschaulichen.

## Support und Kontakt

Nutzen Sie den richtigen Kanal je nach Art der Anfrage:

| Art der Anfrage | Vorrangig zu übermitteln |
| --- | --- |
| Technischer Support | URL der Bereitstellung, betroffenes Projekt, genaues Symptom, ungefähre Uhrzeit, `Trace ID` falls sichtbar |
| Zugriffs-, Mandanten- oder Identitätsproblem | erwarteter Mandant, verwendetes Konto, tatsächlich geöffnete URL, Microsoft-Meldung oder Screenshot |
| Kommerzielle Frage oder Abonnement | Kontokontext, betroffener Plan, Anzahl der Lizenzen oder Kapazitätsbedarf |

Alle diese Anfragen können an den folgenden Kontaktpunkt gesendet werden:

- **NovaBiz**
- 131 Continental Dr, Suite 305
- Newark, DE 19713 · USA
- [support@navabiz.pro](mailto:support@navabiz.pro)

## Weiter

- [Erste Schritte](./demarrage.md)
- [Strukturierte Ausgaben, Nachweise und Aktualität](./sorties-contextuelles-preuves-et-fraicheur.md)
- [Zugriffskontrolle und Projektrollen](./controle-acces-et-roles.md)
- [Glossar](./glossaire.md)
