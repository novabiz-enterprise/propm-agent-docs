---
title: Zugriffskontrolle und Projektrollen
slug: /controle-acces-et-roles
description: Verwalten Sie Mitglieder, delegieren Sie Projektrollen und verstehen Sie die RBAC‑Sicherheitsmechanismen für Ersteller und andere Mitglieder.
---

[Startseite](./index.md) · [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md) · [Wartung, Support und FAQ](./maintenance-support-faq.md)

![Delegation des Erstellers und Projektrollen](/img/diagrams/de/delegation-createur-rbac.svg)

## Ziel

Die **Zugriffskontrolle** ist der RBAC‑Bereich auf Projektebene. Sie ermöglicht es, zu entscheiden:

- wer in das Projekt eintritt;
- welche Rolle jedes Mitglied erhält;
- welche benutzerdefinierten Rollen in diesem Projekt existieren;
- welche Berechtigungen diese Rollen gewähren.

## Warum ist das wichtig

Die Rechte bestimmen einen großen Teil der Erfahrung: Ausführung von Agenten, Verwaltung von Mitgliedern, Generierung von Lieferobjekten, Konfiguration von Integrationen, Governance von Veröffentlichungen und Audit‑Lesen. Eine korrekte Rollen‑Lesung verhindert, dass ein funktionaler Block als fehlende Autorisierung missverstanden wird.

## Wer kann diese Seite nutzen

- **Mitglieder und Rollen einsehen**: jedes Mitglied, das auf den Arbeitsbereich zugreifen kann;
- **Mitglieder verwalten**: Benutzer mit `members:manage`;
- **Benutzerdefinierte Rollen verwalten**: Benutzer mit `roles:manage`.

## Ersteller des Projekts: Anfangsrolle und Delegation

Bei der Projekterstellung startet der Ersteller mit der Rolle **Projektinhaber** und allen beobachteten Projekt‑Berechtigungen. Er dient somit als administrativer Ausgangspunkt: Er öffnet das Projekt, prüft die Anfangskonfiguration und delegiert anschließend die nützlichen Rollen an andere Mitglieder.

### Empfohlene Delegation

1. behalten Sie den Ersteller als ersten administrativen Wächter;
2. vergeben Sie einen zweiten **Projektinhaber**, falls das Projekt nicht von einer einzigen Person abhängig sein soll;
3. nutzen Sie **Projektleiter** für die tägliche Steuerung;
4. reservieren Sie benutzerdefinierte Rollen für echte Bedarfsschwankungen;
5. prüfen Sie anschließend **Governance‑Politiken** und **Projekt‑Integrationen**, damit die Rechte den externen Nutzungen entsprechen.

### Was die beobachtete Dokumentation bestätigt

- der Ersteller kann nicht von diesem Bildschirm entfernt werden;
- die Rolle des Erstellers bleibt fest;
- ein Benutzer kann sich nicht selbst zurückstufen oder selbst löschen von dieser Oberfläche;
- die Rollen‑Delegation ist bestätigt;
- der freie Transfer des **Ersteller‑Status** ist von den beobachteten Bildschirmen nicht bestätigt.

## Beobachtete Standardrollen

Jedes Projekt startet mit integrierten, geschützten Rollen:

| Rolle | Typische Nutzung |
| --- | --- |
| Projektinhaber | Vollständige Projekt‑Administration |
| Projektleiter | Tägliche operative Steuerung |
| Mitwirkender | Inhaltserstellung, Nutzung von Agenten und Lieferobjekten je nach Berechtigungen |
| Leser | Nur‑Lesen‑Zugriff |
| Auditor | Audit‑orientierter Zugriff und Nachverfolgbarkeit |

Diese integrierten Rollen sind serverseitig geschützt und können von der Oberfläche nicht gelöscht werden.

## Schnelle Rollen‑Matrix

Benutzerdefinierte Rollen können dieses Schema erweitern oder reduzieren. Die folgende Tabelle beschreibt das **typische Verhalten** der beobachteten Standardrollen.

| Häufige Aktion | Projektinhaber | Projektleiter | Mitwirkender | Leser | Auditor |
| --- | --- | --- | --- | --- | --- |
| Zugriff auf Projekt, Arbeitsbereich und Leseseiten | Ja | Ja | Ja | Ja | Ja |
| Suchen in Wissen, PM‑Dokumente und KI‑Journal erneut lesen | Ja | Ja | Ja | Ja | Ja |
| Einen Run in **Agenten** starten | Ja | Ja | Ja | Standardmäßig nein | Standardmäßig nein |
| Arbeitsinhalte und Entwürfe von Lieferobjekten ändern | Ja | Ja | Ja | Nein | Nein |
| Mitglieder, Rollen und Hauptprojekt‑Einstellungen verwalten | Ja | Nein | Nein | Nein | Nein |
| Audit‑orientierte Durchsicht | Ja | Ja | Ja | Nur‑Lesen | Ja |

## Benutzerdefinierte Rollen

Das Produkt unterstützt die Erstellung, Bearbeitung und Löschung von **benutzerdefinierten Rollen** auf Projektebene.

### Explizit beobachtete Berechtigungen

Die exponierten Berechtigungen umfassen unter anderem:

- `project:read`
- `project:update`
- `agent:run`
- `agent:configure`
- `documents:read`
- `documents:upload`
- `documents:delete`
- `report:generate`
- `history:read`
- `members:read`
- `members:manage`
- `roles:manage`
- `settings:manage`

### Berechtigung → konkreter Einfluss

| Berechtigung | Betroffene Oberfläche | Symptom bei fehlender Berechtigung |
| --- | --- | --- |
| `agent:configure` | Tab **Agenten‑Konfiguration** im **Arbeitsbereich** | Die Seite bleibt nur lesbar oder die Speichern‑Kontrollen sind deaktiviert |
| `report:generate` | Erstellung von Entwürfen, Artefakten und PM‑Dokumenten | Der Benutzer kann lesen, aber nicht das erwartete Lieferobjekt generieren |
| `history:read` | **KI‑Journal** und detaillierte Run‑Lesung | Die Nachverfolgbarkeit bleibt unzugänglich oder stark eingeschränkt |
| `settings:manage` | Projekt‑Einstellungen, Governance und einige Integrationen | Die Parameter sind sichtbar, aber nicht veränderbar |
| `members:manage` | Bereich **Mitglieder** in **Zugriffskontrolle** | Hinzufügen, Entfernen oder Ändern eines Mitglieds ist unmöglich |
| `roles:manage` | Benutzerdefinierte Rollen und deren Berechtigungen | Erstellen, Anpassen oder Löschen einer benutzerdefinierten Rolle ist unmöglich |

Diese Tabelle dient vor allem dazu, das Verhalten der Oberfläche korrekt zu lesen: Eine fehlende oder ausgegraute Aktion deutet oft auf eine nicht gewährte Berechtigung hin.

![Editor für benutzerdefinierte Rollen](/img/screenshots/localized/de/11-custom-role-editor.png)

## Was Sie auf der Seite sehen

Die Seite ist in zwei Arbeitsbereiche unterteilt:

1. **Rollen und Berechtigungen**
   - Überprüfung der integrierten Rollen;
   - Erstellung von benutzerdefinierten Rollen;
   - Inspektion oder Bearbeitung der Berechtigungen einer benutzerdefinierten Rolle;
2. **Mitglieder**
   - Hinzufügen eines Mitglieds per E‑Mail;
   - Zuweisung einer integrierten oder benutzerdefinierten Rolle;
   - Rollenwechsel;
   - Löschen eines Mitglieds, wenn dies noch erlaubt ist.

Die Seite kann auch Ihre aktuelle Identität anzeigen und, wenn sie exponiert ist, den geschützten Eintrag des **Erstellers** des Projekts.

## Empfohlener Ablauf

### Rollen vor dem Hinzufügen eines Mitglieds prüfen

1. öffnen Sie **Arbeitsbereich**;
2. wählen Sie den Tab **Zugriffskontrolle**;
3. lesen Sie die vorhandenen Rollen erneut;
4. prüfen Sie, ob eine Standard‑Rolle ausreicht oder ob eine benutzerdefinierte Rolle nötig ist.

### Eine benutzerdefinierte Rolle erstellen

1. öffnen Sie **Rollen und Berechtigungen**;
2. geben Sie einen **Namen** ein;
3. fügen Sie ggf. eine **Beschreibung** hinzu;
4. erstellen Sie die Rolle;
5. aktivieren oder deaktivieren Sie die gewünschten Berechtigungen;
6. prüfen Sie die angezeigten Badges oder Berechtigungen vor echter Nutzung.

### Ein Mitglied hinzufügen oder aktualisieren

1. öffnen Sie **Mitglieder**;
2. geben Sie die **E‑Mail** ein;
3. wählen Sie die gewünschte Rolle;
4. speichern;
5. prüfen Sie, ob die Zeile des Mitglieds die erwartete Rolle widerspiegelt.

Wenn der Benutzer zu einem anderen Mandanten gehört, denken Sie daran, dass ein **externer / Gast‑Benutzer** zuerst in der Identität eingeladen werden muss, bevor das Projekt‑RBAC ihm eine nützliche Rolle zuweisen kann.

### Die Rolle eines bestehenden Mitglieds ändern

1. finden Sie die Zeile des Mitglieds in **Mitglieder**;
2. benutzen Sie den Rollen‑Auswahl‑Filter dieser Zeile;
3. wählen Sie die neue Rolle;
4. bestätigen Sie, dass die Zeile die aktualisierte Rolle anzeigt.

### Ein Mitglied entfernen

1. finden Sie die Zeile des zu entfernenden Mitglieds;
2. benutzen Sie die Lösch‑Aktion, falls verfügbar;
3. bestätigen Sie, dass das Mitglied aus der Liste verschwindet;
4. wenn die Aktion weiterhin blockiert, prüfen Sie zuerst, ob es sich nicht um Ihr eigenes Konto oder um den geschützten Eintrag des Erstellers handelt.

## Bestätigte RBAC‑Sicherheitsmechanismen

Die Oberfläche und die Plattform‑Services setzen mehrere wichtige Schutzmaßnahmen um:

- Sie können **nicht** Ihr eigenes Zugangs‑Token von diesem Bildschirm entfernen;
- Sie können **nicht** Ihre eigene Rolle von diesem Bildschirm ändern;
- Der Eintrag des **Erstellers** des Projekts bleibt geschützt;
- Eine **System‑Rolle** kann nicht gelöscht werden;
- Eine **benutzerdefinierte Rolle**, die noch zugewiesen ist, kann nicht gelöscht werden;
- Benutzer ohne Verwaltungsrechte sehen eine **lesbare** Seite mit deaktivierten Kontrollen.

## Nur‑Lesen vs Zugriff verweigert

Diese beiden Zustände bedeuten nicht dasselbe:

- **Nur‑Lesen**: Die Seite bleibt sichtbar, aber die Kontrollen zum Hinzufügen, Bearbeiten oder Löschen sind deaktiviert;
- **Zugriff verweigert**: Die Route oder Aktion ist für Ihr Konto nicht verfügbar.

In der Praxis ermöglicht dies, dass einige Profile die RBAC‑Konfiguration erneut lesen können, ohne sie zu ändern.

### Wie ein Verweis gelesen wird

| Was Sie beobachten | Wahrscheinlichste Interpretation | Empfohlene Reaktion |
| --- | --- | --- |
| ein sichtbarer, aber ausgegrauter Kontroll | Oberfläche in **Nur‑Lesen** | Prüfen Sie zuerst, ob Ihre Rolle die erwartete Berechtigung enthält |
| eine Aktion fehlt, obwohl sie für andere vorhanden ist | Berechtigung oder Rolle fehlt | Vergleichen Sie Ihre Standard‑ oder benutzerdefinierte Rolle mit der erwarteten Aktion |
| eine Aktion ist sichtbar, aber unmöglich trotz UI | RBAC‑Sicherheit auf Server‑Seite oder Schutz‑Beschränkung | Prüfen Sie, ob es sich um eine System‑Rolle, Ihr eigenes Konto oder einen geschützten Eintrag handelt |

## Was der Ersteller praktisch delegiert

| Bedarf | Rolle zuerst zu vergeben | Warum |
| --- | --- | --- |
| administrative Kontinuität | **Projektinhaber** | Vermeiden, dass ein einzelner Account die gesamte Administration konzentriert |
| tägliche Steuerung | **Projektleiter** | Verwalten der laufenden Arbeit ohne die gesamte Administration zu öffnen |
| Inhaltserstellung und Agenten‑Nutzung | **Mitwirkender** | Ausführen von Agenten und Vorbereitung von Lieferobjekten |
| breite Lesbarkeit | **Leser** | Nur‑Lesen‑Zugriff ohne Änderungsrisiko |
| Audit und Nachverfolgbarkeit | **Auditor** | Historie und Beweise erneut lesen ohne das Projekt zu beeinflussen |

## Häufige Probleme

### Nicht möglich, eine benutzerdefinierte Rolle zu löschen

Prüfen Sie zuerst, ob diese Rolle noch einem Mitglied zugewiesen ist. Solange sie verwendet wird, bleibt die Löschung blockiert.

### Nicht möglich, meine eigene Rolle zu ändern

Dieses Verhalten ist beabsichtigt, um einen versehentlichen Zugriffverlust zu verhindern. Bitten Sie einen anderen Projekt‑Administrator, die Änderung durchzuführen.

### Tab ist sichtbar, aber alles ausgegraut

Sie befinden sich wahrscheinlich in **Nur‑Lesen** auf dieser Oberfläche. Prüfen Sie, ob Ihre Rolle `members:manage` oder `roles:manage` enthält.

## Tipps

- nutzen Sie **Projektinhaber** nur für echte Projekt‑Administratoren;
- halten Sie benutzerdefinierte Rollen gezielt und begrenzt auf einen konkreten Bedarf;
- lesen Sie die Berechtigungen vor der Delegierung von Mitglieder‑Verwaltung;
- dokumentieren Sie benutzerdefinierte Rollen in den Team‑Praktiken, um Duplikate zu vermeiden.

## Weiter

- [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md)
- [Governance, Entscheidungen und Aktionen](./gouvernance-decisions-et-actions.md)
- [Connectoren und Integrationen](./connecteurs-jira-et-sharepoint)
- [Wartung, Support und FAQ](./maintenance-support-faq.md)
