"use client";

import { useState } from "react";
import {
  AlertTriangle,
  Send,
  PhoneCall,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Lock,
} from "lucide-react";

export default function ReportHelpPage() {
  const [category, setCategory] = useState("BULLYING");
  const [description, setDescription] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium mb-2">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
          Module 4: Incident Reporting & Crisis Resources
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Report & Safe Support
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          If you or someone you know is experiencing severe digital harassment, threats, or extortion, speak up safely. You can submit an anonymous report or reach official crisis helplines.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Incident Form (3 cols) */}
        <div className="md:col-span-3 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white">File an Incident Report</h3>
            <span className="text-[10px] bg-slate-800 text-cyan-400 font-mono px-2 py-0.5 rounded">
              Encrypted Channel
            </span>
          </div>

          {submitted ? (
            <div className="p-6 rounded-xl bg-emerald-950/30 border border-emerald-800 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h4 className="text-base font-bold text-white">Report Safely Received</h4>
              <p className="text-xs text-slate-300">
                Your report has been logged confidentially. A verified safety counselor will review the details. You are not alone.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setDescription("");
                }}
                className="text-xs text-cyan-400 hover:underline pt-2 block mx-auto"
              >
                Submit another report
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Incident Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-amber-500"
                >
                  <option value="BULLYING">Cyberbullying / Harassment</option>
                  <option value="IMPERSONATION">Fake Account / Impersonation</option>
                  <option value="SCAM">Financial Fraud / Phishing Scam</option>
                  <option value="BLACKMAIL">Non-Consensual Media / Extortion</option>
                  <option value="OTHER">Other Digital Threat</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Describe what happened:
                </label>
                <textarea
                  required
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Include details like the platform (Instagram, Discord, WhatsApp), what occurred, and if anyone is currently in immediate danger..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 resize-y"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="anonymousCheck"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="rounded border-slate-700 text-indigo-600 focus:ring-0 bg-slate-950"
                />
                <label htmlFor="anonymousCheck" className="text-xs text-slate-300 cursor-pointer">
                  Submit anonymously (omit my profile metadata)
                </label>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-500 hover:to-rose-500 text-white font-semibold py-2.5 rounded-xl text-xs transition shadow-lg shadow-amber-600/20"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Confidential Report</span>
              </button>
            </form>
          )}
        </div>

        {/* Verified Helplines Directory (2 cols) */}
        <div className="md:col-span-2 space-y-4">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-cyan-400" />
              <span>Official Emergency Helplines</span>
            </h3>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div className="font-semibold text-cyan-400">Cyber Crime Helpline (India)</div>
                <div className="text-lg font-bold text-white mt-0.5">Dial 1930</div>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Toll-free 24x7 National Cyber Crime portal for financial fraud & cyber stalking.
                </p>
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-cyan-400 hover:underline mt-2"
                >
                  cybercrime.gov.in <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div className="font-semibold text-rose-400">Childline India Foundation</div>
                <div className="text-lg font-bold text-white mt-0.5">Dial 1098</div>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  24-hour toll-free emergency phone service for children and minors in need of assistance.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div className="font-semibold text-indigo-400">KIRAN Mental Health Helpline</div>
                <div className="text-base font-bold text-white mt-0.5">1800-599-0019</div>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Govt of India psychosocial support and distress counseling hotline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
