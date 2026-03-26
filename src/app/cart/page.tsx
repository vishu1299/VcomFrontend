'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { CartItemCard } from './components/CartItemCard';
import { OrderSummary } from './components/OrderSummary';
import { RecentlyBrowsed } from './components/RecentlyBrowsed';

/**
 * Figma layout specs (Frame 2147226731):
 * - Padding: Top 20px, Right 216px, Bottom 40px, Left 216px
 * - Gap: 20px
 * - Flow: Vertical
 * - Width: Fill (1920px ref)
 * - Background: #F8F8FA (--color-cart-bg)
 *
 * Responsive: px-4 sm:px-6 md:px-12 lg:px-[108px] xl:px-[216px]
 * to preserve ratios while fitting mobile/tablet
 */
export default function CartPage() {
  const { cartItems, updateQuantity, removeItem } = useCart();

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  // Figma Order Summary: Price $399, Savings -$100, Delivery $2, Total $308
  const price = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const originalTotal = cartItems.reduce(
    (sum, item) => sum + (item.originalPrice ?? item.price) * item.quantity,
    0
  );
  const savings = Math.max(0, originalTotal - price);
  const delivery = 2;
  const total = price - savings + delivery;

  if (cartItems.length === 0) {
    return (
      <main
        className="min-h-screen"
        style={{ backgroundColor: 'var(--color-cart-bg)' }}
      >
        <div
          className="mx-auto w-full max-w-[1440px] px-4 py-4 sm:px-6 sm:py-6 lg:px-8 xl:px-10 2xl:px-12"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          <h1
            className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold mb-2"
            style={{ color: '#1F1D2B' }}
          >
            Your Cart
          </h1>
          <div className="flex flex-col items-center justify-center py-16 sm:py-24">
            <p
              className="text-[14px] sm:text-[16px] mb-6"
              style={{ color: 'var(--color-muted-alt-2)' }}
            >
              Your cart is empty
            </p>
            <Link
              href="/product-list"
              className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-[8px] font-medium text-[16px] transition hover:opacity-95"
              style={{
                backgroundColor: 'var(--color-cart-continue)',
                color: '#1F1D2B',
              }}
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: 'var(--color-cart-bg)' }}
    >
      <div
        className="mx-auto flex w-full max-w-[1440px] flex-col gap-5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8 xl:px-10 2xl:px-12"
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        {/* Full-width: title + Share aligned to page right (not only above cart column) */}
        <div className="flex flex-row items-start justify-between gap-4">
          <div className="min-w-0">
            <h1
              className="text-[24px] font-semibold sm:text-[28px] lg:text-[22px]"
              style={{ color: '#1F1D2B' }}
            >
              Cart ({cartItems.length})
            </h1>
            <p
              className="text-[12px] sm:text-[14px]"
              style={{ color: 'var(--color-muted-alt-2)' }}
            >
              Review your items before checkout
            </p>
          </div>
          <button
            type="button"
            className="inline-flex shrink-0 items-center gap-2 rounded-[8px] border px-4 py-2 text-[14px] font-medium text-black transition hover:bg-white/80 touch-manipulation"
            style={{
              borderColor: 'var(--color-border)',
              backgroundColor: '#fff',
            }}
            aria-label="Share cart"
          >
            <img src="/share1.svg" alt="" width={18} height={18} className="h-[18px] w-[18px] shrink-0 object-contain" />
            Share Cart
          </button>
        </div>

        {/* Cart items + Order Summary — same top alignment */}
        <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-12 lg:gap-[20px]">
          <div className="flex flex-col gap-5 overflow-y-auto lg:col-span-8">
            {cartItems.map((item) => (
              <CartItemCard
                key={item.id}
                item={item}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={removeItem}
              />
            ))}
          </div>

          <div className="lg:col-span-4 lg:sticky lg:top-6">
            <OrderSummary
              price={price}
              savings={savings}
              delivery={delivery}
              total={total}
            />
          </div>
        </div>

        {/* Bottom: Recently Browsed */}
        <RecentlyBrowsed />
      </div>
    </main>
  );
}
