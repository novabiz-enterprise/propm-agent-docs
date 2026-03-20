---
title: Post-deployment — find the app URL and sign in
---

Once the Marketplace deployment finishes, you can access ProPM Agent.

## Who can do this

- **Tenant Admin / Installer**
- **Project Owner / Project Manager / Contributor / Viewer / Auditor** (sign-in)

## Steps

1. In Azure Portal, open the **Managed Application** resource created by the deployment.
2. Locate the **outputs** or **deployment outputs** section.
3. Record these values if they are shown:
   - `webContainerFqdn`
   - `apiGatewayUrl`
   - `apimGatewayUrl`
4. Open `webContainerFqdn` in a browser.
5. Select **Sign In with Microsoft**.
6. If this is the first sign-in for your tenant, complete the tenant consent step if prompted.

## Expected results

- You can sign in successfully.
- You land on the **Dashboard**.
- The frontend is already wired to the correct runtime API configuration for the deployed environment.

## Verify access quickly

After sign-in, try one simple action:

1. Open **Projects**.
2. Confirm you can see at least one project, or import the demo project, or (if you are a Project Owner) create one.

## Save these values for validation and support

- Keep the deployment output values noted above.
- If you plan to capture live screenshots later, keep the exact **authenticated application URL** after sign-in. That URL can be reused for the manual-login Playwright capture flow.

## Common issues

- **The outputs are hard to find**: open the Managed Application resource first, then inspect the deployment outputs from the deployment history.
- **You can’t sign in**: confirm the deployment completed successfully and escalate with the deployment output values if the problem looks identity-related.
- **Access denied after sign-in**: confirm your account has been granted the appropriate application or workspace access.

## Screenshot planning for this page

Planned screenshots tied to this page:

- `marketplace-deployment-outputs.png` — Managed Application outputs showing the web and API endpoints.
- `app-dashboard-after-sign-in.png` — Dashboard landing page immediately after successful sign-in.
- `app-projects-first-view.png` — Projects page used as the first quick validation step.

