import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Instant',
  description: 'Terms of Service for Instant, developed by the Partus team.',
};

const terms = [
  {
    title: '1. About Instant',
    content: (
      <>
        <p>Instant is an early-stage technology project currently under development by the Partus team.</p>
        <p className="mt-3">This website is intended to:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Share information about the project.</li>
          <li>Collect customer and provider waitlist registrations.</li>
          <li>Gather feedback.</li>
          <li>Support fundraising and community building.</li>
        </ul>
        <p className="mt-3">
          The features, designs, and concepts shown on this website are for demonstration purposes
          and may change during development.
        </p>
      </>
    ),
  },
  {
    title: '2. Use of the Website',
    content: (
      <>
        <p>You agree to use this website only for lawful purposes.</p>
        <p className="mt-3">You must not:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Submit false or misleading information.</li>
          <li>Attempt to interfere with the operation or security of the website.</li>
          <li>Attempt to gain unauthorized access to any part of the website.</li>
          <li>Use the website in any manner that could damage or disrupt its operation.</li>
        </ul>
      </>
    ),
  },
  {
    title: '3. Waitlist Registration',
    content: (
      <>
        <p>Joining the waitlist does not guarantee:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Access to the platform.</li>
          <li>A launch date.</li>
          <li>Early access.</li>
          <li>Acceptance as a provider.</li>
        </ul>
        <p className="mt-3">
          Waitlist registration simply allows us to contact you with updates regarding the development of Instant.
        </p>
      </>
    ),
  },
  {
    title: '4. Provider Applications',
    content: (
      <p>
        Businesses and professionals may express interest in joining Instant through the provider registration form.
        Submitting an application does not guarantee approval or future participation on the platform.
      </p>
    ),
  },
  {
    title: '5. Intellectual Property',
    content: (
      <p>
        All original content on this website, including text, graphics, logos, interface designs, concepts,
        and other materials, is the property of their respective creators unless otherwise stated.
        You may not copy, reproduce, distribute, modify, or use any content from this website without prior
        written permission.
      </p>
    ),
  },
  {
    title: '6. Website Availability',
    content: (
      <p>
        We may update, modify, suspend, or discontinue any part of the website at any time without prior notice.
        We do not guarantee uninterrupted availability of the website.
      </p>
    ),
  },
  {
    title: '7. No Warranties',
    content: (
      <>
        <p>This website is provided for informational purposes on an "as is" and "as available" basis.</p>
        <p className="mt-3">We make no warranties regarding:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>The availability of future services.</li>
          <li>Product features.</li>
          <li>Launch dates.</li>
          <li>Compatibility with your device.</li>
          <li>Accuracy or completeness of all information.</li>
        </ul>
      </>
    ),
  },
  {
    title: '8. Limitation of Liability',
    content: (
      <p>
        To the fullest extent permitted by applicable law, the Partus team shall not be liable for any loss,
        damage, or expense arising from your use of this website or your reliance on information provided through it.
      </p>
    ),
  },
  {
    title: '9. Privacy',
    content: (
      <p>
        Your use of this website is also governed by our{' '}
        <Link href="/privacy-policy" className="text-primary hover:underline font-medium">
          Privacy Policy
        </Link>
        .
      </p>
    ),
  },
  {
    title: '10. Changes to These Terms',
    content: (
      <p>
        We may revise these Terms from time to time. Any updates will be posted on this page with a revised effective date.
      </p>
    ),
  },
  {
    title: '11. Contact',
    content: (
      <p>
        If you have questions about these Terms, please contact us at:{' '}
        <a href="mailto:Partus.organization@gmail.com" className="text-primary hover:underline font-medium">
          Partus.organization@gmail.com
        </a>
      </p>
    ),
  },
];

const faqs = [
  {
    q: 'When will Instant launch?',
    a: "We're currently building the platform and gathering early supporters. We'll share updates as soon as we have a launch timeline.",
  },
  {
    q: 'Is joining the waitlist free?',
    a: 'Yes, completely free.',
  },
  {
    q: 'Can providers join now?',
    a: "Yes. We're accepting early provider registrations through the sign-up form on our homepage.",
  },
  {
    q: 'Will Instant be available everywhere?',
    a: "We'll launch in selected locations first before expanding to more areas.",
  },
];

export default function TermsPage() {
  return (
    <main className="flex-1 bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-primary font-medium mb-10 hover:underline">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-semibold uppercase tracking-wider mb-6">
          Legal
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-4">Effective Date: 7th July 2026</p>
        <p className="text-gray-600 leading-relaxed mb-12">
          Welcome to Instant. These Terms of Service (&quot;Terms&quot;) govern your use of the Instant website.
          By accessing or using this website, you agree to these Terms. If you do not agree with these Terms,
          please do not use the website.
        </p>

        <div className="space-y-8 text-gray-600 leading-relaxed">
          {terms.map(({ title, content }) => (
            <section key={title}>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{title}</h2>
              {content}
            </section>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-base font-bold text-gray-900 mb-2">{q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 mt-12">
          <p className="text-sm text-gray-500">
            © 2026 Instant. Developed by the Partus team. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
