"use client";

import React from "react";
import {
  FiPackage,
  FiRotateCcw,
  FiCheckCircle,
  FiTruck,
  FiMapPin,
} from "react-icons/fi";

// Enhanced Order History Mock Data with Address & Detailed Statuses
const PREVIOUS_ORDERS = [
  {
    id: "FM-98421",
    date: "12 Oct 2026",
    status: "Delivered",
    statusCode: "delivered",
    totalAmount: 735,
    itemsSummary: "Ratnagiri Alphonso Mangoes (1kg), A2 Bilona Ghee (500ml)",
    address:
      "Flat 402, Sunshine Heights, Pali Hill, Bandra West, Mumbai - 400050",
  },
  {
    id: "FM-97104",
    date: "18 Oct 2026",
    status: "Out for Delivery",
    statusCode: "in_transit",
    totalAmount: 480,
    itemsSummary: "Hydroponic Crispy Greens (2 packs), Hass Avocados (500g)",
    address:
      "Flat 402, Sunshine Heights, Pali Hill, Bandra West, Mumbai - 400050",
  },
  {
    id: "FM-95230",
    date: "25 Sep 2026",
    status: "Delivered",
    statusCode: "delivered",
    totalAmount: 620,
    itemsSummary: "Baby Spinach Leaves (3 packs), Organic Honey (250g)",
    address: "Office 12B, Trade Center, BKC, Mumbai - 400051",
  },
];

const Order = () => {
  return (
    <div
      className="max-w-5xl mx-auto px-6 py-8 w-full"
      style={{
        backgroundColor: "var(--color-surface-base)",
        color: "var(--color-text-body)",
      }}
    >
      {/* Header */}
      <div className="mb-8">
        <h1
          className="text-3xl lg:text-4xl font-bold mb-2"
          style={{ color: "var(--color-text-main)" }}
        >
          My Order History
        </h1>
        <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
          Review your past farm deliveries, track live order status, and view
          delivery addresses.
        </p>
      </div>

      {/* Orders List */}
      <div className="flex flex-col gap-5">
        {PREVIOUS_ORDERS.length > 0 ? (
          PREVIOUS_ORDERS.map((order) => (
            <div
              key={order.id}
              className="p-6 rounded-2xl shadow-sm flex flex-col gap-4 transition-all hover:shadow-md"
              style={{
                backgroundColor: "var(--color-surface-low)",
                border: "1px solid var(--color-border-subtle)",
              }}
            >
              {/* Top Row: Order Header & Status */}
              <div
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4"
                style={{ borderColor: "var(--color-border-subtle)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
                    style={{
                      backgroundColor: "var(--color-primary-container)",
                      color: "var(--color-on-primary-container)",
                    }}
                  >
                    <FiPackage className="text-xl" />
                  </div>
                  <div>
                    <h3
                      className="text-base font-bold"
                      style={{ color: "var(--color-text-main)" }}
                    >
                      Order #{order.id}
                    </h3>
                    <p
                      className="text-xs"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Placed on {order.date}
                    </p>
                  </div>
                </div>

                {/* Status Badge */}
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 w-fit"
                  style={{
                    backgroundColor:
                      order.statusCode === "delivered"
                        ? "var(--color-primary-container)"
                        : "#fef3c7",
                    color:
                      order.statusCode === "delivered"
                        ? "var(--color-on-primary-container)"
                        : "#92400e",
                  }}
                >
                  {order.statusCode === "delivered" ? (
                    <FiCheckCircle className="text-sm" />
                  ) : (
                    <FiTruck className="text-sm" />
                  )}
                  <span>{order.status}</span>
                </span>
              </div>

              {/* Middle Section: Items Summary & Delivery Address */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 my-1">
                <div className="md:col-span-7">
                  <span
                    className="text-xs font-semibold block uppercase tracking-wider mb-1"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Items Ordered:
                  </span>
                  <p
                    className="text-sm font-medium leading-relaxed"
                    style={{ color: "var(--color-text-main)" }}
                  >
                    {order.itemsSummary}
                  </p>
                </div>

                <div className="md:col-span-5">
                  <span
                    className="text-xs font-semibold block uppercase tracking-wider mb-1"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Delivered To:
                  </span>
                  <div className="flex items-start gap-1.5">
                    <FiMapPin
                      className="text-sm shrink-0 mt-0.5"
                      style={{ color: "var(--color-primary)" }}
                    />
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "var(--color-text-body)" }}
                    >
                      {order.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Total & Reorder Action */}
              <div
                className="flex items-center justify-between border-t pt-4 mt-1"
                style={{ borderColor: "var(--color-border-subtle)" }}
              >
                <div>
                  <span
                    className="text-xs block"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Total Amount Paid
                  </span>
                  <span
                    className="text-lg font-extrabold"
                    style={{ color: "var(--color-text-main)" }}
                  >
                    ₹{order.totalAmount}
                  </span>
                </div>

                <button
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm hover:opacity-90 cursor-pointer"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    color: "var(--color-primary)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <FiRotateCcw className="text-sm" />
                  <span>Reorder Items</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-16">
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              No past orders found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
