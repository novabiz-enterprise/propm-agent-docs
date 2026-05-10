---
title: Actions और approvals
slug: /actions-et-approbations
description: governed actions propose, approve, reject और execute करें।
---

# Actions और approvals

Governed action signal, document या connector flow से बन सकती है और policy के अनुसार approval मांग सकती है।

## Action propose करना

1. signal, PM Document या action page खोलें।
2. action चुनें, जैसे SharePoint publish या Jira ticket।
3. content, destination और justification जाँचें।
4. action submit करें।
5. status देखें।

## Approve या reject

1. **Actions & approvals** खोलें।
2. pending actions filter करें।
3. details खोलें।
4. evidence, destination, impact और requester देखें।
5. **Approve** या **Reject** चुनें।

## Approved executed नहीं है

**Approved** = authorized। **Executed** = वास्तव में चला। External actions को connector, project binding, policy, role, health और live mode की आवश्यकता हो सकती है।

## Blockers

| Blocker | अर्थ |
| --- | --- |
| Insufficient role | propose या approve नहीं कर सकते |
| require approval | approval mandatory |
| deny | policy action रोकती है |
| Not bound | project connected नहीं |
| Not healthy | connector/provider ready नहीं |
