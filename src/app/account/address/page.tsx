'use client';

import { useState } from 'react';
import { Home, Building2, Pencil, Trash2, Plus, X } from 'lucide-react';

type AddressType = 'home' | 'office' | 'other';

const inputClass =
  'w-full min-h-[40px] px-3 py-2 text-sm border border-[var(--color-border-input)] rounded-lg bg-white outline-none focus:border-[var(--color-main-blue)]';
const selectClass =
  'w-full min-h-[40px] pl-3 pr-8 py-2 text-sm border border-[var(--color-border-input)] rounded-lg bg-white outline-none focus:border-[var(--color-main-blue)] appearance-none bg-no-repeat bg-[length:14px] bg-[right_10px_center]';
const dropdownArrowStyle = { backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'14\' height=\'14\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%236b7280\' stroke-width=\'2\'%3E%3Cpath d=\'M6 9l6 6 6-6\'/%3E%3C/svg%3E")' };
const labelClass = 'block text-sm font-medium text-[var(--color-black-01)] mb-1.5';
/** Add address modal: placeholder #767676, input/select value black, labels black */
const modalInputClass = `${inputClass} text-black placeholder:text-[#767676]`;
const modalSelectClass = `${selectClass} text-black`;
const modalLabelClass = 'block text-sm font-medium mb-1.5 text-black';

interface SavedAddress {
  id: string;
  name: string;
  type: 'home' | 'work';
  line1: string;
  line2: string;
  cityStateZip: string;
  phone: string;
  isDefault: boolean;
}

const MOCK_ADDRESSES: SavedAddress[] = [
  {
    id: '1',
    name: 'Prateek Sharma',
    type: 'home',
    line1: 'DF-4 Street No.3',
    line2: 'Newdelhi',
    cityStateZip: 'New Delhi Delhi 10032',
    phone: '+91 97984654',
    isDefault: true,
  },
  {
    id: '2',
    name: 'Prateek Sharma',
    type: 'work',
    line1: 'DF-4 Street No.3',
    line2: 'Newdelhi',
    cityStateZip: 'New Delhi Delhi 10032',
    phone: '+91 97984654',
    isDefault: false,
  },
];

function AddressCard({
  address,
  onSetDefault,
  onEdit,
  onDelete,
}: {
  address: SavedAddress;
  onSetDefault: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  const Icon = address.type === 'home' ? Home : Building2;

  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-white p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start gap-4">
      <div className="flex gap-3 flex-1 min-w-0">
        <div className="shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-[var(--color-muted-alt-2)]" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <p className="text-sm font-bold text-[var(--color-black-01)]">{address.name}</p>
            {address.isDefault ? (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium text-white shrink-0" style={{ backgroundColor: '#0C9200' }}>
                Default
              </span>
            ) : (
              <button
                type="button"
                onClick={() => onSetDefault(address.id)}
                className="text-xs font-medium px-2 py-1 rounded border bg-white text-black hover:bg-gray-50"
                style={{ borderColor: '#D2D2D2' }}
              >
                Set as default
              </button>
            )}
          </div>
          <p className="text-sm text-[var(--color-muted-alt-2)] leading-relaxed">
            {address.line1}
            <br />
            {address.line2}
            <br />
            {address.cityStateZip}
          </p>
          <p className="text-sm text-[var(--color-muted-alt-2)] mt-1">{address.phone}</p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-2 sm:flex-col sm:shrink-0 sm:ml-4">
        <button
          type="button"
          onClick={() => onEdit(address.id)}
          className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium border border-[var(--color-border)] text-[var(--color-black-01)] hover:bg-gray-50 flex-1 sm:flex-initial min-w-0 whitespace-nowrap sm:justify-start"
        >
          <Pencil className="w-4 h-4 shrink-0" />
          Edit Address
        </button>
        <button
          type="button"
          onClick={() => onDelete(address.id)}
          className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium border border-red-200 text-red-500 hover:bg-red-50 flex-1 sm:flex-initial min-w-0"
        >
          <Trash2 className="w-4 h-4 shrink-0" />
          Delete
        </button>
      </div>
    </div>
  );
}

function AddAddressModal({
  open,
  onClose,
  onSave,
}: {
  open: boolean;
  onClose: () => void;
  onSave: (data: { type: AddressType; line1: string; line2: string; city: string; state: string; zip: string; country: string }) => void;
}) {
  const [addressType, setAddressType] = useState<AddressType>('home');
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ type: addressType, line1, line2, city, state, zip, country });
    onClose();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="add-address-modal bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <style dangerouslySetInnerHTML={{ __html: '.add-address-modal input::placeholder { color: #767676; }' }} />
        <div className="sticky top-0 bg-white border-b border-[var(--color-border)] px-6 py-4 flex items-start justify-between rounded-t-2xl">
          <div>
            <h2 className="text-lg font-bold text-[var(--color-black-01)]">Add new address</h2>
            <p className="text-sm text-[var(--color-muted-alt-2)]">Add an address for faster checkout</p>
          </div>
          <button type="button" onClick={onClose} className="p-1 rounded-lg hover:bg-gray-100" aria-label="Close">
            <X className="w-5 h-5 text-[var(--color-muted-alt-2)]" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Address type */}
          <div>
            <label className={modalLabelClass}>
              Address <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-3">
              {(['home', 'office', 'other'] as const).map((type) => (
                <label
                  key={type}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border cursor-pointer transition capitalize ${
                    addressType === type
                      ? 'border-[var(--color-main-blue)] bg-white text-[var(--color-main-blue)]'
                      : 'border-[var(--color-border)] bg-white text-black hover:border-gray-400'
                  }`}
                >
                  <input
                    type="radio"
                    name="addressType"
                    value={type}
                    checked={addressType === type}
                    onChange={() => setAddressType(type)}
                    className="sr-only"
                  />
                  {type === 'home' && 'Home'}
                  {type === 'office' && 'Office'}
                  {type === 'other' && 'Other'}
                  <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    addressType === type ? 'border-[var(--color-main-blue)]' : 'border-gray-300'
                  }`}>
                    {addressType === type && <span className="w-2 h-2 rounded-full bg-[var(--color-main-blue)]" />}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Street address line 1 & 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={modalLabelClass}>
                Street Address line 1 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={line1}
                onChange={(e) => setLine1(e.target.value)}
                className={modalInputClass}
                placeholder="Example: 2451 Lake Ridge Dr."
                required
              />
            </div>
            <div>
              <label className={modalLabelClass}>Street Address Line 2 (Optional)</label>
              <input
                type="text"
                value={line2}
                onChange={(e) => setLine2(e.target.value)}
                className={modalInputClass}
                placeholder="Example: Apt 302 or Suite B"
              />
            </div>
          </div>

          {/* City, State, Zip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className={modalLabelClass}>
                City / Town <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={modalInputClass}
                required
                placeholder="Enter City/Town"
              />
            </div>
            <div>
              <label className={modalLabelClass}>State</label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className={modalSelectClass}
                style={dropdownArrowStyle}
                required
              >
                <option value="">Select state</option>
                <option value="Delhi">Delhi</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
              </select>
            </div>
            <div>
              <label className={modalLabelClass}>
                Zip Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className={modalInputClass}
                required
                placeholder="Enter Zip Code"
              />
            </div>
          </div>

          {/* Country */}
          <div>
            <label className={modalLabelClass}>
              Country <span className="text-red-500">*</span>
            </label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className={modalSelectClass}
              style={dropdownArrowStyle}
              required
            >
              <option value="">Select country</option>
              <option value="India">India</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
            </select>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg text-sm font-medium bg-[var(--color-main-blue)] text-white hover:opacity-90"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function SavedAddressPage() {
  const [addresses, setAddresses] = useState<SavedAddress[]>(MOCK_ADDRESSES);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleSetDefault = (id: string) => {
    setAddresses((prev) =>
      prev.map((a) => ({ ...a, isDefault: a.id === id }))
    );
  };

  const handleEdit = (id: string) => {
    console.log('Edit address:', id);
  };

  const handleDelete = (id: string) => {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
  };

  const handleAddNew = () => setShowAddModal(true);

  const handleSaveNewAddress = (data: { type: AddressType; line1: string; line2: string; city: string; state: string; zip: string; country: string }) => {
    const newAddress: SavedAddress = {
      id: String(Date.now()),
      name: 'Prateek Sharma',
      type: data.type === 'office' ? 'work' : 'home',
      line1: data.line1,
      line2: data.line2,
      cityStateZip: `${data.city}, ${data.state} ${data.zip}`,
      phone: '+91 97984654',
      isDefault: addresses.length === 0,
    };
    setAddresses((prev) => [...prev, newAddress]);
    setShowAddModal(false);
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-black-01)] mb-1">
            Saved Address
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
          Add new Address
        </button>
      </div>

      <div className="space-y-4">
        {addresses.map((address) => (
          <AddressCard
            key={address.id}
            address={address}
            onSetDefault={handleSetDefault}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <AddAddressModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSave={handleSaveNewAddress}
      />
    </div>
  );
}
