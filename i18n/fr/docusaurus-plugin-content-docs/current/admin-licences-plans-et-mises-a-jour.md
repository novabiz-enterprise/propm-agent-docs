---
title: Licences, plans et mises à jour
slug: /admin-licences-plans-et-mises-a-jour
description: Gérer les licences utilisateur, rafraîchir le plan Marketplace, changer de plan et vérifier les mises à jour applicatives.
---

[Accueil](./index.md) · Licences, plans et mises à jour

![Vue d’ensemble de l’administration de la plateforme](/img/screenshots/localized/fr/18-platform-administration-overview.jpg)

## Objectif

Cette page explique les opérations administrateur liées au plan Marketplace, aux licences utilisateur, au changement de plan, au rattachement de données existantes et aux mises à jour applicatives.

## Pour qui

| Profil | Usage de cette page |
| --- | --- |
| Administrateur tenant | Lire les sièges commandés, utilisés et restants |
| Administrateur Azure | Changer de plan ou rattacher des données existantes |
| Support | Vérifier un blocage de licence ou update |
| Utilisateur métier | Non, sauf pour comprendre pourquoi l’accès peut être refusé |

## Avant de commencer

- Vous avez accès à **Platform Administration**.
- Azure Marketplace reste la source officielle pour l’achat, le prix et la facturation.
- Les utilisateurs à libérer ou réaffecter sont identifiés.

## Comprendre les compteurs

| Compteur | Signification |
| --- | --- |
| Ordered seats | Capacité commandée côté Marketplace |
| Included seats | Licences incluses dans le plan |
| Supplemental seats | Licences supplémentaires achetées |
| Used seats | Utilisateurs actuellement comptabilisés |
| Remaining seats | Licences encore disponibles |

## Gérer les utilisateurs licenciés

1. Ouvrez **Platform Administration**.
2. Restez dans **Overview**.
3. Ouvrez **Tenant plan and licensed users**.
4. Consultez la liste des utilisateurs connectés/licenciés.
5. Identifiez un utilisateur à libérer si la politique client le permet.
6. Utilisez **Release user** uniquement si l’utilisateur n’a plus besoin d’accès.
7. Vérifiez que le compteur restant est mis à jour.

## Rafraîchir le plan Marketplace

1. Ouvrez **Tenant plan and licensed users**.
2. Sélectionnez **Refresh Marketplace plan**.
3. Attendez la synchronisation.
4. Vérifiez les compteurs affichés.

**Refresh Marketplace plan** synchronise les informations connues. Il n’achète pas de licences, ne change pas le plan et ne modifie pas la facturation.

## Changer de plan ou rattacher des données existantes

1. Ouvrez Azure Marketplace.
2. Créez un nouveau déploiement ProPM Agent avec le plan cible.
3. Choisissez **Attach existing ProPM data resources** si vous devez conserver les données existantes.
4. Sélectionnez les ressources de données prévues par le parcours Azure.
5. Terminez le déploiement.
6. Vérifiez l’accès, les licences, le fournisseur IA et les intégrations avant d’inviter les utilisateurs.

## Vérifier les mises à jour applicatives

1. Ouvrez **Platform Administration**.
2. Sélectionnez **Deployment & Updates** si la surface est disponible.
3. Lancez **Check updates**.
4. Lisez le résultat et les limites affichées.
5. Appliquez une mise à jour uniquement pendant une fenêtre maîtrisée.
6. Conservez les informations de support si un rollback est nécessaire.

## À ne pas exposer aux utilisateurs finaux

Les détails d’infrastructure, d’images applicatives, de variables d’exploitation ou de rollback détaillé relèvent de l’administration avancée ou du support, pas du guide utilisateur métier.

## Si cela ne fonctionne pas

| Symptôme | Cause probable | Action recommandée |
| --- | --- | --- |
| Compteurs inchangés après refresh | Marketplace non encore synchronisé ou aucun changement acheté | Vérifiez Azure Marketplace puis relancez plus tard |
| Utilisateur bloqué malgré licence | Rôle projet ou accès Entra manquant | Vérifiez Entra et Contrôle d’accès |
| Release user indisponible | Droit administrateur insuffisant | Demandez l’action au tenant admin |
| Update bloquée | Fenêtre, santé ou prérequis non satisfaits | Ouvrez [Support, audit et diagnostic](./support-audit-et-diagnostic.md) |

## Suite

- Pour déployer, ouvrez [Administration Azure et Entra](./admin-deploiement-marketplace-et-entra.md).
- Pour vérifier le fournisseur IA après changement, ouvrez [Fournisseur IA](./admin-fournisseur-ia.md).
- Pour les incidents, ouvrez [Support, audit et diagnostic](./support-audit-et-diagnostic.md).
