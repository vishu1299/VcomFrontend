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
  const orderStatusFromApi: string = "DELIVERED";
  const isDelivered = orderStatusFromApi === "DELIVERED";
  return (
    <main className="page-text-black min-h-screen bg-gray-100">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-4 sm:py-6">
      <DeliveredPageHeader
        title={isDelivered ? "Your Order Has Been Delivered!" : "Your Order is in Transit"}
        color={isDelivered ? "text-[#0C9200]" : "text-black"}
        delivered={isDelivered}
        onNeedHelpClick={() => setNeedHelpOpen(true)}
      />
        <div className="bg-white rounded-lg p-4">
          <TrackOrderHeader delivered={isDelivered} />
          <ProductDetailsCard delivered={isDelivered} />
          {!isDelivered && <NoteSection />}
          <LiveUpdatesStepper delivered={isDelivered} />
          <ShipmentDetails delivered={isDelivered} />
        </div>
        <div className="mt-4 w-full min-w-0 overflow-visible sm:mt-6">
          <RelatedProductsCarousel title="Similar Products" />
        </div>
      </div>
      <NeedHelpModal open={needHelpOpen} onClose={() => setNeedHelpOpen(false)} />
    </main>
  );
}
