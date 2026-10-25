import { NextResponse } from "next/server";
import { getCurrentUserWithProfile } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Rule-based heuristic definitions
const SUSPICIOUS_TLDS = [".xyz", ".top", ".tk", ".ml", ".ga", ".cf", ".gq", ".buzz", ".fit", ".rest", ".work"];
const LOOKALIKE_PATTERNS = [
  { pattern: /faceb[0o]{2}k/i, target: "Facebook" },
  { pattern: /paypa[l1]/i, target: "PayPal" },
  { pattern: /instagr[a|rn]m/i, target: "Instagram" },
  { pattern: /g[0o]{2}gle/i, target: "Google" },
  { pattern: /amaz[0o]n/i, target: "Amazon" },
  { pattern: /netfl[i1]x/i, target: "Netflix" },
  { pattern: /wha[t|7]sapp/i, target: "WhatsApp" },
  { pattern: /app[l1]e-id/i, target: "Apple ID" },
];

const CYBERBULLYING_KEYWORDS = [
  "kill yourself",
  "kys",
  "worthless",
  "ugly",
  "nobody likes you",
  "die",
  "fat pig",
  "loser",
  "freak",
  "watch your back",
  "gonna beat you",
  "leak your photos",
  "expose you",
  "pathetic",
];

const SCAM_KEYWORDS = [
  "urgent: verify",
  "account suspended",
  "won a $",
  "won a gift card",
  "claim your reward",
  "send otp",
  "crypto giveaway",
  "exclusive prize",
  "click link to claim",
  "unauthorized transaction",
  "password reset required immediately",
  "transfer money",
  "wire funds",
  "paytm cashback",
];

export async function POST(request: Request) {
  try {
    const user = await getCurrentUserWithProfile();
    const body = await request.json();
    const { input, type = "AUTO" } = body;

    if (!input || typeof input !== "string" || input.trim().length === 0) {
      return NextResponse.json({ error: "Please provide text or a URL to scan." }, { status: 400 });
    }

    const trimmed = input.trim();
    const isUrl =
      type === "URL" ||
      trimmed.startsWith("http://") ||
      trimmed.startsWith("https://") ||
      /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/.*)?$/.test(trimmed);

    let resultLabel: "SAFE" | "CYBERBULLYING" | "PHISHING_SCAM" | "SUSPICIOUS" = "SAFE";
    let confidence = 0.95;
    const riskFactors: string[] = [];
    let advice = "This appears safe based on our threat heuristics. Always stay alert and verify unfamiliar contacts.";

    if (isUrl) {
      // 1. URL Analysis
      const urlString = trimmed.startsWith("http") ? trimmed : `https://${trimmed}`;
      let parsedUrl: URL | null = null;
      try {
        parsedUrl = new URL(urlString);
      } catch {
        // Malformed URL
      }

      if (parsedUrl) {
        // Non-HTTPS
        if (parsedUrl.protocol === "http:") {
          riskFactors.push("Insecure connection (HTTP instead of HTTPS)");
        }

        // IP-based URL
        if (/^(\d{1,3}\.){3}\d{1,3}$/.test(parsedUrl.hostname)) {
          riskFactors.push("Uses a raw IP address instead of a domain name (common phishing indicator)");
        }

        // @ symbol in URL
        if (urlString.includes("@")) {
          riskFactors.push("Contains '@' symbol used in credential deception attacks");
        }

        // Suspicious TLD
        for (const tld of SUSPICIOUS_TLDS) {
          if (parsedUrl.hostname.endsWith(tld)) {
            riskFactors.push(`Uses high-risk, low-reputation top-level domain (${tld})`);
          }
        }

        // Lookalike domain
        for (const item of LOOKALIKE_PATTERNS) {
          if (item.pattern.test(parsedUrl.hostname)) {
            riskFactors.push(`Detected lookalike typo-squatting domain mimicking ${item.target}`);
          }
        }

        // Excessive hyphens
        const hyphenCount = (parsedUrl.hostname.match(/-/g) || []).length;
        if (hyphenCount >= 3) {
          riskFactors.push("Domain contains excessive hyphens often used to disguise brand names");
        }
      }

      if (riskFactors.length >= 2) {
        resultLabel = "PHISHING_SCAM";
        confidence = 0.92;
        advice = "DO NOT open this link or enter personal credentials or passwords. It exhibits strong characteristics of a phishing attempt.";
      } else if (riskFactors.length === 1) {
        resultLabel = "SUSPICIOUS";
        confidence = 0.78;
        advice = "Proceed with extreme caution. Check the sender identity and inspect the exact domain spelling before clicking.";
      }
    } else {
      // 2. Text Analysis (Cyberbullying & Scam)
      const lower = trimmed.toLowerCase();
      const detectedBullying: string[] = [];
      const detectedScam: string[] = [];

      for (const phrase of CYBERBULLYING_KEYWORDS) {
        if (lower.includes(phrase)) {
          detectedBullying.push(phrase);
        }
      }

      for (const phrase of SCAM_KEYWORDS) {
        if (lower.includes(phrase)) {
          detectedScam.push(phrase);
        }
      }

      if (detectedBullying.length > 0) {
        resultLabel = "CYBERBULLYING";
        confidence = Math.min(0.85 + detectedBullying.length * 0.05, 0.99);
        riskFactors.push(`Detected hostile/harassing phrase patterns: ${detectedBullying.join(", ")}`);
        advice = "This message contains intimidating or abusive language. Remember: you are not at fault. Take a screenshot, do not engage, and consider reporting or blocking the sender.";
      } else if (detectedScam.length > 0) {
        resultLabel = "PHISHING_SCAM";
        confidence = Math.min(0.82 + detectedScam.length * 0.06, 0.98);
        riskFactors.push(`Detected high-urgency scam/financial fraud cues: ${detectedScam.join(", ")}`);
        advice = "Scammers use artificial urgency or prizes to make you react without thinking. Never share OTPs, passwords, or send money to unverified contacts.";
      }
    }

    // 3. Privacy-First Database Logging
    // Note: We deliberately do NOT save the `input` string.
    if (user?.teenProfile) {
      try {
        await prisma.scanHistory.create({
          data: {
            teenId: user.teenProfile.id,
            inputType: isUrl ? "URL" : "TEXT",
            resultLabel,
            confidence,
            riskFactors: riskFactors.length > 0 ? riskFactors : ["No known risk indicators identified"],
          },
        });

        // Reward points for good digital safety habit (+2 points up to max 100)
        const newScore = Math.min(100, user.teenProfile.safetyScore + 2);
        await prisma.teenProfile.update({
          where: { id: user.teenProfile.id },
          data: { safetyScore: newScore },
        });
      } catch (dbErr) {
        // Non-blocking in demo mode or when offline
        console.warn("Scan history DB persist bypassed:", dbErr);
      }
    }

    return NextResponse.json({
      verdict: resultLabel,
      confidence: Math.round(confidence * 100),
      inputType: isUrl ? "URL" : "TEXT",
      riskFactors,
      advice,
      privacyNotice: "Message text discarded immediately. Only risk verdict logged.",
    });
  } catch (error) {
    console.error("Scan error:", error);
    return NextResponse.json({ error: "Failed to evaluate input." }, { status: 500 });
  }
}
