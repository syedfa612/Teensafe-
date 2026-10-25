"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldAlert,
  LogOut,
  AlertTriangle,
  CheckCircle2,
  Users,
  BrainCircuit,
} from "lucide-react";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [userName, setUserName] = useState("Counselor Admin");

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
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-600 to-rose-500 flex items-center justify-center shadow-lg shadow-amber-500/25">
              <ShieldAlert className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-white">
                Teen<span className="text-amber-400">Safe</span>
              </span>
              <span className="ml-2 text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded font-mono">
                Counselor & Safety Desk
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

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Incident Triage & Crisis Desk</h1>
          <p className="text-xs text-slate-400 mt-1">
            Review anonymized incidents reported by teen users. Escalate severe cases to institutional counselors.
          </p>
        </div>

        {/* Triage Stats */}
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <div className="text-xs text-slate-400">Pending Review</div>
            <div className="text-2xl font-extrabold text-amber-400 mt-1">2 Reports</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <div className="text-xs text-slate-400">Resolved This Week</div>
            <div className="text-2xl font-extrabold text-emerald-400 mt-1">8 Incidents</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <div className="text-xs text-slate-400">Active Teen Accounts</div>
            <div className="text-2xl font-extrabold text-cyan-400 mt-1">42 Teens</div>
          </div>
        </div>

        {/* Incidents Table */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-4 border-b border-slate-800 font-semibold text-xs text-slate-300">
            Recent Incoming Incident Disclosures
          </div>
          <div className="divide-y divide-slate-800 text-xs">
            <div className="p-4 flex items-center justify-between hover:bg-slate-900/40 transition">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-red-950/60 border border-red-800 text-red-300 text-[10px] font-semibold">
                    CYBERBULLYING
                  </span>
                  <span className="text-slate-400 text-[11px]">Anonymous Teen • 35 mins ago</span>
                </div>
                <p className="text-slate-200">
                  Targeted group chat created by school peers containing altered photos and threats.
                </p>
              </div>
              <button className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition">
                Assign Counselor
              </button>
            </div>

            <div className="p-4 flex items-center justify-between hover:bg-slate-900/40 transition">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-purple-950/60 border border-purple-800 text-purple-300 text-[10px] font-semibold">
                    IMPERSONATION
                  </span>
                  <span className="text-slate-400 text-[11px]">Anonymous Teen • 3 hours ago</span>
                </div>
                <p className="text-slate-200">
                  Fake Instagram profile using student&apos;s name and photos to message contacts for money.
                </p>
              </div>
              <button className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition">
                Assign Counselor
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
