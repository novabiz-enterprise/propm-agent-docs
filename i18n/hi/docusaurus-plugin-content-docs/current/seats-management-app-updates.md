---
title: Tenant योजना, लाइसेंस प्राप्त उपयोगकर्ता और ऐप अपडेट
slug: /seats-management-app-updates
description: ProPM में दिख रहे Marketplace plan को समझें, Azure Marketplace information synchronize करें, licenses manage करें और existing data खोए बिना ProPM deployment update करें।
---

[मुखपृष्ठ](./index.md) · Tenant plan, licensed users और app updates

![Tenant plan and licensed users दिखाता Platform Administration overview](/img/screenshots/localized/hi/18-platform-administration-overview.jpg)

## उद्देश्य

यह पेज **Platform Administration > Overview > Tenant plan and licensed users** के end-user administration flow और उस recommended flow को समझाता है जिसमें customer Azure Marketplace plan बदलना चाहता है या existing data खोए बिना major update करना चाहता है।

इसे इन बातों को समझने के लिए उपयोग करें:

- tenant के लिए वर्तमान में कौन सा Marketplace plan detect हुआ है;
- कितनी licenses ordered, included, supplemental, used और remaining हैं;
- plans, pricing और billing के लिए Azure Marketplace official source क्यों रहता है;
- supplemental licenses Azure Marketplace में `seats` billing dimension के साथ कैसे manage होती हैं;
- Azure Marketplace से **Attach existing ProPM data resources** mode में नया ProPM deployment कैसे create करें;
- in-place application update, plan change या major update से कैसे अलग है।

मुख्य बात सरल है: plan बदलने या existing data खोए बिना major update करने के लिए **Azure Marketplace से नया ProPM deployment** create करें, **Attach existing ProPM data resources** चुनें, और previous deployment के existing data resources attach करें। यह manual database migration नहीं है।

## यह पेज कहाँ मिलता है

1. **Platform Administration** खोलें।
2. **Overview** पर रहें।
3. **Tenant plan and licensed users** खोलें।

ProPM में यह area currently detected plan दिखाता है और Marketplace information refresh करने देता है। Plan select करने, price देखने, billing बदलने या commercial transaction finalize करने के लिए यह Azure Marketplace को replace नहीं करता।

## Marketplace plans, pricing और billing

Azure Marketplace official source है:

- available ProPM plans की list के लिए;
- हर plan की price के लिए;
- plan billing के लिए;
- commercial plan changes के लिए;
- `seats` dimension से bill होने वाली supplemental licenses के लिए।

ProPM current plan दिखाता है ताकि administrator tenant status समझ सके, लेकिन plan changes अब ProPM administration से directly नहीं किए जाते। Managed Application के ARM plan को manually modify न करें।

Reference के लिए known ProPM Marketplace plans ये हैं:

| Plan ID | Display name | Included seats |
| --- | --- | ---: |
| `free` | Free | 4 |
| `propm-20` | ProPM-20 | 20 |
| `propm-50` | ProPM-50 | 50 |
| `propm-100` | ProPM-100 | 100 |
| `propm-300` | ProPM-300 | 300 |
| `propm-500` | ProPM-500 | 500 |
| `propm-1000` | ProPM-1000 | 1000 |

नया deployment start करने से पहले plan, price और billing terms हमेशा Azure Marketplace में confirm करें।

किसी भी नए deployment या upgrade के लिए केवल Azure Marketplace में currently available ProPM plans का उपयोग करें।

Marketplace plans license capacity control करते हैं। वे connectors, AI providers या product features unlock या block नहीं करते।

## Plan और license fields पढ़ना

| Field | मतलब |
| --- | --- |
| **Current plan** | tenant के लिए currently detected Marketplace plan. |
| **Ordered seats** | tenant के लिए ordered licenses की total संख्या. |
| **Included seats** | base Marketplace plan में included licenses. |
| **Supplemental licenses** | Marketplace billing के माध्यम से जोड़ी गई extra licenses. |
| **Used seats** | connected या licensed users द्वारा currently consumed licenses. |
| **Remaining seats** | अभी भी available licenses. |

अगर displayed information recent Azure Marketplace action से match नहीं करती, तो detected Marketplace information के साथ ProPM synchronize करने के लिए **Refresh Marketplace plan** उपयोग करें।

## Supplemental licenses

Supplemental licenses Azure Marketplace में `seats` billing dimension के साथ manage होती हैं।

जब tenant को base plan में included licenses से अधिक capacity चाहिए हो, तो यह flow उपयोग करें:

1. ProPM में **Ordered seats**, **Included seats**, **Supplemental licenses**, **Used seats** और **Remaining seats** review करें।
2. Additional capacity Azure Marketplace से manage करें या ProPM action से manage करें जो Azure में licenses bill करता है, अगर वह आपके environment में available है।
3. Azure Marketplace को request accept और `seats` dimension से bill करने दें।
4. ProPM पर लौटें।
5. अगर counters अभी update नहीं हैं, तो **Refresh Marketplace plan** select करें।
6. Synchronization के बाद **Ordered seats**, **Supplemental licenses** और **Remaining seats** review करें।

Supplemental licenses जोड़ने से base plan नहीं बदलता। Supplemental licenses remove या reduce करने से Azure Marketplace billing automatically cancel या refund नहीं होती।

## Data खोए बिना अपना ProPM plan update करें

Azure Marketplace plan बदलने या major update करने के लिए recommended flow है: नया ProPM deployment create करें और उसे previous deployment के existing data resources से attach करें।

New deployment selected plan के लिए नया application tier create करता है, लेकिन existing data reuse करता है। इसलिए validation के बाद users, documents, configurations, agents, reports और business data available रहने चाहिए।

### यह flow कब उपयोग करें

यह flow उपयोग करें जब:

- आप Azure Marketplace में दूसरे ProPM plan पर switch करना चाहते हैं;
- major update के लिए नया Marketplace deployment required है;
- आप existing data रखते हुए ProPM application tier recreate करना चाहते हैं;
- ProPM support आपको existing data resource attachment mode में redeploy करने को कहता है।

Simple in-place application image update के लिए यह flow उपयोग न करें। उस case में ProPM में **Deployment & Updates** उपयोग करें, अगर available है और release notes नया Marketplace deployment require नहीं करते।

### शुरू करने से पहले

ये चीजें तैयार रखें:

- previous ProPM deployment का Azure access;
- Azure Marketplace से नई ProPM Managed Application create करने की permission;
- Azure Marketplace में selected target ProPM plan;
- previous ProPM Managed Application की full **Resource ID**;
- cutover window जिसमें administrators new deployment verify कर सकें;
- users, documents, configurations, agents, reports और data के लिए checklist।

किसी भी action से पहले ये precautions follow करें:

- new deployment validate होने से पहले previous Managed Resource Group delete न करें;
- existing data resources delete न करें, क्योंकि new deployment उन्हें reuse करता है;
- Managed Application के ARM plan को manually modify न करें;
- advanced override options तब तक न भरें जब तक previous installation ने custom resource names use न किए हों या ProPM support ऐसा न कहे।

### Step 1 - Azure Marketplace में नया plan चुनें

Azure Marketplace खोलें और desired new ProPM plan select करें।

Plan selection, pricing और billing Azure Marketplace में manage होते हैं। ProPM current plan दिखा सकता है और detected information refresh कर सकता है, लेकिन commercial transaction के लिए ProPM official source नहीं है।

### Step 2 - नया ProPM deployment create करें

Azure Marketplace में previous deployment को directly modify करने के बजाय नया ProPM deployment create करें।

**Basics** tab में subscription, resource group, region, new Managed Application name और new Managed Resource Group चुनें।

![Azure Marketplace से नया ProPM deployment create करना](/img/deploiement/fr/propm-plan-update-01-new-deployment-basics-annotated.svg)

New Managed Application के लिए अलग name use करें, ताकि cutover के दौरान previous और new environments clearly अलग दिखें।

### Step 3 - Attach existing ProPM data resources select करें

**Application Settings** tab में **Installation mode** field में **Attach existing ProPM data resources** select करें।

![Attach existing ProPM data resources mode select करना](/img/deploiement/fr/propm-plan-update-03-attach-existing-data-resources-annotated.svg)

यह mode new deployment को बताता है कि वह empty environment से start करने के बजाय previous deployment के data resources से connect करे।

Most cases में advanced override fields empty रखें। New deployment previous Managed Application से standard resources discover कर सकता है। ये fields केवल तब भरें जब previous installation ने custom resource names use किए हों या ProPM support आपसे ऐसा कहे।

### Step 4 - Previous Managed Application enter करें

Azure Portal में previous ProPM Managed Application खोलें और **Properties** पर जाएँ।

Managed Application का full **Id** field copy करें। यह previous Managed Application की **Resource ID** है, managed resource group name नहीं।

![Previous ProPM Managed Application की Resource ID copy करना](/img/deploiement/fr/propm-plan-update-02-copy-previous-managed-application-id-annotated.svg)

New deployment wizard पर लौटें और यह value **Previous ProPM Managed Application resource ID** में paste करें।

अगर जरूरत हो, तो **Block previous deployment during cutover** enable करें। यह option new deployment use और validate करते समय previous environment में changes रोकने में मदद करता है।

![Cutover के दौरान previous deployment block करना](/img/deploiement/fr/propm-plan-update-04-readonly-and-overrides-annotated.svg)

Wizard में बाकी required parameters enter करने के बाद **Review + create** select करें, configuration review करें और deployment start करें।

### Step 5 - New deployment verify करें

New deployment complete होने के बाद नई ProPM instance खोलें और users को permanently move करने से पहले essential items verify करें।

कम से कम ये check करें:

- users और उनका access;
- documents और knowledge spaces;
- platform configuration;
- agents और उनकी settings;
- reports;
- projects, portfolios और business data;
- expected connectors और integrations;
- AI provider और required settings;
- Marketplace synchronization के बाद plan और license counters।

अगर Azure Marketplace action के बाद ProPM में दिख रहा plan अभी update नहीं है, तो **Refresh Marketplace plan** उपयोग करें। यह button केवल detected state synchronize करता है; यह plan change नहीं करता और purchase trigger नहीं करता।

### Step 6 - Cutover finalize करें

Full validation के बाद users को new ProPM deployment पर direct करें।

अगर आपकी organization चाहे, तो previous deployment को temporary safety के रूप में रखें। Previous Managed Application को केवल तब delete करें जब आप sure हों कि cutover complete है और chosen deletion procedure reused data resources को remove नहीं करता।

जब तक existing data resources new deployment द्वारा use हो रहे हों, उन्हें manually delete न करें।

### Best practices और precautions

यह करें:

- Azure Marketplace में नया plan चुनें;
- नया ProPM deployment create करें;
- **Attach existing ProPM data resources** select करें;
- previous ProPM Managed Application की full Resource ID enter करें;
- जरूरत हो तो cutover के दौरान previous deployment block या read-only करें;
- कुछ भी delete करने से पहले new deployment verify करें;
- Marketplace action के बाद ProPM resynchronize करने के लिए **Refresh Marketplace plan** उपयोग करें।

यह न करें:

- new deployment validate होने से पहले previous Managed Resource Group delete न करें;
- existing data accounts, databases या services delete न करें;
- Managed Application के ARM plan को manually modify न करें;
- इस flow को manual database migration की तरह present न करें;
- identified need के बिना advanced overrides न भरें।

### FAQ

**क्या मैं ProPM में directly plan change कर सकता हूँ?**

नहीं। ProPM current plan दिखाता है और Marketplace information refresh कर सकता है, लेकिन plan changes, pricing और billing Azure Marketplace में manage होते हैं।

**Refresh Marketplace plan क्या करता है?**

**Refresh Marketplace plan** Azure-side action के बाद detected Marketplace information के साथ ProPM synchronize करता है। यह plan change नहीं करता, licenses नहीं खरीदता और licenses remove नहीं करता।

**क्या यह manual database migration है?**

नहीं। जब आप **Attach existing ProPM data resources** select करते हैं और previous Managed Application enter करते हैं, तो new ProPM deployment existing data resources से automatically connect हो जाता है।

**कौन सी Resource ID enter करनी चाहिए?**

Previous **ProPM Managed Application** की full Resource ID enter करें। केवल application name, resource group name या Managed Resource Group enter न करें।

**Advanced override options कब उपयोग करें?**

केवल तब उपयोग करें जब previous installation में custom resource names हों या ProPM support आपसे ऐसा कहे। Standard case में ये fields empty रखें।

**क्या new deployment के बाद previous Managed Resource Group delete कर सकता हूँ?**

New deployment validate होने से पहले delete न करें। अगर new deployment existing data resources reuse करता है, तो उन्हें delete न करें। Doubt होने पर previous deployment temporary रखें और सही deletion procedure के लिए ProPM support से पूछें।

**Supplemental licenses कैसे manage होती हैं?**

Supplemental licenses Azure Marketplace में `seats` billing dimension के साथ manage होती हैं। ProPM counters दिखा और synchronize कर सकता है, लेकिन billing reference Azure Marketplace रहता है।

## Refresh Marketplace plan

Tenant के detected Marketplace state के साथ ProPM synchronize करने के लिए **Refresh Marketplace plan** उपयोग करें।

यह action:

- Marketplace action के बाद plan और license information refresh करता है;
- अपने आप plan upgrade नहीं करता;
- supplemental licenses नहीं खरीदता;
- licenses remove या cancel नहीं करता;
- Azure deployment resources modify नहीं करता।

## Licensed connected users

**Licensed connected users** list वे users दिखाती है जो currently licenses consume कर रहे हैं।

Licensed user को remove करने से बाद के उपयोग के लिए application capacity free होती है, tenant license rules के अधीन। यह Marketplace plan को नहीं बदलता और Azure Marketplace billed usage cancel नहीं करता।

## Marketplace redeployment के बिना app updates

**Deployment & Updates** section current deployment के साथ compatible होने पर existing installation को in place update करता है।

यह नहीं करता:

- Azure Marketplace offer फिर चलाना;
- नया resource group बनाना;
- पहले से मौजूद Azure resources recreate करना;
- Marketplace plan upgrade apply करना;
- ऐसा major update करना जिसे नया Marketplace deployment चाहिए।

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
- Marketplace plan upgrades;
- existing data resources के साथ new deployment पर cutover।

## याद रखने योग्य बातें

- Plans, pricing और billing के लिए Azure Marketplace official source है।
- ProPM current plan और license counters दिखाता है, लेकिन plan changes के लिए Azure Marketplace को replace नहीं करता।
- Plan बदलने या data खोए बिना major update करने के लिए Azure Marketplace से नया ProPM deployment create करें।
- Deployment wizard में **Attach existing ProPM data resources** select करें।
- Previous ProPM Managed Application की full Resource ID enter करें।
- New deployment की full validation से पहले previous Managed Resource Group या data resources delete न करें।
- Detected Marketplace state synchronize करने के लिए ही **Refresh Marketplace plan** उपयोग करें।
- Commercial plan changes के लिए नहीं, in-place application image rollout के लिए **Deployment & Updates** उपयोग करें।

## आगे

- [Azure Marketplace deployment](./deploiement-azure-marketplace.md)
- [AI providers और platform integrations](./ai-providers-platform-integrations.md)
- [रखरखाव, समर्थन और FAQ](./maintenance-support-faq.md)
