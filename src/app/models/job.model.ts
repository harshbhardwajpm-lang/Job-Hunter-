export interface Job {
  id: string;
  company: string;
  role: string;
  country: string;
  city: string;
  region: 'EU' | 'UK' | 'APAC' | 'Middle East' | 'Worldwide';
  skillMatchPct: number;
  visaRelocationEvidence: string;
  visaType: string;
  salary: string;
  directJobLink: string;
  postedDate: string;
  postedDaysAgo: number;
  isNicheRole: boolean;
  category: 'Business Analysis' | 'Product Ownership' | 'Legacy Modernization' | 'AI & Automation' | 'Delivery & Governance';
  matchedSkills: string[];
  keyStrengths: string[];
  descriptionSummary: string;
}

export interface AlertLog {
  id: string;
  sentAt: string;
  recipientEmail: string;
  jobsCount: number;
  jobTitles: string[];
  status: 'sent' | 'no_new_jobs_sent' | 'failed';
  subject: string;
  isAutomated: boolean;
}

export interface JobTitleRecommendation {
  rank: number;
  title: string;
  category: string;
  whyItFits: string;
  topMatchedSkills: string[];
  sampleSearchQuery: string;
  targetRegions: string[];
}
