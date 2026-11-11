import { bindings, defineConfig, defineWorker, triggers } from "cf/config";

export default defineConfig({
  accountId: "eaf577cd880ba79970a74fd1e0c60b60",
  worker: defineWorker({
    name: "good-film-ai",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-11-11",
    triggers: [
      triggers.fetch({ pattern: "goodfilm.ai/*", zone: "goodfilm.ai" }),
      triggers.fetch({ pattern: "www.goodfilm.ai/*", zone: "goodfilm.ai" }),
    ],
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
