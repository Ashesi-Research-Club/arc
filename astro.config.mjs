// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  vite: {
    envPrefix: ['PUBLIC_', 'SUPABASE_', 'NUXT_']
  },
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [mdx()]
});