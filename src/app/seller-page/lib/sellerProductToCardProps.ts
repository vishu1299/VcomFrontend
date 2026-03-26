import type { ProductCardProps } from "@/app/product-list/components/ProductCard";
import type { SellerProduct } from "../data/products";

export function sellerProductToCardProps(p: SellerProduct): ProductCardProps {
  const badges: string[] = [...p.badges];
  if (p.sponsored) badges.push("SPONSORED");
  return {
    id: p.id,
    name: p.name,
    price: p.price,
    originalPrice: p.originalPrice,
    image: p.image,
    badges,
    hasVideo: p.hasVideo ?? false,
  };
}
