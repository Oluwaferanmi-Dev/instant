import { Outlet, NavLink, useNavigate } from "react-router";
import { useState } from "react";
import {
  Home, Search, Calendar, MessageSquare, Bell, User, Menu, X,
  ChevronRight, LogOut, Settings
} from "lucide-react";
import logoSrc from "@/imports/logo.png";

const navItems = [
  { to: "/customer", label: "Home", icon: Home, end: true },
  { to: "/customer/search", label: "Search", icon: Search },
  { to: "/customer/booking/bk001", label: "Bookings", icon: Calendar },
  { to: "/customer/messages", label: "Messages", icon: MessageSquare },
  { to: "/customer/notifications", label: "Notifications", icon: Bell },
  { to: "/customer/settings", label: "Profile", icon: User },
];

export default function CustomerLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex h-full bg-[#F8F9FC]">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-[#E2E6F0] shrink-0">
        <div className="p-5 border-b border-[#E2E6F0]">
          <img src={logoSrc} alt="Instant" className="h-8 object-contain object-left" />
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
                    ? "bg-[#EEF2FF] text-[#002B95]"
                    : "text-[#565E74] hover:bg-[#F8F9FC] hover:text-[#0D1B3E]"
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
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
            onClick={() => navigate("/")}
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
              <img src={logoSrc} alt="Instant" className="h-7 object-contain object-left" />
              <button onClick={() => setSidebarOpen(false)} className="p-1 rounded-lg text-[#565E74]">
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
                      isActive ? "bg-[#EEF2FF] text-[#002B95]" : "text-[#565E74] hover:bg-[#F8F9FC]"
                    }`
                  }
                >
                  <Icon size={18} />
                  {label}
                </NavLink>
              ))}
            </nav>
            <div className="p-4 border-t border-[#E2E6F0]">
              <button onClick={() => navigate("/")} className="flex items-center gap-3 px-3 py-2 text-sm text-[#565E74] hover:text-[#DC2626] w-full">
                <LogOut size={16} /> Sign out
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile top bar */}
        <header className="lg:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-[#E2E6F0]">
          <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-lg text-[#565E74]">
            <Menu size={20} />
          </button>
          <img src={logoSrc} alt="Instant" className="h-6 object-contain" />
          <NavLink to="/customer/notifications" className="p-2 rounded-lg text-[#565E74] relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#002B95] rounded-full" />
          </NavLink>
        </header>

        {/* Role switcher banner */}
        <div className="bg-[#002B95] text-white text-xs py-2 px-4 flex items-center justify-between">
          <span className="font-medium">Customer View</span>
          <div className="flex gap-3">
            <button onClick={() => navigate("/provider")} className="underline underline-offset-2 hover:no-underline opacity-80 hover:opacity-100">
              Switch to Provider
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
        <nav className="lg:hidden flex bg-white border-t border-[#E2E6F0]">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex-1 flex flex-col items-center py-2 text-[10px] font-medium transition-colors ${
                  isActive ? "text-[#002B95]" : "text-[#9EA6BE]"
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
