"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
  FiPhoneCall,
  FiMapPin,
} from "react-icons/fi";

const CATEGORY_LINKS = [
  { label: "Organic Vegetables", href: "/category/organic-vegetables" },
  { label: "Fresh Fruits", href: "/category/fresh-fruits" },
  { label: "Ready-Made Cut Foods", href: "/category/readymade-cut-foods" },
  { label: "Hydroponic Greens", href: "/category/hydroponic" },
  { label: "Seasonal Farm Specials", href: "/category/specials" },
];

const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Partner Hubs", href: "/hubs" },
  { label: "My Orders", href: "/order" },
  { label: "Track Live Order", href: "/order-status" },
  { label: "Support & FAQs", href: "/support" },
];

const LEGAL_LINKS = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Refund Policy", href: "/refunds" },
];

const Footer = () => {
  return (
    <footer
      className="w-full border-t"
      style={{
        backgroundColor: "var(--color-surface-low)",
        borderColor: "var(--color-border-subtle)",
        color: "var(--color-text-body)",
      }}
    >
      <div className="px-6 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image
                alt="FreshMart Logo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnOxcjQSM_s_wRNCXV5LPyozj5mWD8gineKRomApMYTM2rcBkn5fGyUpuyRlinoKgNKcCNc2a60myDKRTMLdd11bNWwC7Xja4y0JK5_vsrVNIeuFois0qT9lt5k87mSrsgv-XtrgX_k2RhNoCsT0bhEpbmOS9e-pR9vwggfZ9lJELUDNe3uchqigRoL71idqw3n4riqHhyH7VK0Zw_PURUZ9JXZDpgZepayyQCNIs"
                width={150}
                height={40}
                className="h-8 w-auto object-contain"
              />
              <span
                className="text-2xl font-black tracking-tight"
                style={{ color: "var(--color-text-main)" }}
              >
                FreshMart
              </span>
            </div>

            <p
              className="text-xs sm:text-sm leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              Your daily dose of farm-fresh produce and ready-to-cut greens
              delivered straight to your door with sustainable care.
            </p>

            {/* Contact Information */}
            <div
              className="flex flex-col gap-2 pt-2 text-xs font-medium"
              style={{ color: "var(--color-text-main)" }}
            >
              <div className="flex items-center gap-2">
                <FiMapPin style={{ color: "var(--color-primary)" }} />
                <span>Bandra Organic Hub • Pali Hill, Mumbai</span>
              </div>
              <div className="flex items-center gap-2">
                <FiPhoneCall style={{ color: "var(--color-primary)" }} />
                <span>Toll-Free Support: +91 1800 266 9000</span>
              </div>
            </div>
          </div>

          {/* Column 2: Categories */}
          <div>
            <h4
              className="text-sm font-bold uppercase tracking-wider mb-4"
              style={{ color: "var(--color-text-main)" }}
            >
              Top Categories
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm">
              {CATEGORY_LINKS.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:underline"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4
              className="text-sm font-bold uppercase tracking-wider mb-4"
              style={{ color: "var(--color-text-main)" }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm">
              {QUICK_LINKS.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:underline"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Connections */}
          <div>
            <h4
              className="text-sm font-bold uppercase tracking-wider mb-4"
              style={{ color: "var(--color-text-main)" }}
            >
              Connect With Us
            </h4>
            <p
              className="text-xs mb-4 leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              Follow our farming stories, local farmer spotlights, and daily
              seasonal recipes.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all border shadow-sm hover:scale-105"
                style={{
                  backgroundColor: "var(--color-surface-container)",
                  borderColor: "var(--color-border)",
                  color: "var(--color-primary)",
                }}
                title="Facebook"
              >
                <FiFacebook className="text-base" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all border shadow-sm hover:scale-105"
                style={{
                  backgroundColor: "var(--color-surface-container)",
                  borderColor: "var(--color-border)",
                  color: "var(--color-primary)",
                }}
                title="Instagram"
              >
                <FiInstagram className="text-base" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all border shadow-sm hover:scale-105"
                style={{
                  backgroundColor: "var(--color-surface-container)",
                  borderColor: "var(--color-border)",
                  color: "var(--color-primary)",
                }}
                title="Twitter"
              >
                <FiTwitter className="text-base" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all border shadow-sm hover:scale-105"
                style={{
                  backgroundColor: "var(--color-surface-container)",
                  borderColor: "var(--color-border)",
                  color: "var(--color-primary)",
                }}
                title="YouTube"
              >
                <FiYoutube className="text-base" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="border-t py-6 px-6 lg:px-12 text-xs"
        style={{
          borderColor: "var(--color-border)",
          color: "var(--color-text-muted)",
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} FreshMart Technologies Inc. Founders:
            Manish, Roshan, & Vivek. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 font-semibold">
            {LEGAL_LINKS.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="hover:underline transition-colors"
                style={{ color: "var(--color-text-main)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
