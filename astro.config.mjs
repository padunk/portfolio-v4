import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import { loadEnv } from "vite";
import react from "@astrojs/react";
import { sanityIntegration as sanity } from "@sanity/astro";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
const { SANITY_PROJECT_ID, SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  ""
);

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sanity({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET,
      useCdn: false,
    }),
    expressiveCode({
      themes: ["dracula"],
    }),
  ],
  output: "server",
  adapter: vercel(),
});
