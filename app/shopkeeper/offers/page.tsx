"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  MdLocalOffer,
  MdVerified,
  MdAddCircle,
  MdLocalActivity,
  MdListAlt,
  MdCalendarToday,
  MdEventBusy,
  MdDelete,
} from "react-icons/md";

interface Coupon {
  id: string;
  code: string;
  discountType: "percent" | "flat";
  discountValue: number;
  minOrder: number;
  category: string;
  expiryDate: string;
  isLive: boolean;
  status: "Active" | "Expired";
}

const INITIAL_COUPONS: Coupon[] = [
  {
    id: "c1",
    code: "BANDRA20",
    discountType: "percent",
    discountValue: 20,
    minOrder: 499,
    category: "All Organic Products",
    expiryDate: "31st Oct 2026",
    isLive: true,
    status: "Active",
  },
  {
    id: "c2",
    code: "GREENMORNING",
    discountType: "flat",
    discountValue: 150,
    minOrder: 999,
    category: "Fresh Fruits & Veg",
    expiryDate: "15th Nov 2026",
    isLive: true,
    status: "Active",
  },
  {
    id: "c3",
    code: "WEEKENDORGANIC",
    discountType: "percent",
    discountValue: 25,
    minOrder: 750,
    category: "Ready-Made Cut Foods",
    expiryDate: "30th Nov 2026",
    isLive: true,
    status: "Active",
  },
  {
    id: "c4",
    code: "MONSOONFRESH",
    discountType: "percent",
    discountValue: 10,
    minOrder: 300,
    category: "All Categories",
    expiryDate: "30th Sep 2026",
    isLive: false,
    status: "Expired",
  },
];

const ManageOffers = () => {
  const [coupons, setCoupons] = useState<Coupon[]>(INITIAL_COUPONS);
  const [activeTab, setActiveTab] = useState<"All" | "Active" | "Expired">(
    "All",
  );

  // Form State
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState<number | "">(15);
  const [minOrder, setMinOrder] = useState<number | "">(499);
  const [expiryDate, setExpiryDate] = useState("2026-11-30");
  const [category, setCategory] = useState("All Organic Products");

  const handleCreateCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code) return;

    const newCoupon: Coupon = {
      id: Date.now().toString(),
      code: code.toUpperCase(),
      discountType: "percent",
      discountValue: Number(discount) || 15,
      minOrder: Number(minOrder) || 0,
      category,
      expiryDate: expiryDate || "31st Dec 2026",
      isLive: true,
      status: "Active",
    };

    setCoupons([newCoupon, ...coupons]);
    setCode("");
    alert("Coupon created and published successfully!");
  };

  const handleToggleLive = (id: string) => {
    setCoupons((prev) =>
      prev.map((c) => (c.id === id ? { ...c, isLive: !c.isLive } : c)),
    );
  };

  const handleDeleteCoupon = (id: string) => {
    setCoupons((prev) => prev.filter((c) => c.id !== id));
  };

  const filteredCoupons = coupons.filter((c) => {
    if (activeTab === "Active") return c.status === "Active";
    if (activeTab === "Expired") return c.status === "Expired";
    return true;
  });

  const activeCount = coupons.filter((c) => c.status === "Active").length;

  return (
    <div className="space-y-8 p-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-1"
            style={{ color: "var(--color-primary)" }}
          >
            <MdLocalOffer className="text-base" />
            <span>Promotions & Discounts Hub</span>
          </div>
          <h1
            className="text-2xl font-black tracking-tight"
            style={{ color: "var(--color-text-main)" }}
          >
            Manage Shop Offers
          </h1>
          <p
            className="text-xs sm:text-sm max-w-xl mt-1"
            style={{ color: "var(--color-text-muted)" }}
          >
            Create enticing promotional codes to drive repeat orders, reward
            loyal Bandra health enthusiasts, and boost your harvest inventory
            turnover.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div
            className="px-4 py-2.5 rounded-2xl flex items-center gap-4 shadow-xs border"
            style={{
              backgroundColor: "var(--color-surface-low)",
              borderColor: "var(--color-border)",
            }}
          >
            <div className="flex flex-col">
              <span
                className="text-[10px] font-bold uppercase tracking-wider"
                style={{ color: "var(--color-text-muted)" }}
              >
                Active Promotions
              </span>
              <span
                className="text-sm font-black"
                style={{ color: "var(--color-primary)" }}
              >
                {activeCount} Coupons
              </span>
            </div>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
              style={{
                backgroundColor: "var(--color-primary-container)",
                color: "var(--color-on-primary-container)",
              }}
            >
              <MdVerified />
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN GRID LAYOUT: FORM ON LEFT, COUPONS LIST ON RIGHT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* COUPON CREATION FORM (5 cols) */}
        <div
          className="lg:col-span-5 rounded-2xl p-6 shadow-xs border relative overflow-hidden space-y-5"
          style={{
            backgroundColor: "var(--color-surface-low)",
            borderColor: "var(--color-border)",
          }}
        >
          <div
            className="flex items-center justify-between pb-3 border-b"
            style={{ borderColor: "var(--color-border)" }}
          >
            <h2
              className="text-base font-bold flex items-center gap-2"
              style={{ color: "var(--color-text-main)" }}
            >
              <MdAddCircle className="text-xl text-emerald-600" />
              Create New Coupon
            </h2>
            <span
              className="text-[10px] px-2.5 py-0.5 rounded-full font-bold shadow-2xs"
              style={{
                backgroundColor: "var(--color-primary-container)",
                color: "var(--color-on-primary-container)",
              }}
            >
              Instant Live
            </span>
          </div>

          <form onSubmit={handleCreateCoupon} className="space-y-4">
            {/* Coupon Code Input */}
            <div className="space-y-1">
              <label
                className="block text-xs font-bold"
                style={{ color: "var(--color-text-main)" }}
              >
                Coupon Code
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 font-bold text-xs">
                  #
                </span>
                <input
                  type="text"
                  required
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  placeholder="e.g. BANDRAHARVEST20"
                  className="w-full pl-8 pr-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase border focus:outline-none transition-all shadow-2xs"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-main)",
                  }}
                />
              </div>
              <p
                className="text-[10px]"
                style={{ color: "var(--color-text-muted)" }}
              >
                Keep it short, memorable, and uppercase.
              </p>
            </div>

            {/* Discount Percentage & Min Order Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label
                  className="block text-xs font-bold"
                  style={{ color: "var(--color-text-main)" }}
                >
                  Discount (%)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="100"
                    required
                    value={discount}
                    onChange={(e) =>
                      setDiscount(e.target.value ? Number(e.target.value) : "")
                    }
                    placeholder="15"
                    className="w-full pl-4 pr-8 py-2.5 rounded-xl text-xs sm:text-sm font-bold border focus:outline-none transition-all shadow-2xs"
                    style={{
                      backgroundColor: "var(--color-surface-container)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-main)",
                    }}
                  />
                  <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400 text-xs font-bold">
                    %
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <label
                  className="block text-xs font-bold"
                  style={{ color: "var(--color-text-main)" }}
                >
                  Min. Order (₹)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 text-xs font-bold">
                    ₹
                  </span>
                  <input
                    type="number"
                    min="0"
                    step="50"
                    required
                    value={minOrder}
                    onChange={(e) =>
                      setMinOrder(e.target.value ? Number(e.target.value) : "")
                    }
                    placeholder="499"
                    className="w-full pl-7 pr-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border focus:outline-none transition-all shadow-2xs"
                    style={{
                      backgroundColor: "var(--color-surface-container)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-main)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Expiry Date */}
            <div className="space-y-1">
              <label
                className="block text-xs font-bold"
                style={{ color: "var(--color-text-main)" }}
              >
                Expiry Date
              </label>
              <input
                type="date"
                required
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border focus:outline-none transition-all shadow-2xs cursor-pointer"
                style={{
                  backgroundColor: "var(--color-surface-container)",
                  borderColor: "var(--color-border)",
                  color: "var(--color-text-main)",
                }}
              />
            </div>

            {/* Applicable Category Dropdown */}
            <div className="space-y-1">
              <label
                className="block text-xs font-bold"
                style={{ color: "var(--color-text-main)" }}
              >
                Applicable Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border focus:outline-none transition-all shadow-2xs cursor-pointer"
                style={{
                  backgroundColor: "var(--color-surface-container)",
                  borderColor: "var(--color-border)",
                  color: "var(--color-text-main)",
                }}
              >
                <option value="All Organic Products">
                  All Organic Products
                </option>
                <option value="Fresh Fruits & Veg">Fresh Fruits & Veg</option>
                <option value="Ready-Made Cut Foods">
                  Ready-Made Cut Foods
                </option>
                <option value="Cold-Pressed Oils & Honey">
                  Cold-Pressed Oils & Honey
                </option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold text-xs shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all hover:opacity-90"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-text-inverse)",
              }}
            >
              <MdLocalActivity className="text-base" />
              <span>Publish Coupon</span>
            </button>
          </form>

          {/* Decorative Harvest Tip Image Banner */}
          <div className="rounded-xl overflow-hidden relative h-28 bg-gray-900 flex items-end p-4 border shadow-inner">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1RqLFmcPFNMnUVnXVDj4Ez7swOJ7g_RoUGh04ddPMLjplryJHynEPTsR6IbxctlmsMCX0oSpkxgUDBHwa1sY0ChvsgBDViVpCPm6-60Ai9XHsKZv2liV7BnHApHgKy7k17uAakilflFURO8Z3zFZs_eD5njZ9a6SftZBVk3n_G_LU7icx4xLRhAZM6pdLziQILsKuaOc9D_lBgc9p4aU3eQw6_plUW_NA5Ygvl-Y"
              alt="Harvest Tip background"
              fill
              unoptimized
              className="object-cover opacity-60"
            />
            <div className="relative z-10 text-white">
              <p className="text-[10px] uppercase font-black text-amber-300 tracking-wider">
                Harvest Tip
              </p>
              <p className="text-xs font-semibold leading-snug">
                Coupons with 15-20% discounts convert 3.4x better on weekends.
              </p>
            </div>
          </div>
        </div>

        {/* ACTIVE & EXPIRED COUPONS LIST (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Section Header & Filter Tabs */}
          <div className="flex items-center justify-between">
            <h2
              className="text-base font-bold flex items-center gap-2"
              style={{ color: "var(--color-text-main)" }}
            >
              <MdListAlt className="text-xl text-emerald-600" />
              Active & Expired Coupons
            </h2>

            {/* Tabs */}
            <div
              className="flex p-1 rounded-xl border shadow-2xs"
              style={{
                backgroundColor: "var(--color-surface-low)",
                borderColor: "var(--color-border)",
              }}
            >
              {(["All", "Active", "Expired"] as const).map((tab) => {
                const count =
                  tab === "All"
                    ? coupons.length
                    : tab === "Active"
                      ? activeCount
                      : coupons.length - activeCount;

                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeTab === tab ? "shadow-2xs" : ""
                    }`}
                    style={{
                      backgroundColor:
                        activeTab === tab
                          ? "var(--color-surface-container)"
                          : "transparent",
                      color:
                        activeTab === tab
                          ? "var(--color-text-main)"
                          : "var(--color-text-muted)",
                    }}
                  >
                    {tab} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Coupon Cards Stack */}
          <div className="space-y-3">
            {filteredCoupons.map((coupon) => (
              <div
                key={coupon.id}
                className={`rounded-2xl p-4 shadow-xs border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all hover:shadow-md ${
                  coupon.status === "Expired" ? "opacity-75" : ""
                }`}
                style={{
                  backgroundColor: "var(--color-surface-low)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div className="flex items-start gap-3.5">
                  <div
                    className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center font-black shrink-0 shadow-2xs ${
                      coupon.status === "Expired"
                        ? "bg-gray-200 text-gray-700"
                        : "bg-emerald-100 text-emerald-900"
                    }`}
                  >
                    <span className="text-base sm:text-lg font-black leading-none">
                      {coupon.discountType === "percent"
                        ? `${coupon.discountValue}%`
                        : `₹${coupon.discountValue}`}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider mt-0.5 font-bold">
                      {coupon.discountType === "percent" ? "Off" : "Flat"}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-sm sm:text-base font-black tracking-wider ${
                          coupon.status === "Expired"
                            ? "line-through text-gray-500"
                            : ""
                        }`}
                        style={{
                          color:
                            coupon.status === "Expired"
                              ? undefined
                              : "var(--color-text-main)",
                        }}
                      >
                        {coupon.code}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                          coupon.status === "Active"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {coupon.status}
                      </span>
                    </div>

                    <p
                      className="text-xs font-semibold mt-0.5"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Min. Order: ₹{coupon.minOrder} • {coupon.category}
                    </p>

                    <div className="flex items-center gap-1 text-[11px] font-medium mt-1">
                      {coupon.status === "Active" ? (
                        <>
                          <MdCalendarToday className="text-xs text-emerald-600" />
                          <span style={{ color: "var(--color-text-muted)" }}>
                            Expires: {coupon.expiryDate}
                          </span>
                        </>
                      ) : (
                        <>
                          <MdEventBusy className="text-xs text-red-600" />
                          <span className="text-red-600 font-bold">
                            Expired on: {coupon.expiryDate}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Actions: Live Toggle & Delete */}
                <div
                  className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end pt-3 sm:pt-0 border-t sm:border-t-0"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="text-xs font-bold"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Live
                    </span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        disabled={coupon.status === "Expired"}
                        checked={coupon.isLive}
                        onChange={() => handleToggleLive(coupon.id)}
                        className="sr-only peer"
                      />
                      <div
                        className="w-9 h-5 rounded-full peer peer-checked:after:translate-x-4 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all shadow-inner"
                        style={{
                          backgroundColor:
                            coupon.isLive && coupon.status === "Active"
                              ? "var(--color-primary)"
                              : "var(--color-surface-dim)",
                        }}
                      ></div>
                    </label>
                  </div>

                  <button
                    onClick={() => handleDeleteCoupon(coupon.id)}
                    className="w-8 h-8 rounded-xl bg-red-100 text-red-700 hover:bg-red-200 flex items-center justify-center transition-colors cursor-pointer"
                    title="Delete Coupon"
                  >
                    <MdDelete className="text-base" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOffers;
