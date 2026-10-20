"use client";

import React, { useState } from "react";
import { FiBell, FiUser } from "react-icons/fi";

const Header = () => {
  const [holidayMode, setHolidayMode] = useState(false);

  return (
    <header
      className="py-3 backdrop-blur-xl border-b shadow-xs z-40 flex items-center justify-between px-6 transition-all"
      style={{
        backgroundColor: "var(--color-surface-base)",
        borderColor: "var(--color-border-subtle)",
        color: "var(--color-text-body)",
      }}
    >
      {/* Left: Hub Name Title */}
      <div className="flex items-center gap-3 ml-12 lg:ml-0">
        <h1
          className="text-base sm:text-lg font-bold tracking-tight"
          style={{ color: "var(--color-text-main)" }}
        >
          Bandra Organic Hub
        </h1>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        <div className="relative cursor-pointer p-2 rounded-xl transition-colors hover:bg-[var(--color-surface-low)]">
          <FiBell
            className="text-lg"
            style={{ color: "var(--color-text-main)" }}
          />
          <span
            className="absolute top-1 right-1 w-4 h-4 text-[10px] font-extrabold rounded-full flex items-center justify-center shadow-2xs"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-text-inverse)",
            }}
          >
            3
          </span>
        </div>

        {/* Admin Profile Avatar */}
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer shadow-xs transition-transform hover:scale-105"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "var(--color-text-inverse)",
          }}
          title="Hub Manager Account"
        >
          <FiUser className="text-sm" />
        </div>
      </div>
    </header>
  );
};

export default Header;
