---
title: Projects
---

## Purpose

**Projects** is the project directory and creation entrypoint. Use it to open existing workspaces or create new projects when authorized.

## Why this matters

Every feature in ProPM Agent is project-scoped (Knowledge, Agents, PM Docs, AI Log). Choosing the correct project context is essential for correct data and governance boundaries.

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
4. Use this project for demos of chat history, PM Docs editing/export, Knowledge flows, AI Log history, and access-control walkthroughs.

### Delete the default demo project

1. In **Projects**, find the row marked **Default demo project**.
2. Click **Delete demo**.
3. Confirm the delete action.
4. Verify the demo project disappears from the directory.
5. Re-import it later with **Import demo project** when you need the seeded environment again.

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

## Common issues

- **No Create button**: you are not authenticated or the page failed to load correctly.
- **Cannot open project**: membership or role issue.
- **No Import demo project button**: the default demo project is already installed.

## Tips

- Apply consistent naming conventions (program prefix, geography, year).
- For demos, use seeded project `Azure Bay Hotel & Convention Center` to showcase full PM lifecycle artifacts.
- Use the demo-project import/delete cycle to reset walkthrough conditions before recordings or training sessions.

