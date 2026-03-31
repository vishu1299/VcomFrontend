'use client';

import { useMemo } from 'react';
import TopdealsSubcategoryGrid from './TopdealsSubcategoryGrid';
import ExclusiveProductSection from './TopdealsProductSection';
import TopdealsSubcategoryProductGrid from './TopdealsSubcategoryProductGrid';
import {
  getSubcategoriesForTopDealsCategory,
  getCategoryTopDealsForPage,
  getSubcategoryProductList,
} from '../data/products';
import { CATEGORIES } from '../data/filters';

type TopdealsCategoryViewProps = {
  categoryId: string;
  activeSubcategoryId: string | null;
  onSelectSubcategory: (subcategoryId: string | null) => void;
};

export default function TopdealsCategoryView({
  categoryId,
  activeSubcategoryId,
  onSelectSubcategory,
}: TopdealsCategoryViewProps) {
  const categoryLabel = useMemo(
    () => CATEGORIES.find((c) => c.id === categoryId)?.label ?? '',
    [categoryId]
  );

  const subcategories = useMemo(
    () => getSubcategoriesForTopDealsCategory(categoryId),
    [categoryId]
  );

  const carouselProducts = useMemo(
    () => getCategoryTopDealsForPage(categoryId),
    [categoryId]
  );

  const subLabel = useMemo(() => {
    if (!activeSubcategoryId) return '';
    return subcategories.find((s) => s.id === activeSubcategoryId)?.label ?? '';
  }, [activeSubcategoryId, subcategories]);

  const subProducts = useMemo(() => {
    if (!activeSubcategoryId) return [];
    return getSubcategoryProductList(categoryId, activeSubcategoryId);
  }, [categoryId, activeSubcategoryId]);

  if (subcategories.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-[#e5e7eb] bg-[#fafafa] p-8 text-center text-[#767676]">
        <p className="font-medium text-[#131313]">Category view coming soon</p>
        <p className="mt-1 text-sm">
          Subcategory layout for &ldquo;{categoryLabel}&rdquo; is not available yet.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-0">
      {!activeSubcategoryId && (
        <>
          <TopdealsSubcategoryGrid
            categoryTitle={categoryLabel}
            subcategories={subcategories}
            onSubcategoryClick={(sub) => onSelectSubcategory(sub.id)}
          />
          <ExclusiveProductSection
            title={`Top Deals in ${categoryLabel}`}
            products={carouselProducts}
            layout="carousel"
            sectionVariant="white"
          />
        </>
      )}

      {activeSubcategoryId && (
        <TopdealsSubcategoryProductGrid
          title={`Top Deals in ${subLabel}`}
          products={subProducts}
          onBack={() => onSelectSubcategory(null)}
        />
      )}
    </div>
  );
}
