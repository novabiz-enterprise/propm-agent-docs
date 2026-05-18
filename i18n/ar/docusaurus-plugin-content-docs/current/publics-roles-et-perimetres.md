---
title: الجماهير، والأدوار، والنطاقات
slug: /publics-roles-et-perimetres
description: اختيار مسار الوثائق الصحيح بحسب الدور في ProPM Agent.
---

# الجماهير، والأدوار، والنطاقات

تساعد هذه الصفحة على اختيار الوثائق المناسبة بحسب مسؤولية المستخدم.

## لمن

| الملف الشخصي | الاستخدام |
| --- | --- |
| مستخدم أعمال | العمل يوميا من دون تفاصيل Azure الداخلية |
| Project Owner | إدارة الأعضاء، والأدوار، والحوكمة، وتكاملات المشروع |
| مسؤول Azure أو tenant | النشر، وإعداد الذكاء الاصطناعي، والتراخيص، والتكاملات، والتحديثات |
| الدعم أو التدقيق | العثور على عمليات التشغيل، وTrace IDs، ومعلومات التشخيص |

## مستويات الوثائق

| المستوى | يحتوي على | لا يحتوي على |
| --- | --- | --- |
| المستخدم النهائي | الخطوات، والأدوار، والنتائج المتوقعة | Secrets، وpayloads الخام، والبنية التحتية |
| Project Owner | الأدوار، والسياسات، وتكاملات المشروع | المصادقة التقنية وsecrets |
| مسؤول Azure | Marketplace، وEntra، والذكاء الاصطناعي، والتراخيص، والتحديثات | تدفقات الأعمال اليومية |
| الدعم | Run ID، وTrace ID، والمزود الفعلي | كلمات المرور، أو الرموز المميزة، أو البيانات الحساسة |

## المسارات الموصى بها

| الدور | ابدأ بـ | بعد ذلك |
| --- | --- | --- |
| مستخدم جديد | [البداية](./demarrage.md) | [التنقل](./interface-et-navigation.md)، [لوحة المعلومات](./tableau-de-bord.md) |
| مساهم | [المعرفة](./connaissance-documents-et-imports.md) | [الوكلاء](./agents.md)، [مستندات PM](./documents-pm-et-artefacts.md) |
| Project Owner | [التحكم في الوصول](./controle-acces-et-roles.md) | [الحوكمة](./gouvernance-decisions-et-actions.md) |
| مسؤول tenant | [Azure وEntra](./admin-deploiement-marketplace-et-entra.md) | [مزود الذكاء الاصطناعي](./admin-fournisseur-ia.md)، [التراخيص](./admin-licences-plans-et-mises-a-jour.md) |
| الدعم | [التشخيص](./support-audit-et-diagnostic.md) | [سجل الذكاء الاصطناعي](./journal-ia.md)، [الأسئلة الشائعة](./maintenance-support-faq.md) |

## قاعدة الأمان

لا تشارك أبدا secrets، أو كلمات مرور، أو رموزا مميزة، أو payloads حساسة كاملة في طلب دعم.
