'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    category: 'BEAUTY',
    categoryBg: 'bg-amber-300',
    title: 'How to Create a Sustainable Home with Organic Products',
    author: 'UrbanTech',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/seed/beauty1/800/600',
  },
  {
    id: 2,
    category: 'ORGANIC',
    categoryBg: 'bg-lime-500',
    title: 'How to Create a Sustainable Home with Organic Products',
    author: 'UrbanTech',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/seed/organic1/800/600',
  },
  {
    id: 3,
    category: 'COSMETIC',
    categoryBg: 'bg-violet-400',
    title: 'How to Create a Sustainable Home with Organic Products',
    author: 'UrbanTech',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/seed/cosmetic1/800/600',
  },
  {
    id: 4,
    category: 'ORGANIC',
    categoryBg: 'bg-lime-500',
    title: 'How to Create a Sustainable Home with Organic Products',
    author: 'UrbanTech',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/seed/organic2/800/600',
  },
  {
    id: 5,
    category: 'BEAUTY',
    categoryBg: 'bg-amber-300',
    title: 'How to Create a Sustainable Home with Organic Products',
    author: 'UrbanTech',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/seed/beauty2/800/600',
  },
  {
    id: 6,
    category: 'COSMETIC',
    categoryBg: 'bg-violet-400',
    title: 'How to Create a Sustainable Home with Organic Products',
    author: 'UrbanTech',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/seed/cosmetic2/800/600',
  },
  {
    id: 7,
    category: 'BEAUTY',
    categoryBg: 'bg-amber-300',
    title: 'How to Create a Sustainable Home with Organic Products',
    author: 'UrbanTech',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/seed/beauty3/800/600',
  },
  {
    id: 8,
    category: 'COSMETIC',
    categoryBg: 'bg-violet-400',
    title: 'How to Create a Sustainable Home with Organic Products',
    author: 'UrbanTech',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/seed/cosmetic3/800/600',
  },
  {
    id: 9,
    category: 'ORGANIC',
    categoryBg: 'bg-lime-500',
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
    // Handle search logic here
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <section className="w-full py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[126px]">
          <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] rounded-xl overflow-hidden">
            <Image
              src="/images/blogs.png"
              alt="Autumn/Winter Sale"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1920px) 100vw, 1920px"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[126px]">
              <div className="max-w-[600px] text-white">
                  <p className="text-design-14 sm:text-design-16 font-medium mb-2">AUTUMN/WINTER &apos;25</p>
                  <h1 className="text-design-32 sm:text-design-32 lg:text-[64px] font-bold mb-2 leading-tight">
                    SALE
                  </h1>
                  <p className="text-design-16 sm:text-design-18 font-medium mb-1">UP TO</p>
                  <h2 className="text-design-32 sm:text-design-32 lg:text-[64px] font-bold mb-4 leading-tight">
                    20% OFF
                  </h2>
                  <div className="mb-6">
                    <span className="inline-block bg-[#dc2626] text-white text-design-12 sm:text-design-14 font-medium px-4 py-2 rounded">
                      FIRST TIME ON DISCOUNT
                    </span>
                  </div>
                  <button className="text-design-16 sm:text-design-18 font-medium text-white underline hover:no-underline transition">
                    Shop Now
                  </button>
              </div>
            </div>
            
            {/* Carousel Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
              {[1, 2, 3, 4, 5].map((dot) => (
                <button
                  key={dot}
                  className={`w-2 h-2 rounded-full transition ${
                    dot === 1 ? 'bg-[#1e3a8a]' : 'bg-white/50'
                  }`}
                  aria-label={`Slide ${dot}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Insights Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[126px]">
          {/* Section Title */}
          <h2 className="text-design-32 sm:text-design-32 lg:text-[48px] font-semibold text-[var(--color-black)] mb-6 sm:mb-8">
            Blog Insights
          </h2>

          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12">
            {/* Search Input */}
            <form onSubmit={handleSearch} className="flex-1 flex gap-2">
              <div className="relative flex-1">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Blogs"
                  className="w-full h-12 sm:h-14 px-4 pr-12 bg-white border border-[var(--color-border-input)] rounded-lg text-[var(--color-black)] placeholder:text-[var(--color-muted-alt-2)] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--color-muted-alt-2)]" />
              </div>
              <button
                type="submit"
                className="h-12 sm:h-14 px-6 sm:px-8 bg-[#1e3a8a] text-white text-design-14 sm:text-design-16 font-medium rounded-lg hover:opacity-95 transition"
              >
                Search
              </button>
            </form>

            {/* Category Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsCategoryOpen(!isCategoryOpen);
                  setIsSortOpen(false);
                }}
                className="h-12 sm:h-14 px-4 sm:px-6 bg-white border border-[var(--color-border-input)] rounded-lg text-[var(--color-black)] text-design-14 sm:text-design-16 font-medium flex items-center gap-2 min-w-[140px] sm:min-w-[160px] justify-between hover:border-[#1e3a8a] transition"
              >
                <span>{selectedCategory}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
              </button>
              {isCategoryOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsCategoryOpen(false)}
                  />
                  <div className="absolute top-full mt-2 left-0 z-20 w-full bg-white border border-[var(--color-border-input)] rounded-lg overflow-hidden shadow-lg">
                    {categories.map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsCategoryOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left text-design-14 text-[var(--color-black)] hover:bg-[#1e3a8a] hover:text-white transition ${
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

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsSortOpen(!isSortOpen);
                  setIsCategoryOpen(false);
                }}
                className="h-12 sm:h-14 px-4 sm:px-6 bg-white border border-[var(--color-border-input)] rounded-lg text-[var(--color-black)] text-design-14 sm:text-design-16 font-medium flex items-center gap-2 min-w-[140px] sm:min-w-[180px] justify-between hover:border-[#1e3a8a] transition"
              >
                <span>Sort by</span>
                <span className="text-[var(--color-muted-alt-2)]">{selectedSort}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
              </button>
              {isSortOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsSortOpen(false)}
                  />
                  <div className="absolute top-full mt-2 left-0 z-20 w-full bg-white border border-[var(--color-border-input)] rounded-lg overflow-hidden shadow-lg">
                    {sortOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setSelectedSort(option);
                          setIsSortOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left text-design-14 text-[var(--color-black)] hover:bg-[#1e3a8a] hover:text-white transition ${
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

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden transition flex flex-col  hover:shadow"
              >
                <div className="relative w-full h-[150px] sm:h-[180px] bg-[var(--color-border)]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 sm:p-6 flex flex-col flex-1">
                  <span
                    className={`inline-block text-design-12 sm:text-design-14 font-medium ${post.categoryBg} text-white px-2 py-1 rounded w-fit mb-3`}
                  >
                    {post.category}
                  </span>
                  <h3 className="text-design-16 sm:text-design-18 font-semibold text-[var(--color-black)] line-clamp-3 mb-3 flex-1">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 text-design-14 text-[var(--color-muted-alt-2)]">
                    <Image
                      src="/images/circle.png"
                      alt={post.author}
                      width={24}
                      height={24}
                      className="w-6 h-6 rounded-full shrink-0 object-cover"
                    />
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <nav
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 sm:pt-8 border-t border-[var(--color-border)]"
            aria-label="Pagination"
          >
            <p className="text-design-14 text-[var(--color-muted-alt-2)]">
              Page {currentPage} of {totalPages}
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage <= 1}
                className="min-h-[40px] px-4 rounded-lg bg-white border border-[var(--color-border-input)] text-design-14 font-medium text-[var(--color-black)] hover:bg-[var(--color-border)] disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => handlePageChange(page)}
                    className={`min-w-[40px] h-10 rounded-lg text-design-14 font-medium transition ${
                      page === currentPage
                        ? 'bg-[#1e3a8a] text-white'
                        : 'bg-white border border-[var(--color-border-input)] text-[var(--color-black)] hover:bg-[var(--color-border)]'
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
                className="min-h-[40px] px-4 rounded-lg bg-[#1e3a8a] text-white text-design-14 font-medium hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-1"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}
