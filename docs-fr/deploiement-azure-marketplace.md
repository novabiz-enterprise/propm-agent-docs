---
title: Déploiement Azure Marketplace
slug: /deploiement-azure-marketplace
description: Déployer ProPM Agent depuis Azure Marketplace, choisir le fournisseur IA pendant l’installation et finaliser la mise en service dans l’administration.
---

[Accueil](./index.md) · [Démarrage](./demarrage.md) · [Portefeuille et administration technique](./portefeuille-et-administration-technique.md)

## Objectif

Cette page explique comment déployer **ProPM Agent** depuis **Azure Marketplace**, puis comment terminer proprement la mise en service côté client.

Le point essentiel à retenir est simple :

- **Azure Marketplace installe la plateforme** ;
- le champ **LLM Provider** permet de choisir la **famille de fournisseur IA** utilisée par l’environnement ;
- la **mise en service finale** du fournisseur IA se termine ensuite dans **Administration de la plateforme > Paramètres du fournisseur IA**.

Autrement dit, le déploiement ne suffit pas, à lui seul, à rendre le fournisseur IA immédiatement exploitable pour les utilisateurs finaux.

## Ce qu’un administrateur décide pendant le déploiement

Pendant l’assistant Marketplace, l’administrateur décide notamment :

- dans quel **abonnement Azure** déployer la solution ;
- dans quel **groupe de ressources** et dans quelle **région** ;
- quels **groupes Entra** administreront la plateforme ;
- quel **fournisseur IA principal** l’environnement utilisera ;
- quelles règles initiales de **CORS**, de **journalisation**, de **supervision** et de **réseau** appliquer.

## Ce qui se termine après le déploiement

Après installation, l’administrateur plateforme doit encore :

1. ouvrir **Administration de la plateforme** ;
2. aller dans **Paramètres du fournisseur IA** ;
3. compléter les champs spécifiques au fournisseur retenu ;
4. enregistrer la configuration ;
5. lancer **Validate** ;
6. lancer **Test** ;
7. lancer **Activate** ;
8. confirmer ensuite le fournisseur réellement utilisé dans **Journal IA**.

## Avant de lancer le déploiement

Préparez au minimum :

- l’**abonnement Azure** cible ;
- le **groupe de ressources** principal et la **région** ;
- les **Group Object IDs Entra** des administrateurs plateforme ;
- les éventuels **utilisateurs de bootstrap** ;
- le choix du **fournisseur IA** à utiliser au démarrage ;
- si vous choisissez **Azure OpenAI**, l’administrateur qui finalisera ensuite le **nom de déploiement LLM** dans l’administration ;
- les **origines CORS** supplémentaires si l’application doit être appelée depuis d’autres domaines ;
- un plan d’adressage compatible pour le **VNet CIDR** ;
- la préparation du premier test de connexion et des **redirect URIs Entra**.

## Étape 1 — Onglet **De base**

La première étape définit le périmètre Azure du déploiement.

![Onglet de base du déploiement Azure Marketplace](/img/deploiement/deploiement-01-onglet-base.png)

### Champs visibles

| Champ | À quoi il sert |
| --- | --- |
| Abonnement | Sélectionne l’abonnement Azure qui portera l’installation |
| Groupe de ressources | Définit le groupe de ressources principal du déploiement |
| Région | Définit la région Azure de l’instance Marketplace |
| Nom de l’application | Donne le nom de l’instance ProPM Agent |
| Groupe de ressources managé | Définit le groupe géré qui recevra les ressources internes de la solution |

## Étape 2 — Onglet **Application Settings**

Cet écran regroupe les paramètres d’identité, de fournisseur IA, de sécurité initiale, de supervision et de réseau.

![Paramètres d’application actuels du déploiement](/img/deploiement/fr/deploiement-02-application-settings-actuel.png)

### Champs visibles dans la capture

| Champ | Lecture simple |
| --- | --- |
| Environment Name | Nom court de l’environnement, par exemple `dev`, `test` ou `prod` |
| Platform Administration Entra Group Object IDs | Groupes Entra autorisés à administrer la plateforme |
| Platform Administration Bootstrap Users (optional) | Utilisateurs de secours ou de bootstrap si vous en utilisez |
| Allow Azure RBAC admin recovery | Autorise une récupération d’administration basée sur Azure RBAC |
| LLM Provider | Choisit la famille de fournisseur IA utilisée par l’environnement |
| CORS Allowed Origins | Liste les domaines web supplémentaires autorisés |
| Enable alerting (Azure Monitor) | Active la supervision d’alertes Azure Monitor |
| Enable debug logging | Active des journaux plus détaillés pour une lecture technique approfondie |
| Mot de passe / Confirmer le mot de passe | Définit le mot de passe initial demandé par l’assistant |
| VNet CIDR | Définit la plage réseau privée réservée à la plateforme |

### Point d’attention important

Dans la version actuelle du formulaire, la **région** ne se choisit plus dans cet onglet. Elle reste définie dans l’onglet **De base**.

## Étape 3 — Choisir le fournisseur IA pendant le déploiement

Le champ **LLM Provider** ne sert pas uniquement à Azure OpenAI. Il permet de choisir l’un des fournisseurs IA visibles dans le produit.

### Les 4 cas à connaître

| Fournisseur IA | Quand le choisir | Avantage principal | Ce que vous décidez pendant le déploiement | Ce que vous terminez ensuite dans l’administration |
| --- | --- | --- | --- | --- |
| **Azure OpenAI** | si l’environnement client est déjà centré sur Azure, Entra, réseau privé et gouvernance Microsoft | intégration naturelle à l’écosystème Azure | vous choisissez Azure OpenAI comme fournisseur cible | vous renseignez l’endpoint, la version API, le mode d’authentification et surtout le **LLM deployment name** |
| **OpenAI** | si le client veut utiliser directement la plateforme OpenAI | parcours simple et direct | vous choisissez OpenAI comme fournisseur cible | vous complétez l’URL utilisée, la clé ou la référence de secret, le modèle par défaut, puis vous validez et activez |
| **OpenRouter** | si le client veut comparer plusieurs familles de modèles via un point d’entrée unique | un seul raccordement pour plusieurs modèles et scénarios de routage | vous choisissez OpenRouter comme fournisseur cible | vous complétez la Base URL, la clé et le modèle par défaut, puis vous validez et activez |
| **OpenAI-compatible** | si le client utilise une gateway partenaire, un endpoint d’entreprise ou un runtime compatible | permet de raccorder une implémentation compatible sans changer le produit | vous choisissez OpenAI-compatible comme fournisseur cible | vous complétez l’endpoint exact, l’authentification et le modèle ou déploiement attendu |

### Règle simple à retenir

Le déploiement **désigne le fournisseur**. L’administration **rend ce fournisseur opérationnel**.

## Ce que l’utilisateur final perçoit réellement

Pour l’utilisateur final, le fournisseur choisi influence :

- les **modèles** réellement utilisés ;
- le niveau de **gouvernance technique** imposé par l’organisation ;
- la façon dont l’équipe d’administration gère les **clés**, **secrets** et **déploiements** ;
- parfois la **rapidité de mise en service** ou la **souplesse de changement de modèle**.

En revanche, l’utilisateur final ne doit pas avoir à comprendre toute la mécanique d’installation. Son besoin est surtout que le fournisseur soit :

- configuré ;
- validé ;
- testé ;
- activé ;
- traçable dans **Journal IA**.

## Cas 1 — **Azure OpenAI**

La capture ci-dessous montre le comportement observé quand **LLM Provider** est réglé sur **Azure OpenAI**.

![Sélection Azure OpenAI avec indication de configuration ultérieure dans l’administration](/img/deploiement/fr/deploiement-03-azure-openai-marketplace-managed.png)

### Quand ce choix est pertinent

Choisissez **Azure OpenAI** lorsque le client :

- travaille déjà majoritairement dans Azure ;
- souhaite un cadrage fort autour d’**Entra**, du réseau et de la gouvernance Microsoft ;
- veut sélectionner des **déploiements** précis dans sa ressource Azure OpenAI.

### Ce que cela implique pendant le déploiement

Pendant Marketplace :

- vous choisissez **Azure OpenAI** comme fournisseur ;
- l’installation peut préparer la connexion Azure associée ;
- pour le cas Azure OpenAI managé, le déploiement sonde maintenant plusieurs régions Azure OpenAI et sélectionne automatiquement la meilleure région disponible selon la disponibilité réelle des modèles ;
- le runtime conserve des aliases de déploiement Azure OpenAI stables nommés `chat` et `embeddings` ;
- le choix exact du modèle runtime n’est plus figé globalement au moment du déploiement.

### Ce qu’il faut encore faire après installation

Après le déploiement, ouvrez **Administration de la plateforme > Paramètres du fournisseur IA** puis confirmez ou relisez :

- la **région** Azure OpenAI sélectionnée par le déploiement ;
- le **catalogue de modèles** réellement découvert pour cette région ;
- le **modèle recommandé** proposé par la plateforme ;
- le modèle actuellement sélectionné et synchronisé derrière l’alias stable `chat` ;
- l’état de connectivité et de validation.

### Spécificité importante

Si le déploiement a déjà installé un secret ou une clé pour Azure OpenAI, l’interface peut indiquer qu’aucune **API key visible par l’utilisateur** n’est nécessaire dans ce formulaire. Dans ce cas, l’administrateur se concentre surtout sur la sélection du modèle, les tests de connectivité et la synchronisation du déploiement.

Si un administrateur sélectionne volontairement une génération GPT inférieure à **GPT-5**, l’interface doit afficher un avertissement clair avant l’enregistrement. L’enregistrement d’un nouveau modèle Azure OpenAI doit ensuite synchroniser le vrai déploiement Azure OpenAI derrière l’alias `chat`, sans demander à l’utilisateur de renommer manuellement les déploiements.

## Cas 2 — **OpenAI**

### Quand ce choix est pertinent

Choisissez **OpenAI** lorsque le client veut utiliser directement les API OpenAI, sans passer par Azure OpenAI ni par une gateway intermédiaire.

### Avantages pratiques

- configuration généralement plus directe ;
- lecture simple pour une équipe qui standardise déjà ses usages sur OpenAI ;
- pas de gestion de **nom de déploiement Azure**.

### Ce que vous décidez pendant le déploiement

Pendant Marketplace, vous décidez simplement que l’environnement utilisera **OpenAI** comme fournisseur principal.

### Ce qu’il faut encore faire après installation

Dans **Paramètres du fournisseur IA**, complétez ensuite :

- la **Base URL** ou l’endpoint utilisé par le produit ;
- le **modèle par défaut** ;
- la **clé API** ou la **référence de secret** ;
- la séquence **Save → Validate → Test → Activate**.

### Impact côté client

L’utilisateur final n’a pas besoin de voir ces réglages. Ce qui compte pour lui est que l’administrateur ait bien confirmé la connectivité et le modèle réellement exploité.

## Cas 3 — **OpenRouter**

### Quand ce choix est pertinent

Choisissez **OpenRouter** lorsque le client veut accéder à plusieurs familles de modèles via **un point d’entrée unique**, par exemple pour comparer les résultats ou ajuster le routage plus facilement.

### Avantages pratiques

- un seul raccordement côté plateforme ;
- utile pour comparer plusieurs modèles ;
- pratique quand l’organisation veut conserver une certaine souplesse de routage.

### Ce que vous décidez pendant le déploiement

Pendant Marketplace, vous indiquez que l’environnement utilisera **OpenRouter** comme fournisseur principal.

### Ce qu’il faut encore faire après installation

Dans **Paramètres du fournisseur IA**, complétez ensuite :

- la **Base URL** ;
- la **clé API** ou la référence de secret ;
- le **modèle par défaut** ;
- puis lancez **Save → Validate → Test → Activate**.

### Exemple simple

Un client veut démarrer vite, comparer plusieurs modèles puis stabiliser plus tard son choix. **OpenRouter** est alors un bon candidat pour une première phase de cadrage.

## Cas 4 — **OpenAI-compatible**

### Quand ce choix est pertinent

Choisissez **OpenAI-compatible** lorsque le client n’utilise ni OpenAI direct ni Azure OpenAI, mais un **endpoint compatible**, par exemple :

- une gateway d’entreprise ;
- une solution partenaire ;
- un runtime compatible auto-hébergé.

### Avantages pratiques

- permet de raccorder un fournisseur compatible sans modifier ProPM Agent ;
- utile quand l’architecture du client impose un point d’entrée IA spécifique ;
- bon choix pour un tenant qui veut garder une couche de contrôle ou de routage interne.

### Ce que vous décidez pendant le déploiement

Pendant Marketplace, vous indiquez que l’environnement utilisera un fournisseur **OpenAI-compatible**.

### Ce qu’il faut encore faire après installation

Dans **Paramètres du fournisseur IA**, complétez ensuite :

- la **Base URL exacte** ou l’endpoint exact ;
- le **mode d’authentification** attendu ;
- la **clé** ou la **référence de secret** ;
- le **modèle** ou le **déploiement** attendu ;
- puis lancez **Save → Validate → Test → Activate**.

### Point de vigilance

Ici, le sujet principal est la **compatibilité réelle** de l’endpoint. Une configuration enregistrée ne suffit pas : le couple **Validate + Test** est indispensable.

## Parcours commun après installation pour tous les fournisseurs IA

Quel que soit le fournisseur choisi au déploiement, utilisez toujours ce parcours :

1. ouvrez **Administration de la plateforme** ;
2. allez dans **Paramètres du fournisseur IA** ;
3. sélectionnez le fournisseur à préparer ;
4. complétez les champs demandés ;
5. cliquez sur **Save** pour enregistrer ;
6. cliquez sur **Validate** pour contrôler la configuration ;
7. cliquez sur **Test** pour vérifier la connectivité réelle ;
8. cliquez sur **Activate** pour rendre ce fournisseur effectif pour les utilisateurs finaux ;
9. ouvrez ensuite **Journal IA** pour confirmer le fournisseur réellement utilisé sur un run réel.

### Comment lire les boutons d’administration

| Bouton | Ce qu’il signifie |
| --- | --- |
| Save | enregistre la configuration saisie |
| Validate | vérifie que les champs attendus sont cohérents |
| Test | vérifie la connectivité réelle avec le fournisseur |
| Activate | rend le fournisseur effectif pour les utilisateurs finaux |

## Vérification avant **Vérifier + créer**

Avant de lancer la création :

1. contrôlez l’abonnement, la région et les groupes de ressources ;
2. relisez les groupes Entra et les éventuels utilisateurs de bootstrap ;
3. confirmez le fournisseur IA choisi ;
4. si **Azure OpenAI** est sélectionné, identifiez clairement qui finalisera le **LLM deployment name** après installation ;
5. contrôlez les paramètres réseau, supervision et mot de passe.

## Après le déploiement

### Vérifications techniques minimales

1. relevez l’**URL web** réellement publiée ;
2. vérifiez l’URL **API** et, si exposée, l’URL **WebSocket** ;
3. vérifiez la disponibilité de **`/runtime-config.json`** ;
4. validez la cohérence entre l’URL publiée et les **redirect URIs Entra** ;
5. ouvrez **Administration de la plateforme > Paramètres du fournisseur IA** et confirmez que le fournisseur choisi est bien préparé ;
6. vérifiez ensuite que l’état attendu passe par **Configuration**, **Validation**, **Test** puis **Operational**.

### Authentification Entra

Selon votre mode de déploiement, vérifiez ou finalisez l’inscription d’application Entra :

- `clientId` ;
- `authority` ou tenant ;
- `scopes` ;
- `redirectUri` et `postLogoutRedirectUri` ;
- si nécessaire, l’API exposée et ses scopes.

### Premier test fonctionnel

Après publication, réalisez au minimum :

- une connexion avec un compte utilisateur standard ;
- une connexion avec un compte d’administration attendu ;
- l’ouverture de **Projets** ;
- l’ouverture du **Tableau de bord** ;
- l’ouverture de **Administration de la plateforme > Paramètres du fournisseur IA** ;
- un **Save → Validate → Test → Activate** sur le fournisseur retenu si ce n’est pas déjà fait ;
- un contrôle de **Journal IA** pour confirmer le fournisseur effectif et la famille de modèle utilisés.

## Informations à transmettre à l’équipe cliente

Une fois la plateforme validée techniquement, transmettez au minimum :

1. l’**URL publiée** réellement utilisable ;
2. le **tenant** attendu et, si besoin, la règle d’invitation des comptes **guest** ;
3. le premier compte ou groupe de test ;
4. le fournisseur IA réellement prêt à l’usage ;
5. la page [Démarrage](./demarrage.md) à suivre pour la première connexion.

## Points de contrôle utiles après installation

| Point à vérifier | Pourquoi c’est important |
| --- | --- |
| URL publiée et Redirect URIs Entra | évite un premier accès bloqué malgré un déploiement réussi |
| Groupes d’administration et utilisateurs bootstrap | garantit l’entrée initiale dans l’administration |
| Fournisseur IA choisi | évite de confondre un fournisseur seulement déclaré avec un fournisseur réellement opérationnel |
| Validation et Test | confirme que la configuration n’est pas seulement enregistrée, mais utilisable |
| Journal IA | confirme le fournisseur réellement employé sur un run |
| Supervision Azure | garantit que l’observabilité demandée est bien active |

## Suite

- [Démarrage](./demarrage.md)
- [Portefeuille et administration technique](./portefeuille-et-administration-technique.md)
- [Maintenance, support et FAQ](./maintenance-support-faq.md)