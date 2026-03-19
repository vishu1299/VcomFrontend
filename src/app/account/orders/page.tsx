'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Search } from 'lucide-react';

type OrderStatus = 'IN TRANSIT' | 'RETURNED' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';

interface OrderItem {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  productImage: string;
  productName: string;
  price: string;
  color?: string;
  quantity: number;
  orderDate: string;
  total: string;
}

// Mock data – uses phone.png, shoes.png, watch.png as per reference
const MOCK_ORDERS: OrderItem[] = [
  {
    id: '1',
    orderNumber: 'ORD-434-FG34',
    status: 'IN TRANSIT',
    productImage: '/images/phone.png',
    productName: 'iPhone 17 Pro 256 GB: 15.93 cm (6.3") Display',
    price: '$299.00',
    color: 'Orange',
    quantity: 1,
    orderDate: '16 Nov 2025',
    total: '$310.00',
  },
  {
    id: '2',
    orderNumber: 'ORD-435-AB12',
    status: 'RETURNED',
    productImage: '/images/phone.png',
    productName: 'iPhone 17 Pro 256 GB: 15.93 cm (6.3") Display',
    price: '$299.00',
    color: 'Orange',
    quantity: 1,
    orderDate: '16 Nov 2025',
    total: '$310.00',
  },
  {
    id: '3',
    orderNumber: 'ORD-436-CD56',
    status: 'SHIPPED',
    productImage: '/images/shoes.png',
    productName: 'Running Sneakers - Black',
    price: '$89.00',
    color: 'Black',
    quantity: 1,
    orderDate: '14 Nov 2025',
    total: '$95.00',
  },
  {
    id: '4',
    orderNumber: 'ORD-437-EF78',
    status: 'DELIVERED',
    productImage: '/images/watch.png',
    productName: 'Smartwatch Pro White',
    price: '$199.00',
    color: 'White',
    quantity: 1,
    orderDate: '12 Nov 2025',
    total: '$205.00',
  },
  {
    id: '5',
    orderNumber: 'ORD-436-CD56',
    status: 'CANCELLED',
    productImage: '/images/shoes.png',
    productName: 'Running Sneakers - Black',
    price: '$89.00',
    color: 'Black',
    quantity: 1,
    orderDate: '14 Nov 2025',
    total: '$95.00',
  },
];

const STATUS_STYLES: Record<OrderStatus, { bg: string; text: string }> = {
  'IN TRANSIT': { bg: '#B4FBFF', text: '#205B5E' },
  RETURNED: { bg: '#FFF7EB', text: '#8F5B09' },
  SHIPPED: { bg: '#D0E4FF', text: '#12417E' },
  DELIVERED: { bg: '#F2FFE8', text: '#2E5511' },
  CANCELLED: { bg: '#FFE5E2', text: '#A10911' },
};

function StatusBadge({ status }: { status: OrderStatus }) {
  const style = STATUS_STYLES[status] ?? { bg: '#e5e7eb', text: '#374151' };
  return (
    <span
      className="inline-flex px-2 py-0.5 rounded text-xs font-medium whitespace-nowrap"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      {status}
    </span>
  );
}

const btnRadius = 'rounded-[6px]';
const btnHeight = 'min-h-[40px] h-[40px]';

function OrderCardActions({ order }: { order: OrderItem }) {
  const { status } = order;
  if (status === 'IN TRANSIT') {
    return (
      <div className="flex flex-col gap-2 w-full sm:w-[280px] shrink-0">
        <button
          type="button"
          className={`w-full ${btnHeight} px-4 ${btnRadius} text-sm font-medium bg-[var(--color-main-blue)] text-white hover:opacity-90 flex items-center justify-center`}
        >
          Track Order
        </button>
        <div className="flex gap-1 w-full">
          <Link
            href={`/return-item/${order.id}`}
            className={`flex-1 min-w-0 px-2 ${btnHeight} ${btnRadius} text-xs font-medium border border-[var(--color-border)] text-[var(--color-black-01)] hover:bg-gray-50 flex items-center justify-center`}
          >
            View Order Details
          </Link>
          <Link
            href={`/cancel-order/${order.id}`}
            className={`flex-1 min-w-0 px-2 ${btnHeight} ${btnRadius} text-xs font-medium border border-red-300 text-red-500 hover:bg-red-50 flex items-center justify-center`}
          >
            Cancel Order
          </Link>
        </div>
      </div>
    );
  }
  if (status === 'RETURNED') {
    return (
      <div className="flex flex-col gap-2 w-full sm:w-[280px] shrink-0">
        <Link
          href={`/return-details/${order.id}`}
          className={`w-full ${btnHeight} px-4 ${btnRadius} text-sm font-medium border border-[var(--color-border)] text-[var(--color-black-01)] hover:bg-gray-50 flex items-center justify-center`}
        >
          Track Return
        </Link>
        <div className="flex gap-1 w-full">
          <Link
            href={`/return-item/${order.id}`}
            className={`flex-1 min-w-0 px-2 ${btnHeight} ${btnRadius} text-xs font-medium border border-[var(--color-border)] text-[var(--color-black-01)] hover:bg-gray-50 flex items-center justify-center`}
          >
            View Order Details
          </Link>
          <button
            type="button"
            className={`flex-1 min-w-0 px-2 ${btnHeight} ${btnRadius} text-xs font-medium border border-[var(--color-border)] text-[var(--color-black-01)] hover:bg-gray-50 inline-flex items-center justify-center gap-1`}
          >
            <Image src="/review.svg" alt="" width={16} height={16} />
            Write review
          </button>
        </div>
      </div>
    );
  }
  // SHIPPED | DELIVERED | CANCELLED
  return (
    <div className="flex flex-col gap-2 w-full sm:w-[280px] shrink-0">
      <button
        type="button"
        className={`w-full ${btnHeight} px-4 ${btnRadius} text-sm font-medium border border-[var(--color-border)] text-[var(--color-black-01)] hover:bg-gray-50 flex items-center justify-center`}
      >
        Buy Again
      </button>
      <div className="flex gap-1 w-full">
        <Link
          href={`/return-item/${order.id}`}
          className={`flex-1 min-w-0 px-2 ${btnHeight} ${btnRadius} text-xs font-medium border border-[var(--color-border)] text-[var(--color-black-01)] hover:bg-gray-50 flex items-center justify-center`}
        >
          View Order Details
        </Link>
        <button
          type="button"
          className={`flex-1 min-w-0 px-2 ${btnHeight} ${btnRadius} text-xs font-medium border border-[var(--color-border)] text-[var(--color-black-01)] hover:bg-gray-50 inline-flex items-center justify-center gap-1`}
        >
          <Image src="/review.svg" alt="" width={16} height={16} />
          Write review
        </button>
      </div>
    </div>
  );
}

export default function MyOrdersPage() {
  const [search, setSearch] = useState('');
  const [dateFilter, setDateFilter] = useState('This Month');
  const [priceFilter, setPriceFilter] = useState('Above $300');
  const [orders] = useState<OrderItem[]>(MOCK_ORDERS);

  return (
    <div className="p-6 lg:p-8">
      <style dangerouslySetInnerHTML={{ __html: `.orders-search-input::placeholder { color: #767676; }` }} />
      {/* Same row: left = title + subtext, right = search + Date + Price */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-black-01)] mb-1">
            My Orders
          </h1>
          <p className="text-[14px] text-[var(--color-muted-alt-2)]">
            Here&apos;s your account summary at a glance.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[180px] max-w-[280px]">
            <input
              type="text"
              placeholder="Search product"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="orders-search-input w-full min-h-[40px] pl-3 pr-10 py-2 text-sm text-black border border-[var(--color-border-input)] rounded-lg outline-none focus:border-[var(--color-main-blue)]"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-muted-alt-2)] pointer-events-none" />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-[var(--color-black-01)] whitespace-nowrap">
              Date
            </label>
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="min-h-[40px] pl-3 pr-10 text-sm text-black border border-[var(--color-border-input)] rounded-lg bg-white outline-none focus:border-[var(--color-main-blue)] appearance-none bg-no-repeat bg-[length:16px_16px]"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%236b7280\' stroke-width=\'2\'%3E%3Cpath d=\'M6 9l6 6 6-6\'/%3E%3C/svg%3E")',
                backgroundPosition: 'right 12px center',
              }}
            >
              <option value="This Month">This Month</option>
              <option value="Last Month">Last Month</option>
              <option value="This Year">This Year</option>
              <option value="Last 3 Months">Last 3 Months</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-[var(--color-black-01)] whitespace-nowrap">
              Price
            </label>
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="min-h-[40px] pl-3 pr-8 text-sm text-black border border-[var(--color-border-input)] rounded-lg bg-white outline-none focus:border-[var(--color-main-blue)] appearance-none bg-no-repeat bg-[length:16px] bg-[right_10px_center]"
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%236b7280\' stroke-width=\'2\'%3E%3Cpath d=\'M6 9l6 6 6-6\'/%3E%3C/svg%3E")' }}
            >
              <option value="Above $1000">Above $1000</option>
              <option value="Above $300">Above $300</option>
              <option value="Above $100">Above $100</option>
              <option value="Any">Any</option>
            </select>
          </div>
        </div>
      </div>

      {/* Order cards */}
      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border border-[var(--color-border)] rounded-xl overflow-hidden bg-white"
          >
            {/* Top: Order number + status */}
            <div className="px-4 pt-4 pb-2 flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-[var(--color-black-01)]">
                Order Number: #{order.orderNumber}
              </span>
              <StatusBadge status={order.status} />
            </div>

            {/* Main content: image | product details | actions */}
            <div className="px-4 pb-4 flex flex-col sm:flex-row gap-4">
              <div className="flex gap-4 flex-1 min-w-0">
                {/* Product image */}
                <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-lg bg-white-100 overflow-hidden relative">
                  <Image
                    src={order.productImage}
                    alt={order.productName}
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Product details: name, price, then color/qty row, then share row, then order date */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[var(--color-black-01)]">
                    {order.productName}
                  </p>
                  <p className="text-sm font-semibold text-[var(--color-main-blue)] mt-1">
                    {order.price}
                  </p>
                  <div className="mt-2 flex gap-4">
                    <div className="flex flex-col gap-1">
                      {order.color && (
                        <p className="text-xs">
                          <span style={{ color: '#767676' }}>Color: </span>
                          <span style={{ color: '#000000' }}>{order.color}</span>
                        </p>
                      )}
                      <p className="text-xs">
                        <span style={{ color: '#767676' }}>QTY: </span>
                        <span style={{ color: '#000000' }}>{order.quantity}</span>
                      </p>
                    </div>
                    <div className="flex items-center justify-center shrink-0">
                      <button
                        type="button"
                        className="rounded-full p-2 flex items-center justify-center hover:opacity-90"
                        style={{ backgroundColor: '#F3F7FA' }}
                        aria-label="Share"
                      >
                        <Image src="/share.svg" alt="" width={20} height={20} />
                      </button>
                    </div>
                  </div>
                  <p className="text-xs mt-2" style={{ color: '#767676' }}>
                    Order Date: {order.orderDate}
                  </p>
                </div>
              </div>
              {/* Right side: full width on mobile, fixed width on web */}
              <div className="flex flex-col justify-start w-full sm:w-auto items-stretch">
                <OrderCardActions order={order} />
              </div>
            </div>

            {/* Bottom: Total and Download Invoice - one row on mobile, same on web */}
            <div
              className="border-t border-[var(--color-border)] px-4 py-3 flex flex-row flex-wrap items-center justify-between gap-2"
              style={{ backgroundColor: '#F3F7FA' }}
            >
              <p className="text-sm sm:text-base font-bold">
                <span style={{ color: '#000000' }}>Total: </span>
                <span style={{ color: '#131313' }}>{order.total}</span>
              </p>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 min-h-[36px] h-[36px] sm:min-h-[40px] sm:h-[40px] px-3 sm:px-4 rounded-[6px] text-xs sm:text-sm font-medium border w-fit hover:opacity-90 shrink-0"
                style={{
                  borderColor: '#3581EA',
                  color: '#3581EA',
                  backgroundColor: '#F6F8FF',
                }}
              >
                <Image src="/invoice.svg" alt="" width={20} height={20} />
                Download Invoice
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
