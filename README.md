# William Website - React + TypeScript version

This is a Vite + React + TypeScript conversion of the original static HTML website.

## What was added

- The website is split into TSX components in `src/components/`.
- The `My Resources` section is generated from data instead of repeated HTML.
- Resource dates are formatted as `YYYY/MM/DD`.
- The resource list is sorted from latest to oldest in `src/components/ResourceList.tsx`.
- A build-time script detects local file modified dates from files in `public/document/`.

## How to run

Install Node.js first. Then run:

```bash
npm.cmd install
npm.cmd run dev
```

To build the final static website:

```bash
npm.cmd run build
```

## How resource dates work

Edit resource information here:

```text
scripts/resourcesBase.mjs
```

Then run:

```bash
npm.cmd run generate-resources
```

The script generates:

```text
src/data/resources.ts
```

The generated file should not be edited directly.

For each resource, the script checks `dateSourceHref`, for example:

```js
dateSourceHref: "/document/Fluid Dynamics.pdf"
```

It then looks for the actual file at:

```text
public/document/Fluid Dynamics.pdf
```

If the file exists, it uses the file modified date and formats it as:

```text
YYYY/MM/DD
```

If the file is missing, the date becomes empty unless you provide `fallbackDate`.

## Important note

The uploaded zip used here did not include the files inside `document/`, so most automatically detected dates are currently empty. Put your PDF/doc files into:

```text
public/document/
```

Then run:

```bash
npm.cmd run generate-resources
```

The dates will be detected automatically.

## Main files to look at

```text
scripts/resourcesBase.mjs          resource data you edit
scripts/generateResources.mjs      date detection script
src/data/resources.ts              generated resource data
src/components/ResourceList.tsx    sorting implementation
src/components/MyResources.tsx     resource section
src/App.tsx                        page structure
```
