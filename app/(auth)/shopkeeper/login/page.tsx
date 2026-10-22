"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  MdStorefront,
  MdEmail,
  MdLock,
  MdArrowForward,
  MdVisibility,
  MdVisibilityOff,
  MdCheckCircle,
  MdHelpOutline,
} from "react-icons/md";

export default function ShopKeeperLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 flex items-center justify-center">
      <div
        className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl border"
        style={{
          backgroundColor: "var(--color-surface-low)",
          borderColor: "var(--color-border)",
        }}
      >
        {/* Left Column: Brand Hero & Partner Ecosystem (5 Cols) */}
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
                Welcome Back
              </span>
              <h2 className="text-2xl sm:text-3xl font-black leading-tight text-white">
                Manage Your Store Dashboard
              </h2>
              <p className="text-xs sm:text-sm mt-2 text-emerald-100/90 leading-relaxed">
                Log in to review live harvest orders, dispatch delivery riders,
                update inventory prices, and track daily payout settlements.
              </p>
            </div>

            {/* Quick Metrics Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs font-bold text-white">
                <MdCheckCircle className="text-lg text-emerald-300 shrink-0" />
                <span>Real-Time Order Notifications Enabled</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-white">
                <MdCheckCircle className="text-lg text-emerald-300 shrink-0" />
                <span>Instant Bank Payout Tracking</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-white">
                <MdCheckCircle className="text-lg text-emerald-300 shrink-0" />
                <span>Live Customer Feedback & Ratings</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-8 pt-6 border-t border-white/20 flex items-center justify-between">
            <div>
              <p className="text-xs italic text-emerald-50">
                FreshMart makes local shop management completely effortless.
              </p>
              <p className="text-[11px] font-bold text-emerald-200 mt-0.5">
                — Bandra Organic Hub
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Partner Login Form (7 Cols) */}
        <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
          {/* Header Section */}
          <div
            className="pb-4 border-b"
            style={{ borderColor: "var(--color-border)" }}
          >
            <h1
              className="text-2xl font-bold tracking-tight"
              style={{ color: "var(--color-text-main)" }}
            >
              Partner Portal Login
            </h1>
            <p
              className="text-xs mt-1"
              style={{ color: "var(--color-text-muted)" }}
            >
              Enter your registered shopkeeper email and password to access your
              dashboard.
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-4 my-auto">
            {/* Email Address */}
            <div className="space-y-1">
              <label
                className="block text-xs font-bold"
                style={{ color: "var(--color-text-main)" }}
              >
                Registered Email Address *
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
              <div className="flex items-center justify-between">
                <label
                  className="block text-xs font-bold"
                  style={{ color: "var(--color-text-main)" }}
                >
                  Account Password *
                </label>
                <button
                  type="button"
                  onClick={() =>
                    alert("Password reset link sent to your email.")
                  }
                  className="text-[11px] font-bold hover:underline cursor-pointer"
                  style={{ color: "var(--color-primary)" }}
                >
                  Forgot Password?
                </button>
              </div>

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

            {/* Remember Me Toggle */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded cursor-pointer accent-[var(--color-primary)]"
                />
                <span
                  className="text-xs font-semibold"
                  style={{ color: "var(--color-text-main)" }}
                >
                  Keep me signed in on this device
                </span>
              </label>
            </div>

            {/* Login CTA Button */}
            <div className="pt-3">
              <button
                type="button"
                onClick={() =>
                  alert("Logged into Partner Admin Dashboard Successfully!")
                }
                className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all hover:opacity-90 active:scale-98"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "var(--color-text-inverse)",
                }}
              >
                <span>Login to Dashboard</span>
                <MdArrowForward className="text-lg" />
              </button>
            </div>
          </div>

          {/* Bottom Footer: Sign-Up Link & Partner Support */}
          <div
            className="pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
            style={{ borderColor: "var(--color-border)" }}
          >
            <p style={{ color: "var(--color-text-muted)" }}>
              Donot have a partner account yet?{" "}
              <Link
                href={"/shopkeeper/register"}
                className="font-bold hover:underline cursor-pointer"
                style={{ color: "var(--color-primary)" }}
              >
                Register New Shop
              </Link>
            </p>

            <button
              type="button"
              className="flex items-center gap-1 font-semibold hover:underline cursor-pointer"
              style={{ color: "var(--color-text-muted)" }}
            >
              <MdHelpOutline className="text-sm" />
              <span>Partner Support</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
