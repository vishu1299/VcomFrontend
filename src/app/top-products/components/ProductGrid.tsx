'use client';

import ProductCard, { type ProductCardProps } from './ProductCard';

type ProductGridProps = {
  products: ProductCardProps[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="flex-1 min-w-0" style={{ fontFamily: 'var(--font-poppins)' }}>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
