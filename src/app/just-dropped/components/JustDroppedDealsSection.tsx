'use client';

import ExclusiveProductSection from '@/app/top-deals/components/TopdealsProductSection';
import type { JustDroppedCardProduct } from '../types';
import { justDroppedCardToExclusive } from '../lib/mapJustDroppedToExclusive';

type JustDroppedDealsSectionProps = {
  title: string;
  products: JustDroppedCardProduct[];
};

/** Horizontal deal rows aligned with current top-deals `ExclusiveProductSection` design */
export default function JustDroppedDealsSection({ title, products }: JustDroppedDealsSectionProps) {
  const exclusive = products.map(justDroppedCardToExclusive);
  return (
    <ExclusiveProductSection
      title={title}
      products={exclusive}
      layout="carousel"
      sectionVariant="white"
    />
  );
}
