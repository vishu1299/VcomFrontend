import type { ProductCardProps } from "@/app/product-list/components/ProductCard";

const CAROUSEL_IMAGES = [
  "/images/cloth2.png",
  "/images/cloth3.png",
  "/images/cloth3.png",
  "/images/cloth4.png",
  "/images/cloth5.png",
] as const;

/** Mock products for `RelatedProductsCarousel` (seller page, track order, etc.). */
export const RELATED_CAROUSEL_PRODUCTS: ProductCardProps[] = Array.from(
  { length: 10 },
  (_, i) => ({
    id: `seller-related-${i + 1}`,
    name: "Women's Relaxed Fit Cotton Dress",
    price: 29 + (i % 4) * 5,
    originalPrice: 45 + (i % 3) * 6,
    image: CAROUSEL_IMAGES[i % CAROUSEL_IMAGES.length],
    badges: i % 2 === 0 ? ["SALE", "NEW"] : ["SALE"],
    hasVideo: true,
  })
);
