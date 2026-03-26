"use client";

import { useState, useEffect, useRef } from "react";
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

function ChevronLeftIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

export default function ChatPage() {
  const [selectedChatId, setSelectedChatId] = useState<string>(CHAT_LIST[0].id);
  /** Mobile: list first; tap chat opens conversation; back returns to list. Desktop ignores this (both columns always visible). */
  const [mobileShowConversation, setMobileShowConversation] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [showProductAndQuickQuestions, setShowProductAndQuickQuestions] = useState(true);
  /** Very narrow mobile: header uses ⋮ menu for View Store + Report */
  const [chatHeaderMenuOpen, setChatHeaderMenuOpen] = useState(false);
  const chatHeaderMenuRef = useRef<HTMLDivElement>(null);

  const activeChat = CHAT_LIST.find((c) => c.id === selectedChatId) ?? CHAT_LIST[0];

  useEffect(() => {
    if (!chatHeaderMenuOpen) return;
    const onDown = (e: MouseEvent) => {
      if (chatHeaderMenuRef.current?.contains(e.target as Node)) return;
      setChatHeaderMenuOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [chatHeaderMenuOpen]);

  useEffect(() => {
    if (!mobileShowConversation) setChatHeaderMenuOpen(false);
  }, [mobileShowConversation]);

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
    <main className="bg-gray-100">
      <div className="mx-auto flex min-h-[100dvh] max-w-[1100px] gap-4 overflow-x-hidden py-4 sm:min-h-screen sm:py-6">
        {/* Left: Chat list ~30% — full width on mobile until a chat is opened */}
        <aside
          className={`min-h-0 w-full min-w-0 flex-col rounded-lg border-r border-gray-200 bg-white md:w-[30%] lg:max-w-[360px] ${
            mobileShowConversation ? "hidden md:flex" : "flex"
          }`}
        >
          <div className="flex items-center justify-between border-b border-gray-200 p-4">
            <h1 className="text-lg font-bold text-[#131313]">Chat</h1>
            <div className="flex items-center gap-2">
              <button type="button" className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100" aria-label="Search">
                <SearchIcon />
              </button>
              <button type="button" className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100" aria-label="Menu">
                <MoreVerticalIcon />
              </button>
            </div>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto">
            {CHAT_LIST.map((chat) => (
              <div
                key={chat.id}
                role="button"
                tabIndex={0}
                onClick={() => {
                  setSelectedChatId(chat.id);
                  setMobileShowConversation(true);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedChatId(chat.id);
                    setMobileShowConversation(true);
                  }
                }}
                className={`flex w-full cursor-pointer items-start gap-3 border-b border-gray-100 px-4 py-3 text-left transition hover:bg-gray-50 ${
                  chat.id === selectedChatId ? "bg-blue-50/50" : ""
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-200">
                  {chat.id === "urbantech" ? (
                    <img src="/images/profileImage.png" alt={chat.name} className="h-full w-full object-cover" />
                  ) : (
                    <span
                      className={`flex h-full w-full items-center justify-center text-sm font-bold text-white ${
                        chat.avatar === "pink" ? "bg-pink-500" : "bg-gray-400"
                      }`}
                    >
                      {chat.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate text-sm font-semibold text-[#131313]">{chat.name}</span>
                    <span className="shrink-0 text-xs text-gray-500">{chat.time}</span>
                  </div>
                  <div className="mt-0.5 flex items-center gap-1.5">
                    {/* {chat.hasNew && <InfoCircleIcon />} */}
                    <p className="truncate text-xs text-gray-600">{chat.lastMessage}</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="shrink-0 p-1.5 text-gray-400 hover:text-gray-600"
                  aria-label="Options"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MoreVerticalIcon />
                </button>
              </div>
            ))}
          </div>
        </aside>

        {/* Right: Active chat ~70% — hidden on mobile until a chat is selected */}
        <div
          className={`min-h-0 min-w-0 flex-1 flex-col rounded-lg bg-white ${
            mobileShowConversation ? "flex" : "hidden md:flex"
          }`}
        >
          {/* Seller header — compact ⋮ menu on very narrow mobile (max-[420px]) */}
          <div className="flex items-center justify-between gap-2 border-b border-gray-200 p-3 max-[420px]:max-md:p-2 sm:p-4">
            <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setMobileShowConversation(false)}
                className="-ml-1 shrink-0 rounded-lg p-2 text-[#131313] hover:bg-gray-100 md:hidden"
                aria-label="Back to chat list"
              >
                <ChevronLeftIcon />
              </button>
              <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-gray-200 sm:h-10 sm:w-10">
                {activeChat.id === "urbantech" ? (
                  <img src="/images/profileImage.png" alt={activeChat.name} className="h-full w-full object-cover" />
                ) : (
                  <span
                    className={`flex h-full w-full items-center justify-center text-sm font-bold text-white ${
                      activeChat.avatar === "pink" ? "bg-pink-500" : "bg-gray-400"
                    }`}
                  >
                    {activeChat.name.charAt(0)}
                  </span>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex min-w-0 items-center gap-1.5">
                  <span className="truncate text-sm font-bold text-[#131313]">{activeChat.name}</span>
                  {activeChat.id === "urbantech" && (
                    <img
                      src="/images/verifiedBadge.png"
                      alt="Verified"
                      className="h-5 w-5 shrink-0 max-[420px]:max-md:hidden sm:h-6 sm:w-6"
                    />
                  )}
                </div>
                <div className="mt-0.5 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-500 sm:h-2 sm:w-2" aria-hidden />
                  <span className="text-[11px] text-gray-600 sm:text-xs">Online</span>
                </div>
              </div>
            </div>

            {/* Full actions: wider mobile + desktop */}
            <div className="hidden min-w-0 shrink-0 items-center gap-1 sm:gap-2 min-[421px]:max-md:flex md:flex">
              <Link
                href="/seller-page"
                className="inline-flex max-w-[140px] items-center gap-1 truncate rounded-lg border border-gray-200 px-2 py-2 text-xs font-medium text-[#131313] transition hover:bg-gray-50 sm:max-w-none sm:gap-1.5 sm:px-3 sm:text-sm"
              >
                View Store
                <ExternalLinkIcon />
              </Link>
              <button type="button" className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100" aria-label="Report">
                <img src="/report.svg" alt="" width={20} height={20} className="h-5 w-5 object-contain" />
              </button>
            </div>

            {/* Very narrow mobile: ⋮ opens View Store + Report */}
            <div
              ref={chatHeaderMenuRef}
              className="relative hidden shrink-0 max-[420px]:flex md:hidden"
            >
              <button
                type="button"
                onClick={() => setChatHeaderMenuOpen((o) => !o)}
                className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100"
                aria-label="Chat actions"
                aria-expanded={chatHeaderMenuOpen}
              >
                <MoreVerticalIcon />
              </button>
              {chatHeaderMenuOpen && (
                <div
                  className="absolute right-0 top-full z-30 mt-1 min-w-[180px] overflow-hidden rounded-xl border border-gray-200 bg-white py-1 shadow-lg"
                  role="menu"
                >
                  <Link
                    href="/seller-page"
                    role="menuitem"
                    className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-[#131313] transition hover:bg-gray-50"
                    onClick={() => setChatHeaderMenuOpen(false)}
                  >
                    <ExternalLinkIcon />
                    View Store
                  </Link>
                  <button
                    type="button"
                    role="menuitem"
                    className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm font-medium text-[#131313] transition hover:bg-gray-50"
                    onClick={() => setChatHeaderMenuOpen(false)}
                  >
                    <img src="/report.svg" alt="" width={20} height={20} className="h-5 w-5 object-contain" />
                    Report
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Chat content — scroll region; product + quick questions pinned to bottom when shown */}
          <div className="min-h-0 flex-1 overflow-y-auto p-4">
            <div className="flex min-h-full flex-col">
              <div className="my-4 flex shrink-0 items-center gap-4">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-xs text-gray-500">2:00 AM</span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>

              {!showProductAndQuickQuestions && (
                <div className="space-y-3">
                  {INITIAL_MESSAGES.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[85%] rounded-xl px-4 py-2.5 sm:max-w-[75%] ${
                          msg.isUser ? "rounded-br-md bg-gray-200 text-[#131313]" : "rounded-bl-md bg-gray-200 text-[#131313]"
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                        <div className={`mt-1 flex items-center gap-1 ${msg.isUser ? "justify-end" : "justify-start"}`}>
                          {msg.isUser && <CheckIcon />}
                          <span className="text-xs text-gray-500">{msg.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {showProductAndQuickQuestions && (
                <div className="mt-auto flex w-full max-w-md flex-col gap-6 pb-1 pt-2">
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm">
                    <div className="mb-3 flex items-start justify-between gap-2">
                      <span className="text-xs text-gray-600">Ordered: 12-Nov-2025</span>
                      <button type="button" className="text-gray-500 hover:text-gray-700" aria-label="View product">
                        <ExternalLinkIcon />
                      </button>
                    </div>
                    <div className="flex gap-3">
                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-orange-200">
                        <img src="/images/customerReviews/product.png" alt="iPhone" className="h-full w-full object-cover" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="line-clamp-2 text-sm font-medium text-[#131313]">iPhone 17 Pro 256 GB: 15.93 cm (6.3&quot;) Display</p>
                        <p className="mt-0.5 text-sm font-bold text-[#131313]">$299.00</p>
                        <p className="mt-1 text-xs text-gray-600">Color: Orange · QTY: 1 · Size: 256GB</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-sm font-semibold text-[#131313]">Quick Questions</p>
                    <div className="flex flex-wrap gap-2">
                      {QUICK_QUESTIONS.map((q) => (
                        <button
                          key={q}
                          type="button"
                          className="rounded-lg border border-gray-200 bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Message input */}
          <div className="border-t border-gray-200 p-4">
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
