'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

const CATEGORIES = [
  { id: 'shopper', title: 'Shopper Support', description: 'Orders, returns, payments, shipping, accounts', icon: '/support.svg', href: '#' },
  { id: 'vendor', title: 'Vendor Help', description: 'Vendor onboarding, payouts, and listings', icon: '/vendor.svg', href: '#' },
  { id: 'livestream', title: 'Livestream FAQs', description: 'Going live, streaming setup, and selling', icon: '/livestream.svg', href: '#' },
  { id: 'billing', title: 'Billing & Payments', description: 'Invoices, payment methods, and billing', icon: '/bill.svg', href: '#' },
  { id: 'returns', title: 'Returns & Refunds', description: 'Return process, refunds, and exchanges', icon: '/refund.svg', href: '#' },
  { id: 'shipping', title: 'Shipping & Delivery', description: 'Tracking, delivery times, and shipping options', icon: '/delivery.svg', href: '#' },
  { id: 'general', title: 'General FAQs', description: 'Account, security, and common questions', icon: '/faq.svg', href: '#' },
  { id: 'ticket', title: 'Submit a Ticket', description: 'Can\'t find an answer? Submit a support ticket', icon: '/contact.svg', href: '/help/submit-ticket' },
  { id: 'contact', title: 'Contact Us', description: 'Get in touch with our support team', icon: '/contact.svg', href: '#' },
];

const ARTICLE_TABS = [
  'General',
  'Orders',
  'Shipping & Delivery',
  'Returns & Refunds',
  'Warranty',
  'Products',
  'Payments',
];

const MOCK_ARTICLES = [
  { id: '1', title: 'How do I return an item on TibilMall?', image: '/images/artical1.png', tab: 'General' },
  { id: '2', title: 'How can I track my order?', image: '/images/artical2.png', tab: 'General' },
  { id: '3', title: 'What is your refund policy?', image: '/images/artical1.png', tab: 'General' },
  { id: '4', title: 'How do I update my payment method?', image: '/images/artical2.png', tab: 'General' },
];

function CategoryCard({
  title,
  description,
  iconSrc,
  href,
}: {
  title: string;
  description: string;
  iconSrc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-xl border bg-white p-4 sm:p-5 transition text-left"
      style={{ borderColor: '#D2D2D2' }}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
          <Image src={iconSrc} alt="" width={24} height={24} />
        </div>
        <ChevronRight className="w-5 h-5 shrink-0 mt-1" style={{ color: '#454545' }} />
      </div>
      <h3 className="text-md font-bold text-black mb-1">{title}</h3>
      <p className="text-xs leading-relaxed" style={{ color: '#767676' }}>{description}</p>
    </Link>
  );
}

function ArticleCard({ id, title, image }: { id: string; title: string; image: string }) {
  return (
    <div className="shrink-0 w-[280px] sm:w-[300px] flex flex-col rounded-xl border bg-white overflow-hidden" style={{ borderColor: '#D2D2D2' }}>
      <div className="p-3">
        <div className="relative w-full max-w-[300px] h-[140px] rounded-[8px] overflow-hidden mx-auto">
          <Image src={image} alt="" fill className="object-cover" sizes="300px" />
        </div>
      </div>
      <div className="px-4 pb-4 flex flex-col flex-1 min-h-0">
        <h3 className="text-sm font-bold text-black mb-3 line-clamp-2 min-h-[2.5rem]">{title}</h3>
        <Link
          href={`/help/${id}`}
          className="w-full inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-sm font-medium border bg-white text-black hover:bg-gray-50 transition mt-auto"
          style={{ borderColor: '#D2D2D2' }}
        >
          View Article
          <ChevronRight className="w-4 h-4" style={{ color: 'black' }} />
        </Link>
      </div>
    </div>
  );
}

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticleTab, setActiveArticleTab] = useState('General');
  const articlesScrollRef = useRef<HTMLDivElement>(null);

  const scrollArticles = (dir: 'left' | 'right') => {
    if (!articlesScrollRef.current) return;
    const scrollAmount = 320;
    articlesScrollRef.current.scrollBy({
      left: dir === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const filteredArticles = MOCK_ARTICLES.filter((a) => a.tab === activeArticleTab);

  return (
    <div className="min-h-screen bg-[#f5f5f5]" style={{ fontFamily: 'var(--font-poppins)' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* White box container */}
        <div
          className="rounded-2xl bg-white p-6 sm:p-8"
          style={{ border: '1px solid #D2D2D2' }}
        >
          {/* Page title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-black mb-6">
            Help Center
          </h1>

          {/* Search bar - full width on mobile, half on md+ */}
          <div className="relative mb-10 w-full md:max-w-[50%]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="How can we assist you? (e.g., Returns, Refunds, Streaming, Shipping)"
              className="w-full min-h-[48px] pl-4 pr-12 py-3 text-sm border rounded-xl bg-white outline-none focus:border-[var(--color-main-blue)] placeholder:text-[#9ca3af]"
              style={{ borderColor: '#D2D2D2' }}
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-gray-100 text-[var(--color-muted-alt-2)]"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Support categories grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {CATEGORIES.map((cat) => (
              <CategoryCard
                key={cat.id}
                title={cat.title}
                description={cat.description}
                iconSrc={cat.icon}
                href={cat.href}
              />
            ))}
          </div>

          {/* Help Articles */}
          <section>
            <h2 className="text-xl font-bold text-black mb-4">
              Help Articles
            </h2>

            {/* Tabs - horizontal scroll on mobile (no wrap), same as web */}
            <div className="flex flex-nowrap gap-1 mb-6 overflow-x-auto pb-1 scrollbar-hide">
              {ARTICLE_TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveArticleTab(tab)}
                  className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap transition border-b-2 -mb-px ${
                    activeArticleTab === tab
                      ? 'border-[#1E3A8A] text-black'
                      : 'border-transparent text-[var(--color-muted-alt-2)] hover:text-black'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Article cards carousel */}
            <div className="relative">
              <div
                ref={articlesScrollRef}
                className="flex gap-4 overflow-x-auto scroll-smooth pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {(filteredArticles.length ? filteredArticles : MOCK_ARTICLES).map((article) => (
                  <ArticleCard key={article.id} id={article.id} title={article.title} image={article.image} />
                ))}
              </div>

              {/* Centered arrow buttons below listing */}
              <div className="flex items-center justify-center gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => scrollArticles('left')}
                  className="w-10 h-10 rounded-full bg-white border flex items-center justify-center hover:bg-gray-50 transition"
                  style={{ borderColor: '#D2D2D2', color: '#454545' }}
                  aria-label="Previous articles"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollArticles('right')}
                  className="w-10 h-10 rounded-full bg-white border flex items-center justify-center hover:bg-gray-50 transition"
                  style={{ borderColor: '#D2D2D2', color: '#454545' }}
                  aria-label="Next articles"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Footer links - same as account pages */}
        <nav className="flex flex-wrap items-center justify-center gap-4 py-5 text-[14px] text-[var(--color-black-01)]">
          <Link href="/" className="hover:underline">Home</Link>
          <span>|</span>
          <Link href="/account/orders" className="hover:underline">My Orders</Link>
          <span>|</span>
          <Link href="/help" className="hover:underline">Help Center</Link>
          <span>|</span>
          <Link href="#" className="hover:underline">Privacy Policy</Link>
          <span>|</span>
          <Link href="#" className="hover:underline">Return Policy</Link>
        </nav>
      </div>
    </div>
  );
}
