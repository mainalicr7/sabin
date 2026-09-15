import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { profile, links, disciplines, services, experience, faqs, LAST_UPDATED } from '../data/site';

// llms.txt: a plain-text map of the site for AI assistants and answer engines.
export const GET: APIRoute = async ({ site }) => {
  const url = (path: string) => new URL(path, site).toString();
  const work = (await getCollection('work')).sort((a, b) => a.data.order - b.data.order);

  const lines = [
    `# ${profile.name}`,
    '',
    `> ${profile.shortBio}`,
    '',
    `Last updated: ${LAST_UPDATED}`,
    '',
    '## Key facts',
    '',
    `- Name: ${profile.name}`,
    `- Role: ${profile.jobTitle} at ${profile.employer.name} (${profile.employer.url}), ${profile.employer.description}`,
    `- Based in: ${profile.location.city}, ${profile.location.country}, ${profile.location.timezone}`,
    `- Working since: ${profile.experienceSince}`,
    `- Freelance status: ${profile.availability.open ? profile.availability.label : 'Not taking projects right now'}`,
    `- LinkedIn: ${links.linkedin}`,
    ...(links.contra ? [`- Contra: ${links.contra}`] : []),
    '',
    '## Pages',
    '',
    `- [Home](${url('/')}): who Sabin is, what he does, selected work`,
    `- [Work](${url('/work/')}): all case studies`,
    `- [Services](${url('/services/')}): freelance services and ways to work together`,
    `- [AI Lab](${url('/ai-lab/')}): the Claude Code setup behind the work, in plain language`,
    `- [About](${url('/about/')}): story, experience, education, events`,
    `- [CV](${url('/cv/')}): printable CV`,
    `- [Contact](${url('/contact/')}): send a project brief`,
    '',
    '## Case studies',
    '',
    ...work.map((w) => `- [${w.data.title}](${url(`/work/${w.id}/`)}): ${w.data.summary}`),
    '',
    '## Disciplines',
    '',
    ...disciplines.map((d) => `- ${d.name}: ${d.summary}`),
    '',
    '## Services',
    '',
    ...services.map((s) => `- ${s.title}: ${s.answer}`),
    '',
    '## Experience',
    '',
    ...experience.map((e) => `- ${e.period}: ${e.role}, ${e.org}. ${e.summary}`),
    '',
    '## FAQ',
    '',
    ...faqs.flatMap((f) => [`### ${f.q}`, '', f.a, '']),
  ];

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
