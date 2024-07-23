/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_WC_READ_KEY
  readonly PUBLIC_WC_READ_PASSWORD

  readonly PUBLIC_EMAILJS_SERVICE_ID
  readonly PUBLIC_EMAILJS_TEMPLATE_ID
  readonly PUBLIC_EMAILJS_PUBLIC_KEY

  readonly PUBLIC_ALGOLIA_APP_ID
  readonly PUBLIC_ALGOLIA_SEARCH_KEY
  readonly PUBLIC_ALGOLIA_INDEX_NAME
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}