'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Play } from 'lucide-react';

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

export default function BlogDetailClient({ blog, relatedBlogs }: BlogDetailClientProps) {

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[126px] py-8 sm:py-12 lg:py-16">
        {/* Blog Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Left Section - Blog Content */}
          <div className="flex flex-col">
            {/* Category Tag */}
            <span
              className={`inline-block text-design-12 sm:text-design-14 font-medium ${blog.categoryBg} text-[var(--color-black)] px-3 py-1.5 rounded w-fit mb-4`}
            >
              {blog.category}
            </span>

            {/* Title */}
            <h1 className="text-design-24 sm:text-design-32 lg:text-[48px] font-bold text-[var(--color-black)] mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Author and Date */}
            <div className="flex items-center gap-2 text-design-14 text-[var(--color-muted-alt-2)] mb-8">
              <Image
                src={blog.authorImage}
                alt={blog.author}
                width={24}
                height={24}
                className="w-6 h-6 rounded-full shrink-0 object-cover"
              />
              <span>{blog.author}</span>
              <span>by</span>
              <div className="ml-auto flex items-center gap-2">
                <span className="font-medium">{blog.author}</span>
                <span>—</span>
                <span>{blog.date}</span>
              </div>
            </div>

            {/* Go to Product Page Button */}
            <button className="w-full mb-8 px-6 py-3 border border-[var(--color-border-input)] rounded-lg bg-white text-[var(--color-black)] text-design-14 font-medium flex items-center justify-center gap-2 hover:bg-[var(--color-border)] transition">
              Go to Product Page
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Blog Content */}
            <div className="prose max-w-none">
              <p className="text-design-16 text-[var(--color-black)] mb-6 leading-relaxed">
                {blog.content.intro}
              </p>

              {blog.content.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-design-20 sm:text-design-24 font-semibold text-[var(--color-black)] mb-4">
                    {section.heading}
                  </h2>
                  <p className="text-design-16 text-[var(--color-black)] mb-4 leading-relaxed">
                    {section.text}
                  </p>
                  {section.points && (
                    <ul className="list-disc list-inside mb-4 space-y-2 text-design-16 text-[var(--color-black)]">
                      {section.points.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  )}
                  {section.details && (
                    <div className="space-y-4 mt-6">
                      {section.details.map((detail, detailIndex) => (
                        <div key={detailIndex}>
                          <h3 className="text-design-18 font-semibold text-[var(--color-black)] mb-2">
                            {detail.title}
                          </h3>
                          <p className="text-design-16 text-[var(--color-black)] leading-relaxed">
                            {detail.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Product Imagery */}
          <div className="flex flex-col gap-6">
            {/* Hero Product Display */}
            <div className="relative w-full h-[400px] sm:h-[500px] rounded-xl overflow-hidden bg-[var(--color-border)]">
              <Image
                src={blog.productImages.hero}
                alt="Product display"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Product Usage Grid */}
            <div className="grid grid-cols-2 gap-4">
              {blog.productImages.grid.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-xl overflow-hidden bg-[var(--color-border)] group cursor-pointer"
                >
                  <Image
                    src={image}
                    alt={`Product usage ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="w-6 h-6 text-[var(--color-black)] ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Blogs Section */}
          <h2 className="text-design-24 sm:text-design-32 font-semibold text-black mb-8">
            Related Blogs
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {relatedBlogs.map((relatedBlog) => (
              <Link key={relatedBlog.id} href={`/blogs/${relatedBlog.id}`}>
                <article className="bg-white rounded-xl overflow-hidden transition hover:shadow-lg flex flex-col h-full">
                  <div className="relative w-full h-[200px] sm:h-[250px] bg-[var(--color-border)]">
                    <Image
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col flex-1">
                    <span
                      className={`inline-block text-design-12 font-medium ${relatedBlog.categoryBg} text-[var(--color-black)] px-2 py-1 rounded w-fit mb-3`}
                    >
                      {relatedBlog.category}
                    </span>
                    <h3 className="text-design-16 sm:text-design-18 font-semibold text-[var(--color-black)] line-clamp-2 mb-3 flex-1">
                      {relatedBlog.title}
                    </h3>
                    <div className="flex items-center gap-2 text-design-14 text-[var(--color-muted-alt-2)]">
                      <Image
                        src="/images/circle.png"
                        alt={relatedBlog.author}
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full shrink-0 object-cover"
                      />
                      <span>{relatedBlog.author}</span>
                      <span>•</span>
                      <span>{relatedBlog.date}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
      </div>
    </div>
  );
}
