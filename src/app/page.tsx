import Link from "next/link";
import { ShieldCheck, Brain, Lock, Users, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Top Navigation */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              Teen<span className="text-cyan-400">Safe</span>
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href="/login"
              className="text-sm font-medium text-slate-300 hover:text-white px-4 py-2 transition rounded-lg hover:bg-slate-800/60"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="text-sm font-semibold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-4 py-2 rounded-lg shadow-md shadow-indigo-500/20 hover:brightness-110 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative overflow-hidden py-20 px-6 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-medium text-indigo-300 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Consent-Based Digital Safety Platform
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Digital Safety Built on{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Education & Trust
            </span>
            , Not Surveillance.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            TeenSafe flips conventional parent-spy software: the teen owns their privacy, learns through real-world scenarios, and detects digital threats with on-device machine learning.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-indigo-500/25 transition group text-base"
            >
              Explore Teen Dashboard
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-medium px-6 py-3.5 rounded-xl transition text-base"
            >
              Demo Sign In
            </Link>
          </div>

          {/* Ethics Comparison Box */}
          <div className="mt-16 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto text-left shadow-2xl">
            <div className="text-xs uppercase font-semibold text-cyan-400 tracking-wider mb-2">
              Our Core Novelty
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Spyware vs. TeenSafe Paradigm Shift
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-red-950/20 border border-red-900/40 rounded-xl p-4 text-slate-300">
                <div className="text-red-400 font-semibold mb-2">❌ Legacy Spy Apps</div>
                <ul className="space-y-1.5 text-xs text-slate-400">
                  <li>• Secretly logs teen&apos;s keystrokes & chats</li>
                  <li>• Breaches minor privacy & breaks trust</li>
                  <li>• Zero educational value or critical thinking</li>
                  <li>• Parent acts as continuous police officer</li>
                </ul>
              </div>

              <div className="bg-emerald-950/20 border border-emerald-900/40 rounded-xl p-4 text-slate-300">
                <div className="text-emerald-400 font-semibold mb-2">✅ TeenSafe Model</div>
                <ul className="space-y-1.5 text-xs text-slate-400">
                  <li>• Teen owns their account and scan history</li>
                  <li>• AI analyzes threats in-memory; messages never stored</li>
                  <li>• Scenario quizzes build proactive digital intuition</li>
                  <li>• Parent sees aggregate safety score, not chats</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Modules Grid */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">The Four Cohesive Modules</h2>
            <p className="text-slate-400 text-sm mt-2">
              Connected through a single mathematical spine: <span className="text-cyan-400 font-medium">The Safety Score (0–100)</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 p-6 rounded-2xl transition">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold text-indigo-400 mb-1">MODULE 1</div>
              <h3 className="font-semibold text-lg text-white mb-2">Learn & Play</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                5 interactive topics: Cyberbullying, Phishing, Passwords, Fake Profiles, Screen Time. Scenario-based MCQs.
              </p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 p-6 rounded-2xl transition ring-1 ring-cyan-500/20">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold text-cyan-400 mb-1">MODULE 2 ⭐ STAR</div>
              <h3 className="font-semibold text-lg text-white mb-2">AI Risk Scanner</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Paste suspicious chats or URLs. TF-IDF + Logistic Classifier + Rule-based URL parser detects threats in seconds.
              </p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 hover:border-purple-500/50 p-6 rounded-2xl transition">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold text-purple-400 mb-1">MODULE 3</div>
              <h3 className="font-semibold text-lg text-white mb-2">Parent-Teen Bridge</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Consent-based 6-digit invite linking. Parents view Safety Score trend and completed modules, never private logs.
              </p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 hover:border-amber-500/50 p-6 rounded-2xl transition">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold text-amber-400 mb-1">MODULE 4</div>
              <h3 className="font-semibold text-lg text-white mb-2">Report & Help</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Anonymous incident filing to counselor panel. Verified emergency helplines & social media escalation guides.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 px-6 text-center text-xs text-slate-400">
        <p>TeenSafe Academic Project — Phase 1 Demonstration Prototype</p>
        <p className="mt-1 text-slate-400">Built with Next.js 15, TypeScript, Tailwind CSS, PostgreSQL, Prisma & Scikit-learn</p>
      </footer>
    </div>
  );
}
