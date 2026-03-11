import type { LiveNowProductCardProps } from '../components/LiveNowProductCard';
import type { UpcomingLiveCardProps } from '../components/UpcomingLiveCard';

const clothImages = [
  '/images/cloth1.png',
  '/images/cloth2.png',
  '/images/cloth3.png',
  '/images/cloth4.png',
  '/images/cloth5.png',
  '/images/cloth6.png',
  '/images/cloth7.png',
  '/images/cloth8.png',
];

const titles = [
  "Men's Blue Denim Jacket",
  "Kids' Red Raincoat",
  "Women's Gray Hoodie",
  "Men's Classic Oxford Shirt",
  "Women's High-Waist Trousers",
  "Men's Slim Denim Jogger",
  "Women's Casual Blazer",
  "Men's Winter Parka",
];

function buildProducts(): LiveNowProductCardProps[] {
  const out: LiveNowProductCardProps[] = [];
  for (let i = 0; i < 100; i++) {
    const imgIndex = i % clothImages.length;
    const titleIndex = i % titles.length;
    out.push({
      id: String(i + 1),
      storeName: 'urbanTech',
      storeLogo: '/images/logo.png',
      rating: 4.9,
      title: titles[titleIndex],
      price: 29.99 + (i % 5) * 15,
      originalPrice: 49.99 + (i % 5) * 20,
      image: clothImages[imgIndex],
      badges:
        i % 3 === 0
          ? (['LIVE NOW', 'FLASH SALE', 'NEW'] as const)
          : i % 3 === 1
            ? (['LIVE NOW', 'FLASH SALE'] as const)
            : (['LIVE NOW', 'NEW'] as const),
    });
  }
  return out;
}

export const ALL_LIVE_PRODUCTS = buildProducts();
export const PAGE_SIZE = 14;

const upcomingDates = [
  '1-Nov-2023, 08:40 AM',
  '2-Nov-2023, 10:15 AM',
  '3-Nov-2023, 02:30 PM',
  '4-Nov-2023, 09:00 AM',
  '5-Nov-2023, 11:45 AM',
  '6-Nov-2023, 04:20 PM',
  '7-Nov-2023, 08:00 AM',
  '8-Nov-2023, 01:00 PM',
];

function buildUpcoming(): UpcomingLiveCardProps[] {
  const out: UpcomingLiveCardProps[] = [];
  for (let i = 0; i < 89; i++) {
    out.push({
      id: `up-${i + 1}`,
      title: i % 2 === 0 ? "Iphone 17 Pro 256 GB" : titles[i % titles.length],
      image: clothImages[i % clothImages.length],
      scheduledDate: upcomingDates[i % upcomingDates.length],
      viewCount: 'Set Reminder',
    });
  }
  return out;
}

export const UPCOMING_LIVE_PRODUCTS = buildUpcoming();
