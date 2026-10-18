import React from "react";
import { AiFillStar } from "react-icons/ai";

const CATEGORIES = [
  { label: "All", id: "all" },
  { label: "Leafy Veg", id: "leafy-veg" },
  { label: "Root Veg", id: "root-veg" },
  { label: "Exotic", id: "exotic" },
  { label: "Seasonal Fruits", id: "seasonal-fruits" },
  { label: "Citrus", id: "citrus" },
  { label: "Berries", id: "berries" },
  { label: "Cut Veg", id: "cut-veg" },
  { label: "Cut Fruit", id: "cut-fruit" },
];

const VARIANT_TYPES = [
  { label: "Whole", id: "whole", defaultChecked: true },
  { label: "Cut & Ready", id: "cut-ready", defaultChecked: false },
];

const RATINGS = [
  { label: "4★ & above", count: 5, id: "rating-4" },
  { label: "3★ & above", count: 5, id: "rating-3" },
];

const ProductComponentLeftSide = () => {
  return (
    <aside className="lg:col-span-1 space-y-space-lg">
      <div className="bg-surface-container-low p-space-lg rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-space-lg">
        <div className="flex items-center justify-between">
          <h3 className="font-headline-sm text-on-surface">Filters</h3>
          <button className="text-label-sm text-primary hover:underline cursor-pointer">
            Reset All
          </button>
        </div>

        <div className="space-y-space-sm">
          <h4 className="font-label-md text-on-surface mb-space-xs my-2 text-[var(--color-primary)]">
            Categories
          </h4>
          <div className="pl-1">
            {CATEGORIES.map((category, index) => (
              <label
                key={category.id}
                className="flex items-center gap-1.5 gap-space-sm text-body-sm text-on-surface-variant cursor-pointer hover:text-on-surface"
              >
                <input
                  type="checkbox"
                  defaultChecked={index === 0}
                  className="rounded accent-primary w-4 h-4"
                />
                {category.label}
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-space-sm">
          <h4 className="font-label-md text-on-surface font-semibold my-2 text-[var(--color-primary)]">
            Variant Type
          </h4>
          <div className="pl-1">
            {VARIANT_TYPES.map((variant) => (
              <label
                key={variant.id}
                className="flex items-center gap-1.5 gap-space-sm text-body-sm text-on-surface-variant cursor-pointer hover:text-on-surface"
              >
                <input
                  type="radio"
                  name="variant"
                  className="accent-primary w-4 h-4"
                />
                {variant.label}
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-space-sm mt-3">
          <div className="flex justify-between items-center">
            <h4 className="font-label-md text-on-surface">Price Range</h4>
            <span className="text-label-sm text-primary font-medium">
              ₹10 - ₹1000
            </span>
          </div>
          <input
            type="range"
            min="10"
            max="1000"
            defaultValue="1000"
            className="w-full accent-primary bg-surface-container-high rounded-lg h-2 cursor-pointer"
          />
          <div className="flex justify-between text-label-sm text-outline">
            <span>₹10</span>
            <span>₹1000</span>
          </div>
        </div>

        <div className="space-y-space-sm">
          <h4 className="font-label-md text-on-surface mb-space-xs my-2 text-[var(--color-primary)]">
            Customer Ratings
          </h4>
          <div className="space-y-2">
            {RATINGS.map((rating) => (
              <label
                key={rating.id}
                className="flex items-center gap-space-sm text-body-sm text-on-surface-variant cursor-pointer hover:text-on-surface"
              >
                <input
                  type="checkbox"
                  className="rounded accent-primary w-4 h-4"
                />
                <span className="flex items-center text-amber-500 gap-0.5">
                  {[...Array(rating.count)].map((_, i) => (
                    <AiFillStar key={i} className="text-[16px]" />
                  ))}
                </span>
                {rating.label}
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ProductComponentLeftSide;
