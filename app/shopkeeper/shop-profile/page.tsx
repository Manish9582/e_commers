"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  FiEdit,
  FiCamera,
  FiStar,
  FiClock,
  FiLock,
  FiCheckCircle,
  FiInfo,
  FiSave,
} from "react-icons/fi";

interface OperatingDay {
  day: string;
  isOpen: boolean;
  openTime: string;
  closeTime: string;
}

const INITIAL_SCHEDULE: OperatingDay[] = [
  { day: "Monday", isOpen: true, openTime: "08:00", closeTime: "20:00" },
  { day: "Tuesday", isOpen: true, openTime: "08:00", closeTime: "20:00" },
  { day: "Wednesday", isOpen: true, openTime: "08:00", closeTime: "20:00" },
  { day: "Thursday", isOpen: true, openTime: "08:00", closeTime: "20:00" },
  { day: "Friday", isOpen: true, openTime: "08:00", closeTime: "21:00" },
  { day: "Saturday", isOpen: true, openTime: "09:00", closeTime: "21:00" },
  { day: "Sunday", isOpen: false, openTime: "09:00", closeTime: "18:00" },
];

const ShopProfile = () => {
  const [holidayMode, setHolidayMode] = useState(false);
  const [deliveryRadius, setDeliveryRadius] = useState(12);
  const [schedule, setSchedule] = useState<OperatingDay[]>(INITIAL_SCHEDULE);

  // Bank Form State
  const [accountHolder, setAccountHolder] = useState(
    "Bandra Organic Ventures LLP",
  );
  const [bankName, setBankName] = useState("HDFC Bank");
  const [accountNumber, setAccountNumber] = useState("4892");
  const [ifscCode, setIfscCode] = useState("HDFC0001234");
  const [upiHandle, setUpiHandle] = useState("bandraorganic@hdfcbank");

  const handleApplyToAllDays = () => {
    const mondayTimes = schedule[0];
    setSchedule(
      schedule.map((item) => ({
        ...item,
        isOpen: mondayTimes.isOpen,
        openTime: mondayTimes.openTime,
        closeTime: mondayTimes.closeTime,
      })),
    );
  };

  const handleToggleDay = (index: number) => {
    setSchedule((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, isOpen: !item.isOpen } : item,
      ),
    );
  };

  const handleTimeChange = (
    index: number,
    field: "openTime" | "closeTime",
    value: string,
  ) => {
    setSchedule((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item)),
    );
  };

  return (
    <div className="space-y-8 pb-20 p-6">
      <div
        className="relative w-full rounded-2xl overflow-hidden shadow-xs border"
        style={{
          backgroundColor: "var(--color-surface-low)",
          borderColor: "var(--color-border)",
        }}
      >
        {/* Banner Cover Image */}
        <div className="w-full h-72 relative bg-gray-200">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlE_h8QTZqLeUfSEWOPdYlcT-CSXrb9mEnAB3lqnEK1f_Jd2_BRWCrughUhgYbWOe1suJ5zrQurS8uSesu59WdErliL644eTZyvTOS47rUFDrM_Gdr5MbbM5x931ixTpVBuYCxRQxShkNnos_GQcUgYePGiAMAsqRT3ZK5puIWguNxpb3-Eh6SFj0d4PZeEmjNbEhb4OO9D12v2HqSC04OJ9AC5Akqay8G4XOJzSM"
            alt="Organic Farm Banner"
            fill
            unoptimized
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute top-4 right-4 z-10">
            <button className="px-4 py-2 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-gray-900 shadow-md flex items-center gap-2 transition-all hover:bg-white cursor-pointer">
              <FiEdit className="text-emerald-600 text-sm" />
              <span>Change Banner</span>
            </button>
          </div>
        </div>

        {/* Logo Emblem & Hub Title Info */}
        <div className="px-6 sm:px-8 pb-6 pt-0 relative flex flex-col md:flex-row md:items-end justify-between -mt-16 gap-6">
          <div className="flex items-end gap-5">
            <div
              className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-xl p-1 shrink-0 border-2"
              style={{
                backgroundColor: "var(--color-surface-low)",
                borderColor: "var(--color-border)",
              }}
            >
              <div className="w-full h-full rounded-xl relative overflow-hidden bg-gray-100">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHHwZ-hpCq0kImFI0wSKKUee2-FUyvDKhI5H6b7uLR3oRqRB_JKNrOU6ccofUQiQ7AcibEy4h48YE1SISlk-eODwLbH_CdsjdDZhwNN0lR8ZWee3EvoWrY7ouflP2Fnr5NIoCKdF9g3fi3arNhubaGR8-G13kNuRwdvT8Cqk2-Gl4K15cK3_EScohvxSTNFWPMOc4JCGoaA3BLuHbaUD4jff-78meAGQD3FKksIQQ"
                  alt="Hub Logo"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <button className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center text-white cursor-pointer">
                <FiCamera className="text-2xl" />
              </button>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold shadow-2xs"
                  style={{
                    backgroundColor: "var(--color-primary-container)",
                    color: "var(--color-on-primary-container)",
                  }}
                >
                  Verified Organic Partner
                </span>
                <span
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-bold border flex items-center gap-1 shadow-2xs"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-main)",
                  }}
                >
                  <FiStar className="text-amber-500 text-xs" /> 4.9 (340
                  reviews)
                </span>
              </div>
              <h1
                className="text-xl sm:text-2xl font-black tracking-tight"
                style={{ color: "var(--color-text-main)" }}
              >
                Bandra Organic Hub
              </h1>
              <p
                className="text-xs sm:text-sm"
                style={{ color: "var(--color-text-muted)" }}
              >
                Pali Hill, Bandra West, Mumbai • Farm to table essentials
              </p>
            </div>
          </div>

          {/* Holiday Mode Toggle Box */}
          <div className="flex items-center gap-4">
            <div
              className="px-5 py-3 rounded-2xl flex items-center gap-4 shadow-xs border"
              style={{
                backgroundColor: "var(--color-surface-container)",
                borderColor: "var(--color-border)",
              }}
            >
              <div>
                <span
                  className="block text-[10px] font-bold uppercase tracking-wider"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Holiday Mode
                </span>
                <span
                  className="block text-xs font-bold"
                  style={{
                    color: holidayMode ? "#f59e0b" : "var(--color-primary)",
                  }}
                >
                  {holidayMode ? "Paused (On Vacation)" : "Accepting Orders"}
                </span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={holidayMode}
                  onChange={(e) => setHolidayMode(e.target.checked)}
                  className="sr-only peer"
                />
                <div
                  className="w-11 h-6 rounded-full peer peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all shadow-inner"
                  style={{
                    backgroundColor: holidayMode
                      ? "#f59e0b"
                      : "var(--color-primary)",
                  }}
                ></div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN SETTINGS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN: Operating Hours & Logistics Radius (2 cols) */}
        <div className="flex flex-col gap-8 lg:col-span-2">
          {/* Operating Timings Picker */}
          <div
            className="rounded-2xl p-6 shadow-xs border space-y-6"
            style={{
              backgroundColor: "var(--color-surface-low)",
              borderColor: "var(--color-border)",
            }}
          >
            <div
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div>
                <h2
                  className="text-lg font-bold"
                  style={{ color: "var(--color-text-main)" }}
                >
                  Operating Timings
                </h2>
                <p
                  className="text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Set your daily store hours for customer orders and pickups.
                </p>
              </div>
              <button
                type="button"
                onClick={handleApplyToAllDays}
                className="px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-2xs transition-all hover:opacity-90 cursor-pointer self-start sm:self-auto"
                style={{
                  backgroundColor: "var(--color-primary-container)",
                  color: "var(--color-on-primary-container)",
                }}
              >
                <FiClock className="text-sm" /> Apply Monday to All
              </button>
            </div>

            <div className="space-y-3">
              {schedule.map((dayItem, idx) => (
                <div
                  key={dayItem.day}
                  className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-3.5 rounded-xl border gap-3 transition-opacity ${
                    !dayItem.isOpen ? "opacity-60" : ""
                  }`}
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div className="flex items-center gap-3 w-36">
                    <input
                      type="checkbox"
                      checked={dayItem.isOpen}
                      onChange={() => handleToggleDay(idx)}
                      className="w-4 h-4 rounded cursor-pointer accent-[var(--color-primary)]"
                    />
                    <span
                      className="text-xs font-bold"
                      style={{ color: "var(--color-text-main)" }}
                    >
                      {dayItem.day}
                    </span>
                  </div>

                  {dayItem.isOpen ? (
                    <div className="flex items-center gap-3">
                      <input
                        type="time"
                        value={dayItem.openTime}
                        onChange={(e) =>
                          handleTimeChange(idx, "openTime", e.target.value)
                        }
                        className="px-3 py-1.5 rounded-lg text-xs font-bold border outline-none shadow-2xs cursor-pointer"
                        style={{
                          backgroundColor: "var(--color-surface-low)",
                          borderColor: "var(--color-border)",
                          color: "var(--color-text-main)",
                        }}
                      />
                      <span
                        className="text-xs font-semibold"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        to
                      </span>
                      <input
                        type="time"
                        value={dayItem.closeTime}
                        onChange={(e) =>
                          handleTimeChange(idx, "closeTime", e.target.value)
                        }
                        className="px-3 py-1.5 rounded-lg text-xs font-bold border outline-none shadow-2xs cursor-pointer"
                        style={{
                          backgroundColor: "var(--color-surface-low)",
                          borderColor: "var(--color-border)",
                          color: "var(--color-text-main)",
                        }}
                      />
                    </div>
                  ) : (
                    <span
                      className="text-xs italic font-medium"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Store Closed All Day
                    </span>
                  )}

                  <span
                    className={`px-3 py-0.5 rounded-full text-[10px] font-extrabold ${
                      dayItem.isOpen
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {dayItem.isOpen ? "Open" : "Closed"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Radius Slider & Interactive Map Banner */}
          <div
            className="rounded-2xl p-6 shadow-xs border space-y-6"
            style={{
              backgroundColor: "var(--color-surface-low)",
              borderColor: "var(--color-border)",
            }}
          >
            <div
              className="flex items-center justify-between pb-3 border-b"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div>
                <h2
                  className="text-lg font-bold"
                  style={{ color: "var(--color-text-main)" }}
                >
                  Delivery Radius & Logistics
                </h2>
                <p
                  className="text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Define how far your organic deliveries can reach from your
                  hub.
                </p>
              </div>
              <span
                className="text-base font-black px-4 py-1 rounded-xl shadow-2xs"
                style={{
                  backgroundColor: "var(--color-primary-container)",
                  color: "var(--color-on-primary-container)",
                }}
              >
                {deliveryRadius} km
              </span>
            </div>

            <div
              className="p-5 rounded-xl border space-y-3"
              style={{
                backgroundColor: "var(--color-surface-container)",
                borderColor: "var(--color-border)",
              }}
            >
              <input
                type="range"
                min="1"
                max="30"
                value={deliveryRadius}
                onChange={(e) => setDeliveryRadius(Number(e.target.value))}
                className="w-full h-2 rounded-lg cursor-pointer accent-[var(--color-primary)]"
              />
              <div
                className="flex justify-between text-[11px] font-semibold"
                style={{ color: "var(--color-text-muted)" }}
              >
                <span>1 km (Local neighborhood)</span>
                <span>15 km (Citywide)</span>
                <span>30 km (Extended zone)</span>
              </div>
            </div>

            {/* Map Preview Graphic */}
            <div className="w-full h-60 rounded-2xl relative overflow-hidden border shadow-inner bg-emerald-950 flex flex-col justify-end p-4">
              <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
              <div className="relative z-10 flex items-center justify-between bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-md">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-900">
                    Hub Center: Pali Hill, Bandra West, Mumbai
                  </span>
                </div>
                <span className="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full">
                  Active Radius: {deliveryRadius}km
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Bank Details & Organic Compliance (1 col) */}
        <div className="flex flex-col gap-8">
          {/* Bank Account Form Card */}
          <div
            className="rounded-2xl p-6 shadow-xs border space-y-5"
            style={{
              backgroundColor: "var(--color-surface-low)",
              borderColor: "var(--color-border)",
            }}
          >
            <div>
              <h2
                className="text-lg font-bold"
                style={{ color: "var(--color-text-main)" }}
              >
                Bank Account Details
              </h2>
              <p
                className="text-xs mt-0.5"
                style={{ color: "var(--color-text-muted)" }}
              >
                Payouts for daily order settlements are deposited here.
              </p>
            </div>

            <form className="space-y-3 text-xs">
              <div>
                <label
                  className="block font-bold mb-1"
                  style={{ color: "var(--color-text-main)" }}
                >
                  Account Holder Name
                </label>
                <input
                  type="text"
                  value={accountHolder}
                  onChange={(e) => setAccountHolder(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border outline-none font-semibold"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-main)",
                  }}
                />
              </div>

              <div>
                <label
                  className="block font-bold mb-1"
                  style={{ color: "var(--color-text-main)" }}
                >
                  Bank Name
                </label>
                <input
                  type="text"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border outline-none font-semibold"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-main)",
                  }}
                />
              </div>

              <div>
                <label
                  className="block font-bold mb-1"
                  style={{ color: "var(--color-text-main)" }}
                >
                  Account Number
                </label>
                <input
                  type="password"
                  value={`••••••••••••${accountNumber}`}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border outline-none font-semibold"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-main)",
                  }}
                />
              </div>

              <div>
                <label
                  className="block font-bold mb-1"
                  style={{ color: "var(--color-text-main)" }}
                >
                  IFSC Code
                </label>
                <input
                  type="text"
                  value={ifscCode}
                  onChange={(e) => setIfscCode(e.target.value.toUpperCase())}
                  className="w-full px-3.5 py-2.5 rounded-xl border outline-none font-semibold uppercase"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-main)",
                  }}
                />
              </div>

              <div>
                <label
                  className="block font-bold mb-1"
                  style={{ color: "var(--color-text-main)" }}
                >
                  UPI Handle for Instant Payouts
                </label>
                <input
                  type="text"
                  value={upiHandle}
                  onChange={(e) => setUpiHandle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border outline-none font-semibold"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-main)",
                  }}
                />
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => alert("Bank Account Details Saved Securely!")}
                  className="w-full py-3 rounded-xl font-bold text-xs shadow-xs flex items-center justify-center gap-2 cursor-pointer transition-all hover:opacity-90"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    color: "var(--color-text-inverse)",
                  }}
                >
                  <FiLock className="text-sm" />
                  Save Bank Details Securely
                </button>
              </div>
            </form>
          </div>

          {/* Compliance & Quality Guarantee Card */}
          <div
            className="rounded-2xl p-6 shadow-md relative overflow-hidden"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-text-inverse)",
            }}
          >
            <div className="relative z-10 space-y-3">
              <FiCheckCircle className="text-3xl text-emerald-300" />
              <h3 className="text-base font-bold">
                Freshness Guarantee Active
              </h3>
              <p className="text-xs leading-relaxed opacity-90">
                Your store profile strictly adheres to FreshMart Organic
                Standards. All produce items undergo daily farm freshness
                audits.
              </p>

              <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl flex items-center justify-between border border-white/20">
                <span className="text-xs font-bold">Compliance Score</span>
                <span className="text-lg font-black text-emerald-300">
                  99.8%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. STICKY BOTTOM SAVE ACTION BAR */}
      <div
        className="fixed bottom-4 left-4 lg:left-72 right-4 z-30 p-4 rounded-2xl shadow-xl border backdrop-blur-xl flex items-center justify-between gap-4"
        style={{
          backgroundColor: "var(--color-surface-low)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="flex items-center gap-2 hidden sm:flex">
          <FiInfo className="text-lg text-emerald-600 shrink-0" />
          <span
            className="text-xs font-semibold"
            style={{ color: "var(--color-text-muted)" }}
          >
            Changes will reflect instantly on the consumer mobile app.
          </span>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <button
            type="button"
            className="px-5 py-2.5 rounded-xl text-xs font-bold border transition-colors hover:bg-[var(--color-surface-container)] cursor-pointer"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-text-main)",
            }}
          >
            Discard
          </button>
          <button
            type="button"
            onClick={() => alert("Shop Profile Saved Successfully!")}
            className="px-6 py-2.5 rounded-xl text-xs font-bold shadow-md flex items-center gap-2 transition-all hover:opacity-90 cursor-pointer"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-text-inverse)",
            }}
          >
            <FiSave className="text-base" />
            <span>Save Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopProfile;
