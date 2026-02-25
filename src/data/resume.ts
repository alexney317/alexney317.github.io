// ============================================================
// Resume Data — src/data/resume.ts
//
// Edit this file to update your resume. The types below keep
// the shape consistent and give you autocomplete in your editor.
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

export interface ExperienceEntry {
  company: string;
  title: string;
  startDate: string;  // e.g. "Jan 2020"
  endDate: string;    // e.g. "Present"
  location?: string;
  bullets: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;     // e.g. "B.S. Computer Science"
  startDate: string;
  endDate: string;
  notes?: string;     // GPA, honors, relevant coursework
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
// Fill in your actual information below
// ============================================================
export const resume: ResumeData = {
  contact: {
    name: 'Alex Ney',
    title: 'Advisor & Consultant',
    email: 'alex@example.com',
    phone: '+1 (555) 000-0000',
    location: 'City, State',
    linkedin: 'https://linkedin.com/in/alexney317',
    github: 'https://github.com/alexney317',
    website: 'https://alexney317.github.io',
  },

  summary:
    'Experienced advisor and consultant with a track record of helping organizations ' +
    'navigate complex challenges and drive measurable results. ' +
    'Replace this with your actual professional summary.',

  experience: [
    {
      company: 'Ney Advisors',
      title: 'Principal',
      startDate: 'Jan 2020',
      endDate: 'Present',
      location: 'City, State',
      bullets: [
        'Lead description of your key responsibility or achievement.',
        'Quantifiable impact — e.g. grew revenue 40% YoY or reduced costs by $X.',
        'Third bullet demonstrating breadth of expertise.',
      ],
    },
    {
      company: 'Previous Company',
      title: 'Previous Role',
      startDate: 'Mar 2015',
      endDate: 'Dec 2019',
      location: 'City, State',
      bullets: [
        'Description of your key responsibility or achievement.',
        'Another key accomplishment.',
      ],
    },
  ],

  education: [
    {
      institution: 'University Name',
      degree: 'Degree, Field of Study',
      startDate: '2010',
      endDate: '2014',
      notes: 'Honors, awards, or relevant coursework',
    },
  ],

  skills: [
    {
      category: 'Expertise',
      items: ['Strategy', 'Advisory', 'Business Development', 'Operations'],
    },
    {
      category: 'Tools',
      items: ['Replace', 'with', 'your', 'actual', 'tools'],
    },
  ],
};
