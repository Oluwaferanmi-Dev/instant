import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { ArrowLeft, Home, Wrench, CheckCircle, Eye, EyeOff } from "lucide-react";
import logoSrc from "@/imports/logo.png";

type Role = "customer" | "provider" | null;

export default function SignupPage() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [role, setRole] = useState<Role>(params.get("role") === "provider" ? "provider" : null);
  const [step, setStep] = useState(role ? 2 : 1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRoleSelect = (r: Role) => {
    setRole(r);
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(role === "provider" ? "/provider" : "/customer");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-[#565E74] hover:text-[#0D1B3E] transition-colors mb-6">
            <ArrowLeft size={16} /> Back to home
          </Link>
          <img src={logoSrc} alt="Instant" className="h-9 object-contain object-left mb-6" />
          <h1 className="text-2xl font-extrabold text-[#0D1B3E] mb-1">Create your account</h1>
          <p className="text-[#565E74] text-sm">Join 12,000+ people using Instant every day</p>
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <p className="text-sm font-semibold text-[#0D1B3E] mb-2">I want to…</p>
            <button
              onClick={() => handleRoleSelect("customer")}
              className="w-full bg-white border-2 border-[#E2E6F0] hover:border-[#002B95] rounded-[16px] p-5 text-left flex items-center gap-4 transition-all group"
            >
              <div className="w-12 h-12 rounded-[12px] bg-[#EEF2FF] flex items-center justify-center text-[#002B95] group-hover:bg-[#002B95] group-hover:text-white transition-colors">
                <Home size={22} />
              </div>
              <div>
                <p className="font-bold text-[#0D1B3E] mb-0.5">Find a service provider</p>
                <p className="text-sm text-[#565E74]">I need help with home services</p>
              </div>
            </button>
            <button
              onClick={() => handleRoleSelect("provider")}
              className="w-full bg-white border-2 border-[#E2E6F0] hover:border-[#004117] rounded-[16px] p-5 text-left flex items-center gap-4 transition-all group"
            >
              <div className="w-12 h-12 rounded-[12px] bg-[#ECFDF5] flex items-center justify-center text-[#004117] group-hover:bg-[#004117] group-hover:text-white transition-colors">
                <Wrench size={22} />
              </div>
              <div>
                <p className="font-bold text-[#0D1B3E] mb-0.5">I'm a service provider</p>
                <p className="text-sm text-[#565E74]">I offer professional home services</p>
              </div>
            </button>
            <p className="text-center text-sm text-[#565E74] mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-[#002B95] font-semibold hover:text-[#001B63]">Sign in</Link>
            </p>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white rounded-[20px] border border-[#E2E6F0] p-7 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center ${
                role === "provider" ? "bg-[#ECFDF5] text-[#004117]" : "bg-[#EEF2FF] text-[#002B95]"
              }`}>
                {role === "provider" ? <Wrench size={18} /> : <Home size={18} />}
              </div>
              <div>
                <p className="font-bold text-[#0D1B3E] text-sm">{role === "provider" ? "Provider account" : "Customer account"}</p>
                <button onClick={() => setStep(1)} className="text-xs text-[#002B95] hover:underline">Change</button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#0D1B3E] mb-1.5">Full name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={role === "provider" ? "Your name" : "Your name"}
                  required
                  className="w-full border border-[#E2E6F0] rounded-[10px] px-3.5 py-2.5 text-sm text-[#0D1B3E] placeholder-[#9EA6BE] focus:outline-none focus:border-[#002B95] focus:ring-2 focus:ring-[#002B95]/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0D1B3E] mb-1.5">Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full border border-[#E2E6F0] rounded-[10px] px-3.5 py-2.5 text-sm text-[#0D1B3E] placeholder-[#9EA6BE] focus:outline-none focus:border-[#002B95] focus:ring-2 focus:ring-[#002B95]/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0D1B3E] mb-1.5">Password</label>
                <div className="relative">
                  <input
                    type={showPw ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 8 characters"
                    required
                    minLength={8}
                    className="w-full border border-[#E2E6F0] rounded-[10px] px-3.5 py-2.5 pr-10 text-sm text-[#0D1B3E] placeholder-[#9EA6BE] focus:outline-none focus:border-[#002B95] focus:ring-2 focus:ring-[#002B95]/10 transition-all"
                  />
                  <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9EA6BE] hover:text-[#565E74]">
                    {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <p className="text-xs text-[#9EA6BE]">
                By creating an account, you agree to our{" "}
                <Link to="/terms" className="text-[#002B95] hover:underline">Terms of Service</Link> and{" "}
                <Link to="/privacy" className="text-[#002B95] hover:underline">Privacy Policy</Link>.
              </p>

              <button
                type="submit"
                disabled={loading}
                className={`w-full font-bold py-3 rounded-[10px] text-sm transition-colors flex items-center justify-center gap-2 text-white ${
                  role === "provider"
                    ? "bg-[#004117] hover:bg-[#002B10] disabled:opacity-60"
                    : "bg-[#002B95] hover:bg-[#001B63] disabled:opacity-60"
                }`}
              >
                {loading ? (
                  <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Creating account…</>
                ) : "Create account"}
              </button>
            </form>

            <div className="relative my-5">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[#E2E6F0]" /></div>
              <div className="relative flex justify-center"><span className="bg-white px-3 text-xs text-[#9EA6BE]">or</span></div>
            </div>

            <button className="w-full border border-[#E2E6F0] rounded-[10px] py-2.5 text-sm font-semibold text-[#0D1B3E] hover:bg-[#F8F9FC] transition-colors flex items-center justify-center gap-3">
              <svg width="18" height="18" viewBox="0 0 18 18"><path d="M17.64 9.2a10.34 10.34 0 0 0-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92a8.78 8.78 0 0 0 2.68-6.62Z" fill="#4285F4"/><path d="M9 18a8.6 8.6 0 0 0 5.96-2.18l-2.92-2.26a5.43 5.43 0 0 1-8.09-2.85H.98v2.34A9 9 0 0 0 9 18Z" fill="#34A853"/><path d="M3.95 10.71a5.41 5.41 0 0 1 0-3.42V4.95H.98a9 9 0 0 0 0 8.1l2.97-2.34Z" fill="#FBBC05"/><path d="M9 3.58a4.86 4.86 0 0 1 3.44 1.35L14.5 2.87A8.64 8.64 0 0 0 9 0a9 9 0 0 0-8.02 4.95l2.97 2.34A5.36 5.36 0 0 1 9 3.58Z" fill="#EA4335"/></svg>
              Continue with Google
            </button>

            <p className="text-center text-sm text-[#565E74] mt-5">
              Already have an account?{" "}
              <Link to="/login" className="text-[#002B95] font-semibold hover:text-[#001B63]">Sign in</Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
