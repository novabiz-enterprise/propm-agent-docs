---
title: Gouvernance, décisions et actions
slug: /gouvernance-decisions-et-actions
description: Comprendre les signaux, configurer les politiques de gouvernance et utiliser Actions & approbations pas à pas avec des exemples débutant-friendly.
---

[Accueil](./index.md) · [Projets et espace de travail](./projets-et-espace-de-travail.md) · [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md)

![Proactivité, digests et actions gouvernées](/img/diagrams/fr/proactivite-et-gouvernance.svg)

## Objectif

Cette page explique, de manière simple, comment ProPM Agent passe :

1. d’un **signal** détecté ;
2. à une **décision** ;
3. puis à une **action gouvernée** ;
4. éventuellement soumise à **approbation** ;
5. avant d’être **exécutée** et **tracée**.

Le but est qu’un utilisateur débutant comprenne clairement :

- ce qu’est une **politique de gouvernance** ;
- ce que signifient **`allow`**, **`require_approval`** et **`deny`** ;
- ce que signifient **`observe`**, **`draft`**, **`propose`** et **`execute`** ;
- comment utiliser **Actions & approbations** pas à pas ;
- pourquoi une action peut être visible mais bloquée.

## Vue très simple du flux

Dans ProPM Agent, le chemin normal est le suivant :

1. un **signal** attire l’attention ;
2. l’équipe le relit ;
3. la **gouvernance** décide ce que chaque rôle a le droit de faire ;
4. si une sortie externe est nécessaire, une **action** est créée ;
5. si le projet l’exige, l’action passe en **approbation** ;
6. l’action est ensuite **exécutée** ou **rejetée** ;
7. la trace reste visible dans l’**activité** et le **Journal IA**.

## Partie 1 — Comprendre les signaux

Un **signal** est une alerte structurée qui dit : **« ce sujet mérite d’être regardé »**.

### Exemples de signaux

Un signal peut remonter :

- une **fraîcheur** des sources insuffisante ;
- une **contradiction** entre plusieurs preuves ;
- un **blocage** projet ;
- une suite à donner qui mérite une **notification**, une **décision** ou une **action externe**.

### Ce que l’utilisateur voit généralement sur une carte de signal

Une carte de signal peut afficher :

- un **titre** ;
- un **résumé** ;
- une **explication** ;
- une **sévérité** ;
- un **statut** ;
- un **mode** ;
- un nombre de **preuves** ou de redéclenchements ;
- des actions comme **Create draft**, **Snooze 24h** ou **Dismiss** selon le rôle.

### Pas à pas conseillé pour traiter un signal

Quand vous ouvrez un signal, gardez cet ordre :

1. lisez le **résumé** ;
2. relisez ensuite l’**explication** ;
3. vérifiez les **preuves** et la **fraîcheur** ;
4. décidez si le sujet demande seulement une surveillance, un brouillon ou une action réelle ;
5. si une sortie externe devient nécessaire, passez à **Actions & approbations**.

### Statuts utiles d’un signal

| Statut | Ce que cela veut dire |
| --- | --- |
| `open` | le sujet reste actif et demande encore de l’attention |
| `snoozed` | le sujet est mis en pause temporairement |
| `dismissed` | le sujet est retiré de la file active |
| `resolved` | le sujet est considéré comme traité |

### Modes utiles d’un signal

| Mode | Lecture simple |
| --- | --- |
| `inform` | le signal informe, sans exiger d’action immédiate |
| `suggest` | le signal suggère une prochaine étape |
| `draft` | le signal est déjà orienté vers un brouillon ou une préparation |
| `request_approval` | le signal appelle une revue gouvernée ou une approbation |

## Partie 2 — Politiques de gouvernance

## Qu’est-ce qu’une politique de gouvernance ?

Une **politique de gouvernance** est une règle qui répond à la question :

**« Qui a le droit de faire quoi, sur quel connecteur, et avec quel niveau de contrôle ? »**

Autrement dit, la gouvernance empêche qu’une action externe parte sans cadre clair.

### Ce qu’une politique décide

Une politique répond en général à quatre questions :

1. **Qui ?** — quel rôle est concerné ;
2. **Sur quoi ?** — quel connecteur, quel type d’action ou quelle destination est concerné ;
3. **Jusqu’où ?** — simple observation, brouillon, proposition ou exécution ;
4. **Avec quel effet ?** — autorisé, autorisé avec approbation, ou refusé.

### Exemple très simple

Une politique peut vouloir dire :

- le **Contributeur** peut préparer un brouillon Teams ;
- le **Chef de projet** peut proposer une publication SharePoint ;
- le **Propriétaire du projet** doit approuver avant exécution ;
- personne d’autre ne peut exécuter directement cette publication.

## Comprendre les niveaux : `observe`, `draft`, `propose`, `execute`

Le **niveau** décrit jusqu’où un rôle peut aller dans le flux.

| Niveau | Ce que l’utilisateur peut faire | Ce qu’il ne peut pas encore faire | Exemple simple |
| --- | --- | --- | --- |
| `observe` | voir l’information, suivre le sujet, consulter la file | créer une action ou un brouillon | un lecteur suit les signaux sans préparer de sortie |
| `draft` | préparer un brouillon, un texte, une intention d’action | soumettre officiellement l’action à la file | un contributeur prépare un message Teams mais ne le propose pas |
| `propose` | soumettre une vraie demande d’action dans la file gouvernée | exécuter directement l’action | un chef de projet propose un ticket Jira |
| `execute` | lancer l’exécution réelle si les autres conditions sont remplies | contourner la politique ou les approbations imposées | un propriétaire de projet publie un artefact vers SharePoint |

### Lecture très simple

- **`observe`** = je regarde ;
- **`draft`** = je prépare ;
- **`propose`** = je demande officiellement ;
- **`execute`** = je lance réellement.

## Comprendre les effets : `allow`, `require_approval`, `deny`

L’**effet** décrit ce que la plateforme fait quand un rôle atteint ce niveau.

| Effet | Ce que cela veut dire | Conséquence pratique |
| --- | --- | --- |
| `allow` | l’action est autorisée à ce niveau | le flux peut avancer sans étape d’approbation supplémentaire, si le reste est prêt |
| `require_approval` | l’action est possible, mais doit être approuvée | la file d’approbation devient obligatoire avant exécution |
| `deny` | l’action est interdite pour ce rôle ou ce périmètre | l’utilisateur ne peut pas aller plus loin sur ce flux |

### Lecture très simple

- **`allow`** = oui ;
- **`require_approval`** = oui, mais après validation humaine ;
- **`deny`** = non.

## Comment lire une ligne de politique

Prenons cette lecture :

- **Rôle** : Chef de projet
- **Connecteur** : SharePoint publish
- **Niveau** : `execute`
- **Effet** : `require_approval`

Cela veut dire :

- le Chef de projet peut aller jusqu’à la demande d’exécution ;
- mais la publication ne part pas immédiatement ;
- une approbation est nécessaire avant l’exécution réelle.

## Exemples concrets de politiques

| Cas métier | Rôle | Niveau recommandé | Effet recommandé | Pourquoi |
| --- | --- | --- | --- | --- |
| publication d’un compte rendu vers SharePoint | Chef de projet | `execute` | `require_approval` | la sortie est externe et doit être relue |
| création d’un ticket Jira depuis un blocage | Chef de projet | `propose` | `allow` ou `require_approval` | le projet peut demander un ticket sans forcément l’ouvrir automatiquement |
| message Teams interne de faible risque | Contributeur | `execute` ou `propose` | `allow` | communication rapide à faible impact |
| e-mail Outlook à des sponsors | Contributeur | `propose` | `require_approval` | communication plus sensible et plus formelle |
| webhook vers un outil tiers | Propriétaire du projet | `execute` | `require_approval` | sortie technique à garder très contrôlée |
| connecteur non prêt ou non autorisé | tous sauf admin | `observe` ou aucun usage | `deny` | on évite tout départ accidentel |

## Pas à pas pour configurer une politique de gouvernance

Suivez cet ordre simple.

### Étape 1 — Ouvrir la bonne surface

Depuis l’**Espace de travail** du projet, ouvrez **Politiques de gouvernance**.

### Étape 2 — Choisir le flux à contrôler

Demandez-vous d’abord :

- s’agit-il d’une **publication** ;
- d’un **ticket** ;
- d’un **message** ;
- d’un **webhook** ;
- d’une autre action externe ?

### Étape 3 — Choisir le rôle concerné

Définissez ensuite quel rôle peut agir :

- **Contributeur** ;
- **Chef de projet** ;
- **Propriétaire du projet** ;
- ou autre rôle présent dans votre configuration.

### Étape 4 — Choisir le niveau d’action

Décidez si ce rôle doit seulement :

- observer ;
- préparer un brouillon ;
- proposer ;
- ou exécuter.

### Étape 5 — Choisir l’effet

Décidez si ce niveau doit être :

- autorisé directement (`allow`) ;
- autorisé avec approbation (`require_approval`) ;
- ou refusé (`deny`).

### Étape 6 — Vérifier le connecteur ou la destination concernée

Une bonne politique ne suffit pas si le connecteur :

- n’est pas prêt techniquement ;
- n’est pas ouvert au projet ;
- ou n’a pas la bonne destination d’artefact.

### Étape 7 — Tester avec un rôle non administrateur

Le meilleur contrôle est pratique :

1. connectez-vous avec un rôle métier réaliste ;
2. ouvrez **Actions & approbations** ;
3. vérifiez ce qui est visible, autorisé ou bloqué ;
4. ajustez la politique si le comportement n’est pas celui attendu.

![Politiques de gouvernance du projet](/img/screenshots/localized/fr/14-governance-policies.png)

## Règles simples pour bien configurer la gouvernance

- utilisez **`allow`** sur **`execute`** seulement pour les flux faibles en risque ;
- utilisez **`require_approval`** dès qu’un contenu sort du projet ou modifie un système externe ;
- utilisez **`deny`** quand le connecteur n’est pas prêt, pas autorisé ou trop sensible ;
- gardez les règles cohérentes avec les rôles réellement attribués ;
- testez toujours un cas réel avant de considérer la politique comme prête.

## Erreurs fréquentes à éviter

| Erreur | Bonne lecture |
| --- | --- |
| « Je vois le connecteur, donc je peux l’utiliser » | faux : la visibilité ne garantit pas l’autorisation ni la santé technique |
| « `propose` veut dire que l’action part » | faux : `propose` veut dire que la demande entre dans la file gouvernée |
| « `execute` veut dire sans contrôle » | faux : `execute` peut encore être combiné avec `require_approval` |
| « `deny` veut dire panne » | faux : `deny` est souvent une décision de gouvernance normale |

## Partie 3 — Actions & approbations

L’écran **Actions & approbations** sert à transformer une intention en **action gouvernée réelle**.

### Quand tout est correctement prêt, que devrait-on voir ?

Dans un cas nominal, l’utilisateur autorisé retrouve en général :

- au moins un **type d’action** pertinent ;
- une **option d’exécution compatible et saine** ;
- un **binding projet** réellement actif ;
- une **policy** qui autorise la proposition ou route vers l’approbation ;
- une file où les demandes passent ensuite en **pending approval**, **approved**, **executed** ou **rejected** selon le cas.

Si un de ces maillons manque, l’écran peut paraître vide, incomplet ou purement informatif sans qu’il s’agisse forcément d’une panne.

## Ce que l’utilisateur voit dans cet écran

Un utilisateur y retrouve généralement :

- un formulaire **Proposer une action gouvernée** ;
- le choix du **type d’action** ;
- le choix du **connecteur d’exécution** ou de l’**option d’exécution** ;
- un résumé de **readiness** indiquant ce qui est disponible ou bloqué ;
- des champs comme **titre**, **rationale**, **destination**, **message**, **ticket description** ;
- une **file d’approbation et d’exécution** avec les demandes déjà soumises.

## Pas à pas — créer une action gouvernée

### Étape 1 — Ouvrir l’écran

Dans l’**Espace de travail**, ouvrez **Actions & approbations**.

### Étape 2 — Choisir le type d’action

Sélectionnez d’abord l’intention métier. Les types d’action visibles incluent notamment :

- **Publish artifact to SharePoint** ;
- **Send Teams message** ;
- **Send Outlook message** ;
- **Create Jira ticket** ;
- **Create Azure DevOps ticket** ;
- **Webhook** selon la configuration du tenant.

### Étape 3 — Vérifier l’option d’exécution compatible

L’interface recherche ensuite les **options d’exécution compatibles**.

Choisissez une option :

- **saine** ;
- **autorisée** ;
- réellement ouverte à votre projet.

Si aucune option saine n’apparaît, la vérification porte souvent sur :

- du connecteur lui-même ;
- de son état de santé ;
- du binding projet ;
- de la politique ;
- ou de votre permission.

### Étape 4 — Lire la readiness

La zone **Execution readiness** sert à vérifier que vous n’êtes pas en train de préparer une action théorique seulement.

En pratique :

- **available / healthy** = option exploitable ;
- **blocked by health** = connecteur à vérifier côté plateforme ;
- **blocked by policy** = le cadre de gouvernance bloque encore le passage ;
- **blocked by entitlement** = le plan ou la capacité autorisée ne couvre pas ce flux ;
- aucune option visible = connecteur compatible absent, binding projet manquant ou option non ouverte à votre rôle.

### Lecture pédagogique d’un écran qui semble vide

Si `Actions & approbations` ne propose rien d’exécutable, commencez par cette table très simple :

| Ce que vous voyez | Raison dominante possible | Réflexe utile |
| --- | --- | --- |
| aucun connecteur sélectionnable | aucun connecteur compatible et sain n’est prêt | vérifier **Intégrations du projet** puis **Administration de la plateforme** |
| action visible mais bouton bloqué | permission, policy ou approbation requise | contrôler le rôle puis la gouvernance |
| file visible mais rien ne part | la demande reste en attente d’approbation ou d’exécution aval | relire le statut réel de la file |
| connecteur présent mais inutilisable | binding projet, health ou entitlement insuffisant | vérifier la chaîne complète plateforme → projet → policy |

Rappelez-vous enfin qu’un statut **approved** ne veut pas dire **executed** : l’accord existe, mais l’exécution réelle peut encore rester en attente.
- **blocked by entitlement** = capacité non incluse dans le plan ou non ouverte ;
- **blocked by policy** = gouvernance du projet restrictive ;
- **blocked by permission** = votre rôle ne suffit pas.

### Étape 5 — Renseigner le titre et la justification

Complétez ensuite :

- un **titre clair** ;
- une **justification** courte mais utile ;
- les champs spécifiques au type d’action choisi.

La justification doit répondre à deux questions :

1. **Pourquoi cette action est-elle nécessaire ?**
2. **Sur quelles preuves ou décisions s’appuie-t-elle ?**

### Étape 6 — Compléter les champs métier

Les champs changent selon le type d’action.

| Type d’action | Champs fréquemment attendus |
| --- | --- |
| Publication SharePoint | titre, justification, `artifact ID`, destination, profil de rendu, format |
| Message Teams | titre, justification, corps du message |
| Message Outlook | titre, justification, destinataires, objet, corps du message |
| Ticket Jira | titre, justification, description du ticket, éventuellement clé projet / board |
| Ticket Azure DevOps | titre, justification, description, type de ticket selon le connecteur |
| Webhook | titre, justification et données utiles au système cible |

### Étape 7 — Proposer l’action

Une fois les champs remplis, soumettez la demande.

À ce stade, l’action n’est pas forcément déjà partie. Elle peut d’abord entrer dans la **file d’approbation**.

### Étape 8 — Revue par l’approbateur

Si la politique impose `require_approval`, un approbateur doit relire :

- le titre ;
- la justification ;
- le connecteur utilisé ;
- la charge utile ou le détail métier ;
- l’éventuel artefact ou brouillon lié.

### Étape 9 — Approbation, rejet ou exécution

Selon la politique et le rôle de l’approbateur, la demande peut être :

- **approuvée** ;
- **rejetée** ;
- puis **exécutée** si tout est prêt.

### Étape 10 — Vérifier la trace finale

Après exécution, vérifiez :

- la file d’actions ;
- l’activité projet ;
- le **Trace ID** s’il est affiché ;
- le **Journal IA** si le flux s’y reflète ;
- la présence de l’artefact, du ticket ou du message côté outil cible.

## Comment lire les statuts d’action

| Statut | Ce que cela veut dire |
| --- | --- |
| `draft` | la demande est encore préparatoire |
| `pending approval` | l’approbation est attendue avant suite réelle |
| `approved` | la demande a été acceptée |
| `executed` | l’action a réellement été lancée |
| `rejected` | la demande a été refusée |
| `failed` | l’action a été lancée mais n’a pas abouti correctement |
| `cancelled` | la demande a été annulée |

## Exemple pas à pas — publication d’un artefact vers SharePoint

### Situation

L’équipe a relu un **brief hebdomadaire** et veut le publier dans SharePoint.

### Parcours

1. ouvrir **Actions & approbations** ;
2. choisir **Publish artifact to SharePoint** ;
3. sélectionner une option **SharePoint publish** saine ;
4. renseigner le **titre** de l’action ;
5. ajouter une **justification**, par exemple : « version relue et approuvée pour diffusion hebdomadaire » ;
6. renseigner l’**artifact ID** ;
7. choisir la **destination SharePoint** ;
8. choisir le **profil de rendu** ou le **format** si demandé ;
9. proposer l’action ;
10. si la politique l’exige, attendre l’approbation ;
11. exécuter ;
12. contrôler que l’artefact est bien publié côté SharePoint et tracé dans ProPM Agent.

## Exemple pas à pas — créer un ticket Jira

### Situation

Un signal remonte un blocage récurrent avec impact planning.

### Parcours

1. ouvrir **Actions & approbations** ;
2. choisir **Create Jira ticket** ;
3. sélectionner un connecteur Jira disponible ;
4. saisir un titre clair, par exemple : « Bloquage fournisseur sur lot critique » ;
5. compléter la **description** du ticket ;
6. ajouter la **justification** et les preuves utiles ;
7. proposer la demande ;
8. laisser l’approbateur relire si la politique impose `require_approval` ;
9. exécuter ;
10. vérifier ensuite la référence externe ou le ticket créé.

## Exemple pas à pas — envoyer un message Teams ou Outlook

### Situation

Le projet doit informer un groupe interne ou un sponsor d’une revue terminée.

### Parcours Teams

1. choisir **Send Teams message** ;
2. sélectionner le connecteur Teams autorisé ;
3. rédiger un message court et compréhensible ;
4. ajouter la justification si le flux est gouverné ;
5. proposer, faire approuver si besoin, puis exécuter.

### Parcours Outlook

1. choisir **Send Outlook message** ;
2. sélectionner le connecteur Outlook ;
3. renseigner les **destinataires** ;
4. compléter l’**objet** et le **corps** du message ;
5. proposer, faire approuver si besoin, puis exécuter.

### Différence pratique

- **Teams** convient bien à une communication collaborative interne ;
- **Outlook** convient mieux à une communication plus formelle et plus ciblée.

## Exemple pas à pas — webhook vers un outil tiers

### Situation

L’entreprise veut déclencher un flux interne vers un outil maison.

### Parcours

1. choisir le type d’action ou le flux lié au **Webhook** ;
2. sélectionner l’option d’exécution webhook compatible ;
3. renseigner le titre et la justification ;
4. compléter les données utiles au système cible ;
5. proposer la demande ;
6. faire approuver si la politique l’exige ;
7. exécuter ;
8. contrôler le résultat côté système cible et côté audit ProPM Agent.

## Pourquoi une action peut être visible mais non exécutable

Une action peut être visible dans l’interface mais rester bloquée si :

- le connecteur compatible n’est pas sain ;
- le projet ne dispose pas du bon binding ;
- la politique du projet interdit ce niveau d’action ;
- votre rôle ne permet pas de proposer ou d’exécuter ;
- une approbation est encore en attente ;
- l’entitlement ou la capacité du plan bloque le flux.

## Que faire si aucune option d’exécution n’apparaît

Suivez cet ordre :

1. vérifiez d’abord **Politiques de gouvernance** ;
2. vérifiez ensuite **Intégrations du projet** ;
3. ouvrez ensuite **Administration de la plateforme** ;
4. contrôlez enfin l’**entitlement**, la **permission** et l’état de santé du connecteur.

## Scénario complet — du signal à l’action exécutée

### Cas simple

1. un signal `open` remonte un blocage ;
2. l’équipe relit le résumé, l’explication et les preuves ;
3. elle décide qu’un ticket Jira est nécessaire ;
4. la politique autorise le **Chef de projet** à `propose` mais impose `require_approval` ;
5. le Chef de projet crée la demande dans **Actions & approbations** ;
6. le **Propriétaire du projet** approuve ;
7. l’action passe à **executed** ;
8. le ticket externe et la trace interne restent alignés.

Ce scénario résume bien la logique du produit : **voir, décider, contrôler, exécuter, tracer**.

## Bonnes pratiques

- ne confondez jamais **brouillon** et **exécution réelle** ;
- utilisez les politiques pour limiter les sorties sensibles ;
- demandez une approbation dès qu’un contenu quitte le projet ou modifie un système externe ;
- vérifiez toujours les preuves avant de proposer une action ;
- utilisez le **Journal IA** et la file d’actions comme référence commune d’audit.

## Suite

- [Connecteurs et intégrations](./connecteurs-jira-et-sharepoint)
- [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md)
- [Portefeuille et administration technique](./portefeuille-et-administration-technique.md)
- [Maintenance, support et FAQ](./maintenance-support-faq.md)