"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  Home, Search, Calendar, MessageSquare, Bell, User, Menu, X, LogOut
} from "lucide-react";

const navItems = [
  { href: "/customer", label: "Home", icon: Home },
  { href: "/customer/search", label: "Search", icon: Search },
  { href: "/customer/booking/bk001", label: "Bookings", icon: Calendar },
  { href: "/customer/messages", label: "Messages", icon: MessageSquare },
  { href: "/customer/notifications", label: "Notifications", icon: Bell },
  { href: "/customer/settings", label: "Profile", icon: User },
];

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex h-screen bg-[#F8F9FC] overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-[#E2E6F0] shrink-0">
        <div className="p-5 border-b border-[#E2E6F0] flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.png" alt="Instant" width={100} height={28} className="h-7 w-auto object-contain" />
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href || (href !== "/customer" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#EEF2FF] text-[#002B95]"
                    : "text-[#565E74] hover:bg-[#F8F9FC] hover:text-[#0D1B3E]"
                }`}
              >
                <Icon size={18} />
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-[#E2E6F0]">
          <div className="flex items-center gap-3 px-3 py-2.5 mb-1">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#002B95] to-[#3B5FD4] flex items-center justify-center text-white text-xs font-bold">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#0D1B3E] truncate">Jane Doe</p>
              <p className="text-xs text-[#565E74] truncate">jane@email.com</p>
            </div>
          </div>
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-3 px-3 py-2 rounded-[10px] text-sm text-[#565E74] hover:text-[#DC2626] hover:bg-red-50 w-full transition-colors"
          >
            <LogOut size={16} />
            Sign out
          </button>
        </div>
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/40" onClick={() => setSidebarOpen(false)} />
          <aside className="relative flex flex-col w-72 bg-white shadow-2xl">
            <div className="flex items-center justify-between p-5 border-b border-[#E2E6F0]">
              <Link href="/" onClick={() => setSidebarOpen(false)}>
                <Image src="/logo.png" alt="Instant" width={100} height={28} className="h-7 w-auto object-contain" />
              </Link>
              <button onClick={() => setSidebarOpen(false)} className="p-1 rounded-lg text-[#565E74]">
                <X size={20} />
              </button>
            </div>
            <nav className="flex-1 p-4 space-y-1">
              {navItems.map(({ href, label, icon: Icon }) => {
                const isActive = pathname === href || (href !== "/customer" && pathname.startsWith(href));
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-sm font-medium transition-all ${
                      isActive ? "bg-[#EEF2FF] text-[#002B95]" : "text-[#565E74] hover:bg-[#F8F9FC]"
                    }`}
                  >
                    <Icon size={18} />
                    {label}
                  </Link>
                );
              })}
            </nav>
            <div className="p-4 border-t border-[#E2E6F0]">
              <button onClick={() => router.push("/")} className="flex items-center gap-3 px-3 py-2 text-sm text-[#565E74] hover:text-[#DC2626] w-full">
                <LogOut size={16} /> Sign out
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0 h-full">
        {/* Mobile top bar */}
        <header className="lg:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-[#E2E6F0]">
          <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-lg text-[#565E74]">
            <Menu size={20} />
          </button>
          <Link href="/customer">
            <Image src="/logo.png" alt="Instant" width={80} height={24} className="h-6 w-auto object-contain" />
          </Link>
          <Link href="/customer/notifications" className="p-2 rounded-lg text-[#565E74] relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#002B95] rounded-full" />
          </Link>
        </header>

        {/* Role switcher banner */}
        <div className="bg-[#002B95] text-white text-xs py-2 px-4 flex items-center justify-between shrink-0">
          <span className="font-medium">Customer View</span>
          <div className="flex gap-4">
            <Link href="/provider" className="underline underline-offset-2 hover:no-underline opacity-80 hover:opacity-100">
              Switch to Provider
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
        <nav className="lg:hidden flex bg-white border-t border-[#E2E6F0] shrink-0">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href || (href !== "/customer" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`flex-1 flex flex-col items-center py-2 text-[10px] font-medium transition-colors ${
                  isActive ? "text-[#002B95]" : "text-[#9EA6BE]"
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
