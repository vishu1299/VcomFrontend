import UpcomingLiveCard from "@/app/all-live-now/components/UpcomingLiveCard";
import { UpcomingLiveProducts } from "../data/products";
import RelatedProductsCarousel from "@/app/customer-reviews/components/RelatedProductsCarousel";

export default function UpcomingLive() {
    return (
        <section className="py-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 min-w-0">
                {UpcomingLiveProducts.map((product) => (
                    <UpcomingLiveCard key={product.id} id={product.id} title={product.title} image={product.image} scheduledDate={product.scheduledDate} viewCount={product.viewCount} />
                ))}
            </div>
            <div className="w-full overflow-hidden">
                <RelatedProductsCarousel title="Recently added from this Store"/>
            </div>
        </section>
    );
}