"use client";

import React, { useState } from "react";
import {
  MdInventory2,
  MdWarning,
  MdTimer,
  MdEco,
  MdPriorityHigh,
  MdSearch,
  MdAdd,
} from "react-icons/md";

const InventoryManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [activeStockTab, setActiveStockTab] = useState<
    "all" | "expiring" | "low"
  >("all");

  return (
    <div className="space-y-6 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Total Inventory Items */}
        <div
          className="rounded-2xl p-6 shadow-xs border flex flex-col justify-between transition-all hover:shadow-md"
          style={{
            backgroundColor: "var(--color-surface-low)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: "var(--color-text-muted)" }}
            >
              Total Inventory Items
            </span>
            <MdInventory2
              className="text-2xl"
              style={{ color: "var(--color-primary)" }}
            />
          </div>
          <div className="flex items-baseline gap-2">
            <span
              className="text-3xl font-black"
              style={{ color: "var(--color-text-main)" }}
            >
              1,248
            </span>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              +12% this week
            </span>
          </div>
        </div>

        {/* Card 2: Low Stock Alerts */}
        <div
          className="rounded-2xl p-6 shadow-xs border flex flex-col justify-between transition-all hover:shadow-md"
          style={{
            backgroundColor: "var(--color-surface-low)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: "var(--color-text-muted)" }}
            >
              Low Stock Alerts
            </span>
            <MdWarning className="text-2xl text-amber-500" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-amber-600">14</span>
            <span
              className="text-xs"
              style={{ color: "var(--color-text-muted)" }}
            >
              Requires immediate restock
            </span>
          </div>
        </div>

        {/* Card 3: Expiring Soon (48h) */}
        <div
          className="rounded-2xl p-6 shadow-xs border flex flex-col justify-between transition-all hover:shadow-md"
          style={{
            backgroundColor: "var(--color-surface-low)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: "var(--color-text-muted)" }}
            >
              Expiring Soon (48h)
            </span>
            <MdTimer className="text-2xl text-red-500" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-red-600">8</span>
            <span
              className="text-xs"
              style={{ color: "var(--color-text-muted)" }}
            >
              Discount recommended
            </span>
          </div>
        </div>

        {/* Card 4: Freshness Rating */}
        <div
          className="rounded-2xl p-6 shadow-xs border flex flex-col justify-between transition-all hover:shadow-md"
          style={{
            backgroundColor: "var(--color-surface-low)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: "var(--color-text-muted)" }}
            >
              Freshness Rating
            </span>
            <MdEco className="text-2xl text-emerald-600" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-emerald-600">98.4%</span>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              Top Quality
            </span>
          </div>
        </div>
      </div>

      {/* 2. LOW STOCK WARNING BANNER */}
      <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
            <MdPriorityHigh className="text-2xl" />
          </div>
          <div>
            <h3
              className="text-base sm:text-lg font-bold"
              style={{ color: "var(--color-text-main)" }}
            >
              14 Items are critically low on stock
            </h3>
            <p
              className="text-xs sm:text-sm mt-0.5"
              style={{ color: "var(--color-text-muted)" }}
            >
              Organic Alphonso Mangoes, Baby Spinach, and Fresh Herb Bundles are
              running out based on todays high demand in Bandra.
            </p>
          </div>
        </div>

        <button className="bg-amber-500 text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-xs hover:bg-amber-600 transition-all shrink-0 cursor-pointer">
          Restock All Critical
        </button>
      </div>

      {/* 3. INVENTORY TOOLBAR */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Left: Search Input & Category Dropdown */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          {/* Search Bar */}
          <div className="relative w-full sm:w-80">
            <MdSearch
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-lg"
              style={{ color: "var(--color-text-muted)" }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by product name, SKU, or farm..."
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm border focus:outline-none transition-all shadow-xs"
              style={{
                backgroundColor: "var(--color-surface-low)",
                borderColor: "var(--color-border)",
                color: "var(--color-text-main)",
              }}
            />
          </div>

          {/* Category Selector */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border focus:outline-none transition-all shadow-xs cursor-pointer"
            style={{
              backgroundColor: "var(--color-surface-low)",
              borderColor: "var(--color-border)",
              color: "var(--color-text-main)",
            }}
          >
            <option value="All Categories">All Categories</option>
            <option value="Organic Vegetables">Organic Vegetables</option>
            <option value="Fresh Fruits">Fresh Fruits</option>
            <option value="Ready-Made Cut Foods">Ready-Made Cut Foods</option>
            <option value="Certified Organic Herbs">
              Certified Organic Herbs
            </option>
          </select>
        </div>

        {/* Right: Tab Filter & Add Item Button */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          {/* Stock Filter Segmented Control */}
          <div
            className="flex p-1 rounded-xl border shadow-xs"
            style={{
              backgroundColor: "var(--color-surface-low)",
              borderColor: "var(--color-border)",
            }}
          >
            <button
              onClick={() => setActiveStockTab("all")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeStockTab === "all" ? "shadow-xs" : ""
              }`}
              style={{
                backgroundColor:
                  activeStockTab === "all"
                    ? "var(--color-surface-container)"
                    : "transparent",
                color:
                  activeStockTab === "all"
                    ? "var(--color-text-main)"
                    : "var(--color-text-muted)",
              }}
            >
              All Stock
            </button>
            <button
              onClick={() => setActiveStockTab("expiring")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeStockTab === "expiring" ? "shadow-xs" : ""
              }`}
              style={{
                backgroundColor:
                  activeStockTab === "expiring"
                    ? "var(--color-surface-container)"
                    : "transparent",
                color:
                  activeStockTab === "expiring"
                    ? "var(--color-text-main)"
                    : "var(--color-text-muted)",
              }}
            >
              Expiring Soon
            </button>
            <button
              onClick={() => setActiveStockTab("low")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeStockTab === "low" ? "shadow-xs" : ""
              }`}
              style={{
                backgroundColor:
                  activeStockTab === "low"
                    ? "var(--color-surface-container)"
                    : "transparent",
                color:
                  activeStockTab === "low"
                    ? "var(--color-text-main)"
                    : "var(--color-text-muted)",
              }}
            >
              Low Stock
            </button>
          </div>

          {/* Add Stock Item CTA */}
          <button
            className="px-5 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-xs flex items-center gap-2 transition-all hover:opacity-90 cursor-pointer shrink-0"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-text-inverse)",
            }}
          >
            <MdAdd className="text-lg" />
            <span>Add Stock Item</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryManagement;
