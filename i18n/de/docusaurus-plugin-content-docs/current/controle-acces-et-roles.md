---
title: Zugriffskontrolle und Projektrollen
slug: /controle-acces-et-roles
description: Mitglieder, Standardrollen, benutzerdefinierte Rollen und RBAC-Schutzmaßnahmen auf Projektlevel administrieren.
---

[Startseite](./index.md) · [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md) · [Wartung, Support und FAQ](./maintenance-support-faq.md)

## Ziel

Die **Zugriffskontrolle** ist die RBAC-Administrationszone auf Projektlevel. Sie ermöglicht, zu entscheiden:

- wer das Projekt betreten kann;
- welche Rolle jedes Mitglied erhalten soll;
- welche benutzerdefinierten Rollen in diesem Projekt existieren;
- welche Berechtigungen diese Rollen gewähren.

## Warum dies wichtig ist

Die Berechtigungen bestimmen einen großen Teil der Erfahrung: Erstellung von Artefakten, Ausführung von Agenten, Verwaltung von Mitgliedern, Änderungen von Einstellungen und Genehmigungen. Eine korrekte Lesart der Rollen verhindert, dass ein Incident mit einem einfachen Fehlen von Berechtigungen verwechselt wird.

## Wer diese Seite verwenden kann

- **Mitglieder und Rollen konsultieren**: jedes Mitglied, das Zugang zum Arbeitsbereich hat;
- **Mitglieder verwalten**: Benutzer mit `members:manage`;
- **Benutzerdefinierte Rollen verwalten**: Benutzer mit `roles:manage`.

![Projekt-Zugriffskontrolle-Ansicht](/img/screenshots/localized/de/11-access-control.png)

## Beobachtete Standardrollen

Jedes Projekt startet mit geschützten, integrierten Rollen:

| Rolle | Typische Nutzung |
| --- | --- |
| Project Owner | Vollständige Projektadministration |
| Project Manager | Operative tägliche Steuerung |
| Contributor | Beitrag von Inhalten, Nutzung von Agenten und Deliverables gemäß Berechtigungen |
| Viewer | Nur-Lesen-Konsultation |
| Auditor | Audit- und Nachverfolgbarkeit-orientierte Konsultation |

Diese integrierten Rollen sind serverseitig geschützt und können nicht über die Oberfläche entfernt werden.

## Schnellmatrix der Standardrollen

Benutzerdefinierte Rollen können dieses Schema erweitern oder reduzieren. Die folgende Tabelle beschreibt das **übliche Verhalten** der beobachteten Standardrollen.

| Häufige Aktion | Project Owner | Project Manager | Contributor | Viewer | Auditor |
| --- | --- | --- | --- | --- | --- |
| Zugang zum Projekt, zum Arbeitsbereich und zu Leseseiten | Ja | Ja | Ja | Ja | Ja |
| In Wissen suchen, PM Docs und KI-Protokoll durchsehen | Ja | Ja | Ja | Ja | Ja |
| Run in **Agenten** starten | Ja | Ja | Ja | Nicht standardmäßig | Nicht standardmäßig |
| Arbeitsinhalte und Deliverable-Vorlagen bearbeiten | Ja | Ja | Ja | Nein | Nein |
| Mitglieder, Rollen und grundlegende Projekt-Einstellungen verwalten | Ja | Nein | Nein | Nein | Nein |
| Audit- und Nachverfolgbarkeit-orientierte Durchsicht | Ja | Ja | Ja | Allgemeines Lesen | Ja |

## Benutzerdefinierte Rollen

Das Produkt unterstützt die Erstellung, Bearbeitung und Löschung von **benutzerdefinierten Rollen** auf Projektlevel.

### Explizit beobachtete Berechtigungen

Die verfügbar gemachten Berechtigungen umfassen insbesondere:

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

### Berechtigung → konkrete Wirkung

| Berechtigung | Betroffene Oberfläche | Symptom, wenn sie fehlt |
| --- | --- | --- |
| `agent:configure` | Tab **Agent configuration** im **Arbeitsbereich** | die Seite bleibt konsultierbar oder die Registrierungssteuerungen sind deaktiviert |
| `report:generate` | Erstellung von Vorlagen, Artefakten und PM Docs | der Benutzer kann durchsehen, aber nicht das erwartete Deliverable generieren |
| `history:read` | **KI-Protokoll** und detaillierte Lesung von Runs | die Nachverfolgbarkeit bleibt unzugänglich oder sehr limitiert |
| `settings:manage` | Projekt-Einstellungen, Governance und bestimmte Integrationen | die Parameter sind sichtbar, aber nicht modifizierbar |
| `members:manage` | Zone **Members** in **Access control** | unmöglich, ein Mitglied hinzuzufügen, zu entfernen oder zu ändern |
| `roles:manage` | Benutzerdefinierte Rollen und ihre Berechtigungen | unmöglich, eine benutzerdefinierte Rolle zu erstellen, anzupassen oder zu löschen |

Diese Tabelle dient vor allem zur Diagnose: eine fehlende oder ausgegraute Aktion ist nicht immer ein Bug, sondern oft die direkte Folge einer nicht gewährten Berechtigung.

![Benutzerdefinierte Rolle Editor](/img/screenshots/localized/de/11-custom-role-editor.png)

## Was Sie auf der Seite sehen

Die Seite teilt sich in zwei Arbeitszonen:

1. **Roles & permissions**
   - Durchsicht der integrierten Rollen;
   - Erstellung benutzerdefinierter Rollen;
   - Inspektion oder Modifikation der Berechtigungen einer benutzerdefinierten Rolle;
2. **Members**
   - Hinzufügen eines Mitglieds per E-Mail;
   - Zuweisung einer integrierten oder benutzerdefinierten Rolle;
   - Änderung einer Rolle;
   - Löschung eines Mitglieds, wenn dies noch autorisiert ist.

Die Seite kann auch Ihre aktuelle Identität und, wenn verfügbar gemacht, den geschützten Eintrag des **Erstellers** des Projekts zeigen.

## Empfohlener Weg

### Rollen durchsehen, bevor ein Mitglied hinzugefügt wird

1. öffnen Sie **Arbeitsbereich**;
2. wählen Sie den Tab **Access control**;
3. durchsehen Sie die existierenden Rollen;
4. prüfen Sie, ob eine Standardrolle ausreichend ist oder eine benutzerdefinierte Rolle notwendig ist.

### Eine benutzerdefinierte Rolle erstellen

1. öffnen Sie **Roles & permissions**;
2. geben Sie einen **Namen** ein;
3. fügen Sie optional eine **Beschreibung** hinzu;
4. erstellen Sie die Rolle;
5. aktivieren oder deaktivieren Sie die gewünschten Berechtigungen;
6. prüfen Sie die angezeigten Badges oder Berechtigungen vor realem Einsatz.

### Ein Mitglied hinzufügen oder aktualisieren

1. öffnen Sie **Members**;
2. geben Sie die **E-Mail** ein;
3. wählen Sie die gewünschte Rolle;
4. speichern Sie;
5. prüfen Sie, dass die Zeile des Mitglieds die erwartete Rolle korrekt wiederspiegelt.

Wenn der Benutzer einem anderen Tenant gehört, halten Sie im Kopf, dass ein **externer Account / Gast** zunächst auf der Identitätsseite eingeladen werden muss, bevor das Projekt-RBAC ihm eine nutzbare Rolle zuweisen kann. In der Praxis, wenn die E-Mail korrekt scheint, aber der Benutzer bleibt unauffindbar oder ohne realen Effekt, prüfen Sie zunächst die **Entra / Gast**-Posture und kommen Sie dann zurück auf die Zuweisung der Projektrolle.

### Die Rolle eines existierenden Mitglieds ändern

1. finden Sie die Zeile des Mitglieds in **Members**;
2. nutzen Sie den Rollen-Selektor dieser Zeile;
3. wählen Sie die neue Rolle;
4. bestätigen Sie, dass die Zeile die aktualisierte Rolle korrekt zeigt.

### Ein Mitglied entfernen

1. finden Sie die Zeile des zu entfernenenden Mitglieds in **Members**;
2. nutzen Sie die Lösch-Aktion, wenn sie verfügbar ist;
3. bestätigen Sie, dass das Mitglied aus der Liste verschwindet;
4. wenn die Aktion blockiert bleibt, prüfen Sie zunächst, dass es nicht Ihr eigener Account oder der geschützte Eintrag des Erstellers ist.

## Bestätigte RBAC-Schutzmaßnahmen

Die Oberfläche und das Backend implementieren mehrere wichtige Schutzmaßnahmen:

- Sie können **Ihren eigenen Zugang** nicht von diesem Screen löschen;
- Sie können **Ihre eigene Rolle** nicht von diesem Screen ändern;
- der Eintrag des **Erstellers des Projekts** bleibt geschützt;
- eine **Systemrolle** kann nicht gelöscht werden;
- eine **benutzerdefinierte Rolle, die noch zugewiesen ist**, kann nicht gelöscht werden;
- Benutzer ohne Verwaltungsrecht sehen eine **konsultierbare** Seite mit deaktivierten Steuerungen.

## Nur-Lesen vs. Zugang verweigert

Diese beiden Zustände bedeuten nicht das Gleiche:

- **Nur-Lesen**: die Seite bleibt sichtbar, aber die Steuerungen für Hinzufügen, Bearbeiten oder Löschen sind deaktiviert;
- **Zugang verweigert**: die Route oder die Aktion ist für Ihren Account nicht verfügbar.

In der Praxis ermöglicht dies bestimmten Profilen, die RBAC-Konfiguration zu durchsehen, ohne sie modifizieren zu können.

### Wie ein Verweigern zu lesen ist

| Was Sie beobachten | Wahrscheinlichste Lesart | Empfohlene Reflexion |
| --- | --- | --- |
| eine sichtbare, aber ausgegraute Steuerung | Oberfläche verfügbar gemacht als **Nur-Lesen** | prüfen Sie zunächst, ob Ihre Rolle die erwartete Berechtigung umfasst |
| eine fehlende Aktion, während sie für andere Profile existiert | Berechtigung oder Rolle nicht gewährt | vergleichen Sie Ihre Standard- oder benutzerdefinierte Rolle mit der erwarteten Aktion |
| eine sichtbare, aber unmögliche Aktion trotz UI | RBAC-Schutzmaßnahme serverseitig oder Schutz-Constraint | prüfen Sie, ob es eine Systemrolle, Ihr eigener Account oder ein geschützter Eintrag ist |

Dieses Mini-Diagnose verhindert, dass eine Verweigerung aufgrund einer Standardrolle, eine Verweigerung aufgrund einer benutzerdefinierten Rolle und eine bewusste Schutzmaßnahme des Backends verwechselt werden.

## Erwartetes Ergebnis

Wenn die Konfiguration korrekt ist:

- die Liste der Mitglieder ist aktuell;
- die benutzerdefinierten Rollen erscheinen in den Selektoren;
- die Berechtigungen ändern sich basierend auf der zugewiesenen Rolle;
- gefährliche Aktionen bleiben durch die Schutzmaßnahmen blockiert.

## Häufige Probleme

### Unmöglich, eine benutzerdefinierte Rolle zu löschen

Prüfen Sie zunächst, ob diese Rolle noch einem Mitglied zugewiesen ist. Solange sie verwendet wird, bleibt die Löschung blockiert.

### Unmöglich, meine eigene Rolle zu ändern

Dieses Verhalten ist bewusst, um einen versehentlichen Zugangsloss zu vermeiden. Fordern Sie einen anderen Projektadministrator an, die Modifikation zu durchführen.

### Der Tab ist sichtbar, aber alles ist ausgegraut

Sie sind wahrscheinlich im **Nur-Lesen**-Modus auf dieser Oberfläche. Prüfen Sie, ob Ihre Rolle `members:manage` oder `roles:manage` umfasst.

## Hinweise

- nutzen Sie **Project Owner** nur für die realen Projektadministratoren;
- halten Sie benutzerdefinierte Rollen gezielt und limitiert auf einen präzisen Bedarf;
- durchsehen Sie die Berechtigungen vor der Delegation der Mitglieder-Verwaltung;
- dokumentieren Sie benutzerdefinierte Rollen in den Team-Praktiken, um Duplikate zu vermeiden.

## Weiter

- [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md)
- [Governance, Entscheidungen und Aktionen](./gouvernance-decisions-et-actions.md)
- [Wartung, Support und FAQ](./maintenance-support-faq.md)
