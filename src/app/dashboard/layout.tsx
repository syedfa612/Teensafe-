"use client";

import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ShieldCheck,
  BookOpen,
  BrainCircuit,
  Users2,
  AlertTriangle,
  LogOut,
  Sparkles,
  LayoutDashboard,
  Flame,
} from "lucide-react";

interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
  teenProfile?: {
    safetyScore: number;
    streakDays: number;
    ageGroup: string;
  };
}

function DashboardInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => {
        if (!res.ok) {
          router.push("/login");
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.user) {
          setUser(data.user);
        }
      })
      .catch(() => {
        router.push("/login");
      });
  }, [router]);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  const navItems = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Learn & Play", href: "/dashboard/learn", icon: BookOpen, badge: "Module 1" },
    { label: "AI Risk Scanner", href: "/dashboard/scanner", icon: BrainCircuit, badge: "⭐ AI" },
    { label: "Parent Connection", href: "/dashboard/parent-link", icon: Users2, badge: "Module 3" },
    { label: "Report Incident", href: "/dashboard/report", icon: AlertTriangle, badge: "Help" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 border-r border-slate-800/80 bg-slate-950/80 flex flex-col justify-between p-4 shrink-0">
        <div>
          {/* Brand header */}
          <Link href="/dashboard" className="flex items-center space-x-3 px-2 py-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-white">
                Teen<span className="text-cyan-400">Safe</span>
              </span>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                Teen Console
              </div>
            </div>
          </Link>

          {/* User Score Card in Sidebar */}
          {user?.teenProfile && (
            <div className="mb-6 p-3 rounded-xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Safety Score</span>
                <span className="flex items-center gap-1 text-amber-400 font-semibold">
                  <Flame className="w-3.5 h-3.5" />
                  {user.teenProfile.streakDays}d Streak
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-cyan-400">
                  {user.teenProfile.safetyScore}
                </span>
                <span className="text-xs text-slate-400">/ 100</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(user.teenProfile.safetyScore, 100)}%` }}
                />
              </div>
            </div>
          )}

          {/* Navigation links */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition ${
                    isActive
                      ? "bg-indigo-600/20 text-cyan-400 border border-indigo-500/30"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                        item.badge.includes("AI")
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer profile & logout */}
        <div className="pt-4 border-t border-slate-800/80">
          <div className="flex items-center justify-between px-2 py-2">
            <div className="truncate mr-2">
              <div className="text-xs font-semibold text-white truncate">
                {user?.name || "Teen User"}
              </div>
              <div className="text-[10px] text-slate-400 truncate">{user?.email}</div>
            </div>
            <button
              onClick={handleLogout}
              title="Sign Out"
              className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-950/20 transition"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header className="h-16 border-b border-slate-800/80 bg-slate-950/60 backdrop-blur px-6 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Consent-based Teen Digital Wellbeing Portal</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-xs text-slate-400">
              Role: <span className="text-indigo-400 font-semibold">{user?.role || "TEEN"}</span>
            </div>
          </div>
        </header>

        <div className="p-6 max-w-6xl w-full mx-auto">{children}</div>
      </main>
    </div>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950" />}>
      <DashboardInner>{children}</DashboardInner>
    </Suspense>
  );
}
