import { defineConfig } from 'astro/config';

// Storyblok integration is added in the CMS-wiring phase (needs STORYBLOK_TOKEN).
// During the design-port phase the site builds as static HTML with no external calls.
export default defineConfig({
  site: 'https://www.lmebuildingcontractors.uk',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
