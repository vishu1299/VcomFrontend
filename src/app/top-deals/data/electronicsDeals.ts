/** Product card for Electronics + Ending Soon view */
export type ElectronicsDealItem = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  topBadge?: 'NEW';
  bottomBadge?: 'SPONSORED' | 'LIMITED';
  hasVideo?: boolean;
};

/** Unsplash smartphone images - Samsung-style phones */
const PHONE_IMAGES = [
  '/images/phone1.png',
  '/images/phone2.png',
  '/images/phone3.png',
  '/images/phone.png',
  'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1592286927505-d0d24a523cad?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1601784551446-20c9e07cdb31?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=500&h=500&fit=crop',
];

const PHONE_NAMES = [
  'Samsung Galaxy M07',
  'Samsung Galaxy F07',
  'Samsung Galaxy F17 5G',
  'Samsung Galaxy M17 5G',
  'Samsung Galaxy F36 5G',
  'Samsung Galaxy A15',
  'Samsung Galaxy M15',
  'Samsung Galaxy F15',
];

function buildSectionProducts(
  sectionId: string,
  count: number,
  bottomBadge?: 'SPONSORED' | 'LIMITED'
): ElectronicsDealItem[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `${sectionId}-${i + 1}`,
    name: PHONE_NAMES[i % PHONE_NAMES.length],
    price: i % 2 === 0 ? 29 : 39,
    originalPrice: i % 2 === 0 ? 33 : 50,
    image: PHONE_IMAGES[(i + sectionId.length) % PHONE_IMAGES.length],
    topBadge: i % 2 === 0 ? 'NEW' : undefined,
    bottomBadge: bottomBadge ?? (i % 3 === 0 ? 'SPONSORED' : i % 3 === 1 ? 'LIMITED' : undefined),
    hasVideo: true,
  }));
}

export const DEALS_EXPIRING_SOON = buildSectionProducts('expiring', 8, 'SPONSORED');
export const SELLING_FAST = buildSectionProducts('selling', 8, 'LIMITED');
export const LIMITED_QUANTITY = buildSectionProducts('limited', 8, 'LIMITED');
export const DEALS_UNDER_50 = buildSectionProducts('under50', 8);

export const ELECTRONICS_SECTIONS = [
  { id: 'expiring', title: 'Deals Expiring Soon', products: DEALS_EXPIRING_SOON },
  { id: 'selling', title: 'Selling Fast', products: SELLING_FAST },
  { id: 'limited', title: 'Limited Quantity', products: LIMITED_QUANTITY },
  { id: 'under50', title: 'Deals Under $50', products: DEALS_UNDER_50 },
] as const;
