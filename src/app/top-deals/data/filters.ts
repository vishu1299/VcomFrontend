export const CATEGORIES = [
  { id: 'fashion', label: 'Fashion & Apparel', count: 87603 },
  { id: 'beauty', label: 'Beauty & Personal Care', count: 123234 },
  { id: 'home', label: 'Home & Living', count: 54321 },
  { id: 'jewelry', label: 'Jewelry & Watches', count: 90755 },
  { id: 'electronics', label: 'Electronics & Gadgets', count: 112233 },
  { id: 'toys', label: 'Toys & Kids', count: 445566 },
  { id: 'spiritual', label: 'Spiritual & Cultural Goods', count: 778809 },
];

export const SUB_CATEGORIES = [
  { id: 'phone', label: 'Phone Accessories', count: 87603 },
  { id: 'headphones', label: 'Headphones & Audio', count: 123234 },
  { id: 'camera', label: 'Cameras & Streaming Gear', count: 54321 },
  { id: 'smarthome', label: 'Smart Home Gadgets', count: 112233 },
  { id: 'cases', label: 'Tech Protection & Cases', count: 445566 },
  { id: 'chargers', label: 'Chargers & Power Banks', count: 778899 },
];

/** Beauty & personal care sub-filters (first “Sub-Category” block in sidebar) */
export const BEAUTY_SUB_CATEGORY_FILTERS = [
  { id: 'makeup', label: 'Makeup & Cosmetics', count: 87693 },
  { id: 'skincare', label: 'Skincare & Face Masks', count: 123234 },
  { id: 'bath', label: 'Bath & Body', count: 54321 },
  { id: 'hair', label: 'Haircare & Tools', count: 98765 },
  { id: 'grooming', label: 'Grooming (Men / Women)', count: 112233 },
  { id: 'oils', label: 'Essentials Oils & Wellness', count: 445566 },
];

export const TIME_LEFT_OPTIONS = [
  { id: 'ending-soon', label: 'Ending Soon' },
  { id: '24h', label: '24 Hours Left' },
  { id: 'week', label: 'This Week Only' },
] as const;

export const BRANDS = [
  { id: 'samsung', label: 'Samsung', count: 57693 },
  { id: 'apple', label: 'Apple', count: 123234 },
  { id: 'sony', label: 'Sony', count: 123234 },
  { id: 'lg', label: 'LG', count: 123234 },
  { id: 'dell', label: 'Dell', count: 123234 },
  { id: 'hp', label: 'HP', count: 123234 },
  { id: 'lenovo', label: 'Lenovo', count: 123234 },
  { id: 'xiaomi', label: 'Xiaomi', count: 123234 },
];

export const COLORS = [
  { id: 'blue', label: 'Blue', hex: '#3b82f6', count: 322 },
  { id: 'white', label: 'White', hex: '#ffffff', count: 322 },
  { id: 'green', label: 'Green', hex: '#22c55e', count: 322 },
  { id: 'navy', label: 'Navy Blue', hex: '#1e3a8a', count: 322 },
  { id: 'black', label: 'Black', hex: '#131313', count: 322 },
  { id: 'red', label: 'Red', hex: '#dc2626', count: 322 },
  { id: 'brown', label: 'Brown', hex: '#92400e', count: 322 },
];

export const DISCOUNT_OPTIONS = [
  { id: '10', label: '10% and above' },
  { id: '20', label: '20% and above' },
  { id: '30', label: '30% and above' },
  { id: '40', label: '40% and above' },
  { id: '50', label: '50% and above' },
  { id: '60', label: '60% and above' },
  { id: '70', label: '70% and above' },
  { id: '80', label: '80% and above' },
  { id: '90', label: '90% and above' },
];

export type ExclusiveFilterState = {
  categories: string[];
  /** Beauty-style sub-category chips (first Sub-Category block) */
  subCategories: string[];
  /** Ending soon / 24h / this week */
  timeLeft: string[];
  /** Electronics-style sub-categories (second Sub-Categories block) */
  techSubCategories: string[];
  bestSeller: string | null;
  brands: string[];
  ratings: number[];
  priceMin: number;
  priceMax: number;
  colors: string[];
  discount: string | null;
};

export const initialExclusiveFilters: ExclusiveFilterState = {
  categories: [],
  subCategories: [],
  timeLeft: [],
  techSubCategories: [],
  bestSeller: null,
  brands: [],
  ratings: [],
  priceMin: 0,
  priceMax: 20000,
  colors: [],
  discount: null,
};
