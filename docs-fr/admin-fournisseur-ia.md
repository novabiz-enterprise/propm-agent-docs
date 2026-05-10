---
title: Fournisseur IA
slug: /admin-fournisseur-ia
description: Configurer, valider, tester et activer le fournisseur IA dans l’administration plateforme ProPM Agent.
---

[Accueil](./index.md) · Fournisseur IA

![Administration de la plateforme](/img/screenshots/localized/fr/18-platform-administration-overview.jpg)

![Schéma fournisseur IA : type fournisseur, configuration, Save, Validate, Test, Activate et vérification dans le Journal IA](/img/annotated/fr/fournisseur-ia-annote.svg)

## Objectif

Cette page explique comment administrer le fournisseur IA de ProPM Agent et distinguer le fournisseur sélectionné au déploiement du fournisseur IA effectif observé dans un run.

## Pour qui

| Profil | Usage de cette page |
| --- | --- |
| Administrateur tenant | Configurer et activer le fournisseur IA |
| Administrateur Azure | Fournir les informations Azure OpenAI ou fournisseur compatible |
| Support | Diagnostiquer une erreur de validation ou de test |
| Utilisateur métier | Non, sauf pour savoir qui contacter |

## Avant de commencer

- Vous avez accès à **Platform Administration**.
- Vous connaissez le fournisseur à utiliser : Azure OpenAI, OpenRouter, OpenAI-compatible ou autre fournisseur exposé par votre environnement.
- Les secrets sont disponibles dans les outils d’administration sécurisés, pas dans cette documentation.

## Comprendre les quatre actions

| Action | Rôle | Échec fréquent |
| --- | --- | --- |
| Save | Enregistre la configuration saisie | Champ obligatoire manquant |
| Validate | Vérifie la cohérence de configuration | Endpoint, modèle ou authentification invalide |
| Test | Lance une vérification fonctionnelle | Fournisseur inaccessible ou déploiement absent |
| Activate | Rend la configuration active pour les runs | Validation ou test non réussi |

## Configurer le fournisseur

1. Ouvrez **Platform Administration**.
2. Sélectionnez **AI Provider Settings** ou **Paramètres du fournisseur IA**.
3. Choisissez le type de fournisseur.
4. Renseignez les champs demandés par l’interface.
5. Enregistrez avec **Save**.
6. Lancez **Validate**.
7. Lancez **Test**.
8. Activez avec **Activate** lorsque les contrôles sont réussis.
9. Lancez un run simple puis vérifiez le fournisseur effectif dans [Journal IA](./journal-ia.md).

## Azure OpenAI

Pour Azure OpenAI, l’administrateur doit vérifier les éléments fonctionnels suivants dans l’interface : endpoint, modèle ou deployment, version d’API, mode d’authentification et disponibilité réelle du déploiement côté Azure. Les clés, secrets et références sécurisées ne doivent pas être copiés dans les tickets utilisateurs.

## Fournisseur sélectionné vs fournisseur effectif

| Situation | Lecture |
| --- | --- |
| Déploiement Marketplace | Choix initial de famille fournisseur |
| AI Provider Settings | Configuration actuellement enregistrée et activée |
| Journal IA | Preuve du fournisseur réellement utilisé par un run |

Le Journal IA est la référence pour l’audit d’un résultat produit.

## Erreurs fréquentes

| Symptôme | Cause probable | Action recommandée |
| --- | --- | --- |
| Validate échoue | Champ incohérent ou fournisseur inaccessible | Corrigez la configuration puis relancez Validate |
| Test échoue | Modèle ou deployment indisponible | Vérifiez le fournisseur côté Azure ou plateforme externe |
| Activate est indisponible | Validation ou test non terminé | Terminez les étapes précédentes |
| Le run utilise un autre fournisseur | Configuration non activée, cache ou bascule temporaire | Vérifiez l’historique puis le Journal IA |

## Suite

- Pour confirmer un run réel, ouvrez [Journal IA](./journal-ia.md).
- Pour l’administration des connecteurs, ouvrez [Intégrations plateforme](./admin-integrations-plateforme.md).
- Pour un incident, ouvrez [Support, audit et diagnostic](./support-audit-et-diagnostic.md).
