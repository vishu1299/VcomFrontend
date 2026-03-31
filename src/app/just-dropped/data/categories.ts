/** Main category names (must match FilterSidebar category ids) */
export const MAIN_CATEGORIES = [
  'Fashion & Apparel',
  'Beauty & Personal Care',
  'Home & Living',
  'Jewelry & Watches',
  'Electronics & Gadgets',
  'Toys & Kids',
  'Spiritual & Cultural Goods',
] as const;

export type MainCategory = (typeof MAIN_CATEGORIES)[number];

/** Default Just Dropped layout: only these five “Top Deals In …” sections */
export const JUST_DROPPED_HOME_SECTION_CATEGORIES = [
  'Fashion & Apparel',
  'Beauty & Personal Care',
  'Home & Living',
  'Jewelry & Watches',
  'Electronics & Gadgets',
] as const;

export function getSubcategoriesForMain(main: string): { id: string; label: string }[] {
  if (main === 'Fashion & Apparel') {
    return [
      { id: 'womens-wear', label: "Women's Wear" },
      { id: 'mens-wear', label: "Men's Wear" },
      { id: 'kids-baby', label: 'Kids & Baby' },
      { id: 'footwear', label: 'Footwear' },
    ];
  }
  return [{ id: 'shop-all', label: 'Shop all' }];
}
