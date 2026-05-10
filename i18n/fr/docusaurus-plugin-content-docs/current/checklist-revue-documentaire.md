---
title: Checklist de revue documentaire
slug: /checklist-revue-documentaire
description: Liste de contrôle pour relire la documentation ProPM Agent avant publication client ou release produit.
---

[Accueil](./index.md) · Checklist de revue documentaire

## Objectif

Cette checklist sert à relire la documentation ProPM Agent avant publication client, mise à jour majeure ou changement d’interface.

## Pour qui

| Profil | Usage de cette page |
| --- | --- |
| Responsable documentation | Vérifier structure, liens, terminologie et sécurité documentaire |
| Produit | Confirmer l’alignement avec l’interface et les fonctionnalités disponibles |
| Support | Vérifier que les symptômes fréquents ont une réponse exploitable |
| Avant-vente ou Customer Success | Vérifier que le parcours client Azure est lisible |

## Navigation et audience

| Contrôle | Statut |
| --- | --- |
| Les parcours utilisateur, Project Owner, admin Azure, Portfolio, sécurité et support sont séparés | À vérifier |
| Chaque page d’action indique objectif, audience et prérequis | À vérifier |
| Les pages legacy sont conservées comme transition ou remplacées par des liens spécialisés | À vérifier |
| Les liens internes pointent vers les pages spécialisées récentes | À vérifier |
| La sidebar française reflète la structure publiée | À vérifier |

## Exactitude produit

| Contrôle | Statut |
| --- | --- |
| Les libellés UI visibles sont exacts ou explicités entre parenthèses | À vérifier |
| Les agents standards listés correspondent à l’interface actuelle | À vérifier |
| Les actions `Download`, `Publish` et `Add to knowledge` sont distinguées | À vérifier |
| `approved` et `executed` sont clairement distingués | À vérifier |
| Fournisseur IA sélectionné, configuré et effectif sont distingués | À vérifier |

## Sécurité documentaire

| Contrôle | Statut |
| --- | --- |
| Aucun secret, clé, jeton ou mot de passe n’est présent | À vérifier |
| Les variables d’exploitation et détails infrastructure ne sont pas dans le guide utilisateur final | À vérifier |
| Les payloads bruts ne sont pas copiés dans les parcours métier | À vérifier |
| Les captures ne montrent pas de données client sensibles | À vérifier |
| Les demandes support demandent des IDs utiles sans exposer d’informations sensibles | À vérifier |

## Procédures

| Contrôle | Statut |
| --- | --- |
| Chaque procédure a un résultat attendu | À vérifier |
| Les blocages fréquents ont une cause probable et une action recommandée | À vérifier |
| Les rôles minimums sont compréhensibles en langage métier | À vérifier |
| Les étapes utilisent les libellés UI exacts quand nécessaire | À vérifier |
| La suite logique de chaque page est indiquée | À vérifier |

## Qualité visuelle et accessibilité

| Contrôle | Statut |
| --- | --- |
| Les captures utilisées correspondent à la langue et à l’interface actuelle | À vérifier |
| Chaque image a un texte alternatif utile | À vérifier |
| Les captures annotées ou tables d’annotation expliquent les zones importantes | À vérifier |
| Les tableaux restent lisibles sur écran étroit | À vérifier |

## Validation technique

1. Exécuter `npm run build` dans `propm-agent-docs`.
2. Corriger les liens cassés, images manquantes ou IDs de sidebar absents.
3. Vérifier que la recherche n’indexe pas deux sources françaises divergentes.
4. Vérifier au moins la page d’accueil, la sidebar française, une page utilisateur, une page admin et une page support.
5. Mettre à jour [Release notes](./release-notes.md) si la structure ou les parcours changent.

## Suite

- [Release notes](./release-notes.md)
- [Limitations connues](./limitations-connues.md)
- [Support, audit et diagnostic](./support-audit-et-diagnostic.md)
