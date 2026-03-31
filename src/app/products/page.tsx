"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const products = [
  { id: 1, name: "Product 1", price: 29.99, image: "/placeholder.jpg" },
  { id: 2, name: "Product 2", price: 39.99, image: "/placeholder.jpg" },
  { id: 3, name: "Product 3", price: 49.99, image: "/placeholder.jpg" },
  { id: 4, name: "Product 4", price: 59.99, image: "/placeholder.jpg" },
  { id: 5, name: "Product 5", price: 69.99, image: "/placeholder.jpg" },
  { id: 6, name: "Product 6", price: 79.99, image: "/placeholder.jpg" },
];

type SortKey = "price-asc" | "price-desc" | "name";

export default function ProductsPage() {
  const [sort, setSort] = useState<SortKey>("price-asc");

  const sorted = useMemo(() => {
    const list = [...products];
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    else list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [sort]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
        <h1 className="text-3xl font-bold">Products</h1>
        <label className="flex items-center gap-2 text-sm text-gray-700">
          <span className="font-medium whitespace-nowrap">Sort by price</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
          >
            <option value="price-asc">Low to high</option>
            <option value="price-desc">High to low</option>
            <option value="name">Name (A–Z)</option>
          </select>
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sorted.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Product Image</span>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
              <Link
                href={`/products/${product.id}`}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors inline-block"
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
