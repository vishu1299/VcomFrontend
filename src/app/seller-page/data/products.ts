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

const UNSPLASH = (id: string, w = 400, h = 400) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop`;

export const RECENTLY_ADDED: SellerProduct[] = [
  {
    id: "ra1",
    name: "NovaPulse Smartwatch",
    price: 29,
    originalPrice: 33,
    image: "/images/sellerwatch.png",
    badges: ["SALE", "NEW"],
    hasVideo: true,
    sponsored: true,
  },
  {
    id: "ra2",
    name: "NovaPulse Smartwatch",
    price: 29,
    originalPrice: 33,
    image:"/images/sellerwatch.png",
    badges: ["SALE"],
    hasVideo: true,
  },
  {
    id: "ra3",
    name: "NovaPulse Smartwatch",
    price: 29,
    originalPrice: 33,
    image: "/images/sellerwatch.png",
    badges: ["NEW"],
    hasVideo: false,
    sponsored: true,
  },
  {
    id: "ra4",
    name: "NovaPulse Smartwatch",
    price: 29,
    originalPrice: 33,
    image: "/images/sellerwatch.png",
    badges: ["SALE", "NEW"],
    hasVideo: true,
  },
];

export const ALL_PRODUCTS: SellerProduct[] = [
  {
    id: "p1",
    name: "NovaPulse Smartwatch",
    price: 29,
    originalPrice: 33,
    image: "/images/sellerwatch.png",
    badges: ["SALE", "NEW"],
    hasVideo: true,
    sponsored: true,
  },
  {
    id: "p2",
    name: "NovaPulse Smartwatch",
    price: 29,
    originalPrice: 33,
    image: "/images/jacket.png",
    badges: ["SALE", "NEW"],
    hasVideo: true,
  },
  {
    id: "p3",
    name: "NovaPulse Smartwatch",
    price: 29,
    originalPrice: 33,
    image: "/images/customerReviews/seller2.png",
    badges: ["SALE", "NEW"],
    hasVideo: false,
  },
  {
    id: "p4",
    name: "NovaPulse Smartwatch",
    price: 29,
    originalPrice: 33,
    image: "./images/shoes.png",
    badges: ["SALE", "NEW"],
    hasVideo: true,
    sponsored: true,
  },
  {
    id: "p5",
    name: "NovaPulse Smartwatch",
    price: 29,
    originalPrice: 33,
    image: "/images/customerReviews/seller1.png",
    badges: ["SALE", "NEW"],
    hasVideo: false,
    sponsored: true,
  },
  {
    id: "p6",
    name: "NovaPulse Smartwatch",
    price: 29,
    originalPrice: 33,
    image: "./images/perfume.png",
    badges: ["SALE", "NEW"],
    hasVideo: true,
  },
  {
    id: "p7",
    name: "NovaPulse Smartwatch",
    price: 29,
    originalPrice: 33,
    image: "./images/bag.png",
    badges: ["SALE", "NEW"],
    hasVideo: false,
    sponsored: true,
  },
  {
    id: "p8",
    name: "NovaPulse Smartwatch",
    price: 29,
    originalPrice: 33,
    image: "./images/sellerwatch (2).png",
    badges: ["SALE", "NEW"],
    hasVideo: true,
    sponsored: true,
  },
];

export const RECENTLY_SEARCHED: SellerProduct[] = [
  {
    id: "rs1",
    name: "NovaPulse Smartwatch",
    price: 29,
    originalPrice: 33,
    image: "./images/sellerwatch.png",
    badges: ["SALE"],
    hasVideo: true,
  },
  {
    id: "rs2",
    name: "NovaPulse Smartwatch",
    price: 29,
    originalPrice: 33,
    image: "./images/bag.png",
    badges: ["SALE", "NEW"],
    hasVideo: true,
  },
];

export type UpcomingLiveCardProps = {
  id: string;
  title: string;
  image: string;
  scheduledDate: string;
  /** Top-right badge: "3k Interested" or e.g. "3k Viewed" */
  viewCount?: string;
};
export const UpcomingLiveProducts: UpcomingLiveCardProps[] = [
    {
      id: "1",
      title: "IPhone 17 pro 256 GB",
      scheduledDate: "1-Nov-2025,5:40 AM",
      image: "./images/orangeIphone.png",
      viewCount: "3k Interested",
  },
    {
      id: "2",
      title: "IPhone 17 pro 256 GB",
      scheduledDate: "1-Nov-2025,5:40 AM",
      image: "./images/orangeIphone.png",
      viewCount: "3k Interested",
  },
    {
      id: "3",
      title: "IPhone 17 pro 256 GB",
      scheduledDate: "1-Nov-2025,5:40 AM",
      image: "./images/orangeIphone.png",
      viewCount: "3k Interested",
  },
    {
      id: "4",
      title: "IPhone 17 pro 256 GB",
      scheduledDate: "1-Nov-2025,5:40 AM",
      image: "./images/orangeIphone.png",
      viewCount: "3k Interested",
  },
    {
      id: "5",
      title: "IPhone 17 pro 256 GB",
      scheduledDate: "1-Nov-2025,5:40 AM",
      image: "./images/orangeIphone.png",
      viewCount: "3k Interested",
  },
    {
      id: "6",
      title: "IPhone 17 pro 256 GB",
      scheduledDate: "1-Nov-2025,5:40 AM",
      image: "./images/orangeIphone.png",
      viewCount: "3k Interested",
  },
    {
      id: "7",
      title: "IPhone 17 pro 256 GB",
      scheduledDate: "1-Nov-2025,5:40 AM",
      image: "./images/orangeIphone.png",
      viewCount: "3k Interested",
  },
    {
      id: "8",
      title: "IPhone 17 pro 256 GB",
      scheduledDate: "1-Nov-2025,5:40 AM",
      image: "./images/orangeIphone.png",
      viewCount: "3k Interested",
  },
  
]