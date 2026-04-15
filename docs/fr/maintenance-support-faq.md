---
title: Maintenance, support et FAQ
slug: /fr/maintenance-support-faq
description: Bonnes pratiques opérationnelles, diagnostic courant, alertes visibles et réponses aux questions fréquentes.
---

[Accueil FR](./index.md) · [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md) · [Glossaire](./glossaire.md)

## Surfaces utiles pour le support

Les points d’observation suivants sont confirmés dans l’application :

- **notifications** dans la barre supérieure ;
- **indicateur de santé** dans la barre supérieure ;
- **signaux** dans l’espace de travail projet ;
- **Journal IA** pour les runs et l’activité ;
- **Audit / activity** dans l’administration de plateforme.

En pratique, ces surfaces forment le socle du diagnostic avant d’ouvrir un ticket de support interne.

## Vérifications de routine

| Fréquence | Utilisateur métier | Administrateur technique |
| --- | --- | --- |
| Quotidienne | Vérifier le projet actif, les signaux ouverts et les livrables en revue | Vérifier l’activité plateforme, les intégrations critiques et l’état des accès |
| Hebdomadaire | Revoir la fraîcheur des sources et les actions en attente | Contrôler les connecteurs, les sièges et les paramètres IA |
| Après incident | Conserver le trace ID, les captures et le contexte projet | Relire les journaux, l’audit et la configuration runtime/auth |

## Alertes et signaux d’attention

Dans le comportement observé, les alertes peuvent prendre plusieurs formes :

- un signal dans l’espace de travail ;
- un élément visible dans le flux de notifications ;
- une anomalie déduite de l’indicateur de santé ;
- une activité inhabituelle dans le Journal IA ou l’audit plateforme.

Certaines diffusions préparées par l’application peuvent aussi cibler des canaux tels que l’app, l’e-mail, Teams ou un webhook, selon la configuration disponible.

## Procédure de diagnostic rapide

1. vérifier que le bon **projet** est actif ;
2. relire l’écran concerné pour distinguer **état vide**, **lecture seule** ou **erreur** ;
3. ouvrir le **Journal IA** si l’incident concerne un agent, un résultat ou un artefact ;
4. conserver le **trace ID** si un run est impliqué ;
5. vérifier les **droits**, les **intégrations** et les **sièges** si l’accès ou l’exécution est bloqué.

## Bonnes pratiques opérationnelles

- ne publiez pas un livrable sans relire sa lignée et ses preuves ;
- chargez d’abord les documents utiles dans la Connaissance avant de demander une analyse complexe ;
- tenez les catégories documentaires et les rôles projet à jour ;
- utilisez les signaux comme une file d’action, pas comme un simple historique ;
- conservez les trace IDs importants dans vos échanges de support.

## Dépannage par thème

### Sécurité et accès

| Symptôme | Vérification prioritaire |
| --- | --- |
| Impossible de se connecter | Vérifier le compte Entra, le tenant autorisé et la configuration d’authentification |
| Page visible mais non modifiable | Vérifier si vous êtes en lecture seule plutôt qu’en erreur |
| Accès refusé à une zone | Vérifier le rôle projet ou les droits d’administration plateforme |
| Connexion réussie mais accès bloqué | Vérifier la disponibilité des sièges si votre déploiement en consomme |

### Performance et fraîcheur

| Symptôme | Vérification prioritaire |
| --- | --- |
| Résultat jugé ancien | Contrôler la fraîcheur des sources et des citations |
| Document introuvable dans la Connaissance | Vérifier l’import, l’historique et le rafraîchissement |
| Comparaison portefeuille incohérente | Rafraîchir la cohorte et vérifier les seuils actifs |

### Usage

| Symptôme | Vérification prioritaire |
| --- | --- |
| L’agent répond hors sujet | Vérifier le projet actif et la qualité des sources disponibles |
| Un livrable ne reflète pas la dernière décision | Utiliser le diff, relire la lignée et republier la bonne version |
| Une action n’apparaît pas | Vérifier les droits et la disponibilité du connecteur nécessaire |

### Support

| Élément à transmettre | Pourquoi c’est utile |
| --- | --- |
| URL du déploiement | Identifier l’environnement concerné |
| Projet concerné | Rejouer le contexte |
| Trace ID | Retrouver précisément le run ou l’événement |
| Capture d’écran | Comprendre l’état visible au moment de l’incident |
| Heure approximative | Croiser l’événement avec les journaux |

## FAQ — sécurité

### Comment distinguer un problème d’authentification d’un problème de licence ?

Si la connexion Entra aboutit mais que l’accès reste bloqué, vérifiez le modèle de sièges et la disponibilité de licence avant d’incriminer l’authentification.

### Pourquoi puis-je ouvrir une page sans pouvoir l’enregistrer ?

Parce que l’application distingue les surfaces **consultables** de celles **modifiables**. Une page peut être lisible mais protégée en écriture selon votre rôle.

## FAQ — performance et données

### Pourquoi un document importé n’apparaît-il pas immédiatement dans la recherche ?

Commencez par vérifier l’historique d’import et l’état de rafraîchissement. Un contenu absent de la vue courante n’indique pas forcément un échec définitif.

### Pourquoi deux résultats d’agent semblent-ils différents ?

Comparez les preuves, la fraîcheur, la confiance et le contexte du run dans le Journal IA. Deux résultats proches en apparence peuvent s’appuyer sur des contextes ou états différents.

## FAQ — usage

### Quel est le meilleur ordre d’utilisation des écrans ?

Projet actif, Tableau de bord, Espace de travail, Connaissance, Agents, Rapports & artefacts, puis Journal IA pour la vérification.

### Quand faut-il ajouter un document à la Connaissance depuis Rapports & artefacts ?

Après relecture, lorsque le livrable doit devenir une source réutilisable et traçable pour les futurs échanges et analyses.

## FAQ — support

### Que faut-il fournir au support pour un problème sur un agent ?

Le projet concerné, la demande effectuée, le moment de l’incident, une capture d’écran et surtout le **trace ID** si le run figure dans le Journal IA.

### Où vérifier si un connecteur est en cause ?

Dans **Administration de la plateforme**, puis dans la section des intégrations concernées. Au niveau projet, vérifiez ensuite que l’intégration a bien été rendue disponible et activée.

## Suite

- [Glossaire](./glossaire.md)
- [Démarrage](./demarrage.md)
- [Portefeuille et administration technique](./portefeuille-et-administration-technique.md)
