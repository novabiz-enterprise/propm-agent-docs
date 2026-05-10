---
title: Limitations connues
slug: /limitations-connues
description: Limites fonctionnelles et points d’attention à connaître avant d’utiliser ProPM Agent en contexte client Azure.
---

[Accueil](./index.md) · Limitations connues

## Objectif

Cette page clarifie les limites connues afin d’éviter les attentes incorrectes et les escalades inutiles.

## Limites d’usage utilisateur

| Sujet | Limitation | Contournement ou bonne pratique |
| --- | --- | --- |
| Historique de chat | Peut être local au navigateur | Utiliser Documents PM, artefacts et Journal IA pour la trace partagée |
| Projet actif | Les pages projet changent selon le projet sélectionné | Vérifier la barre supérieure avant chaque action |
| `All projects` | Ne donne pas accès à tous les projets du tenant | Vérifier les accès projet réels |
| Réponse d’agent | N’est pas automatiquement un livrable final | Relire puis passer par Documents PM si nécessaire |
| Confiance IA | N’est pas une approbation | Vérifier preuves, fraîcheur et contradictions |
| Source `unavailable` | N’est pas une preuve exploitable | Réouvrir la source ou demander un réimport |

## Limites d’intégrations

| Sujet | Limitation | Bonne pratique |
| --- | --- | --- |
| Connecteur visible | Peut ne pas être utilisable | Vérifier plateforme, projet, politique, rôle, santé |
| Action approved | Peut ne pas être executed | Vérifier l’exécution dans Actions et Journal IA |
| Mode live | Requis pour créer des objets externes réels | Demander confirmation à l’administrateur |
| Import | Peut finir avant indexation complète | Attendre le statut Indexed |
| Publication | Dépend d’une destination validée | Vérifier le rattachement et la politique |

## Limites administration Azure

| Sujet | Limitation | Bonne pratique |
| --- | --- | --- |
| Fournisseur sélectionné au déploiement | Ne prouve pas le fournisseur utilisé par un run | Vérifier le fournisseur effectif dans Journal IA |
| Refresh Marketplace plan | Synchronise mais n’achète rien | Acheter ou changer le plan dans Azure Marketplace |
| Changement de plan | Peut nécessiter un nouveau déploiement avec données existantes | Suivre [Licences, plans et mises à jour](./admin-licences-plans-et-mises-a-jour.md) |
| Pages admin | Peuvent être visibles en lecture seule | Vérifier rôle administrateur tenant |

## Limites Portfolio

- Un outlier n’est pas un verdict automatique.
- Un signal indisponible indique un manque de preuve, pas une absence de risque.
- Les seuils et poids doivent être adaptés à la revue PMO.
- Un snapshot ancien doit être recalculé avec **Refresh comparison**.

## Suite

- [Support, audit et diagnostic](./support-audit-et-diagnostic.md)
- [Portfolio](./portfolio.md)
- [Fournisseur IA](./admin-fournisseur-ia.md)
