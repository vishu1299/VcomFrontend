import RelatedProductsCarousel from "../customer-reviews/components/RelatedProductsCarousel";
import { OrderSuccessHeader, OrderDetailsContent } from "./components";

export default function ViewOrderDetailsPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <div className="mx-auto flex max-w-[1440px] flex-col px-4 py-4 sm:px-6 sm:py-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="flex flex-col gap-2 sm:gap-3">
          <OrderSuccessHeader />
          <OrderDetailsContent />
        </div>
        <div className="mt-0 w-full min-w-0 overflow-visible sm:mt-0">
          <RelatedProductsCarousel title="Similar Products" />
        </div>
      </div>
    </main>
  );
}
