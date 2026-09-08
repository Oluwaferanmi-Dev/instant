type Status =
  | "requested" | "accepted" | "declined" | "cancelled"
  | "in_progress" | "completed" | "disputed" | "pending_payment"
  | "paid" | "verified" | "pending_verification" | "rejected";

const config: Record<Status, { label: string; bg: string; text: string; dot: string }> = {
  requested:            { label: "Requested",           bg: "bg-blue-50",   text: "text-blue-700",   dot: "bg-blue-500" },
  accepted:             { label: "Accepted",            bg: "bg-green-50",  text: "text-green-700",  dot: "bg-green-500" },
  declined:             { label: "Declined",            bg: "bg-red-50",    text: "text-red-700",    dot: "bg-red-500" },
  cancelled:            { label: "Cancelled",           bg: "bg-gray-100",  text: "text-gray-600",   dot: "bg-gray-400" },
  in_progress:          { label: "In Progress",         bg: "bg-blue-50",   text: "text-[#002B95]",  dot: "bg-[#002B95]" },
  completed:            { label: "Completed",           bg: "bg-[#ECFDF5]", text: "text-[#004117]",  dot: "bg-[#16A34A]" },
  disputed:             { label: "Disputed",            bg: "bg-orange-50", text: "text-orange-700", dot: "bg-orange-500" },
  pending_payment:      { label: "Pending Payment",     bg: "bg-yellow-50", text: "text-yellow-700", dot: "bg-yellow-500" },
  paid:                 { label: "Paid",                bg: "bg-[#ECFDF5]", text: "text-[#004117]",  dot: "bg-[#16A34A]" },
  verified:             { label: "Verified",            bg: "bg-[#ECFDF5]", text: "text-[#004117]",  dot: "bg-[#16A34A]" },
  pending_verification: { label: "Pending Review",      bg: "bg-yellow-50", text: "text-yellow-700", dot: "bg-yellow-500" },
  rejected:             { label: "Rejected",            bg: "bg-red-50",    text: "text-red-700",    dot: "bg-red-500" },
};

export function StatusBadge({ status, size = "sm" }: { status: Status; size?: "sm" | "md" }) {
  const c = config[status] || { label: status, bg: "bg-gray-100", text: "text-gray-700", dot: "bg-gray-400" };
  return (
    <span className={`inline-flex items-center gap-1.5 font-semibold rounded-full ${c.bg} ${c.text} ${
      size === "md" ? "px-3 py-1 text-sm" : "px-2.5 py-0.5 text-xs"
    }`}>
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      {c.label}
    </span>
  );
}
