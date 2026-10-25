"use client";

import { useState } from "react";
import {
  Users2,
  Lock,
  Copy,
  Check,
  ShieldCheck,
  Sparkles,
  AlertCircle,
} from "lucide-react";

export default function ParentLinkPage() {
  const [inviteCode, setInviteCode] = useState("TS-849201");
  const [copied, setCopied] = useState(false);
  const [isLinked, setIsLinked] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(inviteCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGenerateNew = () => {
    const randomCode = `TS-${Math.floor(100000 + Math.random() * 900000)}`;
    setInviteCode(randomCode);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-2">
          <Users2 className="w-3.5 h-3.5 text-purple-400" />
          Module 3: Consent-Based Parent Bridge
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Parent Link & Shared Progress
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          TeenSafe replaces covert surveillance with shared milestones. You decide if and when to share your aggregate safety progress with a parent.
        </p>
      </div>

      {/* Novelty Comparison Box */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
          <Lock className="w-4 h-4 text-cyan-400" />
          <span>The Consent Contract</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-950 border border-emerald-900/40 text-emerald-300">
            <span className="font-bold block mb-1 text-emerald-400">What Parents CAN See:</span>
            <ul className="space-y-1 text-slate-300 list-disc list-inside">
              <li>Your overall Safety Score (0–100)</li>
              <li>Completed curriculum modules</li>
              <li>General weak topics (e.g., &quot;Needs review in Phishing&quot;)</li>
              <li>Learning streak days & last active timestamp</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-red-900/40 text-red-300">
            <span className="font-bold block mb-1 text-red-400">What Parents CANNOT See:</span>
            <ul className="space-y-1 text-slate-300 list-disc list-inside">
              <li>Your private messages or chat text</li>
              <li>The exact messages or links you scanned</li>
              <li>Your private web history or contacts</li>
              <li>Real-time location or keystrokes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Invite Code Generator Card */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl text-center space-y-6">
        <div>
          <h3 className="text-lg font-bold text-white">Your 6-Digit Parent Invite Code</h3>
          <p className="text-xs text-slate-400 mt-1">
            Share this code with your parent. When they enter it in their Parent Console, your accounts will be linked.
          </p>
        </div>

        <div className="inline-flex items-center gap-4 bg-slate-950 border border-slate-800 px-6 py-4 rounded-2xl shadow-inner">
          <span className="text-3xl sm:text-4xl font-mono font-black text-cyan-400 tracking-widest">
            {inviteCode}
          </span>
          <button
            onClick={handleCopy}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition"
            title="Copy Code"
          >
            {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
          </button>
        </div>

        <div className="flex justify-center gap-3">
          <button
            onClick={handleGenerateNew}
            className="text-xs text-slate-400 hover:text-slate-200 underline transition"
          >
            Generate a new code
          </button>
        </div>

        {/* Unlink Guarantee Highlight */}
        <div className="pt-6 border-t border-slate-800/80 max-w-lg mx-auto">
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-950/20 border border-amber-900/40 text-left text-xs">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-amber-300">Unconditional Unlink Guarantee:</span>
              <p className="text-slate-400 mt-0.5">
                As an autonomous minor, you can disconnect parental access at any moment with zero approval required. Trust is voluntary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
