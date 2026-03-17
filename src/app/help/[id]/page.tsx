'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const inputClass =
  'w-full min-h-[40px] px-3 py-2 text-sm border border-[var(--color-border-input)] rounded-lg bg-white outline-none focus:border-[var(--color-main-blue)]';
const labelClass = 'block text-sm font-medium mb-1.5';

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
  { id: '5', title: 'Where is my order?', image: '/images/artical2.png', tab: 'General' },
  { id: '6', title: 'What are the return policies for different items?', image: '/images/artical2.png', tab: 'General' },
  { id: '7', title: 'I didn\'t receive my product - what should I do?', image: '/images/artical1.png', tab: 'General' },
  { id: '8', title: 'Can I ship to a different address?', image: '/images/artical2.png', tab: 'General' },
];

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

export default function HelpArticleDetailPage() {
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : '';
  const [activeArticleTab, setActiveArticleTab] = useState('General');
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactFirstName, setContactFirstName] = useState('');
  const [contactLastName, setContactLastName] = useState('');
  const [contactEmail, setContactEmail] = useState('davidjosh32@gmail.com');
  const [contactCountryCode, setContactCountryCode] = useState('+1');
  const [contactPhone, setContactPhone] = useState('');
  const [contactReason, setContactReason] = useState('');
  const [contactDescription, setContactDescription] = useState('');
  const [contactMethod, setContactMethod] = useState<'email' | 'call'>('email');
  const articlesScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showContactModal) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [showContactModal]);

  const article = MOCK_ARTICLES.find((a) => a.id === id) || MOCK_ARTICLES[0];
  const filteredArticles = MOCK_ARTICLES.filter((a) => a.tab === activeArticleTab);
  const moreArticles = (filteredArticles.length ? filteredArticles : MOCK_ARTICLES).filter((a) => a.id !== id);

  const scrollArticles = (dir: 'left' | 'right') => {
    if (!articlesScrollRef.current) return;
    articlesScrollRef.current.scrollBy({
      left: dir === 'left' ? -320 : 320,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5]" style={{ fontFamily: 'var(--font-poppins)' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-2xl bg-white p-6 sm:p-8" style={{ border: '1px solid #D2D2D2' }}>
          {/* Page header */}
          <p className="text-base sm:text-lg font-medium text-black mb-2">Help Articles</p>

          {/* Article title + support links */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
            <h1 className="text-xl sm:text-2xl font-bold text-black flex-1">{article.title}</h1>
            <div className="flex items-center gap-2 shrink-0 flex-wrap">
              <button
                type="button"
                onClick={() => setShowContactModal(true)}
                className="text-sm font-medium hover:underline"
                style={{ color: 'var(--color-main-blue)' }}
              >
                Need more Help?
              </button>
           
              <Link href="/help/submit-ticket" className="text-sm font-medium hover:underline" style={{ color: 'var(--color-main-blue)' }}>
                Submit a ticket
              </Link>
            </div>
          </div>

          {/* Article body */}
          <div className="prose prose-sm max-w-none mb-8">
            <p className="text-sm text-[var(--color-black-01)] leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-sm text-[var(--color-black-01)] leading-relaxed mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-sm text-[var(--color-black-01)] leading-relaxed mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>

          {/* Steps - heading above box, bg #E5E5E5, Step 1: vedio.svg, Step 2&3: img.svg */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div>
              <span className="text-sm font-medium text-black block mb-2">Step 1</span>
              <div className="rounded-lg aspect-video flex items-center justify-center min-h-[140px]" style={{ backgroundColor: '#E5E5E5' }}>
                <Image src="/vedio.svg" alt="" width={56} height={56} />
              </div>
            </div>
            <div>
              <span className="text-sm font-medium text-black block mb-2">Step 2</span>
              <div className="rounded-lg aspect-video flex items-center justify-center min-h-[140px]" style={{ backgroundColor: '#E5E5E5' }}>
                <Image src="/img.svg" alt="" width={48} height={48} />
              </div>
            </div>
            <div>
              <span className="text-sm font-medium text-black block mb-2">Step 3</span>
              <div className="rounded-lg aspect-video flex items-center justify-center min-h-[140px]" style={{ backgroundColor: '#E5E5E5' }}>
                <Image src="/img.svg" alt="" width={48} height={48} />
              </div>
            </div>
          </div>

          {/* More Articles - same white box */}
          <div className="pt-0">
            <h2 className="text-xl font-bold text-black mb-4">More Articles</h2>

          <div className="flex flex-nowrap gap-1 mb-6 overflow-x-auto pb-1 scrollbar-hide">
            {ARTICLE_TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveArticleTab(tab)}
                className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap transition border-b-2 -mb-px ${
                  activeArticleTab === tab ? 'border-[#1E3A8A] text-black' : 'border-transparent text-[var(--color-muted-alt-2)] hover:text-black'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative">
            <div
              ref={articlesScrollRef}
              className="flex gap-4 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
            >
              {(moreArticles.length ? moreArticles : MOCK_ARTICLES.filter((a) => a.id !== id)).map((a) => (
                <ArticleCard key={a.id} id={a.id} title={a.title} image={a.image} />
              ))}
            </div>
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
          </div>
        </div>

        {/* Contact US modal */}
        {showContactModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
            onClick={() => setShowContactModal(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
          >
            <div
              className="bg-white rounded-2xl shadow-xl w-full max-w-[800px] max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h2 id="contact-modal-title" className="text-xl font-bold text-black">Contact US</h2>
                    <p className="text-sm mt-1" style={{ color: '#767676' }}>
                      We&apos;re here to help you – whether you&apos;re a shopper, seller, or just curious. Reach out and let&apos;s connect.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowContactModal(false)}
                    className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-600 shrink-0"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <hr className="my-4 border-t" style={{ borderColor: '#D2D2D2' }} />

                <p className="text-sm font-bold text-black mb-3">Enter Ticket Details</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass} style={{ color: '#131313' }}>First Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      value={contactFirstName}
                      onChange={(e) => setContactFirstName(e.target.value)}
                      className={inputClass}
                      placeholder="Enter First Name"
                    />
                  </div>
                  <div>
                    <label className={labelClass} style={{ color: '#131313' }}>Last Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      value={contactLastName}
                      onChange={(e) => setContactLastName(e.target.value)}
                      className={inputClass}
                      placeholder="Enter Last Name"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="sm:col-span-1">
                    <label className={labelClass} style={{ color: '#131313' }}>Phone Number</label>
                    <div className="flex min-h-[40px] border border-[var(--color-border-input)] rounded-lg overflow-hidden bg-white">
                      <select
                        value={contactCountryCode}
                        onChange={(e) => setContactCountryCode(e.target.value)}
                        className="w-[72px] pl-2 pr-6 py-2 text-sm bg-gray-50 outline-none border-r border-[var(--color-border-input)] appearance-none bg-no-repeat bg-[length:10px] bg-[right_6px_center] shrink-0"
                        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%236b7280\' stroke-width=\'2\'%3E%3Cpath d=\'M6 9l6 6 6-6\'/%3E%3C/svg%3E")' }}
                      >
                        <option value="+1">+1</option>
                        <option value="+91">+91</option>
                        <option value="+44">+44</option>
                      </select>
                      <input
                        type="tel"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="flex-1 min-w-0 px-3 py-2 text-sm outline-none"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="sm:col-span-1">
                    <label className={labelClass} style={{ color: '#131313' }}>Reason</label>
                    <input
                      type="text"
                      value={contactReason}
                      onChange={(e) => setContactReason(e.target.value)}
                      className={inputClass}
                      placeholder="Enter Reason"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className={labelClass} style={{ color: '#131313' }}>Description</label>
                  <textarea
                    value={contactDescription}
                    onChange={(e) => setContactDescription(e.target.value)}
                    placeholder="Write your issue"
                    className="w-full h-[100px] px-3 py-2 text-sm border border-[var(--color-border-input)] rounded-lg bg-white outline-none focus:border-[var(--color-main-blue)] resize-none"
                  />
                  <p className="text-xs text-right mt-1" style={{ color: '#767676' }}>Min: 300 Characters</p>
                </div>

                <p className="text-sm font-bold text-black mt-5 mb-2">Preferred Contact Method</p>
                <div className="flex flex-wrap gap-3">
                  <label
                    className="flex items-center justify-between min-h-[44px] px-4 w-[300px] rounded-[6px] border cursor-pointer"
                    style={{ borderColor: '#D2D2D2' }}
                  >
                    <span className="text-sm font-medium text-black">Email</span>
                    <input
                      type="radio"
                      name="contactMethodModal"
                      checked={contactMethod === 'email'}
                      onChange={() => setContactMethod('email')}
                      className="w-4 h-4 accent-[var(--color-main-blue)] shrink-0"
                    />
                  </label>
                  <label
                    className="flex items-center justify-between min-h-[44px] px-4 w-[300px] rounded-[6px] border cursor-pointer"
                    style={{ borderColor: '#D2D2D2' }}
                  >
                    <span className="text-sm font-medium text-black">Call</span>
                    <input
                      type="radio"
                      name="contactMethodModal"
                      checked={contactMethod === 'call'}
                      onChange={() => setContactMethod('call')}
                      className="w-4 h-4 accent-[var(--color-main-blue)] shrink-0"
                    />
                  </label>
                </div>

                <div className="flex justify-end mt-6">
                  <button
                    type="button"
                    className="min-h-[44px] px-8 rounded-lg text-sm font-medium bg-[var(--color-main-blue)] text-white hover:opacity-90"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
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
