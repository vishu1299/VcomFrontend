'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Category } from '../data/categories';

type CategoryCardProps = Category;

export default function CategoryCard({ id, name, image }: CategoryCardProps) {
  return (
    <Link
      href={`/product-list?category=${id}`}
      className="group block bg-white rounded-xl border border-[var(--color-border)] overflow-hidden shadow-sm hover:shadow transition h-full"
    >
      <div className="relative aspect-square bg-[var(--color-border)]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
        />
      </div>
      <p className="text-design-14 sm:text-design-16 font-medium text-[var(--color-black)] text-center py-3 sm:py-4 px-2">
        {name}
      </p>
    </Link>
  );
}
