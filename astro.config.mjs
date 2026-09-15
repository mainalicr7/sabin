// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// The public URL is resolved from the host's build environment, so canonical
// links, the sitemap and OG tags are always correct without editing code.
// Order: explicit override -> Netlify -> Vercel -> Cloudflare Pages -> local.
function resolveSite() {
  const env = process.env;
  if (env.PUBLIC_SITE_URL) return env.PUBLIC_SITE_URL;
  if (env.NETLIFY && env.CONTEXT === 'production' && env.URL) return env.URL;
  if (env.NETLIFY && env.DEPLOY_PRIME_URL) return env.DEPLOY_PRIME_URL;
  if (env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (env.CF_PAGES_URL) return env.CF_PAGES_URL;
  return 'http://localhost:4321';
}

export default defineConfig({
  site: resolveSite(),
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  // Keep straight quotes: the site copy is ASCII-only by rule.
  markdown: { smartypants: false },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/contact/thanks') && !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
