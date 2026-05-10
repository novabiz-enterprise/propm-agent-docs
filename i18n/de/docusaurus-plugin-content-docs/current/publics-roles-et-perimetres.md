---
title: Zielgruppen, Rollen und Geltungsbereiche
slug: /publics-roles-et-perimetres
description: Den richtigen Dokumentationspfad für Business-Nutzer, Project Owner, Azure-Administratoren und Support wählen.
---

# Zielgruppen, Rollen und Geltungsbereiche

Diese Seite hilft, die richtige Dokumentation je nach Verantwortung in ProPM Agent zu öffnen.

## Für wen

| Profil | Nutzen |
| --- | --- |
| Business-Nutzer | Tägliche Arbeit ohne Azure-Details verstehen |
| Project Owner | Mitglieder, Rollen, Governance und Projektintegrationen steuern |
| Azure-/Tenant-Administrator | Bereitstellung, Entra, KI-Anbieter, Lizenzen und Updates verwalten |
| Support/Audit | Runs, Trace IDs und Diagnoseinformationen finden |

## Dokumentationsebenen

| Ebene | Enthält | Enthält nicht |
| --- | --- | --- |
| Endnutzer | Schritte, Rollen, erwartete Ergebnisse | Secrets, Roh-Payloads, Infrastrukturdetails |
| Project Owner | Projektrollen, Richtlinien, Integrationen | Connector-Secrets und Low-Level-Auth |
| Azure/Admin | Marketplace, Entra, KI-Anbieter, Lizenzen | Tägliche Fachabläufe |
| Support/Audit | Run ID, Trace ID, effektiver Anbieter | Passwörter, Tokens oder vertrauliche Daten |

## Empfohlene Pfade

| Rolle | Start | Danach |
| --- | --- | --- |
| Neuer Nutzer | [Start](./demarrage.md) | [Navigation](./interface-et-navigation.md), [Dashboard](./tableau-de-bord.md) |
| Contributor | [Wissen](./connaissance-documents-et-imports.md) | [Agenten](./agents.md), [PM-Dokumente](./documents-pm-et-artefacts.md) |
| Project Owner | [Zugriffskontrolle](./controle-acces-et-roles.md) | [Governance](./gouvernance-decisions-et-actions.md) |
| Tenant-Admin | [Azure und Entra](./admin-deploiement-marketplace-et-entra.md) | [KI-Anbieter](./admin-fournisseur-ia.md), [Lizenzen](./admin-licences-plans-et-mises-a-jour.md) |
| Support | [Supportdiagnose](./support-audit-et-diagnostic.md) | [KI-Journal](./journal-ia.md), [FAQ](./maintenance-support-faq.md) |

## Sicherheitsregel

Geben Sie niemals Secrets, Kennwörter, Tokens oder vollständige sensible Payloads in Support-Anfragen weiter.
