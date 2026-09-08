import { useState } from "react";
import { useNavigate, Link } from "react-router";
import {
  Search, MapPin, Star, Shield, Zap, MessageSquare, ChevronDown,
  ArrowRight, CheckCircle, Phone, Mail,
  Wrench, Zap as Lightning, Sparkles, Hammer, Leaf, Wind, Paintbrush, Package,
  Share2, BookMarked, Image
} from "lucide-react";
import logoSrc from "@/imports/logo.png";

const categories = [
  { label: "Plumbing", icon: Wrench, color: "bg-blue-50", iconColor: "text-[#002B95]" },
  { label: "Electrical", icon: Lightning, color: "bg-yellow-50", iconColor: "text-yellow-600" },
  { label: "Cleaning", icon: Sparkles, color: "bg-purple-50", iconColor: "text-purple-600" },
  { label: "Handyman", icon: Hammer, color: "bg-orange-50", iconColor: "text-orange-600" },
  { label: "Landscaping", icon: Leaf, color: "bg-green-50", iconColor: "text-green-600" },
  { label: "HVAC", icon: Wind, color: "bg-sky-50", iconColor: "text-sky-600" },
  { label: "Painting", icon: Paintbrush, color: "bg-pink-50", iconColor: "text-pink-600" },
  { label: "Moving", icon: Package, color: "bg-amber-50", iconColor: "text-amber-600" },
];

const whyCards = [
  { icon: Shield, title: "Verified Providers", desc: "Every provider is background-checked, licensed, and verified before they can work with customers." },
  { icon: Star, title: "Real Reviews", desc: "Every review comes from a completed job. No fakes. No paid placements. Just honest feedback from real customers." },
  { icon: Zap, title: "Fast Booking", desc: "Find a provider, send a request, and confirm a booking in minutes — not days." },
  { icon: MessageSquare, title: "Direct Messaging", desc: "Chat with your provider before, during, and after the job. Always know what's happening." },
];

const howItWorks = [
  { step: "1", title: "Search & Compare", desc: "Tell us what you need. Browse verified local providers with real reviews and transparent pricing." },
  { step: "2", title: "Book & Confirm", desc: "Choose your preferred time, describe your problem, and submit your request in under 2 minutes." },
  { step: "3", title: "Get It Done", desc: "Your provider arrives, completes the work, and you pay securely through the platform." },
];

const testimonials = [
  {
    name: "Sarah M.", role: "Homeowner · Austin, TX", avatar: "SM", rating: 5,
    text: "Found a plumber within 20 minutes on a Sunday morning. Mike was professional, showed up on time, and fixed the leak quickly. Instant is genuinely instant."
  },
  {
    name: "James K.", role: "Homeowner · Denver, CO", avatar: "JK", rating: 5,
    text: "I've used Instant three times now. The quality of providers is consistently excellent. The direct messaging feature is a game-changer — no more wondering if they got my request."
  },
  {
    name: "Maria L.", role: "Provider · Chicago, IL", avatar: "ML", rating: 5,
    text: "As a provider, Instant has helped me grow my business without spending a dime on advertising. The platform is fair, the customers are great, and payouts are always on time."
  },
];

const faqs = [
  { q: "How does Instant verify providers?", a: "All providers go through a multi-step verification process including identity verification, license checks, insurance confirmation, and background screening before they can accept jobs." },
  { q: "Is there a fee to use Instant as a customer?", a: "Searching and browsing are completely free. A small service fee is added at checkout when you complete a booking — this keeps the platform running and providers verified." },
  { q: "How quickly can I get help?", a: "Many providers respond within minutes. You'll receive a notification as soon as a provider accepts your request. Same-day service is available from many providers." },
  { q: "What happens if something goes wrong?", a: "Instant has a customer protection policy. If a job doesn't meet the agreed scope, our support team will step in to help resolve the issue, including refunds where appropriate." },
  { q: "How do providers get paid?", a: "Providers receive payment within 2–3 business days after a job is marked complete. Instant takes a transparent platform fee — no hidden charges." },
];

export default function LandingPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/customer/search${searchQuery ? `?q=${encodeURIComponent(searchQuery)}` : ""}`);
  };

  return (
    <div className="min-h-full bg-white font-['Plus_Jakarta_Sans',system-ui,sans-serif]">
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#E2E6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <img src={logoSrc} alt="Instant" className="h-9 object-contain object-left" />
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#565E74]">
            <a href="#how" className="hover:text-[#0D1B3E] transition-colors">How it works</a>
            <a href="#categories" className="hover:text-[#0D1B3E] transition-colors">Services</a>
            <a href="#providers" className="hover:text-[#0D1B3E] transition-colors">For providers</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/login" className="hidden sm:block text-sm font-medium text-[#565E74] hover:text-[#0D1B3E] transition-colors px-3 py-2">
              Sign in
            </Link>
            <Link
              to="/signup"
              className="bg-[#002B95] hover:bg-[#001B63] text-white text-sm font-semibold px-4 py-2 rounded-[10px] transition-colors"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0D1B3E] via-[#002B95] to-[#1A4CC0] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #3B82F6 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, #60A5FA 0%, transparent 50%)`
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
              Trusted by 12,000+ homeowners
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Local help.<br />
              <span className="text-[#60A5FA]">Right when you need it.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
              Instant connects you with verified local service professionals. Compare providers, read real reviews, chat directly, and book in minutes.
            </p>

            {/* Search bar */}
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 mb-8">
              <div className="flex-1 flex items-center gap-3 bg-white rounded-[12px] px-4 py-3 shadow-lg">
                <Search size={18} className="text-[#565E74] shrink-0" />
                <input
                  type="text"
                  placeholder="What service do you need?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 text-[#0D1B3E] placeholder-[#9EA6BE] text-sm font-medium outline-none bg-transparent"
                />
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-[12px] px-4 py-3 border border-white/20 min-w-[160px]">
                <MapPin size={18} className="text-white/70 shrink-0" />
                <span className="text-sm text-white/80 font-medium">Austin, TX</span>
              </div>
              <button
                type="submit"
                className="bg-white text-[#002B95] font-bold text-sm px-6 py-3 rounded-[12px] hover:bg-[#EEF2FF] transition-colors shrink-0 shadow-lg"
              >
                Find a Service
              </button>
            </form>

            <Link
              to="/signup?role=provider"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              Are you a provider? Join Instant →
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { val: "2,400+", label: "Active providers" },
              { val: "18,000+", label: "Jobs completed" },
              { val: "4.9★", label: "Avg. rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-extrabold text-white">{stat.val}</p>
                <p className="text-xs text-white/60 font-medium mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-20 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0D1B3E] mb-3">Find any service you need</h2>
            <p className="text-[#565E74] text-lg">From urgent repairs to planned renovations</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map(({ label, icon: Icon, color, iconColor }) => (
              <button
                key={label}
                onClick={() => navigate(`/customer/search?category=${label.toLowerCase()}`)}
                className={`${color} rounded-[14px] p-4 flex flex-col items-center gap-2.5 hover:shadow-md hover:scale-105 transition-all text-center group`}
              >
                <div className={`w-10 h-10 rounded-[10px] bg-white shadow-sm flex items-center justify-center ${iconColor}`}>
                  <Icon size={20} />
                </div>
                <span className="text-xs font-semibold text-[#0D1B3E]">{label}</span>
              </button>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => navigate("/customer/search")}
              className="inline-flex items-center gap-2 text-[#002B95] font-semibold text-sm hover:gap-3 transition-all"
            >
              View all services <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Why Instant */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0D1B3E] mb-3">Why homeowners trust Instant</h2>
            <p className="text-[#565E74] text-lg max-w-2xl mx-auto">We built every feature around one question: how can we help you feel confident about the person coming to your home?</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCards.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-[#F8F9FC] rounded-[16px] p-6 hover:shadow-lg transition-shadow">
                <div className="w-11 h-11 rounded-[12px] bg-[#EEF2FF] flex items-center justify-center text-[#002B95] mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="font-bold text-[#0D1B3E] mb-2">{title}</h3>
                <p className="text-sm text-[#565E74] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-20 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[#0D1B3E] mb-3">How Instant works</h2>
            <p className="text-[#565E74] text-lg">From search to completion in three steps</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 relative">
            <div className="hidden lg:block absolute top-8 left-1/3 right-1/3 h-0.5 bg-[#E2E6F0]" />
            {howItWorks.map(({ step, title, desc }) => (
              <div key={step} className="text-center relative">
                <div className="w-14 h-14 rounded-full bg-[#002B95] text-white text-xl font-extrabold flex items-center justify-center mx-auto mb-5 shadow-lg">
                  {step}
                </div>
                <h3 className="text-lg font-bold text-[#0D1B3E] mb-2">{title}</h3>
                <p className="text-[#565E74] text-sm leading-relaxed max-w-xs mx-auto">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/customer/search")}
              className="bg-[#002B95] hover:bg-[#001B63] text-white font-bold px-8 py-3.5 rounded-[12px] text-sm transition-colors shadow-lg shadow-[#002B95]/20 inline-flex items-center gap-2"
            >
              Find a Service <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Provider CTA */}
      <section id="providers" className="py-20 bg-[#0D1B3E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-[#4ADE80]" />
                For service providers
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
                Grow your business<br />
                <span className="text-[#60A5FA]">without the hustle</span>
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Join thousands of local professionals using Instant to find new customers, manage their schedule, and get paid on time — all in one place.
              </p>
              <div className="space-y-3 mb-8">
                {["Free to join — no upfront costs", "Direct communication with customers", "Transparent, fair platform fees", "Fast, reliable payouts"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-white/80">
                    <CheckCircle size={18} className="text-[#4ADE80] shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate("/signup?role=provider")}
                className="bg-white text-[#002B95] font-bold px-8 py-3.5 rounded-[12px] text-sm hover:bg-[#EEF2FF] transition-colors inline-flex items-center gap-2"
              >
                Join as a Provider <ArrowRight size={16} />
              </button>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-white/5 rounded-[20px] p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Avg. monthly earnings", val: "$4,200" },
                    { label: "Avg. response time", val: "< 1 hr" },
                    { label: "Repeat customers", val: "68%" },
                    { label: "Provider rating avg.", val: "4.8 ★" },
                  ].map(({ label, val }) => (
                    <div key={label} className="bg-white/5 rounded-[14px] p-4">
                      <p className="text-xl font-extrabold text-white">{val}</p>
                      <p className="text-xs text-white/50 mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0D1B3E] mb-3">Real people. Real results.</h2>
            <p className="text-[#565E74] text-lg">From homeowners and providers who use Instant every day</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, avatar, rating, text }) => (
              <div key={name} className="bg-[#F8F9FC] rounded-[16px] p-6 flex flex-col gap-4">
                <div className="flex">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[#0D1B3E] text-sm leading-relaxed flex-1">"{text}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-[#E2E6F0]">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#002B95] to-[#3B5FD4] flex items-center justify-center text-white text-xs font-bold">
                    {avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0D1B3E]">{name}</p>
                    <p className="text-xs text-[#565E74]">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8F9FC]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0D1B3E] mb-3">Frequently asked questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="bg-white rounded-[14px] border border-[#E2E6F0] overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-semibold text-sm text-[#0D1B3E]">{q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-[#565E74] transition-transform shrink-0 ml-4 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-[#565E74] leading-relaxed border-t border-[#E2E6F0] pt-3">
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#002B95] to-[#1A4CC0] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to find your next provider?</h2>
          <p className="text-white/80 text-lg mb-8">Join thousands of homeowners who get things done with Instant.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/signup")}
              className="bg-white text-[#002B95] font-bold px-8 py-3.5 rounded-[12px] text-sm hover:bg-[#EEF2FF] transition-colors shadow-lg inline-flex items-center justify-center gap-2"
            >
              Find a Service <ArrowRight size={16} />
            </button>
            <button
              onClick={() => navigate("/signup?role=provider")}
              className="bg-white/10 border border-white/30 text-white font-bold px-8 py-3.5 rounded-[12px] text-sm hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-2"
            >
              Join as a Provider
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D1B3E] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2">
              <img src={logoSrc} alt="Instant" className="h-8 object-contain object-left brightness-0 invert mb-4" />
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                Local home services, made instant. Find trusted professionals for any job, any time.
              </p>
              <div className="flex gap-3 mt-5">
                {[Share2, BookMarked, Image].map((Icon, i) => (
                  <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors">
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
            {[
              {
                title: "Company",
                links: [
                  { label: "About", to: null },
                  { label: "Careers", to: null },
                  { label: "Press", to: null },
                  { label: "Blog", to: null },
                ],
              },
              {
                title: "Services",
                links: [
                  { label: "Plumbing", to: "/customer/search?category=plumbing" },
                  { label: "Electrical", to: "/customer/search?category=electrical" },
                  { label: "Cleaning", to: "/customer/search?category=cleaning" },
                  { label: "HVAC", to: "/customer/search?category=hvac" },
                  { label: "All services", to: "/customer/search" },
                ],
              },
              {
                title: "For Providers",
                links: [
                  { label: "Join as provider", to: "/signup?role=provider" },
                  { label: "Provider dashboard", to: "/provider" },
                  { label: "Verification", to: "/provider/settings" },
                  { label: "Pricing", to: null },
                ],
              },
              {
                title: "Legal",
                links: [
                  { label: "Privacy Policy", to: "/privacy" },
                  { label: "Terms of Service", to: "/terms" },
                  { label: "Cookie Policy", to: null },
                ],
              },
            ].map(({ title, links }) => (
              <div key={title}>
                <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">{title}</p>
                <div className="space-y-2">
                  {links.map(({ label, to }) =>
                    to ? (
                      <Link key={label} to={to} className="block text-sm text-white/60 hover:text-white transition-colors">
                        {label}
                      </Link>
                    ) : (
                      <span key={label} className="block text-sm text-white/40 cursor-default">{label}</span>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
            <p>© 2026 Instant Technologies, Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/privacy" className="hover:text-white/70">Privacy</Link>
              <Link to="/terms" className="hover:text-white/70">Terms</Link>
              <span className="cursor-default">Cookies</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
