---
title: कनेक्टर्स और एकीकरण
slug: /connecteurs-jira-et-sharepoint
description: ProPM Agent में दिखाई देने वाले सभी कनेक्टर्स, उनके लाभ, उपयोग और प्लेटफ़ॉर्म में एकीकरण के तरीके को समझें।
---

[मुखपृष्ठ](./index.md) · कनेक्टर्स और एकीकरण

![प्लेटफ़ॉर्म, प्रोजेक्ट और एक्शन के बीच Jira और SharePoint वर्कफ़्लो](/img/diagrams/hi/connecteurs-jira-sharepoint-workflow.svg)

## उद्देश्य

यह पृष्ठ **ProPM Agent में समर्थित ऑपरेशनल कनेक्टर और इन्जेशन प्रदाता कैटलॉग**, उनके लाभ, व्यावसायिक उपयोग और उत्पाद में उनके एकीकरण के तरीके को समझाता है। कुछ प्रशासनिक सूचियाँ अतिरिक्त extensible या custom families भी दिखा सकती हैं, जिन्हें वास्तविक उपयोग से पहले अतिरिक्त configuration और validation चाहिए।

उद्देश्य तीन सरल प्रश्नों का उत्तर देना है:

1. **यह कनेक्टर किस काम आता है?**
2. **इसे ProPM Agent में कहाँ देखा जा सकता है?**
3. **किस प्रकार एक घोषित कनेक्टर को वास्तव में उपयोगी कनेक्टर में बदला जाता है?**

## ProPM Agent में कनेक्टर को समझें

कनेक्टर ProPM Agent और कंपनी के किसी अन्य टूल के बीच एक **नियंत्रित पुल** है।

उत्पाद में, एक कनेक्टर तीन अलग-अलग चीजों के लिए उपयोग किया जा सकता है:

| प्रकार | यह किस काम आता है | उदाहरण |
| --- | --- | --- |
| **कनेक्टर ड'एक्ज़िक्यूशन** | किसी बाहरी टूल को एक्शन भेजना | Jira टिकट बनाना, Teams संदेश भेजना, SharePoint पर प्रकाशित करना |
| **फ्रॉवाइडर d'इंगेस्टियन** | ज्ञान में सामग्री आयात करना | SharePoint दस्तावेज़, Confluence पेज, Azure DevOps वर्क आइटम आयात करना |
| **डेस्टिनेशन d'आर्टिफैक्ट** | एक समीक्षा किए गए डिलिवरेबल को लक्ष्य स्थान पर प्रकाशित करना | PM दस्तावेज़ को SharePoint पर प्रकाशित करना |

### याद रखने के लिए एक सरल नियम

- **आयात** और **प्रकाशन** एक ही चीज़ नहीं हैं।
- एक कनेक्टर को देखना और उसे **चलाना** एक ही बात नहीं है।
- एक कनेक्टर **प्लेटफ़ॉर्म स्तर** पर मौजूद हो सकता है, लेकिन अभी तक किसी प्रोजेक्ट के लिए खुला नहीं हो सकता।

## कनेक्टर ProPM Agent में कैसे एकीकृत होता है

किसी भी कनेक्टर के लिए, तार्किक पथ हमेशा समान रहता है:

1. प्रशासक इसे **प्लेटफ़ॉर्म प्रशासन** में तैयार करता है;
2. वह configuration और, enabled होने पर, वास्तविक connectivity को validate करता है;
3. कनेक्टर **प्रोजेक्ट इंटीग्रेशन** में उपलब्ध कराया जाता है;
4. **गवर्नेंस नीतियाँ** तय करती हैं कि कौन इसका उपयोग कर सकता है और किस स्तर पर;
5. टीम इसे **ज्ञान**, **PM दस्तावेज़** या **Actions & approbations** में उपयोग करती है;
6. अंतिम ट्रेस **प्रोजेक्ट गतिविधि** और **Journal IA** में दिखाई देती है।

## उपयोगकर्ता उत्पाद में कनेक्टर्स कहाँ देखता है

| सतह | वहाँ क्या किया जाता है |
| --- | --- |
| **प्लेटफ़ॉर्म प्रशासन** | तकनीकी definition बनाना, authentication भरना, validate करना, provider के अनुसार test करना और जरूरत हो तो probes enable करना |
| **प्रोजेक्ट इंटीग्रेशन** | यह जाँचना कि कौन से कनेक्टर्स वास्तव में वर्तमान प्रोजेक्ट के लिए खुले हैं |
| **ज्ञान** | उपलब्ध provider के अनुसार documents, pages, tickets, work items या अन्य sources import करना |
| **गवर्नेंस नीतियाँ** | यह तय करना कि कौन से roles observe, propose या execute कर सकते हैं |
| **Actions & approbations** | action request तैयार करना, approval लेना और connector mode अनुमति दे तो execute करना |
| **Journal IA / गतिविधि** | प्रवाह और निष्पादन का ट्रेस रखना |

## तीन स्तर जिन्हें भ्रमित नहीं करना चाहिए

| स्तर | इसका क्या मतलब है | सही पढ़ना |
| --- | --- | --- |
| **प्लेटफ़ॉर्म** | कनेक्टर तकनीकी रूप से मौजूद है | यह परिभाषित, प्रमाणीकरण और वैश्विक रूप से नियंत्रित है |
| **प्रोजेक्ट** | कनेक्टर एक विशिष्ट प्रोजेक्ट के लिए खुला है | प्रोजेक्ट इसे संभावित विकल्प के रूप में देख सकता है |
| **गवर्न्ड उपयोग** | कनेक्टर एक वास्तविक प्रवाह में उपयोग किया जा सकता है | उपयोगकर्ता के पास सही रोल, नीति और स्वस्थ निष्पादन विकल्प है |

## दृश्य निष्पादन कनेक्टर्स

निष्पादन कनेक्टर्स ProPM Agent से किसी बाहरी टूल को **एक्शन भेजने** के लिए उपयोग किए जाते हैं।

**Project integrations** स्क्रीन इन enabled execution connectors को तब **Available to bind** दिखाती है जब वे अभी project से जुड़े नहीं होते।

### वर्तमान execution connector catalog

| UI में connector | मुख्य उपयोग | सामान्य project action |
| --- | --- | --- |
| **Asta Powerproject schedule sync** | enterprise schedules और baselines synchronize करना | जब schedule updates को governed project channel से जाना हो तब bind करें |
| **Azure DevOps delivery project** | work items बनाना या update करना और delivery track करना | Boards, sprints या delivery backlogs उपयोग करने वाली teams के लिए bind करें |
| **Jira delivery workspace** | issues और delivery follow-up बनाना या update करना | risks, blockers या decisions को governed Jira tickets बनाना हो तब bind करें |
| **Microsoft Project schedule sync** | Microsoft Project schedules synchronize करना | master schedule Microsoft Project में managed हो तब bind करें |
| **Microsoft Teams collaboration** | governed collaboration messages और approval notifications भेजना | controlled team notifications के लिए bind करें |
| **Outlook executive notifications** | governed emails या stakeholder reminders भेजना | named recipients को formal communication भेजने के लिए bind करें |
| **SharePoint publication library** | reviewed artifacts को SharePoint library में publish करना | approved PM deliverables को SharePoint से distribute करना हो तब bind करें |
| **Smartsheet portfolio workspace** | portfolio sheets और workspace data update करना | portfolio tracking Smartsheet में हो तब bind करें |
| **Webhook event delivery** | किसी enterprise/internal endpoint को call करना | custom downstream automation के लिए bind करें |
| **Wrike delivery workspace** | tasks, assignees और delivery coordination update करना | operational delivery work Wrike में हो तब bind करें |

## दृश्य इन्जेशन प्रदाता

इन्जेशन प्रदाता ProPM Agent में सामग्री को **ज्ञान** को समृद्ध करने के लिए लाने के लिए उपयोग किए जाते हैं।

Project screen bound providers को **Available to bind** providers से अलग दिखाती है। Counts tenant के अनुसार बदल सकते हैं, लेकिन स्क्रीन healthy bindings और उन catalog entries को अलग करती है जिन्हें अभी project binding या platform configuration चाहिए।

### वर्तमान ingestion provider catalog

| UI में provider | दिखाया गया mode/source | मुख्य उपयोग | readiness note |
| --- | --- | --- | --- |
| **Smartsheet sheet import** | Smartsheet · Scheduled | portfolio sheets को Knowledge में refresh करना | bound और **Healthy** दिख सकता है |
| **Azure Data Factory evidence pipeline** | ADF · Pipeline | evidence, RAID और reporting refreshes import करना | bound और **Healthy** दिख सकता है |
| **Asta Powerproject schedule import** | Asta Powerproject Import · Manual | schedule snapshots और baselines import करना | **Ready** होने पर bind करने योग्य |
| **Azure Blob document ingest** | Blob Storage · Scheduled | governed document drops और archive refreshes ingest करना | **Ready** होने पर bind करने योग्य |
| **Confluence knowledge import** | Confluence · Manual | wiki pages और procedural knowledge import करना | source पूरा होने तक **Not configured** दिख सकता है |
| **Jira issue import** | Jira · Scheduled | issues, blockers और follow-up evidence import करना | source पूरा होने तक **Not configured** दिख सकता है |
| **Microsoft Project schedule import** | MS Project Import · Manual | schedule baselines और updates import करना | **Ready** होने पर bind करने योग्य |
| **SFTP document intake** | SFTP · Scheduled | third-party document drops import करना | host, folder और credentials पूरे होने तक **Not configured** दिख सकता है |
| **SharePoint knowledge import** | SharePoint · Manual | knowledge libraries और reporting artifacts import करना | site और library setup के बाद bind करने योग्य |
| **Wrike task import** | Wrike · Scheduled | tasks, assignees और workflow evidence import करना | workspace setup के बाद bind करने योग्य |

## कई भूमिकाओं में मौजूद कनेक्टर्स

कुछ नाम उत्पाद में कई स्थानों पर दिखाई देते हैं। यह सामान्य है: import provider और execution connector अलग-अलग bindings रहते हैं।

| परिवार | Import role | Execution role | सही पढ़ना |
| --- | --- | --- | --- |
| **SharePoint** | **SharePoint knowledge import** | **SharePoint publication library** | documents पढ़ सकता है और reviewed artifact publish कर सकता है, लेकिन हर role का setup और binding अलग है |
| **Jira** | **Jira issue import** | **Jira delivery workspace** | Jira context import कर सकता है और execution connector भी bound हो तो governed ticket बना सकता है |
| **Microsoft Project** | **Microsoft Project schedule import** | **Microsoft Project schedule sync** | schedule evidence को Knowledge में ला सकता है और governed schedule changes synchronize कर सकता है |
| **Smartsheet** | **Smartsheet sheet import** | **Smartsheet portfolio workspace** | portfolio evidence refresh कर सकता है और Smartsheet को execution destination के रूप में update कर सकता है |
| **Wrike** | **Wrike task import** | **Wrike delivery workspace** | operational task evidence import कर सकता है और governed actions से Wrike tasks update कर सकता है |
| **Asta Powerproject** | **Asta Powerproject schedule import** | **Asta Powerproject schedule sync** | schedule snapshots import कर सकता है और controlled schedule changes synchronize कर सकता है |
| **Azure DevOps** | — | **Azure DevOps delivery project** | execution connector के रूप में available है; import path उपलब्ध हो तो उसे अलग से validate करें |
| **ADF / Blob / Confluence / SFTP** | केवल ingestion provider | — | ये **Knowledge** को enrich करते हैं और अपने-आप action destinations नहीं बनते |
| **Teams / Outlook / Webhook** | — | केवल execution connector | ये governed messages या events भेजते हैं और अपने-आप Knowledge import नहीं करते |

## Supported catalog बनाम extensible options

ऊपर दिया गया catalog वह operational catalog है जो अभी seed, check और **Project Integrations** में expose होता है। **Platform Administration** अतिरिक्त या custom families भी दिखा सकता है, जैसे GitHub, GitLab, ServiceNow, Slack, Notion, Google Drive, OneDrive, Box या Dropbox।

इन अतिरिक्त entries को extensions मानें जब तक administrator technical definition, required fields, authentication strategy, validation, project binding और लागू governance policy confirm न कर दे।

## Execution connector के लिए minimum configuration

नीचे दिए गए fields `test` या `live` use से पहले न्यूनतम रूप से पूरे होने चाहिए। Form में field names थोड़े बदल सकते हैं, लेकिन logic समान है: destination, authentication identity और explicit project target।

| Connector | test/live use से पहले minimum fields | Typical authentication | Connectivity probe enabled होने पर |
| --- | --- | --- | --- |
| **Jira delivery workspace** | `base_url` या `site_url`, `project_key` | API key, basic, PAT, bearer token या OAuth | target Jira project पढ़ता है |
| **Azure DevOps delivery project** | `organization_url` या `organization`, `project`, `work_item_type` | PAT, bearer token या OAuth | project में work item type check करता है |
| **Microsoft Teams collaboration** | `team_id`, `channel_id` | Microsoft Graph with bearer token, OAuth, client credentials या managed identity | target Teams channel पढ़ता है |
| **Outlook executive notifications** | `mailbox`, `user_id` या `user_principal_name` | Microsoft Graph with bearer token, OAuth, client credentials या managed identity | Graph mailbox या user check करता है |
| **SharePoint publication library** | `site_id` या `site_url`, `drive_id` या `library` | Microsoft Graph with bearer token, OAuth, client credentials या managed identity | site और library check करता है |
| **Webhook event delivery** | HTTPS में `webhook_url` या `endpoint_url` | no auth, API key, bearer token, basic या OAuth | `HEAD` भेजता है, जरूरत पर `GET` |
| **Microsoft Project schedule sync** | `project_id`, `portfolio` या `workspace` | Microsoft Graph with bearer token, OAuth, client credentials या managed identity | configured probe endpoint या path use करता है |
| **Smartsheet portfolio workspace** | `sheet_id` या `workspace_id` | API key, bearer token, OAuth या PAT | Smartsheet sheet या workspace पढ़ता है |
| **Wrike delivery workspace** | `folder_id`, `space_id` या `task_id` | bearer token या OAuth | Wrike task या folder पढ़ता है |
| **Asta Powerproject schedule sync** | `base_url` या `endpoint_url`, फिर `project_id`, `portfolio` या `schedule_id` | API key, bearer token, OAuth या basic | configured probe endpoint या path use करता है |

## Ingestion provider के लिए minimum configuration

Ingestion provider को source, import mode और उस source को पढ़ने वाली identity बतानी होती है। Scheduled imports के लिए compatible cadence या orchestration भी चाहिए।

| Provider | real use से पहले minimum fields | Typical authentication | Connectivity probe enabled होने पर |
| --- | --- | --- | --- |
| **SharePoint knowledge import** | `site_id` या `site_url`, `drive_id` या `library` | Microsoft Graph with bearer token, OAuth, client credentials या managed identity | library और root children check करता है |
| **Azure Data Factory evidence pipeline** | `subscription_id`, `resource_group_name`, `factory` या `factory_name`, `pipeline` या `pipeline_name` | managed identity, client credentials या bearer token | pipeline definition पढ़ता है |
| **Azure Blob document ingest** | `account_url`, `storage_account` या `account_name`, फिर `container` | managed identity, SAS, bearer token या client credentials | container से कुछ blobs list करता है |
| **Confluence knowledge import** | `base_url`, `space`, `space_key` या `space_id` | basic, bearer token या OAuth | Confluence space check करता है |
| **Jira issue import** | `base_url` या `site_url`, फिर `project`, `project_key` या `jql` | API key, basic, PAT, bearer token या OAuth | limited Jira search चलाता है |
| **SFTP document intake** | `host` या `base_url`, `username` या `user`, `folder` या `path`, provided हो तो valid port | basic, password या SSH private key | SFTP server तक TCP reachability check करता है |
| **Microsoft Project schedule import** | `project_id`, `portfolio` या `workspace` | Microsoft Graph with bearer token, OAuth, client credentials या managed identity | configured probe endpoint या path use करता है |
| **Smartsheet sheet import** | `sheet_id` या `workspace_id` | API key, bearer token, OAuth या PAT | Smartsheet sheet या workspace पढ़ता है |
| **Wrike task import** | `folder_id` या `space_id` | bearer token या OAuth | folder या space की tasks पढ़ता है |
| **Asta Powerproject schedule import** | `base_url` या `endpoint_url`, फिर `project_id`, `portfolio` या `schedule_id` | API key, bearer token, OAuth या basic | configured probe endpoint या path use करता है |

## Validation, probes और runtime limits

| Step | क्या confirm होता है | क्या guarantee नहीं होती |
| --- | --- | --- |
| **Save** | definition platform level पर save है | external source जरूरी नहीं कि contact हुई हो |
| **Validate** | required fields, mode, authentication और HTTPS URLs coherent हैं | real network call केवल probes enabled होने पर चलता है |
| **Connectivity probe** | ProPM Agent provider के non-destructive endpoint तक पहुँच सकता है | ticket creation, message sending या full import trigger नहीं होते |
| **Bind to project** | project platform definition consume कर सकता है | policy, user role, health, validation और binding readiness अभी भी use block कर सकते हैं |
| **Validate binding** | project binding platform definition से aligned रहता है | यह real business action या import का replacement नहीं है |

Connectivity probes जानबूझकर opt-in हैं। Administrator इन्हें `connectivity_probe_enabled`, `run_connectivity_probe`, `live_connectivity_check`, equivalent metadata या platform environment variable से enable कर सकता है। इसके बिना validation consistency और readiness check ही रहता है।

यदि connector `mock` या `test` mode में रहता है, तो ProPM Agent request, governance, approval और trace manage कर सकता है, लेकिन final call external system को जरूरी नहीं भेजता। Real vendor execution के लिए compatible connector mode, complete configuration, allowing policy और ऐसा environment चाहिए जो उस path को enable करे।

## Governed actions और required connector

| User action | Internal action type | Required connector | Minimum business fields |
| --- | --- | --- | --- |
| SharePoint में artifact publish करना | `publish_artifact_to_sharepoint` | `sharepoint_publish` | `artifact_id`, `destination_id` |
| Teams message भेजना | `send_teams_message` | `teams` | `body` |
| Outlook message भेजना | `send_outlook_message` | `outlook` | `body`, `recipients` |
| Jira ticket बनाना | `create_jira_ticket` | `jira` | `title` |
| Azure DevOps work item बनाना | `create_azure_devops_ticket` | `azure_devops` | `title` |

कुछ legacy labels automatically normalize होते हैं। उदाहरण: `send_message` से `send_teams_message`, `send_email` से `send_outlook_message`, `create_work_item` से `create_azure_devops_ticket`, और `publish_sharepoint_artifact` से `publish_artifact_to_sharepoint`।

## Status, blockers और diagnostic order

| Visible status या blocker | Practical reading | पहले क्या करें |
| --- | --- | --- |
| **Ready** या **available** | definition bind या use हो सकती है अगर बाकी chain खुली है | project binding और policy check करें |
| **Healthy** | latest known validation positive है | confirm करें कि project bound है |
| **Not configured** | fields, source, target या credentials missing हैं | Platform Administration में definition complete करें |
| **Not validated** या **not_tested** | definition मौजूद है लेकिन expected validation या test pass नहीं हुआ | Validate या सही probe चलाएँ |
| **Blocked by health** | platform health degraded या invalid है | endpoint, auth, scopes और network check करें |
| **Blocked by entitlement** | blocked integration के लिए legacy wording; Marketplace plans में यह feature-tier difference नहीं है | access issue हो तो configuration, health, binding, policy, role और license availability check करें |
| **Blocked by policy** | project governance इस action या usage type को रोकती है | policy या role adjust करें |
| **Binding disabled** | project binding मौजूद है लेकिन disabled है | allowed हो तो binding re-enable या recreate करें |
| **Missing platform definition** | project missing या deleted definition reference कर रहा है | platform definition recreate या fix करें |

सबसे उपयोगी diagnostic order है: platform definition, required configuration, validation या probe, project binding, policy, user permission, action या import payload, फिर app access blocked हो तो license availability।

## Import, external output और audit

| Topic | ProPM Agent क्या trace करता है | External tool में क्या check करें |
| --- | --- | --- |
| Knowledge import | ingestion run, provider, binding, source label, freshness, counts और Trace ID | available volume, source rights, filters, skipped files और deduplication |
| SharePoint publication | action request, approval, connector, destination और Trace ID | final URL, library, write permissions और published version |
| Jira या Azure DevOps | action, rationale, business payload और Trace ID | created ticket या work item key, target project और item type |
| Teams या Outlook | request, logical recipients या channel, approval और Trace ID | actual delivery, channel, mailbox और possible Graph refusals |
| Webhook | logical endpoint, attempt status, response या error और Trace ID | HTTP status, truncated response, signature validation और downstream retry |

किसी action business payload या user note में कभी secret न डालें। Secrets, keys और sensitive references हमेशा platform configuration में रहें जो इसी use के लिए बनी है।

## Security और authentication

| Family | Generally accepted authentication | ध्यान देने योग्य बिंदु |
| --- | --- | --- |
| Microsoft Graph, Teams, Outlook, SharePoint और Microsoft Project | bearer token, OAuth, client credentials या managed identity | scopes को जरूरी sites, mailboxes, channels या projects तक सीमित रखें |
| Jira और Confluence | API key, basic, PAT, bearer token या OAuth, product के अनुसार | least-privilege technical accounts use करें |
| Azure DevOps | PAT, bearer token या OAuth | rights को project और expected work item types तक सीमित रखें |
| Azure Data Factory और Blob Storage | managed identity, client credentials, SAS या bearer token, service के अनुसार | managed identities prefer करें और accessible containers या pipelines सीमित रखें |
| SFTP | basic, password या SSH private key | key rotation, port और authorized root folder check करें |
| Webhook | no auth, API key, bearer token, basic या OAuth | risk justify करे तो HTTPS, signature या endpoint-side secret require करें |

## उदाहरण 1 — SharePoint एंड-टू-एंड

SharePoint पूर्ण लॉजिक को समझने के लिए सबसे अच्छे उदाहरणों में से एक है।

### SharePoint क्या कर सकता है

- दस्तावेज़ **ज्ञान** में आयात करना;
- **आर्टिफैक्ट गंतव्य** के रूप में कार्य करना;
- **SharePoint publish** के माध्यम से गवर्न्ड प्रकाशन प्राप्त करना।

### चरण-दर-चरण पथ

1. प्रशासक **प्लेटफ़ॉर्म प्रशासन** में SharePoint तैयार करता है;
2. प्रोजेक्ट **प्रोजेक्ट इंटीग्रेशन** में SharePoint बाइंडिंग प्राप्त करता है;
3. टीम मौजूदा दस्तावेज़ **ज्ञान** में आयात करती है;
4. एक PM दस्तावेज़ लिखा या समीक्षा किया जाता है;
5. गवर्नेंस नीति तय करती है कि कौन प्रकाशन का प्रस्ताव या निष्पादन कर सकता है;
6. प्रकाशन **Actions & approbations** से गुजरता है यदि मान्यकरण आवश्यक है;
7. अंतिम ट्रेस प्रोजेक्ट गतिविधि और **Journal IA** में दिखाई देता है।

### SharePoint के ProPM Agent में लाभ

- टीमों द्वारा पहले से ज्ञात दस्तावेज़ रिपॉज़िटरी का पुनः उपयोग;
- आयात, दस्तावेज़ समीक्षा और अंतिम प्रकाशन को जोड़ना;
- औपचारिक मान्यकरण प्रवाह के लिए उपयुक्त।

## उदाहरण 2 — Jira एंड-टू-एंड

### Jira क्या कर सकता है

- इश्यू और टिप्पणियाँ संदर्भ के रूप में आयात करना;
- निर्णय या सिग्नल से गवर्न्ड टिकट प्राप्त करना;
- बाहरी ट्रैकिंग सिस्टम में ब्लॉक को ठोस बनाना।

### चरण-दर-चरण पथ

1. Jira **प्लेटफ़ॉर्म प्रशासन** में तैयार किया जाता है;
2. यह प्रोजेक्ट में **प्रोजेक्ट इंटीग्रेशन** में खुला होता है;
3. टीम सिग्नल या निर्णय देखती है;
4. वह **Create a Jira ticket** एक्शन बनाती है;
5. गवर्नेंस तय करती है कि एक्शन सीधा है या अनुमोदन के अधीन;
6. live vendor execution enabled हो तो ticket बनाया जाता है; हर स्थिति में request और decision product में trace रहते हैं।

### Jira के ProPM Agent में लाभ

- प्रोजेक्ट अवलोकन को औपचारिक टिकट में बदलना;
- सिग्नल, औचित्य और बनाए गए टिकट के बीच स्पष्ट ट्रेस;
- बिना ट्रेस के मैन्युअल कार्यों से बचना।

## उदाहरण 3 — Teams या Outlook प्रसार के लिए

### उपयोगिता

- **Teams** सहयोगी टूल में सूचना प्रसारित करने के लिए;
- **Outlook** अधिक औपचारिक ईमेल संचार भेजने के लिए।

### ProPM Agent के साथ एकीकरण

1. कनेक्टर प्लेटफ़ॉर्म स्तर पर तैयार किया जाता है;
2. प्रोजेक्ट इसे निष्पादन विकल्प के रूप में देखता है;
3. नीति तय करती है कि कौन संदेश भेज सकता है;
4. टीम **Actions & approbations** में संदेश तैयार करती है;
5. risk के आधार पर action approve होता है और connector mode allow करे तो execute होता है;
6. external delivery blocked या deferred हो तब भी message trace historized रहता है।

### मुख्य लाभ

प्रसार एक स्वतंत्र संदेश के रूप में नहीं जाता: यह **गवर्न्ड, समीक्षा और ट्रेस योग्य** रहता है।

## उदाहरण 4 — Webhook event delivery

### कब उपयोग करें

जब ProPM Agent को governed decision के बाद किसी specific internal या third-party endpoint को call करना हो, तब **Webhook event delivery** use करें।

### ProPM Agent के साथ integration

- current catalog में Webhook एक **execution connector** है;
- इसे project से तभी bind करें जब platform endpoint और health validate हो जाएँ;
- यदि भविष्य में inbound webhook ingestion जोड़ी जाती है, तो उसे अलग ingestion provider मानें, जिसकी अपनी validation और project binding होगी।

### मुख्य लाभ

Webhook event delivery custom automation के लिए लचीलापन देता है, लेकिन flow को uncontrolled output में नहीं बदलता।

## कैसे पहचानें कि एक कनेक्टर वास्तव में तैयार है

connector status को सही पढ़ने के लिए तीन सरल अवस्थाएँ अलग करें:

| स्थिति | इसका क्या मतलब है |
| --- | --- |
| कनेक्टर **प्लेटफ़ॉर्म प्रशासन** में दिखाई देता है | यह तकनीकी रूप से मौजूद है |
| कनेक्टर **प्रोजेक्ट इंटीग्रेशन** में दिखाई देता है | प्रोजेक्ट इसे संभावित रूप से उपयोग कर सकता है |
| कनेक्टर **Actions & approbations** में स्वस्थ और अनुमत विकल्प के रूप में दिखाई देता है | एक्शन वास्तव में प्रस्तावित या निष्पादित किया जा सकता है |

## क्यों एक दृश्य कनेक्टर ब्लॉक हो सकता है

एक कनेक्टर दृश्य हो सकता है लेकिन उपयोग योग्य नहीं यदि:

- उसका **health** स्थिति जाँच की आवश्यकता रखता है;
- project binding open, healthy या configured नहीं है;
- प्रोजेक्ट की **policy** उपयोग को ब्लॉक करती है;
- उपयोगकर्ता के पास सही **permission** नहीं है;
- प्रोजेक्ट बाइंडिंग अभी तक खुला नहीं है;
- अपेक्षित **आर्टिफैक्ट गंतव्य** कॉन्फ़िगर नहीं है।

## सरल पढ़ना

| यदि आप देखते हैं… | पहले जाँचें… |
| --- | --- |
| कनेक्टर प्लेटफ़ॉर्म स्तर पर मौजूद है लेकिन प्रोजेक्ट में नहीं दिखता | **प्रोजेक्ट इंटीग्रेशन** |
| यह प्रोजेक्ट में दिखाई देता है लेकिन कोई एक्शन नहीं निकलता | **गवर्नेंस नीतियाँ** और रोल अनुमतियाँ |
| एक्शन दिखाई देता है लेकिन कोई स्वस्थ विकल्प नहीं | कनेक्टर स्वास्थ्य, प्रोजेक्ट बाइंडिंग और संगत निष्पादन विकल्प |
| आयात प्रस्तावित है लेकिन कुछ नहीं लौटता | इन्जेशन प्रदाता, वास्तविक स्रोत और डेटा ताज़गी |
| SharePoint प्रकाशन अभी तक पूरा नहीं हुआ | आर्टिफैक्ट गंतव्य, नीति, अनुमोदन और **SharePoint publish** कनेक्टर |

## ग्राहक के लिए अनुशंसित वर्कफ़्लो

1. प्रोजेक्ट के लिए वास्तव में उपयोगी टूल पहचानें;
2. **प्लेटफ़ॉर्म प्रशासन** में कनेक्टर्स तैयार करें;
3. केवल तैयार कनेक्टर्स को प्रोजेक्ट में खोलें;
4. रोल के अनुसार **गवर्नेंस नीतियाँ** सेट करें;
5. पहला import या action test करें और readiness, probe तथा real vendor execution को अलग-अलग पढ़ें;
6. अंतिम ट्रेस **Journal IA** में जाँचें।

## याद रखने योग्य बातें

- ProPM Agent स्पष्ट रूप से **आयात**, **प्रकाशन** और **बाहरी एक्शन** को अलग करता है;
- एक ही नाम, जैसे **SharePoint** या **Jira**, कई भूमिकाओं में दिखाई दे सकता है;
- कनेक्टर की सही व्याख्या हमेशा तीन प्रश्नों पर आधारित होती है: क्या यह परिभाषित है? क्या यह प्रोजेक्ट के लिए खुला है? क्या यह गवर्नेंस द्वारा अनुमत है?

## आगे

- [शासन, निर्णय और क्रियाएँ](./gouvernance-decisions-et-actions.md)
- [परियोजनाएँ और कार्यक्षेत्र](./projets-et-espace-de-travail.md)
- [पोर्टफोलियो और तकनीकी प्रशासन](./portefeuille-et-administration-technique.md)
- [रिपोर्ट, AI लॉग और ट्रेसबिलिटी](./rapports-journal-ia-et-tracabilite.md)
