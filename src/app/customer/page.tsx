"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search, Wrench, Zap, Sparkles, Hammer, Leaf, Wind, Star,
  MapPin, Calendar, MessageSquare, ArrowRight, Clock, ChevronRight
} from "lucide-react";
import { StatusBadge } from "@/components/ui/StatusBadge";

const categories = [
  { label: "Plumbing", icon: Wrench, color: "bg-blue-50", iconColor: "text-[#002B95]" },
  { label: "Electrical", icon: Zap, color: "bg-yellow-50", iconColor: "text-yellow-600" },
  { label: "Cleaning", icon: Sparkles, color: "bg-purple-50", iconColor: "text-purple-600" },
  { label: "Handyman", icon: Hammer, color: "bg-orange-50", iconColor: "text-orange-600" },
  { label: "Landscaping", icon: Leaf, color: "bg-green-50", iconColor: "text-green-600" },
  { label: "HVAC", icon: Wind, color: "bg-sky-50", iconColor: "text-sky-600" },
];

const recommended = [
  {
    id: "p1", name: "Mike's Plumbing", category: "Plumbing", rating: 4.9, reviews: 127,
    price: "From $80", responseTime: "~10 min", distance: "2.4 mi",
    avatar: "MP", avatarBg: "from-blue-500 to-blue-700", verified: true,
  },
  {
    id: "p2", name: "BrightSpark Electrical", category: "Electrical", rating: 4.8, reviews: 89,
    price: "From $95", responseTime: "~20 min", distance: "3.1 mi",
    avatar: "BS", avatarBg: "from-yellow-500 to-orange-500", verified: true,
  },
  {
    id: "p3", name: "FreshNest Cleaning", category: "Cleaning", rating: 4.9, reviews: 203,
    price: "From $65", responseTime: "~5 min", distance: "1.8 mi",
    avatar: "FN", avatarBg: "from-purple-500 to-purple-700", verified: true,
  },
];

export default function CustomerDashboard() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    router.push(`/customer/search${search ? `?q=${encodeURIComponent(search)}` : ""}`);
  }

  return (
    <div className="p-4 md:p-6 max-w-5xl mx-auto space-y-8">
      {/* Greeting */}
      <div>
        <h1 className="text-2xl font-extrabold text-[#0D1B3E]">Good morning, Jane 👋</h1>
        <p className="text-[#565E74] text-sm mt-1">What can we help you with today?</p>
      </div>

      {/* Search */}
      <form onSubmit={handleSearch} className="flex gap-3">
        <div className="flex-1 flex items-center gap-3 bg-white border border-[#E2E6F0] rounded-[12px] px-4 py-3 shadow-sm focus-within:border-[#002B95] focus-within:ring-2 focus-within:ring-[#002B95]/10 transition-all">
          <Search size={18} className="text-[#9EA6BE] shrink-0" />
          <input
            type="text"
            placeholder="Search for a service…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 text-sm text-[#0D1B3E] placeholder-[#9EA6BE] font-medium outline-none bg-transparent"
          />
        </div>
        <button type="submit" className="bg-[#002B95] hover:bg-[#001B63] text-white font-semibold text-sm px-5 py-3 rounded-[12px] transition-colors">
          Search
        </button>
      </form>

      {/* Categories */}
      <section>
        <h2 className="text-base font-bold text-[#0D1B3E] mb-4">Popular services</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {categories.map(({ label, icon: Icon, color, iconColor }) => (
            <button
              key={label}
              onClick={() => router.push(`/customer/search?category=${label.toLowerCase()}`)}
              className={`${color} rounded-[12px] p-3 flex flex-col items-center gap-2 hover:shadow-md hover:scale-105 transition-all`}
            >
              <div className={`w-9 h-9 rounded-[8px] bg-white shadow-sm flex items-center justify-center ${iconColor}`}>
                <Icon size={18} />
              </div>
              <span className="text-[11px] font-semibold text-[#0D1B3E]">{label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Active booking */}
      <section>
        <h2 className="text-base font-bold text-[#0D1B3E] mb-4">Active booking</h2>
        <div
          className="bg-white border border-[#E2E6F0] rounded-[16px] p-5 flex items-start justify-between gap-4 shadow-sm cursor-pointer hover:border-[#002B95] transition-colors"
          onClick={() => router.push("/customer/booking/bk001")}
        >
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-[10px] bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-sm shrink-0">
              MP
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <p className="font-bold text-[#0D1B3E] text-sm">Plumbing Repair</p>
                <StatusBadge status="accepted" />
              </div>
              <p className="text-[#565E74] text-xs">Mike&apos;s Plumbing</p>
              <div className="flex items-center gap-4 mt-2">
                <span className="flex items-center gap-1.5 text-xs text-[#565E74]">
                  <Calendar size={12} /> Tomorrow, 10:00 AM
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[#565E74]">
                  <MapPin size={12} /> 142 Oak Street
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <p className="text-sm font-bold text-[#0D1B3E]">$120</p>
            <button
              onClick={(e) => { e.stopPropagation(); router.push("/customer/messages"); }}
              className="flex items-center gap-1.5 text-xs text-[#002B95] font-medium hover:text-[#001B63]"
            >
              <MessageSquare size={12} /> Message
            </button>
          </div>
        </div>
      </section>

      {/* Quick actions */}
      <section>
        <h2 className="text-base font-bold text-[#0D1B3E] mb-4">Quick actions</h2>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Find a service", icon: Search, color: "bg-[#EEF2FF] text-[#002B95]", action: "/customer/search" },
            { label: "View bookings", icon: Calendar, color: "bg-green-50 text-green-700", action: "/customer/booking/bk001" },
            { label: "Messages", icon: MessageSquare, color: "bg-purple-50 text-purple-700", action: "/customer/messages" },
          ].map(({ label, icon: Icon, color, action }) => (
            <button
              key={label}
              onClick={() => router.push(action)}
              className="bg-white border border-[#E2E6F0] rounded-[12px] p-4 flex flex-col items-center gap-2.5 hover:shadow-md transition-all text-center"
            >
              <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center ${color}`}>
                <Icon size={18} />
              </div>
              <span className="text-xs font-semibold text-[#0D1B3E]">{label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Recommended providers */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-[#0D1B3E]">Recommended near you</h2>
          <button onClick={() => router.push("/customer/search")} className="text-xs text-[#002B95] font-semibold hover:text-[#001B63] flex items-center gap-1">
            View all <ArrowRight size={13} />
          </button>
        </div>
        <div className="space-y-3">
          {recommended.map((p) => (
            <div
              key={p.id}
              className="bg-white border border-[#E2E6F0] rounded-[14px] p-4 flex items-center gap-4 hover:shadow-md transition-all cursor-pointer"
              onClick={() => router.push(`/customer/provider/${p.id}`)}
            >
              <div className={`w-11 h-11 rounded-[10px] bg-gradient-to-br ${p.avatarBg} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                {p.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="font-bold text-[#0D1B3E] text-sm truncate">{p.name}</p>
                  {p.verified && (
                    <span className="text-[10px] bg-[#ECFDF5] text-[#004117] font-bold px-1.5 py-0.5 rounded-full shrink-0">✓ Verified</span>
                  )}
                </div>
                <p className="text-xs text-[#565E74]">{p.category}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="flex items-center gap-0.5 text-xs font-semibold text-[#0D1B3E]">
                    <Star size={11} className="fill-amber-400 text-amber-400" /> {p.rating}
                    <span className="text-[#9EA6BE] font-normal ml-0.5">({p.reviews})</span>
                  </span>
                  <span className="text-[#9EA6BE] text-xs">·</span>
                  <span className="flex items-center gap-1 text-xs text-[#565E74]"><Clock size={10} /> {p.responseTime}</span>
                  <span className="text-[#9EA6BE] text-xs">·</span>
                  <span className="text-xs text-[#565E74]">{p.distance}</span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm font-bold text-[#002B95]">{p.price}</p>
                <ChevronRight size={16} className="text-[#C8CFDF] ml-auto mt-1" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
