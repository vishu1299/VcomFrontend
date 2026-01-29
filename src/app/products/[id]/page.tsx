import Link from 'next/link';
import { notFound } from 'next/navigation';

// Mock data - in a real app, this would come from an API
const getProduct = (id: string) => {
  const products = {
    '1': {
      id: '1',
      name: 'Premium Wireless Headphones',
      price: 199.99,
      description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
      features: [
        'Active Noise Cancellation',
        '30-hour battery life',
        'Premium sound quality',
        'Comfortable fit',
        'Wireless charging',
      ],
      images: ['/placeholder.jpg', '/placeholder.jpg', '/placeholder.jpg'],
      inStock: true,
      rating: 4.5,
      reviews: 128,
    },
    '2': {
      id: '2',
      name: 'Smart Fitness Watch',
      price: 299.99,
      description: 'Advanced fitness tracking with heart rate monitoring and GPS.',
      features: [
        'Heart rate monitoring',
        'GPS tracking',
        'Water resistant',
        '7-day battery life',
        'Sleep tracking',
      ],
      images: ['/placeholder.jpg', '/placeholder.jpg', '/placeholder.jpg'],
      inStock: true,
      rating: 4.7,
      reviews: 89,
    },
    '3': {
      id: '3',
      name: 'Portable Bluetooth Speaker',
      price: 79.99,
      description: 'Compact and powerful Bluetooth speaker with excellent sound quality.',
      features: [
        '360-degree sound',
        'Waterproof design',
        '12-hour battery life',
        'Bluetooth 5.0',
        'Built-in microphone',
      ],
      images: ['/placeholder.jpg', '/placeholder.jpg', '/placeholder.jpg'],
      inStock: false,
      rating: 4.3,
      reviews: 256,
    },
  };

  return products[id as keyof typeof products] || null;
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/products" className="text-blue-600 hover:text-blue-800">
          ← Back to Products
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-gray-500">Product Image</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.slice(1).map((image, index) => (
              <div key={index} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm">Image {index + 2}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <p className="text-2xl font-bold text-gray-900 mb-6">${product.price}</p>

          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center mb-6">
            <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
              product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          <div className="space-y-4">
            <button
              className={`w-full py-3 px-4 rounded-md font-medium ${
                product.inStock
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!product.inStock}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
            <button className="w-full py-3 px-4 border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-gray-50">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
