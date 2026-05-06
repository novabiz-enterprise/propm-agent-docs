---
title: Tenant plan, licensed users और app updates
slug: /seats-management-app-updates
description: Platform Administration से Marketplace tenant plan, ordered seats, supplemental licenses, licensed users और app updates manage करें।
---

[मुखपृष्ठ](./index.md) · [पोर्टफोलियो](./portfolio.md) · [AI providers और platform integrations](./ai-providers-platform-integrations.md)

![Tenant plan and licensed users दिखाता Platform Administration overview](/img/screenshots/localized/hi/18-platform-administration-overview.jpg)

## उद्देश्य

यह पेज **Platform Administration > Overview > Tenant plan and licensed users** के end-user administration flow को समझाता है।

इसे इन सवालों के लिए उपयोग करें:

- tenant के लिए वर्तमान में कौन सा Marketplace plan detect हुआ है;
- कितनी licenses ordered, included, supplemental, used और remaining हैं;
- ProPM से supplemental licenses कैसे खरीदें या remove करें;
- Azure Marketplace redeployment के माध्यम से plan upgrade कैसे prepare करें;
- application image updates, Marketplace plan upgrades से कैसे अलग हैं।

## यह पेज कहाँ मिलता है

1. **Platform Administration** खोलें।
2. **Overview** पर रहें।
3. **Tenant plan and licensed users** खोलें।

यह administration area पुराने user-facing Marketplace subscription selection screens को replace करता है। नया upgrade prepare करते समय users को legacy या internal plan identifiers select नहीं करने चाहिए।

## Official Marketplace plans

ProPM administration में **Target plan** list केवल ये official Marketplace plans दिखानी चाहिए:

| Plan ID | Display name | Included seats |
| --- | --- | ---: |
| `free` | Free | 4 |
| `propm-20` | ProPM-20 | 20 |
| `propm-50` | ProPM-50 | 50 |
| `propm-100` | ProPM-100 | 100 |
| `propm-300` | ProPM-300 | 300 |
| `propm-500` | ProPM-500 | 500 |
| `propm-1000` | ProPM-1000 | 1000 |

`propm0`, `pro`, `enterprise`, `pm-*` जैसे पुराने या internal identifiers, या dynamically generated plans, administration में नए user upgrade के लिए choices नहीं हैं।

`propm0` पुराने existing deployments पर अभी भी दिख सकता है। इसे historical compatibility मानें, नए upgrade के लिए select करने वाला plan नहीं।

## Plan और license fields पढ़ना

| Field | मतलब |
| --- | --- |
| **Current plan** | tenant के लिए currently detected Marketplace plan. |
| **Ordered seats** | tenant के लिए ordered licenses की total संख्या. |
| **Included seats** | base Marketplace plan में included licenses. |
| **Supplemental licenses** | Marketplace billing के माध्यम से जोड़ी गई extra licenses. |
| **Used seats** | connected या licensed users द्वारा currently consumed licenses. |
| **Remaining seats** | अभी भी available licenses. |

Marketplace plans license capacity control करते हैं। वे connectors, AI providers या product features unlock या block नहीं करते।

## Supplemental licenses जोड़ना

जब tenant को base plan में included capacity से अधिक licenses चाहिए हों, तो **Add licenses and bill in Azure** उपयोग करें।

1. **Tenant plan and licensed users** में जोड़ने वाली supplemental licenses की quantity enter करें।
2. **Add licenses and bill in Azure** select करें।
3. ProPM consumption को Azure Marketplace Metering पर भेजता है।
4. Azure Marketplace usage को custom meter dimension `seats` के माध्यम से bill करता है।
5. Azure Marketplace request accept करने के बाद ही ProPM supplemental licenses को tenant capacity में जोड़ता है।
6. Acceptance के बाद **Ordered seats**, **Supplemental licenses** और **Remaining seats** review करें।

Azure Marketplace पर प्रति घंटे केवल एक supplemental license order submit किया जा सकता है।

Supplemental licenses ProPM में तब तक active रहती हैं जब तक उन्हें manually remove न किया जाए।

## Supplemental licenses remove करना

ProPM से supplemental license capacity हटाने के लिए **Remove licenses** उपयोग करें।

Removal ProPM में available capacity को कम करता है, लेकिन Azure Marketplace पर पहले भेजे गए consumption को automatically cancel या refund नहीं करता।

## Azure Marketplace redeployment से plan upgrade करना

Marketplace plan upgrade existing Managed Application instance पर directly apply नहीं होता।

Azure Managed Application के लिए upgrade ProPM में prepare होता है और guided Azure Marketplace redeployment से complete होता है।

1. **Platform Administration > Overview > Tenant plan and licensed users** खोलें।
2. **Target plan** में कोई higher official Marketplace plan चुनें।
3. **Prepare upgrade by redeploying in Azure Marketplace** select करें।
4. ProPM upgrade prepare करता है और pending upgrade request store करता है।
5. Link दिखने पर **Open Azure Marketplace redeployment** select करें।
6. Azure Marketplace में अलग name के साथ नई ProPM Managed Application create करें।
7. Azure में नया Marketplace plan select करें।
8. Azure Marketplace commercial transaction finalize करता है और new deployment create करता है।
9. Marketplace action complete होने के बाद ProPM में **Refresh Marketplace plan** उपयोग करें, ताकि detected plan और license information synchronize हो जाए।

Plan upgrade existing Managed Application instance को directly modify नहीं करता। नया plan apply करने के लिए Azure Marketplace new redeployment require करता है।

## Downgrade restrictions

ProPM application के अंदर downgrades की technical application block करता है:

- current plan से lower plan refuse होता है;
- ordered licenses की reduction refuse होती है;
- capacity घटाने वाले Marketplace changes automatically apply नहीं होते।

ProPM application में downgrade की technical application रोकता है, लेकिन Marketplace billing Azure/Microsoft manage करते हैं। कोई भी commercial modification Azure Marketplace में perform और validate होना चाहिए।

## Refresh Marketplace plan

Tenant के currently detected Marketplace state के साथ ProPM synchronize करने के लिए **Refresh Marketplace plan** उपयोग करें।

यह action:

- Marketplace action के बाद plan और license information refresh करता है;
- अपने आप plan upgrade नहीं करता;
- supplemental licenses नहीं खरीदता;
- licenses remove या cancel नहीं करता।

## Plan upgrade के दौरान supplemental licenses

पहले खरीदी गई supplemental licenses source Marketplace resource से linked रहती हैं।

Plan upgrade के लिए redeployment के दौरान:

- existing supplemental licenses पुराने Marketplace deployment या source resource से attached रहती हैं;
- new plan अपनी base capacity include करता है;
- customer को new deployment पर supplemental licenses केवल तब खरीदनी चाहिए जब new plan में included capacity पर्याप्त न हो।

## Licensed connected users

**Licensed connected users** list वे users दिखाती है जो currently licenses consume कर रहे हैं।

Licensed user को remove करने से बाद के उपयोग के लिए application capacity free होती है, tenant license rules के अधीन। यह Marketplace plan को नहीं बदलता और Azure Marketplace billed usage cancel नहीं करता।

## Marketplace redeployment के बिना app updates

**Deployment & Updates** section existing installation को in place update करता है।

यह नहीं करता:

- Azure Marketplace offer फिर चलाना;
- नया resource group बनाना;
- पहले से मौजूद Azure resources recreate करना;
- Marketplace plan upgrade apply करना।

व्यवहार में administration Azure Resource Manager के माध्यम से existing **Azure Container Apps** का image inventory पढ़ता है, current images को ACR में approved target images से compare करता है, और existing Container Apps पर new revisions submit करता है।

## Available update actions

| Action | उद्देश्य |
| --- | --- |
| **Check for updates** | current images, target images, mutable tag refresh candidates और optional manifest version check करना। |
| **Apply update** | selected services पर new images apply करना, new Container Apps revisions बनाकर। |
| **Rollback last update** | जब last operation ने required references capture किए हों, तब previous images पर लौटना। |
| **Container App image inventory** | managed resource group, tracked services, current images, target images और revision state review करना। |

## Scope limits

Application image rollout, Marketplace plan administration से अलग है।

Update buttons ये cover नहीं करते:

- database schema migrations;
- नए Azure resources creation;
- architecture changes;
- Marketplace plan upgrades।

## याद रखने योग्य बातें

- Marketplace plan और license capacity administration के लिए **Tenant plan and licensed users** उपयोग करें।
- Target upgrades के लिए केवल official Marketplace plans उपयोग करें।
- Azure Marketplace द्वारा billed supplemental licenses के लिए **Add licenses and bill in Azure** उपयोग करें।
- Plan upgrades के लिए **Prepare upgrade by redeploying in Azure Marketplace** उपयोग करें।
- Detected Marketplace state synchronize करने के लिए ही **Refresh Marketplace plan** उपयोग करें।
- Commercial plan changes के लिए नहीं, in-place application image rollout के लिए **Deployment & Updates** उपयोग करें।

## आगे

- [Azure Marketplace deployment](./deploiement-azure-marketplace.md)
- [AI providers और platform integrations](./ai-providers-platform-integrations.md)
- [रखरखाव, समर्थन और FAQ](./maintenance-support-faq.md)
