import { bindings, defineConfig, defineWorker } from "cf/config";

export default defineConfig({
  accountId: "eaf577cd880ba79970a74fd1e0c60b60",
  worker: defineWorker({
    name: "good-film-ai",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-11-11",
    assets: {
      htmlHandling: "none",
      notFoundHandling: "none",
      runWorkerFirst: ["/*", "!/_next/static/*", "!/*/_next/static/*"],
    },
    env: {
      ASSETS: bindings.assets(),
    },
  }),
});
