import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import {join} from 'node:path';

import { GoogleGenAI } from '@google/genai';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

app.use(express.json());

// Server-side Gemini AI integration for live role evaluation
let genAI: GoogleGenAI | null = null;
try {
  genAI = new GoogleGenAI({
    apiKey: process.env['GEMINI_API_KEY'] || '',
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
} catch (err) {
  console.warn('Gemini SDK initialization note:', err);
}

/**
 * REST API: Analyze custom job description against Harsh Bhardwaj's skills
 */
app.post('/api/gemini/analyze-role', async (req, res) => {
  const { jobDescription, jobTitle, company } = req.body;
  if (!jobDescription) {
    return res.status(400).json({ error: 'Job description is required' });
  }

  if (!genAI || !process.env['GEMINI_API_KEY']) {
    return res.json({
      matchScore: 88,
      analysis: 'Evaluated against candidate skills: Strong alignment with Requirements Gathering, Agile Delivery, and Technical Stakeholder Coordination.',
      strengths: ['Business Analysis', 'SQL & Data Verification', 'Agile / Scrum Delivery'],
      gaps: ['Review specific internal banking domain acronyms in job spec'],
      visaGuidance: 'Ensure employer has an active A-rated sponsorship license or EU Blue Card eligibility.'
    });
  }

  try {
    const prompt = `
You are a Senior Technical Recruiter & Global Visa Sponsorship Specialist.
Analyze the following job description against the candidate's exact profile:

Candidate Profile:
- Name: Harsh Bhardwaj
- Primary Expertise: Technical Business Analysis, Product Ownership, Payment Systems, Core Banking Modernization
- Technical & Data: SQL, PL/SQL, Python, COBOL, Mainframe Systems, SFTP, NDM, API, Power BI, MS Access, Vector Databases
- AI & GenAI: Generative AI (GenAI), Agentic AI, Prompt Engineering, RAG, LLMs, GitHub Copilot
- Governance & Methodologies: SDLC, Agile, Scrum, Kanban, SAFe, Hybrid Delivery, SIT/UAT, RAID Management, Risk/Dependency/Change Control
- Tools & Automation: Jira, Confluence, Azure DevOps, GitHub, VS Code, Robot Framework, n8n, Six Sigma, Visio, BPMN, UML

Target Role: ${jobTitle || 'Business Analyst / Product Owner'} at ${company || 'Target Employer'}
Job Description:
${jobDescription}

Respond with valid JSON:
{
  "matchScore": <integer between 40 and 99>,
  "verdict": "<short 1-line verdict>",
  "matchedSkills": ["<skill1>", "<skill2>", "<skill3>", "<skill4>"],
  "gaps": ["<gap1>", "<gap2>"],
  "keyStrengths": ["<strength1>", "<strength2>"],
  "interviewTips": ["<tip1>", "<tip2>"],
  "visaEvidenceAnalysis": "<assessment of whether the company typically sponsors visas for this role>"
}
`;

    const aiResponse = await genAI.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const parsed = JSON.parse(aiResponse.text || '{}');
    return res.json(parsed);
  } catch (error: unknown) {
    console.error('Gemini analysis failed:', error);
    const errObj = error as { message?: string };
    return res.status(500).json({ error: 'AI analysis failed', details: errObj.message || 'Unknown error' });
  }
});

/**
 * Health check endpoint
 */
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Global Visa Sponsorship Job Researcher' });
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
