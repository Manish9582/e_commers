import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FiPackage,
  FiTruck,
  FiMapPin,
  FiCheckCircle,
  FiClock,
  FiPhone,
  FiArrowLeft,
  FiSearch,
} from "react-icons/fi";
import { MdOutlineGrass } from "react-icons/md";

// Static Display Data
const ORDER = {
  id: "FM-97104",
  placedAt: "Today, 10:15 AM",
  estimatedDelivery: "11:45 AM (In 25 mins)",
  currentStep: 3, // 1: Packed, 2: Verified, 3: Out for Delivery, 4: Delivered
  partnerHub: "Bandra Organic Hub (1.2 km away)",
  deliveryAgent: {
    name: "Ramesh Kumar",
    phone: "+91 98765 43210",
    rating: "4.9 ★",
  },
  deliveryAddress: {
    name: "Ananya Sharma",
    addressLine: "Flat 402, Sunshine Heights, Pali Hill, Bandra West",
    cityPin: "Mumbai, Maharashtra - 400050",
  },
  items: [
    {
      id: "item-1",
      name: "Ratnagiri GI Alphonso Mangoes",
      variant: "Handpicked Premium",
      quantity: 1,
      price: 799,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB-et87BYm9Z0pKhm-9cOhXTHW8F9kRlEuBfYDmGS3xaN-20k1L4TUcpIDNYBH4kxJPDQi-BrlZmGchE2IAgXFkgV2w58SmZ2LZs-fiPeD_bmDKPHLTavWFlkTrOXJ9eb0FmpUFIPzpNC9hwhfCVhp2l9CLKeTLmZlFmxGAB_ZdWaMWa1uis5zHZtq2RQx_W3J5fJwpdtuL5thlomgQrUjh_YkFmC-_Q00T2HPB1Do",
    },
    {
      id: "item-2",
      name: "Hydroponic Baby Spinach & Kale",
      variant: "Pre-washed Crisp Pack",
      quantity: 2,
      price: 170,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB_BZbf_1bcKHk25xe-qoSqkJcH50ylPqkIpTVk_r_GHBHc9xrastDdD9RrFaajL3IU3I4L8dPywk1lcoSFwgSKAs-Nmb0S50lnZQ3F8-3KdVTtBzPVh7bJW_vxjudDjlqgRmEUYJ3c6qq3V6hD5XmkJCs6JFQ-Xvw384CguG220zg-Zbca9OjOmt14at8sIBUD_FvzhI8Y4k2kLoT-6YJoDRdQUf1OFF8hFPChMPQ",
    },
  ],
  billing: {
    subtotal: 969,
    discount: 100,
    deliveryFee: 0,
    grandTotal: 917,
  },
};

const TRACKING_STEPS = [
  { step: 1, title: "Harvested & Packed", desc: "Packed fresh at Bandra Hub" },
  { step: 2, title: "Quality Verified", desc: "Zero pesticide tested" },
  { step: 3, title: "Out for Delivery", desc: "Ramesh is on the way" },
  { step: 4, title: "Delivered", desc: "At your doorstep" },
];

const OrderStatus = () => {
  return (
    <div
      className="max-w-6xl mx-auto px-6 py-8 w-full"
      style={{
        backgroundColor: "var(--color-surface-base)",
        color: "var(--color-text-body)",
      }}
    >
      {/* Top Header & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <Link
            href="#"
            className="inline-flex items-center gap-1.5 text-xs font-semibold mb-2 hover:underline"
            style={{ color: "var(--color-primary)" }}
          >
            <FiArrowLeft /> Back to Orders History
          </Link>
          <h1
            className="text-3xl font-bold"
            style={{ color: "var(--color-text-main)" }}
          >
            Track Live Harvest Order
          </h1>
        </div>

        {/* Static Search Display */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <FiSearch
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm"
              style={{ color: "var(--color-text-muted)" }}
            />
            <input
              type="text"
              readOnly
              defaultValue="FM-97104"
              placeholder="Search Order ID"
              className="pl-9 pr-4 py-2.5 rounded-xl text-xs font-mono uppercase border focus:outline-none w-64"
              style={{
                backgroundColor: "var(--color-surface-low)",
                borderColor: "var(--color-border)",
                color: "var(--color-text-main)",
              }}
            />
          </div>
          <button
            type="button"
            className="px-4 py-2.5 rounded-xl text-xs font-semibold shadow-sm"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-text-inverse)",
            }}
          >
            Track
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Live Status & Stepper */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Progress Card */}
          <div
            className="p-6 md:p-8 rounded-3xl shadow-sm border"
            style={{
              backgroundColor: "var(--color-surface-low)",
              borderColor: "var(--color-border-subtle)",
            }}
          >
            <div
              className="flex flex-wrap items-center justify-between gap-4 border-b pb-6 mb-8"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div>
                <span
                  className="text-xs font-semibold block uppercase tracking-wider mb-1"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Current Status • Order #{ORDER.id}
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-amber-500 animate-ping"></span>
                  <h2
                    className="text-2xl font-bold"
                    style={{ color: "var(--color-text-main)" }}
                  >
                    Out for Delivery
                  </h2>
                </div>
              </div>

              <div
                className="px-4 py-3 rounded-2xl flex items-center gap-3 border"
                style={{
                  backgroundColor: "var(--color-primary-container)",
                  borderColor: "var(--color-border)",
                  color: "var(--color-on-primary-container)",
                }}
              >
                <FiClock className="text-2xl shrink-0" />
                <div>
                  <span className="text-xs block opacity-80 font-medium">
                    Estimated Arrival
                  </span>
                  <span className="text-sm font-extrabold">
                    {ORDER.estimatedDelivery}
                  </span>
                </div>
              </div>
            </div>

            {/* Stepper Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
              {TRACKING_STEPS.map((step) => {
                const isCompleted = step.step <= ORDER.currentStep;
                const isCurrent = step.step === ORDER.currentStep;

                return (
                  <div
                    key={step.step}
                    className="flex flex-col items-center text-center relative z-10"
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm mb-3 ${
                        isCompleted ? "shadow-md scale-105" : "opacity-40"
                      }`}
                      style={{
                        backgroundColor: isCompleted
                          ? "var(--color-primary)"
                          : "var(--color-surface-container)",
                        color: isCompleted
                          ? "var(--color-text-inverse)"
                          : "var(--color-text-muted)",
                      }}
                    >
                      {isCompleted ? (
                        <FiCheckCircle className="text-xl" />
                      ) : (
                        step.step
                      )}
                    </div>
                    <h4
                      className="text-xs font-bold mb-0.5"
                      style={{
                        color: isCurrent
                          ? "var(--color-primary)"
                          : "var(--color-text-main)",
                      }}
                    >
                      {step.title}
                    </h4>
                    <p
                      className="text-[11px] leading-tight"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Delivery Agent & Hub Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Delivery Partner */}
            <div
              className="p-5 rounded-2xl border flex items-center justify-between shadow-sm"
              style={{
                backgroundColor: "var(--color-surface-low)",
                borderColor: "var(--color-border-subtle)",
              }}
            >
              <div className="flex items-center gap-3.5">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-inner shrink-0"
                  style={{
                    backgroundColor: "var(--color-primary-container)",
                    color: "var(--color-on-primary-container)",
                  }}
                >
                  <FiTruck />
                </div>
                <div>
                  <span
                    className="text-[11px] font-semibold block uppercase tracking-wider"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Delivery Partner
                  </span>
                  <h3
                    className="text-sm font-bold"
                    style={{ color: "var(--color-text-main)" }}
                  >
                    {ORDER.deliveryAgent.name}
                  </h3>
                  <p className="text-xs text-amber-600 font-semibold">
                    {ORDER.deliveryAgent.rating}
                  </p>
                </div>
              </div>

              <a
                href={`tel:${ORDER.deliveryAgent.phone}`}
                className="p-3 rounded-xl shadow-sm"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "var(--color-text-inverse)",
                }}
                title="Call Agent"
              >
                <FiPhone className="text-base" />
              </a>
            </div>

            {/* Hub Details */}
            <div
              className="p-5 rounded-2xl border flex items-center gap-3.5 shadow-sm"
              style={{
                backgroundColor: "var(--color-surface-low)",
                borderColor: "var(--color-border-subtle)",
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-inner shrink-0"
                style={{
                  backgroundColor: "var(--color-surface-container)",
                  color: "var(--color-primary)",
                }}
              >
                <MdOutlineGrass />
              </div>
              <div>
                <span
                  className="text-[11px] font-semibold block uppercase tracking-wider"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Dispatched From
                </span>
                <h3
                  className="text-sm font-bold"
                  style={{ color: "var(--color-text-main)" }}
                >
                  {ORDER.partnerHub}
                </h3>
                <p
                  className="text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  100% Cold-Chain Maintained
                </p>
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div
            className="p-5 rounded-2xl border flex items-start gap-3.5 shadow-sm"
            style={{
              backgroundColor: "var(--color-surface-low)",
              borderColor: "var(--color-border-subtle)",
            }}
          >
            <FiMapPin
              className="text-xl shrink-0 mt-0.5"
              style={{ color: "var(--color-primary)" }}
            />
            <div>
              <span
                className="text-xs font-semibold block uppercase tracking-wider mb-0.5"
                style={{ color: "var(--color-text-muted)" }}
              >
                Delivering To:
              </span>
              <p
                className="text-sm font-bold"
                style={{ color: "var(--color-text-main)" }}
              >
                {ORDER.deliveryAddress.name}
              </p>
              <p
                className="text-xs leading-relaxed mt-0.5"
                style={{ color: "var(--color-text-body)" }}
              >
                {ORDER.deliveryAddress.addressLine},{" "}
                {ORDER.deliveryAddress.cityPin}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Items Included */}
        <div
          className="lg:col-span-4 p-6 rounded-3xl shadow-sm border sticky top-28"
          style={{
            backgroundColor: "var(--color-surface-low)",
            borderColor: "var(--color-border-subtle)",
          }}
        >
          <div
            className="flex items-center justify-between mb-4 border-b pb-3"
            style={{ borderColor: "var(--color-border)" }}
          >
            <h3
              className="text-base font-bold"
              style={{ color: "var(--color-text-main)" }}
            >
              Items in This Order
            </h3>
            <span
              className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
              style={{
                backgroundColor: "var(--color-primary-container)",
                color: "var(--color-on-primary-container)",
              }}
            >
              {ORDER.items.length} Items
            </span>
          </div>

          {/* Items Breakdown */}
          <div className="flex flex-col gap-3.5 mb-6">
            {ORDER.items.map((prod) => (
              <div
                key={prod.id}
                className="flex items-center gap-3 p-2.5 rounded-xl border"
                style={{
                  backgroundColor: "var(--color-surface-container)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-gray-200">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    sizes="56px"
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h4
                    className="text-xs font-bold truncate"
                    style={{ color: "var(--color-text-main)" }}
                  >
                    {prod.name}
                  </h4>
                  <p
                    className="text-[11px]"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {prod.variant} • Qty: {prod.quantity}
                  </p>
                  <span
                    className="text-xs font-extrabold block mt-0.5"
                    style={{ color: "var(--color-primary)" }}
                  >
                    ₹{prod.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Payment Summary */}
          <div
            className="pt-4 border-t flex flex-col gap-2 text-xs"
            style={{ borderColor: "var(--color-border)" }}
          >
            <div
              className="flex justify-between"
              style={{ color: "var(--color-text-muted)" }}
            >
              <span>Subtotal</span>
              <span className="font-semibold text-gray-900">
                ₹{ORDER.billing.subtotal}
              </span>
            </div>
            <div className="flex justify-between text-emerald-600 font-semibold">
              <span>Harvest Savings</span>
              <span>-₹{ORDER.billing.discount}</span>
            </div>
            <div
              className="flex justify-between"
              style={{ color: "var(--color-text-muted)" }}
            >
              <span>Delivery Fee</span>
              <span className="font-semibold text-gray-900">FREE</span>
            </div>
            <div
              className="flex justify-between pt-2 border-t font-bold text-sm"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-text-main)",
              }}
            >
              <span>Total Paid</span>
              <span style={{ color: "var(--color-primary)" }}>
                ₹{ORDER.billing.grandTotal}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
