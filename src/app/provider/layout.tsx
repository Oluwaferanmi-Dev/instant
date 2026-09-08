"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard, Inbox, Wrench, MessageSquare,
  DollarSign, Settings, Menu, X, LogOut
} from "lucide-react";

const navItems = [
  { href: "/provider", label: "Dashboard", icon: LayoutDashboard },
  { href: "/provider/requests", label: "Requests", icon: Inbox },
  { href: "/provider/services", label: "Services", icon: Wrench },
  { href: "/provider/messages", label: "Messages", icon: MessageSquare },
  { href: "/provider/earnings", label: "Earnings", icon: DollarSign },
  { href: "/provider/settings", label: "Settings", icon: Settings },
];

export default function ProviderLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex h-screen bg-[#F8F9FC] overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-[#0D1B3E] shrink-0">
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.png" alt="Instant" width={100} height={28} className="h-7 w-auto object-contain brightness-0 invert" />
          </Link>
        </div>
        <div className="px-4 py-3 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#004117] to-[#16A34A] flex items-center justify-center text-white text-xs font-bold">
              MP
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Mike&apos;s Plumbing</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                <span className="text-xs text-green-400 font-medium">Verified</span>
              </div>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href || (href !== "/provider" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-sm font-medium transition-all ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={18} />
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-white/10">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-3 px-3 py-2 rounded-[10px] text-sm text-white/50 hover:text-white/80 w-full transition-colors"
          >
            <LogOut size={16} />
            Sign out
          </button>
        </div>
      </aside>

      {/* Mobile overlay sidebar */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <aside className="relative flex flex-col w-72 bg-[#0D1B3E] shadow-2xl">
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <Link href="/" onClick={() => setSidebarOpen(false)}>
                <Image src="/logo.png" alt="Instant" width={100} height={28} className="h-7 w-auto object-contain brightness-0 invert" />
              </Link>
              <button onClick={() => setSidebarOpen(false)} className="p-1 rounded-lg text-white/60">
                <X size={20} />
              </button>
            </div>
            <nav className="flex-1 p-4 space-y-1">
              {navItems.map(({ href, label, icon: Icon }) => {
                const isActive = pathname === href || (href !== "/provider" && pathname.startsWith(href));
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-sm font-medium transition-all ${
                      isActive ? "bg-white/10 text-white" : "text-white/60 hover:text-white"
                    }`}
                  >
                    <Icon size={18} />
                    {label}
                  </Link>
                );
              })}
            </nav>
          </aside>
        </div>
      )}

      <div className="flex-1 flex flex-col min-w-0 h-full">
        {/* Mobile header */}
        <header className="lg:hidden flex items-center justify-between px-4 py-3 bg-[#0D1B3E]">
          <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-lg text-white/70">
            <Menu size={20} />
          </button>
          <Link href="/provider">
            <Image src="/logo.png" alt="Instant" width={80} height={24} className="h-6 w-auto object-contain brightness-0 invert" />
          </Link>
          <div className="w-8" />
        </header>

        {/* Role switcher banner */}
        <div className="bg-[#004117] text-white text-xs py-2 px-4 flex items-center justify-between shrink-0">
          <span className="font-medium">Provider View</span>
          <div className="flex gap-4">
            <Link href="/customer" className="underline underline-offset-2 hover:no-underline opacity-80 hover:opacity-100">
              Switch to Customer
            </Link>
            <Link href="/admin" className="underline underline-offset-2 hover:no-underline opacity-80 hover:opacity-100">
              Admin
            </Link>
          </div>
        </div>

        <main className="flex-1 overflow-auto p-4 md:p-6">
          {children}
        </main>

        {/* Mobile bottom nav */}
        <nav className="lg:hidden flex bg-[#0D1B3E] border-t border-white/10 shrink-0">
          {navItems.slice(0, 5).map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href || (href !== "/provider" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`flex-1 flex flex-col items-center py-2 text-[10px] font-medium transition-colors ${
                  isActive ? "text-white" : "text-white/40"
                }`}
              >
                <Icon size={20} />
                <span className="mt-0.5">{label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
