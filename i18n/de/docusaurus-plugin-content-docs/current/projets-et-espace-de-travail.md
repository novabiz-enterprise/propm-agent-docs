---
title: Projekte und Arbeitsbereich
slug: /projets-et-espace-de-travail
description: Ein Projekt erstellen, den Kontext wechseln und den Arbeitsbereich als Steuerungszentrale nutzen.
---

[Startseite](./index.md) · [Oberfläche und Navigation](./interface-et-navigation.md) · [Zugriffskontrolle und Projektrollen](./controle-acces-et-roles.md)

![Projektarbeitsbereich](/img/screenshots/localized/de/03-workspace-overview.png)

## Ziel

Diese Seite erklärt den Unterschied zwischen **Projekten**, **Arbeitsbereich** und **Agenten** und erläutert dann die Projekteinstellungen, die tatsächlich in der Anwendung sichtbar sind.

## Drei zu unterscheidende Bereiche

| Bereich | Wann zu verwenden |
| --- | --- |
| Projekte | Ein Projekt erstellen, ein bestehendes Projekt öffnen, den Kontext wechseln |
| Arbeitsbereich | Die Projektzusammenfassung, operative Transparenz, Signale und Projektebene-Einstellungen lesen |
| Agenten | Eine Live-Interaktion mit einem Agenten starten und die strukturierte Ausgabe des Runs lesen |

In der Praxis dient **Projekte** dazu, in den richtigen Kontext zu gelangen, **Arbeitsbereich** dazu, ihn zu konfigurieren, und **Agenten** dazu, ihn zu nutzen.

## Ein Projekt erstellen

Das beobachtete Formular enthält die folgenden Felder:

- **Projekt-ID**;
- **Name**;
- **Beschreibung**;
- **Standard-Datensprache**;
- **Zusätzliche Datensprachen**.

Empfehlungen für die Eingabe:

- wählen Sie eine lesbare und dauerhafte ID;
- verwechseln Sie nicht **Projekt-Datensprache** und **Oberflächensprache**;
- definieren Sie den Umfang korrekt, bevor Sie das Wissen oder die Agenten öffnen.

## Ein Projekt öffnen und wechseln

Ein Projekt kann geöffnet werden von:

- der Seite **Projekte**;
- dem **Projektauswahl** in der oberen Leiste;
- dem kürzlich im Browser gespeicherten Kontext.

Wenn Sie das Projekt wechseln, werden die folgenden Bereiche neu ausgerichtet: **Wissen**, **Agenten**, **Berichte & Artefakte**, **KI-Protokoll**, die Signale und die Projekteinstellungen.

## Der Arbeitsbereich: Steuerungszentrale des Projekts

Der **Arbeitsbereich** vereint auf einer einzigen Oberfläche:

- die **Projektzusammenfassung**;
- Verknüpfungen zu **Agenten**, **Berichte & Artefakte** und **KI-Protokoll**;
- eine Ansicht der **operativen Transparenz**;
- die **Signale** des Projekts;
- die Registerkarten für Projektebene-Einstellungen.

In den beobachteten Umgebungen kann eine **Voice**-Karte auch auf die in **Agenten** verfügbare Spracherfahrung verweisen.

## Operative Transparenz und Bereitschaft

Der Arbeitsbereich dient nicht nur dazu, das Projekt zusammenzufassen. Er ermöglicht auch zu sehen, ob das Projekt bereit zum Handeln ist:

- Vorhandensein oder Fehlen von Signalen;
- kürzliche Aktivität;
- Verknüpfungen zu verknüpften Entwürfen oder Liefergegenständen;
- Bereitschaft der Projektintegrationen, sofern vorhanden.

Nutzen Sie diesen Bereich, um zu verstehen, **warum** eine Aktion oder ein Import verfügbar, beeinträchtigt oder blockiert sein kann.

## Registerkarten auf Projektebene

| Registerkarte | Wozu sie dient |
| --- | --- |
| Agent configuration | Die Agenten für dieses Projekt konfigurieren |
| Access control | Mitglieder, Rollen und Berechtigungen auf Projektebene verwalten |
| Document categories | Die Dokumententaxonomie des Projekts anpassen und auf die dokumentbezogenen Oberflächen des Projekts übertragen |
| Governance policies | Connectoren, Ziele, Aktionsrichtlinien, Rendering-Profile und Benachrichtigungspräferenzen auf Projektebene definieren |
| Project integrations | Die bereiten und autorisierten Integrationen mit dem Projekt verbinden |
| Actions & approvals | Aktionsanfragen, Validierungen und gesteuerte Ausführung verwalten |

## Agent configuration

Die auf Projektebene bestätigten Parameter sind:

- `status`;
- `temperature`;
- `max tokens`.

### Sichtbare Einschränkungen

- `temperature` wird zwischen **0** und **2** erwartet;
- `max tokens` muss eine ganze Zahl größer oder gleich **1** sein.

### Konfigurationsverlauf

Die Oberfläche zeigt auch einen Versionsverlauf mit mindestens:

- Versionsnummer;
- Status;
- Temperatur;
- Max Tokens;
- Erstellungsdatum;
- Autor;
- zugehörige `trace ID`.

![Agenteneinstellungen auf Projektebene](/img/screenshots/localized/de/12-agent-configuration.png)

## Access control

Die Registerkarte **Access control** verwaltet Projektmitglieder und -rollen. Sie unterstützt:

- Standardrollen;
- benutzerdefinierte Rollen;
- RBAC-Sicherheitsvorkehrungen;
- schreibgeschützten Zugriff für Profile, die nicht zum Ändern autorisiert sind.

Siehe die dedizierte Seite: [Zugriffskontrolle und Projektrollen](./controle-acces-et-roles.md).

## Document categories

Diese Registerkarte dient dazu, die Dokumentenklassifizierung mit dem Projekt abzustimmen. In der Praxis beeinflusst die Projekttaxonomie die Kategorien, die beim Hochladen vorgeschlagen werden, und bestimmte Dokumentenauswahlfelder, die später in den Projektoberflächen verwendet werden.

### Konkrete Auswirkung einer Aktualisierung

Wenn die Liste der Kategorien erfolgreich geändert wird:

- wird das Kategorieauswahlfeld beim Hochladen in **Wissen** aktualisiert;
- richten sich die Kategorieauswahlfelder und -filter in **PM Docs** neu aus, wenn sie diese gemeinsame Taxonomie verwenden;
- bleibt die Änderung auf das **aktuelle Projekt** beschränkt.

### Praktische Beispiele

Halten Sie eine Taxonomie kurz und stabil. Anstatt beispielsweise nahe Varianten zu vervielfachen, bevorzugen Sie einige konsistente Kategorien wie:

- Projektcharta;
- Risikoregister;
- Statusbericht;
- Beschaffungsplan;
- Kommunikationsplan.

Das Ziel ist nicht, die Dokumentversion in der Kategorie zu kodieren, sondern eine wiederverwendbare Klassifizierung zwischen **Wissen** und **PM Docs** beizubehalten.

![Dokumentenkategorien des Projekts](/img/screenshots/localized/de/13-document-categories.png)

## Governance policies

Diese Registerkarte legt die Regeln fest, die die Entscheidungen, Validierungen und Governance-Verhaltensweisen des Projekts steuern. Verwenden Sie sie, bevor Sie einen Liefergegenstand veröffentlichen oder eine gesteuerte externe Aktion autorisieren.

### Sichtbare Teilbereiche in Governance policies

| Teilbereich | Was er regelt |
| --- | --- |
| Execution connectors | Connectortyp, Status, Ausführungsmodus, Umgebung, Scopes und Kontextparameter |
| Artifact destinations | Ziel eines Artefakts, zugehöriger Connector, aktiver oder Standardcharakter |
| Action policies | Betroffene Rolle, Zielconnector, Aktionslevel (`observe`, `draft`, `propose`, `execute`), Effekt (`allow`, `require_approval`, `deny`) und autorisierte Scopes |
| Rendering profiles | Rendering-Profile und Ausgabeformat, die bei gesteuerten Veröffentlichungen verwendet werden |
| Notification preferences | Kanal, Benachrichtigungstyp, Digest-Modus, Schwellenwert für Schweregrad und Aktivierung der Präferenz |

### Beispiele nützlicher Einstellungen

- eine explizite Genehmigung vor einer Veröffentlichung nach SharePoint verlangen;
- bestimmte Connectoren nur für eine Rolle oder einen präzisen Aktionsscope autorisieren;
- Benachrichtigungspräferenzen vom Typ `signal_digest`, `signal_alert` oder `manual_notification` auf Kanälen wie `in_app`, `email`, `teams` oder `webhook` vorbereiten;
- je nach Projektbedarf einen Digest-Modus `real_time`, `daily`, `weekly` oder `manual` wählen.

### Glaubwürdiges Szenario – sensibles Projekt / gesteuerte Verbreitung

Für ein Projekt, bei dem jede externe Verbreitung kontrolliert werden muss, sieht eine konsistente Einstellung oft so aus:

1. **Artifact destinations**: aktives SharePoint-Ziel mit bekanntem Rendering-Profil;
2. **Action policies**: `allow` für `observe` und `draft`, aber `require_approval` für `execute` bei externen Veröffentlichungen und Benachrichtigungen;
3. **Execution connectors**: externe Connectoren nur für die tatsächlich autorisierten Rollen sichtbar;
4. **Notification preferences**: `signal_digest` als `daily` für das Team, `signal_alert` nur für die sensibelsten Fälle;
5. **Project integrations**: Bindings nur für die Connectoren aktiviert, die bereits auf Plattformebene validiert sind.

Diese Kombination verhindert, dass ein Entwurf, ein Digest oder eine Aktion als direkt verbreitbar erscheint, während das Projekt noch auf eine menschliche Genehmigung wartet.

![Governance-Richtlinien des Projekts](/img/screenshots/localized/de/14-governance-policies.png)

## Project integrations

Diese Registerkarte trennt die **technisch definierten** Integrationen auf Plattformebene von denen, die **tatsächlich nutzbar** sind für das Projekt.

### Explizit beobachtete Blockadeursachen

Eine Projektintegration oder eine Importoption kann blockiert sein aufgrund von:

- entitlement;
- policy;
- permission;
- beeinträchtigter health;
- fehlender oder deaktivierter Plattformdefinition;
- deaktiviertem oder nicht konfiguriertem Projekt-Binding.

### Wie man eine Binding-Blockade interpretiert

| Sichtbare Ursache | Praktische Lesart | Empfohlene Reaktion |
| --- | --- | --- |
| `entitlement` | Der Plan oder die autorisierte Kapazität deckt diesen Connector oder diese Nutzungsfamilie nicht ab | Überprüfen Sie das Abonnement und die Kapazitäten in [Portfolio und technische Administration](./portefeuille-et-administration-technique.md) |
| `policy` | Die Projekt-Governance verbietet oder begrenzt diesen Fluss | Lesen Sie **Governance policies** erneut, bevor Sie das Binding ändern |
| `permission` | Der Connector existiert, aber Ihre Rolle erlaubt nicht, ihn zu aktivieren oder zu nutzen | Kontrollieren Sie die Projektrolle in [Zugriffskontrolle und Projektrollen](./controle-acces-et-roles.md) |
| `health` | Die Plattformdefinition existiert, aber ihre Bereitschaft oder Gesundheit ist beeinträchtigt | Öffnen Sie die Plattformadministration, um die technische Definition zu bestätigen |
| Definition fehlt oder deaktiviert | Auf Tenant-Ebene ist nichts wirklich bereit | Fordern Sie zuerst die Einrichtung oder Reaktivierung auf Plattformebene an |
| Projekt-Binding fehlt | Die Plattform ist bereit, aber das Projekt nutzt die Integration noch nicht | Aktivieren Sie das Binding explizit auf Projektseite |

Wenn eine Blockade bestehen bleibt, öffnen Sie anschließend **Plattformadministration**, um die technische Definition zu prüfen, und kehren Sie dann zum Projekt zurück, um das Binding und die Bereitschaft zu bestätigen.

Wichtiger Punkt: **Project integrations** bestimmt anschließend, was tatsächlich in **Actions & approvals** erscheint. Wenn ein Connector hier weder bereit noch autorisiert ist, wird er später im gesteuerten Fluss keine ausführbare Option.

## Actions & approvals

Diese Registerkarte verwandelt eine Empfehlung in eine kontrollierte Operation. Eine Aktion kann **sichtbar**, aber nicht **ausführbar** sein, wenn:

- Sie nicht die richtige Berechtigung haben;
- der kompatible Connector nicht bereit ist;
- das Projekt-Binding die Aktion einschränkt;
- die erforderliche Genehmigung noch nicht erfolgt ist.

## Schreibgeschützt oder Zugriff verweigert

- **schreibgeschützt**: Die Registerkarte bleibt sichtbar, aber das Speichern ist blockiert;
- **Zugriff verweigert**: Die Route oder Aktion ist für Ihr Konto nicht verfügbar.

Dieser Unterschied ist besonders wichtig für **Access control**, **Project integrations** und die Governance-Einstellungen.

## Empfohlener Ablauf nach der Projekterstellung

1. öffnen Sie den **Arbeitsbereich**;
2. überprüfen Sie zuerst die **Mitglieder** und **Rollen**, wenn das Projekt kollaborativ ist;
3. passen Sie anschließend die **Dokumentenkategorien** an;
4. lesen Sie die **Governance policies** erneut, bevor Sie etwas extern verbreiten;
5. verbinden Sie nur die **Project integrations**, die tatsächlich bereit sind;
6. laden Sie anschließend das **Wissen**;
7. gehen Sie schließlich zu **Agenten**, **Berichte & Artefakte** und **Actions & approvals**.

## Zwei nützliche Parametrierungsszenarien

### Szenario 1 – minimales neues Projekt

Für ein startendes Projekt halten Sie eine einfache Reihenfolge ein:

1. fügen Sie die unverzichtbaren Mitglieder hinzu und überprüfen Sie ihre Rollen;
2. erstellen Sie eine kurze Dokumententaxonomie in **Document categories**;
3. aktivieren Sie nur die bereits validierten und wirklich notwendigen Integrationen;
4. bereiten Sie eine minimale Governance vor, z.B. einen internen Digest und ein Standard-Artefaktziel;
5. laden Sie anschließend das **Wissen**, bevor Sie die Agenten öffnen.

Dieses Szenario vermeidet, zu früh Connectoren oder Verbreitungsregeln zu öffnen, die nicht sofort genutzt werden.

### Szenario 2 – sensibles Projekt / gesteuerte Verbreitung

Für ein Projekt, das externen Benachrichtigungen oder einer formalen Dokumentenveröffentlichung ausgesetzt ist:

1. beschränken Sie die Rollen mit Zugriff auf externe Connectoren;
2. bereiten Sie ein SharePoint-Ziel oder Äquivalent in **Artifact destinations** vor;
3. wenden Sie `require_approval` auf die Aktionslevel an, die eine externe Verbreitung erzeugen können;
4. bevorzugen Sie `signal_digest` für das laufende Tracking und reservieren Sie Sofortalarme für kritische Fälle;
5. machen Sie in **Project integrations** nur die Bindings sichtbar, deren Bereitschaft und Richtlinie bereits konform sind.

Dieses zweite Szenario stimmt Lesen von Signalen, Verbreitung, Genehmigung und tatsächliche Ausführung ab, anstatt das Team jeden Bildschirm als unabhängige Oberfläche behandeln zu lassen.

## Weiter

- [Zugriffskontrolle und Projektrollen](./controle-acces-et-roles.md)
- [Wissen und Agenten](./connaissance-et-agents.md)
- [Governance, Entscheidungen und Aktionen](./gouvernance-decisions-et-actions.md)
- [Portfolio und technische Administration](./portefeuille-et-administration-technique.md)

## Weiter

- [Zugriffskontrolle und Projektrollen](./controle-acces-et-roles.md)
- [Wissen und Agenten](./connaissance-et-agents.md)
- [Governance, Entscheidungen und Aktionen](./gouvernance-decisions-et-actions.md)
- [Portfolio und technische Administration](./portefeuille-et-administration-technique.md)
