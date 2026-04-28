---
title: रिपोर्ट, AI लॉग और ट्रेसबिलिटी
slug: /rapports-journal-ia-et-tracabilite
description: PM Docs की समीक्षा करें, डिलिवरेबल्स प्रकाशित करें और AI run की पूरी ट्रेसबिलिटी को समझें।
---

[मुखपृष्ठ](./index.md) · [संरचित आउटपुट, प्रमाण और नवीनता](./sorties-contextuelles-preuves-et-fraicheur.md) · [पोर्टफोलियो और तकनीकी प्रशासन](./portefeuille-et-administration-technique.md)

![रिपोर्ट और आर्टिफैक्ट](/img/screenshots/localized/hi/08-reports-overview.jpg)

## उद्देश्य

यह पृष्ठ **artifact**, **artifact version** और **PM Doc** के बीच का अंतर स्पष्ट करता है और फिर ऑडिट, समर्थन तथा रनटाइम पारदर्शिता के लिए **AI Log** की भूमिका समझाता है।

## तीन अवधारणाएँ जिन्हें अलग-अलग समझना चाहिए

| शब्द | भूमिका |
| --- | --- |
| Artifact | किसी run या समीक्षा कार्य से बना नियंत्रित ऑब्जेक्ट |
| Artifact Version | किसी artifact की सटीक स्थिति, जिसमें उसका इतिहास, `Diff` और `Lineage` शामिल होते हैं |
| PM Doc | परियोजना दस्तावेज़, जिसे review, edit, download, publish किया जा सकता है या फिर **Knowledge** में वापस जोड़ा जा सकता है |

## देखा गया जीवनचक्र

सबसे सामान्य प्रवाह यह है:

1. agent chat से एक **run** शुरू होता है;
2. यह **run** एक **structured output** बनाता है;
3. flow और उपलब्ध अनुमतियों के अनुसार यही output आगे **artifact** या **PM Doc** का आधार बन सकता है;
4. जब कोई नियंत्रित दस्तावेज़ मौजूद हो या तैयार किया जाना हो, तब उपयोगकर्ता **Reports & artifacts / PM Documents** खोलता है;
5. वह सामग्री पढ़ता है और **Diff** तथा **Lineage** की जाँच करता है;
6. फिर वह **Approve**, **Publish**, **Download** या **Add to knowledge** में से उपयुक्त कार्रवाई चुनता है।

दूसरे शब्दों में, agent का उत्तर अपने-आप अंतिम दस्तावेज़ नहीं बनता। सामान्य क्रम प्रायः **run -> structured output -> artifact / PM Doc -> review -> downstream decision** रहता है।

![PM डॉक्स, DOCX और XLSX कार्यप्रवाह](/img/diagrams/hi/documents-pm-docx-xlsx-workflow.svg)

## एजेंट से DOCX या XLSX तक

ProPM Agent में agents दस्तावेज़ीय या सारणीबद्ध प्रस्तुति के लिए सामग्री तैयार कर सकते हैं, लेकिन अंतिम प्रसार से पहले review चरण स्पष्ट रूप से बना रहता है।

### जब परिणाम DOCX बनता है

**DOCX** सामान्यतः वर्णनात्मक output के लिए अधिक उपयुक्त होता है, जैसे संक्षिप्त रिपोर्ट, स्थिति रिपोर्ट, संश्लेषण नोट, बैठक सारांश या कोई अन्य दस्तावेज़-उन्मुख डिलिवरेबल। सामान्य प्रवाह प्रायः यह रहता है:

1. agent run;
2. structured output;
3. artifact;
4. **PM Documents** में review;
5. **DOCX** download या governance के अनुसार publish।

### जब परिणाम XLSX बनता है

**XLSX** अधिकतर तालिका-आधारित output के लिए उपयुक्त होता है, जैसे रजिस्टर, मैट्रिक्स, ट्रैकिंग योजनाएँ, सूचियाँ या संरचित तुलना। मूल प्रवाह वही रहता है, लेकिन review स्क्रीन प्रायः grid-style editor को प्राथमिकता देती है।

### प्रसार से पहले क्या नियंत्रित रहता है

भले ही agent ने बहुत उपयोगी सामग्री तैयार कर दी हो:

- उपयोगकर्ता draft को फिर भी पढ़ता है;
- approval अभी भी आवश्यक हो सकती है;
- publication किसी destination और rendering profile पर निर्भर कर सकती है;
- source run का trace **AI Log** में बना रहता है।

## दिखाई देने वाली स्थितियाँ

### Artifact

artifact या artifact version स्तर पर पुष्टि की गई स्थितियाँ:

- `draft`
- `approved`
- `published`
- `superseded`

### PM Doc

PM Docs में कम-से-कम ये स्थितियाँ दिखाई देती हैं:

- `draft`
- `final`

## यदि Reports & artifacts खाली दिखाई दे

किसी project में यह स्क्रीन कई सामान्य कारणों से खाली दिख सकती है:

- अभी तक कोई **artifact** या **PM Doc** बनाया ही नहीं गया है;
- run केवल **structured output** चरण तक ही पहुँचा और उससे आगे कोई नियंत्रित ऑब्जेक्ट नहीं बना;
- गलत project active है या कोई filter अपेक्षित rows छिपा रहा है;
- वर्तमान environment में वही preloaded examples न हों जो reference screenshots में दिखाई देते हैं।

समर्थन के लिए इसे सरल तरीके से पढ़ें:

- यदि **Runs** में run मौजूद है लेकिन **Reports & artifacts** खाली है, तो यह जरूरी नहीं कि यह failure हो; संभव है output अभी किसी नियंत्रित दस्तावेज़ में बदला ही न गया हो;
- यदि केवल agent का उत्तर दिख रहा है, तो पहले **Agents** या **AI Log** से शुरू करें;
- यदि project बदलने पर rows अचानक दिखाई दें, तो समस्या सामग्री की नहीं, context की थी;
- यदि documentation और live environment अलग दिखें, तो preloaded examples के भिन्न होने को भी सामान्य संभावना मानें।

ऐसी स्थिति में पहले **Agents** या **AI Log** पर लौटें और **Reports & artifacts** में तभी आएँ जब कोई नियंत्रित ऑब्जेक्ट वास्तव में मौजूद हो।

## Reports & artifacts में उपलब्ध क्रियाएँ

यहाँ सामान्यतः ये विकल्प उपलब्ध होते हैं:

- **review / preview**;
- **Diff**;
- **Lineage**;
- **edit**;
- **download**;
- **Add to knowledge**;
- **publish**;
- **delete**।

## Diff, Lineage और versioning

### Diff

**Diff** अलग-अलग artifact versions की तुलना करता है। यह विशेष रूप से इन स्थितियों में उपयोगी है:

- publication से पहले बदलावों को पढ़ना;
- agent के प्रस्ताव और वास्तव में स्वीकृत version के बीच का अंतर समझना;
- यह समझना कि अंतिम दस्तावेज़ किसी पिछले draft से अलग क्यों है।

### Lineage

**Lineage** इन तत्वों को आपस में जोड़ती है:

- `source run ID`;
- `Context snapshot ID`;
- `Structured output ID`;
- artifact और उसकी version;
- जुड़ी हुई publications और प्रमाण।

### `Context snapshot` को कैसे पढ़ें

`Context snapshot` उस वास्तविक context का रिकॉर्ड है जो run के दौरान उपयोग हुआ था: sources, project context और उस समय की दस्तावेज़ीय स्थिति।

यह इस प्रश्न का उत्तर देने में मदद करता है: **यह output किस context के आधार पर तैयार हुआ था?**

### Versioning

interface version number के आधार पर चयन की अनुमति देती है और यह भी दिखा सकती है कि पिछली version कौन-सी थी, comparison base क्या है और कौन-सी version `superseded` हो चुकी है।

## अनुमोदन, प्रकाशन और Knowledge में पुनः जोड़ना

इन नियमों को याद रखें:

- **Approve** अभी भी `draft` में मौजूद artifact version को स्वीकृत करता है;
- **Publish** तब नियंत्रित वितरण शुरू करता है जब flow और destination इसकी अनुमति दें;
- publication नियंत्रित formats और destinations की ओर जाती है;
- **Add to knowledge** reviewed document को project search में वापस जोड़ता है;
- **Download** publication और knowledge में पुनः जोड़ने, दोनों से अलग action है।

## उपलब्ध editors

उत्पाद में संपादन के कई तरीके दिखाई देते हैं:

- दस्तावेज़-उन्मुख output के लिए rich / markdown editor;
- तालिका-उन्मुख output के लिए spreadsheet जैसी grid editor;
- ऐसे formats के लिए review / source read-only mode, जिन्हें उसी रूप में edit नहीं किया जा सकता।

पुष्टि किए गए downloads: **DOCX** और **XLSX**।

### कौन-सी सामग्री किस format में जाती है

| सामग्री का प्रकार | सबसे संभावित स्क्रीन | सबसे स्वाभाविक output format |
| --- | --- | --- |
| संक्षिप्त नोट, संश्लेषण, स्थिति रिपोर्ट | rich editor | DOCX |
| रजिस्टर, मैट्रिक्स, ट्रैकिंग तालिका, संरचित तुलना | grid editor | XLSX |
| गैर-संपादनयोग्य या विशेष format | review / source mode | profile के अनुसार download या publish |

### ध्यान रखने योग्य व्यावहारिक सीमाएँ

| स्थिति | उपयोगी समझ |
| --- | --- |
| वास्तव में संपादनयोग्य सामग्री | approval से पहले review और नियंत्रित बदलावों के लिए editor का उपयोग करें |
| सामग्री मुख्यतः review mode में है | इसे review और validation की स्क्रीन की तरह देखें, मुख्य पुनर्लेखन स्थान की तरह नहीं |
| साझा करने के लिए reference rendering चाहिए | application के बाहर साझा करने के लिए नियंत्रित download सबसे भरोसेमंद output रहता है |

![PM Doc संपादक और दस्तावेज़ समीक्षा](/img/screenshots/localized/hi/06-pm-doc-editor.jpg)

![AI Log](/img/screenshots/localized/hi/09-ai-log-runs.jpg)

## AI Log: यह पृष्ठ क्या कवर करता है

**AI Log** में दो अलग tabs होते हैं:

- **Runs**;
- **Activity**।

## Runs बनाम Activity

| टैब | इसका उपयोग किस लिए है |
| --- | --- |
| Runs | किसी agent execution, उसकी ट्रेसबिलिटी मेटाडेटा और जुड़े हुए artifacts की समीक्षा के लिए |
| Activity | परियोजना events की समयरेखा और किसी event के raw payload की जाँच के लिए |

### Runs कब खोलें

**Runs** तब खोलें जब आपको:

- समझना हो कि कोई परिणाम क्यों उत्पन्न हुआ;
- वास्तव में उपयोग हुआ provider देखना हो;
- `Source freshness`, `Confidence` और citations पढ़नी हों;
- किसी run को artifact या PM Doc से जोड़ना हो।

### Activity कब खोलें

**Activity** तब खोलें जब आपको:

- समयरेखा दोबारा बनानी हो;
- यह सत्यापित करना हो कि draft, approval या publication ने वास्तव में event छोड़ा है;
- support या audit के लिए raw payload देखना हो।

### Activity में किन घटनाओं की पुष्टि उपयोगी रहती है

प्रवाह के अनुसार **Activity** यह पुष्टि करने में मदद कर सकता है कि आगे का event वास्तव में record हुआ था, जैसे:

- draft creation;
- artifact approval;
- publication;
- notification preparation;
- approval, rejection या governed execution से जुड़ा decision।

### `Type` / `Kind` के ठोस उदाहरण

नीचे दिए गए values common events को पढ़ने के reference के रूप में उपयोग करें।

| Type | Kind | व्यावहारिक समझ |
| --- | --- | --- |
| `agent_execution` | `completed` / `failed` | agent run सफलतापूर्वक समाप्त हुआ या विफल रहा |
| `document_upload` | `started` / `completed` / `failed` | document ingestion शुरू हुई, पूरी हुई या विफल हुई |
| `report_generated` | `completed` | PM Doc या report बनकर log हो गया |
| `marketplace_update` | `completed` | notification या system update इतिहास में दर्ज हो गया |

## दिखाई देने वाले filters और columns

### Runs

उपलब्ध filters:

- agent / status / run ID के आधार पर खोज;
- agent filter;
- status filter।

दिखाई देने वाले columns: **Created**, **Agent**, **Status**, **Cost**, **Run ID**, **Actions**।

**Cost** field उपलब्ध होने पर कम-से-कम **tokens** और **calls** की संख्या दिखाती है।

### समर्थन के लिए `Trace ID`, `Cost`, `Confidence` और `Source freshness` को कैसे पढ़ें

समर्थन के लिए इन फ़ील्ड्स को इस तरह पढ़ना उपयोगी है:

| फ़ील्ड | support के लिए व्यावहारिक समझ |
| --- | --- |
| `Run ID` | `Runs` स्क्रीन में दिखाई देने वाली पंक्ति को जल्दी ढूँढने का सबसे व्यावहारिक संकेतक |
| `Trace ID` | support ticket, audit correlation और cross-service diagnostics के लिए मुख्य technical identifier; महत्वपूर्ण run हो तो इसे नोट करके रखें |
| `Cost` | `tokens` और `calls` runtime उपयोग, retries, असामान्य खपत या जाँच का संदर्भ समझने के लिए हैं; इसे अपने-आप business approval signal न मानें |
| `Confidence` | समीक्षा प्राथमिकता का संकेत; यदि यह कमज़ोर लगे, तो evidence, assumptions और citations दोबारा पढ़ें |
| `Source freshness` | cited evidence कितनी वर्तमान है; यदि यह `aging`, `stale`, `conflicting` या `unavailable` हो, तो external sharing से पहले पुनः सत्यापन करें |

यदि cross-project budget pressure या usage pressure देखना हो, तो individual run की raw **Cost** card की जगह **Portfolio** में **`cost_pressure`** देखें।

### Activity

उपलब्ध filters:

- type / kind / actor के आधार पर खोज;
- type filter;
- kind filter।

दिखाई देने वाले columns: **Created**, **Type**, **Kind**, **Actor**, **ID**, **Actions**।

## किसी run में दिखाई देने वाले तकनीकी विवरण

किसी run की detail view में यह जानकारी दिखाई दे सकती है:

- `Trace ID`;
- `Context snapshot ID`;
- `Structured output ID`;
- citations;
- `Effective AI Provider`;
- `Deployment-selected AI Provider`;
- `Model family`;
- `Confidence`;
- `Source freshness`;
- linked artifacts।

## AI runtime पारदर्शिता

यह अंतर विशेष रूप से महत्वपूर्ण है:

- **Deployment-selected AI Provider**: environment setup या deployment के समय चुना गया provider;
- **Effective AI Provider**: वही provider जिसने इस विशेष run को वास्तव में संभाला।

ये दोनों values अलग हो सकती हैं। यदि संदेह हो, तो देखे जा रहे run के लिए **AI Log** को अंतिम reference मानें।

### समर्थन के लिए `Effective AI Provider` को कैसे पढ़ें

`Effective AI Provider` इस प्रश्न का उत्तर देता है: **इस सटीक run को वास्तव में किस provider ने संभाला?**

support या audit में इसे इस तरह पढ़ना उपयोगी है:

- यदि admin configuration और actual run में अंतर दिखे, तो इसी run की runtime value को reference मानें;
- escalation करते समय `Trace ID`, `Effective AI Provider`, `Model family`, approximate time और project को साथ रखें;
- केवल deployment setting, `Validate` या `Test` देखकर provider मान लेने के बजाय run detail में दिखाई देने वाली runtime value पढ़ें;
- provider selection पर संदेह हो, तो `Deployment-selected AI Provider` और `Effective AI Provider` को साथ पढ़ें।

## लक्षण के अनुसार पहले कौन-सी स्क्रीन खोलें

| लक्षण | पहले खोलने योग्य स्क्रीन | क्यों |
| --- | --- | --- |
| draft और final version में content का अंतर | **Diff** | यह देखने के लिए कि वास्तव में क्या बदला |
| evidence या provenance पर संदेह | **Lineage** | run, structured output, artifact और sources को जोड़ने के लिए |
| runtime, provider या AI execution पर संदेह | **Runs** | `Trace ID`, effective provider, `Source freshness` और `Confidence` देखने के लिए |
| publication, approval या आगे की प्रक्रिया पर संदेह | **Activity** | समयरेखा और raw payload की पुष्टि के लिए |

## अनुशंसित जाँच क्रम

जब कोई deliverable, publication या notification संदिग्ध लगे, तो सबसे दृश्य स्तर से सबसे तकनीकी स्तर तक इस क्रम में जाएँ:

1. संबंधित **PM Doc** या artifact खोलें;
2. **Diff** देखकर समझें कि वास्तव में क्या बदला;
3. **Lineage** खोलकर `source run ID`, `Context snapshot ID` और `Structured output ID` नोट करें;
4. **Runs** में जाकर `Source freshness`, `Confidence`, citations, **Effective AI Provider** और linked artifacts देखें;
5. **Activity** में आगे की प्रक्रिया की पुष्टि करें: draft, approval, publication, notification या governed action;
6. यदि support या audit को जाँच आगे बढ़ानी हो, तो अंत में **Trace ID** सुरक्षित रखें।

### मामला 1 - final PM Doc गलत लगता है

1. final **PM Doc** खोलें और पुष्टि करें कि वास्तव में कौन-सी version publish हुई थी;
2. **Diff** से पहचानें कि क्या जोड़ा, हटाया या बदला गया;
3. **Lineage** खोलकर `source run ID` और `Structured output ID` खोजें;
4. **Runs** में evidence, `Source freshness` और effective provider जाँचें;
5. यदि final content अपेक्षित flow नहीं दिखाता, तो **Activity** में approval, publication और उस actor की जाँच करें जिसने version को आगे बढ़ाया।

### मामला 2 - तैयार action या notification पूरी नहीं हुई

1. दिख रहे draft, action queue या notification से शुरू करें;
2. उपलब्ध हो तो `relatedArtifactId` या `relatedNotificationId` नोट करें;
3. **Activity** में देखें कि approval, rejection या execution log हुआ या नहीं;
4. यदि flow अभी भी अस्पष्ट हो, तो **Runs** पर लौटकर source run और recommendation तैयार करने वाले logic देखें;
5. escalation से पहले **Trace ID** और संबंधित identifiers दस्तावेज़ित करें।

## किन IDs को प्राथमिकता से सुरक्षित रखें

| स्थिति | प्राथमिकता से रखने योग्य IDs |
| --- | --- |
| संदिग्ध run result | `Trace ID`, `Context snapshot ID`, `Structured output ID` |
| संदिग्ध artifact या final PM Doc | `source run ID`, `Structured output ID`, संबंधित artifact version |
| अस्पष्ट follow-up वाली action या notification | `Trace ID`, `relatedArtifactId`, `relatedNotificationId` |
| cross-support जाँच | ऊपर दिए गए सभी IDs, साथ में approximate time और संबंधित project |

## ट्रेसबिलिटी की अच्छी प्रथाएँ

- जब कोई परिणाम महत्वपूर्ण हो, तो **Trace ID** अवश्य सुरक्षित रखें;
- publish करने से पहले deliverable और evidence के बीच की lineage जाँचें;
- दो versions में अंतर हो, तो निर्णय से पहले **Diff** पढ़ें;
- केवल वास्तव में reviewed deliverables को ही **Knowledge** में जोड़ें;
- जब **Runs** पर्याप्त न हो, तो जाँच पूरी करने के लिए **Activity** का उपयोग करें।

## आगे

- [संरचित आउटपुट, प्रमाण और नवीनता](./sorties-contextuelles-preuves-et-fraicheur.md)
- [पोर्टफोलियो और तकनीकी प्रशासन](./portefeuille-et-administration-technique.md)
- [रखरखाव, समर्थन और अक्सर पूछे जाने वाले प्रश्न](./maintenance-support-faq.md)
- [शब्दकोश](./glossaire.md)
