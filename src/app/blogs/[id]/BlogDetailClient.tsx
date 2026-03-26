'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogDetailClientProps {
  blog: {
    id: string;
    category: string;
    categoryBg: string;
    title: string;
    author: string;
    authorImage: string;
    date: string;
    content: {
      intro: string;
      sections: Array<{
        heading: string;
        text: string;
        points?: string[];
        details?: Array<{
          title: string;
          text: string;
        }>;
      }>;
    };
    productImages: {
      hero: string;
      grid: string[];
    };
  };
  relatedBlogs: Array<{
    id: number;
    category: string;
    categoryBg: string;
    title: string;
    author: string;
    date: string;
    image: string;
  }>;
}

/** Badge text color for related cards (match list page) */
function relatedCategoryTextClass(category: string) {
  const c = category.toUpperCase();
  if (c === 'BEAUTY') return 'text-black';
  return 'text-white';
}

export default function BlogDetailClient({ blog, relatedBlogs }: BlogDetailClientProps) {
  const relatedScrollRef = useRef<HTMLDivElement>(null);

  const scrollRelated = (dir: 'left' | 'right') => {
    if (!relatedScrollRef.current) return;
    relatedScrollRef.current.scrollBy({
      left: dir === 'left' ? -340 : 340,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5]" style={{ fontFamily: 'var(--font-poppins)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* Main article — white rounded card (Figma-style container) */}
        <article className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200/80 shadow-sm p-6 sm:p-8 lg:p-10 xl:p-12 mb-12 lg:mb-16">
          {/* Category */}
          <span className="inline-block uppercase text-xs font-bold tracking-wide bg-amber-400 text-white px-3 py-1.5 rounded-full mb-4">
            {blog.category}
          </span>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.5rem] font-bold text-gray-900 leading-tight mb-6">
            {blog.title}
          </h1>

          {/* Metadata: brand left — byline right */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-6">
            <div className="flex items-center gap-2 min-w-0">
              <Image
                src="/images/circle.png"
                alt="UrbanTech"
                width={28}
                height={28}
                className="w-7 h-7 rounded-full shrink-0 object-cover border border-gray-100"
              />
              <span className="text-sm sm:text-base font-semibold text-gray-900 truncate">
                UrbanTech
              </span>
            </div>
            <p className="text-sm text-gray-500 shrink-0">
              by {blog.author} — {blog.date}
            </p>
          </div>

          {/* CTA */}
          <button
            type="button"
            className="w-full mb-8 sm:mb-10 px-5 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition shadow-sm"
          >
            Go to Product Page
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </button>

          {/* Two columns: article text | media gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 pt-2 border-t border-gray-100">
            <div className="min-w-0 order-2 lg:order-1">
              <p className="text-base text-gray-800 mb-6 leading-relaxed">
                {blog.content.intro}
              </p>

              {blog.content.sections.map((section, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                    {section.heading}
                  </h2>
                  <p className="text-base text-gray-800 mb-4 leading-relaxed">
                    {section.text}
                  </p>
                  {section.points && (
                    <ul className="list-disc list-inside mb-4 space-y-2 text-base text-gray-800">
                      {section.points.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  )}
                  {section.details && (
                    <div className="space-y-4 mt-4">
                      {section.details.map((detail, detailIndex) => (
                        <div key={detailIndex}>
                          <h3 className="text-base font-semibold text-gray-900 mb-2">
                            {detail.title}
                          </h3>
                          <p className="text-base text-gray-800 leading-relaxed">
                            {detail.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:gap-5 order-1 lg:order-2 min-w-0">
              <div className="relative w-full aspect-[4/3] sm:aspect-[5/4] rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={blog.productImages.hero}
                  alt="Featured"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {blog.productImages.grid.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 group cursor-pointer"
                  >
                    <Image
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      unoptimized
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 flex items-center justify-center shadow-md">
                        <Play className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Related Blogs — section title + horizontal carousel */}
        <section className="pb-8">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
            Related Blogs
          </h2>

          <div className="relative">
            <button
              type="button"
              onClick={() => scrollRelated('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-gray-50 -ml-1 sm:-ml-2"
              aria-label="Previous related blogs"
            >
              <ChevronLeft className="w-5 h-5 text-gray-800" />
            </button>
            <button
              type="button"
              onClick={() => scrollRelated('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-gray-50 -mr-1 sm:-mr-2"
              aria-label="Next related blogs"
            >
              <ChevronRight className="w-5 h-5 text-gray-800" />
            </button>

            <div
              ref={relatedScrollRef}
              className="flex gap-4 sm:gap-5 overflow-x-auto pb-2 px-10 sm:px-12 scrollbar-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  key={relatedBlog.id}
                  href={`/blogs/${relatedBlog.id}`}
                  className="shrink-0 w-[min(100%,280px)] sm:w-[300px] block group"
                >
                  <article className="bg-white rounded-xl overflow-hidden border border-gray-200/90 shadow-sm h-full flex flex-col transition group-hover:shadow-md">
                    <div className="relative w-full aspect-[4/3] bg-gray-100">
                      <Image
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        fill
                        className="object-cover"
                        sizes="300px"
                        unoptimized
                      />
                      <span
                        className={`absolute bottom-2 left-2 text-[10px] sm:text-xs font-bold uppercase px-2 py-0.5 rounded ${relatedBlog.categoryBg} ${relatedCategoryTextClass(relatedBlog.category)}`}
                      >
                        {relatedBlog.category}
                      </span>
                    </div>
                    <div className="p-4 flex flex-col flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 line-clamp-2 mb-4 leading-snug">
                        {relatedBlog.title}
                      </h3>
                      <div className="mt-auto flex items-center justify-between gap-2 text-xs text-gray-500">
                        <span className="flex items-center gap-1.5 min-w-0">
                          <Image
                            src="/images/circle.png"
                            alt=""
                            width={20}
                            height={20}
                            className="w-5 h-5 rounded-full shrink-0 object-cover"
                          />
                          <span className="truncate">{relatedBlog.author}</span>
                        </span>
                        <span className="shrink-0">{relatedBlog.date}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
