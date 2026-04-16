---
title: Sorties structurées, preuves et fraîcheur
slug: /sorties-contextuelles-preuves-et-fraicheur
description: Lire correctement une sortie structurée, ses preuves, ses états de fraîcheur et ses IDs de traçabilité.
---

[Accueil](./index.md) · [Connaissance et agents](./connaissance-et-agents.md) · [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md)

![Vue Agents](/img/screenshots/localized/fr/04-agents.png)

## Objectif

Cette page explique comment interpréter une **sortie structurée** dans ProPM Agent afin de décider si le résultat est directement exploitable, s’il doit être relu ou s’il doit être transformé en artefact gouverné.

## Pourquoi c’est important

ProPM Agent ne renvoie pas seulement un texte libre. Les runs observés peuvent exposer en plus :

- un **résumé** ;
- des **findings** ;
- des **décisions à prendre** ;
- des **actions** ;
- des **hypothèses** ;
- des **informations manquantes** ;
- des **watchpoints** ;
- des **preuves** ;
- des métadonnées de **fraîcheur** et de **confiance** ;
- des **propositions d’artefacts**, des **follow-ups** et des **notifications**.

## Où ces informations apparaissent

Les sorties structurées et leurs métadonnées sont visibles dans plusieurs surfaces :

- **Agents**, juste après un run ;
- **Journal IA**, dans le détail d’un run ;
- **Rapports & artefacts**, via la lignée entre run, artefact et PM Doc.

![Exemple de sortie structurée dans l’espace projet](/img/screenshots/localized/fr/03-workspace-structured-output.png)

## Comment lire une sortie structurée

### Ordre de lecture recommandé

1. lisez le **Summary** ;
2. ouvrez ensuite **Decisions needed** ou **Actions** ;
3. vérifiez la section **Evidence** ;
4. relisez la **Confidence** et la **Source freshness** ;
5. décidez ensuite si la réponse peut rester dans le chat, devenir un brouillon d’artefact ou nécessiter une revue humaine.

### Signification des sections

| Section | À quoi elle sert |
| --- | --- |
| Summary | Version la plus courte du résultat, prête à être relue rapidement |
| Findings | Faits, motifs ou constats mis en avant par le run |
| Decisions needed | Points qui demandent un arbitrage humain |
| Actions | Suites recommandées à exécuter ou planifier |
| Assumptions | Conditions implicites dont dépend la réponse |
| Missing information | Informations absentes qui réduisent la solidité du résultat |
| Watchpoints | Risques, contradictions ou sujets à surveiller |
| Evidence | Références servant de preuve ou de justification |
| Artifact status / Artifact proposals | Indications sur la transformation possible du résultat en artefact gouverné |
| Follow-ups | Étapes de continuation proposées |
| Notifications | Brouillons ou notifications suggérées par le flux |

## Exemple simplifié de lecture

L’exemple ci-dessous est **illustratif**. Il sert à montrer comment relire une carte structurée avant réutilisation :

> - **Summary** : le lot critique semble en retard de deux semaines.
> - **Findings** : la dernière note planning est plus récente que le connecteur calendrier gouverné.
> - **Decisions needed** : faut-il rebaseliner le jalon sponsor ou demander une revalidation planning ?
> - **Evidence** : note planning, extrait de rapport hebdomadaire, état du connecteur source.
> - **Source freshness** : connaissance `fresh`, connecteur planning `stale`.
> - **Watchpoints** : contradiction possible entre la communication projet et la dernière donnée synchronisée.

Lecture recommandée dans ce cas :

1. le **Summary** vous dit quoi relire en priorité ;
2. la combinaison **Evidence** + **Source freshness** vous empêche de publier trop vite ;
3. la présence d’un **Watchpoint** et d’une décision à prendre pousse vers une revue humaine, puis vers un artefact si le sujet devient formel.

## Deux cas fréquents à distinguer

| Cas | Lecture pratique | Décision recommandée |
| --- | --- | --- |
| **Confidence correcte mais fraîcheur insuffisante** | le raisonnement paraît cohérent, mais une partie des sources est `stale` ou `aging` | ne diffusez pas sans revalidation ou sans rafraîchissement documentaire |
| **Confidence faible mais sources récentes** | les sources sont récentes, mais le run signale encore des manques, contradictions ou hypothèses trop fortes | gardez la sortie comme travail exploratoire, puis relancez la revue ou le run avant de formaliser |

Cette distinction évite de traiter la **confiance** comme une note unique. Une réponse peut sembler solide tout en s’appuyant sur des sources trop anciennes, ou l’inverse.

## Comment lire les preuves

Chaque preuve ou citation peut exposer plusieurs éléments utiles :

- un **titre** ou nom de source ;
- un **URI source** ou un nom documentaire ;
- un **snippet** ;
- une **page** ou une **section** quand elle est disponible ;
- une date de **synchronisation** ;
- un **source system** ;
- un badge de **fraîcheur** ;
- un rang d’**autorité** quand il est exposé.

### Ce qu’il faut vérifier avant de réutiliser une preuve

1. le snippet soutient-il bien le message affiché ?
2. la source est-elle identifiable et réouvrable ?
3. la fraîcheur est-elle acceptable pour le niveau de décision attendu ?
4. plusieurs preuves racontent-elles la même chose, ou y a-t-il contradiction ?

## États de fraîcheur

| État | Signification pratique | Réaction recommandée |
| --- | --- | --- |
| `fresh` | Source assez récente pour un usage normal | Peut être réutilisée après revue normale |
| `aging` | Source encore exploitable mais qui approche d’un besoin de revalidation | Vérifier rapidement avant diffusion large |
| `stale` | Source trop ancienne pour être considérée fiable sans contrôle complémentaire | Rafraîchir, réimporter ou confirmer avant décision |
| `conflicting` | La source contredit une autre source pertinente | Ne pas arbitrer automatiquement ; relire les preuves |
| `unavailable` | La source n’a pas pu être confirmée ou récupérée | Traiter comme une alerte, pas comme une preuve exploitable |

## Confiance

La **Confidence** est un signal global de solidité du résultat. Elle doit être interprétée avec la fraîcheur et les preuves, jamais isolément.

Prévoyez une revue humaine supplémentaire si vous voyez :

- confiance faible ;
- preuves absentes ou peu spécifiques ;
- états `stale`, `conflicting` ou `unavailable` ;
- section **Missing information** importante ;
- décision ou action à impact externe.

## Niveau de relecture selon l’impact

| Niveau d’impact | Relecture minimale | Escalade recommandée |
| --- | --- | --- |
| Brouillon interne de travail | vérifier `Summary`, `Findings` et au moins une preuve réouvrable | garder la sortie dans le chat si elle reste exploratoire |
| Coordination d’équipe ou action projet interne | vérifier preuves, fraîcheur, informations manquantes et actions proposées | créer un artefact si le résultat doit être partagé ou historisé |
| Décision sponsor, publication, notification externe ou action gouvernée | relire toutes les preuves, arbitrer les états `conflicting` / `stale`, conserver les IDs techniques | passer par **Rapports & artefacts**, le **diff**, la **lignée** et le **Journal IA** avant diffusion |

## IDs de traçabilité à conserver

| Champ | Usage |
| --- | --- |
| `Trace ID` | Retrouver précisément le run ou l’événement côté support |
| `Structured output ID` | Identifier la sortie structurée réellement produite |
| `Context snapshot ID` | Comprendre dans quel contexte documentaire ou projet le run a tourné |

Ces champs sont particulièrement utiles quand vous devez rapprocher un run, un artefact et un événement du **Journal IA**.

## Quand transformer la sortie en artefact

Le chemin normal observé est :

1. question projet ;
2. réponse structurée ;
3. création d’un **draft artifact** ;
4. revue du **diff** et de la **lignée** ;
5. approbation ou publication.

Transformez une sortie en artefact lorsque :

- elle doit devenir un livrable formel ;
- elle doit passer par une validation ou publication ;
- vous devez conserver une lignée explicite vers un run et ses preuves ;
- le contenu doit sortir du chat pour une diffusion externe, une approbation ou une traçabilité durable.

Règle simple : tant que vous explorez, le chat peut suffire ; dès qu’un résultat doit être **partagé, approuvé, publié ou conservé comme trace**, passez par **Rapports & artefacts**.

## Checklist avant réutilisation dans un livrable

1. le résumé correspond-il bien aux findings détaillés ?
2. les actions proposées sont-elles cohérentes avec la situation projet ?
3. les preuves sont-elles assez précises pour justifier la décision ?
4. les états de fraîcheur sont-ils acceptables ?
5. faut-il créer un artefact ou suffit-il de garder la sortie dans le chat ?

## Problèmes courants

### La réponse semble propre mais aucune preuve n’apparaît

Traitez le résultat comme un élément à relire avant usage externe. L’absence de preuve visible réduit la capacité à justifier le contenu.

### Une preuve est `conflicting`

Ne publiez pas directement. Ouvrez la source, comparez les références en désaccord et documentez l’arbitrage dans l’artefact ou dans la gouvernance. Si le sujet demande une décision formalisée, poursuivez vers [Gouvernance, décisions et actions](./gouvernance-decisions-et-actions.md) plutôt que de laisser le conflit dans le seul chat.

### Une preuve est `unavailable`

Considérez que la justification n’est pas stabilisée. Vérifiez la source dans **Connaissance**, l’import ou le détail du run dans **Journal IA**.

## Suite

- [Connaissance et agents](./connaissance-et-agents.md)
- [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md)
- [Maintenance, support et FAQ](./maintenance-support-faq.md)
