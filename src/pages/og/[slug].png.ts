import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import satori from 'satori';
import sharp from 'sharp';
import { profile } from '../../data/site';

// Open Graph images are rendered at build time: 1200x630 PNG per page.

const fontDir = (pkg: string) => join(process.cwd(), 'node_modules', '@fontsource', pkg, 'files');
const fraunces = readFileSync(join(fontDir('fraunces'), 'fraunces-latin-400-normal.woff'));
const sans = readFileSync(join(fontDir('instrument-sans'), 'instrument-sans-latin-500-normal.woff'));

const pages: Record<string, { title: string; label: string }> = {
  home: { title: 'I run product, design, data, content and AI as one system.', label: 'Product manager' },
  work: { title: 'Case studies in product, design, content, data and AI.', label: 'Work' },
  services: { title: 'Freelance product, design, content, data and AI work.', label: 'Services' },
  about: { title: 'From IT operations to AI-native product management.', label: 'About' },
  'ai-lab': { title: 'Skills, hooks and memory that run my work.', label: 'AI Lab' },
  contact: { title: 'Tell me the problem you want solved.', label: 'Contact' },
};

export const getStaticPaths: GetStaticPaths = async () => {
  const work = await getCollection('work');
  const workPages = Object.fromEntries(
    work.map((w) => [`work-${w.id}`, { title: w.data.title, label: 'Case study' }]),
  );
  return Object.entries({ ...pages, ...workPages }).map(([slug, props]) => ({ params: { slug }, props }));
};

type Node = { type: string; props: Record<string, unknown> };
const el = (type: string, style: Record<string, unknown>, children?: unknown): Node => ({
  type,
  props: { style, children },
});

export const GET: APIRoute = async ({ props }) => {
  const { title, label } = props as { title: string; label: string };
  const size = title.length > 60 ? 60 : 72;

  const tree = el(
    'div',
    {
      width: '1200px',
      height: '630px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '72px 80px',
      background: '#0e1013',
      color: '#ece6dc',
      fontFamily: 'Instrument Sans',
    },
    [
      el('div', { display: 'flex', alignItems: 'center', gap: '16px', fontSize: '28px', color: '#a39e95' }, [
        el('div', { width: '14px', height: '14px', borderRadius: '999px', background: '#aab8ff' }),
        el('div', { display: 'flex' }, label),
      ]),
      el('div', { display: 'flex', fontFamily: 'Fraunces', fontSize: `${size}px`, lineHeight: 1.08, letterSpacing: '-1.5px', maxWidth: '1000px' }, title),
      el('div', { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #2a2e35', paddingTop: '28px' }, [
        el('div', { display: 'flex', fontFamily: 'Fraunces', fontSize: '36px' }, profile.name),
        el('div', { display: 'flex', fontSize: '24px', color: '#a39e95' }, `${profile.location.city}, ${profile.location.country}`),
      ]),
    ],
  );

  const svg = await satori(tree as unknown as Parameters<typeof satori>[0], {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Fraunces', data: fraunces, weight: 400, style: 'normal' },
      { name: 'Instrument Sans', data: sans, weight: 500, style: 'normal' },
    ],
  });
  const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();

  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
