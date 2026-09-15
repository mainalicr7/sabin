// Post-build checks for the static site in dist/.
// Run: npm run build && npm run verify
// Fails (exit 1) on: non-ASCII characters in shipped text, invalid JSON-LD,
// broken internal links or anchors, missing/duplicate h1, missing meta tags,
// and words that suggest confidential employer data leaked into the copy.

import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const DIST = 'dist';
// On a real deploy build (Cloudflare Pages sets CF_PAGES=1) localhost URLs are a failure.
const PRODUCTION =
  process.argv.includes('--production') || process.env.CF_PAGES === '1' || process.env.NETLIFY === 'true';
const problems = [];
const warn = (file, msg) => problems.push(`${file}: ${msg}`);

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

if (!existsSync(DIST) || readdirSync(DIST).length === 0) {
  console.error('dist/ not found. Run npm run build first.');
  process.exit(1);
}

const files = walk(DIST);
const html = files.filter((f) => f.endsWith('.html'));
if (html.length === 0) {
  console.error('verify: no HTML pages found in dist/. Did the build fail?');
  process.exit(1);
}
const text = files.filter((f) => /\.(html|txt|xml)$/.test(f));

// Map every built page to its set of element ids, for link and anchor checks.
const pages = new Map();
for (const f of html) {
  const rel = '/' + relative(DIST, f).split(sep).join('/');
  const route = rel.endsWith('/index.html') ? rel.slice(0, -'index.html'.length) : rel;
  const src = readFileSync(f, 'utf8');
  const ids = new Set([...src.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  pages.set(route, { file: f, src, ids });
}
const assetExists = (path) => existsSync(join(DIST, decodeURIComponent(path)));

// Words that must never appear in public copy (see MASTER_PROMPT section 2).
const confidential = [
  /\bARR\b/,
  /\bMRR\b/,
  /\bmargin(s)?\b/i,
  /\bTwilio\b/i,
  /\bfunding\b/i,
  /\bexit\b(?! (the|a) )/i,
  /\binvestor(s)?\b/i,
  /\$\s?\d/,
  /\b\d+(\.\d+)?\s?%/,
  /\buser count/i,
];

for (const f of text) {
  const src = readFileSync(f, 'utf8');
  const bad = [...src.matchAll(/[^\x00-\x7F]/g)];
  if (bad.length) {
    const sample = [...new Set(bad.map((m) => `U+${m[0].codePointAt(0).toString(16).toUpperCase().padStart(4, '0')}`))];
    warn(f, `non-ASCII characters: ${sample.slice(0, 6).join(', ')}`);
  }
}

for (const [route, { file, src }] of pages) {
  const visible = src
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ');

  const h1 = (src.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) warn(file, `expected 1 h1, found ${h1}`);

  const noindex = src.includes('content="noindex');
  for (const tag of ['<title>', 'name="description"', ...(noindex ? [] : ['rel="canonical"']), 'property="og:image"', 'lang="en"']) {
    if (!src.includes(tag)) warn(file, `missing ${tag}`);
  }

  const ld = [...src.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  if (ld.length === 0) warn(file, 'no JSON-LD block found');
  if (PRODUCTION && /(rel="canonical"|property="og:image")[^>]*localhost/.test(src)) warn(file, 'canonical or og:image points to localhost');
  for (const m of ld) {
    try {
      JSON.parse(m[1]);
    } catch (e) {
      warn(file, `invalid JSON-LD: ${e.message}`);
    }
  }

  for (const m of src.matchAll(/\shref="([^"]+)"/g)) {
    const href = m[1];
    if (/^(https?:|mailto:|tel:)/.test(href)) continue;
    const [pathPart, hash] = href.split('#');
    const path = pathPart === '' ? route : pathPart.split('?')[0];
    if (path.startsWith('/')) {
      const normalized = path.endsWith('/') ? path : path + '/';
      const target = pages.get(normalized) || pages.get(path);
      if (!target && !assetExists(path)) {
        warn(file, `broken link ${href}`);
        continue;
      }
      if (hash && target && !target.ids.has(hash)) warn(file, `missing anchor ${href}`);
    }
  }

  for (const re of confidential) {
    const hit = visible.match(re);
    if (hit) warn(file, `confidentiality check matched "${hit[0]}" - review before publishing`);
  }
}

if (problems.length) {
  console.error(`verify: ${problems.length} problem(s)\n` + problems.map((p) => `  - ${p}`).join('\n'));
  process.exit(1);
}
console.log(`verify: OK - ${html.length} HTML pages, ${text.length} text files checked (ASCII, h1, meta, JSON-LD, links, anchors, confidentiality).`);
