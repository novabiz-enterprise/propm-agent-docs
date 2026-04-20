---
title: Guide utilisateur ProPM Agent
slug: /
description: "Documentation utilisateur française pour ProPM Agent, couvrant l’exécution de projet assistée par IA, la gouvernance, les connecteurs, la traçabilité et le déploiement Azure Marketplace."
---

> **Lecture fortement recommandée**
>
> Pour réussir l’adoption de ProPM Agent dans l’entreprise et exploiter pleinement l’application, il est fortement recommandé de lire ce guide dès le démarrage du projet, puis de s’y référer pendant le déploiement, la mise en place des connecteurs, la gouvernance et l’exploitation quotidienne.

Cette documentation décrit **uniquement** les fonctions observées dans l’application, dans le code, dans la configuration de déploiement et dans les tests automatisés de ProPM Agent.

Elle est organisée pour deux publics :

- **utilisateurs métier** qui travaillent dans un projet ;
- **administrateurs techniques** qui gèrent l’accès, les intégrations, le fournisseur IA, l’abonnement et la supervision.

![Vue d’ensemble de l’application](/img/screenshots/localized/fr/01-dashboard.png)

## Je cherche la bonne page rapidement

| Situation observée | Ouvrez d’abord | Puis |
| --- | --- | --- |
| Je ne peux pas me connecter | [Démarrage](./demarrage.md) | [Maintenance, support et FAQ](./maintenance-support-faq.md) pour distinguer tenant, `redirect URI`, siège ou état de santé |
| Aucun projet n’apparaît | [Démarrage](./demarrage.md) | [Projets et espace de travail](./projets-et-espace-de-travail.md), puis [Maintenance, support et FAQ](./maintenance-support-faq.md) si l’ajout au projet ou le rôle restent douteux |
| Une page reste vide tant qu’aucun projet actif n’est défini | [Démarrage](./demarrage.md) | [Projets et espace de travail](./projets-et-espace-de-travail.md) pour confirmer le contexte projet, puis [Maintenance, support et FAQ](./maintenance-support-faq.md) si l’état vide paraît anormal |
| Une action est visible mais bloquée | [Gouvernance, décisions et actions](./gouvernance-decisions-et-actions.md) | [Connecteurs et intégrations](./connecteurs-jira-et-sharepoint), puis [Portefeuille et administration technique](./portefeuille-et-administration-technique.md) si le blocage vient d’un connecteur, d’un binding ou d’un entitlement |
| Le fournisseur IA ne semble pas opérationnel | [Portefeuille et administration technique](./portefeuille-et-administration-technique.md) | [Maintenance, support et FAQ](./maintenance-support-faq.md) et [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md) pour confirmer le fournisseur effectif |

Si vous cherchez directement une procédure de vérification ou un repère d’exploitation, ouvrez [Maintenance, support et FAQ](./maintenance-support-faq.md).

## Parcours de lecture recommandé

| Si vous cherchez… | Commencez ici |
| --- | --- |
| Déployer une nouvelle instance dans Azure | [Déploiement Azure Marketplace](./deploiement-azure-marketplace.md) |
| Vous connecter, vérifier l’authentification et créer votre premier projet | [Démarrage](./demarrage.md) |
| Comprendre l’interface, la palette, les notifications et la santé | [Interface et navigation](./interface-et-navigation.md) |
| Gérer le contexte projet et les réglages de l’espace de travail | [Projets et espace de travail](./projets-et-espace-de-travail.md) |
| Administrer les membres, rôles, délégations et garde-fous RBAC du projet | [Contrôle d’accès et rôles projet](./controle-acces-et-roles.md) |
| Importer des documents, rechercher des preuves et travailler avec les agents | [Connaissance et agents](./connaissance-et-agents.md) |
| Lire correctement une sortie structurée, ses preuves et sa fraîcheur | [Sorties structurées, preuves et fraîcheur](./sorties-contextuelles-preuves-et-fraicheur.md) |
| Traiter les signaux, la gouvernance et les actions nécessitant approbation | [Gouvernance, décisions et actions](./gouvernance-decisions-et-actions.md) |
| Réviser un artefact, publier un Document PM et enquêter dans le Journal IA | [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md) |
| Comprendre les connecteurs et intégrations prises en charge | [Connecteurs et intégrations](./connecteurs-jira-et-sharepoint) |
| Comparer les projets, gérer les intégrations, l’IA et les sièges | [Portefeuille et administration technique](./portefeuille-et-administration-technique.md) |
| Consulter les procédures support et de vérification | [Maintenance, support et FAQ](./maintenance-support-faq.md) |
| Clarifier les termes produit | [Glossaire](./glossaire.md) |

## Parcours rapide par profil

| Profil | Pages à ouvrir en priorité |
| --- | --- |
| Utilisateur métier / contributeur | [Démarrage](./demarrage.md) → [Interface et navigation](./interface-et-navigation.md) → [Projets et espace de travail](./projets-et-espace-de-travail.md) → [Connaissance et agents](./connaissance-et-agents.md) → [Sorties structurées, preuves et fraîcheur](./sorties-contextuelles-preuves-et-fraicheur.md) |
| Propriétaire de projet | [Démarrage](./demarrage.md) → [Projets et espace de travail](./projets-et-espace-de-travail.md) → [Contrôle d’accès et rôles projet](./controle-acces-et-roles.md) → [Gouvernance, décisions et actions](./gouvernance-decisions-et-actions.md) → [Connecteurs et intégrations](./connecteurs-jira-et-sharepoint) → [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md) |
| Administrateur technique | [Déploiement Azure Marketplace](./deploiement-azure-marketplace.md) → [Démarrage](./demarrage.md) → [Portefeuille et administration technique](./portefeuille-et-administration-technique.md) → [Connecteurs et intégrations](./connecteurs-jira-et-sharepoint) → [Maintenance, support et FAQ](./maintenance-support-faq.md) |
| Support / audit | [Démarrage](./demarrage.md) → [Sorties structurées, preuves et fraîcheur](./sorties-contextuelles-preuves-et-fraicheur.md) → [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md) → [Gouvernance, décisions et actions](./gouvernance-decisions-et-actions.md) → [Glossaire](./glossaire.md) |

## Parcours bout en bout recommandé

Chaîne courte à retenir : **chat local navigateur → run → structured output → artifact → PM Doc → review / diff / lineage → Add to knowledge / Publish**.

Dans un usage réel, le flux le plus fréquent est le suivant :

1. déployer ou récupérer l’URL publiée ;
2. se connecter avec un compte Microsoft Entra ID autorisé ;
3. créer ou sélectionner un **projet actif** ;
4. laisser le **créateur du projet** déléguer les premiers rôles utiles ;
5. charger la **Connaissance** du projet ;
6. lancer un échange dans **Agents** ;
7. relire la **sortie structurée**, ses preuves, sa fraîcheur et sa confiance ;
8. lorsqu’un objet gouverné existe, ouvrir **Rapports & artefacts / Documents PM** pour relire le brouillon, le diff et la lignée ;
9. décider ensuite de **Approve**, **Add to knowledge**, **Download** ou **Publish** selon le besoin et la gouvernance ;
10. traiter les **signaux proactifs**, les **Actions & approbations** et, si besoin, les flux d’intégrations externes ;
11. administrer au niveau plateforme uniquement lorsque le sujet dépasse le projet.

> Une conversation d’agent ne crée pas à elle seule un document final partagé. Le passage vers **artifact** puis **PM Doc** dépend du flux réellement produit et des droits disponibles.

## Définitions rapides à retenir

| Terme | Lecture pratique |
| --- | --- |
| **Projet actif** | projet actuellement appliqué aux pages projet, à la recherche, aux runs et aux revues |
| **All projects** | portée d’un agent personnalisé visible dans tous les projets accessibles par **le même compte** ; ce n’est ni un super-projet ni un portefeuille fusionné |
| **Binding** | rattachement opérationnel entre une définition plateforme et un projet donné |
| **Entitlement** | capacité réellement couverte par le plan / l’abonnement pour utiliser un connecteur, un fournisseur ou un flux |
| **Structured output** | sortie structurée produite par un run d’agent, distincte d’un document final publié |
| **Lineage / lignée** | liens de traçabilité entre run, context snapshot, structured output, artefact, version et PM Doc |
| **Context snapshot** | capture du contexte projet / documentaire utilisé pendant le run |
| **Effective AI provider** | fournisseur réellement utilisé au runtime pour un run donné |

## Convention de libellés

Lorsque la plateforme expose une traduction française, cette documentation privilégie ce libellé :

- **Espace de travail** ;
- **Connaissance** ;
- **Documents PM** ;
- **Journal IA** ;
- **Contrôle d’accès** ;
- **Politiques de gouvernance** ;
- **Intégrations du projet** ;
- **Intégrations de la plateforme** ;
- **Paramètres du fournisseur IA** ;
- **Actions & approbations**.

Quand un libellé anglais reste utile pour lever une ambiguïté, il est cité ponctuellement en code, par exemple `Trace ID`, `All projects` ou `OpenAI-compatible`.

## Ce que couvre ProPM Agent

À partir des comportements vérifiés, ProPM Agent organise le travail autour du **contexte projet** :

1. vous ouvrez ou créez un projet ;
2. vous alimentez la **Connaissance** ;
3. vous interrogez les **Agents** ;
4. vous relisez les **sorties structurées** ;
5. vous transformez certains résultats en **Documents PM** et en artefacts ;
6. vous vérifiez la **traçabilité** dans le **Journal IA** ;
7. vous traitez les **signaux**, les **digests**, les **brouillons** et les **actions gouvernées** ;
8. vous utilisez les **connecteurs** et les **intégrations** uniquement lorsqu’ils sont validés et bindés au projet ;
9. les administrateurs pilotent la couche technique dans **Administration de la plateforme**.

## Architecture fonctionnelle observée

| Domaine | Ce qu’il permet |
| --- | --- |
| Tableau de bord | Voir l’état général, les métriques, les points d’attention et les prochaines étapes |
| Projets | Créer, ouvrir et mémoriser le contexte projet |
| Espace de travail | Regrouper résumé projet, transparence opérationnelle, signaux, raccourcis et réglages projet |
| Contrôle d’accès | Gérer membres, rôles standards, rôles personnalisés et permissions de projet |
| Connaissance | Rechercher, téléverser, importer, relire les métadonnées et suivre l’historique d’ingestion |
| Agents | Choisir un agent, lancer un échange, utiliser la saisie vocale dans **Agents** si l’environnement l’expose encore, et gérer des agents personnalisés selon les droits |
| Sorties structurées | Lire résumé, preuves, fraîcheur, confiance, propositions d’artefacts et suites à donner |
| Documents PM / Rapports & artefacts | Réviser, comparer, approuver, publier, télécharger et réinjecter des livrables dans la connaissance |
| Journal IA | Inspecter les runs, l’activité, les IDs techniques et la transparence du runtime IA |
| Connecteurs et intégrations | Séparer définitions plateforme, bindings projet, politiques d’action et exécution gouvernée |
| Centre de commande portefeuille | Comparer plusieurs projets avec signaux, poids, seuils et cohortes sauvegardées |
| Administration de la plateforme | Gérer intégrations, fournisseur IA, abonnement, sièges et activité plateforme |

## Ce qui distingue l’application

Les éléments suivants sont explicitement visibles dans l’interface, les données seedées ou les tests :

- **sorties structurées** avec sections, preuves, fraîcheur, confiance et suites à décider ;
- **lignée** entre un run, une sortie structurée, un artefact, une version d’artefact et un Document PM ;
- **signaux proactifs** pour les contradictions, la fraîcheur, les blocages, les relances et certaines pressions portefeuille ;
- **chaîne documentaire gouvernée** depuis un résultat d’agent vers les téléchargements **DOCX / XLSX**, la publication et la réinjection dans la connaissance ;
- **connecteurs gouvernés** séparés entre **Intégrations de la plateforme**, **Intégrations du projet** et **Actions & approbations** ;
- **transparence runtime IA** avec fournisseur effectif, fournisseur sélectionné au déploiement et famille de modèle.

## Publics et responsabilités

| Profil | Besoins principaux |
| --- | --- |
| Chef de projet / PMO | Contexte projet, agents, livrables, signaux, gouvernance et traçabilité |
| Contributeur | Recherche dans la connaissance, génération de contenu, revue des sorties et suivi des runs |
| Propriétaire du projet | Paramétrage projet, délégation des rôles, catégories de documents, intégrations projet et politiques de gouvernance |
| Administrateur technique / abonnement | Déploiement, authentification, intégrations plateforme, fournisseur IA, abonnement, sièges et supervision |

## Captures d’écran et schémas

Les captures de l’application ont été générées sur l’environnement observé. Lorsque certaines captures disponibles montraient surtout un état de chargement ou des données de démonstration incomplètes, cette version française privilégie aussi des **schémas explicatifs** pour garder une lecture exploitable avant traduction et publication finale.

Le contenu de démonstration peut aussi varier selon l’environnement : certains projets n’exposent pas toujours les mêmes documents seedés, rapports seedés ou exemples visibles dans la documentation.

## Ce qui reste local au navigateur et ce qui est partagé

Deux logiques coexistent dans le produit :

- certaines aides de confort, comme le **projet courant mémorisé** ou la **continuité de chat sauvegardée**, restent locales au navigateur ;
- les données projet, documents, artefacts, approbations et publications relèvent de la **plateforme partagée**.

Il ne faut donc pas interpréter un historique de chat visible dans un navigateur comme une archive centrale commune à tous les utilisateurs.

## Support et contact

Utilisez le bon canal selon la nature de la demande :

| Type de demande | À transmettre en priorité |
| --- | --- |
| Support technique | URL du déploiement, projet concerné, situation observée, heure approximative, `Trace ID` si visible |
| Question d’accès, de tenant ou d’identité | tenant attendu, compte utilisé, URL réellement ouverte, message Microsoft ou capture d’écran |
| Question commerciale ou abonnement | contexte du compte, plan concerné, nombre de sièges ou besoin de capacité |

Toutes ces demandes peuvent être envoyées au point de contact suivant :

- **NovaBiz**
- 131 Continental Dr, Suite 305
- Newark, DE 19713 · États-Unis
- [support@navabiz.pro](mailto:support@navabiz.pro)

## Suite

- [Démarrage](./demarrage.md)
- [Projets et espace de travail](./projets-et-espace-de-travail.md)
- [Connecteurs et intégrations](./connecteurs-jira-et-sharepoint)
- [Glossaire](./glossaire.md)
