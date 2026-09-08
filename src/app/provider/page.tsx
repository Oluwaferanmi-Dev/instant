"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TrendingUp, Briefcase, Clock, DollarSign, ChevronRight, MessageSquare, User, MapPin, Calendar, Check, X } from "lucide-react";
import { StatusBadge } from "@/components/ui/StatusBadge";

const stats = [
  { label: "New requests", val: "3", icon: Clock, trend: "+2 today", color: "text-[#002B95]", bg: "bg-[#EEF2FF]" },
  { label: "Upcoming jobs", val: "5", icon: Briefcase, trend: "Next: Sep 9", color: "text-amber-600", bg: "bg-amber-50" },
  { label: "Jobs completed", val: "214", icon: TrendingUp, trend: "+8 this month", color: "text-[#004117]", bg: "bg-[#ECFDF5]" },
  { label: "Earnings (Sep)", val: "$3,840", icon: DollarSign, trend: "+18% vs Aug", color: "text-purple-600", bg: "bg-purple-50" },
];

type ReqStatus = "requested" | "accepted" | "declined";

const initialRequests = [
  {
    id: "r1", customer: "Jane D.", service: "Drain Cleaning", date: "Sep 9, 10:00 AM",
    location: "142 Oak St", price: "$90–$150", notes: "Kitchen sink slow drain, has smell",
    avatar: "JD", avatarBg: "from-[#002B95] to-[#3B5FD4]", status: "requested" as ReqStatus,
  },
  {
    id: "r2", customer: "Robert H.", service: "Leak Repair", date: "Sep 10, 2:00 PM",
    location: "847 Elm Ave", price: "$80–$160", notes: "Dripping under kitchen sink cabinet",
    avatar: "RH", avatarBg: "from-teal-500 to-teal-700", status: "requested" as ReqStatus,
  },
  {
    id: "r3", customer: "Amanda P.", service: "Water Heater", date: "Sep 12, 9:00 AM",
    location: "301 Cedar Lane", price: "$150–$400", notes: "No hot water, tank is 8 years old",
    avatar: "AP", avatarBg: "from-pink-500 to-pink-700", status: "requested" as ReqStatus,
  },
];

const upcoming = [
  { id: "u1", customer: "Lisa T.", service: "Drain Cleaning", date: "Sep 9, 10:00 AM", status: "accepted" as const, price: "$120" },
  { id: "u2", customer: "Mark S.", service: "Toilet Repair", date: "Sep 10, 1:00 PM", status: "accepted" as const, price: "$95" },
];

const recentMessages = [
  { id: "m1", name: "Jane D.", text: "See you tomorrow at 10 AM!", time: "2:31 PM", avatar: "JD", bg: "from-[#002B95] to-[#3B5FD4]" },
  { id: "m2", name: "Mark S.", text: "Perfect, I'll have access ready.", time: "Yesterday", avatar: "MS", bg: "from-green-500 to-green-700" },
];

export default function ProviderDashboard() {
  const router = useRouter();
  const [requests, setRequests] = useState(initialRequests);
  const [declineId, setDeclineId] = useState<string | null>(null);

  const acceptRequest = (id: string) =>
    setRequests((prev) => prev.map((r) => r.id === id ? { ...r, status: "accepted" as ReqStatus } : r));

  const declineRequest = (id: string) => {
    setRequests((prev) => prev.map((r) => r.id === id ? { ...r, status: "declined" as ReqStatus } : r));
    setDeclineId(null);
  };

  return (
    <div className="p-4 md:p-6 max-w-6xl mx-auto space-y-8">
      {/* Decline confirm dialog */}
      {declineId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-[20px] p-6 max-w-sm w-full shadow-2xl">
            <h3 className="font-bold text-[#0D1B3E] mb-2">Decline this request?</h3>
            <p className="text-sm text-[#565E74] mb-5">The customer will be notified that you&apos;re unavailable for this job.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeclineId(null)} className="flex-1 border border-[#E2E6F0] rounded-[10px] py-2.5 text-sm font-semibold text-[#565E74] hover:bg-[#F8F9FC]">
                Cancel
              </button>
              <button onClick={() => declineRequest(declineId)} className="flex-1 bg-[#DC2626] text-white rounded-[10px] py-2.5 text-sm font-bold hover:bg-red-700 transition-colors">
                Yes, decline
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Greeting */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-extrabold text-[#0D1B3E]">Good morning, Mike 👋</h1>
          <p className="text-[#565E74] text-sm mt-1">Here&apos;s what&apos;s happening with your business today</p>
        </div>
        <div className="flex items-center gap-2 bg-[#ECFDF5] border border-[#004117]/20 rounded-[10px] px-3.5 py-2">
          <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
          <span className="text-sm font-semibold text-[#004117]">Verified Provider</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, val, icon: Icon, trend, color, bg }) => (
          <div key={label} className="bg-white rounded-[16px] border border-[#E2E6F0] p-5 shadow-sm">
            <div className={`w-10 h-10 rounded-[10px] ${bg} flex items-center justify-center ${color} mb-3`}>
              <Icon size={18} />
            </div>
            <p className="text-2xl font-extrabold text-[#0D1B3E]">{val}</p>
            <p className="text-xs text-[#565E74] font-medium mt-0.5">{label}</p>
            <p className="text-xs text-[#9EA6BE] mt-1">{trend}</p>
          </div>
        ))}
      </div>

      {/* Profile completion */}
      <div className="bg-amber-50 border border-amber-100 rounded-[14px] p-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <User size={18} className="text-amber-600 shrink-0" />
          <div>
            <p className="text-sm font-bold text-amber-800">Your profile is 80% complete</p>
            <p className="text-xs text-amber-600 mt-0.5">Add a business photo to attract more customers</p>
          </div>
        </div>
        <button
          onClick={() => router.push("/provider/settings")}
          className="text-xs font-bold text-amber-700 bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded-[8px] transition-colors whitespace-nowrap"
        >
          Complete profile
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* New requests */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-[#0D1B3E]">New requests</h2>
            <button onClick={() => router.push("/provider/requests")} className="text-xs text-[#002B95] font-semibold hover:text-[#001B63] flex items-center gap-1">
              View all <ChevronRight size={13} />
            </button>
          </div>
          <div className="space-y-4">
            {requests.map((req) => (
              <div key={req.id} className="bg-white rounded-[16px] border border-[#E2E6F0] p-5 shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${req.avatarBg} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                    {req.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-bold text-[#0D1B3E] text-sm">{req.customer}</p>
                      <div className="flex items-center gap-2">
                        {req.status !== "requested" && <StatusBadge status={req.status} />}
                        <p className="font-bold text-[#002B95] text-sm">{req.price}</p>
                      </div>
                    </div>
                    <p className="text-xs text-[#565E74]">{req.service}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-[#565E74] mb-3">
                  <span className="flex items-center gap-1.5"><Calendar size={11} /> {req.date}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={11} /> {req.location}</span>
                </div>
                {req.notes && (
                  <p className="text-xs text-[#565E74] bg-[#F8F9FC] rounded-[8px] p-2.5 mb-4 leading-relaxed">&quot;{req.notes}&quot;</p>
                )}
                {req.status === "requested" ? (
                  <div className="flex gap-2">
                    <button
                      onClick={() => acceptRequest(req.id)}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-[#ECFDF5] hover:bg-green-100 text-[#004117] font-bold text-xs py-2.5 rounded-[10px] transition-colors"
                    >
                      <Check size={14} /> Accept
                    </button>
                    <button
                      onClick={() => setDeclineId(req.id)}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-red-50 hover:bg-red-100 text-[#DC2626] font-bold text-xs py-2.5 rounded-[10px] transition-colors"
                    >
                      <X size={14} /> Decline
                    </button>
                    <button
                      onClick={() => router.push("/provider/messages")}
                      className="px-4 py-2.5 border border-[#E2E6F0] rounded-[10px] hover:bg-[#F8F9FC] transition-colors"
                    >
                      <MessageSquare size={14} className="text-[#565E74]" />
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={() => router.push("/provider/messages")}
                      className="flex items-center gap-1.5 text-xs font-medium text-[#002B95] border border-[#002B95] px-3 py-2 rounded-[8px] hover:bg-[#EEF2FF] transition-colors"
                    >
                      <MessageSquare size={12} /> Message customer
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-5">
          {/* Upcoming jobs */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-bold text-[#0D1B3E]">Upcoming jobs</h2>
              <button onClick={() => router.push("/provider/requests")} className="text-xs text-[#002B95] font-semibold">View all</button>
            </div>
            <div className="space-y-3">
              {upcoming.map((job) => (
                <div
                  key={job.id}
                  onClick={() => router.push("/provider/requests")}
                  className="bg-white rounded-[14px] border border-[#E2E6F0] p-4 shadow-sm cursor-pointer hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-[#0D1B3E] text-sm">{job.service}</p>
                    <StatusBadge status={job.status} />
                  </div>
                  <p className="text-xs text-[#565E74]">{job.customer}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-[#9EA6BE] flex items-center gap-1"><Calendar size={10} /> {job.date}</span>
                    <span className="text-sm font-bold text-[#002B95]">{job.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent messages */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-bold text-[#0D1B3E]">Recent messages</h2>
              <button onClick={() => router.push("/provider/messages")} className="text-xs text-[#002B95] font-semibold">
                View all
              </button>
            </div>
            <div className="space-y-2">
              {recentMessages.map((msg) => (
                <div
                  key={msg.id}
                  onClick={() => router.push("/provider/messages")}
                  className="bg-white rounded-[12px] border border-[#E2E6F0] p-3 flex items-center gap-3 cursor-pointer hover:shadow-sm transition-all"
                >
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${msg.bg} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                    {msg.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#0D1B3E]">{msg.name}</p>
                    <p className="text-xs text-[#9EA6BE] truncate">{msg.text}</p>
                  </div>
                  <span className="text-[10px] text-[#9EA6BE] shrink-0">{msg.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="bg-white rounded-[14px] border border-[#E2E6F0] p-4 shadow-sm space-y-2">
            <p className="text-xs font-bold text-[#9EA6BE] uppercase tracking-widest mb-3">Quick actions</p>
            {[
              { label: "Manage services", to: "/provider/services" },
              { label: "View earnings", to: "/provider/earnings" },
              { label: "Account settings", to: "/provider/settings" },
            ].map(({ label, to }) => (
              <button
                key={to}
                onClick={() => router.push(to)}
                className="w-full text-left text-sm text-[#565E74] hover:text-[#002B95] font-medium py-1.5 flex items-center justify-between transition-colors"
              >
                {label}
                <ChevronRight size={14} className="text-[#C8CFDF]" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
