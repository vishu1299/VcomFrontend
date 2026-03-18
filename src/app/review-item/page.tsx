"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  ReviewItemHeader,
  QuickExperienceTags,
  RateSpecificAspects,
  ReviewFormSection,
  AddMediaSection,
  RecommendSection,
  ReportProblemSection,
  SubmitReviewButton,
} from "./components";

const INITIAL_ASPECT_RATINGS: Record<string, number> = {
  quality: 5,
  shipping: 4,
  accuracy: 4,
  responsiveness: 3,
  value: 4,
  livestream: 3,
};

export default function ReviewItemPage() {
  const router = useRouter();
  const [overallRating, setOverallRating] = useState(4);
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set(["fast"]));
  const [aspectRatings, setAspectRatings] = useState<Record<string, number>>(INITIAL_ASPECT_RATINGS);
  const [title, setTitle] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [recommend, setRecommend] = useState<"yes" | "no" | null>(null);
  const [reportProblems, setReportProblems] = useState<Set<string>>(new Set());

  const handleTagToggle = useCallback((id: string) => {
    setSelectedTags((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const handleAspectRating = useCallback((aspectId: string, value: number) => {
    setAspectRatings((prev) => ({ ...prev, [aspectId]: value }));
  }, []);

  const handleReportToggle = useCallback((id: string) => {
    setReportProblems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const handleSubmit = useCallback(() => {
    router.push("/submit-review");
  }, [router]);

  return (
    <main className="page-text-black min-h-screen bg-gray-50">
          <div className="mx-auto max-w-[1100px] py-6">
              <div className="bg-white rounded-xl shadow-md p-4 w-[75%]">
                  
        <ReviewItemHeader overallRating={overallRating} onOverallRatingChange={setOverallRating} />
        <QuickExperienceTags selectedIds={selectedTags} onToggle={handleTagToggle} />
        <RateSpecificAspects ratings={aspectRatings} onRatingChange={handleAspectRating} />
        <ReviewFormSection
          title={title}
          onTitleChange={setTitle}
          reviewText={reviewText}
          onReviewTextChange={setReviewText}
        />
        <AddMediaSection />
        <RecommendSection value={recommend} onChange={setRecommend} />
        <ReportProblemSection selectedIds={reportProblems} onToggle={handleReportToggle} />
        <SubmitReviewButton onSubmit={handleSubmit} />
              </div>
      </div>
    </main>
  );
}
