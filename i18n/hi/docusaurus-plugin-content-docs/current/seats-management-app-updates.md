---
title: Seats management और app updates
slug: /seats-management-app-updates
description: Subscription seats manage करें और existing application installation को administration से update करें, बिना Marketplace resources redeploy किए।
---

[मुखपृष्ठ](./index.md) · [पोर्टफोलियो](./portfolio.md) · [AI providers और platform integrations](./ai-providers-platform-integrations.md)

## उद्देश्य

यह पेज project work से अलग दो administration topics cover करता है:

- licenses, assigned users और subscription status के लिए **Seats management**;
- existing Azure Container Apps पर in-place application image rollout के लिए **Deployment & Updates**।

इसे इस सवाल के लिए उपयोग करें: **application तक कौन पहुँच सकता है, और existing installation को Marketplace में वापस जाए बिना कैसे update किया जाता है?**

## Subscription और seats

Product seat-based licensing model manage करता है। सभी Marketplace plans वही application features देते हैं; केवल licenses/seats की संख्या अलग होती है।

### Administrator क्या देख सकता है

- active **plan**;
- **purchased seats** की संख्या;
- **used seats** की संख्या;
- **available seats** की संख्या;
- already licensed users;
- commercial status, जैसे `billing state`, `payment state` या `subscription status`।

### यह क्यों महत्वपूर्ण है

Blocked user का मतलब हमेशा connection issue नहीं होता। Block आ सकता है:

- available seat न होने से;
- removed user जिसे administrator को reassign करना हो;
- insufficient role, inaccessible project, binding, policy, configuration या health state जिसे ठीक करना हो।

Marketplace plans connectors, AI providers या product features block नहीं करते। यदि interface या logs में technical `entitlement` label अभी भी दिखे, तो उसे legacy/non-plan indicator मानें, functional plan difference नहीं।

## Seat release या reassign करना

यह authorized profile द्वारा **Platform Administration** से किया जाता है।

Removal seat को बाद में reassignment के लिए free करता है, subscription/license rules और किसी withdrawal window के अधीन। Operation access allocation बदलता है; यह नहीं बदलता कि plan में कौन से product features हैं।

## Marketplace redeployment के बिना app updates

**Deployment & Updates** section existing installation को **in place** update करता है।

यह नहीं करता:

- Azure Marketplace offer फिर चलाना;
- नया resource group बनाना;
- पहले से मौजूद Azure resources recreate करना।

व्यवहार में administration Azure Resource Manager के माध्यम से existing **Azure Container Apps** का image inventory पढ़ता है, current images को ACR में approved target images से compare करता है, और existing Container Apps पर new revisions submit करता है।

## Available update actions

| Action | उद्देश्य |
| --- | --- |
| **Check for updates** | current images, target images, mutable tag refresh candidates और optional manifest version check करना |
| **Apply update** | selected services पर new images apply करना, new Container Apps revisions बनाकर |
| **Rollback last update** | जब last operation ने required references capture किए हों, तब previous images पर लौटना |
| **Container App image inventory** | managed resource group, tracked services, current images, target images और revision state review करना |

## Important prerequisites

- user के पास deployment-operation या platform-administration rights होने चाहिए;
- runtime identity को Azure Resource Manager के माध्यम से Container Apps read और patch करने में सक्षम होना चाहिए;
- environment को subscription और resource group `AZURE_SUBSCRIPTION_ID` तथा `AZURE_RESOURCE_GROUP_ID`, `AZURE_RESOURCE_GROUP` या `AZURE_RESOURCE_GROUP_NAME` से पता होना चाहिए;
- target images update manifest, target-image configuration या authorized application tag से आने चाहिए।

## Scope limits

यह operation **application image rollout** cover करता है।

Administration button ये cover नहीं करता:

- database schema migrations;
- नए Azure resources creation;
- architecture changes;
- नया Marketplace deployment।

यदि update orchestrator service को भी शामिल करता है, तो interface बता सकता है कि request submitted है जबकि service खुद को replace कर रहा है।

## Platform technical landmarks

Azure deployment infrastructure इनमें से कई services पर निर्भर करता है:

- Azure Container Apps;
- Storage;
- Azure AI Search;
- Key Vault;
- Log Analytics;
- Application Insights;
- Document Intelligence.

## याद रखने योग्य बातें

- seats access allocation control करते हैं, feature tiers नहीं;
- सभी Marketplace plans वही product features expose करते हैं;
- app updates existing Container Apps पर in place apply होते हैं;
- Marketplace initial environment install करता है, जबकि **Deployment & Updates** उसे maintain करता है;
- rollback केवल तब उपयोग करें जब previous image references available हों।

## आगे

- [Azure Marketplace deployment](./deploiement-azure-marketplace.md)
- [AI providers और platform integrations](./ai-providers-platform-integrations.md)
- [रखरखाव, समर्थन और FAQ](./maintenance-support-faq.md)
