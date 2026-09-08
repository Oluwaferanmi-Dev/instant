"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, Send, Paperclip, ArrowLeft, MoreVertical, ExternalLink, MessageSquare } from "lucide-react";

const conversations = [
  {
    id: "c1", name: "Mike's Plumbing", avatar: "MP", avatarBg: "from-blue-500 to-blue-700",
    lastMsg: "See you tomorrow at 10 AM!", time: "2:31 PM", unread: 1, online: true,
    booking: { service: "Drain Cleaning", date: "Sep 9, 10:00 AM", price: "$120", status: "Accepted" }
  },
  {
    id: "c2", name: "BrightSpark Electrical", avatar: "BS", avatarBg: "from-yellow-500 to-orange-500",
    lastMsg: "Thanks for reaching out. I can help with that.", time: "Yesterday", unread: 0, online: false,
    booking: { service: "Panel Inspection", date: "Sep 12, 2:00 PM", price: "$95", status: "Requested" }
  },
  {
    id: "c3", name: "FreshNest Cleaning", avatar: "FN", avatarBg: "from-purple-500 to-purple-700",
    lastMsg: "Your cleaning is confirmed for Friday!", time: "Mon", unread: 0, online: true,
    booking: { service: "Deep Clean", date: "Sep 13, 9:00 AM", price: "$150", status: "Accepted" }
  },
];

type Message = { id: string; text: string; from: "me" | "them" | "system"; time: string };

const initialMessages: Record<string, Message[]> = {
  c1: [
    { id: "1", text: "Hi Mike! I just submitted a service request for drain cleaning at my kitchen sink.", from: "me", time: "2:15 PM" },
    { id: "sys1", text: "Booking request sent — Drain Cleaning", from: "system", time: "2:15 PM" },
    { id: "2", text: "Hi Jane! I saw your request. Happy to help. That sounds like a grease/soap buildup situation. I have the right equipment for it.", from: "them", time: "2:22 PM" },
    { id: "3", text: "Great! Does tomorrow at 10 AM work for you?", from: "me", time: "2:25 PM" },
    { id: "sys2", text: "Booking accepted — Sep 9 at 10:00 AM", from: "system", time: "2:31 PM" },
    { id: "4", text: "See you tomorrow at 10 AM!", from: "them", time: "2:31 PM" },
  ],
  c2: [
    { id: "1", text: "Hi! I'm interested in having my electrical panel inspected.", from: "me", time: "Yesterday" },
    { id: "2", text: "Thanks for reaching out. I can help with that.", from: "them", time: "Yesterday" },
  ],
  c3: [
    { id: "1", text: "Can you do a deep clean on Friday?", from: "me", time: "Mon" },
    { id: "2", text: "Your cleaning is confirmed for Friday!", from: "them", time: "Mon" },
  ],
};

export default function CustomerMessagesPage() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string | null>("c1");
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [mobileShowConv, setMobileShowConv] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const selected = conversations.find((c) => c.id === selectedId);
  const currentMessages = selectedId ? messages[selectedId] || [] : [];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentMessages]);

  const sendMessage = () => {
    if (!input.trim() || !selectedId) return;
    const msg: Message = { id: Date.now().toString(), text: input.trim(), from: "me", time: "Just now" };
    setMessages((prev) => ({ ...prev, [selectedId]: [...(prev[selectedId] || []), msg] }));
    setInput("");
  };

  return (
    <div className="flex h-full bg-[#F8F9FC] min-h-[500px]">
      {/* Conversation list */}
      <div className={`${mobileShowConv ? "hidden" : "flex"} lg:flex flex-col w-full lg:w-80 bg-white border-r border-[#E2E6F0] shrink-0`}>
        <div className="p-4 border-b border-[#E2E6F0]">
          <h2 className="font-bold text-[#0D1B3E] mb-3">Messages</h2>
          <div className="flex items-center gap-2 bg-[#F8F9FC] rounded-[10px] px-3 py-2">
            <Search size={15} className="text-[#9EA6BE]" />
            <input type="text" placeholder="Search conversations" className="flex-1 text-sm outline-none bg-transparent text-[#0D1B3E] placeholder-[#9EA6BE]" />
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          {conversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => { setSelectedId(conv.id); setMobileShowConv(true); }}
              className={`w-full flex items-start gap-3 p-4 border-b border-[#F8F9FC] hover:bg-[#F8F9FC] transition-colors text-left ${selectedId === conv.id ? "bg-[#EEF2FF] border-l-2 border-l-[#002B95]" : ""}`}
            >
              <div className="relative shrink-0">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${conv.avatarBg} flex items-center justify-center text-white text-xs font-bold`}>
                  {conv.avatar}
                </div>
                {conv.online && <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <p className="font-semibold text-sm text-[#0D1B3E] truncate">{conv.name}</p>
                  <span className="text-[10px] text-[#9EA6BE] shrink-0 ml-2">{conv.time}</span>
                </div>
                <p className="text-xs text-[#565E74] truncate">{conv.lastMsg}</p>
              </div>
              {conv.unread > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#002B95] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                  {conv.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div className={`${!mobileShowConv ? "hidden" : "flex"} lg:flex flex-1 flex-col min-w-0`}>
        {selected ? (
          <>
            {/* Chat header */}
            <div className="bg-white border-b border-[#E2E6F0] px-4 py-3 flex items-center gap-3">
              <button onClick={() => setMobileShowConv(false)} className="lg:hidden p-1 text-[#565E74]">
                <ArrowLeft size={20} />
              </button>
              <div className="relative">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${selected.avatarBg} flex items-center justify-center text-white text-xs font-bold`}>
                  {selected.avatar}
                </div>
                {selected.online && <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />}
              </div>
              <div className="flex-1">
                <p className="font-bold text-[#0D1B3E] text-sm">{selected.name}</p>
                <p className="text-xs text-green-600 font-medium">{selected.online ? "Online" : "Offline"}</p>
              </div>
              <button className="p-2 rounded-lg text-[#565E74] hover:bg-[#F8F9FC]">
                <MoreVertical size={18} />
              </button>
            </div>

            {/* Booking context */}
            <div className="bg-[#EEF2FF] border-b border-[#D4DEFF] px-4 py-3 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-[#002B95]">{selected.booking.service}</p>
                <p className="text-xs text-[#565E74]">{selected.booking.date} · {selected.booking.price}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs bg-green-50 text-green-700 font-semibold px-2 py-0.5 rounded-full">{selected.booking.status}</span>
                <button
                  onClick={() => router.push("/customer/booking/bk001")}
                  className="text-xs text-[#002B95] font-medium hover:underline flex items-center gap-1"
                >
                  View booking <ExternalLink size={11} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-auto px-4 py-4 space-y-3">
              {currentMessages.map((msg) => (
                <div key={msg.id}>
                  {msg.from === "system" ? (
                    <div className="flex justify-center">
                      <span className="bg-[#F8F9FC] text-[#565E74] text-[11px] px-3 py-1.5 rounded-full border border-[#E2E6F0] font-medium">
                        {msg.text}
                      </span>
                    </div>
                  ) : (
                    <div className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[70%] rounded-[14px] px-4 py-2.5 ${
                        msg.from === "me"
                          ? "bg-[#002B95] text-white rounded-br-[4px]"
                          : "bg-white border border-[#E2E6F0] text-[#0D1B3E] rounded-bl-[4px]"
                      }`}>
                        <p className="text-sm leading-relaxed">{msg.text}</p>
                        <p className={`text-[10px] mt-1 ${msg.from === "me" ? "text-white/60" : "text-[#9EA6BE]"}`}>{msg.time}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Composer */}
            <div className="bg-white border-t border-[#E2E6F0] px-4 py-3">
              <div className="flex items-center gap-3">
                <button className="p-2 rounded-lg text-[#9EA6BE] hover:text-[#565E74] hover:bg-[#F8F9FC]">
                  <Paperclip size={18} />
                </button>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Type a message…"
                  className="flex-1 text-sm text-[#0D1B3E] placeholder-[#9EA6BE] outline-none bg-transparent"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim()}
                  className="w-9 h-9 rounded-full bg-[#002B95] hover:bg-[#001B63] disabled:opacity-40 flex items-center justify-center text-white transition-all"
                >
                  <Send size={15} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center text-[#9EA6BE]">
              <MessageSquare size={40} className="mx-auto mb-3 text-[#C8CFDF]" />
              <p className="font-semibold text-[#565E74]">Select a conversation</p>
              <p className="text-sm mt-1">Your messages will appear here</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
