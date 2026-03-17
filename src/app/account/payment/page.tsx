'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Plus, Pencil, Trash2, X } from 'lucide-react';

type PaymentType = 'card' | 'paypal' | 'netbanking';

const inputClass =
  'w-full min-h-[40px] px-3 py-2 text-sm border border-[var(--color-border-input)] rounded-lg bg-white outline-none focus:border-[var(--color-main-blue)]';
const labelClass = 'block text-sm font-medium text-[var(--color-black-01)] mb-1.5';

interface PaymentMethod {
  id: string;
  cardImage: string;
  cardHolderName: string;
  bankName: string;
  cardNumberMasked: string;
  cvv: string;
  expiry: string;
  isDefault: boolean;
}

const MOCK_PAYMENTS: PaymentMethod[] = [
  {
    id: '1',
    cardImage: '/images/card1.png',
    cardHolderName: 'Sam David',
    bankName: 'Axix bank',
    cardNumberMasked: 'XXXX - XXXX - XXXX - 5612',
    cvv: '124',
    expiry: '04 / 2029',
    isDefault: true,
  },
  {
    id: '2',
    cardImage: '/images/card2.png',
    cardHolderName: 'Sam David',
    bankName: 'Punjab National bank',
    cardNumberMasked: 'XXXX - XXXX - XXXX - 5612',
    cvv: '876',
    expiry: '04 / 2029',
    isDefault: false,
  },
];

function PaymentCard({
  payment,
  onSetDefault,
  onEdit,
  onDelete,
}: {
  payment: PaymentMethod;
  onSetDefault: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-white p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1 min-w-0">
        <div className="shrink-0 rounded-xl overflow-hidden">
          <Image
            src={payment.cardImage}
            alt="Card"
            width={200}
            height={126}
            className="rounded-xl object-contain w-full max-w-[200px] h-auto"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <div className="flex items-center gap-1.5">
              <Image src="/user.svg" alt="" width={16} height={16} className="shrink-0" />
              <span className="text-sm font-bold" style={{ color: '#131313' }}>{payment.cardHolderName}</span>
            </div>
            {payment.isDefault ? (
              <span
                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium text-white shrink-0"
                style={{ backgroundColor: '#0C9200' }}
              >
                Default
              </span>
            ) : (
              <button
                type="button"
                onClick={() => onSetDefault(payment.id)}
                className="text-xs font-medium px-2 py-1 rounded border bg-white text-black hover:bg-gray-50"
                style={{ borderColor: '#D2D2D2' }}
              >
                Set as default
              </button>
            )}
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 mb-2">
            <div>
              <p className="text-xs" style={{ color: '#767676' }}>CVV</p>
              <p className="text-sm font-medium text-black">{payment.cvv}</p>
            </div>
            <div>
              <p className="text-xs" style={{ color: '#767676' }}>EXPIRY</p>
              <p className="text-sm font-medium text-black">{payment.expiry}</p>
            </div>
          </div>
          <div>
            <p className="text-xs mb-0.5" style={{ color: '#767676' }}>Bank</p>
            <p className="text-sm font-medium text-black">{payment.bankName}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:shrink-0 sm:ml-4">
        <button
          type="button"
          onClick={() => onEdit(payment.id)}
          className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium border border-[var(--color-border)] text-[var(--color-black-01)] hover:bg-gray-50"
        >
          <Pencil className="w-4 h-4" />
          Edit Payment
        </button>
        <button
          type="button"
          onClick={() => onDelete(payment.id)}
          className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium border border-red-200 text-red-500 hover:bg-red-50 w-full sm:w-auto"
        >
          <Trash2 className="w-4 h-4 shrink-0" />
          Delete
        </button>
      </div>
    </div>
  );
}

function AddPaymentModal({
  open,
  onClose,
  onSave,
}: {
  open: boolean;
  onClose: () => void;
  onSave: (data: { cardNumber: string; cardHolderName: string; expiry: string; cvv: string; setAsDefault: boolean }) => void;
}) {
  const [paymentType, setPaymentType] = useState<PaymentType>('card');
  const [cardNumber, setCardNumber] = useState('4894-7898-4597-1358');
  const [cardHolderName, setCardHolderName] = useState('Sam David');
  const [expiry, setExpiry] = useState('07 / 2029');
  const [cvv, setCvv] = useState('455');
  const [paypalId, setPaypalId] = useState('');
  const [setAsDefault, setSetAsDefault] = useState(false);

  const isFormComplete =
    paymentType === 'card'
      ? Boolean(cardNumber.trim() && cardHolderName.trim() && expiry.trim() && cvv.trim())
      : paymentType === 'paypal'
        ? Boolean(paypalId.trim())
        : paymentType === 'netbanking';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (paymentType === 'card') {
      onSave({ cardNumber, cardHolderName, expiry, cvv, setAsDefault });
    }
    onClose();
  };

  if (!open) return null;

  const paymentTypeOptions: { value: PaymentType; label: string }[] = [
    { value: 'card', label: 'Credit / Debit Card' },
    { value: 'paypal', label: 'Paypal' },
    { value: 'netbanking', label: 'Net Banking' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-4xl min-h-[520px] max-h-[90vh] overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header: heading, subheading, close */}
        <div className="shrink-0 border-b border-[var(--color-border)] px-8 pt-6 pb-5 flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-[var(--color-black-01)]">Add new Payment Method</h2>
            <p className="text-sm text-[var(--color-muted-alt-2)] mt-1.5">
              Securely add your preferred payment option for faster checkouts
            </p>
          </div>
          <button type="button" onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100" aria-label="Close">
            <X className="w-5 h-5 text-[var(--color-muted-alt-2)]" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0">
          {/* Two columns: 30% payment type, vertical divider, remaining fields - divider runs to bottom */}
          <div className="flex flex-col lg:flex-row flex-1 min-h-0 px-8 pt-6 pb-0">
            {/* First column: 30% - Select Payment Type */}
            <div className="w-full lg:w-[30%] shrink-0 lg:pr-6 lg:self-stretch lg:py-6 lg:pl-8 lg:-ml-8 bg-[#FCFCFC] lg:rounded-bl-2xl">
              <h3 className="text-sm font-bold text-[var(--color-black-01)] mb-4">Select Payment Type</h3>
              <div className="space-y-3">
                {paymentTypeOptions.map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex items-center justify-between gap-2 px-4 py-3 rounded-lg border cursor-pointer transition ${paymentType === opt.value
                        ? 'border-[var(--color-main-blue)] bg-white text-[var(--color-main-blue)]'
                        : 'border-[var(--color-border)] bg-white text-[var(--color-black-01)] hover:border-gray-400'
                      }`}
                  >
                    <span className="text-sm font-medium">{opt.label}</span>
                    <span
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${paymentType === opt.value ? 'border-[var(--color-main-blue)]' : 'border-gray-300'
                        }`}
                    >
                      {paymentType === opt.value && (
                        <span className="w-2 h-2 rounded-full bg-[var(--color-main-blue)]" />
                      )}
                    </span>
                    <input
                      type="radio"
                      name="paymentType"
                      value={opt.value}
                      checked={paymentType === opt.value}
                      onChange={() => setPaymentType(opt.value)}
                      className="sr-only"
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Vertical divider between columns - full height to bottom of modal */}
            <div className="hidden lg:block w-px bg-[var(--color-border)] shrink-0 self-stretch min-h-0" aria-hidden />

            {/* Second column: remaining - fields by type */}
            <div className="flex-1 min-w-0 lg:pl-6 lg:py-6 mt-6 lg:mt-0">
              {paymentType === 'card' && (
                <>
                  <h3 className="text-sm font-bold text-[var(--color-black-01)] mb-4">Credit Card / Debit Card</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>
                        Card Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className={inputClass}
                        placeholder="Enter Card Number"
                        required
                      />
                    </div>
                    <div>
                      <label className={labelClass}>
                        Card Holder Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={cardHolderName}
                        onChange={(e) => setCardHolderName(e.target.value)}
                        className={inputClass}
                        placeholder="Enter Card Holder Name"
                        required
                      />
                    </div>
                    <div>
                      <label className={labelClass}>
                        Expiry <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        className={inputClass}
                        placeholder="Enter Expiry"
                        required
                      />
                    </div>
                    <div>
                      <label className={labelClass}>
                        CVV <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        className={inputClass}
                        placeholder="Enter CVV"
                        required
                      />
                    </div>
                  </div>
                </>
              )}
              {paymentType === 'paypal' && (
                <>
                  <h3 className="text-sm font-bold text-[var(--color-black-01)] mb-4">Paypal</h3>
                  <div>
                    <label className={labelClass}>
                      PayPal ID <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={paypalId}
                      onChange={(e) => setPaypalId(e.target.value)}
                      className={inputClass}
                      placeholder="Enter your PayPal ID or email"
                      required={paymentType === 'paypal'}
                    />
                  </div>
                </>
              )}
              {paymentType === 'netbanking' && (
                <div className="py-4">
                  <h3 className="text-sm font-bold text-[var(--color-black-01)] mb-4">Net Banking</h3>
                  <p className="text-sm text-[var(--color-muted-alt-2)]">Select your bank to pay via Net Banking.</p>
                </div>
              )}

              {/* Buttons after all fields - no overlap on mobile */}
              <div
                className={`flex flex-wrap items-center justify-end gap-2 pt-6 pb-6 ${isFormComplete ? 'flex' : 'hidden sm:flex'}`}
              >
                <button
                  type="button"
                  onClick={() => setSetAsDefault(!setAsDefault)}
                  className={`px-4 py-2 rounded-[6px] text-sm font-medium border bg-white hover:bg-gray-50 ${setAsDefault ? 'border-[var(--color-main-blue)] text-[var(--color-main-blue)]' : 'text-[var(--color-black-01)]'
                    }`}
                  style={!setAsDefault ? { borderColor: '#D2D2D2' } : undefined}
                >
                  Set as default
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-[6px] text-sm font-medium bg-[var(--color-main-blue)] text-white hover:opacity-90"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function PaymentMethodPage() {
  const [payments, setPayments] = useState<PaymentMethod[]>(MOCK_PAYMENTS);
  const [showAddPaymentModal, setShowAddPaymentModal] = useState(false);

  const handleSetDefault = (id: string) => {
    setPayments((prev) =>
      prev.map((p) => ({ ...p, isDefault: p.id === id }))
    );
  };

  const handleEdit = (id: string) => {
    console.log('Edit payment:', id);
  };

  const handleDelete = (id: string) => {
    setPayments((prev) => prev.filter((p) => p.id !== id));
  };

  const handleAddNew = () => setShowAddPaymentModal(true);

  const handleSaveNewPayment = (data: {
    cardNumber: string;
    cardHolderName: string;
    expiry: string;
    cvv: string;
    setAsDefault: boolean;
  }) => {
    const last4 = data.cardNumber.replace(/\D/g, '').slice(-4) || '5612';
    const newId = String(payments.length + 1);
    const cardImage = payments.length % 2 === 0 ? '/images/card1.png' : '/images/card2.png';
    setPayments((prev) => {
      const next = prev.map((p) => ({ ...p, isDefault: data.setAsDefault ? false : p.isDefault }));
      next.push({
        id: newId,
        cardImage,
        cardHolderName: data.cardHolderName,
        bankName: 'Axix bank',
        cardNumberMasked: `XXXX - XXXX - XXXX - ${last4}`,
        cvv: data.cvv,
        expiry: data.expiry,
        isDefault: data.setAsDefault,
      });
      return next;
    });
    setShowAddPaymentModal(false);
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-black-01)] mb-1">
            Payment Methods
          </h1>
          <p className="text-[14px] text-[var(--color-muted-alt-2)]">
            Here&apos;s your account summary at a glance.
          </p>
        </div>
        <button
          type="button"
          onClick={handleAddNew}
          className="shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-[var(--color-main-blue)] text-white hover:opacity-90"
        >
          <Plus className="w-4 h-4" strokeWidth={2.5} />
          Add new payment
        </button>
      </div>

      <div className="space-y-4">
        {payments.map((payment) => (
          <PaymentCard
            key={payment.id}
            payment={payment}
            onSetDefault={handleSetDefault}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <AddPaymentModal
        open={showAddPaymentModal}
        onClose={() => setShowAddPaymentModal(false)}
        onSave={handleSaveNewPayment}
      />
    </div>
  );
}
