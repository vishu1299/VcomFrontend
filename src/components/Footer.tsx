'use client';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#131313] font-[Poppins]">
      <div className="w-full px-[220px] pt-[80px] pb-[80px] flex justify-between text-white">
        <div className="w-[260px]">
          <div> <Image src="/images/logo.png" alt="" width={50} height={40} className="shrink-0" /></div>
      
          <p className="text-[12px] leading-[18px] mb-[6px]">
            Monday - Saturday&nbsp;&nbsp;8:00 am - 4:00 pm
          </p>
          <p className="text-[12px] leading-[18px] mb-[20px]">
            Sunday&nbsp;&nbsp;9:00 am - 5:00 pm
          </p>
          <button className="bg-[#F6B800] text-black text-[12px] font-medium px-[24px] py-[10px] rounded-[6px]">
            Start Selling
          </button>
        </div>

        <div>
          <h4 className="text-[14px] font-medium mb-[16px]">Quick links</h4>
          <ul className="space-y-[10px] text-[12px]">
            <li>Home</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Support</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[14px] font-medium mb-[16px]">Categories</h4>
          <ul className="space-y-[10px] text-[12px]">
            <li>Fashion & Apparel</li>
            <li>Beauty & Personal Care</li>
            <li>Home & Living</li>
            <li>Jewelry & Watches</li>
            <li>Electronics & Gadgets</li>
            <li>Handmade & Artisanal</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[14px] font-medium mb-[16px]">Help Center</h4>
          <ul className="space-y-[10px] text-[12px]">
            <li>Help & FAQ</li>
            <li>Submit a Ticket</li>
            <li>Return Policy</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
            <li>Cancellation Policy</li>
            <li>Inquiry</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[14px] font-medium mb-[16px]">Contact Info</h4>
          <ul className="space-y-[10px] text-[12px]">
            <li>TibilMall HQ – Michigan, USA</li>
            <li>Registered as TibilMall LLC</li>
          </ul>
        </div>
      </div>

      <div className="w-full bg-[#1E3A8A]">
        <div className="w-full px-[220px] h-[48px] flex items-center justify-between text-white text-[12px]">
          <p>Copyright © 2025 TibilMall. All rights reserved</p>
          <div className="flex gap-[16px]">
            <div className="w-[16px] h-[16px] bg-white rounded-full" />
            <div className="w-[16px] h-[16px] bg-white rounded-full" />
            <div className="w-[16px] h-[16px] bg-white rounded-full" />
            <div className="w-[16px] h-[16px] bg-white rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
}
