'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Copy } from 'lucide-react';

const MOCK_RETURN = {
  returnId: 'RTN-434231',
  status: 'IN TRANSIT',
  productImage: '/images/phone.png',
  productName: 'iPhone 17 Pro 256 GB: 15.93 cm (6.3") Display',
  price: '$299.00',
  color: 'Orange',
  quantity: 1,
  productNumber: '43-4234324',
  returnedDate: '13-11-2025',
  returnReason: 'Wrong Item Delivered',
  methodOfReturning: 'Standard Shipping',
  returnMethod: 'Refund',
  productCondition: "In it's Original State with bill box",
  additionalNotes:
    'Please I have attached all the important document kindly review this issue',
  deliveryAddress: 'Josh 21, Green Avenue, Tilak Nagar, New Delhi, 110018',
  trackingId: '#432-9877-63',
  refundPeriod: '16, Nov, 2025 - 20, Nov, 2025',
};

const VENDOR_INSTRUCTIONS = [
  'Keep the Product in Return-Ready Condition',
  'Pack All Original Items',
  'Pack the Item Securely',
  'Remove Personal Data',
  'Be Available for Pickup',
  'Show the Product to the Delivery Agent',
];

const RETURN_STEPS = [
  { label: 'Return Requested', date: 'Tuesday, 11, Nov', icon: 'cart' as const },
  { label: 'Shipping', date: 'Tuesday, 11, Nov', icon: 'processing' as const },
  { label: 'In Transit', date: 'Tuesday, 11, Nov', icon: 'processing' as const },
  { label: 'Item Delivery', date: 'Wednesday, 12, Nov', icon: 'itemdelivery' as const },
  { label: 'Quality Check', date: 'Thursday, 13, Nov', icon: 'check' as const },
  { label: 'Refund Initiated', date: 'Saturday, 16, Nov', icon: 'tick' as const },
  { label: 'Refund Completed', date: 'Saturday, 16, Nov', icon: 'tick' as const, isLast: true },
];

export default function ReturnDetailsPage() {
  const params = useParams();
  const returnId = (params?.returnId as string) ?? '1';
  const data = MOCK_RETURN;

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto py-6 lg:py-8 px-4 sm:px-6">
        <div className=" rounded-lg bg-white p-5 lg:p-5">
          {/* Header: Return Details + Return ID + Status badge + Need Help? */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl sm:text-xl font-bold text-[#131313]">Return Details</h1>
              <span className="text-sm font-medium text-[#131313]">#{data.returnId}</span>
              <span
                className="px-3 py-1 text-xs font-semibold uppercase tracking-wide"
                style={{ backgroundColor: '#B4FBFF', color: '#205B5E', borderRadius: 6 }}
              >
                {data.status}
              </span>
            </div>
            <Link
              href="/help"
              className="text-sm underline shrink-0"
              style={{ color: '#1E3A8A', textDecorationColor: '#1E3A8A' }}
            >
              Need Help?
            </Link>
          </div>

          {/* Two equal-width boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 mb-8">
            {/* Left box: product + shipping label */}
            <div className="border border-[#D2D2D2] rounded-[6px] bg-white p-5">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden mb-4">
                <Image
                  src={data.productImage}
                  alt={data.productName}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-medium text-[#131313]">{data.productName}</p>
              <p className="text-base font-bold mt-1" style={{ color: '#1E3A8A' }}>
                {data.price}
              </p>
              <div className="flex items-center gap-4 mt-1">
                <p className="text-xs text-[#131313]">
                  <span style={{ color: '#767676' }}>Color: </span>
                  {data.color}
                </p>
                <p className="text-xs text-[#131313]">
                  <span style={{ color: '#767676' }}>QTY: </span>
                  {data.quantity}
                </p>
              </div>
              <p className="text-xs text-[#131313] mt-1">
                <span style={{ color: '#767676' }}>Product Number: </span>
                {data.productNumber}
              </p>
              <div className="my-4">
                <hr className="border-0 h-px bg-[#D2D2D2]" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-[#131313]">
                    Your shipping label is ready.
                  </p>
                  <p className="text-xs text-[#131313] mt-0.5">
                    Download and attach to the package
                  </p>
                </div>
                <button
                  type="button"
                  className="w-fit shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-[6px] text-sm font-medium border hover:opacity-90"
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

            {/* Right box: return details key-value */}
            <div className="border border-[#D2D2D2] rounded-[6px] bg-white p-5 space-y-3 text-sm">
              <Row label="Return ID:" value={`#${data.returnId}`} />
              <Row label="Returned Date:" value={data.returnedDate} />
              <Row label="Return Reason:" value={data.returnReason} />
              <Row label="Method of returning:" value={data.methodOfReturning} />
              <Row label="Return Method:" value={data.returnMethod} />
              <Row label="Product current condition:" value={data.productCondition} />
              <Row label="Additional Notes:" value={data.additionalNotes} multiline />
              <Row label="Delivery Address:" value={data.deliveryAddress} multiline />
            </div>
          </div>

          {/* Vendor Return Instructions */}
          <div className="border border-[#D2D2D2] rounded-[6px] bg-white p-4 mb-8">
            <h2 className="text-md font-medium text-[#131313] mb-3">
              Vendor Return Instructions
            </h2>
            <ul className="list-disc list-inside space-y-1.5 text-sm" style={{ color: '#131313' }}>
              {VENDOR_INSTRUCTIONS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Return Updates: heading, then Tracking ID below, then timeline */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h2 className="text-lg font-bold text-[#131313]">Return Updates</h2>
              <Link
                href="/account/orders"
                className="text-sm underline"
                style={{ color: '#131313' }}
              >
                Check Shipping Status
              </Link>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-[#131313]">
                Tracking ID: {data.trackingId}
              </span>
              <button
                type="button"
                className="p-1 rounded hover:bg-gray-100"
                aria-label="Copy tracking ID"
              >
                <Copy className="w-4 h-4" style={{ color: '#3581EA' }} />
              </button>
            </div>

            <div className="border border-[#D2D2D2] rounded-lg bg-white p-6">
              {/* Mobile: vertical timeline — steps on left, label+date on right */}
              <div className="flex flex-col lg:hidden">
                {RETURN_STEPS.map((step, index) => (
                  <div key={step.label} className="flex items-start gap-3">
                    <div className="flex flex-col items-center shrink-0">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: step.isLast ? '#0C9200' : '#1E3A8A',
                        }}
                      >
                        {step.icon === 'cart' && (
                          <Image src="/cart.svg" alt="" width={20} height={20} />
                        )}
                        {step.icon === 'processing' && (
                          <Image src="/processing.svg" alt="" width={20} height={20} />
                        )}
                        {step.icon === 'itemdelivery' && (
                          <Image src="/Itemdelivery.svg" alt="" width={20} height={20} />
                        )}
                        {step.icon === 'check' && (
                          <Image src="/check.svg" alt="" width={20} height={20} />
                        )}
                        {step.icon === 'tick' && (
                          <Image src="/tick.svg" alt="" width={18} height={18} />
                        )}
                      </div>
                      {index < RETURN_STEPS.length - 1 && (
                        <div
                          className="w-0.5 flex-1 min-h-[12px] mt-1 bg-[#1E3A8A]"
                          aria-hidden
                        />
                      )}
                    </div>
                    <div className="pt-1.5 min-w-0 pb-4">
                      <p className="text-xs font-semibold text-[#131313]">
                        {step.label}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: '#767676' }}>
                        {step.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Web: horizontal stepper (unchanged) */}
              <div className="hidden lg:block relative">
                <div className="relative flex items-start">
                  <div
                    className="absolute top-5 h-0.5 bg-[#1E3A8A]"
                    style={{
                      left: 'calc(7.14% + 1.25rem)',
                      right: 'calc(7.14% + 1.25rem)',
                    }}
                    aria-hidden
                  />
                  {RETURN_STEPS.map((step) => (
                    <div
                      key={step.label}
                      className="flex-1 flex flex-col items-center min-w-[60px] relative z-10"
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: step.isLast ? '#0C9200' : '#1E3A8A',
                        }}
                      >
                        {step.icon === 'cart' && (
                          <Image src="/cart.svg" alt="" width={20} height={20} />
                        )}
                        {step.icon === 'processing' && (
                          <Image src="/processing.svg" alt="" width={20} height={20} />
                        )}
                        {step.icon === 'itemdelivery' && (
                          <Image src="/Itemdelivery.svg" alt="" width={20} height={20} />
                        )}
                        {step.icon === 'check' && (
                          <Image src="/check.svg" alt="" width={20} height={20} />
                        )}
                        {step.icon === 'tick' && (
                          <Image src="/tick.svg" alt="" width={18} height={18} />
                        )}
                      </div>
                      <p className="text-[10px] sm:text-xs font-semibold mt-2 text-[#131313] text-center whitespace-nowrap">
                        {step.label}
                      </p>
                      <p
                        className="text-[10px] sm:text-xs mt-0.5 text-center whitespace-nowrap"
                        style={{ color: '#767676' }}
                      >
                        {step.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <hr className="border-0 h-px bg-[#D2D2D2] my-4" />
              <p className="text-sm text-center" style={{ color: '#000000' }}>
                Your Refund will be issued between{' '}
                <span className="font-medium" style={{ color: '#000000' }}>
                  {data.refundPeriod}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-2 pt-5  text-center text-sm text-[#6b7280]">
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
          <Link href="/return-policy" className="hover:text-[#1e3a8a] hover:underline">
            Return Policy
          </Link>
        </footer>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  multiline,
}: {
  label: string;
  value: string;
  multiline?: boolean;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2 text-[#000000]">
      <span className="font-medium shrink-0">{label}</span>
      <span className={`text-left sm:text-right min-w-0 break-words ${multiline ? 'whitespace-pre-wrap' : ''}`}>{value}</span>
    </div>
  );
}
