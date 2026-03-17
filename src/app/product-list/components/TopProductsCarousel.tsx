'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard, { type ProductCardProps } from './ProductCard';

const carouselProducts: ProductCardProps[] = [
  {
    id: '1',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 29,
    originalPrice: 32,
    image: '/images/product1.png',
    badges: ['10% OFF'],
    hasVideo: true,
  },
  {
    id: '2',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 29,
    originalPrice: 32,
    image: '/images/product2.png',
    badges: ['10% OFF', 'NEW'],
    hasVideo: true,
  },
  {
    id: '3',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 29,
    originalPrice: 32,
    image: '/images/product3.png',
    badges: ['10% OFF'],
    hasVideo: true,
  },
  {
    id: '4',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 29,
    originalPrice: 58,
    image: '/images/product1.png',
    badges: ['10% OFF'],
    hasVideo: false,
  },
  {
    id: '5',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 29,
    originalPrice: 32,
    image: '/images/product2.png',
    badges: ['10% OFF'],
    hasVideo: true,
  },
];

type TopProductsCarouselProps = {
  onProductClick?: (product: ProductCardProps) => void;
};

export default function TopProductsCarousel({ onProductClick }: TopProductsCarouselProps) {
  return (
    <section
      className="py-4 md:px-4 px-6  mb-2 sm:mb-2"
      style={{ background: '#FFF3CF' }}
      aria-label="Top products"
    >
      <div className="mb-4 sm:mb-5 flex flex-wrap items-baseline gap-2 sm:gap-3">
        <h2 className="text-design-24 sm:text-design-28 lg:text-design-32 font-bold text-black">
          Top Products
        </h2>
        <p className="text-design-12 sm:text-design-14 text-[#767676]">
          Most selling across all categories - updated daily
        </p>
      </div>

      <div className="relative">
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
          {carouselProducts.map((product) => (
            <div
              key={product.id}
              className="min-w-[200px] sm:min-w-[210px] lg:min-w-[220px] snap-start shrink-0"
            >
              <ProductCard
                {...product}
                onQuickView={onProductClick ? () => onProductClick(product) : undefined}
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          className="hidden lg:flex absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-white border border-[var(--color-border)] shadow items-center justify-center hover:bg-[var(--color-border)] transition z-10"
          aria-label="Previous products"
        >
          <ChevronLeft className="w-5 h-5 text-[var(--color-black)]" />
        </button>
        <button
          type="button"
          className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-white border border-[var(--color-border)] shadow items-center justify-center hover:bg-[var(--color-border)] transition z-10"
          aria-label="Next products"
        >
          <ChevronRight className="w-5 h-5 text-[var(--color-black)]" />
        </button>
      </div>
    </section>
  );
}
