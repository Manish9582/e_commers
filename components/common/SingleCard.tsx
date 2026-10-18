"use client";

import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineHeart, HiBolt } from "react-icons/hi2";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {
  FiZoomIn,
  FiMinus,
  FiPlus,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import { MdLocalShipping, MdRateReview } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";

const IMAGES = [
  {
    id: 1,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGb-1l6p7HWEJ9K8vApgBj-zRpgmThqyXSLsMZW4iXbBmXhmovsYtk9ywsaap23AVGKf6LMBJ7hcnTPiACtH41jvAykV48yCp8JKk9rPFaFNvGimwNksvPKBoJoXtGdFs-_B-td87zjlDrVbD8mx4JoECgex79qSAs3L5YLYN0Ebk504OmUhu_FF9_AMWE8jrqDZSB6dV-Ett1YdKC5mV5ns1RcLLsgINoELlLrNc",
    alt: "Ratnagiri Alphonso Mango whole fruit",
  },
  {
    id: 2,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGb-1l6p7HWEJ9K8vApgBj-zRpgmThqyXSLsMZW4iXbBmXhmovsYtk9ywsaap23AVGKf6LMBJ7hcnTPiACtH41jvAykV48yCp8JKk9rPFaFNvGimwNksvPKBoJoXtGdFs-_B-td87zjlDrVbD8mx4JoECgex79qSAs3L5YLYN0Ebk504OmUhu_FF9_AMWE8jrqDZSB6dV-Ett1YdKC5mV5ns1RcLLsgINoELlLrNc",
    alt: "Sliced Ratnagiri Alphonso mango pieces",
  },
  {
    id: 3,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGb-1l6p7HWEJ9K8vApgBj-zRpgmThqyXSLsMZW4iXbBmXhmovsYtk9ywsaap23AVGKf6LMBJ7hcnTPiACtH41jvAykV48yCp8JKk9rPFaFNvGimwNksvPKBoJoXtGdFs-_B-td87zjlDrVbD8mx4JoECgex79qSAs3L5YLYN0Ebk504OmUhu_FF9_AMWE8jrqDZSB6dV-Ett1YdKC5mV5ns1RcLLsgINoELlLrNc",
    alt: "Wooden crate with Ratnagiri Hapus mangoes",
  },
  {
    id: 4,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGb-1l6p7HWEJ9K8vApgBj-zRpgmThqyXSLsMZW4iXbBmXhmovsYtk9ywsaap23AVGKf6LMBJ7hcnTPiACtH41jvAykV48yCp8JKk9rPFaFNvGimwNksvPKBoJoXtGdFs-_B-td87zjlDrVbD8mx4JoECgex79qSAs3L5YLYN0Ebk504OmUhu_FF9_AMWE8jrqDZSB6dV-Ett1YdKC5mV5ns1RcLLsgINoELlLrNc",
    alt: "Ratnagiri Orchard harvesting scene",
  },
];

// Product Form Options
const VARIANTS = [
  {
    id: "whole",
    title: "Whole Fruit",
    desc: "Box of 4-5 pcs (Approx 1kg)",
    price: 599,
    originalPrice: 849,
  },
  {
    id: "cut",
    title: "Cut & Ready",
    desc: "Pulp & Slices Bowl (800g)",
    price: 649,
    originalPrice: 899,
  },
];

// Package Sizes
const PACKAGE_SIZES = [
  { id: "1kg", label: "Standard Box (1kg)" },
  { id: "2kg", label: "Family Pack (2kg)" },
  { id: "3kg", label: "Party Feast (3kg)" },
];

// Rating Breakdown Distribution
const RATING_BREAKDOWN = [
  { stars: 5, percentage: 85 },
  { stars: 4, percentage: 12 },
  { stars: 3, percentage: 2 },
  { stars: 2, percentage: 1 },
  { stars: 1, percentage: 0 },
];

// Customer Reviews List
const REVIEWS = [
  {
    id: 1,
    name: "Rahul Patil",
    initials: "RP",
    initialsBg: "var(--color-primary-container)",
    initialsColor: "var(--color-on-primary-container)",
    verified: true,
    timeAgo: "2 days ago",
    rating: 5,
    comment:
      "Absolute perfection! The aroma hit me the moment I opened the box. Extremely sweet, fibreless, and perfectly ripened. Will definitely order again before the season ends.",
    images: [
      {
        id: 1,
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBu3D2GY1iT-bbm6R2Bbt2hLvo4nFFP4xA6z3TTaTUyXKFnXBGanQ9yLDvG9Moxwn0D1VIUS_weU0WZwbNl1EVGRKi7eLW-6W74Y4qhoWwjYO2khQaA-TeGAUvdrBYOODtdbJgpJhzv5r10nynjnYPGwpDjfrx8yMQ4jbD6AC365_ZGPg8Ux-7VCEfVYqymjboWuhxNcZ0BFtgTZ6BFvxEOS3YOIji44IOniITX9U8",
        alt: "Customer photo showing unpacked box of ripe Alphonso mangoes",
      },
      {
        id: 2,
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCd57ZEEGlr1T2TRcC9GClYSKetMHNRn5iPdU0skXfy7G1FHa3LirpqIs0s_RRHNOK-ClkWcDUYreGRrMnf9x9CVo9w5QEB_iqjpZs31Oq84PRFiLzNU4l7ujmz_xXTVzsotK3pk0KVbvVIlSPD_bhzYw9oK90D4-jr7WS_Tk-QChM96QEd9CO3vQIxFA2zdIcMkIilcX5UnXA_fjP33ggozaDisQmKl3TgtSjScIA",
        alt: "Customer photo showing sliced Alphonso mango in a bowl",
      },
    ],
  },
  {
    id: 2,
    name: "Sneha Nair",
    initials: "SN",
    initialsBg: "var(--color-primary)",
    initialsColor: "var(--color-text-inverse)",
    verified: true,
    timeAgo: "1 week ago",
    rating: 4,
    comment:
      "Very fresh and packaging was top notch. Not a single mango was bruised. Authentic Ratnagiri Hapus taste!",
  },
  {
    id: 3,
    name: "Amit Deshmukh",
    initials: "AD",
    initialsBg: "var(--color-surface-dim)",
    initialsColor: "var(--color-text-main)",
    verified: true,
    timeAgo: "2 weeks ago",
    rating: 5,
    comment:
      "Juicy and super fresh! Delivered within 2 hours. My whole family enjoyed it.",
  },
];

const SingleCard = () => {
  const [selectedImg, setSelectedImg] = useState(IMAGES[0].src);
  const [selectedForm, setSelectedForm] = useState("whole");
  const [selectedSize, setSelectedSize] = useState("1kg");
  const [quantity, setQuantity] = useState(1);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const activeVariant =
    VARIANTS.find((v) => v.id === selectedForm) || VARIANTS[0];

  // Show only 1 review when collapsed, or all reviews when expanded
  const displayedReviews = showAllReviews ? REVIEWS : REVIEWS.slice(0, 1);

  return (
    <div
      className="max-w-7xl mx-auto px-6 py-8"
      style={{
        backgroundColor: "var(--color-surface-base)",
        color: "var(--color-text-body)",
      }}
    >
      {/* MAIN PRODUCT SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div
            className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-sm group"
            style={{
              backgroundColor: "var(--color-surface-low)",
              border: "1px solid var(--color-border)",
            }}
          >
            <Image
              src={selectedImg}
              alt="Ratnagiri Alphonso Mango"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span
                className="px-3.5 py-1 rounded-full text-xs font-bold shadow-md"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "var(--color-text-inverse)",
                }}
              >
                Fresh Today
              </span>
              <span
                className="px-3.5 py-1 rounded-full text-xs font-bold shadow-md"
                style={{
                  backgroundColor: "var(--color-primary-container)",
                  color: "var(--color-on-primary-container)",
                }}
              >
                Organic Certified
              </span>
            </div>
            <div
              className="absolute bottom-4 right-4 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs flex items-center gap-1.5 shadow-sm"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                color: "var(--color-text-main)",
              }}
            >
              <FiZoomIn
                style={{ color: "var(--color-primary)" }}
                className="text-base"
              />
              <span>Hover to zoom</span>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4">
            {IMAGES.map((img) => (
              <button
                key={img.id}
                onClick={() => setSelectedImg(img.src)}
                className={`relative aspect-square rounded-xl overflow-hidden shadow-sm transition-all border-2 ${
                  selectedImg === img.src
                    ? "border-[var(--color-primary)] shadow-md"
                    : "border-transparent hover:border-[var(--color-primary)]/50"
                }`}
                style={{ backgroundColor: "var(--color-surface-low)" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="150px"
                  unoptimized
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Details & Controls */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span
                className="text-xs tracking-wider uppercase font-semibold"
                style={{ color: "var(--color-primary)" }}
              >
                GI Tagged • Ratnagiri Direct
              </span>
              <button
                className="p-2.5 rounded-full transition-colors shadow-sm"
                style={{
                  backgroundColor: "var(--color-surface-low)",
                  color: "var(--color-accent-orange)",
                }}
                title="Save to Wishlist"
              >
                <HiOutlineHeart className="text-xl" />
              </button>
            </div>

            <h1
              className="text-2xl lg:text-3xl font-bold tracking-tight"
              style={{ color: "var(--color-text-main)" }}
            >
              Ratnagiri Special Alphonso Mango (Hapus)
            </h1>

            <div className="flex items-center gap-4">
              <div
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg shadow-sm"
                style={{ backgroundColor: "var(--color-surface-low)" }}
              >
                <AiFillStar className="text-amber-500 text-lg" />
                <span
                  className="text-sm font-bold"
                  style={{ color: "var(--color-text-main)" }}
                >
                  4.8
                </span>
              </div>
              <a
                className="text-sm transition-colors underline"
                style={{ color: "var(--color-text-muted)" }}
                href="#reviews-section"
              >
                (420 Verified Reviews)
              </a>
              <span style={{ color: "var(--color-text-light)" }}>•</span>
              <span
                className="text-sm font-medium flex items-center gap-1"
                style={{ color: "var(--color-success)" }}
              >
                <MdLocalShipping className="text-lg" /> In stock, ready to
                dispatch
              </span>
            </div>

            {/* Pricing Display */}
            <div
              className="flex items-baseline gap-4 p-4 rounded-2xl shadow-sm"
              style={{
                backgroundColor: "var(--color-surface-low)",
                border: "1px solid var(--color-border-subtle)",
              }}
            >
              <span
                className="text-3xl font-extrabold"
                style={{ color: "var(--color-text-main)" }}
              >
                ₹{activeVariant.price}
              </span>
              <span
                className="text-lg line-through"
                style={{ color: "var(--color-text-light)" }}
              >
                ₹{activeVariant.originalPrice}
              </span>
              <span
                className="text-xs px-3 py-1 rounded-full font-bold shadow-sm"
                style={{
                  backgroundColor: "var(--color-accent-orange-light)",
                  color: "var(--color-accent-orange)",
                }}
              >
                30% OFF
              </span>
            </div>

            {/* Form Selection */}
            <div className="flex flex-col gap-2.5">
              <label
                className="text-sm font-medium"
                style={{ color: "var(--color-text-main)" }}
              >
                Select Form:
              </label>
              <div className="grid grid-cols-2 gap-3">
                {VARIANTS.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedForm(variant.id)}
                    className={`p-4 rounded-xl border-2 text-left flex flex-col gap-1 transition-all shadow-sm ${
                      selectedForm === variant.id
                        ? "border-[var(--color-primary)] shadow"
                        : "border-[var(--color-border)] hover:border-[var(--color-primary)]/50"
                    }`}
                    style={{
                      backgroundColor:
                        selectedForm === variant.id
                          ? "var(--color-primary-container)"
                          : "var(--color-surface-low)",
                      color:
                        selectedForm === variant.id
                          ? "var(--color-on-primary-container)"
                          : "var(--color-text-main)",
                    }}
                  >
                    <span className="text-base font-bold">{variant.title}</span>
                    <span className="text-xs opacity-80">{variant.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Package Size */}
            <div className="flex flex-col gap-2.5">
              <label
                className="text-sm font-medium"
                style={{ color: "var(--color-text-main)" }}
              >
                Select Package Size:
              </label>
              <div className="flex flex-wrap gap-3">
                {PACKAGE_SIZES.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`px-5 py-2.5 rounded-xl border-2 text-sm transition-all shadow-sm ${
                      selectedSize === size.id
                        ? "border-[var(--color-primary)] font-semibold shadow"
                        : "border-[var(--color-border)] hover:border-[var(--color-primary)]/50"
                    }`}
                    style={{
                      backgroundColor:
                        selectedSize === size.id
                          ? "var(--color-primary)"
                          : "var(--color-surface-low)",
                      color:
                        selectedSize === size.id
                          ? "var(--color-text-inverse)"
                          : "var(--color-text-main)",
                    }}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            <div
              className="p-4 rounded-2xl flex items-center justify-between shadow-sm"
              style={{
                backgroundColor: "var(--color-surface-container)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-base shadow-sm"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    color: "var(--color-text-inverse)",
                  }}
                >
                  BH
                </div>
                <div>
                  <h4
                    className="text-base font-bold"
                    style={{ color: "var(--color-text-main)" }}
                  >
                    Bandra Organic Hub
                  </h4>
                  <p
                    className="text-xs flex items-center gap-1"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    2.4 km away • Open • 4.9
                    <AiFillStar className="text-amber-500 text-sm" />
                  </p>
                </div>
              </div>
              <span
                className="text-xs font-semibold"
                style={{ color: "var(--color-primary)" }}
              >
                Fast Pickup Available
              </span>
            </div>
            <div className="flex items-center gap-4 py-2">
              <div
                className="flex items-center rounded-xl p-1 shadow-inner"
                style={{
                  backgroundColor: "var(--color-surface-low)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:bg-[var(--color-surface-dim)]"
                  style={{ color: "var(--color-text-main)" }}
                >
                  <FiMinus className="text-lg" />
                </button>
                <span
                  className="w-10 text-center font-bold text-base"
                  style={{ color: "var(--color-text-main)" }}
                >
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:bg-[var(--color-surface-dim)]"
                  style={{ color: "var(--color-text-main)" }}
                >
                  <FiPlus className="text-lg" />
                </button>
              </div>
              <button
                className="flex-1 py-3.5 px-6 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm hover:opacity-90 cursor-pointer"
                style={{
                  backgroundColor: "var(--color-surface-low)",
                  color: "var(--color-text-main)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <LuShoppingBag className="text-lg" />
                Add to Cart
              </button>
              <button
                className="flex-1 py-3.5 px-6 rounded-xl text-sm font-semibold transition-colors shadow-md flex items-center justify-center gap-2 hover:opacity-90 cursor-pointer"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "var(--color-text-inverse)",
                }}
              >
                <HiBolt className="text-lg" />
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CUSTOMER REVIEWS SECTION (BOTTOM SIDE) */}
      <div
        id="reviews-section"
        className="pt-12 border-t mt-8"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "var(--color-text-main)" }}
            >
              Customer Reviews & Ratings
            </h2>
            <p
              className="text-sm mt-1"
              style={{ color: "var(--color-text-muted)" }}
            >
              Real feedback from verified mango connoisseurs
            </p>
          </div>
          <button
            className="px-5 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 shadow-sm self-start hover:opacity-90 cursor-pointer"
            style={{
              backgroundColor: "var(--color-surface-low)",
              color: "var(--color-text-main)",
              border: "1px solid var(--color-border)",
            }}
          >
            <MdRateReview
              style={{ color: "var(--color-primary)" }}
              className="text-lg"
            />
            Write a Review
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Rating Breakdown Card */}
          <div
            className="lg:col-span-4 p-6 rounded-2xl flex flex-col gap-6 shadow-sm"
            style={{
              backgroundColor: "var(--color-surface-low)",
              border: "1px solid var(--color-border-subtle)",
            }}
          >
            <div className="flex items-center gap-4">
              <span
                className="text-5xl font-extrabold"
                style={{ color: "var(--color-text-main)" }}
              >
                4.8
              </span>
              <div>
                <div className="flex text-amber-500 text-lg gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar key={i} />
                  ))}
                </div>
                <p
                  className="text-xs mt-1"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Based on 420 reviews
                </p>
              </div>
            </div>

            {/* Distribution Bars */}
            <div className="flex flex-col gap-2.5">
              {RATING_BREAKDOWN.map((item) => (
                <div
                  key={item.stars}
                  className="flex items-center gap-3 text-xs"
                >
                  <span
                    className="w-12"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {item.stars} star
                  </span>
                  <div
                    className="flex-1 h-2 rounded-full overflow-hidden"
                    style={{ backgroundColor: "var(--color-border-subtle)" }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${item.percentage}%`,
                        backgroundColor: "var(--color-primary)",
                      }}
                    />
                  </div>
                  <span
                    className="w-8 text-right font-medium"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Individual Reviews List */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {displayedReviews.map((review) => (
              <div
                key={review.id}
                className="p-6 rounded-2xl flex flex-col gap-4 shadow-sm"
                style={{
                  backgroundColor: "var(--color-surface-low)",
                  border: "1px solid var(--color-border-subtle)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-sm shrink-0"
                      style={{
                        backgroundColor: review.initialsBg,
                        color: review.initialsColor,
                      }}
                    >
                      {review.initials}
                    </div>
                    <div>
                      <h4
                        className="text-base font-bold"
                        style={{ color: "var(--color-text-main)" }}
                      >
                        {review.name}
                      </h4>
                      <p
                        className="text-xs"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {review.verified && "Verified Buyer • "}
                        {review.timeAgo}
                      </p>
                    </div>
                  </div>

                  <div className="flex text-amber-500 text-base gap-0.5">
                    {[...Array(5)].map((_, i) =>
                      i < review.rating ? (
                        <AiFillStar key={i} />
                      ) : (
                        <AiOutlineStar key={i} className="text-gray-300" />
                      ),
                    )}
                  </div>
                </div>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-body)" }}
                >
                  {review.comment}
                </p>

                {review.images && review.images.length > 0 && (
                  <div className="flex gap-3 mt-1">
                    {review.images.map((img) => (
                      <div
                        key={img.id}
                        className="relative w-16 h-16 rounded-lg overflow-hidden border shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
                        style={{ borderColor: "var(--color-border)" }}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="64px"
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* SHOW MORE / SHOW LESS REVIEWS BUTTON */}
            {REVIEWS.length > 1 && (
              <button
                onClick={() => setShowAllReviews((prev) => !prev)}
                className="w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-sm hover:opacity-90 cursor-pointer mt-2"
                style={{
                  backgroundColor: "var(--color-surface-low)",
                  color: "var(--color-primary)",
                  border: "1px solid var(--color-border)",
                }}
              >
                {showAllReviews ? (
                  <>
                    <span>Show Less Reviews</span>
                    <FiChevronUp className="text-lg" />
                  </>
                ) : (
                  <>
                    <span>Show More Reviews ({REVIEWS.length - 1} more)</span>
                    <FiChevronDown className="text-lg" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
