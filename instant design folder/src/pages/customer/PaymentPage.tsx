import { useState } from "react";
import { useNavigate } from "react-router";
import { Shield, CreditCard, Lock, CheckCircle } from "lucide-react";

export default function PaymentPage() {
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const [done, setDone] = useState(false);

  const handlePay = () => {
    setProcessing(true);
    setTimeout(() => { setProcessing(false); setDone(true); }, 2000);
  };

  if (done) {
    return (
      <div className="max-w-md mx-auto px-6 py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-[#ECFDF5] flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-[#16A34A]" />
        </div>
        <h2 className="text-2xl font-extrabold text-[#0D1B3E] mb-2">Payment successful</h2>
        <p className="text-[#565E74] text-sm mb-6">Your payment of <strong>$120.00</strong> has been processed. Mike's Plumbing will receive their payout within 2–3 business days.</p>
        <div className="flex gap-3">
          <button onClick={() => navigate("/customer/review/bk001")} className="flex-1 bg-[#002B95] text-white font-bold py-3 rounded-[12px] text-sm hover:bg-[#001B63] transition-colors">
            Leave a review
          </button>
          <button onClick={() => navigate("/customer")} className="flex-1 border border-[#E2E6F0] text-[#565E74] font-semibold py-3 rounded-[12px] text-sm hover:bg-[#F8F9FC] transition-colors">
            Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-extrabold text-[#0D1B3E] mb-6">Complete payment</h1>
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Payment form */}
        <div className="lg:col-span-3 space-y-5">
          <div className="bg-white rounded-[16px] border border-[#E2E6F0] p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard size={18} className="text-[#565E74]" />
              <h2 className="font-bold text-[#0D1B3E]">Card details</h2>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-semibold text-[#0D1B3E] mb-1.5">Card number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full border border-[#E2E6F0] rounded-[10px] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#002B95] focus:ring-2 focus:ring-[#002B95]/10 transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-[#0D1B3E] mb-1.5">Expiry date</label>
                  <input type="text" placeholder="MM / YY" className="w-full border border-[#E2E6F0] rounded-[10px] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#002B95] focus:ring-2 focus:ring-[#002B95]/10 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0D1B3E] mb-1.5">CVV</label>
                  <input type="text" placeholder="123" className="w-full border border-[#E2E6F0] rounded-[10px] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#002B95] focus:ring-2 focus:ring-[#002B95]/10 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0D1B3E] mb-1.5">Name on card</label>
                <input type="text" placeholder="Jane Doe" defaultValue="Jane Doe" className="w-full border border-[#E2E6F0] rounded-[10px] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#002B95] focus:ring-2 focus:ring-[#002B95]/10 transition-all" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#565E74] bg-[#F8F9FC] rounded-[10px] p-3">
            <Lock size={13} className="text-[#002B95] shrink-0" />
            Your payment is encrypted and secured by Stripe. Instant never stores your card details.
          </div>
        </div>

        {/* Summary */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-[16px] border border-[#E2E6F0] p-5 shadow-sm sticky top-6">
            <h2 className="font-bold text-[#0D1B3E] mb-4">Payment summary</h2>
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-[8px] bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xs font-bold shrink-0">
                  MP
                </div>
                <div>
                  <p className="font-semibold text-[#0D1B3E] text-sm">Mike's Plumbing</p>
                  <p className="text-xs text-[#565E74]">Drain Cleaning</p>
                </div>
              </div>
              <div className="border-t border-[#F8F9FC] pt-3 space-y-2">
                {[
                  { label: "Service fee", val: "$110.00" },
                  { label: "Platform fee", val: "$10.00" },
                ].map(({ label, val }) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-[#565E74]">{label}</span>
                    <span className="text-[#0D1B3E]">{val}</span>
                  </div>
                ))}
                <div className="flex justify-between font-bold border-t border-[#E2E6F0] pt-2 mt-2">
                  <span className="text-[#0D1B3E]">Total</span>
                  <span className="text-[#002B95] text-lg">$120.00</span>
                </div>
              </div>
            </div>
            <button
              onClick={handlePay}
              disabled={processing}
              className="w-full bg-[#002B95] hover:bg-[#001B63] disabled:opacity-60 text-white font-bold py-3 rounded-[12px] text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#002B95]/20"
            >
              {processing ? (
                <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Processing…</>
              ) : (
                <><Shield size={15} /> Pay $120.00</>
              )}
            </button>
            <p className="text-center text-xs text-[#9EA6BE] mt-3 flex items-center justify-center gap-1">
              <Lock size={11} /> Secured payment by Stripe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
