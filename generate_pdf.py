import os
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    PageBreak,
    KeepTogether,
    HRFlowable,
)

def create_pdf(filename):
    doc = SimpleDocTemplate(
        filename,
        pagesize=A4,
        rightMargin=40,
        leftMargin=40,
        topMargin=40,
        bottomMargin=40,
    )

    styles = getSampleStyleSheet()

    # Custom styles
    title_style = ParagraphStyle(
        'CoverTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=28,
        leading=34,
        textColor=colors.HexColor('#0f172a'),
        alignment=1, # Center
        spaceAfter=10,
    )

    subtitle_style = ParagraphStyle(
        'CoverSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=13,
        leading=18,
        textColor=colors.HexColor('#0284c7'),
        alignment=1,
        spaceAfter=20,
    )

    cover_meta_style = ParagraphStyle(
        'CoverMeta',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=15,
        textColor=colors.HexColor('#334155'),
    )

    h1_style = ParagraphStyle(
        'H1',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=15,
        leading=20,
        textColor=colors.HexColor('#0f172a'),
        spaceBefore=14,
        spaceAfter=8,
    )

    h2_style = ParagraphStyle(
        'H2',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=16,
        textColor=colors.HexColor('#0369a1'),
        spaceBefore=10,
        spaceAfter=4,
    )

    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#1e293b'),
        spaceAfter=6,
    )

    quote_style = ParagraphStyle(
        'Quote',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=9.5,
        leading=14,
        textColor=colors.HexColor('#166534'),
        alignment=1,
    )

    code_style = ParagraphStyle(
        'Code',
        parent=styles['Normal'],
        fontName='Courier',
        fontSize=7.5,
        leading=10.5,
        textColor=colors.HexColor('#0f172a'),
    )

    elements = []

    # ==================== COVER PAGE ====================
    elements.append(Spacer(1, 20))
    elements.append(Paragraph("MASTER OF COMPUTER APPLICATIONS (MCA)", ParagraphStyle(
        'DegreeH', fontName='Helvetica-Bold', fontSize=12, leading=16, textColor=colors.HexColor('#0369a1'), alignment=1
    )))
    elements.append(Paragraph("PROJECT PROPOSAL &amp; PHASE-1 IMPLEMENTATION SPECIFICATION", ParagraphStyle(
        'SubH', fontName='Helvetica', fontSize=10, leading=14, textColor=colors.HexColor('#64748b'), alignment=1, spaceAfter=40
    )))

    elements.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#cbd5e1'), spaceAfter=40))

    elements.append(Paragraph("TeenSafe", title_style))
    elements.append(Paragraph("A Consent-Based Digital Safety Platform for Adolescents", subtitle_style))
    elements.append(Spacer(1, 15))

    novelty_table = Table([[
        Paragraph(
            '<b>Core Novelty Thesis:</b><br/>&ldquo;TeenSafe is a consent-based, teen-first digital safety platform that replaces surveillance with education and self-awareness.&rdquo;',
            quote_style
        )
    ]], colWidths=[480])
    novelty_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#f0fdf4')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#86efac')),
        ('TOPPADDING', (0,0), (-1,-1), 12),
        ('BOTTOMPADDING', (0,0), (-1,-1), 12),
        ('LEFTPADDING', (0,0), (-1,-1), 16),
        ('RIGHTPADDING', (0,0), (-1,-1), 16),
        ('ALIGN', (0,0), (-1,-1), 'CENTER'),
    ]))
    elements.append(novelty_table)
    elements.append(Spacer(1, 60))

    meta_data = [
        [
            Paragraph("<b>Candidate Name:</b><br/>Syed Faizan Pasha", cover_meta_style),
            Paragraph("<b>Evaluation Date:</b><br/>November 22, 2026", cover_meta_style),
        ],
        [
            Paragraph("<b>Program:</b><br/>MCA (Final Year Project)", cover_meta_style),
            Paragraph("<b>Milestone:</b><br/>Phase 1 (50% Implementation Demo)", cover_meta_style),
        ],
        [
            Paragraph("<b>Core Stack:</b><br/>Next.js 15, PostgreSQL, Prisma", cover_meta_style),
            Paragraph("<b>AI Service:</b><br/>FastAPI + Scikit-Learn Microservice", cover_meta_style),
        ]
    ]
    meta_table = Table(meta_data, colWidths=[240, 240])
    meta_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#f8fafc')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#e2e8f0')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#e2e8f0')),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING', (0,0), (-1,-1), 12),
        ('RIGHTPADDING', (0,0), (-1,-1), 12),
    ]))
    elements.append(meta_table)

    elements.append(PageBreak())

    # ==================== PAGE 2: EXECUTIVE SUMMARY & SPINE ====================
    elements.append(Paragraph("1. Executive Summary &amp; Problem Statement", h1_style))
    elements.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#0284c7'), spaceAfter=8))
    elements.append(Paragraph(
        "Commercial adolescent monitoring applications predominantly function as covert surveillance systems: recording keystrokes, capturing screen content, and exposing private messages without minor awareness. Modern clinical psychology shows that secret surveillance breeds evasion (e.g. secondary burner accounts) and deprives youth of digital discernment. TeenSafe rethinks minor safety: the teen owns the primary user account, learns through interactive dilemma scenarios, and screens risky messages and URLs via Machine Learning tools. Instead of exposing raw chats to parents, TeenSafe aggregates interactions into <b>The Unified Safety Score (0–100)</b>, fostering voluntary dialogue.",
        body_style
    ))

    elements.append(Paragraph("2. The Architectural Spine: Unified Safety Score (0–100)", h1_style))
    elements.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#0284c7'), spaceAfter=8))
    elements.append(Paragraph(
        "Every user interaction within the ecosystem feeds into a single cohesive mathematical index. This acts as the spine uniting education, scanning, and parental reporting:",
        body_style
    ))

    score_data = [
        [Paragraph("<b>Activity</b>", body_style), Paragraph("<b>Effect on Score</b>", body_style), Paragraph("<b>Behavioral Objective</b>", body_style)],
        [Paragraph("Lesson Completed", body_style), Paragraph("<b>+10 to +25 pts</b>", body_style), Paragraph("Encourages proactive conceptual literacy across digital dangers.", body_style)],
        [Paragraph("Scenario Quiz Accuracy", body_style), Paragraph("<b>+5 to +15 pts</b>", body_style), Paragraph("Assesses critical thinking under simulated social pressure.", body_style)],
        [Paragraph("AI Threat / Link Scan", body_style), Paragraph("<b>+2 pts (Habit Bonus)</b>", body_style), Paragraph("Reinforces active inspection before clicking unknown links.", body_style)],
        [Paragraph("Learning Consistency Streak", body_style), Paragraph("<b>+2 pts / day active</b>", body_style), Paragraph("Incentivizes ongoing digital wellbeing habits.", body_style)],
    ]
    score_table = Table(score_data, colWidths=[130, 100, 250])
    score_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#e2e8f0')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#e2e8f0')),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
    ]))
    elements.append(score_table)
    elements.append(Spacer(1, 10))

    elements.append(Paragraph("3. Detailed Module Breakdown (The 4 Pillars)", h1_style))
    elements.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#0284c7'), spaceAfter=8))

    elements.append(Paragraph("Module 1 — Learn &amp; Play (Interactive Curriculum)", h2_style))
    elements.append(Paragraph(
        "• <b>5 Core Topics:</b> Cyberbullying, Phishing/Scams, Passwords &amp; Privacy, Fake Profiles, Screen Time.<br/>"
        "• <b>Format:</b> Concise lesson reading card followed by 5 scenario-based MCQs.<br/>"
        "• <b>Instant Feedback:</b> Immediate explanation of correct defensive actions and score rewards.",
        body_style
    ))

    elements.append(Paragraph("Module 2 — AI Risk Scanner ⭐ (Deep ML Feature)", h2_style))
    elements.append(Paragraph(
        "• <b>Text Classifier (ML):</b> Detects cyberbullying patterns, urgent scam cues, and safe messages.<br/>"
        "• <b>Deterministic URL Engine:</b> Flags lookalike domains (faceb00k), suspicious TLDs (.xyz, .top), IP hosts, HTTP, and deceptive @ symbols.<br/>"
        "• <b>Privacy by Design:</b> Raw text is evaluated strictly in RAM and discarded immediately. ScanHistory stores only verdicts and confidence ratings.",
        body_style
    ))

    elements.append(Paragraph("Module 3 — Parent–Teen Bridge (Consent-Based)", h2_style))
    elements.append(Paragraph(
        "• <b>Bilateral Linking:</b> Teen generates a 6-digit invite code. Parent enters it to link.<br/>"
        "• <b>Restricted Metrics:</b> Parent sees Safety Score, completed topics, weak focus areas, and last active time. Parents NEVER see private chats or scanned text.<br/>"
        "• <b>Unlink Guarantee:</b> The teen can sever connection anytime with one click.",
        body_style
    ))

    elements.append(Paragraph("Module 4 — Incident Reporting &amp; Crisis Support", h2_style))
    elements.append(Paragraph(
        "• <b>Confidential Intake:</b> Anonymous form routing incidents to counselor/admin triage desk.<br/>"
        "• <b>National Helplines:</b> National Cyber Crime Portal (1930), Childline (1098), KIRAN Mental Health hotline.",
        body_style
    ))

    elements.append(PageBreak())

    # ==================== PAGE 3: DATABASE & ARCHITECTURE ====================
    elements.append(Paragraph("4. Database Architecture &amp; ER Entity Model", h1_style))
    elements.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#0284c7'), spaceAfter=8))
    elements.append(Paragraph(
        "All 11 relational tables are modeled in PostgreSQL via Prisma to support both Phase 1 and Phase 2 requirements:",
        body_style
    ))

    db_data = [
        [Paragraph("<b>Entity</b>", body_style), Paragraph("<b>Key Attributes</b>", body_style), Paragraph("<b>Purpose</b>", body_style)],
        [Paragraph("User", body_style), Paragraph("id, name, email, passwordHash, role (TEEN, PARENT, ADMIN)", code_style), Paragraph("Identity management &amp; RBAC.", body_style)],
        [Paragraph("TeenProfile", body_style), Paragraph("id, userId FK, ageGroup, safetyScore, streakDays, lastActiveAt", code_style), Paragraph("Autonomous minor metrics &amp; score spine.", body_style)],
        [Paragraph("ParentLink", body_style), Paragraph("id, parentId FK, teenId FK, inviteCode, status, linkedAt", code_style), Paragraph("Consent-based parental linking.", body_style)],
        [Paragraph("Topic", body_style), Paragraph("id, slug, title, description, icon, order", code_style), Paragraph("Curriculum taxonomy &amp; metadata.", body_style)],
        [Paragraph("Lesson", body_style), Paragraph("id, topicId FK, title, contentMarkdown, readingTimeMinutes", code_style), Paragraph("Proactive educational reading content.", body_style)],
        [Paragraph("QuizQuestion", body_style), Paragraph("id, topicId FK, scenarioText, options (JSON), correctIndex, explanation", code_style), Paragraph("Realistic situational scenario questions.", body_style)],
        [Paragraph("QuizAttempt", body_style), Paragraph("id, teenId FK, questionId FK, selectedOption, isCorrect, attemptedAt", code_style), Paragraph("Tracks performance and weak topics.", body_style)],
        [Paragraph("GameSession", body_style), Paragraph("id, teenId FK, score, correctCount, totalCount, playedAt", code_style), Paragraph("Phase 2 mini-game tracking.", body_style)],
        [Paragraph("ScanHistory", body_style), Paragraph("id, teenId FK, inputType, resultLabel, confidence, riskFactors, scannedAt", code_style), Paragraph("<b>Privacy-First: Message text NOT stored.</b>", body_style)],
        [Paragraph("Report", body_style), Paragraph("id, userId FK?, category, description, status, isAnonymous", code_style), Paragraph("Incident disclosure to counselor panel.", body_style)],
        [Paragraph("Badge &amp; UserBadge", body_style), Paragraph("id, code, name, description, pointsRequired / userId FK, badgeId FK", code_style), Paragraph("Gamification rewards.", body_style)],
    ]
    db_table = Table(db_data, colWidths=[90, 240, 150])
    db_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#e2e8f0')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#e2e8f0')),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
    ]))
    elements.append(db_table)
    elements.append(Spacer(1, 8))

    elements.append(Paragraph("5. Phase 1 (50% Milestone) Implementation Scope", h1_style))
    elements.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#0284c7'), spaceAfter=8))

    scope_data = [
        [Paragraph("<b>Component</b>", body_style), Paragraph("<b>Phase 1 Scope (Demonstrated Nov 22)</b>", body_style), Paragraph("<b>Phase 2 Scope</b>", body_style)],
        [Paragraph("Authentication", body_style), Paragraph("✅ JWT Cookie sessions with 3 roles (Teen, Parent, Admin)", body_style), Paragraph("OAuth2 &amp; 2FA", body_style)],
        [Paragraph("Database", body_style), Paragraph("✅ Full 11-table schema in PostgreSQL via Prisma", body_style), Paragraph("Read replicas", body_style)],
        [Paragraph("Module 1", body_style), Paragraph("✅ 5 topics, scenario MCQs, explanation engine, attempt log", body_style), Paragraph("Swipe game &amp; badges", body_style)],
        [Paragraph("Module 2 (AI)", body_style), Paragraph("✅ Heuristic URL detector + Lexical ML classifier + advice", body_style), Paragraph("Transformer NLP tuning", body_style)],
        [Paragraph("Teen Dashboard", body_style), Paragraph("✅ Safety Score ring (0–100), streak, quick scans", body_style), Paragraph("Historical trend lines", body_style)],
        [Paragraph("Deployment", body_style), Paragraph("✅ Vercel + Neon PostgreSQL + Render microservice", body_style), Paragraph("Custom production domain", body_style)],
    ]
    scope_table = Table(scope_data, colWidths=[100, 220, 160])
    scope_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#e2e8f0')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#e2e8f0')),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
    ]))
    elements.append(scope_table)

    elements.append(PageBreak())

    # ==================== PAGE 4: CREDENTIALS & VIVA HIGHLIGHTS ====================
    elements.append(Paragraph("6. Pre-Configured Demonstration Accounts", h1_style))
    elements.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#0284c7'), spaceAfter=8))
    elements.append(Paragraph(
        "The application provides instant, out-of-the-box demonstration credentials allowing mentors to test all three roles with one click on the sign-in page:",
        body_style
    ))

    creds_data = [
        [Paragraph("<b>Role</b>", body_style), Paragraph("<b>Email Address</b>", body_style), Paragraph("<b>Password</b>", body_style), Paragraph("<b>Observed Interface</b>", body_style)],
        [Paragraph("<b>TEEN</b> ⭐", body_style), Paragraph("teen.alex@example.com", code_style), Paragraph("SafeTeen2026!", code_style), Paragraph("Teen Console: Score 78/100, 4d streak, AI Scanner, Quizzes.", body_style)],
        [Paragraph("<b>PARENT</b>", body_style), Paragraph("parent.smith@example.com", code_style), Paragraph("SafeParent2026!", code_style), Paragraph("Parent Console: Alex's score, weak topics, consent link status.", body_style)],
        [Paragraph("<b>COUNSELOR</b>", body_style), Paragraph("admin.safety@example.com", code_style), Paragraph("SafeAdmin2026!", code_style), Paragraph("Counselor Desk: Incident triage queue and anonymous reports.", body_style)],
    ]
    creds_table = Table(creds_data, colWidths=[80, 150, 100, 150])
    creds_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#e2e8f0')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#e2e8f0')),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
    ]))
    elements.append(creds_table)
    elements.append(Spacer(1, 10))

    elements.append(Paragraph("7. Examiner &amp; Viva Voce Defense Highlights", h1_style))
    elements.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#0284c7'), spaceAfter=8))

    elements.append(Paragraph(
        "<b>1. Ethical Distinction Over Commercial Spyware:</b> Emphasize that consent-based transparency produces authentic behavioral safety in minors, whereas surveillance apps merely induce evasive habits and violate privacy rights.<br/><br/>"
        "<b>2. Architectural Trade-off (Next.js vs. NestJS):</b> Acknowledging NestJS as an enterprise tool, we intentionally selected Next.js 15 App Router API routes to eliminate dual-repository overhead during solo 8-week engineering while maintaining strong TypeScript type-safety.<br/><br/>"
        "<b>3. Microservice Decoupling:</b> Explain why the scikit-learn ML engine is hosted in an asynchronous FastAPI service rather than overloading the Node.js event loop with CPU-heavy matrix vectorizations.<br/><br/>"
        "<b>4. Privacy-by-Design Compliance:</b> Reiterate that adolescent message text is evaluated transiently in RAM and never written to disk, preventing minor communication leaks.",
        body_style
    ))
    elements.append(Spacer(1, 15))

    elements.append(Paragraph("8. Candidate Declaration", h1_style))
    elements.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#0284c7'), spaceAfter=8))
    elements.append(Paragraph(
        "I hereby declare that this project proposal and specification represents original work conducted towards the partial fulfillment of the Master of Computer Applications (MCA) curriculum. All algorithmic designs, database models, and implementations adhere to academic integrity guidelines.",
        body_style
    ))
    elements.append(Spacer(1, 20))

    sig_data = [
        [Paragraph("<b>Candidate:</b> Syed Faizan Pasha", body_style), Paragraph("<b>Signature:</b> _______________________", body_style)],
        [Paragraph("<b>Date:</b> October 25, 2026", body_style), Paragraph("<b>Guide Signature:</b> ___________________", body_style)],
    ]
    sig_table = Table(sig_data, colWidths=[240, 240])
    sig_table.setStyle(TableStyle([
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
    ]))
    elements.append(sig_table)

    # Build document
    doc.build(elements)
    print(f"[SUCCESS] PDF generated successfully at: {filename}")

if __name__ == '__main__':
    output_pdf = os.path.join(os.path.dirname(__file__), "TeenSafe_Project_Proposal_and_Phase1_Specification.pdf")
    create_pdf(output_pdf)
