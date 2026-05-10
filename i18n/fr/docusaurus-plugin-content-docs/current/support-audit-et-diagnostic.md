---
title: Support, audit et diagnostic
slug: /support-audit-et-diagnostic
description: Collecter les informations utiles au support ProPM Agent sans exposer de secrets ni de détails internes inutiles.
---

[Accueil](./index.md) · Support, audit et diagnostic

## Objectif

Cette page centralise les informations à collecter lorsqu’un utilisateur rencontre un problème : accès, projet, connaissance, agents, fournisseur IA, connecteurs, actions, licences ou mise à jour.

## Pour qui

| Profil | Usage de cette page |
| --- | --- |
| Utilisateur métier | Savoir quoi transmettre au support |
| Project Owner | Vérifier rôle, projet, politique et intégrations |
| Administrateur | Ajouter les contrôles fournisseur, licences ou plateforme |
| Support ou auditeur | Reconstituer le contexte sans demander de secret |

## Avant de commencer

- Reproduisez le problème si possible.
- Notez l’heure approximative et le fuseau horaire.
- Vérifiez le projet actif.
- Préparez une capture sans données sensibles.

## Checklist à transmettre

| Information | Exemple utile |
| --- | --- |
| URL de la page | Page visible au moment de l’erreur |
| Projet actif | Nom du projet concerné |
| Utilisateur concerné | Compte ou groupe, sans mot de passe |
| Heure | Date, heure et fuseau horaire |
| Action tentée | Téléverser, lancer un agent, publier, approuver |
| Message affiché | Texte exact ou capture masquée |
| Identifiants visibles | Run ID, Trace ID, Artifact ID, Action ID si présents |

## Ne jamais transmettre

- Mot de passe, secret, clé API ou jeton.
- Payload complet contenant des données client sensibles.
- Capture contenant des documents confidentiels non masqués.
- Configuration d’infrastructure détaillée sans demande explicite du support.

## Diagnostic rapide par domaine

| Symptôme | Première vérification | Page utile |
| --- | --- | --- |
| Connexion impossible | Tenant, compte Entra, consentement, licence | [Démarrage](./demarrage.md) |
| Aucun projet visible | Projet actif, appartenance, rôle | [Projet actif](./projet-actif-et-creation-projet.md) |
| Document non indexé | Statut Knowledge, format, historique import | [Connaissance](./connaissance-documents-et-imports.md) |
| Agent sans réponse | Run dans Journal IA, fournisseur effectif | [Journal IA](./journal-ia.md) |
| Document PM bloqué | Statut, diff, rôle, gouvernance | [Documents PM](./documents-pm-et-artefacts.md) |
| Action en attente | Approbation, politique, connecteur, mode live | [Actions et approbations](./actions-et-approbations.md) |
| Connecteur bloqué | Plateforme, projet, politique, santé | [Intégrations plateforme](./admin-integrations-plateforme.md) |
| Licence refusée | Seats restants, utilisateur licencié | [Licences et mises à jour](./admin-licences-plans-et-mises-a-jour.md) |

## Utiliser les IDs de support

| ID | Où le trouver | Usage |
| --- | --- | --- |
| Run ID | Journal IA | Retrouver une exécution d’agent |
| Trace ID | Message d’erreur ou détail support | Corréler une erreur technique |
| Artifact ID | Document PM ou artefact | Identifier un livrable |
| Action ID | Actions & approbations | Identifier une action gouvernée |
| Context snapshot ID | Détail de run si affiché | Comprendre le contexte utilisé |

## Lire un payload avancé

Certains écrans d’audit peuvent afficher une activité ou un payload technique. Ne le copiez pas intégralement par défaut. Relevez le statut, les IDs, l’heure, le message d’erreur et le fournisseur effectif. Le support demandera un extrait précis si nécessaire.

## Résultat attendu

Une demande support complète permet de reproduire ou d’analyser l’incident sans exposer de secrets et sans demander à l’utilisateur métier des détails Azure internes.

## Suite

- Pour les runs IA, ouvrez [Journal IA](./journal-ia.md).
- Pour les FAQ courantes, ouvrez [Maintenance, support et FAQ](./maintenance-support-faq.md).
- Pour clarifier un terme, ouvrez [Glossaire](./glossaire.md).
