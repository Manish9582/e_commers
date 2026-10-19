import React from "react";
import {
  FiShield,
  FiLock,
  FiFileText,
  FiUserCheck,
  FiMail,
} from "react-icons/fi";

const PrivacyPolicy = () => {
  return (
    <div
      className="max-w-4xl mx-auto px-6 py-12 w-full"
      style={{
        backgroundColor: "var(--color-surface-base)",
        color: "var(--color-text-body)",
      }}
    >
      {/* Page Header */}
      <div
        className="mb-10 text-center md:text-left border-b pb-8"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold mb-3"
          style={{
            backgroundColor: "var(--color-primary-container)",
            color: "var(--color-on-primary-container)",
          }}
        >
          <FiShield /> FreshMart Legal & Safety
        </div>
        <h1
          className="text-3xl lg:text-4xl font-extrabold mb-2"
          style={{ color: "var(--color-text-main)" }}
        >
          Privacy Policy
        </h1>
        <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
          Last Updated: October 19, 2026 • Effective for all FreshMart users and
          partner hubs.
        </p>
      </div>

      {/* Content Sections */}
      <div className="flex flex-col gap-8 text-sm leading-relaxed">
        {/* Section 1 */}
        <section
          className="p-6 rounded-2xl border shadow-sm"
          style={{
            backgroundColor: "var(--color-surface-low)",
            borderColor: "var(--color-border-subtle)",
          }}
        >
          <div className="flex items-center gap-2.5 mb-3">
            <FiLock
              className="text-xl"
              style={{ color: "var(--color-primary)" }}
            />
            <h2
              className="text-lg font-bold"
              style={{ color: "var(--color-text-main)" }}
            >
              1. Information We Collect
            </h2>
          </div>
          <p className="mb-3" style={{ color: "var(--color-text-body)" }}>
            To fulfill your fresh grocery orders and ensure hyper-local delivery
            from partner hubs, FreshMart collects necessary personal details
            including:
          </p>
          <ul
            className="list-disc pl-5 flex flex-col gap-1.5"
            style={{ color: "var(--color-text-muted)" }}
          >
            <li>
              Contact Information: Full name, phone number, and email address.
            </li>
            <li>
              Delivery Details: Saved home/office addresses and delivery
              preferences.
            </li>
            <li>
              Transaction History: Past order items, payment modes, and applied
              coupons.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section
          className="p-6 rounded-2xl border shadow-sm"
          style={{
            backgroundColor: "var(--color-surface-low)",
            borderColor: "var(--color-border-subtle)",
          }}
        >
          <div className="flex items-center gap-2.5 mb-3">
            <FiFileText
              className="text-xl"
              style={{ color: "var(--color-primary)" }}
            />
            <h2
              className="text-lg font-bold"
              style={{ color: "var(--color-text-main)" }}
            >
              2. How We Use Your Data
            </h2>
          </div>
          <p className="mb-3" style={{ color: "var(--color-text-body)" }}>
            Your information is strictly utilized to provide an exceptional
            farm-to-table experience:
          </p>
          <ul
            className="list-disc pl-5 flex flex-col gap-1.5"
            style={{ color: "var(--color-text-muted)" }}
          >
            <li>Processing orders and assigning local delivery partners.</li>
            <li>
              Sending live WhatsApp/SMS delivery notifications and arrival
              updates.
            </li>
            <li>
              Optimizing demand forecasting for local farmer collectives to
              minimize produce waste.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section
          className="p-6 rounded-2xl border shadow-sm"
          style={{
            backgroundColor: "var(--color-surface-low)",
            borderColor: "var(--color-border-subtle)",
          }}
        >
          <div className="flex items-center gap-2.5 mb-3">
            <FiUserCheck
              className="text-xl"
              style={{ color: "var(--color-primary)" }}
            />
            <h2
              className="text-lg font-bold"
              style={{ color: "var(--color-text-main)" }}
            >
              3. Data Protection & Sharing
            </h2>
          </div>
          <p style={{ color: "var(--color-text-body)" }}>
            FreshMart never sells or leases your personal data to third-party
            advertisers. Information is only shared with verified delivery
            partners (solely for address navigation) and secure PCI-DSS
            compliant payment gateways.
          </p>
        </section>

        {/* Section 4: Contact Us */}
        <section
          className="p-6 rounded-2xl border shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{
            backgroundColor: "var(--color-surface-container)",
            borderColor: "var(--color-border)",
          }}
        >
          <div>
            <h3
              className="text-base font-bold"
              style={{ color: "var(--color-text-main)" }}
            >
              Questions about our Privacy Policy?
            </h3>
            <p
              className="text-xs mt-0.5"
              style={{ color: "var(--color-text-muted)" }}
            >
              Reach out to our Data Protection Team at Bandra Organic Hub.
            </p>
          </div>
          <a
            href="mailto:privacy@freshmart.com"
            className="px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 shadow-sm transition-all hover:opacity-90"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-text-inverse)",
            }}
          >
            <FiMail /> Contact Legal Team
          </a>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
