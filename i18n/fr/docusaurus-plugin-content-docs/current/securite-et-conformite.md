---
title: Sécurité et conformité
slug: /securite-et-conformite
description: Comprendre les principes de sécurité, confidentialité, traçabilité et usage responsable de l’IA dans ProPM Agent.
---

[Accueil](./index.md) · Sécurité et conformité

## Objectif

Cette page explique les principes de sécurité et conformité à connaître comme utilisateur, Project Owner, administrateur tenant ou support client.

## Pour qui

| Profil | Usage de cette page |
| --- | --- |
| Utilisateur métier | Comprendre les bonnes pratiques de partage, preuves et IA |
| Project Owner | Encadrer accès, rôles, gouvernance et publications |
| Administrateur tenant | Vérifier identité, licences, fournisseur IA et intégrations |
| Support ou auditeur | Collecter les traces utiles sans exposer d’informations sensibles |

## Identité et accès

- La connexion s’appuie sur Microsoft Entra ID dans les environnements Azure.
- L’accès à un projet dépend de l’appartenance au projet et du rôle attribué.
- Un utilisateur peut être connecté à l’application sans voir de projet si aucun accès projet ne lui a été accordé.
- Les rôles projet contrôlent les actions : lecture, agents, Documents PM, membres, gouvernance, actions et audit.

## Isolation tenant et projet

- Le tenant définit le périmètre organisationnel.
- Le projet actif limite les documents, runs, signaux, actions et Documents PM affichés.
- `All projects` ne contourne pas les droits : il reste limité aux projets déjà accessibles par le même compte.
- Portfolio compare uniquement les projets accessibles par l’utilisateur.

## Données et confidentialité

- Ne téléversez que les documents autorisés pour le projet.
- Masquez les données sensibles dans les captures support.
- Ne copiez jamais de secret, clé, jeton ou mot de passe dans une note, un prompt, une action ou un ticket.
- Vérifiez la destination avant **Publish** ou toute action externe.

## Traçabilité et audit

| Élément | Où le vérifier | Usage |
| --- | --- | --- |
| Run | [Journal IA](./journal-ia.md) | Retrouver une exécution IA |
| Fournisseur IA effectif | [Journal IA](./journal-ia.md) | Confirmer le fournisseur réellement utilisé |
| Document PM | [Documents PM et artefacts](./documents-pm-et-artefacts.md) | Relire version, diff, lignée et actions aval |
| Action gouvernée | [Actions et approbations](./actions-et-approbations.md) | Voir proposition, approbation et exécution |
| Trace ID | [Support, audit et diagnostic](./support-audit-et-diagnostic.md) | Corréler un incident avec le support |

## Usage responsable de l’IA

- Relisez toujours les sorties IA avant décision ou publication.
- Vérifiez preuves, fraîcheur, contradictions et informations manquantes.
- Ne traitez pas la confiance comme une approbation automatique.
- Utilisez les Documents PM pour les livrables qui doivent être versionnés, approuvés ou publiés.
- Escaladez les contradictions importantes au Project Owner ou au PMO.

## Connecteurs et actions externes

Une action externe réelle exige généralement : intégration plateforme validée, rattachement projet, politique compatible, rôle suffisant, santé correcte et mode live actif si applicable. Une action visible dans l’interface ne garantit pas qu’un ticket, message ou fichier externe sera créé.

## Checklist avant publication ou diffusion externe

1. Le projet actif est correct.
2. Les preuves sont identifiables et assez fraîches.
3. Les contradictions sont arbitrées.
4. Le Document PM est relu et versionné.
5. La politique autorise l’action ou l’approbation est obtenue.
6. La destination externe est correcte.
7. Les informations sensibles non nécessaires sont retirées.

## Suite

- [Sorties structurées, preuves et fraîcheur](./sorties-contextuelles-preuves-et-fraicheur.md)
- [Documents PM et artefacts](./documents-pm-et-artefacts.md)
- [Actions et approbations](./actions-et-approbations.md)
- [Support, audit et diagnostic](./support-audit-et-diagnostic.md)
