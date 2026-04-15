---
title: Projets et espace de travail
slug: /projets-et-espace-de-travail
description: Créer un projet, changer de contexte et utiliser l’espace de travail comme centre de pilotage.
---

[Accueil](./index.md) · [Interface et navigation](./interface-et-navigation.md) · [Gouvernance, décisions et actions](./gouvernance-decisions-et-actions.md)

![Espace de travail projet](/img/screenshots/fr-03-espace-travail.png)

## Rôle de la page Projets

La page **Projets** est le point d’entrée du contexte de travail.

Elle permet de :

- voir les projets accessibles ;
- créer un projet ;
- ouvrir l’espace de travail d’un projet ;
- repartir d’un projet déjà mémorisé par l’application ;
- dans certains contextes observés, importer des projets de démonstration.

## Créer un projet

Le formulaire observé contient les champs suivants :

| Champ | Usage |
| --- | --- |
| ID projet | Identifiant stable du projet |
| Nom | Libellé affiché dans l’interface |
| Description | Résumé du contexte et du périmètre |
| Langue de données par défaut | Langue de travail des données projet |
| Langues de données supplémentaires | Langues complémentaires attendues dans les contenus du projet |

### Recommandations de saisie

- choisissez un **ID projet** lisible et durable ;
- donnez un nom directement compréhensible par tous les contributeurs ;
- utilisez la description pour rappeler le domaine, le périmètre ou le programme ;
- ne confondez pas **langue de données projet** et **langue d’interface**.

## Ouvrir et changer de projet

Un projet peut être ouvert depuis :

- la page **Projets** ;
- le **sélecteur de projet** de la barre supérieure ;
- le contexte récemment mémorisé dans le navigateur.

Lorsque vous changez de projet, les surfaces suivantes se recalent sur ce nouveau contexte :

- Connaissance ;
- Agents ;
- Rapports & artefacts ;
- Journal IA ;
- signaux et réglages de l’espace de travail.

## L’espace de travail : centre de pilotage du projet

L’**Espace de travail** est la page la plus structurante au niveau projet.

Il réunit dans une même surface :

- le **résumé projet** ;
- des raccourcis vers **Agents**, **Rapports & artefacts** et **Journal IA** ;
- une vue de **transparence opérationnelle** ;
- les **signaux** du projet ;
- les onglets de réglage de niveau projet.

## Ce que vous y trouvez immédiatement

### Résumé projet

Le résumé rassemble les informations qui aident à comprendre rapidement où en est le projet et quelles surfaces ouvrir ensuite.

### Transparence opérationnelle

Cette zone met en avant les éléments utiles au suivi : activité récente, état de préparation, points d’attention et liens vers les zones où agir.

### Signaux

Les signaux synthétisent les sujets qui méritent un traitement : fraîcheur, contradictions, blocages ou suites à donner.

## Onglets de niveau projet

Les onglets confirmés dans l’espace de travail sont les suivants :

| Onglet | À quoi il sert |
| --- | --- |
| Agent configuration | Définir les paramètres applicables aux agents pour ce projet |
| Access control | Gérer les rôles, accès et permissions de niveau projet |
| Document categories | Adapter les catégories documentaires du projet |
| Governance policies | Définir les règles de gouvernance projet |
| Project integrations | Activer ou relier les intégrations disponibles pour ce projet |
| Actions & approvals | Gérer les demandes d’action, les validations et le suivi d’exécution |

### Lecture seule ou modification

Selon le rôle de l’utilisateur :

- l’onglet peut être visible mais non modifiable ;
- l’enregistrement peut être bloqué ;
- certaines actions peuvent ne pas être proposées.

## Quand utiliser chaque onglet

### Agent configuration

Utilisez cet onglet lorsque vous devez ajuster le comportement attendu des agents pour un projet donné, sans toucher à la configuration globale de la plateforme.

### Access control

Utilisez-le pour cadrer qui peut consulter, contribuer, configurer ou administrer le projet.

### Document categories

Servez-vous-en pour aligner la classification documentaire avec la réalité du projet : gouvernance, livraison, risques, reporting ou autres catégories prévues dans votre usage.

### Governance policies

Cet onglet sert à fixer les règles qui encadrent les décisions, la publication et certaines actions externes.

### Project integrations

Il permet d’associer au projet uniquement les intégrations prêtes et autorisées.

### Actions & approvals

Il sert à transformer un constat ou une recommandation en action gouvernée, avec validation explicite avant exécution.

## Bonnes pratiques de configuration projet

- ouvrez l’espace de travail dès la création d’un projet ;
- vérifiez les rôles avant de configurer la gouvernance ;
- adaptez les catégories documentaires avant de charger massivement la connaissance ;
- configurez les intégrations de projet seulement après validation en administration de plateforme ;
- utilisez **Actions & approvals** pour les opérations ayant un impact externe.

## Erreurs courantes à éviter

- lancer des agents sans vérifier le projet actif ;
- utiliser un mauvais jeu de langues de données ;
- penser qu’une absence de bouton signifie toujours un incident, alors qu’il peut s’agir d’un manque de droit ;
- créer des actions externes avant d’avoir validé le connecteur correspondant.

## Suite

- [Connaissance et agents](./connaissance-et-agents.md)
- [Gouvernance, décisions et actions](./gouvernance-decisions-et-actions.md)
- [Portefeuille et administration technique](./portefeuille-et-administration-technique.md)
