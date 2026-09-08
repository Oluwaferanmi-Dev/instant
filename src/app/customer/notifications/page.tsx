"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Bell, Calendar, MessageSquare, DollarSign, Star, User, CheckCheck } from "lucide-react";

type Category = "all" | "booking" | "messages" | "payments" | "reviews" | "account";

const notifications = [
  {
    id: 1, category: "booking", icon: Calendar, iconBg: "bg-green-50", iconColor: "text-green-600",
    title: "Booking accepted", body: "Mike's Plumbing accepted your service request for Sep 9 at 10:00 AM.",
    time: "2 min ago", unread: true, action: "/customer/booking/bk001"
  },
  {
    id: 2, category: "messages", icon: MessageSquare, iconBg: "bg-blue-50", iconColor: "text-[#002B95]",
    title: "New message", body: "Mike's Plumbing: \"See you tomorrow at 10 AM!\"",
    time: "5 min ago", unread: true, action: "/customer/messages"
  },
  {
    id: 3, category: "booking", icon: Calendar, iconBg: "bg-blue-50", iconColor: "text-[#002B95]",
    title: "Upcoming appointment", body: "Reminder: Your plumbing appointment is tomorrow at 10:00 AM.",
    time: "1 hour ago", unread: false, action: "/customer/booking/bk001"
  },
  {
    id: 4, category: "payments", icon: DollarSign, iconBg: "bg-purple-50", iconColor: "text-purple-600",
    title: "Payment processed", body: "Your payment of $150 for FreshNest Cleaning was successful.",
    time: "Yesterday", unread: false, action: "/customer/payment/bk001"
  },
  {
    id: 5, category: "reviews", icon: Star, iconBg: "bg-amber-50", iconColor: "text-amber-600",
    title: "Leave a review", body: "How was FreshNest Cleaning? Share your experience to help others.",
    time: "Yesterday", unread: false, action: "/customer/review/bk001"
  },
  {
    id: 6, category: "account", icon: User, iconBg: "bg-gray-50", iconColor: "text-gray-600",
    title: "Profile updated", body: "Your account information was successfully updated.",
    time: "2 days ago", unread: false, action: "/customer/settings"
  },
];

const tabs: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "booking", label: "Bookings" },
  { key: "messages", label: "Messages" },
  { key: "payments", label: "Payments" },
  { key: "reviews", label: "Reviews" },
];

export default function NotificationsPage() {
  const router = useRouter();
  const [active, setActive] = useState<Category>("all");
  const [read, setRead] = useState<Set<number>>(new Set());

  const filtered = active === "all" ? notifications : notifications.filter((n) => n.category === active);
  const unreadCount = notifications.filter((n) => n.unread && !read.has(n.id)).length;

  const markAllRead = () => setRead(new Set(notifications.map((n) => n.id)));

  const handleClick = (n: typeof notifications[0]) => {
    setRead((prev) => new Set([...prev, n.id]));
    router.push(n.action);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-extrabold text-[#0D1B3E]">Notifications</h1>
          {unreadCount > 0 && (
            <p className="text-sm text-[#565E74] mt-1">{unreadCount} unread</p>
          )}
        </div>
        <button onClick={markAllRead} className="flex items-center gap-2 text-sm text-[#002B95] font-medium hover:text-[#001B63]">
          <CheckCheck size={16} /> Mark all read
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1 mb-6">
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
              active === key
                ? "bg-[#002B95] text-white"
                : "bg-white border border-[#E2E6F0] text-[#565E74] hover:bg-[#EEF2FF]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Notifications */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <Bell size={40} className="mx-auto mb-3 text-[#C8CFDF]" />
          <p className="font-semibold text-[#565E74]">You&apos;re all caught up</p>
          <p className="text-sm text-[#9EA6BE] mt-1">No notifications in this category</p>
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map((n) => {
            const isUnread = n.unread && !read.has(n.id);
            return (
              <div
                key={n.id}
                onClick={() => handleClick(n)}
                className={`flex items-start gap-4 p-4 rounded-[14px] cursor-pointer transition-all hover:shadow-sm hover:scale-[1.01] ${
                  isUnread ? "bg-white border border-[#D4DEFF]" : "bg-white border border-[#E2E6F0]"
                }`}
              >
                <div className={`w-10 h-10 rounded-[10px] ${n.iconBg} flex items-center justify-center ${n.iconColor} shrink-0`}>
                  <n.icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className={`text-sm font-semibold ${isUnread ? "text-[#0D1B3E]" : "text-[#565E74]"}`}>{n.title}</p>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-[#9EA6BE]">{n.time}</span>
                      {isUnread && <span className="w-2 h-2 rounded-full bg-[#002B95] shrink-0" />}
                    </div>
                  </div>
                  <p className="text-xs text-[#565E74] mt-1 leading-relaxed">{n.body}</p>
                  <p className="text-xs text-[#002B95] font-medium mt-2">Tap to view →</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
