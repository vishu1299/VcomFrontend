'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRef } from 'react';
import { XCircle, Heart, ShoppingCart as CartIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const MOCK_ORDER = {
  orderNumber: '123456',
  productImage: '/images/phone.png',
  productName: 'iPhone 17 Pro 256 GB: 15.93 cm (6.3") Display',
  price: '$299.00',
  color: 'Orange',
  quantity: 1,
  productNumber: '43-4234324',
  cancelledDate: '12, Nov, 2025',
};

const TOP_PRODUCTS = [
  { id: '1', name: 'Apple iPhone X 256GB 3GB RAM', price: '$29', originalPrice: '$33', image: '/images/phone2.jpg', sale: true, isNew: true },
  { id: '2', name: 'Apple iPhone X 256GB 3GB RAM', price: '$29', originalPrice: '$33', image: '/images/phone.png', sale: true, isNew: true },
  { id: '3', name: 'Apple iPhone X 256GB 3GB RAM', price: '$29', originalPrice: '$33', image: '/images/phone2.jpg', sale: true },
  { id: '4', name: 'Apple iPhone X 256GB 3GB RAM', price: '$29', originalPrice: '$33', image: '/images/phone.png', sale: true, isNew: true },
  { id: '5', name: 'Apple iPhone X 256GB 3GB RAM', price: '$29', originalPrice: '$33', image: '/images/phone2.jpg', sale: true },
];

function TopProductCard({ product }: { product: (typeof TOP_PRODUCTS)[0] }) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-white overflow-hidden shadow-sm shrink-0 w-[200px] sm:w-[220px]">
      <div className="relative aspect-square bg-gray-100">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
        <div className="absolute top-2 left-2 flex flex-wrap gap-1.5">
          {product.sale && (
            <span className="rounded px-1.5 py-0.5 text-[10px] font-medium text-black" style={{ backgroundColor: '#FFD93D' }}>
              SALE
            </span>
          )}
          {product.isNew && (
            <span className="rounded px-1.5 py-0.5 text-[10px] font-medium text-white" style={{ backgroundColor: '#60A5FA' }}>
              NEW
            </span>
          )}
        </div>
        <button type="button" className="absolute top-2 right-2 p-1.5 rounded-full bg-white/90 border border-gray-200" aria-label="Save">
          <Heart className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
        </button>
      </div>
      <div className="p-3">
        <p className="text-sm font-medium text-[var(--color-black-01)] line-clamp-2 mb-2">{product.name}</p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-black">{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm line-through" style={{ color: '#A6A6A6' }}>{product.originalPrice}</span>
            )}
          </div>
          <button
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg text-xs font-medium border text-black hover:bg-gray-50"
            style={{ borderColor: '#D2D2D2' }}
          >
            <CartIcon className="w-3.5 h-3.5" />
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CancelOrderSuccessPage() {
  const params = useParams();
  const orderId = params?.orderId as string;
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (dir: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const step = 240;
    carouselRef.current.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto py-6 lg:py-8 px-4 sm:px-6">
        <div className="p-2">
      {/* Top box: Order Cancelled Successfully + success tick + messages */}
      <div className="border border-[#D2D2D2] rounded-lg bg-white p-6 mb-6">
        <div className="flex items-start gap-3 mb-1">
          <h1 className="text-2xl font-bold" style={{ color: '#131313' }}>
            Order Cancelled Successfully
          </h1>
          <Image src="/success-tick.svg" alt="" width={30} height={30} className="shrink-0" />
        </div>
        <p className="text-sm text-black mb-1">We&apos;ve cancelled your order</p>
        <p className="text-sm text-black">
          Refund will be processed in:{' '}
          <span className="font-semibold text-black">3-5 Days</span>
        </p>
        {/* Product details box: left = image + details, right = two buttons */}
        <div className=" rounded-lg bg-white p-4 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex gap-4 flex-1 min-w-0">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden shrink-0">
                <Image src={MOCK_ORDER.productImage} alt={MOCK_ORDER.productName} fill className="object-contain" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-[#131313]">{MOCK_ORDER.productName}</p>
                <p className="text-base font-bold mt-0.5" style={{ color: '#1E3A8A' }}>{MOCK_ORDER.price}</p>
                <div className="flex items-center gap-4 mt-1">
                  <p className="text-xs">
                    <span style={{ color: '#767676' }}>Color: </span>
                    <span style={{ color: '#131313' }}>{MOCK_ORDER.color}</span>
                  </p>
                  <p className="text-xs">
                    <span style={{ color: '#767676' }}>QTY: </span>
                    <span style={{ color: '#131313' }}>{MOCK_ORDER.quantity}</span>
                  </p>
                </div>
                <p className="text-xs mt-1">
                  <span style={{ color: '#767676' }}>Product Number: </span>
                  <span style={{ color: '#131313' }}>{MOCK_ORDER.productNumber}</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:shrink-0">
              <Link
                href="/account/orders"
                className="min-h-[44px] w-[350px] max-w-full rounded-lg text-sm font-medium border border-[#D2D2D2] bg-white text-black hover:bg-gray-50 flex items-center justify-center"
              >
                Go to My Orders
              </Link>
              <Link
                href="/product-list"
                className="min-h-[44px] w-[350px] max-w-full rounded-lg text-sm font-medium border border-[#D2D2D2] bg-white text-black hover:bg-gray-50 flex items-center justify-center"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>



      {/* Order Updates — heading + CANCELLED badge + Check Shipping Status */}
      <div className="mb-10">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-[#131313]">Order Updates</h2>
            <span className="px-2.5 py-1 rounded-md text-xs font-semibold text-white uppercase tracking-wide" style={{ backgroundColor: '#ED0000' }}>
              Cancelled
            </span>
          </div>
          <Link href="/account/orders" className="text-sm underline" style={{ color: '#131313' }}>
            Check Shipping Status
          </Link>
        </div>

        {/* Steps box: border #D2D2D2, bg white */}
        <div className="border border-[#D2D2D2] rounded-lg bg-white p-6">
          {/* Timeline: one continuous line behind circles, steps centered in columns */}
          <div className="relative flex items-start">
            {/* Line only between circles: from right of Ordered to left of Cancelled */}
            <div
              className="absolute top-5 h-0.5 bg-[#1E3A8A]"
              style={{ left: 'calc(16.67% + 1.25rem)', right: 'calc(16.67% + 1.25rem)' }}
              aria-hidden
            />
            {[
              { label: 'Ordered', date: 'Tuesday, 11, Nov', type: 'cart' as const },
              { label: 'Processing', date: 'Tuesday, 11, Nov', type: 'processing' as const },
              { label: 'Cancelled', date: 'Wednesday, 12, Nov', type: 'xcircle' as const },
            ].map((step) => (
              <div key={step.label} className="flex-1 flex flex-col items-center min-w-0 relative z-10">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1E3A8A] shrink-0">
                  {step.type === 'cart' && <Image src="/cart.svg" alt="" width={20} height={20} />}
                  {step.type === 'processing' && <Image src="/processing.svg" alt="" width={20} height={20} />}
                  {step.type === 'xcircle' && <XCircle className="w-5 h-5 text-white" />}
                </div>
                <p className="text-xs font-semibold mt-2 text-[#131313] text-center">{step.label}</p>
                <p className="text-xs mt-0.5 text-center" style={{ color: '#767676' }}>{step.date}</p>
              </div>
            ))}
          </div>

          {/* Horizontal line full width to box edges, then Cancelled on */}
          <div className="-mx-6 mt-6">
            <hr className="border-0 h-px bg-[#D2D2D2]" />
          </div>
          <p className="text-sm text-center mt-4" style={{ color: '#131313' }}>
            Cancelled on: <span className="font-semibold" style={{ color: '#131313' }}>{MOCK_ORDER.cancelledDate}</span>
          </p>
        </div>
      </div>

      {/* Top Products — same design as save-for-later Item related to Saved Items */}
      <div className="mb-10 overflow-visible">
        <h2 className="text-lg font-bold text-[var(--color-black-01)] mb-4">Top Products</h2>
        <div className="relative overflow-visible">
          <button
            type="button"
            onClick={() => scrollCarousel('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center hover:bg-gray-50 shadow-md"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scroll-smooth py-2 pl-0 pr-0 scrollbar-hide"
          >
            {TOP_PRODUCTS.map((product) => (
              <TopProductCard key={product.id} product={product} />
            ))}
          </div>
          <button
            type="button"
            onClick={() => scrollCarousel('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center hover:bg-gray-50 shadow-md"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

        </div>
      {/* Footer links — outside the main box */}
      <footer className="pt-6 border-t border-[#D2D2D2] text-center text-sm text-[#6b7280] mt-6">
        <Link href="/" className="hover:text-[#1e3a8a] hover:underline">Home</Link>
        <span className="mx-2">|</span>
        <Link href="/account/orders" className="hover:text-[#1e3a8a] hover:underline">My Orders</Link>
        <span className="mx-2">|</span>
        <Link href="/help" className="hover:text-[#1e3a8a] hover:underline">Help Center</Link>
        <span className="mx-2">|</span>
        <Link href="/privacy" className="hover:text-[#1e3a8a] hover:underline">Privacy Policy</Link>
      </footer>
      </div>
    </div>
  );
}
