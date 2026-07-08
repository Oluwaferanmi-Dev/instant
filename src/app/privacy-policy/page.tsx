import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Instant',
  description: 'Privacy Policy for Instant, developed by the Partus team.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-primary font-medium mb-10 hover:underline">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Home
        </Link>

        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-semibold uppercase tracking-wider mb-6">
          Legal
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-12">Effective Date: 7th July 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
          <p>
            Welcome to Instant, an early-stage project developed by the Partus team.
            Your privacy is important to us. This Privacy Policy explains what information we collect,
            how we use it, and how we protect it.
          </p>

          {[
            {
              title: '1. Information We Collect',
              content: (
                <>
                  <p>When you use our website or join our waitlist, we may collect information such as:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Your name</li>
                    <li>Email address</li>
                    <li>Phone number (if provided)</li>
                    <li>City or location</li>
                    <li>Business information (for service providers)</li>
                    <li>Any information you voluntarily submit through our forms</li>
                  </ul>
                  <p className="mt-3">
                    We may also collect basic technical information such as your browser type,
                    device type, and IP address to help us improve the website.
                  </p>
                </>
              ),
            },
            {
              title: '2. How We Use Your Information',
              content: (
                <>
                  <p>We use your information to:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Manage our customer and provider waitlists</li>
                    <li>Contact you with updates about Instant</li>
                    <li>Respond to your questions or requests</li>
                    <li>Improve our website and future services</li>
                    <li>Better understand interest in our platform</li>
                  </ul>
                  <p className="mt-3 font-medium text-gray-800">We will not sell your personal information to third parties.</p>
                </>
              ),
            },
            {
              title: '3. Sharing Your Information',
              content: (
                <p>
                  We may share your information with trusted service providers who help us operate our website,
                  such as website hosting or email delivery services. We may also disclose information if required by law.
                </p>
              ),
            },
            {
              title: '4. Data Security',
              content: (
                <p>
                  We take reasonable measures to protect the information you provide. However, no method of
                  transmitting or storing data over the internet is completely secure, and we cannot guarantee
                  absolute security.
                </p>
              ),
            },
            {
              title: '5. Your Choices',
              content: (
                <>
                  <p>You may contact us at any time to:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Request access to your information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request that we delete your information from our waitlist</li>
                    <li>Unsubscribe from future communications</li>
                  </ul>
                </>
              ),
            },
            {
              title: '6. Third-Party Services',
              content: (
                <p>
                  Our website may use trusted third-party services to operate features such as forms, analytics,
                  or email communications. These services have their own privacy policies.
                </p>
              ),
            },
            {
              title: "7. Children's Privacy",
              content: (
                <p>
                  Our website is not intended for children under the age of 13, and we do not knowingly collect
                  personal information from children.
                </p>
              ),
            },
            {
              title: '8. Changes to This Policy',
              content: (
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page
                  with a revised effective date.
                </p>
              ),
            },
            {
              title: '9. Contact Us',
              content: (
                <p>
                  If you have any questions about this Privacy Policy or how we handle your information, please
                  contact us at:{' '}
                  <a href="mailto:Partus.organization@gmail.com" className="text-primary hover:underline font-medium">
                    Partus.organization@gmail.com
                  </a>
                </p>
              ),
            },
          ].map(({ title, content }) => (
            <section key={title}>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{title}</h2>
              {content}
            </section>
          ))}

          <div className="border-t border-gray-200 pt-8 mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Disclaimer</h2>
            <p>
              Instant is currently under development. Information collected through this website is used solely
              for waitlist registration, community updates, fundraising communications, and product development purposes.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500">
              © 2026 Instant. Developed by the Partus team. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
