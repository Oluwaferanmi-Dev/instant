"use client";

import { useState } from "react";
import { ChevronRight, Camera, CheckCircle } from "lucide-react";

const sections = ["Business info", "Services", "Service area", "Verification", "Payout", "Notifications", "Security"];

export default function ProviderSettingsPage() {
  const [active, setActive] = useState("Business info");
  const [saved, setSaved] = useState(false);

  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
      <h1 className="text-2xl font-extrabold text-[#0D1B3E] mb-6">Settings</h1>
      <div className="flex gap-6 flex-col lg:flex-row">
        {/* Nav */}
        <div className="lg:w-56 shrink-0">
          <div className="bg-white rounded-[16px] border border-[#E2E6F0] overflow-hidden">
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => setActive(s)}
                className={`w-full flex items-center justify-between px-4 py-3.5 text-sm font-medium border-b border-[#F8F9FC] last:border-0 transition-colors ${
                  active === s ? "bg-[#0D1B3E] text-white" : "text-[#565E74] hover:bg-[#F8F9FC]"
                }`}
              >
                {s}
                <ChevronRight size={14} />
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1">
          {active === "Business info" && (
            <div className="bg-white rounded-[16px] border border-[#E2E6F0] p-6 shadow-sm">
              <h2 className="font-bold text-[#0D1B3E] mb-5">Business information</h2>
              <div className="flex items-center gap-5 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-[14px] bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xl font-bold">
                    MP
                  </div>
                  <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-white border border-[#E2E6F0] rounded-full flex items-center justify-center shadow-sm">
                    <Camera size={12} className="text-[#565E74]" />
                  </button>
                </div>
                <div>
                  <p className="font-bold text-[#0D1B3E]">Mike&apos;s Plumbing</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                    <span className="text-xs text-[#004117] font-medium">Verified Provider</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Business name", val: "Mike's Plumbing" },
                  { label: "Your name", val: "Mike Johnson" },
                  { label: "Email address", val: "mike@mikesplumbing.com" },
                  { label: "Phone number", val: "+1 (512) 555-0182" },
                ].map(({ label, val }) => (
                  <div key={label}>
                    <label className="block text-sm font-semibold text-[#0D1B3E] mb-1.5">{label}</label>
                    <input defaultValue={val} type="text" className="w-full border border-[#E2E6F0] rounded-[10px] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#002B95] focus:ring-2 focus:ring-[#002B95]/10 transition-all" />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold text-[#0D1B3E] mb-1.5">Business bio</label>
                  <textarea
                    defaultValue="Licensed master plumber with 12+ years of experience in the Austin metro area."
                    rows={3}
                    className="w-full border border-[#E2E6F0] rounded-[10px] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#002B95] focus:ring-2 focus:ring-[#002B95]/10 transition-all resize-none"
                  />
                </div>
                <button onClick={handleSave} className={`px-6 py-2.5 rounded-[10px] font-semibold text-sm transition-all text-white ${saved ? "bg-green-500" : "bg-[#002B95] hover:bg-[#001B63]"}`}>
                  {saved ? "Saved!" : "Save changes"}
                </button>
              </div>
            </div>
          )}

          {active === "Verification" && (
            <div className="bg-white rounded-[16px] border border-[#E2E6F0] p-6 shadow-sm">
              <h2 className="font-bold text-[#0D1B3E] mb-5">Provider verification</h2>
              <div className="flex items-center gap-4 p-5 bg-[#ECFDF5] rounded-[14px] mb-5">
                <CheckCircle size={28} className="text-[#004117] shrink-0" />
                <div>
                  <p className="font-bold text-[#004117] text-lg">✓ Verified Provider</p>
                  <p className="text-sm text-[#004117]/70 mt-0.5">Your account was verified on Aug 15, 2026</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Identity verification", done: true },
                  { label: "License check", done: true },
                  { label: "Insurance verification", done: true },
                  { label: "Background screening", done: true },
                ].map(({ label, done }) => (
                  <div key={label} className="flex items-center gap-3 text-sm">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${done ? "bg-[#004117]" : "bg-[#E2E6F0]"}`}>
                      {done && <CheckCircle size={12} className="text-white" />}
                    </div>
                    <span className={done ? "text-[#0D1B3E] font-medium" : "text-[#9EA6BE]"}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!["Business info", "Verification"].includes(active) && (
            <div className="bg-white rounded-[16px] border border-[#E2E6F0] p-6 shadow-sm">
              <h2 className="font-bold text-[#0D1B3E] mb-2">{active}</h2>
              <p className="text-sm text-[#9EA6BE]">Settings for {active} will appear here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
