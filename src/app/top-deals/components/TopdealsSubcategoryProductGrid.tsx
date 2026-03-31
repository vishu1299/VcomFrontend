'use client';

import { useState } from 'react';
import ProductListGridCard from '@/app/product-list/components/ProductListGridCard';
import ProductDetailModal from './ProductDetailModal';
import { mapExclusiveToProductCardProps } from '../lib/mapExclusiveToProductCardProps';
import type { ExclusiveProduct } from '../data/products';

type TopdealsSubcategoryProductGridProps = {
  title: string;
  products: ExclusiveProduct[];
  onBack?: () => void;
};

export default function TopdealsSubcategoryProductGrid({
  title,
  products,
  onBack,
}: TopdealsSubcategoryProductGridProps) {
  const [detailProduct, setDetailProduct] = useState<ExclusiveProduct | null>(null);

  if (products.length === 0) return null;

  return (
    <section
      className="mb-6 sm:mb-8 rounded-xl bg-[#ffffff] px-4 py-5 sm:px-6 sm:py-6"
      aria-label={title}
      style={{ fontFamily: 'var(--font-poppins)' }}
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-[18px] font-bold leading-tight text-[#131313] sm:text-[20px] lg:text-[24px]">
          {title}
        </h2>
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="text-sm font-medium text-[#1e3a8a] underline-offset-2 hover:underline"
          >
            Back to subcategories
          </button>
        )}
      </div>
      {/* Same layout as product-list ProductGrid: 2 cols mobile, 4 on xl */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="grid min-w-0 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {products.map((product) => (
            <ProductListGridCard
              key={product.id}
              {...mapExclusiveToProductCardProps(product)}
              onQuickView={() => setDetailProduct(product)}
            />
          ))}
        </div>
      </div>

      {detailProduct && (
        <ProductDetailModal
          product={detailProduct}
          isOpen
          onClose={() => setDetailProduct(null)}
        />
      )}
    </section>
  );
}
