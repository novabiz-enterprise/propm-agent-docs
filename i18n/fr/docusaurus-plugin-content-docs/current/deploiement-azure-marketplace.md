---
title: Déploiement Azure Marketplace
slug: /deploiement-azure-marketplace
description: Déployer ProPM Agent depuis Azure Marketplace, remplir les champs du formulaire ProPM-50 et finaliser l'administration après installation.
---

[Accueil](./index.md) · Déploiement Azure Marketplace

## Objectif

Cette page détaille le déploiement de **ProPM Agent** depuis **Azure Marketplace**. Elle explique les deux écrans principaux du formulaire Azure, le rôle de chaque champ visible et les contrôles à réaliser avant de cliquer sur **Review + create**.

Les captures ci-dessous correspondent au formulaire **Create ProPM-50**. Le nom affiché peut changer selon le plan Marketplace choisi, par exemple ProPM-50, ProPM-100 ou un autre plan disponible.

## Pour qui

| Profil | Usage de cette page |
| --- | --- |
| Administrateur Azure | Créer la Managed Application depuis Azure Marketplace |
| Administrateur tenant | Préparer les groupes Entra et le premier accès administrateur |
| Administrateur plateforme | Comprendre les paramètres à finaliser après installation |
| Support | Vérifier le parcours sans demander de secret ni de variable interne |
| Utilisateur métier | Non, utiliser plutôt [Démarrage](./demarrage.md) |

## Avant de commencer

Préparez ces informations avant d'ouvrir le formulaire Marketplace.

| Information | Pourquoi elle est nécessaire |
| --- | --- |
| Abonnement Azure cible | Il porte la transaction Marketplace et les ressources déployées |
| Groupe de ressources cible | Il organise l'objet Managed Application côté client |
| Région Azure cible | Elle détermine l'emplacement principal du déploiement |
| Nom d'application | Il identifie l'instance ProPM Agent dans Azure |
| Groupe de ressources managé | Il reçoit les ressources internes gérées par l'application |
| Group Object IDs Entra | Ils donnent l'accès administrateur à la plateforme |
| Utilisateurs bootstrap éventuels | Ils aident au premier accès ou à la récupération contrôlée |
| Fournisseur IA initial | Il indique la famille IA à préparer pour cette instance |
| Origines CORS éventuelles | Elles autorisent des domaines web additionnels si nécessaire |
| Plan réseau VNet CIDR | Il évite les conflits avec le réseau de l'organisation |
| Mot de passe initial | Il doit être généré et conservé comme secret |

Ne copiez pas de mot de passe, secret, clé API, jeton ou valeur confidentielle dans la documentation ou dans une demande support non sécurisée.

## Parcours de déploiement

1. Ouvrez l'offre ProPM Agent dans Azure Marketplace.
2. Sélectionnez le plan Marketplace voulu.
3. Remplissez l'onglet **Basics**.
4. Cliquez sur **Next**.
5. Remplissez l'onglet **Application Settings**.
6. Cliquez sur **Review + create**.
7. Corrigez les erreurs de validation éventuelles.
8. Lancez la création.
9. Attendez la fin du provisionnement Azure.
10. Ouvrez l'URL publiée et finalisez l'administration dans ProPM Agent.

## Ecran 1 - Basics

L'onglet **Basics** définit le périmètre Azure du déploiement : abonnement, groupe de ressources, région et noms Azure de la Managed Application.

![Onglet Basics du déploiement ProPM-50 Azure Marketplace](/img/deploiement/propm-50-basics.png)

### Champs de l'onglet Basics

| Champ | Obligatoire | Que renseigner | Impact et recommandations |
| --- | --- | --- | --- |
| **Subscription** | Oui | L'abonnement Azure qui recevra l'application managée et la facturation Marketplace. | Utilisez un abonnement où vous avez les droits de déployer une Managed Application et de créer ou sélectionner des groupes de ressources. Vérifiez aussi les règles internes de coûts et de gouvernance. |
| **Resource group** | Oui | Le groupe de ressources côté client qui contiendra l'objet Managed Application. | Vous pouvez choisir un groupe existant ou cliquer sur **Create new**. Ce groupe n'est pas le groupe managé interne qui contient les ressources techniques de ProPM Agent. |
| **Create new** | Non | Action Azure pour créer un nouveau groupe de ressources si aucun groupe adapté n'existe. | Donnez un nom clair, par exemple lié à l'environnement et à la région. Evitez les noms temporaires si l'instance est destinée à la production. |
| **Region** | Oui | La région Azure principale du déploiement. | Choisissez une région autorisée par votre organisation, proche des utilisateurs et compatible avec vos contraintes de résidence de données. Gardez une cohérence avec les ressources réseau et IA prévues. |
| **Application Name** | Oui | Le nom visible de l'instance Managed Application ProPM Agent. | Utilisez un nom stable et lisible, par exemple `propm-prod-eus`. Ce nom sert à reconnaître l'instance dans Azure. N'y mettez pas de secret ni de donnée client sensible. |
| **Managed Resource Group** | Oui | Le groupe de ressources managé qui recevra les ressources internes déployées par l'application. | Azure propose souvent un nom généré. Gardez un nom unique et reconnaissable. Ce groupe est géré par l'application ; les accès directs peuvent être limités selon le modèle Managed Application. |
| **Previous** | Non | Retourne à l'étape précédente du formulaire. | Aucun déploiement n'est lancé par ce bouton. |
| **Next** | Non | Passe à l'onglet suivant quand les champs requis sont suffisamment renseignés. | Utilisez-le pour continuer vers **Application Settings**. Si Azure bloque, relisez les champs obligatoires marqués par `*`. |
| **Review + create** | Non | Lance la validation Azure finale avant création. | Utilisez-le seulement après avoir rempli les paramètres d'application. Azure affiche ensuite les erreurs ou avertissements à corriger avant le lancement réel. |

## Ecran 2 - Application Settings

L'onglet **Application Settings** configure l'environnement ProPM Agent lui-même : identité d'administration, mode d'installation, fournisseur IA initial, CORS, supervision, journalisation, mot de passe initial et réseau.

![Onglet Application Settings du déploiement ProPM-50 Azure Marketplace](/img/deploiement/propm-50-application-settings.png)

### Champs de l'onglet Application Settings

| Champ | Obligatoire | Que renseigner | Impact et recommandations |
| --- | --- | --- | --- |
| **Environment Name** | Oui | Un nom court pour l'environnement, par exemple `dev`, `test`, `uat` ou `prod`. | Ce nom aide à identifier l'environnement dans les ressources, la configuration et les échanges support. Utilisez une valeur courte, stable, sans secret et cohérente avec votre convention interne. |
| **Installation mode** | Selon le scénario | Le mode d'installation. Pour une première installation, gardez **New installation - create new resources**. | Ce mode crée une nouvelle instance avec de nouvelles ressources. N'utilisez un mode d'attachement à des ressources existantes que pour un scénario de changement de plan, mise à jour majeure ou reprise explicitement préparé. |
| **Platform Administration Entra Group Object IDs** | Oui | Les Object IDs des groupes Entra autorisés à administrer la plateforme. | Renseignez les **Object IDs** des groupes, pas seulement leurs noms d'affichage. Ces groupes déterminent qui pourra accéder à **Platform Administration** après déploiement. Préférez des groupes dédiés plutôt que des groupes trop larges. |
| **Platform Administration Bootstrap Users (optional)** | Non | Des utilisateurs de démarrage ou de récupération, si votre procédure le prévoit. | Utilisez ce champ pour sécuriser le premier accès quand les groupes Entra ne sont pas encore pleinement opérationnels. Gardez la liste minimale et contrôlée. |
| **Allow Azure RBAC admin recovery** | Non | Case à cocher permettant une récupération administrateur via Azure RBAC. | Laissez activé si votre modèle d'exploitation prévoit qu'un administrateur Azure autorisé puisse récupérer l'accès plateforme. Désactivez seulement si votre gouvernance impose une séparation stricte et documentée. |
| **LLM Provider** | Recommandé | La famille de fournisseur IA initiale : Azure OpenAI, OpenAI, OpenRouter ou OpenAI-compatible selon les choix disponibles. | Ce choix exprime l'intention initiale du déploiement. Il ne prouve pas que le fournisseur est déjà opérationnel. Après installation, finalisez le fournisseur dans **Platform Administration > AI Provider Settings** avec **Save**, **Validate**, **Test** puis **Activate**. |
| **CORS Allowed Origins** | Selon le scénario | Les origines web additionnelles autorisées, par exemple `https://portal.contoso.com`. | Laissez vide si aucune origine supplémentaire n'est nécessaire. Evitez les jokers trop larges. Les valeurs doivent être des origines complètes avec schéma `https://`, domaine et port si nécessaire. |
| **Enable alerting (Azure Monitor)** | Non | Active ou désactive les alertes Azure Monitor créées pour l'environnement. | Recommandé pour la production afin de détecter les incidents. Vérifiez ensuite les destinataires, règles d'action et règles de coûts dans Azure Monitor. |
| **Enable debug logging** | Non | Active des journaux plus détaillés. | Gardez désactivé en production sauf demande de diagnostic. Le debug peut augmenter le volume de logs et exposer plus de détails techniques aux administrateurs autorisés. |
| **Password** | Oui | Le mot de passe initial demandé par le formulaire de déploiement. | Générez un mot de passe fort et stockez-le dans un coffre ou un gestionnaire de secrets approuvé. Ne l'envoyez pas par e-mail, chat ou ticket non sécurisé. |
| **Confirm password** | Oui | La même valeur que **Password**. | Azure valide que les deux champs correspondent. En cas d'erreur, saisissez à nouveau les deux valeurs depuis la source sécurisée. |
| **VNet CIDR** | Oui | La plage réseau privée réservée au déploiement, par exemple `10.0.0.0/16`. | Choisissez une plage qui ne chevauche pas vos réseaux existants, vos peerings, VPN ou plages futures prévues. Faites valider ce champ par l'équipe réseau avant la création, car il est difficile à changer après déploiement. |
| **Previous** | Non | Retourne à l'onglet **Basics**. | Utile pour corriger abonnement, groupe, région ou noms avant la validation finale. |
| **Next** | Non | Passe à l'étape suivante du formulaire. | Utilisez-le si vous voulez suivre l'ordre des onglets avant la validation. |
| **Review + create** | Non | Lance la validation finale de tous les paramètres. | Azure ne crée pas encore les ressources tant que vous n'avez pas confirmé la création après validation. Corrigez toutes les erreurs avant de lancer. |

## Choisir le champ LLM Provider

Le champ **LLM Provider** sélectionne la famille IA que l'environnement doit utiliser au départ. Ce n'est pas la fin de la configuration IA.

| Choix | Quand le choisir | Ce qu'il reste à faire après installation |
| --- | --- | --- |
| **Azure OpenAI** | L'organisation veut rester dans l'écosystème Azure, Entra et gouvernance Microsoft. | Confirmer endpoint, région ou modèle disponible, paramètres Azure OpenAI, tests et activation. |
| **OpenAI** | L'organisation utilise directement les API OpenAI. | Renseigner l'URL, le modèle, la clé ou référence de secret, puis exécuter **Save**, **Validate**, **Test**, **Activate**. |
| **OpenRouter** | L'organisation veut accéder à plusieurs modèles via un point d'entrée unique. | Renseigner Base URL, clé ou référence de secret, modèle par défaut, puis valider et activer. |
| **OpenAI-compatible** | L'organisation utilise une passerelle ou un endpoint compatible OpenAI. | Renseigner endpoint exact, mode d'authentification, modèle ou déploiement attendu, puis tester réellement la compatibilité. |

Règle simple : le déploiement **désigne** le fournisseur IA ; l'administration ProPM Agent le **rend opérationnel**.

## Validation avant Review + create

Avant de lancer la création, contrôlez ces points.

| Contrôle | Résultat attendu |
| --- | --- |
| Abonnement et groupe de ressources | Ils correspondent à l'environnement cible et aux règles de gouvernance |
| Région | Elle respecte résidence de données, disponibilité et stratégie réseau |
| Application Name | Le nom est clair, stable et non confidentiel |
| Managed Resource Group | Le nom est unique et reconnaissable |
| Group Object IDs Entra | Les IDs sont ceux des groupes prévus pour l'administration plateforme |
| Bootstrap Users | La liste est vide ou strictement limitée aux comptes prévus |
| RBAC recovery | Le choix est aligné avec la procédure de récupération administrateur |
| LLM Provider | Le fournisseur initial est cohérent avec la stratégie IA |
| CORS | Seules les origines nécessaires sont autorisées |
| Alerting | Activé pour les environnements qui doivent être supervisés |
| Debug logging | Désactivé sauf diagnostic encadré |
| Password | Stocké dans un coffre et jamais partagé en clair |
| VNet CIDR | Validé par l'équipe réseau et sans chevauchement connu |

## Après le déploiement

1. Attendez que le provisionnement Azure soit terminé.
2. Ouvrez l'URL publiée de ProPM Agent.
3. Connectez-vous avec un compte autorisé par les groupes Entra ou par la procédure bootstrap.
4. Vérifiez l'accès à **Platform Administration**.
5. Ouvrez les paramètres du fournisseur IA.
6. Exécutez **Save**, **Validate**, **Test** puis **Activate** pour le fournisseur retenu.
7. Vérifiez les licences et le plan Marketplace.
8. Réalisez un premier test fonctionnel avec un utilisateur standard.
9. Consultez le [Journal IA](./journal-ia.md) après un run pour confirmer le fournisseur réellement utilisé.

## Blocages fréquents

| Symptôme | Cause probable | Action recommandée |
| --- | --- | --- |
| Azure refuse de passer à l'étape suivante | Champ obligatoire vide ou valeur invalide | Relisez tous les champs marqués `*` et les messages sous les champs |
| L'administrateur ne voit pas Platform Administration | Object ID Entra erroné ou groupe non propagé | Vérifiez l'Object ID du groupe et l'appartenance du compte |
| Conflit réseau après validation | VNet CIDR déjà utilisé ou chevauchant | Choisissez une autre plage avec l'équipe réseau |
| Fournisseur IA non utilisable après création | Le déploiement a seulement sélectionné la famille IA | Finalisez le fournisseur dans l'administration avec **Save**, **Validate**, **Test**, **Activate** |
| Trop de logs ou coûts inattendus | Debug logging ou alerting activés sans cadrage | Ajustez les paramètres Azure Monitor et désactivez le debug hors diagnostic |

## Suite

- Pour finaliser l'accès Entra, ouvrez [Administration Azure et Entra](./admin-deploiement-marketplace-et-entra.md).
- Pour configurer le fournisseur IA, ouvrez [Fournisseur IA](./admin-fournisseur-ia.md).
- Pour vérifier licences, plans et mises à jour, ouvrez [Licences, plans et mises à jour](./admin-licences-plans-et-mises-a-jour.md).
- Pour inviter les utilisateurs, envoyez [Démarrage](./demarrage.md).
