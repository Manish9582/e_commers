"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  FiChevronRight,
  FiMinus,
  FiPlus,
  FiTrash2,
  FiArrowRight,
} from "react-icons/fi";
import {
  MdLocalShipping,
  MdSavings,
  MdVerified,
  MdEco,
  MdSchedule,
  MdShoppingBasket,
} from "react-icons/md";
import { HiCheckCircle } from "react-icons/hi2";

// Initial Cart Mock Data
const INITIAL_CART_ITEMS = [
  {
    id: "item-1",
    name: "Organic Alphonso Mangoes",
    variant: "Whole Fresh",
    tag: "Organic",
    weight: "1 kg",
    unitPrice: 120,
    priceLabel: "₹120 / kg",
    quantity: 2,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-et87BYm9Z0pKhm-9cOhXTHW8F9kRlEuBfYDmGS3xaN-20k1L4TUcpIDNYBH4kxJPDQi-BrlZmGchE2IAgXFkgV2w58SmZ2LZs-fiPeD_bmDKPHLTavWFlkTrOXJ9eb0FmpUFIPzpNC9hwhfCVhp2l9CLKeTLmZlFmxGAB_ZdWaMWa1uis5zHZtq2RQx_W3J5fJwpdtuL5thlomgQrUjh_YkFmC-_Q00T2HPB1Do",
    alt: "Organic Alphonso Mangoes",
  },
  {
    id: "item-2",
    name: "Hass Avocados",
    variant: "Ripe & Ready",
    tag: "Farm Fresh",
    weight: "500g",
    unitPrice: 85,
    priceLabel: "₹85 / 500g",
    quantity: 1,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBga6zIGONKIEA7KybCIJdP9Gp7dli64xHEdp4EKGKeHYDOk6ErdftpNKv0wfpgZZASpLTcriWEkFxCq-984e7C3AhxFR5hei7f6w_VS4qsk0k1YU7-sAdBaCeG-v0i3fpqqS3b-zsEuNfRwActrv8mCjO5jtDV6fWDWB7UNLUcGkxQjiYTIraFMQlnZJ9ZUNsRouFM5_WbJng4UAnv77lRp4Nr7iHdMWZ9PwbNdE4",
    alt: "Fresh organic Hass avocados",
  },
  {
    id: "item-3",
    name: "Baby Spinach Leaves",
    variant: "Pre-washed & Cut",
    tag: "Hydroponic",
    weight: "250g",
    unitPrice: 45,
    priceLabel: "₹45 / pack",
    quantity: 3,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_BZbf_1bcKHk25xe-qoSqkJcH50ylPqkIpTVk_r_GHBHc9xrastDdD9RrFaajL3IU3I4L8dPywk1lcoSFwgSKAs-Nmb0S50lnZQ3F8-3KdVTtBzPVh7bJW_vxjudDjlqgRmEUYJ3c6qq3V6hD5XmkJCs6JFQ-Xvw384CguG220zg-Zbca9OjOmt14at8sIBUD_FvzhI8Y4k2kLoT-6YJoDRdQUf1OFF8hFPChMPQ",
    alt: "Fresh organic baby spinach leaves",
  },
];

const Order = () => {
  const [cartItems, setCartItems] = useState(INITIAL_CART_ITEMS);
  const [couponCode, setCouponCode] = useState("FRESH20");
  const [isCouponApplied, setIsCouponApplied] = useState(true);

  // Dynamic Quantity Updates
  const updateQuantity = (id: string, delta: number) => {
    setCartItems(
      (prev) =>
        prev
          .map((item) => {
            if (item.id === id) {
              const newQty = item.quantity + delta;
              return newQty > 0 ? { ...item, quantity: newQty } : null;
            }
            return item;
          })
          .filter(Boolean) as typeof INITIAL_CART_ITEMS,
    );
  };

  // Remove Item
  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0,
  );
  const discount = isCouponApplied ? Math.round(subtotal * 0.2) : 0;
  const deliveryFee = subtotal > 499 || subtotal === 0 ? 0 : 40;
  const tax = Math.round(subtotal * 0.05);
  const grandTotal = subtotal - discount + deliveryFee + tax;

  return (
    <div
      className="max-w-7xl mx-auto px-6 py-8 w-full"
      style={{
        backgroundColor: "var(--color-surface-base)",
        color: "var(--color-text-body)",
      }}
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1
            className="text-3xl lg:text-4xl font-bold"
            style={{ color: "var(--color-text-main)" }}
          >
            Your Harvest Cart
          </h1>
        </div>

        {/* Free Delivery Banner */}
        <div
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm shadow-sm"
          style={{
            backgroundColor: "var(--color-primary-container)",
            color: "var(--color-on-primary-container)",
          }}
        >
          <MdLocalShipping className="text-lg shrink-0" />
          <span>
            {subtotal > 499
              ? "🎉 Free delivery unlocked on this order!"
              : `Add ₹${499 - subtotal} more to unlock Free Delivery!`}
          </span>
        </div>
      </div>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Cart Items List */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center gap-5 transition-all hover:shadow-md"
                style={{
                  backgroundColor: "var(--color-surface-low)",
                  border: "1px solid var(--color-border-subtle)",
                }}
              >
                {/* Product Thumbnail */}
                <div
                  className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 border"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="96px"
                    unoptimized
                    className="object-cover"
                  />
                </div>

                {/* Details & Controls */}
                <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                        style={{
                          backgroundColor: "var(--color-primary-container)",
                          color: "var(--color-on-primary-container)",
                        }}
                      >
                        {item.tag}
                      </span>
                      <span
                        className="text-xs"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {item.weight}
                      </span>
                    </div>
                    <h3
                      className="text-base font-bold"
                      style={{ color: "var(--color-text-main)" }}
                    >
                      {item.name}
                    </h3>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Variant:{" "}
                      <span
                        className="font-medium"
                        style={{ color: "var(--color-text-main)" }}
                      >
                        {item.variant}
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-6">
                    {/* Quantity Controls */}
                    <div
                      className="flex items-center rounded-xl p-1 border shadow-inner"
                      style={{
                        backgroundColor: "var(--color-surface-container)",
                        borderColor: "var(--color-border)",
                      }}
                    >
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-[var(--color-surface-dim)]"
                        style={{ color: "var(--color-text-main)" }}
                        title="Decrease"
                      >
                        <FiMinus className="text-sm" />
                      </button>
                      <span
                        className="w-8 text-center font-bold text-sm"
                        style={{ color: "var(--color-text-main)" }}
                      >
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-[var(--color-surface-dim)]"
                        style={{ color: "var(--color-text-main)" }}
                        title="Increase"
                      >
                        <FiPlus className="text-sm" />
                      </button>
                    </div>

                    {/* Pricing */}
                    <div className="text-right">
                      <span
                        className="text-base font-bold block"
                        style={{ color: "var(--color-text-main)" }}
                      >
                        ₹{item.unitPrice * item.quantity}
                      </span>
                      <p
                        className="text-xs"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {item.priceLabel}
                      </p>
                    </div>

                    {/* Delete Item Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2.5 rounded-full transition-colors hover:bg-red-50 text-red-500"
                      title="Remove item"
                    >
                      <FiTrash2 className="text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Order Summary */}
          <div
            className="lg:col-span-4 p-6 rounded-2xl shadow-sm flex flex-col gap-6 sticky top-28"
            style={{
              backgroundColor: "var(--color-surface-low)",
              border: "1px solid var(--color-border-subtle)",
            }}
          >
            <h2
              className="text-xl font-bold"
              style={{ color: "var(--color-text-main)" }}
            >
              Order Summary
            </h2>

            <div
              className="flex flex-col gap-3 pt-4 border-t"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div className="flex justify-between text-sm">
                <span style={{ color: "var(--color-text-muted)" }}>
                  Subtotal
                </span>
                <span
                  className="font-semibold"
                  style={{ color: "var(--color-text-main)" }}
                >
                  ₹{subtotal}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span style={{ color: "var(--color-text-muted)" }}>
                  Discount (20%)
                </span>
                <span
                  className="font-semibold"
                  style={{ color: "var(--color-primary)" }}
                >
                  -₹{discount}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span style={{ color: "var(--color-text-muted)" }}>
                  Delivery Fee{" "}
                  <span className="text-xs opacity-70">(Free &gt; ₹499)</span>
                </span>
                <span
                  className="font-semibold"
                  style={{ color: "var(--color-text-main)" }}
                >
                  {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span style={{ color: "var(--color-text-muted)" }}>
                  Taxes & GST (5%)
                </span>
                <span
                  className="font-semibold"
                  style={{ color: "var(--color-text-main)" }}
                >
                  ₹{tax}
                </span>
              </div>
            </div>

            {/* Total Savings Badge */}
            <div
              className="px-4 py-3 rounded-xl flex items-center justify-between shadow-sm"
              style={{
                backgroundColor: "var(--color-primary-container)",
                color: "var(--color-on-primary-container)",
              }}
            >
              <div className="flex items-center gap-2">
                <MdSavings className="text-lg" />
                <span className="text-xs font-semibold">
                  Total Harvest Savings
                </span>
              </div>
              <span className="font-bold text-sm">₹{discount}</span>
            </div>

            {/* Grand Total */}
            <div
              className="flex justify-between items-center pt-4 border-t"
              style={{ borderColor: "var(--color-border)" }}
            >
              <span
                className="text-base font-bold"
                style={{ color: "var(--color-text-main)" }}
              >
                Grand Total
              </span>
              <span
                className="text-2xl font-extrabold"
                style={{ color: "var(--color-primary)" }}
              >
                ₹{grandTotal}
              </span>
            </div>

            {/* Checkout Button */}
            <Link
              href="#"
              className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:opacity-90 cursor-pointer"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-text-inverse)",
              }}
            >
              <span>Proceed to Checkout</span>
              <FiArrowRight className="text-base" />
            </Link>

            {/* Quality Badges Footer */}
            <div
              className="grid grid-cols-3 gap-2 pt-4 border-t text-center text-xs"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-text-muted)",
              }}
            >
              <div className="flex flex-col items-center gap-1">
                <MdVerified
                  className="text-lg"
                  style={{ color: "var(--color-primary)" }}
                />
                <span>100% Organic</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <MdEco
                  className="text-lg"
                  style={{ color: "var(--color-primary)" }}
                />
                <span>Zero Plastic</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <MdSchedule
                  className="text-lg"
                  style={{ color: "var(--color-primary)" }}
                />
                <span>Morning Delivery</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Empty Cart State */
        <div className="flex flex-col items-center justify-center text-center py-16 px-4 max-w-lg mx-auto">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-sm"
            style={{
              backgroundColor: "var(--color-surface-low)",
              color: "var(--color-text-muted)",
            }}
          >
            <MdShoppingBasket className="text-5xl" />
          </div>
          <h2
            className="text-2xl font-bold mb-2"
            style={{ color: "var(--color-text-main)" }}
          >
            Your cart is empty
          </h2>
          <p
            className="text-sm mb-8 leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            Looks like you have not added any farm-fresh goodness to your cart
            yet. Explore our seasonal harvests today!
          </p>
          <button
            onClick={() => setCartItems(INITIAL_CART_ITEMS)}
            className="px-8 py-3.5 rounded-xl text-sm font-semibold transition-all shadow-md hover:opacity-90 cursor-pointer"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-text-inverse)",
            }}
          >
            Start Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Order;
