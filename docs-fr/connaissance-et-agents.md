---
title: Connaissance et agents
slug: /connaissance-et-agents
description: Alimenter la base de connaissance projet, comprendre la proactivité des agents et exploiter les résultats jusqu’aux Documents PM.
---

[Accueil](./index.md) · [Projets et espace de travail](./projets-et-espace-de-travail.md) · [Sorties structurées, preuves et fraîcheur](./sorties-contextuelles-preuves-et-fraicheur.md)

![Connaissance projet](/img/screenshots/localized/fr/05-knowledge.png)

## Objectif

Cette page explique comment téléverser ou importer des documents, relire les métadonnées visibles dans **Connaissance**, puis utiliser le contexte projet dans **Agents**.

## Connaissance : ce que vous pouvez faire

Capacités observées :

- recherche dans les contenus projet ;
- téléversement manuel ;
- rafraîchissement des données ;
- import depuis des sources approuvées ;
- consultation de l’historique des imports ;
- tri, filtrage et pagination des résultats.

## Types de fichiers pris en charge

Les types explicitement acceptés dans l’interface couvrent notamment :

- **PDF** ;
- **DOCX**, **ODT**, **RTF**, **TXT**, **Markdown** ;
- **CSV**, **XLSX**, **XLSM**, **ODS** ;
- **JSON**, **XML** ;
- **PPTX**, **ODP** ;
- **HTML / HTM** ;
- **EML**, **EPUB** ;
- **PNG**, **JPG**, **JPEG**, **BMP**, **TIFF**, **HEIF**.

## Import depuis des sources approuvées

Le mécanisme d’import dépend des **fournisseurs d’ingestion** validés au niveau plateforme, puis rendus disponibles au projet.

### Ce que montre le sélecteur d’import

Selon la source, l’interface peut afficher :

- le nom de la source ;
- un **source label** lisible ;
- la date du dernier import ;
- un état de fraîcheur ou de santé ;
- une explication de blocage quand la source n’est pas utilisable.

### Quand un import est bloqué

Une option d’import peut être indisponible pour cause de :

- entitlement ;
- permission ;
- policy ;
- état de disponibilité à vérifier ;
- binding projet absent ou non prêt.

## Historique d’import

L’historique d’import permet de vérifier au minimum :

- le nom affiché du fournisseur ;
- le statut du run ;
- la fraîcheur après import ;
- le `Trace ID` ;
- les volumes découverts, importés, ignorés ou signalés comme non aboutis ;
- la date de fin quand elle est disponible.

## Lire la liste documentaire et la recherche

### États documentaires visibles

La table documentaire expose au moins les états suivants :

- **Indexed** ;
- **Ingesting** ;
- **Failed**.

Un document visible mais non encore retrouvable en recherche est souvent encore en phase **Ingesting**.

### Métadonnées visibles dans les résultats de recherche

Les résultats de recherche peuvent afficher :

- titre ;
- snippet ;
- score ;
- section ;
- badge de fraîcheur ;
- badge **source system** ;
- lien **Open source** ;
- `Trace ID` de la recherche.

Ces éléments aident à juger rapidement la provenance, la qualité et la réutilisabilité d’une preuve.

![Résultats de recherche dans la connaissance](/img/screenshots/localized/fr/05-knowledge-search-results.png)

![Vue Agents](/img/screenshots/localized/fr/04-agents.png)

## Agents : rôle de la page

La page **Agents** exploite le contexte projet en conversation guidée.

Fonctions confirmées :

- liste des agents disponibles ;
- carte récapitulative de l’agent sélectionné avec **kind**, **scope**, **status** et domaines couverts ;
- zone de conversation ;
- sorties structurées et éléments de preuve ;
- sessions sauvegardées dans le navigateur ;
- création et suppression d’agents personnalisés selon les droits ;
- saisie vocale dans **Agents** si l’environnement la prend encore en charge.

## Proactivité de ProPM Agent

La proactivité dans ProPM Agent ne signifie pas qu’un agent agit seul à l’extérieur du projet. Le comportement observé est plus encadré : la plateforme détecte des situations à surveiller, les remonte en **signaux**, peut préparer un **digest**, proposer un **brouillon** ou une **action gouvernée**, puis laisse l’utilisateur ou l’approbateur décider de la suite.

![Proactivité, digests et actions gouvernées](/img/diagrams/fr/proactivite-et-gouvernance.svg)

### Déclencheurs observés

La proactivité peut être alimentée par :

- une **fraîcheur** insuffisante ;
- une **contradiction** entre preuves ;
- un **blocage** opérationnel ;
- une **pression planning** ou **coûts** visible dans le portefeuille ;
- des **exécutions non abouties** ;
- une suite à donner nécessitant diffusion, validation ou relance.

### Où la proactivité devient visible

- **Espace de travail** : file de signaux et éléments à revoir ;
- **Gouvernance, décisions et actions** : digests, brouillons de notification, demandes d’action ;
- **Centre de commande portefeuille** : comparaison des projets par indicateurs ;
- **Journal IA** : traçabilité de la chaîne de décision.

### Ce que la proactivité ne fait pas seule

- elle ne contourne pas les rôles ;
- elle ne contourne pas les politiques ;
- elle ne publie pas automatiquement hors de l’application sans chemin gouverné ;
- elle reste explicable par preuves, fraîcheur et statuts visibles.

## Comment choisir un agent rapidement

Quand plusieurs cartes sont visibles, lisez-les dans cet ordre :

| Champ | Ce qu’il faut regarder en priorité | Réflexe utile |
| --- | --- | --- |
| `kind` | type d’agent ou spécialisation métier | commencez par l’agent dont le rôle correspond directement à la tâche attendue |
| `scope` | portée de visibilité de l’agent | vérifiez si l’agent est limité au projet courant ou visible plus largement |
| `status` | disponibilité pratique de l’agent | si le statut n’inspire pas confiance, passez à un agent standard avant d’escalader |
| domaines couverts | sujets annoncés sur la carte | utilisez-les pour éviter de confier une demande planning à un agent orienté gouvernance ou documents |

En pratique, choisissez d’abord un **agent standard** si vous cherchez un parcours nominal bien connu. Passez à un **agent personnalisé** quand l’équipe a besoin d’instructions, d’un ton ou d’un périmètre de travail plus spécialisé.

## Comment travailler avec les agents

1. **vérifiez le projet actif** ;
2. **choisissez l’agent adapté** ;
3. formulez une demande exploitable avec objectif, périmètre et format attendu ;
4. relisez la **sortie structurée** avant toute réutilisation.

L’interface permet aussi de rechercher dans le roster d’agents pour atteindre plus vite le bon spécialiste.

## Des agents vers les Documents PM, DOCX et XLSX

Les agents ne sautent pas directement vers un fichier final diffusé. Le flux observé est plus progressif :

1. un agent produit une **sortie structurée** ;
2. cette sortie peut alimenter un **artefact** ou un **Document PM** ;
3. les contenus narratifs vont plutôt vers un rendu **DOCX** ;
4. les contenus tabulaires ou matriciels vont plutôt vers un rendu **XLSX** ;
5. la relecture, l’approbation, le téléchargement et la publication se font ensuite dans [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md).

## Sessions et mémoire locale

L’historique de chat est local au navigateur. En pratique :

- la continuité sauvegardée est rattachée au couple **projet + agent** dans le navigateur courant ;
- une session est mémorisée localement sur le poste utilisé ;
- changer de navigateur ou de machine peut faire disparaître un fil sauvegardé ;
- le premier prompt sert généralement de titre de session, ce qui facilite la reprise ;
- il ne faut pas traiter le navigateur comme une archive centrale partagée.

## Agents personnalisés

La création d’agents personnalisés dépend du niveau de droit. Les points à retenir sont :

- tous les utilisateurs ne peuvent pas créer un agent ;
- le dialogue de création rappelle le **contexte projet** actif avant l’enregistrement ;
- les champs visibles couvrent au minimum **Name**, **Role / instructions** et **Scope** ;
- choisissez **Project only** par défaut, sauf si l’environnement expose explicitement un scope plus large ;
- si l’option **All projects** est disponible, l’agent est créé depuis le projet courant mais peut rester visible dans d’autres projets pour le même compte ;
- si un agent multi-projets n’apparaît pas ailleurs, vérifiez d’abord le même compte et l’accès au projet cible ;
- la suppression d’un agent personnalisé reste contrôlée ;
- un agent personnalisé reste gouverné par les règles du projet et de la plateforme.

### Exemple rapide de choix

| Besoin | Choix recommandé |
| --- | --- |
| usage nominal, équipe large, comportement prévisible | agent standard |
| consignes spécifiques, ton d’équipe, workflow spécialisé | agent personnalisé |
| usage limité à un seul contexte projet | **Project only** |
| même agent réutilisable dans plusieurs projets du même compte | **All projects** si l’option est réellement exposée |

![Création d’un agent personnalisé](/img/screenshots/localized/fr/04-custom-agent-create.png)

## Saisie vocale dans Agents

Cette documentation ne décrit plus de point d’entrée **voix** séparé dans l’**Espace de travail**. Lorsqu’une saisie vocale reste disponible, elle est limitée à l’expérience **Agents** et dépend explicitement de la prise en charge navigateur des API de reconnaissance vocale.

Si la saisie vocale n’est pas disponible :

- utilisez la saisie texte ;
- vérifiez les permissions micro du navigateur ;
- distinguez une limitation du navigateur d’une contrainte locale de l’environnement ;
- relisez toujours le texte ajouté dans le composeur avant **Send** ;
- si le bouton micro est indisponible ou si un message d’incompatibilité apparaît, passez immédiatement à la saisie texte.

### Repères pratiques pour la saisie vocale

| Symptôme | Vérifier d’abord | Réflexe utile |
| --- | --- | --- |
| Bouton micro absent ou inactif | prise en charge `SpeechRecognition` / `webkitSpeechRecognition` | basculez immédiatement vers la saisie texte |
| Autorisation micro refusée | permission micro du navigateur ou de l’OS | réautorisez le micro puis relancez l’écoute |
| Transcription incomplète | texte ajouté dans le composeur | relisez, corrigez et complétez avant **Send** |
| Erreur ponctuelle pendant l’écoute | état navigateur ou session courante | arrêtez la capture, reprenez au clavier, puis réessayez plus tard |

La saisie texte reste le chemin nominal de secours. Elle permet de poursuivre le travail sans interrompre le run à cause d’une contrainte de navigateur local.

## Bonnes pratiques

- chargez des sources fiables et récentes dans la **Connaissance** avant une analyse importante ;
- relisez l’historique d’import quand une source gérée semble absente ;
- demandez explicitement des **preuves** ou des **citations** si la décision doit être justifiée ;
- si une réponse contient des états `stale`, `conflicting` ou `unavailable`, ouvrez la page [Sorties structurées, preuves et fraîcheur](./sorties-contextuelles-preuves-et-fraicheur.md) avant publication.

## Suite

- [Sorties structurées, preuves et fraîcheur](./sorties-contextuelles-preuves-et-fraicheur.md)
- [Gouvernance, décisions et actions](./gouvernance-decisions-et-actions.md)
- [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md)
- [Maintenance, support et FAQ](./maintenance-support-faq.md)
