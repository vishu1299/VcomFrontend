"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import Image from "next/image";
import {
  AlertCircle,
  Eye,
  Heart,
  Play,
  VolumeX,
} from "lucide-react";
import { DISCOVER_STREAM_PRODUCTS } from "../data/products";
import ShareIconImg from "@/components/ShareIconImg";

const STORE = {
  name: "Urbantech",
  handle: "@Urbantech",
  avatar:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&q=80",
};

export type StreamPanelHandle = {
  scrollUp: () => void;
  scrollDown: () => void;
};

/**
 * Vertical feed like YouTube Shorts:
 * - One tall card per “page” in the column (snap)
 * - No visible scrollbar
 * - Clear space between clips (page bg shows in the gap)
 */
const StreamPanel = forwardRef<StreamPanelHandle>(function StreamPanel(_, ref) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  /* One short ≈ full height of the scroll viewport — next clip snaps after a gap */
  const shortH =
    "h-[min(calc(100dvh-11rem),min(92dvh,820px))] min-h-[380px] sm:min-h-[420px]";

  const scrollByOneClip = (direction: "up" | "down") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const amount = Math.max(scroller.clientHeight - 12, 240);
    scroller.scrollBy({
      top: direction === "down" ? amount : -amount,
      behavior: "smooth",
    });
  };

  useImperativeHandle(ref, () => ({
    scrollUp: () => scrollByOneClip("up"),
    scrollDown: () => scrollByOneClip("down"),
  }));

  return (
    <div className="w-full">
      {/* Viewport: fixed height column — only this area scrolls (Shorts-style) */}
      <div
        className={[
          "relative w-full rounded-2xl overflow-hidden",
          "h-[min(calc(100dvh-9.5rem),840px)] min-h-[400px] max-h-[calc(100dvh-7rem)]",
        ].join(" ")}
      >
        <div
          ref={scrollerRef}
          className="h-full w-full overflow-y-scroll overflow-x-hidden overscroll-y-contain scroll-smooth snap-y snap-mandatory scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {DISCOVER_STREAM_PRODUCTS.map((product, i) => (
            <div
              key={product.id}
              className={[
                "snap-start snap-always shrink-0 w-full",
                "pb-4 last:pb-0",
                i === 0 ? "pt-0" : "",
              ].join(" ")}
            >
              <article
                className={[
                  "relative w-full overflow-hidden rounded-2xl text-white shadow-md ring-1 ring-black/10",
                  shortH,
                ].join(" ")}
              >
                <Image
                  src={product.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  priority={product.id === "1"}
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/20 to-black/75" />

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
                  <span className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-black/40 backdrop-blur-[2px] border border-white/25 shadow-lg">
                    <Play className="h-7 w-7 sm:h-8 sm:w-8 text-white fill-white ml-0.5" />
                  </span>
                </div>

                <div className="absolute top-0 left-0 right-0 p-3 sm:p-4 flex items-start justify-between gap-2 z-[2]">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden ring-2 ring-white/90 shrink-0">
                      <Image
                        src={STORE.avatar}
                        alt={STORE.name}
                        fill
                        className="object-cover"
                        sizes="44px"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-sm truncate drop-shadow-md">
                        {STORE.name}
                      </p>
                      <p className="text-xs text-white/90 truncate drop-shadow">
                        {STORE.handle}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      className="bg-yellow-400 text-black text-xs font-semibold px-2.5 py-1.5 rounded-lg hover:opacity-95 active:scale-[0.98] transition shadow-sm"
                    >
                      Follow +
                    </button>
                    <span className="flex items-center gap-1 text-xs sm:text-sm font-medium bg-black/45 backdrop-blur-sm px-2 py-1 rounded-lg tabular-nums">
                      <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                      {product.views ?? "2.5K"}
                    </span>
                  </div>
                </div>

                <div className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 sm:gap-4 z-[2]">
                  <button
                    type="button"
                    className="p-2 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/55 transition active:scale-95"
                    aria-label="Info"
                  >
                    <AlertCircle className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    className="p-2 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/55 transition active:scale-95"
                    aria-label="Mute"
                  >
                    <VolumeX className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    className="flex flex-col items-center gap-0.5 active:scale-95"
                    aria-label="Like"
                  >
                    <span className="p-2 rounded-full bg-black/40 backdrop-blur-sm">
                      <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold drop-shadow">
                      {product.likes ?? "13.4k"}
                    </span>
                  </button>
                  <button
                    type="button"
                    className="flex flex-col items-center gap-0.5 active:scale-95"
                    aria-label="Share"
                  >
                    <span className="p-2 rounded-full bg-black/40 backdrop-blur-sm">
                      <ShareIconImg className="w-5 h-5" size={24} />
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold drop-shadow">
                      {product.shares ?? "4k"}
                    </span>
                  </button>
                </div>

                <div className="absolute bottom-0 left-0 right-12 sm:right-14 p-3 sm:p-4 z-[2]">
                  <div className="flex flex-wrap gap-1.5 mb-1.5">
                    {(product.badges ?? ["SALE", "NEW"]).map((b) => (
                      <span
                        key={b}
                        className={
                          b === "SALE"
                            ? "bg-yellow-400 text-black px-2 py-0.5 text-[11px] sm:text-xs font-bold rounded"
                            : "bg-blue-500 text-white px-2 py-0.5 text-[11px] sm:text-xs font-bold rounded"
                        }
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-sm sm:text-[15px] font-semibold leading-snug line-clamp-2 drop-shadow-md pr-1">
                    {product.name}
                    {product.subtitle ? ` | ${product.subtitle}` : ""}
                  </h2>
                  <div className="flex items-end justify-between gap-2 mt-2.5">
                    <div className="flex items-baseline gap-2 min-w-0">
                      <span className="text-xl sm:text-2xl font-bold tabular-nums drop-shadow">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="line-through text-white/55 text-sm tabular-nums">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    </div>
                    <button
                      type="button"
                      className="shrink-0 bg-yellow-400 text-black px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1 hover:opacity-95 active:scale-[0.98] transition shadow-md"
                    >
                      Shop Now →
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
});

export default StreamPanel;
