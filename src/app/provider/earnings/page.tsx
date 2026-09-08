"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TrendingUp, DollarSign, Briefcase, CreditCard, CheckCircle, X, ExternalLink } from "lucide-react";
import { StatusBadge } from "@/components/ui/StatusBadge";

const transactions = [
  { id: "t1", job: "Drain Cleaning", customer: "Jane D.", amount: 120, fee: 12, net: 108, status: "paid" as const, date: "Sep 8, 2026" },
  { id: "t2", job: "Toilet Repair", customer: "Mark S.", amount: 95, fee: 9.50, net: 85.50, status: "paid" as const, date: "Sep 6, 2026" },
  { id: "t3", job: "Leak Repair", customer: "Lisa T.", amount: 140, fee: 14, net: 126, status: "pending_payment" as const, date: "Sep 4, 2026" },
  { id: "t4", job: "Water Heater Service", customer: "Robert H.", amount: 280, fee: 28, net: 252, status: "paid" as const, date: "Aug 30, 2026" },
  { id: "t5", job: "Drain Cleaning", customer: "Amanda P.", amount: 110, fee: 11, net: 99, status: "paid" as const, date: "Aug 27, 2026" },
];

export default function ProviderEarningsPage() {
  const router = useRouter();
  const [showPayoutModal, setShowPayoutModal] = useState(false);

  const totalEarnings = transactions.reduce((sum, t) => sum + t.net, 0);
  const pending = transactions.filter((t) => t.status === "pending_payment").reduce((sum, t) => sum + t.net, 0);
  const available = totalEarnings - pending;

  return (
    <div className="p-4 md:p-6 max-w-5xl mx-auto space-y-6">
      {/* Payout modal */}
      {showPayoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-[20px] p-6 max-w-sm w-full shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-bold text-[#0D1B3E]">Payout settings</h2>
              <button onClick={() => setShowPayoutModal(false)}><X size={20} className="text-[#9EA6BE]" /></button>
            </div>
            <div className="space-y-4">
              <div className="bg-[#ECFDF5] rounded-[12px] p-4 flex items-center gap-3">
                <CheckCircle size={18} className="text-[#004117] shrink-0" />
                <div>
                  <p className="text-sm font-bold text-[#004117]">Bank account connected</p>
                  <p className="text-xs text-[#004117]/70">Ending in ••••4821</p>
                </div>
              </div>
              {[
                { label: "Bank name", val: "Chase Bank" },
                { label: "Account type", val: "Checking" },
                { label: "Payout schedule", val: "Every Tuesday" },
                { label: "Minimum payout", val: "$50.00" },
              ].map(({ label, val }) => (
                <div key={label} className="flex justify-between text-sm">
                  <span className="text-[#565E74]">{label}</span>
                  <span className="font-semibold text-[#0D1B3E]">{val}</span>
                </div>
              ))}
              <div className="pt-2 border-t border-[#E2E6F0] flex gap-3">
                <button onClick={() => setShowPayoutModal(false)} className="flex-1 border border-[#E2E6F0] rounded-[10px] py-2.5 text-sm font-semibold text-[#565E74] hover:bg-[#F8F9FC]">
                  Close
                </button>
                <button
                  onClick={() => { setShowPayoutModal(false); router.push("/provider/settings"); }}
                  className="flex-1 bg-[#002B95] hover:bg-[#001B63] text-white font-bold py-2.5 rounded-[10px] text-sm transition-colors"
                >
                  Edit in settings
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <h1 className="text-2xl font-extrabold text-[#0D1B3E]">Earnings</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Available balance", val: `$${available.toFixed(2)}`, icon: DollarSign, color: "text-[#004117]", bg: "bg-[#ECFDF5]" },
          { label: "Pending balance", val: `$${pending.toFixed(2)}`, icon: CreditCard, color: "text-amber-600", bg: "bg-amber-50" },
          { label: "Total earnings", val: `$${totalEarnings.toFixed(2)}`, icon: TrendingUp, color: "text-[#002B95]", bg: "bg-[#EEF2FF]" },
          { label: "Jobs this month", val: "8", icon: Briefcase, color: "text-purple-600", bg: "bg-purple-50" },
        ].map(({ label, val, icon: Icon, color, bg }) => (
          <div key={label} className="bg-white rounded-[16px] border border-[#E2E6F0] p-5 shadow-sm">
            <div className={`w-10 h-10 rounded-[10px] ${bg} flex items-center justify-center ${color} mb-3`}>
              <Icon size={18} />
            </div>
            <p className="text-2xl font-extrabold text-[#0D1B3E]">{val}</p>
            <p className="text-xs text-[#565E74] font-medium mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Payout account */}
      <div className="bg-white rounded-[16px] border border-[#E2E6F0] p-5 shadow-sm flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-[10px] bg-[#ECFDF5] flex items-center justify-center">
            <CheckCircle size={18} className="text-[#004117]" />
          </div>
          <div>
            <p className="font-bold text-[#0D1B3E] text-sm">Payout account connected</p>
            <p className="text-xs text-[#565E74]">Chase Bank ••••4821 · Payouts every Tuesday</p>
          </div>
        </div>
        <button
          onClick={() => setShowPayoutModal(true)}
          className="text-sm text-[#002B95] font-semibold hover:text-[#001B63] border border-[#002B95] px-4 py-2 rounded-[10px] hover:bg-[#EEF2FF] transition-colors flex items-center gap-2"
        >
          <ExternalLink size={14} /> Manage payout
        </button>
      </div>

      {/* Transactions */}
      <div className="bg-white rounded-[16px] border border-[#E2E6F0] shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-[#E2E6F0]">
          <h2 className="font-bold text-[#0D1B3E]">Transaction history</h2>
        </div>
        <div className="hidden sm:grid grid-cols-12 gap-4 px-5 py-3 bg-[#F8F9FC] border-b border-[#E2E6F0] text-xs font-bold text-[#9EA6BE] uppercase tracking-widest">
          <div className="col-span-3">Job</div>
          <div className="col-span-2">Customer</div>
          <div className="col-span-2">Amount</div>
          <div className="col-span-2">Fee (10%)</div>
          <div className="col-span-2">You receive</div>
          <div className="col-span-1">Status</div>
        </div>
        {transactions.map((t) => (
          <div key={t.id} className="px-5 py-4 border-b border-[#F8F9FC] last:border-0 hover:bg-[#F8F9FC] transition-colors">
            <div className="sm:grid sm:grid-cols-12 sm:gap-4 sm:items-center flex flex-col gap-2">
              <div className="sm:col-span-3">
                <p className="font-semibold text-[#0D1B3E] text-sm">{t.job}</p>
                <p className="text-xs text-[#9EA6BE]">{t.date}</p>
              </div>
              <p className="sm:col-span-2 text-sm text-[#565E74]">{t.customer}</p>
              <p className="sm:col-span-2 text-sm font-medium text-[#0D1B3E]">${t.amount.toFixed(2)}</p>
              <p className="sm:col-span-2 text-sm text-[#9EA6BE]">-${t.fee.toFixed(2)}</p>
              <p className="sm:col-span-2 text-sm font-bold text-[#004117]">${t.net.toFixed(2)}</p>
              <div className="sm:col-span-1">
                <StatusBadge status={t.status} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
