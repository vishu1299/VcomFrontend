import { MENS_CLOTHING_CATEGORIES } from '@/app/mens/data/mens-categories';
import { SUB_CATEGORY_ITEMS } from '@/app/product-categories/[slug]/data/subcategories';

export function getStandaloneCategory(slug: string): { name: string; image: string } | null {
  const mens = MENS_CLOTHING_CATEGORIES.find((c) => c.slug === slug);
  if (mens) return { name: mens.name, image: mens.image };
  const sub = SUB_CATEGORY_ITEMS.find((s) => s.slug === slug);
  if (sub) return { name: sub.name, image: sub.image };
  return null;
}
