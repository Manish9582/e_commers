"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  MdVerified,
  MdStar,
  MdStarHalf,
  MdSentimentVerySatisfied,
  MdSentimentNeutral,
  MdSentimentDissatisfied,
  MdSearch,
  MdStorefront,
  MdSend,
  MdReply,
} from "react-icons/md";

interface ReviewReply {
  author: string;
  timeAgo: string;
  text: string;
}

interface Review {
  id: string;
  customerName: string;
  initials: string;
  verified: boolean;
  timeAgo: string;
  productPurchased: string;
  rating: number;
  comment: string;
  photoUrl?: string;
  reply?: ReviewReply;
}

const INITIAL_REVIEWS: Review[] = [
  {
    id: "rev-1",
    customerName: "Aarav Sharma",
    initials: "AS",
    verified: true,
    timeAgo: "2 hours ago",
    productPurchased: "Organic Alphonso Mangoes",
    rating: 5,
    comment:
      "Absolute best quality mangoes I've ever ordered online. Perfectly ripe, sweet, and zero chemical aftertaste. Bandra Organic delivers yet again! Will definitely order another box this weekend.",
    photoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuARg1ihpFuKwYX2MQdSnWX3It01iOBiNO3OlRx9hcvPodTWIm7An2wUOpw6iftFTEsLO296XnObZNqGDOgw8kmU4FNrpRR9iohNP7eEg9PHUU_m-uiyR0Egsx8jfNmLXhuO734qzEoyHW-ut09HsvWmnLRdVZbANNY1TrnJ6ytk2f68TljT6c0B76p8feOo73CJiKxL0O5bZvnxUQ-Z_jbkJaNnLH9jti7h5Zy12po",
    reply: {
      author: "Bandra Organic Hub (Shopkeeper)",
      timeAgo: "Just now",
      text: "Thank you so much Aarav! We take pride in sourcing directly from Konkan orchards. Enjoy the sweetness!",
    },
  },
  {
    id: "rev-2",
    customerName: "Pooja Mehta",
    initials: "PM",
    verified: true,
    timeAgo: "Yesterday",
    productPurchased: "Cold-Pressed Coconut Oil",
    rating: 4,
    comment:
      "The oil quality is fantastic for hair care and cooking. However, the delivery took an extra day due to rain. Packaging could be slightly more secure.",
  },
  {
    id: "rev-3",
    customerName: "Rohan Kapoor",
    initials: "RK",
    verified: true,
    timeAgo: "3 days ago",
    productPurchased: "Fresh Hydroponic Baby Spinach",
    rating: 5,
    comment:
      "Authentic crisp texture and super clean leaves! Tastes so fresh and pesticide-free. Perfect for morning green smoothies. Worth every rupee.",
    reply: {
      author: "Bandra Organic Hub (Shopkeeper)",
      timeAgo: "3 days ago",
      text: "Thank you Rohan! Our clean hydroponic farming methods ensure maximum freshness. Glad you love it!",
    },
  },
];

const StoreReviews = () => {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [replyInput, setReplyInput] = useState<{ [key: string]: string }>({});

  const handleSendReply = (reviewId: string) => {
    const text = replyInput[reviewId]?.trim();
    if (!text) return;

    setReviews((prev) =>
      prev.map((r) =>
        r.id === reviewId
          ? {
              ...r,
              reply: {
                author: "Bandra Organic Hub (Shopkeeper)",
                timeAgo: "Just now",
                text: text,
              },
            }
          : r,
      ),
    );

    setReplyInput((prev) => ({ ...prev, [reviewId]: "" }));
  };

  const filteredReviews = reviews.filter((rev) => {
    const matchesSearch =
      rev.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rev.productPurchased.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rev.comment.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeFilter === "5 Stars") return matchesSearch && rev.rating === 5;
    if (activeFilter === "4 Stars") return matchesSearch && rev.rating === 4;
    if (activeFilter === "3 Stars & Below")
      return matchesSearch && rev.rating <= 3;
    return matchesSearch;
  });

  return (
    <div className="space-y-6 p-6">
      {/* 1. HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span
            className="text-xs font-bold uppercase tracking-wider block mb-0.5"
            style={{ color: "var(--color-primary)" }}
          >
            Customer Feedback Hub
          </span>
          <h1
            className="text-2xl font-black tracking-tight"
            style={{ color: "var(--color-text-main)" }}
          >
            Store Reviews & Sentiment
          </h1>
        </div>

        <div
          className="flex items-center gap-2 px-4 py-2 rounded-xl border shadow-xs"
          style={{
            backgroundColor: "var(--color-surface-low)",
            borderColor: "var(--color-border)",
          }}
        >
          <MdVerified className="text-xl text-emerald-600" />
          <span
            className="text-xs font-bold"
            style={{ color: "var(--color-text-main)" }}
          >
            98.4% Response Rate
          </span>
        </div>
      </div>

      {/* 2. BENTO GRID OVERVIEW CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Overall Store Rating */}
        <div
          className="rounded-2xl p-6 shadow-xs border flex flex-col justify-between"
          style={{
            backgroundColor: "var(--color-surface-low)",
            borderColor: "var(--color-border)",
          }}
        >
          <div>
            <span
              className="text-xs font-bold uppercase tracking-wider block mb-2"
              style={{ color: "var(--color-text-muted)" }}
            >
              Overall Store Rating
            </span>
            <div className="flex items-baseline gap-3">
              <span
                className="text-4xl font-black"
                style={{ color: "var(--color-text-main)" }}
              >
                4.8
              </span>
              <div className="flex text-amber-500 text-lg">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStarHalf />
              </div>
            </div>
          </div>

          <div
            className="mt-6 pt-4 border-t flex justify-between items-center text-xs font-semibold"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-text-muted)",
            }}
          >
            <span>Based on 1,248 reviews</span>
            <span className="text-emerald-600 font-bold">+12% this month</span>
          </div>
        </div>

        {/* AI Sentiment Analysis Card */}
        <div
          className="lg:col-span-2 rounded-2xl p-6 shadow-xs border flex flex-col justify-between"
          style={{
            backgroundColor: "var(--color-surface-low)",
            borderColor: "var(--color-border)",
          }}
        >
          <div>
            <div className="flex justify-between items-center mb-4">
              <span
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: "var(--color-text-muted)" }}
              >
                Review Sentiment Analysis
              </span>
              <span
                className="text-[10px] px-2.5 py-0.5 rounded-full font-bold shadow-2xs"
                style={{
                  backgroundColor: "var(--color-primary-container)",
                  color: "var(--color-on-primary-container)",
                }}
              >
                AI Powered
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div
                className="p-4 rounded-xl border shadow-2xs"
                style={{
                  backgroundColor: "var(--color-surface-container)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div className="flex items-center gap-2 mb-1 text-emerald-600 font-bold text-xs">
                  <MdSentimentVerySatisfied className="text-lg" />
                  <span>Positive</span>
                </div>
                <div
                  className="text-2xl font-black"
                  style={{ color: "var(--color-primary)" }}
                >
                  82%
                </div>
                <span
                  className="text-[11px]"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  1,023 reviews
                </span>
              </div>

              <div
                className="p-4 rounded-xl border shadow-2xs"
                style={{
                  backgroundColor: "var(--color-surface-container)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div className="flex items-center gap-2 mb-1 text-gray-500 font-bold text-xs">
                  <MdSentimentNeutral className="text-lg" />
                  <span>Neutral</span>
                </div>
                <div
                  className="text-2xl font-black"
                  style={{ color: "var(--color-text-main)" }}
                >
                  12%
                </div>
                <span
                  className="text-[11px]"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  150 reviews
                </span>
              </div>

              <div
                className="p-4 rounded-xl border shadow-2xs"
                style={{
                  backgroundColor: "var(--color-surface-container)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div className="flex items-center gap-2 mb-1 text-amber-600 font-bold text-xs">
                  <MdSentimentDissatisfied className="text-lg" />
                  <span>Needs Work</span>
                </div>
                <div className="text-2xl font-black text-amber-600">6%</div>
                <span
                  className="text-[11px]"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  75 reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. FILTER & SEARCH BAR */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Rating Category Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
          {["All", "5 Stars", "4 Stars", "3 Stars & Below"].map((filter) => {
            const isSelected = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className="px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-2xs cursor-pointer"
                style={{
                  backgroundColor: isSelected
                    ? "var(--color-primary)"
                    : "var(--color-surface-low)",
                  color: isSelected
                    ? "var(--color-text-inverse)"
                    : "var(--color-text-main)",
                  border: isSelected ? "none" : "1px solid var(--color-border)",
                }}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <MdSearch
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-lg"
            style={{ color: "var(--color-text-muted)" }}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search reviews..."
            className="w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm border focus:outline-none transition-all shadow-2xs"
            style={{
              backgroundColor: "var(--color-surface-low)",
              borderColor: "var(--color-border)",
              color: "var(--color-text-main)",
            }}
          />
        </div>
      </div>

      {/* 4. REVIEWS LIST FEED */}
      <div className="space-y-6">
        {filteredReviews.map((rev) => (
          <div
            key={rev.id}
            className="rounded-2xl p-6 shadow-xs border space-y-4"
            style={{
              backgroundColor: "var(--color-surface-low)",
              borderColor: "var(--color-border)",
            }}
          >
            {/* Header: User Info & Star Rating */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs"
                  style={{
                    backgroundColor: "var(--color-primary-container)",
                    color: "var(--color-on-primary-container)",
                  }}
                >
                  {rev.initials}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3
                      className="text-sm sm:text-base font-bold"
                      style={{ color: "var(--color-text-main)" }}
                    >
                      {rev.customerName}
                    </h3>
                    {rev.verified && (
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-[10px] font-bold">
                        Verified Buyer
                      </span>
                    )}
                  </div>
                  <span
                    className="text-xs"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {rev.timeAgo} • Purchased {rev.productPurchased}
                  </span>
                </div>
              </div>

              {/* Star Rating Display */}
              <div className="flex text-amber-500 text-base">
                {[...Array(5)].map((_, i) => (
                  <MdStar
                    key={i}
                    className={i < rev.rating ? "opacity-100" : "opacity-30"}
                  />
                ))}
              </div>
            </div>

            {/* Comment Text */}
            <p
              className="text-xs sm:text-sm leading-relaxed"
              style={{ color: "var(--color-text-body)" }}
            >
              {rev.comment}
            </p>

            {/* Attached Photo */}
            {rev.photoUrl && (
              <div className="w-20 h-20 rounded-xl overflow-hidden relative border shadow-2xs">
                <Image
                  src={rev.photoUrl}
                  alt="Review attachment"
                  fill
                  unoptimized
                  className="object-cover cursor-pointer hover:scale-105 transition-transform"
                />
              </div>
            )}

            {/* Store Reply Box & Input Section */}
            <div
              className="rounded-xl p-4 border space-y-3"
              style={{
                backgroundColor: "var(--color-surface-container)",
                borderColor: "var(--color-border)",
              }}
            >
              {rev.reply ? (
                /* Existing Shopkeeper Reply */
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5">
                      <MdStorefront
                        className="text-base"
                        style={{ color: "var(--color-primary)" }}
                      />
                      <span
                        className="text-xs font-bold"
                        style={{ color: "var(--color-text-main)" }}
                      >
                        {rev.reply.author}
                      </span>
                    </div>
                    <span
                      className="text-[10px]"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {rev.reply.timeAgo}
                    </span>
                  </div>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {rev.reply.text}
                  </p>
                </div>
              ) : (
                /* Unanswered Prompt Header */
                <div
                  className="flex items-center gap-1.5 text-xs font-bold"
                  style={{ color: "var(--color-text-main)" }}
                >
                  <MdReply className="text-base text-blue-600" />
                  <span>Reply to {rev.customerName}</span>
                </div>
              )}

              {/* Reply Input Bar */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="text"
                  value={replyInput[rev.id] || ""}
                  onChange={(e) =>
                    setReplyInput({ ...replyInput, [rev.id]: e.target.value })
                  }
                  placeholder={
                    rev.reply
                      ? "Write an updated reply..."
                      : "Thank the customer or address their feedback..."
                  }
                  className="flex-1 px-4 py-2 rounded-xl text-xs border focus:outline-none transition-all shadow-2xs"
                  style={{
                    backgroundColor: "var(--color-surface-low)",
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-main)",
                  }}
                />
                <button
                  type="button"
                  onClick={() => handleSendReply(rev.id)}
                  className="px-4 py-2 rounded-xl text-xs font-bold shadow-2xs flex items-center gap-1 transition-all hover:opacity-90 cursor-pointer shrink-0"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    color: "var(--color-text-inverse)",
                  }}
                >
                  <span>Send</span>
                  <MdSend className="text-sm" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreReviews;
