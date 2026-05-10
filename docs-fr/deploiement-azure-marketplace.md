---
title: Déploiement Azure Marketplace
slug: /deploiement-azure-marketplace
description: Comprendre le déploiement ProPM Agent depuis Azure Marketplace et les étapes d’administration à suivre après installation.
---

[Accueil](./index.md) · Déploiement Azure Marketplace

## Objectif

Cette page donne une vue courte du déploiement Marketplace. Le parcours administrateur complet est maintenant détaillé dans [Administration Azure et Entra](./admin-deploiement-marketplace-et-entra.md).

## Pour qui

| Profil | Usage de cette page |
| --- | --- |
| Administrateur Azure | Comprendre les étapes de déploiement |
| Administrateur tenant | Préparer l’accès Entra et les premiers administrateurs |
| Utilisateur métier | Non, utiliser plutôt [Démarrage](./demarrage.md) |
| Support | Vérifier les étapes sans demander de variables internes |

## Parcours simplifié

1. Ouvrez l’offre ProPM Agent dans Azure Marketplace.
2. Choisissez l’abonnement, le plan, la région et le groupe de ressources.
3. Renseignez les paramètres demandés par l’assistant Marketplace.
4. Sélectionnez la famille de fournisseur IA initiale.
5. Lancez le déploiement et attendez la fin du provisionnement.
6. Ouvrez l’URL publiée.
7. Finalisez l’accès Entra et les premiers administrateurs.
8. Configurez le fournisseur IA dans l’administration plateforme.
9. Vérifiez les licences, intégrations et mises à jour avant l’ouverture large aux utilisateurs.

## Après le déploiement

| Sujet | Page à suivre |
| --- | --- |
| Accès Entra et URL publiée | [Administration Azure et Entra](./admin-deploiement-marketplace-et-entra.md) |
| Fournisseur IA, Save, Validate, Test, Activate | [Fournisseur IA](./admin-fournisseur-ia.md) |
| Intégrations plateforme | [Intégrations plateforme](./admin-integrations-plateforme.md) |
| Licences, plan Marketplace et updates | [Licences, plans et mises à jour](./admin-licences-plans-et-mises-a-jour.md) |
| Diagnostic client | [Support, audit et diagnostic](./support-audit-et-diagnostic.md) |

## Points d’attention

- Le choix Marketplace du fournisseur IA est une intention initiale.
- Le fournisseur réellement utilisé se vérifie sur un run dans le [Journal IA](./journal-ia.md).
- Les détails d’infrastructure, secrets, variables et endpoints internes ne doivent pas être exposés dans le guide utilisateur final.

## Suite

- Pour le pas à pas admin, ouvrez [Administration Azure et Entra](./admin-deploiement-marketplace-et-entra.md).
- Pour inviter les utilisateurs, envoyez [Démarrage](./demarrage.md).
