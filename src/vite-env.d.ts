/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STAGING_GATE?: string;
  readonly VITE_STAGING_PASSWORD_HASH?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
