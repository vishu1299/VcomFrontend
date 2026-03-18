"use client";

const TRACKING_NUMBER = "Order #123456";

const DETAILS = [
  { label: "Name", value: "Prateek Sharma", icon: "person" },
  {
    label: "Shipping Address",
    value: "FT-43 Street NO.32, New Delhi",
    icon: "location",
  },
  { label: "Contact Number", value: "+91 7984 468764", icon: "phone" },
  { label: "Dispatch Date", value: "11 Nov 2025", icon: "calendar" },
  { label: "Expected Delivery", value: "16 Nov 2025", icon: "box" },
  { label: "Shipping Partner", value: "BlueDart", icon: "truck" },
  {
    label: "Tracking Number",
    value: TRACKING_NUMBER,
    icon: "location",
    copyable: true,
  },
];

function PersonIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="shrink-0 text-[#131313]"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="shrink-0 text-[#131313]"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="shrink-0 text-[#131313]"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="shrink-0 text-[#131313]"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="shrink-0 text-[#131313]"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="shrink-0 text-[#131313]"
    >
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="shrink-0 cursor-pointer hover:text-blue-600 inline-block align-middle ml-1"
      aria-hidden
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function DetailIcon({ name }: { name: string }) {
  if (name === "person") return <PersonIcon />;
  if (name === "location") return <LocationIcon />;
  if (name === "phone") return <PhoneIcon />;
  if (name === "calendar") return <CalendarIcon />;
  if (name === "box") return <BoxIcon />;
  if (name === "truck") return <TruckIcon />;
  return <LocationIcon />;
}

export default function ShipmentDetails() {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(TRACKING_NUMBER);
    } catch {
      // ignore
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-[#131313] mb-4">
        Shipment Details
      </h2>
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-4 sm:p-6">
        <dl className="space-y-4">
          {DETAILS.map(({ label, value, icon, copyable }) => (
            <div key={label} className="flex items-start sm:items-center gap-3">
              <DetailIcon name={icon} />
              <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-4">
                <dt className="text-sm text-[#131313] font-medium">{label}</dt>
                <dd className="text-sm text-[#131313] flex items-center">
                  {value}
                  {copyable && (
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="p-0.5"
                      aria-label="Copy tracking number"
                    >
                      <CopyIcon />
                    </button>
                  )}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
