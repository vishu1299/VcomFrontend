'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import ExclusiveHeroBanner from '@/app/exclusive/components/ExclusiveHeroBanner';

const blogPosts = [
  {
    id: 1,
    category: 'BEAUTY',
    categoryBg: 'bg-amber-300',
    categoryText: 'text-black',
    title: 'How to Create a Sustainable Home with Organic Products',
    author: 'UrbanTech',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/seed/beauty1/800/600',
  },
  {
    id: 2,
    category: 'ORGANIC',
    categoryBg: 'bg-lime-500',
    categoryText: 'text-white',
    title: 'How to Create a Sustainable Home with Organic Products',
    author: 'UrbanTech',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/seed/organic1/800/600',
  },
  {
    id: 3,
    category: 'COSMETIC',
    categoryBg: 'bg-violet-600',
    categoryText: 'text-white',
    title: 'How to Create a Sustainable Home with Organic Products',
    author: 'UrbanTech',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/seed/cosmetic1/800/600',
  },
  {
    id: 4,
    category: 'ORGANIC',
    categoryBg: 'bg-lime-500',
    categoryText: 'text-white',
    title: 'How to Create a Sustainable Home with Organic Products',
    author: 'UrbanTech',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/seed/organic2/800/600',
  },
  {
    id: 5,
    category: 'BEAUTY',
    categoryBg: 'bg-amber-300',
    categoryText: 'text-black',
    title: 'How to Create a Sustainable Home with Organic Products',
    author: 'UrbanTech',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/seed/beauty2/800/600',
  },
  {
    id: 6,
    category: 'COSMETIC',
    categoryBg: 'bg-violet-600',
    categoryText: 'text-white',
    title: 'How to Create a Sustainable Home with Organic Products',
    author: 'UrbanTech',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/seed/cosmetic2/800/600',
  },
  {
    id: 7,
    category: 'BEAUTY',
    categoryBg: 'bg-amber-300',
    categoryText: 'text-black',
    title: 'How to Create a Sustainable Home with Organic Products',
    author: 'UrbanTech',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/seed/beauty3/800/600',
  },
  {
    id: 8,
    category: 'COSMETIC',
    categoryBg: 'bg-violet-600',
    categoryText: 'text-white',
    title: 'How to Create a Sustainable Home with Organic Products',
    author: 'UrbanTech',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/seed/cosmetic3/800/600',
  },
  {
    id: 9,
    category: 'ORGANIC',
    categoryBg: 'bg-lime-500',
    categoryText: 'text-white',
    title: 'How to Create a Sustainable Home with Organic Products',
    author: 'UrbanTech',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/seed/organic3/800/600',
  },
];

const categories = ['Beauty', 'Organic', 'Cosmetic', 'All'];
const sortOptions = ['Most Popular', 'Newest', 'Oldest', 'A-Z'];

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Beauty');
  const [selectedSort, setSelectedSort] = useState('Most Popular');
  const [currentPage, setCurrentPage] = useState(1);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const totalPages = 45;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5]" style={{ fontFamily: 'var(--font-poppins)' }}>
      {/* Banner from Exclusive (same component as exclusive page) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <ExclusiveHeroBanner />
      </div>

      <section className="pb-10 sm:pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--color-black)] mb-6 sm:mb-8">
            Blog Insights
          </h2>

          {/* Search + filters — stack on xs, row on larger screens */}
          <div className="flex flex-col xl:flex-row xl:items-end gap-4 mb-8 sm:mb-10">
            <form onSubmit={handleSearch} className="flex-1 flex flex-col sm:flex-row gap-2 min-w-0">
              <div className="relative flex-1 min-w-0">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Blogs"
                  className="w-full h-11 sm:h-12 px-4 pr-11 bg-white border border-[var(--color-border-input)] rounded-lg text-[var(--color-black)] placeholder:text-[var(--color-muted-alt-2)] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent text-sm"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-muted-alt-2)] pointer-events-none" />
              </div>
              <button
                type="submit"
                className="h-11 sm:h-12 shrink-0 px-6 sm:px-8 bg-[#1e3a8a] text-white text-sm font-medium rounded-lg hover:opacity-95 transition"
              >
                Search
              </button>
            </form>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 xl:shrink-0">
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-[var(--color-black)]">Category</span>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      setIsCategoryOpen(!isCategoryOpen);
                      setIsSortOpen(false);
                    }}
                    className="h-11 sm:h-12 w-full sm:min-w-[160px] px-4 bg-white border border-[var(--color-border-input)] rounded-lg text-[var(--color-black)] text-sm font-medium flex items-center justify-between gap-2 hover:border-[#1e3a8a] transition"
                  >
                    <span>{selectedCategory}</span>
                    <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isCategoryOpen && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setIsCategoryOpen(false)} />
                      <div className="absolute top-full mt-2 left-0 z-20 w-full bg-white border border-[var(--color-border-input)] rounded-lg overflow-hidden shadow-lg">
                        {categories.map((category) => (
                          <button
                            key={category}
                            type="button"
                            onClick={() => {
                              setSelectedCategory(category);
                              setIsCategoryOpen(false);
                            }}
                            className={`w-full px-4 py-3 text-left text-sm text-[var(--color-black)] hover:bg-[#1e3a8a] hover:text-white transition ${
                              selectedCategory === category ? 'bg-[#1e3a8a] text-white' : ''
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-[var(--color-black)]">Sort by</span>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSortOpen(!isSortOpen);
                      setIsCategoryOpen(false);
                    }}
                    className="h-11 sm:h-12 w-full sm:min-w-[200px] px-4 bg-white border border-[var(--color-border-input)] rounded-lg text-[var(--color-black)] text-sm font-medium flex items-center justify-between gap-2 hover:border-[#1e3a8a] transition"
                  >
                    <span className="truncate">{selectedSort}</span>
                    <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isSortOpen && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setIsSortOpen(false)} />
                      <div className="absolute top-full mt-2 left-0 z-20 w-full bg-white border border-[var(--color-border-input)] rounded-lg overflow-hidden shadow-lg">
                        {sortOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => {
                              setSelectedSort(option);
                              setIsSortOpen(false);
                            }}
                            className={`w-full px-4 py-3 text-left text-sm text-[var(--color-black)] hover:bg-[#1e3a8a] hover:text-white transition ${
                              selectedSort === option ? 'bg-[#1e3a8a] text-white' : ''
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 2 columns on small screens, 3 on large — matches design */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6 mb-10">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blogs/${post.id}`} className="group block h-full min-w-0">
                <article className="bg-white rounded-xl overflow-hidden border border-gray-200/80 shadow-sm transition flex flex-col h-full hover:shadow-md">
                  <div className="relative w-full aspect-[4/3] bg-gray-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover rounded-t-xl"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      unoptimized
                    />
                  </div>
                  <div className="p-3 sm:p-4 flex flex-col flex-1 min-w-0">
                    <span
                      className={`inline-block text-[10px] sm:text-xs font-semibold ${post.categoryBg} ${post.categoryText} px-2 py-0.5 rounded-md w-fit mb-2`}
                    >
                      {post.category}
                    </span>
                    <h3 className="text-xs sm:text-sm font-semibold text-[var(--color-black)] line-clamp-3 mb-3 flex-1 leading-snug">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-[var(--color-muted-alt-2)] mt-auto">
                      <Image
                        src="/images/circle.png"
                        alt=""
                        width={20}
                        height={20}
                        className="w-5 h-5 rounded-full shrink-0 object-cover"
                      />
                      <span className="truncate">{post.author}</span>
                      <span className="shrink-0">•</span>
                      <span className="shrink-0">{post.date}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <nav
            className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4 pt-6 border-t border-[var(--color-border)]"
            aria-label="Pagination"
          >
            <p className="text-sm text-[var(--color-muted-alt-2)] sm:mr-auto sm:order-first">
              Page {currentPage} of {totalPages}
            </p>
            <div className="flex items-center justify-end gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage <= 1}
                className="min-h-10 px-3 rounded-lg bg-white border border-[var(--color-border-input)] text-sm font-medium text-[var(--color-black)] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                Prev
              </button>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => handlePageChange(page)}
                    className={`min-w-9 h-9 rounded-lg text-sm font-medium transition ${
                      page === currentPage
                        ? 'bg-[#1e3a8a] text-white'
                        : 'bg-white border border-[var(--color-border-input)] text-[var(--color-black)] hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage >= totalPages}
                className="min-h-10 px-3 rounded-lg bg-[#1e3a8a] text-white text-sm font-medium hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-1"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}
