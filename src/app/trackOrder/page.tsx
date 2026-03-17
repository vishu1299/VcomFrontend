"use client";
import { useState } from "react";
import RelatedProductsCarousel from "../customer-reviews/components/RelatedProductsCarousel";
import { DeliveredPageHeader, NeedHelpModal } from "../orderDelivered/components";
import {
  TrackOrderHeader,
  ProductDetailsCard,
  NoteSection,
  LiveUpdatesStepper,
  ShipmentDetails,
} from "./components";

export default function TrackOrderPage() {
  const [needHelpOpen, setNeedHelpOpen] = useState(false);
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-[1100px] py-6 sm:py-8">
        <DeliveredPageHeader title="Your Order is in Transit" color="text-black" onNeedHelpClick={() => setNeedHelpOpen(true)} />
        <div className="bg-white rounded-lg p-4">
          <TrackOrderHeader />
          <ProductDetailsCard />
          <NoteSection />
          <LiveUpdatesStepper />
          <ShipmentDetails />
        </div>
        <div className="w-full overflow-hidden">
          <RelatedProductsCarousel title="Similar Products" />
        </div>  
      </div>
      <NeedHelpModal open={needHelpOpen} onClose={() => setNeedHelpOpen(false)} />
    </main>
  );
}
