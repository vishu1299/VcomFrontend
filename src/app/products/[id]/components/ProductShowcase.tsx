"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Play,
  Truck,
  RotateCcw,
  ShoppingCart,
  User,
  AlertOctagon,
  MessageCircle,
  Check,
} from "lucide-react";
import type { ProductDetail } from "../data/product-detail";
import ShareProductModal from "@/components/product/ShareProductModal";
import ReportProductModal from "@/components/product/ReportProductModal";
import ShareIconImg from "@/components/ShareIconImg";
import CheckDeliveryModal from "@/components/product/CheckDeliveryModal";

const BADGE_STYLES: Record<string, string> = {
  sale: "bg-[#F9B400] text-white",
  new: "bg-[#3F8CFF] text-white",
  exclusive: "bg-gradient-to-r from-[#5b21b6] to-[#7c3aed] text-white",
};

export default function ProductShowcase({
  product,
}: {
  product: ProductDetail;
}) {
  const [mainIndex, setMainIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState(0);
  const [quantity, setQuantity] = useState(3);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [pincodeFieldOpen, setPincodeFieldOpen] = useState(false);
  const [deliveryModalOpen, setDeliveryModalOpen] = useState(false);
  const [pincode, setPincode] = useState("");
  const [sharePageUrl, setSharePageUrl] = useState("");
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSharePageUrl(
      typeof window !== "undefined"
        ? `${window.location.origin}/products/${product.id}`
        : "",
    );
  }, [product.id]);

  const {
    name,
    price,
    originalPrice,
    images,
    badges = [],
    videoUrl,
    productNumber,
    category,
    colours,
    storageOptions,
    sellerName,
  } = product;
  const discount = originalPrice
    ? Math.round((1 - price / originalPrice) * 100)
    : 0;
  const topBadges = (badges as string[]).filter(
    (b) => b === "sale" || b === "new",
  );

  const scrollThumbs = (dir: "left" | "right") => {
    if (!thumbRef.current) return;
    thumbRef.current.scrollBy({
      left: dir === "left" ? -100 : 100,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 p-4 sm:p-5 lg:p-6 items-stretch">
        {/* Left - Gallery */}
        <div className="flex flex-col min-h-0">
          <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
            {videoUrl && videoPlaying ? (
              <video
                src={videoUrl}
                className="w-full h-full object-cover"
                controls
                playsInline
                onEnded={() => setVideoPlaying(false)}
              />
            ) : (
              <>
                <Image
                  src={images[mainIndex] ?? product.image}
                  alt={name}
                  fill
                  className="object-cover"
                  unoptimized={String(images[0]).startsWith("http")}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {videoUrl && (
                  <button
                    type="button"
                    onClick={() => setVideoPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition"
                  >
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg border border-gray-200">
                      <Play
                        className="w-7 h-7 text-gray-700 ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </button>
                )}
              </>
            )}
            <button
              type="button"
              onClick={() => scrollThumbs("left")}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border border-gray-200 flex items-center justify-center shadow hover:bg-white"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              type="button"
              onClick={() => scrollThumbs("right")}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border border-gray-200 flex items-center justify-center shadow hover:bg-white"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
          <div
            ref={thumbRef}
            className="flex gap-2 mt-3 overflow-x-auto py-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {images.slice(0, 5).map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setMainIndex(i)}
                className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${mainIndex === i ? "border-[#3F8CFF]" : "border-gray-200"}`}
              >
                <Image
                  src={img}
                  alt=""
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                  unoptimized={String(img).startsWith("http")}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right - Details: compact height to match left, price + timer on one line */}
        <div className="flex flex-col relative min-h-0 overflow-y-auto">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <div className="flex flex-wrap gap-1.5">
              {topBadges.map((b) => (
                <span
                  key={b}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${BADGE_STYLES[b] ?? "bg-gray-200 text-gray-700"}`}
                >
                  {b === "sale" ? "SALE" : "NEW"}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => setShareModalOpen(true)}
                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-black hover:bg-gray-50 shadow-sm"
                aria-label="Share"
              >
                <ShareIconImg className="w-4 h-4" size={20} />
              </button>
              <button
                type="button"
                onClick={() => setReportModalOpen(true)}
                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-black hover:bg-gray-50 shadow-sm"
                aria-label="Report"
              >
                <AlertOctagon className="w-4 h-4" strokeWidth={2} />
              </button>
            </div>
          </div>
          <h1 className="text-base sm:text-lg font-bold text-black mb-1 leading-tight">
            {name}
          </h1>
          <p className="text-xs text-black mb-0.5">
            Product number <span className="font-bold">{productNumber}</span>
          </p>
          <p className="text-xs text-black mb-2">
            Category: <span className="font-bold">{category}</span>
          </p>

          <p className="text-xs text-black mb-1">
            Colours:{" "}
            <span className="font-bold">
              {colours[selectedColor]?.name ?? colours[0].name}
            </span>
          </p>
          <div className="flex gap-1.5 mb-2">
            {colours.map((c, i) => (
              <button
                key={c.name}
                type="button"
                onClick={() => setSelectedColor(i)}
                className={`w-6 h-6 rounded-full border-2 shrink-0 ${selectedColor === i ? "border-gray-500" : "border-gray-200"}`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </div>

          <p className="text-xs text-black mb-1">
            Size:{" "}
            <span className="font-bold">{storageOptions[selectedStorage]}</span>
          </p>
          <div className="flex gap-1.5 mb-3">
            {storageOptions.map((s, i) => (
              <button
                key={s}
                type="button"
                onClick={() => setSelectedStorage(i)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium ${selectedStorage === i ? "border-[#2563eb] text-[#2563eb] bg-white" : "border-gray-300 text-gray-700 bg-white hover:border-gray-400"}`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Price, original, discount and timer on one line */}
          <div className="flex items-center gap-2 flex-wrap mb-3">
            <span className="text-lg sm:text-xl font-bold text-[#2563eb]">
              ${typeof price === "number" ? price.toFixed(2) : price}
            </span>
            {originalPrice != null && (
              <span className="text-sm text-gray-400 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
            {discount > 0 && (
              <span className="text-xs font-medium text-[#2563eb]">
                {discount}% OFF
              </span>
            )}
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#F9B400] text-black text-xs font-medium ml-auto">
              02:46:03
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <div className="flex border border-gray-300 rounded-lg overflow-hidden bg-white">
              <input
                type="text"
                readOnly
                value={quantity}
                className="w-10 h-8 text-center text-xs font-medium text-black border-0 bg-transparent"
              />
              <div className="flex flex-col border-l border-gray-300">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-6 h-4 flex items-center justify-center text-gray-700 hover:bg-gray-100 border-b border-gray-300"
                >
                  <ChevronUp className="w-3 h-3" />
                </button>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-6 h-4 flex items-center justify-center text-gray-700 hover:bg-gray-100"
                >
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>
            </div>
            <button
              type="button"
              className="h-8 px-4 rounded-lg border-2 border-[#2563eb] bg-white text-[#2563eb] font-semibold flex items-center gap-1.5 hover:bg-blue-50 text-xs"
            >
              <ShoppingCart className="w-4 h-4" /> Add to Cart
            </button>
            <button
              type="button"
              className="h-8 px-4 rounded-lg bg-[#1e3a8a] text-white font-semibold hover:bg-[#1e3a8a]/90 text-xs"
            >
              Buy now
            </button>
          </div>

          <div className="border-t border-gray-200 pt-2 mb-2">
            <p className="text-xs font-semibold text-black mb-2">
              Seller Details
            </p>
            <div className="border border-gray-200 rounded-lg p-2 mb-2 bg-white">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden shrink-0">
                  <User className="w-4 h-4 text-gray-700" />
                </div>
                <span className="text-xs text-black">
                  Sold by <span className="font-bold">{sellerName}</span>
                </span>
              </div>
              <div className="flex gap-1.5">
                <button
                  type="button"
                  className="text-xs font-medium text-gray-700 border border-gray-300 bg-white px-3 py-1.5 rounded-lg hover:bg-gray-50 flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> Chat with Seller
                </button>
                <button
                  type="button"
                  className="text-xs font-medium text-white bg-[#F9B400] px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-[#e5a306]"
                >
                  <Check className="w-3.5 h-3.5" /> Following
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {!pincodeFieldOpen ? (
              <div className="bg-white border border-gray-200 rounded-lg p-2.5 flex items-start gap-2">
                <Truck className="w-4 h-4 text-black shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-xs font-medium text-black">Free Delivery</p>
                  <button
                    type="button"
                    onClick={() => setPincodeFieldOpen(true)}
                    className="text-xs text-[#2563eb] underline mt-0.5 text-left"
                  >
                    Enter your postal code for Delivery Availability
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white border border-gray-200 rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <div className="flex items-center flex-1 min-w-0 gap-2 border-b-2 border-gray-500 pb-1">
                  <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-black shrink-0" strokeWidth={2} />
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="110056"
                    maxLength={6}
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value.replace(/\D/g, ""))}
                    className="flex-1 min-w-0 py-0.5 bg-transparent text-sm font-medium text-black placeholder:text-gray-500 focus:outline-none"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setDeliveryModalOpen(true)}
                  className="shrink-0 px-4 py-2 sm:px-5 sm:py-2.5 rounded-md bg-[#FFBF00] hover:bg-[#e5ac00] text-black text-sm font-semibold transition"
                >
                  Check
                </button>
              </div>
            )}
            <div className="bg-white border border-gray-200 rounded-lg p-2.5 flex items-start gap-2">
              <RotateCcw className="w-4 h-4 text-black shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="text-xs font-medium text-black">
                  Return Delivery
                </p>
                <p className="text-xs text-gray-700 mt-0.5">
                  Free 30 Days Delivery Returns.{" "}
                  <button
                    type="button"
                    className="text-[#2563eb] underline font-medium"
                  >
                    Details
                  </button>
                </p>
              </div>
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
      <CheckDeliveryModal
        isOpen={deliveryModalOpen}
        onClose={() => setDeliveryModalOpen(false)}
        productName={name}
        productImage={images[0] ?? product.image}
        productSubtext={`${name} ${storageOptions[selectedStorage] ?? ""}`.trim()}
        initialPincode={pincode}
      />
    </div>
  );
}
