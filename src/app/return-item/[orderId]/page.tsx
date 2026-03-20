'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useState, useRef } from 'react';
import { ChevronDown, ChevronUp, Package, Copy, Home, Info } from 'lucide-react';

const MOCK_ORDER = {
  orderId: '123456',
  deliveredOn: '11, Nov, 2025',
  productImage: '/images/phone.png',
  productName: 'iPhone 17 Pro 256 GB: 15.93 cm (6.3") Display',
  price: '$299.00',
  color: 'Orange',
  quantity: 1,
  productNumber: '43-4234324',
  paymentMethod: {
    name: 'Sam David',
    cardLastFour: '3214-4322-8900-XXXX',
    expiry: '04/2029',
    cvv: '232',
  },
};

const RETURN_REASONS = [
  'Item arrived damaged, missing parts or defective',
  "I changed my mind / ordered by mistake",
  'Wrong item, color, or size receive',
  "Doesn't fit the space / not right size",
  'Found a better price elsewhere',
  'Other (please explain)',
];

const PRODUCT_CONDITIONS = [
  'Unopened - still in original packaging',
  'Opened or Partially used - tested, minor handling',
  "Defective - doesn't work as expected",
  'Damaged during installation / by me',
  'Modified / cut to size',
];

const RETURN_ACTIONS = [
  { value: 'replacement', label: 'I would like a replacement', desc: 'We will replace your product with a new one after receiving.' },
  { value: 'refund', label: 'I want a refund', desc: 'We will process your refund, which may take up to 7 business days' },
  { value: 'voucher', label: 'Receive an instant voucher to use on new orders', desc: 'Use instantly on any new order', tag: '$35 Coupon' },
];

const SHIPPING_OPTIONS = [
  {
    id: '1',
    line1: 'DF-4 Street No.3',
    line2: 'New Delhi',
    line3: 'New Delhi Delhi 110023',
    phone: '+197984654',
    isDefault: true,
  },
];

const RETURN_METHOD_OPTIONS = [
  { id: 'standard', label: 'Standard Shipping', desc: 'Send back to store location within 48 hours' },
];

const REFUND_METHOD_OPTIONS = [
  { id: 'original', label: 'Original Payment method', type: 'card' as const },
  { id: 'balance', label: 'TibilMall Balance', type: 'balance' as const, balance: '$12' },
];

const RETURN_POLICY_SECTIONS = [
  {
    title: 'Eligible Conditions for Return',
    defaultOpen: true,
    content: (
      <ul className="list-disc list-outside pl-5 space-y-1 text-sm ml-0.5" style={{ color: '#767676' }}>
        <li className="pl-0.5">You received a defective or damaged product</li>
        <li className="pl-0.5">You received the wrong item, color, or size</li>
        <li className="pl-0.5">The product is missing accessories or parts</li>
        <li className="pl-0.5">You received a used / opened item</li>
      </ul>
    ),
  },
  { title: 'Items NOT Eligible for Return', defaultOpen: false, content: <p className="text-sm" style={{ color: '#767676' }}>Content for items not eligible.</p> },
  { title: 'Condition of Returned Product', defaultOpen: false, content: <p className="text-sm" style={{ color: '#767676' }}>Condition guidelines.</p> },
  { title: 'Return Pickup Process', defaultOpen: false, content: <p className="text-sm" style={{ color: '#767676' }}>Pickup process details.</p> },
];

function ReviewRow({
  label,
  value,
  noTopBorder,
}: {
  label: string;
  value: string;
  noTopBorder?: boolean;
}) {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-4 py-3 px-4 ${noTopBorder ? '' : 'border-t border-[#D2D2D2]'}`}
    >
      <span className="text-sm font-medium text-[#131313] shrink-0">{label}</span>
      <span className="text-sm text-[#131313] text-left sm:text-right min-w-0 whitespace-pre-wrap break-words">{value}</span>
    </div>
  );
}

function ReturnPolicyAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border border-[#D2D2D2] rounded-[6px] bg-white p-4">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-medium text-[#131313]">Return Policy</h3>
        <Link href="/help/return-policy" className="text-sm underline" style={{ color: '#3581EA', textDecorationColor: '#3581EA' }}>
          Return Policy
        </Link>
      </div>
      <div className="-mx-4 mt-3">
        <hr className="border-0 h-px bg-[#D2D2D2]" />
      </div>
      <ul className="space-y-0 mt-0">
        {RETURN_POLICY_SECTIONS.map((section, index) => {
          const isOpen = openIndex === index;
          return (
            <li key={section.title} className="border-b border-[#D2D2D2]">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full py-3 flex items-center justify-between gap-2 text-left text-sm font-medium text-[#131313] hover:bg-gray-50/50"
              >
                {section.title}
                {isOpen ? <ChevronUp className="w-4 h-4 shrink-0 text-[#6b7280]" /> : <ChevronDown className="w-4 h-4 shrink-0 text-[#6b7280]" />}
              </button>
              {isOpen && <div className="pb-3">{section.content}</div>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function ReturnItemPage() {
  const params = useParams();
  const router = useRouter();
  const orderId = (params?.orderId as string) ?? '1';
  const order = MOCK_ORDER;
  const [step, setStep] = useState(1);
  const [reason, setReason] = useState(RETURN_REASONS[0]);
  const [notes, setNotes] = useState('');
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [condition, setCondition] = useState(PRODUCT_CONDITIONS[0]);
  const [action, setAction] = useState(RETURN_ACTIONS[0].value);
  const [shippingId, setShippingId] = useState(SHIPPING_OPTIONS[0].id);
  const [returnMethodId, setReturnMethodId] = useState(RETURN_METHOD_OPTIONS[0].id);
  const [refundMethodId, setRefundMethodId] = useState(REFUND_METHOD_OPTIONS[0].id);
  const [confirmChecked, setConfirmChecked] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files?.length) return;
    const urls: string[] = [];
    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/')) urls.push(URL.createObjectURL(file));
    });
    setPreviewUrls((prev) => [...prev, ...urls].slice(0, 10));
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="max-w-[1200px] mx-auto py-6 lg:py-8 px-4 sm:px-6">
        <div className="border border-[#D2D2D2] rounded-lg bg-white p-6 lg:p-5 shadow-sm">
          {/* Header */}
          <h1 className="text-xl sm:text-xl font-bold text-[#131313]">Return or replace item</h1>
          <p className="text-sm mt-1" style={{ color: '#767676' }}>
            Easily return or replace products in just a few steps
          </p>

          {/* Horizontal line full width to box edges */}
          <div className="-mx-6 lg:-mx-5 mt-3">
            <hr className="border-0 h-px bg-[#D2D2D2]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[35%_1fr] gap-0 mt-4">
            {/* Left column: 28% — right column gets more width */}
            <div className="lg:pr-4 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-[#131313]">OrderID #{order.orderId}</span>
                  <button type="button" className="p-1 rounded hover:bg-gray-100" aria-label="Copy order ID">
                    <Copy className="w-4 h-4" style={{ color: '#3581EA' }} />
                  </button>
                </div>
                <span className="text-sm text-[#131313] sm:ml-auto">
                  Delivered on: {order.deliveredOn}
                </span>
              </div>

              {/* Product card: box with border, only image centred */}
              <div className="border border-[#D2D2D2] rounded-[6px] bg-white p-4">
                <div className="flex justify-center">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden">
                    <Image src={order.productImage} alt={order.productName} fill className="object-contain" />
                  </div>
                </div>
                <p className="text-sm font-medium text-[#131313] mt-3">{order.productName}</p>
                <p className="text-base font-bold mt-1" style={{ color: '#1E3A8A' }}>{order.price}</p>
                <div className="flex items-center gap-4 mt-1">
                  {/* Color group */}
                  <div className="flex items-center">
                    <span className="text-xs" style={{ color: '#767676' }}>Color:</span>
                    <span className="text-xs text-[#000000] ml-1">{order.color}</span>
                  </div>

                  {/* Qty group */}
                  <div className="flex items-center">
                    <span className="text-xs" style={{ color: '#767676' }}>QTY:</span>
                    <span className="text-xs text-[#000000] ml-1">{order.quantity}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs" style={{ color: '#767676' }}>Product Number:</span>
                  <span className="text-xs text-[#000000] ml-0.5">{order.productNumber}</span>
                </div>
              </div>

              <ReturnPolicyAccordion />
            </div>

            {/* Right column: content depends on step */}
            <div className="lg:pl-4 space-y-6 mt-6 lg:mt-0">
              {step === 1 && (
                <>
                  <section>
                    <h2 className="text-sm font-medium text-[#131313] mb-3">
                      What is the primary reason for returning the product
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {RETURN_REASONS.map((r) => (
                        <label
                          key={r}
                          className="flex items-center justify-between gap-3 p-3 border border-[#D2D2D2] rounded-[6px] cursor-pointer bg-white hover:bg-gray-50/50 has-[:checked]:border-[#1E3A8A] has-[:checked]:bg-[#F6F8FF]"
                        >
                          <span className="text-sm text-[#131313] min-w-0">{r}</span>
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
                  </section>

                  <section>
                    <h2 className="text-sm font-medium text-[#131313] mb-3">Upload Pictures</h2>
                    <div
                      className="rounded-[6px] p-8 flex flex-col items-center justify-center gap-2 cursor-pointer border-2 border-dashed bg-transparent"
                      style={{ borderColor: '#3581EA' }}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <Image src="/add.svg" alt="" width={40} height={32} className="shrink-0" />
                      <p className="text-sm text-[#131313]">Choose a file or drag & drop it here</p>
                      <p className="text-xs" style={{ color: '#767676' }}>
                        JPEG, PNG, PDG, and MP4 formats, up to 50 mb
                      </p>
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
                        className="mt-2 px-4 py-2 rounded-[6px] text-sm font-medium border border-[#D2D2D2] bg-white hover:bg-gray-50"
                        style={{ color: '#131313' }}
                      >
                        Browse File
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {previewUrls.length > 0
                        ? previewUrls.map((url, i) => (
                          <div key={url + i} className="w-16 h-16 shrink-0 rounded-lg overflow-hidden border border-[#D2D2D2] relative">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={url} alt="" className="w-full h-full object-cover" />
                          </div>
                        ))
                        : null}
                    </div>
                  </section>

                  <section>
                    <h2 className="text-sm font-medium text-[#131313] mb-2">Notes (Optional)</h2>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Add any additional notes..."
                      className="w-full min-h-[100px] p-3 text-sm border border-[#D2D2D2] rounded-[6px] bg-white text-[#131313] placeholder:text-[#9ca3af] focus:outline-none focus:ring-1 focus:ring-[#3581EA]"
                    />
                  </section>
                </>
              )}

              {step === 2 && (
                <>
                  <section>
                    <h2 className="text-sm font-medium text-[#131313] mb-3">
                      What is the product&apos;s current condition?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {PRODUCT_CONDITIONS.map((c) => (
                        <label
                          key={c}
                          className="flex items-center justify-between gap-3 p-3 border border-[#D2D2D2] rounded-[6px] cursor-pointer bg-white hover:bg-gray-50/50 has-[:checked]:border-[#1E3A8A] has-[:checked]:bg-[#F6F8FF]"
                        >
                          <span className="text-sm text-[#131313] min-w-0">{c}</span>
                          <input
                            type="radio"
                            name="condition"
                            value={c}
                            checked={condition === c}
                            onChange={() => setCondition(c)}
                            className="w-4 h-4 shrink-0 accent-[#1E3A8A]"
                            style={{ borderColor: '#49454F', color: '#49454F' }}
                          />
                        </label>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h2 className="text-sm font-medium text-[#131313] mb-3">What would you like to do?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {RETURN_ACTIONS.map((a) => (
                        <label
                          key={a.value}
                          className="flex items-start justify-between gap-3 p-3 border border-[#D2D2D2] rounded-[6px] cursor-pointer bg-white hover:bg-gray-50/50 has-[:checked]:border-[#1E3A8A] has-[:checked]:bg-[#F6F8FF]"
                        >
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-sm text-[#131313]">{a.label}</span>
                              {a.tag && (
                                <span
                                  className="text-xs font-medium px-2 py-0.5 rounded border border-dashed"
                                  style={{ borderColor: '#3581EA', backgroundColor: '#F6F8FF', color: '#131313' }}
                                >
                                  {a.tag}
                                </span>
                              )}
                            </div>
                            <p className="text-xs mt-1" style={{ color: '#767676' }}>{a.desc}</p>
                          </div>
                          <input
                            type="radio"
                            name="action"
                            value={a.value}
                            checked={action === a.value}
                            onChange={() => setAction(a.value)}
                            className="w-4 h-4 shrink-0 mt-0.5 accent-[#1E3A8A]"
                            style={{ borderColor: '#49454F', color: '#49454F' }}
                          />
                        </label>
                      ))}
                    </div>
                  </section>
                </>
              )}

              {step === 3 && (
                <>
                  <section>
                    <h3 className="text-sm font-medium text-[#131313] mb-3">Choose a method for shipping</h3>
                    <div className="space-y-3">
                      {SHIPPING_OPTIONS.map((opt) => (
                        <label
                          key={opt.id}
                          className="flex items-start gap-3 p-4 rounded-[6px] border cursor-pointer hover:bg-gray-50/50 transition-colors"
                          style={{ borderColor: '#D2D2D2', backgroundColor: 'white' }}
                        >
                          <div
                            className="flex items-center justify-center w-10 h-10 shrink-0 rounded-[6px]"
                            style={{ backgroundColor: '#E7E7E7' }}
                          >
                            <Home className="w-5 h-5 text-[#131313]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start gap-2 flex-wrap">
                              <span className="text-sm text-[#131313]">{opt.line1}</span>
                              {opt.isDefault && (
                                <span
                                  className="text-xs font-medium px-2 py-0.5 rounded shrink-0"
                                  style={{ backgroundColor: '#0C9200', color: 'white' }}
                                >
                                  Default
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-[#131313] mt-1">{opt.line2}</p>
                            <p className="text-sm text-[#131313]">{opt.line3}</p>
                            <p className="text-sm text-[#131313]">{opt.phone}</p>
                          </div>
                          <input
                            type="radio"
                            name="shipping"
                            checked={shippingId === opt.id}
                            onChange={() => setShippingId(opt.id)}
                            className="w-4 h-4 shrink-0 mt-0.5 accent-[#1E3A8A]"
                            style={{ borderColor: '#49454F', color: '#49454F' }}
                          />
                        </label>
                      ))}
                    </div>
                  </section>
                  <section>
                    <h3 className="text-sm font-medium text-[#131313] mb-3">Choose a method for returning method</h3>
                    <div className="space-y-3">
                      {RETURN_METHOD_OPTIONS.map((opt) => (
                        <label
                          key={opt.id}
                          className="flex items-start gap-3 p-4 rounded-[6px] border cursor-pointer hover:bg-gray-50/50 transition-colors"
                          style={{ borderColor: '#D2D2D2', backgroundColor: 'white' }}
                        >
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-medium text-[#131313] block">{opt.label}</span>
                            <p className="text-sm mt-1" style={{ color: '#767676' }}>
                              {opt.desc}
                            </p>
                          </div>
                          <input
                            type="radio"
                            name="returnMethod"
                            checked={returnMethodId === opt.id}
                            onChange={() => setReturnMethodId(opt.id)}
                            className="w-4 h-4 shrink-0 mt-0.5 accent-[#1E3A8A]"
                            style={{ borderColor: '#49454F', color: '#49454F' }}
                          />
                        </label>
                      ))}
                    </div>
                  </section>
                </>
              )}

              {step === 4 && (
                <>
                  <section>
                    <h2 className="text-base font-semibold text-[#131313] mb-1">Refund Method</h2>
                    <p className="text-sm mb-4" style={{ color: '#767676' }}>
                      Choose a refund method
                    </p>
                    <div
                      className="flex gap-2 p-3 rounded-lg mb-4"
                      style={{ backgroundColor: '#F3F7FA' }}
                    >
                      <Info className="w-5 h-5 shrink-0" style={{ color: '#3581EA' }} />
                      <p className="text-sm" style={{ color: '#000000' }}>
                        Estimated refund time: Refund will reflect after receiving the product
                      </p>
                    </div>
                  </section>

                  <section className="space-y-3">
                    {REFUND_METHOD_OPTIONS.map((opt) =>
                      opt.type === 'card' ? (
                        <label
                          key={opt.id}
                          className="block border border-[#D2D2D2] rounded-lg bg-white cursor-pointer overflow-hidden"
                        >
                          <div className="flex items-center justify-between px-4 py-3">
                            <span className="text-sm font-semibold text-[#131313]">Original Payment method</span>
                            <input
                              type="radio"
                              name="refundMethod"
                              checked={refundMethodId === opt.id}
                              onChange={() => setRefundMethodId(opt.id)}
                              className="w-4 h-4 accent-[#1E3A8A]"
                              style={{ borderColor: '#49454F' }}
                            />
                          </div>
                          <hr className="border-0 h-px bg-[#D2D2D2]" />
                          <div className="p-4">
                            <div className="flex items-start gap-3">
                              <div className="shrink-0 w-10 h-10 rounded border border-[#D2D2D2] bg-white flex items-center justify-center overflow-hidden">
                                <Image src="/axis.svg" alt="" width={22} height={20} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-[#131313]">{order.paymentMethod.name}</p>
                                <div className="mt-1 grid grid-cols-3 gap-4 text-xs">
                                  <div>
                                    <p className="font-medium mt-0.5" style={{ color: '#767676' }}>CARD NO.</p>
                                    <p className="mt-0.5" style={{ color: '#000000' }}>{order.paymentMethod.cardLastFour}</p>
                                  </div>
                                  <div>
                                    <p className="font-medium mt-0.5" style={{ color: '#767676' }}>EXPIRY</p>
                                    <p className="mt-0.5" style={{ color: '#000000' }}>{order.paymentMethod.expiry}</p>
                                  </div>
                                  <div>
                                    <p className="font-medium mt-0.5" style={{ color: '#767676' }}>CVV</p>
                                    <p className="mt-0.5" style={{ color: '#000000' }}>{order.paymentMethod.cvv}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </label>
                      ) : (
                        <label
                          key={opt.id}
                          className="flex items-center justify-between gap-3 p-4 rounded-[6px] border cursor-pointer hover:bg-gray-50/50 transition-colors"
                          style={{ borderColor: '#D2D2D2', backgroundColor: 'white' }}
                        >
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-semibold text-[#131313] block">{opt.label}</span>
                            {opt.balance && <p className="text-sm text-[#131313] mt-1">{opt.balance}</p>}
                          </div>
                          <input
                            type="radio"
                            name="refundMethod"
                            checked={refundMethodId === opt.id}
                            onChange={() => setRefundMethodId(opt.id)}
                            className="w-4 h-4 shrink-0 accent-[#1E3A8A]"
                            style={{ borderColor: '#49454F' }}
                          />
                        </label>
                      )
                    )}
                  </section>

                  <label className="flex items-start gap-2 cursor-pointer pt-2">
                    <input
                      type="checkbox"
                      checked={confirmChecked}
                      onChange={(e) => setConfirmChecked(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded border-2 border-[#49454F] accent-[#1E3A8A] checked:bg-[#1E3A8A]"
                    />
                    <span className="text-sm text-[#131313]">
                      I confirm the product is in original condition with all accessories.
                    </span>
                  </label>
                </>
              )}

              {step === 5 && (
                <>
                  <h2 className="text-base font-semibold text-[#131313] mb-4">Review and Confirm Return</h2>
                  <div
                    className="rounded-[6px] border overflow-hidden"
                    style={{ borderColor: '#D2D2D2', backgroundColor: 'white' }}
                  >
                    <ReviewRow
                      noTopBorder
                      label="Method of returning"
                      value={RETURN_METHOD_OPTIONS.find((o) => o.id === returnMethodId)?.label ?? 'Standard Shipping'}
                    />
                    <ReviewRow
                      label="Refund method"
                      value={action === 'refund' ? 'Refund' : action === 'replacement' ? 'Replacement' : 'Voucher'}
                    />
                    <ReviewRow label="Return reason" value={reason} />
                    <ReviewRow label="Product current condition" value={condition} />
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-4 py-3 px-4 border-t border-[#D2D2D2]">
                      <span className="text-sm font-medium text-[#131313] shrink-0">Uploaded Photo/Video</span>
                      <div className="flex flex-wrap gap-2 justify-start sm:justify-end min-w-0">
                        {previewUrls.length > 0 ? (
                          previewUrls.map((url, i) => (
                            <div key={`${url}-${i}`} className="w-14 h-14 shrink-0 rounded overflow-hidden border border-[#D2D2D2]">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={url} alt="" className="w-full h-full object-cover" />
                            </div>
                          ))
                        ) : (
                          <span className="text-sm text-[#767676]">No photo/video</span>
                        )}
                      </div>
                    </div>
                    <ReviewRow label="Additional Notes" value={notes || '—'} />
                  </div>
                </>
              )}

              {/* Action buttons - right after step content */}
              <div className="flex flex-wrap gap-3 justify-end pt-6">
                <button
                  type="button"
                  onClick={() => (step === 1 ? router.back() : setStep(step - 1))}
                  className="min-h-[44px] px-5 rounded-[6px] text-sm font-medium border border-[#D2D2D2] bg-white text-[#131313] hover:bg-gray-50"
                >
                  {step === 1 ? 'Cancel' : 'Back'}
                </button>
                {step === 5 ? (
                  <button
                    type="button"
                    onClick={() => router.push(`/return-success/${orderId}`)}
                    className="min-h-[44px] px-5 rounded-[6px] text-sm font-medium bg-[#1E3A8A] text-white hover:opacity-90"
                  >
                    Confirm Return
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => step < 5 && setStep(step + 1)}
                    className="min-h-[44px] px-5 rounded-[6px] text-sm font-medium bg-[#1E3A8A] text-white hover:opacity-90"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-2 pt-6  text-center text-sm text-[#6b7280]">
          <Link href="/" className="hover:text-[#1e3a8a] hover:underline">Home</Link>
          <span className="mx-2">|</span>
          <Link href="/account/orders" className="hover:text-[#1e3a8a] hover:underline">My Orders</Link>
          <span className="mx-2">|</span>
          <Link href="/help" className="hover:text-[#1e3a8a] hover:underline">Help Center</Link>
          <span className="mx-2">|</span>
          <Link href="/privacy" className="hover:text-[#1e3a8a] hover:underline">Privacy Policy</Link>
        </footer>
      </div>
    </div>
  );
}
