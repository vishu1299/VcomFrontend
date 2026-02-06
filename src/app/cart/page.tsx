'use client';

import Link from 'next/link';
import { Share2 } from 'lucide-react';
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
          className="mx-auto w-full max-w-[1920px] px-4 pt-5 pb-10 sm:px-6 md:px-12 lg:px-[108px] xl:px-[216px]"
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
        className="mx-auto w-full max-w-[1920px] pt-5 pb-10 px-4 sm:px-6 md:px-12 lg:px-[108px] xl:px-[216px] flex flex-col gap-5"
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        {/* Top: Cart items + Order Summary (2-col on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-[20px]">
          {/* Left: Cart items list — Figma card 868×213 Hug */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h1
                  className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold"
                  style={{ color: '#1F1D2B' }}
                >
                  Cart ({cartItems.length})
                </h1>
                <p
                  className="text-[12px] sm:text-[14px] mt-1"
                  style={{ color: 'var(--color-muted-alt-2)' }}
                >
                  Review your items before checkout
                </p>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-2 text-[14px] font-medium self-start sm:self-center px-4 py-2 rounded-[8px] border transition hover:bg-white/80 touch-manipulation"
                style={{
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-muted-alt-2)',
                  backgroundColor: '#fff',
                }}
                aria-label="Share cart"
              >
                <Share2 className="w-4 h-4" strokeWidth={2} />
                Share Cart
              </button>
            </div>

            <div className="flex flex-col gap-5 overflow-y-auto">
              {cartItems.map((item) => (
                <CartItemCard
                  key={item.id}
                  item={item}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemove={removeItem}
                />
              ))}
            </div>
          </div>

          {/* Right: Order Summary — Figma 480 Fill x 156 Hug on mobile */}
          <div className="lg:col-span-4 lg:sticky lg:top-6 lg:self-start">
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
