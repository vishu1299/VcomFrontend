'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  X,
  Share2,
  Heart,
  Play,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Truck,
  RotateCcw,
  ArrowRight,
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import type { ProductDetail } from '../data/productDetails';

type QuickViewModalProps = {
  product: ProductDetail;
  onClose: () => void;
  onGoToProduct: () => void;
};

const MAIN_BLUE = '#1E3A8A';
const BORDER = '#E5E7EB';
const MUTED = '#767676';

export default function QuickViewModal({
  product,
  onClose,
  onGoToProduct,
}: QuickViewModalProps) {
  const router = useRouter();
  const { addToCart } = useCart();
  const images = product.images ?? [product.image];
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[1] ?? 'M');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.id ?? '');
  const [quantity, setQuantity] = useState(1);

  const discountPercent =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0;

  const handleAddToCart = useCallback(() => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
      });
    }
    onClose();
  }, [product, quantity, addToCart, onClose]);

  const handleBuyNow = useCallback(() => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
      });
    }
    onClose();
    router.push('/cart');
  }, [product, quantity, addToCart, onClose, router]);

  const goPrev = () =>
    setActiveImage((p) => (p === 0 ? images.length - 1 : p - 1));
  const goNext = () =>
    setActiveImage((p) => (p === images.length - 1 ? 0 : p + 1));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Quick view product"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden
      />

      {/* Modal - Figma: 1400 x 809 Hug, max-w for responsive */}
      <div
        className="relative w-full max-w-[1400px] max-h-[90vh] overflow-hidden rounded-[12px] bg-white shadow-xl flex flex-col lg:flex-row"
        style={{ fontFamily: 'var(--font-poppins)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 border flex items-center justify-center hover:bg-white transition"
          style={{ borderColor: BORDER }}
          aria-label="Close"
        >
          <X className="w-5 h-5" style={{ color: '#131313' }} />
        </button>

        {/* Left: Image gallery */}
        <div className="relative w-full lg:w-[45%] xl:w-[50%] shrink-0">
          <div
            className="relative aspect-square lg:aspect-[4/5]"
            style={{ backgroundColor: '#F7F7F7' }}
          >
            <Image
              src={images[activeImage] ?? product.image}
              alt={product.name}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 700px"
            />
            {product.hasVideo && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <div className="w-16 h-16 rounded-full bg-white border flex items-center justify-center">
                  <Play className="w-8 h-8 ml-1" style={{ color: MAIN_BLUE }} fill="currentColor" />
                </div>
              </div>
            )}
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border flex items-center justify-center hover:bg-white transition"
              style={{ borderColor: BORDER }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" style={{ color: '#131313' }} />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border flex items-center justify-center hover:bg-white transition"
              style={{ borderColor: BORDER }}
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" style={{ color: '#131313' }} />
            </button>
            <button
              type="button"
              className="absolute top-4 right-14 w-10 h-10 rounded-full bg-white/90 border flex items-center justify-center hover:bg-white transition"
              style={{ borderColor: BORDER }}
              aria-label="Add to wishlist"
            >
              <Heart className="w-5 h-5" style={{ color: '#131313' }} />
            </button>
          </div>
          {/* Thumbnails */}
          <div className="flex gap-2 p-4 overflow-x-auto">
            {images.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveImage(i)}
                className={`relative w-16 h-16 shrink-0 rounded-lg overflow-hidden border-2 transition ${
                  activeImage === i ? 'border-[#1E3A8A]' : 'border-transparent'
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" sizes="64px" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product info */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 flex flex-col gap-4">
          {/* Badges + actions */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex gap-2">
              {product.badges?.includes('SALE') && (
                <span className="bg-[#FBBF24] px-2 py-1 rounded-[4px] text-[10px] font-semibold text-[#131313]">
                  SALE
                </span>
              )}
              {product.badges?.includes('NEW') && (
                <span className="bg-[#1E3A8A] px-2 py-1 rounded-[4px] text-[10px] font-semibold text-white">
                  NEW
                </span>
              )}
            </div>
            <div className="flex gap-2">
              <button type="button" className="p-2 rounded-lg border" style={{ borderColor: BORDER }} aria-label="Share">
                <Share2 className="w-4 h-4" style={{ color: MUTED }} />
              </button>
              <button type="button" className="p-2 rounded-lg border" style={{ borderColor: BORDER }} aria-label="Wishlist">
                <Heart className="w-4 h-4" style={{ color: MUTED }} />
              </button>
            </div>
          </div>

          <h2 className="text-[18px] lg:text-[20px] font-semibold" style={{ color: '#131313' }}>
            {product.name}
          </h2>

          <div className="text-[14px]" style={{ color: MUTED }}>
            {product.sku && <p>SKU: {product.sku}</p>}
            {product.productNumber && <p>Product number: {product.productNumber}</p>}
            {product.category && <p>Category: {product.category}</p>}
          </div>

          {/* Size */}
          {product.sizes && product.sizes.length > 0 && (
            <div>
              <p className="text-[14px] font-medium mb-2" style={{ color: '#131313' }}>
                Select Size: {selectedSize}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedSize(s)}
                    className="min-h-[40px] px-4 rounded-lg border font-medium text-[14px] transition"
                    style={{
                      borderColor: selectedSize === s ? MAIN_BLUE : BORDER,
                      backgroundColor: selectedSize === s ? MAIN_BLUE : 'white',
                      color: selectedSize === s ? 'white' : '#131313',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color */}
          {product.colors && product.colors.length > 0 && (
            <div>
              <p className="text-[14px] font-medium mb-2" style={{ color: '#131313' }}>
                Select Color: {product.colors.find((c) => c.id === selectedColor)?.label ?? product.colors[0]?.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelectedColor(c.id)}
                    className={`w-8 h-8 rounded-full border-2 shrink-0 transition ${
                      selectedColor === c.id ? 'border-[#131313] ring-2 ring-offset-2 ring-[#131313]/30' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: c.hex, borderColor: c.hex === '#ffffff' ? BORDER : undefined }}
                    aria-label={c.label}
                  />
                ))}
              </div>
            </div>
          )}

          {product.description && (
            <p className="text-[13px]" style={{ color: MUTED }}>
              {product.description}
            </p>
          )}

          {/* Price */}
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-[24px] font-bold" style={{ color: '#131313' }}>
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-[14px] line-through" style={{ color: MUTED }}>
                  ${product.originalPrice.toFixed(2)}
                </span>
                {discountPercent > 0 && (
                  <span className="text-[12px] font-medium" style={{ color: '#16a34a' }}>
                    {discountPercent}% OFF
                  </span>
                )}
              </>
            )}
          </div>
          <p className="text-[12px]" style={{ color: MUTED }}>
            Inclusive of all taxes
          </p>

          {/* Go to Product Page */}
          <Link
            href={`/product-list/${product.id}`}
            onClick={onGoToProduct}
            className="inline-flex items-center gap-2 text-[14px] font-medium hover:underline"
            style={{ color: MAIN_BLUE }}
          >
            Go to Product Page
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Quantity */}
          <div className="flex items-center gap-2">
            <span className="text-[14px] font-medium" style={{ color: '#131313' }}>
              Quantity:
            </span>
            <div className="flex items-center border rounded-lg" style={{ borderColor: BORDER }}>
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-50"
              >
                −
              </button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-50"
              >
                +
              </button>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 min-h-[48px] flex items-center justify-center gap-2 rounded-lg border font-medium text-[14px] transition hover:bg-gray-50"
              style={{ borderColor: MAIN_BLUE, color: MAIN_BLUE }}
            >
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </button>
            <button
              type="button"
              onClick={handleBuyNow}
              className="flex-1 min-h-[48px] flex items-center justify-center rounded-lg font-medium text-[14px] text-white transition hover:opacity-95"
              style={{ backgroundColor: MAIN_BLUE }}
            >
              Buy now
            </button>
          </div>

          {/* Seller */}
          {product.seller && (
            <div className="pt-4 border-t" style={{ borderColor: BORDER }}>
              <p className="text-[14px] font-medium mb-2" style={{ color: '#131313' }}>
                Sold by @{product.seller}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="min-h-[36px] px-4 rounded-lg border font-medium text-[13px]"
                  style={{ borderColor: BORDER, color: '#131313' }}
                >
                  Chat with Seller
                </button>
                <button
                  type="button"
                  className="min-h-[36px] px-4 rounded-lg font-medium text-[13px]"
                  style={{ backgroundColor: '#FACC15', color: '#131313' }}
                >
                  Following
                </button>
              </div>
            </div>
          )}

          {/* Delivery */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[14px]" style={{ color: '#131313' }}>
              <Truck className="w-4 h-4 shrink-0" />
              <span>Free Delivery</span>
              <Link href="#" className="text-[14px] font-medium hover:underline" style={{ color: MAIN_BLUE }}>
                Enter your postal code for Delivery Availability
              </Link>
            </div>
            <div className="flex items-center gap-2 text-[14px]" style={{ color: '#131313' }}>
              <RotateCcw className="w-4 h-4 shrink-0" />
              <span>Free 30 Days Return</span>
              <Link href="#" className="text-[14px] font-medium hover:underline" style={{ color: MAIN_BLUE }}>
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
