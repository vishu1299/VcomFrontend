"use client";

const TRACKING_ID = "#432-9877-63";
const STEP_ACTIVE_COLOR = "#1E3A8A";
const STEP_DATE_COLOR = "#767676";

const STEPS_BASE = [
  {
    id: "placed",
    label: "Order Placed",
    date: "Tuesday, 11, Nov",
    icon: "check" as const,
  },
  {
    id: "processing",
    label: "Processing",
    date: "Tuesday, 11, Nov",
    icon: "loading" as const,
  },
  {
    id: "awaiting",
    label: "Awaiting Shipment",
    date: "Wednesday, 12, Nov",
    icon: "clock" as const,
  },
  {
    id: "shipped",
    label: "Shipped",
    date: "Wednesday, 12, Nov",
    icon: "truck" as const,
  },
  {
    id: "transit",
    label: "In Transit",
    date: "Wednesday, 12, Nov",
    icon: "pin" as const,
  },
  {
    id: "out",
    label: "Out for Delivery",
    date: "Thursday, 13, Nov",
    icon: "delivery" as const,
  },
  {
    id: "delivered",
    label: "Delivered",
    date: "Saturday, 16, Nov",
    icon: "package" as const,
  },
];

const STEPS_IN_TRANSIT = STEPS_BASE.map((s, i) => ({
  ...s,
  completed: i === 0,
  active: i === 1,
}));

const STEPS_DELIVERED = STEPS_BASE.map((s) => ({
  ...s,
  completed: true,
  active: false,
}));

function CopyIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="ml-1 inline-block shrink-0 cursor-pointer align-middle hover:opacity-80"
      style={{ color: STEP_ACTIVE_COLOR }}
      aria-hidden
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function StepIcon({
  type,
  completed,
  active,
}: {
  type: string;
  completed: boolean;
  active: boolean;
}) {
  const isFilled = completed || active;
  const colorClass = isFilled ? "text-white" : "text-[#131313]";
  const bgStyle = isFilled ? { backgroundColor: STEP_ACTIVE_COLOR } : { backgroundColor: "#E5E7EB" };

  if (type === "check") {
    return (
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${colorClass}`}
        style={bgStyle}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </span>
    );
  }
  if (type === "loading") {
    return (
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${colorClass}`}
        style={bgStyle}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={active ? "animate-spin" : ""}
          strokeLinecap="round"
        >
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      </span>
    );
  }
  if (type === "clock") {
    return (
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${colorClass}`}
        style={bgStyle}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      </span>
    );
  }
  if (type === "truck") {
    return (
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${colorClass}`}
        style={bgStyle}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      </span>
    );
  }
  if (type === "pin") {
    return (
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${colorClass}`}
        style={bgStyle}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      </span>
    );
  }
  if (type === "delivery") {
    return (
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${colorClass}`}
        style={bgStyle}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" />
          <path d="M5 18v2a2 2 0 0 0 2 2h2" />
          <path d="M19 18v2a2 2 0 0 1-2 2h-2" />
          <path d="M9 18h6" />
        </svg>
      </span>
    );
  }
  if (type === "package") {
    return (
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${colorClass}`}
        style={bgStyle}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      </span>
    );
  }
  return null;
}

type LiveUpdatesStepperProps = {
  delivered?: boolean;
};

export default function LiveUpdatesStepper({
  delivered = false,
}: LiveUpdatesStepperProps) {
  const handleCopyTracking = async () => {
    try {
      await navigator.clipboard.writeText(TRACKING_ID);
    } catch {
      // ignore
    }
  };

  const steps = delivered ? STEPS_DELIVERED : STEPS_IN_TRANSIT;

  return (
    <div className="mb-8">
      <h2 className="mb-2 text-xl font-bold text-[#131313]">Live Updates</h2>
      <p className="mb-4 text-sm text-[#131313]">
        Tracking ID: {TRACKING_ID}
        <button type="button" onClick={handleCopyTracking} className="p-0.5 align-middle" aria-label="Copy tracking ID">
          <CopyIcon />
        </button>
      </p>

      {/* Match return-details: bordered card */}
      <div className="overflow-x-auto rounded-lg border border-[#D2D2D2] bg-white p-4 sm:p-6">
        {/* Mobile: vertical timeline (same pattern as return-details) */}
        <div className="flex flex-col lg:hidden">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-start gap-3">
              <div className="flex shrink-0 flex-col items-center">
                <StepIcon type={step.icon} completed={step.completed} active={step.active} />
                {index < steps.length - 1 && (
                  <div
                    className={`mt-1 min-h-[20px] w-0.5 ${step.completed ? "bg-[#1E3A8A]" : "bg-gray-200"}`}
                    aria-hidden
                  />
                )}
              </div>
              <div className="min-w-0 pb-4 pt-1.5">
                <p className="text-xs font-semibold text-[#131313]">{step.label}</p>
                <p className="mt-0.5 text-xs" style={{ color: STEP_DATE_COLOR }}>
                  {step.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: per-step left/right half connectors touching circle edges */}
        <div className="relative hidden min-w-0 lg:block">
          <div className="flex w-full min-w-0 items-start">
            {steps.map((step, index) => (
              <div key={step.id} className="relative flex min-w-0 flex-1 flex-col items-center">
                {index > 0 && (
                  <div
                    className={`absolute left-0 right-1/2 top-5 h-0.5 ${
                      steps[index - 1]?.completed ? "" : "bg-gray-200"
                    }`}
                    style={
                      steps[index - 1]?.completed
                        ? { backgroundColor: STEP_ACTIVE_COLOR }
                        : undefined
                    }
                    aria-hidden
                  />
                )}
                {index < steps.length - 1 && (
                  <div
                    className={`absolute left-1/2 right-0 top-5 h-0.5 ${
                      step.completed ? "" : "bg-gray-200"
                    }`}
                    style={step.completed ? { backgroundColor: STEP_ACTIVE_COLOR } : undefined}
                    aria-hidden
                  />
                )}
                <div className="relative z-10">
                  <StepIcon type={step.icon} completed={step.completed} active={step.active} />
                </div>
                <p className="mt-2 max-w-[min(100%,7rem)] text-center text-[10px] font-semibold text-[#131313] sm:text-xs">
                  {step.label}
                </p>
                <p
                  className="mt-0.5 text-center text-[10px] sm:text-xs"
                  style={{ color: STEP_DATE_COLOR }}
                >
                  {step.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
