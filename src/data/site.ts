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
    'I am a product manager who also builds: product plans, websites, help centers, data analysis and the AI automations that connect them.',
  shortBio:
    'Sabin Mainali is a product manager and builder based in Kathmandu, Nepal, working since 2022. He built Chatonics, an AI-assisted customer messaging platform, and the Yoddha Lab company website. He takes freelance projects in AI and n8n automation, websites, product strategy, help centers, design systems and SaaS data analysis.',
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
    summary: 'I build AI workflows and n8n automations that take repeated manual steps out of a team week, with checks on the output.',
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
    id: 'ai-automation',
    title: 'AI and n8n workflow automation',
    answer: 'A working automation for one real workflow in your team, built in n8n or with Claude, with checks that stop bad output before it reaches a customer.',
    deliverables: [
      'Workflow audit to find the steps worth automating',
      'n8n workflows, custom Claude skills or scheduled AI jobs',
      'Quality checks on the AI output',
      'A short handover guide so your team can run it',
    ],
    fit: 'Your team copies data between tools by hand, or uses AI only in a chat window.',
    discipline: 'ai',
  },
  {
    id: 'ai-support-agent',
    title: 'AI customer support agent and shared inbox',
    answer: 'An AI agent that answers customers from your own help content, inside a shared inbox where a person can review or take over any conversation.',
    deliverables: [
      'Channel setup for the inbox your customers already use',
      'Knowledge base content the AI answers from',
      'Rules for when the AI replies and when a person steps in',
      'Testing against real customer questions before launch',
    ],
    fit: 'Customer messages arrive on several channels and simple questions wait hours for a reply.',
    discipline: 'ai',
  },
  {
    id: 'website',
    title: 'Company website and landing page',
    answer: 'A fast company website or landing page with clear service pages, a working contact path, and search and AI-search structure built in from the start.',
    deliverables: [
      'Page plan and copy structure for each service',
      'Responsive build that works on phones',
      'Meta tags, structured data, sitemap and llms.txt',
      'Contact or consultation booking path',
    ],
    fit: 'Your current site does not explain what you sell, or it does not show up when people search for it.',
    discipline: 'design',
  },
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
    answer: 'A planned knowledge base with a topic map, an article template and a review checklist, so every new article follows the same standard.',
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
    answer: 'An analysis of your billing, payment and user exports that ends with a written recommendation your team can act on.',
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
  {
    id: 'seo-ai-content',
    title: 'SEO and AI search content',
    answer: 'Content that ranks in Google and is easy for AI tools like ChatGPT, Gemini and Perplexity to read and quote. Covers SEO, AEO (answer engine optimization) and GEO (generative engine optimization).',
    deliverables: [
      'Keyword and customer question research',
      'Pages, articles and reports written for search and AI answers',
      'FAQ blocks, structured data and llms.txt',
      'Audit of existing pages with a fix list',
    ],
    fit: 'Your pages get little search traffic, or AI tools never mention your business.',
    discipline: 'content',
  },
  {
    id: 'research-reports',
    title: 'Market research, feasibility reports and data visualization',
    answer: 'A written report that answers one business question, such as whether a market is worth entering, with sources, charts and the assumptions stated.',
    deliverables: [
      'Market size, customer and competitor research',
      'Business feasibility report with risks and a clear verdict',
      'Charts and dashboards in Google Sheets or Looker Studio',
      'Report structured so search engines and AI tools can read it',
    ],
    fit: 'You need a decision on a new product, market or investment and do not have the facts in one place.',
    discipline: 'data',
  },
  {
    id: 'qa-testing',
    title: 'SaaS QA testing',
    answer: 'Hands-on testing of your web app before release, with bug reports your developers can act on straight away.',
    deliverables: [
      'Test cases for the main user flows',
      'Bug reports with steps, expected result and screenshots',
      'Re-testing of fixes before each release',
    ],
    fit: 'Bugs reach customers because nobody tests the full flow before a release.',
    discipline: 'product',
  },
];

// Job titles clients use when they post freelance work, mapped to proof on this site.
// Titles mirror real posting language on Upwork, Fiverr and Malt (checked 2026-09-15).
// Only roles with a real project or case study behind them are listed.
export const roles: {
  id: string;
  title: string;
  alsoCalled: string[];
  does: string;
  proof: { label: string; href: string }[];
  service: string;
}[] = [
  {
    id: 'ai-automation-specialist',
    title: 'AI Automation Specialist',
    alsoCalled: ['n8n automation expert', 'AI workflow automation engineer'],
    does: 'Builds n8n workflows and Claude-powered automations that move data between tools and draft content, with checks on the output.',
    proof: [
      { label: 'n8n automations and content writing automation', href: '' },
      { label: 'AI operating system case study', href: '/work/ai-operating-system/' },
    ],
    service: 'ai-automation',
  },
  {
    id: 'claude-code-specialist',
    title: 'Claude Code Specialist',
    alsoCalled: ['Claude AI agent developer', 'AI agent builder'],
    does: 'Sets up Claude Code with custom skills, automatic checks, helper agents and memory, so AI work follows the team\'s rules every time.',
    proof: [{ label: 'AI Lab: the full setup explained', href: '/ai-lab/' }],
    service: 'ai-automation',
  },
  {
    id: 'ai-chatbot-developer',
    title: 'AI Chatbot Developer',
    alsoCalled: ['AI customer support agent', 'knowledge base chatbot'],
    does: 'Builds AI agents that answer customers from a company knowledge base inside a shared inbox, with a person able to approve or take over.',
    proof: [{ label: 'Chatonics case study', href: '/work/chatonics/' }],
    service: 'ai-support-agent',
  },
  {
    id: 'fractional-product-manager',
    title: 'Fractional SaaS Product Manager',
    alsoCalled: ['fractional product owner', 'part-time product manager'],
    does: 'Owns the roadmap part time: market scan, feature scoping, prioritization with the reasoning written down, and success metrics.',
    proof: [
      { label: 'Product management experience', href: '/about/#experience-heading' },
      { label: 'Cost review case study', href: '/work/cost-review-decision/' },
    ],
    service: 'product-sprint',
  },
  {
    id: 'website-developer',
    title: 'Website and Landing Page Developer',
    alsoCalled: ['company website builder', 'landing page designer'],
    does: 'Plans and builds company websites and landing pages with clear service pages and search-ready structure.',
    proof: [{ label: 'Yoddha Lab website', href: 'https://yoddhalab.com' }],
    service: 'website',
  },
  {
    id: 'help-center-writer',
    title: 'Help Center and Knowledge Base Writer',
    alsoCalled: ['SaaS technical writer', 'support content writer'],
    does: 'Plans a full topic map and writes help articles where every step is checked against the live product.',
    proof: [{ label: 'Help center pipeline case study', href: '/work/help-center-pipeline/' }],
    service: 'help-center',
  },
  {
    id: 'saas-data-analyst',
    title: 'SaaS Data Analyst',
    alsoCalled: ['revenue and churn analyst', 'Stripe data analyst'],
    does: 'Cleans billing, payment and CRM exports and turns them into a written recommendation with the assumptions stated.',
    proof: [
      { label: 'Email attribution case study', href: '/work/email-attribution/' },
      { label: 'Cost review case study', href: '/work/cost-review-decision/' },
    ],
    service: 'revenue-analysis',
  },
  {
    id: 'design-system-specialist',
    title: 'SaaS Design System Specialist',
    alsoCalled: ['UI design system for AI tools', 'DESIGN.md author'],
    does: 'Writes a machine-readable design system and brand checks so AI screen tools and developers produce on-brand screens.',
    proof: [{ label: 'Design system case study', href: '/work/design-system-ai/' }],
    service: 'design-system',
  },
  {
    id: 'sales-ops-specialist',
    title: 'Sales Operations and Lead Generation Specialist',
    alsoCalled: ['lead list builder', 'sales enablement specialist'],
    does: 'Builds lead extraction tools, sales trackers, lead scoring rules and the meeting playbooks a small sales team runs on.',
    proof: [{ label: 'Leads extraction tool and sales tracker', href: '' }],
    service: 'sales-kit',
  },
  {
    id: 'seo-ai-search-writer',
    title: 'SEO and AI Search Content Specialist',
    alsoCalled: ['GEO content writer', 'AEO specialist', 'AI SEO content writer'],
    does: 'Writes pages, articles and reports that rank in Google and get quoted by AI answer engines such as ChatGPT, Gemini and Perplexity.',
    proof: [{ label: 'Help center pipeline case study', href: '/work/help-center-pipeline/' }],
    service: 'seo-ai-content',
  },
  {
    id: 'market-research-analyst',
    title: 'Market Research and Business Feasibility Analyst',
    alsoCalled: ['feasibility study consultant', 'data visualization specialist', 'business report writer'],
    does: 'Researches markets and competitors, tests whether a business idea holds up, and delivers a clear report with charts.',
    proof: [
      { label: 'Business analyst experience', href: '/about/#experience-heading' },
      { label: 'Cost review case study', href: '/work/cost-review-decision/' },
    ],
    service: 'research-reports',
  },
  {
    id: 'qa-tester',
    title: 'SaaS QA Tester',
    alsoCalled: ['manual QA tester', 'software tester', 'QA analyst'],
    does: 'Tests a SaaS product before release, writes clear bug reports and re-checks fixes so broken flows do not reach customers.',
    proof: [{ label: 'QA on Kudos CRM (in development)', href: '/about/#experience-heading' }],
    service: 'qa-testing',
  },
  {
    id: 'remotion-developer',
    title: 'Remotion Developer for SaaS Product Videos',
    alsoCalled: ['SaaS product demo video creator', 'motion designer for SaaS'],
    does: 'Makes product and promo videos in Remotion code, so each scene can be edited and re-rendered when the product changes.',
    proof: [{ label: 'Product videos case study', href: '/work/product-videos-in-code/' }],
    service: 'product-video',
  },
];

export const serviceFaqs = [
  {
    q: 'How much does a project cost?',
    a: 'It depends on scope. You get a written proposal with a fixed price or monthly fee first. Nothing is billed before you approve it.',
  },
  {
    q: 'What do you need from me to start?',
    a: 'A short brief: the problem, the deadline and what done looks like. A sample export or tool access helps for automation and data work.',
  },
  {
    q: 'Can I hire Sabin through a freelance platform?',
    a: 'Yes. Hire directly through this site or LinkedIn, or name your preferred platform in the brief.',
  },
  {
    q: 'What do I get at the end?',
    a: 'The finished work, the source files and short notes on how to run or update it.',
  },
  {
    q: 'Which tools does Sabin work with?',
    a: 'n8n, Claude, ChatGPT and Gemini for AI and automation. Python, R, Google Sheets and Looker Studio for data. Remotion for video.',
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
    detail: 'I compare the result with the goal and fix the process that produced any gap, so it does not repeat.',
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
    role: 'QA Tester',
    detail: 'CRM product in development',
    org: 'Kudos CRM',
    start: '',
    end: null as string | null,
    period: 'Current',
    summary: 'Test the CRM while it is being built: check user flows, report bugs and re-test fixes before release.',
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
  { name: 'AI and automation', tools: ['Claude Code', 'Claude API', 'ChatGPT', 'Gemini', 'NotebookLM', 'Perplexity', 'ElevenLabs', 'n8n', 'Google Stitch'] },
  { name: 'CRM and sales', tools: ['Pipedrive', 'Apollo.io', 'Calendly'] },
  { name: 'Email marketing', tools: ['Brevo', 'Mailchimp', 'HTML email'] },
  { name: 'Product and design', tools: ['Notion', 'Jira', 'ClickUp', 'Figma', 'Miro'] },
  { name: 'Data', tools: ['Python', 'R', 'Google Analytics', 'Google Sheets', 'Looker Studio', 'Stripe exports', 'Excel'] },
  { name: 'Build', tools: ['Git', 'Docker', 'Cloudflare'] },
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
    a: 'Sabin is a product manager and builder in Kathmandu, Nepal. He builds SaaS products, websites, AI automations and research reports.',
  },
  {
    q: 'What freelance projects does Sabin take?',
    a: 'AI and n8n automation, AI support agents, websites, SEO and AI search content, market research and feasibility reports, data analysis, help centers, QA testing and product videos.',
  },
  {
    q: 'How do I hire Sabin?',
    a: 'Send a short brief through the contact form or LinkedIn. You get questions or a proposed scope before any work starts.',
  },
  {
    q: 'Which time zone does Sabin work in?',
    a: 'Nepal Time (UTC+5:45). Overlap hours with your time zone are agreed at the start.',
  },
  {
    q: 'Is my data kept private?',
    a: 'Yes. Case studies never show client revenue, customers or internal numbers. Screenshots use public images or fake data.',
  },
  {
    q: 'What tools does Sabin use?',
    a: 'Claude, ChatGPT, Gemini, Perplexity and n8n for AI. Pipedrive, Apollo.io, Brevo and Mailchimp for sales and email. Notion, Jira, Figma, Python and Looker Studio for product and data.',
  },
];
