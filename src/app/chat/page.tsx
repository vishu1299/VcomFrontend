"use client";

import { useState } from "react";
import Link from "next/link";

type ChatMessage = { id: string; text: string; isUser: boolean; time: string };

const CHAT_LIST = [
  { id: "urbantech", name: "Urbantech", lastMessage: "I want to know about the delivery of...", time: "12:40 PM", hasNew: true, avatar: "purple" },
  { id: "fusion", name: "Fusion Fashion", lastMessage: "Does this product have a consoles?", time: "12:40 PM", hasNew: false, avatar: "gray" },
  { id: "luxestore", name: "Luxestore", lastMessage: "When will my order ship?", time: "12:40 PM", hasNew: true, avatar: "pink" },
];

const QUICK_QUESTIONS = [
  "Ask about delivery",
  "Ask about product quality",
  "Request invoice",
  "Report issue",
  "Return/Replace query",
];

const INITIAL_MESSAGES: ChatMessage[] = [
  { id: "1", text: "I want to know about the delivery of my product", isUser: true, time: "02:24 PM" },
  { id: "2", text: "Yes sure let me check and tell", isUser: false, time: "02:24 PM" },
  { id: "3", text: "Can you tell me what's your order Number?", isUser: false, time: "02:24 PM" },
];

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function MoreVerticalIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  );
}

function PaperclipIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function InfoCircleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <circle cx="12" cy="12" r="11" fill="#2563EB" stroke="white" strokeWidth="1.5" />
      <path d="M12 11v5M12 8v.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="6" r="1.5" fill="white" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

export default function ChatPage() {
  const [inputValue, setInputValue] = useState("");
  const [showProductAndQuickQuestions, setShowProductAndQuickQuestions] = useState(true);

  // When user sends a message, hide product card and quick questions; messages stay the same 3
  const handleSend = () => {
    if (!inputValue.trim()) return;
    setShowProductAndQuickQuestions(false);
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <main className=" bg-gray-100 ">
      <div className="mx-auto min-h-screen max-w-[1100px] py-4 sm:py-6 overflow-x-hidden flex gap-4">
        {/* Left: Chat list ~30% */}
        <aside className="w-full md:w-[30%] lg:max-w-[360px] border-r border-gray-200 flex flex-col bg-white rounded-lg">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h1 className="text-lg font-bold text-[#131313]">Chat</h1>
            <div className="flex items-center gap-2">
              <button type="button" className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition" aria-label="Search">
                <SearchIcon />
              </button>
              <button type="button" className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition" aria-label="Menu">
                <MoreVerticalIcon />
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {CHAT_LIST.map((chat) => (
              <div
                key={chat.id}
                className={`flex items-start gap-3 px-4 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition ${chat.id === "urbantech" ? "bg-blue-50/50" : ""}`}
              >
                <div className="w-10 h-10 rounded-full shrink-0 overflow-hidden bg-gray-200 flex items-center justify-center">
                  {chat.id === "urbantech" ? (
                    <img src="/images/profileImage.png" alt={chat.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className={`w-full h-full flex items-center justify-center text-white text-sm font-bold ${chat.avatar === "pink" ? "bg-pink-500" : "bg-gray-400"
                      }`}>
                      {chat.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-[#131313] truncate">{chat.name}</span>
                    <span className="text-xs text-gray-500 shrink-0">{chat.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    {chat.hasNew && <InfoCircleIcon />}
                    <p className="text-xs text-gray-600 truncate">{chat.lastMessage}</p>
                  </div>
                </div>
                <button type="button" className="p-1.5 text-gray-400 hover:text-gray-600 shrink-0" aria-label="Options">
                  <MoreVerticalIcon />
                </button>
              </div>
            ))}
          </div>
        </aside>

        {/* Right: Active chat ~70% */}
        <div className="flex-1 flex flex-col min-w-0 bg-white rounded-lg">
          {/* Seller header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0">
                <img src="/images/profileImage.png" alt="Urban Tech" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#131313]">Urban Tech</span>
                  <img src="/images/verifiedBadge.png" alt="Verified" className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-green-500" aria-hidden />
                  <span className="text-xs text-gray-600">Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href="/seller-page"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#131313] border border-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50 transition"
              >
                View Store
                <ExternalLinkIcon />
              </Link>
              <button type="button" className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition" aria-label="Save">
                <BookmarkIcon />
              </button>
            </div>
          </div>

          {/* Chat content */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex items-center gap-4 my-4">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-500">2:00 AM</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

          </div>
            {/* Messages – static three only */}
                    <div className="p-4">
            {!showProductAndQuickQuestions &&

              <div className="space-y-3 mt-4">
                {INITIAL_MESSAGES.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] sm:max-w-[75%] rounded-xl px-4 py-2.5 ${msg.isUser
                          ? "bg-gray-200 text-[#131313] rounded-br-md"
                          : "bg-gray-200 text-[#131313] rounded-bl-md"
                        }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <div className={`flex items-center gap-1 mt-1 ${msg.isUser ? "justify-end" : "justify-start"}`}>
                        {msg.isUser && <CheckIcon />}
                        <span className="text-xs text-gray-500">{msg.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            }

            {/* Product card & Quick questions – hidden after user sends a message */}
            {showProductAndQuickQuestions && (
              <>
              
                <div className="max-w-md rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm mt-6">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-xs text-gray-600">Ordered: 12-Nov-2025</span>
                    <button type="button" className="text-gray-500 hover:text-gray-700" aria-label="View product">
                      <ExternalLinkIcon />
                    </button>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-16 h-16 rounded-lg bg-orange-200 shrink-0 overflow-hidden">
                      <img src="/images/customerReviews/product.png" alt="iPhone" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[#131313] line-clamp-2">iPhone 17 Pro 256 GB: 15.93 cm (6.3&quot;) Display</p>
                      <p className="text-sm font-bold text-[#131313] mt-0.5">$299.00</p>
                      <p className="text-xs text-gray-600 mt-1">Color: Orange · QTY: 1 · Size: 256GB</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-[#131313] mb-3">Quick Questions</p>
                  <div className="flex flex-wrap gap-2">
                    {QUICK_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        type="button"
                        className="text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-200 transition"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
            </div>

          {/* Message input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
              <button type="button" className="p-2 text-gray-500 hover:text-gray-700 rounded-lg transition" aria-label="Attach">
                <PaperclipIcon />
              </button>
              <button type="button" className="p-2 text-gray-500 hover:text-gray-700 rounded-lg transition" aria-label="Camera">
                <CameraIcon />
              </button>
              <input
                type="text"
                placeholder="Type your message"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 min-w-0 bg-transparent text-sm text-[#131313] placeholder:text-gray-400 focus:outline-none py-1"
              />
              <button
                type="button"
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="p-2 text-blue-600 hover:text-blue-700 disabled:text-gray-300 disabled:cursor-not-allowed rounded-lg transition"
                aria-label="Send"
              >
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
