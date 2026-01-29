import Link from 'next/link';

// Mock data - in a real app, this would come from an API
const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: '/placeholder.jpg' },
  { id: 2, name: 'Product 2', price: 39.99, image: '/placeholder.jpg' },
  { id: 3, name: 'Product 3', price: 49.99, image: '/placeholder.jpg' },
  { id: 4, name: 'Product 4', price: 59.99, image: '/placeholder.jpg' },
  { id: 5, name: 'Product 5', price: 69.99, image: '/placeholder.jpg' },
  { id: 6, name: 'Product 6', price: 79.99, image: '/placeholder.jpg' },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Product Image</span>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">${product.price}</p>
              <Link
                href={`/products/${product.id}`}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
