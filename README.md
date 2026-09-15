# Sabin Mainali - portfolio website

Personal portfolio of Sabin Mainali, AI-native product manager. Static site built with Astro 7 and Tailwind CSS 4, deployed on Netlify.

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

## Deploy (Netlify)

Netlify was chosen because it has built-in form handling (the contact form works with no server code), a free `*.netlify.app` address, automatic deploys from GitHub and preview deploys for pull requests.

1. Push this folder to a GitHub repository.
2. In Netlify: **Add new site > Import an existing project > GitHub**, pick the repository. Build settings are read from `netlify.toml` (`npm run build`, publish `dist`).
3. Deploy. Canonical URLs, the sitemap and OG tags use Netlify's site URL automatically.
4. In **Site configuration > Forms**, confirm the `contact` form was detected, then add an email notification under **Form notifications** so briefs reach your inbox.
5. Optional: rename the site under **Site configuration > Site details** to get a nicer `your-name.netlify.app` address.

Later, with a custom domain: add it in **Domain management**; HTTPS is automatic. If you set `PUBLIC_SITE_URL` in Netlify environment variables, that URL wins over the default.

### Other hosts

The site is plain static files, so Cloudflare Pages and Vercel also work (build `npm run build`, output `dist`). The site URL is detected from their build variables too. Two differences: the contact form needs Netlify, so replace it with a form service or a Worker on those hosts, and the security headers in `netlify.toml` must be moved to that host's header config.

## What is inside

- `src/pages/` - Home, Work, case study template, Services, AI Lab, About, CV (print to PDF), Contact, thank-you page, 404, plus `llms.txt`, `robots.txt` and OG image endpoints.
- `src/components/SystemMap.astro` - the interactive discipline map in the hero.
- `src/lib/seo.ts` - JSON-LD builders (Person, WebSite, BreadcrumbList, FAQPage).
- `netlify.toml` - build settings, security headers (CSP, HSTS, nosniff, frame and referrer policy) and asset caching.
- Fonts are self-hosted through Fontsource (Fraunces and Instrument Sans). No third-party requests by default.
