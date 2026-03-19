'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const MOCK_RETURN = {
  orderId: '123456',
  returnId: 'RTN-434231',
  productImage: '/images/phone.png',
  productName: 'iPhone 17 Pro 256 GB: 15.93 cm (6.3") Display',
  price: '$299.00',
  color: 'Orange',
  quantity: 1,
  productNumber: '43-4234324',
};

const VENDOR_INSTRUCTIONS = [
  'Keep the Product in Return-Ready Condition',
  'Pack All Original Items',
  'Pack the Item Securely',
  'Remove Personal Data',
  'Be Available for Pickup',
  'Show the Product to the Delivery Agent',
];

export default function ReturnSuccessPage() {
  const params = useParams();
  const orderId = (params?.orderId as string) ?? '1';
  const data = MOCK_RETURN;

  return (
    <div className="bg-[#F5F5F5]">
      <div className="max-w-[1200px] mx-auto py-6 lg:py-8 px-4 sm:px-6">
        {/* Parent box: border #D2D2D2, bg white */}
        <div className="border border-[#D2D2D2] rounded-lg bg-white p-6 lg:p-8">
          {/* Header: Your Return Request Has Been Submitted + tick */}
          <div className="flex items-center gap-3 mb-6">
            <h1 className="text-xl sm:text-2xl font-bold text-[#131313]">
              Your Return Request Has Been Submitted
            </h1>
            <Image src="/success-tick.svg" alt="" width={32} height={32} className="shrink-0" />
          </div>

          {/* Product box + buttons row: product box 50% width, buttons vertically centred */}
          <div className="grid grid-cols-1 lg:grid-cols-[60%_1fr] gap-6 mb-8 items-center">
            {/* Product box: two columns 40% image + shipping, 60% details */}
            <div className="border border-[#D2D2D2] rounded-[6px] bg-white p-5">
              {/* Row 1: Left = image, Right = description (aligned to top) */}
              <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-4 items-start">
                <div className="flex justify-center">
                  <div className="relative w-[140px] aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={data.productImage}
                      alt={data.productName}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-[#131313]">{data.productName}</p>
                  <p className="text-base font-bold mt-1" style={{ color: '#1E3A8A' }}>
                    {data.price}
                  </p>
                  <div className="flex items-center gap-4 mt-1">
                    <p className="text-xs">
                      <span style={{ color: '#767676' }}>Color: </span>
                      <span style={{ color: '#131313' }}>{data.color}</span>
                    </p>
                    <p className="text-xs">
                      <span style={{ color: '#767676' }}>QTY: </span>
                      <span style={{ color: '#131313' }}>{data.quantity}</span>
                    </p>
                  </div>
                  <p className="text-xs mt-1 text-[#131313]">
                    Product Number: {data.productNumber}
                  </p>
                </div>
              </div>

              {/* Horizontal line */}
              <hr className="border-0 h-px bg-[#D2D2D2] my-4 -mx-5" />

              {/* Row 2: Left = shipping label text, Right = icon + Download Label button */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 items-center">
                <p className="text-sm text-[#131313] min-w-0">
                  Your shipping label is ready. Download and attach to the package
                </p>
                <button
                  type="button"
                  className="w-fit inline-flex items-center gap-2 px-4 py-2 rounded-[6px] text-sm font-medium border hover:opacity-90 shrink-0"
                  style={{
                    borderColor: '#3581EA',
                    backgroundColor: '#F6F8FF',
                    color: '#3581EA',
                  }}
                >
                  <Image src="/invoice.svg" alt="" width={20} height={20} />
                  Download Label
                </button>
              </div>
            </div>

            {/* Right: Action buttons - mobile: Track Return full width, then two 50-50; web: stacked 300px right-aligned */}
            <div className="flex flex-col gap-3 w-full lg:w-auto lg:items-end">
              <Link
                href={`/return-details/${data.returnId}`}
                className="min-h-[44px] w-full lg:w-[300px] rounded-[6px] text-sm font-medium bg-[#1E3A8A] text-white hover:opacity-90 flex items-center justify-center"
              >
                Track Return
              </Link>
              <div className="grid grid-cols-2 gap-3 lg:contents">
                <Link
                  href="/account/orders"
                  className="min-h-[44px] w-full min-w-0 lg:w-[300px] rounded-[6px] text-sm font-medium border border-[#D2D2D2] bg-white text-[#131313] hover:bg-gray-50 flex items-center justify-center"
                >
                  Go to My Orders
                </Link>
                <Link
                  href="/product-list"
                  className="min-h-[44px] w-full min-w-0 lg:w-[300px] rounded-[6px] text-sm font-medium border border-[#D2D2D2] bg-white text-[#131313] hover:bg-gray-50 flex items-center justify-center"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          {/* Vendor Return Instructions box */}
          <div className="border border-[#D2D2D2] rounded-[6px] bg-white p-5">
            <h2 className="text-base font-medium text-[#131313] mb-4">
              Vendor Return Instructions !
            </h2>
            <ul className="list-disc list-outside pl-5 space-y-2.5 text-sm text-black">
              {VENDOR_INSTRUCTIONS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer - outside parent box, same spacing as return-item */}
        <footer className="mt-2 pt-6 text-center text-sm text-[#6b7280]">
          <Link href="/" className="hover:text-[#1e3a8a] hover:underline">
            Home
          </Link>
          <span className="mx-2">|</span>
          <Link href="/account/orders" className="hover:text-[#1e3a8a] hover:underline">
            My Orders
          </Link>
          <span className="mx-2">|</span>
          <Link href="/help" className="hover:text-[#1e3a8a] hover:underline">
            Help Center
          </Link>
          <span className="mx-2">|</span>
          <Link href="/privacy" className="hover:text-[#1e3a8a] hover:underline">
            Privacy Policy
          </Link>
          <span className="mx-2">|</span>
          <Link href="/help/return-policy" className="hover:text-[#1e3a8a] hover:underline">
            Return Policy
          </Link>
        </footer>
      </div>
    </div>
  );
}
