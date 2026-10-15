# Global Visa Sponsorship Job Researcher & Alert Hub 🌍✈️

An intelligent, full-stack web application designed to research, verify, and monitor active global job openings offering **Visa Sponsorship, Work Permit Support, and Relocation Packages** across the UK, EU, APAC, and the Middle East.

Built specifically for senior technology profiles combining **Technical Business Analysis, Payment Systems & Core Banking Modernization (Mainframe/COBOL), Product Ownership, and Applied Generative AI**.

Includes an automated **Daily Gmail Alert Engine** with built-in deduplication that dispatches new opportunities directly to your inbox while ensuring zero repeat emails.

---

## 🚀 Key Features

### 1. Verified Active Visa Jobs Matrix
- **Strict Verification Standards:** Only lists active positions with verifiable sponsorship evidence (e.g., UK Home Office Licensed A-Rated Sponsors, German EU Blue Card eligibility, Dutch IND Highly Skilled Migrant 30% Ruling, Singapore MOM Employment Pass, and UAE Tax-Free relocation).
- **Domain & Niche Specialization:** Covers niche roles in Core Banking Modernization, Payment Rails, Enterprise AI Process Automation, and FinTech.
- **Skill Match Scoring:** Dynamically benchmarks job requirements against 7 candidate skill pillars to provide match percentages (up to 96%).
- **Multi-Region Filtering:** Filter by UK, EU (Germany, Netherlands, Spain), APAC (Singapore, Australia), or the Middle East (Dubai/UAE).
- **Direct Application Links:** Every listing links directly to the verified corporate career portal.

### 2. Daily Gmail Alert Dispatcher & Deduplication Engine
- **Automated Alerts:** Dispatches daily email alerts to your configured address (`harshbhardwajj89@gmail.com`).
- **Smart Deduplication:** Caches and remembers all dispatched job IDs across sessions to strictly avoid duplicate notifications.
- **Zero-Duplicate Confirmation:** If no new jobs have been posted within the tracking window, automatically sends a concise confirmation notice stating *"No new matching jobs found today"*.
- **Google Workspace / Gmail API:** Integrates with official Google Identity & Firebase Authentication using the least-privilege `gmail.send` scope.
- **User Confirmation Dialog:** Presents an explicit confirmation modal before any email is dispatched.

### 3. Top 10 Job Titles & Boolean Search Matrix
- **Curated Titles:** Top 10 target titles aligned with candidate strengths (e.g., *Technical Business Analyst – Core Banking & Payment Systems*, *Legacy Modernization Systems Analyst*, *AI Solutions BA*).
- **One-Click Boolean Strings:** Copy pre-formatted search queries optimized for LinkedIn Jobs, Google Jobs, Indeed, and Seek.
- **Geographic Targeting:** Pinpoints the highest-yield countries and tech hubs for each role category.

### 4. Live AI Match Evaluator (Powered by Gemini 3.8 Flash)
- **Instant Role Benchmarking:** Paste any external job description into the evaluator.
- **Server-Side AI Analysis:** Evaluates candidate fit, extracts matched vs missing skills, generates interview preparation strategies, and estimates visa sponsorship likelihood.

### 5. Resume Skills Profile Breakdown
- Visual breakdown of candidate competencies:
  - **Business Analysis & Delivery:** Traceability matrices, elicitation, workshops, SIT/UAT coordination.
  - **Payments & Modernization:** Legacy mainframe systems, COBOL, SFTP, NDM, payment rails, REST APIs.
  - **Data & Query Languages:** SQL, PL/SQL, Python, Power BI, MS Access, Vector Databases.
  - **AI & Generative AI:** LLMs, Agentic AI, RAG, Prompt Engineering, GitHub Copilot.
  - **Product Ownership:** Backlog grooming, roadmap planning, user stories, MVP scoping.
  - **Methodologies & Governance:** SAFe, Agile, Scrum, Kanban, RAID management, change control.
  - **Tools & Automation:** Jira, Azure DevOps, Robot Framework, n8n, BPMN, UML, Six Sigma.

---

## 🛠️ Tech Stack & Architecture

- **Frontend:** [Angular 21](https://angular.dev/) (Zoneless architecture, Signals state management, standalone components, OnPush change detection)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) with Google Material Icons
- **Backend & SSR:** [Node.js](https://nodejs.org/) & [Express 5](https://expressjs.com/) with Angular SSR
- **AI Engine:** Google Gemini 3.8 Flash via the modern [`@google/genai`](https://www.npmjs.com/package/@google/genai) TypeScript SDK
- **Authentication & OAuth:** [Firebase Auth](https://firebase.google.com/) + Google Workspace OAuth (`https://www.googleapis.com/auth/gmail.send`)
- **API Communication:** Browser-to-server REST proxies with server-side API secret encapsulation

---

## 📁 Project Structure

```
├── angular.json                 # Angular CLI & Vite SSR build configuration
├── firebase-applet-config.json  # Firebase client credentials
├── metadata.json                # AI Studio capability declarations
├── package.json                 # Project dependencies & scripts
├── src/
│   ├── app/
│   │   ├── models/
│   │   │   └── job.model.ts     # Data contracts for jobs, alerts, recommendations
│   │   ├── services/
│   │   │   ├── alerts.service.ts # Gmail dispatch, deduplication, HTML email builder
│   │   │   ├── auth.service.ts   # Google Sign-in & in-memory token management
│   │   │   └── jobs.service.ts   # Verified jobs database, filters, search logic
│   │   ├── app.ts               # Root component logic & UI state handlers
│   │   ├── app.html             # UI layout: researcher table, alert hub, AI analyzer
│   │   └── app.css              # Custom styling & Google Sign-In standards
│   ├── index.html               # Entry HTML shell & SEO meta tags
│   ├── main.ts                  # Client bootstrapping
│   ├── main.server.ts           # SSR bootstrap with Angular 21 BootstrapContext
│   ├── server.ts                # Express backend, Gemini AI endpoint, SSR engine
│   └── styles.css               # Global Tailwind CSS imports
└── tsconfig.json                # Strict TypeScript configuration
```

---

## ⚙️ Setup & Installation

### 1. Prerequisites
- **Node.js** >= 20.x
- **npm** >= 10.x

### 2. Clone Repository
```bash
git clone https://github.com/your-username/global-visa-sponsorship-job-researcher.git
cd global-visa-sponsorship-job-researcher
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Populate the values:
```ini
# GEMINI_API_KEY: Used server-side for the role evaluator
GEMINI_API_KEY="your-gemini-api-key"

# APP_URL: Host URL of the deployed application
APP_URL="http://localhost:3000"
```

### 5. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

---

## ✉️ Gmail Alert Configuration

1. Click **"Sign in with Google"** in the top navigation bar.
2. Grant permission for sending emails via the authorized Gmail API prompt (`gmail.send`).
3. Click **"Send Daily Alert Now"** to preview the exact HTML formatted email.
4. Click **"Confirm & Send via Gmail"** in the confirmation dialog to dispatch.
5. All dispatched job IDs are recorded to prevent duplicates on subsequent automated or manual runs.

---

## 🔒 Security & Best Practices

- **Zero Client Secrets:** The Gemini API key resides solely on the Express server and is never exposed to the client bundle.
- **In-Memory OAuth Token Caching:** Access tokens are kept strictly in memory during an authenticated session and are wiped immediately upon sign-out.
- **User Authorization Protocol:** Conforms with Google Workspace security guidelines requiring explicit user confirmation before any email mutation or dispatch.

---

## 📄 License

This project is licensed under the MIT License - feel free to adapt and customize for your own job search workflows.
