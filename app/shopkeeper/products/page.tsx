"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  MdAdd,
  MdSearch,
  MdGridView,
  MdTableRows,
  MdEdit,
  MdDelete,
} from "react-icons/md";

interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: string;
  unit: string;
  stock: number;
  stockLabel: string;
  status: "In Stock" | "Low Stock" | "Out of Stock";
  isLive: boolean;
  imgSrc: string;
}

const INITIAL_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Bandra Organic Spinach",
    sku: "ORG-SP-01",
    category: "Leafy Greens",
    price: "₹45",
    unit: "250g bunch",
    stock: 42,
    stockLabel: "42 bundles",
    status: "In Stock",
    isLive: true,
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCuaM2ZjvDoyMmoCoIz321gGt1QfVQO-A46KgfAYfQyjm92iearYOQbBH5cEeuKP4ozTn62nB2HioabhtQ8pTnDyyccNatSifYF7fvjs-5wOwop20hlSTKO8SMQRAyAlGplAyU6bmcb4ATpsBU9ZApM1EcQRYQDXEA0-DzwMI1aQ7zHB1t9S-aHp2CVrTKSU8r_66dFREXS26GJRjCQ82OlSdhLngpU6HxSXyJeKMo",
  },
  {
    id: "2",
    name: "Baby Heirloom Carrots",
    sku: "ORG-RT-04",
    category: "Root Veggies",
    price: "₹85",
    unit: "500g pack",
    stock: 5,
    stockLabel: "5 packs left",
    status: "Low Stock",
    isLive: true,
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQETvpGNieuhISTtsMFgKWLRNs0UZGnzsIAqwBK8gniwv3IbE4_WjIbY02q0KSGWb9_j01CI4nOY2ek9exv-DfKYLKqnRaEMbwErPYFExNI-VNqiVJIZKTmIfOrdi1ee7yDq4lo7S9HN3SqEY0rX53F3zNVHX6qjslw5gt9OTna0ZJ2-JJtzPyCvqB2aud9e4oOXh0jTCszwGeNF3pKabtBAplznFAKvdJWzphYgo",
  },
  {
    id: "3",
    name: "Red Pitaya Dragon Fruit",
    sku: "ORG-EX-09",
    category: "Exotic",
    price: "₹160",
    unit: "piece",
    stock: 0,
    stockLabel: "0 units",
    status: "Out of Stock",
    isLive: false,
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuANK82lxJv6BVRMa7Ozockn22fVVl366nomLUYrfxaFWcahsuNBeQjuc85fzw2eiMam4VKhnEuPxE7CqJbxBNtTP0Y9TEzkhV5e-MZnIAe2cGAx1zDlEZtAAPAmwgWB35-08Iy4fL9FA55Lrh_kM98FEPQEzGP7ryl73BrF_seWBjEgTZJEXAUzXbMUsMt_ozxaG0VzFUB7yl1zKLeTVyIOzpEys5Vy_cDv3nCzwbw",
  },
  {
    id: "4",
    name: "Hass Avocados (Ripe)",
    sku: "ORG-EX-12",
    category: "Exotic",
    price: "₹220",
    unit: "pack of 2",
    stock: 28,
    stockLabel: "28 packs",
    status: "In Stock",
    isLive: true,
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjtMNoJYYoTHl8kqgMGvCjTMrYshXe0phYXUQMdPPdqCufRT7LOpV3sClECuhovmxALhRIgya6qv3iRdde665ms6o5zUbEAgO2P2hYPBgahoqS6zubdfndPjztClgkS_LK_DuoOQxlkpw0zmWAX5_EoJBG98CHUlEoo00vonONK0Hz24Nhtmaq4st6xaXymrrGiHKIk4f4OKi8bk_44Qm9ODaYjo2AgFfcchTXkt8",
  },
];

const CATEGORIES = [
  "All Items (48)",
  "Leafy Greens (12)",
  "Root Veggies (9)",
  "Exotic (8)",
  "Fruits (14)",
  "Herbs (5)",
];

const Products = () => {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [selectedCategory, setSelectedCategory] = useState("All Items (48)");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleProductLive = (id: string) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isLive: !item.isLive } : item,
      ),
    );
  };

  const filteredProducts = products.filter((prod) => {
    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.sku.toLowerCase().includes(searchQuery.toLowerCase());

    const catName = selectedCategory.split(" (")[0];
    const matchesCategory =
      selectedCategory.startsWith("All") || prod.category === catName;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6 p-6">
      {/* 1. PAGE HEADER & ADD PRODUCT BUTTON */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex flex-col">
          <h1
            className="text-2xl font-black tracking-tight"
            style={{ color: "var(--color-text-main)" }}
          >
            Manage Catalog
          </h1>
          <p
            className="text-xs sm:text-sm mt-0.5"
            style={{ color: "var(--color-text-muted)" }}
          >
            Update inventory, adjust prices, and toggle live availability across
            your Bandra storefront.
          </p>
        </div>

        <Link
          href="#"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-sm transition-all hover:opacity-90 shrink-0"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "var(--color-text-inverse)",
          }}
        >
          <MdAdd className="text-lg" />
          <span>Add New Product</span>
        </Link>
      </div>

      {/* 2. FILTERS, SEARCH & VIEW TOGGLE BAR */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <MdSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-lg"
            style={{ color: "var(--color-text-muted)" }}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search organic veggies, fruits, herbs..."
            className="w-full pl-11 pr-4 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none transition-all shadow-xs"
            style={{
              backgroundColor: "var(--color-surface-low)",
              borderColor: "var(--color-border)",
              color: "var(--color-text-main)",
            }}
          />
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-xs cursor-pointer"
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
                {cat}
              </button>
            );
          })}
        </div>

        {/* View Switcher Toggle (Grid vs Table) */}
        <div
          className="flex items-center p-1 rounded-xl border self-end lg:self-auto"
          style={{
            backgroundColor: "var(--color-surface-low)",
            borderColor: "var(--color-border)",
          }}
        >
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-lg transition-all cursor-pointer ${
              viewMode === "grid" ? "shadow-xs" : ""
            }`}
            style={{
              backgroundColor:
                viewMode === "grid"
                  ? "var(--color-surface-container)"
                  : "transparent",
              color:
                viewMode === "grid"
                  ? "var(--color-primary)"
                  : "var(--color-text-muted)",
            }}
            title="Grid View"
          >
            <MdGridView className="text-lg" />
          </button>
          <button
            onClick={() => setViewMode("table")}
            className={`p-2 rounded-lg transition-all cursor-pointer ${
              viewMode === "table" ? "shadow-xs" : ""
            }`}
            style={{
              backgroundColor:
                viewMode === "table"
                  ? "var(--color-surface-container)"
                  : "transparent",
              color:
                viewMode === "table"
                  ? "var(--color-primary)"
                  : "var(--color-text-muted)",
            }}
            title="Table View"
          >
            <MdTableRows className="text-lg" />
          </button>
        </div>
      </div>

      {/* 3. CATALOG CONTENT CONTAINER */}
      {viewMode === "grid" ? (
        /* GRID VIEW LAYOUT */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="rounded-2xl p-4 flex flex-col justify-between shadow-xs border transition-all hover:shadow-md relative group"
              style={{
                backgroundColor: "var(--color-surface-low)",
                borderColor: "var(--color-border)",
              }}
            >
              {/* Product Card Image & Badges */}
              <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 bg-gray-100">
                <Image
                  src={prod.imgSrc}
                  alt={prod.name}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Stock Status Badge */}
                <span
                  className={`absolute top-2 left-2 text-[10px] px-2.5 py-1 rounded-full font-bold shadow-xs ${
                    prod.status === "In Stock"
                      ? "bg-emerald-100 text-emerald-800"
                      : prod.status === "Low Stock"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {prod.status}
                </span>

                {/* Live Availability Toggle Button */}
                <div className="absolute top-2 right-2 flex items-center bg-white/90 backdrop-blur-md px-2 py-1 rounded-full shadow-2xs">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={prod.isLive}
                      onChange={() => toggleProductLive(prod.id)}
                      className="sr-only peer"
                    />
                    <div
                      className="w-7 h-4 rounded-full peer peer-checked:after:translate-x-3 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all shadow-inner"
                      style={{
                        backgroundColor: prod.isLive
                          ? "var(--color-primary)"
                          : "var(--color-surface-dim)",
                      }}
                    ></div>
                  </label>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <div
                    className="flex items-center justify-between text-[11px] font-bold mb-1"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    <span>{prod.category}</span>
                    <span>SKU: {prod.sku}</span>
                  </div>
                  <h3
                    className="text-base font-bold mb-1"
                    style={{ color: "var(--color-text-main)" }}
                  >
                    {prod.name}
                  </h3>
                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span
                      className="text-lg font-black"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {prod.price}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      / {prod.unit}
                    </span>
                  </div>
                </div>

                {/* Footer Controls */}
                <div
                  className="flex items-center justify-between pt-3 border-t"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <span
                    className={`text-xs font-semibold ${
                      prod.stock === 0
                        ? "text-red-500"
                        : prod.stock <= 5
                          ? "text-amber-600"
                          : "text-gray-500"
                    }`}
                  >
                    Stock: {prod.stockLabel}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      className="p-2 rounded-lg border hover:bg-[var(--color-surface-container)] transition-all cursor-pointer text-gray-600"
                      style={{ borderColor: "var(--color-border)" }}
                      title="Edit Product"
                    >
                      <MdEdit className="text-sm" />
                    </button>
                    <button
                      className="p-2 rounded-lg border hover:bg-red-50 transition-all cursor-pointer text-red-500"
                      style={{ borderColor: "var(--color-border)" }}
                      title="Delete Product"
                    >
                      <MdDelete className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* TABLE VIEW LAYOUT */
        <div
          className="rounded-2xl border shadow-xs overflow-hidden"
          style={{
            backgroundColor: "var(--color-surface-low)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead
                className="border-b uppercase font-bold text-[11px]"
                style={{
                  backgroundColor: "var(--color-surface-container)",
                  borderColor: "var(--color-border)",
                  color: "var(--color-text-muted)",
                }}
              >
                <tr>
                  <th className="py-3.5 px-4">Product</th>
                  <th className="py-3.5 px-4">SKU & Category</th>
                  <th className="py-3.5 px-4">Price</th>
                  <th className="py-3.5 px-4">Stock</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-center">Live Toggle</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody
                className="divide-y"
                style={{ borderColor: "var(--color-border)" }}
              >
                {filteredProducts.map((prod) => (
                  <tr
                    key={prod.id}
                    className="hover:bg-[var(--color-surface-container)] transition-colors"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 relative bg-gray-100">
                          <Image
                            src={prod.imgSrc}
                            alt={prod.name}
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>
                        <span
                          className="font-bold text-xs sm:text-sm"
                          style={{ color: "var(--color-text-main)" }}
                        >
                          {prod.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex flex-col">
                        <span
                          className="font-semibold"
                          style={{ color: "var(--color-text-main)" }}
                        >
                          {prod.category}
                        </span>
                        <span
                          className="text-[10px]"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          {prod.sku}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className="font-bold"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {prod.price}
                      </span>{" "}
                      <span
                        className="text-[11px]"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        / {prod.unit}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-semibold">
                      {prod.stockLabel}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold ${
                          prod.status === "In Stock"
                            ? "bg-emerald-100 text-emerald-800"
                            : prod.status === "Low Stock"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {prod.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={prod.isLive}
                          onChange={() => toggleProductLive(prod.id)}
                          className="sr-only peer"
                        />
                        <div
                          className="w-7 h-4 rounded-full peer peer-checked:after:translate-x-3 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all shadow-inner"
                          style={{
                            backgroundColor: prod.isLive
                              ? "var(--color-primary)"
                              : "var(--color-surface-dim)",
                          }}
                        ></div>
                      </label>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          className="p-1.5 rounded-lg border hover:bg-[var(--color-surface-low)] transition-all cursor-pointer text-gray-600"
                          title="Edit Product"
                        >
                          <MdEdit className="text-sm" />
                        </button>
                        <button
                          className="p-1.5 rounded-lg border hover:bg-red-50 transition-all cursor-pointer text-red-500"
                          title="Delete Product"
                        >
                          <MdDelete className="text-sm" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
