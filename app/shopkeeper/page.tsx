"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  MdShoppingBag,
  MdPayments,
  MdPendingActions,
  MdInventory,
} from "react-icons/md";

const TOP_PRODUCTS = [
  {
    id: 1,
    name: "Organic Alphonso Mangoes",
    unit: "1 kg pack",
    price: "₹12,450",
    salesCount: "142 sold",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5uuSEUuu5izTibAEd6sb8ytOSMymkAwG2j6YNQKw4pAcRXnbJfWogNQ2uyMGES87-fXFJO6HqGMuUpUKe-hzGo9_ueWfH5QhaRKewg3L9GFALtMuTYIfCmNsFrrLGBShcZjABcBgTlAKtpGp3-u0B6EEUqk4XY5QOMuPW-rB3ztJvITLNFft4nypuDWvG9Rsc9nmvha4x3qu7iIdpxF9BC1b9zjucmIqd-oGdi0I",
    alt: "Fresh organic Alphonso mangoes",
  },
  {
    id: 2,
    name: "Cold-Pressed Sesame Oil",
    unit: "500 ml bottle",
    price: "₹9,800",
    salesCount: "98 sold",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTr39p5X2BVSuitC4ftIMce7Zx48d5HMdPgqV2cEDtLWY2P5CnUPZlHObf627qQ1I_NxWBV7mcT_CrxyChukouJJF5s9aGvE7EaQDig9YOu7vl1eNSxeOCv6v0mwQOG_woXXneFZaYlFRmX1wwHPcETPmAyNNFMti1k0GrKYkk0kdyNpMJ3m0VvQej4KIBnHBlaS2ngISg36SqSr9HFQr6B0GgEl29CoSNK6cahSw",
    alt: "Glass bottle of cold-pressed sesame oil",
  },
  {
    id: 3,
    name: "Organic Hass Avocados",
    unit: "500g pack",
    price: "₹7,350",
    salesCount: "85 sold",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAaqGTgn4pLwpMQUX4wAzH3_d4DBR19cpeK29hug7dv7je-J_bRFDV79UpQTJdnY_0wukTCheJ3ok55ifOzf_FUl9LmViu0Q8LMlwXn5E5sEnw5r8-svbWU2txUNImJ1UupdyGbDAXFMNLwRLojI1yXsSUshh3UaygJfQzNX-SyeDcdpMd-tQa5-8LcFQ8SAc8JZrvHGoU25rEzDFwLqGsiQwlKZ_57Hku6dpJLW5g",
    alt: "Fresh organic Hass avocados",
  },
  {
    id: 4,
    name: "Organic Baby Spinach",
    unit: "200g pack",
    price: "₹4,200",
    salesCount: "70 sold",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGrzFAFg9sgvS02Y7ydnjtfcsPJEtBdMMR7YXmoOEW8zCjejOjp6qB6RR3LcLvaM8Ud6BFtO0fabp4ZOf6RK3c4i7lzKAx0zjSvX5K6-0k2cI69M2V7VBO-BdI62ZWEZMxvk45G1759pPsdtL4Il29Oxo1keSKW35BpjlkasUNm7d6_-x2MwXdG84UwnSAJZ4fX7kLZikLkFbcuAhtUZX9tajtt6JEHI6kpZNQSGY",
    alt: "Organic baby spinach leaves",
  },
];

const RECENT_ORDERS = [
  {
    id: "BO-8492",
    customer: "Ananya Sharma",
    initial: "A",
    items: "3 items",
    amount: "₹1,240",
    status: "Delivered",
    time: "10 mins ago",
    statusBg: "bg-emerald-100 text-emerald-800",
  },
  {
    id: "BO-8491",
    customer: "Rahul Merchant",
    initial: "R",
    items: "5 items",
    amount: "₹2,850",
    status: "Preparing",
    time: "25 mins ago",
    statusBg: "bg-amber-100 text-amber-800",
  },
  {
    id: "BO-8490",
    customer: "Natasha D'Souza",
    initial: "N",
    items: "2 items",
    amount: "₹890",
    status: "On the way",
    time: "40 mins ago",
    statusBg: "bg-blue-100 text-blue-800",
  },
  {
    id: "BO-8489",
    customer: "Kabir Bedi",
    initial: "K",
    items: "4 items",
    amount: "₹1,650",
    status: "Delivered",
    time: "1 hr ago",
    statusBg: "bg-emerald-100 text-emerald-800",
  },
];

const ShopkeeperHome = () => {
  return (
    <div className="space-y-8 p-6">
      {/* 1. TOP METRICS / STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Today's Orders */}
        <div
          className="rounded-2xl p-6 shadow-xs border transition-all hover:shadow-md flex flex-col justify-between"
          style={{
            backgroundColor: "var(--color-surface-low)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: "var(--color-text-muted)" }}
            >
              Todays Orders
            </span>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
              style={{
                backgroundColor: "var(--color-primary-container)",
                color: "var(--color-on-primary-container)",
              }}
            >
              <MdShoppingBag />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span
              className="text-3xl font-black"
              style={{ color: "var(--color-text-main)" }}
            >
              42
            </span>
            <span className="text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full">
              +12% vs yesterday
            </span>
          </div>
        </div>

        {/* Today's Revenue */}
        <div
          className="rounded-2xl p-6 shadow-xs border transition-all hover:shadow-md flex flex-col justify-between"
          style={{
            backgroundColor: "var(--color-surface-low)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: "var(--color-text-muted)" }}
            >
              Todays Revenue
            </span>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
              style={{
                backgroundColor: "var(--color-primary-container)",
                color: "var(--color-on-primary-container)",
              }}
            >
              <MdPayments />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span
              className="text-3xl font-black"
              style={{ color: "var(--color-text-main)" }}
            >
              ₹18,450
            </span>
            <span className="text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full">
              +8.4%
            </span>
          </div>
        </div>

        {/* Pending Orders */}
        <div
          className="rounded-2xl p-6 shadow-xs border transition-all hover:shadow-md flex flex-col justify-between"
          style={{
            backgroundColor: "var(--color-surface-low)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: "var(--color-text-muted)" }}
            >
              Pending Orders
            </span>
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xl">
              <MdPendingActions />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span
              className="text-3xl font-black"
              style={{ color: "var(--color-text-main)" }}
            >
              5
            </span>
            <span className="text-[11px] font-bold bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full">
              Requires Action
            </span>
          </div>
        </div>

        {/* Low Stock Alerts */}
        <div
          className="rounded-2xl p-6 shadow-xs border transition-all hover:shadow-md flex flex-col justify-between"
          style={{
            backgroundColor: "var(--color-surface-low)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: "var(--color-text-muted)" }}
            >
              Low Stock Alerts
            </span>
            <div className="w-10 h-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xl">
              <MdInventory />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span
              className="text-3xl font-black"
              style={{ color: "var(--color-text-main)" }}
            >
              3
            </span>
            <span className="text-[11px] font-bold bg-red-100 text-red-700 px-2.5 py-0.5 rounded-full">
              Critical
            </span>
          </div>
        </div>
      </div>

      {/* 2. TOP PRODUCTS & RECENT ORDERS TABLES */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top-Selling Products */}
        <div
          className="rounded-2xl p-6 shadow-xs border flex flex-col justify-between"
          style={{
            backgroundColor: "var(--color-surface-low)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3
                className="text-lg font-bold"
                style={{ color: "var(--color-text-main)" }}
              >
                Top-Selling Products
              </h3>
              <p
                className="text-xs"
                style={{ color: "var(--color-text-muted)" }}
              >
                Best performing organic items this week
              </p>
            </div>
            <Link
              href="#"
              className="text-xs font-bold hover:underline"
              style={{ color: "var(--color-primary)" }}
            >
              View All
            </Link>
          </div>

          <div className="space-y-3">
            {TOP_PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="flex items-center justify-between p-3 rounded-xl transition-all border"
                style={{
                  backgroundColor: "var(--color-surface-container)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 relative bg-gray-100">
                    <Image
                      src={prod.imgSrc}
                      alt={prod.alt}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4
                      className="text-xs sm:text-sm font-bold"
                      style={{ color: "var(--color-text-main)" }}
                    >
                      {prod.name}
                    </h4>
                    <span
                      className="text-[11px]"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {prod.unit}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span
                    className="text-xs sm:text-sm font-bold block"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {prod.price}
                  </span>
                  <span
                    className="text-[11px]"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {prod.salesCount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Orders List */}
        <div
          className="rounded-2xl p-6 shadow-xs border flex flex-col justify-between"
          style={{
            backgroundColor: "var(--color-surface-low)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3
                className="text-lg font-bold"
                style={{ color: "var(--color-text-main)" }}
              >
                Recent Orders
              </h3>
              <p
                className="text-xs"
                style={{ color: "var(--color-text-muted)" }}
              >
                Latest customer transactions from Bandra area
              </p>
            </div>
            <Link
              href="#"
              className="text-xs font-bold hover:underline"
              style={{ color: "var(--color-primary)" }}
            >
              View All
            </Link>
          </div>

          <div className="space-y-3">
            {RECENT_ORDERS.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-3 rounded-xl transition-all border"
                style={{
                  backgroundColor: "var(--color-surface-container)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 shadow-2xs"
                    style={{
                      backgroundColor: "var(--color-primary-container)",
                      color: "var(--color-on-primary-container)",
                    }}
                  >
                    {order.initial}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4
                        className="text-xs sm:text-sm font-bold"
                        style={{ color: "var(--color-text-main)" }}
                      >
                        {order.customer}
                      </h4>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${order.statusBg}`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <span
                      className="text-[11px]"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Order #{order.id} • {order.items}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span
                    className="text-xs sm:text-sm font-bold block"
                    style={{ color: "var(--color-text-main)" }}
                  >
                    {order.amount}
                  </span>
                  <span
                    className="text-[11px]"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {order.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopkeeperHome;
