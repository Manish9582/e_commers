import React from "react";
import {
  FiPhoneCall,
  FiMail,
  FiTruck,
  FiRefreshCw,
  FiShield,
  FiSearch,
  FiSend,
  FiHelpCircle,
} from "react-icons/fi";
import { MdOutlineGrass, MdVerified } from "react-icons/md";

// Popular FAQ Data
const FAQS = [
  {
    icon: <FiTruck className="text-xl text-[var(--color-primary)]" />,
    question: "How fast is FreshMart delivery?",
    answer:
      "Most orders from partner hubs like Bandra Organic Hub are delivered within 25–35 minutes using cold-chain transit.",
  },
  {
    icon: <FiRefreshCw className="text-xl text-[var(--color-primary)]" />,
    question: "What if my fresh produce arrives damaged?",
    answer:
      "We offer a 100% replacement or instant wallet refund guarantee. Simply submit a support ticket below within 24 hours of delivery.",
  },
  {
    icon: <MdOutlineGrass className="text-xl text-[var(--color-primary)]" />,
    question: "Are all products 100% certified organic?",
    answer:
      "Yes! All fruits, ready-cut greens, and Vedic dairy products are directly sourced from certified organic farmer collectives with zero pesticides.",
  },
  {
    icon: <FiShield className="text-xl text-[var(--color-primary)]" />,
    question: "How does zero-plastic packaging work?",
    answer:
      "Your harvest is delivered in biodegradable paper totes or returnable insulated glass containers for liquid items like A2 Gir Cow Ghee.",
  },
];

// Direct Care Contact Channels
const CONTACT_CHANNELS = [
  {
    icon: <FiPhoneCall className="text-2xl text-[var(--color-primary)]" />,
    title: "Toll-Free Support",
    detail: "+91 1800 266 9000",
    subtext: "Available daily: 6 AM - 10 PM",
  },
  {
    icon: <FiMail className="text-2xl text-[var(--color-primary)]" />,
    title: "Direct Email Care",
    detail: "support@freshmart.com",
    subtext: "Guaranteed response within 2 hours",
  },
  {
    icon: <MdVerified className="text-2xl text-[var(--color-primary)]" />,
    title: "Bandra Partner Hub",
    detail: "Pali Hill, Bandra West",
    subtext: "Local fulfillment center support",
  },
];

const Support = () => {
  return (
    <div
      className="max-w-6xl mx-auto px-6 py-12 w-full"
      style={{
        backgroundColor: "var(--color-surface-base)",
        color: "var(--color-text-body)",
      }}
    >
      {/* Hero Header */}
      <div
        className="p-8 md:p-12 rounded-3xl text-center flex flex-col items-center justify-center gap-4 mb-12 shadow-sm border relative overflow-hidden"
        style={{
          backgroundColor: "var(--color-surface-low)",
          borderColor: "var(--color-border-subtle)",
        }}
      >
        <span
          className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5"
          style={{
            backgroundColor: "var(--color-primary-container)",
            color: "var(--color-on-primary-container)",
          }}
        >
          <FiHelpCircle className="text-sm" /> 24/7 Customer Care
        </span>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold max-w-2xl leading-tight"
          style={{ color: "var(--color-text-main)" }}
        >
          How Can We Help Your{" "}
          <span style={{ color: "var(--color-primary)" }}>
            Harvest Experience?
          </span>
        </h1>

        <p
          className="text-xs sm:text-sm max-w-lg mb-2"
          style={{ color: "var(--color-text-muted)" }}
        >
          Have questions about your order, quality verification, or organic
          delivery? Send us a message or browse our popular help topics below.
        </p>

        {/* Decorative Search Display */}
        <div className="relative w-full max-w-lg">
          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-lg"
            style={{ color: "var(--color-text-muted)" }}
          />
          <input
            type="text"
            readOnly
            placeholder="Search help topics (e.g. refund, delivery time, organic certification)..."
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl text-xs sm:text-sm border focus:outline-none shadow-sm"
            style={{
              backgroundColor: "var(--color-surface-container)",
              borderColor: "var(--color-border)",
              color: "var(--color-text-main)",
            }}
          />
        </div>
      </div>

      {/* Direct Contact Channels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {CONTACT_CHANNELS.map((channel, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl border shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md"
            style={{
              backgroundColor: "var(--color-surface-low)",
              borderColor: "var(--color-border-subtle)",
            }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-inner"
              style={{ backgroundColor: "var(--color-surface-container)" }}
            >
              {channel.icon}
            </div>
            <h3
              className="text-base font-bold mb-1"
              style={{ color: "var(--color-text-main)" }}
            >
              {channel.title}
            </h3>
            <p
              className="text-sm font-extrabold mb-1"
              style={{ color: "var(--color-primary)" }}
            >
              {channel.detail}
            </p>
            <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
              {channel.subtext}
            </p>
          </div>
        ))}
      </div>

      {/* Main Support Form & FAQ Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
        {/* Presentational Support Inquiry Form */}
        <div
          className="lg:col-span-7 p-8 rounded-3xl border shadow-sm"
          style={{
            backgroundColor: "var(--color-surface-low)",
            borderColor: "var(--color-border-subtle)",
          }}
        >
          <div className="mb-6">
            <h2
              className="text-2xl font-bold mb-1"
              style={{ color: "var(--color-text-main)" }}
            >
              Send Us a Support Message
            </h2>
            <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
              Fill out the form below and our Bandra Care team will respond
              promptly.
            </p>
          </div>

          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="text-xs font-semibold block mb-1"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  readOnly
                  placeholder="e.g. Ananya Sharma"
                  className="w-full p-3 rounded-xl text-xs sm:text-sm border focus:outline-none"
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
                  Email Address *
                </label>
                <input
                  type="email"
                  readOnly
                  placeholder="ananya@example.com"
                  className="w-full p-3 rounded-xl text-xs sm:text-sm border focus:outline-none"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-main)",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="text-xs font-semibold block mb-1"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Order ID (Optional)
                </label>
                <input
                  type="text"
                  readOnly
                  placeholder="e.g. FM-97104"
                  className="w-full p-3 rounded-xl text-xs sm:text-sm border focus:outline-none font-mono uppercase"
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
                  Inquiry Category
                </label>
                <select
                  disabled
                  defaultValue="Delivery Query"
                  className="w-full p-3 rounded-xl text-xs sm:text-sm border focus:outline-none"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-main)",
                  }}
                >
                  <option value="Delivery Query">
                    Delivery Status & Tracking
                  </option>
                  <option value="Quality Issue">
                    Quality or Damaged Goods
                  </option>
                  <option value="Refund & Wallet">
                    Refund & Payment Issues
                  </option>
                  <option value="Organic Certificate">
                    Organic Sourcing Query
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label
                className="text-xs font-semibold block mb-1"
                style={{ color: "var(--color-text-muted)" }}
              >
                Message / Details *
              </label>
              <textarea
                rows={4}
                readOnly
                placeholder="Describe your query or product quality concern in detail..."
                className="w-full p-3 rounded-xl text-xs sm:text-sm border focus:outline-none"
                style={{
                  backgroundColor: "var(--color-surface-container)",
                  borderColor: "var(--color-border)",
                  color: "var(--color-text-main)",
                }}
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-md hover:opacity-90 mt-2"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-text-inverse)",
              }}
            >
              <FiSend className="text-base" />
              <span>Submit Support Ticket</span>
            </button>
          </form>
        </div>

        {/* Side FAQ Column */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="mb-2">
            <h3
              className="text-xl font-bold"
              style={{ color: "var(--color-text-main)" }}
            >
              Popular Help Topics
            </h3>
            <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
              Quick answers to common questions about farm harvests.
            </p>
          </div>

          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border shadow-sm flex items-start gap-3.5"
              style={{
                backgroundColor: "var(--color-surface-low)",
                borderColor: "var(--color-border-subtle)",
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-inner mt-0.5"
                style={{ backgroundColor: "var(--color-surface-container)" }}
              >
                {faq.icon}
              </div>
              <div>
                <h4
                  className="text-xs font-bold mb-1"
                  style={{ color: "var(--color-text-main)" }}
                >
                  {faq.question}
                </h4>
                <p
                  className="text-[11px] leading-relaxed"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
