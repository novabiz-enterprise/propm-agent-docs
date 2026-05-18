---
title: الموصلات والتكاملات
slug: /connecteurs-jira-et-sharepoint
description: فهم جميع الموصلات المرئية في ProPM Agent، وفوائدها، واستخداماتها، وطريقة تكاملها في المنصة.
---

[البداية](./index.md) · الموصلات والتكاملات

![تدفق Jira وSharePoint بين المنصة والمشروع والإجراءات](/img/diagrams/ar/connecteurs-jira-sharepoint-workflow.svg)

## الهدف

تشرح هذه الصفحة **الكتالوج التشغيلي للموصلات ومزودي الاستيعاب المدعومين في ProPM Agent**، مع فوائدهم وفائدتهم للأعمال والطريقة التي يتكاملون بها في المنتج. قد تعرض بعض قوائم الإدارة أيضا عائلات قابلة للتوسيع أو مخصصة تتطلب تكوينا واعتمادا إضافيين قبل الاستخدام الحقيقي.

الهدف هو الإجابة عن ثلاثة أسئلة بسيطة:

1. **ما فائدة هذا الموصل؟**
2. **أين يظهر في ProPM Agent؟**
3. **كيف ننتقل من موصل معلن إلى موصل قابل للاستخدام فعلا؟**

## فهم الموصل في ProPM Agent

الموصل هو **جسر متحكم فيه** بين ProPM Agent وأداة أخرى في المؤسسة.

في المنتج، يمكن أن يخدم الموصل ثلاثة أشياء مختلفة:

| النوع | الغرض منه | مثال |
| --- | --- | --- |
| **موصل تنفيذ** | إرسال إجراء إلى أداة خارجية | إنشاء ticket Jira، إرسال رسالة Teams، النشر في SharePoint |
| **مزود استيعاب** | استيراد محتوى إلى قاعدة المعرفة | استيراد مستندات SharePoint، وصفحات Confluence، وwork items Azure DevOps |
| **وجهة أثر** | نشر تسليم تمت مراجعته إلى وجهة هدف | نشر مستند PM في SharePoint |

### قاعدة بسيطة يجب تذكرها

- **الاستيراد** ليس مثل **النشر**.
- **رؤية** موصل ليست مثل **القدرة على تنفيذه**.
- يمكن أن يوجد موصل **على مستوى المنصة**، دون أن يكون **مفتوحا لمشروع** بعد.

## كيف يتكامل موصل في ProPM Agent

أيا كان الموصل، يكون المسار المنطقي دائما هو نفسه:

1. يجهزه المسؤول في **إدارة المنصة**؛
2. يعتمد التكوين، وعند التفعيل، الاتصال الحقيقي؛
3. يصبح الموصل متاحا في **تكاملات المشروع**؛
4. تحدد **سياسات الحوكمة** من يستطيع استخدامه وعلى أي مستوى؛
5. يستخدمه الفريق بعد ذلك في **المعرفة** أو **مستندات PM** أو **الإجراءات والموافقات**؛
6. تبقى قابلية التتبع النهائية مرئية في **نشاط المشروع** و**سجل الذكاء الاصطناعي**.

## أين يرى المستخدم الموصلات في المنتج

| السطح | ما يتم عمله هناك |
| --- | --- |
| **إدارة المنصة** | إنشاء التعريف التقني، وإكمال المصادقة، والاعتماد، والاختبار حسب المزود، وتفعيل probes عند الحاجة |
| **تكاملات المشروع** | التحقق من الموصلات المفتوحة فعلا للمشروع الحالي |
| **المعرفة** | استيراد مستندات أو صفحات أو tickets أو work items أو مصادر أخرى حسب المزود المتاح |
| **سياسات الحوكمة** | تحديد الأدوار التي يمكنها المراقبة أو الاقتراح أو تنفيذ الإجراءات |
| **الإجراءات والموافقات** | إعداد طلب إجراء، والحصول على الموافقة عليه، وتنفيذه عندما يسمح وضع الموصل بذلك |
| **سجل الذكاء الاصطناعي / النشاط** | الحفاظ على قابلية تتبع التدفق والتنفيذات |

## ثلاثة مستويات يجب عدم الخلط بينها

| المستوى | ما يعنيه | القراءة الصحيحة |
| --- | --- | --- |
| **المنصة** | الموصل موجود تقنيا | معرف ومصادق عليه ومراقب عالميا |
| **المشروع** | الموصل مفتوح لمشروع محدد | يستطيع المشروع رؤيته كخيار محتمل |
| **استخدام محكوم** | يمكن استخدام الموصل في تدفق حقيقي | لدى المستخدم الدور الصحيح، والسياسة المناسبة، وخيار تنفيذ سليم |

## موصلات التنفيذ المرئية

تستخدم موصلات التنفيذ من أجل **إرسال إجراء** من ProPM Agent إلى أداة خارجية.

تعرض شاشة **تكاملات المشروع** موصلات التنفيذ المفعلة هذه بوصفها متاحة للربط عندما لا تكون مرتبطة بالمشروع بعد.

### الكتالوج الحالي لموصلات التنفيذ

| الموصل في الواجهة | الفائدة الرئيسية | إجراء مشروع نموذجي |
| --- | --- | --- |
| **Asta Powerproject schedule sync** | مزامنة الجداول الزمنية وbaselines المؤسسية | الربط عندما يجب أن تمر تحديثات التخطيط عبر قناة مشروع محكومة |
| **Azure DevOps delivery project** | إنشاء أو تحديث work items ومتابعة التسليم | الربط للفرق التي تستخدم Boards أو sprints أو backlogs تسليم |
| **Jira delivery workspace** | إنشاء أو تحديث issues ومتابعة التسليم | الربط عندما يجب تحويل المخاطر أو العوائق أو القرارات إلى tickets Jira محكومة |
| **Microsoft Project schedule sync** | مزامنة الجداول الزمنية في Microsoft Project | الربط عندما تدار الخطة الرئيسية في Microsoft Project |
| **Microsoft Teams collaboration** | إرسال رسائل تعاونية وإشعارات موافقة محكومة | الربط لإشعارات الفريق المتحكم فيها |
| **Outlook executive notifications** | إرسال رسائل بريد أو تذكيرات محكومة إلى stakeholders | الربط لتواصل رسمي إلى مستلمين محددين |
| **SharePoint publication library** | نشر آثار تمت مراجعتها في مكتبة SharePoint | الربط عندما يجب توزيع تسليمات PM المعتمدة عبر SharePoint |
| **Smartsheet portfolio workspace** | تحديث أوراق وبيانات المحفظة | الربط عندما تدار متابعة المحفظة في Smartsheet |
| **Webhook event delivery** | استدعاء endpoint مؤسسي أو داخلي محدد | الربط لأتمتة لاحقة مخصصة |
| **Wrike delivery workspace** | تحديث المهام والمسؤولين وتنسيق التسليم | الربط عندما يدعم Wrike العمل التشغيلي |

## مزودو الاستيعاب المرئيون

يستخدم مزودو الاستيعاب من أجل **إدخال محتوى** إلى ProPM Agent لإثراء **المعرفة**.

تفصل شاشة المشروع بين المزودين المرتبطين مسبقا والمزودين **Available to bind**. تختلف العدادات حسب tenant، لكن الشاشة تميز بين bindings سليمة وإدخالات كتالوج لا تزال تحتاج إلى binding مشروع أو تكوين منصة.

### الكتالوج الحالي لمزودي الاستيعاب

| المزود في الواجهة | الوضع أو المصدر المعروض | الفائدة الرئيسية | ملاحظة التحضير |
| --- | --- | --- | --- |
| **Smartsheet sheet import** | Smartsheet · Scheduled | تحديث أوراق المحفظة في المعرفة | يمكن أن يظهر مرتبطا و**Healthy** |
| **Azure Data Factory evidence pipeline** | ADF · Pipeline | استيراد الأدلة وRAID وتحديثات إعداد التقارير | يمكن أن يظهر مرتبطا و**Healthy** |
| **Asta Powerproject schedule import** | Asta Powerproject Import · Manual | استيراد snapshots وخطوط أساس الجدول الزمني | متاح للربط عندما يكون **Ready** |
| **Azure Blob document ingest** | Blob Storage · Scheduled | استيعاب التسليمات الوثائقية المحكومة وتحديثات الأرشيف | متاح للربط عندما يكون **Ready** |
| **Confluence knowledge import** | Confluence · Manual | استيراد صفحات wiki والمعرفة الإجرائية | يمكن أن يعرض **Not configured** حتى إكمال المصدر |
| **Jira issue import** | Jira · Scheduled | استيراد issues والعوائق وأدلة المتابعة | يمكن أن يعرض **Not configured** حتى إكمال المصدر |
| **Microsoft Project schedule import** | MS Project Import · Manual | استيراد baselines وتحديثات الجدول الزمني | متاح للربط عندما يكون **Ready** |
| **SFTP document intake** | SFTP · Scheduled | استيراد تسليمات مستندات من أطراف خارجية | يمكن أن يعرض **Not configured** حتى إكمال host والمجلد وcredentials |
| **SharePoint knowledge import** | SharePoint · Manual | استيراد مكتبات المعرفة وآثار إعداد التقارير | متاح للربط بعد تكوين الموقع والمكتبة |
| **Wrike task import** | Wrike · Scheduled | استيراد المهام والمسؤولين وأدلة workflow | متاح للربط بعد تكوين المساحة |

## موصلات حاضرة في عدة أدوار

تظهر بعض الأسماء في عدة أماكن من المنتج. هذا طبيعي: يظل مزود الاستيراد وموصل التنفيذ bindingين منفصلين.

| العائلة | دور الاستيراد | دور التنفيذ | القراءة الصحيحة |
| --- | --- | --- | --- |
| **SharePoint** | **SharePoint knowledge import** | **SharePoint publication library** | يمكنه قراءة المستندات ونشر أثر تمت مراجعته، لكن لكل دور setup وbinding خاصان به |
| **Jira** | **Jira issue import** | **Jira delivery workspace** | يمكنه استيراد سياق Jira ثم إنشاء ticket محكوم إذا كان موصل التنفيذ مرتبطا أيضا |
| **Microsoft Project** | **Microsoft Project schedule import** | **Microsoft Project schedule sync** | يمكنه إدخال أدلة التخطيط إلى المعرفة ومزامنة تغييرات الجدول الزمني المحكومة |
| **Smartsheet** | **Smartsheet sheet import** | **Smartsheet portfolio workspace** | يمكنه تحديث أدلة المحفظة وتحديث Smartsheet كوجهة تنفيذ |
| **Wrike** | **Wrike task import** | **Wrike delivery workspace** | يمكنه استيراد أدلة المهام التشغيلية وتحديث Wrike عبر إجراءات محكومة |
| **Asta Powerproject** | **Asta Powerproject schedule import** | **Asta Powerproject schedule sync** | يمكنه استيراد snapshots الجدول الزمني ومزامنة التغييرات المتحكم فيها |
| **Azure DevOps** | لا يوجد | **Azure DevOps delivery project** | متاح كموصل تنفيذ؛ يجب اعتماد أي مسار استيراد بشكل منفصل إذا كان متاحا |
| **ADF / Blob / Confluence / SFTP** | مزود استيعاب فقط | لا يوجد | تثري **المعرفة** ولا تتحول تلقائيا إلى وجهات إجراء |
| **Teams / Outlook / Webhook** | لا يوجد | موصل تنفيذ فقط | ترسل رسائل أو أحداثا محكومة ولا تستورد المعرفة تلقائيا |

## الكتالوج المدعوم مقابل الخيارات القابلة للتوسيع

يتوافق الكتالوج السابق مع الكتالوج التشغيلي المهيأ والمراقب والمعروض حاليا في **تكاملات المشروع**. يمكن أن تعرض **إدارة المنصة** أيضا عائلات إضافية أو مخصصة مثل GitHub أو GitLab أو ServiceNow أو Slack أو Notion أو Google Drive أو OneDrive أو Box أو Dropbox.

تعامل مع هذه الإدخالات الإضافية كامتدادات حتى يؤكد مسؤول التعريف التقني والحقول الإلزامية واستراتيجية المصادقة والاعتماد وbinding المشروع وسياسة الحوكمة المطبقة.

## الحد الأدنى من التكوين لكل موصل تنفيذ

الحقول التالية هي الحد الأدنى الذي يجب إكماله قبل استخدام `test` أو `live`. قد تختلف الأسماء قليلا حسب النموذج، لكن الفكرة هي نفسها: وجهة، وهوية مصادقة، وهدف مشروع صريح.

| الموصل | الحقول الدنيا قبل استخدام test/live | المصادقة النموذجية | Probe الاتصال إذا كان مفعلا |
| --- | --- | --- | --- |
| **Jira delivery workspace** | `base_url` أو `site_url`، و`project_key` | API key، basic، PAT، bearer token أو OAuth | يقرأ مشروع Jira الهدف |
| **Azure DevOps delivery project** | `organization_url` أو `organization`، و`project`، و`work_item_type` | PAT، bearer token أو OAuth | يتحقق من نوع work item في المشروع |
| **Microsoft Teams collaboration** | `team_id`، و`channel_id` | Microsoft Graph مع bearer token، OAuth، client credentials أو managed identity | يقرأ قناة Teams الهدف |
| **Outlook executive notifications** | `mailbox`، أو `user_id`، أو `user_principal_name` | Microsoft Graph مع bearer token، OAuth، client credentials أو managed identity | يتحقق من mailbox أو مستخدم Graph |
| **SharePoint publication library** | `site_id` أو `site_url`، و`drive_id` أو `library` | Microsoft Graph مع bearer token، OAuth، client credentials أو managed identity | يتحقق من الموقع والمكتبة |
| **Webhook event delivery** | `webhook_url` أو `endpoint_url` في HTTPS | دون auth، API key، bearer token، basic أو OAuth | يرسل `HEAD`، ثم `GET` عند الحاجة |
| **Microsoft Project schedule sync** | `project_id`، أو `portfolio`، أو `workspace` | Microsoft Graph مع bearer token، OAuth، client credentials أو managed identity | يستخدم endpoint أو path الخاص بالprobe المكوّن |
| **Smartsheet portfolio workspace** | `sheet_id` أو `workspace_id` | API key، bearer token، OAuth أو PAT | يقرأ ورقة Smartsheet أو workspace |
| **Wrike delivery workspace** | `folder_id`، أو `space_id`، أو `task_id` | bearer token أو OAuth | يقرأ مهمة Wrike أو المجلد |
| **Asta Powerproject schedule sync** | `base_url` أو `endpoint_url`، ثم `project_id`، أو `portfolio`، أو `schedule_id` | API key، bearer token، OAuth أو basic | يستخدم endpoint أو path الخاص بالprobe المكوّن |

## الحد الأدنى من التكوين لكل مزود استيعاب

يجب أن يحدد مزود الاستيعاب المصدر ووضع الاستيراد والهوية المستخدمة لقراءة ذلك المصدر. تتطلب الاستيرادات المجدولة أيضا وتيرة أو تنسيقا متوافقا.

| المزود | الحقول الدنيا قبل الاستخدام الحقيقي | المصادقة النموذجية | Probe الاتصال إذا كان مفعلا |
| --- | --- | --- | --- |
| **SharePoint knowledge import** | `site_id` أو `site_url`، و`drive_id` أو `library` | Microsoft Graph مع bearer token، OAuth، client credentials أو managed identity | يتحقق من المكتبة والعناصر الجذرية التابعة |
| **Azure Data Factory evidence pipeline** | `subscription_id`، و`resource_group_name`، و`factory` أو `factory_name`، و`pipeline` أو `pipeline_name` | managed identity، client credentials أو bearer token | يقرأ تعريف pipeline |
| **Azure Blob document ingest** | `account_url`، أو `storage_account`، أو `account_name`، ثم `container` | managed identity، SAS، bearer token أو client credentials | يسرد بعض blobs من container |
| **Confluence knowledge import** | `base_url`، و`space`، و`space_key` أو `space_id` | basic، bearer token أو OAuth | يتحقق من مساحة Confluence |
| **Jira issue import** | `base_url` أو `site_url`، ثم `project`، أو `project_key`، أو `jql` | API key، basic، PAT، bearer token أو OAuth | ينفذ بحث Jira محدودا |
| **SFTP document intake** | `host` أو `base_url`، و`username` أو `user`، و`folder` أو `path`، ومنفذ صالح إذا قُدم | basic، password أو SSH private key | يتحقق من وصول TCP إلى خادم SFTP |
| **Microsoft Project schedule import** | `project_id`، أو `portfolio`، أو `workspace` | Microsoft Graph مع bearer token، OAuth، client credentials أو managed identity | يستخدم endpoint أو path الخاص بالprobe المكوّن |
| **Smartsheet sheet import** | `sheet_id` أو `workspace_id` | API key، bearer token، OAuth أو PAT | يقرأ ورقة Smartsheet أو workspace |
| **Wrike task import** | `folder_id` أو `space_id` | bearer token أو OAuth | يقرأ المهام من المجلد أو المساحة |
| **Asta Powerproject schedule import** | `base_url` أو `endpoint_url`، ثم `project_id`، أو `portfolio`، أو `schedule_id` | API key، bearer token، OAuth أو basic | يستخدم endpoint أو path الخاص بالprobe المكوّن |

## الاعتماد وprobes وحدود runtime

| الخطوة | ما تؤكده | ما لا تضمنه |
| --- | --- | --- |
| **Save** | يتم حفظ التعريف على مستوى المنصة | ليس بالضرورة أن يكون قد تم الاتصال بالمصدر الخارجي |
| **Validate** | الحقول الإلزامية والوضع والمصادقة وURLs HTTPS متسقة | لا توجد مكالمة شبكة حقيقية إلا إذا كانت probes مفعلة |
| **Connectivity probe** | يستطيع ProPM Agent الوصول إلى endpoint غير هدمي لدى المزود | لا ينشئ tickets، ولا يرسل رسائل، ولا يطلق استيرادا كاملا |
| **Bind to project** | يستطيع المشروع استهلاك تعريف المنصة | ما زالت policy ودور المستخدم وhealth والاعتماد وreadiness الخاصة بالbinding قادرة على حظر الاستخدام |
| **Validate binding** | يظل binding المشروع متسقا مع تعريف المنصة | لا يحل محل إجراء أعمال أو استيراد حقيقي |

Probes الاتصال اختيارية صراحة. يمكن للمسؤول تفعيلها باستخدام `connectivity_probe_enabled` أو `run_connectivity_probe` أو `live_connectivity_check` أو بيانات وصفية مكافئة أو متغير بيئة على مستوى المنصة. دون هذا التفعيل، يظل الاعتماد فحصا للاتساق وreadiness.

إذا بقي موصل في وضع `mock` أو `test`، يمكن لـ ProPM Agent إدارة الطلب والحوكمة والموافقة والتتبع دون إرسال المكالمة النهائية بالضرورة إلى النظام الخارجي. يتطلب التنفيذ الحقيقي للمزود وضع موصل متوافقا، وتكوينا كاملا، وpolicy تسمح بذلك، وبيئة تتيح هذا المسار.

## الإجراءات المحكومة والموصل المطلوب

| إجراء المستخدم | نوع الإجراء الداخلي | الموصل المطلوب | الحد الأدنى من حقول الأعمال |
| --- | --- | --- | --- |
| نشر أثر في SharePoint | `publish_artifact_to_sharepoint` | `sharepoint_publish` | `artifact_id`، `destination_id` |
| إرسال رسالة Teams | `send_teams_message` | `teams` | `body` |
| إرسال رسالة Outlook | `send_outlook_message` | `outlook` | `body`، `recipients` |
| إنشاء ticket Jira | `create_jira_ticket` | `jira` | `title` |
| إنشاء work item Azure DevOps | `create_azure_devops_ticket` | `azure_devops` | `title` |

تتم تسوية بعض التسميات القديمة تلقائيا. على سبيل المثال، يتحول `send_message` إلى `send_teams_message`، و`send_email` إلى `send_outlook_message`، و`create_work_item` إلى `create_azure_devops_ticket`، و`publish_sharepoint_artifact` إلى `publish_artifact_to_sharepoint`.

## الحالات والعوائق وترتيب التشخيص

| الحالة أو العائق المرئي | القراءة العملية | أول إجراء موصى به |
| --- | --- | --- |
| **Ready** أو **available** | يمكن ربط التعريف أو استخدامه إذا كان باقي السلسلة مفتوحا | تحقق من binding المشروع وpolicy |
| **Healthy** | آخر اعتماد معروف إيجابي | أكد أن المشروع مرتبط |
| **Not configured** | توجد حقول أو مصدر أو وجهة أو credentials مفقودة | أكمل التعريف في إدارة المنصة |
| **Not validated** أو **not_tested** | التعريف موجود لكنه لم يمر بعد بالاعتماد أو الاختبار المتوقع | شغل Validate أو الprobe المناسب |
| **Blocked by health** | صحة المنصة متدهورة أو غير صالحة | تحقق من endpoint وauth وscopes والشبكة |
| **Blocked by entitlement** | wording قديم لتكامل محظور؛ في خطط Marketplace ليست فرقا في الوظائف | تحقق من configuration وhealth وbinding وpolicy والدور وتوفر الترخيص إذا كان العائق متعلقا بالوصول |
| **Blocked by policy** | تمنع حوكمة المشروع هذا الإجراء أو نوع الاستخدام | عدل السياسة أو الدور |
| **Binding disabled** | binding المشروع موجود لكنه معطل | أعد تفعيله أو أعد إنشاءه إذا كان مسموحا |
| **Missing platform definition** | يشير المشروع إلى تعريف غائب أو محذوف | أعد إنشاء تعريف المنصة أو صححه |

أكثر ترتيب مفيد للتشخيص هو: تعريف المنصة، والتكوين الإلزامي، والاعتماد أو الprobe، وbinding المشروع، وpolicy، وإذن المستخدم، وحمولة الإجراء أو الاستيراد، ثم توفر الترخيص إذا لم يتمكن المستخدم من الوصول إلى التطبيق.

## الاستيراد والمخرج الخارجي والتدقيق

| الموضوع | ما يتتبعه ProPM Agent | ما يجب التحقق منه في الأداة الخارجية |
| --- | --- | --- |
| استيراد المعرفة | ingest run، والمزود، وbinding، وsource label، والحداثة، والعدادات، وTrace ID | الحجم المتاح، وحقوق المصدر، والمرشحات، والملفات المتروكة، وإزالة التكرار |
| نشر SharePoint | طلب الإجراء، والموافقة، والموصل، والوجهة، وTrace ID | URL النهائي، والمكتبة، وأذونات الكتابة، والإصدار المنشور |
| Jira أو Azure DevOps | الإجراء، والتبرير، وpayload الأعمال، وTrace ID | مفتاح ticket أو work item الذي تم إنشاؤه، والمشروع الهدف، ونوع item |
| Teams أو Outlook | الطلب، والمستلمون أو القناة المنطقية، والموافقة، وTrace ID | التسليم الحقيقي، والقناة، وmailbox، والرفض المحتمل من Graph |
| Webhook | endpoint منطقي، وحالة المحاولة، والاستجابة أو الخطأ، وTrace ID | كود HTTP، والاستجابة المقتطعة، واعتماد التوقيع، وإعادة المحاولة لاحقا |

لا تضع أبدا سرا في payload الأعمال لإجراء أو في ملاحظة مستخدم. يجب أن تبقى الأسرار والمفاتيح والمراجع الحساسة في تكوين المنصة المخصص لذلك الاستخدام.

## الأمان والمصادقة

| العائلة | المصادقات المقبولة عادة | نقطة انتباه |
| --- | --- | --- |
| Microsoft Graph وTeams وOutlook وSharePoint وMicrosoft Project | bearer token، OAuth، client credentials أو managed identity | حصر scopes في المواقع أو صناديق البريد أو القنوات أو المشاريع اللازمة |
| Jira وConfluence | API key، basic، PAT، bearer token أو OAuth حسب المنتج | استخدام حسابات تقنية بأقل امتياز |
| Azure DevOps | PAT، bearer token أو OAuth | حصر الحقوق في المشروع وأنواع work item المتوقعة |
| Azure Data Factory وBlob Storage | managed identity، client credentials، SAS أو bearer token حسب الخدمة | تفضيل managed identities وحصر containers أو pipelines التي يمكن الوصول إليها |
| SFTP | basic، password أو SSH private key | التحقق من تدوير المفتاح والمنفذ والمجلد الجذر المصرح به |
| Webhook | دون auth، API key، bearer token، basic أو OAuth | اشتراط HTTPS أو توقيع أو سر من جهة endpoint عندما يبرر الخطر ذلك |

## مثال 1 - SharePoint من البداية إلى النهاية

SharePoint أحد أفضل الأمثلة لفهم المنطق الكامل.

### ما يستطيع SharePoint فعله

- استيراد المستندات إلى **المعرفة**؛
- العمل كـ **وجهة أثر**؛
- استقبال **نشر محكوم** عبر **SharePoint publish**.

### المسار خطوة بخطوة

1. يجهز المسؤول SharePoint في **إدارة المنصة**؛
2. يسترجع المشروع binding SharePoint في **تكاملات المشروع**؛
3. يستورد الفريق مستندات موجودة في **المعرفة**؛
4. تتم صياغة مستند PM أو مراجعته؛
5. تقرر سياسة الحوكمة من يستطيع اقتراح نشر أو تنفيذه؛
6. يمر النشر عبر **الإجراءات والموافقات** إذا كان الاعتماد مطلوبا؛
7. تبقى قابلية التتبع النهائية مرئية في نشاط المشروع و**سجل الذكاء الاصطناعي**.

### فوائد SharePoint في ProPM Agent

- يعيد استخدام مستودع وثائقيا معروفا مسبقا لدى الفرق؛
- يسمح بربط الاستيراد والمراجعة الوثائقية والنشر النهائي؛
- يناسب تدفقات الاعتماد الرسمية.

## مثال 2 - Jira من البداية إلى النهاية

### ما يستطيع Jira فعله

- استيراد issues والتعليقات كسياق؛
- استقبال ticket محكوم من قرار أو إشارة؛
- تجسيد عائق في نظام متابعة خارجي.

### المسار خطوة بخطوة

1. يتم تجهيز Jira في **إدارة المنصة**؛
2. يفتح للمشروع في **تكاملات المشروع**؛
3. يراجع الفريق إشارة أو قرارا؛
4. ينشئ إجراء **إنشاء ticket Jira**؛
5. تقرر الحوكمة ما إذا كان الإجراء مباشرا أو خاضعا للموافقة؛
6. يتم إنشاء ticket عندما يكون تنفيذ live للمزود مفعلا؛ وفي جميع الحالات، يظل الطلب والقرار متتبعين في المنتج.

### فوائد Jira في ProPM Agent

- يحول ملاحظة مشروع إلى ticket رسمي؛
- يحافظ على قابلية تتبع واضحة بين الإشارة والتبرير وticket الذي تم إنشاؤه؛
- يتجنب إجراءات يدوية غير متتبعة.

## مثال 3 - Teams أو Outlook للنشر

### الفائدة

- يستخدم **Teams** لنشر إشعار في الأداة التعاونية؛
- يستخدم **Outlook** لإرسال تواصل أكثر رسمية عبر البريد الإلكتروني.

### التكامل مع ProPM Agent

1. يجهز الموصل على مستوى المنصة؛
2. يراه المشروع كخيار تنفيذ؛
3. تحدد policy الأدوار التي يمكنها إرسال رسالة؛
4. يعد الفريق الرسالة في **الإجراءات والموافقات**؛
5. حسب الخطر، تتم الموافقة على الإجراء ثم تنفيذه عندما يسمح وضع الموصل بذلك؛
6. تبقى قابلية تتبع الرسالة محفوظة تاريخيا حتى إذا كان الإرسال الخارجي محظورا أو مؤجلا.

### الفائدة الرئيسية

لا يخرج النشر كرسالة حرة: بل يبقى **محكوما، ومراجعا، وقابلا للتتبع**.

## مثال 4 - Webhook event delivery

### متى تستخدمه

استخدم **Webhook event delivery** عندما يجب على ProPM Agent استدعاء endpoint داخلي أو تابع لطرف خارجي محدد بعد قرار محكوم.

### التكامل مع ProPM Agent

- في الكتالوج الحالي، Webhook هو **موصل تنفيذ**؛
- اربطه بالمشروع فقط بعد اعتماد endpoint المنصة و`health`؛
- إذا أضيف لاحقا استيعاب webhook وارد، فتعامل معه كمزود استيعاب منفصل، مع اعتماد وbinding مشروع خاصين به.

### الفائدة الرئيسية

يوفر Webhook delivery مرونة للأتمتات المخصصة دون تحويل التدفق إلى مخرج غير متحكم فيه.

## كيفية التعرف على أن موصلا جاهز فعلا

لقراءة حالة موصل بشكل صحيح، ميز بين ثلاث حالات بسيطة:

| الوضع | ما يعنيه |
| --- | --- |
| الموصل مرئي في **إدارة المنصة** | موجود تقنيا |
| الموصل مرئي في **تكاملات المشروع** | يستطيع المشروع استخدامه محتملًا |
| يظهر الموصل في **الإجراءات والموافقات** كخيار سليم ومصرح به | يمكن اقتراح الإجراء أو تنفيذه فعلا حسب السياسة |

## لماذا قد يبقى موصل مرئي محظورا

يمكن أن يكون الموصل مرئيا لكنه غير قابل للاستخدام إذا:

- كانت حالة **health** تتطلب تحققا؛
- لم يكن binding المشروع مفتوحا أو سليما أو مكونا؛
- حظرت **policy** المشروع الاستخدام؛
- لم يكن لدى المستخدم **permission** الصحيح؛
- لم يتم فتح binding المشروع بعد؛
- لم تكن وجهة الأثر المتوقعة مكونة.

## قراءة بسيطة

| إذا لاحظت... | تحقق أولا من... |
| --- | --- |
| الموصل موجود على مستوى المنصة لكنه لا يظهر في المشروع | **تكاملات المشروع** |
| يظهر في المشروع لكن لا يخرج أي إجراء | **سياسات الحوكمة** وأذونات الدور |
| الإجراء مرئي لكن لا يظهر أي خيار سليم | صحة الموصل، وbinding المشروع، وخيار التنفيذ المتوافق |
| يقترح الاستيراد لكنه لا يعيد شيئا | مزود الاستيعاب، والمصدر القابل للوصول فعلا، وحداثة البيانات |
| لا يكتمل نشر SharePoint | وجهة الأثر، والسياسة، والموافقة، وموصل **SharePoint publish** |

## التدفق الموصى به لفريقك

1. حدد الأدوات المفيدة فعلا للمشروع؛
2. جهز الموصلات في **إدارة المنصة**؛
3. افتح للمشروع الموصلات الجاهزة فقط؛
4. كوّن **سياسات الحوكمة** حسب الدور؛
5. اختبر أول استيراد أو إجراء مع التمييز بين readiness وprobe والتنفيذ الحقيقي للمزود؛
6. تحقق من قابلية التتبع النهائية في **سجل الذكاء الاصطناعي**.

## ما يجب تذكره

- يميز ProPM Agent بوضوح بين **الاستيراد** و**النشر** و**الإجراء الخارجي**؛
- يمكن أن يظهر الاسم نفسه، مثل **SharePoint** أو **Jira**، في عدة أدوار؛
- تعتمد القراءة الصحيحة للموصل دائما على ثلاثة أسئلة: هل هو معرف؟ هل هو مفتوح للمشروع؟ هل تصرح به الحوكمة؟

## التالي

- [الحوكمة والقرارات والإجراءات](./gouvernance-decisions-et-actions.md)
- [المشاريع ومساحة العمل](./projets-et-espace-de-travail.md)
- [المحفظة والإدارة التقنية](./portefeuille-et-administration-technique.md)
- [التقارير وسجل الذكاء الاصطناعي والتتبع](./rapports-journal-ia-et-tracabilite.md)
