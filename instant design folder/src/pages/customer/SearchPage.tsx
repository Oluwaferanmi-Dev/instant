import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { Search, MapPin, Star, Clock, Shield, ChevronDown, SlidersHorizontal, X } from "lucide-react";

const providers = [
  {
    id: "p1", name: "Mike's Plumbing", category: "Plumbing", rating: 4.9, reviews: 127,
    price: "From $80", responseTime: "~10 min", distance: "2.4 mi", jobs: 214,
    avatar: "MP", avatarBg: "from-blue-500 to-blue-700", verified: true,
    desc: "Licensed master plumber with 12+ years of experience. Specializing in leak repair, drain cleaning, and full bathroom plumbing.",
    availability: "Available today"
  },
  {
    id: "p2", name: "BrightSpark Electrical", category: "Electrical", rating: 4.8, reviews: 89,
    price: "From $95", responseTime: "~20 min", distance: "3.1 mi", jobs: 156,
    avatar: "BS", avatarBg: "from-yellow-500 to-orange-500", verified: true,
    desc: "Certified electrician offering panel upgrades, outlet installation, lighting, and safety inspections.",
    availability: "Available tomorrow"
  },
  {
    id: "p3", name: "FreshNest Cleaning", category: "Cleaning", rating: 4.9, reviews: 203,
    price: "From $65", responseTime: "~5 min", distance: "1.8 mi", jobs: 412,
    avatar: "FN", avatarBg: "from-purple-500 to-purple-700", verified: true,
    desc: "Professional home cleaning service. Deep cleans, regular maintenance, move-in/move-out cleaning available.",
    availability: "Available today"
  },
  {
    id: "p4", name: "GreenWay Landscaping", category: "Landscaping", rating: 4.7, reviews: 64,
    price: "From $120", responseTime: "~30 min", distance: "4.2 mi", jobs: 98,
    avatar: "GW", avatarBg: "from-green-500 to-green-700", verified: true,
    desc: "Full-service landscaping and lawn care. Mowing, trimming, planting, irrigation, and seasonal cleanup.",
    availability: "Available this week"
  },
  {
    id: "p5", name: "HomeFix Handyman", category: "Handyman", rating: 4.6, reviews: 51,
    price: "From $70", responseTime: "~45 min", distance: "5.0 mi", jobs: 73,
    avatar: "HF", avatarBg: "from-orange-500 to-red-500", verified: false,
    desc: "General handyman services: furniture assembly, mounting, minor repairs, caulking, and painting.",
    availability: "Available today"
  },
];

const categories = ["All", "Plumbing", "Electrical", "Cleaning", "Handyman", "Landscaping", "HVAC", "Painting"];
const sortOptions = ["Recommended", "Highest rated", "Lowest price", "Fastest response", "Nearest first"];

export default function SearchPage() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [query, setQuery] = useState(params.get("q") || "");
  const [selectedCategory, setSelectedCategory] = useState(params.get("category") || "All");
  const [sortBy, setSortBy] = useState("Recommended");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = providers.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesQuery = !query || p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()) || p.desc.toLowerCase().includes(query.toLowerCase());
    const matchesVerified = !verifiedOnly || p.verified;
    return matchesCategory && matchesQuery && matchesVerified;
  });

  return (
    <div className="flex flex-col h-full">
      {/* Search header */}
      <div className="bg-white border-b border-[#E2E6F0] px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-3 mb-4">
            <div className="flex-1 flex items-center gap-3 bg-[#F8F9FC] border border-[#E2E6F0] rounded-[12px] px-4 py-2.5 focus-within:border-[#002B95] focus-within:bg-white transition-all">
              <Search size={16} className="text-[#9EA6BE] shrink-0" />
              <input
                type="text"
                placeholder="What service do you need?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 text-sm text-[#0D1B3E] placeholder-[#9EA6BE] outline-none bg-transparent"
              />
              {query && <button onClick={() => setQuery("")}><X size={14} className="text-[#9EA6BE]" /></button>}
            </div>
            <div className="flex items-center gap-2 bg-[#F8F9FC] border border-[#E2E6F0] rounded-[12px] px-4 py-2.5">
              <MapPin size={15} className="text-[#565E74]" />
              <span className="text-sm text-[#565E74] font-medium whitespace-nowrap">Austin, TX</span>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-[12px] border text-sm font-medium transition-colors ${
                showFilters ? "bg-[#002B95] text-white border-[#002B95]" : "bg-[#F8F9FC] border-[#E2E6F0] text-[#565E74]"
              }`}
            >
              <SlidersHorizontal size={15} /> Filters
            </button>
          </div>

          {/* Filters row */}
          {showFilters && (
            <div className="flex items-center gap-4 py-3 border-t border-[#E2E6F0]">
              <label className="flex items-center gap-2 text-sm text-[#565E74] cursor-pointer">
                <input
                  type="checkbox"
                  checked={verifiedOnly}
                  onChange={(e) => setVerifiedOnly(e.target.checked)}
                  className="w-4 h-4 accent-[#002B95] rounded"
                />
                <Shield size={14} className="text-[#004117]" />
                Verified only
              </label>
              <div className="flex items-center gap-2 text-sm text-[#565E74]">
                <span className="font-medium">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-[#E2E6F0] rounded-[8px] px-2 py-1 text-sm text-[#0D1B3E] outline-none bg-white"
                >
                  {sortOptions.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>
          )}

          {/* Category chips */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#002B95] text-white"
                    : "bg-[#F8F9FC] border border-[#E2E6F0] text-[#565E74] hover:bg-[#EEF2FF] hover:text-[#002B95]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-5">
            <p className="text-sm text-[#565E74]">
              <span className="font-bold text-[#0D1B3E]">{filtered.length} providers</span> found near Austin, TX
            </p>
            <div className="hidden sm:flex items-center gap-2 text-sm text-[#565E74]">
              Sort: <span className="font-medium text-[#0D1B3E]">{sortBy}</span>
              <ChevronDown size={14} />
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-[#F8F9FC] flex items-center justify-center mx-auto mb-4">
                <Search size={28} className="text-[#C8CFDF]" />
              </div>
              <h3 className="font-bold text-[#0D1B3E] mb-2">No providers found</h3>
              <p className="text-sm text-[#565E74]">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map((p) => (
                <div
                  key={p.id}
                  className="bg-white border border-[#E2E6F0] rounded-[16px] p-5 hover:shadow-lg hover:border-[#C8CFDF] transition-all cursor-pointer"
                  onClick={() => navigate(`/customer/provider/${p.id}`)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-[14px] bg-gradient-to-br ${p.avatarBg} flex items-center justify-center text-white font-bold text-lg shrink-0`}>
                      {p.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-[#0D1B3E]">{p.name}</h3>
                            {p.verified && (
                              <span className="inline-flex items-center gap-1 text-[10px] bg-[#ECFDF5] text-[#004117] font-bold px-2 py-0.5 rounded-full">
                                <Shield size={9} /> Verified
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#565E74] font-medium mb-2">{p.category}</p>
                          <p className="text-sm text-[#565E74] leading-relaxed line-clamp-2">{p.desc}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="font-bold text-[#002B95] text-sm">{p.price}</p>
                          <p className="text-xs text-[#9EA6BE] mt-0.5">{p.jobs} jobs</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mt-3 flex-wrap">
                        <span className="flex items-center gap-1 text-sm font-semibold text-[#0D1B3E]">
                          <Star size={13} className="fill-amber-400 text-amber-400" />
                          {p.rating}
                          <span className="text-[#9EA6BE] font-normal text-xs ml-0.5">({p.reviews} reviews)</span>
                        </span>
                        <span className="text-[#E2E6F0]">|</span>
                        <span className="flex items-center gap-1 text-xs text-[#565E74]">
                          <Clock size={11} /> {p.responseTime}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-[#565E74]">
                          <MapPin size={11} /> {p.distance}
                        </span>
                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{p.availability}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4 pt-4 border-t border-[#F8F9FC]">
                    <button
                      onClick={(e) => { e.stopPropagation(); navigate(`/customer/provider/${p.id}`); }}
                      className="flex-1 border border-[#002B95] text-[#002B95] font-semibold text-sm py-2 rounded-[10px] hover:bg-[#EEF2FF] transition-colors"
                    >
                      View Profile
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); navigate(`/customer/book/${p.id}`); }}
                      className="flex-1 bg-[#002B95] hover:bg-[#001B63] text-white font-semibold text-sm py-2 rounded-[10px] transition-colors"
                    >
                      Request Service
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
