import PriceDetails from "../cart/components/PriceDetails";
import { PaymentMethodForm } from "./components";

export default function PaymentMethodPage() {
  const price = 399.0;
  const savings = -100.0;
  const deliveryCharges = 9.0;
  const totalAmount = 308.0;

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-[1440px] px-4 py-4 sm:px-6 sm:py-6 lg:px-8 xl:px-10 2xl:px-12">
        {/* Same 8+4 column split as shipping / cart sidebar */}
        <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-12 lg:gap-[20px]">
          <section className="min-w-0 lg:col-span-8">
            <PaymentMethodForm />
          </section>

          <aside className="lg:col-span-4 lg:sticky lg:top-6">
            <PriceDetails
              price={price}
              savings={savings}
              deliveryCharges={deliveryCharges}
              totalAmount={totalAmount}
              continueHref="/viewOrderDetails"
            />
          </aside>
        </div>
      </div>
    </main>
  );
}
