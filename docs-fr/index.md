---
title: Guide utilisateur ProPM Agent
slug: /
description: Documentation utilisateur et administrateur pour ProPM Agent.
---

Cette documentation décrit **uniquement** les fonctions observées dans l’application, dans le code, dans la configuration de déploiement et dans les tests automatisés de ProPM Agent.

Elle est organisée pour deux publics :

- **utilisateurs métier** qui travaillent dans un projet ;
- **administrateurs techniques** qui gèrent l’accès, les intégrations, le fournisseur IA, l’abonnement et la supervision.

![Vue d’ensemble de l’application](/img/screenshots/fr-01-tableau-de-bord.png)

## Parcours de lecture recommandé

| Si vous cherchez… | Commencez ici |
| --- | --- |
| Déployer une nouvelle instance dans Azure | [Déploiement Azure Marketplace](./deploiement-azure-marketplace.md) |
| Vous connecter, vérifier l’authentification et créer votre premier projet | [Démarrage](./demarrage.md) |
| Comprendre l’interface, la palette, les notifications et la santé | [Interface et navigation](./interface-et-navigation.md) |
| Gérer le contexte projet et les réglages de l’espace de travail | [Projets et espace de travail](./projets-et-espace-de-travail.md) |
| Administrer les membres, rôles et garde-fous RBAC du projet | [Contrôle d’accès et rôles projet](./controle-acces-et-roles.md) |
| Importer des documents, rechercher des preuves et travailler avec les agents | [Connaissance et agents](./connaissance-et-agents.md) |
| Lire correctement une sortie structurée, ses preuves et sa fraîcheur | [Sorties structurées, preuves et fraîcheur](./sorties-contextuelles-preuves-et-fraicheur.md) |
| Traiter les signaux, la gouvernance et les actions nécessitant approbation | [Gouvernance, décisions et actions](./gouvernance-decisions-et-actions.md) |
| Réviser un artefact, publier un PM Doc et enquêter dans le Journal IA | [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md) |
| Comparer les projets, gérer les intégrations, l’IA et les sièges | [Portefeuille et administration technique](./portefeuille-et-administration-technique.md) |
| Diagnostiquer les incidents courants et consulter les procédures support | [Maintenance, support et FAQ](./maintenance-support-faq.md) |
| Clarifier les termes produit | [Glossaire](./glossaire.md) |

## Parcours rapide par profil

| Profil | Pages à ouvrir en priorité |
| --- | --- |
| Utilisateur métier / contributeur | [Démarrage](./demarrage.md) → [Interface et navigation](./interface-et-navigation.md) → [Projets et espace de travail](./projets-et-espace-de-travail.md) → [Connaissance et agents](./connaissance-et-agents.md) → [Sorties structurées, preuves et fraîcheur](./sorties-contextuelles-preuves-et-fraicheur.md) |
| Propriétaire de projet | [Démarrage](./demarrage.md) → [Projets et espace de travail](./projets-et-espace-de-travail.md) → [Contrôle d’accès et rôles projet](./controle-acces-et-roles.md) → [Gouvernance, décisions et actions](./gouvernance-decisions-et-actions.md) → [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md) |
| Administrateur technique | [Déploiement Azure Marketplace](./deploiement-azure-marketplace.md) → [Démarrage](./demarrage.md) → [Portefeuille et administration technique](./portefeuille-et-administration-technique.md) → [Maintenance, support et FAQ](./maintenance-support-faq.md) |
| Support / audit | [Démarrage](./demarrage.md) → [Sorties structurées, preuves et fraîcheur](./sorties-contextuelles-preuves-et-fraicheur.md) → [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md) → [Maintenance, support et FAQ](./maintenance-support-faq.md) → [Glossaire](./glossaire.md) |

## Parcours bout en bout recommandé

Dans un usage réel, le flux le plus fréquent est le suivant :

1. déployer ou récupérer l’URL publiée ;
2. se connecter avec un compte Microsoft Entra ID autorisé ;
3. créer ou sélectionner un **projet actif** ;
4. charger la **Connaissance** du projet ;
5. lancer un échange dans **Agents** ;
6. relire la **sortie structurée**, ses preuves, sa fraîcheur et sa confiance ;
7. transformer le résultat en **artefact** ou **PM Doc** ;
8. vérifier la lignée et les détails techniques dans le **Journal IA** ;
9. traiter les **signaux**, les **actions gouvernées** et, si besoin, la comparaison **portefeuille** ;
10. administrer au niveau plateforme uniquement lorsque le sujet dépasse le projet.

## Convention de libellés

L’interface peut afficher des libellés anglais. Dans cette documentation, les équivalences les plus utiles sont :

- **Espace de travail** = `Workspace`
- **Connaissance** = `Knowledge`
- **Rapports & artefacts** = `Reports` / `PM Docs` selon le contexte
- **Journal IA** = `AI Log`
- **Administration de la plateforme** = `Platform Administration`
- **Contrôle d’accès** = `Access control`

## Ce que couvre ProPM Agent

À partir des comportements vérifiés, ProPM Agent organise le travail autour du **contexte projet** :

1. vous ouvrez ou créez un projet ;
2. vous alimentez la **Connaissance** ;
3. vous interrogez les **Agents** ;
4. vous relisez les **sorties structurées** ;
5. vous transformez ces résultats en **Rapports & artefacts** ;
6. vous vérifiez la **traçabilité** dans le **Journal IA** ;
7. vous traitez les **signaux** et les **actions gouvernées** ;
8. les administrateurs pilotent la couche technique dans **Administration de la plateforme**.

## Architecture fonctionnelle observée

| Domaine | Ce qu’il permet |
| --- | --- |
| Tableau de bord | Voir l’état général, les métriques, les points d’attention et les prochaines étapes |
| Projets | Créer, ouvrir et mémoriser le contexte projet |
| Espace de travail | Regrouper résumé projet, transparence opérationnelle, signaux, raccourcis et réglages projet |
| Contrôle d’accès | Gérer membres, rôles standards, rôles personnalisés et permissions de projet |
| Connaissance | Rechercher, téléverser, importer, relire les métadonnées et suivre l’historique d’ingestion |
| Agents | Choisir un agent, lancer un échange, utiliser la voix si le navigateur le permet et gérer des agents personnalisés selon les droits |
| Sorties structurées | Lire résumé, preuves, fraîcheur, confiance, propositions d’artefacts et suites à donner |
| Rapports & artefacts | Réviser, comparer, approuver, publier, télécharger et réinjecter des PM Docs dans la connaissance |
| Journal IA | Inspecter les runs, l’activité, les IDs techniques et la transparence du runtime IA |
| Centre de commande portefeuille | Comparer plusieurs projets avec signaux, poids, seuils et cohortes sauvegardées |
| Administration de la plateforme | Gérer intégrations, fournisseur IA, abonnement, sièges et activité plateforme |

## Ce qui distingue l’application

Les éléments suivants sont explicitement visibles dans l’interface ou les tests :

- **sorties structurées** avec sections, preuves, fraîcheur, confiance et suites à décider ;
- **lignée** entre un run, une sortie structurée, un artefact, une version d’artefact et un PM Doc ;
- **signaux proactifs** pour les contradictions, la fraîcheur, les blocages et les relances ;
- **actions gouvernées** avec proposition, approbation, exécution et traçabilité ;
- **séparation nette** entre définitions techniques de niveau plateforme et bindings d’usage au niveau projet ;
- **transparence runtime IA** avec fournisseur effectif, fournisseur sélectionné au déploiement et famille de modèle.

## Publics et responsabilités

| Profil | Besoins principaux |
| --- | --- |
| Chef de projet / PMO | Contexte projet, agents, livrables, signaux, gouvernance et traçabilité |
| Contributeur | Recherche dans la connaissance, génération de contenu, revue des sorties et suivi des runs |
| Propriétaire de projet | Paramétrage projet, rôles, catégories de documents, intégrations projet et politiques de gouvernance |
| Administrateur technique / abonnement | Déploiement, authentification, intégrations plateforme, fournisseur IA, abonnement, sièges et supervision |

## Captures d’écran

Les captures de l’application ont été générées sur l’environnement observé. La page de déploiement utilise en plus les captures Azure Portal fournies pour illustrer l’installation.

## Support et contact

Pour toute demande de support ou toute question commerciale, contactez-nous à :

- **NovaBiz**
- 131 Continental Dr, Suite 305
- Newark, DE 19713 · États-Unis
- [support@navabiz.pro](mailto:support@navabiz.pro)

## Suite

- [Démarrage](./demarrage.md)
- [Sorties structurées, preuves et fraîcheur](./sorties-contextuelles-preuves-et-fraicheur.md)
- [Contrôle d’accès et rôles projet](./controle-acces-et-roles.md)
- [Glossaire](./glossaire.md)
