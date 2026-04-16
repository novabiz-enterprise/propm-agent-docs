---
title: Diagnostic interne de la documentation FR
description: Recommandations detaillees restantes pour la documentation francaise de ProPM Agent.
---

Cette mise a jour ne conserve que les recommandations encore utiles apres relecture de `propm-agent-docs/docs-fr`, en s'appuyant sur le referentiel fonctionnel deja verifie dans l'application, les tests et la documentation anglaise de reference.

## Recommandations prioritaires

| Priorite | Theme | Recommandation detaillee | Fichiers cibles |
| --- | --- | --- | --- |
| Haute | Support et depannage admin | Ajouter un vrai parcours de diagnostic pour les incidents qui melangent auth, runtime, provider IA, seats et integrations. La FAQ couvre deja beaucoup de cas, mais les symptomes les plus sensibles meritent encore un guidage plus prescriptif : **Validate** qui echoue dans `AI provider settings`, **Test** qui passe ou echoue, provider visible mais non **Operational**, page disponible mais action bloquee, notification en `held` ou brouillon non diffusable, panneau de sante degrade alors que l'UI charge encore. La recommandation n'est pas de multiplier les pages tout de suite, mais d'ajouter des arbres de decision courts avec ordre de verification strict et liens directs vers les bonnes sections. | `maintenance-support-faq.md`, `portefeuille-et-administration-technique.md`, `demarrage.md`, `interface-et-navigation.md` |
| Haute | Gouvernance operationnelle | Pousser la page gouvernance vers un niveau plus procedurier. Le lecteur comprend deja les concepts, mais il faut encore mieux montrer **quand** passer d'un signal a un digest, d'un digest a un brouillon, puis a une action gouvernee. Ajouter des mini-scenarios decides par cas d'usage : contradiction documentaire, diffusion d'une alerte, ticket externe, publication SharePoint, signal mis en pause puis reouvert. Ajouter aussi une lecture plus concrete des couples `mode` / `status` et des effets `allow` / `require_approval` / `deny` sur ce que l'utilisateur peut reellement faire. | `gouvernance-decisions-et-actions.md`, `projets-et-espace-de-travail.md` |
| Haute | Documentation provider IA exploitable en exploitation | La partie Azure OpenAI est maintenant detaillee, mais l'administration gagnerait a exposer le meme niveau de lisibilite pour les autres familles de providers si elles sont visibles dans l'UI admin. A defaut d'un walkthrough complet pour chaque provider, ajouter au minimum un cadre commun : quels champs sont toujours critiques, ce que signifient `Configuration`, `Validation`, `Test`, `Operational`, ce qui bloque l'activation, et comment confirmer le resultat dans `Journal IA`. | `portefeuille-et-administration-technique.md`, `maintenance-support-faq.md` |
| Moyenne | RBAC oriente actions reelles | La matrice de roles existe maintenant, mais elle peut encore etre rendue plus operationnelle en liant les permissions a des ecrans et actions concretes. Ajouter un tableau du type `permission -> surface impactee -> symptome si absente`, par exemple `agent:configure`, `report:generate`, `history:read`, `settings:manage`. Ajouter aussi un court rappel sur la difference entre refus lie au role standard, refus lie a un role personnalise et simple lecture seule. | `controle-acces-et-roles.md`, `maintenance-support-faq.md` |
| Moyenne | Cas concrets pour parametrage projet | Les onglets projet sont bien presentes, mais les proprietaires de projet gagneraient encore a voir quelques configurations type. Ajouter 2 ou 3 exemples complets et realistes : taxonomie documentaire minimale, politique de publication avec approbation SharePoint, preference de notification `signal_digest`, projet en lecture seule sur certains connecteurs. L'objectif est de montrer des reglages credibles plutot qu'une simple liste de sous-surfaces. | `projets-et-espace-de-travail.md`, `gouvernance-decisions-et-actions.md` |
| Moyenne | Agents personnalises, roster et voix | La page Agents est deja utile, mais il reste pertinent d'ajouter une lecture plus pratique des champs visibles dans le roster et dans la creation d'un agent personnalise. Ajouter ce que l'utilisateur doit regarder en priorite dans `kind`, `scope`, `status`, et quand choisir `Project only` vs `All projects`. Pour la voix, ajouter une mini-procedure de verification navigateur/permission avec priorite d'action et un renvoi direct vers la saisie texte comme chemin nominal de secours. | `connaissance-et-agents.md`, `maintenance-support-faq.md` |
| Moyenne | Enquetes run -> artefact -> publication -> activity | La page Journal IA est deja exploitable, mais elle peut encore gagner en valeur support avec un ou deux cas d'enquete de bout en bout. Ajouter un exemple compact pour un livrable suspect et un autre pour une notification ou action gouvernee : point d'entree dans le PM Doc, passage par `diff`, `lineage`, `Runs`, puis `Activity`. Cela reduit l'interpretation libre du lecteur quand plusieurs identifiants techniques apparaissent en meme temps. | `rapports-journal-ia-et-tracabilite.md`, `maintenance-support-faq.md` |
| Faible a moyenne | Captures annotees sur etats sensibles | Les captures sont nombreuses, mais certaines situations a risque meritent une annotation legere directement dans la doc : etat **lecture seule**, import bloque par `entitlement` ou `binding`, file d'action en attente d'approbation, provider non operational, difference entre brouillon de notification et diffusion effective. Le gain principal est pedagogique et support. | `controle-acces-et-roles.md`, `projets-et-espace-de-travail.md`, `gouvernance-decisions-et-actions.md`, `portefeuille-et-administration-technique.md` |

## Recommandations detaillees par page

### `propm-agent-docs/docs-fr/index.md`

- Ajouter un bloc tres visible `Je cherche a resoudre un probleme` avec 4 entrees symptomatiques et non fonctionnelles : `je ne peux pas me connecter`, `aucun projet n'apparait`, `une action est visible mais bloquee`, `le fournisseur IA ne semble pas operationnel`.
- Ajouter un renvoi direct vers `maintenance-support-faq.md` depuis ce bloc, afin que l'utilisateur en incident ne reparte pas par le parcours de lecture normal.
- Si vous gardez le bloc `Support et contact`, distinguer explicitement ce qui releve du **support technique**, de la **question commerciale** et du **probleme d'acces/tenant**.

### `propm-agent-docs/docs-fr/demarrage.md`

- Ajouter un mini tableau `symptome -> preuve a collecter -> page suivante a ouvrir` pour raccourcir encore le diagnostic entre Entra, tenant, seat, projet absent et lecture seule admin.
- Ajouter un rappel direct vers `maintenance-support-faq.md` apres l'arbre de decision afin d'eviter que la page D demarrage porte seule tout le depannage auth.
- Si le comportement reste frequent en support, ajouter une ligne specifique pour le cas `connexion ok, tableau de bord charge, mais panneau de sante degrade` afin de faire la bascule vers `interface-et-navigation.md` et `maintenance-support-faq.md`.

### `propm-agent-docs/docs-fr/interface-et-navigation.md`

- Ajouter un mini encart `Que faire si le tableau de bord semble contradictoire ?` pour rappeler que les cartes sont des signaux de priorisation et non une source unique de verite.
- Ajouter un renvoi plus explicite depuis `Indicateur de sante` vers les surfaces de remediaton : auth -> `demarrage.md`, runtime/connectivite -> `maintenance-support-faq.md`, contexte projet -> `projets-et-espace-de-travail.md`.
- Si possible, annoter la capture du dashboard avec 4 a 5 zones nommees plutot que laisser le lecteur reconstruire seul la cartographie visuelle.

### `propm-agent-docs/docs-fr/projets-et-espace-de-travail.md`

- Ajouter un scenario `projet neuf minimal` avec ordre de parametrage recommande : membres, categories, integrations, gouvernance, connaissance.
- Ajouter un scenario `projet sensible / diffusion gouvernee` montrant des reglages credibles dans `Governance policies` : destination SharePoint, approval requise, notification `signal_digest`, connecteur limite a certains roles.
- Ajouter un exemple visuel ou textuel pour un binding projet bloque, avec interpretation des causes `entitlement`, `policy`, `permission`, `health` et `binding absent`.
- Ajouter une phrase plus explicite sur la relation entre `Project integrations` et les actions visibles ensuite dans `Actions & approvals`, pour eviter que ces deux zones soient lues comme des ecrans independants.

### `propm-agent-docs/docs-fr/controle-acces-et-roles.md`

- Ajouter un second tableau `permission -> impact concret`, par exemple : `agent:configure` -> onglet `Agent configuration`, `report:generate` -> creation de livrables, `history:read` -> `Journal IA`, `settings:manage` -> reglages projet et gouvernance.
- Ajouter un mini bloc `Comment lire un refus` avec trois cas separes : controle desactive car lecture seule, action absente car permission manquante, action impossible car garde-fou RBAC serveur.
- Ajouter une note concise sur le workflow d'ajout de membre quand l'utilisateur est externe / `guest`, meme si le detail Entra reste documente ailleurs, afin d'eviter une rupture entre RBAC projet et identite.

### `propm-agent-docs/docs-fr/connaissance-et-agents.md`

- Ajouter un encart `Comment choisir un agent rapidement` en expliquant comment lire `kind`, `scope`, `status` et domaines couverts sur la carte de l'agent.
- Ajouter un exemple court de choix entre un agent standard et un agent personnalise, puis entre `Project only` et `All projects`.
- Ajouter un mini tableau `symptome voix -> reflexe`, en reprenant une logique d'escalade : compatibilite navigateur, permission micro, relecture du composeur, retour au clavier.
- Si le produit expose des statuts d'agent stables, ajouter leur signification pratique au lieu de ne citer que le champ `status`.

### `propm-agent-docs/docs-fr/sorties-contextuelles-preuves-et-fraicheur.md`

- Ajouter un second exemple de lecture, differenciant un cas `confidence` correcte mais `freshness` insuffisante d'un cas `confidence` faible mais sources recentes. Cela aidera a ne pas traiter la confiance comme une note unique.
- Ajouter un rappel explicite sur le moment ou il faut quitter le chat pour passer en artefact, meme si le contenu semble deja exploitable, notamment pour toute diffusion externe ou tracee.
- Ajouter un renvoi direct vers la page Gouvernance pour les cas `conflicting` qui demandent un arbitrage formalise plutot qu'une simple relecture documentaire.

### `propm-agent-docs/docs-fr/gouvernance-decisions-et-actions.md`

- Ajouter un tableau `si vous voyez... / faites...` pour les cartes de signal : `open`, `snoozed`, `dismissed`, `resolved`, `inform`, `suggest`, `draft`, `request_approval`.
- Ajouter un exemple concret pour les effets `allow`, `require_approval`, `deny` et les niveaux `observe`, `draft`, `propose`, `execute`, afin que la page explique mieux ce que l'utilisateur peut effectivement lancer ou non.
- Ajouter un vrai chemin de remediaton quand aucune option d'execution n'apparait : verifier d'abord `Execution connectors`, puis `Project integrations`, puis `Administration de la plateforme`, puis l'entitlement.
- Ajouter une distinction plus nette entre `digest`, `notification draft`, `action request` et `artifact`, car ces objets se croisent et peuvent encore etre confondus par un lecteur non expert.
- Si les statuts des brouillons et de la file d'approbation sont stables, ajouter leurs definitions pratiques dans un tableau unique.

### `propm-agent-docs/docs-fr/rapports-journal-ia-et-tracabilite.md`

- Ajouter deux cas d'enquete complets et courts : `un PM Doc final semble faux` et `une action/notification a ete preparee mais pas executee comme attendu`.
- Ajouter un rappel sur ce qui doit etre conserve en priorite selon le type d'incident : `Trace ID`, `Context snapshot ID`, `Structured output ID`, `source run ID`, `relatedArtifactId`.
- Ajouter un mini tableau `surface a ouvrir en premier selon le symptome` : divergence de contenu -> `diff`, doute sur la preuve -> `lineage`, doute sur le runtime -> `Runs`, doute sur le workflow aval -> `Activity`.
- Si l'interface reste stable, preciser les limites pratiques des editeurs : quand le contenu est reellement editable, quand il reste surtout en mode revue, et quand le format telecharge est la sortie la plus fiable.

### `propm-agent-docs/docs-fr/portefeuille-et-administration-technique.md`

- Ajouter une section transverse `Comment lire les statuts admin` couvrant `Configuration`, `Validation`, `Test`, `Operational`, afin que ces reperes ne soient pas compris uniquement pour Azure OpenAI.
- Ajouter, si l'UI le permet, des sous-sections synthetiques pour **OpenRouter**, **OpenAI-compatible** et **Anthropic**, meme si elles sont plus courtes que celle d'Azure OpenAI. L'objectif est d'eviter un desequilibre documentaire qui ferait croire que seul Azure OpenAI est exploitable en production.
- Ajouter un mini arbre de decision pour `Validate` en echec vs `Test` en echec vs provider non activable, avec ordre des controles : endpoint, auth mode, secret, deployment name, connectivite, entitlement, allowed providers.
- Ajouter un scenario de remediaton `integration plateforme definie mais indisponible dans le projet`, en reliant explicitement cette page a `projets-et-espace-de-travail.md`.
- Ajouter, dans la partie portefeuille, un exemple de lecture d'une cohorte qui n'affiche aucun outlier, afin d'eviter que l'utilisateur interprete un tableau vide comme un bug.

### `propm-agent-docs/docs-fr/maintenance-support-faq.md`

- Ajouter des FAQ tres operationnelles sur les cas suivants :
- `Validate` reussit mais `Test` echoue dans `AI provider settings`.
- le provider est visible mais jamais `Operational`.
- le panneau de sante est degrade alors que certaines pages chargent encore.
- un run est visible dans `Runs` mais aucune suite claire n'apparait dans `Activity`.
- un brouillon de notification reste en `held` ou ne part jamais vers un canal externe.
- une action reste en `pending approval` ou `approved` sans execution visible.
- un document est `Indexed` mais la preuve reste `unavailable` dans une sortie structuree.
- Ajouter des renvois intra-doc plus directs depuis chaque FAQ vers la bonne page de fond, pour eviter que cette page devienne un cul-de-sac.
- Si le volume continue d'augmenter, scinder ensuite seulement en deux annexes : `depannage-acces-et-auth` et `depannage-runtime-integrations-et-actions`.

### `propm-agent-docs/docs-fr/glossaire.md`

- Ajouter les termes qui aideraient surtout les parcours admin et support : `held`, `pending approval`, `executed`, `Execution connector`, `Artifact destination`, `LLM deployment name`, `Validate`, `Test`, `Operational`.
- Pour les termes deja documentes, envisager de renvoyer implicitement vers la page de fond quand un terme a une importance procedurale forte, par exemple `Digest`, `Readiness`, `Version d'artefact`.

### `propm-agent-docs/docs-fr/deploiement-azure-marketplace.md`

- Ajouter un encart `ce que le deploiement ne termine pas tout seul`, pour rappeler sans ambiguite que choisir Azure OpenAI dans Marketplace ne suffit pas a rendre le provider directement exploitable sans configuration admin finale.
- Si plusieurs modes Azure/OpenAI restent supportes par le produit, ajouter un tableau tres compact `marketplace-managed`, `customer-managed`, `openai-compatible`, avec ce qui se decide au deploiement puis ce qui se termine ensuite dans l'administration.
- Ajouter un renvoi plus visible vers la sequence de verification dans `portefeuille-et-administration-technique.md` afin que le lecteur passe naturellement du deploiement a l'exploitation admin.

## FAQ supplementaires recommandees

### Acces, auth et sante

- Pourquoi le panneau de sante est-il degrade alors que la connexion a reussi ?
- Que verifier si la page d'administration s'ouvre mais qu'aucun bouton d'enregistrement n'est actif ?
- Que faire si la connexion reussit, qu'un projet est visible, mais que les runs ne demarrent pas ?

### Providers IA et runtime

- Que signifie `Validate` reussi mais `Test` en echec ?
- Pourquoi mon provider est-il configure mais pas encore `Operational` ?
- Comment savoir si le provider effectif d'un run correspond bien au provider active dans l'administration ?
- Que faire si aucun deployment Azure OpenAI n'apparait dans `AI provider settings` ?

### Connaissance, agents et preuves

- Pourquoi un agent est-il visible mais semble indisponible ou ne produit-il pas de resultat exploitable ?
- Pourquoi une preuve reste-t-elle `unavailable` alors que le document parait bien present dans la Connaissance ?
- Quand faut-il quitter le chat pour creer un artefact ?

### Gouvernance, notifications et actions

- Quelle difference entre un `digest`, un `notification draft`, une `action request` et un `artifact` ?
- Pourquoi un brouillon de notification reste-t-il `held` ?
- Pourquoi une action est-elle `approved` mais pas encore `executed` ?
- Quand utiliser `Snooze`, `Dismiss` ou `Create draft` sur un signal ?

## Recommandations editoriales transverses

- Continuer a densifier les pages existantes avant de creer de nouveaux fichiers. La structure actuelle est suffisante ; le gain est maintenant dans les exemples, les liens croises et les arbres de decision.
- Ajouter 3 types de formats repetables sur les pages les plus sensibles : `symptome -> verifier -> ouvrir ensuite`, `si vous voyez... / faites...`, `objet -> role dans le flux`.
- Standardiser encore les renvois support entre pages, en particulier entre `maintenance-support-faq.md`, `demarrage.md`, `gouvernance-decisions-et-actions.md`, `rapports-journal-ia-et-tracabilite.md` et `portefeuille-et-administration-technique.md`.
- Privilegier des captures annotees sur les etats critiques plutot que de simples captures de presence d'ecran.
- Maintenir l'alignement entre libelles UI, glossaire et terminologie admin, surtout autour de `provider`, `deployment`, `binding`, `readiness`, `approval`, `held`, `operational`.

## Plan de mise en oeuvre recommande

### Lot 1 - Documentation de support a plus fort impact

- enrichir `maintenance-support-faq.md` avec les cas `Validate/Test/Operational`, `held`, `pending approval`, `health degrade` et `run sans suite claire` ;
- ajouter des arbres de decision courts dans `demarrage.md` et `portefeuille-et-administration-technique.md` ;
- renforcer les renvois croises entre support, administration et Journal IA.

### Lot 2 - Gouvernance et parametres projet

- enrichir `gouvernance-decisions-et-actions.md` avec des scenarios complets et une table des objets du flux ;
- ajouter des exemples de parametrage credibles dans `projets-et-espace-de-travail.md` ;
- ajouter le tableau `permission -> impact concret` dans `controle-acces-et-roles.md`.

### Lot 3 - Maturite d'exploitation

- equilibrer la documentation des providers IA si plusieurs providers restent exposes dans l'UI ;
- ajouter les termes admin/support manquants dans `glossaire.md` ;
- annoter quelques captures sur les etats les plus critiques ;
- seulement si le volume le justifie, scinder ensuite certaines FAQ en annexes de depannage ciblees.
