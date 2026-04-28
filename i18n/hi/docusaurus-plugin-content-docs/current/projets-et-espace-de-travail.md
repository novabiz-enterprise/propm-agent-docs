---
title: परियोजनाएँ और कार्यक्षेत्र
slug: /projets-et-espace-de-travail
description: एक परियोजना बनाना, प्रारंभिक भूमिकाएँ सौंपना और कार्यक्षेत्र को नियंत्रण केंद्र के रूप में उपयोग करना।
---

[होम](./index.md) · [इंटरफ़ेस और नेविगेशन](./interface-et-navigation.md) · [पहुँच नियंत्रण और परियोजना भूमिकाएँ](./controle-acces-et-roles.md)

![परियोजना कार्यक्षेत्र अवलोकन](/img/screenshots/localized/hi/03-workspace-overview.jpg)

## उद्देश्य

यह पृष्ठ **Projects**, **Workspace**, और **Agents** के बीच अंतर स्पष्ट करता है, और फिर उन परियोजना सेटिंग्स का विवरण देता है जो वास्तव में एप्लिकेशन में दिखाई देती हैं।

## तीन सतहों को अलग करके समझें

| सतह | कब उपयोग करें |
| --- | --- |
| **Projects** | परियोजना बनाना, मौजूदा परियोजना खोलना, संदर्भ बदलना |
| **Workspace** | परियोजना सारांश, परिचालन पारदर्शिता, संकेत और परियोजना-स्तरीय सेटिंग्स पढ़ना |
| **Agents** | एजेंट के साथ सीधी बातचीत शुरू करना और run का structured output पढ़ना |

व्यवहार में **Projects** सही संदर्भ में प्रवेश करने के लिए है, **Workspace** उसे कॉन्फ़िगर करने के लिए, और **Agents** उसी संदर्भ का उपयोग करने के लिए।

## active project की सटीक भूमिका

**active project** वही संदर्भ है जो इस समय परियोजना-आधारित कार्य पृष्ठों पर लागू है।

यह सीधे तय करता है:

- **Knowledge** में कौन-से दस्तावेज़ दिखाई देंगे;
- **Agents** में कौन-से runs शुरू होंगे;
- **Reports & artifacts** में कौन-से PM Docs, artifacts और diffs दिखाई देंगे;
- **AI Log** में कौन-से runs और घटनाएँ दिखेंगी;
- **Workspace** में कौन-से संकेत, एकीकरण और नीतियाँ दिखेंगी।

इसे इन चीज़ों से भ्रमित नहीं करना चाहिए:

- **active project**: वर्तमान परिचालन संदर्भ;
- **Portfolio**: कई परियोजनाओं की तुलना वाला पृष्ठ;
- `All projects`: कस्टम एजेंट का वैकल्पिक दायरा, जो उसी account की कई projects में दिखाई दे सकता है।

## परियोजना बनाना

form में ये fields शामिल हैं:

- **Project ID**;
- **Name**;
- **Description**;
- **Default data language**;
- **Additional data languages**।

भरते समय कुछ उपयोगी सुझाव:

- पढ़ने योग्य और स्थायी ID चुनें;
- **project data language** और **interface language** को अलग रखें;
- **Knowledge** या **Agents** खोलने से पहले दायरा सही तय करें।

## project creator: प्रारंभिक अधिकार और अधिकार-सौंपना

निर्माण के समय **project creator** के पास **Project Owner** role और सभी उपलब्ध project permissions होती हैं। व्यवहार में वही व्यक्ति परियोजना खोलता है, शुरुआती विन्यास जाँचता है, और फिर टीम के बाकी लोगों को भूमिकाएँ सौंपता है।

### निर्माण के तुरंत बाद अनुशंसित अधिकार-सौंपना

1. **Access control** खोलें;
2. कम से कम एक और **Project Owner** या किसी विश्वसनीय **Project Manager** को जोड़ें;
3. आवश्यकता हो तो owners बढ़ाने के बजाय targeted custom roles बनाएँ;
4. फिर contributors, readers और auditors को roles दें;
5. अंत में **Governance Policies** और **Project integrations** की समीक्षा करें, ताकि rights, connectors और validations आपस में मेल खाएँ।

### प्लेटफ़ॉर्म अभी भी क्या सुरक्षित रखता है

- creator की entry सुरक्षित रहती है;
- creator की भूमिका interface में स्थिर रहती है;
- delegation अतिरिक्त roles देने से होती है, creator protection हटाने से नहीं;
- विस्तृत RBAC के लिए [पहुँच नियंत्रण और परियोजना भूमिकाएँ](./controle-acces-et-roles.md) देखें।

## परियोजना खोलना और बदलना

परियोजना इन स्थानों से खोली जा सकती है:

- **Projects** page;
- शीर्ष बार का **project selector**;
- browser में हाल में याद रखा गया संदर्भ।

परियोजना बदलते ही ये पृष्ठ नए संदर्भ के साथ मेल खाते हैं: **Knowledge**, **Agents**, **PM Documents / Reports & artifacts**, **AI Log**, संकेत, और project settings।

इसलिए परियोजना बदलना वास्तव में document search, agent conversation, reports और trace data का **active context** बदल देता है।

browser आख़िरी याद रखी गई परियोजना को local रूप से संग्रहीत कर सकता है, लेकिन यह local memory प्लेटफ़ॉर्म-स्तर की shared setting नहीं है।

## Workspace: परियोजना का नियंत्रण केंद्र

**Workspace** एक ही पृष्ठ पर यह सब लाता है:

- **project summary**;
- **Agents**, **PM Documents**, और **AI Log** के शॉर्टकट;
- **operational transparency** का दृश्य;
- परियोजना के **signals**;
- परियोजना-स्तर के setting tabs।

**Workspace** में voice के लिए अलग entry point उपलब्ध नहीं है। यदि कुछ environments में voice input अभी भी उपलब्ध है, तो वह **Agents** के अंदर होती है, यहाँ अलग surface के रूप में नहीं।

## परिचालन पारदर्शिता और परियोजना तैयारी

**Workspace** केवल project summary के लिए नहीं है। यह यह भी दिखाता है कि परियोजना कार्रवाई के लिए कितनी तैयार है:

- signals की मौजूदगी या अनुपस्थिति;
- हाल की गतिविधि;
- संबंधित drafts या deliverables तक शॉर्टकट;
- project integrations की readiness, यदि वे मौजूद हों;
- tenant configuration खोले बिना actual AI provider की visibility।

इस क्षेत्र का उपयोग यह समझने के लिए करें कि कोई action या import **क्यों** उपलब्ध, पुष्टि योग्य, या अवरुद्ध दिख रहा है।

![कार्यस्थल संकेत और अधिसूचना ड्राफ्ट](/img/screenshots/localized/hi/15-workspace-signals.jpg)

## संकेत, digests और drafts वहाँ कैसे पहुँचते हैं

interface में project signals panel **active project** के लिए साझा प्लेटफ़ॉर्म के तीन प्रवाह दिखाता है:

- current **signals**;
- recent **digests**;
- उन signals से जुड़े **notification drafts**।

उपयोगी पढ़ाई:

- **Workspace** खोलने पर उस परियोजना की पहले से उपलब्ध shared state लोड होती है;
- **Refresh** system से परियोजना का दोबारा मूल्यांकन करने और ताज़ा proactive signals खींचने का स्पष्ट अनुरोध करता है;
- **Generate digest draft** नई grouped summary बनाता है और `in_app` notification drafts तैयार कर सकता है;
- इसलिए ये items केवल browser notes या local chat leftovers नहीं हैं।

## परियोजना-स्तर के टैब

| टैब | इसका उद्देश्य |
| --- | --- |
| **Agent configuration** | इस परियोजना के लिए agents को कॉन्फ़िगर करना |
| **Access control** | members, roles और project-level permissions प्रबंधित करना |
| **Document categories** | project taxonomy को document surfaces तक फैलाना |
| **Governance Policies** | connectors, destinations, action policies, rendering profiles और notification preferences तय करना |
| **Project integrations** | ready और authorized integrations को परियोजना से जोड़ना |
| **Actions & approvals** | action requests, validations और controlled execution सँभालना |

## Agent configuration

परियोजना स्तर पर पुष्टि किए गए मान ये हैं:

- `status`;
- `temperature`;
- `max tokens`।

### दिखाई देने वाली सीमाएँ

- `temperature` का दायरा **0** से **2** के बीच अपेक्षित है;
- `max tokens` को **1** या उससे अधिक का integer होना चाहिए।

### विन्यास इतिहास

interface versioned history भी दिखाती है, जिसमें कम से कम यह शामिल होता है:

- version number;
- status;
- temperature;
- max tokens;
- creation date;
- author;
- संबंधित `Trace ID`।

![परियोजना स्तर पर एजेंट सेटिंग्स](/img/screenshots/localized/hi/12-agent-configuration.jpg)

## Access control

**Access control** tab परियोजना के members और roles प्रबंधित करता है। यह समर्थन करता है:

- standard roles;
- custom roles;
- RBAC safeguards;
- उन profiles के लिए read-only mode, जिन्हें बदलाव की अनुमति नहीं है।

समर्पित पृष्ठ देखें: [पहुँच नियंत्रण और परियोजना भूमिकाएँ](./controle-acces-et-roles.md)।

## Document categories

यह tab परियोजना की document classification को व्यावसायिक संदर्भ के साथ संरेखित करता है। व्यवहार में project taxonomy upload के समय दिखाई देने वाली categories और बाद में project surfaces में उपयोग होने वाले कुछ selectors को प्रभावित करती है।

### बदलाव का वास्तविक प्रभाव

जब category list सफलतापूर्वक बदल जाती है:

- **Knowledge** में upload category selector update होता है;
- **PM Documents** में category selectors और filters उसी shared taxonomy के अनुरूप हो जाते हैं;
- यह बदलाव केवल **current project** तक सीमित रहता है।

### व्यावहारिक उदाहरण

taxonomy को छोटा और स्थिर रखें। उदाहरण के लिए, बहुत-सी मिलती-जुलती variants बनाने के बजाय कुछ सुसंगत categories रखें:

- परियोजना चार्टर;
- जोखिम रजिस्टर;
- स्थिति रिपोर्ट;
- खरीद योजना;
- संचार योजना।

उद्देश्य category के भीतर document version encode करना नहीं, बल्कि **Knowledge** और **PM Documents** के बीच reusable classification बनाए रखना है।

![परियोजना दस्तावेज़ श्रेणियाँ](/img/screenshots/localized/hi/13-document-categories.jpg)

## Governance Policies

यह tab उन नियमों को सेट करता है जो परियोजना के decisions, validations और governance behavior को नियंत्रित करते हैं। किसी deliverable को publish करने या external controlled action की अनुमति देने से पहले इसे पढ़ें।

### Governance Policies में दिखाई देने वाले उप-अनुभाग

| sub-surface | यह क्या नियंत्रित करती है |
| --- | --- |
| **Execution connectors** | connector type, status, execution mode, environment, scopes और context parameters |
| **Artifact destinations** | artifact की target destination, associated connector, active या default status |
| **Action policies** | संबंधित role, targeted connector, action level (`observe`, `draft`, `propose`, `execute`), effect (`allow`, `require_approval`, `deny`) और authorized scopes |
| **Rendering profiles** | controlled publication के दौरान उपयोग होने वाला rendering profile और output format |
| **Notification preferences** | channel, notification type, digest mode, severity threshold और preference activation |

### उपयोगी सेटिंग्स के उदाहरण

- **SharePoint** पर publish करने से पहले explicit approval अनिवार्य करें;
- कुछ roles के लिए **Jira** ticket creation को केवल `propose` level तक सीमित रखें;
- internal tracking के लिए `signal_digest` preferences को `in_app` में रखें;
- external notifications `email`, `teams`, या `webhook` को केवल तब active path में रखें जब connector healthy हो;
- **DOCX** और **XLSX** publications के लिए अलग rendering profiles चुनें।

### विश्वसनीय परिदृश्य: संवेदनशील परियोजना / नियंत्रित वितरण

ऐसी परियोजना के लिए जहाँ हर external distribution नियंत्रित होनी चाहिए, एक सुसंगत setup अक्सर ऐसा दिखता है:

1. **Artifact destinations**: active SharePoint destination, ज्ञात rendering profile के साथ;
2. **Action policies**: `observe` और `draft` के लिए `allow`, लेकिन publication और external notification वाले `execute` के लिए `require_approval`;
3. **Execution connectors**: external connectors केवल उन्हीं roles के लिए visible हों जिन्हें वास्तव में अधिकार हो;
4. **Notification preferences**: टीम के लिए `signal_digest` को `daily` रखें, और `signal_alert` केवल संवेदनशील मामलों के लिए;
5. **Project integrations**: bindings केवल उन्हीं connectors के लिए enable करें जो पहले से platform स्तर पर validate हों।

यह संयोजन draft, digest या action को समय से पहले वितरित करने योग्य दिखने से रोकता है, जब तक human approval पूरी न हो।

![परियोजना शासन नीतियाँ](/img/screenshots/localized/hi/14-governance-policies.jpg)

## Project integrations

यह tab platform स्तर पर **technically defined** integrations और परियोजना द्वारा **वास्तव में उपयोग योग्य** integrations के बीच अंतर स्पष्ट करता है।

### इस tab को कैसे पढ़ें

**Project integrations** वह जगह नहीं है जहाँ पूरा tenant-wide technical stack कॉन्फ़िगर किया जाता है। यह मुख्य रूप से परियोजना readiness दिखाने वाला पृष्ठ है: इस परियोजना को क्या दिखाई देता है, क्या ready है, और क्या किसी स्पष्ट कारण से blocked है।

यहाँ सामान्यतः कई सूचना समूह दिखाई देते हैं:

- **Execution connectors**: external systems की ओर controlled outbound options;
- **Ingestion providers**: वे import sources जिन्हें बाद में **Knowledge** उपयोग करती है;
- **AI runtime transparency**: actual AI provider और deployment-selected provider;
- **Entitlement posture**: plan, seat, या premium capability की project-visible स्थिति।

### Project integrations स्क्रीन क्या दिखाती है

यह स्क्रीन technical readiness और project availability को अलग करती है:

- platform setup, project binding, policy, permission, entitlement और health **अलग-अलग कारण** हैं। कोई connector read-only रूप में visible रह सकता है ताकि project team समझ सके कि वह क्यों blocked है, न कि यह माने कि वह missing है;
- technical setup **Platform Administration** में रहता है। project settings managers enabled और ready integrations को bind कर सकते हैं, जबकि tenant URLs, authentication strategy, API keys और secret references centrally controlled रहते हैं।

| क्षेत्र | क्या दिखाई दे सकता है | कैसे कार्य करें |
| --- | --- | --- |
| **Execution Connectors** | current list खाली भी हो सकती है, साथ में **Available to bind** catalog दिख सकता है जिसमें Asta Powerproject schedule sync, Azure DevOps delivery project, Jira delivery workspace, Microsoft Project schedule sync, Microsoft Teams collaboration, Outlook executive notifications, SharePoint publication library, Smartsheet portfolio workspace, Webhook event delivery और Wrike delivery workspace शामिल हैं | केवल उन connectors पर **Bind to project** करें जो platform स्तर पर enabled और ready हों |
| **Ingestion Providers** | **Smartsheet sheet import** और **Azure Data Factory evidence pipeline** जैसे providers **Healthy** दिख सकते हैं, साथ में SharePoint knowledge import, Azure Blob document ingest, Confluence knowledge import, Jira issue import, SFTP document intake, Microsoft Project schedule import, Wrike task import और Asta Powerproject schedule import जैसे available providers दिख सकते हैं | bound provider को फिर जाँचने के लिए **Validate binding**, project से बंद करने के लिए **Disable**, या approved provider के लिए **Bind to project** उपयोग करें |

Provider cards **Ready**, **Healthy** या **Not configured** दिखा सकते हैं। **Not configured** का अर्थ है कि provider platform catalog में मौजूद है, लेकिन project use से पहले source, credentials या readiness validation अभी पूरी होनी है।

### उत्पाद में दिखाए गए अवरोध कारण

कोई project integration या import option इन कारणों से blocked हो सकता है:

- entitlement;
- policy;
- permission;
- health status, जिसे जाँचना हो;
- missing या disabled platform definition;
- disabled या unconfigured project binding।

### binding block को कैसे समझें

| दिखाई देने वाला कारण | व्यावहारिक अर्थ | अनुशंसित प्रतिक्रिया |
| --- | --- | --- |
| `entitlement` | plan या authorized capacity इस connector या usage family को कवर नहीं करती | [पोर्टफोलियो और तकनीकी प्रशासन](./portefeuille-et-administration-technique.md) में subscription और capacities जाँचें |
| `policy` | project governance इस flow को रोकती या सीमित करती है | binding बदलने से पहले **Governance Policies** दोबारा पढ़ें |
| `permission` | connector मौजूद है, पर आपका role activation या usage की अनुमति नहीं देता | [पहुँच नियंत्रण और परियोजना भूमिकाएँ](./controle-acces-et-roles.md) में project role जाँचें |
| `health` | platform definition मौजूद है, पर उसकी readiness या availability की पुष्टि बाकी है | **Platform Administration** खोलकर technical definition देखें |
| missing या disabled definition | tenant स्तर पर वास्तव में कुछ भी तैयार नहीं है | पहले platform setup या re-activation का अनुरोध करें |
| missing project binding | platform तैयार है, पर परियोजना ने अभी integration को अपनाया नहीं है | परियोजना की ओर से binding को स्पष्ट रूप से enable करें |

### `binding` और `entitlement` का व्यावहारिक अर्थ

- **binding** का अर्थ है कि connector या provider platform पर मौजूद है, लेकिन परियोजना के उपयोग के लिए उसे परियोजना से जोड़ना और परियोजना के लिए खोलना अभी बाकी हो सकता है;
- **entitlement** का अर्थ है कि binding ready होने पर भी plan operational usage को block कर सकता है, जबकि option visibility बनी रहे;
- इसलिए कोई connector visible लेकिन blocked हो, तो इसका अर्थ यह नहीं कि वह टूटा हुआ है; कई बार इंटरफ़ेस उसे इसलिए visible रखता है ताकि block का कारण साफ़ दिखे।

यदि block बना रहे, तो पहले **Platform Administration** में technical definition की पुष्टि करें, फिर परियोजना पर लौटकर binding और readiness जाँचें।

### Jira, SharePoint और connector chain

![Jira और SharePoint वर्कफ़्लो](/img/diagrams/hi/connecteurs-jira-sharepoint-workflow.svg)

इस तर्क को सरल रखें:

1. **Platform integrations** connector या ingestion provider define करती हैं;
2. **Project integrations** केवल approved और ready bindings दिखाती हैं;
3. **Governance Policies** तय करती हैं कि हर role क्या observe, prepare, propose या execute कर सकती है;
4. **Actions & approvals** वास्तविक request पर इन्हीं नियमों को लागू करती है;
5. **PM Documents** और **AI Log** इस flow का trace रखते हैं।

समर्पित पृष्ठ देखें: [कनेक्टर्स और एकीकरण](./connecteurs-jira-et-sharepoint).

## Actions & approvals

यह tab recommendation को controlled operation में बदलता है।

### याद रखने योग्य मुख्य स्थितियाँ

interface में queue और summary cards मुख्य रूप से चार स्थितियाँ अलग करते हैं:

| दिखाई देने वाली स्थिति | व्यावहारिक अर्थ |
| --- | --- |
| **Execution prerequisites** | compatible connectors मौजूद हो सकते हैं, पर execution अभी भी health, entitlement, permission, policy, या unavailable readiness से blocked है |
| **Pending approval** | request propose की जा चुकी है, पर governance decision अभी बाकी है |
| **Ready to execute** | request पहले से **approved** है, पर execution अभी भी अलग step है |
| **Executed history** | action वास्तव में execute हो चुकी है और audit history के रूप में visible है |

किसी request का **approved** होना, उसका **executed** होना नहीं है।

### जो tab खाली या अधूरी लगे, उसे कैसे पढ़ें

tab visible होने का अर्थ यह नहीं कि कोई action पहले से executable है। जब कुछ ठोस उपलब्ध न दिखे, तो आम तौर पर यह पढ़ाई सबसे उपयोगी रहती है:

1. उस action type के लिए कोई **compatible healthy execution connector** अभी ready नहीं है;
2. **project binding** अभी उस option को परियोजना तक expose नहीं कर रही;
3. कोई **policy** review की अनुमति देती है, पर proposal या execution की नहीं;
4. आपकी **permission** queue देखने देती है, पर act करने की नहीं;
5. approval आवश्यक है और अभी तक कोई decision नहीं लिया गया।

जब सब कुछ सही से ready हो, तो कम से कम यह दिखाई देना चाहिए:

- compatible action type;
- कम से कम एक healthy execution option;
- valid project binding;
- coherent policy;
- ऐसा user, जिसे मामले के अनुसार propose, approve, या execute करने की अनुमति हो।

## केवल read-only या access denied

- **read-only**: tab दिखाई देती है, पर save blocked है;
- **access denied**: route या action आपके account के लिए available नहीं है।

यह अंतर विशेष रूप से **Access control**, **Project integrations**, और governance settings में महत्वपूर्ण है।

## परियोजना निर्माण के बाद अनुशंसित क्रम

1. **Workspace** खोलें;
2. यदि परियोजना collaborative है, तो पहले **creator**, **members**, और **roles** जाँचें;
3. फिर **Document categories** समायोजित करें;
4. किसी external distribution से पहले **Governance Policies** दोबारा पढ़ें;
5. केवल वास्तव में ready **Project integrations** ही जोड़ें;
6. फिर **Knowledge** लोड करें;
7. अंत में **Agents**, **PM Documents**, और **Actions & approvals** की ओर बढ़ें।

## दो उपयोगी विन्यास परिदृश्य

### परिदृश्य 1: न्यूनतम नई परियोजना

नई परियोजना के लिए यह सरल क्रम उपयोगी है:

1. आवश्यक members जोड़ें और उनके roles जाँचें;
2. **Document categories** में छोटी taxonomy बनाएँ;
3. केवल वही integrations enable करें जो पहले से validated और वास्तव में आवश्यक हों;
4. न्यूनतम governance तैयार करें, जैसे internal digest और default artifact destination;
5. agents खोलने से पहले **Knowledge** लोड करें।

यह approach उन connectors और rules को बहुत जल्दी खोलने से बचाती है जिनकी अभी तत्काल ज़रूरत नहीं है।

### परिदृश्य 2: संवेदनशील परियोजना / नियंत्रित वितरण

ऐसी परियोजना के लिए जो external notifications या formal document publication से जुड़ी हो:

1. external connectors तक पहुँच रखने वाले roles सीमित करें;
2. **Artifact destinations** में SharePoint या समकक्ष destination तैयार करें;
3. उन action levels पर `require_approval` लागू करें जो external distribution उत्पन्न कर सकते हैं;
4. ongoing tracking के लिए `signal_digest` को प्राथमिकता दें और instant alerts केवल critical cases तक सीमित रखें;
5. **Project integrations** में केवल वही bindings visible रखें जिनकी readiness और policy पहले से compliant हो।

यह दूसरा scenario signals, distribution, approval और actual execution को एक ही controlled flow में बाँधता है, बजाय इसके कि टीम हर screen को अलग surface की तरह देखे।

## आगे

- [पहुँच नियंत्रण और परियोजना भूमिकाएँ](./controle-acces-et-roles.md)
- [ज्ञान और एजेंट्स](./connaissance-et-agents.md)
- [गवर्नेंस, निर्णय और क्रियाएँ](./gouvernance-decisions-et-actions.md)
- [कनेक्टर्स और एकीकरण](./connecteurs-jira-et-sharepoint)
- [पोर्टफोलियो और तकनीकी प्रशासन](./portefeuille-et-administration-technique.md)
