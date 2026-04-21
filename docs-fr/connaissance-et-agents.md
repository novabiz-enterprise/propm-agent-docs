---
title: Connaissance et agents
slug: /connaissance-et-agents
description: Alimenter la base de connaissance projet, comprendre la proactivité des agents et exploiter les résultats jusqu’aux Documents PM.
---

[Accueil](./index.md) · [Projets et espace de travail](./projets-et-espace-de-travail.md) · [Sorties structurées, preuves et fraîcheur](./sorties-contextuelles-preuves-et-fraicheur.md)

![Connaissance projet](/img/screenshots/localized/fr/05-knowledge.jpg)

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
- badge **source label** ;
- lien **Open source** ;
- `Trace ID` de la recherche.

Lecture pratique :

- **source label** désigne surtout le fournisseur ou l’origine d’ingestion visible pour cette preuve, par exemple `manual`, `SharePoint`, `ADF`, `Blob`, `Confluence` ou `Jira` ;
- **source system** aide à reconnaître le système ou le flux métier lisible derrière cette preuve, par exemple `Knowledge`, `Schedule`, `Finance` ou `Operations` ;
- le `Trace ID` de recherche reste surtout un identifiant de diagnostic, de support et d’audit plutôt qu’une clé métier de pilotage quotidien.

Utilisez `source label` et `source system` ensemble quand vous devez arbitrer rapidement la provenance d’un extrait avant réutilisation.

![Résultats de recherche dans la connaissance](/img/screenshots/localized/fr/05-knowledge-search-results.jpg)

![Vue Agents](/img/screenshots/localized/fr/04-agents.jpg)

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

Quand plusieurs cartes paraissent plausibles, partez d’abord du domaine couvert, puis vérifiez le scope et le status.

| Champ | Ce qu’il faut regarder en priorité | Réflexe utile |
| --- | --- | --- |
| domaines couverts | sujets annoncés sur la carte | rapprochez la demande de l’agent dont la couverture métier correspond réellement au travail attendu |
| `scope` | portée de visibilité de l’agent | vérifiez si l’agent reste limité au projet courant ou visible plus largement |
| `status` | disponibilité pratique de l’agent | privilégiez les agents actifs pour le projet sélectionné avant d’escalader |
| `kind` | caractère standard ou personnalisé de la carte | traitez `kind` comme un contexte descriptif, pas comme le premier critère de choix |

En pratique, recherchez d’abord dans le roster par nom ou par domaine. Privilégiez un agent actif pour le projet sélectionné, et gardez les agents transverses ou personnalisés pour les cas où leur couverture correspond vraiment à la demande.

## Comment travailler avec les agents

1. **vérifiez le projet actif** ;
2. **choisissez l’agent adapté** ;
3. formulez une demande exploitable avec objectif, périmètre et format attendu ;
4. relisez la **sortie structurée** avant toute réutilisation.

L’interface permet aussi de rechercher dans le roster d’agents pour atteindre plus vite le bon spécialiste.

### Parcours débutant recommandé

Pour une première utilisation sans ambiguïté :

1. posez une question simple dans **Agents** ;
2. lisez d’abord la synthèse de la **sortie structurée** ;
3. vérifiez ensuite les preuves, la fraîcheur et la confiance si la réponse doit être réutilisée ;
4. n’ouvrez **Rapports & artefacts** que si vous souhaitez transformer ce résultat en document gouverné, révisable ou publiable.

## All projects : sens exact dans Agents

Quand l’interface de création d’agent personnalisé expose `All projects`, cela signifie :

- l’agent est créé depuis le projet courant ;
- il peut être **visible dans tous les projets accessibles par le même compte** ;
- il suit votre compte d’un projet à l’autre ;
- il ne crée pas un espace de données multi-projets fusionné ;
- il ne remplace pas le **projet actif** au moment du run.

Autrement dit, même un agent `All projects` s’exécute encore dans le **projet actif** au moment où vous lancez le chat.

## Des agents vers les Documents PM, DOCX et XLSX

Les agents ne sautent pas directement vers un fichier final diffusé. Le flux observé est plus progressif :

1. le chat courant reste d’abord **local au navigateur** ;
2. l’envoi du message lance un **run** dans le projet actif ;
3. le run produit une **structured output / sortie structurée** ;
4. selon le flux et les droits, cette sortie peut exposer des liens de **lineage**, un **artifact** ou un **PM Doc** ;
5. la revue se poursuit ensuite dans **Rapports & artefacts / Documents PM** ;
6. le document relu peut enfin être **Add to knowledge**, **Download** ou **Publish** selon la gouvernance.

### Ce que signifie `structured output`

Une **structured output** est la sortie structurée produite par le run d’agent. Elle peut porter :

- une synthèse ;
- des sections ;
- des preuves / citations ;
- des informations de fraîcheur et de confiance ;
- des identifiants de traçabilité.

Ce n’est pas encore, à elle seule, un document final publié.

### Ce que signifie `lineage`

La **lineage / lignée** relie entre eux :

- le **run** ;
- le **structured output ID** ;
- le **context snapshot ID** ;
- l’**artifact** et sa version ;
- le **PM Doc** si un document gouverné existe.

Cette lignée aide à comprendre d’où vient un livrable et quel contexte a été utilisé.

## Sessions et mémoire locale

L’historique de chat est local au navigateur. En pratique :

- la continuité sauvegardée est rattachée au couple **projet + agent** dans le navigateur courant ;
- une session est mémorisée localement sur le poste utilisé ;
- changer de navigateur, de profil, de machine ou vider le stockage local peut faire disparaître un fil sauvegardé ;
- le premier prompt sert généralement de titre de session, ce qui facilite la reprise ;
- il ne faut pas traiter le navigateur comme une archive centrale partagée.

### Local navigateur vs plateforme partagée

Gardez cette distinction simple :

- la **continuité de chat** et le **projet mémorisé** sont des commodités locales au navigateur ;
- les **documents**, **imports**, **artefacts**, **approbations** et **publications** relèvent de la plateforme partagée.

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

![Création d’un agent personnalisé](/img/screenshots/localized/fr/04-custom-agent-create.jpg)

## Saisie vocale dans Agents

Cette documentation ne décrit plus de point d’entrée **voix** séparé dans l’**Espace de travail**. Lorsqu’une saisie vocale reste disponible, elle est limitée à l’expérience **Agents** et dépend explicitement de la prise en charge navigateur des API de reconnaissance vocale. Son absence n’empêche pas le parcours nominal, qui reste la saisie texte.

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
