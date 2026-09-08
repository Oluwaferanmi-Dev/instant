import { Outlet, NavLink, useNavigate } from "react-router";
import { LayoutDashboard, Users, ShieldCheck, Calendar, BarChart2, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";
import logoSrc from "@/imports/logo.png";

const navItems = [
  { to: "/admin", label: "Overview", icon: LayoutDashboard, end: true },
  { to: "/admin/users", label: "Users", icon: Users },
  { to: "/admin/verifications", label: "Verifications", icon: ShieldCheck },
  { to: "/admin/bookings", label: "Bookings", icon: Calendar },
];

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex h-full bg-[#F8F9FC]">
      <aside className="hidden lg:flex flex-col w-60 bg-white border-r border-[#E2E6F0] shrink-0">
        <div className="p-5 border-b border-[#E2E6F0]">
          <img src={logoSrc} alt="Instant" className="h-7 object-contain object-left" />
          <span className="block text-[10px] font-bold tracking-widest text-[#565E74] uppercase mt-1">Admin</span>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-sm font-medium transition-all ${
                  isActive ? "bg-[#EEF2FF] text-[#002B95]" : "text-[#565E74] hover:bg-[#F8F9FC] hover:text-[#0D1B3E]"
                }`
              }
            >
              <Icon size={17} />
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-[#E2E6F0]">
          <button
            onClick={() => navigate("/")}
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
              <img src={logoSrc} alt="Instant" className="h-6 object-contain object-left" />
              <button onClick={() => setSidebarOpen(false)}><X size={20} className="text-[#565E74]" /></button>
            </div>
            <nav className="flex-1 p-4 space-y-1">
              {navItems.map(({ to, label, icon: Icon, end }) => (
                <NavLink key={to} to={to} end={end} onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-sm font-medium ${isActive ? "bg-[#EEF2FF] text-[#002B95]" : "text-[#565E74]"}`
                  }
                >
                  <Icon size={17} />{label}
                </NavLink>
              ))}
            </nav>
          </aside>
        </div>
      )}

      <div className="flex-1 flex flex-col min-w-0">
        <header className="lg:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-[#E2E6F0]">
          <button onClick={() => setSidebarOpen(true)} className="p-2 text-[#565E74]"><Menu size={20} /></button>
          <img src={logoSrc} alt="Instant" className="h-6 object-contain" />
          <div className="w-8" />
        </header>
        <div className="bg-[#0D1B3E] text-white text-xs py-2 px-4 flex items-center justify-between">
          <span className="font-medium">Admin Panel</span>
          <div className="flex gap-3">
            <button onClick={() => navigate("/customer")} className="underline underline-offset-2 opacity-80 hover:opacity-100">Customer</button>
            <button onClick={() => navigate("/provider")} className="underline underline-offset-2 opacity-80 hover:opacity-100">Provider</button>
          </div>
        </div>
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
