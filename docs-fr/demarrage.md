---
title: Démarrage
slug: /demarrage
description: Se connecter à ProPM Agent, comprendre les états vides et rejoindre le bon projet.
---

[Accueil](./index.md) · Démarrage

![Répertoire des projets](/img/screenshots/localized/fr/07-projects-directory.jpg)

## Objectif

Cette page aide un nouvel utilisateur à ouvrir ProPM Agent, se connecter avec Microsoft Entra ID, sélectionner le projet actif et reconnaître les états vides courants.

## Pour qui

| Profil | Usage de cette page |
| --- | --- |
| Utilisateur métier | Première connexion et sélection du projet |
| Project Manager | Vérifier l’accès au bon projet |
| Propriétaire de projet | Orienter les nouveaux membres |
| Administrateur Azure | Lire seulement le renvoi vers la page admin si l’URL ou Entra n’est pas prêt |

## Avant de commencer

- Vous avez reçu l’URL ProPM Agent de votre organisation.
- Vous disposez d’un compte Microsoft Entra ID autorisé.
- Vous devez être membre d’au moins un projet ou disposer du droit de créer un projet.
- Vous utilisez un navigateur moderne.

Si l’application n’est pas encore déployée ou si l’accès Entra n’est pas finalisé, l’administrateur doit d’abord suivre [Administration Azure et Entra](./admin-deploiement-marketplace-et-entra.md).

## Première connexion

1. Ouvrez l’URL ProPM Agent fournie par votre organisation.
2. Sélectionnez **Sign in** ou le bouton de connexion Microsoft.
3. Choisissez le compte professionnel attendu.
4. Acceptez le consentement si votre organisation l’autorise et si l’écran le demande.
5. Attendez le retour dans ProPM Agent.
6. Vérifiez que votre nom ou profil apparaît dans la barre supérieure.
7. Sélectionnez un projet actif si l’application le demande.

## Sélectionner ou créer le premier projet

1. Ouvrez le sélecteur de projet ou la page **Projects**.
2. Sélectionnez le projet fourni par votre équipe.
3. Si vous êtes autorisé à créer un projet, utilisez **Create project**.
4. Vérifiez ensuite le projet actif dans la barre supérieure.
5. Ouvrez [Tableau de bord](./tableau-de-bord.md) pour confirmer que les données du projet s’affichent.

## États vides courants

| État | Signification | Action recommandée |
| --- | --- | --- |
| Aucun projet disponible | Votre compte n’est pas encore membre d’un projet | Demandez au Project Owner de vous ajouter |
| Aucun projet actif | Vous êtes connecté mais aucun contexte n’est sélectionné | Sélectionnez un projet |
| Page vide avec message de rôle | Votre rôle ne permet pas l’action | Demandez le rôle adapté |
| Connexion en boucle | Consentement, tenant ou configuration Entra à vérifier | Contactez l’administrateur tenant |
| Boutons grisés | Rôle, politique ou intégration insuffisants | Ouvrez [Contrôle d’accès et rôles](./controle-acces-et-roles.md) |

## Résultat attendu

- Vous êtes connecté à ProPM Agent.
- Un projet actif est visible.
- Le tableau de bord charge les données du projet.
- Vous savez qui contacter si l’accès ou le rôle manque.

## Si cela ne fonctionne pas

| Symptôme | Cause probable | Action recommandée |
| --- | --- | --- |
| URL inaccessible | Déploiement ou réseau non prêt | Contactez l’administrateur Azure |
| Microsoft refuse la connexion | Compte, tenant ou consentement incorrect | Contactez l’administrateur tenant |
| Aucun projet n’apparaît | Vous n’avez pas encore été ajouté | Contactez le Project Owner |
| Une exécution IA ne démarre pas | Fournisseur IA ou santé plateforme à vérifier | Ouvrez [Support, audit et diagnostic](./support-audit-et-diagnostic.md) |

## Suite

- Pour découvrir l’interface, ouvrez [Interface et navigation](./interface-et-navigation.md).
- Pour choisir le contexte de travail, ouvrez [Projet actif et création de projet](./projet-actif-et-creation-projet.md).
- Pour un incident, ouvrez [Support, audit et diagnostic](./support-audit-et-diagnostic.md).
