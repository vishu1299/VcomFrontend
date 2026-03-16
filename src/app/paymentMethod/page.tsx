import PriceDetails from "../cart/components/PriceDetails";
import { PaymentMethodForm } from "./components";

export default function PaymentMethodPage() {
  const price = 399.0;
  const savings = -100.0;
  const deliveryCharges = 9.0;
  const totalAmount = 308.0;

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <section className="flex-1 min-w-0">
            <PaymentMethodForm />
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
      </div>
    </main>
  );
}
