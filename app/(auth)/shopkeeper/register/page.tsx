"use client";

import React, { useState } from "react";
import {
  MdStorefront,
  MdPerson,
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdLock,
  MdCheckCircle,
  MdArrowForward,
  MdArrowBack,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";

export default function ShopKeeperSign() {
  const [step, setStep] = useState<1 | 2>(1);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 flex items-center justify-center">
      <div
        className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl border"
        style={{
          backgroundColor: "var(--color-surface-low)",
          borderColor: "var(--color-border)",
        }}
      >
        {/* Left Column: Brand Hero & Value Proposition (5 Cols) */}
        <div
          className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden text-white"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          {/* Ambient Glow Effects */}
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

            {/* Feature Checklist */}
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

        {/* Right Column: Multi-step Form UI (7 Cols) */}
        <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
          {/* Header Step Progress */}
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
              <p
                className="text-xs mt-0.5"
                style={{ color: "var(--color-text-muted)" }}
              >
                Step {step} of 2 •{" "}
                {step === 1
                  ? "Personal Account Details"
                  : "Store & Location Info"}
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              <span
                className={`w-3 h-3 rounded-full transition-all ${
                  step === 1 ? "bg-emerald-600 scale-110" : "bg-gray-300"
                }`}
              />
              <span
                className={`w-3 h-3 rounded-full transition-all ${
                  step === 2 ? "bg-emerald-600 scale-110" : "bg-gray-300"
                }`}
              />
            </div>
          </div>

          {/* STEP 1: Personal Credentials & Password */}
          {step === 1 && (
            <div className="space-y-4">
              {/* Name */}
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
                    defaultValue="Manish Sharma"
                    placeholder="e.g. Manish Sharma"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none transition-all shadow-2xs"
                    style={{
                      backgroundColor: "var(--color-surface-container)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-main)",
                    }}
                  />
                </div>
              </div>

              {/* Email */}
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
                    defaultValue="manish@freshmart.com"
                    placeholder="e.g. manish@freshmart.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none transition-all shadow-2xs"
                    style={{
                      backgroundColor: "var(--color-surface-container)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-main)",
                    }}
                  />
                </div>
              </div>

              {/* Password */}
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
                    defaultValue="FreshMartPass2026!"
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

              {/* Phone */}
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
                    defaultValue="+91 98200 12345"
                    placeholder="+91 98200 12345"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none transition-all shadow-2xs"
                    style={{
                      backgroundColor: "var(--color-surface-container)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-main)",
                    }}
                  />
                </div>
              </div>

              {/* Continue to Step 2 Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full py-3 rounded-xl font-bold text-xs shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all hover:opacity-90"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    color: "var(--color-text-inverse)",
                  }}
                >
                  <span>Continue to Store Details</span>
                  <MdArrowForward className="text-base" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Shop & Address Details */}
          {step === 2 && (
            <div className="space-y-4">
              {/* Shop Name */}
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
                    defaultValue="Bandra Organic Hub"
                    placeholder="e.g. Bandra Organic Hub"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none transition-all shadow-2xs"
                    style={{
                      backgroundColor: "var(--color-surface-container)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-main)",
                    }}
                  />
                </div>
              </div>

              {/* Shop Address */}
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
                    defaultValue="Bungalow 42, Pali Hill, Bandra West"
                    placeholder="Street, Landmark, Area..."
                    className="w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm border focus:outline-none transition-all shadow-2xs"
                    style={{
                      backgroundColor: "var(--color-surface-container)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-main)",
                    }}
                  />
                </div>
              </div>

              {/* City, State, Pincode Grid */}
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
                    defaultValue="Mumbai"
                    className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm border focus:outline-none shadow-2xs"
                    style={{
                      backgroundColor: "var(--color-surface-container)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-main)",
                    }}
                  />
                </div>

                <div className="space-y-1">
                  <label
                    className="block text-xs font-bold"
                    style={{ color: "var(--color-text-main)" }}
                  >
                    State
                  </label>
                  <input
                    type="text"
                    defaultValue="Maharashtra"
                    className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm border focus:outline-none shadow-2xs"
                    style={{
                      backgroundColor: "var(--color-surface-container)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-main)",
                    }}
                  />
                </div>

                <div className="space-y-1">
                  <label
                    className="block text-xs font-bold"
                    style={{ color: "var(--color-text-main)" }}
                  >
                    Pincode
                  </label>
                  <input
                    type="text"
                    defaultValue="400050"
                    className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm border focus:outline-none shadow-2xs"
                    style={{
                      backgroundColor: "var(--color-surface-container)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-main)",
                    }}
                  />
                </div>
              </div>

              {/* Terms Checkbox */}
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

              {/* Step 2 Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="py-3 rounded-xl border font-bold text-xs shadow-2xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer hover:bg-[var(--color-surface-container)]"
                  style={{
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-main)",
                  }}
                >
                  <MdArrowBack className="text-base" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    alert("Registered Partner Account Successfully!")
                  }
                  className="py-3 rounded-xl font-bold text-xs shadow-md flex items-center justify-center gap-1.5 cursor-pointer transition-all hover:opacity-90"
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
          )}
        </div>
      </div>
    </div>
  );
}
