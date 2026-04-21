---
title: "इंटरफ़ेस और नेविगेशन"
slug: /interface-et-navigation
description: "मुख्य स्क्रीन, साइडबार, शीर्ष बार और डैशबोर्ड को समझें।"
---

[होम](./index.md) · [शुरुआत](./demarrage.md) · [परियोजनाएँ और कार्यक्षेत्र](./projets-et-espace-de-travail.md)

![प्रोपीएम एजेंट डैशबोर्ड](/img/screenshots/localized/hi/01-dashboard.jpg)

## उद्देश्य

यह पृष्ठ बताता है कि ProPM Agent के मुख्य लेआउट में कैसे नेविगेट करें, **Dashboard** को कैसे पढ़ें, **Command palette** का उपयोग कैसे करें, सूचनाओं की व्याख्या कैसे करें, और आवश्यकता पड़ने पर **Health indicator** से त्वरित जाँच कैसे करें।

## अवलोकन

इंटरफ़ेस एक सरल तर्क का पालन करता है:

1. `sidebar` मुख्य अनुभाग खोलता है;
2. `top bar` वर्तमान परियोजना बदलती है और त्वरित उपकरण खोलती है;
3. केंद्रीय क्षेत्र वर्तमान संदर्भ दिखाता है;
4. कई स्क्रीन की स्थिति सक्रिय परियोजना और आपके अधिकारों के अनुसार बदलती है।

## मुख्य नेविगेशन

| प्रविष्टि | मुख्य उपयोग |
| --- | --- |
| **Dashboard** | समग्र स्थिति और सुझाए गए अगले कदम पढ़ना |
| **Projects** | परियोजना बनाना, खोलना और संदर्भ बदलना |
| **Workspace** | परियोजना सारांश, संकेत, तैयारी की स्थिति और परियोजना सेटिंग्स देखना |
| **Knowledge** | संदर्भ दस्तावेज़ ढूँढ़ना, अपलोड करना और आयात करना |
| **Agents** | उपलब्ध एजेंट्स के साथ काम करना और संरचित आउटपुट पढ़ना |
| **Reports & artifacts** | PM Documents की समीक्षा, तुलना, प्रकाशन या डाउनलोड करना |
| **AI Log** | runs, घटनाएँ और ट्रेसबिलिटी मेटाडेटा देखना |
| **Portfolio command center** | विन्यास योग्य संकेतों के आधार पर कई परियोजनाओं की तुलना करना |
| **Platform Administration** | एकीकरण, AI प्रदाता, सदस्यता और प्लेटफ़ॉर्म गतिविधि प्रबंधित करना |

## Dashboard

लॉग इन के तुरंत बाद **Dashboard** सबसे उपयोगी स्क्रीन होती है।

यह एक जगह पर यह सब लाती है:

- स्थिति-संबंधी मापदंड;
- ध्यान देने योग्य मदें;
- सुझाए गए अगले कदम;
- कार्रवाई क्षेत्रों के शॉर्टकट;
- खुले संकेत और समीक्षा में मौजूद मदों की झलक।

इसे एक दिशा देने वाले पृष्ठ की तरह पढ़ें: यदि कोई परियोजना सक्रिय नहीं है, तो कुछ खंड खाली रहेंगे; यदि परियोजना चुनी गई है, तो वही खंड संदर्भ के साथ भरेंगे।

### Dashboard के मुख्य क्षेत्रों को कैसे पढ़ें

| क्षेत्र | यह क्या संक्षेप करता है | उपयोगी प्रतिक्रिया |
| --- | --- | --- |
| Summary tiles | projects, knowledge items, active agents, open signals, notification drafts और pending actions की गिनती | तुरंत पहचानें कि समस्या संदर्भ की कमी, समीक्षा में देरी, या नियंत्रित कतार से जुड़ी है या नहीं |
| Score cards | कुल डिलिवरी स्थिति, निष्पादन की लय, governance coverage और knowledge depth | विस्तृत पृष्ठ खोलने से पहले इन्हें दिशा-सूचक मानें |
| Readiness blocks | knowledge foundation, automation coverage, governance posture और delivery flow | पहचानें कि कौन-सा स्तंभ परियोजना के सामान्य उपयोग को रोक रहा है |
| **Attention** panel | संकेत, नियंत्रित कार्रवाइयाँ और connector watchlist | सक्रिय अवरोधों के लिए **Workspace** खोलें |
| **Pulse** panel | latest digest, recent notifications, recent activity और connector status | पूरी project history दोबारा पढ़े बिना देखें कि अभी क्या बदला है |
| Quick links | **Workspace**, **Knowledge**, **Agents**, **Reports & artifacts**, **AI Log**, और **Portfolio** के शॉर्टकट | अलग-अलग स्क्रीन खोलने के बजाय सीधे सही पृष्ठ पर जाएँ |

Dashboard scores और indicators को **प्राथमिकता संकेत** की तरह पढ़ें, अंतिम निष्कर्ष की तरह नहीं।

### यदि Dashboard विरोधाभासी लगे तो क्या करें

1. पहले शीर्ष बार में **सक्रिय परियोजना** की पुष्टि करें;
2. कार्डों को दिशा-सूचक संकेत की तरह पढ़ें, अंतिम सत्य की तरह नहीं;
3. **Workspace** खोलकर संकेत, तैयारी की स्थिति और परियोजना अवरोध जाँचें;
4. यदि संदेह किसी run, output या वास्तविक प्रदाता पर है, तो **AI Log** खोलें;
5. यदि Dashboard लोड हो रहा है लेकिन अतिरिक्त पुष्टि चाहिए, तो निष्कर्ष निकालने से पहले **Health indicator** खोलें।

![शीर्ष बार और वैश्विक नेविगेशन](/img/screenshots/localized/hi/01-navigation-topbar.jpg)

## शीर्ष बार

| तत्व | कार्य |
| --- | --- |
| Project selector | पूरी सूची में जाए बिना वर्तमान परियोजना बदलना |
| Command palette | पृष्ठों और सामान्य कार्रवाइयों पर तेज़ खोज |
| Notifications | उत्पाद द्वारा उठाई गई ध्यान-योग्य मदें दिखाना |
| Health indicator | API, realtime और auth status की त्वरित पढ़ाई खोलना |
| Language | इंटरफ़ेस भाषा बदलना |
| Theme | light/dark रूप बदलना |
| Help | एकीकृत सहायता संदेश खोलना |

### शीर्ष बार से सक्रिय परियोजना कैसे पढ़ें

शीर्ष बार का project selector ही **active project** तय करता है। परियोजना-आधारित पृष्ठ इसी परियोजना को अपना वर्तमान संदर्भ मानते हैं।

व्यवहार में:

- **Knowledge** सक्रिय परियोजना के भीतर खोज करती है;
- **Agents** runs उसी सक्रिय परियोजना में शुरू करते हैं;
- **Reports & artifacts** सक्रिय परियोजना के PM Docs और artifacts की समीक्षा करते हैं;
- **AI Log** सक्रिय परियोजना के runs और activity दिखाता है;
- **Workspace** सक्रिय परियोजना के संकेत, सेटिंग्स और एकीकरण दिखाता है।

याद रखा गया current project browser में local रूप से stored हो सकता है। यह navigation सुविधा है, प्लेटफ़ॉर्म-स्तर की shared setting नहीं।

## Command palette

**Command palette** तेज़ नेविगेशन के लिए बनी है।

- **Windows / Linux**: `Ctrl+K`
- **macOS**: `Cmd+K`

यह उपलब्ध पृष्ठों और प्रविष्टियों को नाम और विवरण के आधार पर फ़िल्टर करती है। कम उपयोग वाले मार्ग, जैसे **AI Log** या **Platform Administration**, जल्दी खोलने के लिए इसका उपयोग करें।

## Notifications

सूचना केंद्र शीर्ष बार की घंटी आइकन से खुलता है।

देखी गई क्षमताएँ:

- अपठित मदों की गिनती;
- ड्रॉप-डाउन पैनल;
- **Mark all as read**;
- **Clear all**;
- जहाँ navigation उपलब्ध हो, वहाँ सूचना पर क्लिक करके संबंधित पृष्ठ खोलना।

सूचनाएँ केवल एक ही घटना-समूह से नहीं आतीं। देखे गए application में यह feed इन चीज़ों को एक साथ ला सकती है:

- agent या run की स्थिति में बदलाव;
- report, artifact, या document से जुड़ी घटनाएँ;
- server-side परियोजना सूचनाएँ;
- governance या approval से जुड़े follow-ups;
- integration, Marketplace, subscription, या लागत से जुड़े updates।

इसलिए शीर्ष बार के सूचना केंद्र में लगभग वास्तविक समय की घटनाएँ और server-polled project notifications एक ही feed में दिखाई दे सकती हैं।

## Health indicator

**Health indicator** एक त्वरित स्थिति panel खोलता है। इसमें आप यह देख सकते हैं:

- **API** status;
- **realtime** status;
- **auth** status;
- observed **latency**;
- interface message, यदि कोई दिख रहा हो;
- current project, जब संदर्भ के साथ स्थिति पढ़ना महत्वपूर्ण हो।

इसे तब खोलें जब कोई agent **offline** लगे, notifications refresh होना बंद कर दें, या availability check उपयोगी हो।

यदि panel degraded state दिखाए और interface अभी भी loading में हो, तो यह reading order रखें:

| यदि signal मुख्यतः इससे जुड़ा है… | अगला क्या खोलें | क्यों |
| --- | --- | --- |
| **authentication** | [शुरुआत](./demarrage.md) | `tenant`, account, `redirect URI`, admin group या headquarters से जुड़ी समस्या को अलग करने के लिए |
| **runtime**, API या connectivity | [रखरखाव, समर्थन और FAQ](./maintenance-support-faq.md) | health, AI provider, integrations और execution के बीच सत्यापन पथ follow करने के लिए |
| **project context**, blank screen या missing action | [परियोजनाएँ और कार्यक्षेत्र](./projets-et-espace-de-travail.md) | सक्रिय परियोजना, binding, readiness और project rights जाँचने के लिए |

समर्थन को भेजने से पहले **API**, **realtime**, **auth**, **latency**, **current project**, और test के अनुमानित समय को नोट करें। यह जानकारी समस्या-निवारण को बहुत तेज़ करती है।

## परियोजना संदर्भ और खाली स्थितियाँ

ProPM Agent की कई स्क्रीन सक्रिय परियोजना पर निर्भर हैं। व्यवहार में:

- **बिना किसी चुनी हुई परियोजना** के, कुछ पृष्ठ सामान्य खाली स्थिति दिखाते हैं;
- **चुनी हुई परियोजना** होने पर, वही पृष्ठ उसी परियोजना का data और actions लोड करते हैं;
- परियोजना बदलने से **Knowledge**, **Agents**, **Reports & artifacts**, और **AI Log** की सामग्री बदल जाती है।

यह संदर्भ-निर्भरता साक्ष्य, बातचीत और deliverables को अलग-अलग परियोजनाओं के बीच गलती से मिलाने से बचाती है।

### नेविगेशन का क्या अर्थ नहीं है

कुछ भ्रम बार-बार सामने आते हैं:

- **Portfolio** खोलने से project-scoped pages की सक्रिय परियोजना अपने-आप नहीं बदलती;
- `All projects` शीर्ष बार में चुनी जाने वाली परियोजना नहीं है;
- खाली पृष्ठ अपने-आप में विफलता का प्रमाण नहीं है; यह केवल इतना भी बता सकता है कि सक्रिय परियोजना सेट नहीं है या उस परियोजना में अभी data नहीं है;
- आपके browser में chat history दिखने का अर्थ यह नहीं कि वह हर user के साथ shared है।

## भाषा, theme और help

interface language शीर्ष बार से बदली जा सकती है। theme बदलने से पढ़ने में सुविधा होती है, लेकिन project data पर कोई असर नहीं पड़ता। integrated help catalogs सामान्य navigation, project pages, **AI Log**, और governance reminders को कवर करते हैं।

## नेविगेशन में क्या ब्राउज़र-स्थानीय रहता है

chat continuity और remembered current project के अलावा, कुछ अन्य सुविधाएँ भी ब्राउज़र-स्थानीय रहती हैं:

- interface language और theme;
- recent-project shortcuts;
- notification center का read / cleared state;
- कुछ locally saved table या view preferences।

इसके विपरीत, project notifications, signals, digests, notification drafts, governed actions, documents, और artifacts shared platform state का हिस्सा होते हैं।

## नेविगेशन सुझाव

- agent या report खोलने से **पहले** परियोजना बदलें;
- कम इस्तेमाल होने वाली surface जल्दी खोजने के लिए **Command palette** उपयोग करें;
- flow छूट जाए तो **Dashboard** पर लौटें;
- यदि कोई action गायब लगे, तो **read-only** और **access denied** में अंतर करें;
- service availability पर निष्कर्ष निकालने से पहले **Health indicator** देख लें।

## आगे

- [परियोजनाएँ और कार्यक्षेत्र](./projets-et-espace-de-travail.md)
- [ज्ञान और एजेंट्स](./connaissance-et-agents.md)
- [संरचित आउटपुट, साक्ष्य और ताजगी](./sorties-contextuelles-preuves-et-fraicheur.md)
- [रिपोर्ट, AI Log और ट्रेसबिलिटी](./rapports-journal-ia-et-tracabilite.md)
