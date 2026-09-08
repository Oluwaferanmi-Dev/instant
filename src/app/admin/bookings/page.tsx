"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { StatusBadge } from "@/components/ui/StatusBadge";

const bookings = [
  { id: "bk001", customer: "Jane D.", provider: "Mike's Plumbing", service: "Drain Cleaning", amount: "$120", status: "accepted" as const, date: "Sep 9, 2026" },
  { id: "bk002", customer: "Mark S.", provider: "BrightSpark Elec.", service: "Panel Inspection", amount: "$95", status: "requested" as const, date: "Sep 9, 2026" },
  { id: "bk003", customer: "Amanda P.", provider: "FreshNest Cleaning", service: "Deep Clean", amount: "$150", status: "completed" as const, date: "Sep 8, 2026" },
  { id: "bk004", customer: "Robert H.", provider: "GreenWay Landscaping", service: "Lawn Care", amount: "$200", status: "in_progress" as const, date: "Sep 8, 2026" },
  { id: "bk005", customer: "Lisa T.", provider: "HomeFix Handyman", service: "Furniture Assembly", amount: "$85", status: "cancelled" as const, date: "Sep 7, 2026" },
  { id: "bk006", customer: "James B.", provider: "Mike's Plumbing", service: "Leak Repair", amount: "$140", status: "completed" as const, date: "Sep 6, 2026" },
  { id: "bk007", customer: "Sarah M.", provider: "FreshNest Cleaning", service: "Regular Clean", amount: "$90", status: "paid" as const, date: "Sep 5, 2026" },
  { id: "bk008", customer: "Kevin T.", provider: "BrightSpark Elec.", service: "Outlet Install", amount: "$110", status: "disputed" as const, date: "Sep 4, 2026" },
];

export default function AdminBookingsPage() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = bookings.filter((b) => {
    const matchQ = !query || b.customer.toLowerCase().includes(query.toLowerCase()) || b.provider.toLowerCase().includes(query.toLowerCase()) || b.service.toLowerCase().includes(query.toLowerCase());
    const matchStatus = statusFilter === "All" || b.status === statusFilter.toLowerCase().replace(" ", "_");
    return matchQ && matchStatus;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-extrabold text-[#0D1B3E]">Bookings</h1>
        <span className="text-sm text-[#565E74]">{bookings.length} total</span>
      </div>

      <div className="flex gap-3 mb-5 flex-wrap">
        <div className="flex items-center gap-2 bg-white border border-[#E2E6F0] rounded-[10px] px-3 py-2 flex-1 min-w-[200px]">
          <Search size={15} className="text-[#9EA6BE]" />
          <input
            type="text"
            placeholder="Search bookings…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-sm outline-none text-[#0D1B3E] placeholder-[#9EA6BE]"
          />
        </div>
        {["All", "Requested", "Accepted", "In Progress", "Completed", "Disputed", "Cancelled"].map((s) => (
          <button
            key={s}
            onClick={() => setStatusFilter(s)}
            className={`px-3 py-2 rounded-[10px] text-xs font-semibold transition-colors ${
              statusFilter === s ? "bg-[#0D1B3E] text-white" : "bg-white border border-[#E2E6F0] text-[#565E74] hover:bg-[#F8F9FC]"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-[16px] border border-[#E2E6F0] shadow-sm overflow-hidden">
        <div className="hidden sm:grid grid-cols-12 gap-4 px-5 py-3 bg-[#F8F9FC] border-b border-[#E2E6F0] text-xs font-bold text-[#9EA6BE] uppercase tracking-widest">
          <div className="col-span-2">ID</div>
          <div className="col-span-2">Customer</div>
          <div className="col-span-2">Provider</div>
          <div className="col-span-2">Service</div>
          <div className="col-span-1">Amount</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-1">Date</div>
        </div>
        {filtered.map((b) => (
          <div key={b.id} className="px-5 py-4 border-b border-[#F8F9FC] last:border-0 hover:bg-[#F8F9FC] transition-colors">
            <div className="sm:grid sm:grid-cols-12 sm:gap-4 sm:items-center flex flex-col gap-2">
              <p className="sm:col-span-2 text-xs font-mono text-[#9EA6BE]">#{b.id.toUpperCase()}</p>
              <p className="sm:col-span-2 text-sm font-semibold text-[#0D1B3E]">{b.customer}</p>
              <p className="sm:col-span-2 text-sm text-[#565E74]">{b.provider}</p>
              <p className="sm:col-span-2 text-sm text-[#565E74]">{b.service}</p>
              <p className="sm:col-span-1 text-sm font-bold text-[#002B95]">{b.amount}</p>
              <div className="sm:col-span-2"><StatusBadge status={b.status} /></div>
              <p className="sm:col-span-1 text-xs text-[#9EA6BE]">{b.date}</p>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-12 text-[#9EA6BE]">
            <p>No bookings found</p>
          </div>
        )}
      </div>
    </div>
  );
}
