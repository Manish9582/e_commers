"use client";
import Image from "next/image";
import Link from "next/link";

const QUICK_LINKS = [
  { label: "About Us", href: "/about", path: "about" },
  { label: "Our Farmers", href: "/farmers", path: "farmers" },
  { label: "Sustainability", href: "/sustainability", path: "sustainability" },
  { label: "Privacy Policy", href: "/privacy", path: "privacy" },
];

const CATEGORY_LINKS = [
  {
    label: "Organic Vegetables",
    href: "/category/organic-vegetables",
    path: "organic-vegetables",
  },
  {
    label: "Fresh Fruits",
    href: "/category/fresh-fruits",
    path: "fresh-fruits",
  },
  {
    label: "Ready-Made Cut Foods",
    href: "/category/readymade-cut-foods",
    path: "readymade-cut-foods",
  },
];

const SUPPORT_LINKS = [
  { label: "Contact Us", href: "/support" },
  { label: "Frequently Asked Questions", href: "/faq" },
  { label: "Delivery & Shipping", href: "/shipping-policy" },
];

const LEGAL_LINKS = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Security", href: "/security" },
  { label: "Policy", href: "/policy" },
];

const Footer = () => {
  return (
    <footer className="max-w-8xl mx-auto px-4 lg:px-12 py-6 md:py-8">
      <div className=" mx-auto px-gutter grid grid-cols-1 md:grid-cols-4 gap-space-xl mb-space-xl">
        <div>
          <div className="flex items-center gap-space-sm mb-space-md">
            <Image
              alt="FreshMart Logo"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnOxcjQSM_s_wRNCXV5LPyozj5mWD8gineKRomApMYTM2rcBkn5fGyUpuyRlinoKgNKcCNc2a60myDKRTMLdd11bNWwC7Xja4y0JK5_vsrVNIeuFois0qT9lt5k87mSrsgv-XtrgX_k2RhNoCsT0bhEpbmOS9e-pR9vwggfZ9lJELUDNe3uchqigRoL71idqw3n4riqHhyH7VK0Zw_PURUZ9JXZDpgZepayyQCNIs"
              width={150}
              height={40}
              className="h-6 w-auto object-contain"
            />
            <span className="font-headline-sm text-on-surface">FreshMart</span>
          </div>
          <p className="text-body-sm text-on-surface-variant mb-space-md">
            Your daily dose of farm-fresh goodness, delivered straight to your
            doorstep with sustainable care.
          </p>
        </div>

        <div>
          <h4 className="text-title-md font-bold text-on-surface">
            Quick Links
          </h4>
          <ul className="space-y-space-sm text-body-sm text-on-surface-variant">
            {QUICK_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  className="hover:text-primary transition-colors"
                  data-path={link.path}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-title-md font-bold text-on-surface">
            Categories
          </h4>
          <ul className="space-y-space-sm text-body-sm text-on-surface-variant">
            {CATEGORY_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  className="hover:text-primary transition-colors"
                  data-path={link.path}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-space-sm">
          <h3 className="text-title-md font-bold text-on-surface">
            Need Help?
          </h3>

          <p className="text-body-sm text-on-surface-variant">
            We&apos;re here to help you with your orders and fresh grocery
            needs.
          </p>

          {SUPPORT_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-3 pt-1 font-semibold mx-auto px-gutter pt-space-lg border-t border-surface-variant flex flex-col md:flex-row items-center justify-between text-body-sm text-outline">
        <p>
          © {new Date().getFullYear()} FreshMart Technologies Inc. All rights
          reserved.
        </p>
        <div className="flex items-center gap-3 mt-space-sm md:mt-0">
          {LEGAL_LINKS.map((link) => (
            <Link
              key={link.href}
              className="hover:text-on-surface transition-colors"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
