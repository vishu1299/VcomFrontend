"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Loader2 } from "lucide-react";

const inputClass =
  "w-full min-h-[40px] px-3 py-2 text-sm border border-[var(--color-border-input)] rounded-lg bg-white outline-none focus:border-[var(--color-main-blue)]";
const labelClass = "block text-sm font-medium mb-1.5";
/** Form inputs: placeholder #767676, typed text black */
const formInputClass = `${inputClass} text-black placeholder:text-[#767676]`;

const CONTACT_CATEGORIES = [
  {
    id: "buyer",
    title: "Buyer Support",
    description: "Issues with orders, returns, accounts",
  },
  {
    id: "vendor",
    title: "Vendor Issues",
    description: "Signup help, seller tools, streaming, billing",
  },
  {
    id: "marketing",
    title: "Marketing & Media",
    description: "Press, collaborations, influencer inquiries",
  },
  {
    id: "technical",
    title: "Technical Issues",
    description: "Site bugs, account glitches, login problems",
  },
  {
    id: "partnerships",
    title: "Partnerships",
    description: "Enterprise onboarding, B2B collaborations",
  },
  {
    id: "feedback",
    title: "General Feedback",
    description: "Suggestions, compliments, questions",
  },
];

export default function SubmitTicketPage() {
  const [category, setCategory] = useState(CONTACT_CATEGORIES[0]);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phone, setPhone] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [message, setMessage] = useState("");
  const [contactMethod, setContactMethod] = useState<"email" | "phone">(
    "email",
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
    }, 1000);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#f5f5f5]"
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div
          className="rounded-2xl bg-white p-6 sm:p-8"
          style={{ border: "1px solid #D2D2D2" }}
        >
          <h1 className="text-2xl sm:text-2xl font-bold text-black mb-1">
            Submit a Ticket
          </h1>
          <p className="text-sm mb-8" style={{ color: "#767676" }}>
            Your report helps keep our marketplace safe.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Form */}
            <div className="lg:col-span-7 space-y-5">
              {/* Contact Category dropdown - half width (same as one field in 2-col grid) */}
              <div ref={dropdownRef} className="relative w-full sm:max-w-[50%]">
                <label className={labelClass} style={{ color: "#131313" }}>
                  Contact Category
                </label>
                <button
                  type="button"
                  onClick={() => setOpenDropdown(!openDropdown)}
                  className="w-full min-h-[44px] px-3 py-2.5 text-sm text-left border border-[var(--color-border-input)] rounded-lg bg-white flex items-center justify-between outline-none focus:border-[var(--color-main-blue)]"
                >
                  <span className="font-medium text-black">
                    {category.title}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-500 shrink-0" />
                </button>
                {openDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[var(--color-border)] rounded-lg shadow-lg z-10 overflow-hidden min-w-[280px]">
                    {CONTACT_CATEGORIES.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          setCategory(opt);
                          setOpenDropdown(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition"
                      >
                        <p className="text-sm font-bold text-black">
                          {opt.title}
                        </p>
                        <p
                          className="text-xs mt-0.5"
                          style={{ color: "#767676" }}
                        >
                          {opt.description}
                        </p>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Outer box: Full Name through Preferred contact method label */}
              <div
                className="submit-ticket-form rounded-xl p-5 sm:p-6 border bg-white"
                style={{ borderColor: "#D2D2D2", paddingBottom: "2.5rem" }}
              >
                <style dangerouslySetInnerHTML={{ __html: ".submit-ticket-form input::placeholder, .submit-ticket-form textarea::placeholder { color: #767676; }" }} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass} style={{ color: "#131313" }}>
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={formInputClass}
                      required
                      placeholder="Enter Full Name"
                    />
                  </div>
                  <div>
                    <label className={labelClass} style={{ color: "#131313" }}>
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={formInputClass}
                      required
                      placeholder="Enter Email"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className={labelClass} style={{ color: "#131313" }}>
                    Phone Number
                  </label>
                  <div className="flex min-h-[40px] border border-[var(--color-border-input)] rounded-lg overflow-hidden bg-white">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="w-[80px] sm:w-[100px] pl-2 pr-7 py-2 text-sm bg-gray-50 outline-none border-r border-[var(--color-border-input)] appearance-none bg-no-repeat bg-[length:12px] bg-[right_6px_center]"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                      }}
                    >
                      <option value="+1">+1</option>
                      <option value="+91">+91</option>
                      <option value="+44">+44</option>
                    </select>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="flex-1 min-w-0 px-3 py-2 text-sm outline-none text-black placeholder:text-[#767676]"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className={labelClass} style={{ color: "#131313" }}>
                    Order Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    className={formInputClass}
                    required
                    placeholder="Enter Order Number"
                  />
                </div>

                <div className="mt-5">
                  <label className={labelClass} style={{ color: "#131313" }}>
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your issue"
                    className="w-full h-[150px] px-3 py-2 text-sm text-black placeholder:text-[#767676] border border-[var(--color-border-input)] rounded-lg bg-white outline-none focus:border-[var(--color-main-blue)] resize-none"
                  />
                  <p
                    className="text-xs text-right mt-1"
                    style={{ color: "#767676" }}
                  >
                    Min: 300 Characters
                  </p>
                </div>

                <div className="mt-5">
                  <label className={labelClass} style={{ color: "#131313" }}>
                    Upload Pictures (Optional)
                  </label>
                  <p className="text-xs mb-2" style={{ color: "#767676" }}>
                    Screenshots, invoices, etc
                  </p>
                  <div
                    className="border-2 border-dashed rounded-lg p-6 sm:p-8 text-center bg-white"
                    style={{ borderColor: "#3581EA" }}
                  >
                    <div className="flex justify-center mb-3">
                      <Image src="/add.svg" alt="" width={48} height={48} />
                    </div>
                    <p className="text-sm mb-1" style={{ color: "#131313" }}>
                      Choose a file or drag & drop it here
                    </p>
                    <p className="text-xs mb-3" style={{ color: "#767676" }}>
                      JPEG, PNG, PDF, and MP4 formats, up to 50 mb
                    </p>
                    <button
                      type="button"
                      className="text-sm font-medium px-4 py-2 rounded-lg border bg-white hover:bg-gray-50"
                      style={{ borderColor: "#D2D2D2" }}
                    >
                      Browse File
                    </button>
                  </div>
                </div>

                <div className="mt-5">
                  <label className={labelClass} style={{ color: "#131313" }}>
                    Preferred Contact Method
                  </label>
                </div>
              </div>

              {/* Email option box - 300px wide, left-aligned with content, half in half outside outer box */}
              <div className="pl-5 pr-5 sm:pl-6 sm:pr-0 relative -mt-13 z-10">
                <label
                  className="flex items-center justify-between gap-3 w-full sm:w-[300px] min-h-[48px] px-4 py-3 rounded-lg border bg-white cursor-pointer"
                  style={{ borderColor: "#D2D2D2" }}
                >
                  <span className="text-sm font-medium text-black">Email</span>
                  <input
                    type="radio"
                    name="contactMethod"
                    checked
                    readOnly
                    className="w-4 h-4 accent-[var(--color-main-blue)] shrink-0"
                  />
                </label>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="min-h-[44px] px-8 rounded-lg text-sm font-medium bg-[var(--color-main-blue)] text-white hover:opacity-90 disabled:opacity-80 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </div>

            {/* Right: Additional contact + Legal - wider to use space */}
            <div className="lg:col-span-5 space-y-6 min-w-0">
              <div>
                <h2 className="text-base font-bold text-black mb-1">
                  Additional Contact Methods
                </h2>
                <div
                  className="rounded-xl border bg-white p-5"
                  style={{ borderColor: "#D2D2D2" }}
                >
                  <Link href="#" className="block">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 mb-2"
                      style={{ backgroundColor: "#F3F7FA" }}
                    >
                      <Image src="/chat.svg" alt="" width={24} height={24} />
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium text-black">
                          Live Chat
                        </p>
                        <p
                          className="text-xs mt-0.5"
                          style={{ color: "#767676" }}
                        >
                          Available 10 AM - 7 PM IST
                        </p>
                      </div>
                      <Image
                        src="/arrow.svg"
                        alt=""
                        width={15}
                        height={15}
                        className="shrink-0"
                      />
                    </div>
                  </Link>
                  <hr
                    className="my-4 border-t"
                    style={{ borderColor: "#D2D2D2" }}
                  />
                  <Link href="#" className="block">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 mb-2"
                      style={{ backgroundColor: "#F3F7FA" }}
                    >
                      <Image
                        src="/whatsapp.svg"
                        alt=""
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium text-black">
                          WhatsApp Support
                        </p>
                        <p
                          className="text-xs mt-0.5"
                          style={{ color: "#767676" }}
                        >
                          Chat with us instantly
                        </p>
                      </div>
                      <Image
                        src="/arrow.svg"
                        alt=""
                        width={15}
                        height={15}
                        className="shrink-0"
                      />
                    </div>
                  </Link>
                  <hr
                    className="my-4 border-t"
                    style={{ borderColor: "#D2D2D2" }}
                  />
                  <Link href="mailto:support@tibilmall.com" className="block">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 mb-2"
                      style={{ backgroundColor: "#F3F7FA" }}
                    >
                      <Image src="/mail.svg" alt="" width={24} height={24} />
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium text-black">
                          Email Support
                        </p>
                        <p className="text-xs mt-0.5 text-[var(--color-main-blue)]">
                          support@tibilmall.com
                        </p>
                      </div>
                      <Image
                        src="/arrow.svg"
                        alt=""
                        width={15}
                        height={15}
                        className="shrink-0"
                      />
                    </div>
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="text-base font-bold text-black mb-1">
                  Legal Info
                </h2>
                <div
                  className="rounded-xl border bg-white p-5"
                  style={{ borderColor: "#D2D2D2" }}
                >
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 mb-2"
                    style={{ backgroundColor: "#F3F7FA" }}
                  >
                    <Image src="/location.svg" alt="" width={24} height={24} />
                  </div>
                  <p className="text-sm font-bold text-black">
                    Head Quarter Address
                  </p>
                  <p className="text-xs mt-1">
                    <span className="text-black">
                      TibilMall HQ - Michigan, USA
                    </span>
                    <span style={{ color: "#767676" }}>
                      {" "}
                      — Registered as TibilMall LLC
                    </span>
                  </p>
                  <nav className="flex flex-wrap items-center gap-2 mt-6 pt-4 text-[14px] text-black">
                    <Link href="/" className="hover:underline">
                      Home
                    </Link>
                    <span>|</span>
                    <Link href="/account/orders" className="hover:underline">
                      My Orders
                    </Link>
                    <span>|</span>
                    <Link href="/help" className="hover:underline">
                      Help Center
                    </Link>
                    <span>|</span>
                    <Link href="#" className="hover:underline">
                      Privacy Policy
                    </Link>
                    <span>|</span>
                    <Link href="#" className="hover:underline">
                      Return Policy
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-4 py-5 text-[14px] text-[var(--color-black-01)]">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>|</span>
          <Link href="/account/orders" className="hover:underline">
            My Orders
          </Link>
          <span>|</span>
          <Link href="/help" className="hover:underline">
            Help Center
          </Link>
          <span>|</span>
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="#" className="hover:underline">
            Return Policy
          </Link>
        </nav>
      </div>

      {/* Success modal */}
      {showSuccessModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
          onClick={() => setShowSuccessModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-modal-title"
        >
          <div
            className="bg-white rounded-3xl shadow-xl w-full max-w-[600px] h-[400px] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3 flex-1 flex flex-col min-h-0">
              <div className="rounded-xl overflow-hidden mb-2 flex-shrink-0 h-[240px]">
                <Image
                  src="/images/success1.png"
                  alt="Support team"
                  width={800}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                id="success-modal-title"
                className="text-lg font-bold text-black mt-1"
              >
                Thank you for reaching out.
              </h2>
              <p className="text-sm text-[#767676] mt-0.5">
                Our support team will respond within 24–48 hours.
              </p>
              <button
                type="button"
                onClick={() => setShowSuccessModal(false)}
                className="mt-3 w-full min-h-[40px] rounded-lg text-sm font-medium bg-[var(--color-main-blue)] text-white hover:opacity-90"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
