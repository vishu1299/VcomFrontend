export type ProductCategory = {
  id: string;
  name: string;
  image: string;
  slug?: string;
};

const UNSPLASH = (id: string, w = 500) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&fit=crop`;

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  { id: '1', name: 'Fashion & Apparel', image: UNSPLASH('1515886657613-9f3515b0c78f'), slug: 'fashion-apparel' },
  { id: '2', name: 'Beauty & Personal Care', image: UNSPLASH('1596462502278-27bfdc403348'), slug: 'beauty-personal-care' },
  { id: '3', name: 'Jewelry & Watches', image: UNSPLASH('1515562141207-7a88fb7ce338'), slug: 'jewelry-watches' },
  { id: '4', name: 'Home & Living', image: UNSPLASH('1484101403633-562f891dc89a'), slug: 'home-living' },
  { id: '5', name: 'Electronics & Gadgets', image: UNSPLASH('1498049794561-7780e7231661'), slug: 'electronics-gadgets' },
  { id: '6', name: 'Food & Beverages', image: UNSPLASH('1544148103-0773bf10c330'), slug: 'food-beverages' },
  { id: '7', name: 'Handmade & Artisanal', image: UNSPLASH('1578749556568-bc2c40e68b61'), slug: 'handmade-artisanal' },
  { id: '8', name: 'Toys & Kids', image: UNSPLASH('1503454537195-1dcabb73ffb9'), slug: 'toys-kids' },
  { id: '9', name: 'Spiritual & Cultural Goods', image: UNSPLASH('1506126613408-eca67ce2cd22'), slug: 'spiritual-cultural' },
  { id: '10', name: 'Lifestyle & Wellness', image: UNSPLASH('1544367567-0f2fcb009e0b'), slug: 'lifestyle-wellness' },
  { id: '11', name: 'Seasonal / Limited Edition', image: UNSPLASH('1513885535751-8b9238bd345a'), slug: 'seasonal-limited' },
  { id: '12', name: 'Digital Products & Services', image: UNSPLASH('1518770660439-4636190af475'), slug: 'digital-products' },
];
