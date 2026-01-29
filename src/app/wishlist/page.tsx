'use client';

import Link from 'next/link';
import { useState } from 'react';

// Mock wishlist data
const initialWishlistItems = [
  { id: 1, name: 'Premium Wireless Headphones', price: 199.99, image: '/placeholder.jpg', inStock: true },
  { id: 2, name: 'Smart Fitness Watch', price: 299.99, image: '/placeholder.jpg', inStock: true },
  { id: 3, name: 'Portable Bluetooth Speaker', price: 79.99, image: '/placeholder.jpg', inStock: false },
];

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const addToCart = (id: number) => {
    // In a real app, this would add to cart
    console.log('Add to cart:', id);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">Your wishlist is empty</p>
          <Link href="/products" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-square bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Product Image</span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">${item.price.toFixed(2)}</p>
              <div className="flex items-center justify-between">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  item.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {item.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <button
                onClick={() => addToCart(item.id)}
                disabled={!item.inStock}
                className={`w-full mt-4 py-2 px-4 rounded-md font-medium ${
                  item.inStock
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {item.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
