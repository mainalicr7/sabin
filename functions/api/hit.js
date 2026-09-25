// Cloudflare Pages Function: receives visit beacons from /t.js and forwards a cleaned row to a private
// Google Apps Script (Sheet + Gmail reports). The visitor's IP is never read or forwarded; only the
// country, region and city Cloudflare already resolved are added. Accepts the homepage (always) and the
// OKTAI preview pages (until END). Off when the secrets are missing.
const END = Date.UTC(2026, 9, 5, 18, 15); // 2026-10-06 00:00 Nepal time, OKTAI pages only
const OKTAI = /^\/preview\/oktai(\/|$)/;
const MAX_BODY = 2048;
const BOTS = /bot|crawl|spider|slurp|facebookexternalhit|embedly|preview|headless|lighthouse|pagespeed/i;

const clean = (v, n) => String(v ?? '').replace(/[^\x20-\x7E]/g, '').trim().slice(0, n);
const num = (v, max) => Math.max(0, Math.min(max, Math.round(Number(v) || 0)));

const noContent = () => new Response(null, { status: 204, headers: { 'Cache-Control': 'no-store' } });

export async function onRequestPost({ request, env, waitUntil }) {
  try {
    if (!env.TRACK_ENDPOINT || !env.TRACK_SECRET) return noContent();

    const host = new URL(request.url).host;
    const origin = request.headers.get('Origin');
    if (!origin || new URL(origin).host !== host) return noContent();
    if (BOTS.test(request.headers.get('User-Agent') || '')) return noContent();
    if (Number(request.headers.get('Content-Length') || 0) > MAX_BODY) return noContent();

    const text = await request.text();
    if (text.length > MAX_BODY) return noContent();
    const b = JSON.parse(text);
    if (b.t !== 'v' && b.t !== 'l') return noContent();

    const cf = request.cf || {};
    const row = {
      secret: env.TRACK_SECRET,
      t: b.t,
      id: clean(b.id, 16),
      p: clean(b.p, 120),
      h: clean(b.h, 40),
      f: clean(b.f, 30),
      r: clean(b.r, 80),
      tz: clean(b.tz, 40),
      l: clean(b.l, 16),
      d: clean(b.d, 8),
      s: num(b.s, 86400),
      sd: num(b.sd, 100),
      sec: Array.isArray(b.sec) ? b.sec.slice(0, 30).map((x) => clean(x, 40)).filter(Boolean).join(' | ') : '',
      country: clean(cf.country, 4),
      region: clean(cf.region, 60),
      city: clean(cf.city, 60),
    };
    if (!row.id) return noContent();
    const oktai = OKTAI.test(row.p);
    if (!oktai && row.p !== '/') return noContent();
    if (oktai && Date.now() > END) return noContent();

    waitUntil(
      fetch(env.TRACK_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(row),
      }).catch(() => {}),
    );
  } catch (e) {
    // Malformed beacons are dropped silently.
  }
  return noContent();
}

export function onRequest() {
  return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST', 'Cache-Control': 'no-store' } });
}
