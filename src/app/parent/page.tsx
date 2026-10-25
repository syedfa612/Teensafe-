"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  Users2,
  Lock,
  LogOut,
  Sparkles,
  BookOpen,
  AlertCircle,
  TrendingUp,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function ParentDashboardPage() {
  const router = useRouter();
  const [userName, setUserName] = useState("Parent User");

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.user) setUserName(data.user.name);
      });
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/25">
              <Users2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-white">
                Teen<span className="text-purple-400">Safe</span>
              </span>
              <span className="ml-2 text-[10px] bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2 py-0.5 rounded font-mono">
                Parent Console
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-xs text-slate-400 hidden sm:inline">
              Welcome, <strong className="text-white">{userName}</strong>
            </span>
            <button
              onClick={handleLogout}
              className="text-xs text-slate-400 hover:text-red-400 p-2 rounded-lg hover:bg-slate-900 transition flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        {/* Ethics & Privacy Highlight Banner */}
        <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-900/50 flex items-start gap-3 shadow-lg">
          <Lock className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
          <div className="text-xs">
            <span className="font-bold text-purple-300">Consent-Based Transparency Contract:</span>
            <p className="text-slate-300 mt-1 leading-relaxed">
              TeenSafe is designed to nurture digital resilience through dialogue rather than surreptitious spyware. You can observe your teen&apos;s holistic Safety Score and curriculum progress. Private chats, scanned messages, and browsing sessions are never monitored.
            </p>
          </div>
        </div>

        {/* Linked Teen Overview */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Connected Child Account
              </span>
              <h2 className="text-xl font-bold text-white mt-1">Alex Rivera (Age 15)</h2>
              <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  Last Active: 2 hours ago
                </span>
                <span>•</span>
                <span className="text-emerald-400">Consent Link: Active</span>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-950 border border-slate-800 p-4 rounded-2xl">
              <div className="text-right">
                <div className="text-[11px] text-slate-400 uppercase font-semibold">
                  Safety Score
                </div>
                <div className="text-2xl font-black text-cyan-400">68 / 100</div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">
                B+
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
              <div className="text-xs text-slate-400 mb-1">Curriculum Mastery</div>
              <div className="text-lg font-bold text-white">3 of 5 Topics</div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2">
                <div className="bg-indigo-500 h-full rounded-full" style={{ width: "60%" }} />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
              <div className="text-xs text-slate-400 mb-1">Learning Consistency</div>
              <div className="text-lg font-bold text-white">3 Day Streak 🔥</div>
              <p className="text-[11px] text-slate-400 mt-1">Regular safety habits formed</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
              <div className="text-xs text-slate-400 mb-1">Focus Discussion Area</div>
              <div className="text-lg font-bold text-amber-400">Phishing Links</div>
              <p className="text-[11px] text-slate-400 mt-1">Suggested parent conversation</p>
            </div>
          </div>

          {/* Discussion prompt card */}
          <div className="mt-6 p-4 rounded-xl bg-indigo-950/20 border border-indigo-900/40 text-xs">
            <span className="font-semibold text-indigo-300 block mb-1">
              💬 Positive Conversation Starter for This Week:
            </span>
            <p className="text-slate-300">
              &quot;Hey Alex, I noticed TeenSafe suggested talking about fake giveaway links and Discord bots. Have any of your friends run into those recently?&quot;
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
