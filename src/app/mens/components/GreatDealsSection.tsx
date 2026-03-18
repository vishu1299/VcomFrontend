"use client";

import Image from "next/image";
import Link from "next/link";
import HorizontalScrollSection from "./HorizontalScrollSection";
import type { GreatDeal } from "../data/great-deals";

type GreatDealsSectionProps = {
  deals: GreatDeal[];
};

function DealCard({ deal }: { deal: GreatDeal }) {
  return (
    <Link
      href="#"
      className="group shrink-0 w-[160px] sm:w-[180px] md:w-[200px] flex flex-col"
    >
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
        <div className="p-3 bg-white min-h-[72px] flex flex-col justify-center">
          <p className="text-xs font-bold text-black uppercase tracking-wide">
            {deal.brand}
          </p>
          <p className="text-xs text-gray-600 mt-0.5">{deal.productType}</p>
          <p className="text-xs font-semibold text-[#1e3a8a] mt-1">
            {deal.offer}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function GreatDealsSection({ deals }: GreatDealsSectionProps) {
  return (
    <HorizontalScrollSection title="Great Deals" ariaLabel="Great deals">
      {deals.map((deal) => (
        <DealCard key={deal.id} deal={deal} />
      ))}
    </HorizontalScrollSection>
  );
}
