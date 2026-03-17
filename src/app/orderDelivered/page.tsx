"use client";


import {
  DeliveredPageHeader,
  OrderDetailsDeliveredCard,
  NeedHelpModal,
} from "./components";
import {
  LiveUpdatesStepper,
  ShipmentDetails,
} from "../trackOrder/components";
import { useState } from "react";

export default function OrderDeliveredPage() {
  const [needHelpOpen, setNeedHelpOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 py-6 sm:py-8 ">
        <DeliveredPageHeader onNeedHelpClick={() => setNeedHelpOpen(true)} />
        <div className="bg-white rounded-lg p-4">

        <OrderDetailsDeliveredCard />
        <LiveUpdatesStepper delivered />
        <ShipmentDetails />
        </div>
      </div>
      <NeedHelpModal open={needHelpOpen} onClose={() => setNeedHelpOpen(false)} />
    </main>
  );
}
