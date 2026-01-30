export type Category = {
  id: string;
  name: string;
  image: string;
};

export const CATEGORIES: Category[] = [
  { id: 'fashion', name: 'Fashion & Apparel', image: '/images/signin.png' },
  { id: 'beauty', name: 'Beauty & Personal Care', image: '/images/create.png' },
  { id: 'jewelry', name: 'Jewelry & Watches', image: '/images/logo.png' },
  { id: 'home', name: 'Home & Living', image: '/images/forgot.png' },
  { id: 'electronics', name: 'Electronics & Gadgets', image: '/images/otp.png' },
  { id: 'foodstuffs', name: 'Foodstuffs & Delicacies', image: '/images/success.png' },
  { id: 'handicrafts', name: 'Handicrafts & Antiques', image: '/images/signin.png' },
  { id: 'toys', name: 'Toys & Kids', image: '/images/create.png' },
  { id: 'spiritual', name: 'Spiritual & Cultural Goods', image: '/images/logo.png' },
  { id: 'lifestyle', name: 'Lifestyle & Wellness', image: '/images/forgot.png' },
  { id: 'seasonal', name: 'Seasonal & Gift Items', image: '/images/otp.png' },
  { id: 'digital', name: 'Digital Products & Services', image: '/images/success.png' },
];
