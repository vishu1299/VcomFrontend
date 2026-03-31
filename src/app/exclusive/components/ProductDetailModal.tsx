"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Maximize2,
  AlertOctagon,
  ShoppingCart,
  ArrowUpRight,
  Play,
} from "lucide-react";
import type { ExclusiveProduct, ExclusiveProductBadge } from "../data/products";
import ShareProductModal from "@/components/product/ShareProductModal";
import ReportProductModal from "@/components/product/ReportProductModal";
import ShareIconImg from "@/components/ShareIconImg";

/* Modal-specific badge colors to match design: SALE golden, NEW blue */
const MODAL_BADGE_STYLES: Record<ExclusiveProductBadge, string> = {
  "10off": "bg-[#F9B400] text-white",
  exclusive: "bg-gradient-to-r from-[#5b21b6] to-[#7c3aed] text-white",
  new: "bg-[#3F8CFF] text-white",
  trending: "bg-[#ea580c] text-white",
  sale: "bg-[#F9B400] text-white",
  sold: "bg-[#F9B400] text-white",
  sponsored: "bg-[#3F8CFF] text-white",
};

const BADGE_LABELS: Record<ExclusiveProductBadge, string> = {
  "10off": "10% OFF",
  exclusive: "EXCLUSIVE",
  new: "NEW",
  trending: "TRENDING",
  sale: "SALE",
  sold: "SALE",
  sponsored: "SPONSORED",
};

const SIZES = ["S", "M", "L", "XL", "XXL"];
const COLORS = [
  { name: "Pink", hex: "#ec4899" },
  { name: "Red", hex: "#dc2626" },
  { name: "White", hex: "#ffffff" },
  { name: "Blue", hex: "#2563eb" },
  { name: "Black", hex: "#1f2937" },
  { name: "Yellow", hex: "#eab308" },
];

type ProductDetailModalProps = {
  product: ExclusiveProduct;
  isOpen: boolean;
  onClose: () => void;
  /** Override "Go to Product Page" URL (default: `/products/${id}`) */
  productPageHref?: string;
};

export default function ProductDetailModal({
  product,
  isOpen,
  onClose,
  productPageHref,
}: ProductDetailModalProps) {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const thumbScrollRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { name, price, originalPrice, image, badges = [], videoUrl } = product;

  const [sharePageUrl, setSharePageUrl] = useState("");
  useEffect(() => {
    setSharePageUrl(
      typeof window !== "undefined"
        ? `${window.location.origin}/products/${product.id}`
        : "",
    );
  }, [product.id]);
  const topBadges = badges.filter((b) => b !== "sponsored");
  // Thumbnails: first two as video thumbnails (with play icon), rest images
  const thumbnails = [image, image, image, image, image];
  const hasVideoOnThumb = (i: number) => videoUrl && (i === 0 || i === 1);
  const discount = originalPrice
    ? Math.round((1 - price / originalPrice) * 100)
    : 0;

  const scrollThumbs = (dir: "left" | "right") => {
    if (!thumbScrollRef.current) return;
    const step = 120;
    thumbScrollRef.current.scrollBy({
      left: dir === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const toggleVideo = () => {
    if (!videoUrl) return;
    if (videoPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play().catch(() => {});
    }
    setVideoPlaying(!videoPlaying);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal
      aria-label="Product details"
      onClick={onClose}
    >
      {/* Small: entire card scrolls; large: overflow hidden, only right column scrolls */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto lg:overflow-hidden bg-white rounded-xl shadow-2xl flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2 lg:top-4 lg:right-4 z-20 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-black shadow-lg"
          aria-label="Close"
        >
          <X className="w-4 h-4 lg:w-5 lg:h-5" />
        </button>

        <div className="absolute top-2 right-10 lg:top-4 lg:right-14 z-20 flex items-center gap-1.5 lg:gap-2">
          <button
            type="button"
            onClick={() => setShareModalOpen(true)}
            className="w-7 h-7 lg:w-9 lg:h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-black hover:bg-gray-50 shadow-sm transition"
            aria-label="Share"
          >
            <ShareIconImg className="w-3.5 h-3.5 lg:w-4 lg:h-4" size={20} />
          </button>
          <button
            type="button"
            onClick={() => setReportModalOpen(true)}
            className="w-7 h-7 lg:w-9 lg:h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-black hover:bg-gray-50 shadow-sm transition"
            aria-label="Report"
          >
            <AlertOctagon className="w-3.5 h-3.5 lg:w-4 lg:h-4" strokeWidth={2} />
          </button>
        </div>

        {/* Left - Media: smaller on small screens */}
        <div className="lg:w-1/2 p-3 lg:p-6 flex flex-col shrink-0 min-h-0 bg-[#f5f5f5] lg:rounded-l-xl">
          <div className="relative aspect-square bg-white rounded-lg overflow-hidden shadow-sm">
            {videoUrl && videoPlaying ? (
              <video
                ref={videoRef}
                src={videoUrl}
                className="w-full h-full object-cover"
                controls
                playsInline
                onPause={() => setVideoPlaying(false)}
                onEnded={() => setVideoPlaying(false)}
              />
            ) : (
              <>
                <Image
                  src={thumbnails[activeMediaIndex] ?? image}
                  alt={name}
                  fill
                  className="object-cover"
                  unoptimized={image.startsWith("http")}
                />
                {videoUrl && activeMediaIndex === 0 && (
                  <button
                    type="button"
                    onClick={toggleVideo}
                    className="absolute inset-0 flex items-center justify-center bg-black/5 hover:bg-black/10 transition"
                  >
                    <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-white flex items-center justify-center shadow-md border border-black/10">
                      <Play
                        className="w-6 h-6 lg:w-8 lg:h-8 text-[#1f2937] ml-0.5 lg:ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </button>
                )}
              </>
            )}
            <button
              type="button"
              className="absolute top-2 right-2 lg:top-3 lg:right-3 w-7 h-7 lg:w-9 lg:h-9 rounded-lg bg-gray-200/90 hover:bg-gray-300 flex items-center justify-center text-gray-700"
              aria-label="Expand fullscreen"
            >
              <Maximize2 className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
            </button>
          </div>
          <div className="flex items-center gap-1.5 lg:gap-2 mt-2 lg:mt-4">
            <button
              type="button"
              onClick={() => scrollThumbs("left")}
              className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center text-white transition"
              aria-label="Previous thumbnails"
            >
              <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
            <div
              ref={thumbScrollRef}
              className="flex items-center gap-2 lg:gap-3 overflow-x-auto overflow-y-hidden py-1 flex-1 min-w-0"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {thumbnails.map((t, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveMediaIndex(i)}
                  className={`shrink-0 w-12 h-12 lg:w-16 lg:h-16 rounded-lg overflow-hidden border-2 bg-white transition ${
                    activeMediaIndex === i
                      ? "border-[#3F8CFF] ring-1 ring-[#3F8CFF]"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={t}
                      alt=""
                      width={72}
                      height={72}
                      className="w-full h-full object-cover"
                      unoptimized={t.startsWith("http")}
                    />
                    {hasVideoOnThumb(i) && (
                      <div className="absolute bottom-0.5 left-0.5 lg:bottom-1 lg:left-1 w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-white/90 flex items-center justify-center shadow">
                        <Play
                          className="w-2 h-2 lg:w-2.5 lg:h-2.5 text-[#1f2937]"
                          fill="currentColor"
                        />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => scrollThumbs("right")}
              className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center text-white transition"
              aria-label="Next thumbnails"
            >
              <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
          </div>
        </div>

        {/* Right - Details: small = no inner scroll (whole card scrolls); large = overflow-y-auto */}
        <div className="lg:w-1/2 flex flex-col min-h-0 overflow-visible lg:overflow-y-auto">
          <div className="p-3 sm:p-4 lg:p-6 pt-3 lg:pt-4 pb-6 lg:pb-8 flex flex-col">
            <div className="flex flex-wrap gap-1.5 lg:gap-2 mb-1.5 lg:mb-2">
              {topBadges.map((b) => (
                <span
                  key={b}
                  className={`px-2 py-0.5 lg:px-2.5 lg:py-1 rounded text-[10px] lg:text-xs font-bold uppercase ${MODAL_BADGE_STYLES[b]}`}
                >
                  {BADGE_LABELS[b]}
                </span>
              ))}
            </div>
            <h2
              className="text-sm lg:text-lg font-bold text-[#1f2937] leading-tight mb-2 lg:mb-3 truncate"
              title={`${name} | Polo`}
            >
              {name} | Polo
            </h2>
            <div className="text-xs lg:text-sm text-[#4b5563] space-y-0.5 mb-2 lg:mb-3">
              <p>
                SKU:{" "}
                <span className="font-semibold text-[#1f2937]">
                  IP17-256-ORG
                </span>
              </p>
              <p>
                Model Number:{" "}
                <span className="font-semibold text-[#1f2937]">A3102</span>
              </p>
              <p>
                Category:{" "}
                <span className="font-semibold text-[#3F8CFF] underline cursor-pointer">
                  Fashion
                </span>
              </p>
            </div>

            <p className="text-xs lg:text-sm text-[#4b5563] mb-1 lg:mb-1.5">
              Select Size:{" "}
              <span className="font-semibold text-[#1f2937]">
                {selectedSize}
              </span>
            </p>
            <div className="flex flex-wrap gap-1.5 lg:gap-2 mb-1 lg:mb-1.5">
              {SIZES.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSelectedSize(s)}
                  className={`min-w-[36px] lg:min-w-[44px] h-8 lg:h-10 rounded-lg border text-xs lg:text-sm font-medium transition ${
                    selectedSize === s
                      ? "border-[#3F8CFF] text-[#3F8CFF] bg-white"
                      : "border-gray-300 bg-gray-100 text-[#4b5563] hover:border-gray-400"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="text-xs lg:text-sm text-[#3F8CFF] font-medium mb-2 lg:mb-3 flex items-center gap-1"
            >
              Size Chart <ChevronDown className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
            </button>

            <p className="text-xs lg:text-sm text-[#4b5563] mb-1 lg:mb-1.5">
              Select Color:{" "}
              <span className="font-semibold text-[#1f2937]">
                {COLORS[selectedColor].name}
              </span>
            </p>
            <div className="flex gap-2 lg:gap-3 mb-2 lg:mb-3">
              {COLORS.map((c, i) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setSelectedColor(i)}
                  className={`w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 transition shrink-0 ${
                    selectedColor === i
                      ? "border-gray-500 ring-2 ring-gray-400 ring-offset-1"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
            </div>

            <p className="text-xs lg:text-sm text-[#4b5563] mb-0.5">
              Model is 6&apos;0&quot;/185 cms and is wearing size M
            </p>
            <p className="text-xs lg:text-sm text-[#4b5563] mb-2 lg:mb-3">
              Cotton, Machine Wash.
            </p>

            <div className="flex items-baseline gap-2 lg:gap-3 mb-0.5">
              <span className="text-base lg:text-xl xl:text-2xl font-bold text-[#1f2937]">
                ${typeof price === "number" ? price.toFixed(2) : price}
              </span>
              {originalPrice != null && (
                <span className="text-xs lg:text-sm text-gray-400 line-through">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
              {discount > 0 && (
                <span className="text-xs lg:text-sm font-semibold text-[#3F8CFF]">
                  {discount}% OFF
                </span>
              )}
            </div>
            <p className="text-[10px] lg:text-xs text-gray-700 mb-3 lg:mb-4">
              Inclusive of all taxes
            </p>

            <Link
              href={productPageHref ?? `/products/${product.id}`}
              onClick={onClose}
              className="inline-flex items-center justify-center gap-1.5 lg:gap-2 w-full h-10 lg:h-14 rounded-lg border border-gray-300 bg-white text-[#1f2937] font-medium text-xs lg:text-sm mb-3 lg:mb-4 hover:bg-gray-50 transition"
            >
              Go to Product Page{" "}
              <ArrowUpRight className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
            </Link>

            <div className="flex flex-wrap items-center gap-2 lg:gap-3">
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  readOnly
                  className="w-10 lg:w-12 h-9 lg:h-11 text-center text-xs lg:text-sm font-medium text-[#1f2937] border-0 bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <div className="flex flex-col border-l border-gray-300">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-6 lg:w-8 h-4 lg:h-5 flex items-center justify-center text-gray-700 hover:bg-gray-100 border-b border-gray-300"
                  >
                    <ChevronUp className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-6 lg:w-8 h-4 lg:h-5 flex items-center justify-center text-gray-700 hover:bg-gray-100"
                  >
                    <ChevronDown className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
                  </button>
                </div>
              </div>
              <button
                type="button"
                className="flex-1 min-w-[100px] lg:min-w-[140px] h-10 lg:h-12 rounded-lg border-2 border-[#3F8CFF] bg-white text-[#3F8CFF] font-semibold flex items-center justify-center gap-1.5 lg:gap-2 text-xs lg:text-sm hover:bg-blue-50 transition"
              >
                <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5" /> Add to Cart
              </button>
              <button
                type="button"
                className="flex-1 min-w-[80px] lg:min-w-[120px] h-10 lg:h-12 rounded-lg bg-[#2F58B1] text-white font-semibold text-xs lg:text-base hover:bg-[#254a94] transition"
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>

      <ShareProductModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        productName={name}
        productUrl={sharePageUrl || undefined}
      />
      <ReportProductModal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
        productName={name}
      />
    </div>
  );
}
