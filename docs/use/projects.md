---
title: Projects
---

## Purpose

**Projects** is the project directory and creation entrypoint. Use it to open existing workspaces or create new projects when authorized.

## Why this matters

Every feature in ProPM Agent is project-scoped (Knowledge, contextual runs, PM Docs, signals, actions, AI Log). Choosing the correct project context is essential for correct data and governance boundaries.

## Who can use it

- **Browse/open projects:** users with project access
- **Create projects:** any authenticated user

## Before you begin

- Sign in.

## Steps

### Browse/open a workspace

1. Open **Projects**.
2. Filter by name/description.
3. Open the target project workspace.

### Import the default demo project

1. In **Projects**, click **Import demo project** if the default demo project is not already installed.
2. Wait for the success message and automatic redirect.
3. Confirm the imported project is **Azure Bay Hotel & Convention Center**.
4. Confirm the workspace header shows a demo-project badge and project id `demo-hotel-001`.

### Open the default demo project

1. In **Projects**, search for **Azure Bay Hotel & Convention Center**.
2. Open the project workspace.
3. Confirm project id is `demo-hotel-001` in the workspace header section.
4. Use this project for demos of chat history, structured outputs, evidence freshness, PM Docs editing/export, Knowledge flows, AI Log history, signals, governance tabs, and approval walkthroughs.

### Use the multi-project comparison pack

Several synthetic projects are seeded alongside the hotel demo project so you can demonstrate portfolio comparison and evidence-backed outliers. Recommended comparison sets include:

- **Azure Bay Hotel & Convention Center** + **ERP Modernization** + **Data Platform Expansion**
- **Contact Center Upgrade** when you want a visibly higher schedule and cost pressure example
- **Security Hardening Program** when you want a lower-risk comparator

### Delete the default demo project

1. In **Projects**, find the row marked **Default demo project**.
2. Click **Delete demo**.
3. Confirm the delete action.
4. Verify the demo project disappears from the directory.
5. Re-import it later with **Import demo project** when you need the seeded environment again.

If you are running a local demo-mode build and want a fully clean reset, refresh the browser after re-importing so the latest seeded chats, documents, and PM Docs are loaded.

### Create a project

1. Click **Create project**.
2. Provide:
   - **Name** (required)
   - **Description** (optional)
   - **Project ID** (optional, if your governance standard requires one)
3. Click **Create**.
4. Confirm redirect to the new workspace.
5. Confirm you are now the primary administrator of that project.

## Expected results

- Project appears in the project list.
- Workspace opens with selected project context saved in top switcher.
- The creator receives project-admin access automatically for the new project.
- The default demo project can be removed and re-imported without any additional tenant setup.
- Seeded comparison projects remain available for portfolio drill-down and outlier demonstrations.

## Common issues

- **No Create button**: you are not authenticated or the page failed to load correctly.
- **Cannot open project**: membership or role issue.
- **No Import demo project button**: the default demo project is already installed.

## Tips

- Apply consistent naming conventions (program prefix, geography, year).
- For demos, use seeded project `Azure Bay Hotel & Convention Center` to showcase contextual outputs, artifacts, and approvals.
- Use the seeded comparison projects to demonstrate portfolio outliers, freshness drift, and contradictions.
- Use the demo-project import/delete cycle to reset walkthrough conditions before recordings or training sessions.

