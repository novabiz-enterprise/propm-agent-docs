---
title: Portefeuille et administration technique
slug: /portefeuille-et-administration-technique
description: Comparer plusieurs projets, administrer la plateforme, gérer les intégrations, le fournisseur IA, le choix de modèle Azure OpenAI et les sièges.
---

[Accueil](./index.md) · [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md) · [Maintenance, support et FAQ](./maintenance-support-faq.md)

![Centre de commande portefeuille](/img/screenshots/localized/fr/02-portfolio-command-center.png)

## Objectif

Cette page couvre deux surfaces distinctes : le **Centre de commande portefeuille** pour la comparaison multi-projets et **Administration de la plateforme** pour la configuration technique tenant-wide.

## Centre de commande portefeuille

La page portefeuille permet de comparer plusieurs projets à partir de signaux communs.

### Capacités confirmées

- sélection de plusieurs projets ;
- catalogue de signaux configurables ;
- gestion de **poids** et de **seuils** ;
- filtre de **sévérité minimale** ;
- cohortes sauvegardées ;
- rafraîchissement de la comparaison.

### Signaux observés

Le catalogue visible inclut notamment :

- `activity_change`
- `blocker_density`
- `freshness_issues`
- `contradiction_count`
- `failed_runs`
- `schedule_pressure`
- `cost_pressure`

### Ce que retient une cohorte

Une cohorte sauvegardée mémorise au minimum :

- les projets choisis ;
- les signaux activés ;
- les poids ;
- les seuils ;
- la sévérité minimale.

![Éditeur de cohorte portefeuille](/img/screenshots/localized/fr/02-portfolio-cohort-editor.png)

### Bon usage portefeuille

Utilisez cette page pour comparer, prioriser et repérer les projets qui méritent une enquête plus profonde. Elle ne remplace pas le travail détaillé dans chaque projet.

### Comment lire une cohorte sans outlier apparent

Si une cohorte n’affiche **aucun outlier** ni écart marqué, ne concluez pas immédiatement à un bug. Vérifiez d’abord :

1. les projets réellement sélectionnés ;
2. les signaux activés ;
3. les **poids** et **seuils** appliqués ;
4. la **sévérité minimale** retenue.

Une cohorte vide peut simplement indiquer que vos filtres sont trop stricts ou qu’aucun projet ne dépasse actuellement les seuils choisis.

![Administration de la plateforme](/img/screenshots/localized/fr/18-platform-administration-overview.png)

## Administration de la plateforme

Les sections confirmées sont les suivantes :

| Section | Rôle |
| --- | --- |
| Overview | Vue d’ensemble des règles, de la préparation et des points d’attention |
| Platform integrations | Définitions techniques des connecteurs et fournisseurs d’ingestion |
| AI provider settings | Choix du fournisseur IA et paramètres associés |
| Marketplace / subscription | Gestion de l’abonnement, des entitlements et des sièges |
| Audit / activity | Historique d’activité et suivi d’administration |

## Intégrations plateforme vs intégrations projet

Une règle importante ressort du produit :

- le **niveau plateforme** possède les définitions techniques globales ;
- le **niveau projet** ne consomme que des bindings approuvés et sûrs.

### Deux familles de plateforme

- **connecteurs d’exécution** pour les actions externes ;
- **fournisseurs d’ingestion** pour alimenter la connaissance.

### Exemples de connecteurs observés

- Jira, Azure DevOps, GitHub, GitLab, ServiceNow ;
- Teams, Slack, Outlook ;
- SharePoint publish, Notion, webhook.

### Exemples de fournisseurs d’ingestion observés

- SharePoint, OneDrive, Confluence ;
- Jira, Azure DevOps ;
- Google Drive, Box, Dropbox, Amazon S3 ;
- Notion ;
- upload manuel et webhook.

## Readiness et causes de blocage

Une intégration projet ou une option d’import peut être bloquée pour cause de :

- entitlement ;
- policy ;
- permission ;
- health dégradée ;
- définition plateforme manquante ou désactivée ;
- binding projet désactivé ou non configuré.

Circuit de remédiation recommandé :

1. relire le blocage dans la page projet ;
2. ouvrir **Administration de la plateforme** pour vérifier la définition technique ;
3. valider la readiness ou la santé du connecteur/provider ;
4. revenir dans le projet pour confirmer le binding et l’usage autorisé.

### Cas fréquent — intégration définie en plateforme mais indisponible dans le projet

Ce cas ne signifie pas forcément que la plateforme est mal configurée. Il peut simplement indiquer que :

- la définition technique existe mais n’est pas encore **bindée** au projet ;
- le projet n’a pas la bonne **policy** ou le bon **rôle** ;
- l’**entitlement** couvre la plateforme mais pas l’usage réellement attendu ;
- la **health** du connecteur est dégradée.

Pour ce scénario, gardez le va-et-vient suivant : **Projets et espace de travail** pour lire le blocage visible, puis **Administration de la plateforme** pour confirmer la définition globale, puis retour au projet pour activer ou corriger le binding. Voir aussi [Projets et espace de travail](./projets-et-espace-de-travail.md).

## Réglages du fournisseur IA

Les familles de fournisseurs visibles selon le contexte de configuration comprennent notamment :

- **OpenRouter** ;
- **OpenAI / Azure OpenAI** ;
- **Anthropic**.

### Comment lire les statuts admin

Les repères **Configuration**, **Validation**, **Test** et **Operational** ne servent pas seulement à Azure OpenAI. Ils forment le cadre de lecture commun des providers exposés dans l’UI admin.

| Statut | Ce qu’il signifie | Ce qu’il ne garantit pas encore |
| --- | --- | --- |
| Configuration | les champs ont été enregistrés | ni la validité technique, ni la connectivité réelle |
| Validation | la configuration a passé les contrôles administratifs attendus | pas forcément le test de connectivité complet |
| Test | un test de connectivité a été lancé avec succès | pas encore l’activation pour les utilisateurs finaux |
| Operational | le provider peut être considéré comme exploitable | pas que tous les projets l’utilisent déjà effectivement |

### Arbre de décision rapide — `Validate`, `Test`, `Operational`

| Symptôme | Vérifiez d’abord | Puis |
| --- | --- | --- |
| `Validate` échoue | endpoint, auth mode, secret éventuel, champs obligatoires, noms de déploiement | corrigez la configuration avant tout test |
| `Validate` réussit mais `Test` échoue | connectivité réelle, secret/API key, accessibilité du provider, ressource distante | relancez le test après correction, puis contrôlez l’activité associée |
| le provider reste visible mais non activable / non `Operational` | validation, test, allowed providers, entitlement, readiness générale | ne basculez pas les utilisateurs avant passage complet à l’état exploitable |

### Deux notions à distinguer

| Notion | Signification |
| --- | --- |
| Fournisseur IA sélectionné au déploiement | Choix initial de l’environnement lors de l’installation |
| Fournisseur IA effectif | Fournisseur réellement utilisé pour les nouveaux runs |

Ces deux valeurs peuvent différer, notamment quand un déploiement Marketplace prépare **Azure OpenAI** puis que l’administrateur choisit ensuite le déploiement LLM dans **AI provider settings**. Pour un run donné, la valeur de référence reste le détail visible dans **Journal IA**.

### Cadre commun pour tous les providers

Quel que soit le provider visible dans l’interface, gardez le même cadre de lecture :

1. renseignez les champs critiques du provider ;
2. enregistrez la configuration ;
3. lancez la validation ;
4. lancez le test de connectivité ;
5. activez ensuite seulement le provider si la plateforme doit réellement basculer dessus ;
6. confirmez enfin le provider effectif dans **Journal IA** sur un run réel.

### OpenRouter

Pour **OpenRouter**, surveillez surtout l’endpoint, la clé ou le secret, la famille de modèle choisie et le passage complet par **Configuration → Validation → Test → Operational** avant activation.

### OpenAI-compatible / OpenAI

Pour les providers **OpenAI-compatible**, vérifiez surtout la cohérence entre endpoint, auth, version ou modèle/deployment attendu et test de connectivité réel. Une configuration enregistrée ne suffit pas à garantir l’usage effectif par les runs.

### Anthropic

Pour **Anthropic**, le réflexe reste le même : configuration enregistrée, validation, test, activation, puis confirmation dans **Journal IA**. Si le provider reste visible mais non opérationnel, vérifiez d’abord auth, entitlement et allowed providers avant d’escalader.

### Cas **Azure OpenAI** après un déploiement Marketplace

Quand le déploiement Marketplace a été lancé avec **Azure OpenAI**, l’installation prépare l’intégration Azure mais ne fige pas automatiquement le déploiement LLM exact au moment du formulaire Marketplace.

Après installation, un administrateur doit ouvrir **Administration de la plateforme** > **AI provider settings** pour sélectionner le déploiement Azure OpenAI réellement visible dans la ressource Azure OpenAI du client.

![Réglages Azure OpenAI dans l’administration de la plateforme](/img/screenshots/localized/fr/18-platform-administration-azure-openai-settings.png)

#### Ce que signifie le choix du modèle

Dans cette page, le champ **LLM deployment name** attend le **nom exact d’un déploiement Azure OpenAI** existant dans la ressource du client. Ce n’est pas uniquement un nom générique de famille de modèle. Dans l’exemple visible, `gpt-4.1-mini` est le déploiement LLM principal et `text-embedding-3-small` le déploiement d’embeddings facultatif.

Ce découplage est volontaire : il permet au client de changer de déploiement ou de modèle après l’installation Marketplace, sans redéployer l’application.

#### Champs Azure OpenAI visibles

| Champ | Rôle |
| --- | --- |
| Endpoint | Endpoint Azure OpenAI cible, utilisé pour la découverte des déploiements et les tests de connectivité |
| API version | Version de l’API Azure OpenAI utilisée par l’administration |
| Authentication mode | Mode d’authentification supporté par la plateforme : `managed_identity` ou `api_key` |
| LLM deployment name | Nom exact du déploiement LLM utilisé pour les runs génératifs |
| Embeddings deployment name (optional) | Nom exact du déploiement embeddings, si votre configuration en utilise un |

#### Statuts et ordre opératoire

L’écran affiche quatre repères de statut :

- **Configuration** : la configuration a été enregistrée ou non ;
- **Validation** : la vérification administrative a été exécutée ou non ;
- **Test** : le test de connectivité a été exécuté ou non ;
- **Operational** : synthèse de l’état d’exploitation de ce provider.

Le parcours attendu dans l’interface est **Save → Validate → Test → Activate**. D’après l’interface observée, **Validate** et **Test** enregistrent d’abord les modifications en attente avant d’exécuter leur contrôle.

#### Ce que vérifie le backend

D’après le code existant, la vérification backend du provider **Azure OpenAI** contrôle au minimum :

- la présence de l’**endpoint** et son format en **URL absolue** ;
- la présence de l’**API version** ;
- la validité du **mode d’authentification** (`managed_identity` ou `api_key`) ;
- la présence d’une **clé API** ou d’une **référence de secret** si le mode `api_key` est choisi ;
- la présence du **LLM deployment name** ;
- l’absence d’espaces dans les noms de déploiement LLM et embeddings.

Le backend tente aussi de découvrir les déploiements visibles en appelant l’endpoint Azure OpenAI **`/openai/deployments`** avec la version d’API configurée. Si la découverte réussit, la validation vérifie que le **LLM deployment name** choisi — et, si renseigné, le déploiement d’embeddings — est bien visible dans la ressource Azure OpenAI configurée.

Conséquences pratiques :

- si aucun déploiement n’est encore visible, l’administrateur doit créer ou activer le déploiement dans Azure, puis actualiser **Administration de la plateforme** ;
- si le nom saisi n’existe pas dans la ressource cible, la validation échoue et peut lister les déploiements visibles côté Azure ;
- si la configuration reste incomplète, le **test de connectivité** ne peut pas aboutir ;
- l’activation du provider reste bloquée tant que la configuration, la validation et le test ne sont pas conformes.

#### Contrôle recommandé

1. ouvrez **Administration de la plateforme** ;
2. allez dans **AI provider settings** ;
3. renseignez l’**endpoint**, l’**API version** et le **mode d’authentification** adaptés à votre ressource Azure OpenAI ;
4. choisissez le **LLM deployment name** exact visible dans la ressource Azure OpenAI du client ;
5. ajoutez si besoin le **Embeddings deployment name** ;
6. enregistrez la configuration ;
7. lancez **Validate** pour vérifier la configuration et la visibilité des déploiements ;
8. lancez **Test** pour confirmer la connectivité ;
9. activez ensuite le provider si le tenant doit réellement basculer sur cette configuration ;
10. contrôlez enfin **Journal IA** sur un run réel.

Tant que cette étape n’est pas finalisée, le choix **Azure OpenAI** au déploiement décrit bien le fournisseur visé, mais pas encore le déploiement LLM exact utilisé en exploitation.

Voir aussi [Déploiement Azure Marketplace](./deploiement-azure-marketplace.md).

## Abonnement, entitlement et sièges

Le produit gère un modèle de licence avec consommation de sièges selon le plan.

### Comportements observés

- un siège peut être consommé lors de la connexion ;
- l’accès peut être bloqué s’il n’y a plus de siège disponible ;
- l’interface admin expose le plan, les sièges achetés et les utilisateurs licenciés ;
- un administrateur peut retirer un utilisateur licencié, puis libérer la capacité pour une réattribution ultérieure ;
- une fenêtre de retrait sur 24 h est suivie pour éviter les rotations abusives ;
- l’état commercial peut aussi exposer `billing state`, `payment state`, `subscription status` et des `entitlement flags`.

### Pourquoi c’est important

Un incident d’accès n’est pas toujours un problème d’authentification. Il peut aussi venir d’un manque de sièges ou d’un entitlement qui bloque une intégration premium ou un fournisseur IA.

## Repères techniques de plateforme

L’infrastructure Azure observée s’appuie sur les briques suivantes :

- Azure Container Apps ;
- Storage ;
- Azure AI Search ;
- Key Vault ;
- Log Analytics ;
- Application Insights ;
- Document Intelligence.

## À retenir pour les publics techniques

- le niveau **plateforme** contrôle ce qui existe globalement ;
- le niveau **projet** choisit ce qui est réellement utilisé localement ;
- les intégrations doivent être validées avant exposition aux équipes ;
- l’abonnement et les entitlements influencent l’accès, les connecteurs et le fournisseur IA ;
- pour **Azure OpenAI**, le choix Marketplace doit être complété dans **AI provider settings** avec le nom exact d’un déploiement LLM visible dans la ressource Azure OpenAI ;
- avant activation, la séquence **Save → Validate → Test** doit confirmer la configuration, la visibilité des déploiements et la connectivité ;
- le **Journal IA** reste la référence pour le fournisseur réellement utilisé sur un run.

## Suite

- [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md)
- [Maintenance, support et FAQ](./maintenance-support-faq.md)
- [Démarrage](./demarrage.md)
- [Glossaire](./glossaire.md)
