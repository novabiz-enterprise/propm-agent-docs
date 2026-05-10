---
title: Agents
slug: /agents
description: Choisir un agent standard, lancer un run, lire la réponse et créer un agent personnalisé dans ProPM Agent.
---

[Accueil](./index.md) · Agents

![Agents projet](/img/screenshots/localized/fr/04-agents.jpg)

## Objectif

Cette page explique comment choisir un agent, lancer une exécution, comprendre les sessions locales et créer un agent personnalisé lorsque votre rôle le permet.

## Pour qui

| Profil | Usage de cette page |
| --- | --- |
| Contributeur | Lancer un agent standard et lire la réponse |
| Project Manager | Choisir l’agent adapté au besoin métier |
| Propriétaire de projet | Encadrer les agents personnalisés et leur portée |
| Auditeur | Comprendre qu’un run doit être vérifié dans le Journal IA |

## Avant de commencer

- Un projet actif est sélectionné.
- La connaissance utile au projet est indexée.
- Votre rôle autorise l’exécution d’agents ou la création d’agents personnalisés.

## Choisir un agent standard

| Besoin | Agent à privilégier |
| --- | --- |
| Coordonner une analyse transverse | Orchestrator |
| Relire décisions, politiques ou approbations | Governance |
| Clarifier périmètre, livrables ou exigences | Scope |
| Analyser planning, jalons ou dépendances | Schedule |
| Suivre budget, coûts ou écarts financiers | Finance |
| Préparer communication et parties prenantes | Stakeholders |
| Examiner capacité, charge ou ressources | Resources |
| Identifier risques, problèmes et plans de réponse | Risk |

## Lancer un run d’agent

1. Ouvrez **Agents**.
2. Vérifiez le projet actif.
3. Sélectionnez l’agent adapté.
4. Rédigez une demande précise avec l’objectif, le contexte et le format attendu.
5. Ajoutez les documents ou références utiles si l’interface le propose.
6. Lancez le run.
7. Lisez la réponse, les citations, la fraîcheur et le niveau de confiance.
8. Ouvrez le lien vers le **Journal IA** si vous devez auditer l’exécution.

## Résultat attendu

- Le run produit une réponse structurée ou une synthèse exploitable.
- Les preuves et citations sont visibles lorsque le modèle s’appuie sur la connaissance.
- Les actions aval disponibles sont affichées, par exemple copier, ouvrir l’artefact, créer un Document PM ou consulter le Journal IA.

## Comprendre les sessions locales

Les sessions de chat peuvent être conservées localement dans le navigateur. Elles ne constituent pas une archive centrale partagée. Un changement de navigateur, d’appareil ou de profil peut donc afficher un historique différent.

## Créer un agent personnalisé

1. Ouvrez **Agents**.
2. Sélectionnez l’action de création d’agent personnalisé si elle est disponible.
3. Donnez un nom clair et un objectif métier.
4. Choisissez la portée : projet courant ou `All projects` si votre rôle l’autorise.
5. Décrivez les consignes, sources et limites d’usage.
6. Enregistrez l’agent.
7. Lancez un premier test sur une demande simple.
8. Supprimez ou désactivez l’agent s’il ne doit plus être utilisé.

## Points d’attention

- Une réponse d’agent n’est pas automatiquement un Document PM final.
- Une sortie sans preuve doit être relue avec prudence.
- La saisie vocale est une option de confort dépendante du navigateur.
- Pour une décision externe, relisez les preuves et ouvrez [Documents PM et artefacts](./documents-pm-et-artefacts.md) si un livrable doit être gouverné.

## Si cela ne fonctionne pas

| Symptôme | Cause probable | Action recommandée |
| --- | --- | --- |
| Aucun agent n’est disponible | Rôle insuffisant ou projet non sélectionné | Vérifiez le projet actif et votre rôle |
| La réponse ignore les documents | Documents non indexés ou question trop vague | Vérifiez la connaissance et reformulez |
| Le run échoue | Fournisseur IA non opérationnel ou limite temporaire | Ouvrez [Journal IA](./journal-ia.md) puis contactez le support si nécessaire |
| L’agent personnalisé est invisible | Portée ou droits insuffisants | Vérifiez la portée et les permissions |

## Suite

- Pour interpréter les preuves, ouvrez [Sorties structurées, preuves et fraîcheur](./sorties-contextuelles-preuves-et-fraicheur.md).
- Pour transformer un résultat en livrable, ouvrez [Documents PM et artefacts](./documents-pm-et-artefacts.md).
- Pour auditer le fournisseur effectif, ouvrez [Journal IA](./journal-ia.md).
