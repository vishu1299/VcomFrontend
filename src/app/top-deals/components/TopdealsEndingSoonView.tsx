'use client';

import ExclusiveProductSection from './TopdealsProductSection';
import {
  DEALS_EXPIRING_SOON_PRODUCTS,
  SELLING_FAST_PRODUCTS,
  LIMITED_QUANTITY_PRODUCTS,
  DEALS_UNDER_50_PRODUCTS,
} from '../data/products';

/**
 * Shown when sidebar filter “Time left” → “Ending Soon” is checked.
 * Four horizontal carousels (Limited Quantity still shows “X LEFT” on cards).
 */
export default function TopdealsEndingSoonView() {
  return (
    <div className="flex min-w-0 flex-col gap-0">
      <ExclusiveProductSection
        title="Deals Expiring Soon"
        products={DEALS_EXPIRING_SOON_PRODUCTS}
        layout="carousel"
        sectionVariant="white"
      />
      <ExclusiveProductSection
        title="Selling Fast"
        products={SELLING_FAST_PRODUCTS}
        layout="carousel"
        sectionVariant="white"
      />
      <ExclusiveProductSection
        title="Limited Quantity"
        products={LIMITED_QUANTITY_PRODUCTS}
        layout="carousel"
        sectionVariant="white"
      />
      <ExclusiveProductSection
        title="Deals under $50"
        products={DEALS_UNDER_50_PRODUCTS}
        layout="carousel"
        sectionVariant="white"
      />
    </div>
  );
}
