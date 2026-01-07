
  # Add Surveys Module

  This is a code bundle for Add Surveys Module. The original project is available at https://www.figma.com/design/OlohYpePqnwzRtFN8YH2Ht/Add-Surveys-Module.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Airtable Surveys Integration

  The app fetches up to 3 active surveys from an Airtable table and embeds the selected Typeform in an iframe.

  Required environment variables (create a `.env.local` file at the project root):

  - `VITE_AIRTABLE_BASE` — your Airtable base ID (eg. `appXXXXXXXX`)
  - `VITE_AIRTABLE_TABLE` — the table name (eg. `Surveys`)
  - `VITE_AIRTABLE_TOKEN` — a personal Airtable token with read access (keep this secret)

  Example `.env.local`:

  ```env
  VITE_AIRTABLE_BASE=appXXXXXXXX
  VITE_AIRTABLE_TABLE=Surveys
  VITE_AIRTABLE_TOKEN=pat_XXXXXXXX
  ```

  Notes:
  - The client currently requests Airtable directly, so `VITE_AIRTABLE_TOKEN` is present in the browser bundle. For production use, consider adding a server-side proxy to avoid exposing the token.
  - The Airtable table should include fields: `Title`, `TypeformURL` (the embed URL), `Status` (use value `active` for available surveys), and `Date Created` (or rely on record `createdTime`).

  After adding the `.env.local` file, restart the dev server.
  