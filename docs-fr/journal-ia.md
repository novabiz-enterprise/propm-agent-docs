---
title: Journal IA
slug: /journal-ia
description: Utiliser le Journal IA pour retrouver les runs, vérifier le fournisseur IA effectif et préparer une demande support.
---

[Accueil](./index.md) · Journal IA

![Journal IA et runs](/img/screenshots/localized/fr/09-ai-log-runs.jpg)

## Objectif

Le Journal IA sert à vérifier ce qui s’est réellement passé pendant une exécution : run, activité, fournisseur IA effectif, horodatage, utilisateur, projet, statut et identifiants utiles au support.

## Pour qui

| Profil | Usage de cette page |
| --- | --- |
| Utilisateur avancé | Retrouver une exécution récente |
| Project Manager | Vérifier l’origine d’un résultat ou d’un Document PM |
| Auditeur | Confirmer le fournisseur IA effectif et les traces |
| Support | Collecter les identifiants nécessaires sans exposer de secret |

## Avant de commencer

- Un projet actif est sélectionné si l’analyse porte sur un projet.
- Vous connaissez l’heure approximative, l’agent, le document ou l’action concernée.
- Votre rôle permet d’ouvrir le Journal IA ou les détails de run.

## Retrouver un run

1. Ouvrez **AI Log** ou **Journal IA**.
2. Sélectionnez l’onglet **Runs**.
3. Filtrez par projet, statut, agent, utilisateur ou période si les filtres sont disponibles.
4. Ouvrez le run concerné.
5. Vérifiez le statut, l’heure, le fournisseur IA effectif et les liens vers l’artefact ou le Document PM.

## Vérifier le fournisseur IA effectif

1. Ouvrez le détail du run.
2. Recherchez le champ **Effective AI Provider** ou son équivalent.
3. Comparez-le au fournisseur attendu par l’administrateur.
4. Notez toute divergence visible.
5. En cas d’écart répété, demandez à l’administrateur de vérifier [Fournisseur IA](./admin-fournisseur-ia.md).

## Lire l’activité

1. Ouvrez l’onglet **Activity** si disponible.
2. Repérez les événements liés au run.
3. Relevez uniquement les identifiants utiles : Run ID, Trace ID, Artifact ID ou Context snapshot ID si affichés.
4. Ne copiez pas de payload complet si l’interface contient des données sensibles.
5. Fournissez une capture ciblée au support si nécessaire.

## Fournisseur sélectionné vs fournisseur effectif

| Terme | Signification |
| --- | --- |
| Fournisseur sélectionné au déploiement | Intention initiale renseignée pendant Azure Marketplace |
| Fournisseur configuré | Paramétrage actuel dans l’administration plateforme |
| Fournisseur IA effectif | Fournisseur réellement utilisé par un run donné |

Une divergence peut être normale pendant une migration, un test, une désactivation temporaire ou une erreur de configuration. Le run réel fait foi pour l’audit.

## Si cela ne fonctionne pas

| Symptôme | Cause probable | Action recommandée |
| --- | --- | --- |
| Aucun run trouvé | Mauvais projet, période ou filtre | Vérifiez le projet actif et élargissez la période |
| Le run est en erreur | Fournisseur IA, droits ou données d’entrée | Relevez le message et le Run ID |
| Le fournisseur effectif est inattendu | Configuration modifiée ou non activée | Ouvrez [Fournisseur IA](./admin-fournisseur-ia.md) |
| Les détails sont trop techniques | Page support/audit avancée nécessaire | Ouvrez [Support, audit et diagnostic](./support-audit-et-diagnostic.md) |

## Suite

- Pour les informations à fournir au support, ouvrez [Support, audit et diagnostic](./support-audit-et-diagnostic.md).
- Pour gérer le fournisseur IA, ouvrez [Fournisseur IA](./admin-fournisseur-ia.md).
- Pour comprendre un Document PM issu du run, ouvrez [Documents PM et artefacts](./documents-pm-et-artefacts.md).
