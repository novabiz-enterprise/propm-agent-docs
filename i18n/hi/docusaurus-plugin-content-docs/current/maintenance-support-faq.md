---
title: रखरखाव, समर्थन और अक्सर पूछे जाने वाले प्रश्न
slug: /maintenance-support-faq
description: ऑपरेशन के संदर्भ, उपयोगी जाँच और अक्सर पूछे जाने वाले प्रश्नों के उत्तर।
---

[मुखपृष्ठ](./index.md) · [रिपोर्ट, AI लॉग और ट्रेसबिलिटी](./rapports-journal-ia-et-tracabilite.md) · [शब्दकोश](./glossaire.md)

## ऑपरेशन के लिए उपयोगी स्क्रीनें

एप्लिकेशन में निम्न अवलोकन बिंदु स्पष्ट रूप से दिखाई देते हैं:

- शीर्ष पट्टी में **notifications**;
- शीर्ष पट्टी में **Health indicator**;
- project **Workspace** में **signals**;
- runs और activity देखने के लिए **AI Log**;
- **Platform administration** में **Audit / activity**।

## त्वरित सत्यापन प्रक्रिया

1. पहले पुष्टि करें कि सही **project** active है;
2. यह स्पष्ट करें कि मामला **empty state**, **read-only**, **access denied** या किसी दिखाई देने वाले संदेश से जुड़ा है;
3. यदि विषय agent, result या artifact से जुड़ा है, तो **AI Log** खोलें;
4. **Trace ID** सुरक्षित रखें और यदि दिखे तो `Context snapshot ID` या `Structured output ID` भी नोट करें;
5. यदि access या execution रुका हुआ है, तो permissions, integrations, entitlements और seats जाँचें।

## स्थिति के अनुसार त्वरित संदर्भ

| सामने आई स्थिति | पहले देखने योग्य स्क्रीन | अगला चरण |
| --- | --- | --- |
| Microsoft sign-in या वापसी असामान्य है | [प्रारम्भ](./demarrage.md) | Entra, tenant, `redirectUri` और seats जाँचें |
| sign-in के बाद कोई project नहीं दिखता | **Projects** / project selector | access control जाँचें या account को project में जोड़ें |
| agent response, artifact या publication संदिग्ध है | **AI Log** -> `Runs` | **Activity**, फिर **Reports & artifacts** |
| import या search असंगत है | **Knowledge** और import history | **Project integrations**, फिर **Platform administration** |
| external action दिख रही है लेकिन रुकी हुई है | **Actions & approvals** | **Project integrations**, फिर **Platform administration** |

## त्वरित जाँच सूचियाँ

### पुष्टि करने योग्य access

URL, tenant, `guest` access की स्थिति में guest account, वास्तव में configured `redirectUri`, और जहाँ plan seat की माँग करता हो वहाँ seat availability जाँचें।

### पृष्ठ दिखता है लेकिन edit नहीं होता

संभावना है कि आप **read-only** mode में हों। इसे तुरंत permission issue मानने से पहले अपना role जाँचें।

### दस्तावेज़ दिखता है लेकिन search में नहीं मिलता

पहले document status (`Indexed`, `Ingesting`, `Failed`), import history, page refresh और failed call होने पर search `Trace ID` जाँचें।

### धुंधले या अनुपलब्ध source से import

सबसे उपयोगी जाँचें हैं: unvalidated provider, missing project binding, blocking entitlement, अपर्याप्त permission या ऐसा health status जिसे पहले confirm करना हो।

### action दिखती है लेकिन execute नहीं होती

compatible connector, project binding, required approval, user role और लागू policy जाँचें।

### voice उपलब्ध नहीं

voice browser पर निर्भर करती है। दूसरा browser आज़माएँ, microphone permissions जाँचें, और यदि speech recognition उपलब्ध नहीं है तो text input का उपयोग करें।

## support को भेजने योग्य डेटा

| तत्व | यह क्यों उपयोगी है |
| --- | --- |
| deployment URL | संबंधित environment की पहचान करने के लिए |
| संबंधित project | संदर्भ फिर से बनाने के लिए |
| Trace ID | run या event को सटीक रूप से ढूँढने के लिए |
| Context snapshot ID / Structured output ID | run, output और artifact को जोड़ने के लिए |
| screenshot | रुकावट के समय दिखाई दे रही स्थिति समझने के लिए |
| approximate time | event को logs से मिलाने के लिए |

## FAQ - access और security

### मैं admin page देख सकता हूँ, लेकिन उसे modify क्यों नहीं कर सकता?

क्योंकि उत्पाद **read-only** और **access denied** में अंतर करता है। कोई page निरीक्षण के लिए दिखाई दे सकती है, भले ही उसमें बदलाव की अनुमति न हो।

### Microsoft sign-in सफल है, फिर भी access अपेक्षित रूप से क्यों नहीं मिल रहा?

tenant, account authorization, उपलब्ध project access और जहाँ लागू हो वहाँ seat availability जाँचें।

### sign-in सफल है, लेकिन कोई project क्यों नहीं दिखाई देता?

यह स्थिति हमेशा authentication समस्या नहीं दर्शाती। पहले project selector, फिर **Projects** page देखें। यदि list अभी भी खाली है, तो account शायद अभी सही project में जोड़ा नहीं गया है या उसके पास creation rights नहीं हैं।

### किसी external account को `guest` user के रूप में कब आमंत्रित करना चाहिए?

जब account उस tenant से अलग tenant में हो जिसमें application host की गई हो। तब account को target tenant में invite करना चाहिए, फिर application या अपेक्षित group के माध्यम से authorize करना चाहिए।

### tenant, `redirect URI`, Entra application और seat में जल्दी अंतर कैसे करें?

इस क्रम का पालन करें:

1. यदि Microsoft application में लौटने से पहले ही प्रक्रिया fail हो जाए, तो पहले tenant, `clientId` या `redirectUri` पर संदेह करें;
2. यदि sign-in सफल है लेकिन application blocked रहती है, तो seats और project access जाँचें;
3. यदि केवल कोई specific screen locked रहे, तो मुद्दा अक्सर role या permission से जुड़ा होता है, authentication से नहीं।

## FAQ - availability, runtime और connectivity

### जब कुछ pages अभी भी load हो रही हों, तब health panel को कैसे पढ़ें?

authentication वैध रह सकती है, जबकि कोई **API** component या provider availability अतिरिक्त जाँच माँग रहा हो। पहले **Health indicator** में दिखाई दे रही स्थिति नोट करें, फिर panel की व्याख्या के लिए [इंटरफ़ेस और नेविगेशन](./interface-et-navigation.md) और provider या admin integration से जुड़े संदेह के लिए [पोर्टफोलियो और तकनीकी प्रशासन](./portefeuille-et-administration-technique.md) खोलें।

### यदि sign-in सफल है, project visible है, लेकिन runs शुरू नहीं हो रहे, तो क्या करें?

इस क्रम में जाँचें: active project, **Health indicator**, provider का `Operational` होना, संभावित entitlement, फिर **AI Log** ताकि यह देखा जा सके कि कम-से-कम कोई run बना भी है या नहीं। यदि provider पर संदेह बना रहे, तो [पोर्टफोलियो और तकनीकी प्रशासन](./portefeuille-et-administration-technique.md) पर जाएँ।

## FAQ - project, workspace और agents

### मुझे **Workspace** का उपयोग कब करना चाहिए और **Agents** का कब?

**Workspace** का उपयोग project को configure, monitor और संचालित करने के लिए करें। **Agents** का उपयोग किसी agent से बातचीत करने और structured output बनाने के लिए करें।

### chat history कहाँ store होती है?

दिखाई देने वाली history browser में स्थानीय रहती है। यह कोई साझा केंद्रीय संग्रह नहीं है।

### browser में local क्या रहता है और platform पर क्या shared रहता है?

वर्तमान स्थिति के अनुसार:

- **chat continuity** वर्तमान browser में, **project + agent** pair के आधार पर, स्थानीय रूप से सुरक्षित रहती है;
- याद रखा गया **active project** भी browser और कभी-कभी local session पर निर्भर करता है;
- अन्य browser-local सुविधाओं में **interface language**, **theme**, **recent-project list**, **notification center** की read/cleared state, और कुछ saved **table या view preferences** शामिल हो सकती हैं;
- **documents**, **imports**, **artifacts**, **approvals**, **published reports**, **project notifications**, **signals**, **digests**, **drafts** और **governed actions** shared platform state का हिस्सा हैं।

इसलिए browser या machine बदलने पर chat history का गायब होना सामान्य है, जबकि नियंत्रित project objects अन्य अधिकृत उपयोगकर्ताओं के लिए दिखाई देते रहते हैं।

### `All projects` का ठीक अर्थ क्या है?

`All projects` एक **custom-agent scope** है। यह न तो कोई single project है और न ही कोई **Portfolio** view। इसका अर्थ केवल इतना है कि कोई custom agent उसी account के सभी accessible projects में दिखाई दे सकता है। फिर भी हर run chat भेजे जाने के समय वाले **active project** में ही execute होता है।

### कोई custom agent दूसरे project में क्यों नहीं दिखाई देता?

पहले उसका scope जाँचें। `Project only` agent केवल current project तक सीमित रहता है। यदि environment `All projects` option दिखाता है, तो agent को उसी account से ऐसे project में देखना होगा जहाँ उस account की access वास्तव में हो।

### chat history project के आधार पर रहती है, agent के आधार पर, या केवल browser में?

continuity **browser-local** है और **project + agent** pair से जुड़ी है। इसलिए यह पूरे tenant के लिए global नहीं होती और अलग-अलग browsers में अपने-आप shared भी नहीं होती।

### voice के लिए सबसे पहले कौन-से browsers या permissions जाँचनी चाहिए?

`SpeechRecognition` / `webkitSpeechRecognition` के browser support से शुरुआत करें, फिर microphone access permission जाँचें। यदि button अभी भी उपलब्ध न हो या recognition fail हो, तो text input पर लौटें ताकि project flow रुका न रहे।

### voice हर environment में क्यों नहीं दिखाई देती?

क्योंकि यह capability browser और speech recognition support पर निर्भर करती है। voice input optional है। इसका न होना सामान्य workflow को नहीं रोकता, क्योंकि **Agents** में text input मुख्य path बना रहता है।

## FAQ - knowledge और search

### **Workspace**, **Knowledge** या **AI Log** खाली क्यों दिखाई दे सकते हैं?

पहले जाँचें कि कोई **active project** चुना गया है या नहीं। वर्तमान application state में, जब तक कोई project selected नहीं होता, ये screens सामान्य **empty state** दिखा सकती हैं।

यदि project पहले से active है, तो यह अलग करें कि मामला सामान्य empty state का है या वास्तव में data की कमी का: नया project, कोई run नहीं, कोई document नहीं, कोई artifact नहीं, या active filter।

### **Reports & artifacts** खाली क्यों दिखाई देता है?

सबसे सामान्य कारण हैं:

- अभी तक कोई **artifact** या **PM Doc** नहीं बना है;
- run केवल **structured output** चरण तक पहुँचा है;
- गलत project active है या कोई filter rows छिपा रहा है;
- environment में वही sample data नहीं है जो reference screenshots में दिखती है।

### कोई document list में दिखता है, लेकिन search में अभी क्यों नहीं मिलता?

क्योंकि वह अभी भी **Ingesting** state में हो सकता है या indexing pipeline पूरी होने की प्रतीक्षा में हो सकता है।

### `source label` और `source system` का क्या अर्थ है?

ये fields provenance को जल्दी समझने में मदद करती हैं:

- **source label** प्रायः visible provider या ingestion origin की पहचान करता है, जैसे `manual`, `SharePoint`, `ADF`, `Blob`, `Confluence`, `Jira` आदि;
- **source system** उस human-readable system या workstream को पहचानने में मदद करता है जिससे वह evidence आया है, जैसे `Knowledge`, `Schedule`, `Finance`, `Operations` आदि।

जब किसी snippet पर निर्णय लेना हो और पूरी configuration फिर से खोलनी न हो, तब इन दोनों को साथ पढ़ें।

### import पूरा दिख सकता है, फिर भी कुछ documents searchable क्यों नहीं होते?

क्योंकि visible ingestion का अर्थ यह नहीं कि indexing पूरी हो चुकी है। document status (`Indexed`, `Ingesting`, `Failed`) जाँचें और document वास्तव में indexed होने पर search फिर से चलाएँ।

### कोई document `Indexed` है, फिर भी किसी structured output में proof `unavailable` क्यों हो सकती है?

document **Knowledge** में मौजूद हो सकता है, लेकिन run के समय proof generation उससे जुड़ा प्रमाण भरोसेमंद रूप से स्थापित नहीं कर पाई हो। पहले [संरचित आउटपुट, प्रमाण और नवीनता](./sorties-contextuelles-preuves-et-fraicheur.md) देखें, फिर आवश्यकता हो तो [रिपोर्ट, AI लॉग और ट्रेसबिलिटी](./rapports-journal-ia-et-tracabilite.md) में run जाँचें।

### search और evidence में freshness badges का क्या अर्थ है?

ये source की समय-संबंधी confidence state दिखाते हैं: `fresh`, `aging`, `stale`, `conflicting` या `unavailable`। publication से पहले इन्हें पुनः समीक्षा संकेत की तरह पढ़ें, केवल सजावटी detail की तरह नहीं।

### `Trace ID`, `Context snapshot ID` और `Structured output ID` में क्या अंतर है?

- **Trace ID**: run या event को locate करने वाला मुख्य tracking identifier;
- **Context snapshot ID**: run के दौरान उपयोग किए गए document/project context का रिकॉर्ड;
- **Structured output ID**: वास्तव में बने structured output का identifier।

दैनिक उपयोग में यह याद रखें कि **Run ID** स्क्रीन पर पंक्ति खोजने के लिए सबसे व्यावहारिक संकेतक है, जबकि **Trace ID** support, audit और cross-service correlation में अधिक उपयोगी होता है।

## FAQ - AI outputs और AI Log

### `Runs` और `Activity` में क्या अंतर है?

**Runs** agent executions और उनका मेटाडेटा दिखाता है। **Activity** project events की समयरेखा और उनसे जुड़े raw payload दिखाती है।

### यह कैसे जानें कि वास्तव में कौन-सा AI provider उपयोग हुआ था?

**AI Log** में run detail खोलें और **Effective AI Provider** पढ़ें। उसी run के लिए यही संदर्भ मान है।

### `Validate` और `Test` हमेशा यह क्यों नहीं बताते कि वास्तव में यही provider उपयोग होगा?

क्योंकि `Validate` और `Test` मुख्यतः administrative configuration की consistency और connectivity जाँचते हैं। किसी विशेष run पर वास्तव में उपयोग हुआ provider वही है जो runtime में resolve हुआ और **AI Log** में दिखाई देता है।

### investigation में `Lineage` और `context snapshot` का क्या अर्थ है?

- **Lineage**: run, structured output, artifact, version और PM Doc के बीच की traceability chain;
- **context snapshot**: run के समय उपयोग किए गए context का रिकॉर्ड।

इन दोनों की मदद से आप समझते हैं कि deliverable कहाँ से आया और किस आधार पर तैयार हुआ।

### कोई run `Runs` में दिखता है, लेकिन `Activity` में स्पष्ट follow-up नहीं है। क्या करें?

इसका अर्थ अक्सर यह होता है कि run तो बना, लेकिन उससे आगे कोई draft, artifact, notification या action अभी तक नहीं बनी, या आप **Activity** में सही project / filter नहीं देख रहे। जाँच को [रिपोर्ट, AI लॉग और ट्रेसबिलिटी](./rapports-journal-ia-et-tracabilite.md) में दिए गए क्रम **Diff / Lineage / Runs / Activity** से आगे बढ़ाएँ।

### `Cost` field को कैसे पढ़ना चाहिए?

`Cost` को runtime transparency संकेत की तरह पढ़ें। `tokens` और `calls` मुख्यतः जाँच, support और usage समझने के लिए उपयोगी हैं; अपने-आप business approval signal नहीं हैं। यदि cross-project budget pressure या usage pressure समझना हो, तो किसी individual run की raw cost के बजाय **Portfolio** में `cost_pressure` देखें।

### `Confidence` और `Source freshness` के साथ व्यावहारिक रूप से क्या करना चाहिए?

- **Confidence** = समीक्षा संकेत, अपने-आप proof नहीं;
- **Source freshness** = cited evidence अभी कितनी वर्तमान है;
- यदि इनमें से कोई भी value कमज़ोर, पुरानी, `conflicting` या `unavailable` लगे, तो external sharing से पहले evidence, run और lineage पर वापस जाएँ।

## FAQ - reports, artifacts और governance

### `PM Doc`, `artifact` और `artifact version` में क्या अंतर है?

artifact नियंत्रित ऑब्जेक्ट है, artifact version उसकी ऐतिहासिक स्थिति है, और **PM Doc** वह project document है जो उस object से review, edit या publish होता है।

### कोई action visible है, लेकिन executable क्यों नहीं है?

अनुमतियाँ, connector, project binding, governance policy और required approval जाँचें। यह भी देखें: [गवर्नेंस, निर्णय और क्रियाएँ](./gouvernance-decisions-et-actions.md)।

### **Approve**, **Publish** और **Add to knowledge** का उपयोग कब करना चाहिए?

- **Approve** उस artifact version को स्वीकृत करता है जो अभी `draft` में है;
- **Publish** नियंत्रित वितरण को target या output format की ओर भेजता है;
- **Add to knowledge** reviewed document को project search में वापस जोड़ता है।

इन तीनों actions का उपयोग एक-दूसरे के स्थान पर नहीं किया जाना चाहिए।

### publication से पहले `conflicting` proof को कैसे arbitrate करें?

विरोधी sources फिर से खोलें, snippet, date, provenance और freshness की तुलना करें, फिर arbitration को artifact, review note या governance flow में दर्ज करें। आवश्यकता हो तो सब कुछ **AI Log** से मिलाएँ।

### notification draft `held` क्यों रहती है या कभी external channel तक क्यों नहीं जाती?

interface में `in_app` सबसे सीधा path है। external channels `held` / `draft` में रह सकते हैं जब तक नियंत्रित वितरण, policy, connector या approval पूरी न हो। इस क्रम को [गवर्नेंस, निर्णय और क्रियाएँ](./gouvernance-decisions-et-actions.md) में इस तरह पढ़ें: signal, संभावित digest, draft, policy, connector, फिर approval।

### कोई action `pending approval` या `approved` बनी रहती है, लेकिन visible execution क्यों नहीं दिखता?

- `pending approval` का अर्थ है कि approval अभी दी नहीं गई है;
- `approved` का अर्थ है कि approval मौजूद है, लेकिन execution हो चुकी है यह मान लेना अभी सही नहीं होगा।

पहले downstream step की **Actions & approvals** में, फिर **Activity** में पुष्टि करें। आवश्यकता हो तो [रिपोर्ट, AI लॉग और ट्रेसबिलिटी](./rapports-journal-ia-et-tracabilite.md) में दी गई विधि अपनाएँ।

### कोई integration platform level पर available है, लेकिन मेरे project में locked क्यों है?

क्योंकि केवल platform-level तकनीकी परिभाषा पर्याप्त नहीं होती। आपको valid project binding, पर्याप्त permissions, compatible policy, स्वीकार्य health status और जहाँ लागू हो वहाँ संबंधित entitlement भी चाहिए।

## FAQ - portfolio और administration

### sample data हमेशा documentation से बिल्कुल मेल क्यों नहीं खाती?

live environments अलग हो सकते हैं। कुछ projects वही preloaded documents, reports या search examples नहीं दिखाते जो reference screenshots में दिखते हैं।

### Portfolio कोई project या outlier क्यों नहीं लौटा रहा?

कई व्याख्याएँ सामान्य हो सकती हैं:

- कोई accessible project load नहीं हुआ है;
- अभी कोई project या signal selected नहीं है;
- comparison ने usable project summaries वापस नहीं दीं;
- कुछ signals evidence की कमी के कारण unavailable हैं;
- active configuration के साथ कोई project overall outlier threshold से ऊपर नहीं है।

इसलिए शांत दिखता **Portfolio** restrictive selection, limited evidence या वास्तव में stable स्थिति, इनमें से किसी भी कारण से हो सकता है।

### क्या `Portfolio` के implicit presets होते हैं?

नहीं। interface मुख्य रूप से default values, **Reset defaults** action और saved **cohorts** देती है। defaults एक सुरक्षित शुरुआती बिंदु हैं, कोई अनिवार्य model नहीं। कुछ environments में preloaded cohort भी दिख सकती है, लेकिन यह environment के अनुसार बदलती है।

### seat को release या reassign कैसे करें?

यह **Platform administration** में किसी authorized profile द्वारा किया जाता है। removal के बाद capacity plan posture और withdrawal window के अनुसार बाद की reallocation के लिए उपलब्ध हो जाती है।

### `AI Provider settings` में `Validate` सफल लेकिन `Test` fail क्यों होता है?

इसका अर्थ है कि administrative configuration संगत दिख रही है, लेकिन वास्तविक connectivity या remote access अभी सफल नहीं हुआ। endpoint, secret या auth, provider accessibility और network constraints जाँचें, फिर [पोर्टफोलियो और तकनीकी प्रशासन](./portefeuille-et-administration-technique.md) में वर्णित क्रम का पालन करें।

### मेरा provider visible है, लेकिन कभी `Operational` क्यों नहीं होता?

कोई provider configure या `Validate` हो सकता है, फिर भी उसने पूरी **Configuration -> Validation -> Test -> Activate** chain पूरी न की हो। इसे उपयोग योग्य मानने से पहले entitlement, `allowed providers` और समग्र तैयारी भी जाँचें।

### `AI Provider settings` में कोई Azure OpenAI deployment नहीं दिखे तो क्या करें?

यह सामान्यतः बताता है कि configured Azure OpenAI resource में कोई deployment दिखाई नहीं दे रहा, या current parameters के साथ discovery सफल नहीं हो रही। Azure side पर endpoint, auth, API version और actual deployments जाँचें, फिर [पोर्टफोलियो और तकनीकी प्रशासन](./portefeuille-et-administration-technique.md) में विस्तृत नियंत्रण क्रम देखें।

### AI provider visible है, लेकिन modify या use क्यों नहीं किया जा सकता?

provider **read-only** mode में दिखाई दे सकता है, जबकि modification admin role तक सीमित हो। इसका actual use plan, `allowed providers`, entitlement या effective runtime resolution से भी सीमित हो सकता है।

## आगे

- [शब्दकोश](./glossaire.md)
- [प्रारम्भ](./demarrage.md)
- [पोर्टफोलियो और तकनीकी प्रशासन](./portefeuille-et-administration-technique.md)
