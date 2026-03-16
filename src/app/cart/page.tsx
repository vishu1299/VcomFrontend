import RelatedProductsCarousel from "../customer-reviews/components/RelatedProductsCarousel";
import { CartHeader, CartItemCard, PriceDetails } from "./components";
import { CART_ITEMS } from "./data/items";

export default function CartPage() {
  const itemCount = CART_ITEMS.length;
  const price = 399.0;
  const savings = -100.0;
  const deliveryCharges = 9.0;
  const totalAmount = 308.0;

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="mx-auto  max-w-[1100px] py-6 sm:py-8">
        <section className="bg-white p-6 rounded-lg">
        <CartHeader itemCount={itemCount} />
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <section className="flex-1 min-w-0 space-y-4">
            {CART_ITEMS.map((item) => (
              <CartItemCard key={item.id} item={item} />
            ))}
          </section>

          <aside className="lg:w-[360px] shrink-0">
            <div className="lg:sticky lg:top-6">
              <PriceDetails
                price={price}
                savings={savings}
                deliveryCharges={deliveryCharges}
                totalAmount={totalAmount}
              />
            </div>
          </aside>
        </div>
        </section>
        <div className="w-full overflow-hidden ">
          <RelatedProductsCarousel title="Recently Browsed" />
        </div>
      </div>
    </main>
  );
}
