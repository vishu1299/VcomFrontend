export default function OrderSuccessHeader() {
  return (
    <header className="text-gray-300 px-4 sm:px-6 py-8 sm:py-10">
      <div className="mx-auto max-w-[1100px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-xl sm:text-2xl font-bold text-black">
              Your Order has been successfully Completed!
            </h1>
            <img src="/images/greenCheck.png" alt="" className="w-8 h-8 shrink-0 object-contain" aria-hidden />
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Thank you for shopping with us. Your order has been placed and is being processed.
          </p>
        </div>
        <img src="/images/delivery.png" alt="" className="w-[120px] h-[100px] shrink-0 object-contain opacity-90" aria-hidden />
      </div>
    </header>
  );
}
