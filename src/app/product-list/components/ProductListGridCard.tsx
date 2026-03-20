'use client';

import ProductListExclusiveStyleCard from './ProductListExclusiveStyleCard';
import type { ProductCardProps } from './ProductCard';

/** Exclusive grid style card for product list grid (4-up on xl, hover video). */
export default function ProductListGridCard(props: ProductCardProps) {
  return <ProductListExclusiveStyleCard {...props} variant="grid" />;
}
