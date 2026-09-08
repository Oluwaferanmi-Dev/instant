import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, Mail } from "lucide-react";
import logoSrc from "@/imports/logo.png";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FC] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link to="/login" className="inline-flex items-center gap-2 text-sm text-[#565E74] hover:text-[#0D1B3E] transition-colors mb-6">
          <ArrowLeft size={16} /> Back to login
        </Link>
        <img src={logoSrc} alt="Instant" className="h-9 object-contain object-left mb-6" />

        <div className="bg-white rounded-[20px] border border-[#E2E6F0] p-7 shadow-sm">
          {!sent ? (
            <>
              <h1 className="text-xl font-extrabold text-[#0D1B3E] mb-1">Reset your password</h1>
              <p className="text-sm text-[#565E74] mb-6">Enter your email and we'll send you a reset link.</p>
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[#0D1B3E] mb-1.5">Email address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full border border-[#E2E6F0] rounded-[10px] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#002B95] focus:ring-2 focus:ring-[#002B95]/10 transition-all"
                  />
                </div>
                <button type="submit" className="w-full bg-[#002B95] hover:bg-[#001B63] text-white font-bold py-3 rounded-[10px] text-sm transition-colors">
                  Send reset link
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-14 h-14 rounded-full bg-[#EEF2FF] flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-[#002B95]" />
              </div>
              <h2 className="text-lg font-extrabold text-[#0D1B3E] mb-2">Check your email</h2>
              <p className="text-sm text-[#565E74] mb-6">
                We've sent a password reset link to <strong className="text-[#0D1B3E]">{email}</strong>
              </p>
              <button onClick={() => setSent(false)} className="text-sm text-[#002B95] font-medium hover:underline">
                Didn't receive it? Resend
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
