---
title: "प्रोपीएम एजेंट उपयोगकर्ता मार्गदर्शिका"
pagination_label: "मुखपृष्ठ"
slug: /
description: "प्रोपीएम एजेंट के लिए हिंदी उपयोगकर्ता दस्तावेज़, जिसमें AI-सहायित परियोजना निष्पादन, गवर्नेंस, कनेक्टर्स, ट्रेसबिलिटी और Azure Marketplace डिप्लॉयमेंट शामिल हैं।"
---

> **इस गाइड को शुरू से पढ़ना अत्यधिक उपयोगी है**
>
> संगठन में ProPM Agent को प्रभावी ढंग से अपनाने और एप्लिकेशन का पूरा लाभ लेने के लिए, परियोजना की शुरुआत में यह गाइड पढ़ें और बाद में डिप्लॉयमेंट, कनेक्टर सेटअप, गवर्नेंस और दैनिक उपयोग के दौरान इसे संदर्भ के रूप में देखते रहें।

यह दस्तावेज़ आपको ProPM Agent का दैनिक उपयोग समझने में मदद करता है: navigation, projects, Knowledge, Agents, governance, reports, administration और deployment.

यह दो प्रमुख पाठक समूहों के लिए व्यवस्थित है:

- **व्यावसायिक उपयोगकर्ता**, जो किसी परियोजना में काम करते हैं;
- **तकनीकी प्रशासक**, जो पहुंच, एकीकरण, AI प्रदाता, सदस्यता और निगरानी संभालते हैं।

![एप्लिकेशन का अवलोकन](/img/screenshots/localized/hi/01-dashboard.jpg)

## मैं सही पृष्ठ जल्दी खोजना चाहता हूँ

| सामने आई स्थिति | पहले खोलें | फिर |
| --- | --- | --- |
| मैं लॉग इन नहीं कर पा रहा/रही हूँ | [शुरुआत](./demarrage.md) | [रखरखाव, समर्थन और FAQ](./maintenance-support-faq.md), ताकि `tenant`, `redirect URI`, सीट, या स्वास्थ्य स्थिति से जुड़ी समस्या को अलग किया जा सके |
| कोई परियोजना दिखाई नहीं दे रही | [शुरुआत](./demarrage.md) | [परियोजनाएँ और कार्यक्षेत्र](./projets-et-espace-de-travail.md), फिर [रखरखाव, समर्थन और FAQ](./maintenance-support-faq.md), यदि परियोजना में जोड़े जाने या भूमिका को लेकर संदेह बना रहे |
| कोई पृष्ठ तब तक खाली रहता है जब तक सक्रिय परियोजना तय न हो | [शुरुआत](./demarrage.md) | [परियोजनाएँ और कार्यक्षेत्र](./projets-et-espace-de-travail.md), ताकि परियोजना संदर्भ की पुष्टि हो सके; यदि खाली स्थिति फिर भी असामान्य लगे तो [रखरखाव, समर्थन और FAQ](./maintenance-support-faq.md) |
| कोई कार्रवाई दिखाई दे रही है, पर अवरुद्ध है | [गवर्नेंस, निर्णय और क्रियाएँ](./gouvernance-decisions-et-actions.md) | [कनेक्टर्स और एकीकरण](./connecteurs-jira-et-sharepoint), फिर [पोर्टफोलियो और तकनीकी प्रशासन](./portefeuille-et-administration-technique.md), यदि अवरोध connector, `binding` या `entitlement` से आ रहा हो |
| AI प्रदाता काम करता नहीं दिख रहा | [पोर्टफोलियो और तकनीकी प्रशासन](./portefeuille-et-administration-technique.md) | [रखरखाव, समर्थन और FAQ](./maintenance-support-faq.md) और [रिपोर्ट, AI Log और ट्रेसबिलिटी](./rapports-journal-ia-et-tracabilite.md), ताकि वास्तविक प्रदाता की पुष्टि हो सके |

यदि आप सीधे किसी सत्यापन प्रक्रिया या संचालन संबंधी संदर्भ की तलाश में हैं, तो [रखरखाव, समर्थन और FAQ](./maintenance-support-faq.md) खोलें।

## अनुशंसित पढ़ने का क्रम

| यदि आप यह समझना चाहते हैं… | यहाँ से शुरू करें |
| --- | --- |
| Azure में नई इंस्टेंस डिप्लॉय करना | [Azure Marketplace डिप्लॉयमेंट](./deploiement-azure-marketplace.md) |
| लॉग इन करना, प्रमाणीकरण जाँचना और पहली परियोजना बनाना | [शुरुआत](./demarrage.md) |
| इंटरफ़ेस, `Command palette`, सूचनाएँ और `Health indicator` को समझना | [इंटरफ़ेस और नेविगेशन](./interface-et-navigation.md) |
| परियोजना संदर्भ और `Workspace` सेटिंग्स सँभालना | [परियोजनाएँ और कार्यक्षेत्र](./projets-et-espace-de-travail.md) |
| सदस्य, भूमिकाएँ, जिम्मेदारी सौंपना और परियोजना RBAC सुरक्षा-नियम प्रबंधित करना | [पहुँच नियंत्रण और परियोजना भूमिकाएँ](./controle-acces-et-roles.md) |
| दस्तावेज़ आयात करना, साक्ष्य खोजना और **Agents** के साथ काम करना | [ज्ञान और एजेंट्स](./connaissance-et-agents.md) |
| संरचित आउटपुट, साक्ष्य और ताजगी को सही ढंग से पढ़ना | [संरचित आउटपुट, साक्ष्य और ताजगी](./sorties-contextuelles-preuves-et-fraicheur.md) |
| संकेत, शासन और अनुमोदन-आधारित कार्रवाइयाँ सँभालना | [गवर्नेंस, निर्णय और क्रियाएँ](./gouvernance-decisions-et-actions.md) |
| किसी आर्टिफैक्ट की समीक्षा, PM Document प्रकाशित करना और AI Log में जाँच करना | [रिपोर्ट, AI Log और ट्रेसबिलिटी](./rapports-journal-ia-et-tracabilite.md) |
| समर्थित कनेक्टर और एकीकरण समझना | [कनेक्टर्स और एकीकरण](./connecteurs-jira-et-sharepoint) |
| परियोजनाओं की तुलना करना, एकीकरण, AI और सीटें प्रबंधित करना | [पोर्टफोलियो और तकनीकी प्रशासन](./portefeuille-et-administration-technique.md) |
| समर्थन और सत्यापन प्रक्रियाएँ देखना | [रखरखाव, समर्थन और FAQ](./maintenance-support-faq.md) |
| उत्पाद संबंधी शब्द स्पष्ट करना | [शब्दावली](./glossaire.md) |

## प्रोफ़ाइल के अनुसार त्वरित मार्ग

| प्रोफ़ाइल | पहले खोलने योग्य पृष्ठ |
| --- | --- |
| व्यावसायिक उपयोगकर्ता / योगदानकर्ता | [शुरुआत](./demarrage.md) → [इंटरफ़ेस और नेविगेशन](./interface-et-navigation.md) → [परियोजनाएँ और कार्यक्षेत्र](./projets-et-espace-de-travail.md) → [ज्ञान और एजेंट्स](./connaissance-et-agents.md) → [संरचित आउटपुट, साक्ष्य और ताजगी](./sorties-contextuelles-preuves-et-fraicheur.md) |
| परियोजना स्वामी | [शुरुआत](./demarrage.md) → [परियोजनाएँ और कार्यक्षेत्र](./projets-et-espace-de-travail.md) → [पहुँच नियंत्रण और परियोजना भूमिकाएँ](./controle-acces-et-roles.md) → [गवर्नेंस, निर्णय और क्रियाएँ](./gouvernance-decisions-et-actions.md) → [कनेक्टर्स और एकीकरण](./connecteurs-jira-et-sharepoint) → [रिपोर्ट, AI Log और ट्रेसबिलिटी](./rapports-journal-ia-et-tracabilite.md) |
| तकनीकी प्रशासक | [Azure Marketplace डिप्लॉयमेंट](./deploiement-azure-marketplace.md) → [शुरुआत](./demarrage.md) → [पोर्टफोलियो और तकनीकी प्रशासन](./portefeuille-et-administration-technique.md) → [कनेक्टर्स और एकीकरण](./connecteurs-jira-et-sharepoint) → [रखरखाव, समर्थन और FAQ](./maintenance-support-faq.md) |
| समर्थन / ऑडिट | [शुरुआत](./demarrage.md) → [संरचित आउटपुट, साक्ष्य और ताजगी](./sorties-contextuelles-preuves-et-fraicheur.md) → [रिपोर्ट, AI Log और ट्रेसबिलिटी](./rapports-journal-ia-et-tracabilite.md) → [गवर्नेंस, निर्णय और क्रियाएँ](./gouvernance-decisions-et-actions.md) → [शब्दावली](./glossaire.md) |

## अनुशंसित शुरुआत-से-अंत तक का मार्ग

याद रखने योग्य संक्षिप्त श्रृंखला: **सक्रिय परियोजना → Agents → structured output → artifact / PM Doc → review / diff / lineage → Approve / Publish / Add to knowledge**।

वास्तविक उपयोग में सबसे सामान्य प्रवाह यह है:

1. प्रकाशित URL प्राप्त करें या डिप्लॉय करें;
2. अधिकृत Microsoft Entra ID खाते से लॉग इन करें;
3. एक **सक्रिय परियोजना** बनाएँ या चुनें;
4. `project creator` से शुरुआती उपयोगी भूमिकाएँ निर्धारित कराएँ;
5. परियोजना की **Knowledge** सामग्री लोड करें;
6. **Agents** में बातचीत शुरू करें;
7. संरचित आउटपुट, उसके साक्ष्य, ताजगी और विश्वास स्तर को पढ़ें;
8. परिणाम को आर्टिफैक्ट या PM Document में बदलें; यदि नियंत्रित draft उपलब्ध हो, तो **Reports & artifacts / PM Documents** में review, diff और lineage देखें;
9. फिर आवश्यकता के अनुसार **Approve**, **Add to knowledge**, **Download**, या **Publish** तय करें;
10. संकेत, **Actions & approvals**, और ज़रूरत पड़ने पर बाहरी एकीकरण प्रवाह सँभालें;
11. प्लेटफ़ॉर्म स्तर का प्रशासन केवल तभी करें जब विषय परियोजना की सीमा से बाहर हो।

> केवल एजेंट चैट दिखाई देने भर से कोई साझा अंतिम दस्तावेज़ नहीं बन जाता। साझा और नियंत्रित परिणाम तब बनता है जब run के आगे वास्तव में आर्टिफैक्ट, PM Doc, समीक्षा या publication प्रवाह तैयार हो।

## लेबल उपयोग की नीति

जहाँ इंटरफ़ेस अंग्रेज़ी product labels दिखाता है, यह दस्तावेज़ वही नाम उपयोग करता है:

- **Workspace**;
- **Knowledge**;
- **PM Documents**;
- **AI Log**;
- **Access control**;
- **Governance Policies**;
- **Project integrations**;
- **Platform integrations**;
- **AI provider settings**;
- **Actions & approvals**।

जब अस्पष्टता दूर करने के लिए अंग्रेज़ी label उपयोगी हो, तो उसे code रूप में उद्धृत किया जाता है, जैसे `Trace ID`, `All projects`, या `OpenAI-compatible`।

## ProPM Agent क्या कवर करता है

पुष्ट व्यवहारों के आधार पर, ProPM Agent काम को **परियोजना संदर्भ** के आसपास संगठित करता है:

1. आप एक परियोजना खोलते या बनाते हैं;
2. आप **Knowledge** को सामग्री देते हैं;
3. आप **Agents** से पूछते हैं;
4. आप संरचित आउटपुट पढ़ते हैं;
5. आप कुछ परिणामों को **PM Documents** और आर्टिफैक्ट्स में बदलते हैं;
6. आप **AI Log** में ट्रेसबिलिटी जाँचते हैं;
7. आप **signals**, **digests**, **drafts**, और नियंत्रित **actions** सँभालते हैं;
8. आप कनेक्टर और एकीकरण का उपयोग केवल तब करते हैं जब वे सत्यापित होकर परियोजना से जुड़े हों;
9. प्रशासक तकनीकी परत को **Platform Administration** में संचालित करते हैं।

## कार्यात्मक संरचना

| डोमेन | यह क्या सक्षम करता है |
| --- | --- |
| **Dashboard** | समग्र स्थिति, मापदंड, ध्यान देने योग्य मदें और अगले चरण देखना |
| **Projects** | परियोजना संदर्भ बनाना, खोलना और बदलना |
| **Workspace** | परियोजना सारांश, परिचालन पारदर्शिता, संकेत, शॉर्टकट और परियोजना सेटिंग्स को एक जगह लाना |
| **Access control** | सदस्य, मानक भूमिकाएँ, कस्टम भूमिकाएँ और परियोजना अनुमतियाँ प्रबंधित करना |
| **Knowledge** | खोज, upload, import, metadata समीक्षा और ingestion history देखना |
| **Agents** | agent चुनना, बातचीत शुरू करना, यदि environment उपलब्ध कराए तो voice input का उपयोग करना, और custom agents प्रबंधित करना |
| **Structured outputs** | सारांश, साक्ष्य, ताजगी, विश्वास स्तर, आर्टिफैक्ट प्रस्ताव और अगले कदम पढ़ना |
| **PM Documents / Reports & artifacts** | समीक्षा, तुलना, अनुमोदन, प्रकाशन, डाउनलोड और deliverables को knowledge में वापस जोड़ना |
| **AI Log** | runs, गतिविधि, तकनीकी IDs और AI runtime transparency जाँचना |
| **Connectors and integrations** | platform definitions, project bindings, action policies और नियंत्रित निष्पादन को अलग-अलग देखना |
| **Portfolio command center** | कई परियोजनाओं की तुलना संकेतों, भारों, thresholds और सहेजे गए cohorts के साथ करना |
| **Platform Administration** | एकीकरण, AI प्रदाता, सदस्यता, सीटें और प्लेटफ़ॉर्म गतिविधि प्रबंधित करना |

## एप्लिकेशन को अलग क्या बनाता है

निम्न तत्व interface या preloaded examples में दिखाई देते हैं:

- संरचित आउटपुट, जिनमें sections, साक्ष्य, ताजगी, विश्वास स्तर और अगली कार्रवाई के संकेत शामिल होते हैं;
- **lineage**, जो run, structured output, artifact, artifact version और PM Document को जोड़ती है;
- सक्रिय संकेत, जो विरोधाभास, ताजगी से जुड़ी समस्याएँ, अवरोध, follow-up और कुछ portfolio pressure को सतह पर लाते हैं;
- नियंत्रित document chain, जिसमें agent result से **DOCX / XLSX** download, publication और knowledge में पुनः जोड़ने तक का रास्ता शामिल है;
- नियंत्रित connectors, जो **Platform integrations**, **Project integrations**, और **Actions & approvals** में अलग दिखाई देते हैं;
- AI runtime transparency, जिसमें actual provider, deployment-selected provider और model family दिखाई देती है।

## पाठक और जिम्मेदारियाँ

| प्रोफ़ाइल | मुख्य ज़रूरतें |
| --- | --- |
| परियोजना प्रबंधक / PMO | परियोजना संदर्भ, agents, deliverables, संकेत, शासन और ट्रेसबिलिटी |
| योगदानकर्ता | knowledge खोज, सामग्री तैयार करना, output समीक्षा और run tracking |
| परियोजना स्वामी | परियोजना सेटिंग्स, भूमिका delegation, document categories, project integrations और governance policies |
| तकनीकी प्रशासक / सदस्यता | डिप्लॉयमेंट, प्रमाणीकरण, platform integrations, AI प्रदाता, सदस्यता, सीटें और निगरानी |

## स्क्रीनशॉट और आरेख

Screenshots और diagrams visual references हैं। वे मुख्य screens दिखाते हैं और आपके data, permissions और environment configuration के अनुसार थोड़ा भिन्न हो सकते हैं।

Preloaded examples environment के अनुसार बदल सकते हैं। कुछ projects हर बार वही documents, reports या examples नहीं दिखाते जो screenshots में दिखाई देते हैं।

## ब्राउज़र में स्थानीय रूप से क्या रहता है और platform पर क्या साझा होता है

उत्पाद में दो अलग स्तर साथ-साथ चलते हैं:

- कुछ सुविधा-आधारित चीज़ें, जैसे **याद रखा गया current project** या **saved chat continuity**, केवल ब्राउज़र तक सीमित रह सकती हैं;
- project data, documents, artifacts, approvals और publications **shared platform** का हिस्सा होते हैं।

इसलिए किसी एक ब्राउज़र में दिखने वाला chat history पूरी संस्था के लिए साझा केंद्रीय archive नहीं माना जाना चाहिए।

## समर्थन और संपर्क

अनुरोध के प्रकार के अनुसार सही चैनल का उपयोग करें:

| अनुरोध का प्रकार | प्राथमिक रूप से क्या भेजें |
| --- | --- |
| तकनीकी समर्थन | deployment URL, संबंधित परियोजना, सामने आई स्थिति, अनुमानित समय, और यदि दिखाई दे तो `Trace ID` |
| पहुंच, `tenant` या पहचान से जुड़े प्रश्न | अपेक्षित `tenant`, उपयोग किया गया account, वास्तविक खुला URL, Microsoft संदेश या screenshot |
| व्यावसायिक या सदस्यता संबंधी प्रश्न | खाता संदर्भ, संबंधित plan, seat count, या capacity need |

इन सभी अनुरोधों को इस संपर्क बिंदु पर भेजा जा सकता है:

- **NovaBiz**
- 131 Continental Dr, Suite 305
- Newark, DE 19713 · संयुक्त राज्य अमेरिका
- [support@navabiz.pro](mailto:support@navabiz.pro)

## आगे

- [शुरुआत](./demarrage.md)
- [परियोजनाएँ और कार्यक्षेत्र](./projets-et-espace-de-travail.md)
- [कनेक्टर्स और एकीकरण](./connecteurs-jira-et-sharepoint)
- [शब्दावली](./glossaire.md)
