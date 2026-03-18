import RelatedProductsCarousel from "../customer-reviews/components/RelatedProductsCarousel";
import { OrderSuccessHeader, OrderDetailsContent } from "./components";

export default function ViewOrderDetailsPage() {
  return (
    <main className="page-text-black min-h-screen bg-gray-100">
      <OrderSuccessHeader />
      <OrderDetailsContent />
      <div className="w-full overflow-hidden">
        <RelatedProductsCarousel title="Similar Products" />
      </div>
    </main>
  );
}
