// Single source of truth for everything personal on the site.
// Change a value here and every page, the CV, llms.txt and the JSON-LD update.
// Links left as '' are hidden everywhere - nothing ships as a placeholder.

export const LAST_UPDATED = '2026-09-15';

export const profile = {
  name: 'Sabin Mainali',
  givenName: 'Sabin',
  familyName: 'Mainali',
  jobTitle: 'Product Manager',
  headline:
    'Product Manager | AI-Native Product & Growth Operator | SaaS, Automation & Cross-Functional Execution',
  positioning:
    'I am an AI-native product manager. I ship the whole system: product, growth, design, data, content, and the AI automation that runs them.',
  shortBio:
    'Sabin Mainali is a product manager and builder based in Kathmandu, Nepal. He builds SaaS products, company websites and AI automations, including Chatonics, an AI-assisted customer messaging platform, and the Yoddha Lab website. He takes freelance work in product, design systems, help centers, data analysis and AI automation.',
  location: { city: 'Kathmandu', country: 'Nepal', timezone: 'Nepal Time (UTC+5:45)' },
  experienceSince: 2022,
  employer: {
    name: 'Calilio',
    url: 'https://www.calilio.com',
    description: 'a cloud phone system for businesses, built by Yoddha Lab',
  },
  // Contra and freelance status.
  availability: {
    open: true,
    label: 'Open to freelance projects',
  },
};

export const links = {
  linkedin: 'https://www.linkedin.com/in/sabin-mainali74',
  contra: '', // e.g. https://contra.com/your-handle
  github: '',
  email: '',
  booking: '', // e.g. a Cal.com link
};

// Optional Cloudflare Web Analytics token (cookie-free). Empty = no analytics script.
export const analytics = {
  cloudflareToken: '',
};


// Products and tools Sabin has built himself, outside client and employer case studies.
export type ProjectIcon = 'chat' | 'web' | 'radar' | 'extract' | 'tracker' | 'writing' | 'voice' | 'flow';

export const projects: {
  id: string;
  name: string;
  kind: string;
  summary: string;
  features: string[];
  url: string;
  icon: ProjectIcon;
  caseStudy?: string;
}[] = [
  {
    id: 'chatonics',
    name: 'Chatonics',
    kind: 'SaaS product, live',
    summary:
      'An AI-assisted omnichannel customer messaging platform. It brings WhatsApp, Instagram, Messenger, Telegram, email, SMS and more into one shared inbox, and helps small teams reply faster with AI.',
    features: [
      'AI agent and workspace copilot',
      'Unified shared inbox',
      'Live chat widget',
      'Ticketing and SLA timers',
      'Knowledge base that grounds the AI',
      'Two-way translation',
    ],
    url: 'https://chatonics.com',
    icon: 'chat',
    caseStudy: 'chatonics',
  },
  {
    id: 'yoddhalab-website',
    name: 'Yoddha Lab website',
    kind: 'Company website, live',
    summary:
      'The website for Yoddha Lab, a software development and business process reengineering company in Kathmandu. It presents the services, in-house products, delivery process and team, with a clear path to book a consultation.',
    features: ['Services and products', 'Delivery process', 'Team pages', 'Consultation booking'],
    url: 'https://yoddhalab.com',
    icon: 'web',
  },
  {
    id: 'competitor-watch',
    name: 'Competitor Watch',
    kind: 'Internal tool',
    summary: 'An automated app that monitors competitors and delivers a daily brief on a schedule, so product decisions start from current market facts.',
    features: ['Scheduled monitoring', 'Daily competitor brief'],
    url: '',
    icon: 'radar',
  },
  {
    id: 'leads-extraction',
    name: 'Leads extraction tool',
    kind: 'Sales tool',
    summary: 'A tool that extracts lead details from raw sources into a clean, structured list the sales team can work from.',
    features: ['Lead extraction', 'Clean lead lists'],
    url: '',
    icon: 'extract',
  },
  {
    id: 'sales-tracker',
    name: 'Sales tracker',
    kind: 'Sales tool',
    summary: 'A sales tracker built for the sales team, working alongside the meeting rhythm playbook and lead scoring rules.',
    features: ['Sales activity tracking', 'Lead follow-up'],
    url: '',
    icon: 'tracker',
  },
  {
    id: 'content-automation',
    name: 'Content writing automation',
    kind: 'AI automation',
    summary: 'An AI automation for content writing that turns a brief into a structured draft, ready for a human editing pass.',
    features: ['Brief to draft', 'Structured output'],
    url: '',
    icon: 'writing',
  },
  {
    id: 'voiceover-app',
    name: 'Voiceover app',
    kind: 'AI app',
    summary: 'A voiceover app that turns scripts into narration with a local AI text-to-speech model, used for product and promo videos.',
    features: ['Script to speech', 'Runs locally'],
    url: '',
    icon: 'voice',
  },
  {
    id: 'n8n-automations',
    name: 'n8n automations',
    kind: 'Workflow automation',
    summary: 'Workflow automations built in n8n that connect everyday tools and remove repeated manual steps from the team week.',
    features: ['Tool-to-tool workflows', 'Scheduled jobs'],
    url: '',
    icon: 'flow',
  },
];

export type DisciplineId = 'product' | 'design' | 'content' | 'data' | 'sales' | 'motion' | 'ai';

export const disciplines: {
  id: DisciplineId;
  name: string;
  short: string;
  summary: string;
  points: string[];
  tags: string[];
}[] = [
  {
    id: 'product',
    name: 'Product management',
    short: 'Product',
    summary: 'I own a SaaS roadmap end to end: what gets built, in what order, and why.',
    points: [
      'Roadmap, feature scoping and prioritization across web and mobile',
      'Competitor Watch: an automated daily competitor brief',
      'Role charters with decision rights and KPI tables',
      'Integration scoping and compliance-facing pages',
    ],
    tags: ['Roadmaps', 'Prioritization', 'Competitor intel'],
  },
  {
    id: 'design',
    name: 'UI/UX and design systems',
    short: 'Design',
    summary: 'I write design systems that people and AI tools can both follow without drifting off brand.',
    points: [
      'DESIGN.md: a machine-readable spec for tokens, color, type and components',
      'A 46-screen prompt kit for Google Stitch',
      'A custom AI skill that generates screens and lints them against the brand',
      'A validated chart palette and chart rules for reports',
    ],
    tags: ['DESIGN.md', 'AI screen kits', 'Brand lint'],
  },
  {
    id: 'content',
    name: 'Help center and content systems',
    short: 'Content',
    summary: 'I plan and run knowledge bases as a pipeline, with every step checked against the live product.',
    points: [
      'A 293-topic knowledge base plan, shipped in build waves',
      'JSON article store, validators and pre-publish checks',
      'House voice rules and screenshot marking with personal data masked',
      'Search-ready and AI-search-ready output',
    ],
    tags: ['Knowledge bases', 'Voice rules', 'Search-ready'],
  },
  {
    id: 'data',
    name: 'Data and revenue analysis',
    short: 'Data',
    summary: 'I turn exports into decisions, and I check whether the decision actually changes anything.',
    points: [
      'Failed-payment recovery analysis on Stripe exports',
      'Refund, dispute, cancellation and churn analysis with dedupe rules',
      'Email campaign attribution and list hygiene checks',
      'Cost reviews that test the assumption before the saving',
    ],
    tags: ['Stripe exports', 'Churn', 'Attribution'],
  },
  {
    id: 'sales',
    name: 'Sales and growth enablement',
    short: 'Sales',
    summary: 'I give sales teams the rhythm, scoring and templates they need to work without guessing.',
    points: [
      'Daily, weekly and monthly sales meeting playbook',
      'Sales readiness certification with a 100-point rubric',
      'A sales tracker plus lead recovery callsheets with scoring and tiering',
      'Lifecycle and outreach email templates that survive dark mode',
    ],
    tags: ['Sales tracker', 'Playbooks', 'Lead scoring'],
  },
  {
    id: 'motion',
    name: 'Motion and video',
    short: 'Motion',
    summary: 'I make product and promo videos in code, so they can be versioned, reviewed and re-rendered.',
    points: [
      'Remotion videos (React rendered to MP4)',
      'Storyboard, shot grammar and a brand motion system',
      'Visual QA loop plus caption and loudness checks',
      'Local AI voiceover for narration',
    ],
    tags: ['Remotion', 'Storyboards', 'Caption checks'],
  },
  {
    id: 'ai',
    name: 'AI automation',
    short: 'AI',
    summary: 'I build the AI tooling that runs my own work: skills, checks, helpers and memory.',
    points: [
      'A Claude Code setup with custom skills, subagents and hooks',
      'n8n workflow automations that connect everyday tools',
      'Automatic guards for punctuation, hidden characters and scope drift',
      'A knowledge graph over company documents for fast retrieval',
      'Reusable prompt systems for sales and support teams',
    ],
    tags: ['Claude Code', 'n8n', 'Agents'],
  },
];

export const services: {
  id: string;
  title: string;
  answer: string;
  deliverables: string[];
  fit: string;
  discipline: DisciplineId;
}[] = [
  {
    id: 'product-sprint',
    title: 'Product strategy and roadmap sprint',
    answer: 'A focused engagement that ends with a prioritized roadmap your team can start on the next Monday.',
    deliverables: [
      'Competitor and market scan',
      'Problem framing and feature scoping',
      'Prioritized roadmap with the reasoning written down',
      'Success metrics for each roadmap item',
    ],
    fit: 'You have more ideas than engineering time and need a clear order.',
    discipline: 'product',
  },
  {
    id: 'design-system',
    title: 'Design system that AI tools can follow',
    answer: 'A written, machine-readable design system so designers, developers and AI screen generators produce on-brand work.',
    deliverables: [
      'DESIGN.md with tokens, type, color and component rules',
      'Prompt kit for AI screen generation',
      'Brand checks that flag off-brand output',
    ],
    fit: 'Your screens drift off brand every time a new tool or person touches them.',
    discipline: 'design',
  },
  {
    id: 'help-center',
    title: 'Help center from zero',
    answer: 'A planned knowledge base with a repeatable writing and review pipeline, not a pile of one-off articles.',
    deliverables: [
      'Topic map grouped into build waves',
      'Article template, voice rules and review checklist',
      'Screenshot rules with personal data masking',
      'Search and AI-search friendly structure',
    ],
    fit: 'Support answers the same questions every day and customers cannot find answers alone.',
    discipline: 'content',
  },
  {
    id: 'revenue-analysis',
    title: 'Revenue, churn and payments analysis',
    answer: 'An analysis of your billing, payment and user exports that ends in a decision, not just a chart.',
    deliverables: [
      'Clean, deduplicated dataset with written definitions',
      'Failed payment, refund or churn breakdown',
      'Recommendation with the assumptions stated',
    ],
    fit: 'You have Stripe or CRM exports and a question nobody has had time to answer properly.',
    discipline: 'data',
  },
  {
    id: 'sales-kit',
    title: 'Sales enablement kit',
    answer: 'The playbooks, scoring and templates a small sales team needs to run a consistent week.',
    deliverables: [
      'Meeting rhythm playbook',
      'Readiness rubric and scoresheet',
      'Outreach and lifecycle email templates',
      'Lead scoring and tiering rules',
    ],
    fit: 'Your sales process lives in people\'s heads and results change with who is on shift.',
    discipline: 'sales',
  },
  {
    id: 'ai-automation',
    title: 'AI workflow automation',
    answer: 'A working AI setup for a real workflow in your team, with checks that stop bad output before it ships.',
    deliverables: [
      'Workflow audit to find the steps worth automating',
      'Custom Claude skills, n8n workflows or scheduled agents',
      'Quality gates and a short handover guide',
    ],
    fit: 'Your team uses AI in chat windows and wants it built into the actual work.',
    discipline: 'ai',
  },
  {
    id: 'product-video',
    title: 'Product video made in code',
    answer: 'A product or promo video built in Remotion, so every scene is editable and re-renders in minutes.',
    deliverables: [
      'Storyboard and script',
      'Rendered video in the formats you need',
      'Source project you can update later',
    ],
    fit: 'You need a launch or demo video that will change as the product changes.',
    discipline: 'motion',
  },
];

export const engagementTypes = [
  {
    name: 'Fixed-scope project',
    detail: 'A defined outcome, a written scope and a delivery date agreed before work starts.',
  },
  {
    name: 'Monthly retainer',
    detail: 'Ongoing product, content or AI work with a set number of priorities each month.',
  },
  {
    name: 'Advisory call',
    detail: 'A working session on one problem, with written notes and next steps afterwards.',
  },
];

export const method = [
  {
    name: 'Understand',
    detail: 'I read the data, the product and the people involved before proposing anything.',
  },
  {
    name: 'Design the system',
    detail: 'I write down the rules, the structure and the definition of done.',
  },
  {
    name: 'Build and verify',
    detail: 'I build in small steps and check each one against the real product or data.',
  },
  {
    name: 'Measure',
    detail: 'I compare the result with the goal and change the system, not just the output.',
  },
];

export const principles = [
  {
    name: 'Verified beats fast',
    detail: 'Nothing is done until it has been checked in the real product, the real data or the real browser.',
  },
  {
    name: 'Systems over one-offs',
    detail: 'If I will do something twice, I write the rule, the template or the automation the first time.',
  },
  {
    name: 'Decisions, not decks',
    detail: 'Analysis is only useful when it changes what someone does next.',
  },
  {
    name: 'Plain words',
    detail: 'Specs, help articles and reports are written so a new teammate understands them on the first read.',
  },
];

export const experience = [
  {
    role: 'Product Manager',
    detail: 'Product Growth Lead, head level',
    org: 'Yoddha Lab Pvt. Ltd. (Calilio)',
    start: '2025-02',
    end: null as string | null,
    period: 'Feb 2025 - Present',
    summary:
      'Lead product and growth: product management, project management, team leadership, sales growth and lead management.',
  },
  {
    role: 'Business Analyst',
    detail: 'Remote, Singapore',
    org: 'Calilio',
    start: '2025-02',
    end: null as string | null,
    period: 'Feb 2025 - Present',
    summary:
      'Business and market analysis, competitive intelligence, and data analysis for product and pricing decisions.',
  },
  {
    role: 'IT Supervisor',
    detail: 'Manager level, Kathmandu',
    org: 'Cubix Tech Pvt. Ltd.',
    start: '2022-10',
    end: '2025-02',
    period: 'Oct 2022 - Feb 2025',
    summary:
      'Ran IT operations with cross-functional teams and led a team delivering Microsoft Office solutions, Canva design and R analysis.',
  },
];

export const education = [
  {
    name: "Bachelor's degree",
    org: 'Kantipur College of Management and Information Technology (KCMIT)',
    orgUrl: 'https://kcmit.edu.np',
    period: '2018 - 2022',
    note: 'University football team, local charity volunteer, project management workshops.',
  },
  {
    name: '+2 Science',
    org: 'Premier College, Kathmandu',
    orgUrl: '',
    period: '2015 - 2017',
    note: '',
  },
  {
    name: 'SLC',
    org: 'Shree Kanpur Higher Secondary School',
    orgUrl: '',
    period: '2010 - 2014',
    note: '',
  },
];

export const certifications = [
  {
    name: 'Advanced Data Analysis and Visualization Specialist',
    issuer: 'Global Data Science Institute',
  },
];

export const events = [
  {
    name: 'Convergence India 2025',
    place: 'New Delhi, India',
    date: 'March 2025',
    role: 'Represented Calilio',
  },
  {
    name: 'NAS IT Expo 2025',
    place: 'Nepal',
    date: 'November 2025',
    role: 'Attended',
  },
];

export const toolGroups = [
  { name: 'AI and automation', tools: ['Claude Code', 'Claude API', 'n8n', 'Google Stitch'] },
  { name: 'Data', tools: ['Python', 'R', 'Stripe exports', 'Excel'] },
  { name: 'Build', tools: ['Git', 'Docker', 'Cloudflare', 'HTML email'] },
  { name: 'Design and video', tools: ['Remotion', 'Canva', 'Microsoft Office'] },
];

export const skillGroups = [
  {
    name: 'Product',
    skills: ['Product management', 'Product strategy', 'Product growth', 'Competitive intelligence', 'Market analysis', 'Digital strategy'],
  },
  { name: 'Growth and sales', skills: ['Lead management', 'Sales growth', 'CRM', 'Revenue analysis'] },
  { name: 'Data', skills: ['Data analysis', 'Data visualization', 'R', 'Business analysis'] },
  {
    name: 'Leadership',
    skills: ['Team leadership', 'Cross-functional teams', 'Project management', 'Operations management', 'Strategic planning'],
  },
  { name: 'Craft', skills: ['Design systems', 'Front-end coding', 'Technical writing', 'Video in code'] },
];

export const faqs = [
  {
    q: 'What does Sabin Mainali do?',
    a: 'Sabin Mainali is a product manager and builder in Kathmandu, Nepal. He built Chatonics, an AI-assisted customer messaging platform, developed the Yoddha Lab website, and builds internal tools and AI automations. He does freelance work in product strategy, design systems, help centers, data analysis and AI automation.',
  },
  {
    q: 'What freelance projects does Sabin take?',
    a: 'Sabin takes product strategy sprints, design systems for AI screen tools, help center builds, revenue and churn analysis, sales enablement kits, AI workflow automation with Claude, and product videos made in Remotion. Each one ends in a shipped, checked deliverable.',
  },
  {
    q: 'How do I hire Sabin for a project?',
    a: 'Send a short brief through the contact form on this site or message Sabin on LinkedIn. Describe the problem, the deadline and what done looks like. You get a reply with questions or a proposed scope before any work starts.',
  },
  {
    q: 'Which time zone does Sabin work in?',
    a: 'Sabin is based in Kathmandu and works in Nepal Time (UTC+5:45). He already works with a team spread across Nepal, Singapore, India and Australia, and plans overlap hours with clients in other regions at the start of a project.',
  },
  {
    q: 'How does Sabin handle confidential client data?',
    a: 'Client data stays private. Case studies on this site describe the method and the qualitative outcome, never an employer\'s or client\'s revenue, customers or internal numbers. Screenshots are public images or mocks with fake data.',
  },
  {
    q: 'What tools does Sabin use?',
    a: 'Claude Code, the Claude API and n8n for AI and workflow automation, Google Stitch for AI screen design, Remotion for video, Python and R for data work, plus Git, Docker and Cloudflare for building and shipping.',
  },
];
