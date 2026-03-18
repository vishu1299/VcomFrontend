export type SellerProduct = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badges: ("SALE" | "NEW")[];
  hasVideo?: boolean;
  sponsored?: boolean;
};

import { REMOTE_IMG } from "@/lib/remoteAssets";

const IMGS = [
  REMOTE_IMG.watch,
  REMOTE_IMG.jacket,
  REMOTE_IMG.shoes,
  REMOTE_IMG.bag,
  REMOTE_IMG.perfume,
  REMOTE_IMG.productPhone,
  REMOTE_IMG.fashion,
] as const;

function img(i: number) {
  return IMGS[i % IMGS.length];
}

export const RECENTLY_ADDED: SellerProduct[] = [
  { id: "ra1", name: "NovaPulse Smartwatch", price: 29, originalPrice: 33, image: img(0), badges: ["SALE", "NEW"], hasVideo: true, sponsored: true },
  { id: "ra2", name: "NovaPulse Smartwatch", price: 29, originalPrice: 33, image: img(1), badges: ["SALE"], hasVideo: true },
  { id: "ra3", name: "NovaPulse Smartwatch", price: 29, originalPrice: 33, image: img(2), badges: ["NEW"], hasVideo: false, sponsored: true },
  { id: "ra4", name: "NovaPulse Smartwatch", price: 29, originalPrice: 33, image: img(3), badges: ["SALE", "NEW"], hasVideo: true },
];

export const ALL_PRODUCTS: SellerProduct[] = [
  { id: "p1", name: "NovaPulse Smartwatch", price: 29, originalPrice: 33, image: img(0), badges: ["SALE", "NEW"], hasVideo: true, sponsored: true },
  { id: "p2", name: "Urban Jacket", price: 89, originalPrice: 120, image: img(1), badges: ["SALE", "NEW"], hasVideo: true },
  { id: "p3", name: "Classic Sneakers", price: 79, originalPrice: 99, image: img(2), badges: ["SALE", "NEW"], hasVideo: false },
  { id: "p4", name: "Leather Trainers", price: 65, originalPrice: 85, image: img(2), badges: ["SALE", "NEW"], hasVideo: true, sponsored: true },
  { id: "p5", name: "Travel Bag", price: 49, originalPrice: 69, image: img(3), badges: ["SALE", "NEW"], hasVideo: false, sponsored: true },
  { id: "p6", name: "Signature Scent", price: 59, originalPrice: 75, image: img(4), badges: ["SALE", "NEW"], hasVideo: true },
  { id: "p7", name: "Leather Tote", price: 95, originalPrice: 120, image: img(3), badges: ["SALE", "NEW"], hasVideo: false, sponsored: true },
  { id: "p8", name: "Smart Band Pro", price: 39, originalPrice: 55, image: img(0), badges: ["SALE", "NEW"], hasVideo: true, sponsored: true },
];

export const RECENTLY_SEARCHED: SellerProduct[] = [
  { id: "rs1", name: "NovaPulse Smartwatch", price: 29, originalPrice: 33, image: img(0), badges: ["SALE"], hasVideo: true },
  { id: "rs2", name: "Leather Tote", price: 95, originalPrice: 120, image: img(3), badges: ["SALE", "NEW"], hasVideo: true },
];

export type UpcomingLiveCardProps = {
  id: string;
  title: string;
  image: string;
  scheduledDate: string;
  viewCount?: string;
};

export const UpcomingLiveProducts: UpcomingLiveCardProps[] = Array.from({ length: 8 }, (_, i) => ({
  id: String(i + 1),
  title: "iPhone 17 Pro 256 GB",
  scheduledDate: "1-Nov-2025, 5:40 AM",
  image: REMOTE_IMG.productPhone,
  viewCount: "3k Interested",
}));
