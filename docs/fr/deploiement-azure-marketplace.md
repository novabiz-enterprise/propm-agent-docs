---
title: Déploiement Azure Marketplace
slug: /deploiement-azure-marketplace
description: Lancer un déploiement ProPM Agent depuis Azure Marketplace et renseigner les champs visibles dans l’assistant.
---

[Accueil](./index.md) · [Démarrage](./demarrage.md) · [Portefeuille et administration technique](./portefeuille-et-administration-technique.md)

## Objectif

Cette page documente le parcours de déploiement observé dans l’assistant Azure Portal pour l’offre Marketplace ProPM Agent, à partir des captures fournies et des paramètres confirmés dans le dépôt.

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

### Ce que montre la capture

La première capture montre également la boîte de dialogue **Créer nouveau** pour le groupe de ressources. Elle confirme qu’un nouveau groupe peut être créé directement depuis l’assistant.

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

### Points d’attention

- le **Platform Region** est distinct de la région choisie dans l’onglet **De base** ;
- les identifiants de groupes Entra doivent être préparés avant le déploiement si l’administration doit être déléguée ;
- le **VNet CIDR** doit être compatible avec votre plan d’adressage et ne pas entrer en collision avec un réseau déjà utilisé.

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
| Azure OpenAI (deploy during installation) | Quand vous voulez que le déploiement provisionne lui-même la ressource Azure OpenAI nécessaire |
| Azure OpenAI (customer-managed) | Quand vous disposez déjà d’une ressource Azure OpenAI gérée côté client |
| OpenAI-compatible endpoint | Quand vous devez cibler un endpoint compatible OpenAI déjà disponible |
| OpenRouter | Quand votre déploiement doit passer par OpenRouter pour le routage modèle |

## Vérification avant validation

Avant de sélectionner **Vérifier + créer** :

1. vérifiez l’abonnement et le groupe de ressources ;
2. confirmez la région plateforme retenue pour Container Apps / APIM / VNet ;
3. relisez les groupes Entra et les utilisateurs de bootstrap ;
4. confirmez le fournisseur LLM choisi ;
5. contrôlez les valeurs réseau, supervision et mot de passe.

## Ce que cette page permet de confirmer

À partir des captures et de la configuration observée, le déploiement expose bien :

- un cadrage Azure par abonnement, région et groupes de ressources ;
- des paramètres plateforme distincts des paramètres projet ;
- un choix explicite de fournisseur LLM ;
- des contrôles liés à Entra, Azure RBAC, Azure Monitor, réseau et secrets initiaux.

## Qualité des captures intégrées

Les trois captures intégrées sur cette page ne montrent **aucun message d’erreur visible** ni bannière d’échec.

- la première capture montre une boîte de dialogue de création de groupe de ressources avec un champ encore vide, sans erreur affichée ;
- la deuxième capture montre un formulaire en cours de saisie, sans message d’échec ni validation bloquante visible ;
- la troisième capture montre simplement le menu déroulant du fournisseur LLM ouvert.

## Suite

- [Démarrage](./demarrage.md)
- [Portefeuille et administration technique](./portefeuille-et-administration-technique.md)
- [Maintenance, support et FAQ](./maintenance-support-faq.md)
