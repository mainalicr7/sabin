# Sabin Mainali - portfolio website

Personal portfolio of Sabin Mainali, AI-native product manager. Static site built with Astro 7 and Tailwind CSS 4, deployed on Cloudflare Pages.

## Run it locally

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # builds to dist/
npm run verify     # checks dist/ (run after build)
npm run check      # TypeScript and Astro diagnostics
```

`npm run verify` fails the run if it finds non-ASCII punctuation, invalid JSON-LD, broken internal links or anchors, a page without exactly one `h1`, missing meta tags, or words that suggest confidential employer data (revenue terms, percentages, dollar amounts, vendor names).

## Change text and links

Almost everything personal lives in one file: `src/data/site.ts`.

- `profile` - name, role, bio, location, freelance availability.
- `links` - LinkedIn, Contra, GitHub, email, booking link. **An empty string hides that link everywhere.** Add your Contra profile URL here and "Hire me on Contra" appears on every call to action.
- `disciplines`, `services`, `engagementTypes`, `method`, `principles` - the "What I do", Services and How I work sections.
- `experience`, `education`, `certifications`, `events`, `skillGroups` - About page and CV.
- `faqs` - FAQ blocks and their FAQ schema.
- `analytics.cloudflareToken` - optional Cloudflare Web Analytics token. Empty means no analytics script.
- `LAST_UPDATED` - the date shown in the footer, CV and llms.txt.

The About story paragraphs are in `src/pages/about.astro`. The home hero copy is in `src/pages/index.astro`.

## Add a case study

1. Copy any file in `src/content/work/` to a new file, for example `src/content/work/my-project.mdx`. The file name becomes the URL: `/work/my-project/`.
2. Edit the frontmatter:
   - `title` (max 90 characters), `summary` (60 to 200 characters)
   - `disciplines`: any of `product, design, content, data, sales, motion, ai`
   - `role`, `context`, `outcome`, `stack`
   - `order`: position in lists (1 is first)
   - `featured: true` to show it on the home page (the first 4 by order are shown)
   - `published` and `updated` dates (`YYYY-MM-DD`)
3. Write the body with `## Context`, `## Problem`, `## My role`, `## Approach`, `## What I built`, `## Outcome`, `## What I learned`.
4. Optional process diagram: `import Flow from '../../components/Flow.astro';` then `<Flow label="..." steps={[{ title: '...', detail: '...' }]} />`.
5. Run `npm run build && npm run verify`.

The Open Graph image, sitemap entry, llms.txt entry, JSON-LD and previous/next links are generated automatically.

**Confidentiality rule:** no Calilio revenue, margins, user counts, pricing internals, vendor contract terms, funding or exit details, customer names or internal screenshots. Outcomes stay qualitative unless a number is approved.

## Deploy (Cloudflare Pages via GitHub Actions)

Cloudflare Pages was chosen because the free plan has unlimited requests and bandwidth, never pauses a site, and Cloudflare Registrar sells domains at cost.

Every push to `main` runs `.github/workflows/deploy.yml`: install, build, `verify --production`, then `wrangler pages deploy dist` to the `sabinmainali` project (created on the first run if it does not exist). It can also be started by hand from **Actions > Deploy to Cloudflare Pages > Run workflow**.

One-time setup:

1. Cloudflare: **My Profile > API Tokens > Create Token > Custom token**, permission **Account > Cloudflare Pages > Edit**, limited to your account.
2. GitHub repo: **Settings > Secrets and variables > Actions > New repository secret**: `CLOUDFLARE_API_TOKEN` (the token) and `CLOUDFLARE_ACCOUNT_ID` (from the dashboard URL or the account home page).
3. The live address is set in the workflow as `PUBLIC_SITE_URL`. Change it there when a custom domain is added.

The contact form needs a Web3Forms access key in `WEB3FORMS_KEY` (`src/pages/contact/index.astro`). Security headers and asset caching live in `public/_headers`.

Custom domain: **Workers & Pages > sabinmainali > Custom domains > Set up a domain**, then update `PUBLIC_SITE_URL` in the workflow and push. HTTPS is automatic.

## What is inside

- `src/pages/` - Home, Work, case study template, Services, AI Lab, About, CV (print to PDF), Contact, thank-you page, 404, plus `llms.txt`, `robots.txt` and OG image endpoints.
- `src/components/SystemMap.astro` - the interactive discipline map in the hero.
- `src/lib/seo.ts` - JSON-LD builders (Person, WebSite, BreadcrumbList, FAQPage).
- `public/_headers` - security headers (CSP, HSTS, nosniff, frame and referrer policy) and asset caching for Cloudflare Pages.
- Fonts are self-hosted through Fontsource (Fraunces and Instrument Sans). No third-party requests by default.
