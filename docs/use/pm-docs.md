---
title: PM Docs (edit DOCX + export XLSX)
---

## Purpose

**PM Docs** is the structured output workspace for project documents created by agents and users. DOCX-ready content can be edited in Markdown, and XLSX files can be exported for local spreadsheet editing.

![PM Docs editor](../../static/img/screenshots/06-pm-doc-editor.png)

## Why this matters

PM Docs standardizes formal artifacts (charter, risk register, status output, etc.) and keeps edits, status, and export actions inside the governed project context.

## Who can use it

- **View/download DOCX/XLSX:** all project members
- **Edit and add to Knowledge:** Project Owner, Project Manager, Contributor
- **Delete:** Project Owner, Project Manager

## Before you begin

- Select a project.
- Ensure PM Docs exist (seeded docs are provided in demo mode).
- For the demo path, use **Azure Bay Hotel & Convention Center** (`demo-hotel-001`) where seeded PM Docs are preloaded.

## Steps

### Find and filter PM Docs

1. Open **PM Docs**.
2. Use filters (title/category/creator/status) and sorting to find the right document.

### Use seeded PM Docs in the default demo project

The default demo project includes pre-seeded PM Docs so you can demonstrate editing and export immediately. Typical seeded categories include:

- Project Charter
- Risk Register
- Communications Management Plan
- Status Report
- Test Plan
- Procurement Management Plan

### Edit a PM Doc

1. Select **Edit** on the row.
2. Update:
   - **Title**
   - **Status** (draft/final)
   - **Category**
   - **Source (Markdown for DOCX editing)**
3. Select **Save**.

> The web editor is for DOCX-ready content only. XLSX files are generated for download and should be edited locally on your computer.

### Validate export payload after edit (recommended)

1. Add a unique marker line in **Source (Markdown)** (for example `EXPORT_VALIDATION_TOKEN_HOTEL_42`).
2. Save.
3. Download **DOCX** and **XLSX**.
4. Verify the exported file content includes the marker (engineering validation step used in demo automation).

### Export a DOCX

1. Select **Download DOCX**.
2. Save the file.

### Export an XLSX

1. Select **Download XLSX**.
2. Save the file.
3. Open the file locally in Excel or a compatible desktop spreadsheet app to continue editing.

### Add a PM Doc to Knowledge (optional)

1. Select **Add to Knowledge**.
2. Confirm the document shows **In Knowledge**.

## Expected results

- DOCX draft updates are saved.
- DOCX/XLSX exports download successfully.
- Added PM Docs can be treated as part of project Knowledge.
- Edited DOCX-ready content is reflected in exported DOCX/XLSX artifacts.
- The default demo project already contains enough PM Docs to demonstrate filtering, editing, exporting, and add-to-Knowledge flows.

## Common issues

- **No PM Docs found**: your project may not have any PM Docs yet.
- **Add to Knowledge is disabled**: the PM Doc has already been added.
- **Delete fails**: your role may not allow deletion.

## Tips

- Use **final** status for documents that are ready for stakeholder distribution.
- Use **Add to Knowledge** to make key artefacts searchable.

