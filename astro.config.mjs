// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://getting-started-astro.netlify.app/",
  integrations: [preact()]
});