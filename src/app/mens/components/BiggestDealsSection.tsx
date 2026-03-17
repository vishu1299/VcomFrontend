'use client';

import Image from 'next/image';
import Link from 'next/link';
import HorizontalScrollSection from './HorizontalScrollSection';
import type { BiggestDeal } from '../data/biggest-deals';

type BiggestDealsSectionProps = {
  deals: BiggestDeal[];
};

function BrandCard({ deal }: { deal: BiggestDeal }) {
  return (
    <Link href="#" className="group shrink-0 w-[160px] sm:w-[180px] md:w-[200px] flex flex-col">
      <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col flex-1">
        <div className="relative w-full aspect-square bg-[#f9fafb] shrink-0">
          <Image
            src={deal.image}
            alt={deal.brand}
            fill
            sizes="200px"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-3 text-center bg-white border-t border-gray-100 min-h-[48px] flex items-center justify-center">
          <p className="text-xs font-bold text-black line-clamp-2">{deal.brand}</p>
        </div>
      </div>
    </Link>
  );
}

export default function BiggestDealsSection({ deals }: BiggestDealsSectionProps) {
  return (
    <HorizontalScrollSection
      title="Biggest Deals on Top Brands"
      ariaLabel="Biggest deals on top brands"
    >
      {deals.map((deal) => (
        <BrandCard key={deal.id} deal={deal} />
      ))}
    </HorizontalScrollSection>
  );
}
