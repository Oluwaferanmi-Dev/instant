import { useState } from "react";
import { useNavigate } from "react-router";
import { Users, Briefcase, ShieldCheck, DollarSign, TrendingUp, AlertTriangle, CheckCircle, Clock, ArrowRight, X } from "lucide-react";
import { StatusBadge } from "@/components/ui/StatusBadge";

const stats = [
  { label: "Total users", val: "18,427", icon: Users, color: "text-[#002B95]", bg: "bg-[#EEF2FF]", change: "+142 this week", nav: "/admin/users" },
  { label: "Customers", val: "15,203", icon: Users, color: "text-purple-600", bg: "bg-purple-50", change: "+89 this week", nav: "/admin/users" },
  { label: "Providers", val: "3,224", icon: Briefcase, color: "text-[#004117]", bg: "bg-[#ECFDF5]", change: "+53 this week", nav: "/admin/users" },
  { label: "Pending verifications", val: "47", icon: ShieldCheck, color: "text-amber-600", bg: "bg-amber-50", change: "12 urgent", nav: "/admin/verifications" },
  { label: "Active bookings", val: "1,842", icon: Clock, color: "text-blue-600", bg: "bg-blue-50", change: "Today", nav: "/admin/bookings" },
  { label: "Completed (all time)", val: "52,190", icon: CheckCircle, color: "text-green-600", bg: "bg-green-50", change: "+840 this month", nav: "/admin/bookings" },
  { label: "Revenue (MTD)", val: "$284,200", icon: DollarSign, color: "text-teal-600", bg: "bg-teal-50", change: "+18% vs last month", nav: "/admin/bookings" },
  { label: "Disputes", val: "6", icon: AlertTriangle, color: "text-red-600", bg: "bg-red-50", change: "2 urgent", nav: "/admin/bookings" },
];

type VerifStatus = "pending_verification" | "verified" | "rejected";

const initialVerifications = [
  { id: "v1", name: "Carlos R.", business: "ProPaint Services", submitted: "Sep 7, 2026", status: "pending_verification" as VerifStatus },
  { id: "v2", name: "Diane W.", business: "ClearFlow Plumbing", submitted: "Sep 6, 2026", status: "pending_verification" as VerifStatus },
  { id: "v3", name: "Kevin M.", business: "SparXX Electrical", submitted: "Sep 5, 2026", status: "pending_verification" as VerifStatus },
  { id: "v4", name: "Sylvia N.", business: "GreenThumb Landscapes", submitted: "Sep 4, 2026", status: "pending_verification" as VerifStatus },
];

const recentBookings = [
  { id: "b1", customer: "Jane D.", provider: "Mike's Plumbing", service: "Drain Cleaning", amount: "$120", status: "accepted" as const, date: "Sep 9" },
  { id: "b2", customer: "Mark S.", provider: "BrightSpark Elec.", service: "Panel Inspection", amount: "$95", status: "requested" as const, date: "Sep 9" },
  { id: "b3", customer: "Amanda P.", provider: "FreshNest Cleaning", service: "Deep Clean", amount: "$150", status: "completed" as const, date: "Sep 8" },
  { id: "b4", customer: "Robert H.", provider: "GreenWay Landscaping", service: "Lawn Care", amount: "$200", status: "in_progress" as const, date: "Sep 8" },
  { id: "b5", customer: "Lisa T.", provider: "HomeFix Handyman", service: "Furniture Assembly", amount: "$85", status: "cancelled" as const, date: "Sep 7" },
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [verifications, setVerifications] = useState(initialVerifications);
  const [rejectId, setRejectId] = useState<string | null>(null);
  const [rejectReason, setRejectReason] = useState("");

  const approve = (id: string) =>
    setVerifications((prev) => prev.map((v) => v.id === id ? { ...v, status: "verified" as VerifStatus } : v));

  const confirmReject = () => {
    if (!rejectId) return;
    setVerifications((prev) => prev.map((v) => v.id === rejectId ? { ...v, status: "rejected" as VerifStatus } : v));
    setRejectId(null);
    setRejectReason("");
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      {/* Reject modal */}
      {rejectId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-[20px] p-6 max-w-sm w-full shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-[#0D1B3E]">Reject verification</h2>
              <button onClick={() => setRejectId(null)}><X size={20} className="text-[#9EA6BE]" /></button>
            </div>
            <p className="text-sm text-[#565E74] mb-4">Provide a reason so the provider knows what to correct.</p>
            <textarea
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              placeholder="e.g. License document is expired. Please resubmit with a valid license."
              rows={3}
              className="w-full border border-[#E2E6F0] rounded-[10px] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#DC2626] focus:ring-2 focus:ring-red-100 resize-none mb-4 transition-all"
            />
            <div className="flex gap-3">
              <button onClick={() => setRejectId(null)} className="flex-1 border border-[#E2E6F0] rounded-[10px] py-2.5 text-sm font-semibold text-[#565E74] hover:bg-[#F8F9FC]">
                Cancel
              </button>
              <button onClick={confirmReject} className="flex-1 bg-[#DC2626] text-white rounded-[10px] py-2.5 text-sm font-bold hover:bg-red-700 transition-colors">
                Reject provider
              </button>
            </div>
          </div>
        </div>
      )}

      <div>
        <h1 className="text-2xl font-extrabold text-[#0D1B3E]">Admin Overview</h1>
        <p className="text-sm text-[#565E74] mt-1">Sep 8, 2026 · Real-time dashboard</p>
      </div>

      {/* Stats grid — all clickable */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, val, icon: Icon, color, bg, change, nav }) => (
          <button
            key={label}
            onClick={() => navigate(nav)}
            className="bg-white rounded-[16px] border border-[#E2E6F0] p-5 shadow-sm text-left hover:shadow-md hover:border-[#C8CFDF] transition-all"
          >
            <div className={`w-9 h-9 rounded-[10px] ${bg} flex items-center justify-center ${color} mb-3`}>
              <Icon size={16} />
            </div>
            <p className="text-2xl font-extrabold text-[#0D1B3E]">{val}</p>
            <p className="text-xs text-[#565E74] font-medium mt-0.5">{label}</p>
            <p className="text-xs text-[#9EA6BE] mt-1">{change}</p>
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Pending verifications */}
        <div className="bg-white rounded-[16px] border border-[#E2E6F0] shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-[#E2E6F0] flex items-center justify-between">
            <h2 className="font-bold text-[#0D1B3E]">Pending verifications</h2>
            <div className="flex items-center gap-3">
              <span className="text-xs bg-amber-50 text-amber-700 font-bold px-2.5 py-1 rounded-full">
                {verifications.filter((v) => v.status === "pending_verification").length} pending
              </span>
              <button onClick={() => navigate("/admin/verifications")} className="text-xs text-[#002B95] font-semibold flex items-center gap-1 hover:text-[#001B63]">
                View all <ArrowRight size={12} />
              </button>
            </div>
          </div>
          <div className="divide-y divide-[#F8F9FC]">
            {verifications.map((v) => (
              <div key={v.id} className="px-5 py-4 flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#002B95] to-[#3B5FD4] flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {v.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#0D1B3E] text-sm">{v.name}</p>
                  <p className="text-xs text-[#565E74] truncate">{v.business}</p>
                  <p className="text-xs text-[#9EA6BE]">Submitted {v.submitted}</p>
                </div>
                {v.status === "pending_verification" ? (
                  <div className="flex gap-2">
                    <button
                      onClick={() => approve(v.id)}
                      className="px-3 py-1.5 bg-[#ECFDF5] text-[#004117] font-bold text-xs rounded-[8px] hover:bg-green-100 transition-colors"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => setRejectId(v.id)}
                      className="px-3 py-1.5 bg-red-50 text-[#DC2626] font-bold text-xs rounded-[8px] hover:bg-red-100 transition-colors"
                    >
                      Reject
                    </button>
                  </div>
                ) : (
                  <StatusBadge status={v.status} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Recent bookings */}
        <div className="bg-white rounded-[16px] border border-[#E2E6F0] shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-[#E2E6F0] flex items-center justify-between">
            <h2 className="font-bold text-[#0D1B3E]">Recent bookings</h2>
            <button onClick={() => navigate("/admin/bookings")} className="text-xs text-[#002B95] font-semibold flex items-center gap-1 hover:text-[#001B63]">
              View all <ArrowRight size={12} />
            </button>
          </div>
          <div className="divide-y divide-[#F8F9FC]">
            {recentBookings.map((b) => (
              <div
                key={b.id}
                onClick={() => navigate("/admin/bookings")}
                className="px-5 py-3 flex items-center gap-3 cursor-pointer hover:bg-[#F8F9FC] transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="font-semibold text-[#0D1B3E] text-sm truncate">{b.service}</p>
                    <StatusBadge status={b.status} />
                  </div>
                  <p className="text-xs text-[#565E74]">{b.customer} → {b.provider}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-bold text-[#002B95] text-sm">{b.amount}</p>
                  <p className="text-xs text-[#9EA6BE]">{b.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
