"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Star, CheckCircle } from "lucide-react";

const tags = ["Professional", "Fast", "Friendly", "Good communication", "Good value", "Clean work"];

export default function ReviewPage() {
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [text, setText] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleTag = (tag: string) =>
    setSelectedTags((prev) => prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]);

  const handleSubmit = () => {
    if (rating === 0) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto px-4 md:px-6 py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-[#ECFDF5] flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-[#16A34A]" />
        </div>
        <h2 className="text-2xl font-extrabold text-[#0D1B3E] mb-2">Review submitted!</h2>
        <p className="text-[#565E74] text-sm mb-6">Thank you for your feedback. Your review helps other homeowners find great providers.</p>
        <button onClick={() => router.push("/customer")} className="bg-[#002B95] text-white font-bold px-8 py-3 rounded-[12px] text-sm hover:bg-[#001B63] transition-colors">
          Back to dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto px-4 md:px-6 py-8">
      <h1 className="text-2xl font-extrabold text-[#0D1B3E] mb-2">How was your experience?</h1>
      <p className="text-[#565E74] text-sm mb-6">Rate your service from Mike&apos;s Plumbing</p>

      <div className="bg-white rounded-[20px] border border-[#E2E6F0] p-6 shadow-sm space-y-6">
        {/* Provider */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-[12px] bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg">
            MP
          </div>
          <div>
            <p className="font-bold text-[#0D1B3E]">Mike&apos;s Plumbing</p>
            <p className="text-sm text-[#565E74]">Drain Cleaning · Sep 9, 2026</p>
          </div>
        </div>

        {/* Stars */}
        <div>
          <p className="text-sm font-semibold text-[#0D1B3E] mb-3">Your rating</p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onMouseEnter={() => setHovered(star)}
                onMouseLeave={() => setHovered(0)}
                onClick={() => setRating(star)}
                className="transition-transform hover:scale-110"
              >
                <Star
                  size={32}
                  className={`transition-colors ${(hovered || rating) >= star ? "fill-amber-400 text-amber-400" : "fill-[#E2E6F0] text-[#E2E6F0]"}`}
                />
              </button>
            ))}
          </div>
          {rating > 0 && (
            <p className="text-sm font-medium text-[#565E74] mt-2">
              {["", "Poor", "Fair", "Good", "Very good", "Excellent"][rating]}
            </p>
          )}
        </div>

        {/* Tags */}
        <div>
          <p className="text-sm font-semibold text-[#0D1B3E] mb-3">Quick tags (optional)</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium border-2 transition-colors ${
                  selectedTags.includes(tag)
                    ? "border-[#002B95] bg-[#EEF2FF] text-[#002B95]"
                    : "border-[#E2E6F0] text-[#565E74] hover:border-[#C8CFDF]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Text */}
        <div>
          <label className="block text-sm font-semibold text-[#0D1B3E] mb-1.5">Tell us more (optional)</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Share the details of your experience..."
            rows={4}
            className="w-full border border-[#E2E6F0] rounded-[12px] px-4 py-3 text-sm text-[#0D1B3E] placeholder-[#9EA6BE] focus:outline-none focus:border-[#002B95] focus:ring-2 focus:ring-[#002B95]/10 transition-all resize-none"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={rating === 0}
          className="w-full bg-[#002B95] hover:bg-[#001B63] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-3 rounded-[12px] text-sm transition-colors"
        >
          Submit review
        </button>
      </div>
    </div>
  );
}
