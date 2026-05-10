---
title: Actions et approbations
slug: /actions-et-approbations
description: Proposer, approuver, rejeter et exécuter une action gouvernée dans ProPM Agent.
---

[Accueil](./index.md) · Actions et approbations

![Actions gouvernées](/img/diagrams/fr/proactivite-et-gouvernance.svg)

## Objectif

Cette page explique le workflow opérationnel des actions gouvernées : proposer une action, la faire approuver, la rejeter si nécessaire et comprendre quand elle est réellement exécutée.

## Pour qui

| Profil | Usage de cette page |
| --- | --- |
| Contributeur autorisé | Proposer une action selon la politique |
| Project Manager | Préparer une action depuis un signal ou un Document PM |
| Propriétaire de projet | Approuver, rejeter ou exécuter selon la gouvernance |
| Support | Identifier la raison d’un blocage |

## Avant de commencer

- Un projet actif est sélectionné.
- L’action est liée à un signal, un Document PM, un connecteur ou une destination disponible.
- Le connecteur externe est validé et rattaché au projet si l’action sort de ProPM Agent.
- Votre rôle est autorisé par la politique de gouvernance.

## Proposer une action

1. Ouvrez le signal, le Document PM ou la page qui propose l’action.
2. Sélectionnez l’action disponible, par exemple publier vers SharePoint ou créer un ticket Jira.
3. Vérifiez le contenu, la destination et le résumé.
4. Ajoutez une justification si l’interface la demande.
5. Soumettez l’action.
6. Vérifiez le statut : brouillon, proposée, en attente d’approbation ou bloquée.

## Approuver ou rejeter

1. Ouvrez **Actions & approvals** ou **Actions et approbations**.
2. Filtrez les actions en attente.
3. Ouvrez le détail de l’action.
4. Vérifiez les preuves, la destination, l’impact et le demandeur.
5. Sélectionnez **Approve** pour autoriser ou **Reject** pour refuser.
6. Ajoutez une raison claire lorsque c’est demandé.

## Exécuter une action

Une action **approved** n’est pas forcément **executed**. L’approbation donne l’autorisation. L’exécution correspond à l’envoi réel vers la destination ou au changement effectif dans le système cible.

1. Ouvrez l’action approuvée.
2. Vérifiez que le connecteur est prêt et que le mode live est activé si une action externe est attendue.
3. Lancez l’exécution si le bouton est disponible.
4. Vérifiez le statut final et la trace associée.

## Raisons fréquentes de blocage

| Blocage | Explication | Action recommandée |
| --- | --- | --- |
| Rôle insuffisant | Votre rôle ne peut pas proposer ou approuver cette action | Demandez une délégation au Project Owner |
| Politique require approval | Une approbation est obligatoire | Attendez ou relancez l’approbateur |
| Politique deny | L’action est interdite pour ce contexte | Revoyez la politique ou choisissez une autre action |
| Connecteur non rattaché | La plateforme connaît le connecteur mais pas le projet | Vérifiez les intégrations projet |
| Santé non prête | Le connecteur ou fournisseur n’est pas opérationnel | Demandez une validation administrateur |
| Mode live inactif | L’action ne peut pas créer d’objet externe réel | Vérifiez le mode avec l’administrateur |

## Résultat attendu

- Le demandeur comprend le statut de l’action.
- L’approbateur voit les preuves avant décision.
- Une action approuvée n’est exécutée que lorsque les conditions sont réunies.
- Les actions externes ne créent réellement des objets que si le connecteur live est validé et autorisé.

## Suite

- Pour publier un Document PM, ouvrez [Documents PM et artefacts](./documents-pm-et-artefacts.md).
- Pour comprendre les connecteurs, ouvrez [Connecteurs et intégrations](./connecteurs-jira-et-sharepoint.md).
- Pour auditer l’action, ouvrez [Journal IA](./journal-ia.md).
