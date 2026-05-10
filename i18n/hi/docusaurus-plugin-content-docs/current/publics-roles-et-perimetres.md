---
title: दर्शक, भूमिकाएँ और दायरे
slug: /publics-roles-et-perimetres
description: ProPM Agent में अपनी भूमिका के अनुसार सही दस्तावेज़ीकरण मार्ग चुनें।
---

# दर्शक, भूमिकाएँ और दायरे

यह पृष्ठ बताता है कि Business user, Project Owner, Azure administrator और Support किस दस्तावेज़ से शुरू करें।

## किसके लिए

| प्रोफ़ाइल | उपयोग |
| --- | --- |
| Business user | Azure के आंतरिक विवरणों के बिना दैनिक कार्य समझना |
| Project Owner | सदस्य, भूमिकाएँ, governance और project integrations प्रबंधित करना |
| Azure/Tenant admin | deployment, Entra, AI provider, licenses और updates प्रबंधित करना |
| Support/Audit | runs, Trace IDs और diagnostic जानकारी ढूँढना |

## दस्तावेज़ीकरण स्तर

| स्तर | शामिल है | शामिल नहीं है |
| --- | --- | --- |
| End user | चरण, roles, expected results | secrets, raw payloads, infrastructure details |
| Project Owner | project roles, policies, integrations | connector secrets और low-level auth |
| Azure admin | Marketplace, Entra, AI provider, licenses | दैनिक business workflows |
| Support/Audit | Run ID, Trace ID, effective provider | passwords, tokens, sensitive data |

## अनुशंसित मार्ग

| भूमिका | पहले खोलें | फिर |
| --- | --- | --- |
| नया उपयोगकर्ता | [शुरुआत](./demarrage.md) | [Navigation](./interface-et-navigation.md), [Dashboard](./tableau-de-bord.md) |
| Contributor | [Knowledge](./connaissance-documents-et-imports.md) | [Agents](./agents.md), [PM Documents](./documents-pm-et-artefacts.md) |
| Project Owner | [Access control](./controle-acces-et-roles.md) | [Governance](./gouvernance-decisions-et-actions.md) |
| Tenant admin | [Azure और Entra](./admin-deploiement-marketplace-et-entra.md) | [AI provider](./admin-fournisseur-ia.md), [Licenses](./admin-licences-plans-et-mises-a-jour.md) |
| Support | [Support diagnostics](./support-audit-et-diagnostic.md) | [AI Log](./journal-ia.md), [FAQ](./maintenance-support-faq.md) |

## सुरक्षा नियम

Support request में secrets, passwords, tokens या पूरा sensitive payload कभी साझा न करें।
