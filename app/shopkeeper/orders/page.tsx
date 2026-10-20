"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  MdNotificationsActive,
  MdSearch,
  MdFilterList,
  MdLocationOn,
  MdVisibility,
  MdPrint,
  MdLocalShipping,
  MdClose,
  MdCheckCircle,
} from "react-icons/md";

interface OrderItem {
  name: string;
  qty: string;
  price: string;
  imgSrc?: string;
}

interface Order {
  id: string;
  customerName: string;
  initials: string;
  address: string;
  distance: string;
  amount: string;
  itemCount: number;
  paymentType: string;
  paymentStatus: string;
  timeAgo: string;
  status:
    | "New"
    | "Accepted"
    | "Packed"
    | "Out for Delivery"
    | "Delivered"
    | "Cancelled";
  rider?: string;
  items: OrderItem[];
}

const INITIAL_ORDERS: Order[] = [
  {
    id: "ORD-8924",
    customerName: "Ananya Roy",
    initials: "AR",
    address: "Bungalow 42, Pali Hill, Bandra West, Mumbai - 400050",
    distance: "1.2 km",
    amount: "₹1,450",
    itemCount: 3,
    paymentType: "Online Paid",
    paymentStatus: "Paid Online",
    timeAgo: "Ordered 4 mins ago",
    status: "New",
    items: [
      {
        name: "Organic Alphonso Mangoes",
        qty: "2 kg",
        price: "₹800",
        imgSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBzNEhHzy1zpY4dIhx4j6oEmN73siQVlq_ltAVe8tyaT4EB7yHsYho1-Z0okFM8q7VpqpStEfI3mqoc3lSQkT9ftMXsbrZIBldeHSYfO8J7rsqvbZAcXPhNY_f29Eh1n4v1HyV8iBfEQUBnNaufr5_puz4Y2XE0K5akIgXGNU-drgkN8j08evPfVIgBwrM-drOn1ScJuZP-xsZls0JRaBeMtdDtlPoNil1toUK_JSQ",
      },
      {
        name: "Fresh Hydroponic Lettuce",
        qty: "250g",
        price: "₹250",
        imgSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAGQzxpJCM0lP4WZ4AQDNeggQfx4rjWj-LhG4x6Fzd8LeaccGmhsrCdgtQMWaRP2870hitPFxgdRUsQRwQZOnEjYJtqzKjzMdJvct-DdUmd3-n2CoiUpimT1A4PUF4n6UyDQLV1EdN44kx-n0kEEUN8gCrACYAmhjh5FILvJUeSsEHQNZooOUladC8HzNpuAY754BJlaUiYYYzg-JvJl3M5pwSDZpyFi5fELjQV-Zg",
      },
      {
        name: "Cold-Pressed Mustard Oil",
        qty: "500ml",
        price: "₹400",
        imgSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAdCIZBhtGYS6zBAkbdGRd2hyrl3r10ZvVT5IO_ftgpI2WMRGg7gJVXG1nD7R3fSIIgDT243imWQJDNZIF5r4-uTgL3N6qK80_7_-wjNk51a0TUuoOeOJR_RmIrR46lmuPA7wKJwHSqejbyQgvYbadkBc4WkZSAbTKzGEkF05Gsp2QilrVESVJJd5gIm7YyUw1T94ttRuZ4K4QncxGx9hb2vUheRmHz335dbaq05-U",
      },
    ],
  },
  {
    id: "ORD-8920",
    customerName: "Vikram Kapoor",
    initials: "VK",
    address: "Carter Road, Bandra West (2.5 km)",
    distance: "2.5 km",
    amount: "₹890",
    itemCount: 2,
    paymentType: "COD",
    paymentStatus: "Cash on Delivery",
    timeAgo: "Pickup in 15 mins",
    status: "Packed",
    items: [
      {
        name: "Organic Cold-Pressed Coconut Oil",
        qty: "1 bottle",
        price: "₹540",
      },
      { name: "Organic Brown Coconut Sugar", qty: "1 pack", price: "₹350" },
    ],
  },
  {
    id: "ORD-8915",
    customerName: "Natasha Sen",
    initials: "NS",
    address: "Hill Road, Bandra West (0.8 km)",
    distance: "0.8 km",
    amount: "₹2,100",
    itemCount: 5,
    paymentType: "Paid",
    paymentStatus: "Paid Online",
    timeAgo: "Rider: Rajesh M.",
    status: "Out for Delivery",
    rider: "Rajesh M.",
    items: [
      { name: "Organic Heirloom Tomatoes", qty: "1.5 kg", price: "₹450" },
      { name: "Artisanal Sourdough Bread", qty: "2 loaves", price: "₹650" },
    ],
  },
  {
    id: "ORD-8910",
    customerName: "Rohan Khanna",
    initials: "RK",
    address: "Chapel Road, Bandra West",
    distance: "0.5 km",
    amount: "₹620",
    itemCount: 1,
    paymentType: "Paid",
    paymentStatus: "Paid Online",
    timeAgo: "Today, 11:30 AM",
    status: "Delivered",
    items: [{ name: "Organic Raw Wild Honey", qty: "500g", price: "₹620" }],
  },
];

const TABS = [
  "New",
  "Accepted",
  "Packed",
  "Out for Delivery",
  "Delivered",
  "Cancelled",
];

const StoreOrders = () => {
  const [activeTab, setActiveTab] = useState("New");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAlertBanner, setShowAlertBanner] = useState(true);
  const [openDrawerId, setOpenDrawerId] = useState<string | null>(null);

  const selectedOrder = INITIAL_ORDERS.find((o) => o.id === openDrawerId);

  const filteredOrders = INITIAL_ORDERS.filter((order) => {
    const matchesTab = activeTab === "New" ? true : order.status === activeTab;
    const matchesSearch =
      order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="space-y-6 p-6">
      {showAlertBanner && (
        <div
          className="w-full px-6 py-4 rounded-2xl flex items-center justify-between shadow-xs animate-pulse border"
          style={{
            backgroundColor: "var(--color-primary-container)",
            color: "var(--color-on-primary-container)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="flex items-center gap-3.5">
            <MdNotificationsActive className="text-3xl shrink-0 text-amber-600" />
            <div>
              <h4 className="text-sm sm:text-base font-bold">
                3 New Orders Awaiting Acceptance!
              </h4>
              <p className="text-xs opacity-90">
                Auto-refreshing live feed. Sound alerts are enabled.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab("New")}
              className="px-4 py-1.5 rounded-full text-xs font-bold shadow-xs transition-all hover:opacity-90 cursor-pointer"
              style={{
                backgroundColor: "var(--color-surface-low)",
                color: "var(--color-text-main)",
              }}
            >
              Review Now
            </button>
            <button
              onClick={() => setShowAlertBanner(false)}
              className="p-1 rounded-full hover:bg-black/10 transition-colors cursor-pointer"
              title="Dismiss Alert"
            >
              <MdClose className="text-xl" />
            </button>
          </div>
        </div>
      )}

      {/* 2. HEADER CONTROLS: SEARCH & FILTER TABS */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1
              className="text-2xl font-black tracking-tight"
              style={{ color: "var(--color-text-main)" }}
            >
              Store Orders
            </h1>
            <p
              className="text-xs sm:text-sm mt-0.5"
              style={{ color: "var(--color-text-muted)" }}
            >
              Manage incoming harvests, packing statuses, and delivery riders.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative flex-1 md:w-80">
              <MdSearch
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-lg"
                style={{ color: "var(--color-text-muted)" }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search order ID, customer name..."
                className="w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm border focus:outline-none transition-all shadow-xs"
                style={{
                  backgroundColor: "var(--color-surface-low)",
                  borderColor: "var(--color-border)",
                  color: "var(--color-text-main)",
                }}
              />
            </div>

            <button
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border shadow-xs transition-all hover:bg-[var(--color-surface-container)] cursor-pointer"
              style={{
                backgroundColor: "var(--color-surface-low)",
                borderColor: "var(--color-border)",
                color: "var(--color-text-main)",
              }}
            >
              <MdFilterList className="text-base" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Filter Tabs Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {TABS.map((tab) => {
            const isSelected = activeTab === tab;
            const count =
              tab === "New"
                ? 3
                : tab === "Accepted"
                  ? 5
                  : tab === "Packed"
                    ? 2
                    : tab === "Out for Delivery"
                      ? 4
                      : null;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                style={{
                  backgroundColor: isSelected
                    ? "var(--color-primary)"
                    : "var(--color-surface-low)",
                  color: isSelected
                    ? "var(--color-text-inverse)"
                    : "var(--color-text-main)",
                  border: isSelected ? "none" : "1px solid var(--color-border)",
                }}
              >
                <span>{tab}</span>
                {count !== null && (
                  <span
                    className={`px-1.5 py-0.2 text-[10px] rounded-full font-extrabold ${
                      isSelected
                        ? "bg-white text-emerald-800"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. ORDERS GRID LIST */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="rounded-2xl p-5 shadow-xs border flex flex-col justify-between transition-all hover:shadow-md"
            style={{
              backgroundColor: "var(--color-surface-low)",
              borderColor: "var(--color-border)",
            }}
          >
            <div>
              {/* Order Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                      order.status === "New"
                        ? "bg-emerald-100 text-emerald-800"
                        : order.status === "Packed"
                          ? "bg-amber-100 text-amber-800"
                          : order.status === "Out for Delivery"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {order.status} Order
                  </span>
                  <span
                    className="text-xs font-bold"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    #{order.id}
                  </span>
                </div>
                <span className="text-xs font-semibold text-amber-600">
                  {order.timeAgo}
                </span>
              </div>

              {/* Customer Box */}
              <div
                className="flex items-start justify-between gap-4 mb-3 p-3.5 rounded-xl border"
                style={{
                  backgroundColor: "var(--color-surface-container)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs"
                    style={{
                      backgroundColor: "var(--color-primary-container)",
                      color: "var(--color-on-primary-container)",
                    }}
                  >
                    {order.initials}
                  </div>
                  <div>
                    <h4
                      className="text-xs sm:text-sm font-bold"
                      style={{ color: "var(--color-text-main)" }}
                    >
                      {order.customerName}
                    </h4>
                    <p
                      className="text-[11px] flex items-center gap-1 mt-0.5"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      <MdLocationOn className="text-sm shrink-0 text-emerald-600" />
                      <span className="truncate max-w-[200px]">
                        {order.address}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span
                    className="text-sm font-black block"
                    style={{ color: "var(--color-text-main)" }}
                  >
                    {order.amount}
                  </span>
                  <p
                    className="text-[10px] font-semibold"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {order.itemCount} items • {order.paymentType}
                  </p>
                </div>
              </div>

              {/* Items Preview List */}
              <div className="space-y-1.5 mb-4 px-1">
                {order.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs"
                    style={{ color: "var(--color-text-body)" }}
                  >
                    <span className="truncate font-medium">
                      {item.qty} {item.name}
                    </span>
                    <span className="font-bold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div
              className="flex items-center justify-between pt-3 border-t"
              style={{ borderColor: "var(--color-border)" }}
            >
              <button
                onClick={() => setOpenDrawerId(order.id)}
                className="text-xs font-bold flex items-center gap-1 transition-colors hover:underline cursor-pointer"
                style={{ color: "var(--color-primary)" }}
              >
                <MdVisibility className="text-base" /> View Details
              </button>

              <div className="flex items-center gap-2">
                {order.status === "New" ? (
                  <>
                    <button className="px-3.5 py-1.5 rounded-xl bg-red-100 text-red-700 text-xs font-bold hover:bg-red-200 transition-colors cursor-pointer">
                      Reject
                    </button>
                    <button
                      className="px-4 py-1.5 rounded-xl text-xs font-bold shadow-xs transition-colors cursor-pointer hover:opacity-90"
                      style={{
                        backgroundColor: "var(--color-primary)",
                        color: "var(--color-text-inverse)",
                      }}
                    >
                      Accept Order
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="px-3 py-1.5 rounded-xl text-xs font-bold border flex items-center gap-1 transition-colors hover:bg-[var(--color-surface-container)] cursor-pointer"
                      style={{
                        borderColor: "var(--color-border)",
                        color: "var(--color-text-main)",
                      }}
                    >
                      <MdPrint className="text-sm" /> Print Invoice
                    </button>
                    {order.status === "Packed" && (
                      <button
                        className="px-4 py-1.5 rounded-xl text-xs font-bold shadow-xs transition-colors cursor-pointer hover:opacity-90"
                        style={{
                          backgroundColor: "var(--color-primary)",
                          color: "var(--color-text-inverse)",
                        }}
                      >
                        Dispatch Rider
                      </button>
                    )}
                    {order.status === "Out for Delivery" && (
                      <span className="text-xs font-bold text-blue-600 flex items-center gap-1">
                        <MdLocalShipping className="text-base" /> En Route
                      </span>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4. ORDER DETAIL SIDE DRAWER OVERLAY */}
      {openDrawerId && selectedOrder && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs flex justify-end">
          <div
            className="w-full max-w-md h-full p-6 shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300"
            style={{ backgroundColor: "var(--color-surface-low)" }}
          >
            <div className="space-y-5">
              {/* Drawer Header */}
              <div
                className="flex items-center justify-between pb-3 border-b"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider block"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Order Management
                  </span>
                  <h3
                    className="text-lg font-bold"
                    style={{ color: "var(--color-text-main)" }}
                  >
                    #{selectedOrder.id} Details
                  </h3>
                </div>
                <button
                  onClick={() => setOpenDrawerId(null)}
                  className="w-8 h-8 rounded-full border flex items-center justify-center transition-colors cursor-pointer hover:bg-[var(--color-surface-container)]"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <MdClose className="text-lg" />
                </button>
              </div>

              {/* Customer Profile Block */}
              <div
                className="p-4 rounded-xl border space-y-1"
                style={{
                  backgroundColor: "var(--color-surface-container)",
                  borderColor: "var(--color-border)",
                }}
              >
                <h4
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Customer Profile
                </h4>
                <p
                  className="text-sm font-bold"
                  style={{ color: "var(--color-text-main)" }}
                >
                  {selectedOrder.customerName}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  +91 98201 XXXXX • customer@freshmart.com
                </p>
                <p
                  className="text-xs flex items-start gap-1 mt-1 font-medium"
                  style={{ color: "var(--color-text-main)" }}
                >
                  <MdLocationOn className="text-sm shrink-0 text-emerald-600 mt-0.5" />
                  <span>{selectedOrder.address}</span>
                </p>
              </div>

              {/* Delivery & Payment Badges */}
              <div className="grid grid-cols-2 gap-3">
                <div
                  className="p-3 rounded-xl border"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider block mb-0.5"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Payment Status
                  </span>
                  <span
                    className="text-xs font-bold flex items-center gap-1"
                    style={{ color: "var(--color-primary)" }}
                  >
                    <MdCheckCircle className="text-sm" />{" "}
                    {selectedOrder.paymentStatus}
                  </span>
                </div>
                <div
                  className="p-3 rounded-xl border"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider block mb-0.5"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Slot
                  </span>
                  <span
                    className="text-xs font-bold"
                    style={{ color: "var(--color-text-main)" }}
                  >
                    Express (30 Mins)
                  </span>
                </div>
              </div>

              {/* Items Breakdown */}
              <div className="space-y-2">
                <h4
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: "var(--color-text-main)" }}
                >
                  Items Breakdown
                </h4>
                <div className="space-y-2">
                  {selectedOrder.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-xl border"
                      style={{
                        backgroundColor: "var(--color-surface-container)",
                        borderColor: "var(--color-border)",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        {item.imgSrc && (
                          <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 relative bg-gray-100">
                            <Image
                              src={item.imgSrc}
                              alt={item.name}
                              fill
                              unoptimized
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <p
                            className="text-xs font-bold"
                            style={{ color: "var(--color-text-main)" }}
                          >
                            {item.name}
                          </p>
                          <p
                            className="text-[10px]"
                            style={{ color: "var(--color-text-muted)" }}
                          >
                            Qty: {item.qty}
                          </p>
                        </div>
                      </div>
                      <span
                        className="text-xs font-bold"
                        style={{ color: "var(--color-text-main)" }}
                      >
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary Totals */}
              <div
                className="p-4 rounded-xl border space-y-1.5 text-xs"
                style={{
                  backgroundColor: "var(--color-surface-container)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div
                  className="flex justify-between"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  <span>Subtotal</span>
                  <span>{selectedOrder.amount}</span>
                </div>
                <div
                  className="flex justify-between"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  <span>Delivery Fee</span>
                  <span className="text-emerald-600 font-bold">FREE</span>
                </div>
                <div
                  className="flex justify-between text-sm font-bold pt-2 border-t"
                  style={{
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-main)",
                  }}
                >
                  <span>Total Amount</span>
                  <span style={{ color: "var(--color-primary)" }}>
                    {selectedOrder.amount}
                  </span>
                </div>
              </div>
            </div>

            {/* Footer Drawer Controls */}
            <div
              className="pt-4 border-t space-y-2"
              style={{ borderColor: "var(--color-border)" }}
            >
              <button
                type="button"
                className="w-full py-2.5 rounded-xl font-bold text-xs shadow-xs flex items-center justify-center gap-2 cursor-pointer transition-all hover:opacity-90"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "var(--color-text-inverse)",
                }}
              >
                <MdPrint className="text-base" /> Print Tax Invoice
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  className="py-2 rounded-xl bg-red-100 text-red-700 font-bold text-xs hover:bg-red-200 transition-colors cursor-pointer"
                >
                  Reject Order
                </button>
                <button
                  type="button"
                  className="py-2 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-xs hover:bg-emerald-200 transition-colors cursor-pointer"
                >
                  Accept & Pack
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoreOrders;
