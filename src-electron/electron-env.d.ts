declare namespace NodeJS {
  interface ProcessEnv {
    APP_URL: string;
    QUASAR_ELECTRON_PRELOAD_EXTENSION: string;
    QUASAR_ELECTRON_PRELOAD_FOLDER: string;
    QUASAR_PUBLIC_FOLDER: string;
  }
}
