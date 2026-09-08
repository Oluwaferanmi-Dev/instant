"use client";

import { useState } from "react";
import { User, Lock, Bell, MapPin, Shield, ChevronRight, Camera } from "lucide-react";

const sections = [
  { key: "profile", label: "Profile", icon: User },
  { key: "password", label: "Password", icon: Lock },
  { key: "notifications", label: "Notifications", icon: Bell },
  { key: "location", label: "Location", icon: MapPin },
  { key: "security", label: "Security", icon: Shield },
];

export default function CustomerSettingsPage() {
  const [activeSection, setActiveSection] = useState("profile");
  const [name, setName] = useState("Jane Doe");
  const [email, setEmail] = useState("jane@email.com");
  const [phone, setPhone] = useState("+1 (512) 555-0147");
  const [saved, setSaved] = useState(false);

  const [notifications, setNotifications] = useState({
    emailBooking: true, emailMessages: true, emailPromos: false,
    smsBooking: true, smsReminders: true,
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
      <h1 className="text-2xl font-extrabold text-[#0D1B3E] mb-6">Settings</h1>
      <div className="flex gap-6 flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="lg:w-56 shrink-0">
          <div className="bg-white rounded-[16px] border border-[#E2E6F0] overflow-hidden">
            {sections.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`w-full flex items-center justify-between px-4 py-3.5 text-sm font-medium border-b border-[#F8F9FC] last:border-0 transition-colors ${
                  activeSection === key ? "bg-[#EEF2FF] text-[#002B95]" : "text-[#565E74] hover:bg-[#F8F9FC]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={16} />
                  {label}
                </div>
                <ChevronRight size={14} />
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {activeSection === "profile" && (
            <div className="bg-white rounded-[16px] border border-[#E2E6F0] p-6 shadow-sm">
              <h2 className="font-bold text-[#0D1B3E] mb-5">Profile information</h2>
              <div className="flex items-center gap-5 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#002B95] to-[#3B5FD4] flex items-center justify-center text-white text-xl font-bold">
                    JD
                  </div>
                  <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-white border border-[#E2E6F0] rounded-full flex items-center justify-center shadow-sm hover:bg-[#F8F9FC]">
                    <Camera size={12} className="text-[#565E74]" />
                  </button>
                </div>
                <div>
                  <p className="font-semibold text-[#0D1B3E]">Jane Doe</p>
                  <p className="text-xs text-[#565E74]">Customer account</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Full name", value: name, setter: setName, type: "text" },
                  { label: "Email address", value: email, setter: setEmail, type: "email" },
                  { label: "Phone number", value: phone, setter: setPhone, type: "tel" },
                ].map(({ label, value, setter, type }) => (
                  <div key={label}>
                    <label className="block text-sm font-semibold text-[#0D1B3E] mb-1.5">{label}</label>
                    <input
                      type={type}
                      value={value}
                      onChange={(e) => setter(e.target.value)}
                      className="w-full border border-[#E2E6F0] rounded-[10px] px-3.5 py-2.5 text-sm text-[#0D1B3E] focus:outline-none focus:border-[#002B95] focus:ring-2 focus:ring-[#002B95]/10 transition-all"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold text-[#0D1B3E] mb-1.5">Location</label>
                  <input
                    type="text"
                    defaultValue="Austin, TX 78701"
                    className="w-full border border-[#E2E6F0] rounded-[10px] px-3.5 py-2.5 text-sm text-[#0D1B3E] focus:outline-none focus:border-[#002B95] focus:ring-2 focus:ring-[#002B95]/10 transition-all"
                  />
                </div>
                <button
                  onClick={handleSave}
                  className={`px-6 py-2.5 rounded-[10px] font-semibold text-sm transition-all ${
                    saved ? "bg-green-500 text-white" : "bg-[#002B95] hover:bg-[#001B63] text-white"
                  }`}
                >
                  {saved ? "Saved!" : "Save changes"}
                </button>
              </div>
            </div>
          )}

          {activeSection === "notifications" && (
            <div className="bg-white rounded-[16px] border border-[#E2E6F0] p-6 shadow-sm">
              <h2 className="font-bold text-[#0D1B3E] mb-5">Notification preferences</h2>
              <div className="space-y-5">
                <div>
                  <p className="text-xs font-bold text-[#9EA6BE] uppercase tracking-widest mb-3">Email notifications</p>
                  <div className="space-y-3">
                    {[
                      { key: "emailBooking", label: "Booking updates", desc: "Confirmations, reminders, and status changes" },
                      { key: "emailMessages", label: "New messages", desc: "When providers message you" },
                      { key: "emailPromos", label: "Promotions & tips", desc: "Deals, new providers, and home care advice" },
                    ].map(({ key, label, desc }) => (
                      <div key={key} className="flex items-center justify-between py-2">
                        <div>
                          <p className="text-sm font-semibold text-[#0D1B3E]">{label}</p>
                          <p className="text-xs text-[#9EA6BE] mt-0.5">{desc}</p>
                        </div>
                        <button
                          onClick={() => setNotifications((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))}
                          className={`w-11 h-6 rounded-full transition-colors relative ${
                            notifications[key as keyof typeof notifications] ? "bg-[#002B95]" : "bg-[#E2E6F0]"
                          }`}
                        >
                          <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                            notifications[key as keyof typeof notifications] ? "translate-x-5" : "translate-x-0.5"
                          }`} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-[#F8F9FC] pt-5">
                  <p className="text-xs font-bold text-[#9EA6BE] uppercase tracking-widest mb-3">SMS notifications</p>
                  <div className="space-y-3">
                    {[
                      { key: "smsBooking", label: "Booking updates", desc: "Important status changes via text" },
                      { key: "smsReminders", label: "Appointment reminders", desc: "Reminder 24 hours before your appointment" },
                    ].map(({ key, label, desc }) => (
                      <div key={key} className="flex items-center justify-between py-2">
                        <div>
                          <p className="text-sm font-semibold text-[#0D1B3E]">{label}</p>
                          <p className="text-xs text-[#9EA6BE] mt-0.5">{desc}</p>
                        </div>
                        <button
                          onClick={() => setNotifications((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))}
                          className={`w-11 h-6 rounded-full transition-colors relative ${
                            notifications[key as keyof typeof notifications] ? "bg-[#002B95]" : "bg-[#E2E6F0]"
                          }`}
                        >
                          <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                            notifications[key as keyof typeof notifications] ? "translate-x-5" : "translate-x-0.5"
                          }`} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "password" && (
            <div className="bg-white rounded-[16px] border border-[#E2E6F0] p-6 shadow-sm">
              <h2 className="font-bold text-[#0D1B3E] mb-5">Change password</h2>
              <div className="space-y-4">
                {["Current password", "New password", "Confirm new password"].map((label) => (
                  <div key={label}>
                    <label className="block text-sm font-semibold text-[#0D1B3E] mb-1.5">{label}</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full border border-[#E2E6F0] rounded-[10px] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#002B95] focus:ring-2 focus:ring-[#002B95]/10 transition-all"
                    />
                  </div>
                ))}
                <button className="px-6 py-2.5 rounded-[10px] bg-[#002B95] hover:bg-[#001B63] text-white font-semibold text-sm transition-colors">
                  Update password
                </button>
              </div>
            </div>
          )}

          {(activeSection === "location" || activeSection === "security") && (
            <div className="bg-white rounded-[16px] border border-[#E2E6F0] p-6 shadow-sm">
              <h2 className="font-bold text-[#0D1B3E] mb-2">{sections.find(s => s.key === activeSection)?.label}</h2>
              <p className="text-sm text-[#9EA6BE]">Settings for this section will appear here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
