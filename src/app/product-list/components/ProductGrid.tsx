'use client';

import ProductCard, { type ProductCardProps } from './ProductCard';

type ProductGridProps = {
  products: ProductCardProps[];
  onProductClick?: (product: ProductCardProps) => void;
};

/** Product cards grid only. Sort bar is rendered above filter+grid at page level. */
export default function ProductGrid({ products, onProductClick }: ProductGridProps) {
  return (
    <div className="flex flex-col min-w-0 flex-1" style={{ fontFamily: 'var(--font-poppins)' }}>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onQuickView={onProductClick ? () => onProductClick(product) : undefined}
          />
        ))}
      </div>
    </div>
  );
}
