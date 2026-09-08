"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar, MapPin, MessageSquare, Check, X } from "lucide-react";
import { StatusBadge } from "@/components/ui/StatusBadge";

type FilterType = "all" | "pending" | "accepted" | "declined";

const allRequests = [
  {
    id: "r1", customer: "Jane D.", service: "Drain Cleaning", date: "Sep 9, 10:00 AM",
    location: "142 Oak St, Austin", price: "$90–$150", notes: "Kitchen sink slow drain, has smell",
    avatar: "JD", avatarBg: "from-[#002B95] to-[#3B5FD4]", status: "requested" as const,
  },
  {
    id: "r2", customer: "Robert H.", service: "Leak Repair", date: "Sep 10, 2:00 PM",
    location: "847 Elm Ave, Austin", price: "$80–$160", notes: "Dripping under kitchen sink cabinet",
    avatar: "RH", avatarBg: "from-teal-500 to-teal-700", status: "requested" as const,
  },
  {
    id: "r3", customer: "Lisa T.", service: "Drain Cleaning", date: "Sep 9, 10:00 AM",
    location: "55 Maple Drive", price: "$120", notes: "",
    avatar: "LT", avatarBg: "from-purple-500 to-purple-700", status: "accepted" as const,
  },
  {
    id: "r4", customer: "James B.", service: "Toilet Repair", date: "Sep 8, 3:00 PM",
    location: "12 Birch St", price: "$95", notes: "Running toilet, constant flush",
    avatar: "JB", avatarBg: "from-orange-500 to-orange-700", status: "declined" as const,
  },
  {
    id: "r5", customer: "Amanda P.", service: "Water Heater", date: "Sep 12, 9:00 AM",
    location: "301 Cedar Ln", price: "$150–$400", notes: "No hot water",
    avatar: "AP", avatarBg: "from-pink-500 to-pink-700", status: "requested" as const,
  },
];

export default function ProviderRequestsPage() {
  const router = useRouter();
  const [filter, setFilter] = useState<FilterType>("all");
  const [confirmDecline, setConfirmDecline] = useState<string | null>(null);
  const [statuses, setStatuses] = useState<Record<string, "requested" | "accepted" | "declined">>({});

  const acceptReq = (id: string) => setStatuses((p) => ({ ...p, [id]: "accepted" }));
  const declineReq = (id: string) => { setStatuses((p) => ({ ...p, [id]: "declined" })); setConfirmDecline(null); };

  const filtered = allRequests
    .map((r) => ({ ...r, status: (statuses[r.id] ?? r.status) as "requested" | "accepted" | "declined" }))
    .filter((r) => filter === "all" || r.status === filter);

  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h1 className="text-2xl font-extrabold text-[#0D1B3E]">Service Requests</h1>
        <div className="flex gap-2 overflow-x-auto">
          {(["all", "pending", "accepted", "declined"] as FilterType[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold capitalize transition-colors ${
                filter === f ? "bg-[#0D1B3E] text-white" : "bg-white border border-[#E2E6F0] text-[#565E74] hover:bg-[#F8F9FC]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filtered.map((req) => (
          <div key={req.id} className="bg-white rounded-[16px] border border-[#E2E6F0] p-5 shadow-sm">
            {/* Decline confirm modal */}
            {confirmDecline === req.id && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
                <div className="bg-white rounded-[20px] p-6 max-w-sm w-full shadow-2xl">
                  <h3 className="font-bold text-[#0D1B3E] mb-2">Decline this request?</h3>
                  <p className="text-sm text-[#565E74] mb-5">The customer will be notified that you&apos;re unavailable for this job.</p>
                  <div className="flex gap-3">
                    <button onClick={() => setConfirmDecline(null)} className="flex-1 border border-[#E2E6F0] rounded-[10px] py-2.5 text-sm font-semibold text-[#565E74] hover:bg-[#F8F9FC]">
                      Cancel
                    </button>
                    <button onClick={() => declineReq(req.id)} className="flex-1 bg-[#DC2626] text-white rounded-[10px] py-2.5 text-sm font-bold hover:bg-red-700 transition-colors">
                      Yes, decline
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-start gap-3 mb-4">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${req.avatarBg} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                {req.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="font-bold text-[#0D1B3E]">{req.customer}</p>
                    <p className="text-sm text-[#565E74]">{req.service}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <StatusBadge status={req.status} />
                    <p className="font-bold text-[#002B95] text-sm">{req.price}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-5 text-xs text-[#565E74] mb-3">
              <span className="flex items-center gap-1.5"><Calendar size={11} /> {req.date}</span>
              <span className="flex items-center gap-1.5"><MapPin size={11} /> {req.location}</span>
            </div>

            {req.notes && (
              <div className="bg-[#F8F9FC] rounded-[8px] p-3 mb-4">
                <p className="text-xs text-[#565E74] leading-relaxed">&quot;{req.notes}&quot;</p>
              </div>
            )}

            {req.status === "requested" && (
              <div className="flex gap-2 mt-3">
                <button onClick={() => acceptReq(req.id)} className="flex-1 flex items-center justify-center gap-1.5 bg-[#004117] hover:bg-[#002B10] text-white font-bold text-sm py-2.5 rounded-[10px] transition-colors">
                  <Check size={15} /> Accept Request
                </button>
                <button
                  onClick={() => setConfirmDecline(req.id)}
                  className="flex-1 flex items-center justify-center gap-1.5 bg-red-50 hover:bg-red-100 text-[#DC2626] font-bold text-sm py-2.5 rounded-[10px] transition-colors"
                >
                  <X size={15} /> Decline
                </button>
                <button onClick={() => router.push("/provider/messages")} className="px-4 border border-[#E2E6F0] rounded-[10px] hover:bg-[#F8F9FC] transition-colors">
                  <MessageSquare size={15} className="text-[#565E74]" />
                </button>
              </div>
            )}
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-semibold text-[#565E74] mb-1">No requests found</p>
            <p className="text-sm text-[#9EA6BE]">New service requests will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
}
