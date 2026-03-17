'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { LogOut } from 'lucide-react';

const TABS = [
  { id: 'overview', label: 'Account Overview', href: '/account' },
  { id: 'orders', label: 'My Orders', href: '/account/orders' },
  { id: 'followings', label: 'My Followings', href: '/account/following' },
  { id: 'saved', label: 'Saved for later', href: '/account/save-for-later' },
  { id: 'wishlist', label: 'Wishlist', href: '/account/wishlist' },
  { id: 'address', label: 'Saved Address', href: '/account/address' },
  { id: 'payment', label: 'Payment Method', href: '/account/payment' },
] as const;

function getActiveTab(pathname: string): string {
  if (pathname === '/account' || pathname === '/account/') return 'overview';
  if (pathname.startsWith('/account/orders')) return 'orders';
  if (pathname.startsWith('/account/following')) return 'followings';
  if (pathname.startsWith('/account/save-for-later')) return 'saved';
  if (pathname.startsWith('/account/wishlist') || pathname.startsWith('/wishlist')) return 'wishlist';
  if (pathname.startsWith('/account/address')) return 'address';
  if (pathname.startsWith('/account/payment')) return 'payment';
  return 'overview';
}

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const activeTab = getActiveTab(pathname);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <div
      className="bg-[#f5f5f5]"
      style={{ fontFamily: 'var(--font-poppins)' }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-3">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Shared header tabs */}
          <div className="flex items-center justify-between border-b border-[var(--color-border)] px-6 py-4">
            <div className="flex items-center gap-2 overflow-x-auto">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <Link key={tab.id} href={tab.href}>
                    <span
                      className={`inline-flex items-center px-3 py-2 rounded-lg text-[14px] font-medium whitespace-nowrap transition
                        ${isActive
                          ? 'bg-[var(--color-main-blue)] text-white'
                          : 'text-[var(--color-black-01)] hover:bg-gray-100'
                        }`}
                    >
                      {tab.label}
                    </span>
                  </Link>
                );
              })}
            </div>
            <button
              onClick={() => setShowLogoutModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-[14px] font-medium border border-red-400 text-red-500 hover:bg-red-50"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>

          {/* Page content */}
          {children}
        </div>

        {/* Footer links */}
        <nav className="flex flex-wrap items-center justify-center gap-4 py-5 text-[14px] text-[var(--color-black-01)]">
          <Link href="/" className="hover:underline">Home</Link>
          <span>|</span>
          <Link href="/account/orders" className="hover:underline">My Orders</Link>
          <span>|</span>
          <Link href="/help" className="hover:underline">Help Center</Link>
          <span>|</span>
          <Link href="#" className="hover:underline">Privacy Policy</Link>
          <span>|</span>
          <Link href="#" className="hover:underline">Return Policy</Link>
        </nav>
      </div>

      {/* Logout modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white w-[640px] max-w-[95%] rounded-2xl shadow-xl overflow-hidden">
            <div className="px-[10px]">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden">
                <Image
                  src="/images/logout.png"
                  alt="Logout"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="px-6 pb-6">
              <h2 className="text-[18px] font-semibold text-[var(--color-black-01)]">
                Are you sure you want to log out?
              </h2>
              <p className="text-[14px] text-[var(--color-muted-alt-2)] mb-3">
                You&apos;ll need to sign in again to access your account.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link
                  href="/auth/logout"
                  className="inline-flex items-center justify-center min-h-[40px] px-4 py-2 rounded-[6px] text-[14px] font-medium border border-[#D2D2D2] text-red-500 hover:bg-red-50 transition"
                >
                  Logout
                </Link>
                <button
                  type="button"
                  onClick={() => setShowLogoutModal(false)}
                  className="inline-flex items-center justify-center min-h-[40px] px-4 py-2 rounded-[6px] text-[14px] font-medium border border-[#D2D2D2] text-[var(--color-black-01)] hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
