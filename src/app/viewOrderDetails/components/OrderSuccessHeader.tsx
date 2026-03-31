import Image from "next/image";

export default function OrderSuccessHeader() {
  return (
    <header className="px-0 py-2 text-[#131313] sm:py-2">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-xl font-bold text-[#131313] sm:text-2xl">
              Your Order has been successfully Completed!
            </h1>
            <Image
              src="/success-tick.svg"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 shrink-0"
            />
          </div>
          <p className="mt-2  text-sm text-[#131313]">
            Thank you for shopping with us. Your order has been placed and is being processed.
          </p>
        </div>
        <div className="relative h-[100px] w-[120px] shrink-0">
          <Image
            src="/images/delivery.png"
            alt=""
            fill
            className="object-contain"
            sizes="120px"
          />
        </div>
      </div>
    </header>
  );
}
