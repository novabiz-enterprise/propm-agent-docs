---
title: التراخيص والخطط والتحديثات
slug: /admin-licences-plans-et-mises-a-jour
description: إدارة تراخيص المستخدمين وخطة Marketplace وتغيير الخطة والبيانات الموجودة والتحديثات.
---

# التراخيص والخطط والتحديثات

Azure Marketplace هو المصدر للشراء والسعر والفوترة. يعرض ProPM Agent الإمكانات والمستخدمين المكتشفين.

لتحديث صور التطبيق in-place استخدم **Deployment & Updates**. لتغيير الخطة أو تحديث رئيسي مع بيانات موجودة، أنشئ نشرا جديدا من Marketplace واختر **Attach existing ProPM data resources**.

## العدادات

| العداد | المعنى |
| --- | --- |
| Ordered seats | السعة المشتراة |
| Included seats | المقاعد المضمنة في الخطة |
| Supplemental seats | المقاعد المشتراة بشكل إضافي |
| Used seats | التراخيص المستخدمة |
| Remaining seats | التراخيص المتبقية |

## إدارة المستخدمين

1. افتح **Platform Administration**.
2. افتح **Tenant plan and licensed users**.
3. راجع قائمة المستخدمين.
4. استخدم **Release user** فقط إذا لم يعد المستخدم بحاجة إلى الوصول.

## Refresh Marketplace plan

يزامن المعلومات المعروفة. لا يشتري تراخيص، ولا يغير الخطة، ولا يعدل الفوترة.

## تغيير الخطة أو تحديث رئيسي مع بيانات موجودة

استخدم هذا التدفق عندما تحتاج Managed Application جديدة من Marketplace مع الحفاظ على بيانات ProPM الموجودة.

1. افتح Azure Marketplace.
2. اختر الخطة الهدف.
3. أنشئ نشر ProPM جديدا.
4. اختر **Attach existing ProPM data resources**.
5. أدخل Resource ID الكامل لـ ProPM Managed Application السابقة.
6. اترك overrides فارغة إلا إذا طلب الدعم أو المعمارية ذلك.
7. راجع cutover والإدارة وCORS والمراقبة وكلمة مرور SQL وVNet CIDR.
8. اختر **Review + create**.

## شاشة التحديث 1 - إرفاق البيانات الموجودة

![Attach existing ProPM data resources لتحديث النشر](/img/deploiement/propm-update-attach-existing-data.png)

| الحقل | إلزامي | ماذا تكتب | التوصية |
| --- | --- | --- | --- |
| **Environment Name** | نعم | اسم قصير للبيئة، مثل `prod` أو `uat` أو `test`. | استخدم قيمة ثابتة وغير سرية. |
| **Installation mode** | نعم | **Attach existing ProPM data resources**. | ينشئ طبقة تطبيق جديدة ويعيد استخدام موارد البيانات الموجودة. |
| **Previous ProPM Managed Application resource ID** | نعم | Resource ID الكامل لـ ProPM Managed Application السابقة. | انسخ **Id** من **Properties**، وليس الأسماء فقط. |
| **Existing Storage account resource ID (optional override)** | لا | Resource ID لحساب التخزين الموجود. | اتركه فارغا افتراضيا. |
| **Existing Azure AI Search service resource ID (optional override)** | لا | Resource ID لخدمة Azure AI Search الموجودة. | املأه فقط عند فشل الاكتشاف التلقائي. |
| **Existing SQL server resource ID (optional override)** | لا | Resource ID لخادم SQL الموجود. | يحدد الخادم وليس قاعدة البيانات. |
| **Existing SQL database name (optional override)** | لا | اسم قاعدة SQL الموجودة. | استخدمه فقط إذا لم يتم اكتشافه تلقائيا. |
| **Existing Cosmos DB account resource ID (optional override)** | لا | Resource ID لحساب Cosmos DB الموجود. | فقط عند حاجة صريحة. |
| **Existing Document Intelligence account resource ID (optional override)** | لا | Resource ID لحساب Document Intelligence الموجود. | لمورد خارجي أو مخصص. |
| **Existing Service Bus namespace resource ID (optional override)** | لا | Resource ID لـ Service Bus namespace الموجود. | اتركه فارغا افتراضيا. |
| **Previous** | لا | الرجوع إلى الخطوة السابقة. | لا يبدأ النشر. |
| **Next** | لا | الانتقال إلى الخطوة التالية. | بعد إكمال الحقول المطلوبة. |
| **Review + create** | لا | تحقق Azure قبل الإنشاء. | استخدمه في النهاية. |

## شاشة التحديث 2 - Cutover والمنصة

![إعدادات cutover والمنصة لتحديث النشر](/img/deploiement/propm-update-cutover-settings.png)

| الحقل | إلزامي | ماذا تكتب | التوصية |
| --- | --- | --- | --- |
| **Existing Event Grid topic resource ID (optional override)** | لا | Resource ID لموضوع Event Grid الموجود. | املأه فقط عند فشل الاكتشاف التلقائي. |
| **Block previous deployment during cutover** | لا، موصى به | حظر البيئة السابقة أثناء التحقق. | يمنع الكتابة المتوازية في البيانات نفسها. |
| **Platform Administration Entra Group Object IDs** | نعم | Object IDs لمجموعات Entra الخاصة بإدارة المنصة. | استخدم Object IDs، لا أسماء العرض. |
| **Platform Administration Bootstrap Users (optional)** | لا | مستخدمو bootstrap أو الاسترداد. | أبقها محدودة. |
| **Allow Azure RBAC admin recovery** | لا | استرداد عبر Azure RBAC. | أبقه إذا كانت الحوكمة تسمح بذلك. |
| **Reuse previous AI provider configuration** | موصى به | إعادة استخدام إعداد الذكاء الاصطناعي السابق. | حقول الذكاء الاصطناعي تصبح مخفية؛ يمكن التغيير لاحقا من Platform Administration. |
| **CORS Allowed Origins** | بحسب السيناريو | أصول ويب إضافية. | اتركه فارغا إذا لم تكن مطلوبة. |
| **Enable alerting (Azure Monitor)** | لا | تفعيل تنبيهات Azure Monitor. | موصى به للإنتاج. |
| **Enable debug logging** | لا | تفعيل سجلات مفصلة. | للتشخيص المضبوط فقط. |
| **Password** | نعم | كلمة مرور مسؤول SQL الخاصة بـ ProPM الموجودة. | مطلوبة للاتصال بقاعدة البيانات المعاد استخدامها. تعامل معها كسِر. |
| **Confirm password** | نعم | القيمة نفسها مثل **Password**. | يجب أن تتطابق. |
| **VNet CIDR** | نعم | نطاق خاص، مثل `10.0.0.0/16`. | تحقق منه مع فريق الشبكة وتجنب التداخل. |

## Updates

راجع **Deployment & Updates** في نافذة مضبوطة واحتفظ بمعلومات الدعم للرجوع إلى الإصدار السابق إذا لزم الأمر. لا تستخدمه لتغيير الخطة أو الانتقال إلى بيانات موجودة.
