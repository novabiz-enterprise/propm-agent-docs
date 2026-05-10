---
title: पोर्टफोलियो
slug: /portfolio
description: प्रोजेक्टों की तुलना करें, पोर्टफोलियो signals कॉन्फ़िगर करें, cohorts और outliers पढ़ें, और तय करें कि किस प्रोजेक्ट पर पहले ध्यान देना है।
---

[मुखपृष्ठ](./index.md) · पोर्टफोलियो

![Portfolio review flow](/img/annotated/hi/portfolio-annotated.svg)

![पोर्टफोलियो command center](/img/screenshots/localized/hi/02-portfolio-command-center.jpg)

## उद्देश्य

**पोर्टफोलियो** पेज एक cross-project PMO review surface है। यह किसी एक प्रोजेक्ट का detail खोलने से पहले कई प्रोजेक्टों को एक ही signal model से compare करता है।

इसे इस सवाल के लिए उपयोग करें: **अभी किन प्रोजेक्टों पर पहले ध्यान देना चाहिए?**

इसे मुख्य रूप से उपयोग करें:

- किस प्रोजेक्ट को पहले attention चाहिए, यह prioritize करने के लिए;
- कई प्रोजेक्टों में consistent signals compare करने के लिए;
- किस प्रोजेक्ट पर आगे drill-down करना है, यह तय करने के लिए।

इसे sponsor-only summary page या किसी एक प्रोजेक्ट के detailed **Workspace** का replacement न मानें।

## पोर्टफोलियो किस काम आता है

यह पेज कई प्रोजेक्टों की तुलना **configurable signals** से करता है, किसी fixed red / orange / green table से नहीं।

यह आपको अनुमति देता है:

- कई प्रोजेक्ट चुनने की;
- compare होने वाले signals चुनने की;
- हर signal के लिए **weight** और **threshold** सेट करने की;
- **minimum severity** filter करने की;
- reusable **cohort** save करने की;
- **outliers** या anomalous values पहचानने की;
- किसी प्रोजेक्ट का detail खोलकर समझने की कि वह अलग क्यों दिख रहा है।

## उपयोगकर्ता क्या देखता है

| क्षेत्र | वहाँ क्या किया जाता है |
| --- | --- |
| **Project selection** | comparison में आने वाले प्रोजेक्ट चुनना |
| **Signal profile** | signals, weights, thresholds और minimum severity चुनना |
| **Cohorts** | reusable comparison configuration save या reload करना |
| **Comparison results** | summary, outliers और प्रोजेक्टों के बीच differences पढ़ना |
| **Project drill-down** | किसी प्रोजेक्ट के proofs, recent activity और signal details खोलना |

## मुख्य शब्द

| शब्द | सरल अर्थ |
| --- | --- |
| **Project** | comparison में शामिल प्रोजेक्ट |
| **Signal** | comparative indicator, जैसे blockers, freshness या schedule pressure |
| **Weight** | overall score में किसी signal का महत्व |
| **Threshold** | वह स्तर जहाँ signal ध्यान देने लायक दिखने लगता है |
| **Minimum severity** | weak signals छिपाने वाला filter |
| **Cohort** | saved comparison profile वाला project group |
| **Outlier** | active configuration के अनुसार बाकी से अधिक अलग दिखने वाला प्रोजेक्ट |
| **Narrative comparison** | चल रही comparison का textual summary |
| **Project drill-down** | proofs और activity के साथ project-by-project detail |

## Guided example

एक PMO weekly review से पहले तीन प्रोजेक्ट compare करना चाहता है।

1. **Projects** में वही प्रोजेक्ट चुनें जो एक ही management conversation से जुड़े हैं।
2. **Signal profile** में useful signals enable करें, जैसे `blocker_density`, `freshness_issues`, `failed_runs` और `schedule_pressure`।
3. Review में जो सबसे important है, उसे दिखाने के लिए weights set करें।
4. Signal कब attention deserve करता है, यह तय करने के लिए thresholds set करें।
5. जरूरत हो तो weak noise hide करने के लिए minimum severity चुनें।
6. Comparison कितनी selective हो, इसके लिए **Overall outlier threshold** set करें।
7. यदि configuration फिर उपयोग करनी है, तो उसे **cohort** के रूप में save करें।
8. View recalculate करने के लिए **Refresh comparison** पर क्लिक करें।
9. **Narrative comparison** पढ़ें, फिर **Outliers** inspect करें।
10. Proofs, recent activity और Workspace, Knowledge, Reports या AI Log links देखने के लिए **Project drill-down** खोलें।

![पोर्टफोलियो cohort editor](/img/screenshots/localized/hi/02-portfolio-cohort-editor.jpg)

## Default signal profile

पेज blank sheet से शुरू नहीं होता। Default settings सुरक्षित starting point हैं, mandatory model नहीं।

| Signal | Default weight | Default threshold |
| --- | --- | --- |
| `activity_change` | `1.0` | `45` |
| `blocker_density` | `1.2` | `35` |
| `freshness_issues` | `1.0` | `35` |
| `contradiction_count` | `1.1` | `35` |
| `failed_runs` | `1.3` | `40` |
| `schedule_pressure` | `1.2` | `40` |
| `cost_pressure` | `1.2` | `40` |
| `overall_outlier_score` | - | `55` |

Useful additions:

- **minimum severity** restrictive filter के बजाय all-level view से शुरू होती है;
- **Reset defaults** इन starting values को restore करता है;
- saved **cohorts** reusable profiles को preserve करते हैं;
- कुछ environments preconfigured cohort भी दिखा सकते हैं, जिसका content available settings पर निर्भर करता है।

## Portfolio signals

| Signal | यह किस सवाल का जवाब देता है | कैसे पढ़ें |
| --- | --- | --- |
| `activity_change` | क्या recent activity पिछले period से बहुत अलग है? | high = unusual variation जिसे explain करना है |
| `blocker_density` | क्या प्रोजेक्ट में blockers या escalations अधिक हैं? | high = frequent या concentrated blockages |
| `freshness_issues` | क्या proofs और sources बहुत पुराने या unavailable हैं? | high = project view कम reliable हो रही है |
| `contradiction_count` | क्या sources एक-दूसरे से contradict करते हैं? | high = arbitration या clarification चाहिए |
| `failed_runs` | क्या automations या runs अक्सर fail होते हैं? | high = technical या operational friction |
| `schedule_pressure` | क्या schedule tension दिखाता है? | high = schedule pressure या calendar drift |
| `cost_pressure` | क्या budget या consumption tension दिखाता है? | high = budget या cost risk |

## Outlier कैसे पढ़ें

**Outlier** कोई magic score या final judgment नहीं है।

कोई प्रोजेक्ट outlier तब होता है जब:

- एक या अधिक signals high हों;
- उन signals का weight महत्वपूर्ण हो;
- active thresholds पार हो जाएँ;
- combined score overall outlier threshold से ऊपर हो।

सही reading:

- **outlier** का अर्थ है कि current rules के अनुसार प्रोजेक्ट बाकी से अधिक अलग दिख रहा है;
- **not outlier** का अर्थ है कि प्रोजेक्ट current group की normal band में है।

## Signal unavailable क्यों हो सकता है

जब required proof missing हो, तब signal **unavailable** हो सकता है।

उदाहरण:

- यदि प्रोजेक्ट में planning sources नहीं हैं, तो `schedule_pressure` unavailable रह सकता है;
- यदि budget sources missing हैं, तो `cost_pressure` unavailable रह सकता है।

Unavailable signal का अर्थ zero risk नहीं है। इसका अर्थ है कि portfolio के पास इस indicator को calculate करने के लिए पर्याप्त reliable proof नहीं है।

## जब Portfolio खाली या शांत दिखता है

कई readings normal हो सकती हैं:

- कोई accessible project load नहीं हुआ;
- कोई project या signal selected नहीं है;
- comparison ने usable project summaries return नहीं किए;
- कुछ signals evidence missing होने के कारण unavailable हैं;
- कोई project active overall outlier threshold पार नहीं करता।

इसलिए शांत result restrictive selection, limited evidence या सच में stable projects दिखा सकता है।

## Comparison कैसे calculate होती है

Expected behavior:

1. page accessible projects load करता है;
2. जब कोई project चुना नहीं गया हो, तब initial usable set preselect करता है;
3. project और signal configuration valid होते ही comparison service से request होती है;
4. **Refresh comparison** asynchronous recalculation trigger करता है और visible **snapshot** update करता है;
5. snapshot timestamp बताता है कि portfolio view कब recalculate हुई।

Saved **cohorts** reusable comparison profile preserve करते हैं, लेकिन live comparison request को replace नहीं करते।

## याद रखने योग्य बातें

- सही projects चुनकर शुरू करें;
- अपनी review के लिए केवल useful signals enable करें;
- weights, thresholds और severity intentionally set करें;
- **outliers** को investigation का starting point मानें, final verdict नहीं;
- result समझने के लिए **Project drill-down** खोलें।

## आगे

- [AI providers और platform integrations](./ai-providers-platform-integrations.md)
- [Tenant plan, licensed users और app updates](./seats-management-app-updates.md)
- [रिपोर्ट, AI Log और ट्रेसबिलिटी](./rapports-journal-ia-et-tracabilite.md)
- [रखरखाव, समर्थन और FAQ](./maintenance-support-faq.md)
