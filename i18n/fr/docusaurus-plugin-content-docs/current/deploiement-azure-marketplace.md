---
title: Déploiement Azure Marketplace
slug: /deploiement-azure-marketplace
description: Lancer un déploiement ProPM Agent depuis Azure Marketplace, renseigner les champs actuels de l’assistant et finaliser Azure OpenAI après installation.
---

[Accueil](./index.md) · [Démarrage](./demarrage.md) · [Portefeuille et administration technique](./portefeuille-et-administration-technique.md)

## Objectif

Cette page documente le parcours de déploiement observé dans l’assistant Azure Portal pour l’offre Marketplace ProPM Agent, à partir des captures fournies et des paramètres confirmés dans le dépôt.

## Avant de lancer le déploiement

Préparez au minimum :

- l’**abonnement Azure** cible ;
- la stratégie de **groupe de ressources** et de **région Azure** ;
- les **Group Object IDs** Entra des administrateurs plateforme ;
- les utilisateurs de bootstrap si vous en utilisez ;
- le choix du **LLM Provider** ;
- si vous retenez **Azure OpenAI**, l’administrateur qui finalisera ensuite le déploiement LLM dans **Administration de la plateforme** ;
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

La version actuelle observée de l’onglet **Application Settings** ne présente plus de champ **Platform Region**. Cet écran regroupe désormais les paramètres d’identité, de fournisseur IA, de sécurité initiale, de supervision et de réseau.

![Paramètres d’application actuels du déploiement](/img/deploiement/fr/deploiement-02-application-settings-actuel.png)

### Champs visibles dans la capture

| Champ | Usage observé |
| --- | --- |
| Environment Name | Nom court d’environnement, par exemple `dev`, `test` ou `prod` |
| Platform Administration Entra Group Object IDs | Groupe(s) Entra utilisés pour l’administration plateforme |
| Platform Administration Bootstrap Users (optional) | Utilisateurs de bootstrap facultatifs |
| Allow Azure RBAC admin recovery | Active une récupération admin basée sur Azure RBAC |
| LLM Provider | Choisit le fournisseur IA utilisé par la plateforme ; si Azure OpenAI est sélectionné, la sélection finale du LLM se fait ensuite dans l’administration |
| CORS Allowed Origins | Définit les origines web supplémentaires autorisées |
| Enable alerting (Azure Monitor) | Active la supervision d’alertes Azure Monitor |
| Enable debug logging | Active des journaux de diagnostic plus détaillés |
| Mot de passe / Confirmer le mot de passe | Définit le mot de passe initial requis par l’assistant |
| VNet CIDR | Définit la plage réseau privée de la plateforme |

Points d’attention : dans la version actuelle du formulaire, le choix de région ne se fait plus dans cet onglet. La région de déploiement reste définie dans l’onglet **De base**. Les groupes Entra doivent être préparés avant déploiement et le **VNet CIDR** ne doit pas entrer en collision avec votre plan d’adressage existant.

Le champ **LLM Provider** reste le point de choix du fournisseur IA ; le cas **Azure OpenAI** ajoute ensuite une étape d’administration post-déploiement.

## Étape 3 — Cas **Azure OpenAI** pendant le déploiement

La capture suivante montre le comportement observé quand **LLM Provider** est réglé sur **Azure OpenAI (marketplace-managed account)**.

![Sélection Azure OpenAI avec indication de configuration ultérieure dans l’administration](/img/deploiement/fr/deploiement-03-azure-openai-marketplace-managed.png)

Le texte d’aide visible sous le champ confirme deux points importants :

- la préparation du compte / endpoint Azure OpenAI se fait pendant le déploiement ;
- le choix final du **LLM / deployment** est complété plus tard dans **Platform Administration > AI Provider Settings**.

### Ce que cela implique

| Moment | Décision prise |
| --- | --- |
| Déploiement Marketplace | On sélectionne Azure OpenAI comme fournisseur cible et on prépare l’intégration Azure associée |
| Administration de la plateforme > AI provider settings | L’administrateur choisit le déploiement Azure OpenAI réellement visible dans la ressource Azure OpenAI du client |
| Journal IA | On vérifie ensuite le fournisseur effectif et la famille de modèle réellement utilisés |

### Ce que le déploiement ne termine pas tout seul

Le choix **Azure OpenAI** dans Marketplace ne suffit pas à rendre le provider directement exploitable pour les utilisateurs finaux. Après installation, il reste encore à :

1. ouvrir **Administration de la plateforme** ;
2. renseigner ou confirmer les paramètres du provider dans **AI provider settings** ;
3. choisir le **LLM deployment name** réellement visible côté Azure OpenAI ;
4. lancer **Save → Validate → Test → Activate** avant de considérer le provider comme opérationnel ;
5. confirmer enfin le résultat sur un run réel dans **Journal IA**.

| Cas | Ce qui se décide au déploiement | Ce qui se termine ensuite dans l’administration |
| --- | --- | --- |
| Azure OpenAI (`marketplace-managed account`) | fournisseur cible et préparation de l’intégration Azure | sélection du déploiement LLM, validation, test et activation |
| Autre provider choisi dans `LLM Provider` | choix du provider cible pendant l’installation | contrôles finaux, secrets éventuels, validation et activation selon le provider |

### Parcours recommandé après installation

1. terminez le déploiement Marketplace ;
2. ouvrez **Administration de la plateforme** ;
3. allez dans **AI provider settings** ;
4. sélectionnez le déploiement / LLM Azure OpenAI à utiliser parmi ceux visibles dans la ressource Azure OpenAI du client ;
5. enregistrez la configuration ;
6. lancez un run de test et vérifiez le résultat dans **Journal IA**.

Pour la séquence détaillée de validation et d’exploitation admin, voir aussi [Portefeuille et administration technique](./portefeuille-et-administration-technique.md).

## Vérification avant **Vérifier + créer**

Avant de valider :

1. contrôlez l’abonnement, la région et les groupes de ressources ;
2. relisez les groupes Entra et les utilisateurs de bootstrap ;
3. confirmez le fournisseur LLM choisi ;
4. si **Azure OpenAI** est sélectionné, identifiez qui finalisera le déploiement LLM dans l’administration après installation ;
5. contrôlez les valeurs réseau, supervision et mot de passe.

## Après le déploiement

### Vérifications techniques minimales

1. relevez l’**URL web** réellement publiée ;
2. vérifiez l’URL **API** et, si exposée, l’URL **WebSocket** ;
3. vérifiez la disponibilité de **`/runtime-config.json`** ;
4. validez la cohérence entre l’URL publiée et les **redirect URIs** Entra ;
5. si **Azure OpenAI** a été retenu, ouvrez **Platform Administration > AI provider settings** et vérifiez que le déploiement / LLM attendu est bien sélectionné.

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
- un contrôle rapide de **Platform Administration > AI provider settings** si Azure OpenAI a été retenu ;
- un contrôle de **Journal IA** pour confirmer le fournisseur effectif et la famille de modèle utilisés.

## Passation vers le premier utilisateur test

Une fois le déploiement validé techniquement, formalisez une courte passation vers l’utilisateur de recette ou le premier propriétaire de projet :

1. transmettez l’**URL publiée** réellement utilisable ;
2. confirmez le **tenant** attendu et, si nécessaire, la règle d’invitation des comptes **guest** ;
3. demandez au testeur de suivre la page [Démarrage](./demarrage.md) pour la première connexion et la création ou sélection du projet ;
4. si **Azure OpenAI** a été retenu, confirmez que le LLM a bien été précisé dans **Administration de la plateforme** avant le premier run ;
5. si le premier test échoue, récupérez immédiatement l’heure du test, le symptôme exact et, quand il existe, le premier **Trace ID** utile au support.

Cette passation réduit les faux diagnostics entre un déploiement techniquement réussi et un accès utilisateur encore incomplet.

## Incidents fréquents après installation

- **`redirect URI mismatch`** : l’URL publiée ne correspond pas aux Redirect URIs Entra ;
- **`unauthorized_client`** : client ID dans le mauvais tenant ou autorité incompatible ;
- **resource principal not found** : l’API ou son exposition de scope n’est pas complètement configurée ;
- **plus de sièges disponibles** : la connexion Entra réussit mais l’accès produit reste bloqué ;
- **configuration Azure OpenAI incomplète** : le fournisseur a été choisi au déploiement mais aucun déploiement LLM n’a encore été confirmé dans **AI provider settings** ;
- **provider Azure non enregistré pour l’alerting** : certaines ressources Azure Monitor peuvent échouer si le provider requis n’est pas inscrit.

## Qualité des captures intégrées

Les trois captures intégrées sur cette page ne montrent **aucun message d’erreur visible** ni bannière d’échec.

- la première capture montre une boîte de dialogue de création de groupe de ressources avec un champ encore vide, sans erreur affichée ;
- la deuxième capture montre la version actuelle de l’onglet **Application Settings**, sans champ **Platform Region** visible ;
- la troisième capture montre **Azure OpenAI (marketplace-managed account)** sélectionné, avec un texte d’aide qui renvoie explicitement au choix final du LLM dans l’administration.

## Suite

- [Démarrage](./demarrage.md)
- [Portefeuille et administration technique](./portefeuille-et-administration-technique.md)
- [Maintenance, support et FAQ](./maintenance-support-faq.md)
