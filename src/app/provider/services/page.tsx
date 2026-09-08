"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, Power, X } from "lucide-react";

const initialServices = [
  { id: "s1", name: "Leak Repair", category: "Plumbing", price: "$80–$160", duration: "1–2 hrs", active: true },
  { id: "s2", name: "Drain Cleaning", category: "Plumbing", price: "$90–$150", duration: "1–3 hrs", active: true },
  { id: "s3", name: "Water Heater Service", category: "Plumbing", price: "$150–$400", duration: "2–4 hrs", active: true },
  { id: "s4", name: "Toilet Repair", category: "Plumbing", price: "$80–$250", duration: "1–2 hrs", active: false },
];

type Service = typeof initialServices[0];

export default function ProviderServicesPage() {
  const [services, setServices] = useState(initialServices);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", category: "Plumbing", price: "", duration: "" });

  const toggleActive = (id: string) =>
    setServices((prev) => prev.map((s) => s.id === id ? { ...s, active: !s.active } : s));

  const deleteService = (id: string) => setServices((prev) => prev.filter((s) => s.id !== id));

  const openAdd = () => { setForm({ name: "", category: "Plumbing", price: "", duration: "" }); setEditingId(null); setShowForm(true); };
  const openEdit = (svc: Service) => { setForm({ name: svc.name, category: svc.category, price: svc.price, duration: svc.duration }); setEditingId(svc.id); setShowForm(true); };

  const handleSave = () => {
    if (!form.name || !form.price) return;
    if (editingId) {
      setServices((prev) => prev.map((s) => s.id === editingId ? { ...s, ...form } : s));
    } else {
      setServices((prev) => [...prev, { id: `s${Date.now()}`, ...form, active: true }]);
    }
    setShowForm(false);
  };

  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-extrabold text-[#0D1B3E]">Your Services</h1>
          <p className="text-sm text-[#565E74] mt-1">{services.filter((s) => s.active).length} active services</p>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 bg-[#002B95] hover:bg-[#001B63] text-white font-semibold text-sm px-4 py-2.5 rounded-[10px] transition-colors"
        >
          <Plus size={16} /> Add service
        </button>
      </div>

      {/* Service form modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-[20px] p-6 max-w-md w-full shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-bold text-[#0D1B3E]">{editingId ? "Edit service" : "Add service"}</h2>
              <button onClick={() => setShowForm(false)} className="p-1 text-[#9EA6BE] hover:text-[#565E74]">
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#0D1B3E] mb-1.5">Service name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="e.g. Drain Cleaning"
                  className="w-full border border-[#E2E6F0] rounded-[10px] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#002B95] focus:ring-2 focus:ring-[#002B95]/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0D1B3E] mb-1.5">Category</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                  className="w-full border border-[#E2E6F0] rounded-[10px] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#002B95] focus:ring-2 focus:ring-[#002B95]/10 transition-all"
                >
                  {["Plumbing", "Electrical", "Cleaning", "HVAC", "Handyman"].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-[#0D1B3E] mb-1.5">Price range</label>
                  <input
                    type="text"
                    value={form.price}
                    onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))}
                    placeholder="$80–$160"
                    className="w-full border border-[#E2E6F0] rounded-[10px] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#002B95] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0D1B3E] mb-1.5">Duration</label>
                  <input
                    type="text"
                    value={form.duration}
                    onChange={(e) => setForm((f) => ({ ...f, duration: e.target.value }))}
                    placeholder="1–2 hrs"
                    className="w-full border border-[#E2E6F0] rounded-[10px] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#002B95] transition-all"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-2">
                <button onClick={() => setShowForm(false)} className="flex-1 border border-[#E2E6F0] rounded-[10px] py-2.5 text-sm font-semibold text-[#565E74] hover:bg-[#F8F9FC]">
                  Cancel
                </button>
                <button onClick={handleSave} className="flex-1 bg-[#002B95] hover:bg-[#001B63] text-white font-bold py-2.5 rounded-[10px] text-sm transition-colors">
                  {editingId ? "Save changes" : "Add service"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Services list */}
      <div className="bg-white rounded-[16px] border border-[#E2E6F0] overflow-hidden shadow-sm">
        <div className="hidden sm:grid grid-cols-12 gap-4 px-5 py-3 bg-[#F8F9FC] border-b border-[#E2E6F0] text-xs font-bold text-[#9EA6BE] uppercase tracking-widest">
          <div className="col-span-4">Service</div>
          <div className="col-span-2">Category</div>
          <div className="col-span-2">Price</div>
          <div className="col-span-2">Duration</div>
          <div className="col-span-2">Actions</div>
        </div>
        {services.map((svc) => (
          <div key={svc.id} className={`px-5 py-4 border-b border-[#F8F9FC] last:border-0 ${!svc.active ? "opacity-60" : ""}`}>
            <div className="sm:grid sm:grid-cols-12 sm:gap-4 sm:items-center flex flex-col gap-3">
              <div className="sm:col-span-4 flex items-center gap-3">
                <p className="font-semibold text-[#0D1B3E] text-sm">{svc.name}</p>
                {!svc.active && (
                  <span className="text-[10px] bg-gray-100 text-gray-500 font-semibold px-2 py-0.5 rounded-full">Inactive</span>
                )}
              </div>
              <div className="sm:col-span-2">
                <span className="text-xs bg-[#EEF2FF] text-[#002B95] font-semibold px-2.5 py-1 rounded-full">{svc.category}</span>
              </div>
              <p className="sm:col-span-2 text-sm font-semibold text-[#0D1B3E]">{svc.price}</p>
              <p className="sm:col-span-2 text-sm text-[#565E74]">{svc.duration}</p>
              <div className="sm:col-span-2 flex items-center gap-2">
                <button
                  onClick={() => openEdit(svc)}
                  className="p-1.5 rounded-[8px] text-[#565E74] hover:bg-[#EEF2FF] hover:text-[#002B95] transition-colors"
                  title="Edit"
                >
                  <Edit2 size={14} />
                </button>
                <button
                  onClick={() => toggleActive(svc.id)}
                  className={`p-1.5 rounded-[8px] transition-colors ${svc.active ? "text-[#565E74] hover:bg-amber-50 hover:text-amber-600" : "text-green-600 hover:bg-green-50"}`}
                  title={svc.active ? "Deactivate" : "Activate"}
                >
                  <Power size={14} />
                </button>
                <button
                  onClick={() => deleteService(svc.id)}
                  className="p-1.5 rounded-[8px] text-[#565E74] hover:bg-red-50 hover:text-[#DC2626] transition-colors"
                  title="Delete"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
        {services.length === 0 && (
          <div className="text-center py-16">
            <p className="font-semibold text-[#565E74]">No services yet</p>
            <button onClick={openAdd} className="mt-3 text-sm text-[#002B95] font-medium hover:underline">
              Add your first service
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
