import { remoteGalleryImage } from "@/lib/remoteAssets";

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

export const RELATED_PRODUCTS: RelatedProduct[] = [1, 2, 3, 4, 5].map((n, i) => ({
  id: String(n),
  name: "Apple iPhone X 256GB 3GB RAM",
  price: 29,
  originalPrice: i % 2 === 0 ? 33 : 59,
  image: remoteGalleryImage(i + 20, 500),
  badges: ["SALE", "NEW"] as ("SALE" | "NEW")[],
  hasVideo: true,
  sponsored: i < 2,
}));
