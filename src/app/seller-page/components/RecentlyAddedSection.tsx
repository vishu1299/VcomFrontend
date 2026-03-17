import RelatedProductCard from "@/app/customer-reviews/components/RelatedProductCard";
import { RECENTLY_ADDED } from "../data/products";

export default function RecentlyAddedSection() {
  return (
    <section className="py-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg sm:text-xl font-bold ">Recently Added</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 min-w-0">
        {RECENTLY_ADDED.map((product) => (
          <RelatedProductCard key={product.id} id={product.id} name={product.name} price={product.price} originalPrice={product.originalPrice || 0  } image={product.image} badges={product.badges} hasVideo={product.hasVideo} sponsored={product.sponsored} />
        ))}
      </div>
      <div className=" flex justify-center items-center gap-2 w-full mt-6 mx-auto text-sm font-medium text-[#1E40AF] hover:text-[#1E40AF]/80">See more<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 9l6 6 6-6" />
      </svg> </div>
    </section>
  );
}
