---
title: Knowledge (documents + search)
---

## Purpose

**Knowledge** is the project document hub and retrieval surface. It supports ingestion tracking, classification, and project-scoped search.

![Knowledge page](../../static/img/screenshots/05-knowledge.png)

You can:

- Upload project documents
- Track ingestion/indexing status
- Search project knowledge with source references

## Why this matters

Knowledge centralizes evidentiary artifacts used by agents, PM Docs, and governance reviews. It reduces information sprawl and improves auditability.

## Who can use it

- **View/search documents:** Project Owner, Project Manager, Contributor, Viewer, Auditor
- **Upload and manage documents:** Project Owner, Project Manager, Contributor

## Before you begin

- Select a project.
- Prepare files and naming conventions (recommended: include date/version in filenames).

## Supported file types (ingestion)

By default, the system extracts and indexes content from:
- **PDF** (best effort via Azure Document Intelligence)
- **DOCX**
- **XLSX** (sheets are concatenated as text)
- **CSV**
- **HTML/HTM**
- **Images** (OCR via Azure Document Intelligence)

Extraction can be toggled with env flags:
- `ENABLE_EXTRACT_XLSX`, `ENABLE_EXTRACT_CSV`, `ENABLE_EXTRACT_HTML`

## Steps

### Upload a document

1. Open **Knowledge**.
2. Select a **category**.
3. Select a file.
4. Select **Upload**.
5. Select **Refresh** to update the list.

### Review seeded demo documents

In the default demo project (`demo-hotel-001`), the Knowledge area is preloaded with realistic documents so you can demonstrate search and ingestion immediately.

Recommended demo assets include:

- `ABH-SteerCo-Status-Week-42.pdf`
- `ABH-Risk-Register-v1.2.xlsx`
- `ABH-Procurement-Plan.docx`
- `ABH-Communication-Plan.docx`
- `ABH-Weekly-Status-Week-43.pdf`
- `ABH-Scenario-Test-Matrix.xlsx`

Use these seeded files to validate category coverage, ingestion states, and search behavior before uploading anything new.

### Importer en batch avec Azure Data Factory (ADF)

Utilisez ADF si vous voulez automatiser des imports depuis des sources externes (SaaS, DB, fichiers) en respectant le flux officiel **Documents → Ingestion → Search**.

1. Déployez ADF dans le tenant client et configurez les secrets Key Vault requis.
2. Importez les artefacts ADF fournis (pipelines, datasets, linked services).
3. Configurez les paramètres du pipeline (APIM, tenant, project, fichier, metadata).
4. Lancez le pipeline (manuel ou trigger planifié).

Référence d’implémentation (dans le dépôt source) : `repo/adf/README.md`

### Check ingestion / indexing status

1. In **Knowledge**, review the **Status** column.
2. Wait until the document moves to an “indexed” or “ready” type status before expecting it to appear in search.

### Search project knowledge

1. In **Search**, enter a question or keywords.
2. Select **Search**.
3. Review results:
   - The **snippet** (the matched content)
   - The **source** reference (where the snippet came from)
   - Optional page/section information (when available)

## Expected results

- Uploaded documents appear in the list.
- Search returns results with source references to support verification.
- The default demo project starts with seeded documents and categories already ready for walkthroughs.

## Common issues

- **Document not searchable yet**: indexing can take time after upload.
- **Upload fails**: confirm you have a role that allows uploads.
- **Search fails**: retry, then capture the trace ID (if shown) and contact your administrator.
- **XLSX or images not searchable**: check that Document Intelligence and the extraction flags are enabled.

## Tips

- Keep categories stable to support portfolio comparability.
- Use search results as evidence: verify important outputs by reviewing the referenced sources.
- For ADF batch loads, keep file sizes aligned with SAS expiry and use consistent metadata for governance.
- For demos, search terms like `chiller`, `SteerCo`, `procurement`, or `communication` to surface the seeded hotel documents quickly.

