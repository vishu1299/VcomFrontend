"use client";

import { useState, useRef } from "react";
import { X, Camera, Plus } from "lucide-react";

const REPORT_REASONS = [
  "Seller was abusive or harassing",
  "Misleading product listings",
  "Seller won't respond to questions or issues",
  "Seller sent counterfeit or fake items",
  "Extremely delayed or no shipment",
  "Off-platform transaction request",
  "Price manipulation or fake discounts",
  "Using stolen images or branding",
  "Violates platform policies or legal regulations",
];
const OTHER_REASON = "Other (please explain)";
const MAX_DESCRIPTION_LENGTH = 500;

type ReportSellerModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

/**
 * Same layout as ReportProductModal; copy and reasons are seller-specific.
 */
export default function ReportSellerModal({
  isOpen,
  onClose,
}: ReportSellerModalProps) {
  const [selected, setSelected] = useState<string>("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
    setSelected("");
    setDescription("");
    setFiles([]);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const v = e.target.value;
    if (v.length <= MAX_DESCRIPTION_LENGTH) setDescription(v);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const chosen = e.target.files ? Array.from(e.target.files) : [];
    setFiles((prev) => [...prev, ...chosen]);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...dropped]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const openFileDialog = () => fileInputRef.current?.click();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal
      aria-label="Report this seller"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl border border-gray-200 bg-white p-4 shadow-xl sm:rounded-2xl sm:p-6"
        onClick={(e) => e.stopPropagation()}
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 sm:right-4 sm:top-4 sm:h-8 sm:w-8"
          aria-label="Close"
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        <h2 className="pr-9 text-base font-bold text-[#131313] sm:pr-10 sm:text-lg">
          Report this seller
        </h2>
        <p className="mt-1 border-b border-gray-200 pb-4 text-xs text-gray-600 sm:pb-6 sm:text-sm">
          Your report helps keep our marketplace safe.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <h3 className="mb-2 text-xs font-bold text-[#131313] sm:mb-3 sm:text-sm">
              Select Reason
            </h3>
            <div className="mb-1.5 grid grid-cols-2 gap-1.5 sm:mb-2 sm:gap-2">
              {REPORT_REASONS.map((reason) => (
                <label
                  key={reason}
                  className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-gray-200 p-2 transition hover:bg-gray-50/80 sm:gap-3 sm:p-3"
                >
                  <input
                    type="radio"
                    name="seller-report-reason"
                    value={reason}
                    checked={selected === reason}
                    onChange={() => setSelected(reason)}
                    className="h-3.5 w-3.5 shrink-0 text-blue-600 sm:h-4 sm:w-4"
                  />
                  <span className="text-[10px] leading-tight text-[#131313] sm:text-sm">
                    {reason}
                  </span>
                </label>
              ))}
            </div>
            <label className="flex w-full cursor-pointer items-center gap-1.5 rounded-lg border border-gray-200 p-2 transition hover:bg-gray-50/80 sm:gap-3 sm:p-3">
              <input
                type="radio"
                name="seller-report-reason"
                value={OTHER_REASON}
                checked={selected === OTHER_REASON}
                onChange={() => setSelected(OTHER_REASON)}
                className="h-3.5 w-3.5 shrink-0 text-blue-600 sm:h-4 sm:w-4"
              />
              <span className="text-[10px] text-[#131313] sm:text-sm">
                {OTHER_REASON}
              </span>
            </label>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="seller-report-describe"
                className="mb-1.5 block text-xs font-bold text-[#131313] sm:mb-2 sm:text-sm"
              >
                Describe the issue
              </label>
              <div className="relative">
                <textarea
                  id="seller-report-describe"
                  value={description}
                  onChange={handleDescriptionChange}
                  placeholder="Explain what happened. Include dates, order numbers, or screenshots if possible."
                  rows={5}
                  className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2 text-xs text-[#131313] placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 sm:px-4 sm:py-3 sm:text-sm"
                />
                <span className="absolute bottom-1.5 right-2 text-[10px] text-gray-400 sm:bottom-2 sm:right-3 sm:text-xs">
                  ({description.length}/{MAX_DESCRIPTION_LENGTH})
                </span>
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-bold text-[#131313] sm:mb-2 sm:text-sm">
                Upload Supporting Media
              </label>
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`flex min-h-[120px] flex-col items-center justify-center rounded-lg border-2 border-dashed p-3 transition sm:min-h-[140px] sm:p-4 ${
                  isDragging
                    ? "border-blue-400 bg-blue-50/50"
                    : "border-blue-200 bg-gray-50/50"
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/jpeg,image/png,application/pdf,video/mp4"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div className="relative mb-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-600 sm:mb-2 sm:h-10 sm:w-10">
                  <Camera className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-gray-400 sm:h-4 sm:w-4">
                    <Plus className="h-2 w-2 text-white sm:h-2.5 sm:w-2.5" />
                  </span>
                </div>
                <p className="text-center text-[10px] font-semibold leading-tight text-[#131313] sm:text-sm">
                  Choose a file or drag & drop it here
                </p>
                <p className="mt-0.5 text-center text-[10px] text-gray-500 sm:mt-1 sm:text-xs">
                  JPEG, PNG, PDF, and MP4 formats, up to 50 mb
                </p>
                <button
                  type="button"
                  onClick={openFileDialog}
                  className="mt-2 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-[10px] font-medium text-[#131313] hover:bg-gray-50 sm:mt-3 sm:px-4 sm:py-2 sm:text-sm"
                >
                  Browse File
                </button>
                {files.length > 0 && (
                  <p className="mt-1.5 text-[10px] text-gray-600 sm:mt-2 sm:text-xs">
                    {files.length} file(s) selected
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2 sm:gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-[#131313] hover:bg-gray-50 sm:px-5 sm:py-2.5 sm:text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-[#1e3a8a] px-3 py-2 text-xs font-medium text-white hover:bg-[#163072] disabled:opacity-50 sm:px-5 sm:py-2.5 sm:text-sm"
              disabled={!selected}
            >
              Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
