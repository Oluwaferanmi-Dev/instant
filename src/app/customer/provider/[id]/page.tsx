"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Star, Shield, MapPin, Clock, Briefcase, ChevronLeft, MessageSquare, Calendar, CheckCircle } from "lucide-react";
import { getProviderById, getServicesByProvider, Provider, ServiceItem } from "@/services/api";

const reviews = [
  { name: "Sarah M.", rating: 5, date: "Aug 28, 2026", text: "Mike showed up exactly on time and fixed our kitchen sink leak in under an hour. Very professional, clean workspace. Will definitely book again." },
  { name: "James K.", rating: 5, date: "Aug 14, 2026", text: "Excellent service. Diagnosed the issue quickly and explained everything clearly. Fair pricing, no hidden fees." },
  { name: "Lisa T.", rating: 4, date: "Jul 30, 2026", text: "Good work overall. The drain is completely clear now. Arrived 15 minutes late but communicated in advance." },
  { name: "Robert H.", rating: 5, date: "Jul 10, 2026", text: "Mike replaced our water heater and the whole job was done professionally. Cleaned up after himself. Highly recommend." },
];

export default function ProviderProfilePage() {
  const router = useRouter();
  const params = useParams();
  const providerId = (params?.id as string) || "p1";
  const [provider, setProvider] = useState<Provider | null>(null);
  const [servicesList, setServicesList] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProvider() {
      setLoading(true);
      const p = await getProviderById(providerId);
      const svcs = await getServicesByProvider(providerId);
      setProvider(p);
      setServicesList(svcs);
      setLoading(false);
    }
    loadProvider();
  }, [providerId]);

  if (loading || !provider) {
    return <div className="p-8 text-center text-sm text-[#565E74]">Loading provider profile...</div>;
  }

  return (
    <div className="min-h-full">
      {/* Header */}
      <div className="bg-white border-b border-[#E2E6F0] px-4 md:px-6 py-4">
        <button onClick={() => router.back()} className="flex items-center gap-2 text-sm text-[#565E74] hover:text-[#0D1B3E] transition-colors">
          <ChevronLeft size={18} /> Back to results
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        {/* Provider header card */}
        <div className="bg-white rounded-[20px] border border-[#E2E6F0] p-6 mb-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <div className="w-20 h-20 rounded-[18px] bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-extrabold text-2xl shrink-0">
              {provider.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div className="flex-1 w-full">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h1 className="text-xl font-extrabold text-[#0D1B3E]">{provider.businessName || provider.name}</h1>
                    {provider.verified && (
                      <span className="inline-flex items-center gap-1.5 bg-[#ECFDF5] text-[#004117] text-xs font-bold px-2.5 py-1 rounded-full">
                        <Shield size={11} /> Verified
                      </span>
                    )}
                  </div>
                  <p className="text-[#565E74] text-sm mb-3">{provider.category} Services · {provider.location}</p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="flex items-center gap-1.5 text-sm font-bold text-[#0D1B3E]">
                      <Star size={15} className="fill-amber-400 text-amber-400" />
                      {provider.rating} <span className="text-[#9EA6BE] font-normal">({provider.reviewsCount} reviews)</span>
                    </span>
                    <span className="text-[#E2E6F0]">|</span>
                    <span className="flex items-center gap-1.5 text-sm text-[#565E74]">
                      <Briefcase size={13} /> {provider.hourlyRate}
                    </span>
                    <span className="text-[#E2E6F0]">|</span>
                    <span className="flex items-center gap-1.5 text-sm text-[#565E74]">
                      <Clock size={13} /> Responds in ~15 min
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 w-full sm:w-auto mt-2 sm:mt-0">
                  <button
                    onClick={() => router.push("/customer/messages")}
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-2 border border-[#002B95] text-[#002B95] font-semibold text-sm px-4 py-2.5 rounded-[10px] hover:bg-[#EEF2FF] transition-colors"
                  >
                    <MessageSquare size={16} /> Message
                  </button>
                  <button
                    onClick={() => router.push(`/customer/book/${provider.id}`)}
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-[#002B95] hover:bg-[#001B63] text-white font-semibold text-sm px-5 py-2.5 rounded-[10px] transition-colors shadow-md shadow-[#002B95]/20"
                  >
                    <Calendar size={16} /> Request Service
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Trust stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-[#F8F9FC]">
            {[
              { label: "Response time", val: "~10 min" },
              { label: "Jobs completed", val: "214" },
              { label: "Years experience", val: "12 yrs" },
              { label: "Repeat customers", val: "72%" },
            ].map(({ label, val }) => (
              <div key={label} className="bg-[#F8F9FC] rounded-[12px] p-3 text-center">
                <p className="font-extrabold text-[#0D1B3E] text-base">{val}</p>
                <p className="text-xs text-[#565E74] mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About */}
        <div className="bg-white rounded-[16px] border border-[#E2E6F0] p-6 mb-5 shadow-sm">
          <h2 className="font-bold text-[#0D1B3E] mb-3">About</h2>
          <p className="text-[#565E74] text-sm leading-relaxed">
            {provider.bio}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Licensed", "Insured", "Background checked", "Verified Pro"].map((tag) => (
              <span key={tag} className="flex items-center gap-1.5 text-xs font-medium bg-[#ECFDF5] text-[#004117] px-3 py-1.5 rounded-full">
                <CheckCircle size={11} /> {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="bg-white rounded-[16px] border border-[#E2E6F0] p-6 mb-5 shadow-sm">
          <h2 className="font-bold text-[#0D1B3E] mb-4">Services offered</h2>
          <div className="space-y-3">
            {servicesList.map((svc) => (
              <div key={svc.id} className="flex items-center justify-between gap-4 p-4 bg-[#F8F9FC] rounded-[12px]">
                <div className="flex-1">
                  <p className="font-semibold text-[#0D1B3E] text-sm mb-1">{svc.title}</p>
                  <p className="text-xs text-[#565E74] leading-relaxed">{svc.description}</p>
                  <p className="text-xs text-[#9EA6BE] mt-1">Est. duration: {svc.duration}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-bold text-[#002B95] text-sm">{svc.price}</p>
                  <button
                    onClick={() => router.push(`/customer/book/${provider.id}`)}
                    className="text-xs text-[#002B95] font-medium mt-1 hover:underline"
                  >
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service area */}
        <div className="bg-white rounded-[16px] border border-[#E2E6F0] p-6 mb-5 shadow-sm">
          <h2 className="font-bold text-[#0D1B3E] mb-3">Service area</h2>
          <div className="flex items-center gap-2 text-sm text-[#565E74] mb-3">
            <MapPin size={15} className="text-[#002B95]" />
            Austin, TX — up to 25 miles
          </div>
          <div className="bg-[#F8F9FC] rounded-[12px] h-40 flex items-center justify-center border border-[#E2E6F0]">
            <div className="text-center text-[#9EA6BE]">
              <MapPin size={32} className="mx-auto mb-2 text-[#C8CFDF]" />
              <p className="text-xs">Austin metro area · 25 mi radius</p>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded-[16px] border border-[#E2E6F0] p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-[#0D1B3E]">Customer reviews</h2>
            <div className="flex items-center gap-2">
              <Star size={16} className="fill-amber-400 text-amber-400" />
              <span className="font-bold text-[#0D1B3E]">4.9</span>
              <span className="text-sm text-[#9EA6BE]">(127 reviews)</span>
            </div>
          </div>
          <div className="space-y-5">
            {reviews.map(({ name, rating, date, text }) => (
              <div key={name} className="pb-5 border-b border-[#F8F9FC] last:border-0 last:pb-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#002B95] to-[#3B5FD4] flex items-center justify-center text-white text-xs font-bold">
                      {name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0D1B3E]">{name}</p>
                      <p className="text-xs text-[#9EA6BE]">{date}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-[#565E74] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
