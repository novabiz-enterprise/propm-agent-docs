---
title: Azure Marketplace पर तैनाती
slug: /deploiement-azure-marketplace
description: Azure Marketplace से ProPM Agent deploy करें, ProPM-50 form fields भरें और installation के बाद administration complete करें।
---

[मुखपृष्ठ](./index.md) · Azure Marketplace पर तैनाती

## उद्देश्य

यह पेज बताता है कि **ProPM Agent** को **Azure Marketplace** से कैसे deploy किया जाता है। इसमें Azure form की दो मुख्य screens, हर visible field का purpose और **Review + create** से पहले checks समझाए गए हैं।

नीचे की screenshots **Create ProPM-50** form दिखाती हैं। Marketplace plan के अनुसार यह नाम बदल सकता है, जैसे ProPM-50, ProPM-100 या कोई दूसरा available plan।

## किसके लिए

| Profile | इस पेज का उपयोग |
| --- | --- |
| Azure administrator | Azure Marketplace से Managed Application create करना |
| Tenant administrator | Entra groups और पहला administrator access तैयार करना |
| Platform administrator | Installation के बाद कौन से settings complete करने हैं समझना |
| Support | Secrets या internal variables मांगे बिना workflow verify करना |
| Business user | नहीं, इसके लिए [शुरुआत](./demarrage.md) देखें |

## शुरू करने से पहले

Marketplace form खोलने से पहले यह जानकारी तैयार रखें।

| जानकारी | क्यों जरूरी है |
| --- | --- |
| Target Azure subscription | Marketplace transaction और deployed resources को carry करती है |
| Target resource group | Customer-side Managed Application object को organize करता है |
| Target Azure region | Primary deployment location define करता है |
| Application name | Azure में ProPM Agent instance को identify करता है |
| Managed Resource Group | Application द्वारा managed internal resources receive करता है |
| Entra Group Object IDs | Platform administration access देते हैं |
| Optional bootstrap users | First access या controlled recovery में मदद करते हैं |
| Initial AI provider | बताता है कि इस instance के लिए कौन सा AI provider family prepare करना है |
| Optional CORS origins | जरूरत होने पर additional web domains allow करते हैं |
| VNet CIDR plan | Organization network के साथ conflicts से बचाता है |
| Initial password | Generate करके secret की तरह store करना चाहिए |

Password, secret, API key, token या confidential value को documentation या unsecured support request में कभी copy न करें।

## Deployment flow

1. Azure Marketplace में ProPM Agent offer खोलें।
2. Required Marketplace plan चुनें।
3. **Basics** tab भरें।
4. **Next** चुनें।
5. **Application Settings** tab भरें।
6. **Review + create** चुनें।
7. Validation errors हों तो fix करें।
8. Creation start करें।
9. Azure provisioning पूरा होने तक wait करें।
10. Published URL खोलें और ProPM Agent में administration complete करें।

## Screen 1 - Basics

**Basics** tab deployment का Azure scope define करता है: subscription, resource group, region और Managed Application के Azure names।

![ProPM-50 Azure Marketplace deployment Basics tab](/img/deploiement/propm-50-basics.png)

### Basics fields

| Field | Required | क्या भरें | Impact और recommendations |
| --- | --- | --- | --- |
| **Subscription** | हाँ | Azure subscription जो managed application और Marketplace billing receive करेगी। | ऐसा subscription use करें जहाँ आपके पास Managed Application deploy करने और resource groups create या select करने की permissions हों। Internal cost और governance rules भी verify करें। |
| **Resource group** | हाँ | Customer-side resource group जिसमें Managed Application object रहेगा। | Existing group चुनें या **Create new** use करें। यह internal managed resource group नहीं है जिसमें ProPM Agent technical resources होते हैं। |
| **Create new** | नहीं | Suitable group न होने पर नया resource group create करने की Azure action। | Environment और region से जुड़ा clear name रखें। Production instances के लिए temporary names avoid करें। |
| **Region** | हाँ | Primary Azure deployment region। | Organization-approved region चुनें, users के करीब और data residency requirements के compatible। Planned network और AI resources के साथ consistency रखें। |
| **Application Name** | हाँ | ProPM Agent Managed Application instance का visible name। | Stable और readable name use करें, जैसे `propm-prod-eus`। यह Azure में instance identify करने में मदद करता है। Secrets या sensitive customer data न रखें। |
| **Managed Resource Group** | हाँ | Managed resource group जो application द्वारा deployed internal resources receive करेगा। | Azure अक्सर generated name propose करता है। इसे unique और recognizable रखें। यह group application द्वारा managed होता है; direct access Managed Application model से limited हो सकता है। |
| **Previous** | नहीं | पिछले form step पर लौटता है। | यह button deployment start नहीं करता। |
| **Next** | नहीं | Required fields पर्याप्त रूप से भरने पर next tab पर जाता है। | **Application Settings** पर जाने के लिए use करें। Azure block करे तो `*` वाले required fields review करें। |
| **Review + create** | नहीं | Creation से पहले final Azure validation चलाता है। | Application settings complete करने के बाद ही use करें। Azure errors या warnings दिखाएगा जिन्हें real creation से पहले fix करना होगा। |

## Screen 2 - Application Settings

**Application Settings** tab ProPM Agent environment configure करता है: administration identity, installation mode, initial AI provider, CORS, monitoring, logging, initial password और network।

![ProPM-50 Azure Marketplace deployment Application Settings tab](/img/deploiement/propm-50-application-settings.png)

### Application Settings fields

| Field | Required | क्या भरें | Impact और recommendations |
| --- | --- | --- | --- |
| **Environment Name** | हाँ | Short environment name, जैसे `dev`, `test`, `uat` या `prod`। | Resources, configuration और support exchanges में environment identify करने में मदद करता है। Short, stable, non-secret value use करें जो internal convention follow करे। |
| **Installation mode** | Scenario पर निर्भर | Installation mode। First installation के लिए **New installation - create new resources** रखें। | New resources के साथ नया instance create करता है। Existing resources attach mode केवल prepared plan change, major update या recovery scenario में use करें। |
| **Platform Administration Entra Group Object IDs** | हाँ | Entra groups के Object IDs जिन्हें platform administer करने की अनुमति है। | Groups के **Object IDs** डालें, सिर्फ display names नहीं। ये groups deployment के बाद **Platform Administration** access determine करते हैं। Broad groups के बजाय dedicated groups prefer करें। |
| **Platform Administration Bootstrap Users (optional)** | नहीं | Bootstrap या recovery users, यदि procedure में required हो। | Entra groups पूरी तरह operational न हों तो first access secure करने में useful। List minimum और controlled रखें। |
| **Allow Azure RBAC admin recovery** | नहीं | Azure RBAC के through administrator recovery allow करने वाला checkbox। | यदि operating model authorized Azure administrator को platform access recover करने देता है तो enabled रखें। Strict documented separation required हो तभी disable करें। |
| **LLM Provider** | Recommended | Initial AI provider family: Azure OpenAI, OpenAI, OpenRouter या OpenAI-compatible, available choices के अनुसार। | यह initial deployment intent है। इससे provider operational होना साबित नहीं होता। Installation के बाद **Platform Administration > AI Provider Settings** में **Save**, **Validate**, **Test**, फिर **Activate** करें। |
| **CORS Allowed Origins** | Scenario पर निर्भर | Additional allowed web origins, जैसे `https://portal.contoso.com`। | Additional origin required न हो तो खाली छोड़ें। बहुत broad wildcards avoid करें। Values complete origins होनी चाहिए, `https://`, domain और जरूरत हो तो port के साथ। |
| **Enable alerting (Azure Monitor)** | नहीं | Environment के लिए Azure Monitor alerts enable या disable करता है। | Production में recommended ताकि incidents detect हों। बाद में Azure Monitor में recipients, action rules और cost rules verify करें। |
| **Enable debug logging** | नहीं | More detailed logs enable करता है। | Production में disabled रखें जब तक support diagnosis की जरूरत न हो। Debug log volume बढ़ा सकता है और authorized administrators को ज्यादा technical detail दिखा सकता है। |
| **Password** | हाँ | Deployment form द्वारा मांगा गया initial password। | Strong password generate करें और approved vault या secret manager में store करें। Email, chat या unsecured ticket से न भेजें। |
| **Confirm password** | हाँ | **Password** जैसा ही value। | Azure verify करता है कि दोनों fields match करें। Error हो तो secure source से दोनों values फिर enter करें। |
| **VNet CIDR** | हाँ | Deployment के लिए reserved private network range, जैसे `10.0.0.0/16`। | ऐसा range चुनें जो existing networks, peerings, VPNs या planned ranges से overlap न करे। Creation से पहले network team से validate कराएं क्योंकि बाद में बदलना कठिन है। |
| **Previous** | नहीं | **Basics** tab पर वापस जाता है। | Final validation से पहले subscription, group, region या names fix करने के लिए useful। |
| **Next** | नहीं | अगले form step पर जाता है। | Validation से पहले tab order follow करना हो तो use करें। |
| **Review + create** | नहीं | सभी parameters की final validation चलाता है। | Azure resources तब तक create नहीं करता जब तक validation के बाद creation confirm न करें। Start करने से पहले सभी errors fix करें। |

## LLM Provider चुनना

**LLM Provider** field वह AI family चुनता है जिसे environment पहले use करेगा। यह AI configuration का end नहीं है।

| Choice | कब चुनें | Installation के बाद अभी भी जरूरी |
| --- | --- | --- |
| **Azure OpenAI** | Organization Azure, Entra और Microsoft governance ecosystem में रहना चाहती है। | Endpoint, region या available model, Azure OpenAI settings, tests और activation confirm करें। |
| **OpenAI** | Organization सीधे OpenAI APIs use करती है। | URL, model, key या secret reference enter करें, फिर **Save**, **Validate**, **Test**, **Activate** चलाएँ। |
| **OpenRouter** | Organization एक entry point से multiple models access करना चाहती है। | Base URL, key या secret reference, default model enter करें, फिर validate और activate करें। |
| **OpenAI-compatible** | Organization OpenAI-compatible gateway या endpoint use करती है। | Exact endpoint, authentication mode, expected model या deployment enter करें, फिर actual compatibility test करें। |

Simple rule: deployment AI provider को **select** करता है; ProPM Agent administration उसे **operational** बनाती है।

## Review + create से पहले validation

Creation start करने से पहले ये checks करें।

| Check | Expected result |
| --- | --- |
| Subscription और resource group | Target environment और governance rules से match करते हैं |
| Region | Data residency, availability और network strategy respect करती है |
| Application Name | Name clear, stable और non-confidential है |
| Managed Resource Group | Name unique और recognizable है |
| Entra Group Object IDs | IDs platform administration groups के हैं |
| Bootstrap Users | List empty है या expected accounts तक strictly limited है |
| RBAC recovery | Choice administrator recovery procedure से aligned है |
| LLM Provider | Initial provider AI strategy से consistent है |
| CORS | केवल required origins allowed हैं |
| Alerting | Monitoring required environments के लिए enabled है |
| Debug logging | Controlled diagnosis के अलावा disabled है |
| Password | Vault में stored है और clear text में share नहीं होता |
| VNet CIDR | Network team द्वारा validated है और known overlap नहीं है |

## Deployment के बाद

1. Azure provisioning पूरा होने तक wait करें।
2. Published ProPM Agent URL खोलें।
3. Entra groups या bootstrap procedure द्वारा authorized account से sign in करें।
4. **Platform Administration** access verify करें।
5. AI provider settings खोलें।
6. Selected provider के लिए **Save**, **Validate**, **Test**, फिर **Activate** चलाएँ।
7. Licenses और Marketplace plan verify करें।
8. Standard user से पहला functional test करें।
9. Run के बाद [AI Log](./journal-ia.md) देखें ताकि actual provider confirm हो सके।

## Common blockers

| Symptom | Likely cause | Recommended action |
| --- | --- | --- |
| Azure next step पर नहीं जाता | Required field empty या invalid है | `*` वाले सभी fields और field messages review करें |
| Administrator Platform Administration नहीं देखता | Wrong Entra Object ID या group membership propagate नहीं हुई | Group Object ID और account membership verify करें |
| Validation में network conflict | VNet CIDR already used या overlapping है | Network team के साथ दूसरा range चुनें |
| Creation के बाद AI provider usable नहीं | Deployment ने केवल AI provider family select की है | Administration में **Save**, **Validate**, **Test**, **Activate** complete करें |
| Logs बहुत ज्यादा या unexpected costs | Debug logging या alerting governance के बिना enabled | Azure Monitor settings adjust करें और diagnosis के बाहर debug disable करें |

## आगे

- Entra access final करने के लिए [Azure और Entra administration](./admin-deploiement-marketplace-et-entra.md) खोलें।
- AI provider configure करने के लिए [AI provider](./admin-fournisseur-ia.md) खोलें।
- Licenses, plans और updates verify करने के लिए [Licenses, plans and updates](./admin-licences-plans-et-mises-a-jour.md) खोलें।
- Users invite करने के लिए [शुरुआत](./demarrage.md) भेजें।
