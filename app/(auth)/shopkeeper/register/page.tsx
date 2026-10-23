"use client";

import { checkItNumber, CheckItString, CheckLength } from "@/constants/method";
import { AcceptShopData } from "@/types/shop/type";
import React, { useState } from "react";
import {
  MdStorefront,
  MdPerson,
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdLock,
  MdCheckCircle,
  MdVisibility,
  MdVisibilityOff,
  MdErrorOutline,
} from "react-icons/md";

export default function ShopKeeperSign() {
  const [showPassword, setShowPassword] = useState(false);
  const [shopDataError, setshopDataError] = useState<AcceptShopData>({
    name: "",
    email: "",
    phone: "",
    shopName: "",
    shopAdress: "",
    city: "",
    state: "",
    pincode: "",
    password: "",
  });
  const [shopData, setshopData] = useState<AcceptShopData>({
    name: "",
    email: "",
    phone: "",
    shopName: "",
    shopAdress: "",
    city: "",
    state: "",
    pincode: "",
    password: "",
  });

  function HelperFunGetShopData(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { value, name } = e.target;
    const fileds: string[] = [
      "name",
      "email",
      "shopName",
      "shopAdress",
      "city",
      "state",
      "password",
    ];
    if (fileds.includes(name)) {
      const result = CheckItString(value, name);
      setshopDataError((prev) => ({
        ...prev,
        [name]: result.error || "",
      }));
    }

    if (name === "pincode" || name === "phone") {
      const minNum = name === "phone" ? 10 : 6;

      const lengthResult = CheckLength(value, name, minNum, minNum);
      const numberResult = checkItNumber(value, name);
      const error = numberResult.error || lengthResult.error;
      setshopDataError((prev) => ({
        ...prev,
        [name]: error || "",
      }));
    }

    setshopData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 flex items-center justify-center">
      <div
        className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl border"
        style={{
          backgroundColor: "var(--color-surface-low)",
          borderColor: "var(--color-border)",
        }}
      >
        <div
          className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden text-white"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          <div className="absolute -right-16 -top-16 w-60 h-60 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-60 h-60 bg-emerald-900/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-bold text-xl">
                <MdStorefront />
              </div>
              <span className="font-extrabold tracking-tight text-lg text-white">
                FreshMart Partner Hub
              </span>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 block mb-1">
                Grow With FreshMart
              </span>
              <h2 className="text-2xl sm:text-3xl font-black leading-tight text-white">
                Become a Certified Partner Shopkeeper
              </h2>
              <p className="text-xs sm:text-sm mt-2 text-emerald-100/90 leading-relaxed">
                Connect directly with thousands of organic produce buyers across
                Bandra West & Mumbai. Enjoy daily payouts and real-time
                inventory management.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs font-bold text-white">
                <MdCheckCircle className="text-lg text-emerald-300 shrink-0" />
                <span>Zero Commission for First 30 Days</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-white">
                <MdCheckCircle className="text-lg text-emerald-300 shrink-0" />
                <span>Automated Express Rider Dispatches</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-white">
                <MdCheckCircle className="text-lg text-emerald-300 shrink-0" />
                <span>Verified Organic Partner Badge</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-8 pt-6 border-t border-white/20">
            <p className="text-xs italic text-emerald-50">
              Joining FreshMart boosted our daily local harvest deliveries by
              40% in just two weeks!
            </p>
            <p className="text-[11px] font-bold text-emerald-200 mt-1">
              — Bandra Organic Hub Team
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
          <div
            className="flex items-center justify-between pb-4 border-b"
            style={{ borderColor: "var(--color-border)" }}
          >
            <div>
              <h1
                className="text-xl font-bold tracking-tight"
                style={{ color: "var(--color-text-main)" }}
              >
                Partner Registration
              </h1>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <label
                className="block text-xs font-bold"
                style={{ color: "var(--color-text-main)" }}
              >
                Shopkeeper Full Name *
              </label>
              <div className="relative">
                <MdPerson className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                <input
                  type="text"
                  placeholder="e.g. Manish Sharma"
                  name="name"
                  value={shopData.name}
                  onChange={HelperFunGetShopData}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none transition-all shadow-2xs"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-main)",
                  }}
                />
              </div>
              {shopDataError.name && (
                <div className="mt-1.5 text-red-600 text-xs font-bold flex items-center gap-1.5">
                  <MdErrorOutline className="text-sm shrink-0" />
                  <span>{shopDataError?.name}</span>
                </div>
              )}
            </div>

            <div className="space-y-1">
              <label
                className="block text-xs font-bold"
                style={{ color: "var(--color-text-main)" }}
              >
                Email Address *
              </label>
              <div className="relative">
                <MdEmail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                <input
                  type="email"
                  value={shopData.email}
                  name="email"
                  onChange={HelperFunGetShopData}
                  placeholder="e.g. manish@freshmart.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none transition-all shadow-2xs"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-main)",
                  }}
                />
              </div>
              {shopDataError.email && (
                <div className="mt-1.5 text-red-600 text-xs font-bold flex items-center gap-1.5">
                  <MdErrorOutline className="text-sm shrink-0" />
                  <span>{shopDataError?.email}</span>
                </div>
              )}
            </div>

            <div className="space-y-1">
              <label
                className="block text-xs font-bold"
                style={{ color: "var(--color-text-main)" }}
              >
                Phone Number *
              </label>
              <div className="relative">
                <MdPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                <input
                  type="tel"
                  placeholder="98200 12345"
                  value={shopData.phone}
                  onChange={HelperFunGetShopData}
                  name="phone"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none transition-all shadow-2xs"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-main)",
                  }}
                />
              </div>
            </div>
            {shopDataError.phone && (
              <div className="mt-1.5 text-red-600 text-xs font-bold flex items-center gap-1.5">
                <MdErrorOutline className="text-sm shrink-0" />
                <span>{shopDataError?.phone}</span>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <label
                className="block text-xs font-bold"
                style={{ color: "var(--color-text-main)" }}
              >
                Shop Name *
              </label>
              <div className="relative">
                <MdStorefront className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                <input
                  type="text"
                  placeholder="e.g. Bandra Organic Hub"
                  value={shopData.shopName}
                  onChange={HelperFunGetShopData}
                  name="shopName"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none transition-all shadow-2xs"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-main)",
                  }}
                />
              </div>
            </div>
            {shopDataError.shopName && (
              <div className="mt-1.5 text-red-600 text-xs font-bold flex items-center gap-1.5">
                <MdErrorOutline className="text-sm shrink-0" />
                <span>{shopDataError?.shopName}</span>
              </div>
            )}

            <div className="space-y-1">
              <label
                className="block text-xs font-bold"
                style={{ color: "var(--color-text-main)" }}
              >
                Shop Address
              </label>
              <div className="relative">
                <MdLocationOn className="absolute left-3.5 top-3 text-gray-400 text-base" />
                <textarea
                  rows={2}
                  placeholder="Street, Landmark, Area..."
                  value={shopData.shopAdress}
                  onChange={HelperFunGetShopData}
                  name="shopAdress"
                  className="w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm border focus:outline-none transition-all shadow-2xs"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-main)",
                  }}
                />
              </div>
              {shopDataError.shopAdress && (
                <div className="mt-1.5 text-red-600 text-xs font-bold flex items-center gap-1.5">
                  <MdErrorOutline className="text-sm shrink-0" />
                  <span>{shopDataError?.shopAdress}</span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-1">
                <label
                  className="block text-xs font-bold"
                  style={{ color: "var(--color-text-main)" }}
                >
                  City
                </label>
                <input
                  type="text"
                  value={shopData.city}
                  onChange={HelperFunGetShopData}
                  name="city"
                  className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm border focus:outline-none shadow-2xs"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-main)",
                  }}
                />
              </div>
              {shopDataError.city && (
                <div className="mt-1.5 text-red-600 text-xs font-bold flex items-center gap-1.5">
                  <MdErrorOutline className="text-sm shrink-0" />
                  <span>{shopDataError?.city}</span>
                </div>
              )}

              <div className="space-y-1">
                <label
                  className="block text-xs font-bold"
                  style={{ color: "var(--color-text-main)" }}
                >
                  State
                </label>
                <input
                  type="text"
                  value={shopData.state}
                  onChange={HelperFunGetShopData}
                  name="state"
                  className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm border focus:outline-none shadow-2xs"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-main)",
                  }}
                />
              </div>
              {shopDataError.state && (
                <div className="mt-1.5 text-red-600 text-xs font-bold flex items-center gap-1.5">
                  <MdErrorOutline className="text-sm shrink-0" />
                  <span>{shopDataError?.state}</span>
                </div>
              )}

              <div className="space-y-1">
                <label
                  className="block text-xs font-bold"
                  style={{ color: "var(--color-text-main)" }}
                >
                  Pincode
                </label>
                <input
                  type="text"
                  value={shopData.pincode}
                  onChange={HelperFunGetShopData}
                  name="pincode"
                  className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm border focus:outline-none shadow-2xs"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-main)",
                  }}
                />
              </div>
              {shopDataError.pincode && (
                <div className="mt-1.5 text-red-600 text-xs font-bold flex items-center gap-1.5">
                  <MdErrorOutline className="text-sm shrink-0" />
                  <span>{shopDataError?.pincode}</span>
                </div>
              )}
            </div>

            <div className="space-y-1">
              <label
                className="block text-xs font-bold"
                style={{ color: "var(--color-text-main)" }}
              >
                Account Password *
              </label>
              <div className="relative">
                <MdLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={shopData.password}
                  onChange={HelperFunGetShopData}
                  name="passwrod"
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none transition-all shadow-2xs"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-main)",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  {showPassword ? (
                    <MdVisibilityOff className="text-base" />
                  ) : (
                    <MdVisibility className="text-base" />
                  )}
                </button>
              </div>
            </div>
            {shopDataError.password && (
              <div className="mt-1.5 text-red-600 text-xs font-bold flex items-center gap-1.5">
                <MdErrorOutline className="text-sm shrink-0" />
                <span>{shopDataError?.password}</span>
              </div>
            )}

            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                defaultChecked
                id="agreedToTerms"
                className="w-4 h-4 rounded cursor-pointer accent-[var(--color-primary)]"
              />
              <label
                htmlFor="agreedToTerms"
                className="text-xs cursor-pointer"
                style={{ color: "var(--color-text-muted)" }}
              >
                I agree to the FreshMart Partner Terms & Organic Quality
                Guidelines.
              </label>
            </div>

            <button
              type="button"
              onClick={() => alert("Registered Partner Account Successfully!")}
              className="py-3 w-full rounded-xl font-bold text-xs shadow-md flex items-center justify-center gap-1.5 cursor-pointer transition-all hover:opacity-90"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-text-inverse)",
              }}
            >
              <span>Complete Sign Up</span>
              <MdCheckCircle className="text-base" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
