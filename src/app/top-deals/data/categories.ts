/** Main categories (sidebar) */
export const MAIN_CATEGORIES = ['Fashion & Apparel', 'Beauty & Personal Care', 'Home & Living'] as const;

export type MainCategoryId = (typeof MAIN_CATEGORIES)[number];

/** Subcategories shown in category grid and sidebar – per main category */
export type SubcategoryItem = { id: string; label: string; image: string };

export const BEAUTY_SUBCATEGORIES: SubcategoryItem[] = [
  { id: 'makeup-cosmetics', label: 'Makeup & Cosmetics', image: '/images/makeup.png' },
  { id: 'skincare-face-masks', label: 'Skincare & Face Masks', image: '/images/skincare.png' },
  { id: 'bath-body', label: 'Bath & Body', image: '/images/bath.png' },
  { id: 'haircare-tools', label: 'Haircare & Tools', image: '/images/hair.png' },
  { id: 'grooming', label: 'Grooming (Men/Women)', image: '/images/grooming.png' },
  { id: 'essential-oils-wellness', label: 'Essential Oils & Wellness', image: '/images/oils.png' },
];

const FASHION_SUBCATEGORIES: SubcategoryItem[] = [
  { id: 'mens-wear', label: "Men's Wear", image: '/images/cloth1.png' },
  { id: 'womens-wear', label: "Women's Wear", image: '/images/cloth2.png' },
  { id: 'footwear', label: 'Footwear', image: '/images/cloth3.png' },
  { id: 'accessories', label: 'Accessories', image: '/images/cloth4.png' },
  { id: 'sportswear', label: 'Sportswear', image: '/images/cloth5.png' },
  { id: 'formal-wear', label: 'Formal Wear', image: '/images/cloth6.png' },
];

const HOME_SUBCATEGORIES: SubcategoryItem[] = [
  { id: 'furniture', label: 'Furniture', image: '/images/home-living-product-1.png' },
  { id: 'decor', label: 'Decor', image: '/images/home-living-product-2.png' },
  { id: 'kitchen', label: 'Kitchen', image: '/images/home-living-product-3.png' },
  { id: 'bedding', label: 'Bedding', image: '/images/create.png' },
  { id: 'lighting', label: 'Lighting', image: '/images/speaker.png' },
  { id: 'storage', label: 'Storage', image: '/images/punch.png' },
];

export const SUBCATEGORIES_BY_MAIN: Record<MainCategoryId, SubcategoryItem[]> = {
  'Fashion & Apparel': FASHION_SUBCATEGORIES,
  'Beauty & Personal Care': BEAUTY_SUBCATEGORIES,
  'Home & Living': HOME_SUBCATEGORIES,
};

export function getSubcategoriesForMain(mainCategory: string): SubcategoryItem[] {
  return SUBCATEGORIES_BY_MAIN[mainCategory as MainCategoryId] ?? [];
}
