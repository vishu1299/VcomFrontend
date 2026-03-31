import type { DealFilterState } from '../components/FilterSidebar';
import type { JustDroppedCardProduct } from '../types';
import type { DealProduct } from '../data/dealProducts';

export function dealProductToCard(p: DealProduct): JustDroppedCardProduct {
  return {
    id: p.id,
    name: p.name,
    price: p.price,
    originalPrice: p.originalPrice,
    image: p.image,
    badges: p.badges,
    hasVideo: p.hasVideo,
    sponsored: p.sponsored,
  };
}

export function filterAndSort(
  products: DealProduct[],
  filters: DealFilterState,
  sortValue: string
): DealProduct[] {
  let result = [...products];

  if (filters.categories.length > 0) {
    result = result.filter((p) => filters.categories.includes(p.category));
  }

  result = result.filter(
    (p) => p.price >= filters.priceMin && p.price <= filters.priceMax
  );

  if (sortValue === 'low-to-high') {
    result.sort((a, b) => a.price - b.price);
  } else if (sortValue === 'high-to-low') {
    result.sort((a, b) => b.price - a.price);
  }

  return result;
}

export function groupByCategory(
  products: DealProduct[]
): Map<string, JustDroppedCardProduct[]> {
  const map = new Map<string, JustDroppedCardProduct[]>();
  for (const p of products) {
    const card = dealProductToCard(p);
    const list = map.get(p.category) ?? [];
    list.push(card);
    map.set(p.category, list);
  }
  return map;
}
