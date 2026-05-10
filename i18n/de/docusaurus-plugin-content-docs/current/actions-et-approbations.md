---
title: Aktionen und Freigaben
slug: /actions-et-approbations
description: Gesteuerte Aktionen vorschlagen, genehmigen, ablehnen und ausführen.
---

# Aktionen und Freigaben

Eine gesteuerte Aktion kann aus einem Signal, Dokument oder Connector-Fluss entstehen und je nach Richtlinie eine Genehmigung benötigen.

## Aktion vorschlagen

1. Öffnen Sie Signal, PM-Dokument oder die Seite mit der Aktion.
2. Wählen Sie die Aktion, zum Beispiel SharePoint-Veröffentlichung oder Jira-Ticket.
3. Prüfen Sie Inhalt, Ziel und Begründung.
4. Senden Sie die Aktion.
5. Prüfen Sie den Status.

## Genehmigen oder ablehnen

1. Öffnen Sie **Actions & approvals**.
2. Filtern Sie wartende Aktionen.
3. Öffnen Sie die Details.
4. Prüfen Sie Nachweise, Ziel, Wirkung und Antragsteller.
5. Wählen Sie **Approve** oder **Reject**.

## Approved ist nicht executed

**Approved** bedeutet genehmigt. **Executed** bedeutet tatsächlich ausgeführt. Externe Aktionen benötigen Connector, Projektbindung, passende Richtlinie, Rolle, Gesundheit und gegebenenfalls Live-Modus.

## Blocker

| Blocker | Bedeutung |
| --- | --- |
| Rolle fehlt | Nutzer darf nicht vorschlagen oder genehmigen |
| require approval | Genehmigung erforderlich |
| deny | Richtlinie verbietet die Aktion |
| Not bound | Projekt ist nicht angebunden |
| Not healthy | Connector/Fournisseur ist nicht einsatzbereit |
