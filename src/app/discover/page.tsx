"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowDown, ArrowUp, MessageCircleQuestion } from "lucide-react";
import StreamPanel, { type StreamPanelHandle } from "./components/StreamPanel";
import StoreChatTab from "./components/StoreChatTab";
import FAQTab from "./components/FAQTab";

type RightPanel = "chat" | "faq";

export default function DiscoverPage() {
  const [rightPanel, setRightPanel] = useState<RightPanel>("chat");
  const streamRef = useRef<StreamPanelHandle | null>(null);

  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav
          className="flex items-center h-11 gap-2 text-design-14 pt-2"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="text-gray-400 hover:text-black transition">
            Explore
          </Link>
          <span className="text-gray-400">{">"}</span>
          <Link
            href="/all-live-now"
            className="text-gray-400 hover:text-black transition"
          >
            Live Now
          </Link>
          <span className="text-gray-400">{">"}</span>
          <span className="text-black font-medium">Discover</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,34%)_48px_minmax(0,66%)] gap-4 lg:gap-3 pb-10 pt-2">
          {/* Left: Shorts-style scroll */}
          <div className="min-h-0 lg:sticky lg:top-20 lg:self-start lg:max-w-[365px] xl:max-w-[390px]">
            <StreamPanel ref={streamRef} />
          </div>

          {/* Middle controls: between video and chat */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => streamRef.current?.scrollUp()}
                className="h-11 w-11 rounded-full bg-white text-neutral-800 shadow-md border border-black/5 hover:bg-[#fafafa] transition flex items-center justify-center"
                aria-label="Scroll videos up"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => streamRef.current?.scrollDown()}
                className="h-11 w-11 rounded-full bg-white text-neutral-800 shadow-md border border-black/5 hover:bg-[#fafafa] transition flex items-center justify-center"
                aria-label="Scroll videos down"
              >
                <ArrowDown className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right: Store chat + FAQ */}
          <div className="flex flex-col rounded-2xl overflow-hidden border border-[var(--color-border)] bg-white shadow-sm min-h-[min(70vh,640px)] lg:min-h-[min(85vh,calc(100vh-10rem))] max-h-[min(85vh,calc(100vh-10rem))]">
            <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-[var(--color-border)] shrink-0 bg-white">
              <div className="flex items-center gap-2 min-w-0">
                <h2 className="text-base font-semibold text-[var(--color-black)] truncate">
                  Store Chat
                </h2>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-600 shrink-0">
                  <span
                    className="h-2 w-2 rounded-full bg-red-600 animate-pulse"
                    aria-hidden
                  />
                  LIVE
                </span>
              </div>
              <button
                type="button"
                onClick={() =>
                  setRightPanel((p) => (p === "faq" ? "chat" : "faq"))
                }
                className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-design-14 shrink-0 transition ${
                  rightPanel === "faq"
                    ? "border-[var(--color-main-blue)] bg-[var(--color-main-blue)]/5 text-[var(--color-main-blue)]"
                    : "border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-black)]"
                }`}
              >
                <MessageCircleQuestion className="w-4 h-4" />
                FAQ
              </button>
            </div>

            <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
              {rightPanel === "chat" ? <StoreChatTab /> : <FAQTab />}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
