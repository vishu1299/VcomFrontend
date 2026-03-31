import type { ProductCardProps } from "../components/ProductCard";
import type { ExclusiveProduct, ExclusiveProductBadge } from "@/app/top-deals/data/products";
import { getSampleVideoUrl } from "@/app/top-deals/data/products";

function badgesFromProductCard(badges: string[]): ExclusiveProductBadge[] {
  const out: ExclusiveProductBadge[] = [];
  for (const b of badges) {
    if (b === "SPONSORED") continue;
    if (b === "NEW") out.push("new");
    else if (b.includes("% OFF")) out.push("10off");
    else if (b === "SALE") out.push("sale");
  }
  return out;
}

function hashId(id: string): number {
  const tail = id.replace(/^.*-/, "");
  const n = parseInt(tail, 10);
  return Number.isFinite(n) ? n : id.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
}

/** Maps list/card product props to `ExclusiveProduct` for `/products/[id]` detail cache. */
export function productCardPropsToExclusive(p: ProductCardProps): ExclusiveProduct {
  const badges = badgesFromProductCard(p.badges ?? []);
  if (p.badges?.includes("SPONSORED")) badges.push("sponsored");
  const idx = hashId(String(p.id));
  return {
    id: String(p.id),
    name: p.name,
    price: p.price,
    originalPrice: p.originalPrice,
    image: p.image,
    badges: badges.length ? badges : undefined,
    hasVideo: p.hasVideo ?? false,
    videoUrl: p.hasVideo ? getSampleVideoUrl(idx) : undefined,
  };
}
