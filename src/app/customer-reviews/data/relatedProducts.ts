export type RelatedProduct = {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  badges: ("SALE" | "NEW")[];
  hasVideo?: boolean;
  sponsored?: boolean;
};

export const RELATED_PRODUCTS: RelatedProduct[] = [
  {
    id: "1",
    name: "Apple iPhone X 256GB 3GB RAM",
    price: 29,
    originalPrice: 33,
    image: "/images/customerReviews/seller1.png",
    badges: ["SALE", "NEW"],
    hasVideo: true,
    sponsored: true,
  },
  {
    id: "2",
    name: "Apple iPhone X 256GB 3GB RAM",
    price: 29,
    originalPrice: 59,
    image: "/images/customerReviews/seller2.png",
    badges: ["SALE", "NEW"],
    hasVideo: true,
    sponsored: true,
  },
  {
    id: "3",
    name: "Apple iPhone X 256GB 3GB RAM",
    price: 29,
    originalPrice: 59,
    image: "/images/customerReviews/seller3.png",
    badges: ["SALE", "NEW"],
    hasVideo: true,
  },
  {
    id: "4",
    name: "Apple iPhone X 256GB 3GB RAM",
    price: 29,
    originalPrice: 59,
    image: "/images/customerReviews/seller4.png",
    badges: ["SALE", "NEW"],
    hasVideo: true,
  },
  {
    id: "5",
    name: "Apple iPhone X 256GB 3GB RAM",
    price: 29,
    originalPrice: 59,
    image: "/images/customerReviews/seller2.png",
    badges: ["SALE", "NEW"],
    hasVideo: true,
  },
  
];
