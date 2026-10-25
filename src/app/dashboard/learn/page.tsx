import Link from "next/link";
import { TOPICS } from "@/lib/topics-data";
import {
  BookOpen,
  ShieldAlert,
  Fish,
  KeyRound,
  UserX,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const ICON_MAP = {
  ShieldAlert,
  Fish,
  KeyRound,
  UserX,
  Clock,
};

export default function LearnListPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-2">
          <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
          Module 1: Interactive Learning & Scenario Quiz
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Digital Safety Curriculum
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Master each topic through real-world scenarios. Completing lessons and scoring high on quizzes directly boosts your <strong>Safety Score (0–100)</strong>.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {TOPICS.map((topic, index) => {
          const Icon = ICON_MAP[topic.icon as keyof typeof ICON_MAP] || BookOpen;

          return (
            <div
              key={topic.slug}
              className="bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 rounded-2xl p-6 transition flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    Topic 0{index + 1} • {topic.readingTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition mb-2">
                  {topic.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {topic.description}
                </p>

                <div className="space-y-1.5 mb-6">
                  {topic.takeaways.map((t, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={`/dashboard/learn/${topic.slug}`}
                className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-slate-950 border border-slate-800 hover:bg-indigo-600 hover:border-indigo-600 text-xs font-semibold text-white transition group/btn"
              >
                <span>Read Lesson & Take Scenario Quiz</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
