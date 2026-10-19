"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  FiUser,
  FiMapPin,
  FiCreditCard,
  FiSliders,
  FiEdit3,
  FiCheckCircle,
  FiPlus,
  FiLogOut,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import { MdVerified, MdOutlineEco } from "react-icons/md";

// Mock User Data
const USER_PROFILE = {
  name: "Ananya Sharma",
  email: "ananya.sharma@example.com",
  phone: "+91 98200 12345",
  memberSince: "March 2024",
  tier: "Green Club Member",
  totalOrders: 18,
  avatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=250",
};

// Mock Saved Addresses
const SAVED_ADDRESSES = [
  {
    id: "addr-1",
    tag: "Home",
    isDefault: true,
    recipient: "Ananya Sharma",
    phone: "+91 98200 12345",
    addressLine: "Flat 402, Sunshine Heights, Pali Hill, Bandra West",
    cityStatePin: "Mumbai, Maharashtra - 400050",
  },
  {
    id: "addr-2",
    tag: "Work / Office",
    isDefault: false,
    recipient: "Ananya Sharma",
    phone: "+91 98200 12345",
    addressLine: "Office 12B, Trade Center, BKC",
    cityStatePin: "Mumbai, Maharashtra - 400051",
  },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState<
    "personal" | "addresses" | "payments" | "preferences"
  >("personal");
  const [userInfo, setUserInfo] = useState(USER_PROFILE);

  return (
    <div
      className="max-w-6xl mx-auto px-6 py-8 w-full"
      style={{
        backgroundColor: "var(--color-surface-base)",
        color: "var(--color-text-body)",
      }}
    >
      {/* Top Banner & User Card */}
      <div
        className="p-6 md:p-8 rounded-3xl shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        style={{
          backgroundColor: "var(--color-surface-low)",
          border: "1px solid var(--color-border-subtle)",
        }}
      >
        <div className="flex flex-col md:flex-row items-center gap-6 z-10 text-center md:text-left">
          {/* Avatar */}
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md shrink-0">
            <Image
              src={userInfo.avatar}
              alt={userInfo.name}
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-1">
              <h1
                className="text-2xl lg:text-3xl font-bold"
                style={{ color: "var(--color-text-main)" }}
              >
                {userInfo.name}
              </h1>
              <span
                className="px-2.5 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1 shadow-sm"
                style={{
                  backgroundColor: "var(--color-primary-container)",
                  color: "var(--color-on-primary-container)",
                }}
              >
                <MdVerified className="text-sm" /> Verified Organic Buyer
              </span>
            </div>

            <p
              className="text-xs font-medium flex items-center justify-center md:justify-start gap-1 mb-2"
              style={{ color: "var(--color-text-muted)" }}
            >
              <MdOutlineEco style={{ color: "var(--color-primary)" }} />
              <span>{userInfo.tier}</span> •{" "}
              <span>Member since {userInfo.memberSince}</span>
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4 text-xs">
              <span className="flex items-center gap-1">
                <FiMail style={{ color: "var(--color-text-muted)" }} />
                {userInfo.email}
              </span>
              <span className="flex items-center gap-1">
                <FiPhone style={{ color: "var(--color-text-muted)" }} />
                {userInfo.phone}
              </span>
            </div>
          </div>
        </div>

        {/* Orders Counter Badge */}
        <div
          className="px-6 py-4 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm shrink-0 border"
          style={{
            backgroundColor: "var(--color-surface-container)",
            borderColor: "var(--color-border)",
          }}
        >
          <span
            className="text-2xl font-extrabold"
            style={{ color: "var(--color-primary)" }}
          >
            {userInfo.totalOrders}
          </span>
          <span
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: "var(--color-text-muted)" }}
          >
            Harvest Orders
          </span>
        </div>
      </div>

      {/* Profile Section Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar Navigation */}
        <div className="lg:col-span-4 flex flex-col gap-2">
          <button
            onClick={() => setActiveTab("personal")}
            className={`w-full p-4 rounded-2xl font-semibold text-sm flex items-center gap-3 transition-all cursor-pointer ${
              activeTab === "personal"
                ? "shadow-sm"
                : "hover:bg-[var(--color-surface-low)]"
            }`}
            style={{
              backgroundColor:
                activeTab === "personal"
                  ? "var(--color-primary)"
                  : "var(--color-surface-low)",
              color:
                activeTab === "personal"
                  ? "var(--color-text-inverse)"
                  : "var(--color-text-main)",
            }}
          >
            <FiUser className="text-lg" />
            <span>Personal Information</span>
          </button>

          <button
            onClick={() => setActiveTab("addresses")}
            className={`w-full p-4 rounded-2xl font-semibold text-sm flex items-center gap-3 transition-all cursor-pointer ${
              activeTab === "addresses"
                ? "shadow-sm"
                : "hover:bg-[var(--color-surface-low)]"
            }`}
            style={{
              backgroundColor:
                activeTab === "addresses"
                  ? "var(--color-primary)"
                  : "var(--color-surface-low)",
              color:
                activeTab === "addresses"
                  ? "var(--color-text-inverse)"
                  : "var(--color-text-main)",
            }}
          >
            <FiMapPin className="text-lg" />
            <span>Saved Addresses</span>
          </button>

          <button
            onClick={() => setActiveTab("payments")}
            className={`w-full p-4 rounded-2xl font-semibold text-sm flex items-center gap-3 transition-all cursor-pointer ${
              activeTab === "payments"
                ? "shadow-sm"
                : "hover:bg-[var(--color-surface-low)]"
            }`}
            style={{
              backgroundColor:
                activeTab === "payments"
                  ? "var(--color-primary)"
                  : "var(--color-surface-low)",
              color:
                activeTab === "payments"
                  ? "var(--color-text-inverse)"
                  : "var(--color-text-main)",
            }}
          >
            <FiCreditCard className="text-lg" />
            <span>Payment Methods</span>
          </button>

          <button
            onClick={() => setActiveTab("preferences")}
            className={`w-full p-4 rounded-2xl font-semibold text-sm flex items-center gap-3 transition-all cursor-pointer ${
              activeTab === "preferences"
                ? "shadow-sm"
                : "hover:bg-[var(--color-surface-low)]"
            }`}
            style={{
              backgroundColor:
                activeTab === "preferences"
                  ? "var(--color-primary)"
                  : "var(--color-surface-low)",
              color:
                activeTab === "preferences"
                  ? "var(--color-text-inverse)"
                  : "var(--color-text-main)",
            }}
          >
            <FiSliders className="text-lg" />
            <span>Preferences & Notifications</span>
          </button>

          <button className="w-full p-4 rounded-2xl font-semibold text-sm flex items-center gap-3 text-red-500 hover:bg-red-50 transition-all cursor-pointer mt-4">
            <FiLogOut className="text-lg" />
            <span>Sign Out</span>
          </button>
        </div>

        {/* Right Dynamic Tab Content */}
        <div
          className="lg:col-span-8 p-6 md:p-8 rounded-3xl shadow-sm border"
          style={{
            backgroundColor: "var(--color-surface-low)",
            borderColor: "var(--color-border-subtle)",
          }}
        >
          {/* 1. Personal Information Tab */}
          {activeTab === "personal" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2
                  className="text-xl font-bold"
                  style={{ color: "var(--color-text-main)" }}
                >
                  Personal Details
                </h2>
                <button
                  className="px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    color: "var(--color-primary)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <FiEdit3 className="text-sm" /> Edit Info
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="text-xs font-semibold block mb-1"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={userInfo.name}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, name: e.target.value })
                    }
                    className="w-full p-3 rounded-xl text-sm border focus:outline-none"
                    style={{
                      backgroundColor: "var(--color-surface-container)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-main)",
                    }}
                  />
                </div>

                <div>
                  <label
                    className="text-xs font-semibold block mb-1"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={userInfo.email}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, email: e.target.value })
                    }
                    className="w-full p-3 rounded-xl text-sm border focus:outline-none"
                    style={{
                      backgroundColor: "var(--color-surface-container)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-main)",
                    }}
                  />
                </div>

                <div>
                  <label
                    className="text-xs font-semibold block mb-1"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={userInfo.phone}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, phone: e.target.value })
                    }
                    className="w-full p-3 rounded-xl text-sm border focus:outline-none"
                    style={{
                      backgroundColor: "var(--color-surface-container)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-main)",
                    }}
                  />
                </div>

                <div>
                  <label
                    className="text-xs font-semibold block mb-1"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Membership Status
                  </label>
                  <div
                    className="p-3 rounded-xl text-sm font-semibold border flex items-center justify-between"
                    style={{
                      backgroundColor: "var(--color-primary-container)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-on-primary-container)",
                    }}
                  >
                    <span>{userInfo.tier}</span>
                    <MdVerified className="text-lg" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. Saved Addresses Tab */}
          {activeTab === "addresses" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2
                  className="text-xl font-bold"
                  style={{ color: "var(--color-text-main)" }}
                >
                  Saved Addresses
                </h2>
                <button
                  className="px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    color: "var(--color-text-inverse)",
                  }}
                >
                  <FiPlus className="text-sm" /> Add New Address
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {SAVED_ADDRESSES.map((addr) => (
                  <div
                    key={addr.id}
                    className="p-5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    style={{
                      backgroundColor: "var(--color-surface-container)",
                      borderColor: "var(--color-border)",
                    }}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                          style={{
                            backgroundColor: "var(--color-primary-container)",
                            color: "var(--color-on-primary-container)",
                          }}
                        >
                          {addr.tag}
                        </span>
                        {addr.isDefault && (
                          <span className="text-xs font-medium text-emerald-600 flex items-center gap-1">
                            <FiCheckCircle /> Default Address
                          </span>
                        )}
                      </div>
                      <p
                        className="text-sm font-bold mt-1"
                        style={{ color: "var(--color-text-main)" }}
                      >
                        {addr.recipient} ({addr.phone})
                      </p>
                      <p
                        className="text-xs leading-relaxed mt-1"
                        style={{ color: "var(--color-text-body)" }}
                      >
                        {addr.addressLine}, {addr.cityStatePin}
                      </p>
                    </div>

                    <button
                      className="px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer shrink-0"
                      style={{
                        backgroundColor: "var(--color-surface-base)",
                        borderColor: "var(--color-border)",
                        color: "var(--color-text-main)",
                      }}
                    >
                      Edit Address
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. Payment Methods Tab */}
          {activeTab === "payments" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2
                  className="text-xl font-bold"
                  style={{ color: "var(--color-text-main)" }}
                >
                  Payment Methods
                </h2>
                <button
                  className="px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    color: "var(--color-text-inverse)",
                  }}
                >
                  <FiPlus className="text-sm" /> Add Payment Method
                </button>
              </div>

              <div
                className="p-5 rounded-2xl border flex items-center justify-between gap-4"
                style={{
                  backgroundColor: "var(--color-surface-container)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-2xl font-bold">
                    <FiCreditCard />
                  </div>
                  <div>
                    <p
                      className="text-sm font-bold"
                      style={{ color: "var(--color-text-main)" }}
                    >
                      HDFC Bank Credit Card (•••• 4821)
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Expires 08/28 • Primary Payment Method
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                  <FiCheckCircle /> Linked
                </span>
              </div>
            </div>
          )}

          {/* 4. Preferences Tab */}
          {activeTab === "preferences" && (
            <div>
              <h2
                className="text-xl font-bold mb-6"
                style={{ color: "var(--color-text-main)" }}
              >
                Delivery & Communication Preferences
              </h2>

              <div className="flex flex-col gap-4">
                <div
                  className="flex items-center justify-between p-4 rounded-xl border"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div>
                    <p
                      className="text-sm font-bold"
                      style={{ color: "var(--color-text-main)" }}
                    >
                      WhatsApp Order Updates
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Receive real-time tracking alerts on WhatsApp
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 accent-[var(--color-primary)] cursor-pointer"
                  />
                </div>

                <div
                  className="flex items-center justify-between p-4 rounded-xl border"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div>
                    <p
                      className="text-sm font-bold"
                      style={{ color: "var(--color-text-main)" }}
                    >
                      Eco-Friendly Packaging Only
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Opt out of all single-use plastics and paper bags
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 accent-[var(--color-primary)] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
