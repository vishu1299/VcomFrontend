'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard, { type ProductCardProps } from './ProductCard';

const carouselProducts: ProductCardProps[] = [
  {
    id: '1',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 29,
    originalPrice: 32,
    image: '/images/signin.png',
    badges: ['10% OFF'],
    hasVideo: true,
  },
  {
    id: '2',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 29,
    originalPrice: 32,
    image: '/images/create.png',
    badges: ['10% OFF', 'NEW'],
    hasVideo: true,
  },
  {
    id: '3',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 29,
    originalPrice: 32,
    image: '/images/logo.png',
    badges: ['10% OFF'],
    hasVideo: true,
  },
  {
    id: '4',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 29,
    originalPrice: 58,
    image: '/images/forgot.png',
    badges: ['10% OFF'],
    hasVideo: false,
  },
  {
    id: '5',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 29,
    originalPrice: 32,
    image: '/images/otp.png',
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
      className="py-4 md:px-4 px-6  mb-6 sm:mb-8"
      style={{ background: '#FFF3CF' }}
      aria-label="Top products"
    >
      <div className="mb-4 sm:mb-5">
        <h2 className="text-design-18 sm:text-design-20 font-bold text-[var(--color-black)]">
          Top Products
        </h2>
        <p className="text-design-14 sm:text-design-16 text-[var(--color-muted-alt-2)] mt-0.5">
          Most selling across all categories - updated daily
        </p>
      </div>

      <div className="relative">
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
          {carouselProducts.map((product) => (
            <div
              key={product.id}
              className="min-w-[240px] sm:min-w-[240px] lg:min-w-[250px] snap-start shrink-0"
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
          className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-white border border-[var(--color-border)] shadow items-center justify-center hover:bg-[var(--color-border)] transition z-10"
          aria-label="Previous products"
        >
          <ChevronLeft className="w-5 h-5 text-[var(--color-black)]" />
        </button>
        <button
          type="button"
          className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-white border border-[var(--color-border)] shadow items-center justify-center hover:bg-[var(--color-border)] transition z-10"
          aria-label="Next products"
        >
          <ChevronRight className="w-5 h-5 text-[var(--color-black)]" />
        </button>
      </div>
    </section>
  );
}
