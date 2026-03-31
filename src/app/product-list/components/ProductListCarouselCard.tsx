'use client';

import ProductListExclusiveStyleCard from './ProductListExclusiveStyleCard';
import type { ProductCardProps } from './ProductCard';

/** Exclusive horizontal-scroll style card for Top Products carousel (hover video, compact sizing). */
export default function ProductListCarouselCard(props: ProductCardProps) {
  return <ProductListExclusiveStyleCard {...props} variant="carousel" />;
}
