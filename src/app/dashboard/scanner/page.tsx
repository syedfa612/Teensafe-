"use client";

import { useState } from "react";
import {
  BrainCircuit,
  ShieldCheck,
  AlertOctagon,
  AlertTriangle,
  Lock,
  Sparkles,
  ArrowRight,
  Loader2,
  CheckCircle2,
} from "lucide-react";

interface ScanResult {
  verdict: "SAFE" | "CYBERBULLYING" | "PHISHING_SCAM" | "SUSPICIOUS";
  confidence: number;
  inputType: "TEXT" | "URL";
  riskFactors: string[];
  advice: string;
  privacyNotice: string;
}

export default function ScannerPage() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleScan = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to scan");
      setResult(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleQuickTest = (sampleText: string) => {
    setInput(sampleText);
    setResult(null);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium mb-2">
          <BrainCircuit className="w-3.5 h-3.5 text-cyan-400" />
          Module 2 ⭐ Deep Feature
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          AI Risk Scanner
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Paste any message, DM, email, or URL. Our hybrid model analyzes cyberbullying, phishing triggers, and domain anomalies in real-time.
        </p>
      </div>

      {/* Privacy-by-design banner */}
      <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-900/40 flex items-center justify-between text-xs text-emerald-300">
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            <strong>Privacy Guarantee:</strong> Scanned text is analyzed strictly in-memory and immediately destroyed. We never save your private chats.
          </span>
        </div>
        <span className="hidden sm:inline text-[11px] bg-emerald-900/40 px-2 py-0.5 rounded border border-emerald-800">
          Minors Privacy by Design
        </span>
      </div>

      {/* Scanner Input Card */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <form onSubmit={handleScan} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">
              Message Text or Website URL:
            </label>
            <textarea
              rows={4}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste a suspicious text, WhatsApp forward, Instagram DM, or URL here..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition resize-y"
            />
          </div>

          {/* Quick Demo Test Buttons for Mentor Viva */}
          <div>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>One-Click Mentor Demo Samples:</span>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <button
                type="button"
                onClick={() =>
                  handleQuickTest(
                    "URGENT: Your bank account will be suspended within 24 hours. Send OTP immediately to claim your $5,000 cash prize!"
                  )
                }
                className="px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-amber-400 hover:text-amber-300 transition text-[11px]"
              >
                ⚠️ Urgent Scam SMS
              </button>
              <button
                type="button"
                onClick={() =>
                  handleQuickTest(
                    "You are such a worthless loser, nobody likes you. Watch your back tomorrow at school, gonna beat you."
                  )
                }
                className="px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-red-400 hover:text-red-300 transition text-[11px]"
              >
                🚨 Cyberbullying Threat
              </button>
              <button
                type="button"
                onClick={() => handleQuickTest("http://login-faceb00k-verify.xyz/update-password")}
                className="px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-purple-400 hover:text-purple-300 transition text-[11px]"
              >
                🔗 Typo-squatting Phishing Link
              </button>
              <button
                type="button"
                onClick={() =>
                  handleQuickTest("Hey Alex, do you want to study together for tomorrow's computer science exam at the library?")
                }
                className="px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-emerald-400 hover:text-emerald-300 transition text-[11px]"
              >
                ✅ Safe Normal Chat
              </button>
            </div>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-red-950/40 border border-red-900 text-red-300 text-xs">
              {error}
            </div>
          )}

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold px-6 py-2.5 rounded-xl text-xs shadow-lg shadow-cyan-500/20 transition disabled:opacity-40"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Evaluating Risk Models...</span>
                </>
              ) : (
                <>
                  <span>Analyze Content</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Results Display Card */}
      {result && (
        <div
          className={`border rounded-2xl p-6 shadow-2xl transition-all duration-300 ${
            result.verdict === "SAFE"
              ? "bg-emerald-950/20 border-emerald-800/80"
              : result.verdict === "CYBERBULLYING"
              ? "bg-red-950/30 border-red-800/80"
              : "bg-amber-950/30 border-amber-800/80"
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/60">
            <div className="flex items-center gap-3">
              {result.verdict === "SAFE" ? (
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
              ) : result.verdict === "CYBERBULLYING" ? (
                <div className="w-12 h-12 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                  <AlertOctagon className="w-7 h-7" />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-7 h-7" />
                </div>
              )}

              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Risk Assessment Verdict
                </div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>
                    {result.verdict === "SAFE"
                      ? "Likely Safe Content"
                      : result.verdict === "CYBERBULLYING"
                      ? "Cyberbullying / Harassment Detected"
                      : "Phishing / Scam Threat Detected"}
                  </span>
                </h3>
              </div>
            </div>

            <div className="text-right sm:border-l sm:border-slate-800 sm:pl-6">
              <div className="text-xs text-slate-400">Confidence Score</div>
              <div className="text-2xl font-black text-cyan-400">{result.confidence}%</div>
            </div>
          </div>

          {/* Risk Factors */}
          <div className="mt-4 space-y-3">
            <div>
              <div className="text-xs font-semibold text-slate-300 mb-1.5">
                Identified Indicators:
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {result.riskFactors.map((factor, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Safety Guidance */}
            <div className="mt-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-xs font-bold text-white mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                Recommended Action for Teen:
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{result.advice}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
