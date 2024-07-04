/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_WC_READ_KEY
  readonly PUBLIC_WC_READ_PASSWORD
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}