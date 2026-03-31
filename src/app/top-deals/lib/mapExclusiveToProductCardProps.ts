import type { ProductCardProps } from '@/app/product-list/components/ProductCard';
import type { ExclusiveProduct, ExclusiveProductBadge } from '../data/products';

/** Badges ProductListExclusiveStyleCard renders (NEW, SALE, % OFF, SPONSORED) */
const BADGE_TO_PRODUCT_LIST: Partial<Record<ExclusiveProductBadge, string>> = {
  new: 'NEW',
  sponsored: 'SPONSORED',
  '10off': '10% OFF',
  sale: 'SALE',
  sold: 'SALE',
};

export function mapExclusiveToProductCardProps(p: ExclusiveProduct): ProductCardProps {
  const badges = (p.badges ?? [])
    .map((b) => BADGE_TO_PRODUCT_LIST[b])
    .filter((x): x is string => Boolean(x));

  return {
    id: p.id,
    name: p.name,
    price: p.price,
    originalPrice: p.originalPrice,
    image: p.image,
    badges,
    hasVideo: p.hasVideo,
    videoUrl: p.videoUrl,
  };
}
