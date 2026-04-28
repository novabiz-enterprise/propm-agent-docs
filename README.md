# ProPM Agent — End-user documentation (Docusaurus)

This folder contains the **end-user** documentation for **ProPM Agent**.

## Goals

- Keep the content **public-safe** (no internal endpoints, no implementation details, no secrets).
- Document **only features that exist in the product UI**.
- Keep language **enterprise-friendly** and **task-oriented**.

## Local preview (optional)

```bash
npm install
npm run start
```

## Build (optional)

```bash
npm run build
```

## Publish to GitHub Pages (recommended)

This repository is configured to publish the docs to GitHub Pages via:

- `.github/workflows/docs-pages.yml`

1) In GitHub, open **Settings → Pages**

2) Set **Build and deployment** → **Source** to **GitHub Actions**

3) Push the latest docs changes to the `main` branch

4) Wait for the workflow run to complete in **Actions**

To enable Pages (one-time):

1) In GitHub, open **Settings → Pages**

2) Set **Build and deployment** → **Source** to **GitHub Actions** and save

3) Wait for the workflow run to complete in **Actions**

Expected public URL:

- https://robertsmaoui.github.io/propm-agent-docs/

