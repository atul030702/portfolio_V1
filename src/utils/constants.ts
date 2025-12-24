import { Project, ExperienceItem, Skill, PullRequest } from "./interfaces";

export const HUD_GREEN = '#00FF41';
export const AFTERBURNER_ORANGE = '#FF5F1F';
export const MATTE_BLACK = '#0a0c10';

export const PROJECTS: Project[] = [
    {
        id: 'monkeys-iam',
        title: 'Monkeys IAM',
        tagline: 'Identity Management System',
        description: 'Open-source Identity Management inspired by AWS, designed for highly distributed systems.',
        tech: ['TypeScript', 'React', 'Go', 'OIDC'],
        metrics: ['Sub-100ms latency', 'Scalable to 1M+ identities'],
    },
    {
        id: 'monkeys-blog',
        title: 'Monkeys Blog',
        tagline: 'Modern Publishing Platform',
        description: 'A personal publishing platform optimized for high SEO performance and rapid content delivery.',
        tech: ['Next.js', 'Tailwind', 'PostgreSQL'],
        metrics: ['22k+ active users', 'Lighthouse 100/100'],
    }
];

export const EXPERIENCE: ExperienceItem[] = [
    {
        id: 'open-source-maintainer',
        role: 'Frontend Engineer Intern, Monkeys',
        company: 'BUDDHICINTAKA PVT. LTD.',
        period: 'Sep 2025 — PRESENT',
        context: 'Leading architectural shifts for high-traffic blog frameworks.',
        metrics: [
            'Migrated SWR to TanStack Query for improved data management',
            'Reviewed 1,000+ lines of critical production code',
            'Managed 22k+ user feedback loop for core components'
        ]
    },
    {
        id: 'freelance-consultant',
        role: 'Fullstack Developer, Freelance',
        company: 'SSH SOFTTECH PVT. LTD.',
        period: '2025',
        context: 'Delivering optimized static architectures for fintech and aviation SaaS.',
        metrics: [
            'Engineered sub-2s initial load times for complex dashboards',
            'Architected 0-downtime CI/CD pipelines for 15+ clients'
        ]
    }
];

export const SKILLS: Skill[] = [
    { name: 'TypeScript', level: 98, status: 'active' },
    { name: 'React', level: 95, status: 'active' },
    { name: 'JavaScript', level: 100, status: 'active' },
    { name: 'Go (Golang)', level: 45, status: 'loading' },
    { name: 'Parcel', level: 90, status: 'active' },
    { name: 'HTML/CSS', level: 95, status: 'active' }
];

export const GITHUB_PRS: PullRequest[] = [
    {
        id: 'pr-1',
        title: 'feat: implement OIDC discovery endpoint',
        repo: 'monkeys-stack/iam',
        status: 'merged',
        date: '2024-10-12',
        link: 'https://github.com/atulkumar'
    },
    {
        id: 'pr-02',
        title: 'perf: optimize bundle size by 40%',
        repo: 'monkeys-stack/blog',
        status: 'merged',
        date: '2024-09-05',
        link: 'https://github.com/atulkumar'
    },
    {
        id: 'pr-003',
        title: 'fix: resolve race condition in auth middleware',
        repo: 'monkeys-stack/iam',
        status: 'merged',
        date: '2024-08-20',
        link: 'https://github.com/atulkumar'
    }
];

export const socialAccounts = [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/atul030702/', type: 'LinkedIn' },
    { label: 'GitHub', url: 'https://github.com/atul030702', type: 'GitHub' },
    { label: 'Email', url: 'mailto:singhatul0307@gmail.com', type: 'Email' },
    { label: 'Resume', url: '#', type: 'Resume' },
];

export const INTERACTIVE_SELECTORS = [
    'button',
    'a',
    '[role="button"]',
    '[type="submit"]',
    '.interactive-target'
].join(',');