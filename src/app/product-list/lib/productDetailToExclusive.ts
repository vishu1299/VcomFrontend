import type { ExclusiveProduct, ExclusiveProductBadge } from '@/app/exclusive/data/products';
import type { ProductDetail } from '../data/productDetails';
import { getSampleVideoUrlForProduct } from './sampleVideoUrl';

function mapBadge(b: string): ExclusiveProductBadge | null {
  const u = b.toUpperCase();
  if (u === 'SALE') return 'sale';
  if (u === 'NEW') return 'new';
  if (u === 'SPONSORED') return 'sponsored';
  if (b.includes('% OFF')) return '10off';
  return null;
}

/** Map product-list Quick View data to ExclusiveProduct for ProductDetailModal */
export function productDetailToExclusive(product: ProductDetail): ExclusiveProduct {
  const badges = product.badges
    ?.map(mapBadge)
    .filter((x): x is ExclusiveProductBadge => x != null);
  const videoUrl =
    product.videoUrl ??
    (product.hasVideo ? getSampleVideoUrlForProduct(product.id) : undefined);

  return {
    id: String(product.id),
    name: product.name,
    price: product.price,
    originalPrice: product.originalPrice,
    image: product.image,
    badges: badges?.length ? badges : undefined,
    hasVideo: product.hasVideo,
    videoUrl,
  };
}
