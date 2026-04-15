---
title: Diagnostic interne de la documentation FR
description: Analyse de couverture, clarte et recommandations mises a jour pour la documentation francaise de ProPM Agent.
---

## Perimetre et methode

Cette mise a jour relit la version actuelle de `propm-agent-docs/docs-fr` et re-evalue la documentation par rapport :

- aux fonctionnalites precedemment verifiees dans `repo/web/src/app`, `repo/web/src/components` et `repo/web/tests/e2e` ;
- a la structure de documentation anglaise de reference dans `repo/docs-site/docs` ;
- aux recommandations formulees dans la premiere analyse.

L'objectif est de verifier :

- ce qui a ete reellement ameliore ;
- quels ecarts ont ete fermes ;
- quels sujets meritent encore un renforcement ;
- quelles recommandations doivent maintenant etre declassees, fermees ou reformulees.

## Evolution depuis la premiere analyse

La documentation FR a nettement progresse. Le changement n'est pas seulement cosmetique : plusieurs critiques majeures de la premiere passe ont ete traitees de facon concrete dans les pages existantes et dans de nouvelles pages dediees.

Les evolutions les plus visibles sont :

- creation de `propm-agent-docs/docs-fr/controle-acces-et-roles.md` ;
- creation de `propm-agent-docs/docs-fr/sorties-contextuelles-preuves-et-fraicheur.md` ;
- enrichissement de `demarrage.md` avec prerequis, checklist post-deploiement et incidents frequents ;
- enrichissement de `interface-et-navigation.md` avec tableau de bord, palette, notifications et indicateur de sante ;
- renforcement de `projets-et-espace-de-travail.md` sur readiness, bindings projet et configuration des agents ;
- renforcement de `rapports-journal-ia-et-tracabilite.md` sur artefacts, statuts, runs vs activity et transparence runtime IA ;
- renforcement de `portefeuille-et-administration-technique.md` sur signaux, cohortes, provider IA, entitlement et sieges ;
- nette amelioration de `maintenance-support-faq.md`, `glossaire.md` et `deploiement-azure-marketplace.md`.

## Recommandations initiales : statut mis a jour

| Recommandation initiale | Statut | Mise a jour |
| --- | --- | --- |
| Creer une page sur les sorties structurees, preuves et fraicheur | Fermee | `sorties-contextuelles-preuves-et-fraicheur.md` couvre maintenant le sujet de facon claire et actionnable. |
| Creer une page sur le controle d'acces et les roles | Fermee | `controle-acces-et-roles.md` documente roles, permissions et garde-fous RBAC. |
| Clarifier `Runs` vs `Activity` | Fermee | La distinction est maintenant explicite dans `rapports-journal-ia-et-tracabilite.md`. |
| Clarifier artefact vs PM Doc vs publication | Fermee | La page Rapports couvre definitions, statuts, diff, lignee et publication. |
| Clarifier fournisseur IA effectif vs fournisseur du deploiement | Fermee | Le sujet est maintenant traite dans les pages Rapports et Administration technique. |
| Clarifier integrations plateforme vs integrations projet | Fermee | Le sujet est maintenant explique cote projet et cote plateforme. |
| Renforcer les metadonnees de recherche et l'historique d'import | Fermee | `connaissance-et-agents.md` traite types de fichiers, statuts, metadonnees et historique. |
| Renforcer le portefeuille, les signaux, seuils et sieges | Fermee | `portefeuille-et-administration-technique.md` couvre maintenant ces elements. |
| Ajouter prerequis et post-deploiement Azure | Fermee | `deploiement-azure-marketplace.md` et `demarrage.md` couvrent ce besoin. |
| Etendre la FAQ et le depannage | Partiellement fermee | Grosse progression, mais quelques scenarios support et admin peuvent encore etre ajoutes. |
| Creer une page dediee a la configuration des agents | Declasser | Le sujet est maintenant suffisamment couvert dans `projets-et-espace-de-travail.md` pour la version actuelle du produit. |
| Creer une page dediee aux parametres fournisseur IA | Declasser | Le sujet n'est plus prioritaire tant que la surface admin reste stable et peu dense. |

## Verdict global

La documentation francaise est maintenant **solide en largeur et nettement meilleure en profondeur**. La version precedente etait correcte pour decrire le produit ; la version actuelle commence a devenir vraiment exploitable pour l'onboarding, le support de premier niveau et l'usage autonome.

Le point important est le suivant :

- il n'y a plus de **gros trou structurel** dans la couverture ;
- les recommandations restantes portent surtout sur du **raffinement**, du **support avance** et quelques **approfondissements operationnels**.

| Axe | Evaluation | Commentaire |
| --- | --- | --- |
| Couverture des grandes surfaces | Tres forte | Toutes les surfaces majeures observees dans l'application sont maintenant documentees. |
| Couverture des sous-fonctionnalites | Forte | La plupart des angles morts critiques de la premiere analyse ont ete fermes. |
| Clarte pour un utilisateur final | Forte | Le ton est plus actionnable, les distinctions utiles sont plus nettes et les parcours sont plus lisibles. |
| FAQ et depannage | Moyenne a forte | La base est bonne, mais quelques cas support et admin restent a expliciter. |
| Exploitabilite pour un administrateur | Forte | RBAC, provider IA, integrations, entitlement et sieges sont maintenant bien mieux expliques. |

## Points forts actuels

- La documentation couvre maintenant de facon credible l'ensemble du parcours : acces, projet, connaissance, agents, sorties structurees, rapports, gouvernance, Journal IA, portefeuille et administration.
- Les differences entre surfaces proches sont bien plus claires : **Espace de travail** vs **Agents**, **artefact** vs **version d'artefact** vs **PM Doc**, **Runs** vs **Activity**, **lecture seule** vs **acces refuse**, **plateforme** vs **projet**.
- Les pages les plus sensibles sont devenues plus actionnables grace a des sections de type **Objectif**, **Avant de commencer**, **Parcours recommande**, **Resultat attendu** et **Problemes courants**.
- Les nouvelles pages comblent exactement les deux plus gros manques de la premiere passe : lecture des sorties structurees et RBAC projet.
- Le traitement du support est plus mature : `Trace ID`, `Context snapshot ID`, `Structured output ID`, roles, entitlement, sieges et readiness sont mieux relies entre eux.
- Le glossaire et les conventions de libelles reduisent mieux l'ecart entre les termes FR de la documentation et les libelles visibles dans l'UI.

## Couverture fonctionnelle : ce qui est maintenant bien traite

Les surfaces suivantes sont desormais bien couvertes ou correctement reliees entre elles :

- `propm-agent-docs/docs-fr/index.md` : parcours de lecture, parcours bout en bout, convention de libelles, architecture fonctionnelle et responsabilites.
- `propm-agent-docs/docs-fr/demarrage.md` : prerequis, premiere connexion, distinctions d'acces, creation de projet, checklist post-deploiement et incidents frequents.
- `propm-agent-docs/docs-fr/interface-et-navigation.md` : shell, tableau de bord, palette, notifications, sante, langue, theme et aide.
- `propm-agent-docs/docs-fr/projets-et-espace-de-travail.md` : difference Projets / Espace de travail / Agents, readiness, bindings projet, configuration agents et parcours apres creation.
- `propm-agent-docs/docs-fr/controle-acces-et-roles.md` : roles standards, roles personnalises, permissions et garde-fous RBAC.
- `propm-agent-docs/docs-fr/connaissance-et-agents.md` : types de fichiers, import depuis des sources approuvees, historique d'import, etats documentaires, metadonnees de recherche, sessions locales et voix.
- `propm-agent-docs/docs-fr/sorties-contextuelles-preuves-et-fraicheur.md` : lecture des sections, preuves, etats de fraicheur, confiance, IDs de tracabilite et transformation en artefact.
- `propm-agent-docs/docs-fr/gouvernance-decisions-et-actions.md` : signaux, gouvernance projet, actions et approvals, causes de blocage et lien avec les integrations.
- `propm-agent-docs/docs-fr/rapports-journal-ia-et-tracabilite.md` : cycle de vie artefact -> version -> PM Doc, statuts, diff, lignee, runs, activity, details runtime IA et bonnes pratiques de tracabilite.
- `propm-agent-docs/docs-fr/portefeuille-et-administration-technique.md` : centre de commande portefeuille, signaux, cohortes, integrations, AI provider, entitlement, billing posture et sieges.
- `propm-agent-docs/docs-fr/maintenance-support-faq.md` : procedure de diagnostic rapide, fiches de depannage et FAQ multi-domaines.
- `propm-agent-docs/docs-fr/glossaire.md` : vocabulaire produit, technique et support largement enrichi.
- `propm-agent-docs/docs-fr/deploiement-azure-marketplace.md` : prerequis, champs visibles, choix LLM, controles post-deploiement et incidents frequents.

## Ecarts residuels et recommandations mises a jour

Il reste peu de manques structurants. Les recommandations ci-dessous visent surtout a rendre la documentation encore plus autonome pour les cas support et admin les plus sensibles.

| Priorite | Theme | Etat actuel | Impact | Recommandation mise a jour |
| --- | --- | --- | --- | --- |
| Moyenne | Gouvernance operationnelle | La page couvre bien les concepts et le cycle general, mais reste plus legere que les autres sur les etats de signaux, les digests, les brouillons de notification et les exemples de politiques. | Les utilisateurs comprennent le cadre, mais peuvent encore hesiter sur la conduite a tenir sans demo. | Renforcer `gouvernance-decisions-et-actions.md` avec un pas-a-pas plus concret et quelques exemples de scenarios. |
| Moyenne | FAQ et support avance | Le socle est bon, mais plusieurs cas reels restent disperses entre Demarrage, FAQ et les autres pages. | Le support de premier niveau gagne du temps, mais certains incidents exigent encore une lecture croisee de plusieurs pages. | Ajouter 8 a 12 FAQ ciblees ou, si le volume augmente, creer une ou deux annexes de depannage. |
| Moyenne | Agents personnalises et voix | Le sujet est mentionne, mais la creation, le scope inter-projet, la suppression et les limites navigateur restent assez brefs. | Sous-exploitation probable de ces fonctions par les utilisateurs avances. | Completer `connaissance-et-agents.md` avec plus de details pratiques ; page dediee seulement si l'usage augmente. |
| Faible a moyenne | Tableau de bord | Le tableau de bord est maintenant documente, mais surtout comme page d'orientation. | Les nouveaux utilisateurs peuvent manquer certaines subtilites de lecture des cartes et metriques. | Enrichir `interface-et-navigation.md` ou ajouter une annexe si le dashboard devient plus riche. |
| Faible | Document categories et Governance policies | Les onglets sont presentes mais peu illustres par des exemples concrets. | Les proprietaires de projet peuvent manquer de reperes au premier parametrage. | Ajouter quelques exemples pratiques dans `projets-et-espace-de-travail.md`. |
| Faible | Matrice de droits | La page RBAC liste bien les permissions, mais ne propose pas encore une matrice role standard -> actions courantes. | L'onboarding des admins projet pourrait etre encore plus rapide. | Ajouter un tableau synthetique dans `controle-acces-et-roles.md`. |
| Faible | AI Provider Settings detaille | Les notions essentielles sont documentees, mais pas un eventuel walkthrough champ par champ des reglages admin si l'UI les expose. | Impact faible tant que la surface reste stable. | N'ajouter ce detail que si la page d'administration gagne en complexite visible. |
| Faible | Captures explicatives | Les captures sont utiles, mais peu de pages montrent un etat bloque, un diff parlant ou un evenement Activity annote. | Le lecteur autonome doit parfois extrapoler. | Ajouter quelques captures ou exemples annotees sur les etats les plus sensibles. |

## Diagnostic de clarte pour l'utilisateur final

### Ce qui est nettement meilleur

- La documentation est beaucoup plus **orientee action** qu'auparavant.
- Les pages commencent plus souvent par le bon cadrage : objectif, audience, parcours, resultats attendus.
- Les pages critiques expliquent maintenant mieux les distinctions qui faisaient auparavant perdre du temps.
- Les parcours sont plus faciles a suivre grace aux liens de suite, aux conventions de libelles et aux pages dediees aux sujets techniques complexes.

### Ce qui peut encore limiter l'autonomie

- Certains sujets avances demandent encore de croiser plusieurs pages, en particulier gouvernance, support et administration.
- Les scenarios de blocage les plus complexes ne sont pas encore tous presents sous forme de decision tree ou de fiche de depannage autonome.
- Quelques surfaces restent encore documentees par concepts plutot que par exemples d'ecran ou cas concrets.

### Conclusion sur la clarte

La documentation est maintenant **claire pour un utilisateur final autonome sur la plupart des parcours courants**.

Elle peut encore progresser pour les cas suivants :

- support avance ;
- diagnostic d'integration ou de licence ;
- parametrage admin plus fin ;
- gouvernance projet au niveau procedurier.

## Revue page par page

### `propm-agent-docs/docs-fr/index.md`

Points forts :

- excellent point d'entree ;
- tres bon parcours de lecture par intention ;
- bon parcours bout en bout ;
- convention de libelles utile et claire.

Recommandations restantes :

- optionnellement ajouter un mini-parcours par profil : utilisateur, proprietaire de projet, admin technique, support.

### `propm-agent-docs/docs-fr/demarrage.md`

Points forts :

- page devenue tres operationnelle ;
- prerequis utilisateur et admin bien distingues ;
- checklist post-deploiement pertinente ;
- incidents de connexion bien traites.

Recommandations restantes :

- ajouter un mini arbre de decision auth vs tenant vs siege vs projet accessible si les incidents d'acces restent frequents.

### `propm-agent-docs/docs-fr/interface-et-navigation.md`

Points forts :

- le tableau de bord est enfin explique ;
- palette, notifications et panneau de sante sont correctement couverts ;
- la logique du shell est facile a comprendre.

Recommandations restantes :

- si le dashboard evolue, ajouter un complement sur la lecture des cartes, metriques et call-to-action les plus frequents.

### `propm-agent-docs/docs-fr/projets-et-espace-de-travail.md`

Points forts :

- la distinction Projets / Espace de travail / Agents est tres claire ;
- readiness et causes de blocage sont bien mieux operationalisees ;
- la configuration agents et son historique sont maintenant documentes.

Recommandations restantes :

- ajouter un ou deux exemples plus concrets sur `Document categories` et `Governance policies`.

### `propm-agent-docs/docs-fr/controle-acces-et-roles.md`

Points forts :

- nouvelle page tres utile ;
- permissions et garde-fous RBAC bien presentes ;
- bonne distinction entre lecture seule et acces refuse ;
- parcours de creation et d'attribution faciles a suivre.

Recommandations restantes :

- ajouter une matrice simple role standard -> capacites courantes ;
- si visible dans le produit, documenter plus explicitement l'invitation ou l'ajout de membre cote workflow complet.

### `propm-agent-docs/docs-fr/connaissance-et-agents.md`

Points forts :

- types de fichiers supportes enfin explicites ;
- historique d'import et metadonnees de recherche bien presentes ;
- bonnes precisions sur les sessions locales et la voix.

Recommandations restantes :

- mieux expliciter le scope des agents personnalises ;
- indiquer plus clairement que la memoire locale se comprend comme locale au navigateur, au projet et a l'agent si c'est bien le comportement attendu ;
- ajouter un mini tableau de compatibilite ou de bonnes pratiques pour la voix si le sujet remonte souvent au support.

### `propm-agent-docs/docs-fr/sorties-contextuelles-preuves-et-fraicheur.md`

Points forts :

- page a forte valeur ;
- ordre de lecture tres utile ;
- etats de fraicheur, preuves et IDs bien expliques ;
- tres bonne articulation avec artefacts et Journal IA.

Recommandations restantes :

- ajouter si possible un exemple annote de sortie reelle ou pseudo-reelle ;
- proposer une mini regle de relecture selon le niveau d'impact de la decision.

### `propm-agent-docs/docs-fr/gouvernance-decisions-et-actions.md`

Points forts :

- bonne vue d'ensemble de la gouvernance ;
- lien plus clair avec integrations et approbations ;
- exemples d'actions gouvernees utiles.

Recommandations restantes :

- documenter davantage les etats possibles des signaux ;
- detailler le traitement d'un digest, d'un brouillon de notification et d'un signal mis en pause ;
- ajouter un exemple de scenario complet : signal -> arbitrage -> action gouvernee -> trace.

### `propm-agent-docs/docs-fr/rapports-journal-ia-et-tracabilite.md`

Points forts :

- tres forte progression ;
- les trois notions artefact / version / PM Doc sont maintenant bien tranchees ;
- `Runs` vs `Activity` est clair ;
- les champs techniques utiles au support sont bien identifies.

Recommandations restantes :

- ajouter un mini workflow d'enquete : run -> activity -> artefact -> publication ;
- si les types `Type` / `Kind` sont stables, en donner quelques exemples concrets.

### `propm-agent-docs/docs-fr/portefeuille-et-administration-technique.md`

Points forts :

- couverture portefeuille beaucoup plus concrete ;
- excellente clarification plateforme vs projet ;
- fournisseur IA, entitlement, billing posture et sieges sont maintenant mieux relies.

Recommandations restantes :

- ajouter un complement champ par champ uniquement si `AI provider settings` expose davantage de reglages visibles et stables ;
- si besoin support, documenter un scenario type de remediation integration bloquee.

### `propm-agent-docs/docs-fr/maintenance-support-faq.md`

Points forts :

- progression nette ;
- procedure de diagnostic rapide utile ;
- bonnes fiches de depannage de premier niveau ;
- FAQ bien mieux calibree qu'avant.

Recommandations restantes :

- ajouter quelques questions supplementaires tres ciblees ;
- creer des annexes de depannage separees uniquement si la FAQ devient trop longue.

### `propm-agent-docs/docs-fr/glossaire.md`

Points forts :

- beaucoup plus riche ;
- bon pont entre vocabulaire produit, support et admin ;
- tres utile pour les termes IA et tracabilite.

Recommandations restantes :

- ajouter au besoin `readiness`, `health`, `version d'artefact`, `digest` et `watchpoint`.

### `propm-agent-docs/docs-fr/deploiement-azure-marketplace.md`

Points forts :

- page devenue exploitable ;
- prerequis et verifications post-deploiement bien poses ;
- incidents frequents utiles pour eviter les faux diagnostics.

Recommandations restantes :

- optionnellement ajouter une mini section de handoff vers `demarrage.md` pour formaliser la passation entre admin technique et premier utilisateur test.

## FAQ supplementaires recommandees

La FAQ n'a plus besoin d'un gros rattrapage, mais quelques ajouts resteraient tres rentables.

### Acces et authentification

- Que faire si la connexion reussit mais qu'aucun projet n'apparait ?
- Quand faut-il inviter un compte externe comme utilisateur `guest` ?
- Comment distinguer un probleme de tenant, de `redirect URI`, de client Entra ou de siege indisponible ?

### Projet, agents et voix

- Pourquoi un agent personnalise n'apparait-il pas dans un autre projet ?
- L'historique de chat est-il conserve par projet, par agent ou seulement par navigateur ?
- Quels navigateurs ou permissions sont a verifier en priorite pour la voix ?

### Connaissance, preuves et tracabilite

- Pourquoi un import peut-il sembler termine alors que certains documents ne sont pas encore retrouvables ?
- Que signifient les badges de fraicheur dans la recherche et dans les preuves ?
- Quelle difference entre `Trace ID`, `Context snapshot ID` et `Structured output ID` ?

### Rapports, gouvernance et administration

- Quand faut-il **Approve**, **Publish** ou **Add to knowledge** ?
- Comment arbitrer une preuve `conflicting` avant publication ?
- Pourquoi une integration est-elle disponible en plateforme mais verrouillee dans mon projet ?
- Pourquoi le fournisseur IA est-il visible mais non modifiable ou non utilisable ?

## Ameliorations editoriales recommandees

### 1. Conserver le virage actionnable

La bonne direction est deja prise. La priorite n'est plus de changer le ton global, mais de l'appliquer de facon encore plus homogene, surtout sur les pages Gouvernance, Support et Administration.

### 2. Enrichir d'abord les pages existantes

La documentation a maintenant une bonne structure. Il vaut mieux densifier les pages en place que multiplier trop vite les nouveaux fichiers.

### 3. Ajouter quelques matrices et arbres de decision

Deux formats seraient particulierement utiles :

- une matrice simple des roles standards ;
- un decision tree court pour les incidents d'acces, d'import et d'action bloquee.

### 4. Ajouter 3 ou 4 captures ou exemples annotes

Les pages gagneraient encore en autonomie avec quelques illustrations de cas reels :

- etat lecture seule ;
- import bloque ;
- diff d'artefact ;
- evenement Activity ou detail de run annote.

### 5. Continuer a maintenir le glossaire et les equivalences UI

Le glossaire et les equivalences FR / UI sont devenus un vrai point fort. Il faut les garder synchronises avec l'application au fil des evolutions produit.

## Pages nouvelles ou annexes encore pertinentes

Ces ajouts ne sont plus urgents. Ils deviennent utiles seulement si la documentation continue de grossir ou si les demandes support se multiplient.

### A envisager seulement si le besoin augmente

- `tableau-de-bord.md` ou une annexe equivalente, si le dashboard devient plus riche ;
- `depannage-authentification-et-acces.md`, si les cas Entra / tenant / siege deviennent frequents ;
- `depannage-integrations-et-imports.md`, si la FAQ support devient trop dense ;
- `agents-personnalises-et-voix.md`, si cette partie du produit devient un sujet fort d'adoption ;
- `limitations-connues.md` et `notes-de-version.md`, pour une maturite documentaire plus enterprise.

## Plan d'amelioration recommande

### Lot 1 - Raffinement des pages existantes

- enrichir `gouvernance-decisions-et-actions.md` ;
- etendre legerement `maintenance-support-faq.md` ;
- ajouter une matrice de droits dans `controle-acces-et-roles.md` ;
- completer `glossaire.md` avec 4 a 5 termes complementaires ;
- ajouter au moins un exemple annote dans les pages les plus sensibles.

### Lot 2 - Support avance si necessaire

- separer certaines FAQ en fiches de depannage seulement si le volume le justifie ;
- ajouter un complement sur les agents personnalises et la voix si l'adoption monte ;
- completer l'administration technique si l'UI expose plus de reglages visibles.

### Lot 3 - Maturite documentaire continue

- ajouter des notes de version ou limitations connues ;
- maintenir l'alignement avec les evolutions produit ;
- conserver une revue reguliere des termes, captures et chemins de navigation.

## Conclusion

La documentation francaise de `propm-agent-docs/docs-fr` n'est plus seulement correcte : elle est maintenant **robuste, lisible et largement exploitable**.

La priorite n'est plus de combler de grands vides, mais de :

- renforcer quelques parcours support et gouvernance ;
- ajouter quelques exemples et matrices ;
- pousser encore un peu l'autonomie sur les cas admin et depannage.

En clair, la recommandation change de nature :

- auparavant, il fallait surtout **creer et structurer** ;
- maintenant, il faut surtout **raffiner, illustrer et stabiliser**.
