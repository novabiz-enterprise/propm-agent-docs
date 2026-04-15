---
title: Déploiement Azure Marketplace
slug: /deploiement-azure-marketplace
description: Lancer un déploiement ProPM Agent depuis Azure Marketplace et renseigner les champs visibles dans l’assistant.
---

[Accueil](./index.md) · [Démarrage](./demarrage.md) · [Portefeuille et administration technique](./portefeuille-et-administration-technique.md)

## Objectif

Cette page documente le parcours de déploiement observé dans l’assistant Azure Portal pour l’offre Marketplace ProPM Agent, à partir des captures fournies et des paramètres confirmés dans le dépôt.

## Avant de lancer le déploiement

Préparez au minimum :

- l’**abonnement Azure** cible ;
- la stratégie de **groupe de ressources** et de **région** ;
- les **Group Object IDs** Entra des administrateurs plateforme ;
- les utilisateurs de bootstrap si vous en utilisez ;
- le choix du **LLM Provider** ;
- les origines **CORS** supplémentaires si nécessaires ;
- un plan d’adressage compatible pour le **VNet CIDR** ;
- la suite post-déploiement pour l’authentification Entra et le premier test de connexion.

## Étape 1 — Onglet **De base**

La première étape sert à définir le périmètre Azure du déploiement.

![Onglet de base du déploiement Azure Marketplace](/img/deploiement/deploiement-01-onglet-base.png)

### Champs visibles

| Champ | Usage |
| --- | --- |
| Abonnement | Sélectionne l’abonnement Azure qui portera le déploiement |
| Groupe de ressources | Définit le groupe de ressources principal du déploiement |
| Région | Définit la région de déploiement du managed application |
| Nom de l’application | Définit le nom de l’instance publiée |
| Groupe de ressources managé | Définit le groupe géré créé pour les ressources internes de la solution |

La capture montre aussi la boîte de dialogue **Créer nouveau** pour le groupe de ressources.

## Étape 2 — Onglet **Application Settings**

L’onglet **Application Settings** regroupe les paramètres plateforme, identité, réseau, supervision et secrets initiaux.

![Paramètres d’application du déploiement](/img/deploiement/deploiement-02-parametres-application.png)

### Champs visibles dans la capture

| Champ | Usage observé |
| --- | --- |
| Environment Name | Nom court d’environnement, par exemple `dev`, `test` ou `prod` |
| Platform Region (Container Apps / APIM / VNet) | Région utilisée pour les composants plateforme |
| Platform Administration Entra Group Object IDs | Groupe(s) Entra utilisés pour l’administration plateforme |
| Platform Administration Bootstrap Users (optional) | Utilisateurs de bootstrap facultatifs |
| Allow Azure RBAC admin recovery | Active une récupération admin basée sur Azure RBAC |
| LLM Provider | Choisit le fournisseur IA utilisé par la plateforme |
| CORS Allowed Origins | Définit les origines web supplémentaires autorisées |
| Enable alerting (Azure Monitor) | Active la supervision d’alertes Azure Monitor |
| Enable debug logging | Active des journaux de diagnostic plus détaillés |
| Mot de passe / Confirmer le mot de passe | Définit le mot de passe initial requis par l’assistant |
| VNet CIDR | Définit la plage réseau privée de la plateforme |

Points d’attention : la **Platform Region** est distincte de la région de l’onglet **De base**, les groupes Entra doivent être préparés avant déploiement et le **VNet CIDR** ne doit pas entrer en collision avec votre plan d’adressage existant.

## Étape 3 — Choix du fournisseur LLM

La troisième capture montre explicitement les options du menu **LLM Provider**.

![Liste des fournisseurs LLM visibles dans l’assistant](/img/deploiement/deploiement-03-fournisseur-llm.png)

### Options visibles dans le menu

- **Azure OpenAI (deploy during installation)**
- **Azure OpenAI (customer-managed)**
- **OpenAI-compatible endpoint**
- **OpenRouter**

### Comment choisir

| Option | Quand l’utiliser |
| --- | --- |
| Azure OpenAI (deploy during installation) | Quand le déploiement doit provisionner la ressource Azure OpenAI nécessaire |
| Azure OpenAI (customer-managed) | Quand vous disposez déjà d’une ressource Azure OpenAI gérée côté client |
| OpenAI-compatible endpoint | Quand vous ciblez un endpoint compatible OpenAI déjà disponible |
| OpenRouter | Quand votre déploiement doit passer par OpenRouter pour le routage modèle |

## Vérification avant **Vérifier + créer**

Avant de valider :

1. contrôlez l’abonnement, la région et les groupes de ressources ;
2. confirmez la région plateforme pour Container Apps / APIM / VNet ;
3. relisez les groupes Entra et les utilisateurs de bootstrap ;
4. confirmez le fournisseur LLM choisi ;
5. contrôlez les valeurs réseau, supervision et mot de passe.

## Après le déploiement

### Vérifications techniques minimales

1. relevez l’**URL web** réellement publiée ;
2. vérifiez l’URL **API** et, si exposée, l’URL **WebSocket** ;
3. vérifiez la disponibilité de **`/runtime-config.json`** ;
4. validez la cohérence entre l’URL publiée et les **redirect URIs** Entra.

### Authentification Entra

Selon votre mode de déploiement, vérifiez ou finalisez l’inscription d’application Entra :

- `clientId` ;
- `authority` / tenant ;
- `scopes` ;
- `redirectUri` et `postLogoutRedirectUri` ;
- si nécessaire, l’API exposée et ses scopes.

### Premier test fonctionnel

Après publication, réalisez au moins :

- une connexion avec un compte utilisateur standard ;
- une connexion avec un compte d’administration attendu ;
- l’ouverture de **Projets** ;
- l’ouverture du **Tableau de bord** ;
- un contrôle rapide de **Journal IA** et, si besoin, de **Platform Administration**.

## Passation vers le premier utilisateur test

Une fois le déploiement validé techniquement, formalisez une courte passation vers l’utilisateur de recette ou le premier propriétaire de projet :

1. transmettez l’**URL publiée** réellement utilisable ;
2. confirmez le **tenant** attendu et, si nécessaire, la règle d’invitation des comptes **guest** ;
3. demandez au testeur de suivre la page [Démarrage](./demarrage.md) pour la première connexion et la création ou sélection du projet ;
4. si le premier test échoue, récupérez immédiatement l’heure du test, le symptôme exact et, quand il existe, le premier **Trace ID** utile au support.

Cette passation réduit les faux diagnostics entre un déploiement techniquement réussi et un accès utilisateur encore incomplet.

## Incidents fréquents après installation

- **`redirect URI mismatch`** : l’URL publiée ne correspond pas aux Redirect URIs Entra ;
- **`unauthorized_client`** : client ID dans le mauvais tenant ou autorité incompatible ;
- **resource principal not found** : l’API ou son exposition de scope n’est pas complètement configurée ;
- **plus de sièges disponibles** : la connexion Entra réussit mais l’accès produit reste bloqué ;
- **provider Azure non enregistré pour l’alerting** : certaines ressources Azure Monitor peuvent échouer si le provider requis n’est pas inscrit.

## Qualité des captures intégrées

Les trois captures intégrées sur cette page ne montrent **aucun message d’erreur visible** ni bannière d’échec.

- la première capture montre une boîte de dialogue de création de groupe de ressources avec un champ encore vide, sans erreur affichée ;
- la deuxième capture montre un formulaire en cours de saisie, sans message d’échec ni validation bloquante visible ;
- la troisième capture montre simplement le menu déroulant du fournisseur LLM ouvert.

## Suite

- [Démarrage](./demarrage.md)
- [Portefeuille et administration technique](./portefeuille-et-administration-technique.md)
- [Maintenance, support et FAQ](./maintenance-support-faq.md)
