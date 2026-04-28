---
title: Démarrage
slug: /demarrage
description: Prérequis, accès, authentification et première configuration.
---

[Accueil](./index.md) · [Déploiement Azure Marketplace](./deploiement-azure-marketplace.md) · [Interface et navigation](./interface-et-navigation.md)

![Répertoire des projets](/img/screenshots/localized/fr/07-projects-directory.jpg)

## Objectif

Cette page explique comment préparer l’accès à ProPM Agent, réussir la première connexion, choisir le bon projet et vérifier les points techniques indispensables juste après un déploiement.

## Qui peut utiliser cette page

- **utilisateur métier** qui reçoit une URL et doit se connecter sans assistance lourde ;
- **propriétaire de projet** qui doit créer ou sélectionner le premier contexte projet ;
- **administrateur technique** qui doit valider l’authentification, le runtime et l’accès initial.

## Si vous n’avez pas encore d’URL d’application

Si votre instance n’est pas encore déployée, commencez par [Déploiement Azure Marketplace](./deploiement-azure-marketplace.md). Cette étape permet d’obtenir l’URL web, l’API et les paramètres runtime nécessaires avant toute connexion utilisateur.

## Avant de commencer

### Prérequis côté utilisateur

Pour un usage normal, il faut disposer de :

- l’**URL du déploiement** ProPM Agent ;
- un compte **Microsoft Entra ID** autorisé sur le tenant concerné ;
- l’accès à au moins un projet, ou le droit d’en créer un ;
- un navigateur moderne prenant en charge les applications web récentes ;
- si vous utilisez la voix, un navigateur compatible avec les API de reconnaissance vocale.

### Prérequis côté administrateur technique

Les éléments suivants doivent être correctement configurés :

| Élément | Rôle |
| --- | --- |
| `clientId` | Identifie l’application Entra utilisée côté web |
| `authority` | Définit l’autorité Microsoft Entra de connexion |
| `scopes` | Définit les permissions demandées au moment de l’authentification |
| `redirectUri` et `postLogoutRedirectUri` | Contrôlent les retours après connexion et déconnexion |
| `allowedTenantId` | Restreint, si configuré, le tenant autorisé |
| `/runtime-config.json` | Surcharge dynamique des URLs et paramètres d’authentification au runtime |
| URL API | Permet à l’interface web de joindre les services de plateforme |
| Abonnement / sièges | Conditionne l’accès dans les déploiements qui imposent une licence par utilisateur |

## Parcours de première connexion

1. ouvrez l’URL publiée de votre déploiement ;
2. laissez l’application vous rediriger vers la page de connexion Microsoft ;
3. connectez-vous avec le compte autorisé ;
4. revenez sur l’application, généralement sur le **Tableau de bord** ;
5. vérifiez la langue d’interface, le projet courant et les éventuels messages visibles dans la barre supérieure ;
6. ouvrez **Projets** pour sélectionner ou créer votre premier projet.

## Première connexion en 5 minutes

Pour un premier parcours très simple, suivez cet ordre :

1. connectez-vous ;
2. confirmez le **projet actif** dans la barre supérieure ou ouvrez **Projets** ;
3. créez ou ouvrez un projet ;
4. ouvrez **Agents** pour poser une première question simple, par exemple un statut ou un risque prioritaire ;
5. relisez la **sortie structurée** ;
6. ouvrez ensuite **Journal IA** si vous devez retrouver la trace du run, ou **Rapports & artefacts** si vous voulez transformer le résultat en document gouverné.

Ce parcours suffit pour comprendre la logique centrale de l’application sans passer d’abord par tous les écrans d’administration.

## États d’accès à connaître

Deux états différents existent dans l’interface :

- **lecture seule** : vous pouvez consulter une surface mais pas modifier ses réglages ;
- **accès refusé** : la route ou l’action n’est pas disponible pour votre compte.

Cette distinction est importante pour les zones d’administration : on peut parfois ouvrir une page technique en consultation sans pouvoir enregistrer de changement.

## Résultat attendu après la première connexion

Si tout est correctement configuré, vous devez pouvoir :

- atteindre le **Tableau de bord** dans de bonnes conditions ;
- ouvrir **Projets** ;
- sélectionner ou créer un projet ;
- accéder ensuite à **Espace de travail**, **Connaissance**, **Agents**, **Rapports & artefacts** et **Journal IA** selon vos droits.

## Créer un premier projet

Le formulaire de l’application propose les champs suivants :

- **ID projet** ;
- **Nom** ;
- **Description** ;
- **Langue de données par défaut** ;
- **Langues de données supplémentaires**.

![Fenêtre de création de projet](/img/screenshots/localized/fr/07-project-create-modal.jpg)

### Point important

La **langue de données du projet** n’est pas la même chose que la **langue de l’interface**.

La langue de données influence notamment :

- les catégories de documents proposées par défaut ;
- certains réglages ou invites système côté agents ;
- les valeurs initiales propres au projet.

## Si aucun projet n’apparaît

Plusieurs écrans affichent un état vide explicite lorsqu’aucun projet n’est sélectionné. C’est normal. C’est notamment le cas, dans l’interface, pour **Espace de travail**, **Connaissance** et **Journal IA**.

Autrement dit, un écran vide sur ces surfaces ne signifie pas automatiquement une panne : cela peut simplement indiquer qu’aucun **projet actif** n’est encore défini.

Pour poursuivre :

1. utilisez le **sélecteur de projet** de la barre supérieure ;
2. ouvrez **Projets** pour choisir un projet accessible ;
3. si vous avez le droit de création, créez un projet ;
4. si la liste reste vide, vérifiez avec votre administrateur que votre compte a bien été ajouté au bon projet.

## Contexte projet mémorisé localement

Le projet courant peut être **mémorisé dans le navigateur** pour faciliter la reprise sur le même poste. Cette mémorisation est une commodité locale :

- elle dépend du navigateur et parfois de la session courante ;
- elle n’est pas une préférence partagée à l’échelle du tenant ;
- changer de navigateur, de profil ou de machine peut faire disparaître ce contexte mémorisé.

Si un doute persiste, revenez toujours à **Projets** ou au **sélecteur de projet** de la barre supérieure pour confirmer le contexte réellement actif.

## Checklist post-déploiement pour l’administrateur technique

Après un nouveau déploiement, vérifiez au minimum :

1. l’**URL web** réellement publiée ;
2. la disponibilité du fichier **`/runtime-config.json`** ;
3. la cohérence entre l’URL publiée et les **redirect URIs** configurées dans Entra ;
4. la présence d’un **client ID** valide ;
5. la bonne valeur d’**authority** et, si utilisé, d’**allowedTenantId** ;
6. les **scopes** attendus par le frontend et l’API ;
7. l’URL **API** ;
8. la consommation ou disponibilité des **sièges** si le plan l’impose ;
9. un premier test de connexion avec un compte utilisateur standard et un compte administrateur.

## Vérifications fréquentes lors de la première connexion

### Le compte Microsoft s’authentifie, mais l’accès n’aboutit pas encore comme prévu

Vérifiez dans cet ordre :

1. le **tenant** utilisé pendant la connexion ;
2. le fait que le compte soit bien autorisé dans ce tenant ;
3. la disponibilité d’un **siège** si le plan applique une licence par utilisateur ;
4. l’existence d’au moins un projet accessible pour ce compte.

### Cas tenant ou compte externe / guest

Si Microsoft indique que votre compte n’existe pas dans le tenant cible, cela signifie généralement qu’il doit être invité comme **utilisateur externe / guest** dans le tenant qui héberge l’application, puis autorisé sur l’application d’entreprise ou via un groupe.

### `redirect URI mismatch`

Si la connexion renvoie une erreur de redirection, comparez l’URL réellement publiée avec les **Redirect URIs** de l’inscription d’application Entra. Chaque environnement publié doit être listé exactement, sans faute de frappe.

### `unauthorized_client` ou application Entra dans le mauvais tenant

Ce symptôme indique généralement que l’inscription d’application ne se trouve pas dans le bon tenant, ou que le déploiement utilise une autorité incompatible avec une application **single-tenant**.

### Accès réussi, mais écran admin en lecture seule

Cela signifie souvent que le compte est authentifié mais n’a pas été résolu comme administrateur plateforme modifiable. Vérifiez les groupes d’administration, le tenant du jeton et la méthode de résolution d’admin utilisée par votre environnement.

### Connexion OK, tableau de bord chargé, mais une vérification complémentaire est utile

Ce cas indique souvent que l’authentification a réussi mais qu’une vérification complémentaire du runtime ou de la connectivité reste utile. Ouvrez l’**indicateur de santé**, relevez l’état **API**, **auth**, la **latence** et le **projet courant**, puis poursuivez vers [Interface et navigation](./interface-et-navigation.md) pour lire le panneau et vers [Maintenance, support et FAQ](./maintenance-support-faq.md) pour les repères de vérification.

## Repères rapides — accès à confirmer

| Situation initiale | Vérifiez d’abord | Puis |
| --- | --- | --- |
| Microsoft renvoie une erreur avant le retour dans l’application | `authority`, tenant utilisé, `clientId`, `redirectUri`, `postLogoutRedirectUri`, `allowedTenantId` | comparez la configuration runtime et l’inscription Entra, puis refaites un test avec le bon compte |
| La connexion Microsoft réussit mais l’application reste bloquée | disponibilité d’un **siège**, indicateur de santé, URL API | vérifiez ensuite l’accès à un projet et les droits réels du compte |
| La connexion réussit, le tableau de bord charge, mais un contrôle de disponibilité est recommandé | états **auth**, **API**, latence et projet actif | ouvrez [Interface et navigation](./interface-et-navigation.md), puis [Maintenance, support et FAQ](./maintenance-support-faq.md) pour distinguer auth, runtime et contexte projet |
| L’application s’ouvre mais aucun projet n’apparaît | sélecteur de projet, liste **Projets**, appartenance au projet, droit de création | demandez au **Project Owner** d’ajouter le compte au bon projet si nécessaire |
| Une page est visible mais non modifiable | rôle projet ou rôle admin, état **lecture seule** vs **accès refusé** | contrôlez ensuite le groupe d’administration ou les permissions projet concernées |

## Situation, éléments à relever et page suivante

| Situation rencontrée | Éléments à relever | Page suivante à ouvrir |
| --- | --- | --- |
| Erreur Microsoft avant retour dans l’application | message exact, capture d’écran, compte utilisé, URL réellement ouverte | [Démarrage](./demarrage.md), puis [Maintenance, support et FAQ](./maintenance-support-faq.md) si le doute persiste |
| Tableau de bord chargé mais vérification de disponibilité utile | états **API**, **realtime**, **auth**, latence, heure du test, projet courant | [Interface et navigation](./interface-et-navigation.md), puis [Maintenance, support et FAQ](./maintenance-support-faq.md) |
| Aucun projet visible | capture du sélecteur de projet, e-mail du compte, projet attendu | [Projets et espace de travail](./projets-et-espace-de-travail.md) |
| Page visible mais contrôles grisés | nom de la page, rôle attendu, capture des boutons désactivés | [Contrôle d’accès et rôles projet](./controle-acces-et-roles.md) ou [Portefeuille et administration technique](./portefeuille-et-administration-technique.md) selon la surface |
| Connexion OK mais runs qui ne démarrent pas | `Trace ID` si présent, projet actif, indicateur de santé, fournisseur IA attendu | [Maintenance, support et FAQ](./maintenance-support-faq.md), puis [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md) |

Pour une situation qui mélange authentification, runtime, projet, siège ou fournisseur IA, utilisez ensuite [Maintenance, support et FAQ](./maintenance-support-faq.md) comme page de vérification transverse.

## Bonnes pratiques dès le départ

- choisissez le bon projet **avant** de lancer des agents ;
- définissez correctement la langue de données du projet à la création ;
- vérifiez votre niveau de droit avant de modifier la gouvernance ou l’administration technique ;
- si votre déploiement utilise un modèle à sièges, contrôlez que votre accès a bien été attribué ;
- gardez l’URL du déploiement et, si nécessaire, le **Trace ID** affiché pour le support.

## Suite

- [Déploiement Azure Marketplace](./deploiement-azure-marketplace.md)
- [Interface et navigation](./interface-et-navigation.md)
- [Projets et espace de travail](./projets-et-espace-de-travail.md)
- [Maintenance, support et FAQ](./maintenance-support-faq.md)
