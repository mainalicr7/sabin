import {
  profile,
  links,
  education,
  certifications,
  disciplines,
  skillGroups,
} from '../data/site';

export function absolute(site: URL | undefined, path: string): string {
  const base = site ?? new URL('http://localhost:4321');
  return new URL(path, base).toString();
}

export function sameAs(): string[] {
  return [links.linkedin, links.contra, links.github].filter(Boolean);
}

export function personNode(site: URL | undefined) {
  return {
    '@type': 'Person',
    '@id': absolute(site, '/#person'),
    name: profile.name,
    givenName: profile.givenName,
    familyName: profile.familyName,
    jobTitle: profile.jobTitle,
    description: profile.shortBio,
    url: absolute(site, '/'),
    image: absolute(site, '/og/home.png'),
    address: {
      '@type': 'PostalAddress',
      addressLocality: profile.location.city,
      addressCountry: 'NP',
    },
    worksFor: {
      '@type': 'Organization',
      name: profile.employer.name,
      url: profile.employer.url,
    },
    alumniOf: education
      .filter((e) => e.orgUrl)
      .map((e) => ({ '@type': 'CollegeOrUniversity', name: e.org, url: e.orgUrl })),
    hasCredential: certifications.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      name: c.name,
      recognizedBy: { '@type': 'Organization', name: c.issuer },
    })),
    knowsAbout: [
      ...disciplines.map((d) => d.name),
      ...skillGroups.flatMap((g) => g.skills).slice(0, 12),
    ],
    sameAs: sameAs(),
  };
}

export function websiteNode(site: URL | undefined) {
  return {
    '@type': 'WebSite',
    '@id': absolute(site, '/#website'),
    url: absolute(site, '/'),
    name: `${profile.name} - Portfolio`,
    inLanguage: 'en',
    publisher: { '@id': absolute(site, '/#person') },
  };
}

export function breadcrumbNode(site: URL | undefined, trail: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: absolute(site, t.path),
    })),
  };
}

export function faqNode(items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
