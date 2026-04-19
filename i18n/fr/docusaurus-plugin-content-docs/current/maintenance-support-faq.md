---
title: Maintenance, support et FAQ
slug: /maintenance-support-faq
description: Repères d’exploitation, vérifications utiles et réponses aux questions fréquentes.
---

[Accueil](./index.md) · [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md) · [Glossaire](./glossaire.md)

## Surfaces utiles pour l’exploitation

Les points d’observation suivants sont confirmés dans l’application :

- **notifications** dans la barre supérieure ;
- **indicateur de santé** dans la barre supérieure ;
- **signaux** dans l’espace de travail projet ;
- **Journal IA** pour les runs et l’activité ;
- **Audit / activity** dans l’administration de plateforme.

## Procédure de vérification rapide

1. vérifiez que le bon **projet** est actif ;
2. distinguez **état vide**, **lecture seule**, **accès refusé** ou **message affiché** ;
3. ouvrez le **Journal IA** si le sujet concerne un agent, un résultat ou un artefact ;
4. conservez le **Trace ID** et, si visible, le `Context snapshot ID` ou le `Structured output ID` ;
5. vérifiez droits, intégrations, entitlements et sièges si l’accès ou l’exécution est bloqué.

## Repères rapides par situation

| Situation observée | Surface de premier niveau | Étape suivante |
| --- | --- | --- |
| Connexion ou retour Microsoft anormal | [Démarrage](./demarrage.md) | vérifier Entra, tenant, `redirectUri` et sièges |
| Aucun projet visible après connexion | **Projets** / sélecteur de projet | **Contrôle d’accès** ou ajout du compte au projet |
| Réponse agent, artefact ou publication douteuse | **Journal IA** → `Runs` | **Activity**, puis **Rapports & artefacts** |
| Import ou recherche incohérente | **Connaissance** et historique d’import | **Intégrations du projet**, puis **Administration de la plateforme** |
| Action externe visible mais bloquée | **Actions & approbations** | **Intégrations du projet**, puis **Administration de la plateforme** |

## Fiches de vérification rapide

### Accès à confirmer

Vérifiez l’URL, le tenant, le compte invité si usage guest, la `redirectUri` réellement configurée et la disponibilité d’un siège si le plan en consomme un.

### Page visible mais non modifiable

Vous êtes probablement en **lecture seule**. Vérifiez votre rôle avant de conclure à une restriction de permission.

### Document visible mais non searchable

Commencez par vérifier le statut du document (`Indexed`, `Ingesting`, `Failed`), l’historique d’import, le rafraîchissement de la page et le `Trace ID` de recherche si un appel a échoué.

### Import depuis une source grisé ou absent

Les vérifications les plus utiles sont : fournisseur non validé, binding projet absent, entitlement bloquant, permission insuffisante ou état health à confirmer.

### Action visible mais non exécutable

Vérifiez le connecteur compatible, le binding projet, l’approbation requise, le rôle utilisateur et la politique applicable.

### Voix indisponible

La voix dépend du navigateur. Essayez un autre navigateur, vérifiez les permissions micro et utilisez la saisie texte si la reconnaissance vocale n’est pas supportée.

## Données à transmettre au support

| Élément | Pourquoi c’est utile |
| --- | --- |
| URL du déploiement | Identifier l’environnement concerné |
| Projet concerné | Rejouer le contexte |
| Trace ID | Retrouver précisément le run ou l’événement |
| Context snapshot ID / Structured output ID | Rapprocher un run, une sortie et un artefact |
| Capture d’écran | Comprendre l’état visible au moment du blocage |
| Heure approximative | Croiser l’événement avec les journaux |

## FAQ — accès et sécurité

### Pourquoi puis-je voir une page d’administration sans pouvoir la modifier ?

Parce que le produit distingue **lecture seule** et **accès refusé**. Une page peut être exposée pour inspection sans autoriser la modification.

### Pourquoi ma connexion Microsoft réussit-elle mais l’accès n’aboutit pas encore comme prévu ?

Vérifiez le tenant, l’autorisation du compte, l’existence d’un projet accessible et la disponibilité d’un siège si le plan en impose un.

### Pourquoi ma connexion réussit-elle mais aucun projet n’apparaît ?

Cette situation n’indique pas forcément une question d’authentification. Vérifiez d’abord le **sélecteur de projet**, puis la page **Projets**. Si la liste reste vide, le compte n’a probablement pas encore été ajouté au bon projet ou ne dispose pas du droit de création.

### Quand faut-il inviter un compte externe comme utilisateur `guest` ?

Lorsque le compte appartient à un autre tenant que celui qui héberge l’application. Le compte doit alors être invité dans le tenant cible, puis autorisé sur l’application ou via le groupe attendu.

### Comment distinguer rapidement tenant, `redirect URI`, client Entra ou siège ?

Suivez cet ordre :

1. si Microsoft échoue **avant** le retour dans l’application, suspectez d’abord tenant, `clientId` ou `redirect URI` ;
2. si la connexion réussit mais que l’application reste bloquée, vérifiez ensuite les **sièges** et l’accès à un projet ;
3. si seule une surface précise reste verrouillée, le sujet est souvent côté **rôle** ou **permission** plutôt que côté authentification.

## FAQ — disponibilité, runtime et connectivité

### Comment lire le panneau de santé lorsque certaines pages chargent encore ?

Parce que l’authentification peut rester valide alors qu’un composant **API** ou un fournisseur demande encore une vérification de disponibilité. Relevez d’abord l’état affiché dans l’indicateur de santé, puis poursuivez vers [Interface et navigation](./interface-et-navigation.md) pour la lecture du panneau et [Portefeuille et administration technique](./portefeuille-et-administration-technique.md) si le doute porte sur le fournisseur ou l’intégration admin.

### Que faire si la connexion réussit, qu’un projet est visible, mais que les runs ne démarrent pas ?

Vérifiez dans cet ordre : projet actif, indicateur de santé, fournisseur IA supposé opérationnel, entitlement éventuel, puis **Journal IA** pour voir si un run a au moins été créé. Si le fournisseur reste suspect, poursuivez vers [Portefeuille et administration technique](./portefeuille-et-administration-technique.md).

## FAQ — projet, espace de travail et agents

### Quand faut-il utiliser Espace de travail plutôt qu’Agents ?

Utilisez **Espace de travail** pour régler et piloter le projet ; utilisez **Agents** pour converser avec un agent et produire une sortie structurée.

### Où est stocké l’historique de chat ?

L’historique visible est local au navigateur. Il n’est pas une archive partagée centrale.

### Pourquoi un agent personnalisé n’apparaît-il pas dans un autre projet ?

Vérifiez d’abord son **scope**. Un agent `Project only` reste limité au projet courant. Si l’environnement expose un agent `All projects`, il doit en plus être consulté avec le **même compte** dans un projet auquel ce compte a accès.

### L’historique de chat est-il conservé par projet, par agent ou seulement par navigateur ?

La continuité observée est **locale au navigateur** et rattachée au couple **projet + agent**. Elle n’est donc ni globale à tout le tenant ni partagée automatiquement entre navigateurs.

### Quels navigateurs ou permissions faut-il vérifier en priorité pour la voix ?

Commencez par la prise en charge navigateur de `SpeechRecognition` / `webkitSpeechRecognition`, puis contrôlez l’autorisation d’accès au micro. Si le bouton reste indisponible ou si la reconnaissance échoue, revenez à la saisie texte sans bloquer le parcours projet.

## FAQ — connaissance et recherche

### Pourquoi un document est-il visible dans la liste mais pas encore retrouvable dans la recherche ?

Parce qu’il peut encore être en état **Ingesting** ou en attente de fin de pipeline d’indexation.

### Que signifient `source label` et `source system` ?

Ce sont des indicateurs de provenance. Ils aident à savoir d’où vient une preuve sans relire toute la configuration détaillée.

### Pourquoi un import peut-il sembler terminé alors que certains documents ne sont pas encore retrouvables ?

Parce que l’ingestion visible ne signifie pas toujours que toute l’indexation est terminée. Contrôlez le statut documentaire (`Indexed`, `Ingesting`, `Failed`), puis relancez la recherche quand le document est réellement indexé.

### Pourquoi un document est-il `Indexed` alors qu’une preuve reste `unavailable` dans une sortie structurée ?

Le document peut être bien présent dans la **Connaissance** alors que la preuve liée au run n’a pas pu être confirmée, réouverte ou stabilisée au moment de la génération. Reprenez la lecture dans [Sorties structurées, preuves et fraîcheur](./sorties-contextuelles-preuves-et-fraicheur.md), puis contrôlez le run dans [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md) si nécessaire.

### Que signifient les badges de fraîcheur dans la recherche et dans les preuves ?

Ils indiquent l’état de confiance temporelle de la source : `fresh`, `aging`, `stale`, `conflicting` ou `unavailable`. Utilisez-les comme un signal de relecture avant publication, pas comme un détail cosmétique.

### Quelle différence entre `Trace ID`, `Context snapshot ID` et `Structured output ID` ?

- **Trace ID** : identifiant de suivi principal pour retrouver un run ou un événement ;
- **Context snapshot ID** : capture du contexte documentaire/projet utilisé pendant le run ;
- **Structured output ID** : identifiant de la sortie structurée réellement produite.

## FAQ — sorties IA et Journal IA

### Quelle différence entre Runs et Activity ?

**Runs** montre les exécutions d’agent et leurs métadonnées ; **Activity** montre une timeline d’événements projet et le payload brut associé.

### Comment savoir quel fournisseur IA a réellement été utilisé ?

Ouvrez le détail du run dans **Journal IA** et lisez **Effective AI Provider**. C’est la valeur de référence pour ce run.

### Un run est visible dans `Runs`, mais aucune suite claire n’apparaît dans `Activity`. Que faire ?

Ce cas signifie souvent que le run a bien existé, mais qu’aucun brouillon, artefact, notification ou action aval n’a encore été créé, ou que vous n’ouvrez pas le bon projet / bon filtre dans **Activity**. Reprenez l’enquête via [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md) en suivant l’ordre **diff / lignée / Runs / Activity**.

## FAQ — rapports, artefacts et gouvernance

### Quelle différence entre PM Doc, artefact et version d’artefact ?

L’artefact est l’objet gouverné, la version d’artefact est son état historisé, et le PM Doc est le document projet revu, édité ou publié à partir de cet objet.

### Pourquoi une action est-elle visible mais non exécutable ?

Vérifiez droits, connecteur, binding projet, politique de gouvernance et approbation requise. Voir aussi [Gouvernance, décisions et actions](./gouvernance-decisions-et-actions.md).

### Quand faut-il **Approve**, **Publish** ou **Add to knowledge** ?

- **Approve** valide une version d’artefact encore en `draft` ;
- **Publish** déclenche la diffusion gouvernée vers une destination ou un format cible ;
- **Add to knowledge** réinjecte un document relu dans la recherche projet.

Ces trois actions ne sont pas interchangeables.

### Comment arbitrer une preuve `conflicting` avant publication ?

Rouvrez les sources contradictoires, comparez le snippet, la date, la provenance et la fraîcheur, puis documentez l’arbitrage dans l’artefact, la note de revue ou le flux de gouvernance. Si besoin, rapprochez ensuite le tout du **Journal IA**.

### Pourquoi un brouillon de notification reste-t-il `held` ou ne part-il jamais vers un canal externe ?

Dans l’interface observée, `in_app` est le chemin le plus direct. Les canaux externes peuvent rester en posture **held / draft** tant que la diffusion gouvernée, la policy, le connecteur ou l’approbation ne sont pas réunis. Reprenez la chaîne dans [Gouvernance, décisions et actions](./gouvernance-decisions-et-actions.md) : signal, digest éventuel, brouillon, policy, connecteur, puis approbation.

### Pourquoi une action reste-t-elle `pending approval` ou `approved` sans exécution visible ?

- `pending approval` signifie que l’accord n’a pas encore été donné ;
- `approved` signifie que l’accord existe, mais pas forcément que l’exécution a déjà eu lieu.

Confirmez ensuite l’étape aval dans **Actions & approbations**, puis dans **Activity**. Si besoin, utilisez la méthode décrite dans [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md).

### Pourquoi une intégration est-elle disponible en plateforme mais verrouillée dans mon projet ?

Parce qu’une définition technique plateforme ne suffit pas. Il faut encore un **binding projet** valide, des permissions adéquates, une policy compatible, un état de santé acceptable et, selon les cas, l’entitlement correspondant.

## FAQ — portefeuille et administration

### Pourquoi le portefeuille ne remonte-t-il aucun projet ou aucun outlier ?

Vérifiez les projets sélectionnés, les signaux actifs, les poids, les seuils et la sévérité minimale appliquée à la cohorte.

### Comment libérer ou réattribuer un siège ?

Cela se fait depuis **Administration de la plateforme** par un profil autorisé. Le retrait libère la capacité pour une réattribution ultérieure, sous réserve de la posture et de la fenêtre de retrait du plan.

### Que signifie `Validate` réussi mais `Test` non abouti dans `Paramètres du fournisseur IA` ?

La configuration administrative paraît cohérente, mais la connectivité réelle ou l’accès distant ne passent pas encore. Vérifiez endpoint, secret ou auth réelle, accessibilité du fournisseur et contraintes réseau, puis reprenez la séquence décrite dans [Portefeuille et administration technique](./portefeuille-et-administration-technique.md).

### Pourquoi mon fournisseur est-il visible mais jamais `Operational` ?

Un fournisseur peut être configuré ou même validé sans avoir passé toute la chaîne **Configuration → Validation → Test → Activate**. Vérifiez aussi l’entitlement, les `allowed providers` et la readiness générale avant de le considérer exploitable.

### Que faire si aucun deployment Azure OpenAI n’apparaît dans `Paramètres du fournisseur IA` ?

Cela signifie généralement qu’aucun déploiement n’est visible dans la ressource Azure OpenAI configurée, ou que la découverte ne peut pas aboutir avec les paramètres actuels. Vérifiez endpoint, auth, version d’API et présence réelle des déploiements côté Azure, puis reprenez le contrôle détaillé dans [Portefeuille et administration technique](./portefeuille-et-administration-technique.md).

### Pourquoi le fournisseur IA est-il visible mais non modifiable ou non utilisable ?

Le fournisseur peut être visible en lecture alors que sa modification reste réservée à un rôle admin. Son usage peut aussi être limité par le plan, les `allowed providers`, l’entitlement ou la résolution runtime du fournisseur effectif.

## Suite

- [Glossaire](./glossaire.md)
- [Démarrage](./demarrage.md)
- [Portefeuille et administration technique](./portefeuille-et-administration-technique.md)
