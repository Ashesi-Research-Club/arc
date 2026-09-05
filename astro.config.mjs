import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  vite: {
    envPrefix: ['PUBLIC_', 'SUPABASE_', 'NUXT_']
  },
  adapter: netlify(),
  integrations: [mdx()]
});