import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, ChevronRight, Check, Calendar, MapPin, Clock, Image, Info } from "lucide-react";

const services = [
  { id: "s1", name: "Leak Repair", desc: "Fix pipe leaks, faucet drips, and water damage sources.", price: "$80–$160", duration: "1–2 hrs" },
  { id: "s2", name: "Drain Cleaning", desc: "Clear blocked kitchen, bathroom, or main line drains.", price: "$90–$150", duration: "1–3 hrs" },
  { id: "s3", name: "Water Heater Service", desc: "Install, repair, or replace tank and tankless water heaters.", price: "$150–$400", duration: "2–4 hrs" },
];

const steps = ["Service", "Describe", "Location", "Date & Time", "Review"];

export default function BookingFlowPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("142 Oak Street, Austin, TX 78701");
  const [date, setDate] = useState("tomorrow");
  const [time, setTime] = useState("10:00 AM");
  const [submitting, setSubmitting] = useState(false);

  const next = () => setStep((s) => Math.min(s + 1, 5));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = () => {
    setSubmitting(true);
    setTimeout(() => navigate("/customer/booking/bk001"), 1500);
  };

  const canNext = () => {
    if (step === 1) return !!selectedService;
    if (step === 2) return description.length >= 10;
    return true;
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-8">
      {/* Back */}
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm text-[#565E74] hover:text-[#0D1B3E] mb-6 transition-colors">
        <ChevronLeft size={18} /> Back
      </button>

      <h1 className="text-2xl font-extrabold text-[#0D1B3E] mb-2">Book Mike's Plumbing</h1>
      <p className="text-[#565E74] text-sm mb-7">Complete your service request in a few quick steps.</p>

      {/* Progress */}
      <div className="flex items-center mb-8">
        {steps.map((label, i) => {
          const num = i + 1;
          const isActive = num === step;
          const isDone = num < step;
          return (
            <div key={label} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  isDone ? "bg-[#002B95] text-white" : isActive ? "bg-[#002B95] text-white ring-4 ring-[#002B95]/20" : "bg-[#F8F9FC] border-2 border-[#E2E6F0] text-[#9EA6BE]"
                }`}>
                  {isDone ? <Check size={14} /> : num}
                </div>
                <span className={`text-[10px] mt-1.5 font-medium whitespace-nowrap ${isActive ? "text-[#002B95]" : "text-[#9EA6BE]"}`}>{label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 mb-5 ${num < step ? "bg-[#002B95]" : "bg-[#E2E6F0]"}`} />
              )}
            </div>
          );
        })}
      </div>

      {/* Step content */}
      <div className="bg-white rounded-[20px] border border-[#E2E6F0] p-6 shadow-sm min-h-[300px]">

        {/* Step 1: Choose service */}
        {step === 1 && (
          <div>
            <h2 className="font-bold text-[#0D1B3E] mb-4">Choose a service</h2>
            <div className="space-y-3">
              {services.map((svc) => (
                <button
                  key={svc.id}
                  onClick={() => setSelectedService(svc)}
                  className={`w-full text-left p-4 rounded-[12px] border-2 transition-all ${
                    selectedService?.id === svc.id
                      ? "border-[#002B95] bg-[#EEF2FF]"
                      : "border-[#E2E6F0] hover:border-[#C8CFDF]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-[#0D1B3E] text-sm mb-1">{svc.name}</p>
                      <p className="text-xs text-[#565E74] leading-relaxed">{svc.desc}</p>
                      <p className="text-xs text-[#9EA6BE] mt-1.5">Est. duration: {svc.duration}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-bold text-[#002B95] text-sm">{svc.price}</p>
                      {selectedService?.id === svc.id && (
                        <div className="w-5 h-5 rounded-full bg-[#002B95] flex items-center justify-center ml-auto mt-1">
                          <Check size={11} className="text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Describe */}
        {step === 2 && (
          <div>
            <h2 className="font-bold text-[#0D1B3E] mb-1">Describe your problem</h2>
            <p className="text-sm text-[#565E74] mb-4">The more detail you provide, the better Mike can prepare.</p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Example: My kitchen sink has been draining slowly for about a week. There's also a faint smell. I've tried drain cleaner but it didn't help..."
              rows={5}
              className="w-full border border-[#E2E6F0] rounded-[12px] px-4 py-3 text-sm text-[#0D1B3E] placeholder-[#9EA6BE] focus:outline-none focus:border-[#002B95] focus:ring-2 focus:ring-[#002B95]/10 transition-all resize-none"
            />
            <p className="text-xs text-[#9EA6BE] mt-2">{description.length} characters (min 10)</p>
            <button className="mt-4 flex items-center gap-2 text-sm text-[#565E74] border border-[#E2E6F0] rounded-[10px] px-4 py-2.5 hover:bg-[#F8F9FC] transition-colors">
              <Image size={15} /> Attach photos (optional)
            </button>
          </div>
        )}

        {/* Step 3: Location */}
        {step === 3 && (
          <div>
            <h2 className="font-bold text-[#0D1B3E] mb-4">Service location</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-semibold text-[#0D1B3E] mb-1.5">Street address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full border border-[#E2E6F0] rounded-[10px] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#002B95] focus:ring-2 focus:ring-[#002B95]/10 transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-[#0D1B3E] mb-1.5">City</label>
                  <input type="text" defaultValue="Austin" className="w-full border border-[#E2E6F0] rounded-[10px] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#002B95] focus:ring-2 focus:ring-[#002B95]/10 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0D1B3E] mb-1.5">ZIP code</label>
                  <input type="text" defaultValue="78701" className="w-full border border-[#E2E6F0] rounded-[10px] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#002B95] focus:ring-2 focus:ring-[#002B95]/10 transition-all" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Date & Time */}
        {step === 4 && (
          <div>
            <h2 className="font-bold text-[#0D1B3E] mb-4">When do you need the service?</h2>
            <div className="mb-5">
              <p className="text-sm font-semibold text-[#0D1B3E] mb-3">Select a date</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { val: "today", label: "Today", sub: "Sep 8" },
                  { val: "tomorrow", label: "Tomorrow", sub: "Sep 9" },
                  { val: "custom", label: "Other date", sub: "Pick a date" },
                ].map(({ val, label, sub }) => (
                  <button
                    key={val}
                    onClick={() => setDate(val)}
                    className={`p-3 rounded-[12px] border-2 text-center transition-all ${
                      date === val ? "border-[#002B95] bg-[#EEF2FF]" : "border-[#E2E6F0] hover:border-[#C8CFDF]"
                    }`}
                  >
                    <p className="font-semibold text-[#0D1B3E] text-sm">{label}</p>
                    <p className="text-xs text-[#9EA6BE] mt-0.5">{sub}</p>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#0D1B3E] mb-3">Preferred time</p>
              <div className="grid grid-cols-3 gap-2">
                {["8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTime(t)}
                    className={`py-2.5 rounded-[10px] border-2 text-sm font-medium transition-all ${
                      time === t ? "border-[#002B95] bg-[#EEF2FF] text-[#002B95]" : "border-[#E2E6F0] text-[#565E74] hover:border-[#C8CFDF]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Review */}
        {step === 5 && (
          <div>
            <h2 className="font-bold text-[#0D1B3E] mb-4">Review your request</h2>
            <div className="space-y-3">
              {[
                { label: "Provider", val: "Mike's Plumbing", icon: null },
                { label: "Service", val: selectedService?.name || "Leak Repair", icon: null },
                { label: "Location", val: address, icon: MapPin },
                { label: "Date & time", val: `${date === "today" ? "Today" : date === "tomorrow" ? "Tomorrow" : "Custom"}, ${time}`, icon: Calendar },
                { label: "Est. price", val: selectedService?.price || "$80–$160", icon: null },
              ].map(({ label, val, icon: Icon }) => (
                <div key={label} className="flex items-start justify-between py-3 border-b border-[#F8F9FC] last:border-0">
                  <span className="text-sm text-[#565E74] font-medium">{label}</span>
                  <span className="text-sm font-semibold text-[#0D1B3E] text-right max-w-[200px] flex items-center gap-1.5">
                    {Icon && <Icon size={13} className="text-[#9EA6BE]" />}
                    {val}
                  </span>
                </div>
              ))}
            </div>
            {description && (
              <div className="mt-4 bg-[#F8F9FC] rounded-[12px] p-4">
                <p className="text-xs font-semibold text-[#565E74] mb-1">Your notes</p>
                <p className="text-sm text-[#0D1B3E] leading-relaxed">{description}</p>
              </div>
            )}
            <div className="flex items-center gap-2 mt-4 text-xs text-[#565E74] bg-blue-50 rounded-[10px] p-3">
              <Info size={14} className="text-[#002B95] shrink-0" />
              Your card won't be charged until after the job is complete.
            </div>
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={prev}
          disabled={step === 1}
          className="flex items-center gap-2 text-sm font-medium text-[#565E74] hover:text-[#0D1B3E] disabled:opacity-40 transition-all"
        >
          <ChevronLeft size={18} /> Back
        </button>
        {step < 5 ? (
          <button
            onClick={next}
            disabled={!canNext()}
            className="flex items-center gap-2 bg-[#002B95] hover:bg-[#001B63] disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold text-sm px-6 py-3 rounded-[12px] transition-colors"
          >
            Continue <ChevronRight size={18} />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="flex items-center gap-2 bg-[#002B95] hover:bg-[#001B63] text-white font-bold text-sm px-8 py-3 rounded-[12px] transition-colors shadow-lg shadow-[#002B95]/20"
          >
            {submitting ? (
              <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending request…</>
            ) : "Request Service"}
          </button>
        )}
      </div>
    </div>
  );
}
