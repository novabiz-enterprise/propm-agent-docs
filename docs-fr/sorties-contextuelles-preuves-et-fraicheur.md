---
title: Sorties structurées, preuves et fraîcheur
slug: /sorties-contextuelles-preuves-et-fraicheur
description: Lire une sortie structurée, vérifier preuves, fraîcheur, confiance et décider du passage vers Document PM ou audit.
---

[Accueil](./index.md) · Sorties structurées, preuves et fraîcheur

![Exemple de sortie structurée](/img/screenshots/localized/fr/03-workspace-structured-output.jpg)

![Schéma de relecture d’une sortie structurée : résumé, décisions, preuves, fraîcheur, confiance, informations manquantes et actions aval](/img/annotated/fr/sortie-structuree-annotee.svg)

## Objectif

Cette page explique comment relire une sortie structurée produite par un agent avant de l’utiliser dans une décision, un Document PM, une publication ou une action gouvernée.

## Pour qui

| Profil | Usage de cette page |
| --- | --- |
| Utilisateur métier | Lire une réponse IA sans la surinterpréter |
| Project Manager | Vérifier preuves, fraîcheur, confiance et informations manquantes |
| Propriétaire de projet | Décider si une revue, un Document PM ou une action gouvernée est nécessaire |
| Auditeur ou support | Comprendre les repères de traçabilité et le lien vers le Journal IA |

## Avant de commencer

- Un projet actif est sélectionné.
- La sortie vient d’un run d’agent ou d’un flux de revue identifié.
- Vous avez accès aux preuves ou au Journal IA si l’analyse demande une traçabilité.

## Lire une sortie structurée

1. Lisez le **Résumé** pour comprendre le message principal.
2. Lisez les **Constats** et **Décisions à prendre**.
3. Ouvrez les **Preuves** et citations.
4. Vérifiez la **Fraîcheur des sources**.
5. Lisez la **Confiance** et les **Informations manquantes**.
6. Décidez si la sortie reste exploratoire, devient un Document PM ou doit être escaladée.

## Zones à repérer sur la capture

| Zone | Ce qu’elle apporte |
| --- | --- |
| Résumé | Lecture rapide du résultat |
| Constats | Faits ou motifs identifiés |
| Décisions | Points demandant arbitrage humain |
| Preuves | Sources qui justifient la réponse |
| Fraîcheur | État temporel des sources utilisées |
| Confiance | Indice de solidité à relire avec les preuves |
| Actions aval | Copie, artefact, Document PM, Journal IA ou action gouvernée selon le contexte |

## Décider quoi faire

| Situation observée | Risque | Décision recommandée |
| --- | --- | --- |
| Preuve absente | Le résultat n’est pas justifiable | Ne pas publier ; demander une source ou relancer avec contexte |
| Source `stale` | Source trop ancienne | Rafraîchir, réimporter ou confirmer manuellement |
| Source `conflicting` | Sources contradictoires | Arbitrer humainement et documenter la décision |
| Source `unavailable` | Preuve non récupérée | Traiter comme alerte, pas comme preuve exploitable |
| Confiance faible | Résultat incertain | Garder en exploration ou demander une revue |
| Informations manquantes | Hypothèses fortes | Compléter la connaissance ou reformuler la demande |
| Action externe proposée | Impact hors ProPM Agent | Passer par [Actions et approbations](./actions-et-approbations.md) |
| Livrable à partager | Besoin de version et gouvernance | Ouvrir [Documents PM et artefacts](./documents-pm-et-artefacts.md) |

## États de fraîcheur

| État | Signification pratique | Réaction recommandée |
| --- | --- | --- |
| `fresh` | Source assez récente pour un usage normal | Relecture normale |
| `aging` | Source encore exploitable mais à surveiller | Vérifier avant diffusion large |
| `stale` | Source trop ancienne | Rafraîchir ou confirmer |
| `conflicting` | Source contradictoire | Arbitrage humain obligatoire |
| `unavailable` | Source non confirmée | Ne pas l’utiliser comme preuve principale |

## Relecture humaine obligatoire

Une sortie IA doit être relue avant publication, décision externe, communication sponsor, notification client, ticket externe ou action gouvernée. La confiance n’est pas une approbation et la fraîcheur n’est pas une preuve à elle seule.

## Passer vers un Document PM

Transformez la sortie en Document PM lorsque le résultat doit être partagé, versionné, approuvé, publié, téléchargé ou ajouté à la connaissance. Le flux recommandé est : **run → sortie structurée → artefact → version → Document PM → Download / Publish / Add to knowledge**.

Consultez [Documents PM et artefacts](./documents-pm-et-artefacts.md) pour la revue, le diff, la lignée et les actions aval.

## Repères support et audit

Les champs comme `Trace ID`, `Structured output ID` ou `Context snapshot ID` sont utiles au support et à l’audit, mais ne doivent pas remplacer la lecture métier des preuves. Pour une enquête, ouvrez [Journal IA](./journal-ia.md) et [Support, audit et diagnostic](./support-audit-et-diagnostic.md).

## Résultat attendu

- Vous savez si la sortie est exploitable, exploratoire ou bloquée.
- Vous avez vérifié les preuves et leur fraîcheur.
- Vous savez quand créer un Document PM ou ouvrir une action gouvernée.

## Suite

- [Agents](./agents.md)
- [Documents PM et artefacts](./documents-pm-et-artefacts.md)
- [Journal IA](./journal-ia.md)
- [Support, audit et diagnostic](./support-audit-et-diagnostic.md)
