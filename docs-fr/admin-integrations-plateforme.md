---
title: Intégrations plateforme
slug: /admin-integrations-plateforme
description: Définir, valider, désactiver et rattacher les connecteurs et fournisseurs d’ingestion ProPM Agent.
---

[Accueil](./index.md) · Intégrations plateforme

## Objectif

Cette page explique la différence entre intégration plateforme, rattachement projet, politique de gouvernance et usage réel par les utilisateurs.

## Pour qui

| Profil | Usage de cette page |
| --- | --- |
| Administrateur plateforme | Définir et valider les intégrations |
| Propriétaire de projet | Demander ou vérifier un rattachement projet |
| Project Manager | Comprendre pourquoi un connecteur visible peut être inutilisable |
| Support | Identifier le niveau où l’intégration est bloquée |

## Avant de commencer

- Vous avez accès à **Platform Administration** pour la configuration globale.
- Le projet concerné existe et son propriétaire est identifié.
- Les secrets et informations d’authentification sont gérés dans les outils sécurisés prévus.

## Les quatre niveaux à vérifier

| Niveau | Question à poser |
| --- | --- |
| Plateforme | Le connecteur ou fournisseur d’ingestion est-il défini et validé ? |
| Projet | L’intégration est-elle rattachée au projet actif ? |
| Gouvernance | La politique autorise-t-elle l’action ou impose-t-elle une approbation ? |
| Exécution | La santé, le mode live et les droits permettent-ils l’action réelle ? |

## Définir et valider une intégration

1. Ouvrez **Platform Administration**.
2. Sélectionnez **Platform Integrations**.
3. Choisissez **Execution Connectors** ou **Ingestion Providers**.
4. Créez ou ouvrez la définition d’intégration.
5. Renseignez les champs demandés par l’interface.
6. Enregistrez la définition.
7. Lancez la validation.
8. Consultez l’historique de validation.
9. Désactivez l’intégration si elle ne doit plus être proposée.

## Rattacher à un projet

1. Ouvrez le projet concerné.
2. Accédez aux intégrations projet.
3. Sélectionnez l’intégration validée côté plateforme.
4. Choisissez **Bind to project** ou le libellé équivalent.
5. Validez le rattachement.
6. Vérifiez la préparation, la santé et les actions disponibles.

## Table de readiness

| État | Signification | Action recommandée |
| --- | --- | --- |
| Ready | L’intégration est préparée pour l’usage prévu | Tester le parcours métier |
| Healthy | La vérification de santé est positive | Autoriser l’usage selon la politique |
| Not configured | La définition est incomplète ou absente | Compléter la configuration plateforme |
| Not bound | Le projet n’utilise pas encore l’intégration | Rattacher l’intégration au projet |
| Blocked | Rôle, politique, santé ou mode live bloque l’usage | Lire le détail puis corriger le niveau concerné |

## Points d’attention

- Un connecteur visible n’est pas forcément utilisable.
- Une définition plateforme ne suffit pas pour agir dans un projet.
- Une action externe ne crée réellement un objet que si le mode live est activé, validé et autorisé.
- Les champs techniques et secrets ne doivent pas être documentés dans le guide utilisateur final.

## Suite

- Pour l’usage métier des connecteurs, ouvrez [Connecteurs et intégrations](./connecteurs-jira-et-sharepoint.md).
- Pour proposer ou approuver une action, ouvrez [Actions et approbations](./actions-et-approbations.md).
- Pour diagnostiquer un blocage, ouvrez [Support, audit et diagnostic](./support-audit-et-diagnostic.md).
