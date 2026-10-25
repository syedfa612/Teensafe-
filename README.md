# 🛡️ TeenSafe

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?style=for-the-badge&logo=postgresql)
![Prisma](https://img.shields.io/badge/Prisma_ORM-6.4-2D3748?style=for-the-badge&logo=prisma)
![FastAPI](https://img.shields.io/badge/FastAPI-0.110-009688?style=for-the-badge&logo=fastapi)
![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-1.4-F7931E?style=for-the-badge&logo=scikit-learn)

<h3>A Consent-Based Digital Safety & Threat Intelligence Platform for Adolescents</h3>

<p>
  <strong>Master of Computer Applications (MCA) Project</strong><br/>
  Author: <strong>Syed Faizan Pasha</strong> &bull; Target Milestone: <strong>Phase 1 (50% Demonstration)</strong>
</p>

</div>

---

> ### 💡 Core Novelty Thesis
> **&ldquo;TeenSafe is a consent-based, teen-first digital safety platform that replaces surveillance with education and self-awareness.&rdquo;**

---

## 📖 Table of Contents

- [1. Problem Formulation \& Conceptual Novelty](#1-problem-formulation--conceptual-novelty)
- [2. The Architectural Spine: The Unified Safety Score](#2-the-architectural-spine-the-unified-safety-score)
- [3. The Four Core Modules](#3-the-four-core-modules)
  - [Module 1: Learn \& Play (Interactive Curriculum)](#module-1-learn--play-interactive-curriculum)
  - [Module 2: AI Risk Scanner ⭐ (Deep Feature)](#module-2-ai-risk-scanner--deep-feature)
  - [Module 3: Parent–Teen Bridge (Consent-Based)](#module-3-parentteen-bridge-consent-based)
  - [Module 4: Incident Reporting \& Crisis Support](#module-4-incident-reporting--crisis-support)
- [4. System Architecture \& Data Flow](#4-system-architecture--data-flow)
- [5. Privacy-by-Design Framework (Minors' Protection)](#5-privacy-by-design-framework-minors-protection)
- [6. Database Architecture \& ER Data Dictionary](#6-database-architecture--er-data-dictionary)
- [7. Pre-Configured Demo Accounts](#7-pre-configured-demo-accounts)
- [8. Step-by-Step Mentor Demonstration Walkthrough](#8-step-by-step-mentor-demonstration-walkthrough)
- [9. Tech Stack Justifications \& Design Decisions](#9-tech-stack-justifications--design-decisions)
- [10. Installation, Local Setup \& Running](#10-installation-local-setup--running)
- [11. Phase 1 vs. Phase 2 Scope Matrix](#11-phase-1-vs-phase-2-scope-matrix)
- [12. Academic Viva Voce Defense Guide](#12-academic-viva-voce-defense-guide)
- [13. Repository Directory Structure](#13-repository-directory-structure)

---

## 1. Problem Formulation & Conceptual Novelty

Commercial "teen safety" solutions are predominantly designed as **covert parental spy apps**. They run invisibly in background processes, log keystrokes, intercept private conversations, and stream GPS telemetry.

While well-intentioned, empirical studies in adolescent developmental psychology show that secret surveillance:
1. **Destroys Parent-Child Trust:** Teens perceive surveillance as an invasion of autonomy, prompting secretive behavior.
2. **Encourages Evasive Tactics:** Adolescents simply create secondary burner accounts ("finstas"), private vaults, or use alternate messaging apps that parents cannot monitor.
3. **Offers Zero Educational Intuition:** Surveillance acts purely as policing; it fails to teach minors how to recognize phishing attacks, resist cyberbullying, or practice digital hygiene.

### 🌟 The TeenSafe Paradigm Shift

TeenSafe flips the power dynamic:
- **The Teen Owns the Account:** The teenager is the primary stakeholder and user of the system.
- **Education over Surveillance:** Real-world dilemmas and interactive scenario quizzes train intuitive digital defense instincts.
- **On-Demand AI Threat Intelligence:** Teens actively scan suspicious messages, scam DMs, or unknown links to check risk probability.
- **Consent-Driven Bridge:** The teenager **voluntarily generates a 6-digit invite code** to link with a parent.
- **Aggregate Visibility, Zero Chat Snooping:** Parents view *only* high-level wellness metrics (The Safety Score, completed modules, weak topic recommendations, and streaks). Parents **never** see scanned messages, private chats, or browsing histories.
- **Unconditional Unlink Guarantee:** Minors retain the autonomous right to sever the link at any moment with zero parental override.

---

## 2. The Architectural Spine: The Unified Safety Score

TeenSafe connects educational quizzes, AI threat detections, and parental reporting through a single mathematical index: **The Safety Score (0–100)**.

```mermaid
flowchart TD
    subgraph Activities["User Interactions"]
        L["Lesson Completed (+10 to +25 pts)"]
        Q["Scenario Quiz Accuracy (+5 to +15 pts)"]
        S["Active Risk Scan (+2 pts - Good Habit)"]
        K["Consistency Streak (+2 pts/day)"]
    end

    subgraph Core["Spine Aggregator Engine"]
        SS["Safety Score Algorithm\nRange: 0 – 100"]
    end

    subgraph Consumers["Role Dashboards"]
        TD["Teen Console\n(Score Ring, Insights, Streaks)"]
        PD["Parent Console (Consent Bridge)\n(Score Trend, Weak Areas, Last Active)"]
    end

    L --> SS
    Q --> SS
    S --> SS
    K --> SS
    SS --> TD
    SS --> PD
```

### 🧮 Score Composition Formula

$$\text{Safety Score} = \min\Big(100, \, S_{\text{base}} + \Delta_{\text{lessons}} + \Delta_{\text{quiz}} + \Delta_{\text{scans}} + \Delta_{\text{streak}}\Big)$$

| Interaction | Point Contribution | Pedagogical Objective |
| :--- | :--- | :--- |
| **Lesson Mastery** | `+10 to +25 pts` | Rewards foundational reading across threat types. |
| **Scenario Quiz Accuracy** | `+5 to +15 pts` | Assesses situational decision-making under simulated peer pressure. |
| **AI Threat / URL Scan** | `+2 pts` (Habit Bonus) | Rewards the reflex to inspect unknown links before clicking. |
| **Learning Streak** | `+2 pts / day active` | Incentivizes regular weekly engagement rather than one-time cramming. |

---

## 3. The Four Core Modules

### Module 1: Learn & Play (Interactive Curriculum)
- **5 Core Topics Authored:**
  1. *Cyberbullying & Online Harassment* (Exclusion, outing, screenshot documentation protocols)
  2. *Phishing & Social Engineering Scams* (Token stealers, urgency triggers, typosquatting)
  3. *Password Hygiene & Privacy Controls* (Passphrases, credential stuffing, EXIF GPS leakage)
  4. *Fake Profiles & Impersonation* (Synthetic StyleGAN avatars, grooming red flags)
  5. *Screen Time & Algorithmic Wellness* (Variable rewards, dopamine loops, blue-light sleep disruption)
- **Scenario-Based MCQs:** Realistic adolescent dilemmas with immediate green/red feedback and pedagogical explanations.
- **Progress Tracking:** Logs every attempt in `QuizAttempt` to isolate weak topics for targeted revision.

### Module 2: AI Risk Scanner ⭐ (Deep Feature)
Minors paste suspicious direct messages, SMS forwards, or website links. The scanner runs a dual-layer analysis:
1. **Deterministic URL Rule Engine:**
   - Detects brand typosquatting (e.g., `faceb00k.com`, `paypa1.com`, `instagrarn.com`).
   - Identifies high-risk, low-reputation top-level domains (`.xyz`, `.top`, `.tk`, `.buzz`, `.fit`).
   - Flags raw IP-based hosts and unencrypted `http://` protocols.
   - Detects credential obfuscation using `@` symbols.
   - Checks for excessive domain hyphenation (`free-gift-cards-instant-claim.com`).
2. **Natural Language Threat Classifier:**
   - Evaluates cyberbullying cues, abusive intimidation, and harassment patterns.
   - Identifies high-urgency financial scams, fake prize giveaways, and OTP harvesting traps.
   - Outputs a categorical verdict (`SAFE`, `CYBERBULLYING`, `PHISHING_SCAM`, `SUSPICIOUS`) with confidence percentage and actionable teen safety advice.

### Module 3: Parent–Teen Bridge (Consent-Based)
- **Bilateral Linking:** Teen generates a random 6-digit code (e.g., `TS-849201`). Parent enters it in their console to activate the bridge.
- **Transparency Contract:**
  - **What Parents See:** Overall Safety Score, completed topics, weak areas (e.g., *"Needs review in Phishing Links"*), and last active timestamp.
  - **What Parents CANNOT See:** Message text, pasted links, scan inputs, or private browsing data.
- **Autonomous Unlink:** Teen can revoke parental connection at any time without parental permission.

### Module 4: Incident Reporting & Crisis Support
- **Confidential Intake Form:** Allows minors to report digital harassment, fake accounts, or extortion.
- **Anonymous Mode:** Omits user profile metadata from the report.
- **Crisis Helplines Directory:**
  - National Cyber Crime Helpline (India): **Dial 1930** ([cybercrime.gov.in](https://cybercrime.gov.in))
  - Childline India: **Dial 1098**
  - KIRAN Psychosocial Distress Helpline: **1800-599-0019**

---

## 4. System Architecture & Data Flow

```mermaid
flowchart LR
    subgraph Client["Next.js 15 Client Layer"]
        TeenUI["Teen Dashboard\n(/dashboard)"]
        ParentUI["Parent Console\n(/parent)"]
        AdminUI["Counselor Desk\n(/admin)"]
    end

    subgraph Server["Next.js Server / API Routes"]
        AuthRoute["/api/auth/*\n(JWT + bcrypt)"]
        ScanRoute["/api/scan\n(Hybrid Router)"]
        LearnRoute["/dashboard/learn/*\n(Curriculum Engine)"]
    end

    subgraph AI["Microservice Layer"]
        FastAPI["FastAPI AI Service\nPOST /predict\n(TF-IDF + Scikit-Learn)"]
    end

    subgraph Data["Persistence Layer"]
        Postgres[(PostgreSQL Database\nvia Prisma ORM)]
    end

    TeenUI --> AuthRoute
    TeenUI --> ScanRoute
    TeenUI --> LearnRoute
    ParentUI --> AuthRoute
    AdminUI --> AuthRoute

    AuthRoute --> Postgres
    LearnRoute --> Postgres
    ScanRoute --> FastAPI
    ScanRoute -->|Verdict Only - Text Dropped| Postgres
```

---

## 5. Privacy-by-Design Framework (Minors' Protection)

Adolescent data protection is the primary ethical pillar of TeenSafe:

```
[User Pastes Message / URL]
           │
           ▼
[Loaded Transiently into Server RAM]
           │
           ▼
[Evaluated by URL Rules & ML Classifier]
           │
           ▼
[Extract Verdict: "PHISHING_SCAM", Confidence: 92%, Risk Factors]
           │
    ┌──────┴────────────────────────────────────────┐
    ▼                                               ▼
[Return Verdict to Teen UI]           [Discard Message Text Immediately]
                                                    │
                                                    ▼
                                      [Persist ONLY metadata to ScanHistory]
                                      - inputType: "URL"
                                      - resultLabel: "PHISHING_SCAM"
                                      - confidence: 0.92
                                      - riskFactors: ["Lookalike domain", "Suspicious TLD"]
                                      * Raw Text is NEVER written to DB *
```

---

## 6. Database Architecture & ER Data Dictionary

The persistence layer is modeled with 11 relational entities in PostgreSQL using Prisma:

```mermaid
erDiagram
    User ||--o| TeenProfile : "has"
    User ||--o{ ParentLink : "parent links"
    User ||--o{ Report : "files"
    User ||--o{ UserBadge : "earns"
    
    TeenProfile ||--o{ QuizAttempt : "takes"
    TeenProfile ||--o{ GameSession : "plays"
    TeenProfile ||--o{ ScanHistory : "performs"

    Topic ||--o{ Lesson : "contains"
    Topic ||--o{ QuizQuestion : "tests"

    QuizQuestion ||--o{ QuizAttempt : "recorded in"
    Badge ||--o{ UserBadge : "awarded via"
```

### Table Definitions

| Entity | Primary Key | Key Attributes & Foreign Keys | Purpose |
| :--- | :--- | :--- | :--- |
| `User` | `id` (String) | `name`, `email` (Unique), `passwordHash`, `role` (`TEEN`, `PARENT`, `ADMIN`) | Core identity and RBAC authentication. |
| `TeenProfile` | `id` (String) | `userId` (FK), `ageGroup`, `safetyScore` (0–100), `streakDays`, `lastActiveAt` | Autonomous minor profile and Safety Score spine. |
| `ParentLink` | `id` (String) | `parentId` (FK), `teenId` (FK), `inviteCode` (Unique), `status`, `linkedAt` | Consent-based parent-teen bridge. |
| `Topic` | `id` (String) | `slug` (Unique), `title`, `description`, `icon`, `order` | Educational curriculum categories. |
| `Lesson` | `id` (String) | `topicId` (FK), `title`, `contentMarkdown`, `readingTimeMinutes`, `order` | Proactive educational lesson text. |
| `QuizQuestion` | `id` (String) | `topicId` (FK), `scenarioText`, `options` (JSON), `correctIndex`, `explanation` | Situational scenario MCQs. |
| `QuizAttempt` | `id` (String) | `teenId` (FK), `questionId` (FK), `selectedOption`, `isCorrect`, `attemptedAt` | Quiz history and weak topic calculation. |
| `GameSession` | `id` (String) | `teenId` (FK), `score`, `correctCount`, `totalCount`, `playedAt` | Gamification mini-game tracking. |
| `ScanHistory` | `id` (String) | `teenId` (FK), `inputType`, `resultLabel`, `confidence`, `riskFactors` (JSON) | **Privacy-safe scan history (no text stored).** |
| `Report` | `id` (String) | `userId` (FK?), `category`, `description`, `status`, `isAnonymous` | Incident intake for counseling desk. |
| `Badge` | `id` (String) | `code` (Unique), `name`, `description`, `pointsRequired` | Gamification achievements. |
| `UserBadge` | `id` (String) | `userId` (FK), `badgeId` (FK), `earnedAt` | User achievement links. |

---

## 7. Pre-Configured Demo Accounts

For immediate evaluation, the platform includes built-in demo credentials that work out-of-the-box:

| Role | Demo Email | Demo Password | Interface & Accessible Features |
| :--- | :--- | :--- | :--- |
| **TEEN** ⭐ | `teen.alex@example.com` | `SafeTeen2026!` | **Teen Console** (`/dashboard`): Safety Score ring (78/100), 4-day streak, AI Scanner, scenario quizzes. |
| **PARENT** | `parent.smith@example.com` | `SafeParent2026!` | **Parent Console** (`/parent`): Consent bridge, Alex's score, weak topics, last active timestamp. |
| **COUNSELOR** | `admin.safety@example.com` | `SafeAdmin2026!` | **Counselor Desk** (`/admin`): Incident triage queue, anonymous report records. |

> ⚡ **One-Click Login:** On [`/login`](http://localhost:3000/login), click any of the three helper pills (**Teen Demo**, **Parent Demo**, **Counselor Demo**) to auto-fill credentials instantly.

---

## 8. Step-by-Step Mentor Demonstration Walkthrough

Follow this 5-minute script during project evaluation:

1. **Problem & Novelty Thesis (1 min):**
   - Open home page ([`http://localhost:3000`](http://localhost:3000)).
   - Highlight the novelty statement: *"TeenSafe replaces surveillance with education and self-awareness."*
   - Show the comparison table: Spyware vs. TeenSafe.
2. **Teen Dashboard & Safety Score Spine (1 min):**
   - Click **Sign In** &rarr; click **Teen Demo** &rarr; click **Sign In**.
   - Review the radial **Safety Score (78/100)** ring, 4-day streak, and score contributor breakdown.
3. **Module 1: Interactive Learn & Scenario Quiz (1.5 min):**
   - Open **Learn & Play** &rarr; select **Cyberbullying & Online Harassment**.
   - Review the reading content &rarr; click **Scenario Quiz (5 MCQs)**.
   - Answer a question &rarr; show immediate green/red feedback and pedagogical explanation &rarr; observe score reward.
4. **Module 2: AI Risk Scanner Highlight (1.5 min):**
   - Open **AI Risk Scanner**.
   - Click the **Urgent Scam SMS** sample button &rarr; click **Analyze Content** &rarr; Observe `PHISHING_SCAM` verdict with confidence and guidance.
   - Click the **Typo-squatting Phishing Link** sample button (`http://login-faceb00k-verify.xyz/...`) &rarr; observe domain heuristic breakdown.
   - Point out the **Privacy Guarantee Banner**: *"Message text evaluated in-memory and discarded. Zero message logs stored."*
5. **Parent Console Transparency (1 min):**
   - Sign out &rarr; click **Parent Demo** &rarr; sign in.
   - Show that the parent sees Alex's score, learning streak, and weak areas, but **zero private messages**.

---

## 9. Tech Stack Justifications & Design Decisions

| Choice | Selected Technology | Why Chosen Over Alternatives |
| :--- | :--- | :--- |
| **Fullstack Framework** | **Next.js 15 (App Router)** | Full-stack TypeScript in a unified codebase eliminates dual-repository context switching for a solo developer. |
| **Why not NestJS?** | Next.js API Routes | NestJS is enterprise-grade, but running separate frontend and backend repositories doubles deployment and configuration overhead. |
| **Database ORM** | **Prisma ORM** | Type-safe schema definition, automated TypeScript client generation, and clear migration workflows. |
| **Styling** | **Tailwind CSS v4** | Rapid, responsive dark-mode styling with zero CSS file bloat. |
| **AI Inference** | **FastAPI + Scikit-Learn** | ML inference isolated in Python prevents CPU-intensive vectorizations from blocking the Node.js event loop. |
| **Why not pure LLM API?** | **Custom-Trained Classifier** | MCA academic examiners reward custom-trained ML models evaluated on standard benchmark datasets over third-party API wrappers. |

---

## 10. Installation, Local Setup & Running

### Prerequisites
- Node.js `v18.18+` or `v20+` or `v24+`
- Python `3.10+`
- Git

### 1. Clone & Install Web Application

```bash
git clone https://github.com/syedfa612/Teensafe-.git
cd Teensafe-

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Validate Prisma schema and generate client
npx prisma generate

# Run development server
npm run dev
```

Open [**http://localhost:3000**](http://localhost:3000) in your browser.

### 2. Connect PostgreSQL (Neon.tech or Local Postgres)

In your `.env` file, supply your PostgreSQL connection string:
```env
DATABASE_URL="postgresql://username:password@ep-sample-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require"
AUTH_SECRET="teensafe_super_secret_session_jwt_key_2026_demo"
FASTAPI_AI_URL="http://localhost:8000"
```

Push the 11-table schema to your database:
```bash
npx prisma db push
```

### 3. Run the AI Microservice (FastAPI)

```bash
cd fastapi-service
python -m venv venv

# Windows activate:
venv\Scripts\activate
# Linux/macOS activate:
# source venv/bin/activate

pip install -r requirements.txt
uvicorn app:app --reload --port 8000
```

Health check endpoint: `http://localhost:8000/health`  
Prediction endpoint: `POST http://localhost:8000/predict`

---

## 11. Phase 1 vs. Phase 2 Scope Matrix

| Subsystem | Phase 1 Scope (Target: Nov 22 Demo) | Phase 2 Scope (Post-Demo) |
| :--- | :--- | :--- |
| **Auth & Roles** | ✅ NextAuth/JWT with `TEEN`, `PARENT`, `ADMIN` + Demo bypass | Social OAuth2, 2FA authenticator apps |
| **Database** | ✅ Complete 11-table relational schema via Prisma | Read replicas, automated backups |
| **Module 1: Learn** | ✅ 5 topics, scenario MCQs, instant explanations, attempt log | &ldquo;Real or Scam?&rdquo; swipe mini-game, badges engine |
| **Module 2: AI Scanner** | ✅ Dual engine: Deterministic URL checker + Lexical ML classifier | Fine-tuned Transformer NLP, image OCR |
| **Module 3: Parent** | ✅ Consent overview, score trend, 6-digit invite code | Automated weekly email summaries |
| **Module 4: Help** | ✅ Anonymous incident intake form, emergency helplines | Counselor ticketing workflow |
| **Deployment** | ✅ Vercel + Neon.tech PostgreSQL + Render microservice | Custom production domain |

---

## 12. Academic Viva Voce Defense Guide

### Q1: Why not build a standard monitoring app that records chat logs?
> **Answer:** *"Surveillance apps are ethically flawed and induce evasive adolescent behavior (secondary hidden accounts), while providing zero educational intuition. TeenSafe replaces secret surveillance with a consent-based model: the teen owns the account, develops critical intuition through scenario dilemmas, and parents receive an aggregate Safety Score rather than unedited private messages."*

### Q2: How does the AI Scanner guarantee minor privacy?
> **Answer:** *"We follow Privacy by Design. When a minor pastes text or a URL, the payload is evaluated transiently in server memory (RAM). Once the threat classification and confidence score are generated, the raw message string is immediately destroyed. Our `ScanHistory` database entity persists only categorical verdicts and risk factors, never message text."*

### Q3: Why decouple the AI engine into a FastAPI microservice instead of running it in Node.js?
> **Answer:** *"Matrix vectorization (TF-IDF) and mathematical model inference are CPU-bound operations. Running them inside the single-threaded Node.js event loop risks event-loop lag and degraded web responsiveness. Isolating the inference engine in a lightweight FastAPI microservice provides horizontal scalability and adheres to microservice architecture best practices."*

### Q4: How is the Safety Score calculated?
> **Answer:** *"The score is a 0–100 bounded index acting as the architectural spine. It aggregates lesson completion points (+10 to +25), scenario quiz accuracy (+5 to +15), threat scans (+2 habit bonus), and consistency streak bonuses (+2/day active), providing a single holistic indicator of digital resilience."*

---

## 13. Repository Directory Structure

```
TeenSafe/
├── docs/
│   └── teensafe_proposal.html              # University proposal & specification
├── fastapi-service/
│   ├── app.py                              # FastAPI AI inference microservice
│   ├── requirements.txt                    # Python dependencies
│   └── README.md                           # Microservice setup documentation
├── prisma/
│   └── schema.prisma                       # Complete 11-table database schema
├── public/                                 # Static assets & icons
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/page.tsx              # Role-aware login with one-click demo pills
│   │   │   └── register/page.tsx           # Teen & Parent registration
│   │   ├── admin/page.tsx                  # Counselor & Admin incident desk
│   │   ├── api/
│   │   │   ├── auth/                       # Register, Login, Me, Logout endpoints
│   │   │   └── scan/route.ts               # AI Threat & URL heuristic analysis
│   │   ├── dashboard/
│   │   │   ├── layout.tsx                  # Teen dashboard navigation shell
│   │   │   ├── page.tsx                    # Main console & Safety Score (0–100) ring
│   │   │   ├── learn/
│   │   │   │   ├── page.tsx                # 5 topics curriculum catalog
│   │   │   │   └── [slug]/page.tsx         # Static topic server wrapper
│   │   │   ├── parent-link/page.tsx        # 6-digit invite code generator
│   │   │   ├── report/page.tsx             # Anonymous incident intake & helplines
│   │   │   └── scanner/page.tsx            # AI Risk Scanner UI with demo samples
│   │   ├── parent/page.tsx                 # Parent console (consent-based metrics)
│   │   ├── globals.css                     # Tailwind CSS styling
│   │   ├── layout.tsx                      # Root HTML shell
│   │   └── page.tsx                        # Landing page with novelty presentation
│   ├── components/
│   │   └── topic-runner.tsx                # Interactive scenario quiz engine
│   └── lib/
│       ├── auth.ts                         # JWT token signing & bcrypt hashing
│       ├── prisma.ts                       # Singleton Prisma client instance
│       ├── topics-data.ts                  # 5 authored curriculum topics & scenario MCQs
│       └── utils.ts                        # UI class merging utilities
├── generate_pdf.py                         # ReportLab academic PDF generator
├── TeenSafe_Project_Proposal_and_Phase1_Specification.pdf # Generated project PDF
├── package.json                            # Project dependencies
├── tsconfig.json                           # TypeScript configuration
└── README.md                               # Complete project documentation
```

---

<div align="center">

**TeenSafe** &bull; Final Year MCA Project &bull; Academic Year 2026

</div>
