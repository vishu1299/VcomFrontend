/** Categories shown when only "Fashion & Apparel" is selected (just-dropped). */
export type FashionViewCategory = { id: string; label: string; image: string };

export const FASHION_VIEW_CATEGORIES: FashionViewCategory[] = [
  { id: 'mens-wear', label: "Men's Clothing", image: '/images/fashion1.png' },
  { id: 'womens-wear', label: "Women's Clothing", image: '/images/fashion2.png' },
  { id: 'footwear', label: 'Kids & Baby Clothing', image: '/images/fashion3.png' },
  { id: 'accessories', label: 'Jackets & Outerwear', image: '/images/fashion4.png' },
];
