"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Users, ShieldCheck, Calendar, LogOut, Menu, X } from "lucide-react";

const navItems = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/verifications", label: "Verifications", icon: ShieldCheck },
  { href: "/admin/bookings", label: "Bookings", icon: Calendar },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex h-screen bg-[#F8F9FC] overflow-hidden">
      <aside className="hidden lg:flex flex-col w-60 bg-white border-r border-[#E2E6F0] shrink-0">
        <div className="p-5 border-b border-[#E2E6F0]">
          <Link href="/">
            <Image src="/logo.png" alt="Instant" width={100} height={28} className="h-7 w-auto object-contain object-left" />
          </Link>
          <span className="block text-[10px] font-bold tracking-widest text-[#565E74] uppercase mt-1">Admin</span>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href || (href !== "/admin" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-sm font-medium transition-all ${
                  isActive ? "bg-[#EEF2FF] text-[#002B95]" : "text-[#565E74] hover:bg-[#F8F9FC] hover:text-[#0D1B3E]"
                }`}
              >
                <Icon size={17} />
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-[#E2E6F0]">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-3 px-3 py-2 text-sm text-[#565E74] hover:text-[#DC2626] w-full rounded-[10px] hover:bg-red-50 transition-colors"
          >
            <LogOut size={16} /> Sign out
          </button>
        </div>
      </aside>

      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/40" onClick={() => setSidebarOpen(false)} />
          <aside className="relative flex flex-col w-64 bg-white shadow-2xl">
            <div className="flex items-center justify-between p-5 border-b border-[#E2E6F0]">
              <Link href="/" onClick={() => setSidebarOpen(false)}>
                <Image src="/logo.png" alt="Instant" width={100} height={28} className="h-6 w-auto object-contain object-left" />
              </Link>
              <button onClick={() => setSidebarOpen(false)}><X size={20} className="text-[#565E74]" /></button>
            </div>
            <nav className="flex-1 p-4 space-y-1">
              {navItems.map(({ href, label, icon: Icon }) => {
                const isActive = pathname === href || (href !== "/admin" && pathname.startsWith(href));
                return (
                  <Link key={href} href={href} onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-sm font-medium ${isActive ? "bg-[#EEF2FF] text-[#002B95]" : "text-[#565E74]"}`}
                  >
                    <Icon size={17} />{label}
                  </Link>
                );
              })}
            </nav>
          </aside>
        </div>
      )}

      <div className="flex-1 flex flex-col min-w-0 h-full">
        <header className="lg:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-[#E2E6F0]">
          <button onClick={() => setSidebarOpen(true)} className="p-2 text-[#565E74]"><Menu size={20} /></button>
          <Link href="/admin">
            <Image src="/logo.png" alt="Instant" width={80} height={24} className="h-6 w-auto object-contain" />
          </Link>
          <div className="w-8" />
        </header>
        <div className="bg-[#0D1B3E] text-white text-xs py-2 px-4 flex items-center justify-between shrink-0">
          <span className="font-medium">Admin Panel</span>
          <div className="flex gap-4">
            <Link href="/customer" className="underline underline-offset-2 opacity-80 hover:opacity-100">Customer</Link>
            <Link href="/provider" className="underline underline-offset-2 opacity-80 hover:opacity-100">Provider</Link>
          </div>
        </div>
        <main className="flex-1 overflow-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
