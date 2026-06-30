import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// On-demand (server) rendering on Vercel so the site can:
//  - show published content within seconds of a Storyblok publish (edge-cached), and
//  - render DRAFT content live inside the Storyblok visual editor.
export default defineConfig({
  site: 'https://lmebuildingcontractors.uk',
  output: 'server',
  adapter: vercel(),
});
