import React from "react";
import {
  FiFileText,
  FiShield,
  FiCheckCircle,
  FiAlertCircle,
  FiHelpCircle,
  FiMail,
} from "react-icons/fi";

const TERMS_SECTIONS = [
  {
    icon: <FiFileText className="text-xl text-[var(--color-primary)]" />,
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using the FreshMart application, purchasing fresh produce, or subscribing to our harvest delivery services, you agree to be bound by these Terms and Conditions and our Privacy Policy.",
  },
  {
    icon: <FiCheckCircle className="text-xl text-[var(--color-primary)]" />,
    title: "2. Product Freshness & Availability",
    content:
      "All farm produce, ready-to-cut greens, and organic dairy products are subject to seasonal availability. FreshMart guarantees 100% organic certification and zero pesticide contamination across all partner hubs.",
  },
  {
    icon: <FiAlertCircle className="text-xl text-[var(--color-primary)]" />,
    title: "3. Order Cancellations & Refunds",
    content:
      "Orders can be canceled free of charge before the harvest items leave the local partner hub. Quality claims regarding perishable items must be submitted within 24 hours of delivery for instant wallet refunds.",
  },
  {
    icon: <FiShield className="text-xl text-[var(--color-primary)]" />,
    title: "4. Delivery & Zero-Plastic Policy",
    content:
      "FreshMart delivers via eco-friendly paper packaging and reusable containers. Delivery timelines (sub-30 minute hyper-local delivery) may vary slightly during severe weather or extreme traffic conditions.",
  },
];

const TermsAndConditions = () => {
  return (
    <div
      className="max-w-5xl mx-auto px-6 py-12 w-full"
      style={{
        backgroundColor: "var(--color-surface-base)",
        color: "var(--color-text-body)",
      }}
    >
      {/* Header */}
      <div
        className="text-center max-w-3xl mx-auto mb-12 border-b pb-8"
        style={{ borderColor: "var(--color-border)" }}
      >
        <span
          className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block"
          style={{
            backgroundColor: "var(--color-primary-container)",
            color: "var(--color-on-primary-container)",
          }}
        >
          Legal & Service Agreement
        </span>
        <h1
          className="text-3xl sm:text-4xl font-extrabold mb-3"
          style={{ color: "var(--color-text-main)" }}
        >
          Terms & Conditions
        </h1>
        <p
          className="text-xs sm:text-sm"
          style={{ color: "var(--color-text-muted)" }}
        >
          Last updated: October 19, 2026 • Effective for all FreshMart orders,
          partner hubs, and user accounts.
        </p>
      </div>

      {/* Terms Sections */}
      <div className="grid grid-cols-1 gap-6 mb-12">
        {TERMS_SECTIONS.map((section, idx) => (
          <div
            key={idx}
            className="p-6 md:p-8 rounded-3xl border shadow-sm transition-all hover:shadow-md"
            style={{
              backgroundColor: "var(--color-surface-low)",
              borderColor: "var(--color-border-subtle)",
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-inner"
                style={{ backgroundColor: "var(--color-surface-container)" }}
              >
                {section.icon}
              </div>
              <h2
                className="text-lg font-bold"
                style={{ color: "var(--color-text-main)" }}
              >
                {section.title}
              </h2>
            </div>
            <p
              className="text-xs sm:text-sm leading-relaxed pl-0 md:pl-13"
              style={{ color: "var(--color-text-muted)" }}
            >
              {section.content}
            </p>
          </div>
        ))}
      </div>

      {/* Footer Support Callout */}
      <div
        className="p-6 md:p-8 rounded-3xl border shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{
          backgroundColor: "var(--color-surface-container)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="flex items-center gap-3 text-center sm:text-left">
          <FiHelpCircle
            className="text-3xl shrink-0"
            style={{ color: "var(--color-primary)" }}
          />
          <div>
            <h3
              className="text-base font-bold"
              style={{ color: "var(--color-text-main)" }}
            >
              Have questions about our Terms?
            </h3>
            <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
              Our compliance team is here to assist you with any legal queries.
            </p>
          </div>
        </div>

        <a
          href="mailto:legal@freshmart.com"
          className="px-5 py-3 rounded-xl text-xs font-semibold flex items-center gap-2 shadow-md transition-all hover:opacity-90"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "var(--color-text-inverse)",
          }}
        >
          <FiMail /> Contact Legal Team
        </a>
      </div>
    </div>
  );
};

export default TermsAndConditions;
