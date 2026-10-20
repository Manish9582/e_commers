"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  MdPublish,
  MdInfo,
  MdPayments,
  MdPhotoCamera,
  MdEco,
  MdVisibility,
  MdPreview,
  MdShoppingBag,
  MdUpload,
} from "react-icons/md";

const AddEditProduct = () => {
  // Form State for Real-Time Sync
  const [productName, setProductName] = useState(
    "Bandra Organic Alphonso Mangoes",
  );
  const [category, setCategory] = useState("Fresh Fruits");
  const [variantType, setVariantType] = useState<"Whole" | "Fresh Cut">(
    "Whole",
  );
  const [price250g, setPrice250g] = useState<number>(120);
  const [price500g, setPrice500g] = useState<number>(220);
  const [price1kg, setPrice1kg] = useState<number>(400);
  const [stock, setStock] = useState<number>(45);
  const [discount, setDiscount] = useState<number>(15);
  const [description, setDescription] = useState(
    "Hand-picked directly from certified organic orchards in Ratnagiri. Naturally ripened without carbides, sweet and fiberless.",
  );
  const [isOrganic, setIsOrganic] = useState<boolean>(true);
  const [isAvailable, setIsAvailable] = useState<boolean>(true);

  // Active selected unit on live preview card
  const [selectedUnit, setSelectedUnit] = useState<"250g" | "500g" | "1kg">(
    "500g",
  );

  // Calculate prices based on selected unit
  const getCurrentPrice = () => {
    if (selectedUnit === "250g") return price250g;
    if (selectedUnit === "500g") return price500g;
    return price1kg;
  };

  const currentPrice = getCurrentPrice();
  const originalPrice = Math.round(currentPrice / (1 - discount / 100));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Product saved successfully!");
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span
            className="text-xs font-bold uppercase tracking-widest block mb-0.5"
            style={{ color: "var(--color-primary)" }}
          >
            Catalog Management
          </span>
          <h1
            className="text-2xl font-black tracking-tight"
            style={{ color: "var(--color-text-main)" }}
          >
            Add / Edit Organic Product
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold border transition-all cursor-pointer hover:bg-[var(--color-surface-container)]"
            style={{
              backgroundColor: "var(--color-surface-low)",
              borderColor: "var(--color-border)",
              color: "var(--color-text-main)",
            }}
          >
            Save as Draft
          </button>
          <button
            type="submit"
            form="product-form"
            className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer hover:opacity-90 active:scale-95"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-text-inverse)",
            }}
          >
            <MdPublish className="text-lg" />
            <span>Publish Product</span>
          </button>
        </div>
      </div>

      {/* 2. MAIN GRID CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12">
        {/* Left Column: Form Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <form id="product-form" onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Basic Information */}
            <div
              className="p-6 rounded-2xl shadow-xs border space-y-4"
              style={{
                backgroundColor: "var(--color-surface-low)",
                borderColor: "var(--color-border)",
              }}
            >
              <div
                className="flex items-center justify-between pb-2 border-b"
                style={{ borderColor: "var(--color-border)" }}
              >
                <h2
                  className="text-base font-bold flex items-center gap-2"
                  style={{ color: "var(--color-text-main)" }}
                >
                  <MdInfo
                    className="text-xl"
                    style={{ color: "var(--color-primary)" }}
                  />
                  Basic Details
                </h2>
                <span
                  className="text-xs font-semibold"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Step 1 of 3
                </span>
              </div>

              {/* Product Name */}
              <div className="space-y-1.5">
                <label
                  className="block text-xs font-bold"
                  style={{ color: "var(--color-text-main)" }}
                >
                  Product Name
                </label>
                <input
                  type="text"
                  required
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="e.g., Organic Alphonso Mangoes"
                  className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none transition-all"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-main)",
                  }}
                />
              </div>

              {/* Category & Variant Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    className="block text-xs font-bold"
                    style={{ color: "var(--color-text-main)" }}
                  >
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none transition-all cursor-pointer"
                    style={{
                      backgroundColor: "var(--color-surface-container)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-main)",
                    }}
                  >
                    <option value="Fresh Fruits">Fresh Fruits</option>
                    <option value="Organic Vegetables">
                      Organic Vegetables
                    </option>
                    <option value="Leafy Greens">Leafy Greens</option>
                    <option value="Ready-Made Cut Foods">
                      Ready-Made Cut Foods
                    </option>
                    <option value="Exotic Herbs">Exotic Herbs</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label
                    className="block text-xs font-bold"
                    style={{ color: "var(--color-text-main)" }}
                  >
                    Variant Type
                  </label>
                  <div className="flex gap-2 pt-0.5">
                    {(["Whole", "Fresh Cut"] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setVariantType(type)}
                        className={`flex-1 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          variantType === type ? "shadow-xs" : ""
                        }`}
                        style={{
                          backgroundColor:
                            variantType === type
                              ? "var(--color-primary-container)"
                              : "var(--color-surface-container)",
                          color:
                            variantType === type
                              ? "var(--color-on-primary-container)"
                              : "var(--color-text-main)",
                          borderColor: "var(--color-border)",
                        }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Pricing & Multi-Units */}
            <div
              className="p-6 rounded-2xl shadow-xs border space-y-4"
              style={{
                backgroundColor: "var(--color-surface-low)",
                borderColor: "var(--color-border)",
              }}
            >
              <div
                className="flex items-center justify-between pb-2 border-b"
                style={{ borderColor: "var(--color-border)" }}
              >
                <h2
                  className="text-base font-bold flex items-center gap-2"
                  style={{ color: "var(--color-text-main)" }}
                >
                  <MdPayments
                    className="text-xl"
                    style={{ color: "var(--color-primary)" }}
                  />
                  Pricing & Multi-Units
                </h2>
                <span
                  className="text-xs font-semibold"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Step 2 of 3
                </span>
              </div>

              {/* Price Tier Inputs */}
              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-1.5">
                  <label
                    className="block text-[11px] font-bold"
                    style={{ color: "var(--color-text-main)" }}
                  >
                    Price (250g)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs text-gray-400">
                      ₹
                    </span>
                    <input
                      type="number"
                      value={price250g}
                      onChange={(e) => setPrice250g(Number(e.target.value))}
                      className="w-full pl-7 pr-3 py-2 rounded-xl text-xs sm:text-sm border focus:outline-none"
                      style={{
                        backgroundColor: "var(--color-surface-container)",
                        borderColor: "var(--color-border)",
                        color: "var(--color-text-main)",
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    className="block text-[11px] font-bold"
                    style={{ color: "var(--color-text-main)" }}
                  >
                    Price (500g)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs text-gray-400">
                      ₹
                    </span>
                    <input
                      type="number"
                      value={price500g}
                      onChange={(e) => setPrice500g(Number(e.target.value))}
                      className="w-full pl-7 pr-3 py-2 rounded-xl text-xs sm:text-sm border focus:outline-none"
                      style={{
                        backgroundColor: "var(--color-surface-container)",
                        borderColor: "var(--color-border)",
                        color: "var(--color-text-main)",
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    className="block text-[11px] font-bold"
                    style={{ color: "var(--color-text-main)" }}
                  >
                    Price (1kg)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs text-gray-400">
                      ₹
                    </span>
                    <input
                      type="number"
                      value={price1kg}
                      onChange={(e) => setPrice1kg(Number(e.target.value))}
                      className="w-full pl-7 pr-3 py-2 rounded-xl text-xs sm:text-sm border focus:outline-none"
                      style={{
                        backgroundColor: "var(--color-surface-container)",
                        borderColor: "var(--color-border)",
                        color: "var(--color-text-main)",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Stock & Discount */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="space-y-1.5">
                  <label
                    className="block text-xs font-bold"
                    style={{ color: "var(--color-text-main)" }}
                  >
                    Stock Quantity
                  </label>
                  <input
                    type="number"
                    value={stock}
                    onChange={(e) => setStock(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none"
                    style={{
                      backgroundColor: "var(--color-surface-container)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-main)",
                    }}
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    className="block text-xs font-bold"
                    style={{ color: "var(--color-text-main)" }}
                  >
                    Discount Percentage (%)
                  </label>
                  <input
                    type="number"
                    value={discount}
                    onChange={(e) => setDiscount(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none"
                    style={{
                      backgroundColor: "var(--color-surface-container)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-main)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Media & Attributes */}
            <div
              className="p-6 rounded-2xl shadow-xs border space-y-4"
              style={{
                backgroundColor: "var(--color-surface-low)",
                borderColor: "var(--color-border)",
              }}
            >
              <div
                className="flex items-center justify-between pb-2 border-b"
                style={{ borderColor: "var(--color-border)" }}
              >
                <h2
                  className="text-base font-bold flex items-center gap-2"
                  style={{ color: "var(--color-text-main)" }}
                >
                  <MdPhotoCamera
                    className="text-xl"
                    style={{ color: "var(--color-primary)" }}
                  />
                  Media & Attributes
                </h2>
                <span
                  className="text-xs font-semibold"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Step 3 of 3
                </span>
              </div>

              {/* Image Box */}
              <div className="space-y-1.5">
                <label
                  className="block text-xs font-bold"
                  style={{ color: "var(--color-text-main)" }}
                >
                  Product Image Box
                </label>
                <div
                  className="relative border-2 border-dashed rounded-2xl h-44 flex flex-col items-center justify-center cursor-pointer transition-all overflow-hidden group"
                  style={{
                    borderColor: "var(--color-border)",
                    backgroundColor: "var(--color-surface-container)",
                  }}
                >
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5fumYXFSK4dYnOeSGqFLJfUG8YE5icRrc_pNZoZCVLcAuXId2XnYxd-B7wecXp0oQaiTPwMzF2QlA41pT8Y9tWG4zQX3wks-Vb-lWUCQ5Azlop7GVpDgnxSazxosxGUj1CudyuiY9BDQbMGPN5xXfWDQ6nvyhj-6otYU6zryjqVnhmMqiXHWfTtt6N8S921MHLOBEHeb1TaIhGUd8sIt-wRjv5evSBIc-zK6cfAM"
                    alt="Product upload background"
                    fill
                    unoptimized
                    className="object-cover opacity-75 group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-2xs"></div>
                  <div className="relative z-10 px-4 py-2 rounded-full bg-white/90 shadow-md flex items-center gap-2 text-xs font-bold text-gray-800 group-hover:scale-105 transition-transform">
                    <MdUpload className="text-base text-emerald-600" />
                    <span>Change Image File</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-1.5">
                <label
                  className="block text-xs font-bold"
                  style={{ color: "var(--color-text-main)" }}
                >
                  Product Description
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe taste, origin, and organic certifications..."
                  className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-main)",
                  }}
                />
              </div>

              {/* Toggles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Organic Toggle */}
                <div
                  className="flex items-center justify-between p-3.5 rounded-xl border"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div
                    className="flex items-center gap-2 text-xs font-bold"
                    style={{ color: "var(--color-text-main)" }}
                  >
                    <MdEco className="text-lg text-emerald-600" />
                    <span>Certified Organic</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isOrganic}
                      onChange={(e) => setIsOrganic(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div
                      className="w-9 h-5 rounded-full peer peer-checked:after:translate-x-4 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all shadow-inner"
                      style={{
                        backgroundColor: isOrganic
                          ? "var(--color-primary)"
                          : "var(--color-surface-dim)",
                      }}
                    ></div>
                  </label>
                </div>

                {/* Instant Availability Toggle */}
                <div
                  className="flex items-center justify-between p-3.5 rounded-xl border"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div
                    className="flex items-center gap-2 text-xs font-bold"
                    style={{ color: "var(--color-text-main)" }}
                  >
                    <MdVisibility className="text-lg text-blue-600" />
                    <span>Instant Availability</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isAvailable}
                      onChange={(e) => setIsAvailable(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div
                      className="w-9 h-5 rounded-full peer peer-checked:after:translate-x-4 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all shadow-inner"
                      style={{
                        backgroundColor: isAvailable
                          ? "var(--color-primary)"
                          : "var(--color-surface-dim)",
                      }}
                    ></div>
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Right Column: Live Interactive Product Card Preview (5 cols) */}
        <div className="lg:col-span-5">
          <div className="sticky top-24 space-y-4">
            <div className="flex items-center justify-between px-1">
              <span
                className="text-sm font-bold flex items-center gap-1.5"
                style={{ color: "var(--color-text-main)" }}
              >
                <MdPreview className="text-lg text-blue-600" />
                Live Customer Preview
              </span>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold">
                Real-time sync
              </span>
            </div>

            {/* The Live Interactive Preview Card */}
            <div
              className="rounded-2xl shadow-md overflow-hidden border transition-all"
              style={{
                backgroundColor: "var(--color-surface-low)",
                borderColor: "var(--color-border)",
              }}
            >
              {/* Card Image Header & Badges */}
              <div className="relative h-60 w-full bg-gray-100 overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs87I54VguhrrNgYndx-_YdiAZ6QZIqOI4iHsUUzs_HVNjBSd_dCgJ2ez6LXIMMFiwP6lOpq_Wxzv6ZZx2LJmk-r3GZ8q4zJete3rdLiZLaLGFrMtnfyK7ZDP2yTuTcfZTg21AyagxjpQZOgPXucMoCu4v-IGnbnxMIhGuWrT4y3S2FmOU08b44MFnW49rJjpOeiDOh-HuiLJYZJLn97aFoJ85Ugwh20m_n0XEoc4"
                  alt="Live card preview"
                  fill
                  unoptimized
                  className="object-cover"
                />

                {/* Badges Overlay */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
                  {isOrganic && (
                    <span
                      className="px-2.5 py-1 rounded-full text-[10px] font-bold shadow-xs flex items-center gap-1"
                      style={{
                        backgroundColor: "var(--color-primary)",
                        color: "var(--color-text-inverse)",
                      }}
                    >
                      <MdEco className="text-xs" /> Certified Organic
                    </span>
                  )}
                  {discount > 0 && (
                    <span className="px-2.5 py-1 rounded-full bg-amber-500 text-white text-[10px] font-bold shadow-xs">
                      {discount}% OFF
                    </span>
                  )}
                </div>

                {/* Variant Badge */}
                <div className="absolute bottom-3 left-3 z-10">
                  <span className="px-3 py-1 rounded-lg bg-white/90 backdrop-blur-md text-gray-900 text-[11px] font-bold shadow-xs">
                    {variantType} Variant
                  </span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-5 space-y-4">
                <div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider block"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {category}
                  </span>
                  <h3
                    className="text-base font-bold leading-snug mt-0.5"
                    style={{ color: "var(--color-text-main)" }}
                  >
                    {productName || "Untitled Product"}
                  </h3>
                </div>

                <p
                  className="text-xs line-clamp-2 leading-relaxed"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {description || "No description provided."}
                </p>

                {/* Unit Selector Tabs */}
                <div className="space-y-1.5 pt-1">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider block"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Select Quantity Unit
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {(["250g", "500g", "1kg"] as const).map((unit) => {
                      const isSelected = selectedUnit === unit;
                      const unitPrice =
                        unit === "250g"
                          ? price250g
                          : unit === "500g"
                            ? price500g
                            : price1kg;

                      return (
                        <button
                          key={unit}
                          type="button"
                          onClick={() => setSelectedUnit(unit)}
                          className={`py-2 px-1 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                            isSelected ? "shadow-xs" : ""
                          }`}
                          style={{
                            backgroundColor: isSelected
                              ? "var(--color-primary-container)"
                              : "var(--color-surface-container)",
                            color: isSelected
                              ? "var(--color-on-primary-container)"
                              : "var(--color-text-main)",
                            borderColor: "var(--color-border)",
                          }}
                        >
                          {unit} • ₹{unitPrice}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Price & CTA Row */}
                <div
                  className="flex items-center justify-between pt-3 border-t"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <div>
                    <span
                      className="text-[10px] font-semibold block"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Price
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span
                        className="text-lg font-black"
                        style={{ color: "var(--color-primary)" }}
                      >
                        ₹{currentPrice}
                      </span>
                      {discount > 0 && (
                        <span
                          className="text-xs line-through"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          ₹{originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    disabled={!isAvailable}
                    className={`px-4 py-2.5 rounded-full text-xs font-bold shadow-xs flex items-center gap-1.5 transition-all ${
                      isAvailable
                        ? "hover:scale-105 cursor-pointer"
                        : "opacity-50 cursor-not-allowed"
                    }`}
                    style={{
                      backgroundColor: "var(--color-primary)",
                      color: "var(--color-text-inverse)",
                    }}
                  >
                    <MdShoppingBag className="text-base" />
                    <span>Add to Cart</span>
                  </button>
                </div>

                {/* Status alert banner if unavailable */}
                {!isAvailable && (
                  <div className="p-2.5 rounded-xl bg-red-100 text-red-700 text-xs font-bold text-center">
                    Currently Unavailable / Out of Stock
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEditProduct;
