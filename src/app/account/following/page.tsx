'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Search, Check } from 'lucide-react';

interface StoreCard {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  reviewCount: string;
  liveNow?: boolean;
}

const MOCK_STORES: StoreCard[] = [
  { id: '1', name: 'FitGear Official Store', avatar: '/images/1.png', rating: 4.9, reviewCount: '2.4K reviews', liveNow: true },
  { id: '2', name: 'FitGear Official Store', avatar: '/images/2.png', rating: 4.9, reviewCount: '2.4K reviews' },
  { id: '3', name: 'FitGear Official Store', avatar: '/images/3.png', rating: 4.9, reviewCount: '2.4K reviews' },
  { id: '4', name: 'FitGear Official Store', avatar: '/images/4.png', rating: 4.9, reviewCount: '2.4K reviews', liveNow: true },
  { id: '5', name: 'FitGear Official Store', avatar: '/images/5.png', rating: 4.9, reviewCount: '2.4K reviews' },
  { id: '6', name: 'FitGear Official Store', avatar: '/images/6.png', rating: 4.9, reviewCount: '2.4K reviews' },
  { id: '7', name: 'FitGear Official Store', avatar: '/images/4.png', rating: 4.9, reviewCount: '2.4K reviews', liveNow: true },
  { id: '8', name: 'FitGear Official Store', avatar: '/images/3.png', rating: 4.9, reviewCount: '2.4K reviews', liveNow: true },
  { id: '9', name: 'FitGear Official Store', avatar: '/images/2.png', rating: 4.9, reviewCount: '2.4K reviews', liveNow: true },
  { id: '10', name: 'FitGear Official Store', avatar: '/images/1.png', rating: 4.9, reviewCount: '2.4K reviews', liveNow: true },
];

function StoreCardItem({ store }: { store: StoreCard }) {
  const [following, setFollowing] = useState(true);

  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-white p-4 shadow-sm flex flex-col items-center text-center">
      {/* Avatar with optional LIVE NOW badge - above image, centered, bottom slightly overlaps circle */}
      <div className="relative mb-3 pt-5 sm:pt-3">
        {store.liveNow && (
          <span
            className="absolute top-0 left-1/2 -translate-x-1/2 rounded px-2 py-1 text-[10px] font-medium text-white whitespace-nowrap flex items-center justify-center z-10"
            style={{ backgroundColor: '#FF0000' }}
          >
            • LIVE NOW
          </span>
        )}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-gray-100 mx-auto -mt-1.5">
          <Image
            src={store.avatar}
            alt={store.name}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <p className="text-sm font-semibold text-[var(--color-black-01)] mb-1.5 line-clamp-2">
        {store.name}
      </p>
      <div className="flex items-center justify-center flex-nowrap gap-0.5 sm:gap-1.5 mb-3">
        <Image src="/Star.svg" alt="" width={16} height={15} className="shrink-0" />
        <span className="text-xs font-medium text-[var(--color-black-01)] whitespace-nowrap shrink-0">{store.rating}</span>
        <span className="text-xs whitespace-nowrap shrink-0" style={{ color: '#131313' }}>({store.reviewCount})</span>
      </div>
      <button
        type="button"
        onClick={() => setFollowing(!following)}
        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-medium text-black hover:opacity-90 transition"
        style={{ backgroundColor: '#F5B700' }}
      >
        Following
        <Check className="w-4 h-4 text-black" strokeWidth={2.5} />
      </button>
    </div>
  );
}

export default function MyFollowingsPage() {
  const [search, setSearch] = useState('');
  const [dateFilter, setDateFilter] = useState('This Month');
  const [stores] = useState<StoreCard[]>(MOCK_STORES);

  return (
    <div className="p-6 lg:p-8">
      {/* Same row: left = title + subtext, right = search + Date */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-black-01)] ">
            My Followings
          </h1>
          <p className="text-[14px] text-[var(--color-muted-alt-2)]">
            Here&apos;s your Favorite stores
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[180px] max-w-[280px]">
            <input
              type="text"
              placeholder="Search store"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full min-h-[40px] pl-3 pr-10 py-2 text-sm border rounded-lg outline-none focus:border-[var(--color-main-blue)] placeholder:text-[#767676]"
              style={{ borderColor: '#D2D2D2', color: '#767676' }}
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-muted-alt-2)] pointer-events-none" />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-[var(--color-black-01)] whitespace-nowrap">
              Date
            </label>
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="min-h-[40px] pl-3 pr-8 text-sm border border-[var(--color-border-input)] rounded-lg bg-white outline-none focus:border-[var(--color-main-blue)] appearance-none bg-no-repeat bg-[length:16px] bg-[right_10px_center]"
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%236b7280\' stroke-width=\'2\'%3E%3Cpath d=\'M6 9l6 6 6-6\'/%3E%3C/svg%3E")' }}
            >
              <option value="This Month">This Month</option>
              <option value="Last Month">Last Month</option>
              <option value="This Year">This Year</option>
              <option value="Last 3 Months">Last 3 Months</option>
            </select>
          </div>
        </div>
      </div>

      {/* Store cards grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {stores.map((store) => (
          <StoreCardItem key={store.id} store={store} />
        ))}
      </div>
    </div>
  );
}
