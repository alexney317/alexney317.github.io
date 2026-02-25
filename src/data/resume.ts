// ============================================================
// Resume Data — src/data/resume.ts
// Edit this file to update your resume.
// ============================================================

export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface ExperienceRole {
  title: string;
  startDate: string;
  endDate: string;
}

export interface ExperienceEntry {
  company: string;
  location?: string;
  roles: ExperienceRole[];
  bullets: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  notes?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ResumeData {
  contact: ContactInfo;
  summary?: string;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  skills: SkillGroup[];
}

// ============================================================
// Resume Content
// ============================================================
export const resume: ResumeData = {
  contact: {
    name: 'Alex Michael Ney, CPA',
    title: 'Operating Partner & Advisor',
    email: 'alex@neyadvisors.com',
    phone: '(317) 918-3486',
    location: 'Miami, FL',
    github: 'https://github.com/alexney317',
    website: 'https://alexney317.github.io',
  },

  experience: [
    {
      company: 'Ten Oaks Group (TOG); Aegeus Group, Inc.',
      location: 'Remote',
      roles: [
        { title: 'Operating Partner; VP, Strategy & Operations', startDate: 'Apr 2024', endDate: 'Present' },
      ],
      bullets: [
        'Operating Partner within family office specializing in corporate carve-outs and distressed turnarounds, operating a $100M+ revenue portfolio company. Led the successful stand-up and continued optimization of a net new standalone Testing, Inspection, Certification, & Compliance (TICC) service provider for primarily Oil & Gas asset owners, delivering a $5M+ (7%) EBITDA increase in FY25.',
        'Responsible for rapid diagnosis of operational inefficiencies, evaluation and prioritization of value-creation initiatives, & assessment of leadership for optimal organizational structure. Partner closely with the CEO and CFO and interact regularly with managing partners.',
        'Serve as primary liaison across functional and operational leaders, driving revenue growth through increased wallet share with existing customers and expansion with new targets, while improving gross margins through labor, materials, and cost-of-sales optimization and restructuring fixed and indirect cost bases to support sustainable growth.',
        'Lead the execution of key value-creation initiatives, delivering EBITDA expansion and cash-flow improvement across multiple business units, functions, and geographies throughout North America.',
        'Drive cross-functional collaboration across Finance, Operations, Commercial, and other support functions, serving as the integrator between internal teams, leaders within operating companies, and key customers and vendors.',
        'Lead operational and strategic finance initiatives, including ownership of budgeting, forecasting, and re-forecasting processes; facilitation of monthly business reviews and sponsor communication; leadership of enterprise commercial pursuits with $1M+ accounts; ownership of pricing strategy; execution of vendor consolidation initiatives; and delivery of ad hoc operational analyses.',
        'Plan and lead de novo geographic expansions, overseeing recruiting, budgeting, real estate acquisition, fleet and materials ramp-up, market analysis, workforce planning, and full financial ownership of new-market performance.',
        'Manage inbound M&A activity and buyer interest, supporting diligence requests and exit-planning initiatives as needed.',
      ],
    },
    {
      company: 'Ney Advisors',
      location: 'Remote',
      roles: [
        { title: 'President', startDate: 'Jun 2025', endDate: 'Present' },
      ],
      bullets: [
        'Provide financial, transactional, strategic, and operational advisory services to founders, business owners, client services firms, and privately funded companies to drive value creation across diverse engagements.',
        'Build and maintain a professional network across consulting and client-service firms, partnering as a contractor to expand my client base, broaden service offerings, and deliver high-quality client outcomes.',
        'Advise small and mid-sized businesses on growth strategy, talent evaluation, and high-impact, financially driven decision making.',
      ],
    },
    {
      company: 'CrossCountry Consulting',
      location: 'Remote',
      roles: [
        { title: 'Associate Director, Private Equity Advisory', startDate: 'May 2022', endDate: 'Dec 2023' },
        { title: 'Managing Consultant, Private Equity Advisory', startDate: 'Jan 2024', endDate: 'Apr 2024' },
      ],
      bullets: [
        'Partner with private equity sponsors, C-Suite, and executive leadership teams to drive enterprise-wide financial and operational strategy, value creation, and performance optimization across complex, middle-market and upper middle market organizations.',
        'Lead the stabilization, scaling, and transformation of finance organizations, overseeing budgeting, forecasting, cash flow management, lender and sponsor reporting, KPI frameworks, staffing models, and decision-support analytics to enable rapid growth and disciplined capital deployment.',
        'Play a central leadership role across buy-side and sell-side M&A, including diligence execution, financial modeling, CIM and board materials generation, transaction structuring, third-party coordination, data-room management, closing execution, and funds-flow management in PE-backed environments.',
        'Serve as a trusted business partner to CFOs and senior executives on organic and inorganic growth initiatives, evaluating investment opportunities, challenging assumptions, modeling capital and growth scenarios, and supporting board-level decision making.',
        'Conduct comprehensive Office of the CFO assessments across accounting, FP&A, treasury, and tech infrastructure, delivering actionable roadmaps to scale financial infrastructure and controls (e.g., supporting revenue and EBITDA growth plans for optimal exit).',
        'Act as PMO and finance integration lead for complex, multi-company carve-outs and integrations, overseeing accounting separation, ERP design and implementation, reporting optimization, FP&A build-out, cash forecasting, and operational finance integration.',
        'Lead ERP strategy and execution, including requirements definition, vendor selection, testing, and change management for NetSuite and SAP implementations, aligned with current operations and future organic and acquisition-driven growth.',
        'Draft, manage, and execute Transition Service Agreements (TSAs), owning exit planning, cost management, timelines, and cross-functional accountability to ensure clean separation and operational continuity.',
      ],
    },
    {
      company: 'Berkeley Research Group',
      location: 'Chicago, IL / Remote',
      roles: [
        { title: 'Manager, Transaction Advisory Services',        startDate: 'Jul 2021', endDate: 'Apr 2022' },
        { title: 'Senior Associate, Transaction Advisory Services', startDate: 'Sep 2019', endDate: 'Jun 2021' },
      ],
      bullets: [
        'Mastered the financial due diligence and quality of earnings process on over 100 successful buy-side and sell-side transactions with a primary focus on healthcare, technology, professional services, and manufacturing.',
      ],
    },
    {
      company: 'Ernst & Young',
      location: 'Chicago, IL',
      roles: [
        { title: 'Assurance Senior, Financial Services Office',    startDate: 'Oct 2018', endDate: 'Aug 2019' },
        { title: 'Assurance Associate, Financial Services Office', startDate: 'Aug 2016', endDate: 'Sep 2018' },
      ],
      bullets: [],
    },
  ],

  education: [
    {
      institution: 'Kelley School of Business, Indiana University',
      degree: 'Bachelor of Science in Business (BS), Finance & Accounting',
      startDate: '',
      endDate: 'May 2016',
      notes: 'Bloomington, IN',
    },
  ],

  skills: [
    {
      category: 'Advisory',
      items: ['Private Equity Advisory', 'Turnarounds & Restructuring', 'Value Creation', 'M&A Advisory'],
    },
    {
      category: 'Finance',
      items: ['Financial Due Diligence', 'Quality of Earnings', 'FP&A', 'Financial Modeling', 'Cash Flow Management'],
    },
    {
      category: 'Operations',
      items: ['Carve-outs & Integrations', 'ERP Implementation', 'PMO Leadership', 'Office of the CFO'],
    },
    {
      category: 'Credentials',
      items: ['CPA (Certified Public Accountant)'],
    },
    {
      category: 'Tools',
      items: ['NetSuite', 'SAP'],
    },
  ],
};
