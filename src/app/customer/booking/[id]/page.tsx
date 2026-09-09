"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Calendar, MapPin, MessageSquare, CheckCircle, Clock, DollarSign, AlertTriangle, X } from "lucide-react";
import { StatusBadge } from "@/components/ui/StatusBadge";

const timelineSteps = [
  { label: "Request sent", time: "Sep 8, 2:15 PM", done: true },
  { label: "Accepted", time: "Sep 8, 2:31 PM", done: true },
  { label: "In progress", time: null, done: false },
  { label: "Completed", time: null, done: false },
];

export default function BookingDetailsPage() {
  const router = useRouter();
  const [showCancel, setShowCancel] = useState(false);
  const [cancelled, setCancelled] = useState(false);

  const handleCancel = () => {
    setCancelled(true);
    setShowCancel(false);
  };

  if (cancelled) {
    return (
      <div className="max-w-md mx-auto px-4 md:px-6 py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
          <X size={28} className="text-gray-500" />
        </div>
        <h2 className="text-xl font-extrabold text-[#0D1B3E] mb-2">Booking cancelled</h2>
        <p className="text-[#565E74] text-sm mb-6">Your booking with Mike&apos;s Plumbing has been cancelled. The provider has been notified.</p>
        <button onClick={() => router.push("/customer/search")} className="bg-[#002B95] text-white font-bold px-8 py-3 rounded-[12px] text-sm hover:bg-[#001B63] transition-colors">
          Find another provider
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-6 py-8">
      {/* Cancel confirm dialog */}
      {showCancel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-[20px] p-6 max-w-sm w-full shadow-2xl">
            <h3 className="font-bold text-[#0D1B3E] mb-2">Cancel this booking?</h3>
            <p className="text-sm text-[#565E74] mb-5">Mike&apos;s Plumbing will be notified. This action cannot be undone.</p>
            <div className="flex gap-3">
              <button onClick={() => setShowCancel(false)} className="flex-1 border border-[#E2E6F0] rounded-[10px] py-2.5 text-sm font-semibold text-[#565E74] hover:bg-[#F8F9FC]">
                Keep booking
              </button>
              <button onClick={handleCancel} className="flex-1 bg-[#DC2626] text-white rounded-[10px] py-2.5 text-sm font-bold hover:bg-red-700 transition-colors">
                Yes, cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <button onClick={() => router.back()} className="flex items-center gap-2 text-sm text-[#565E74] hover:text-[#0D1B3E] mb-6 transition-colors">
        <ChevronLeft size={18} /> Back
      </button>

      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-xl font-extrabold text-[#0D1B3E]">Plumbing Repair</h1>
            <StatusBadge status="accepted" size="md" />
          </div>
          <p className="text-sm text-[#565E74]">Booking #BK-2026-1042</p>
        </div>
        <button
          onClick={() => router.push("/customer/messages")}
          className="flex items-center gap-2 border border-[#002B95] text-[#002B95] font-semibold text-sm px-4 py-2.5 rounded-[10px] hover:bg-[#EEF2FF] transition-colors"
        >
          <MessageSquare size={16} /> Message provider
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Main details */}
        <div className="lg:col-span-2 space-y-5">
          {/* Provider card */}
          <div
            className="bg-white rounded-[16px] border border-[#E2E6F0] p-5 shadow-sm cursor-pointer hover:border-[#002B95] transition-colors"
            onClick={() => router.push("/customer/provider/p1")}
          >
            <h2 className="font-bold text-[#0D1B3E] mb-4 text-sm">Provider</h2>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-[12px] bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold">
                MP
              </div>
              <div className="flex-1">
                <p className="font-bold text-[#0D1B3E]">Mike&apos;s Plumbing</p>
                <p className="text-sm text-[#565E74]">Plumbing & Drain Services</p>
              </div>
              <p className="text-xs text-[#002B95] font-medium">View profile →</p>
            </div>
          </div>

          {/* Booking info */}
          <div className="bg-white rounded-[16px] border border-[#E2E6F0] p-5 shadow-sm">
            <h2 className="font-bold text-[#0D1B3E] mb-4 text-sm">Booking details</h2>
            <div className="space-y-4">
              {[
                { icon: Calendar, label: "Scheduled", val: "Tomorrow, Sep 9, 2026 at 10:00 AM" },
                { icon: MapPin, label: "Location", val: "142 Oak Street, Austin, TX 78701" },
                { icon: Clock, label: "Service", val: "Drain Cleaning · Est. 1–3 hours" },
                { icon: DollarSign, label: "Est. price", val: "$90–$150" },
              ].map(({ icon: Icon, label, val }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-[8px] bg-[#F8F9FC] flex items-center justify-center text-[#565E74] shrink-0">
                    <Icon size={15} />
                  </div>
                  <div>
                    <p className="text-xs text-[#9EA6BE] font-medium">{label}</p>
                    <p className="text-sm font-semibold text-[#0D1B3E] mt-0.5">{val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="bg-white rounded-[16px] border border-[#E2E6F0] p-5 shadow-sm">
            <h2 className="font-bold text-[#0D1B3E] mb-3 text-sm">Your notes</h2>
            <p className="text-sm text-[#565E74] leading-relaxed">
              Kitchen sink draining slowly for a week. Faint smell. Tried drain cleaner without success.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => router.push("/customer/messages")}
              className="flex items-center gap-2 text-sm text-[#002B95] font-medium border border-[#002B95] px-4 py-2.5 rounded-[10px] hover:bg-[#EEF2FF] transition-colors w-fit"
            >
              <MessageSquare size={15} /> Open chat with Mike
            </button>
            <button
              onClick={() => setShowCancel(true)}
              className="flex items-center gap-2 text-sm text-[#DC2626] hover:text-red-700 font-medium transition-colors w-fit"
            >
              <AlertTriangle size={15} /> Cancel booking
            </button>
          </div>
        </div>

        {/* Timeline sidebar */}
        <div className="space-y-5">
          <div className="bg-white rounded-[16px] border border-[#E2E6F0] p-5 shadow-sm">
            <h2 className="font-bold text-[#0D1B3E] mb-5 text-sm">Timeline</h2>
            <div className="space-y-4">
              {timelineSteps.map(({ label, time, done }, i) => (
                <div key={label} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                      done ? "bg-[#002B95] text-white" : "bg-[#F8F9FC] border-2 border-[#E2E6F0]"
                    }`}>
                      {done ? <CheckCircle size={14} /> : <div className="w-2 h-2 rounded-full bg-[#C8CFDF]" />}
                    </div>
                    {i < timelineSteps.length - 1 && (
                      <div className={`w-0.5 h-8 mt-1 ${done && timelineSteps[i + 1].done ? "bg-[#002B95]" : "bg-[#E2E6F0]"}`} />
                    )}
                  </div>
                  <div className="pb-4">
                    <p className={`text-sm font-semibold ${done ? "text-[#0D1B3E]" : "text-[#9EA6BE]"}`}>{label}</p>
                    {time && <p className="text-xs text-[#9EA6BE] mt-0.5">{time}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment */}
          <div className="bg-white rounded-[16px] border border-[#E2E6F0] p-5 shadow-sm">
            <h2 className="font-bold text-[#0D1B3E] mb-3 text-sm">Payment</h2>
            <StatusBadge status="pending_payment" />
            <p className="text-xs text-[#9EA6BE] mt-3">You&apos;ll be charged after the job is marked complete.</p>
            <button
              onClick={() => router.push("/customer/payment/bk001")}
              className="w-full mt-3 bg-[#002B95] hover:bg-[#001B63] text-white font-semibold text-sm py-2.5 rounded-[10px] transition-colors"
            >
              View payment
            </button>
          </div>

          {/* Review prompt (after completed) */}
          <div className="bg-[#EEF2FF] rounded-[14px] p-4">
            <p className="text-xs font-semibold text-[#002B95] mb-1">After the job</p>
            <p className="text-xs text-[#565E74] mb-3">Once Mike marks the job complete, you can leave a review.</p>
            <button
              onClick={() => router.push("/customer/review/bk001")}
              className="text-xs font-bold text-[#002B95] hover:text-[#001B63] transition-colors"
            >
              Preview review form →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
