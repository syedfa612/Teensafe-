"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  BookOpen,
  ArrowRight,
  TrendingUp,
  BrainCircuit,
  Lock,
  Sparkles,
  Flame,
} from "lucide-react";

interface UserProfile {
  name: string;
  email: string;
  teenProfile?: {
    safetyScore: number;
    streakDays: number;
    ageGroup: string;
  };
}

export default function DashboardPage() {
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.user) setUser(data.user);
      });
  }, []);

  const score = user?.teenProfile?.safetyScore ?? 68;
  const streak = user?.teenProfile?.streakDays ?? 3;

  return (
    <div className="space-y-8">
      {/* Welcome & Novelty Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-950/80 via-slate-900 to-slate-900 border border-indigo-500/30 p-6 sm:p-8 shadow-xl">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Teen-First Protection
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Welcome back, {user?.name || "Defender"}!
          </h1>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Your safety score increases with every lesson you master, scam you identify, and threat you scan. You own your data — your private chats are never logged.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/dashboard/scanner"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-medium px-4 py-2.5 rounded-xl text-xs shadow-md shadow-cyan-500/20 transition"
            >
              <BrainCircuit className="w-4 h-4" />
              Scan a Suspicious Message
            </Link>
            <Link
              href="/dashboard/learn"
              className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium px-4 py-2.5 rounded-xl text-xs transition"
            >
              <BookOpen className="w-4 h-4" />
              Continue Learning
            </Link>
          </div>
        </div>
      </div>

      {/* The Central Spine: The Safety Score (0-100) & Activity Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Safety Score Radial Ring Card */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg">
          <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-4">
            Unified Safety Index
          </span>

          <div className="relative w-40 h-40 flex items-center justify-center">
            {/* SVG Progress Circle */}
            <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                className="stroke-slate-800"
                strokeWidth="8"
                fill="transparent"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                className="stroke-cyan-400 transition-all duration-1000 ease-out"
                strokeWidth="8"
                strokeDasharray={251.2}
                strokeDashoffset={251.2 - (251.2 * score) / 100}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>

            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-4xl font-extrabold text-white tracking-tight">{score}</span>
              <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-widest mt-0.5">
                {score >= 80 ? "Excellent" : score >= 60 ? "Good" : "Needs Review"}
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span>+12 pts gained this week</span>
          </div>
        </div>

        {/* Score Contributors Breakdown */}
        <div className="lg:col-span-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-white">How Your Score is Calculated</h3>
              <span className="text-xs text-slate-400">Phase 1 Engine</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-300 font-medium">Lessons Completed</span>
                  <span className="text-cyan-400 font-semibold">+25 pts</span>
                </div>
                <p className="text-[11px] text-slate-400">3 of 5 topics finished</p>
                <div className="w-full bg-slate-800 h-1 rounded-full mt-2">
                  <div className="bg-cyan-400 h-full rounded-full" style={{ width: "60%" }} />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-300 font-medium">Scenario Quiz Accuracy</span>
                  <span className="text-indigo-400 font-semibold">+20 pts</span>
                </div>
                <p className="text-[11px] text-slate-400">82% average accuracy</p>
                <div className="w-full bg-slate-800 h-1 rounded-full mt-2">
                  <div className="bg-indigo-400 h-full rounded-full" style={{ width: "82%" }} />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-300 font-medium">Active Threat Scans</span>
                  <span className="text-purple-400 font-semibold">+15 pts</span>
                </div>
                <p className="text-[11px] text-slate-400">4 suspicious links checked</p>
                <div className="w-full bg-slate-800 h-1 rounded-full mt-2">
                  <div className="bg-purple-400 h-full rounded-full" style={{ width: "70%" }} />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-300 font-medium">Learning Streak Bonus</span>
                  <span className="text-amber-400 font-semibold">+{streak * 2} pts</span>
                </div>
                <p className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Flame className="w-3 h-3 text-amber-400" />
                  {streak} days in a row
                </p>
                <div className="w-full bg-slate-800 h-1 rounded-full mt-2">
                  <div className="bg-amber-400 h-full rounded-full" style={{ width: "50%" }} />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              Privacy Note: Parents only see this composite score, never individual messages.
            </span>
          </div>
        </div>
      </div>

      {/* Two Star Modules Quick Access */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Module 1: Learn Card */}
        <div className="bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 rounded-2xl p-6 transition flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                Module 1
              </span>
              <span className="text-xs text-slate-400">5 Essential Topics</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Interactive Learn & Scenario Quiz</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Learn cyberbullying defense, phishing spotter techniques, strong password hygiene, and privacy management with real-life scenario questions.
            </p>
          </div>

          <Link
            href="/dashboard/learn"
            className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-slate-950 border border-slate-800 hover:bg-slate-900 text-xs font-medium text-white transition group"
          >
            <span>Open Learning Modules</span>
            <ArrowRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition" />
          </Link>
        </div>

        {/* Module 2: AI Scanner Card */}
        <div className="bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 transition flex flex-col justify-between ring-1 ring-cyan-500/10">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                Module 2 ⭐ Deep Feature
              </span>
              <span className="text-xs text-cyan-400 font-mono">ML + Rules</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">AI Risk Scanner</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Paste suspicious messages, DMs, or suspicious links. Our machine learning classifier and URL rule engine analyzes threat probability instantly.
            </p>
          </div>

          <Link
            href="/dashboard/scanner"
            className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-slate-950 border border-slate-800 hover:bg-slate-900 text-xs font-medium text-white transition group"
          >
            <span className="text-cyan-300 font-semibold">Launch AI Scanner</span>
            <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </div>

      {/* Weak Topics Alert Box */}
      <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-900/40 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="text-xs">
          <span className="font-semibold text-amber-300">Focus Area Recommendation:</span>
          <p className="text-slate-300 mt-0.5">
            Your recent scenario answers indicate higher vulnerability to <span className="font-medium text-white">Lookalike Domain Phishing</span>. Complete the Phishing & Scams module to boost your score by +10 points!
          </p>
        </div>
      </div>
    </div>
  );
}
