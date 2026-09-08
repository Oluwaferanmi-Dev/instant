import { Outlet, NavLink, useNavigate } from "react-router";
import { useState } from "react";
import {
  LayoutDashboard, Inbox, Briefcase, Wrench, MessageSquare,
  DollarSign, Settings, Menu, X, LogOut
} from "lucide-react";
import logoSrc from "@/imports/logo.png";

const navItems = [
  { to: "/provider", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/provider/requests", label: "Requests", icon: Inbox },
  { to: "/provider/services", label: "Services", icon: Wrench },
  { to: "/provider/messages", label: "Messages", icon: MessageSquare },
  { to: "/provider/earnings", label: "Earnings", icon: DollarSign },
  { to: "/provider/settings", label: "Settings", icon: Settings },
];

export default function ProviderLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex h-full bg-[#F8F9FC]">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-[#0D1B3E] shrink-0">
        <div className="p-5 border-b border-white/10">
          <img src={logoSrc} alt="Instant" className="h-8 object-contain object-left brightness-0 invert" />
        </div>
        <div className="px-4 py-3 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#004117] to-[#16A34A] flex items-center justify-center text-white text-xs font-bold">
              MP
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Mike's Plumbing</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                <span className="text-xs text-green-400 font-medium">Verified</span>
              </div>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-sm font-medium transition-all ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <button
            onClick={() => navigate("/")}
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
              <img src={logoSrc} alt="Instant" className="h-7 object-contain object-left brightness-0 invert" />
              <button onClick={() => setSidebarOpen(false)} className="p-1 rounded-lg text-white/60">
                <X size={20} />
              </button>
            </div>
            <nav className="flex-1 p-4 space-y-1">
              {navItems.map(({ to, label, icon: Icon, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-sm font-medium transition-all ${
                      isActive ? "bg-white/10 text-white" : "text-white/60 hover:text-white"
                    }`
                  }
                >
                  <Icon size={18} />
                  {label}
                </NavLink>
              ))}
            </nav>
          </aside>
        </div>
      )}

      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile header */}
        <header className="lg:hidden flex items-center justify-between px-4 py-3 bg-[#0D1B3E]">
          <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-lg text-white/70">
            <Menu size={20} />
          </button>
          <img src={logoSrc} alt="Instant" className="h-6 object-contain brightness-0 invert" />
          <div className="w-8" />
        </header>

        {/* Role switcher */}
        <div className="bg-[#004117] text-white text-xs py-2 px-4 flex items-center justify-between">
          <span className="font-medium">Provider View</span>
          <div className="flex gap-3">
            <button onClick={() => navigate("/customer")} className="underline underline-offset-2 hover:no-underline opacity-80 hover:opacity-100">
              Switch to Customer
            </button>
            <button onClick={() => navigate("/admin")} className="underline underline-offset-2 hover:no-underline opacity-80 hover:opacity-100">
              Admin
            </button>
          </div>
        </div>

        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>

        {/* Mobile bottom nav */}
        <nav className="lg:hidden flex bg-[#0D1B3E] border-t border-white/10">
          {navItems.slice(0, 5).map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex-1 flex flex-col items-center py-2 text-[10px] font-medium transition-colors ${
                  isActive ? "text-white" : "text-white/40"
                }`
              }
            >
              <Icon size={20} />
              <span className="mt-0.5">{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
