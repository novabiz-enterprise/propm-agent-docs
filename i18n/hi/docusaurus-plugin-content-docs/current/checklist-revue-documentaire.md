---
title: दस्तावेज़ समीक्षा चेकलिस्ट
slug: /checklist-revue-documentaire
description: customer publication या release से पहले documentation review checklist।
---

# Documentation review checklist

## Checks

| Area | Check |
| --- | --- |
| Navigation | user, Project Owner, Azure admin, security और support paths अलग हैं |
| Roles | action pages audience और prerequisites बताती हैं |
| Product | UI labels और agent names current हैं |
| Security | end-user pages में secrets, tokens, raw payloads या infrastructure variables नहीं हैं |
| Procedures | steps में expected result और common blockers हैं |
| Images | current screenshots और useful alt text हैं |
| Links | internal links current pages पर जाते हैं |
| Build | `npm run build` सफल है |

## Release process

1. `npm run build` चलाएँ।
2. broken links/images ठीक करें।
3. duplicate French sources search में न हों, verify करें।
4. home, user page, admin page और support page review करें।
5. [Release notes](./release-notes.md) update करें।
