import { Link, useLocation } from "react-router";
import { ArrowLeft } from "lucide-react";
import logoSrc from "@/imports/logo.png";

const content = {
  "/privacy": {
    title: "Privacy Policy",
    updated: "September 1, 2026",
    sections: [
      {
        heading: "Information we collect",
        body: "We collect information you provide directly to us when you create an account, submit a service request, communicate with providers, or contact support. This includes your name, email address, phone number, home address, and payment information."
      },
      {
        heading: "How we use your information",
        body: "We use the information we collect to provide, maintain, and improve our services, process transactions, send service notifications, and communicate with you. We do not sell your personal data to third parties."
      },
      {
        heading: "Data security",
        body: "We implement industry-standard security measures to protect your personal information. Payment data is encrypted and processed through Stripe. We never store full card numbers."
      },
      {
        heading: "Your rights",
        body: "You may access, update, or delete your personal information at any time through your account settings. To request account deletion, contact support@instant.com."
      },
      {
        heading: "Contact us",
        body: "If you have questions about this Privacy Policy, email us at privacy@instant.com."
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    updated: "September 1, 2026",
    sections: [
      {
        heading: "Acceptance of terms",
        body: "By using Instant, you agree to these terms. If you do not agree, please do not use our platform. We may update these terms periodically; continued use constitutes acceptance."
      },
      {
        heading: "User accounts",
        body: "You are responsible for maintaining the confidentiality of your account credentials. You must be at least 18 years old to create an account. You agree to provide accurate information and keep it updated."
      },
      {
        heading: "Provider relationships",
        body: "Instant is a marketplace platform. Service providers are independent contractors, not employees of Instant. We facilitate connections but do not directly provide home services. Quality and outcomes are the provider's responsibility."
      },
      {
        heading: "Payments and fees",
        body: "Customers pay for services through the platform. Instant charges a platform fee on each transaction. Providers receive payment within 2–3 business days of job completion. Refunds are subject to our dispute resolution policy."
      },
      {
        heading: "Prohibited conduct",
        body: "You may not use Instant for illegal activities, harassment, fraud, or circumventing our payment system by arranging off-platform transactions. Violations may result in account suspension."
      },
      {
        heading: "Contact",
        body: "Questions about these terms? Email legal@instant.com."
      },
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const page = content[pathname as keyof typeof content] ?? content["/privacy"];

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      <header className="bg-white border-b border-[#E2E6F0]">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/">
            <img src={logoSrc} alt="Instant" className="h-8 object-contain object-left" />
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sm text-[#565E74] hover:text-[#0D1B3E] transition-colors">
            <ArrowLeft size={16} /> Back to home
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-extrabold text-[#0D1B3E] mb-2">{page.title}</h1>
        <p className="text-sm text-[#9EA6BE] mb-10">Last updated: {page.updated}</p>

        <div className="space-y-8">
          {page.sections.map(({ heading, body }) => (
            <div key={heading} className="bg-white rounded-[16px] border border-[#E2E6F0] p-6 shadow-sm">
              <h2 className="font-bold text-[#0D1B3E] mb-3">{heading}</h2>
              <p className="text-[#565E74] text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/" className="text-sm text-[#002B95] font-semibold hover:text-[#001B63]">
            ← Back to Instant
          </Link>
        </div>
      </main>
    </div>
  );
}
