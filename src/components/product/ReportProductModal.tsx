"use client";

import { useState, useRef } from "react";
import { X, Camera, Plus } from "lucide-react";

const REPORT_REASONS = [
  "Incorrect or misleading information",
  "Prohibited or illegal product",
  "Duplicate listing",
  "Fake or misleading images",
  "Pricing or discount scam",
  "Intellectual property violation",
];
const OTHER_REASON = "Other (please explain)";
const MAX_DESCRIPTION_LENGTH = 500;

type ReportProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
};

export default function ReportProductModal({
  isOpen,
  onClose,
  productName = "this product",
}: ReportProductModalProps) {
  const [selected, setSelected] = useState<string>("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app: submit to API with selected, description, files
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
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50"
      role="dialog"
      aria-modal
      aria-label="Report this product"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl sm:rounded-2xl bg-white shadow-xl border border-gray-200 p-4 sm:p-6"
        onClick={(e) => e.stopPropagation()}
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
          aria-label="Close"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <h2 className="text-base sm:text-lg font-bold text-[#131313] pr-9 sm:pr-10">Report this Product</h2>
        <p className="text-xs sm:text-sm text-gray-600 mt-1 mb-4 sm:mb-6">
          Help us keep the marketplace safe and accurate.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Select Reason - 2 boxes per row on all screens */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-[#131313] mb-2 sm:mb-3">Select Reason</h3>
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
              {REPORT_REASONS.map((reason) => (
                <label
                  key={reason}
                  className="flex items-center gap-1.5 sm:gap-3 p-2 sm:p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50/80 transition"
                >
                  <input
                    type="radio"
                    name="reason"
                    value={reason}
                    checked={selected === reason}
                    onChange={() => setSelected(reason)}
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0"
                  />
                  <span className="text-[10px] sm:text-sm text-[#131313] leading-tight">{reason}</span>
                </label>
              ))}
            </div>
            <label className="flex items-center gap-1.5 sm:gap-3 p-2 sm:p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50/80 transition w-full">
              <input
                type="radio"
                name="reason"
                value={OTHER_REASON}
                checked={selected === OTHER_REASON}
                onChange={() => setSelected(OTHER_REASON)}
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0"
              />
              <span className="text-[10px] sm:text-sm text-[#131313]">{OTHER_REASON}</span>
            </label>
          </div>

          {/* Two columns: Describe the issue | Upload Supporting Media */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="report-describe" className="block text-xs sm:text-sm font-bold text-[#131313] mb-1.5 sm:mb-2">
                Describe the issue
              </label>
              <div className="relative">
                <textarea
                  id="report-describe"
                  value={description}
                  onChange={handleDescriptionChange}
                  placeholder="Explain what happened. Include dates, order numbers, or screenshots if possible."
                  rows={5}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-200 text-xs sm:text-sm text-[#131313] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 resize-none"
                />
                <span className="absolute bottom-1.5 right-2 sm:bottom-2 sm:right-3 text-[10px] sm:text-xs text-gray-400">
                  ({description.length}/{MAX_DESCRIPTION_LENGTH})
                </span>
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-bold text-[#131313] mb-1.5 sm:mb-2">
                Upload Supporting Media
              </label>
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`rounded-lg border-2 border-dashed min-h-[120px] sm:min-h-[140px] flex flex-col items-center justify-center p-3 sm:p-4 transition ${
                  isDragging ? "border-blue-400 bg-blue-50/50" : "border-blue-200 bg-gray-50/50"
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
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 mb-1.5 sm:mb-2 relative shrink-0">
                  <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="absolute -top-0.5 -right-0.5 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gray-400 flex items-center justify-center">
                    <Plus className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" />
                  </span>
                </div>
                <p className="text-[10px] sm:text-sm font-semibold text-[#131313] text-center leading-tight">
                  Choose a file or drag & drop it here,
                </p>
                <p className="text-[10px] sm:text-xs text-gray-500 text-center mt-0.5 sm:mt-1">
                  JPEG, PNG, PDF, and MP4 formats, up to 50 mb
                </p>
                <button
                  type="button"
                  onClick={openFileDialog}
                  className="mt-2 sm:mt-3 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-gray-300 bg-white text-[10px] sm:text-sm font-medium text-[#131313] hover:bg-gray-50"
                >
                  Browse File
                </button>
                {files.length > 0 && (
                  <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-gray-600">
                    {files.length} file(s) selected
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-2 sm:gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 sm:px-5 sm:py-2.5 rounded-lg border border-gray-300 bg-white text-xs sm:text-sm font-medium text-[#131313] hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-[#1e3a8a] text-white text-xs sm:text-sm font-medium hover:bg-[#163072] disabled:opacity-50"
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
