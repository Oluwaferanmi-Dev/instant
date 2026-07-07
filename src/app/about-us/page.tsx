export default function AboutUsPage() {
  return (
    <main className="flex-1 bg-white flex items-center justify-center py-24">
      <section className="w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            Our Story
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">About Us</h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            <p>
              At Partus, the birthplace of Instant, we are a small team from different parts of the world brought together by one simple goal: <span className="font-semibold text-gray-900">solving everyday problems through technology.</span>
            </p>
            <p>
              We started with a simple question: why is finding a reliable home service professional still so difficult?
            </p>
            <p>
              Too often, people spend hours searching, asking for recommendations, and taking chances on providers they know little about. We believed there had to be a better way.
            </p>
            <p>
              That belief led to the creation of <span className="font-semibold text-primary">Instant</span> — a platform designed to make finding, comparing, and booking trusted local service providers simple, transparent, and stress-free.
            </p>
            <p>
              We are still a small team, but we are building with a big vision: to create technology that makes everyday life easier, one problem at a time.
            </p>
            <p className="text-xl font-medium text-gray-900 pt-4">
              This is just the beginning of our journey, and we are excited to build the future with our community.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
