import Link from 'next/link';

// Mock data - in a real app, this would come from an API
const orders = [
  {
    id: 'ORD-001',
    date: '2024-01-15',
    status: 'Delivered',
    total: 129.99,
    items: 3,
  },
  {
    id: 'ORD-002',
    date: '2024-01-10',
    status: 'Shipped',
    total: 79.99,
    items: 1,
  },
  {
    id: 'ORD-003',
    date: '2024-01-05',
    status: 'Processing',
    total: 199.99,
    items: 2,
  },
  {
    id: 'ORD-004',
    date: '2024-01-01',
    status: 'Delivered',
    total: 149.99,
    items: 4,
  },
  {
    id: 'ORD-005',
    date: '2023-12-28',
    status: 'Delivered',
    total: 89.99,
    items: 2,
  },
];

export default function DashboardOrdersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Orders</h1>
        <Link href="/products" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Continue Shopping
        </Link>
      </div>

      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold">Order {order.id}</h2>
                <p className="text-gray-600">Placed on {order.date}</p>
              </div>
              <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {order.status}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-gray-700">
                <p>{order.items} item{order.items > 1 ? 's' : ''}</p>
                <p className="font-semibold">Total: ${order.total.toFixed(2)}</p>
              </div>
              <div className="space-x-4">
                <Link
                  href={`/(orders)/${order.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Details
                </Link>
                {order.status === 'Shipped' && (
                  <Link
                    href={`/(tracking)/${order.id}`}
                    className="text-green-600 hover:text-green-800 font-medium"
                  >
                    Track Package
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {orders.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">You haven't placed any orders yet.</p>
          <Link href="/products" className="text-blue-600 hover:text-blue-800 font-medium">
            Start shopping →
          </Link>
        </div>
      )}
    </div>
  );
}
