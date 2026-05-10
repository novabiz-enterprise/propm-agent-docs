---
title: Glossaire
pagination_label: Glossaire
slug: /glossaire
description: Définitions harmonisées des termes ProPM Agent, avec convention français et libellés UI.
---

[Accueil](./index.md) · Glossaire

## Convention de libellés

Le glossaire utilise le terme français principal, puis le libellé exact de l’interface lorsqu’il évite une ambiguïté. Exemple : **Ajouter à la connaissance** (`Add to knowledge`) ou **Fournisseur IA effectif** (`Effective AI Provider`). Les termes marqués **support/admin** ne sont pas nécessaires au parcours utilisateur quotidien.

## A

**Action gouvernée**

Action préparée dans ProPM Agent puis soumise à rôle, politique, approbation ou connecteur avant exécution.

**Add to knowledge / Ajouter à la connaissance**

Action qui réinjecte un Document PM relu dans la connaissance du projet pour les recherches et agents futurs.

**Agent**

Assistant spécialisé qui travaille dans le contexte du projet actif et peut produire une sortie structurée avec preuves.

**All projects / Tous les projets**

Portée limitée aux projets auxquels le même compte a déjà accès. Ce n’est pas un super-projet.

**Approvals / approbations**

Étape de validation humaine avant exécution ou diffusion d’une action gouvernée.

**Artefact**

Objet gouverné issu d’un run ou d’une revue, utilisé pour version, diff, lignée ou Document PM.

## C

**Centre de commande portefeuille / Portfolio**

Surface de comparaison multi-projets. Le terme principal de cette documentation est **Portfolio** ; **Centre de commande portefeuille** désigne la même surface lorsque le libellé UI le montre.

**Citation**

Référence affichée avec une réponse, un résultat de recherche ou un run pour justifier le contenu.

**Cohorte**

Configuration sauvegardée de projets, signaux, poids et seuils dans Portfolio.

**Confiance**

Indice de solidité d’une sortie structurée. Elle doit toujours être lue avec les preuves et la fraîcheur.

**Connaissance**

Espace projet où les documents sont téléversés, importés, indexés, recherchés et utilisés par les agents.

**Context snapshot / capture de contexte**

Terme **support/admin**. Capture du contexte utilisé pendant un run, utile pour audit et diagnostic.

## D

**Diff**

Comparaison entre deux versions d’artefact ou de Document PM.

**Digest**

Synthèse de signaux pouvant servir de base à un brouillon de notification ou à une revue projet.

**Document PM / PM Doc**

Livrable projet relu, versionné et gouverné, pouvant être téléchargé, publié ou ajouté à la connaissance.

**Download / Télécharger**

Action qui produit une copie locale d’un document ou artefact.

## E

**Effective AI Provider / fournisseur IA effectif**

Fournisseur réellement utilisé par un run donné. La valeur de référence se lit dans le Journal IA.

**Entitlement**

Terme **support/admin**. Blocage opérationnel lié à licence, rôle, politique, intégration, santé ou configuration. Ce n’est pas un niveau fonctionnel de plan Marketplace.

**Evidence gap / manque de preuve**

Signal indiquant que les preuves sont insuffisantes ou indisponibles pour conclure.

## F

**Fraîcheur**

État temporel d’une preuve : `fresh`, `aging`, `stale`, `conflicting` ou `unavailable`.

**Fournisseur d’ingestion**

Source approuvée qui importe du contenu vers la connaissance projet.

**Fournisseur IA sélectionné au déploiement**

Intention initiale choisie pendant Azure Marketplace. Elle peut différer du fournisseur IA effectif observé dans un run.

## H

**Health / santé**

État de disponibilité d’un composant, connecteur, fournisseur ou service visible dans l’interface.

## J

**Journal IA / AI Log**

Page qui expose les runs, activités, statuts, fournisseur IA effectif et identifiants utiles à l’audit.

## L

**Lecture seule**

État où une page reste visible mais non modifiable.

**Lignée / lineage**

Chaîne de traçabilité entre run, sortie structurée, artefact, version, Document PM et preuves.

**LLM deployment name**

Terme **support/admin**. Nom de déploiement modèle utilisé dans certains paramétrages fournisseur IA.

## P

**Palette de commandes**

Accès rapide aux pages et actions, généralement via `Ctrl+K` ou `Cmd+K`.

**Pending approval / en attente d’approbation**

État d’une action ou version qui attend une validation humaine.

**Projet actif**

Projet actuellement appliqué aux pages Tableau de bord, Connaissance, Agents, Documents PM, Signaux, Actions et Journal IA.

**Publish / Publier**

Action qui diffuse un Document PM ou artefact vers une destination gouvernée, par exemple SharePoint.

## R

**Rattachement projet (`binding`)**

Lien qui rend une intégration plateforme réellement utilisable dans un projet donné.

**Readiness / préparation**

Niveau de préparation d’un projet, d’une intégration ou d’un flux gouverné.

**Refresh Marketplace plan**

Action admin qui synchronise les informations Marketplace connues par ProPM Agent. Elle n’achète pas de licence et ne change pas de plan.

**Run**

Exécution enregistrée d’un agent ou d’un traitement IA.

## S

**Siège / seat**

Unité de licence utilisateur dans les déploiements qui limitent l’accès par capacité commandée.

**Signal**

Élément proactif qui attire l’attention sur un risque, une contradiction, un blocage ou une opportunité.

**Source label**

Libellé lisible de provenance d’une preuve ou d’un document.

**Source system**

Système source affiché avec une preuve ou un résultat.

**Structured output / sortie structurée**

Résultat formaté d’un run pouvant inclure résumé, constats, décisions, preuves, confiance et actions.

## T

**Tableau de bord**

Page de synthèse du projet actif : métriques, activité récente, signaux, actions et raccourcis.

**Trace ID**

Terme **support/admin**. Identifiant utile pour corréler un incident, un run ou un événement.

## V

**Validate / validation**

Étape admin qui vérifie la cohérence d’une configuration avant test ou activation.

**Version d’artefact**

État historisé d’un artefact utilisé pour diff, approbation, publication et lignée.

## W

**Watchpoint / point de vigilance**

Point d’attention signalé dans une sortie structurée, souvent lié à un risque ou une contradiction.

## Suite

- [Publics, rôles et périmètres](./publics-roles-et-perimetres.md)
- [Support, audit et diagnostic](./support-audit-et-diagnostic.md)
- [Sécurité et conformité](./securite-et-conformite.md)
