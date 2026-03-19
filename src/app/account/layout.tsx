'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { LogOut, Menu, X } from 'lucide-react';

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
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div
      className="bg-[#f5f5f5] min-h-screen"
      style={{ fontFamily: 'var(--font-poppins)' }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

          {/* ─── Header / Tabs Bar ────────────────────────────────────── */}
          <div className="border-b border-[var(--color-border)] px-5 sm:px-6 py-4 flex items-center justify-between gap-4">
            
            {/* Desktop / large screen tabs */}
            <div className="hidden md:flex items-center gap-2 overflow-x-auto pb-1">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <Link key={tab.id} href={tab.href}>
                    <span
                      className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition
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

            {/* Mobile hamburger trigger */}
            <div className="md:hidden">
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="p-2.5 rounded-lg border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 transition"
                aria-label="Toggle account menu"
              >
                {showMobileMenu ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Logout button – always visible */}
            <button
              onClick={() => setShowLogoutModal(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium border border-red-400 text-red-600 hover:bg-red-50 transition whitespace-nowrap"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>

          {/* Mobile menu dropdown – aligned to the right (opens leftward from icon) */}
          {showMobileMenu && (
            <div className="md:hidden absolute left-4 sm:right-8 z-40 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="flex flex-col py-2">
                {TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <Link
                      key={tab.id}
                      href={tab.href}
                      onClick={() => setShowMobileMenu(false)}
                      className={`px-5 py-3.5 text-sm font-medium transition
                        ${isActive
                          ? 'bg-blue-50 text-[var(--color-main-blue)] font-semibold'
                          : 'text-gray-800 hover:bg-gray-50'
                        }`}
                    >
                      {tab.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Page content */}
          <div className="px-5 sm:px-6 py-6">
            {children}
          </div>
        </div>

        {/* Footer links */}
        <nav className="flex flex-wrap items-center justify-center gap-4 py-6 text-sm text-[var(--color-black-01)]">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white w-full max-w-[640px] rounded-2xl shadow-xl overflow-hidden">
            <div className="px-3 pt-3">
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden">
                <Image
                  src="/images/logout.png"
                  alt="Logout illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="px-6 pb-6 pt-2">
              <h2 className="text-lg font-semibold text-[var(--color-black-01)]">
                Are you sure you want to log out?
              </h2>
              <p className="text-sm text-[var(--color-muted-alt-2)] mt-1 mb-5">
                You&apos;ll need to sign in again to access your account.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/auth/logout"
                  className="min-h-[44px] px-6 py-2 rounded-lg text-sm font-medium border border-[#D2D2D2] text-red-600 hover:bg-red-50 transition flex-1 text-center"
                >
                  Logout
                </Link>
                <button
                  onClick={() => setShowLogoutModal(false)}
                  className="min-h-[44px] px-6 py-2 rounded-lg text-sm font-medium border border-[#D2D2D2] text-gray-800 hover:bg-gray-50 transition flex-1"
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