"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  MdStorefront,
  MdDashboard,
  MdInventory2,
  MdAddBox,
  MdWarehouse,
  MdReceiptLong,
  MdPayments,
  MdStore,
  MdRateReview,
  MdLocalOffer,
  MdMenu,
  MdClose,
} from "react-icons/md";

const NAV_ITEMS = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/shopkeeper",
    icon: <MdDashboard />,
  },
  {
    id: "products",
    label: "Products",
    href: "/products",
    icon: <MdInventory2 />,
  },
  {
    id: "add-edit-product",
    label: "Add/Edit Product",
    href: "add-edit",
    icon: <MdAddBox />,
  },
  {
    id: "inventory",
    label: "Inventory",
    href: "/inventory",
    icon: <MdWarehouse />,
  },
  { id: "orders", label: "Orders", href: "/orders", icon: <MdReceiptLong /> },
  { id: "earnings", label: "Earnings", href: "earning", icon: <MdPayments /> },
  {
    id: "shop-profile",
    label: "Shop Profile",
    href: "/shop-profile",
    icon: <MdStore />,
  },
  { id: "reviews", label: "Reviews", href: "/reviews", icon: <MdRateReview /> },
  { id: "offers", label: "Offers", href: "/offers", icon: <MdLocalOffer /> },
];

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpenMobile(!isOpenMobile)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2.5 rounded-xl shadow-md border flex items-center justify-center text-xl cursor-pointer"
        style={{
          backgroundColor: "var(--color-surface-low)",
          borderColor: "var(--color-border)",
          color: "var(--color-primary)",
        }}
        title="Toggle Partner Menu"
      >
        {isOpenMobile ? <MdClose /> : <MdMenu />}
      </button>

      {isOpenMobile && (
        <div
          onClick={() => setIsOpenMobile(false)}
          className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-xs"
        />
      )}

      <aside
        className={`fixed left-0 top-0 h-full w-64 z-50 flex flex-col py-6 transition-transform duration-300 border-r ${
          isOpenMobile ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        style={{
          backgroundColor: "var(--color-surface-low)",
          borderColor: "var(--color-border-subtle)",
        }}
      >
        <div className="px-6 mb-6 flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-2xl shadow-xs"
            style={{
              backgroundColor: "var(--color-primary-container)",
              color: "var(--color-on-primary-container)",
            }}
          >
            <MdStorefront />
          </div>
          <div>
            <h2
              className="text-lg font-bold tracking-tight leading-tight"
              style={{ color: "var(--color-primary)" }}
            >
              Bandra Organic
            </h2>
            <span
              className="text-[11px] font-semibold uppercase tracking-wider block"
              style={{ color: "var(--color-text-muted)" }}
            >
              Partner Hub Admin
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;

            return (
              <Link
                key={item.id}
                href={"/shopkeeper/" + item.href}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpenMobile(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive ? "shadow-sm" : "hover:opacity-80"
                }`}
                style={{
                  backgroundColor: isActive
                    ? "var(--color-primary-container)"
                    : "transparent",
                  color: isActive
                    ? "var(--color-on-primary-container)"
                    : "var(--color-text-body)",
                }}
              >
                <span className="text-xl shrink-0">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
