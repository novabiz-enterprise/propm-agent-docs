---
title: Publics, rôles et périmètres
slug: /publics-roles-et-perimetres
description: Identifier le bon parcours documentaire selon le rôle utilisateur, projet, administrateur Azure ou support.
---

[Accueil](./index.md) · Publics, rôles et périmètres

## Objectif

Cette page sert de point d’entrée éditorial. Elle explique quel parcours lire selon votre responsabilité dans ProPM Agent et sépare clairement l’usage quotidien, l’administration projet, l’administration Azure et le support.

## Pour qui

| Profil | Usage de cette page |
| --- | --- |
| Utilisateur métier | Comprendre quelles pages lire pour travailler dans un projet sans détails Azure internes |
| Propriétaire de projet | Identifier les pages de configuration projet, rôles, connaissance, gouvernance et intégrations |
| Administrateur Azure ou tenant | Accéder aux pages de déploiement, fournisseur IA, licences, intégrations plateforme et mises à jour |
| Support ou auditeur | Retrouver les pages de diagnostic, Journal IA, traces et informations à fournir |

## Les quatre niveaux de documentation

| Niveau | À utiliser pour | À éviter dans ce niveau |
| --- | --- | --- |
| Utilisateur final | Se connecter, choisir un projet, lire le tableau de bord, chercher une preuve, lancer un agent, gérer un Document PM | Variables Azure, secrets, charges JSON, détails d’infrastructure |
| Propriétaire de projet | Membres, rôles, catégories, intégrations projet, politiques, actions et approbations | Authentification détaillée des connecteurs et secrets |
| Administrateur Azure et plateforme | Marketplace, Entra, fournisseur IA, licences, intégrations plateforme, mises à jour | Procédures métier quotidiennes trop détaillées |
| Support et audit | Run ID, Trace ID, fournisseur IA effectif, activité, symptômes et escalade | Secrets, clés, endpoints internes ou payloads sensibles |

## Parcours recommandé par rôle

| Rôle | Commencer par | Puis |
| --- | --- | --- |
| Nouvel utilisateur | [Démarrage](./demarrage.md) | [Interface et navigation](./interface-et-navigation.md), [Tableau de bord](./tableau-de-bord.md), [Projet actif](./projet-actif-et-creation-projet.md) |
| Contributeur projet | [Connaissance, documents et imports](./connaissance-documents-et-imports.md) | [Agents](./agents.md), [Sorties structurées](./sorties-contextuelles-preuves-et-fraicheur.md), [Documents PM](./documents-pm-et-artefacts.md) |
| Project Manager | [Projet actif](./projet-actif-et-creation-projet.md) | [Signaux et notifications](./signaux-et-notifications.md), [Actions et approbations](./actions-et-approbations.md) |
| Project Owner | [Contrôle d’accès et rôles](./controle-acces-et-roles.md) | [Projets et espace de travail](./projets-et-espace-de-travail.md), [Gouvernance, décisions et actions](./gouvernance-decisions-et-actions.md) |
| PMO ou direction | [Portfolio](./portfolio.md) | [Journal IA](./journal-ia.md) pour la traçabilité si nécessaire |
| Administrateur tenant | [Administration Azure et Entra](./admin-deploiement-marketplace-et-entra.md) | [Fournisseur IA](./admin-fournisseur-ia.md), [Licences et mises à jour](./admin-licences-plans-et-mises-a-jour.md) |
| Support client | [Support, audit et diagnostic](./support-audit-et-diagnostic.md) | [Journal IA](./journal-ia.md), [Maintenance, support et FAQ](./maintenance-support-faq.md) |

## Convention sur les libellés UI

Cette documentation utilise le terme français lorsqu’il est clair, puis ajoute le libellé exact de l’interface si celui-ci reste en anglais. Exemple : **Ajouter à la connaissance** (`Add to knowledge`), **Tous les projets** (`All projects`), **Fournisseur IA effectif** (`Effective AI Provider`).

## Règles de sécurité documentaire

- Ne copiez jamais de secret, clé, jeton ou mot de passe dans une demande support.
- Ne partagez pas de payload complet si une capture ciblée suffit.
- Masquez les noms de personnes, documents sensibles et données client dans les captures.
- Fournissez plutôt l’URL de la page, l’heure, le projet, le message visible et les identifiants de support affichés.

## Suite

- Pour l’usage quotidien, ouvrez [Tableau de bord](./tableau-de-bord.md).
- Pour administrer Azure, ouvrez [Administration Azure et Entra](./admin-deploiement-marketplace-et-entra.md).
- Pour un incident, ouvrez [Support, audit et diagnostic](./support-audit-et-diagnostic.md).
