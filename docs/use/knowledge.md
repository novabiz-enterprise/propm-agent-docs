---
title: Knowledge (documents + search)
---

## Purpose

**Knowledge** is your project’s document library and search experience.

You can:

- Upload project documents
- Track ingestion/indexing status
- Search your project knowledge with source references

## Why this matters

Knowledge standardizes how evidence is stored and retrieved, reducing manual effort and improving audit readiness.

## Who can use it

- **View documents and search:** Project Owner, Project Manager, Contributor, Viewer, Auditor
- **Upload documents:** Project Owner, Project Manager, Contributor

## Before you begin

- Select a project.
- Prepare the file(s) you want to upload.

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

## General extraction & ingestion flow

All uploads (including ADF batches) follow the same pipeline:

1. **Upload** via the Documents service (SAS URL).
2. **Blob ingestion** extracts text with the best available extractor:
   - Azure Document Intelligence (PDF, images, scanned content)
   - Built‑in parsers (DOCX, XLSX, CSV, HTML)
3. **Chunking + indexing** into Azure AI Search.

This means any supported file type is searchable as long as extraction is enabled.

## Steps

### Upload a document

1. Open **Knowledge**.
2. Select a **category**.
3. Select a file.
4. Select **Upload**.
5. Select **Refresh** to update the list.

### Batch import with Azure Data Factory (ADF)

Use ADF to automate imports from external sources (SaaS, databases, files) while respecting the official **Documents → Ingestion → Search** flow.

1. Deploy ADF in the customer tenant and configure the required Key Vault secrets.
2. Import the provided ADF assets (pipelines, datasets, linked services).
3. Configure pipeline parameters (APIM, tenant, project, file, metadata).
4. Run the pipeline (manual or scheduled trigger).

Implementation reference: [ADF README](https://github.com/robertsmaoui/ProPM-Agent/blob/main/repo/adf/README.md)

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

## Common issues

- **Document not searchable yet**: indexing can take time after upload.
- **Upload fails**: confirm you have a role that allows uploads.
- **Search fails**: retry, then capture the trace ID (if shown) and contact your administrator.
- **XLSX or images not searchable**: check that Document Intelligence and the extraction flags are enabled.

## Tips

- Keep categories stable to support portfolio comparability.
- Use search results as evidence: verify important outputs by reviewing the referenced sources.
- For ADF batch loads, keep file sizes aligned with SAS expiry and use consistent metadata for governance.

