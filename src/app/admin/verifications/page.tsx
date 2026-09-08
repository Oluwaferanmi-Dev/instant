"use client";

import { useState } from "react";
import { ShieldCheck, ShieldX, Eye, X } from "lucide-react";
import { StatusBadge } from "@/components/ui/StatusBadge";

const verifications = [
  { id: "v1", name: "Carlos R.", business: "ProPaint Services", category: "Painting", submitted: "Sep 7, 2026", docs: ["ID", "License", "Insurance"], status: "pending_verification" as const },
  { id: "v2", name: "Diane W.", business: "ClearFlow Plumbing", category: "Plumbing", submitted: "Sep 6, 2026", docs: ["ID", "License", "Insurance", "Background"], status: "pending_verification" as const },
  { id: "v3", name: "Kevin M.", business: "SparXX Electrical", category: "Electrical", submitted: "Sep 5, 2026", docs: ["ID", "License"], status: "pending_verification" as const },
  { id: "v4", name: "Mike J.", business: "Mike's Plumbing", category: "Plumbing", submitted: "Aug 15, 2026", docs: ["ID", "License", "Insurance", "Background"], status: "verified" as const },
  { id: "v5", name: "Sam T.", business: "FastFix HVAC", category: "HVAC", submitted: "Aug 10, 2026", docs: ["ID", "License"], status: "rejected" as const },
];

export default function AdminVerificationsPage() {
  const [reviewId, setReviewId] = useState<string | null>(null);
  const reviewing = verifications.find((v) => v.id === reviewId);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-extrabold text-[#0D1B3E] mb-6">Provider Verifications</h1>

      {/* Review modal */}
      {reviewing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-[20px] p-6 max-w-md w-full shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-bold text-[#0D1B3E]">Review: {reviewing.business}</h2>
              <button onClick={() => setReviewId(null)}><X size={20} className="text-[#9EA6BE]" /></button>
            </div>
            <div className="space-y-3 mb-5">
              <div className="flex justify-between text-sm"><span className="text-[#565E74]">Provider</span><span className="font-semibold text-[#0D1B3E]">{reviewing.name}</span></div>
              <div className="flex justify-between text-sm"><span className="text-[#565E74]">Business</span><span className="font-semibold text-[#0D1B3E]">{reviewing.business}</span></div>
              <div className="flex justify-between text-sm"><span className="text-[#565E74]">Category</span><span className="font-semibold text-[#0D1B3E]">{reviewing.category}</span></div>
              <div className="flex justify-between text-sm"><span className="text-[#565E74]">Submitted</span><span className="font-semibold text-[#0D1B3E]">{reviewing.submitted}</span></div>
            </div>
            <div className="mb-5">
              <p className="text-xs font-bold text-[#9EA6BE] uppercase tracking-widest mb-2">Documents</p>
              <div className="flex flex-wrap gap-2">
                {reviewing.docs.map((doc) => (
                  <span key={doc} className="text-xs bg-[#EEF2FF] text-[#002B95] font-semibold px-3 py-1.5 rounded-full">{doc}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setReviewId(null)} className="flex-1 border border-[#E2E6F0] rounded-[10px] py-2.5 text-sm font-semibold text-[#565E74] hover:bg-[#F8F9FC]">
                Cancel
              </button>
              <button onClick={() => setReviewId(null)} className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2.5 rounded-[10px] text-sm transition-colors">
                Reject
              </button>
              <button onClick={() => setReviewId(null)} className="flex-1 bg-[#004117] hover:bg-[#002B10] text-white font-bold py-2.5 rounded-[10px] text-sm transition-colors">
                Approve
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-[16px] border border-[#E2E6F0] shadow-sm overflow-hidden">
        <div className="hidden sm:grid grid-cols-12 gap-4 px-5 py-3 bg-[#F8F9FC] border-b border-[#E2E6F0] text-xs font-bold text-[#9EA6BE] uppercase tracking-widest">
          <div className="col-span-3">Provider</div>
          <div className="col-span-3">Business</div>
          <div className="col-span-2">Category</div>
          <div className="col-span-2">Submitted</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-1">Actions</div>
        </div>
        {verifications.map((v) => (
          <div key={v.id} className="px-5 py-4 border-b border-[#F8F9FC] last:border-0">
            <div className="sm:grid sm:grid-cols-12 sm:gap-4 sm:items-center flex flex-col gap-3">
              <div className="sm:col-span-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#002B95] to-[#3B5FD4] flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {v.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <p className="font-semibold text-[#0D1B3E] text-sm">{v.name}</p>
              </div>
              <p className="sm:col-span-3 text-sm text-[#565E74]">{v.business}</p>
              <p className="sm:col-span-2 text-sm text-[#565E74]">{v.category}</p>
              <p className="sm:col-span-2 text-xs text-[#9EA6BE]">{v.submitted}</p>
              <div className="sm:col-span-1"><StatusBadge status={v.status} /></div>
              <div className="sm:col-span-1 flex items-center gap-1">
                <button onClick={() => setReviewId(v.id)} className="p-1.5 rounded-[6px] text-[#565E74] hover:bg-[#EEF2FF] hover:text-[#002B95] transition-colors">
                  <Eye size={14} />
                </button>
                {v.status === "pending_verification" && (
                  <>
                    <button className="p-1.5 rounded-[6px] text-[#565E74] hover:bg-[#ECFDF5] hover:text-[#004117] transition-colors">
                      <ShieldCheck size={14} />
                    </button>
                    <button className="p-1.5 rounded-[6px] text-[#565E74] hover:bg-red-50 hover:text-[#DC2626] transition-colors">
                      <ShieldX size={14} />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
