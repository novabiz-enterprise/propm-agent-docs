---
title: Administration Azure et Entra
slug: /admin-deploiement-marketplace-et-entra
description: Déployer ProPM Agent depuis Azure Marketplace et finaliser l’accès Entra sans exposer les détails techniques aux utilisateurs finaux.
---

[Accueil](./index.md) · Administration Azure et Entra

## Objectif

Cette page s’adresse aux administrateurs Azure et tenant. Elle explique le parcours de déploiement Marketplace, la finalisation de l’accès Entra et les contrôles fonctionnels à réaliser avant d’inviter les utilisateurs.

## Pour qui

| Profil | Usage de cette page |
| --- | --- |
| Administrateur Azure | Déployer la solution depuis Marketplace |
| Administrateur tenant | Valider l’accès Entra et les groupes autorisés |
| Support client | Vérifier les prérequis sans exposer de secret |
| Utilisateur métier | Non, sauf pour comprendre qui contacter |

## Avant de commencer

- Vous disposez des droits Azure nécessaires sur l’abonnement cible.
- Vous connaissez le tenant Entra et les groupes qui administreront ProPM Agent.
- Vous avez choisi la région, le plan Marketplace et la famille de fournisseur IA initiale.
- Les informations sensibles restent dans Azure ou l’administration sécurisée.

## Déployer depuis Azure Marketplace

1. Ouvrez l’offre ProPM Agent dans Azure Marketplace.
2. Sélectionnez le plan et l’abonnement.
3. Renseignez le groupe de ressources, la région et les paramètres demandés.
4. Déclarez les groupes ou administrateurs Entra prévus.
5. Choisissez la famille de fournisseur IA initiale.
6. Lancez le déploiement.
7. Attendez la fin du provisionnement.
8. Récupérez l’URL publiée de l’application.

## Finaliser l’accès Entra

1. Ouvrez l’URL de ProPM Agent avec un compte administrateur autorisé.
2. Validez le consentement Entra si l’organisation le demande.
3. Vérifiez que les administrateurs attendus accèdent à **Platform Administration**.
4. Invitez ensuite les premiers propriétaires de projet.
5. Demandez aux utilisateurs finaux de suivre [Démarrage](./demarrage.md), pas cette page.

## Contrôles post-déploiement

| Contrôle | Résultat attendu |
| --- | --- |
| Application accessible | La page de connexion puis l’accueil s’ouvrent |
| Entra opérationnel | Le compte autorisé se connecte sans boucle |
| Administration visible | Les administrateurs voient Platform Administration |
| Fournisseur IA à finaliser | Les paramètres IA sont visibles mais doivent être validés/testés |
| Licences lisibles | Le plan et les licences apparaissent dans l’administration |

## Ce qui relève d’autres pages

| Sujet | Page |
| --- | --- |
| Save, Validate, Test, Activate du fournisseur IA | [Fournisseur IA](./admin-fournisseur-ia.md) |
| Connecteurs et fournisseurs d’ingestion | [Intégrations plateforme](./admin-integrations-plateforme.md) |
| Seats, licences et Refresh Marketplace plan | [Licences, plans et mises à jour](./admin-licences-plans-et-mises-a-jour.md) |
| Diagnostic avancé | [Support, audit et diagnostic](./support-audit-et-diagnostic.md) |

## Points d’attention

- Le fournisseur choisi pendant le déploiement est une intention initiale, pas la preuve du fournisseur réellement utilisé.
- Les utilisateurs métier n’ont pas besoin de connaître les variables Azure ou détails d’infrastructure.
- Ne copiez jamais de secret, clé, jeton ou configuration confidentielle dans une documentation ou une demande support.

## Suite

- Configurez le fournisseur IA dans [Fournisseur IA](./admin-fournisseur-ia.md).
- Vérifiez les licences dans [Licences, plans et mises à jour](./admin-licences-plans-et-mises-a-jour.md).
- Préparez les intégrations dans [Intégrations plateforme](./admin-integrations-plateforme.md).
