'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { ChevronRight, Copy, Info } from 'lucide-react';

// Mock order detail for cancel page (extends order list data)
const MOCK_ORDER_DETAIL: Record<
  string,
  {
    orderNumber: string;
    productImage: string;
    productName: string;
    price: string;
    color?: string;
    quantity: number;
    estimatedDelivery: string;
    productNumber: string;
    total: string;
    refundAmount: string;
    paymentMethod: { name: string; cardLastFour: string; expiry: string; cvv: string };
  }
> = {
  '1': {
    orderNumber: '123456',
    productImage: '/images/phone.png',
    productName: 'iPhone 17 Pro 256 GB: 15.93 cm (6.3") Display',
    price: '$299.00',
    color: 'Orange',
    quantity: 1,
    estimatedDelivery: '11, Nov, 2025',
    productNumber: '43-4234324',
    total: '$310.00',
    refundAmount: '₹1,39,999',
    paymentMethod: {
      name: 'Sam David',
      cardLastFour: '3214-4322-8900-XXXX',
      expiry: '04/2029',
      cvv: '232',
    },
  },
};

const CANCELLATION_REASONS = [
  'Changed my mind',
  'Found a better deal elsewhere',
  'Want to modify the address',
  'Payment issue / duplicate order',
  'Delivery taking too long',
  'Ordered wrong product / variant',
  'Other',
];

const POLICY_SECTIONS = [
  {
    title: 'Orders Can Be Cancelled Before Shipment',
    defaultOpen: true,
    body: 'You can cancel your order any time before it is packed or shipped. Once the order moves to "Shipped", cancellation is no longer possible.',
  },
  {
    title: 'Instant Refund on Prepaid Orders',
    defaultOpen: false,
    body: 'For orders paid online, refund will be initiated within 24 hours of cancellation approval.',
  },
  {
    title: 'No Cancellation After Dispatch',
    defaultOpen: false,
    body: 'Once the order has been dispatched from our warehouse, cancellation cannot be processed. You may return the product after delivery if eligible.',
  },
  {
    title: 'High-Value or Limited-Stock Items',
    defaultOpen: false,
    body: 'Some high-value or limited-stock items may have different cancellation windows. Check the product page for details.',
  },
];

function PolicyAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      <div className="flex items-center justify-between gap-2 mb-3">
        <h3 className="text-sm font-semibold text-[#131313]">Cancellation Policy</h3>
        <Link href="/help/cancellation" className="text-sm underline hover:opacity-90" style={{ color: '#3581EA', textDecorationColor: '#3581EA' }}>
          Cancellation Policy
        </Link>
      </div>
      <ul className="space-y-0">
        {POLICY_SECTIONS.map((section, index) => {
          const isOpen = openIndex === index;
          return (
            <li key={section.title} className="border-b border-[#D2D2D2] last:border-b-0">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full py-3 flex items-center justify-between gap-2 text-left text-sm font-medium text-[#131313] hover:bg-gray-50/50"
              >
                {section.title}
                <ChevronRight
                  className={`w-4 h-4 shrink-0 text-[#6b7280] transition-transform ${isOpen ? 'rotate-90' : ''}`}
                />
              </button>
              {isOpen && (
                <p className="pb-3 text-sm text-[#6b7280] leading-relaxed">{section.body}</p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function CancelOrderPage() {
  const params = useParams();
  const router = useRouter();
  const orderId = params?.orderId as string;
  const order = orderId
    ? MOCK_ORDER_DETAIL[orderId] ?? MOCK_ORDER_DETAIL['1']
    : null;

  const [reason, setReason] = useState('Changed my mind');
  const [otherReason, setOtherReason] = useState('');
  const [confirmChecked, setConfirmChecked] = useState(false);

  if (!order) {
    return (
      <div className="p-6 lg:p-8">
        <p className="text-[#6b7280]">Order not found.</p>
        <Link href="/account/orders" className="text-[#1e3a8a] hover:underline mt-2 inline-block">
          Back to My Orders
        </Link>
      </div>
    );
  }

  const productNameShort = order.productName.split(':')[0] || order.productName;

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto py-6 lg:py-8 px-4 sm:px-6">
        <div className="border border-[#D2D2D2] rounded-lg bg-white p-6 lg:p-4">
        {/* Header — one row on all screens: Cancel Order left, Need Help right */}
        <div className="flex flex-row items-center justify-between gap-4 mb-4">
          <h1 className="text-xl sm:text-2xl font-bold text-[#131313] shrink-0">Cancel Order</h1>
          <Link
            href="/help"
            className="text-sm underline hover:opacity-90 shrink-0"
            style={{ color: '#1E3A8A', textDecorationColor: '#1E3A8A' }}
          >
            Need Help?
          </Link>
        </div>
        <hr className="border-0 h-px bg-[#D2D2D2] mb-6" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Left column: Order + Product + Policy */}
          <div className="lg:col-span-2 space-y-4">
            {/* Order ID (left) | Estimated Delivery (right) */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-[#131313]">
                  OrderID #{order.orderNumber}
                </span>
                <button
                  type="button"
                  className="p-1 rounded hover:bg-gray-100"
                  aria-label="Copy order ID"
                >
                  <Copy className="w-4 h-4 text-[#3581EA]" />
                </button>
              </div>
              <span className="text-sm" style={{ color: '#131313' }}>
                Estimated Delivery: {order.estimatedDelivery}
              </span>
            </div>

            {/* Product card — bg #F3F7FA */}
            <div className="border border-[#D2D2D2] rounded-lg p-4" style={{ backgroundColor: '#F3F7FA' }}>
              <div className="flex justify-center mb-3">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-lg bg-gray-100 overflow-hidden">
                  <Image
                    src={order.productImage}
                    alt={order.productName}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-sm font-medium text-[#131313]">{order.productName}</p>
              <p className="text-base font-bold mt-1" style={{ color: '#1E3A8A' }}>{order.price}</p>
              <div className="flex items-center gap-4 mt-2">
                <p className="text-xs">
                  <span style={{ color: '#767676' }}>Color: </span>
                  <span style={{ color: '#131313'  }}>{order.color}</span>
                </p>
                <p className="text-xs">
                  <span style={{ color: '#767676' }}>QTY: </span>
                  <span style={{ color: '#131313' }}>{order.quantity}</span>
                </p>
              </div>
              <p className="text-xs mt-2">
                <span style={{ color: '#767676' }}>Product Number: </span>
                <span style={{ color: '#131313' }}>{order.productNumber}</span>
              </p>
            </div>

            {/* Cancellation Policy — in box border #D2D2D2, bg white */}
            <div className="border border-[#D2D2D2] rounded-lg bg-white p-4">
              <PolicyAccordion />
            </div>
          </div>

        {/* Right column: Reason, Refund, Payment, Confirm */}
        <div className="lg:col-span-3 space-y-5">
          <section>
            <h2 className="text-sm font-semibold text-[#131313] mb-3">
              Why do you want to cancel?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {CANCELLATION_REASONS.map((r) => (
                <label
                  key={r}
                  className="flex items-center justify-between gap-3 p-3 border border-[#D2D2D2] rounded-lg cursor-pointer bg-white hover:bg-gray-50/50 has-[:checked]:border-[#1e3a8a] has-[:checked]:bg-[#f6f8ff]"
                >
                  <span className="text-sm" style={{ color: '#131313' }}>{r}</span>
                  <input
                    type="radio"
                    name="reason"
                    value={r}
                    checked={reason === r}
                    onChange={() => setReason(r)}
                    className="w-4 h-4 shrink-0 accent-[#1E3A8A]"
                    style={{ borderColor: '#49454F', color: '#49454F' }}
                  />
                </label>
              ))}
            </div>
            {reason === 'Other' && (
              <input
                type="text"
                placeholder="Please specify"
                value={otherReason}
                onChange={(e) => setOtherReason(e.target.value)}
                className="mt-2 w-full min-h-[40px] px-3 border border-[#D2D2D2] rounded-lg text-sm bg-white outline-none focus:border-[#1e3a8a]"
              />
            )}
          </section>

          <div
            className="flex gap-2 p-3 rounded-lg bg-[#FFF1C6]"
            role="alert"
          >
            <Info className="w-5 h-5 shrink-0 text-black" />
            <p className="text-sm text-black">
              Your order for {productNameShort} hasn&apos;t been shipped yet. Once canceled, it
              cannot be reinstated.
            </p>
          </div>

          <section>
            <h2 className="text-sm font-semibold mb-2" style={{ color: '#131313' }}>Refund Method</h2>
            <p className="text-sm" style={{ color: '#767676' }}>
              Once canceled, {order.refundAmount} will be refunded to your original payment method.
            </p>
            <div className="flex gap-2 p-3 mt-8 rounded-lg bg-[#F3F7FA]">
              <Info className="w-5 h-5 shrink-0 text-[#131313]" />
              <p className="text-sm text-[#131313]">
                Estimated refund time: Refund will reflect within 3-5 business days.
              </p>
            </div>
          </section>

          <section>
            <label className="block border border-[#D2D2D2] rounded-t-lg bg-white cursor-pointer overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-sm font-semibold text-[#131313]">Original Payment method</span>
                <input type="radio" name="payment" defaultChecked className="w-4 h-4 accent-[#1E3A8A]" style={{ borderColor: '#49454F' }} />
              </div>
              <hr className="border-0 h-px bg-[#D2D2D2]" />
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded border border-[#D2D2D2] bg-white flex items-center justify-center overflow-hidden">
                    <Image src="/axis.svg" alt="" width={22} height={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#131313]">{order.paymentMethod.name}</p>
                    <div className="mt-2 grid grid-cols-3 gap-4 text-xs">
                      <div>
                        <p className="font-medium text-[#131313]">CARD NO.</p>
                        <p className="text-[#131313] mt-0.5">{order.paymentMethod.cardLastFour}</p>
                      </div>
                      <div>
                        <p className="font-medium text-[#131313]">EXPIRY</p>
                        <p className="text-[#131313] mt-0.5">{order.paymentMethod.expiry}</p>
                      </div>
                      <div>
                        <p className="font-medium text-[#131313]">CVV</p>
                        <p className="text-[#131313] mt-0.5">{order.paymentMethod.cvv}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </label>
          </section>

          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={confirmChecked}
              onChange={(e) => setConfirmChecked(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-2 border-[#49454F] accent-[#1E3A8A] checked:bg-[#1E3A8A]"
            />
            <span className="text-sm" style={{ color: '#131313' }}>
              I confirm the product is in original condition with all accessories.
            </span>
          </label>

          <div className="flex flex-wrap gap-3 pt-2 justify-end">
            <button
              type="button"
              onClick={() => router.back()}
              className="min-h-[44px] px-5 rounded-lg text-sm font-medium border border-[#D2D2D2] bg-white text-black hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="button"
              disabled={!confirmChecked}
              onClick={() => confirmChecked && router.push(`/cancel-order/${orderId}/success`)}
              className="min-h-[44px] px-5 rounded-lg text-sm font-medium bg-[#ED0000] text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-[#ccc]"
            >
              Confirm Cancellation
            </button>
          </div>
        </div>
      </div>
      </div>
      </div>

      {/* Footer links — outside the box */}
      <footer className="mt-4 pt-2 text-center text-sm text-[#131313] px-4 sm:px-6">
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
      </footer>
    </div>
  );
}
