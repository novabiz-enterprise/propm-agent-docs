---
title: ज्ञान और एजेंट्स
slug: /connaissance-et-agents
description: परियोजना ज्ञान आधार को पोषण दें, एजेंट्स की सक्रियता को समझें और परिणामों का उपयोग दस्तावेज़ PM तक करें।
---

[होम](./index.md) · [परियोजनाएँ और कार्यक्षेत्र](./projets-et-espace-de-travail.md) · [संरचित आउटपुट, साक्ष्य और ताजगी](./sorties-contextuelles-preuves-et-fraicheur.md)

![ज्ञान परियोजना](/img/screenshots/localized/hi/05-knowledge.jpg)

## उद्देश्य

यह पृष्ठ बताता है कि दस्तावेज़ कैसे अपलोड या आयात करें, **Knowledge** में दिखाई देने वाले मेटाडेटा को कैसे पढ़ें, और फिर **Agents** में उसी परियोजना संदर्भ का उपयोग कैसे करें।

## Knowledge: आप क्या कर सकते हैं

उपलब्ध क्षमताएँ:

- परियोजना सामग्री में खोज;
- मैन्युअल अपलोड;
- डेटा ताज़ा करना;
- स्वीकृत स्रोतों से आयात;
- आयात इतिहास देखना;
- परिणामों को क्रमित करना, फ़िल्टर करना और पृष्ठों में देखना।

## समर्थित फ़ाइल प्रकार

इंटरफ़ेस में स्पष्ट रूप से स्वीकार किए गए फ़ाइल प्रकारों में शामिल हैं:

- **PDF**;
- **DOCX**, **ODT**, **RTF**, **TXT**, **Markdown**;
- **CSV**, **XLSX**, **XLSM**, **ODS**;
- **JSON**, **XML**;
- **PPTX**, **ODP**;
- **HTML / HTM**;
- **EML**, **EPUB**;
- **PNG**, **JPG**, **JPEG**, **BMP**, **TIFF**, **HEIF**।

## स्वीकृत स्रोतों से आयात

आयात तंत्र उन `ingestion providers` पर निर्भर करता है जिन्हें पहले प्लेटफ़ॉर्म स्तर पर सत्यापित किया गया हो, और बाद में परियोजना के लिए उपलब्ध कराया गया हो।

### आयात चयन सूची क्या दिखाती है

स्रोत के अनुसार इंटरफ़ेस यह जानकारी दिखा सकता है:

- स्रोत का नाम;
- पढ़ने योग्य **source label**;
- पिछली आयात तिथि;
- ताजगी या स्वास्थ्य स्थिति;
- अवरोध का कारण, जब स्रोत उपयोग योग्य न हो।

### आयात कब अवरुद्ध होता है

कोई आयात विकल्प इन कारणों से उपलब्ध न हो सकता है:

- entitlement;
- permission;
- policy;
- उपलब्धता स्थिति, जिसे जाँचना पड़े;
- missing या not-ready project binding।

## आयात इतिहास

आयात इतिहास कम से कम यह जाँचने देता है:

- दिखाई देने वाला प्रदाता नाम;
- run status;
- आयात के बाद की freshness;
- `Trace ID`;
- `discovered`, `imported`, `ignored`, या `incomplete` के रूप में चिह्नित मात्राएँ;
- उपलब्ध होने पर समाप्ति तिथि।

## दस्तावेज़ सूची और खोज को कैसे पढ़ें

### दिखाई देने वाली दस्तावेज़ स्थितियाँ

दस्तावेज़ तालिका कम से कम ये स्थितियाँ दिखाती है:

- **Indexed**;
- **Ingesting**;
- **Failed**।

कोई दस्तावेज़ दिखाई दे रहा हो, पर अभी खोज में न मिले, तो वह अक्सर अभी भी **Ingesting** चरण में होता है।

### खोज परिणामों में दिखाई देने वाला मेटाडेटा

खोज परिणामों में यह जानकारी दिख सकती है:

- `title`;
- `snippet`;
- `score`;
- `section`;
- `freshness` badge;
- **source system** badge;
- **source label** badge;
- **Open source** link;
- खोज `Trace ID`।

व्यावहारिक पढ़ाई:

- **source label** आम तौर पर उस साक्ष्य के लिए दिखाई देने वाला provider या ingestion origin बताता है, जैसे `manual`, `SharePoint`, `ADF`, `Blob`, `Confluence`, या `Jira`;
- **source system** उस system या workstream की मानव-पठनीय पहचान देता है, जैसे `Knowledge`, `Schedule`, `Finance`, या `Operations`;
- खोज `Trace ID` रोज़मर्रा की व्यावसायिक कुंजी नहीं, बल्कि निदान, समर्थन और ऑडिट का संदर्भ है।

यदि किसी snippet को पुनः उपयोग करना हो, तो स्रोत-उत्पत्ति का त्वरित आकलन करने के लिए `source label` और `source system` को साथ पढ़ें।

![ज्ञान में खोज परिणाम](/img/screenshots/localized/hi/05-knowledge-search-results.jpg)

![एजेंट्स दृश्य](/img/screenshots/localized/hi/04-agents.jpg)

## Agents: पृष्ठ की भूमिका

**Agents** पृष्ठ परियोजना संदर्भ को निर्देशित बातचीत में उपयोग करता है।

पुष्ट कार्यक्षमताएँ:

- उपलब्ध एजेंट्स की सूची;
- चयनित एजेंट का सारांश कार्ड, जिसमें **kind**, **scope**, **status**, और covered domains दिखते हैं;
- वार्तालाप क्षेत्र;
- संरचित आउटपुट और साक्ष्य मदें;
- ब्राउज़र में सहेजे गए सत्र;
- अधिकारों के अनुसार कस्टम एजेंट बनाना और हटाना;
- यदि environment अभी भी उपलब्ध कराए तो **Agents** में voice input।

## ProPM Agent की सक्रिय पहल

ProPM Agent की सक्रिय पहल का अर्थ यह नहीं है कि कोई agent परियोजना से बाहर अपने-आप काम कर रहा है। देखा गया व्यवहार अधिक नियंत्रित है: platform निगरानी योग्य स्थितियों को पहचानता है, उन्हें **signals** के रूप में दिखाता है, **digest** तैयार कर सकता है, **draft** या नियंत्रित **action** प्रस्तावित कर सकता है, और फिर अगला कदम उपयोगकर्ता या approver पर छोड़ता है।

![सक्रियता, डाइजेस्ट और नियंत्रित क्रिया](/img/diagrams/hi/proactivite-et-gouvernance.svg)

### उपलब्ध ट्रिगर

सक्रिय पहल इन स्थितियों से उत्पन्न हो सकती है:

- अपर्याप्त ताजगी;
- साक्ष्यों के बीच विरोधाभास;
- परिचालन अवरोध;
- पोर्टफोलियो में दिखने वाला योजना-दबाव या लागत;
- अधूरे निष्पादन;
- ऐसी अगली कार्रवाई, जिसे प्रसार, सत्यापन, या पुनःआरंभ की आवश्यकता हो।

### सक्रिय पहल कहाँ दिखाई देती है

- **Workspace**: signal feed और समीक्षा योग्य मदें;
- **गवर्नेंस, निर्णय और क्रियाएँ**: digests, notification drafts, action requests;
- **Portfolio command center**: indicators के आधार पर project comparison;
- **AI Log**: decision chain की ट्रेसबिलिटी।

### सक्रिय पहल अपने-आप क्या नहीं करती

- यह भूमिकाओं को bypass नहीं करती;
- यह policies को bypass नहीं करती;
- यह controlled path के बिना application के बाहर publish नहीं करती;
- यह साक्ष्य, ताजगी और दिखाई देने वाली स्थितियों के कारण explainable रहती है।

## एजेंट जल्दी कैसे चुनें

जब कई कार्ड उपयुक्त लगें, तो पहले covered domain देखें, फिर scope और status की पुष्टि करें।

| फ़ील्ड | पहले क्या देखें | उपयोगी प्रतिक्रिया |
| --- | --- | --- |
| covered domains | कार्ड पर बताए गए विषय | उसी agent को चुनें जिसका domain वास्तव में अपेक्षित काम कवर करता हो |
| `scope` | agent की दृश्यता सीमा | देखें कि agent केवल वर्तमान परियोजना तक सीमित है या व्यापक दृश्यता रखता है |
| `status` | agent की वर्तमान उपलब्धता | चयनित परियोजना के लिए सक्रिय agent को प्राथमिकता दें |
| `kind` | standard या custom agent | `kind` को वर्णनात्मक संदर्भ मानें, पहला चयन मानदंड नहीं |

व्यवहार में, सूची में नाम या domain से खोजें, चयनित परियोजना के लिए सक्रिय agent चुनें, और व्यापक दृश्यता वाले या custom agents तभी लें जब उनका domain सचमुच उसी काम के लिए उपयुक्त हो।

## Agents के साथ काम करने का क्रम

1. **सक्रिय परियोजना** की जाँच करें;
2. **उपयुक्त agent** चुनें;
3. उद्देश्य, दायरा और अपेक्षित प्रारूप के साथ स्पष्ट अनुरोध लिखें;
4. किसी भी पुनः उपयोग से पहले संरचित आउटपुट अवश्य पढ़ें।

इंटरफ़ेस एजेंट सूची में खोजने देती है, जिससे सही विशेषज्ञ तक जल्दी पहुँचा जा सके।

### अनुशंसित पथ

पहली बार उपयोग करते समय यह क्रम सबसे स्पष्ट रहता है:

1. **Agents** में एक सरल प्रश्न पूछें;
2. पहले संरचित आउटपुट का सारांश पढ़ें;
3. यदि उत्तर पुनः उपयोग होना है, तो साक्ष्य, ताजगी और विश्वास स्तर जाँचें;
4. **Reports & artifacts** केवल तब खोलें जब इस परिणाम को नियंत्रित, समीक्षा योग्य या प्रकाशित किए जा सकने वाले document में बदलना हो।

## Agents में `All projects` का सही अर्थ

जब custom agent creation dialog में `All projects` दिखाई देता है, तो उसका अर्थ यह है:

- agent अभी भी वर्तमान परियोजना से ही बनाया जाता है;
- वह **उसी account के लिए उपलब्ध सभी projects** में visible रह सकता है;
- वह account के साथ एक परियोजना से दूसरी परियोजना तक जाता है;
- वह merged multi-project data space नहीं बनाता;
- वह run के समय **active project** को replace नहीं करता।

अर्थात `All projects` agent भी उसी **active project** में चलता है जो message भेजते समय चुना गया हो।

## ब्राउज़र-स्थानीय चैट से PM Documents, DOCX और XLSX तक

एजेंट्स सीधे किसी अंतिम साझा फ़ाइल तक नहीं पहुँचते। देखा गया प्रवाह अधिक क्रमिक है:

1. current chat पहले **browser-local** रहती है;
2. message भेजने पर सक्रिय परियोजना में एक **run** शुरू होता है;
3. run एक **structured output** बनाता है;
4. flow और अधिकारों के अनुसार यह output **lineage** links, **artifact**, या **PM Doc** दिखा सकता है;
5. समीक्षा फिर **Reports & artifacts / PM Documents** में जारी रहती है;
6. reviewed document को अंततः **Add to knowledge**, **Download**, या **Publish** किया जा सकता है।

### `structured output` का अर्थ

**structured output** agent run का संरचित परिणाम है। इसमें शामिल हो सकते हैं:

- सारांश;
- sections;
- evidence या citations;
- ताजगी और विश्वास स्तर की जानकारी;
- ट्रेसबिलिटी पहचानकर्ता।

यह अपने-आप में अभी final published document नहीं होता।

### `lineage` का अर्थ

**lineage** आपस में इन चीज़ों को जोड़ती है:

- **run**;
- **structured output ID**;
- **context snapshot ID**;
- **artifact** और उसकी version;
- **PM Doc**, यदि controlled document मौजूद हो।

यही chain बताती है कि deliverable कहाँ से आया और किस context पर आधारित था।

## सत्र और स्थानीय स्मृति

चैट इतिहास ब्राउज़र तक सीमित रहता है। व्यवहार में:

- सहेजी गई continuity वर्तमान browser में **project + agent** जोड़ी से बंधी होती है;
- सत्र उसी machine पर local रूप से stored होता है;
- browser, profile, machine बदलने या local storage साफ़ करने से सहेजा गया thread गायब हो सकता है;
- पहला prompt अक्सर session title के रूप में काम करता है, जिससे resume आसान होता है;
- browser को shared central archive न मानें।

### local browser बनाम shared platform

इस अंतर को सरल रखें:

- **chat continuity** और **याद रखा गया project** browser-local सुविधा हैं;
- **documents**, **imports**, **artifacts**, **approvals**, और **publications** shared platform का हिस्सा हैं।

## कस्टम एजेंट्स

custom agent बनाने की क्षमता user rights पर निर्भर करती है। मुख्य बातें:

- हर उपयोगकर्ता agent नहीं बना सकता;
- creation dialog सहेजने से पहले सक्रिय **project context** याद दिलाता है;
- दिखाई देने वाले fields कम से कम **Name**, **Role / instructions**, और **Scope** को कवर करते हैं;
- डिफ़ॉल्ट रूप से **Project only** चुनें, जब तक environment स्पष्ट रूप से wider scope न दिखाए;
- यदि **All projects** उपलब्ध हो, तो agent current project से बनता है, लेकिन उसी account के अन्य projects में दिखाई दे सकता है;
- यदि multi-project agent कहीं और न दिखे, तो पहले same account और target project access जाँचें;
- custom agent deletion नियंत्रित अधिकारों के अधीन रहती है;
- custom agent project और platform rules के अधीन रहता है।

### त्वरित चयन उदाहरण

| आवश्यकता | अनुशंसित चयन |
| --- | --- |
| सामान्य उपयोग, बड़ी टीम, पूर्वानुमेय व्यवहार | standard agent |
| विशिष्ट निर्देश, टीम की शैली, या specialized workflow | custom agent |
| केवल एक परियोजना संदर्भ तक सीमित उपयोग | **Project only** |
| उसी account की कई projects में पुनः उपयोग होने वाला agent | **All projects**, यदि option वास्तव में visible हो |

![कस्टम एजेंट बनाना](/img/screenshots/localized/hi/04-custom-agent-create.jpg)

## Agents में voice input

**Workspace** में voice के लिए अलग entry point उपलब्ध नहीं है। यदि voice input अभी भी उपलब्ध है, तो वह **Agents** अनुभव तक सीमित है और browser speech-recognition APIs पर निर्भर करती है। इसका न होना सामान्य मार्ग को नहीं रोकता, क्योंकि default route text input ही है।

यदि voice input उपलब्ध नहीं है:

- text input उपयोग करें;
- browser microphone permissions जाँचें;
- browser limitation और local environment constraint में अंतर करें;
- **Send** से पहले composer में जोड़ा गया text अवश्य पढ़ें;
- यदि mic button उपलब्ध न हो या incompatibility message आए, तो तुरंत text input पर जाएँ।

### voice input के व्यावहारिक संकेत

| लक्षण | पहले क्या जाँचें | उपयोगी प्रतिक्रिया |
| --- | --- | --- |
| mic button गायब या निष्क्रिय | `SpeechRecognition` / `webkitSpeechRecognition` support | तुरंत text input पर जाएँ |
| mic permission denied | browser या OS mic permission | mic को दोबारा अनुमति दें, फिर listening restart करें |
| लिप्यंतरण अधूरा | composer में जोड़ा गया text | **Send** से पहले review, correct और complete करें |
| सुनते समय कभी-कभी error | browser या current session state | capture रोकें, keyboard पर लौटें, फिर बाद में पुनः प्रयास करें |

text input हमेशा डिफ़ॉल्ट fallback रहती है। यह local browser constraints के बावजूद काम जारी रखने देती है।

## सर्वोत्तम अभ्यास

- महत्वपूर्ण विश्लेषण से पहले **Knowledge** में विश्वसनीय और recent sources लोड करें;
- managed source गायब लगे तो import history दोबारा पढ़ें;
- यदि किसी निर्णय को सही ठहराना हो, तो स्पष्ट रूप से **evidence** या **citations** माँगें;
- यदि response में `stale`, `conflicting`, या `unavailable` states हों, तो प्रकाशित करने से पहले [संरचित आउटपुट, साक्ष्य और ताजगी](./sorties-contextuelles-preuves-et-fraicheur.md) पृष्ठ खोलें।

## आगे

- [संरचित आउटपुट, साक्ष्य और ताजगी](./sorties-contextuelles-preuves-et-fraicheur.md)
- [गवर्नेंस, निर्णय और क्रियाएँ](./gouvernance-decisions-et-actions.md)
- [रिपोर्ट, AI Log और ट्रेसबिलिटी](./rapports-journal-ia-et-tracabilite.md)
- [रखरखाव, समर्थन और FAQ](./maintenance-support-faq.md)
