export default function HowItWorksPage() {
  return (
    <main className="flex-1 bg-gray-50 flex items-center justify-center py-20">
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Instant Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Your journey to finding the perfect service provider, simplified into six easy steps.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative hover:shadow-md transition-shadow">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md border-4 border-gray-50">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-2">Tell Us What You Need</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Choose the service you’re looking for and provide a few details about the job.</p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative hover:shadow-md transition-shadow">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md border-4 border-gray-50">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-2">Compare Local Providers</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Browse trusted professionals, compare profiles, ratings, response times, and pricing information all in one place.</p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative hover:shadow-md transition-shadow">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md border-4 border-gray-50">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-2">Choose Your Provider</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Select the provider that best fits your needs and request a booking.</p>
            </div>
            
            {/* Step 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative hover:shadow-md transition-shadow">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md border-4 border-gray-50">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-2">Confirm Your Booking</h3>
              <p className="text-gray-600 text-sm leading-relaxed">The provider reviews your request and confirms availability.</p>
            </div>
            
            {/* Step 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative hover:shadow-md transition-shadow">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md border-4 border-gray-50">5</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-2">Message and Manage</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Chat directly with your provider, ask questions, and keep track of your booking from start to finish.</p>
            </div>
            
            {/* Step 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative hover:shadow-md transition-shadow">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md border-4 border-gray-50">6</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-2">Get the Job Done</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Your provider completes the service, and you can leave a review to help others make informed decisions.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
