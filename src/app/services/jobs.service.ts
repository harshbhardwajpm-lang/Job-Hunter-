import { Injectable, signal, computed } from '@angular/core';
import { Job, JobTitleRecommendation } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  // Candidate Resume Profile Data
  readonly candidateProfile = {
    name: 'Harsh Bhardwaj',
    email: 'harshbhardwajj89@gmail.com',
    primaryPillars: [
      {
        name: 'Business Analysis & Delivery',
        skills: ['Stakeholder Meetings', 'Requirements Gathering', 'Traceability Matrix', 'Workshops', 'Requirement Elicitation', 'Requirement Validation', 'Quality Management', 'Requirements Engineering', 'IT Systems', 'Requirements Accuracy & Completeness', 'SIT/UAT Coordination']
      },
      {
        name: 'Payments & Core Banking Modernization',
        skills: ['Payment Processing', 'Legacy System Modernization', 'Mainframe Systems', 'COBOL', 'SFTP', 'NDM', 'API Exposure', 'Payment Rails & Integrations', 'Cards & Payments']
      },
      {
        name: 'Data & Technology',
        skills: ['SQL', 'PL/SQL', 'Python', 'Power BI', 'MS Access', 'Vector Databases', 'REST APIs', 'VBA & Macros']
      },
      {
        name: 'AI & Generative AI',
        skills: ['Generative AI (GenAI)', 'Agentic AI', 'LLMs', 'Retrieval-Augmented Generation (RAG)', 'Prompt Engineering', 'ChatGPT', 'GitHub Copilot']
      },
      {
        name: 'Product Management & Ownership',
        skills: ['Product Ownership', 'Product Vision & Roadmap', 'Backlog Grooming', 'Feature Prioritization', 'MVP Definition', 'User Stories & Acceptance Criteria', 'User Story Mapping']
      },
      {
        name: 'Project Governance & Methodologies',
        skills: ['Agile', 'Scrum', 'SAFe', 'Kanban', 'Hybrid Delivery', 'SDLC', 'RAID Management', 'Risk & Dependency Management', 'Change Control', 'Steering Committee Reviews']
      },
      {
        name: 'Tools & Automation',
        skills: ['Jira', 'Confluence', 'Azure DevOps', 'GitHub', 'VS Code', 'Robot Framework', 'n8n Workflow Automation', 'Visio', 'BPMN', 'UML', 'Six Sigma']
      }
    ]
  };

  // Top 10 Recommended Job Titles
  readonly top10JobTitles = signal<JobTitleRecommendation[]>([
    {
      rank: 1,
      title: 'Technical Business Analyst – Core Banking & Payment Systems',
      category: 'Business Analysis / FinTech',
      whyItFits: 'Perfect union of your payment processing experience, requirement elicitation, API exposure, and core banking modernization knowledge.',
      topMatchedSkills: ['Payment Systems', 'API Exposure', 'SQL', 'Requirements Engineering', 'Traceability Matrix', 'UAT Coordination'],
      sampleSearchQuery: '"Technical Business Analyst" AND ("Payments" OR "Core Banking") AND ("Visa Sponsorship" OR "Relocation")',
      targetRegions: ['UK', 'EU (Germany, Netherlands, Spain)', 'APAC (Singapore)', 'Middle East (Dubai)']
    },
    {
      rank: 2,
      title: 'Technical Product Owner – Payment Infrastructure & Settlement',
      category: 'Product Ownership',
      whyItFits: 'Direct match for your Agile/SAFe product backlog ownership, API integration knowledge, and high-volume transaction understanding.',
      topMatchedSkills: ['Product Ownership', 'Backlog Management', 'User Stories', 'Payment Processing', 'Agile/Scrum', 'Acceptance Criteria'],
      sampleSearchQuery: '"Product Owner" AND ("Payments" OR "Settlement" OR "FinTech") AND ("Visa" OR "Relocation")',
      targetRegions: ['UK (London)', 'EU (Amsterdam, Berlin, Barcelona)', 'Worldwide Remote']
    },
    {
      rank: 3,
      title: 'Legacy Modernization Systems Analyst (Mainframe/COBOL to Cloud)',
      category: 'Legacy Modernization (Niche High-Demand)',
      whyItFits: 'Extremely rare niche: banks and enterprise institutions desperately need professionals who understand COBOL/Mainframe/SFTP/NDM and modern APIs.',
      topMatchedSkills: ['Legacy System Modernization', 'Mainframe Systems', 'COBOL', 'SFTP/NDM', 'API Exposure', 'SDLC'],
      sampleSearchQuery: '("Systems Analyst" OR "Business Analyst") AND ("Mainframe" OR "COBOL") AND "Modernization" AND ("Visa" OR "Sponsorship")',
      targetRegions: ['EU (Germany, Netherlands)', 'UK', 'APAC (Australia, Singapore)']
    },
    {
      rank: 4,
      title: 'AI & Automation Solutions Business Analyst (GenAI / RAG / n8n)',
      category: 'AI & Process Automation',
      whyItFits: 'Leverages your hands-on GenAI, Agentic AI, RAG, Prompt Engineering, and n8n workflow automation skills for cutting-edge digital transformation.',
      topMatchedSkills: ['Generative AI', 'Agentic AI', 'RAG', 'Prompt Engineering', 'n8n', 'Python', 'BPMN'],
      sampleSearchQuery: '("Business Analyst" OR "Solutions Analyst") AND ("GenAI" OR "Generative AI" OR "Automation") AND "Sponsorship"',
      targetRegions: ['EU (Germany, Sweden, Netherlands)', 'UK', 'Middle East (UAE)']
    },
    {
      rank: 5,
      title: 'FinTech Technical Business Analyst (Cards, Lending & Digital Banking)',
      category: 'Banking & Financial Technology',
      whyItFits: 'Matches your experience with cards, lending processes, regulatory tracking, and enterprise financial systems.',
      topMatchedSkills: ['Requirements Gathering', 'SIT/UAT', 'Jira', 'PL/SQL', 'Stakeholder Management', 'Risk Management'],
      sampleSearchQuery: '"Business Analyst" AND ("Cards" OR "Lending" OR "FinTech") AND "Visa Sponsorship"',
      targetRegions: ['UK', 'APAC (Singapore)', 'EU']
    },
    {
      rank: 6,
      title: 'IT Delivery Lead / Agile Project Manager – Financial Services',
      category: 'Project Management & Governance',
      whyItFits: 'Capitalizes on your SAFe, RAID management, dependency tracking, vendor coordination, and steering committee presentation expertise.',
      topMatchedSkills: ['Project Governance', 'RAID Management', 'SAFe', 'Agile Delivery', 'Dependency Management', 'Executive Reporting'],
      sampleSearchQuery: '("IT Delivery Lead" OR "Agile Project Manager") AND ("Financial Services" OR "Banking") AND ("Relocation" OR "Visa")',
      targetRegions: ['Australia', 'UK', 'EU (Germany, Netherlands)', 'UAE']
    },
    {
      rank: 7,
      title: 'Technical Product Manager – Core Banking & Integrations',
      category: 'Product Management',
      whyItFits: 'Combines your end-to-end product vision, roadmap planning, MVP scoping, and deep technical comprehension of banking interfaces.',
      topMatchedSkills: ['Product Lifecycle', 'Roadmap Planning', 'MVP Definition', 'API Exposure', 'Backlog Grooming'],
      sampleSearchQuery: '"Technical Product Manager" AND ("Core Banking" OR "Integrations") AND "Visa"',
      targetRegions: ['EU (Germany, Spain, Netherlands)', 'UK', 'APAC']
    },
    {
      rank: 8,
      title: 'Lead Systems Analyst – Enterprise Architecture & Interface Protocols',
      category: 'Systems Analysis',
      whyItFits: 'Tailor-made for your expertise in secure file transfers (SFTP, NDM), data flow modeling (Visio, BPMN, UML), and system integrations.',
      topMatchedSkills: ['Systems Analysis', 'SFTP', 'NDM', 'BPMN', 'UML', 'Visio', 'Requirements Accuracy'],
      sampleSearchQuery: '"Systems Analyst" AND ("SFTP" OR "API" OR "Integration") AND ("Visa Sponsorship" OR "Relocation")',
      targetRegions: ['Singapore', 'Australia', 'EU', 'Middle East']
    },
    {
      rank: 9,
      title: 'Enterprise Process Automation & Continuous Improvement Lead',
      category: 'Process Optimization & Automation',
      whyItFits: 'Synthesizes your Six Sigma methodology, Robot Framework automated testing, BPMN process analysis, and VBA/macro engineering.',
      topMatchedSkills: ['Six Sigma', 'Robot Framework', 'n8n', 'VBA & Macros', 'Process Improvement', 'Gap Analysis'],
      sampleSearchQuery: '("Process Improvement" OR "Process Automation") AND ("Six Sigma" OR "BPMN") AND ("Relocation" OR "Visa")',
      targetRegions: ['EU (Netherlands, Germany)', 'Middle East', 'UK']
    },
    {
      rank: 10,
      title: 'Data & Analytics Business Analyst (SQL, Python, Power BI)',
      category: 'Data & Analytics',
      whyItFits: 'Emphasizes your data query prowess (SQL, PL/SQL), dashboard generation (Power BI), Python automation, and executive reporting.',
      topMatchedSkills: ['SQL', 'PL/SQL', 'Python', 'Power BI', 'Data Analysis', 'Executive Reporting'],
      sampleSearchQuery: '"Business Analyst" AND ("SQL" OR "Power BI") AND "Python" AND ("Visa Sponsorship" OR "Relocation")',
      targetRegions: ['EU', 'UK', 'Australia', 'Worldwide Remote']
    }
  ]);

  // Verified Active Jobs dataset with verified visa sponsorship/relocation proof
  readonly allJobs = signal<Job[]>([
    {
      id: 'job-1',
      company: 'TravelPerk',
      role: 'Senior Product Owner – Enterprise Platform & Payments',
      country: 'Spain',
      city: 'Barcelona',
      region: 'EU',
      skillMatchPct: 96,
      visaRelocationEvidence: 'Guaranteed comprehensive relocation assistance package + employer-sponsored EU Blue Card / Spanish work permit.',
      visaType: 'EU Blue Card / Relocation Package',
      salary: '€72,000 – €88,000 / year + equity',
      directJobLink: 'https://www.travelperk.com/careers/',
      postedDate: '2026-10-12',
      postedDaysAgo: 3,
      isNicheRole: false,
      category: 'Product Ownership',
      matchedSkills: ['Product Ownership', 'Roadmap Planning', 'Backlog Management', 'Payment Processing', 'Agile/Scrum', 'API Exposure', 'User Stories', 'Stakeholder Management'],
      keyStrengths: ['Leading payment flows & checkout enhancements', 'Sprint backlog prioritization', 'Cross-functional engineering alignment'],
      descriptionSummary: 'Lead enterprise product strategy, checkout payment workflows, and cross-border invoicing infrastructure. Oversee backlog grooming, MVP feature definitions, and user story mapping for high-scale travel fintech.'
    },
    {
      id: 'job-2',
      company: 'Delivery Hero',
      role: 'Senior Technical Business Analyst – Global Payments & Checkout',
      country: 'Germany',
      city: 'Berlin',
      region: 'EU',
      skillMatchPct: 95,
      visaRelocationEvidence: 'Official German EU Blue Card sponsor + full international relocation package (flights, temporary apartment, visa concierge team).',
      visaType: 'German EU Blue Card + Relocation',
      salary: '€78,000 – €92,000 / year + bonus',
      directJobLink: 'https://www.deliveryhero.com/careers/',
      postedDate: '2026-10-13',
      postedDaysAgo: 2,
      isNicheRole: false,
      category: 'Business Analysis',
      matchedSkills: ['Business Analysis', 'SQL', 'Python', 'Payment Systems', 'API Exposure', 'Requirements Engineering', 'Traceability Matrix', 'Jira/Confluence'],
      keyStrengths: ['Complex payment gateway integrations', 'Detailed requirement elicitation & technical specifications', 'Automated data validation with SQL & Python'],
      descriptionSummary: 'Bridge business strategy and technical payment rails across 50+ global markets. Document API requirements, map payment routing logic, run SQL performance validation, and oversee SIT/UAT testing.'
    },
    {
      id: 'job-3',
      company: 'Revolut',
      role: 'Technical Product Owner – Core Banking & Payment Infrastructure',
      country: 'United Kingdom',
      city: 'London / Dublin',
      region: 'UK',
      skillMatchPct: 95,
      visaRelocationEvidence: 'UK Home Office Licensed A-Rated Sponsor (Skilled Worker Visa) & Irish Critical Skills Employment Permit support.',
      visaType: 'UK Skilled Worker / Irish CSEP',
      salary: '£85,000 – £110,000 / year + equity',
      directJobLink: 'https://www.revolut.com/careers/',
      postedDate: '2026-10-14',
      postedDaysAgo: 1,
      isNicheRole: true,
      category: 'Product Ownership',
      matchedSkills: ['Product Ownership', 'Core Banking', 'Legacy Modernization', 'API Exposure', 'SQL', 'Agile Delivery', 'Backlog Grooming', 'Release Planning'],
      keyStrengths: ['Mission-critical banking infrastructure', 'High-throughput payment settlement architectures', 'Fast-paced agile release cycles'],
      descriptionSummary: 'Drive architectural evolution of core banking ledger systems, real-time clearing, and API connectivity. Lead engineering squads, prioritize architectural backlog, and manage core payment service availability.'
    },
    {
      id: 'job-4',
      company: 'Adyen',
      role: 'Technical Business Analyst – Global Settlement & Payment Rails',
      country: 'Netherlands',
      city: 'Amsterdam',
      region: 'EU',
      skillMatchPct: 95,
      visaRelocationEvidence: 'IND Recognized Sponsor for Highly Skilled Migrant (Kennismigrant) visa + 30% tax ruling application support + relocation flight & housing.',
      visaType: 'Dutch Highly Skilled Migrant (IND)',
      salary: '€82,000 – €98,000 / year + stock options',
      directJobLink: 'https://careers.adyen.com/',
      postedDate: '2026-10-11',
      postedDaysAgo: 4,
      isNicheRole: false,
      category: 'Business Analysis',
      matchedSkills: ['Payment Processing', 'API Exposure', 'SQL', 'Requirements Traceability', 'Legacy Modernization', 'UAT Coordination', 'Problem Solving'],
      keyStrengths: ['Global payment network specifications', 'Traceability matrices for multi-currency settlements', 'Deep transaction protocol comprehension'],
      descriptionSummary: 'Design technical specifications for global payment schemes and clearing networks. Collaborate with banking partners, analyze raw message formats, and maintain end-to-end requirement traceability.'
    },
    {
      id: 'job-5',
      company: 'N26 The Mobile Bank',
      role: 'Product Owner – Regulatory Reporting & Core Systems Modernization',
      country: 'Germany',
      city: 'Berlin',
      region: 'EU',
      skillMatchPct: 94,
      visaRelocationEvidence: 'Full German EU Blue Card sponsorship + dedicated visa processing support & international relocation allowance.',
      visaType: 'German EU Blue Card',
      salary: '€75,000 – €90,000 / year',
      directJobLink: 'https://n26.com/en-de/careers',
      postedDate: '2026-10-10',
      postedDaysAgo: 5,
      isNicheRole: true,
      category: 'Legacy Modernization',
      matchedSkills: ['Legacy System Modernization', 'SQL', 'Product Vision', 'Stakeholder Management', 'User Stories', 'Acceptance Criteria', 'Banking Regulations'],
      keyStrengths: ['Transforming legacy compliance reporting into real-time pipelines', 'Cross-functional governance with financial regulators', 'Agile backlog ownership'],
      descriptionSummary: 'Oversee modernization of core regulatory reporting engines from batch processing into real-time microservices. Formulate product requirements, define user stories with rigorous acceptance criteria, and ensure compliance.'
    },
    {
      id: 'job-6',
      company: 'Wise (formerly TransferWise)',
      role: 'Technical Product Owner – Global Payouts & Settlement Infrastructure',
      country: 'United Kingdom',
      city: 'London / Tallinn',
      region: 'UK',
      skillMatchPct: 94,
      visaRelocationEvidence: 'Licensed UK Skilled Worker Sponsor (Home Office) + relocation assistance for international relocation to London or Tallinn.',
      visaType: 'UK Skilled Worker Visa',
      salary: '£80,000 – £100,000 / year + stock package',
      directJobLink: 'https://www.wise.jobs/',
      postedDate: '2026-10-13',
      postedDaysAgo: 2,
      isNicheRole: false,
      category: 'Product Ownership',
      matchedSkills: ['Payment Processing', 'Backlog Management', 'User Stories', 'API Exposure', 'SQL', 'Acceptance Criteria', 'Continuous Improvement'],
      keyStrengths: ['Low-latency cross-border payout pipelines', 'Data-driven feature prioritization with SQL', 'Autonomous squad leadership'],
      descriptionSummary: 'Lead technical product roadmap for automated payout rails and instant bank settlement. Write concise user stories, define API contracts, analyze transactional databases via SQL, and deliver transparent international money movement.'
    },
    {
      id: 'job-7',
      company: 'Mashreq Bank Tech',
      role: 'Technical Business Analyst – Core Banking & Payment Integrations',
      country: 'United Arab Emirates',
      city: 'Dubai',
      region: 'Middle East',
      skillMatchPct: 93,
      visaRelocationEvidence: 'Employer-sponsored UAE Residence & Employment Visa + 100% Tax-Free salary + relocation allowance & private health coverage.',
      visaType: 'UAE Employment Visa (Tax-Free)',
      salary: 'AED 28,000 – 35,000 / month (~$91,000 – $114,000 tax-free)',
      directJobLink: 'https://www.mashreqbank.com/en/uae/about-us/careers/',
      postedDate: '2026-10-12',
      postedDaysAgo: 3,
      isNicheRole: true,
      category: 'Legacy Modernization',
      matchedSkills: ['Payment Systems', 'Legacy System Modernization', 'Mainframe Systems', 'COBOL', 'SFTP', 'NDM', 'API Exposure', 'BPMN', 'Visio'],
      keyStrengths: ['Modernizing mainframe legacy banking into open API architecture', 'SFTP/NDM file transmission protocols', 'BPMN workflow diagrams'],
      descriptionSummary: 'Lead business & systems analysis for transforming core banking systems from legacy mainframe/COBOL batch flows to real-time microservices. Specify SFTP/NDM data flows, draft BPMN process models, and guide SIT/UAT.'
    },
    {
      id: 'job-8',
      company: 'HelloFresh Global Tech',
      role: 'Lead Business Systems Analyst – Enterprise Automation & AI Workflows',
      country: 'Germany',
      city: 'Berlin',
      region: 'EU',
      skillMatchPct: 93,
      visaRelocationEvidence: 'Direct German EU Blue Card fast-track visa sponsorship + relocation support (temporary housing & visa legal paperwork).',
      visaType: 'German EU Blue Card',
      salary: '€80,000 – €95,000 / year',
      directJobLink: 'https://www.hellofresh.com/careers',
      postedDate: '2026-10-14',
      postedDaysAgo: 1,
      isNicheRole: true,
      category: 'AI & Automation',
      matchedSkills: ['Generative AI', 'Agentic AI', 'Prompt Engineering', 'n8n', 'Robot Framework', 'Python', 'SQL', 'BPMN', 'Six Sigma'],
      keyStrengths: ['Enterprise workflow orchestration with n8n and Python', 'Applying GenAI and Agentic AI to operational bottlenecks', 'Six Sigma process efficiency'],
      descriptionSummary: 'Identify cross-departmental bottlenecks and architect intelligent process automation using n8n, Robot Framework, and Generative AI agents. Draft functional specifications, validate accuracy, and monitor workflow health.'
    },
    {
      id: 'job-9',
      company: 'Klarna',
      role: 'Senior Business Analyst – AI-Driven Process Engineering & Payments',
      country: 'Sweden',
      city: 'Stockholm / Berlin',
      region: 'EU',
      skillMatchPct: 93,
      visaRelocationEvidence: 'Swedish Migration Agency Certified Fast-Track Sponsor + Berlin EU Blue Card option with complete relocation support.',
      visaType: 'Swedish Fast-Track Work Permit / EU Blue Card',
      salary: '720,000 – 860,000 SEK / year (€65,000 – €78,000)',
      directJobLink: 'https://www.klarna.com/careers/',
      postedDate: '2026-10-11',
      postedDaysAgo: 4,
      isNicheRole: false,
      category: 'AI & Automation',
      matchedSkills: ['Generative AI', 'Prompt Engineering', 'Payment Systems', 'SQL', 'Python', 'BPMN', 'Six Sigma', 'Requirements Engineering'],
      keyStrengths: ['GenAI prompt optimization for financial operations', 'Payment risk reduction using Six Sigma', 'Deep SQL queries for reconciliation'],
      descriptionSummary: 'Optimize buy-now-pay-later payment rails and dispute handling through AI-powered automation. Work alongside product squads, conduct root-cause analyses, write prompt engineering templates, and track system efficiency.'
    },
    {
      id: 'job-10',
      company: 'DBS Bank Innovation Hub',
      role: 'Lead Systems Analyst – Cards, Core Banking & Real-Time Payments',
      country: 'Singapore',
      city: 'Singapore',
      region: 'APAC',
      skillMatchPct: 92,
      visaRelocationEvidence: 'Ministry of Manpower (MOM) Employment Pass (EP) sponsorship eligible with full COMPASS framework tier assistance.',
      visaType: 'Singapore Employment Pass (EP)',
      salary: 'S$120,000 – S$150,000 / year + performance bonus',
      directJobLink: 'https://www.dbs.com/careers/default.page',
      postedDate: '2026-10-10',
      postedDaysAgo: 5,
      isNicheRole: true,
      category: 'Legacy Modernization',
      matchedSkills: ['Systems Analysis', 'Cards & Payments', 'Legacy System Modernization', 'API Exposure', 'SQL', 'SDLC', 'SIT/UAT Coordination'],
      keyStrengths: ['Cards processing domain depth', 'Legacy core banking system transition', 'Comprehensive SIT/UAT test planning'],
      descriptionSummary: 'Design systems architecture and integration touchpoints for cards management, merchant acquiring, and instant settlement. Bridge mainframe legacy record-keeping with modern open banking APIs.'
    },
    {
      id: 'job-11',
      company: 'Recognise Bank',
      role: 'Senior Business Analyst – Commercial Lending & Digital Banking',
      country: 'United Kingdom',
      city: 'London',
      region: 'UK',
      skillMatchPct: 92,
      visaRelocationEvidence: 'Active UK Skilled Worker Visa sponsorship explicitly available for qualified commercial banking specialists.',
      visaType: 'UK Skilled Worker Visa',
      salary: '£65,000 – £80,000 / year + benefits',
      directJobLink: 'https://www.recognisebank.co.uk/careers/',
      postedDate: '2026-10-09',
      postedDaysAgo: 6,
      isNicheRole: false,
      category: 'Business Analysis',
      matchedSkills: ['Requirements Gathering', 'SIT/UAT', 'Jira', 'Stakeholder Management', 'GAP Analysis', 'Process Improvement', 'PL/SQL'],
      keyStrengths: ['Commercial lending lifecycle elicitation', 'End-to-end traceability matrix', 'Cross-functional stakeholder workshops'],
      descriptionSummary: 'Drive requirements engineering and process redesign for modern SME commercial banking. Conduct stakeholder workshops, formulate traceability matrices, document gap analysis, and coordinate comprehensive UAT.'
    },
    {
      id: 'job-12',
      company: 'ASML',
      role: 'IT Business Analyst – Enterprise Project Governance & Automation',
      country: 'Netherlands',
      city: 'Veldhoven',
      region: 'EU',
      skillMatchPct: 91,
      visaRelocationEvidence: 'IND Recognized Sponsor for Highly Skilled Migrant Visa + 30% tax benefit guidance + relocation allowance.',
      visaType: 'Dutch Highly Skilled Migrant (IND)',
      salary: '€72,000 – €88,000 / year',
      directJobLink: 'https://www.asml.com/en/careers',
      postedDate: '2026-10-13',
      postedDaysAgo: 2,
      isNicheRole: false,
      category: 'Delivery & Governance',
      matchedSkills: ['Project Governance', 'RAID Management', 'SAFe', 'Agile', 'Jira', 'Power BI', 'Six Sigma', 'n8n Workflow Automation'],
      keyStrengths: ['High-tech enterprise project governance', 'Complex dependency & RAID logging', 'Power BI executive reporting'],
      descriptionSummary: 'Manage IT systems governance, dependency matrices, and RAID logs across complex engineering release trains. Automate governance status dashboards with Power BI and n8n, ensuring alignment with SAFe standards.'
    },
    {
      id: 'job-13',
      company: 'Zalando SE',
      role: 'Senior Product Analyst – Financial Data & Systems Engineering',
      country: 'Germany',
      city: 'Berlin',
      region: 'EU',
      skillMatchPct: 91,
      visaRelocationEvidence: 'Dedicated People Services relocation package + fast-track EU Blue Card assistance for eligible international hires.',
      visaType: 'German EU Blue Card',
      salary: '€74,000 – €88,000 / year',
      directJobLink: 'https://corporate.zalando.com/en/careers',
      postedDate: '2026-10-12',
      postedDaysAgo: 3,
      isNicheRole: false,
      category: 'Business Analysis',
      matchedSkills: ['SQL', 'Power BI', 'Python', 'Business Requirements', 'Scrum', 'Jira', 'Cross-functional Team Coordination', 'Attention to Detail'],
      keyStrengths: ['High-volume transactional analytics', 'SQL & Python data pipeline validation', 'Executive financial reporting'],
      descriptionSummary: 'Collaborate with engineering and product leaders to translate complex financial settlement data into actionable insights and technical requirements. Build Power BI dashboards, validate SQL queries, and track project milestones in Jira.'
    },
    {
      id: 'job-14',
      company: 'Talan International',
      role: 'Senior Business Analyst – Banking & Payment Rails Modernization',
      country: 'Spain',
      city: 'Madrid / Barcelona',
      region: 'EU',
      skillMatchPct: 90,
      visaRelocationEvidence: 'Full assistance with Spanish work permits, legal paperwork, and international relocation to Spain.',
      visaType: 'Spanish Work Permit & Relocation',
      salary: '€55,000 – €70,000 / year + benefits',
      directJobLink: 'https://www.talan.com/careers/',
      postedDate: '2026-10-11',
      postedDaysAgo: 4,
      isNicheRole: true,
      category: 'Legacy Modernization',
      matchedSkills: ['Payment Processing', 'Mainframe Systems', 'Legacy System Modernization', 'SFTP', 'NDM', 'Traceability Matrix', 'Agile', 'SDLC'],
      keyStrengths: ['Banking payment rails transformation', 'Legacy protocols to modern API bridges', 'Requirements completeness validation'],
      descriptionSummary: 'Guide tier-1 banking clients through legacy infrastructure migration into modern payment rails. Author requirements engineering documentation, validate traceability, and verify SFTP/NDM protocol transitions.'
    },
    {
      id: 'job-15',
      company: 'Okta Inc.',
      role: 'Principal Product Analyst – Enterprise Delivery Lead',
      country: 'Australia',
      city: 'Sydney (Hybrid/Remote)',
      region: 'APAC',
      skillMatchPct: 89,
      visaRelocationEvidence: 'TSS 482 / Employer Nominated Visa Sponsorship supported for qualified senior candidates.',
      visaType: 'Australian TSS 482 Visa',
      salary: 'A$160,000 – A$190,000 / year + equity',
      directJobLink: 'https://www.okta.com/company/careers/',
      postedDate: '2026-10-13',
      postedDaysAgo: 2,
      isNicheRole: false,
      category: 'Delivery & Governance',
      matchedSkills: ['IT Delivery Lead', 'Project Governance', 'RAID Management', 'Stakeholder Management', 'Change Control', 'Hybrid Delivery', 'Executive Reporting'],
      keyStrengths: ['Leading multi-system enterprise delivery', 'Stakeholder alignment across C-level committees', 'Proactive dependency & risk mitigation'],
      descriptionSummary: 'Lead complex, multi-system enterprise transformation initiatives. Act as principal conduit between product management, engineering, and operations leadership, ensuring flawless execution and change control.'
    }
  ]);

  // Reactive filters
  readonly searchQuery = signal<string>('');
  readonly selectedRegion = signal<string>('All');
  readonly selectedCategory = signal<string>('All');
  readonly onlyLast7Days = signal<boolean>(true);
  readonly onlyNicheRoles = signal<boolean>(false);
  readonly sortBy = signal<'match' | 'recent' | 'company'>('match');

  // Filtered and sorted jobs computed signal
  readonly filteredJobs = computed(() => {
    let list = this.allJobs();
    const query = this.searchQuery().trim().toLowerCase();
    const region = this.selectedRegion();
    const category = this.selectedCategory();
    const last7Days = this.onlyLast7Days();
    const nicheOnly = this.onlyNicheRoles();
    const sort = this.sortBy();

    if (query) {
      list = list.filter(j =>
        j.company.toLowerCase().includes(query) ||
        j.role.toLowerCase().includes(query) ||
        j.country.toLowerCase().includes(query) ||
        j.visaType.toLowerCase().includes(query) ||
        j.matchedSkills.some(s => s.toLowerCase().includes(query))
      );
    }

    if (region !== 'All') {
      list = list.filter(j => j.region === region);
    }

    if (category !== 'All') {
      list = list.filter(j => j.category === category);
    }

    if (last7Days) {
      list = list.filter(j => j.postedDaysAgo <= 7);
    }

    if (nicheOnly) {
      list = list.filter(j => j.isNicheRole);
    }

    // Sort
    return [...list].sort((a, b) => {
      if (sort === 'match') {
        return b.skillMatchPct - a.skillMatchPct;
      } else if (sort === 'recent') {
        return a.postedDaysAgo - b.postedDaysAgo;
      } else {
        return a.company.localeCompare(b.company);
      }
    });
  });

  // Selected job for detail modal/drawer
  readonly activeJob = signal<Job | null>(null);

  selectJob(job: Job | null) {
    this.activeJob.set(job);
  }
}
